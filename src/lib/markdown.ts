import { Marked } from 'marked';

/**
 * Markdown → HTML for teacher-written articles.
 *
 * These articles are typed by people into a textarea and then rendered onto a
 * public page, so the output is untrusted by construction. Two controls make
 * that safe, and both matter:
 *
 *  1. `<` is escaped in the SOURCE before parsing. It is the only character
 *     that can open an HTML tag, so escaping it means no raw HTML survives —
 *     a pasted `<script>` or `<iframe>` renders as visible text instead of
 *     executing. Every tag in the output is therefore one Marked itself
 *     produced, from the small set below.
 *
 *     Escaping only `<` and not `&` is deliberate: Marked escapes `&` in text
 *     nodes on its own, so pre-escaping it too would double it into `&amp;amp;`
 *     and show that to the reader.
 *
 *  2. Link and image URLs are checked against a scheme allowlist. Without it,
 *     `[clic aquí](javascript:...)` is a working script URL, and the escaping
 *     above does nothing to stop it because Marked builds that anchor itself.
 *
 * The usual answer is to sanitise the output with DOMPurify, which needs a DOM
 * that Workers do not have. Constraining the input and the renderer gets the
 * same result without shipping jsdom.
 */

/** Schemes a link may use. Anything else is rendered as inert text. */
function urlSegura(href: string): string | null {
  const limpio = href.trim();
  // Relative links and anchors stay on our own site: always fine.
  if (limpio.startsWith('/') || limpio.startsWith('#')) return limpio;
  try {
    const u = new URL(limpio);
    if (u.protocol === 'http:' || u.protocol === 'https:' || u.protocol === 'mailto:') {
      return u.toString();
    }
    return null;
  } catch {
    return null;
  }
}

const escapaTexto = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;');

const marked = new Marked({
  gfm: true,
  breaks: false,
  renderer: {
    link({ href, title, tokens }) {
      const texto = this.parser.parseInline(tokens);
      const seguro = urlSegura(href);
      // A rejected scheme keeps the words and drops the link, so the sentence
      // still reads instead of vanishing.
      if (!seguro) return texto;
      const externo = /^https?:/.test(seguro) && !seguro.includes('dopeghostseo.workers.dev');
      const attrs = externo ? ' target="_blank" rel="noopener noreferrer"' : '';
      const t = title ? ` title="${escapaTexto(title)}"` : '';
      return `<a href="${escapaTexto(seguro)}"${t}${attrs}>${texto}</a>`;
    },
    image({ href, title, text }) {
      const seguro = urlSegura(href);
      if (!seguro || seguro.startsWith('mailto:')) return escapaTexto(text);
      const t = title ? ` title="${escapaTexto(title)}"` : '';
      return `<img src="${escapaTexto(seguro)}" alt="${escapaTexto(text)}"${t} loading="lazy" />`;
    },
    /**
     * The page already renders the article title as its <h1>, so a `#` in the
     * body would produce a second one and flatten the outline. Only that case
     * is demoted; `##` stays an <h2> section heading, which is what an author
     * writing `##` means and what the outline needs.
     */
    heading({ tokens, depth }) {
      const texto = this.parser.parseInline(tokens);
      const nivel = depth === 1 ? 2 : Math.min(depth, 6);
      return `<h${nivel}>${texto}</h${nivel}>\n`;
    },
  },
});

/** Renders an article body to HTML that is safe to inject with set:html. */
export function renderArticulo(markdown: string): string {
  const sinHtml = markdown.replace(/</g, '&lt;');
  return marked.parse(sinHtml, { async: false }) as string;
}

/** Rough reading time, used as the default when a teacher does not set one. */
export function minutosDeLectura(markdown: string): number {
  const palabras = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}

/** URL-safe slug from a title. Accents stripped so the path stays ASCII. */
export function slugificar(titulo: string): string {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70) || 'articulo';
}
