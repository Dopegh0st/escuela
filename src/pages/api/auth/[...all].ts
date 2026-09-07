import type { APIRoute } from 'astro';
import { getAuth } from '../../../lib/auth';
import { cfEnv } from '../../../lib/db';

export const prerender = false;

/** Better Auth owns every /api/auth/* route: sign-in, sign-up, sign-out, session. */
const handler: APIRoute = async ({ request, url }) => {
  if (!cfEnv?.DB) {
    return new Response('Base de datos no disponible', { status: 503 });
  }
  const auth = getAuth(url.origin);
  return auth.handler(request);
};

export const GET = handler;
export const POST = handler;
