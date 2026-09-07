import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Everything public is a content collection, so every page below is fully
 * static: strong SEO, near-zero serving cost, no database round-trip on the
 * pages that do the selling. Lesson content and enrolment live in D1 behind the
 * teacher dashboard -- these files are the marketing surface only.
 */

const cursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cursos' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    // The excerpt is the whole point of the editorial treatment: it must read
    // like a person wrote it, in the teacher's voice, and it must FIT.
    // Hard cap so cards never truncate mid-sentence.
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
    /** Bullet lists rendered as structured blocks, not prose. */
    aprenderas: z.array(z.string()).optional(),
    requisitos: z.array(z.string()).optional(),
    // The gradient + emoji cover is the FALLBACK, kept so the build never breaks
    // while artwork is still being made. Drop a real image in and it takes over.
    portada: z.object({
      emoji: z.string(),
      desde: z.string(),
      hasta: z.string(),
    }),
    // Real artwork goes in src/assets/ (NOT public/) so Astro resizes it and
    // converts to AVIF/WebP at build. Measured: a 948KB PNG becomes 10.7KB.
    imagen: image().optional(),
    imagenAlt: z.string().optional(),
    publicado: z.boolean().default(true),
    orden: z.number().default(99),
  }),
});

/**
 * Teacher profiles. This is the highest-trust surface on the site: every
 * Ecuadorian competitor found in the reference research runs anonymous
 * WhatsApp lead-gen with no named practitioner, so a real name plus a
 * verifiable credential is the differentiator.
 *
 * `registro` exists specifically for Elena: the compliance plan requires her
 * SENESCYT/ACESS registration to be displayed, and doing so is simultaneously
 * the strongest trust signal for a parent and what Google's YMYL standard
 * expects of health-adjacent content.
 */
const profesores = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/profesores' }),
  schema: ({ image }) => z.object({
    nombre: z.string(),
    titular: z.string(),                     // "Profesor de inglés y música"
    resumen: z.string().max(200),
    credencial: z.string().optional(),       // título as awarded
    registro: z.string().optional(),         // SENESCYT / ACESS number, shown verbatim
    materias: z.array(z.enum(['ingles', 'musica', 'programacion', 'apoyo-escolar'])),
    especialidades: z.array(z.string()).default([]),
    /** Plain-language, honest. No invented "15 years of experience". */
    experiencia: z.string().optional(),
    color: z.string().default('#e0522c'),
    foto: image().optional(),
    fotoAlt: z.string().optional(),
    /** false = visible on the site but not bookable (e.g. pending registration) */
    disponible: z.boolean().default(true),
    notaNoDisponible: z.string().optional(),
    orden: z.number().default(99),
  }),
});

/** Blog — the SEO plan's 12-week content calendar lands here. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    resumen: z.string().max(200),
    autor: z.string(),
    fecha: z.date(),
    actualizado: z.date().optional(),
    categoria: z.enum(['ingles', 'musica', 'programacion', 'apoyo-escolar', 'consejos']),
    minutosLectura: z.number().default(4),
    imagen: image().optional(),
    imagenAlt: z.string().optional(),
    color: z.string().default('#5b4bc4'),
    emoji: z.string().default('📝'),
    publicado: z.boolean().default(true),
  }),
});

/**
 * Talleres (workshops/events). A free one-off workshop is the strongest
 * top-of-funnel move available to a school with no students yet, and it lines
 * up with Ecuador's June-July nivelación demand spike.
 */
const talleres = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talleres' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    resumen: z.string().max(200),
    profesor: z.string(),
    /** Stored as a local Ecuador date/time. Ecuador is UTC-5 year-round, no DST. */
    fecha: z.date(),
    hora: z.string(),                        // "18:00"
    duracionMin: z.number().default(60),
    modalidad: z.enum(['online', 'presencial']).default('online'),
    precio: z.number().default(0),           // 0 = gratis
    cupos: z.number().optional(),
    paraQuien: z.string(),                   // "Para papás y mamás de niños de 6 a 12 años"
    materia: z.enum(['ingles', 'musica', 'programacion', 'apoyo-escolar', 'general']),
    color: z.string().default('#14897c'),
    emoji: z.string().default('🎟️'),
    imagen: image().optional(),
    imagenAlt: z.string().optional(),
    publicado: z.boolean().default(true),
  }),
});

export const collections = { cursos, profesores, blog, talleres };
