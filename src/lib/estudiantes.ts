import { and, eq, inArray } from 'drizzle-orm';
import type { Db } from './db';
import { schema } from './db';
import { matriculasDeProfesor, estudianteDeProfesor, type Actor } from './scope';

/**
 * The teacher's view of their students.
 *
 * Progress is computed the same way as `progreso.ts` computes it for the
 * student — only PUBLISHED lessons in the numerator and the denominator — so a
 * teacher and a student looking at the same course never see two different
 * percentages. That divergence is the classic way this screen loses trust.
 */

type Fila = {
  userId: string;
  nombre: string;
  email: string;
  cursos: { id: string; titulo: string; completas: number; total: number; pct: number }[];
  completas: number;
  total: number;
  pct: number;
  ultimaActividad: number | null;
  presentes: number;
  marcados: number;
  desde: number;
};

export async function resumenEstudiantes(db: Db, actor: Actor) {
  const { cursos, matriculas } = await matriculasDeProfesor(db, actor);
  if (matriculas.length === 0) return { cursos, filas: [] as Fila[] };

  const cursoIds = cursos.map((c) => c.id);
  const tituloCurso = new Map(cursos.map((c) => [c.id, c.titulo]));

  /* Published lessons per course, so both sides of the fraction match the
     student's own view of the same course. */
  const modulos = await db.select({ id: schema.modulo.id, cursoId: schema.modulo.cursoId })
    .from(schema.modulo).where(inArray(schema.modulo.cursoId, cursoIds));
  const cursoDeModulo = new Map(modulos.map((m) => [m.id, m.cursoId]));

  const lecciones = modulos.length
    ? await db.select({ id: schema.leccion.id, moduloId: schema.leccion.moduloId, estado: schema.leccion.estado })
        .from(schema.leccion).where(inArray(schema.leccion.moduloId, modulos.map((m) => m.id)))
    : [];
  const publicadas = lecciones.filter((l) => l.estado === 'publicada');

  const totalPorCurso = new Map<string, number>();
  for (const c of cursoIds) totalPorCurso.set(c, 0);
  for (const l of publicadas) {
    const c = cursoDeModulo.get(l.moduloId);
    if (c) totalPorCurso.set(c, (totalPorCurso.get(c) ?? 0) + 1);
  }
  const esPublicada = new Set(publicadas.map((l) => l.id));

  const progreso = await db.select().from(schema.progreso)
    .where(inArray(schema.progreso.matriculaId, matriculas.map((m) => m.id)));

  /* Attendance across every session of the teacher's courses. */
  const sesiones = await db.select({ id: schema.claseSesion.id })
    .from(schema.claseSesion).where(inArray(schema.claseSesion.cursoId, cursoIds));
  const asistencias = sesiones.length
    ? await db.select().from(schema.sesionAsistente)
        .where(inArray(schema.sesionAsistente.sesionId, sesiones.map((s) => s.id)))
    : [];

  const usuarios = await db.select({ id: schema.user.id, name: schema.user.name, email: schema.user.email })
    .from(schema.user).where(inArray(schema.user.id, [...new Set(matriculas.map((m) => m.estudianteUserId))]));
  const usuarioDe = new Map(usuarios.map((u) => [u.id, u]));

  const porEstudiante = new Map<string, Fila>();

  for (const m of matriculas) {
    const u = usuarioDe.get(m.estudianteUserId);
    if (!u) continue; // deleted account with a dangling enrolment

    let fila = porEstudiante.get(m.estudianteUserId);
    if (!fila) {
      fila = {
        userId: u.id, nombre: u.name, email: u.email,
        cursos: [], completas: 0, total: 0, pct: 0,
        ultimaActividad: null, presentes: 0, marcados: 0,
        desde: m.createdAt,
      };
      porEstudiante.set(u.id, fila);
    }
    fila.desde = Math.min(fila.desde, m.createdAt);

    const suyo = progreso.filter((p) => p.matriculaId === m.id);
    const completas = suyo.filter((p) => p.completada && esPublicada.has(p.leccionId)).length;
    const total = totalPorCurso.get(m.cursoId) ?? 0;

    for (const p of suyo) {
      if (fila.ultimaActividad === null || p.updatedAt > fila.ultimaActividad) {
        fila.ultimaActividad = p.updatedAt;
      }
    }

    fila.cursos.push({
      id: m.cursoId,
      titulo: tituloCurso.get(m.cursoId) ?? 'Curso',
      completas, total,
      pct: total ? Math.round((completas / total) * 100) : 0,
    });
    fila.completas += completas;
    fila.total += total;
  }

  for (const a of asistencias) {
    if (a.asistio === null) continue;
    const fila = porEstudiante.get(a.estudianteUserId);
    if (!fila) continue;
    fila.marcados += 1;
    if (a.asistio) fila.presentes += 1;
  }

  const filas = [...porEstudiante.values()]
    .map((f) => ({ ...f, pct: f.total ? Math.round((f.completas / f.total) * 100) : 0 }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

  return { cursos, filas };
}

/**
 * One student's full record with this teacher: every lesson, done or not, plus
 * their attendance. Authorization is `estudianteDeProfesor`, which returns null
 * for anyone not enrolled with this teacher.
 */
export async function detalleEstudiante(db: Db, actor: Actor, estudianteUserId: string) {
  const base = await estudianteDeProfesor(db, actor, estudianteUserId);
  if (!base) return null;

  const cursoIds = base.cursos.map((c) => c.id);

  const modulos = cursoIds.length
    ? await db.select().from(schema.modulo)
        .where(inArray(schema.modulo.cursoId, cursoIds)).orderBy(schema.modulo.orden)
    : [];
  const lecciones = modulos.length
    ? await db.select().from(schema.leccion)
        .where(inArray(schema.leccion.moduloId, modulos.map((m) => m.id))).orderBy(schema.leccion.orden)
    : [];

  const progreso = await db.select().from(schema.progreso)
    .where(inArray(schema.progreso.matriculaId, base.matriculas.map((m) => m.id)));

  const cursos = base.cursos.map((curso) => {
    const matricula = base.matriculas.find((m) => m.cursoId === curso.id)!;
    const suyo = progreso.filter((p) => p.matriculaId === matricula.id);
    const hechas = new Set(suyo.filter((p) => p.completada).map((p) => p.leccionId));
    const cuando = new Map(suyo.filter((p) => p.completada).map((p) => [p.leccionId, p.updatedAt]));

    const mods = modulos.filter((m) => m.cursoId === curso.id).map((m) => ({
      modulo: m,
      lecciones: lecciones
        .filter((l) => l.moduloId === m.id && l.estado === 'publicada')
        .map((l) => ({ leccion: l, hecha: hechas.has(l.id), enAt: cuando.get(l.id) ?? null })),
    })).filter((m) => m.lecciones.length > 0);

    const total = mods.reduce((n, m) => n + m.lecciones.length, 0);
    const completas = mods.reduce((n, m) => n + m.lecciones.filter((l) => l.hecha).length, 0);

    return {
      curso, matricula, modulos: mods, total, completas,
      pct: total ? Math.round((completas / total) * 100) : 0,
    };
  });

  return { ...base, cursos, cursoIds };
}

/** Enrol a student the teacher already knows, by email. Used for courtesy places. */
export async function buscarUsuarioPorEmail(db: Db, email: string) {
  const filas = await db.select({ id: schema.user.id, name: schema.user.name, email: schema.user.email, roles: schema.user.roles })
    .from(schema.user).where(eq(schema.user.email, email.trim().toLowerCase())).limit(1);
  return filas[0] ?? null;
}

/** True if this student already has any enrolment row for the course. */
export async function yaMatriculado(db: Db, estudianteUserId: string, cursoId: string) {
  const filas = await db.select({ id: schema.matricula.id, estado: schema.matricula.estado })
    .from(schema.matricula).where(and(
      eq(schema.matricula.estudianteUserId, estudianteUserId),
      eq(schema.matricula.cursoId, cursoId),
    )).limit(1);
  return filas[0] ?? null;
}
