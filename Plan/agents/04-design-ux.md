# 04 — Product Design: UX, Visual System, Design Tokens

**Owner:** Product Designer · **Date:** 2026-09-06 · **Status:** proposal for founder sign-off
**Scope:** personas, IA, flows, design system, mobile/data strategy, accessibility, trust, voice.
**Language of the product:** es-EC only (`00-locked-decisions.md` D1). This document is in English; every string proposed for the UI is in Ecuadorian Spanish.
**Reads as binding:** D1 (es-EC only), D2 (Astro 7 + Workers), D3 (roles), D4 (in-app teacher authoring is MVP), D6 (assume Workers Paid + paid R2 from day one; do not contort for free tier), D7 (a genuinely good product IS the differentiation; WhatsApp stays first-class; publish honest USD prices).

---

## 1. Who we are designing for

Four people. Everything below is a design constraint, not a marketing persona.

### 1.1 Marisol Cedeño — 38 — Guayaquil (Guasmo Sur) — the buyer for terapia
- **Device / net:** Motorola Moto G54, Android 14, 4 GB RAM. Claro prepago, $15 / 12 GB. Browses mostly inside the Facebook and WhatsApp in-app browsers, not Chrome.
- **Trigger:** her daughter Emilia (7) came home with a note: *"recomendamos valoración de lenguaje"*. She is scared, not shopping.
- **Money:** household ~$900/mo, two earners. Real discretionary ≈ $150. Her free alternative is the Centro Municipal Cuatro de Enero — with a waitlist.
- **First 30 seconds she needs:** (1) is this a real, titled professional — nombre, foto, título, registro; (2) how much per session, in dollars, on the page, not "consultar"; (3) online or do I travel to Samborondón; (4) a WhatsApp button that actually opens WhatsApp.
- **Design consequence:** the therapy landing page is a *service* page, not a course card. Credentials above the fold. Price visible. No diagnosis language anywhere.

### 1.2 Jefferson Quinteros — 24 — Quito (Calderón) — the self-buyer
- **Device / net:** Redmi Note 13, Claro $12 plan. Studies 21:00–23:00 after a call-centre shift, sometimes on the Ecovía with one hand on a rail.
- **Trigger:** the bilingual account at work pays ~$180/mo more and requires B1.
- **First 30 seconds:** what level do I start at, how long until I can actually use it, monthly price, is there a free trial class.
- **Design consequence:** one-handed thumb-zone layout is not a nicety. Lessons must be finishable in 8 minutes and resumable to the second. Audio-only is his default on the bus.

### 1.3 Camila Andrade — 15 — Cuenca — the end user whose mother pays
- **Device / net:** her own phone; household fibre; occasionally the family laptop.
- **Trigger:** wants electric guitar, specifically rock/indie, not "método clásico".
- **First 30 seconds:** can I hear the teacher play; is it the style I like; what gear do I need (guitarra, cable, audífonos **con cable**).
- **Design consequence:** the teacher's 45-second audio/video sample is the conversion asset, not the course description. The **payer is not the user** — checkout must let a minor start a flow a guardian finishes.

### 1.4 Nayeli Chuquimarca — 41 — the founding teacher (terapia de lenguaje)
- **Device:** HP laptop, Windows 10, Chrome. Everything else on her phone.
- **Asset base:** 14 years of material in Word, PowerPoint and printed PDFs. Has never uploaded video anywhere except a WhatsApp estado.
- **First 30 seconds in `/estudio`:** where do I put my first class, will I lose my work, when do students see it.
- **Design consequence:** the teacher studio is the highest-risk screen in the product. It must (a) never lose work, and *say so visibly*; (b) never require her to understand "borrador vs publicado" before she has typed anything; (c) accept a PDF as a lesson, not force video.

**Secondary — the other two founders**

| Teacher | Vertical | Comfort | Studio need |
|---|---|---|---|
| Andrés, 33, Quito | Música | Records phone video, uses Audacity | Audio quality, per-lesson gear checklist, turn-taking live-class links |
| Diego, 29, Guayaquil | Programación | Fully technical | Code blocks, 1080p-low screencasts, wants markdown — give him a markdown toggle, not a second studio |

---

## 2. Information architecture and page inventory

`Render`: **static** = prerendered asset · **island** = static shell + `server:defer` fragment · **ssr** = `export const prerender = false`. Per D6 this is no longer a quota-dodging exercise — it is simply that a brochure page has no reason to run a Worker, and prerendered pages are faster on a Moto G on 3G.

### Public / marketing
| Route | Screen | MVP | Render |
|---|---|---|---|
| `/` | Home | ✅ | static |
| `/terapia-de-lenguaje` | Therapy vertical landing (service, not catalogue) | ✅ | static |
| `/clases-en-vivo` | Live-class packages — **the revenue hero** (D-resolution) | ✅ | static |
| `/cursos` | Catalogue of recorded courses | ✅ | static |
| `/cursos/ingles` · `/cursos/musica` · `/cursos/programacion` | Category | ✅ | static |
| `/curso/[slug]` | Course detail | ✅ | static + island (cupos/price) |
| `/profesores` · `/profesor/[slug]` | Teacher index + profile | ✅ | static |
| `/preguntas-frecuentes` | Objection handling | ✅ | static |
| `/contacto` | WhatsApp + form + RUC + dirección | ✅ | static |
| `/legal/terminos` · `/legal/privacidad` · `/legal/consentimiento-menores` · `/legal/reembolsos` | Legal | ✅ | static |
| `/blog/[slug]` | SEO problem-query articles | ✅ (5 posts) | static |
| `/nosotros` | About | v2 | static |
| `/becas` | Low-income tier | v2 | static |

### Auth & checkout
| Route | Screen | MVP | Render |
|---|---|---|---|
| `/ingresar` · `/registro` · `/recuperar-clave` · `/verificar` | Auth | ✅ | ssr |
| `/checkout/[slug]` | Order summary + payer identity (cédula when ≥ $50) | ✅ | ssr |
| `/checkout/pago` | PayPhone widget + diferido selector | ✅ | ssr |
| `/checkout/transferencia` | Bank details + comprobante upload | ✅ | ssr |
| `/checkout/gracias` | Confirmation + WhatsApp handoff | ✅ | ssr |

### Student app
| Route | Screen | MVP | Render |
|---|---|---|---|
| `/mi-aprendizaje` | Dashboard — continue where you left off | ✅ | island |
| `/mi-aprendizaje/[curso]` | Course index / temario with progress | ✅ | island |
| `/aula/[curso]/[leccion]` | **Lesson player** | ✅ | ssr |
| `/mis-clases` | Live sessions + Meet links | ✅ | island |
| `/mi-cuenta` | Profile, clave, LOPDP data rights (ARCO) | ✅ | ssr |
| `/mis-pagos` | Payment history + facturas | ✅ | ssr |
| `/certificados/[id]` | Certificate | v2 | ssr |
| Notes, per-lesson discussion | — | v2 | — |

### Guardian (representante)
| Route | Screen | MVP | Render |
|---|---|---|---|
| `/representante` | Children, sessions, payments | ✅ | island |
| `/representante/consentimiento/[menor]` | Two-step telesalud consent (Norma Técnica §7.2.2) | ✅ | ssr |
| `/representante/informes` | Therapist session notes visible to guardian | v2 | ssr |

### Teacher studio — the make-or-break area
| Route | Screen | MVP | Render |
|---|---|---|---|
| `/estudio` | Home: my courses, drafts, students, next class | ✅ | ssr |
| `/estudio/curso/nuevo` | 3-field create | ✅ | ssr |
| `/estudio/curso/[id]` | Curriculum builder (módulos + lecciones, reorder) | ✅ | ssr |
| `/estudio/curso/[id]/leccion/[lid]` | Lesson editor (video / PDF / texto / enlace) | ✅ | ssr |
| `/estudio/curso/[id]/revisar` | Pre-publish checklist + **Ver como estudiante** | ✅ | ssr |
| `/estudio/agenda` | Availability + booked sessions | ✅ | ssr |
| `/estudio/estudiantes` | Enrolled students + progress | ✅ | ssr |
| `/estudio/perfil` | Bio, photo, credentials, audio sample | ✅ | ssr |
| `/estudio/ingresos` | Earnings | v2 (MVP: monthly PDF from admin) | ssr |
| Quiz builder, cohorts, bulk upload, analytics | — | v2/v3 | — |

### Admin (Karel)
`/admin` · `/admin/transferencias` (**MVP-critical** — this is the manual payment rail) · `/admin/pagos` · `/admin/cursos` (publish approval) · `/admin/usuarios` · `/admin/facturas` (Dátil status). All `ssr`, all gated. **Never route students through Cloudflare Access** (50-user hard block); Access is acceptable *only* for `/admin`.

**Total MVP screens: 39.** That is the honest scope.

---

## 3. Core user flows

### (a) Visitor → enrolled paying student
1. Lands on `/clases-en-vivo` or `/curso/ingles-a1-conversacional` from a WhatsApp link or a `/blog` problem query.
2. Above the fold: price `$29/mes`, teacher face + name, `Tomar una clase de prueba gratis`, WhatsApp button.
3. **Decision point:** trial or buy. Most will take the trial — design for that as the primary path, not the exception.
4. `/registro` — correo + clave + nombre + celular. **Nothing else.** Cédula is asked *later*, at checkout, and only when the total reaches $50 (SRI rule: buyer ID mandatory at $50 incl. IVA, and from 1 Jan 2026 a consumidor-final invoice cannot be voided).
5. `/checkout/[slug]`: order summary, then three co-equal payment options — **Tarjeta**, **Diferido 3/6/9/12** (shown only at ≥ $50, PayPhone's floor), **Transferencia bancaria**.
6. Card path → PayPhone. **Failure states designed:** declined (`Su banco no aprobó el pago. No se le cobró nada.` + fallback to transfer + WhatsApp), timeout, browser-back mid-payment (idempotent order id → `Estamos confirmando su pago`, never a duplicate order).
7. Transfer path → bank details, `Copiar número de cuenta`, comprobante upload. **State `pendiente`; access is NOT granted.** Copy states the SLA. Admin confirms in `/admin/transferencias`. **Never grant access on an uploaded image alone** — edited-screenshot fraud is documented in this market.
8. `/checkout/gracias` → access + correo + WhatsApp confirmation.

### (b) Student → completes a lesson and returns
1. `/mi-aprendizaje` opens on a single **Continuar** card: course, lesson title, `Continuar desde 12:30`.
2. Player opens **paused** at the saved position, at **480p by default**, with weight shown (`~45 MB`).
3. Progress heartbeat at **120 s** + on pause + on `visibilitychange`. This is a **battery and mobile-data decision**, not a quota one (D6): a 30 s heartbeat wakes the radio 120×/hour on a metered prepaid plan for no user benefit.
4. **Failure states:** manifest 404 → `No pudimos cargar el video` + *Escuchar solo el audio* + *Reintentar*; bandwidth collapse → auto-drop to 240p with a non-blocking toast; session expiry mid-lesson → re-auth in a modal that returns to the **same timestamp**, never to the dashboard.
5. On finish: `Lección completada · Le quedan 6 de 12` + a 5 s auto-advance countdown that is cancellable and **off by default under `prefers-reduced-motion`**.
6. Because the heartbeat is 120 s, a hard disconnect can lose up to 2 minutes of position — so the resume prompt is always explicit and scrubbable, never silent.

### (c) Parent → books and pays for a therapy session
1. `/terapia-de-lenguaje` → credentials, price per session, what a valoración is, and what it is **not** (`No hacemos diagnósticos por internet`).
2. `Agendar valoración` → slot picker from the therapist's availability. Ecuador is UTC-5 with no DST — **no timezone UI at all**.
3. Guardian account creation. Guardian is a **first-class role**, not a flag on a student.
4. **Consent gate — blocking, two steps, in this order** (Norma Técnica de Telesalud §7.2.2): (i) authorisation to use telematic means; (ii) free, specific, informed and unequivocal consent for processing the minor's personal *and sensitive* data. Two separate texts, two separate checkboxes, both timestamped and stored. Guardian consent is required **regardless of the child's age** — the 15+ self-consent rule does not reach sensitive data.
5. Minor's profile: nombre, fecha de nacimiento, **and nothing clinical**. No symptom checkboxes in a booking form — that is health data collected before a professional relationship exists.
6. Payment (same rails as (a)).
7. Confirmation shows the Meet link, the therapist's name and título, and what to have ready. **No recording in v1** (§9).

### (d) Teacher → publishes a course from nothing — *the flow that decides whether this launches*

Designed around one belief: **Nayeli must see her own material live in front of a student within her first 25 minutes, unaided.** Per D7 this studio is the moat, so it gets the complexity budget.

**Step 0 — first login.** `/estudio` is empty. One card, no chrome: *"Aquí van a estar sus cursos. Empecemos por el primero — le toma unos 10 minutos."* → `Crear mi primer curso`.

**Step 1 — Create (3 fields, one screen).** Título · Categoría · ¿Para quién es? (2 lines). Save writes the row immediately as `borrador`. **She cannot get stuck:** no image, no price, no description required yet.

**Step 2 — Curriculum builder.** Two levels only: **Módulo → Lección**. Not three. Add by typing into an always-present bottom row and pressing Enter — no "add" modal. Reorder with **explicit ⇅ buttons plus a drag handle** — never drag-only (WCAG 2.5.7 Dragging Movements, AA; and dragging with a thumb at 360px is miserable).

**Step 3 — Lesson editor.** Four lesson types as equal peers, so video is not the price of entry:
`📹 Video` · `📄 PDF / apunte` · `📝 Texto` · `🔗 Clase en vivo (enlace)`.
- Upload uses a **resumable multipart upload direct to R2 via presigned URL, bypassing the Worker**. Progress shows MB and %, survives tab switching, and resumes after a dropped connection: `Se cortó la subida. Retomamos desde el 62%.`
- **Autosave every 10 s idle**, with an honest indicator: `Guardado hace 8 segundos` / `Sin guardar — revise su conexión`. Sessions and autosave both live in D1 — that is simply correct, not a KV workaround (D6).
- The word "publicar" never appears on this screen. Only `Listo`.

**Step 4 — Revisar y publicar.** A checklist, not a form: portada · precio · descripción ≥ 200 caracteres · al menos 3 lecciones · primera lección marcada gratis · **subtítulos (.vtt) en cada video**. Every unmet item is a link that jumps straight to the fix. Then **`Ver como estudiante`** — the single highest-trust feature for a nervous first-time author — and finally `Publicar`.

**Failure states designed explicitly:** upload dies mid-way (resume, never restart) · she closes the tab (draft intact; `/estudio` shows `Borrador · última edición hace 2 días`) · publishes at $0 (`El precio no puede ser $0. Si quiere regalar el curso, márquelo como gratuito.`) · duplicate slug (auto-suffixed silently, editable) · video still transcoding at publish time (publishable; students see `Procesando — disponible en unos minutos`).

---

## 4. The design system

Tailwind v4.3.x, CSS-native. Ships as `src/styles/global.css`. No `tailwind.config.js`.

### 4.1 Colour — reasoning first
We reject the edtech blue→purple gradient (`#6366f1`→`#8b5cf6`) outright: it reads as foreign SaaS to an Ecuadorian parent, and it is the visual signature of exactly the international platforms this school is not. We also reject flag colours and tourist iconography (Galápagos, Panama hat, Otavalo-pattern pastiche).

The palette is drawn from **material, not symbol**: the **barro/teja** of Quito's colonial tile and Ecuadorian cerámica (primary action — warm, human, unmistakably not-SaaS); a **petróleo** deep teal-ink derived from añil dye for structure and seriousness (this is what earns the therapy vertical its credibility); warm **limewash** neutrals instead of cold greys; **verde páramo** for progress.

```css
@import "tailwindcss";

@theme {
  /* — Barro / terracotta: primary action — */
  --color-barro-50:  #FDF4F0;  --color-barro-100: #FAE6DC;
  --color-barro-200: #F3C9B6;  --color-barro-300: #E9A688;
  --color-barro-400: #DC7F58;  --color-barro-500: #C85F33;
  --color-barro-600: #A94A24;  --color-barro-700: #8A3B1D;
  --color-barro-800: #6B2E18;  --color-barro-900: #4A2011;

  /* — Petróleo: ink, structure, secondary — */
  --color-petroleo-50:  #EEF4F6; --color-petroleo-100: #D6E4E9;
  --color-petroleo-200: #AEC9D2; --color-petroleo-300: #7FA7B5;
  --color-petroleo-400: #4F8296; --color-petroleo-500: #2F6478;
  --color-petroleo-600: #22505F; --color-petroleo-700: #1A3F4B;
  --color-petroleo-800: #132F38; --color-petroleo-900: #0C1E24;

  /* — Semantic — */
  --color-exito: #2F6B4F;   /* verde páramo */
  --color-aviso: #8C5A10;   /* ocre quemado */
  --color-error: #A3232B;   /* cochinilla */
  --color-info:  #22505F;

  /* — Surfaces: warm limewash, never cold grey — */
  --color-surface:       #FFFFFF;
  --color-canvas:        #FBF7F3;
  --color-canvas-alt:    #F4EEE7;
  --color-border:        #E3D9CF;
  --color-border-fuerte: #9A8B7D;  /* 3.30:1 on white — passes 1.4.11 */
  --color-ink:           #0C1E24;  /* 17.12:1 */
  --color-ink-2:         #22505F;  /*  8.82:1 */
  --color-ink-muted:     #4C6570;  /*  6.17:1 */

  /* — Night surfaces: lesson player only — */
  --color-noche-900: #0C1E24; --color-noche-800: #132F38;
  --color-noche-700: #1A3F4B; --color-noche-ink: #F0EAE4;

  /* — Type — */
  --font-display: "Fraunces", Georgia, serif;
  --font-sans:    "Public Sans", ui-sans-serif, system-ui, "Segoe UI", sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;

  --text-xs:   0.75rem;  --text-xs--line-height: 1.35;
  --text-sm:   0.875rem; --text-sm--line-height: 1.45;
  --text-base: 1rem;     --text-base--line-height: 1.625; /* Spanish runs ~20% longer than English */
  --text-lg:   1.125rem; --text-lg--line-height: 1.55;
  --text-xl:   1.25rem;  --text-xl--line-height: 1.4;
  --text-2xl:  1.5rem;   --text-2xl--line-height: 1.25;
  --text-3xl:  1.875rem; --text-3xl--line-height: 1.2;
  --text-4xl:  2.25rem;  --text-4xl--line-height: 1.12;
  --text-5xl:  2.75rem;  --text-5xl--line-height: 1.05;
  --text-hero: clamp(1.75rem, 1.10rem + 2.9vw, 3rem); /* 28px @360 → 48px @1280 */

  --spacing: 0.25rem;   /* 4px base; all numeric utilities derive from this */

  --radius-xs: 4px;  --radius-sm: 8px;  --radius-md: 12px;
  --radius-lg: 16px; --radius-xl: 20px; --radius-2xl: 28px;

  /* Warm-tinted shadows, never blue-grey */
  --shadow-xs: 0 1px 2px rgb(12 30 36 / 0.06);
  --shadow-sm: 0 1px 3px rgb(12 30 36 / 0.08), 0 1px 2px rgb(12 30 36 / 0.04);
  --shadow-md: 0 4px 12px rgb(12 30 36 / 0.08);
  --shadow-lg: 0 12px 28px rgb(12 30 36 / 0.12);

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Component radii: buttons and inputs `--radius-md` (12px), cards `--radius-lg` (16px), bottom sheets `--radius-2xl` top corners, pills `9999px`.

### 4.2 Typography — the pairing and why
| Role | Family | Weights | Loads on | Latin subset (est.) |
|---|---|---|---|---|
| Display (h1/h2, wordmark) | **Fraunces** var. | 500–700, `opsz` pinned | **Marketing routes only** | ~22 KB |
| UI + body | **Public Sans** var. | 300–800 | Everywhere | ~28 KB |
| Code | **JetBrains Mono** | 400 / 700 | Only routes containing `<pre>` | ~18 KB, lazy |

Fraunces gives editorial warmth that separates this from every blue SaaS competitor; Public Sans is plain, extremely legible at 16px on a low-DPI Android, and its `latin` subset draws `ñ á é í ó ú ü ¿ ¡` properly (and covers Kichwa orthography, which is ASCII-only). **App screens never load Fraunces** — ~22 KB saved on every authenticated page.

Load via Astro's **stable Fonts API** (`fonts:` in `astro.config.mjs` with `fontProviders.google()`), which self-hosts and subsets the files: no request to `fonts.gstatic.com`, no extra DNS+TLS handshake on a 3G connection, and automatic `size-adjust` fallback metrics to kill CLS.

### 4.3 Component specs
| Component | Spec |
|---|---|
| **Button / primary** | `h-12` (48px) mobile, `h-11` desktop · `px-5` · `rounded-md` · `bg-barro-600` `text-white` (**5.69:1**) · `font-semibold text-base` · hover `bg-barro-700` · active `translate-y-px` · disabled `bg-canvas-alt text-ink-muted` (no opacity tricks — they fail contrast) |
| **Button / secondary** | same box · transparent · `border border-petroleo-600` · `text-petroleo-600` (8.82:1) |
| **Button / ghost** | `text-petroleo-600`, underline on hover, min 44×44 tap incl. padding |
| **Button / whatsapp** | `bg-[#25D366]` with `text-petroleo-900` (green + dark text passes; green + white does **not**) · glyph left · label `Escribir por WhatsApp` |
| **Input** | `h-12` · `rounded-md` · `border border-border-fuerte` (3.30:1) · white bg · `text-base` — **never below 16px, iOS zooms on focus below 16px** · label always visible above, never placeholder-as-label · error = `border-error` + icon + text below |
| **Card** | `bg-surface` · `rounded-lg` · `border border-border` · `shadow-sm` · `p-4` mobile / `p-6` desktop |
| **Course card** | 16:9 cover (widths 360/720/1080 only) · categoría badge over cover · título `text-lg font-semibold` clamped to 2 lines · teacher name + 24px avatar · `$29/mes` `text-xl font-bold` · duration + lesson count · **whole card is one link, no nested interactive elements** |
| **Progress bar** | `h-2 rounded-full bg-canvas-alt`, fill `bg-exito` · `role="progressbar"` + `aria-valuenow/min/max` · **always paired with a text label** (`6 de 12 lecciones`) — colour alone never carries progress |
| **Badge** | `rounded-full px-3 py-1 text-xs font-semibold` · `Gratis` (exito/white) · `Nuevo` (barro-100/barro-800) · `Cupos limitados` (aviso/white) · `Borrador` (canvas-alt/ink-muted) |
| **Nav** | Mobile top bar 56px: wordmark + hamburger + WhatsApp icon. **In-app: bottom tab bar 64px**, 4 items max — Inicio · Mis cursos · Mis clases · Cuenta. Bottom, because it is the only one-handed-reachable zone on a 6.5" screen |
| **Modal** | Mobile = **bottom sheet**, `rounded-t-2xl`, max-height 85vh, drag-to-dismiss **plus** a 44px close button (2.5.7). Focus trapped, `Esc` closes, focus returns to the trigger |
| **Toast** | Bottom, above the tab bar · `role="status" aria-live="polite"` · auto-dismiss 6 s (**errors never auto-dismiss**) · one at a time |

---

## 5. Mobile-first specifics

**Primary viewport: 360 × 800.** Design at 360 first; desktop is a widening, not a redesign.

- **Grid at 360:** single column, 16px gutters, 328px content. Course cards full-width. Two-up grids only from 640px.
- **Thumb reach:** the top 25% of a 6.5" screen is unreachable one-handed. Therefore the primary CTA always sits in the bottom 30% or a sticky bottom bar; destructive actions are never adjacent to primary ones; player transport controls sit at the bottom.
- **Images:** AVIF with WebP fallback. **Exactly three widths — 360, 720, 1080.** Not because of a free-tier cliff (D6) but because a fixed variant set keeps the cache hot, keeps the CDN bill trivial, and removes a whole class of layout bugs. Every `<img>` carries explicit `width`/`height`, `loading="lazy"` except the LCP hero, `decoding="async"`.
- **What we deliberately do NOT load:** no web font on the critical path beyond the two subset variable files · no analytics on marketing pages until after `load` · no carousel library · no icon font (inline SVG only) · no client framework on any static route. Budget: **≤ 120 KB JS on `/`, ≤ 220 KB on `/aula/*`**.
- **Video — the real constraint is bundle cost, not speed.** Typical prepaid: ~$10 for 8 GB, and roughly **$0.10/MB (~$100/GB) out of bundle**. One hour of 720p ≈ 1,048 MB = 13% of that bundle.

| Rung | Bitrate | Per hour | UI treatment |
|---|---|---|---|
| Audio-only | 64 kbps | **29 MB** | `Escuchar solo el audio` — one tap, always visible |
| 240p | 368 kbps | 166 MB | Automatic fallback on congestion |
| **480p** | 1,196 kbps | **538 MB** | **Default. Never "auto-highest".** |
| 720p | 2,328 kbps | 1,048 MB | Opt-in, labelled `alta calidad · ~1 GB/hora` |

  Every lesson shows its weight before playback (`Video · 8 min · ~72 MB`). Lessons are authored at **6–10 minutes**; the studio warns above 15.
- **Flaky connection:** hls.js with conservative ABR (start 480p, never jump more than one rung up). On a stall > 8 s: pause and show `Su conexión está lenta` with two buttons — *Escuchar solo el audio* / *Reintentar*. **Never an infinite spinner.**
- **Offline / resume:** position stored server-side in D1 *and* in `localStorage`, so resume works before auth resolves. **Video is not downloadable** — that is the one control that actually stops leakage. **PDFs and the audio-only track (29 MB/hour) are downloadable**, which solves the real metered-data problem without giving away the asset.

---

## 6. Accessibility

**Target: WCAG 2.2 Level AA.** Verified levels for the 2.2 additions we must hit: 2.4.11 Focus Not Obscured (Minimum) **AA** · 2.5.7 Dragging Movements **AA** · 2.5.8 Target Size (Minimum) **AA** · 3.2.6 Consistent Help **A** · 3.3.7 Redundant Entry **A** · 3.3.8 Accessible Authentication (Minimum) **AA**. (2.4.13 Focus Appearance is AAA; we meet it anyway.)

**Contrast pairs — computed, not eyeballed:**

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| `#0C1E24` | `#FFFFFF` | 17.12:1 | Body text |
| `#22505F` | `#FFFFFF` | 8.82:1 | Secondary text, links |
| `#4C6570` | `#FFFFFF` | 6.17:1 | Muted metadata, safe at 14px |
| `#FFFFFF` | `#A94A24` | 5.69:1 | Primary button |
| `#FFFFFF` | `#2F6B4F` | 6.29:1 | Success |
| `#FFFFFF` | `#A3232B` | 7.41:1 | Error |
| `#FFFFFF` | `#8C5A10` | 5.86:1 | Warning |
| `#9A8B7D` | `#FFFFFF` | 3.30:1 | Input borders (1.4.11 non-text, 3:1) |
| `#F0EAE4` | `#0C1E24` | 14.34:1 | Player text on night |
| `#E9A688` | `#0C1E24` | 8.38:1 | Player accent on night |

- **Targets:** 44×44 CSS px minimum everywhere — deliberately above the 24×24 AA floor, because Marisol taps with a thumb on a moving bus.
- **Focus:** `outline: 3px solid var(--color-barro-500); outline-offset: 2px;` plus `box-shadow: 0 0 0 5px rgb(255 255 255 / .95)` so the ring survives on both light and night surfaces. Sticky bars use `scroll-margin-block: 5rem` so focus is never obscured (2.4.11).
- **Lesson player keyboard map** (shown on-screen under `?`): `Space` play/pause · `←/→` ±5 s · `Shift+←/→` ±10 s · `↑/↓` volume · `C` subtítulos · `M` mute · `F` pantalla completa · `.`/`,` frame step · `1–9` seek to % · `A` audio-only. Every control is a real `<button>` with `aria-label`; tab order follows visual order; the transcript is a focusable scrollable region synced to playback.
- **Captions are mandatory, not optional.** Every video lesson requires a `.vtt` before it can be published — enforced in `/estudio/curso/[id]/revisar`. Four reasons: 1.2.2 AA; students watching muted on a bus; **the therapy vertical serves children whose comprehension depends on seeing the word**; and the caption file is the transcript, which is free indexable SEO text. The studio accepts a pasted auto-draft but requires the teacher to confirm it — never auto-publish an unreviewed transcript.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` kills transitions > 100 ms, disables the auto-advance countdown, disables the progress-fill animation, and removes any parallax. Nothing here animates for decoration alone.
- **Specific to children with learning difficulties — the differentiator, not a checkbox:**
  - **`Modo calma`** — a persisted per-account toggle that removes decorative imagery, disables all animation, hides progress gamification, and reduces the page to one task per screen.
  - **Reading controls** on lesson text: line-height 1.5→2.0, letter-spacing 0→0.12em, word-spacing 0→0.16em, plus a heavier weight swap. **Never justified text** (rivers of whitespace are a documented dyslexia problem). Max 66 characters per line.
  - **No time limits anywhere.** No countdown quizzes, no session expiry that discards work (2.2.1). Auth sessions warn and extend rather than drop.
  - **Predictable, unchanging navigation** (3.2.3 / 3.2.4): the bottom tab bar never reorders and never relabels by context.
  - **The guardian is often the operator.** Every child-facing screen must be usable by an adult sitting beside the child; the guardian view is a switch, not a second login.
  - **Plain language:** short sentences, no metaphor, no idiom, instructions before the control they describe.

---

## 7. Trust and conversion

Per D7, publishing an honest USD price is a live differentiator — most incumbents hide it behind "Solicita información". Above the fold at 360px, the home page must show, in this order:

1. **One sentence naming the outcome and the country.** `Clases en línea con profesores ecuatorianos. Inglés, música, programación y terapia de lenguaje para niños.`
2. **A real human face** — one of the three teachers, photographed. Stock photography is the fastest way to read as a scam here.
3. **Price, in USD, on the page.** `Desde $22 la sesión · $29 al mes.`
4. **Primary CTA: `Tomar una clase de prueba gratis`.** A free first class is *table stakes* in this market (100% of Superprof EC maths tutors, nearly all Quito tutors, EDIN's first psicopedagogía session). Not offering it reads as expensive, not premium.
5. **`Escribir por WhatsApp` as a co-equal button**, `+593` visible, `wa.me` deep link. 74% of Ecuadorian online shopping runs through WhatsApp. This is not a support link — it is a payment-objection escape hatch, and D7 makes it first-class.
6. **Trust strip immediately below the fold:** RUC visible · dirección física · teléfono fijo · `Pago con tarjeta, transferencia o diferido hasta 12 meses` · `Factura electrónica` · three named testimonials with real names and city.

**Teacher credibility** (`/profesor/[slug]` and the course-detail header): photo, full name, city, years teaching, **título and registration number for the therapist (SENESCYT / ACESS) rendered as verifiable text, not a badge graphic**, a 45-second audio or video sample, and the courses they teach. For terapia this block sits *above* the price.

**Objection handling** — `/preguntas-frecuentes`, verbatim headings: `¿Es un profesor real o un video grabado?` · `¿Qué pasa si no me gusta la primera clase?` · `¿Puedo pagar en cuotas?` · `¿Puedo pagar por transferencia?` · `¿Cuántos datos consume una clase?` · `¿Necesito computadora?` · `¿Emiten factura?` · `¿Mi hijo necesita estar conmigo?`

---

## 8. Voice and tone (es-EC)

**Register: `usted` everywhere in chrome, transactional and error copy — for every audience, including teenagers.** In Ecuador, and especially the Sierra, `usted` is the default of warmth and respect, not distance; `tú` from an unknown institution reads as a foreign brand or a scam. `tú` is permitted **only inside lesson content**, at the individual teacher's discretion. Never `vosotros`, never `vale`, never `ordenador`/`móvil`, never `coger`. Use `celular`, `computadora`, `clave`, `correo`, `matricularse`, `cédula`, `profe` (affectionate, teacher-facing only).

Warmth: **warm but not cute.** No stacked exclamation marks, no emoji in error states, no mascot. The therapy vertical is one register more formal and **never** uses clinical or diagnostic language.

| # | Context | es-EC copy |
|---|---|---|
| 1 | Empty student dashboard | `Todavía no tiene ningún curso. Explore el catálogo y empiece con una clase de prueba gratis.` → `Ver cursos` |
| 2 | Empty teacher studio | `Aquí van a estar sus cursos. Empecemos por el primero — le toma unos 10 minutos.` → `Crear mi primer curso` |
| 3 | Payment declined | `Su banco no aprobó el pago. No se le cobró nada. Puede intentar con otra tarjeta o pagar por transferencia.` → `Pagar por transferencia` · `Escribirnos por WhatsApp` |
| 4 | Video won't load | `No pudimos cargar el video. Su conexión está lenta.` → `Escuchar solo el audio (29 MB por hora)` · `Reintentar` |
| 5 | Enrolment success | `¡Listo! Ya está matriculada en Inglés A1. Le enviamos el acceso a su correo y a su WhatsApp.` |
| 6 | Lesson complete | `Lección completada. Le quedan 6 de 12.` → `Siguiente lección` |
| 7 | Transfer pending | `Recibimos su comprobante. Lo revisamos y le confirmamos por WhatsApp en menos de 12 horas hábiles. No hace falta que lo envíe de nuevo.` |
| 8 | Data-saver toast | `Está con datos móviles. Bajamos la calidad a 480p para cuidarle el plan.` → `Cambiar calidad` |
| 9 | Guardian consent | `Como representante de Emilia, usted autoriza estas sesiones y el manejo de sus datos. Puede retirar esta autorización cuando quiera.` |
| 10 | Studio autosave | `Guardado hace 8 segundos` / `Sin guardar — revise su conexión` |
| 11 | Inline field errors | `Falta el correo. Lo necesitamos para enviarle el acceso.` / `Esa clave es muy corta. Use al menos 8 caracteres.` |
| 12 | Cancel a booked class | `¿Seguro que quiere cancelar la clase del martes 14 a las 19:00? Si cancela con menos de 24 horas de anticipación, la clase se descuenta igual.` |
| 13 | Therapy disclaimer | `No hacemos diagnósticos por internet. La primera sesión es una valoración con la profesional.` |
| 14 | 404 | `No encontramos esta página. Puede volver al inicio o buscar en el catálogo.` |

**CTA label set (use these exact strings):** `Tomar una clase de prueba gratis` · `Matricularme — $29 al mes` · `Pagar en 3, 6, 9 o 12 cuotas` · `Escribir por WhatsApp` · `Ver el temario completo` · `Continuar donde quedé` · `Agendar valoración` · `Ver como estudiante`.

**Money formatting:** `Intl.NumberFormat('es-EC', {style:'currency', currency:'USD'})` renders `$29,00`. ⚠️ Ecuador's USD usage means `$29.00` is also common in the wild. Founder must pick one and lock it — mixing them looks amateur.

---

## 9. What we deliberately will NOT design for v1

| Not building | Why |
|---|---|
| Downloadable video | Equivalent to publishing the file; audio-only + PDF solves 90% of the metered-data problem at 0% of the leakage risk |
| Recorded therapy sessions | Stacks sensitive + minors' + health data (LOPDP Art. 25 a/b/c), forces a mandatory DPIA and 5+5–10 year retention. **The cheapest compliance strategy is to not create the artefact.** |
| Embedded video conferencing | A Google Meet link stored per session works on every Android in Ecuador and adds no per-participant-minute billing. Embedding buys nothing a student values |
| Quiz builder / auto-grading | Largest secondary scope item; a teacher can attach a Google Form in v1 |
| Certificates | Meaningless without accreditation, and accreditation (Operador de Capacitación, Ministerio del Trabajo) is a business decision, not a design one |
| Student↔student forums | Moderation liability with minors on the platform, at three teachers' scale |
| Full dark mode | Only the lesson player is dark, by design. A dual-theme system doubles QA surface for near-zero conversion value |
| Native app / PWA install prompt | Nothing in v1 needs it, and the prompt costs trust on first visit |
| i18n / English UI | Locked by D1 |
| Gamification (streaks, points, leaderboards) | Actively harmful for the learning-difficulties audience, and a distraction from the only metric that matters: did they come back |
| Teacher earnings dashboard | v2. MVP: Karel sends a monthly PDF. Saves a screen plus payout-reconciliation UI |

---

## 10. Wireframes (360px)

### 10.1 Home `/`
```
┌────────────────────────────────┐ 360px
│ [wordmark]          ☰   (wa)   │ 56
├────────────────────────────────┤
│                                │
│  Clases en línea con           │  h1, Fraunces
│  profesores ecuatorianos.      │  clamp 28px
│                                │
│  Inglés · Música ·             │  16px ink-muted
│  Programación · Terapia de     │
│  lenguaje para niños.          │
│                                │
│  ┌──────────────────────────┐  │
│  │  [foto real, profesora]  │  │  AVIF 360w
│  │   4:3 · LCP · no lazy    │  │  ~28 KB
│  └──────────────────────────┘  │
│                                │
│  Desde $22 la sesión ·         │  20px bold
│  $29 al mes                    │
│                                │
│ ┌────────────────────────────┐ │
│ │ Tomar una clase de prueba  │ │ 48px barro-600
│ │ gratis                     │ │
│ └────────────────────────────┘ │
│ ┌────────────────────────────┐ │
│ │ (wa) Escribir por WhatsApp │ │ 48px #25D366
│ └────────────────────────────┘ │
├──── fold ≈ 800px ──────────────┤
│ RUC 09xxxxxxx001 · Guayaquil   │ trust strip
│ Tarjeta · Transferencia ·      │
│ Diferido hasta 12 meses        │
├────────────────────────────────┤
│ Clases en vivo  (revenue hero) │
│ ┌────────────────────────────┐ │
│ │ Paquete mensual · 4 clases │ │
│ │ $29/mes · o 3 cuotas       │ │
│ └────────────────────────────┘ │
├────────────────────────────────┤
│ Cursos grabados                │
│ ┌────────────────────────────┐ │
│ │ [cover 16:9]     [Gratis]  │ │ course card
│ │ Inglés A1 Conversacional   │ │
│ │ (o) Jefferson M. · Quito   │ │
│ │ $29/mes · 12 lecciones     │ │
│ └────────────────────────────┘ │
│ … 3 more → "Ver todos"         │
├────────────────────────────────┤
│ Testimonios (3, con nombre)    │
│ Preguntas frecuentes (8)       │
│ Footer: dirección · teléfono   │
└────────────────────────────────┘
```

### 10.2 Course detail `/curso/[slug]`
```
┌────────────────────────────────┐
│ ‹ Cursos                 (wa)  │
├────────────────────────────────┤
│ [ Inglés ]  [ Cupos limitados ]│ badges
│ Inglés A1 Conversacional       │ h1 24px
│ Para trabajar en call center   │ 16px muted
│                                │
│ ┌────────────────────────────┐ │
│ │  ▶ Video de presentación   │ │ poster only,
│ │    0:45 · ~7 MB            │ │ click-to-load
│ └────────────────────────────┘ │
│                                │
│ ┌──(o)───────────────────────┐ │ TEACHER BLOCK
│ │ Prof. Jefferson Morán      │ │ sits ABOVE
│ │ Quito · 8 años enseñando   │ │ the price
│ │ Lic. en Lingüística — UCE  │ │
│ │ ▶ Escuchar 45 s            │ │
│ └────────────────────────────┘ │
│                                │
│ $29,00 / mes                   │ 24px bold
│ o 3 cuotas de $9,67 sin interés│ 14px
│                                │
│ Temario  (12 lecciones · 2 h)  │
│  ▾ Módulo 1 · Saludos       3  │ accordion,
│    · Lección 1  [Gratis] 6 min │ 1st module
│    · Lección 2   8 min ~72 MB  │ open
│  ▸ Módulo 2 · El trabajo    4  │
│  ▸ Módulo 3 · Llamadas      5  │
│                                │
│ ¿Qué necesito? Celular y       │
│ audífonos. No necesita compu.  │
│                                │
│ Preguntas frecuentes (4)       │
├────────────────────────────────┤
│ STICKY BOTTOM (always visible) │
│ $29/mes   [ Clase de prueba ]  │ 64px
└────────────────────────────────┘
```

### 10.3 Student dashboard `/mi-aprendizaje`
```
┌────────────────────────────────┐
│ Hola, Jefferson          (o)   │
├────────────────────────────────┤
│ ┌────────────────────────────┐ │ ← server island;
│ │ CONTINUAR                  │ │   skeleton first,
│ │ Inglés A1 Conversacional   │ │   never a spinner
│ │ Lección 4 · Pedir ayuda    │ │
│ │ ██████████░░░░░░   6/12    │ │ bar + TEXT label
│ │ ┌────────────────────────┐ │ │
│ │ │ Continuar desde 12:30  │ │ │ 48px primary
│ │ └────────────────────────┘ │ │
│ └────────────────────────────┘ │
│                                │
│ Próxima clase en vivo          │
│ ┌────────────────────────────┐ │
│ │ Mar 14 sep · 19:00         │ │
│ │ con Prof. Jefferson Morán  │ │
│ │ [ Entrar a la clase ]      │ │ enabled at −10 min
│ └────────────────────────────┘ │
│                                │
│ Mis cursos (2)                 │
│ ┌────────────────────────────┐ │
│ │ [cover]  Inglés A1         │ │
│ │ ████████░░   6/12          │ │
│ └────────────────────────────┘ │
│ ┌────────────────────────────┐ │
│ │ [cover]  Guitarra I        │ │
│ │ ██░░░░░░░░   2/16          │ │
│ └────────────────────────────┘ │
│                                │
├────────────────────────────────┤
│  🏠      📚      🗓      👤     │ bottom tabs
│ Inicio  Cursos  Clases  Cuenta │ 64px, never
└────────────────────────────────┘ reorders
```

### 10.4 Lesson player `/aula/[curso]/[leccion]` — night surface
```
┌────────────────────────────────┐ bg #0C1E24
│ ‹ Inglés A1        4 de 12  ☰  │ 48px
├────────────────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓                              ▓│ 16:9
│▓         ▶  (56px)            ▓│ tap-to-play,
│▓                              ▓│ NEVER autoplay
│▓  subtítulos: soft, no quemados▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│ ─────●──────────── 12:30/18:04 │ scrub, 44px hit
│ ⏮  ⏯  ⏭   CC  480p▾  🎧  ⛶    │ 48px row at
│                                │ bottom = thumb
├────────────────────────────────┤
│ 4. Pedir ayuda en el trabajo   │ h1 20px, noche-ink
│ Video · 8 min · ~72 MB         │ 14px muted
│                                │
│ ┌────────────────────────────┐ │
│ │ 🎧 Escuchar solo el audio  │ │ always visible,
│ │    29 MB por hora          │ │ never buried
│ └────────────────────────────┘ │
│                                │
│ [ Transcripción ▾ ]            │ synced, focusable
│ [ Material (PDF, 340 KB) ⬇ ]   │ downloadable
│                                │
│ ┌────────────────────────────┐ │
│ │ Marcar como completada     │ │ explicit; never
│ └────────────────────────────┘ │ auto-complete
│ ‹ Anterior         Siguiente › │
└────────────────────────────────┘
Teclado: Space ⏯ · ←/→ ±5s · C subtítulos · A audio · F pantalla
```

---

## 11. Phased plan

### MVP — 8 weeks (design track running one week ahead of build)

| Week | Design deliverable |
|---|---|
| 1 | Tokens shipped as `src/styles/global.css` + a component gallery at `/kit` (noindex). Fonts wired via Astro Fonts API. Contrast audit signed off. |
| 2 | Home, `/clases-en-vivo`, course detail, therapy landing — high fidelity at 360/768/1280, with full es-EC copy decks. |
| 3 | Auth + checkout, all three payment paths and every failure state. `/admin/transferencias`. |
| 4–5 | **Teacher studio** — full flow, prototyped and tested with Nayeli on her own laptop *before* a line of it is built. This is the week to lose, not the marketing pages. |
| 6 | Student dashboard, course index, lesson player, audio-only mode, resume behaviour. |
| 7 | Guardian role + two-step consent screens. Accessibility pass: keyboard, NVDA + TalkBack, reduced motion, `Modo calma`. |
| 8 | Content seeding with the three teachers; real-device testing on a Moto G-class phone throttled to 3G; copy freeze. |

**Hard gate before launch:** each of the three teachers publishes one real course, unaided, while observed. If any cannot, the studio ships again before the marketing site does.

**Sequencing note (per the locked-decisions resolution):** live classes are what start revenue at 20 students, so `/clases-en-vivo` + booking + payment must be usable by week 3 even if the recorded-course studio is still rough. The studio is what stops the business being time-for-money, so it must be *finished* by week 5, not started then.

### v2 (weeks 9–20)
Quiz builder · certificates · teacher earnings dashboard · per-lesson notes · therapy session reports for guardians · `/becas` low-income tier · notification preferences · WhatsApp templating.

### Deferred indefinitely
Forums · native app · gamification · full dark mode · live-class embedding · i18n.

---

## 12. Where the Astro + Cloudflare constraint shapes the design

Per D6 these are **shape**, not compromise — we assume Workers Paid ($5/mo) and paid R2 from day one and do not contort around free-tier cliffs. What genuinely remains:

| Constraint | Design consequence |
|---|---|
| Server islands render after the shell | Every personalised block needs a **skeleton**, not a spinner, and the shell must be readable without it. Three components: `CardSkeleton`, `ProgressSkeleton`, `ListSkeleton` |
| Workers request/response model + Ecuadorian upload speeds | Video upload **must** go direct to R2 via presigned URL, bypassing the Worker. A 400 MB upload through a Worker will not survive a Guayaquil mobile connection. This is a hard design requirement, not an optimisation |
| R2 signed URLs, no DRM available at this budget | No downloadable video. Audio-only (29 MB/h) + PDFs are the substitute. Anti-piracy effort goes into concurrent-session limits in D1, not video tech |
| Cloudflare CDN caching favours a fixed asset set | Exactly three image widths (360/720/1080) — keeps the cache hot and removes a class of layout bugs |
| `r2.dev` is rate-limited and non-production | Media must be served from a custom domain on the Cloudflare zone from day one — affects nothing visually but must be in place before the first course is published |
| Mobile battery + metered prepaid data | 120 s progress heartbeat rather than 30 s. Cost: up to 2 minutes of lost position on a hard disconnect, mitigated by an explicit scrubbable resume prompt |
| Astro Fonts API (stable) self-hosts and subsets | No `fonts.gstatic.com` handshake; ~50 KB of font on marketing, ~28 KB in the app |

---

## 13. Open questions for the founder

1. **Hero hierarchy.** The locked decisions say carry both live classes (revenue now) and recorded courses (leverage later), with an explicit order. I have designed the home page with **live classes as the hero and recorded courses as the second surface**. Confirm this ordering, or flip it.
2. **Money formatting:** `$29,00` (es-EC / RAE) or `$29.00` (USD convention, widely used in Ecuador)? Pick one, permanently.
3. **Trial-class economics:** who absorbs the free first class — the platform or the teacher? Preply keeps 100% of trial revenue from the tutor. This changes how prominently the trial CTA can be pushed.
4. **Therapy vertical go / no-go.** Does the therapist hold an ACESS *permiso de funcionamiento* covering **remote** delivery (Norma Técnica de Telesalud, Oct 2025)? If not, `/terapia-de-lenguaje` must ship as a waitlist page, not a booking page. **This is a permit-or-don't-launch design fork and I need the answer by week 2.**
5. **Brand name and wordmark.** No naming decision exists. Fraunces was chosen partly to carry a typographic wordmark if no logo arrives — but someone must own this by week 2.
6. **WhatsApp:** a manual number, or WhatsApp Business API? Determines whether "le confirmamos por WhatsApp" is a promise the product keeps or one Karel keeps by hand at 22:00.
7. **Are the three teachers willing to be photographed and named?** The entire trust strategy depends on real faces and real credentials. A refusal materially changes that vertical's conversion design.
8. **Guardian ↔ student account linking:** one shared login (realistic where a household shares one phone) or two? I have designed a **guardian account with child profiles beneath it, no separate child login**. Confirm.
9. **Live-class package shape:** 4 classes/month at $29, or per-class à la carte, or both? The `/clases-en-vivo` page and the checkout diferido threshold both depend on the answer.

---

## 14. Where this collides with other domains

| Specialist | Collision | Must be reconciled |
|---|---|---|
| **Architect** | I have marked 15 of 39 MVP screens `ssr` and the rest `static`/`island`. Presigned direct-to-R2 upload bypassing the Worker is a design requirement, not an optimisation. Server islands need skeletons, which means the island boundary must be drawn where a skeleton makes visual sense — not purely where the data lives. | Agree the exact `prerender` map and the island boundaries on `/mi-aprendizaje` and `/curso/[slug]`. |
| **Database** | Guardian is a **first-class role with child profiles beneath it**, not a boolean on `users`. Consent is a **table with timestamps and two distinct consent types** (telematic means; sensitive-data processing), not a checkbox column. Lessons have **4 types** (`video`/`pdf`/`texto`/`enlace`) and need a discriminator plus an assets table. Progress heartbeat is 120 s. Draft/published is a state on courses *and* on individual lessons. | Schema for `guardians`, `minors`, `consents`, `lesson_progress`, `lesson_assets`, `course_state`. Index every FK — D1 bills rows *scanned*, not returned. |
| **Tech stack** | Astro Fonts API (stable) for self-hosted subset fonts; hls.js for the player; **no client framework on static routes**. The two places I accept a real stateful island are the curriculum reorder and the resumable uploader. | Confirm hls.js version, and whether the studio islands are vanilla or a small framework. My design assumes vanilla plus a drag library that has a keyboard fallback (2.5.7 is AA and non-negotiable). |
| **SEO** | Course detail and blog pages must stay fully prerendered, with the caption transcript rendered as indexable text. Slugs assumed: `/curso/[slug]`, `/cursos/ingles`, `/terapia-de-lenguaje`, `/clases-en-vivo`, `/profesor/[slug]`. Research says target *problem* queries (`mi hijo no habla bien`, `nivelación matemáticas Quito`), so `/blog` needs treatment as a real landing surface with the same trust strip and WhatsApp affordance as the home page — not a bare article template. | Lock the slug scheme and the blog landing template before week 2. |
| **Brand** | No name, no logo, no photography direction exists. The barro/petróleo/limewash palette and the Fraunces + Public Sans pairing are a proposal a brand decision can override — but the **contrast pairs and token structure must survive any recolour**, or the accessibility work is redone from scratch. | Name + wordmark by week 2, or the home page ships with a typographic lockup. |
| **Legal / compliance (via architecture)** | The two-step consent flow, the absence of session recording, the "no diagnosis" copy rule, the cédula-at-$50 checkout field, and the ARCO rights screen in `/mi-cuenta` are all design surfaces created by LOPDP and the Norma Técnica de Telesalud. | The external DPD (who cannot be Karel — Res. SPDP-SPD-2025-0028-R Art. 15) must review `/legal/*`, the consent screens and all therapy copy before launch. |
