import { and, eq, isNull, isNotNull, desc } from 'drizzle-orm';
import type { Db } from './db';
import { schema } from './db';
import { esAdmin, esProfesor } from './auth';

/**
 * D1 has NO row-level security. Postgres would let the database refuse a bad
 * read; here nothing does. Every scoped read therefore goes through this file,
 * and the rule is absolute:
 *
 *   NEVER take an id from the client and query it directly.
 *   ALWAYS derive the filter from the authenticated actor.
 *
 * The critics found the first IDOR in this system was a guardian trusting a
 * client-supplied ward id. That class of bug is only prevented by making the
 * safe path the easy path, which is what these helpers are for.
 */

export type Actor = {
  userId: string;
  roles: string;
};

/* -------------------------------------------------------------------------- */
/* Teacher scope                                                               */
/* -------------------------------------------------------------------------- */

/** The teacher row for this actor, or null. Never accepts a profesorId argument. */
export async function perfilProfesor(db: Db, actor: Actor) {
  if (!esProfesor(actor.roles)) return null;
  const rows = await db
    .select()
    .from(schema.profesor)
    .where(eq(schema.profesor.userId, actor.userId))
    .limit(1);
  return rows[0] ?? null;
}

/** Courses owned by this teacher. An admin sees everything. */
export async function cursosDeProfesor(db: Db, actor: Actor) {
  if (esAdmin(actor.roles)) {
    return db.select().from(schema.curso).orderBy(desc(schema.curso.updatedAt));
  }
  const perfil = await perfilProfesor(db, actor);
  if (!perfil) return [];
  return db
    .select()
    .from(schema.curso)
    .where(eq(schema.curso.profesorId, perfil.id))
    .orderBy(desc(schema.curso.updatedAt));
}

/**
 * A single course, ONLY if this actor owns it.
 *
 * Returns null rather than throwing, and callers render a 404 rather than a 403:
 * a 403 confirms the row exists, which leaks the id space to anyone probing.
 */
export async function cursoPropio(db: Db, actor: Actor, cursoId: string) {
  const rows = await db
    .select()
    .from(schema.curso)
    .where(eq(schema.curso.id, cursoId))
    .limit(1);
  const curso = rows[0];
  if (!curso) return null;

  if (esAdmin(actor.roles)) return curso;

  const perfil = await perfilProfesor(db, actor);
  if (!perfil || curso.profesorId !== perfil.id) return null;
  return curso;
}

/** Modules of a course the actor owns. Ownership is re-checked, never assumed. */
export async function modulosDeCurso(db: Db, actor: Actor, cursoId: string) {
  const curso = await cursoPropio(db, actor, cursoId);
  if (!curso) return null;
  return db
    .select()
    .from(schema.modulo)
    .where(eq(schema.modulo.cursoId, cursoId))
    .orderBy(schema.modulo.orden);
}

/** Lessons for one module, ownership resolved through the module's course. */
export async function leccionesDeModulo(db: Db, actor: Actor, moduloId: string) {
  const mods = await db
    .select()
    .from(schema.modulo)
    .where(eq(schema.modulo.id, moduloId))
    .limit(1);
  const mod = mods[0];
  if (!mod) return null;

  const curso = await cursoPropio(db, actor, mod.cursoId);
  if (!curso) return null;

  return db
    .select()
    .from(schema.leccion)
    .where(eq(schema.leccion.moduloId, moduloId))
    .orderBy(schema.leccion.orden);
}

/* -------------------------------------------------------------------------- */
/* Student scope                                                               */
/* -------------------------------------------------------------------------- */

/** Enrolments belonging to this actor. Never takes a studentId from the client. */
export async function matriculasPropias(db: Db, actor: Actor) {
  return db
    .select()
    .from(schema.matricula)
    .where(
      and(
        eq(schema.matricula.estudianteUserId, actor.userId),
        eq(schema.matricula.estado, 'activa'),
      ),
    );
}

/**
 * Wards this guardian may act for.
 *
 * The filters on verifiedAt and revokedAt are the security control, not
 * bookkeeping: without them, anyone could register, assert a ward id and read
 * another child's records. Guardian links must be invite-and-accept, and an
 * unverified or revoked link grants nothing.
 */
export async function pupilos(db: Db, actor: Actor) {
  return db
    .select()
    .from(schema.guardianLink)
    .where(
      and(
        eq(schema.guardianLink.guardianUserId, actor.userId),
        isNotNull(schema.guardianLink.verifiedAt),
        isNull(schema.guardianLink.revokedAt),
      ),
    );
}

/** True only if the actor is the student themselves, a verified guardian, or admin. */
export async function puedeVerEstudiante(db: Db, actor: Actor, estudianteUserId: string) {
  if (actor.userId === estudianteUserId) return true;
  if (esAdmin(actor.roles)) return true;
  const links = await pupilos(db, actor);
  return links.some((l) => l.wardUserId === estudianteUserId);
}

/* -------------------------------------------------------------------------- */
/* Audit                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Append-only. Every destructive or money-touching action writes one of these
 * with a reason, so "who revoked this enrolment in March" is answerable.
 */
export async function registrarAuditoria(
  db: Db,
  actor: Actor | null,
  accion: string,
  entidad: string,
  entidadId?: string,
  motivo?: string,
  metadatos?: unknown,
) {
  await db.insert(schema.auditLog).values({
    id: crypto.randomUUID(),
    actorUserId: actor?.userId ?? null,
    accion,
    entidad,
    entidadId: entidadId ?? null,
    motivo: motivo ?? null,
    metadatos: metadatos ?? null,
  });
}
