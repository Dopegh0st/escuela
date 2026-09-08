import { eq, inArray } from 'drizzle-orm';
import type { Db } from './db';
import { schema } from './db';
import { matriculasPropias, avisosParaAlumno, type Actor } from './scope';

/**
 * One place that computes a student's progress, so the dashboard, the course
 * list and the sidebar badge can never disagree with each other. Three separate
 * implementations of "how far along am I" is how a 60% on one page becomes a
 * 75% on the next.
 *
 * Only PUBLISHED lessons count, in the numerator and the denominator alike: a
 * teacher adding a draft lesson must never make a student's progress go
 * backwards.
 */
export async function resumenAlumno(db: Db, actor: Actor) {
  const matriculas = await matriculasPropias(db, actor);
  const cursoIds = matriculas.map((m) => m.cursoId);

  const cursos = cursoIds.length
    ? await db.select().from(schema.curso).where(inArray(schema.curso.id, cursoIds))
    : [];

  const modulos = cursoIds.length
    ? await db.select().from(schema.modulo).where(inArray(schema.modulo.cursoId, cursoIds))
    : [];
  const modIds = modulos.map((m) => m.id);

  const lecciones = modIds.length
    ? await db.select().from(schema.leccion).where(inArray(schema.leccion.moduloId, modIds))
    : [];

  const matriculaIds = matriculas.map((m) => m.id);
  const progreso = matriculaIds.length
    ? await db.select().from(schema.progreso)
        .where(inArray(schema.progreso.matriculaId, matriculaIds))
    : [];
  const hechas = new Set(progreso.filter((p) => p.completada).map((p) => p.leccionId));

  const moduloDeCurso = new Map(modulos.map((m) => [m.id, m.cursoId]));
  const ordenModulo = new Map(modulos.map((m) => [m.id, m.orden]));

  const detalle = cursos.map((curso) => {
    const suyas = lecciones
      .filter((l) => moduloDeCurso.get(l.moduloId) === curso.id && l.estado === 'publicada')
      .sort((a, b) =>
        (ordenModulo.get(a.moduloId)! - ordenModulo.get(b.moduloId)!) || (a.orden - b.orden));

    const total = suyas.length;
    const completas = suyas.filter((l) => hechas.has(l.id)).length;
    const siguiente = suyas.find((l) => !hechas.has(l.id)) ?? null;

    return {
      curso,
      total,
      completas,
      pct: total ? Math.round((completas / total) * 100) : 0,
      // A course with no published lessons yet is "preparándose", not "0% done":
      // the difference matters to a student deciding whether to open it.
      estado: total === 0 ? 'preparandose' : completas === total ? 'completado' : completas > 0 ? 'en-curso' : 'sin-empezar',
      siguienteId: siguiente?.id ?? null,
      matricula: matriculas.find((m) => m.cursoId === curso.id)!,
    };
  }).sort((a, b) => {
    // Courses in progress first, finished ones last: the dashboard should open
    // on what still needs doing.
    const peso = (e: string) => (e === 'en-curso' ? 0 : e === 'sin-empezar' ? 1 : e === 'preparandose' ? 2 : 3);
    return peso(a.estado) - peso(b.estado);
  });

  const avisos = await avisosParaAlumno(db, actor);
  const sinLeer = avisos.filter((a) => !a.leido).length;

  const leccionesTotal = detalle.reduce((n, d) => n + d.total, 0);
  const leccionesHechas = detalle.reduce((n, d) => n + d.completas, 0);

  return {
    detalle,
    avisos,
    sinLeer,
    stats: {
      cursos: detalle.length,
      completados: detalle.filter((d) => d.estado === 'completado').length,
      leccionesHechas,
      leccionesTotal,
      pctGeneral: leccionesTotal ? Math.round((leccionesHechas / leccionesTotal) * 100) : 0,
    },
    // What the "continue" card points at: something already started, else anything unfinished.
    continuar: detalle.find((d) => d.estado === 'en-curso') ?? detalle.find((d) => d.siguienteId) ?? null,
  };
}

export const fechaCorta = (unix: number) =>
  new Date(unix * 1000).toLocaleDateString('es-EC', {
    day: 'numeric', month: 'short', timeZone: 'America/Guayaquil',
  });
