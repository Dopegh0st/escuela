import { and, eq, desc, ne, inArray } from 'drizzle-orm';
import type { Db } from './db';
import { schema } from './db';
import { esAdmin } from './auth';
import { perfilProfesor, type Actor } from './scope';
import { slugificar } from './markdown';

/**
 * Blog articles.
 *
 * The state machine is the point of this file:
 *
 *   borrador  →  revision  →  publicado
 *      ↑____________|____________|
 *
 * A teacher moves an article to `revision`. Only an admin can move it to
 * `publicado`, and only an admin can send it back with a note. A teacher can
 * never publish their own work, because an article is a public indexed page and
 * Elena's vertical is regulated — the compliance pass on the first thirteen
 * found real problems in drafts, which is exactly what this gate is for.
 */

export const ESTADOS = ['borrador', 'revision', 'publicado'] as const;
export type EstadoArticulo = (typeof ESTADOS)[number];

export const CATEGORIAS = ['ingles', 'musica', 'programacion', 'apoyo-escolar', 'consejos'] as const;

export const ETIQUETA_CATEGORIA: Record<string, string> = {
  ingles: 'Inglés',
  musica: 'Música',
  programacion: 'Programación',
  'apoyo-escolar': 'Apoyo escolar',
  consejos: 'Consejos',
};

/** Default accent per category, so a teacher never has to pick a hex code. */
export const COLOR_CATEGORIA: Record<string, string> = {
  ingles: '#e0522c',
  musica: '#14897c',
  programacion: '#5b4bc4',
  'apoyo-escolar': '#c98a10',
  consejos: '#5b4bc4',
};

export const EMOJI_CATEGORIA: Record<string, string> = {
  ingles: '💬', musica: '🎸', programacion: '💻', 'apoyo-escolar': '🌱', consejos: '📝',
};

/* -------------------------------------------------------------------------- */
/* Author scope                                                                */
/* -------------------------------------------------------------------------- */

/** Articles this actor may manage: their own, or everything for an admin. */
export async function articulosDeAutor(db: Db, actor: Actor) {
  if (esAdmin(actor.roles)) {
    return db.select().from(schema.articulo).orderBy(desc(schema.articulo.updatedAt));
  }
  return db.select().from(schema.articulo)
    .where(eq(schema.articulo.autorUserId, actor.userId))
    .orderBy(desc(schema.articulo.updatedAt));
}

/** One article, only if this actor wrote it (or is an admin). Null → 404. */
export async function articuloPropio(db: Db, actor: Actor, id: string) {
  const filas = await db.select().from(schema.articulo)
    .where(eq(schema.articulo.id, id)).limit(1);
  const art = filas[0];
  if (!art) return null;
  if (esAdmin(actor.roles)) return art;
  if (art.autorUserId !== actor.userId) return null;
  return art;
}

/** The admin review queue: everything a teacher has submitted. */
export async function articulosEnRevision(db: Db) {
  return db.select().from(schema.articulo)
    .where(eq(schema.articulo.estado, 'revision'))
    .orderBy(schema.articulo.updatedAt);
}

/**
 * The byline a new article should carry. A teacher writes under their public
 * teacher name, not their account name, so the article page can match them to
 * the profesores collection and show their face.
 */
export async function nombreDeFirma(db: Db, actor: Actor, nombreCuenta: string) {
  const perfil = await perfilProfesor(db, actor);
  if (!perfil) return nombreCuenta;
  const filas = await db.select({ titular: schema.profesor.titular, slug: schema.profesor.slug })
    .from(schema.profesor).where(eq(schema.profesor.id, perfil.id)).limit(1);
  // profesor.slug is the public identity ("david", "elena"); capitalise it.
  const slug = filas[0]?.slug;
  return slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : nombreCuenta;
}

/** A slug not already taken. Suffixes on collision rather than failing. */
export async function slugLibre(db: Db, titulo: string, exceptoId?: string) {
  const base = slugificar(titulo);
  const filas = await db.select({ slug: schema.articulo.slug, id: schema.articulo.id })
    .from(schema.articulo);
  const tomados = new Set(filas.filter((f) => f.id !== exceptoId).map((f) => f.slug));
  if (!tomados.has(base)) return base;
  for (let i = 2; i < 200; i++) {
    const cand = `${base}-${i}`;
    if (!tomados.has(cand)) return cand;
  }
  return `${base}-${crypto.randomUUID().slice(0, 6)}`;
}

/* -------------------------------------------------------------------------- */
/* Public reads                                                                */
/* -------------------------------------------------------------------------- */

/** Published articles, newest first. The only thing the public blog reads. */
export async function articulosPublicados(db: Db, limite = 60) {
  return db.select().from(schema.articulo)
    .where(eq(schema.articulo.estado, 'publicado'))
    .orderBy(desc(schema.articulo.publicadoAt))
    .limit(limite);
}

/** One published article by slug. Drafts are invisible here, by design. */
export async function articuloPublicado(db: Db, slug: string) {
  const filas = await db.select().from(schema.articulo).where(and(
    eq(schema.articulo.slug, slug),
    eq(schema.articulo.estado, 'publicado'),
  )).limit(1);
  return filas[0] ?? null;
}

/** A few more published articles to read next, excluding the current one. */
export async function otrosArticulos(db: Db, exceptoId: string, limite = 3) {
  const filas = await db.select().from(schema.articulo).where(and(
    eq(schema.articulo.estado, 'publicado'),
    ne(schema.articulo.id, exceptoId),
  )).orderBy(desc(schema.articulo.publicadoAt)).limit(limite);
  return filas;
}

/** Display names of the accounts that touched a set of articles. */
export async function nombresDeUsuarios(db: Db, ids: (string | null)[]) {
  const limpios = [...new Set(ids.filter(Boolean))] as string[];
  if (limpios.length === 0) return new Map<string, string>();
  const filas = await db.select({ id: schema.user.id, name: schema.user.name })
    .from(schema.user).where(inArray(schema.user.id, limpios));
  return new Map(filas.map((f) => [f.id, f.name]));
}
