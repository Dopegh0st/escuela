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
  schema: ({ image }) => z.object({
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
    precioUnidad: z.enum(['curso', 'mes', 'clase']).default('curso'),
    edadMin: z.number().optional(),
    edadMax: z.number().optional(),
    // The gradient + emoji cover is the FALLBACK, kept so the build never breaks
    // while artwork is still being made. Drop a real image in and it takes over.
    portada: z.object({
      emoji: z.string(),
      desde: z.string(),
      hasta: z.string(),
    }),
    // Real artwork. Put the file in src/assets/cursos/ (NOT public/) so Astro
    // resizes it and converts to AVIF/WebP at build -- a 1.5MB PNG becomes
    // roughly 7KB at the size it is actually displayed. Anything served from
    // public/ ships verbatim at full weight, which at Ecuador's ~$100/GB
    // out-of-bundle data rate is real money out of the visitor's pocket.
    imagen: image().optional(),
    imagenAlt: z.string().optional(),
    publicado: z.boolean().default(true),
    orden: z.number().default(99),
  }),
});

export const collections = { cursos };
