/**
 * Single source of truth for brand + contact strings.
 * The brand name is still being decided, so it lives here and nowhere else —
 * renaming the whole site is a one-line change in this file.
 */

export const SITE = {
  /** TODO: replace once the name is chosen. */
  name: 'Escuela',
  tagline: 'Clases en vivo con profesores reales, desde Ecuador',
  description:
    'Clases en vivo de inglés, música y programación con profesores titulados. ' +
    'Grupos pequeños, horarios flexibles y precios en dólares. Hecho en Ecuador.',
  url: 'https://escuela.example',
  locale: 'es-EC',
  /** TODO: replace with the real business number. */
  whatsapp: '593000000000',
  whatsappMessage: 'Hola, quiero información sobre las clases.',
  email: 'hola@escuela.example',
} as const;

export const waLink = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

/**
 * Course pricing — fixed scope, one payment, no subscription.
 *
 * Anchored on a real local transaction: a Roblox coding course for a child sold
 * at $20 for 6 classes (2/week x 3 weeks) = $3.33/class. An earlier $120/mes
 * package worked out at $30/class -- 9x the market -- and would have scared off
 * exactly the buyer it was aimed at.
 *
 * Selling a COURSE rather than a subscription also removes a real blocker:
 * PayPhone has no card-on-file, so a monthly product had no way to charge month
 * two. A fixed-price course sidesteps that instead of engineering around it.
 */
export const PRECIO_CURSO_GRUPO = 25;      // just above the $20 anchor: smaller groups, titled teachers
export const PRECIO_CURSO_INDIVIDUAL = 60; // $10/class, inside the verified $9-16/h 1-to-1 band
export const CLASES_POR_CURSO = 6;
export const CLASES_POR_SEMANA = 2;
export const SEMANAS_POR_CURSO = 3;
export const CUPO_MAXIMO = 8;              // 6 was too thin once the teacher's share comes out
export const MINUTOS_POR_CLASE = 40;       // 40 min keeps Zoom's free tier invisible

/** Lead with this in the UI — a lump sum reframed as obviously affordable. */
export const PRECIO_POR_CLASE = (PRECIO_CURSO_GRUPO / CLASES_POR_CURSO).toFixed(2);

/**
 * Free first class, 1-on-1 with the teacher the visitor picks.
 *
 * Set to 25 minutes rather than a full 40 ON PURPOSE, and it is one number to
 * change if you disagree. Teacher hours are the binding constraint of this whole
 * business: three teachers deliver roughly 258 billable hours/month, which caps
 * the live rail at 18-64 students. Free 1:1 trials consume exactly that scarce
 * resource. At a 30% trial-to-paying conversion, every paying student costs
 * ~3 trials -- 2 hours of unpaid teacher time at 40 min, versus ~1.25 at 25 min.
 * 25 min is also what Preply and italki settled on, and it is long enough to
 * build trust without becoming a free lesson people simply collect.
 */
export const MINUTOS_PRUEBA = 25;

export type Materia = {
  slug: string;
  nombre: string;
  descripcion: string;
  profesor: string;
  emoji: string;
  /** One colour per subject, so the site reads as a set rather than gradient soup. */
  color: string;
  colorSoft: string;
  disponible: boolean;
  nota?: string;
};

export const MATERIAS: Materia[] = [
  {
    slug: 'ingles',
    nombre: 'Inglés',
    descripcion:
      'Conversación desde la primera clase. Para el trabajo, para viajar o para pasar tu nivel.',
    profesor: 'David',
    emoji: '💬',
    color: '#e0522c',
    colorSoft: '#ffeee7',
    disponible: true,
  },
  {
    slug: 'musica',
    nombre: 'Música',
    descripcion:
      'Aprende tu instrumento a tu ritmo, con audio de alta fidelidad para que se escuche de verdad.',
    profesor: 'David',
    emoji: '🎸',
    color: '#14897c',
    colorSoft: '#e2f4f1',
    disponible: true,
  },
  {
    slug: 'programacion',
    nombre: 'Programación',
    descripcion:
      'Desde cero hasta tu primer proyecto funcionando. Sin relleno y sin promesas raras.',
    profesor: 'Daniel',
    emoji: '💻',
    color: '#5b4bc4',
    colorSoft: '#eeebfd',
    disponible: true,
  },
  {
    slug: 'terapia-de-lenguaje',
    nombre: 'Terapia de lenguaje',
    descripcion:
      'Acompañamiento profesional para niños y niñas, con una terapista de lenguaje titulada.',
    profesor: 'Elena',
    emoji: '🌱',
    color: '#c98a10',
    colorSoft: '#fff4dc',
    disponible: false,
    nota: 'Abrimos cupos pronto',
  },
];

export type Profesor = {
  nombre: string;
  materia: string;
  bio: string;
  credencial: string;
  /** Whether this teacher can be booked for the free first class right now. */
  disponible: boolean;
};

/** TODO: replace bios and add real photos — real faces are the strongest trust lever. */
export const PROFESORES: Profesor[] = [
  {
    nombre: 'David',
    materia: 'Inglés y música',
    bio: 'Enseña inglés y música. Cree que se aprende hablando y tocando, no memorizando.',
    credencial: 'Profesor de inglés y música',
    disponible: true,
  },
  {
    nombre: 'Daniel',
    materia: 'Programación y computación',
    bio: 'Enseña programación y computación desde lo básico hasta proyectos reales.',
    credencial: 'Profesor de programación y computación',
    disponible: true,
  },
  {
    nombre: 'Elena',
    materia: 'Terapia de lenguaje',
    bio: 'Terapista de lenguaje titulada. Trabaja con niños y niñas y con sus familias.',
    credencial: 'Terapista de lenguaje titulada',
    // Not bookable yet: her vertical is a regulated health service pending
    // ACESS registration. See Plan/agents/10-compliance-costed-path.md
    disponible: false,
  },
];
