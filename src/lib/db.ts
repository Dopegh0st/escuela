import { drizzle } from 'drizzle-orm/d1';
import { env } from 'cloudflare:workers';
import * as schema from '../db/schema';

/**
 * Astro 6 removed `Astro.locals.runtime.env`. Bindings now come from the
 * `cloudflare:workers` module, which resolves per request under the hood, so
 * this import is safe at module scope even though the value is request-bound.
 */
export type Env = {
  DB: D1Database;
  BETTER_AUTH_SECRET?: string;
  BETTER_AUTH_URL?: string;
};

export const cfEnv = env as unknown as Env;

export function getDb() {
  return drizzle(cfEnv.DB, { schema });
}

export type Db = ReturnType<typeof getDb>;
export { schema };
