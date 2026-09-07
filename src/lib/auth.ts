import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto';
import { getDb, cfEnv, schema } from './db';

/**
 * Password hashing.
 *
 * Better Auth's DEFAULT hasher uses @noble/hashes/scrypt, a pure-JS
 * implementation costing roughly 80-100ms of CPU per sign-in (better-auth
 * issues #8456 / #8860). Node's native scrypt does the same work in 30-50ms.
 *
 * Both are over the Workers FREE tier's 10ms CPU cap, which is the concrete
 * reason the $5/mo Workers Paid plan is mandatory rather than optional. What
 * the override buys is a ~3x lower CPU bill and headroom under the 30s paid cap.
 *
 * Not bcrypt (native addon, won't build), not argon2 (native/NAPI binary, not
 * available on workerd). Web Crypto PBKDF2 is the only pure-WebCrypto option but
 * is not memory-hard. Native scrypt is the right 2026 answer here.
 */
const N = 16384, r = 8, p = 1, KEYLEN = 64;

function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const dk = scryptSync(password.normalize('NFKC'), salt, KEYLEN, {
    N, r, p, maxmem: 64 * 1024 * 1024,
  });
  return `scrypt$${N}$${r}$${p}$${salt.toString('base64')}$${dk.toString('base64')}`;
}

function verifyPassword(stored: string, password: string): boolean {
  const parts = stored.split('$');
  if (parts.length !== 6 || parts[0] !== 'scrypt') return false;
  const [, sN, sr, sp, saltB64, hashB64] = parts;
  const salt = Buffer.from(saltB64, 'base64');
  const expected = Buffer.from(hashB64, 'base64');
  const dk = scryptSync(password.normalize('NFKC'), salt, expected.length, {
    N: Number(sN), r: Number(sr), p: Number(sp), maxmem: 64 * 1024 * 1024,
  });
  // Constant-time: a plain === leaks timing information about the hash.
  return dk.length === expected.length && timingSafeEqual(dk, expected);
}

/**
 * Built per request, because Cloudflare bindings and secrets only exist on the
 * request's env — there is no module-scope environment on workerd.
 */
export function getAuth(origin?: string) {
  const db = getDb();

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'sqlite',
      schema: {
        user: schema.user,
        session: schema.session,
        account: schema.account,
        verification: schema.verification,
      },
    }),

    secret: cfEnv.BETTER_AUTH_SECRET,
    baseURL: cfEnv.BETTER_AUTH_URL ?? origin,

    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
      password: {
        hash: async (password) => hashPassword(password),
        verify: async ({ hash, password }) => verifyPassword(hash, password),
      },
    },

    /**
     * Sessions in D1, never KV. The Cloudflare adapter would otherwise wire
     * Astro Sessions to a KV namespace capped at 1,000 writes/day on the free
     * plan -- logins would begin failing around 19:00 Ecuador time, the
     * mid-evening study peak. D1 gives 100k writes/day for $0 and, unlike KV,
     * is strongly consistent, so a student in Quito hitting a Bogotá PoP never
     * appears logged out.
     */
    session: {
      expiresIn: 60 * 60 * 24 * 30,
      updateAge: 60 * 60 * 24,
      cookieCache: { enabled: true, maxAge: 60 * 5 },
    },

    user: {
      additionalFields: {
        roles: { type: 'string', defaultValue: 'alumno', input: false },
        telefono: { type: 'string', required: false },
        fechaNacimiento: { type: 'number', required: false },
      },
    },

    advanced: {
      cookiePrefix: 'escuela',
      useSecureCookies: true,
    },
  });
}

export type Auth = ReturnType<typeof getAuth>;

/* -------------------------------------------------------------------------- */
/* Roles                                                                       */
/* -------------------------------------------------------------------------- */

export type Rol = 'alumno' | 'profesor' | 'admin' | 'apoderado';

/**
 * Roles are a comma-separated set, not a single value: a teacher may legitimately
 * also take a course, and an admin is usually also a teacher here.
 */
export function tieneRol(roles: string | null | undefined, rol: Rol): boolean {
  if (!roles) return false;
  return roles.split(',').map((r) => r.trim()).includes(rol);
}

export function esProfesor(roles: string | null | undefined) {
  return tieneRol(roles, 'profesor') || tieneRol(roles, 'admin');
}

export function esAdmin(roles: string | null | undefined) {
  return tieneRol(roles, 'admin');
}
