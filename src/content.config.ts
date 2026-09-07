import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Courses are authored as content files so the catalogue is fully static:
 * great SEO, near-zero serving cost, and no database round-trip for the pages
 * that do the selling. Lesson content and enrolment live in D1 behind the
 * teacher dashboard -- these files are the marketing surface only.
 */
const cursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cursos' }),
  schema: z.object({
    titulo: z.string(),
    // The excerpt is the whole point of the editorial treatment: it must read
    // like a person wrote it, in the teacher's voice, and it must FIT.
    // Hard cap so cards never truncate mid-sentence the way Outschool's do.
    resumen: z.string().max(180),
    profesor: z.string(),
    materia: z.enum(['ingles', 'musica', 'programacion', 'apoyo-escolar']),
    nivel: z.enum(['principiante', 'intermedio', 'avanzado', 'todos']),
    formato: z.enum(['grupal', 'individual']),
    cupoMin: z.number().optional(),
    cupoMax: z.number().optional(),
    clasesPorSemana: z.number(),
    duracionMin: z.number(),
    precio: z.number(),
    precioUnidad: z.enum(['mes', 'clase']).default('mes'),
    edadMin: z.number().optional(),
    edadMax: z.number().optional(),
    // No stock photography and no fake ratings. Each course gets a designed
    // typographic cover -- honest, on-brand, and it loads in nothing.
    portada: z.object({
      emoji: z.string(),
      desde: z.string(),
      hasta: z.string(),
    }),
    publicado: z.boolean().default(true),
    orden: z.number().default(99),
  }),
});

export const collections = { cursos };
