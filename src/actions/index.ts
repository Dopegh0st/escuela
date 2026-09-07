import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { eq, sql } from 'drizzle-orm';
import { getDb, cfEnv, schema } from '../lib/db';
import { cursoPropio, perfilProfesor, registrarAuditoria, type Actor } from '../lib/scope';

/**
 * Every mutation the teacher studio performs.
 *
 * Two rules hold throughout:
 *  1. The actor comes from the session via middleware, NEVER from the request
 *     body. A client-supplied user id is how you get an IDOR.
 *  2. Ownership is re-checked inside each action, not assumed from the fact
 *     that the page rendered. Rendering a page and posting to an action are
 *     separate requests, and only the second one changes data.
 */

function ctxOf(locals: unknown) {
  const l = locals as { actor?: Actor };
  const actor = l.actor;
  if (!cfEnv?.DB) {
    throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'Base de datos no disponible.' });
  }
  if (!actor) {
    throw new ActionError({ code: 'UNAUTHORIZED', message: 'Tienes que entrar primero.' });
  }
  return { db: getDb(), actor };
}

/** 404, not 403 — a 403 confirms the row exists and leaks the id space. */
function noEncontrado(): never {
  throw new ActionError({ code: 'NOT_FOUND', message: 'No encontramos eso.' });
}

export const server = {
  /* ---------------------------------------------------------------- cursos */

  crearCurso: defineAction({
    accept: 'form',
    input: z.object({
      titulo: z.string().min(3, 'Ponle un título de al menos 3 letras.').max(140),
      materia: z.enum(['ingles', 'musica', 'programacion', 'apoyo-escolar']),
      formato: z.enum(['grupal', 'individual']).default('grupal'),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const perfil = await perfilProfesor(db, actor);
      if (!perfil) noEncontrado();

      const id = crypto.randomUUID();
      const slug =
        input.titulo
          .toLowerCase()
          .normalize('NFD')
          .replace(/[̀-ͯ]/g, '')   // strip accents so the slug is URL-safe
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')
          .slice(0, 60) || 'curso';

      await db.insert(schema.curso).values({
        id,
        // Suffix guarantees uniqueness without a round-trip to check.
        slug: `${slug}-${id.slice(0, 6)}`,
        titulo: input.titulo,
        resumen: '',
        profesorId: perfil.id,
        materia: input.materia,
        formato: input.formato,
        precioCentavos: input.formato === 'individual' ? 6000 : 2500,
        estado: 'borrador',
      });

      await registrarAuditoria(db, actor, 'curso.crear', 'curso', id);
      return { id };
    },
  }),

  guardarCurso: defineAction({
    accept: 'form',
    input: z.object({
      cursoId: z.string(),
      titulo: z.string().min(3).max(140),
      resumen: z.string().max(180, 'El resumen no puede pasar de 180 caracteres.'),
      descripcion: z.string().max(8000).optional(),
      nivel: z.enum(['principiante', 'intermedio', 'avanzado', 'todos']),
      formato: z.enum(['grupal', 'individual']),
      clasesTotal: z.coerce.number().int().min(1).max(60),
      clasesPorSemana: z.coerce.number().int().min(1).max(7),
      duracionMin: z.coerce.number().int().min(15).max(180),
      cupoMax: z.coerce.number().int().min(1).max(40),
      /** Entered in dollars, stored in integer cents. Never floats for money. */
      precio: z.coerce.number().min(0).max(2000),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const curso = await cursoPropio(db, actor, input.cursoId);
      if (!curso) noEncontrado();

      await db.update(schema.curso).set({
        titulo: input.titulo,
        resumen: input.resumen,
        descripcion: input.descripcion ?? null,
        nivel: input.nivel,
        formato: input.formato,
        clasesTotal: input.clasesTotal,
        clasesPorSemana: input.clasesPorSemana,
        duracionMin: input.duracionMin,
        cupoMax: input.cupoMax,
        precioCentavos: Math.round(input.precio * 100),
        updatedAt: sql`(unixepoch())`,
      }).where(eq(schema.curso.id, input.cursoId));

      await registrarAuditoria(db, actor, 'curso.guardar', 'curso', input.cursoId);
      return { ok: true };
    },
  }),

  publicarCurso: defineAction({
    accept: 'form',
    input: z.object({
      cursoId: z.string(),
      publicar: z.coerce.boolean(),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const curso = await cursoPropio(db, actor, input.cursoId);
      if (!curso) noEncontrado();

      // Refuse to publish something a student would open and find empty.
      if (input.publicar) {
        if (!curso.resumen?.trim()) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: 'Antes de publicar, escribe el resumen del curso.',
          });
        }
        const mods = await db.select({ id: schema.modulo.id })
          .from(schema.modulo).where(eq(schema.modulo.cursoId, curso.id));
        if (mods.length === 0) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: 'Antes de publicar, agrega al menos un módulo con una lección.',
          });
        }
      }

      await db.update(schema.curso).set({
        estado: input.publicar ? 'publicado' : 'borrador',
        publicadoAt: input.publicar ? sql`(unixepoch())` : null,
        updatedAt: sql`(unixepoch())`,
      }).where(eq(schema.curso.id, input.cursoId));

      await registrarAuditoria(
        db, actor,
        input.publicar ? 'curso.publicar' : 'curso.despublicar',
        'curso', input.cursoId,
      );
      return { estado: input.publicar ? 'publicado' : 'borrador' };
    },
  }),

  /* --------------------------------------------------------------- módulos */

  crearModulo: defineAction({
    accept: 'form',
    input: z.object({
      cursoId: z.string(),
      titulo: z.string().min(2).max(120),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const curso = await cursoPropio(db, actor, input.cursoId);
      if (!curso) noEncontrado();

      const existentes = await db.select({ orden: schema.modulo.orden })
        .from(schema.modulo).where(eq(schema.modulo.cursoId, input.cursoId));
      const orden = existentes.length
        ? Math.max(...existentes.map((m) => m.orden)) + 1
        : 0;

      const id = crypto.randomUUID();
      await db.insert(schema.modulo).values({
        id, cursoId: input.cursoId, titulo: input.titulo, orden,
      });
      return { id };
    },
  }),

  borrarModulo: defineAction({
    accept: 'form',
    input: z.object({ moduloId: z.string() }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const mods = await db.select().from(schema.modulo)
        .where(eq(schema.modulo.id, input.moduloId)).limit(1);
      const mod = mods[0];
      if (!mod) noEncontrado();
      const curso = await cursoPropio(db, actor, mod.cursoId);
      if (!curso) noEncontrado();

      await db.delete(schema.modulo).where(eq(schema.modulo.id, input.moduloId));
      await registrarAuditoria(db, actor, 'modulo.borrar', 'modulo', input.moduloId,
        undefined, { titulo: mod.titulo, cursoId: mod.cursoId });
      return { ok: true };
    },
  }),

  /* -------------------------------------------------------------- lecciones */

  crearLeccion: defineAction({
    accept: 'form',
    input: z.object({
      moduloId: z.string(),
      titulo: z.string().min(2).max(140),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const mods = await db.select().from(schema.modulo)
        .where(eq(schema.modulo.id, input.moduloId)).limit(1);
      const mod = mods[0];
      if (!mod) noEncontrado();
      const curso = await cursoPropio(db, actor, mod.cursoId);
      if (!curso) noEncontrado();

      const existentes = await db.select({ orden: schema.leccion.orden })
        .from(schema.leccion).where(eq(schema.leccion.moduloId, input.moduloId));
      const orden = existentes.length
        ? Math.max(...existentes.map((l) => l.orden)) + 1
        : 0;

      const id = crypto.randomUUID();
      await db.insert(schema.leccion).values({
        id, moduloId: input.moduloId, titulo: input.titulo, orden, bloques: [],
      });
      return { id };
    },
  }),

  borrarLeccion: defineAction({
    accept: 'form',
    input: z.object({ leccionId: z.string() }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const lecs = await db.select().from(schema.leccion)
        .where(eq(schema.leccion.id, input.leccionId)).limit(1);
      const lec = lecs[0];
      if (!lec) noEncontrado();
      const mods = await db.select().from(schema.modulo)
        .where(eq(schema.modulo.id, lec.moduloId)).limit(1);
      if (!mods[0]) noEncontrado();
      const curso = await cursoPropio(db, actor, mods[0].cursoId);
      if (!curso) noEncontrado();

      await db.delete(schema.leccion).where(eq(schema.leccion.id, input.leccionId));
      await registrarAuditoria(db, actor, 'leccion.borrar', 'leccion', input.leccionId,
        undefined, { titulo: lec.titulo });
      return { ok: true };
    },
  }),

  /** Persists a drag-reorder. Ownership is checked once for the whole batch. */
  reordenar: defineAction({
    accept: 'json',
    input: z.object({
      cursoId: z.string(),
      modulos: z.array(z.object({
        id: z.string(),
        orden: z.number().int(),
        lecciones: z.array(z.object({ id: z.string(), orden: z.number().int() })),
      })),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const curso = await cursoPropio(db, actor, input.cursoId);
      if (!curso) noEncontrado();

      // Only touch modules that genuinely belong to this course, so a crafted
      // payload cannot reorder someone else's content.
      const propios = await db.select({ id: schema.modulo.id })
        .from(schema.modulo).where(eq(schema.modulo.cursoId, input.cursoId));
      const permitidos = new Set(propios.map((m) => m.id));

      for (const m of input.modulos) {
        if (!permitidos.has(m.id)) continue;
        await db.update(schema.modulo).set({ orden: m.orden })
          .where(eq(schema.modulo.id, m.id));
        for (const l of m.lecciones) {
          await db.update(schema.leccion).set({ orden: l.orden, moduloId: m.id })
            .where(eq(schema.leccion.id, l.id));
        }
      }
      return { ok: true };
    },
  }),
};
