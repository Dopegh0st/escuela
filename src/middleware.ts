import { defineMiddleware } from 'astro:middleware';
import { getAuth, esProfesor } from './lib/auth';
import { cfEnv } from './lib/db';

/**
 * Route protection.
 *
 * Deny by default on protected prefixes. Anything not listed here is public and
 * prerendered, so the middleware does no work on the marketing pages that carry
 * the traffic.
 */
const PROTEGIDO = ['/estudio', '/mi-aprendizaje', '/admin'];
const SOLO_PROFESOR = ['/estudio'];
const SOLO_ADMIN = ['/admin'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  // Prerendered routes run with no binding available; nothing to guard.
  if (!cfEnv?.DB) return next();

  /**
   * Astro Actions post to two different places depending on how they are called:
   * a `<form action={actions.x}>` posts to the CURRENT url (so /estudio/... and
   * already covered), but `actions.x()` from client JS posts to /_actions/x.
   *
   * Without this branch, JSON actions arrive with no `locals.actor` and every
   * one of them fails 401 — while the form-based ones keep working, which hides
   * the bug completely until something is called from script.
   */
  const esAccion = pathname.startsWith('/_actions/');

  const necesitaAuth =
    esAccion || PROTEGIDO.some((p) => pathname === p || pathname.startsWith(p + '/'));
  if (!necesitaAuth) return next();

  const auth = getAuth(context.url.origin);
  const sesion = await auth.api.getSession({ headers: context.request.headers });

  if (!sesion?.user) {
    // An action is an API call: answer 401 rather than redirecting a fetch()
    // into an HTML login page, which the caller cannot parse.
    if (esAccion) return new Response('No autorizado', { status: 401 });
    const destino = encodeURIComponent(pathname + context.url.search);
    return context.redirect(`/entrar?destino=${destino}`, 302);
  }

  const roles = (sesion.user as { roles?: string }).roles ?? 'alumno';

  const necesitaProfesor = !esAccion && SOLO_PROFESOR.some((p) => pathname === p || pathname.startsWith(p + '/'));
  if (necesitaProfesor && !esProfesor(roles)) {
    return context.redirect('/mi-aprendizaje/', 302);
  }

  const necesitaAdmin = !esAccion && SOLO_ADMIN.some((p) => pathname === p || pathname.startsWith(p + '/'));
  if (necesitaAdmin && !roles.split(',').map((r) => r.trim()).includes('admin')) {
    return context.redirect('/mi-aprendizaje/', 302);
  }

  // Hand the resolved actor downstream so pages never re-derive identity.
  context.locals.actor = { userId: sesion.user.id, roles };
  context.locals.usuario = {
    id: sesion.user.id,
    nombre: sesion.user.name,
    email: sesion.user.email,
    roles,
  };

  return next();
});
