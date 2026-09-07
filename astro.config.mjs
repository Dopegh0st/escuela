// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// Astro 7 + @astrojs/cloudflare 14 -> Workers Static Assets (NOT Pages).
// The adapter dropped Pages support in v13; Cloudflare's own docs now say
// "Start new projects with Workers".
export default defineConfig({
  site: 'https://escuela.example',           // replaced once the domain is registered
  output: 'static',                          // marketing/catalogue prerendered; app routes opt in with prerender=false
  adapter: cloudflare({
    imageService: 'compile',                 // no sharp on workerd; optimise at build time
  }),
  // IMPORTANT: the adapter auto-wires Astro Sessions to a Cloudflare KV binding
  // named SESSION unless `session` is false or already has a driver
  // (@astrojs/cloudflare/dist/index.js:108). KV Free allows only 1,000 writes/day,
  // which means sessions start failing at roughly 300-1,000 logins — around
  // 19:00 Ecuador time, the mid-evening study peak. It also emits an incomplete
  // `kv_namespaces: [{binding: "SESSION"}]` (no id) into the deploy config.
  //
  // Sessions are off entirely while the site is static. When auth lands, replace
  // this with an explicit D1-backed driver — NEVER a KV namespace.
  session: false,

  vite: {
    plugins: [tailwindcss()],
  },
  i18n: undefined,                           // Spanish-only, es-EC. No i18n layer by decision.
});
