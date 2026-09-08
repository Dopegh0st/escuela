import { and, eq, gte, inArray, desc, asc, ne } from 'drizzle-orm';
import type { Db } from './db';
import { schema } from './db';
import { esAdmin } from './auth';
import { perfilProfesor, type Actor } from './scope';

/**
 * Live classes: scheduling, meeting links, attendance.
 *
 * Two things in here are safeguarding controls rather than features, and both
 * exist because these are classes with children in them:
 *
 *  1. A meeting link may be used by exactly ONE session (`enlaceYaUsado`). A
 *     reusable personal room forwarded once into a WhatsApp group lets anyone
 *     rejoin any future class, indefinitely.
 *  2. Students only see the link inside a window around the class
 *     (`enlaceVisible`). Outside it the link is simply not in the HTML, so a
 *     screenshot of the page is not a permanent key.
 */

/* -------------------------------------------------------------------------- */
/* Time                                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Ecuador is UTC-5 all year with no DST, so the offset is a constant and never
 * a DST bug. Everything is stored as unix seconds and only ever formatted back
 * into America/Guayaquil, so a teacher travelling abroad still schedules in the
 * time their students will actually show up.
 */
export const OFFSET_EC = 5 * 3600;

/** "2026-09-12" + "19:30", read as Ecuador local time, to unix seconds. */
export function aUnixEc(fecha: string, hora: string): number | null {
  const f = /^(\d{4})-(\d{2})-(\d{2})$/.exec(fecha);
  const h = /^(\d{1,2}):(\d{2})$/.exec(hora);
  if (!f || !h) return null;
  const y = Number(f[1]), m = Number(f[2]), d = Number(f[3]);
  const hh = Number(h[1]), mm = Number(h[2]);
  if (m < 1 || m > 12 || d < 1 || d > 31 || hh > 23 || mm > 59) return null;
  return Date.UTC(y, m - 1, d, hh, mm, 0) / 1000 + OFFSET_EC;
}

/** Unix seconds back into the {fecha, hora} pair the form inputs want. */
export function deUnixEc(unix: number): { fecha: string; hora: string } {
  const d = new Date((unix - OFFSET_EC) * 1000);
  const p = (n: number) => String(n).padStart(2, '0');
  return {
    fecha: `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}`,
    hora: `${p(d.getUTCHours())}:${p(d.getUTCMinutes())}`,
  };
}

const EC = 'America/Guayaquil';

export const fechaLarga = (unix: number) =>
  new Date(unix * 1000).toLocaleDateString('es-EC', {
    weekday: 'long', day: 'numeric', month: 'long', timeZone: EC,
  });

/**
 * "7:00 pm". Intl's es-EC output is "7:00 p. m." — three words with spaces in
 * them, which wraps onto two lines in a narrow column and reads badly in a list.
 */
export const horaDe = (unix: number) =>
  new Date(unix * 1000)
    .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: EC })
    .replace(' AM', ' am').replace(' PM', ' pm');

export const diaCorto = (unix: number) =>
  new Date(unix * 1000).toLocaleDateString('es-EC', {
    weekday: 'short', day: 'numeric', month: 'short', timeZone: EC,
  });

/** Ecuador's calendar day for a timestamp, used to group sessions by day. */
export const claveDia = (unix: number) => deUnixEc(unix).fecha;

/** "en 2 horas", "mañana", "hace 3 días" — relative to now, in whole units. */
export function cuando(unix: number, ahora: number): string {
  const diff = unix - ahora;
  const abs = Math.abs(diff);
  if (abs < 3600) {
    const min = Math.max(1, Math.round(abs / 60));
    return diff >= 0 ? `en ${min} min` : `hace ${min} min`;
  }
  if (abs < 86400) {
    const hrs = Math.round(abs / 3600);
    return diff >= 0 ? `en ${hrs} h` : `hace ${hrs} h`;
  }
  const dias = Math.round(abs / 86400);
  if (diff >= 0) return dias === 1 ? 'mañana' : `en ${dias} días`;
  return dias === 1 ? 'ayer' : `hace ${dias} días`;
}

/* -------------------------------------------------------------------------- */
/* Meeting links                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Hosts we accept a class link from. An allowlist rather than a shape check:
 * without it the field is an open redirect that a compromised teacher account
 * could point anywhere, on a page where students are told to click it.
 */
const HOSTS_REUNION = [
  'zoom.us',
  'meet.google.com',
  'teams.microsoft.com', 'teams.live.com',
  'whereby.com',
  'meet.jit.si',
];

export function enlaceValido(url: string): { ok: true; url: string } | { ok: false; motivo: string } {
  let u: URL;
  try {
    u = new URL(url.trim());
  } catch {
    return { ok: false, motivo: 'Ese enlace no parece una dirección web válida.' };
  }
  if (u.protocol !== 'https:') {
    return { ok: false, motivo: 'El enlace tiene que empezar con https://' };
  }
  const host = u.hostname.replace(/^www\./, '').toLowerCase();
  const permitido = HOSTS_REUNION.some((h) => host === h || host.endsWith(`.${h}`));
  if (!permitido) {
    return { ok: false, motivo: 'Solo aceptamos enlaces de Zoom, Google Meet, Teams, Whereby o Jitsi.' };
  }
  return { ok: true, url: u.toString() };
}

/**
 * True if this teacher already used this link on another session.
 *
 * This is the check that turns "use a fresh link every time" from advice into a
 * rule. A personal-room URL is identical every time, so it trips on the second
 * use and the teacher is told exactly why.
 */
export async function enlaceYaUsado(db: Db, profesorId: string, url: string, exceptoSesionId?: string) {
  const filas = await db.select({ id: schema.claseSesion.id })
    .from(schema.claseSesion)
    .where(and(
      eq(schema.claseSesion.profesorId, profesorId),
      eq(schema.claseSesion.meetingUrl, url),
      exceptoSesionId ? ne(schema.claseSesion.id, exceptoSesionId) : undefined,
    ));
  return filas.length > 0;
}

/** Students see the link from 20 min before the class until 30 min after it ends. */
export function enlaceVisible(inicioAt: number, duracionMin: number, ahora: number) {
  return ahora >= inicioAt - 20 * 60 && ahora <= inicioAt + duracionMin * 60 + 30 * 60;
}

/* -------------------------------------------------------------------------- */
/* Teacher scope                                                               */
/* -------------------------------------------------------------------------- */

/** Every session belonging to this teacher. An admin sees all of them. */
export async function sesionesDeProfesor(db: Db, actor: Actor) {
  if (esAdmin(actor.roles)) {
    return db.select().from(schema.claseSesion).orderBy(asc(schema.claseSesion.inicioAt));
  }
  const perfil = await perfilProfesor(db, actor);
  if (!perfil) return [];
  return db.select().from(schema.claseSesion)
    .where(eq(schema.claseSesion.profesorId, perfil.id))
    .orderBy(asc(schema.claseSesion.inicioAt));
}

/** One session, only if this actor owns it. Null → the caller renders a 404. */
export async function sesionPropia(db: Db, actor: Actor, sesionId: string) {
  const filas = await db.select().from(schema.claseSesion)
    .where(eq(schema.claseSesion.id, sesionId)).limit(1);
  const sesion = filas[0];
  if (!sesion) return null;
  if (esAdmin(actor.roles)) return sesion;

  const perfil = await perfilProfesor(db, actor);
  if (!perfil || sesion.profesorId !== perfil.id) return null;
  return sesion;
}

/**
 * Who is expected at a session, plus whatever attendance was already marked.
 *
 * The register is computed from live enrolments rather than snapshotted when the
 * session was created, so a student who enrols on Tuesday appears on Thursday's
 * register instead of silently missing from it.
 */
export async function registroDeSesion(db: Db, sesionId: string, cursoId: string | null) {
  if (!cursoId) return [];

  const matriculas = await db.select().from(schema.matricula).where(and(
    eq(schema.matricula.cursoId, cursoId),
    eq(schema.matricula.estado, 'activa'),
  ));
  if (matriculas.length === 0) return [];

  const ids = matriculas.map((m) => m.estudianteUserId);
  const usuarios = await db.select({ id: schema.user.id, name: schema.user.name, email: schema.user.email })
    .from(schema.user).where(inArray(schema.user.id, ids));
  const porId = new Map(usuarios.map((u) => [u.id, u]));

  const marcas = await db.select().from(schema.sesionAsistente)
    .where(eq(schema.sesionAsistente.sesionId, sesionId));
  const marcaDe = new Map(marcas.map((m) => [m.estudianteUserId, m]));

  return matriculas
    .map((m) => ({
      userId: m.estudianteUserId,
      nombre: porId.get(m.estudianteUserId)?.name ?? 'Estudiante',
      email: porId.get(m.estudianteUserId)?.email ?? '',
      asistio: marcaDe.get(m.estudianteUserId)?.asistio ?? null,
    }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
}

/** Attendance totals per session id, for the list view's "4 de 6 asistieron". */
export async function conteoAsistencia(db: Db, sesionIds: string[]) {
  const mapa = new Map<string, { presentes: number; marcados: number }>();
  if (sesionIds.length === 0) return mapa;

  const filas = await db.select().from(schema.sesionAsistente)
    .where(inArray(schema.sesionAsistente.sesionId, sesionIds));

  for (const f of filas) {
    if (f.asistio === null) continue;
    const actual = mapa.get(f.sesionId) ?? { presentes: 0, marcados: 0 };
    actual.marcados += 1;
    if (f.asistio) actual.presentes += 1;
    mapa.set(f.sesionId, actual);
  }
  return mapa;
}

/* -------------------------------------------------------------------------- */
/* Student scope                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Upcoming classes for the courses this student is actively enrolled in.
 * Derived from their own enrolments — never from a course id in the request.
 */
export async function proximasClasesAlumno(db: Db, actor: Actor, ahora: number, limite = 5) {
  const matriculas = await db.select().from(schema.matricula).where(and(
    eq(schema.matricula.estudianteUserId, actor.userId),
    eq(schema.matricula.estado, 'activa'),
  ));
  const cursoIds = matriculas.map((m) => m.cursoId);
  if (cursoIds.length === 0) return [];

  const sesiones = await db.select().from(schema.claseSesion).where(and(
    inArray(schema.claseSesion.cursoId, cursoIds),
    eq(schema.claseSesion.estado, 'programada'),
    // A class that started up to two hours ago is still "now" for a student who
    // is running late; anything older is history.
    gte(schema.claseSesion.inicioAt, ahora - 2 * 3600),
  )).orderBy(asc(schema.claseSesion.inicioAt)).limit(limite);
  if (sesiones.length === 0) return [];

  const ids = [...new Set(sesiones.map((s) => s.cursoId).filter(Boolean))] as string[];
  const cursos = await db.select({ id: schema.curso.id, titulo: schema.curso.titulo })
    .from(schema.curso).where(inArray(schema.curso.id, ids));
  const titulo = new Map(cursos.map((c) => [c.id, c.titulo]));

  return sesiones.map((s) => ({
    ...s,
    cursoTitulo: s.cursoId ? titulo.get(s.cursoId) ?? 'Tu curso' : 'Clase',
    // The link is withheld outside the class window, so it is not sitting in the
    // page source waiting to be screenshotted and forwarded.
    enlace: enlaceVisible(s.inicioAt, s.duracionMin, ahora) ? s.meetingUrl : null,
  }));
}

/** Attendance history for one student across a set of courses. */
export async function asistenciaDeEstudiante(db: Db, estudianteUserId: string, cursoIds: string[]) {
  if (cursoIds.length === 0) return [];
  const sesiones = await db.select().from(schema.claseSesion)
    .where(inArray(schema.claseSesion.cursoId, cursoIds))
    .orderBy(desc(schema.claseSesion.inicioAt));
  if (sesiones.length === 0) return [];

  const marcas = await db.select().from(schema.sesionAsistente).where(and(
    eq(schema.sesionAsistente.estudianteUserId, estudianteUserId),
    inArray(schema.sesionAsistente.sesionId, sesiones.map((s) => s.id)),
  ));
  const marcaDe = new Map(marcas.map((m) => [m.sesionId, m]));

  return sesiones.map((s) => ({ sesion: s, asistio: marcaDe.get(s.id)?.asistio ?? null }));
}
