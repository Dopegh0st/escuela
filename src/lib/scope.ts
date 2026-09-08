import { and, eq, or, inArray, isNull, isNotNull, desc } from 'drizzle-orm';
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

/* -------------------------------------------------------------------------- */
/* Student course access                                                       */
/* -------------------------------------------------------------------------- */

/**
 * A course the actor may actually study, or null.
 *
 * Enrolment is the gate, and it is checked here rather than in each page, so a
 * student cannot reach paid content by guessing a course id. An admin passes;
 * the owning teacher passes so they can preview their own course as a student.
 */
export async function cursoMatriculado(db: Db, actor: Actor, cursoId: string) {
  const rows = await db.select().from(schema.curso)
    .where(eq(schema.curso.id, cursoId)).limit(1);
  const curso = rows[0];
  if (!curso) return null;

  if (esAdmin(actor.roles)) return curso;

  const mat = await db.select().from(schema.matricula).where(and(
    eq(schema.matricula.estudianteUserId, actor.userId),
    eq(schema.matricula.cursoId, cursoId),
    eq(schema.matricula.estado, 'activa'),
  )).limit(1);
  if (mat[0]) return curso;

  // The teacher who owns it may preview their own work.
  const perfil = await perfilProfesor(db, actor);
  if (perfil && curso.profesorId === perfil.id) return curso;

  return null;
}

/** Lesson plus its course, only if the actor is enrolled and the lesson is published. */
export async function leccionAccesible(db: Db, actor: Actor, leccionId: string) {
  const lecs = await db.select().from(schema.leccion)
    .where(eq(schema.leccion.id, leccionId)).limit(1);
  const leccion = lecs[0];
  if (!leccion) return null;

  const mods = await db.select().from(schema.modulo)
    .where(eq(schema.modulo.id, leccion.moduloId)).limit(1);
  const modulo = mods[0];
  if (!modulo) return null;

  const curso = await cursoMatriculado(db, actor, modulo.cursoId);
  if (!curso) return null;

  // A draft lesson is invisible to students but visible to its teacher/admin.
  if (leccion.estado !== 'publicada') {
    const perfil = await perfilProfesor(db, actor);
    const esDueno = perfil && curso.profesorId === perfil.id;
    if (!esDueno && !esAdmin(actor.roles)) return null;
  }

  return { leccion, modulo, curso };
}

/** The actor's enrolment row for a course, needed to write progress against it. */
export async function matriculaDe(db: Db, actor: Actor, cursoId: string) {
  const rows = await db.select().from(schema.matricula).where(and(
    eq(schema.matricula.estudianteUserId, actor.userId),
    eq(schema.matricula.cursoId, cursoId),
  )).limit(1);
  return rows[0] ?? null;
}

/* -------------------------------------------------------------------------- */
/* Announcements                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Notices this actor may see: school-wide ones plus those for courses they are
 * actively enrolled in. Scoped from the enrolment list, never from a course id
 * supplied by the client.
 */
export async function avisosParaAlumno(db: Db, actor: Actor, limite = 20) {
  const matriculas = await matriculasPropias(db, actor);
  const cursoIds = matriculas.map((m) => m.cursoId);

  const filtro = cursoIds.length
    ? or(isNull(schema.aviso.cursoId), inArray(schema.aviso.cursoId, cursoIds))
    : isNull(schema.aviso.cursoId);

  const avisos = await db.select().from(schema.aviso)
    .where(filtro).orderBy(desc(schema.aviso.createdAt)).limit(limite);
  if (avisos.length === 0) return [];

  // Unread = no receipt row, so nothing has to be written when a notice is
  // created. Matters once a course has many students.
  const leidos = await db.select({ avisoId: schema.avisoLeido.avisoId })
    .from(schema.avisoLeido)
    .where(and(
      eq(schema.avisoLeido.userId, actor.userId),
      inArray(schema.avisoLeido.avisoId, avisos.map((a) => a.id)),
    ));
  const vistos = new Set(leidos.map((l) => l.avisoId));

  return avisos.map((a) => ({ ...a, leido: vistos.has(a.id) }));
}

/** Notices written by this teacher, for their own management view. */
export async function avisosDeProfesor(db: Db, actor: Actor, limite = 30) {
  return db.select().from(schema.aviso)
    .where(eq(schema.aviso.autorUserId, actor.userId))
    .orderBy(desc(schema.aviso.createdAt)).limit(limite);
}

/* -------------------------------------------------------------------------- */
/* A teacher's students                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Active enrolments across every course this teacher owns.
 *
 * A teacher's reach over student records is defined here and nowhere else: they
 * may see a child only for as long as that child is enrolled with them. There is
 * no "list all students" query in this codebase, deliberately.
 */
export async function matriculasDeProfesor(db: Db, actor: Actor) {
  const cursos = await cursosDeProfesor(db, actor);
  const cursoIds = cursos.map((c) => c.id);
  if (cursoIds.length === 0) return { cursos, matriculas: [] as typeof schema.matricula.$inferSelect[] };

  const matriculas = await db.select().from(schema.matricula).where(and(
    inArray(schema.matricula.cursoId, cursoIds),
    eq(schema.matricula.estado, 'activa'),
  ));
  return { cursos, matriculas };
}

/**
 * One student, but ONLY if they are enrolled in a course this teacher owns.
 *
 * The student id does come from the URL here — a teacher has to be able to open
 * a particular child's record. What makes that safe is that the id is checked
 * against the actor's own enrolment list before a single field is read, and an
 * id outside that set returns null so the page 404s rather than 403s.
 */
export async function estudianteDeProfesor(db: Db, actor: Actor, estudianteUserId: string) {
  const { cursos, matriculas } = await matriculasDeProfesor(db, actor);
  const suyas = matriculas.filter((m) => m.estudianteUserId === estudianteUserId);
  if (suyas.length === 0) return null;

  const filas = await db.select({
    id: schema.user.id,
    name: schema.user.name,
    email: schema.user.email,
    telefono: schema.user.telefono,
    fechaNacimiento: schema.user.fechaNacimiento,
    createdAt: schema.user.createdAt,
  }).from(schema.user).where(eq(schema.user.id, estudianteUserId)).limit(1);
  const usuario = filas[0];
  if (!usuario) return null;

  const mios = new Set(suyas.map((m) => m.cursoId));
  return { usuario, matriculas: suyas, cursos: cursos.filter((c) => mios.has(c.id)) };
}
