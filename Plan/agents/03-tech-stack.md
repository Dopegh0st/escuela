# 03 — Technology & Tooling Plan
**Escuela online Ecuador · Astro 7 + Cloudflare Workers · Owner: Technology/Tooling Lead · 2026-09-06**

Every version below was checked against the npm registry or vendor docs on 2026-09-06. Anything I
could not verify is tagged `[unverified]`. Prices are USD.

---

## 0. The one-paragraph answer

Astro **7.3.1** + `@astrojs/cloudflare` **14.3.0** on **Workers Static Assets** (not Pages — the
adapter dropped Pages in v13). Data in **D1** through **Drizzle 0.45.2**. Auth via **Better Auth
1.7.3** with sessions in **D1, not KV**, and a hand-overridden `node:crypto.scryptSync` hasher.
Course video on **Bunny Stream**, not Cloudflare Stream (~19x cheaper). Payments through
**PayPhone** REST + a manual-transfer rail. Live classes are a **Google Meet URL stored in D1** —
nothing embedded. Zero UI framework on public pages; **Svelte 5 islands only inside the teacher
studio**. Honest day-one cost: **$5 Workers Paid + ~$2 media + domain ≈ $8/month**, and the $5 is
non-optional the moment you hash a real password.

**Scale posture (per locked decisions D6 and D7).** Everything here is sized for **20–200
students**. I buy Workers Paid and paid media on day one so no design decision is contorted to dodge
a free-tier cliff; free-tier numbers appear below only as awareness of where the cliffs are. The
complexity budget goes to the teacher studio, because per D7 the working product *is* the moat: no
read replicas, no queues, no sharding, no caching layer to dodge a KV write limit. Sessions go in D1
because it is *correct*, not because it is cheaper.

---

## 1. The stack table

| Layer | Choice (pinned) | Cost | Runner-up rejected, and why |
|---|---|---|---|
| Framework | `astro@7.3.1` | $0 | Astro 5.x — forces `@astrojs/cloudflare@12.6.13`, which deploys to **Pages**, the platform Cloudflare tells you not to start on. Next.js — ruled out by founder. |
| Adapter | `@astrojs/cloudflare@14.3.0` | $0 | `@astrojs/node` + a VPS: adds $6–20/mo and a server to patch. |
| Runtime | Cloudflare Workers + Static Assets, **Workers Paid** | $5/mo | Workers Free: 10 ms CPU kills password hashing (§3). |
| Styling | `tailwindcss@4.3.3` + `@tailwindcss/vite@4.3.3`, CSS-native `@theme` | $0 | Tailwind 3 + `tailwind.config.js` — off the workspace standard. UnoCSS — smaller ecosystem, no upside here. |
| UI islands | **None on public routes.** `svelte@5` islands **only** under `/estudio/*` | $0 | React 18 UMD ≈ 45 KB gzip vs Svelte ≈ 8 KB. On an 8 GB prepaid bundle the *data* difference is negligible (~0.0005%); the real cost is **parse+execute on a $110 Android**, which is where Svelte wins. |
| Icons | `astro-icon@1.2.0` + `@iconify-json/lucide` (inlined SVG, zero runtime JS) | $0 | Font Awesome webfont — a 70 KB blocking font for ~20 glyphs. |
| Forms / validation | **Astro Actions** + `zod@4.5.4`, one schema shared client↔server | $0 | react-hook-form — requires React. Raw `FormData` — no typed server contract. |
| DB driver / ORM | `drizzle-orm@0.45.2` + `drizzle-kit@0.31.10` against D1 | $0 | **Prisma** — engine/driver-adapter friction on workerd, big bundle (§3). Kysely — fine, weaker migration tooling. Raw SQL — you will forget an index and blow the 5M rows-read budget. |
| Auth | `better-auth@1.7.3`, D1 adapter, **sessions in D1** | $0 | Lucia — **deprecated, do not install**. Clerk/WorkOS — generous free tiers but every login is a foreign round-trip and another cross-border transfer to paper. Cloudflare Access — 50-user hard block, admin-only. |
| Email | `resend@6.26.0` (free: 3,000/mo **but 100/day**) | $0 → $20 | Brevo 300/day free (higher ceiling, worse DX) — keep as fallback. **MailChannels' free Workers API died 2024-08-31 — do not build on it.** |
| Payments | **PayPhone** REST (5% + IVA = 5.75%) + manual transfer | per-txn | Stripe — **not available in Ecuador**, at all. Kushki — weekly Friday settlement. Nuvei/Paymentez ~1.5%+IVA is the v2 upgrade. |
| Video (VOD) | **Bunny Stream** (~$0.35/1k min stored, $0.05/1k min delivered on Volume) | $1–8/mo | Cloudflare Stream — ~19x more; **no DRM**; $30/mo for a 100 h library before a single view. Self-hosted HLS on R2 — saves ~$0.50 and costs weeks. |
| Live classes | **Google Meet link in `sessions.meeting_url`** | $0 | Zoom Basic — the 40-min cap **applies to 1:1 too** since 2022-05-02. LiveKit/Daily/Whereby — free tiers = 42–83 lesson-hours/mo. |
| Music lessons | **1 seat Zoom Pro** (Original Sound for Musicians) | $14.16/mo | FarPlay For Teachers $14.99 — technically better, but Quito→Miami is 49 ms RTT so real ensemble play is impossible either way; buy **fidelity**, not latency. |
| Scheduling | **Build in D1.** Ecuador is UTC-5, no DST | $0 | Cal.com — went closed source Apr 2026. Calendly Free — 1 event type, no payments. Neither supports PayPhone. |
| File storage | **R2** (PDFs, partituras, audio-only, course art) + custom domain | $0 → $1 | `r2.dev` — rate-limited, "non-production", CNAME is an unsupported path. |
| Search | Client-side `fuse.js` over a prebuilt JSON index of the catalogue | $0 | Algolia/Pagefind — catalogue is <200 courses; a 30 KB JSON index beats both. |
| Analytics | **Cloudflare Web Analytics** (cookieless — one less LOPDP consent) | $0 | GA4 — consent banner, third-country transfer, 90 KB. |
| Error tracking | **Sentry Developer** (5,000 errors/mo, 1 seat, 30-day retention) | $0 | Workers Logs alone (20M/mo on Paid) — no grouping or alerting. |
| Testing | `vitest@5.0.0` + `@cloudflare/vitest-pool-workers@0.22.0`; `@playwright/test@1.63.0` | $0 | Jest — no workerd pool. |
| CI/CD | **Workers Builds** (3,000 build-min/mo, 1 concurrent, 20-min timeout) | $0 | GitHub Actions — fine, but Workers Builds is one less secret to manage. |
| E-invoicing | **Dátil** REST (`X-Key` / `X-Password`) | $25–140/yr | Contífico free ≤24 docs/yr — too small once selling starts. |

---

## 2. Astro specifics

**`astro.config.mjs`**

```js
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://escuela.example.ec',
  output: 'static',                      // NOT 'server'. Per-route opt-in below.
  adapter: cloudflare({
    imageService: 'compile',             // build-time; avoids paid Images transforms
    platformProxy: { enabled: true },    // real D1/R2 bindings inside `astro dev`
  }),
  vite: { plugins: [tailwindcss()] },
});
```

**`wrangler.jsonc`**

```jsonc
{
  "name": "escuela",
  "main": "@astrojs/cloudflare/entrypoints/server",
  "compatibility_date": "2026-09-01",
  "compatibility_flags": ["nodejs_compat"],   // required for node:crypto scrypt
  "assets": { "directory": "./dist", "binding": "ASSETS" },
  "d1_databases": [{ "binding": "DB", "database_name": "escuela", "database_id": "..." }],
  "r2_buckets":   [{ "binding": "MEDIA", "bucket_name": "escuela-media" }]
  // deliberately NO kv_namespaces — see §3
}
```

**Rendering policy.** `output: 'static'` is the money decision: static asset requests are **free and
unlimited** and never touch the 100k/day Worker budget. Opt in per route:

| Route | Mode | Why |
|---|---|---|
| `/`, `/cursos`, `/cursos/[slug]`, `/profesores/[slug]`, `/blog/*` | prerendered | SEO + free requests. Rebuilt on publish via a Workers Builds deploy hook. |
| `/mi-cuenta/*`, `/estudio/*`, `/api/*`, `/checkout/*` | `export const prerender = false` | Auth-gated. |
| Personalised fragments on static pages (`<ProgresoCurso server:defer />`) | **server island** | Keeps the shell a cached static asset while only the fragment is on demand. |

**Never set `run_worker_first`.** It routes every request through the Worker, burns the request
budget, and past the limit returns 429 instead of falling back to static assets.

**Content Layer API** carries only *marketing* content, from local Markdown:
`src/content/blog/**.md` and `src/content/paginas/**.md` via `glob()`, `src/content/faq.yaml` via
`file()`. The **live catalogue lives in D1** and is emitted at build time by
`src/pages/cursos/[slug].astro` using `getStaticPaths()` reading D1 through the build-time binding.
Two content systems, on purpose: marketing is git-versioned and free; course data is
teacher-authored and transactional.

**Astro 7 migration traps:** the Rust compiler is stricter about unclosed HTML tags; `compressHTML`
now defaults to `'jsx'`; `output: 'hybrid'` no longer exists.

---

## 3. The Workers runtime trap

Do not reach for these. The right-hand column is what actually ships.

| Don't install | Why it breaks on workerd | Ship this instead |
|---|---|---|
| `bcrypt` (native) | node-gyp / C++ addon; no native modules on Workers | `node:crypto.scryptSync` (below) |
| `bcryptjs` | *Works* with `nodejs_compat`, but pure-JS ≈ 100+ ms CPU | same |
| Better Auth's **default** hasher | Uses `@noble/hashes/scrypt` (pure JS) ≈ **80–100 ms CPU** per sign-in — reported in better-auth issues #8456 / #8860. Instantly fatal on the 10 ms free tier and ~3x your paid CPU bill | override with native scrypt |
| `argon2`, `@node-rs/argon2` | Native/NAPI binary | native scrypt, or PBKDF2 via `crypto.subtle.deriveKey` |
| Prisma Client | Query-engine + driver-adapter dance; large bundle against the 64 MiB uncompressed Worker limit | Drizzle |
| `pdfkit`, `puppeteer`, `playwright` (runtime) | Node streams / a Chromium binary | Render invoices and certificates as **HTML → browser print-to-PDF**; or Cloudflare Browser Rendering (paid) |
| `sharp`, `jimp`, `canvas` | Native binaries | Astro `imageService: 'compile'` at build; Cloudflare Images (5,000 free transforms/mo) at runtime |
| `nodemailer` | Raw SMTP sockets — Workers has no SMTP TCP | Resend REST via `fetch()` |
| `fs`, `path` against real files | No filesystem | R2 bindings |
| `jsonwebtoken` | Node sync crypto APIs | `jose` (WebCrypto-native). Better Auth handles this anyway |
| `moment`, `moment-timezone` | 70 KB+, bundled tz database | `Intl.DateTimeFormat` with `America/Guayaquil`. Ecuador is UTC-5 year-round, **no DST** |

**Password hashing, concretely.** Enable `nodejs_compat` and override Better Auth:

```ts
// src/lib/auth.ts
import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto';
const N = 16384, r = 8, p = 1, keylen = 64;   // ~30–50 ms CPU on workerd

emailAndPassword: {
  enabled: true,
  password: {
    hash: async (pw) => {
      const salt = randomBytes(16);
      const dk = scryptSync(pw.normalize('NFKC'), salt, keylen,
                            { N, r, p, maxmem: 64 * 1024 * 1024 });
      return `scrypt$${N}$${r}$${p}$${salt.toString('base64')}$${dk.toString('base64')}`;
    },
    verify: async ({ hash, password }) => { /* parse params, re-derive, timingSafeEqual */ },
  },
}
```

Web Crypto **PBKDF2** (`crypto.subtle.deriveKey`, SHA-256, 600k iterations) is the only
pure-WebCrypto option and works everywhere — but it is not memory-hard. **Argon2id is not
practically available** on Workers. Native scrypt is the right 2026 answer, and it is the specific
reason the $5 plan is mandatory: even at 30–50 ms you are 3–5x over the free 10 ms ceiling.

**Never provision a KV namespace for sessions.** The adapter auto-wires Astro Sessions to KV
(binding `SESSION`), and KV Free allows **1,000 writes/day** — roughly 300–1,000 logins before
sessions silently fail until 00:00 UTC (**19:00 Ecuador time — mid-evening study peak**). KV is also
eventually consistent up to ~60 s across PoPs; a Quito student can land in a Bogotá PoP and appear
logged out. Better Auth's D1 session table gives 100,000 writes/day for $0.

---

## 4. Payments from a Worker

**Primary: PayPhone Botón de Pago (redirect).** No Node SDK exists and none is needed.

1. `POST https://pay.payphonetodoesposible.com/api/button/Prepare`
   with `Authorization: Bearer <token>`. JSON body: `amount` (**integer cents**, and it must equal
   `amountWithTax + tax + amountWithoutTax + service + tip`), `currency: "USD"`,
   `clientTransactionId` (**max 15 characters** — use a base36 D1 rowid, not a UUID), `reference`,
   `storeId`, `responseUrl`, `cancellationUrl`; for diferido add `deferred: true` plus
   `deferredCode` (8 digits: interest flag, grace flag, months, grace months). Diferido requires a
   **$50 minimum** ticket.
2. Redirect the buyer to the returned `payWithPayPhone` URL.
3. PayPhone returns them to `responseUrl?id=...&clientTransactionId=...`.
4. **Never trust that redirect.** From the Worker:
   `POST https://pay.payphonetodoesposible.com/api/button/V2/Confirm` with body `{ id, clientTxId }`
   and the same Bearer token. Authoritative fields: `transactionStatus` (`Approved` / `Canceled`),
   `statusCode` (1 pending, 2 rejected, 3 approved), `authorizationCode`, `amount`. Status GETs are
   rate-limited to **30 calls/minute**.
5. Idempotency lives in D1: `UNIQUE(client_transaction_id)` on `payments`, and enrolment is granted
   only inside the same transaction that flips `payments.status = 'aprobado'`.

There is no HMAC webhook signature to verify — **the Confirm call *is* the verification.** That is
the entire security model; do not shortcut it. (Real signature work does arrive with
Nuvei/Paymentez in v2: `base64("APP-CODE;TIMESTAMP;" + hex(SHA-256(secret + timestamp)))`, 15-second
expiry — three lines of `crypto.subtle.digest('SHA-256', ...)` on Workers.)

**Manual transfer rail (must ship in MVP).** `payments.method = 'transferencia'`,
`status = 'pendiente_verificacion'`, plus an R2-stored comprobante. An admin screen at
`/admin/pagos` approves it. **Never release access from a WhatsApp screenshot** — edited receipts
are the documented local fraud pattern. Approve only against the bank app or a statement line.

**Fallbacks, in order:** Deuna via Pagomedios ($99/yr for the button, 0% platform commission) →
Nuvei/Paymentez (~1.5% + IVA, worth ~4 points of margin, 2–3 weeks of bank onboarding) → PayPal for
diaspora buyers only (5.40% + $0.30 + 4.50% FX + a **$10 minimum withdrawal fee**).

---

## 5. Transactional email + WhatsApp

**Email: Resend.** Free is 3,000/mo but **capped at 100/day** — the daily cap breaks first, not the
monthly. Mitigation: email carries only *transactional* traffic (verificación de correo,
restablecer contraseña, recibo de pago, enlace a la factura). Reminders go to WhatsApp. That keeps
~50 students under roughly 15 emails/day. Enrolment spikes at ~300 students will breach 100/day →
Resend Pro at $20/mo.

**Sender setup, before writing a line of send code:** subdomain `envios.<dominio>.ec`; the
Resend-issued DKIM `CNAME`; SPF `v=spf1 include:amazonses.com ~all`; and `_dmarc.<dominio>.ec`
starting at `v=DMARC1; p=none; rua=mailto:dmarc@<dominio>.ec`, tightened to `p=quarantine` after two
weeks of clean reports. Warm the domain before the first cohort — a cold domain sending 200 password
resets on launch day lands in spam.

**WhatsApp: Meta Cloud API, direct.** No BSP markup ($0.003–0.010/msg) and the Graph API is a plain
`POST https://graph.facebook.com/v21.0/<PHONE_ID>/messages` — fine from a Worker.

| Option | Verdict |
|---|---|
| **Meta Cloud API direct** | **Chosen.** No platform fee, Meta rates only. |
| Twilio | +$0.005/msg on top of Meta. Buys nothing here. |
| 360dialog | ~EUR 49/mo flat. Only wins above roughly 10k msgs/mo. |

Ecuador rates `[likely — reseller-published, confirm in Meta Business Manager]`: marketing ≈
**$0.128/msg**, utility and authentication ≈ **$0.021/msg**, service free inside the 24 h window.
**Loud warning:** from **2026-10-01** — 25 days from now — service messages *and* utility templates
inside the 24 h window become billable at the utility rate. Model WhatsApp as a real cost line from
day one, and use `utility` templates (recordatorio de clase, pago confirmado), never `marketing`,
for operational messages. Start MVP on the **free WhatsApp Business App** with a click-to-chat
`https://wa.me/593...` link; move to Cloud API only when volume justifies the template-approval
overhead.

---

## 6. Video and live classes — the v1 configuration

**Bunny Stream.** $1/mo minimum, 14-day trial, no card. Free standard transcoding, free ABR ladder,
free **embed-view token authentication**, free **MediaCage Basic** AES encryption (defeats yt-dlp and
download managers), and a player. Nothing to build.

- **Verify your library bills on the Volume network, not South America Standard.** $0.005/GB vs
  $0.045/GB is a 9x swing: a $7/mo bill becomes $45/mo. Check this in week 1.
- **Ladder:** 240p/368k · 360p/714k · 480p/1196k · 720p/2328k, plus an **audio-only 64 kbps**
  rendition (29 MB/hour). **Default the player to 480p**, never "auto-highest": one hour of 720p is
  1,048 MB ≈ 13% of a typical $10 / 8 GB prepaid bundle, and out-of-bundle data runs ~$0.10/MB.
- Show **"≈ 210 MB"** next to every lesson in the UI. Keep lessons **6–10 minutes**.
- Anti-piracy by cost-effectiveness: token URLs (free) → MediaCage Basic (free) → a per-student DOM
  watermark showing name + cédula, repositioned every 20 s (a day's work) → concurrent-session
  limits in D1 (free, highest ROI). **Skip real DRM** — a $99–100/mo floor that still loses to a
  phone camera.

**Live classes: a URL, not a feature.** `sessions.meeting_url` in D1, rendered behind auth. Google
Meet free gives unlimited 1:1 (24 h cap) and **60 minutes for 3+**. Schedule group classes at 50
minutes.

**Music — the one place to spend.** Real-time ensemble play is physically impossible: Quito→Miami is
49 ms RTT, ~25 ms one-way, against a 25 ms Ensemble Performance Threshold, before any audio
buffering. Design **turn-taking** pedagogy and buy fidelity instead: one **Zoom Pro** seat, desktop
client (not browser), Audio → *Original sound for musicians* → **High-fidelity music mode ON**
(48 kHz, 96 kbps mono / 192 kbps stereo), **Echo cancellation OFF** (mandatory when on headphones),
Stereo ON. Non-negotiable teacher hardware: **wired Ethernet and wired headphones**. Bluetooth
headsets are disqualifying — the moment the mic opens, the OS switches to the hands-free profile:
8–16 kHz mono plus 150–300 ms of delay. Put this in the teacher onboarding doc; otherwise teachers
will blame the platform.

---

## 7. Dev environment

| Thing | Value |
|---|---|
| Node | **>= 22.12.0** (Astro 7 `engines`). Pin in `.nvmrc`. |
| Package manager | **pnpm**, declared in the `packageManager` field |
| Wrangler | `wrangler@4.129.0` as a devDependency, never global |
| Local DB | `wrangler d1 execute escuela --local` against `.wrangler/state` |
| Types | `wrangler types` → `worker-configuration.d.ts`, committed |
| Editor | VS Code + `astro-build.astro-vscode`, `bradlc.vscode-tailwindcss`, `biomejs.biome` |
| Lint / format | `biome` — one tool, no ESLint+Prettier config war |

**Daily commands**

```bash
pnpm dev                    # Astro + real bindings via platformProxy
pnpm db:gen                 # drizzle-kit generate -> ./migrations
pnpm db:local               # wrangler d1 migrations apply escuela --local
pnpm db:seed                # wrangler d1 execute escuela --local --file=./seed/seed.sql
pnpm types                  # wrangler types
pnpm test                   # vitest (workers pool)
pnpm test:e2e               # playwright, 3 smoke flows
pnpm build && pnpm preview  # workerd preview — catches CPU/API surprises `dev` hides
pnpm deploy                 # wrangler deploy
wrangler tail --format pretty
```

Seeds must include: 1 admin, 3 profesores, 2 alumnos, 1 apoderado, 2 cursos with 6 lecciones each,
1 enrolment, 1 approved payment, 1 pending transfer. Regenerating the whole local DB must be one
command.

---

## 8. Testing and quality on a 6-week clock

Test exactly two things properly. Everything else is optional.

1. **Payment confirmation.** `vitest` + `@cloudflare/vitest-pool-workers` against a real local D1.
   Cases: Confirm returns `statusCode 3` → enrolment granted exactly once; duplicate callback → no
   second enrolment (the UNIQUE constraint holds); `statusCode 2` → no access; Confirm times out →
   payment stays `pendiente`, never `aprobado`; amount mismatch between Prepare and Confirm → reject
   and alert.
2. **Authorization.** A table-driven test per role × route: alumno cannot open `/estudio/*`;
   profesor A cannot read profesor B's course or student list; apoderado sees only their own child;
   an unenrolled user cannot obtain a Bunny playback token. **Bugs here are LOPDP incidents, not
   bugs** — the SPDP's first two fines were $259,644 and $194,856, both for consent/safeguard
   failures.

Playwright covers three flows only: registro → verificación → primer login; catálogo → checkout →
pago aprobado → acceso; profesor crea curso → publica → aparece en catálogo.

**Pre-deploy checklist**

- [ ] `EXPLAIN QUERY PLAN` on every list query — no `SCAN` on `enrolments`, `progress`, `payments`
- [ ] An index exists on every FK and every `WHERE` column
- [ ] `wrangler.jsonc` has **no** `kv_namespaces`, and no `run_worker_first`
- [ ] Worker bundle under 64 MiB uncompressed
- [ ] Lighthouse mobile >= 90, throttled to Slow 4G, at **360 px**
- [ ] All secrets via `wrangler secret put`; none in `wrangler.jsonc`
- [ ] Sentry release tagged; a deliberate 500 shows up in the dashboard
- [ ] D1 **jurisdiction chosen at creation** — it is immutable afterwards
- [ ] Bunny billing tier confirmed as Volume, not SA Standard

---

## 9. Cost model — the number Karel needs

| Line item | Build (0) | 50 students | 500 students | 5,000 students |
|---|---|---|---|---|
| Workers Paid | $0 | **$5** | $5 | $5 |
| D1 | $0 | $0 | $0 | ~$5 |
| R2 (PDFs, audio, art) | $0 | $0 | ~$0.50 | ~$1 |
| Bunny Stream (Volume) | $1 | $1 | ~$8 | ~$64 |
| *Bunny if billed SA Standard* | *$1* | *$3* | *~$54* | *~$526* |
| Resend | $0 | $0 | **$20** | $20 |
| WhatsApp Cloud API | $0 | $0 | ~$42 | **~$420** |
| Zoom Pro (music, 1 seat) | $0 | $14 | $14 | $14 |
| Sentry / CF Analytics / CI | $0 | $0 | $0 | $0 |
| Domain (amortised) | $1 | $1 | $1 | $1 |
| Dátil e-invoicing | $0 | ~$2 | ~$7 | ~$28 |
| **Infrastructure total** | **~$2** | **~$23** | **~$98** | **~$558** |

**Read this table through D6.** The design target is **20–200 students**, which sits between the
first two columns: **$23–35/month, all in.** At 20 students on a $120/month live-class package that
is ~$2,400/month gross — infrastructure is under 1.5% of revenue and is a rounding error, exactly as
D6 says. The 500 and 5,000 columns exist to prove the model does not break, and to surface the two
places scale changes a *decision*: WhatsApp templates become the dominant line item, and Bunny's
billing tier becomes a $470/month question. Neither is an MVP engineering task.

**Which line item charges first: Workers Paid, $5, on the day you ship real password auth.** Not
traffic, not storage — CPU. Second is Bunny at ~$1 the week the teachers upload. Third is Resend at
roughly 300 students. Then WhatsApp becomes the largest single line at scale — at 5,000 students it
is **75% of the bill**, and the 2026-10-01 service-message change makes it worse. Budget for it, and
prefer in-app notifications over templates wherever the student will open the app anyway.

Assumptions: 4 watch-hours per student per month; a 300 h catalogue at 5,000 students; 4 WhatsApp
utility templates per student per month at $0.021. **Not included:** the external **Data Protection
Delegate**, legally mandatory the moment a minor's data is touched and which Karel cannot legally be
himself. That is the largest recurring non-infrastructure cost and belongs to the legal workstream.
Add ~5% **ISD** on every dollar sent abroad (Cloudflare, Bunny, Zoom, Resend, AI APIs) above the
annual card exemption.

---

## 10. AI leverage — where it pays, where it is a distraction

| Use | API | Cost | Verdict |
|---|---|---|---|
| es-EC subtitles + transcripts for every lesson | Workers AI `@cf/openai/whisper-large-v3-turbo` — $0.00051/audio-min; 10,000 neurons/day free | **100 h catalogue ≈ $3 one-off** | **Ship in MVP.** Subtitles and transcripts let a student on a 5 GB bundle *read* a lesson instead of streaming it, and they are indexable SEO text. Highest ROI in this document. |
| Quiz drafting from a lesson transcript | Claude or Gemini API; Workers AI Llama for $0 | <$0.01/lesson | **Ship in MVP** as a teacher-facing "Generar borrador de quiz" button. Teacher always edits before publish. |
| Course outline / lesson-plan drafting in the studio | same | negligible | **Ship in MVP.** Directly attacks D4's biggest risk: teachers stalling on a blank page. |
| EN↔ES glossary for the English vertical | same | negligible | v2 |
| **Speech analysis for the therapy vertical** | — | — | **Do not build. Not v2 — not at all without counsel.** It is an automated evaluation of a minor's sensitive health data: guardian express consent, mandatory DPIA, pseudonymisation duty, and a plausible medical-device claim. The cheapest compliance strategy is to not create the artefact. |
| AI chat tutor / auto-grading open answers | — | — | Distraction for v1. Erodes the teacher relationship that is the actual product. |

Alternatives if Workers AI quality on es-EC disappoints: Deepgram Nova-3 batch at $0.0043/min, or
OpenAI Whisper at $0.006/min. Both are ~$1.50–2.20 per 100 h library. Cost is not the deciding
factor; accent handling is — test all three on one real music lesson before committing.

---

## 11. Phasing

**Sequencing note (per the D4/D6 resolution in `00-locked-decisions.md`).** Live packages are how
revenue starts at 20 students; the studio is how the business stops being time-for-money. In build
order that means the **revenue path ships first and is trivially cheap** — auth, catálogo, checkout,
and a `sessions.meeting_url` are roughly week 1–3 and involve no video pipeline at all — while the
**studio consumes weeks 3–6**. If week 5 is in trouble, the cut is *quiz builder, certificates and
resumable upload*, not the studio itself; a studio that can only take a finished MP4 by simple
upload still satisfies D4.

**MVP (weeks 1–6, must ship):** Astro 7 + Workers Static Assets skeleton; Tailwind 4 tokens; Better
Auth with native scrypt and D1 sessions; roles alumno / profesor / admin / apoderado; the **teacher
studio** (curso → módulo → lección CRUD, drag reorder, draft/publish, direct-to-Bunny upload, PDF to
R2) — the single largest item, and everything else is sized around it; catálogo and course pages
prerendered; checkout with PayPhone plus manual transfer plus admin approval; Bunny player with
token auth, 480p default, MB label and audio-only rendition; Google Meet URL per session; progress
tracking **debounced to 120 s + on-pause + on-unload**, never a 30 s heartbeat; Resend transactional
email; WhatsApp click-to-chat; Whisper subtitles; Sentry; the two test suites above.

**v2 (weeks 7–16):** in-app booking and scheduling on D1; WhatsApp Cloud API templates; Dátil
e-invoicing wired into the payment flow; quiz builder and attempts; certificates (HTML → print);
apoderado dashboard for the therapy vertical; per-student watermark and concurrent-session limits;
Nuvei/Paymentez migration once volume clears roughly $1,500/mo GMV.

**Deliberately deferred:** embedded video conferencing (LiveKit / Daily — only when recorded therapy
sessions become a legally permitted requirement); real DRM; native mobile apps; i18n; a
recommendation engine; live streaming; Cloudflare Realtime.

---

## 12. Where Astro + Cloudflare forces a compromise — quantified

Per D6 these are recorded as *facts about the platform*, not as things to engineer around. Only the
first two change what gets built.

| Gap | Size | Workaround |
|---|---|---|
| **Cloudflare cannot store data in Ecuador or anywhere in LatAm** | D1/R2 jurisdictions are **`eu` and `fedramp` only**, and D1's is **immutable after creation** | Every student record is a cross-border transfer under Resolución SPDP-SPD-2026-0004-R. Choose the jurisdiction at `d1 create` — this is a one-shot, unfixable decision and the only true blocker in this table. |
| **No native PDF or image processing** | Certificates and invoices | HTML → browser print for certificates; Dátil renders the SRI PDF; `imageService: 'compile'` at build. |
| "Free tier" is not real | **$5/mo minimum, forever** — hashing needs 30–50 ms CPU vs a 10 ms cap | Already accepted under D6. Pay it. |
| D1 bills **rows scanned**, not returned | One unindexed scan of a 100k-row table = 100,000 rows read | Indexes day one; `EXPLAIN QUERY PLAN` in the checklist. Good practice regardless of tier. |
| Cron and Queues on Free are unusable (10 ms CPU; 24 h retention) | No nightly batch; lost weekend events | Both resolved by the $5 plan. Still: don't queue payment confirmations in v1 — confirm synchronously. |
| No published Astro-7-on-workerd SSR CPU benchmark | `[unverified]` | Measure a 30-card dashboard with `wrangler tail` in week 2. |

---

## 13. Open questions for the founder

1. **Does the RUC / RIMPE category exist yet?** PayPhone Business requires an active RUC. RIMPE
   Negocio Popular (<= $20k/yr) means 0% IVA; the general regime means 15% on every course. This
   changes checkout maths and whether Dátil ships in MVP or v2. **Blocking.**
2. **Is the therapy vertical in the MVP?** It is the only part needing an ACESS permit, a Norma
   Técnica de Telesalud consent flow, and a registered DPD. Cutting it from v1 removes the single
   largest legal exposure and roughly a week of build. **Recommendation: cut it from MVP.**
3. **Zoom Pro or FarPlay for the music teacher?** Zoom is familiar, one seat, hi-fi. FarPlay has
   better audio but every student installs a new app. **Recommendation: Zoom.**
4. **Will teachers record video themselves, or does Karel?** This decides whether the studio needs
   resumable multipart upload in MVP or just a "send me the file" fallback.
5. **What is the domain, and where is DNS?** The zone must be on Cloudflare for the R2 custom domain
   and free CDN caching. `[unverified: .ec registration cost]`
6. **Free first class — who absorbs it?** It is table stakes locally (100% of Superprof EC maths
   teachers offer it). Preply solves this by keeping 100% of trial revenue from the tutor. Decide
   before pricing.
7. **Do you want offline downloads?** Offering a video download is equivalent to publishing the
   file. **Recommendation: downloadable PDFs and audio-only (29 MB/hour) only.**

---

## 14. Where this collides with other domains

- **Architecture.** I have asserted `output: 'static'` + per-route `prerender = false` + server
  islands, and a build-time D1 read in `getStaticPaths()` for course pages. If architecture wants a
  fully on-demand catalogue, the free static-asset requests disappear and the 100k/day request
  budget becomes a live constraint. Also: sessions live in D1, not KV — that must not be
  re-litigated.
- **Database.** Drizzle over D1; an index on every FK and `WHERE` column;
  `UNIQUE(client_transaction_id)` on `payments`; `UNIQUE(teacher_id, start_at)` on `bookings`;
  progress writes debounced to 120 s. D1's **jurisdiction must be chosen at creation** — coordinate
  before the first `d1 create`.
- **Design.** No UI framework on public routes constrains which components can be interactive; I
  budgeted Svelte only inside `/estudio/*`. Design also owns the "≈ 210 MB" per-lesson data label,
  the 480p default, and the 360 px primary viewport.
- **SEO.** Whisper transcripts are indexable text and the cheapest content SEO available here; the
  catalogue being prerendered is an SEO requirement as much as a cost one. Slugs must be es-EC and
  stable (`/cursos/ingles-conversacional-a2`) because a changed slug is a lost ranking.
- **Brand.** Trust markers are load-bearing in this market: a `+593` WhatsApp click-to-chat as the
  first contact method, a physical address, named teachers with stated credentials, and RUC
  visibility. Brand owns them; I own the wiring.
- **Legal / compliance.** The DPD appointment, the ACESS permit, the SRI IVA category, and RIPD
  standard contractual clauses with Cloudflare all gate launch and none of them are engineering
  tasks. My authorization test suite is the technical evidence the SPDP has said it wants.
