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

/** Live-class package price. Benchmarked against AMW Academy's proven $120/mes. */
export const PRECIO_PAQUETE = 120;
export const CLASES_POR_MES = 4;
export const MINUTOS_POR_CLASE = 40; // 40 min keeps Zoom's free tier invisible

export type Materia = {
  slug: string;
  nombre: string;
  descripcion: string;
  profesor: string;
  emoji: string;
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
    disponible: true,
  },
  {
    slug: 'musica',
    nombre: 'Música',
    descripcion:
      'Aprende tu instrumento a tu ritmo, con audio de alta fidelidad para que se escuche de verdad.',
    profesor: 'David',
    emoji: '🎸',
    disponible: true,
  },
  {
    slug: 'programacion',
    nombre: 'Programación',
    descripcion:
      'Desde cero hasta tu primer proyecto funcionando. Sin relleno y sin promesas raras.',
    profesor: 'Daniel',
    emoji: '💻',
    disponible: true,
  },
  {
    slug: 'terapia-de-lenguaje',
    nombre: 'Terapia de lenguaje',
    descripcion:
      'Acompañamiento profesional para niños y niñas, con una terapista de lenguaje titulada.',
    profesor: 'Elena',
    emoji: '🌱',
    disponible: false,
    nota: 'Abrimos cupos pronto',
  },
];

export type Profesor = {
  nombre: string;
  materia: string;
  bio: string;
  credencial: string;
};

/** TODO: replace bios and add real photos — real faces are the strongest trust lever. */
export const PROFESORES: Profesor[] = [
  {
    nombre: 'David',
    materia: 'Inglés y música',
    bio: 'Enseña inglés y música. Cree que se aprende hablando y tocando, no memorizando.',
    credencial: 'Profesor de inglés y música',
  },
  {
    nombre: 'Daniel',
    materia: 'Programación y computación',
    bio: 'Enseña programación y computación desde lo básico hasta proyectos reales.',
    credencial: 'Profesor de programación y computación',
  },
  {
    nombre: 'Elena',
    materia: 'Terapia de lenguaje',
    bio: 'Terapista de lenguaje titulada. Trabaja con niños y niñas y con sus familias.',
    credencial: 'Terapista de lenguaje titulada',
  },
];
