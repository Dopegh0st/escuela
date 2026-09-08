import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { and, eq, sql } from 'drizzle-orm';
import { getDb, cfEnv, schema } from '../lib/db';
import { cursoPropio, perfilProfesor, registrarAuditoria, leccionAccesible, matriculaDe, avisosParaAlumno, type Actor } from '../lib/scope';
import { getAuth, esAdmin } from '../lib/auth';
import { aUnixEc, enlaceValido, enlaceYaUsado, sesionPropia, registroDeSesion } from '../lib/agenda';
import { buscarUsuarioPorEmail, yaMatriculado } from '../lib/estudiantes';

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

  /** Full lesson save: title plus the ordered block list that IS the lesson. */
  guardarLeccion: defineAction({
    accept: 'json',
    input: z.object({
      leccionId: z.string(),
      titulo: z.string().min(2).max(140),
      duracionMin: z.coerce.number().int().min(0).max(300).optional(),
      estado: z.enum(['borrador', 'publicada']).default('borrador'),
      bloques: z.array(z.object({
        tipo: z.enum(['texto', 'video', 'actividad', 'descarga']),
        titulo: z.string().max(160).optional(),
        // Text body, activity instructions, or a caption depending on tipo.
        contenido: z.string().max(20000).optional(),
        // Video/download URL. Kept as a URL rather than an upload for now:
        // direct-to-Bunny resumable upload needs a Bunny account, and a URL
        // field lets teachers put real content in today instead of waiting.
        url: z.string().max(600).optional(),
      })).max(40),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);

      // Ownership resolves lesson -> module -> course. Never trust the client.
      const lecs = await db.select().from(schema.leccion)
        .where(eq(schema.leccion.id, input.leccionId)).limit(1);
      const lec = lecs[0];
      if (!lec) noEncontrado();
      const mods = await db.select().from(schema.modulo)
        .where(eq(schema.modulo.id, lec.moduloId)).limit(1);
      if (!mods[0]) noEncontrado();
      const curso = await cursoPropio(db, actor, mods[0].cursoId);
      if (!curso) noEncontrado();

      // Drop blocks with nothing in them rather than persisting empty shells
      // that render as blank gaps for the student.
      const limpios = input.bloques.filter(
        (b) => (b.contenido && b.contenido.trim()) || (b.url && b.url.trim()) || (b.titulo && b.titulo.trim()),
      );

      await db.update(schema.leccion).set({
        titulo: input.titulo,
        bloques: limpios,
        duracionMin: input.duracionMin ?? null,
        estado: input.estado,
      }).where(eq(schema.leccion.id, input.leccionId));

      await registrarAuditoria(db, actor, 'leccion.guardar', 'leccion', input.leccionId,
        undefined, { bloques: limpios.length });
      return { ok: true, bloques: limpios.length };
    },
  }),

  /** Password change. The founder is still on a generated password. */
  cambiarClave: defineAction({
    accept: 'form',
    input: z.object({
      actual: z.string().min(1, 'Escribe tu contraseña actual.'),
      nueva: z.string().min(8, 'La nueva contraseña necesita al menos 8 caracteres.'),
      repetir: z.string(),
    }).refine((d) => d.nueva === d.repetir, {
      message: 'Las dos contraseñas nuevas no coinciden.',
      path: ['repetir'],
    }),
    handler: async (input, { locals, request }) => {
      ctxOf(locals); // must be signed in
      const auth = getAuth(new URL(request.url).origin);
      try {
        // Better Auth verifies the current password and revokes other sessions.
        await auth.api.changePassword({
          body: {
            currentPassword: input.actual,
            newPassword: input.nueva,
            revokeOtherSessions: true,
          },
          headers: request.headers,
        });
      } catch {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Tu contraseña actual no es correcta.',
        });
      }
      return { ok: true };
    },
  }),

  /** Student marks a lesson done (or undoes it). Enrolment is re-checked here. */
  marcarLeccion: defineAction({
    accept: 'json',
    input: z.object({
      leccionId: z.string(),
      completada: z.boolean(),
      segundosVistos: z.coerce.number().int().min(0).max(86400).optional(),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);

      const acceso = await leccionAccesible(db, actor, input.leccionId);
      if (!acceso) noEncontrado();

      const matricula = await matriculaDe(db, actor, acceso.curso.id);
      // A teacher previewing their own course has no enrolment: let them read
      // the lesson but never write progress against a row that does not exist.
      if (!matricula) return { ok: true, guardado: false };

      const existente = await db.select().from(schema.progreso).where(and(
        eq(schema.progreso.matriculaId, matricula.id),
        eq(schema.progreso.leccionId, input.leccionId),
      )).limit(1);

      if (existente[0]) {
        await db.update(schema.progreso).set({
          completada: input.completada,
          segundosVistos: input.segundosVistos ?? existente[0].segundosVistos,
          updatedAt: sql`(unixepoch())`,
        }).where(eq(schema.progreso.id, existente[0].id));
      } else {
        await db.insert(schema.progreso).values({
          id: crypto.randomUUID(),
          matriculaId: matricula.id,
          leccionId: input.leccionId,
          completada: input.completada,
          segundosVistos: input.segundosVistos ?? 0,
        });
      }

      return { ok: true, guardado: true, completada: input.completada };
    },
  }),

  /* ---------------------------------------------------------------- avisos */

  crearAviso: defineAction({
    accept: 'form',
    input: z.object({
      cursoId: z.string().optional(),
      titulo: z.string().min(3, 'Ponle un título corto.').max(140),
      cuerpo: z.string().min(3, 'Escribe el aviso.').max(2000),
      importante: z.coerce.boolean().default(false),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const perfil = await perfilProfesor(db, actor);
      if (!perfil) noEncontrado();

      // A teacher may only post to a course they own. Empty string from the
      // form's "all courses" option means school-wide.
      let cursoId: string | null = null;
      if (input.cursoId && input.cursoId.trim()) {
        const curso = await cursoPropio(db, actor, input.cursoId);
        if (!curso) noEncontrado();
        cursoId = curso.id;
      }

      const id = crypto.randomUUID();
      await db.insert(schema.aviso).values({
        id, cursoId, autorUserId: actor.userId,
        titulo: input.titulo, cuerpo: input.cuerpo, importante: input.importante,
      });
      await registrarAuditoria(db, actor, 'aviso.crear', 'aviso', id, undefined, { cursoId });
      return { id };
    },
  }),

  borrarAviso: defineAction({
    accept: 'form',
    input: z.object({ avisoId: z.string() }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const rows = await db.select().from(schema.aviso)
        .where(eq(schema.aviso.id, input.avisoId)).limit(1);
      const av = rows[0];
      // Only the author may delete it.
      if (!av || av.autorUserId !== actor.userId) noEncontrado();

      await db.delete(schema.aviso).where(eq(schema.aviso.id, input.avisoId));
      await registrarAuditoria(db, actor, 'aviso.borrar', 'aviso', input.avisoId,
        undefined, { titulo: av.titulo });
      return { ok: true };
    },
  }),

  /** Marks notices read. Only ever writes receipts for notices the actor can see. */
  marcarAvisosLeidos: defineAction({
    accept: 'json',
    input: z.object({ avisoIds: z.array(z.string()).max(50) }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      if (input.avisoIds.length === 0) return { ok: true, marcados: 0 };

      const visibles = await avisosParaAlumno(db, actor, 50);
      const permitidos = new Set(visibles.filter((a) => !a.leido).map((a) => a.id));
      const aMarcar = input.avisoIds.filter((id) => permitidos.has(id));
      if (aMarcar.length === 0) return { ok: true, marcados: 0 };

      await db.insert(schema.avisoLeido).values(
        aMarcar.map((avisoId) => ({
          id: crypto.randomUUID(), avisoId, userId: actor.userId,
        })),
      );
      return { ok: true, marcados: aMarcar.length };
    },
  }),

  /* ---------------------------------------------------------------- agenda */

  crearSesion: defineAction({
    accept: 'form',
    input: z.object({
      cursoId: z.string().optional(),
      fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Elige la fecha de la clase.'),
      hora: z.string().regex(/^\d{1,2}:\d{2}$/, 'Elige la hora de la clase.'),
      duracionMin: z.coerce.number().int().min(15, 'Mínimo 15 minutos.').max(240),
      cupo: z.coerce.number().int().min(1).max(40),
      meetingUrl: z.string().max(600).optional(),
      /** Schedule the same class weekly for N weeks in one go. */
      repetirSemanas: z.coerce.number().int().min(1).max(12).default(1),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const perfil = await perfilProfesor(db, actor);
      if (!perfil) noEncontrado();

      // Safeguarding gate. Adults deliver classes to children here; a teacher
      // whose vetting is not recorded cannot be put in a room with them.
      if (!perfil.vettingCompletadoAt) {
        throw new ActionError({
          code: 'FORBIDDEN',
          message: 'Tu verificación de antecedentes todavía no está registrada. Un administrador tiene que completarla antes de que puedas agendar clases.',
        });
      }

      let cursoId: string | null = null;
      let cupo = input.cupo;
      if (input.cursoId && input.cursoId.trim()) {
        const curso = await cursoPropio(db, actor, input.cursoId);
        if (!curso) noEncontrado();
        cursoId = curso.id;
        cupo = Math.min(cupo, curso.cupoMax);
      }

      const inicio = aUnixEc(input.fecha, input.hora);
      if (inicio === null) {
        throw new ActionError({ code: 'BAD_REQUEST', message: 'Esa fecha y hora no son válidas.' });
      }

      let url: string | null = null;
      if (input.meetingUrl && input.meetingUrl.trim()) {
        const v = enlaceValido(input.meetingUrl);
        if (!v.ok) throw new ActionError({ code: 'BAD_REQUEST', message: v.motivo });
        if (await enlaceYaUsado(db, perfil.id, v.url)) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: 'Ya usaste ese enlace en otra clase. Genera uno nuevo para esta: un enlace reutilizado deja entrar a cualquiera que lo tenga guardado.',
          });
        }
        url = v.url;
        // A repeated series would reuse the one link across every week, which is
        // exactly what the rule above exists to prevent.
        if (input.repetirSemanas > 1) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: 'Cuando repites la clase varias semanas, deja el enlace vacío y ponle uno distinto a cada fecha después.',
          });
        }
      }

      const ids: string[] = [];
      for (let i = 0; i < input.repetirSemanas; i++) {
        const id = crypto.randomUUID();
        await db.insert(schema.claseSesion).values({
          id,
          cursoId,
          profesorId: perfil.id,
          inicioAt: inicio + i * 7 * 86400,
          duracionMin: input.duracionMin,
          cupo,
          meetingUrl: url,
          estado: 'programada',
        });
        ids.push(id);
      }

      await registrarAuditoria(db, actor, 'sesion.crear', 'clase_sesion', ids[0],
        undefined, { cursoId, cuantas: ids.length, inicioAt: inicio });
      return { ids, cuantas: ids.length };
    },
  }),

  guardarSesion: defineAction({
    accept: 'form',
    input: z.object({
      sesionId: z.string(),
      fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      hora: z.string().regex(/^\d{1,2}:\d{2}$/),
      duracionMin: z.coerce.number().int().min(15).max(240),
      cupo: z.coerce.number().int().min(1).max(40),
      meetingUrl: z.string().max(600).optional(),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const sesion = await sesionPropia(db, actor, input.sesionId);
      if (!sesion) noEncontrado();

      const inicio = aUnixEc(input.fecha, input.hora);
      if (inicio === null) {
        throw new ActionError({ code: 'BAD_REQUEST', message: 'Esa fecha y hora no son válidas.' });
      }

      let url: string | null = null;
      if (input.meetingUrl && input.meetingUrl.trim()) {
        const v = enlaceValido(input.meetingUrl);
        if (!v.ok) throw new ActionError({ code: 'BAD_REQUEST', message: v.motivo });
        if (await enlaceYaUsado(db, sesion.profesorId, v.url, sesion.id)) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: 'Ese enlace ya está en otra clase. Cada clase necesita su propio enlace.',
          });
        }
        url = v.url;
      }

      await db.update(schema.claseSesion).set({
        inicioAt: inicio,
        duracionMin: input.duracionMin,
        cupo: input.cupo,
        meetingUrl: url,
      }).where(eq(schema.claseSesion.id, sesion.id));

      await registrarAuditoria(db, actor, 'sesion.guardar', 'clase_sesion', sesion.id);
      return { ok: true };
    },
  }),

  cancelarSesion: defineAction({
    accept: 'form',
    input: z.object({
      sesionId: z.string(),
      motivo: z.string().max(300).optional(),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const sesion = await sesionPropia(db, actor, input.sesionId);
      if (!sesion) noEncontrado();

      // The link dies with the class. Leaving it live is how a cancelled
      // session's URL keeps working for whoever still has it.
      await db.update(schema.claseSesion).set({
        estado: 'cancelada',
        meetingUrl: null,
      }).where(eq(schema.claseSesion.id, sesion.id));

      await registrarAuditoria(db, actor, 'sesion.cancelar', 'clase_sesion', sesion.id, input.motivo);
      return { ok: true };
    },
  }),

  borrarSesion: defineAction({
    accept: 'form',
    input: z.object({ sesionId: z.string() }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const sesion = await sesionPropia(db, actor, input.sesionId);
      if (!sesion) noEncontrado();

      await db.delete(schema.claseSesion).where(eq(schema.claseSesion.id, sesion.id));
      await registrarAuditoria(db, actor, 'sesion.borrar', 'clase_sesion', sesion.id,
        undefined, { inicioAt: sesion.inicioAt, cursoId: sesion.cursoId });
      return { ok: true };
    },
  }),

  /** Marks the register. Only students genuinely on the roster can be marked. */
  marcarAsistencia: defineAction({
    accept: 'form',
    input: z.object({
      sesionId: z.string(),
      /** Checkbox names are `presente:<userId>`; absentees simply don't post. */
      presentes: z.union([z.string(), z.array(z.string())]).optional(),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const sesion = await sesionPropia(db, actor, input.sesionId);
      if (!sesion) noEncontrado();

      const roster = await registroDeSesion(db, sesion.id, sesion.cursoId);
      if (roster.length === 0) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Esta clase todavía no tiene estudiantes matriculados.',
        });
      }

      const enviados = input.presentes === undefined
        ? []
        : Array.isArray(input.presentes) ? input.presentes : [input.presentes];
      // Anything not on the roster is discarded rather than trusted.
      const permitidos = new Set(roster.map((r) => r.userId));
      const presentes = new Set(enviados.filter((id) => permitidos.has(id)));

      const existentes = await db.select().from(schema.sesionAsistente)
        .where(eq(schema.sesionAsistente.sesionId, sesion.id));
      const filaDe = new Map(existentes.map((e) => [e.estudianteUserId, e]));

      const nuevas: { id: string; sesionId: string; estudianteUserId: string; asistio: boolean }[] = [];
      for (const r of roster) {
        const asistio = presentes.has(r.userId);
        const fila = filaDe.get(r.userId);
        if (!fila) {
          nuevas.push({ id: crypto.randomUUID(), sesionId: sesion.id, estudianteUserId: r.userId, asistio });
        } else if (fila.asistio !== asistio) {
          await db.update(schema.sesionAsistente).set({ asistio })
            .where(eq(schema.sesionAsistente.id, fila.id));
        }
      }
      if (nuevas.length) await db.insert(schema.sesionAsistente).values(nuevas);

      // Marking the register is what makes a class "dictada": it is the only
      // evidence the class actually happened. But only once it has started —
      // marking a future class taught silently drops it off every student's
      // "próximas clases" list, which is how a class quietly disappears.
      const ahora = Math.floor(Date.now() / 1000);
      if (sesion.estado === 'programada' && ahora >= sesion.inicioAt) {
        await db.update(schema.claseSesion).set({ estado: 'dictada' })
          .where(eq(schema.claseSesion.id, sesion.id));
      }

      await registrarAuditoria(db, actor, 'sesion.asistencia', 'clase_sesion', sesion.id,
        undefined, { presentes: presentes.size, total: roster.length });
      return { ok: true, presentes: presentes.size, total: roster.length };
    },
  }),

  /**
   * Records that a teacher's background check was verified. Admin only, and it
   * writes who verified it — the point of the control is that it is auditable,
   * not that a box got ticked.
   */
  registrarVetting: defineAction({
    accept: 'form',
    input: z.object({
      profesorId: z.string(),
      verificadoPor: z.string().min(3, 'Escribe quién hizo la verificación.').max(140),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      if (!esAdmin(actor.roles)) noEncontrado();

      const filas = await db.select().from(schema.profesor)
        .where(eq(schema.profesor.id, input.profesorId)).limit(1);
      if (!filas[0]) noEncontrado();

      await db.update(schema.profesor).set({
        vettingCompletadoAt: sql`(unixepoch())`,
        vettingVerificadoPor: input.verificadoPor,
      }).where(eq(schema.profesor.id, input.profesorId));

      await registrarAuditoria(db, actor, 'profesor.vetting', 'profesor', input.profesorId,
        `Verificado por ${input.verificadoPor}`);
      return { ok: true };
    },
  }),

  /* ----------------------------------------------------------- estudiantes */

  /**
   * Gives a student a place in a course without a payment — the free trial and
   * courtesy places the school actually runs on. The student must already have
   * an account: this never creates one, so nobody's child is registered by a
   * third party typing an email address.
   */
  matricularEstudiante: defineAction({
    accept: 'form',
    input: z.object({
      cursoId: z.string(),
      email: z.string().email('Escribe un correo válido.').max(200),
      origen: z.enum(['cortesia', 'prueba_gratis']).default('cortesia'),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const curso = await cursoPropio(db, actor, input.cursoId);
      if (!curso) noEncontrado();

      const usuario = await buscarUsuarioPorEmail(db, input.email);
      if (!usuario) {
        throw new ActionError({
          code: 'NOT_FOUND',
          message: 'No hay ninguna cuenta con ese correo. Pídele que se registre primero y vuelve a intentarlo.',
        });
      }

      const existente = await yaMatriculado(db, usuario.id, curso.id);
      if (existente?.estado === 'activa') {
        throw new ActionError({ code: 'BAD_REQUEST', message: `${usuario.name} ya está en este curso.` });
      }
      if (existente) {
        // Re-activate the revoked row rather than inserting a duplicate: the
        // (estudiante, curso) pair is unique.
        await db.update(schema.matricula).set({ estado: 'activa' })
          .where(eq(schema.matricula.id, existente.id));
        await registrarAuditoria(db, actor, 'matricula.reactivar', 'matricula', existente.id);
        return { ok: true, nombre: usuario.name, reactivada: true };
      }

      const activas = await db.select({ id: schema.matricula.id })
        .from(schema.matricula).where(and(
          eq(schema.matricula.cursoId, curso.id),
          eq(schema.matricula.estado, 'activa'),
        ));
      if (activas.length >= curso.cupoMax) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: `El curso está lleno (${curso.cupoMax} cupos). Sube el cupo en la ficha del curso si quieres agregar a alguien más.`,
        });
      }

      const id = crypto.randomUUID();
      await db.insert(schema.matricula).values({
        id, estudianteUserId: usuario.id, cursoId: curso.id, origen: input.origen, estado: 'activa',
      });
      await registrarAuditoria(db, actor, 'matricula.crear', 'matricula', id,
        `Alta manual (${input.origen})`, { cursoId: curso.id, estudianteUserId: usuario.id });
      return { ok: true, nombre: usuario.name, reactivada: false };
    },
  }),

  revocarMatricula: defineAction({
    accept: 'form',
    input: z.object({
      matriculaId: z.string(),
      motivo: z.string().max(300).optional(),
    }),
    handler: async (input, { locals }) => {
      const { db, actor } = ctxOf(locals);
      const filas = await db.select().from(schema.matricula)
        .where(eq(schema.matricula.id, input.matriculaId)).limit(1);
      const matricula = filas[0];
      if (!matricula) noEncontrado();

      // Ownership resolves through the course, never from the posted id alone.
      const curso = await cursoPropio(db, actor, matricula.cursoId);
      if (!curso) noEncontrado();

      // Revoked, never deleted: the progress and attendance rows are the record
      // of a course somebody paid for.
      await db.update(schema.matricula).set({ estado: 'revocada' })
        .where(eq(schema.matricula.id, matricula.id));

      await registrarAuditoria(db, actor, 'matricula.revocar', 'matricula', matricula.id,
        input.motivo, { cursoId: matricula.cursoId, estudianteUserId: matricula.estudianteUserId });
      return { ok: true };
    },
  }),
};
