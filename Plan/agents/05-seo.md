# 05 — SEO Plan (es-EC)

**Owner:** SEO strategist
**Date:** 2026-09-06
**Stack context:** Astro 7.3.1 + `@astrojs/cloudflare@14.3.0` on Workers Static Assets, D1, R2. Single locale `es-EC`. Locked in `Plan/00-locked-decisions.md`.

---

## 0. The honest framing before any tactics

INEC ENEMDU (July 2025) says **6.9%** of Ecuadorian internet users name "educación y aprendizaje" as their primary online activity, against 76.8% for messaging. **Nobody in Ecuador browses for courses.** Search demand here is *trigger-driven*: a failing grade, a supletorio, a job that demands B1 English, a teacher telling a parent their child does not pronounce the /r/.

Three consequences that shape everything below:

1. **SEO will not deliver the first cohort.** Weeks 1–12 of revenue must come from the three teachers' own WhatsApp networks. SEO is a month-6-onward channel on a brand-new domain. Anyone who promises otherwise is selling.
2. **Target problem queries, not category queries.** `mi hijo de 3 años no habla` beats `terapia de lenguaje` on every axis that matters at this scale.
3. **Every organic session must end in WhatsApp**, not a self-serve checkout. 74% of Ecuadorian online shopping runs through WhatsApp. The CTA is the ranking factor that pays.

---

## 1. Keyword research

### 1.1 Where the volume numbers come from — read this before trusting the tables

I have **no paid keyword tool**. Every volume figure below is a **modelled estimate**, triangulated from:

- **(a)** Ecuador's search population: 15.4M internet users of 18.4M people (DataReportal Digital 2026), ≈3.5% of the LatAm Spanish-language search market.
- **(b)** SERP composition observed live on 2026-09-06 — who ranks, how many ads, whether the SERP is national or hyperlocal.
- **(c)** Known local anchors (CEC-EPN, Superprof EC, tusclasesparticulares.com.ec, CECIT, Música en Casa) and their apparent depth of listing inventory.

**Confidence** is `M` (medium — corroborated by SERP evidence) or `L` (low — pure model). Nothing here is `H`.

**Week-1 action that replaces this whole column:** open a free Google Ads account, set location = Ecuador, language = Spanish, and run Keyword Planner. Without active spend it returns banded ranges (`100–1K`), which is *good enough* — you need relative order, not precision. Supplement with Google Trends (EC region, 12-month) and, from month 2, **Search Console Performance — which is the only truly accurate volume source you will ever have for your own site.**

Difficulty (`KD`) is a 1–100 judgement from SERP composition, not a tool score.

### 1.2 English (`/ingles/`)

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target page |
|---|---|---|---|---|---|
| clases de inglés online | 1,900 | M | Commercial | 62 | `/ingles/` |
| curso de inglés online | 1,300 | M | Commercial | 60 | `/ingles/` |
| clases de inglés online Ecuador | 320 | M | Commercial | 34 | `/ingles/` |
| **suficiencia de inglés** (univ. graduation req.) | 480 | M | Informational→Trans | 28 | `/blog/suficiencia-de-ingles-universidades-ecuador/` |
| certificado de inglés para graduarse | 210 | L | Transactional | 26 | same |
| clases de inglés Quito | 590 | M | Local commercial | 44 | `/ingles/en/quito/` |
| clases de inglés Guayaquil | 390 | M | Local commercial | 41 | `/ingles/en/guayaquil/` |
| clases de inglés Cuenca | 140 | L | Local commercial | 30 | `/ingles/en/cuenca/` |
| clases de inglés Ambato / Manta / Loja | 40–70 ea. | L | Local commercial | 22 | gated — see §2.4 |
| profesor de inglés online Ecuador | 90 | L | Transactional | 25 | `/ingles/` + `/profesores/` |
| clases de inglés para niños online | 260 | L | Commercial | 33 | `/ingles/para/ninos/` |
| inglés para adultos desde cero | 180 | L | Commercial | 31 | `/ingles/nivel/principiantes/` |
| cómo pasar de A2 a B1 en inglés | 110 | L | Informational | 20 | Article W6 |
| cuánto cuesta un curso de inglés en Ecuador | 140 | L | Commercial | 19 | Article W7 |
| clases de inglés por Zoom | 90 | L | Commercial | 24 | `/ingles/` FAQ block |

**Ecuadorian specificity:** *suficiencia de inglés* is a graduation requirement at Ecuadorian universities and is a near-uncontested query with real transactional pull. It has no Spain/Mexico equivalent. Prioritise it over the head terms. (Per-university level requirements — **unverified, must be researched before publishing** the W5 article.)

**Where users search in English:** almost never in this vertical, except test names — `TOEFL`, `IELTS`, `EF SET`, `Cambridge B1 Preliminary`. Use them verbatim, untranslated, inside Spanish copy.

### 1.3 Speech & learning therapy (`/terapia-de-lenguaje/`) — the highest-ROI vertical

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target page |
|---|---|---|---|---|---|
| terapia de lenguaje para niños | 720 | M | Commercial | 38 | `/terapia-de-lenguaje/` |
| terapia de lenguaje online | 210 | M | Commercial | 24 | `/terapia-de-lenguaje/` |
| terapia de lenguaje Quito | 880 | M | Local commercial | 47 | `/terapia-de-lenguaje/en/quito/` |
| terapia de lenguaje Guayaquil | 480 | M | Local commercial | 43 | `/terapia-de-lenguaje/en/guayaquil/` |
| **mi hijo de 3 años no habla** | 390 | M | Problem-aware | 18 | Article W2 |
| a qué edad debe hablar un niño | 480 | M | Informational | 21 | Article W1 |
| mi hijo no pronuncia bien la r | 170 | L | Problem-aware | 12 | Cluster article |
| retraso del lenguaje en niños | 290 | L | Informational | 26 | Article W11 |
| dislalia en niños tratamiento | 210 | L | Informational | 23 | Article W11 |
| tartamudez en niños qué hacer | 190 | L | Problem-aware | 22 | Cluster article |
| cuánto cuesta la terapia de lenguaje en Ecuador | 90 | L | Commercial | 14 | Article W4 |
| evaluación psicopedagógica niños | 130 | L | Commercial | 27 | `/terapia-de-lenguaje/` |
| problemas de aprendizaje en niños | 240 | L | Informational | 30 | Cluster article |
| terapista de lenguaje / terapeuta de lenguaje | 160 / 210 | L | Commercial | 29 | pillar (use **both**) |

**es-EC vocabulary note:** Ecuadorian parents commonly say **"terapista de lenguaje"** where Spain says *logopeda* and much of LatAm says *fonoaudiólogo*. Use `terapista de lenguaje` as the primary on-page term, mention `fonoaudiología` and `terapeuta del lenguaje` once each as synonym coverage, and **never** use `logopeda`.

### 1.4 Music (`/musica/`)

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target page |
|---|---|---|---|---|---|
| clases de guitarra online | 1,100 | M | Commercial | 55 | `/musica/` |
| profesor de guitarra online | 170 | L | Transactional | 30 | `/musica/` + `/profesores/` |
| clases de guitarra Quito | 320 | M | Local commercial | 38 | `/musica/en/quito/` |
| clases de piano online | 480 | M | Commercial | 49 | `/musica/cursos/piano-desde-cero/` |
| clases de canto online | 290 | L | Commercial | 45 | course page |
| aprender guitarra desde cero | 880 | M | Informational | 52 | Article W8 |
| clases de música para niños online | 140 | L | Commercial | 28 | `/musica/para/ninos/` |
| **cómo tocar pasillo en guitarra** | 70 | L | Informational | 6 | Article W9 |
| acordes de música ecuatoriana | 90 | L | Informational | 9 | Cluster article |
| clases de violín online Ecuador | 40 | L | Commercial | 15 | gated |

The **Ecuadorian repertoire angle** (pasillo, pasacalle, albazo, requinto) is the only place in this vertical where a three-teacher school can rank #1 nationally inside 90 days. Global guitar content is unwinnable; *pasillo* content has essentially no competition.

### 1.5 Programming (`/programacion/`)

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target page |
|---|---|---|---|---|---|
| aprender programación desde cero | 1,600 | M | Informational | 68 | `/programacion/` |
| curso de programación online | 880 | M | Commercial | 71 | `/programacion/` |
| curso de python desde cero | 720 | M | Commercial | 66 | course page |
| **cuánto gana un programador en Ecuador** | 320 | M | Informational | 22 | Article W12 |
| curso de programación Ecuador | 110 | L | Commercial | 33 | `/programacion/` |
| aprender a programar para conseguir trabajo | 140 | L | Informational | 40 | v2 article |
| curso de desarrollo web Ecuador | 70 | L | Commercial | 29 | course page |

**Honest verdict:** Platzi ($249/yr, 1,900 courses), freeCodeCamp, YouTube and Google's own docs own this SERP. **Do not target the head terms.** Target the Ecuador-employment angle only — salary, local job market, remote work from Ecuador — where the competition is thin blogspam and you can win with one well-sourced article. This vertical earns its SEO budget as a *lead magnet for live cohorts*, not as a catalogue.

**Where users search in English:** heavily. Ecuadorian developers search `python list comprehension`, `react useEffect`, `git merge conflict` in English. Do **not** build Spanish content for technical how-tos; you will lose to the English-language original every time. Stay on the Spanish-language career/market queries.

### 1.6 Cross-vertical Ecuadorian seasonal terms (build once, harvest 4× a year)

`refuerzo académico`, `nivelación`, `supletorio`, `examen remedial`, `clases vacacionales`, `curso vacacional`, `cupos`, `deberes`. These spike four times a year because Ecuador runs two school calendars (Sierra/Amazonía from 1 Sep; Costa/Galápagos from 4 May). One article (W10) becomes an evergreen seasonal hub.

**es-EC vocabulary rules for all copy:** `computadora` (never *ordenador*), `celular` (never *móvil*), `ustedes` (never *vosotros*), `colegio` = secondary, `escuela` = primary, `matrícula`, `pensión` (monthly fee), `cupos` (available places), `deberes`/`tareas`, `profe` in informal copy. Prices always `USD`, written `$12` or `USD 12`.

---

## 2. Site architecture for SEO

### 2.1 URL taxonomy (Spanish, no accents, no ñ)

Slugs are ASCII-only — `ninos`, not `niños`; `programacion`, not `programación`. Accented slugs percent-encode into unreadable strings when pasted into WhatsApp, which is this project's primary sharing surface.

| Pattern | Example | Depth from `/` |
|---|---|---|
| `/` | | 0 |
| `/{vertical}/` | `/terapia-de-lenguaje/` | 1 |
| `/{vertical}/cursos/{slug}/` | `/ingles/cursos/ingles-b1-conversacional/` | 2 |
| `/{vertical}/en/{ciudad}/` | `/ingles/en/quito/` | 2 |
| `/{vertical}/para/{audiencia}/` | `/musica/para/ninos/` | 2 |
| `/{vertical}/nivel/{nivel}/` | `/ingles/nivel/principiantes/` | 2 |
| `/profesores/` · `/profesores/{slug}/` | `/profesores/maria-guerrero/` | 1 · 2 |
| `/blog/` · `/blog/{slug}/` | `/blog/mi-hijo-de-3-anos-no-habla/` | 1 · 2 |
| `/precios/` `/como-funciona/` `/preguntas-frecuentes/` `/sobre-nosotros/` `/contacto/` | | 1 |
| `/politica-de-privacidad/` `/terminos-y-condiciones/` | | 1 |
| **`/app/**` (alumno, profesor, admin, checkout)** | — | **noindex + robots Disallow** |

The four verticals — `/ingles/`, `/musica/`, `/programacion/`, `/terapia-de-lenguaje/` — sit at depth 1 and are linked from the site header on every page. **No indexable page is more than 3 clicks from `/`.**

### 2.2 Hub and spoke

Each vertical pillar is a genuine ~2,000-word page, not a category stub: what the vertical is, who it is for, who teaches it (named, with credentials), the courses, prices in USD, a `Datos clave` table, 6–8 FAQs, and a "Guías" block linking every cluster article.

### 2.3 Internal linking rules (enforce these in CI, not by hand)

1. Every article links **up** to its pillar once, inside the first 150 words, with a descriptive anchor.
2. Every pillar links **down** to every article in its cluster.
3. Every article links **sideways** to 2–3 siblings, contextually inside prose — never as a footer link blob.
4. Course page ↔ teacher page are **bidirectionally** linked. This is what builds the `Person`↔`Course` entity graph that AI answer engines read.
5. **No orphans.** Add a build-time check: every route in the sitemap must have ≥1 inbound internal link. Fail the build otherwise.
6. Breadcrumbs on every page below depth 1, rendered visually *and* as `BreadcrumbList`.
7. Never put `?utm_` on an internal link.

### 2.4 Programmatic pages and the thin-content problem

The tempting maths: 4 verticals × 6 cities × 4 audiences × 3 levels = **288 pages**. Do not do this. Near-duplicate templated pages are exactly what Google's spam policies name as scaled content abuse, and the downside is site-wide, not page-wide.

**The gate.** A programmatic page ships only if it passes all four:

- ✅ At least one **named teacher** who actually serves that city/audience/level.
- ✅ ≥250 words of text that could not appear on any sibling page.
- ✅ A distinct, real CTA (a specific teacher's WhatsApp, a specific schedule).
- ✅ At least one local proof point — a testimonial, a partner colegio, a local price.

**What makes Ecuadorian city pages genuinely non-thin (and this is a real asset):** Quito, Cuenca, Ambato and Loja are **Sierra/Amazonía régimen** (school year from 1 Sep 2026); Guayaquil and Manta are **Costa/Galápagos régimen** (from 4 May 2026, ending 24 Feb 2027). Their term dates, supletorio windows and vacation periods genuinely differ. A city page that states *this city's* calendar, *this city's* supletorio dates and *this city's* class schedule is substantively unique content that a template mill cannot produce. Build the page around that, not around a find-and-replaced city name.

Any programmatic page that fails the gate ships as **`noindex, follow`** — not canonicalised to the pillar. `noindex` is a directive; a cross-page canonical is only a hint and Google routinely ignores it.

### 2.5 Page count

| | Launch (wk 8) | Month 6 |
|---|---|---|
| Home + trust/legal | 8 | 8 |
| Vertical pillars | 4 | 4 |
| Course pages | 6 | 18 |
| Teacher pages + index | 4 | 6 |
| Articles | 6 | 24 |
| City pages (gated) | 4 | 12 |
| Audience/level pages (gated) | 0 | 8 |
| **Indexable total** | **~32** | **~80** |

Thirty-two strong pages beats three hundred weak ones, and it is what a solo founder plus three teachers can actually maintain.

---

## 3. Technical SEO on Astro 7 + Cloudflare Workers

### 3.1 The single most important rule

**Every indexable page must be prerendered.** `output: 'static'` is the default in Astro 7; opt individual routes out with `export const prerender = false`. Prerendered pages are served as **Workers Static Assets**, which Cloudflare documents as *free and unlimited* and which **do not count against the 100,000 requests/day Worker budget** and never touch the CPU limit.

The failure mode is severe and specific: if you ship marketing pages as on-demand, or set `run_worker_first`, every crawl hit burns Worker quota, and **past the limit those requests return `429`, not a static fallback**. A sustained `429` to Googlebot collapses your crawl rate. Astro + Cloudflare is genuinely *good* for SEO here — but only if you respect this one line.

Corollary: **never place indexable content inside a `server:defer` server island or a client-side `fetch`.** Googlebot sees the fallback. Server islands are for `Quedan 3 cupos`, not for the course description.

### 3.2 Core Web Vitals

| Metric | Google "good" (p75) | Our target | How Astro gets there |
|---|---|---|---|
| LCP | ≤ 2.5 s | **≤ 2.0 s** on 4G | Static HTML from Cloudflare edge; hero as AVIF ≤ 80 KB with explicit `width`/`height`; `fetchpriority="high"` |
| INP | ≤ 200 ms | **≤ 120 ms** | Zero-JS by default. Ship < 40 KB JS on marketing routes; `client:visible` only, never `client:load` |
| CLS | ≤ 0.1 | **≤ 0.05** | Explicit dimensions on all media; self-hosted woff2 with `font-display: swap` + `<link rel="preload">` on one face; no injected banners |

Budget: **≤ 120 KB total transfer** for a first article view. Ecuadorian prepaid data is ~$10 for 8 GB and $0.10/MB out of bundle — page weight is a *cost* to the reader, not just a metric.

### 3.3 Sitemap, robots, canonicals, pagination

- **Sitemap:** `@astrojs/sitemap@3.7.4`. Set `site` in `astro.config.mjs`. `filter:` out `/app/`, `/alumno/`, `/profesor/`, `/admin/`, `/checkout/`, and any `noindex` programmatic page. Emit real `lastmod`; **omit `changefreq` and `priority`** — Google ignores both.
- **robots.txt** (static, `public/robots.txt`): `Allow: /`; `Disallow: /app/`, `/alumno/`, `/profesor/`, `/admin/`, `/api/`, `/checkout/`, `/*?buscar=`; `Sitemap: https://…/sitemap-index.xml`. Explicitly **allow** `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot` on the public site; disallow them from `/app/`.
- **Canonical:** self-referencing, absolute, on every page. One canonical tag, no conflict with `og:url`.
- **Pagination:** `/blog/`, `/blog/2/`… 12 posts per page, each **self-canonical and indexable**. No `rel=prev/next` (Google dropped support in 2019). Never canonicalise page 2 to page 1.
- **hreflang: skip it entirely.** One locale, one market. `<html lang="es-EC">` is the whole implementation. hreflang with a single locale is pure maintenance overhead with zero upside, and Search Console's International Targeting report was removed in September 2022 anyway, so there is no country-targeting lever to pull on a gTLD.

### 3.4 Structured data — exact emission plan

Emit one sitewide `@graph` in a single `<script type="application/ld+json">` per page, with `@id` references so entities resolve rather than duplicate.

| Page type | Types emitted |
|---|---|
| Every page | `EducationalOrganization` (`@id: {site}#organizacion`), `WebSite`, `BreadcrumbList` |
| Vertical pillar | `CollectionPage` + `ItemList` of ≥3 `Course` (each with unique `url`) → **Course List carousel** |
| Course page | `Course` + `hasCourseInstance: CourseInstance` + `offers: Offer` (USD) + `provider` ref + `instructor` → `Person` ref |
| Teacher page | `Person` with `jobTitle`, `hasCredential` (`EducationalOccupationalCredential`), `knowsAbout`, `worksFor` ref, `sameAs` |
| Article | `BlogPosting` with `author` → `Person` ref, `datePublished`, `dateModified`, and for YMYL `reviewedBy` → `Person` |
| FAQ blocks | `FAQPage` (see caveat below) |
| Lesson preview video (v2) | `VideoObject` with `contentUrl`, `thumbnailUrl`, `uploadDate`, ISO-8601 `duration` |

**Course carousel eligibility (verified 2026-09-06):** requires **≥3 courses** marked up, `ItemList`/Carousel markup on a summary or all-in-one page, each course with valid `name` **and** `provider`, and a **unique `url`** per item. Important correction to any older advice: **Google retired the standalone course-info rich result in June 2025 and removed it from Search Console and the Rich Results Test in September 2025.** The **Course List carousel is still live**, and the `Course` vocabulary retains real value for AI answer engines. So: emit it, expect the carousel, do not expect the old course card.

**Reviews — the policy trap.** Google's review-snippet documentation (updated 24 July 2026 to add explicit language about undisclosed incentivised reviews) states that when the reviewed business controls the reviews about itself, pages using `LocalBusiness` or `Organization` structured data are **ineligible** for the star feature. `EducationalOrganization` is an `Organization` subtype, so it is covered. Violations risk a manual action. **Decision: emit no `Review` or `AggregateRating` at launch.** You have no reviews anyway. In v2, collect reviews on third-party surfaces (Facebook, a marketplace profile, GBP if eligible), quote them on-page as plain HTML with attribution, and still do not mark them up.

**FAQPage caveat:** Google restricted FAQ rich results to authoritative government and health sites in August 2023. Emit `FAQPage` anyway — it costs nothing and materially helps AI answer extraction — but budget **zero** SERP real estate from it.

### 3.5 JSON-LD example — `/ingles/cursos/ingles-b1-conversacional/`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://ejemplo.ec/#organizacion",
      "name": "NOMBRE_DE_MARCA",
      "url": "https://ejemplo.ec/",
      "inLanguage": "es-EC",
      "areaServed": { "@type": "Country", "name": "Ecuador" },
      "sameAs": [
        "https://www.facebook.com/NOMBRE",
        "https://www.instagram.com/NOMBRE",
        "https://www.linkedin.com/company/NOMBRE"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+593-99-XXX-XXXX",
        "availableLanguage": ["es-EC"]
      }
    },
    {
      "@type": "Person",
      "@id": "https://ejemplo.ec/profesores/maria-guerrero/#persona",
      "name": "María Guerrero",
      "jobTitle": "Profesora de inglés",
      "worksFor": { "@id": "https://ejemplo.ec/#organizacion" },
      "knowsAbout": ["Inglés conversacional", "MCER B1", "Preparación TOEFL"],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Licenciatura en Ciencias de la Educación, mención Inglés",
        "recognizedBy": { "@type": "Organization", "name": "SENESCYT" }
      }
    },
    {
      "@type": "Course",
      "@id": "https://ejemplo.ec/ingles/cursos/ingles-b1-conversacional/#curso",
      "name": "Inglés B1 conversacional en vivo",
      "description": "Curso en vivo de 12 semanas para llegar al nivel B1 del MCER, con clases en grupos de máximo 6 alumnos.",
      "url": "https://ejemplo.ec/ingles/cursos/ingles-b1-conversacional/",
      "inLanguage": "es-EC",
      "provider": { "@id": "https://ejemplo.ec/#organizacion" },
      "educationalLevel": "B1 (MCER)",
      "teaches": "Conversación en inglés a nivel intermedio",
      "courseMode": "online",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT3H",
        "courseSchedule": {
          "@type": "Schedule",
          "repeatFrequency": "P1W",
          "repeatCount": 12,
          "byDay": ["Tuesday", "Thursday"],
          "startTime": "19:00",
          "endTime": "20:30",
          "scheduleTimezone": "America/Guayaquil"
        },
        "instructor": { "@id": "https://ejemplo.ec/profesores/maria-guerrero/#persona" },
        "offers": {
          "@type": "Offer",
          "price": "89.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://ejemplo.ec/ingles/cursos/ingles-b1-conversacional/"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ejemplo.ec/" },
        { "@type": "ListItem", "position": 2, "name": "Inglés", "item": "https://ejemplo.ec/ingles/" },
        { "@type": "ListItem", "position": 3, "name": "Inglés B1 conversacional" }
      ]
    }
  ]
}
```

Note `"scheduleTimezone": "America/Guayaquil"` — Ecuador is UTC−5 year-round with no DST, so this never needs adjusting.

---

## 4. Content plan — 12-week editorial calendar

Prioritised by `(volume × intent weight) / KD`, where intent weight = 3 transactional, 2 commercial, 1.5 problem-aware, 1 informational. Problem-aware therapy queries dominate the top of the list because they combine real volume, a 1.5 weight and single-digit-to-twenties difficulty.

| Wk | Title (es-EC) | Primary keyword | Words | Internal links (out) |
|---|---|---|---|---|
| 1 | ¿A qué edad debe hablar mi hijo? Hitos del lenguaje de 0 a 5 años | a qué edad debe hablar un niño | 1,600 | ↑ `/terapia-de-lenguaje/` · → W2, W11 · → `/profesores/{fono}/` |
| 2 | Mi hijo de 3 años no habla: cuándo preocuparse y qué hacer en Ecuador | mi hijo de 3 años no habla | 1,400 | ↑ pillar · → W1, W4 · → `/terapia-de-lenguaje/en/quito/` |
| 3 | Terapia de lenguaje online: ¿funciona igual que la presencial? | terapia de lenguaje online | 1,200 | ↑ pillar · → W2, W4 · → `/como-funciona/` |
| 4 | Cuánto cuesta la terapia de lenguaje en Ecuador (precios 2026) | cuánto cuesta terapia de lenguaje Ecuador | 1,000 | ↑ pillar · → W3 · → `/precios/` |
| 5 | Suficiencia de inglés: qué nivel te piden para graduarte en Ecuador | suficiencia de inglés | 1,800 | ↑ `/ingles/` · → W6, W7 |
| 6 | Cómo pasar de A2 a B1 en inglés en 6 meses: plan de estudio real | cómo pasar de A2 a B1 | 1,600 | ↑ `/ingles/` · → W5 · → `/ingles/cursos/ingles-b1-conversacional/` |
| 7 | Clases de inglés online en Ecuador: cómo elegir y cuánto deberías pagar | cuánto cuesta un curso de inglés en Ecuador | 1,800 | ↑ `/ingles/` · → W5, W6 · → `/precios/` |
| 8 | Aprender guitarra desde cero: tus primeras 8 semanas, paso a paso | aprender guitarra desde cero | 1,500 | ↑ `/musica/` · → W9 · → `/musica/cursos/…` |
| 9 | Cómo tocar un pasillo ecuatoriano en guitarra: acordes y ritmo | cómo tocar pasillo en guitarra | 1,200 | ↑ `/musica/` · → W8 |
| 10 | Refuerzo académico y supletorios: calendario 2026-2027 Sierra y Costa | refuerzo académico / supletorio | 1,400 | ↑ all 4 pillars · → every `/en/{ciudad}/` page |
| 11 | Dislalia, retraso del lenguaje o TEL: cómo se diferencian | retraso del lenguaje en niños | 1,600 | ↑ pillar · → W1, W2 · **medically reviewed** |
| 12 | Cuánto gana un programador en Ecuador en 2026 | cuánto gana un programador en Ecuador | 1,200 | ↑ `/programacion/` |

Weeks 13–24 (v2): `mi hijo no pronuncia la r`, `tartamudez en niños`, `problemas de aprendizaje`, `clases de piano para niños: a qué edad empezar`, `aprender a programar desde cero en Ecuador: ruta de 12 meses`, `inglés para el trabajo`, `evaluación psicopedagógica: qué esperar`, plus one seasonal refresh of W10 per régimen.

### 4.1 E-E-A-T and YMYL for the therapy vertical — non-negotiable

Speech/learning therapy is **health content**. Google holds it to a higher bar, and Ecuadorian regulation independently makes the professional's registration a legal matter (SENESCYT title registration + ACESS health-authority registration, per the legal research). The SEO and the compliance requirement point the same way, which is convenient.

**Required on every therapy page and article:**

1. **Named author byline** — no anonymous posts, ever. Full name, photo, `título profesional`, and the SENESCYT registry number, with a link to the public SENESCYT title-consultation service so a parent can verify it in 30 seconds.
2. **Visible "Revisado por" line** — a named, credentialed `terapista de lenguaje` with the review date. Mirrored in schema as `reviewedBy` → `Person`.
3. **Citations to primary sources** in prose, as normal outbound links: MSP Ecuador, ASHA, WHO/OMS developmental milestones, CONADIS. Two to four per article minimum.
4. **Disclaimer block**, above the fold: *"Esta información es educativa y no reemplaza una evaluación profesional. Si tienes dudas sobre el desarrollo de tu hijo, agenda una valoración."*
5. **Medical-review process**, tracked in a `revisiones_contenido` D1 table (`articulo_id`, `revisor_id`, `fecha_revision`, `notas`). Every therapy article is re-reviewed **every 12 months** and `dateModified` updated only when the content actually changes.
6. **Never publish AI-drafted therapy content without the reviewer's sign-off recorded in that table.** This is the single highest-risk content on the site, both for rankings and for the regulator.

---

## 5. Local and entity SEO

### 5.1 Google Business Profile — viability, honestly

Verified: **purely online businesses that never meet customers face-to-face are not eligible** for a GBP. Google's guidelines allow a *service-area business* only where there is genuine in-person contact during stated hours, and prohibit PO boxes and virtual offices. Online coaching/consultation businesses sit in a genuinely grey area.

**Recommendation:**

- **Do not create a GBP at launch.** A fabricated or virtual-office address invites suspension, and a suspended profile is worse than no profile.
- **The legitimate route exists and is already on your critical path:** the therapy vertical requires an ACESS *permiso de funcionamiento* for a real consultorio. Once that address exists, the therapist's practice is a *bona fide* local business and can hold a GBP with a real address, real hours and real in-person attention — with online therapy listed as a service. That profile can legitimately link to your domain.
- The same applies if any music/English teacher teaches in person from a studio.
- Treat GBP as a **month 4–8 deliverable gated on the legal entity**, not a week-1 SEO task.

### 5.2 NAP consistency

Store the canonical NAP once, in `src/data/negocio.ts`, and render it from that single source in the footer, `/contacto/`, the JSON-LD `@graph`, and every directory submission. Byte-identical everywhere.

```
Nombre:    NOMBRE_DE_MARCA
Teléfono:  +593 99 XXX XXXX   (WhatsApp)
Correo:    hola@ejemplo.ec
RUC:       XXXXXXXXXX001
```

Display the **RUC on the site**. Ecuadorian buyers check for it; its absence reads as a scam in a market with documented distrust of online sellers. Include a `+593` click-to-chat WhatsApp link as the **first** contact method on every page.

### 5.3 Ecuadorian citations that actually exist (verified 2026-09-06)

Priority order, all free or near-free:

1. `paginas-amarillas.com.ec` — the incumbent national directory
2. `ecuanegocios.com` — free national commercial directory
3. `directorioempresarial.com.ec`
4. `yelu.ec`
5. `soyecuatoriano.com` (has real category pages, e.g. *terapia de lenguaje Quito*)
6. `superprof.com.ec` and `tusclasesparticulares.com.ec` — dual purpose: citation **and** a live lead channel your teachers should be on anyway
7. Facebook Page, Instagram business profile, LinkedIn Company page
8. Bing Places, Apple Business Connect

### 5.4 Entity signals for a brand nobody has heard of

- One **exact brand string**, used identically everywhere. Never abbreviate it in some places and not others.
- `sameAs` array in `EducationalOrganization` pointing at every profile above — this is how you tell Google these are all one entity.
- A substantive `/sobre-nosotros/` naming the founder, the three teachers, the RUC, the founding date and the mission. Entity pages are what AI answer engines read to decide who you are.
- **Named teachers are your strongest entity asset.** Three real people with real credentials, each with a `Person` page, `sameAs` to their LinkedIn, and bidirectional links to their courses. This graph is more valuable at your scale than any backlink you could buy.
- **Do not chase Wikidata or Wikipedia.** A new commercial brand will not meet notability and the attempt wastes a week.

---

## 6. The AI-search layer

### 6.1 What actually makes a page citable

1. **Answer-first structure.** Every `<h2>` is phrased as the question a user asks, and the first 40–60 words after it are a complete, standalone answer. Extraction engines lift that paragraph.
2. **Stable, dated, numeric facts.** *"Precio a septiembre de 2026: USD 89 por el curso completo de 12 semanas."* Vague copy is uncitable copy.
3. **Tables.** Comparison and price tables get lifted verbatim into AI answers far more often than prose.
4. **Named, credentialed authors.** AI answer engines increasingly surface the source's authority.
5. **Schema that resolves entities** — the `@graph` with `@id` cross-references in §3.5 is doing double duty here.
6. **`FAQPage`** blocks with ≤55-word answers.

### 6.2 llms.txt — ship it, then forget it

Being blunt, because the usual advice is wrong: **Google has publicly said it does not support `llms.txt` and has no plans to**, with John Mueller comparing it to the discredited keywords meta tag and noting server logs show AI bots do not even request the file. A 2026 Ahrefs study of 137,000 sites found **97% of `llms.txt` files received zero traffic**; monitoring of 500M AI bot visits over 90 days found **408** that touched the file. No major AI vendor has committed to reading it in production.

**Decision:** generate `/llms.txt` automatically from the Astro content collection at build time (a ~20-line integration, ~20 minutes of work), because the cost is near zero and the option value is real if adoption ever changes. Assign it **zero expected traffic** in the plan and spend not one further minute on it. Do not hand-curate it, do not write an `llms-full.txt`, do not report on it.

### 6.3 Tracking AI referrals

- GA4 launched a native **"AI Assistant"** channel group in July 2026, but it **excludes Perplexity and Claude**. If GA4 is used at all, build a custom channel group with source regex `chatgpt|openai|perplexity|claude|anthropic|gemini|copilot|you\.com`.
- **35–70% of AI referral sessions arrive with no referrer header** and land in Direct. Any AI-referral number you produce is a floor, not a measurement.
- **Google AI Overviews clicks are bundled into Organic Search in both GA4 and Search Console with no label.** You cannot separate them. The only available proxy is the pattern *GSC impressions rising while CTR falls* on informational queries — track that ratio monthly.
- **Server-side signal you actually control:** Cloudflare Workers Logs / GraphQL Analytics will show `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot` user agents hitting your pages. Crawl frequency by AI bot is a leading indicator that citation is coming, and it is free with the $5 Workers Paid plan you are already buying.

---

## 7. Measurement

### 7.1 Tools — and why not GA4

| Tool | Role | Cost | LOPDP posture |
|---|---|---|---|
| **Google Search Console** | Mandatory. The only accurate query/impression source. Verify by DNS TXT on the Cloudflare zone. | $0 | No personal data collected by you |
| **Bing Webmaster Tools** | Free; feeds Copilot/ChatGPT search indexes | $0 | Same |
| **Cloudflare Web Analytics** | Primary site analytics. Cookieless, no client-side identifiers. | $0 | **Strongest** — arguably no personal-data processing, so no consent surface |
| **D1 `eventos_web` table** | First-party conversion tracking: WhatsApp click, checkout start, enrolment. Joinable to `matriculas`. | $0 | First-party, under your own privacy notice |
| ~~GA4~~ | **Avoid at launch** | $0 | Sets identifiers → consent required |
| Plausible / Umami Cloud | Optional upgrade if funnel depth is needed | $9–20/mo | Good, but a foreign processor = another international transfer to document |

**Why avoid GA4:** it sets client identifiers, which triggers a consent obligation under LOPDP — and the SPDP's first two enforcement actions (December 2025, USD 259,644 and USD 194,856) were *specifically for invalid consent collection*. Adding GA4 buys you attribution depth you do not need at 300 sessions/month, in exchange for a consent banner that will cost you conversions and a compliance surface that costs you a lawyer. **Cloudflare Web Analytics + GSC + a first-party D1 events table is both cheaper and safer, and the D1 route is strictly better than GA4 for the one question that matters — which landing page produced an enrolment.**

*(Flag: whether Cloudflare Web Analytics is genuinely outside LOPDP scope must be confirmed by the contracted DPD. I am reasoning from its cookieless architecture, not from an Ecuadorian legal opinion.)*

### 7.2 KPIs and cadence

**Weekly (Wednesday, 15 min):** GSC — indexed page count, total impressions, total clicks, any coverage errors, any manual actions.
**Monthly (first Monday, 60 min, written):** the 20 tracked keywords' average position; top 10 landing pages by clicks; WhatsApp-click rate per landing page (from `eventos_web`); enrolments attributed to organic; new referring domains; CWV field data in GSC.
**Quarterly:** re-run Keyword Planner, re-prioritise the content queue, prune or merge any page with 0 clicks and 0 impressions after 90 days.

### 7.3 Realistic milestones — brand-new domain, es-EC, bootstrap

| | Indexed | Impressions/day | Clicks/mo | Organic enrolments/mo |
|---|---|---|---|---|
| **Month 1** | 25–32 | 5–40 | 0–20 (≈all brand) | **0** |
| **Month 3** | 40–50 | 50–150 | 30–120 | 0–2 |
| **Month 6** | 70–85 | 200–500 | 250–700 | 2–8 |
| **Month 12** | 90–110 | 700–1,600 | 900–2,500 | 10–30 |

**Say this out loud to yourself now:** months 1–3 will look like failure. They are not. New domains in Spanish-language YMYL-adjacent verticals routinely take 4–6 months to earn their first meaningful non-brand rankings. If you judge SEO on month-2 numbers you will kill it right before it starts working. The head terms (`clases de inglés online`, `aprender programación desde cero`) are **not** reachable in year one and should not appear in any forecast.

---

## 8. Domain strategy

Search Console's International Targeting tool was removed in **September 2022**, so a `.com` has **no explicit country-targeting lever** any more — only soft signals (local address, USD prices, Ecuadorian links, `lang="es-EC"`). A `.ec` ccTLD is a hard, permanent geo-signal that Google associates with Ecuador automatically.

| Option | Geo signal | Local trust | Cost/yr | Verdict |
|---|---|---|---|---|
| **`.ec`** | Strong, automatic | Highest; short, WhatsApp-friendly | ~$40 incl. IVA | **Recommended** |
| `.com.ec` | Same ccTLD family | Traditional but losing cachet since `.ec` opened to the public | ~$25–40 | Acceptable fallback |
| `.com` | None explicit | Neutral | ~$12 | Only if the `.ec` name is taken |

`.ec` has **no residency requirement** and registrar prices are set individually (NIC.EC policy). Buy the matching `.com` defensively and **301 it to `.ec`** — do not run both live. Total ~$52/yr. Buying from a local Ecuadorian registrar also sidesteps the 5% ISD that applies to foreign card payments.

**Does the name itself affect SEO?** Marginally. Exact-match domains have been discounted since Google's 2012 EMD update, and a keyword domain (`clasesdeingles.ec`) permanently boxes you out of the other three verticals. **Recommend a brandable name.**

**Handoff to the brand agent:** give me three candidate strings and I will run a SERP conflict check on each — searching the exact string in quotes to confirm no existing Ecuadorian entity, Knowledge Panel, or established competitor already owns it. A brand name that collides with an existing entity makes brand-query ranking (your only month-1 win) unnecessarily hard.

---

## 9. What not to do

1. **Do not build 288 programmatic pages.** Scaled near-duplicate content is a site-wide risk, not a page-wide one. Use the four-point gate in §2.4.
2. **Do not emit `AggregateRating` or `Review` on your own `Organization`/`EducationalOrganization`.** Ineligible for the star feature and a manual-action risk under the July 2026 policy update.
3. **Do not ship marketing pages as on-demand, and never set `run_worker_first`.** Past 100k requests/day Cloudflare returns `429` instead of falling back to static — a crawl-rate killer.
4. **Do not put indexable copy in a `server:defer` island or a client-side fetch.** Googlebot renders the fallback.
5. **Do not build hreflang.** One locale. It is pure overhead.
6. **Do not chase head terms** — `aprender programación desde cero`, `clases de inglés online`, `aprender guitarra desde cero`. You will not outrank Platzi, freeCodeCamp, Duolingo or YouTube with three teachers and a domain registered this month.
7. **Do not buy links** from Ecuadorian "posicionamiento web garantizado" agencies. Those are PBN packages and they are link schemes.
8. **Do not publish therapy content without a named, credentialed reviewer.** YMYL exposure and Ecuadorian regulatory exposure at once.
9. **Do not spend more than 20 minutes on `llms.txt`.** See §6.2.
10. **Do not add a cookie banner you do not need.** Running only Cloudflare Web Analytics avoids the consent surface entirely; GA4 creates it.
11. **Do not create a Google Business Profile at a fake, virtual or PO-box address.** Suspension feels permanent and burns trust.
12. **Do not write Spain- or Mexico-Spanish.** `ordenador`, `móvil`, `vosotros`, `logopeda` all mark the copy as foreign and cost conversions in a market that is already suspicious of online sellers.
13. **Do not do keyword-density work, meta-keywords tags, or "LSI keyword" sprinkling.** Dead for a decade.
14. **Do not make an on-site search page crawlable** (`/*?buscar=`). It generates infinite low-value URLs.

---

## 10. Phasing

### MVP — ships with launch, weeks 1–8

- Domain registered (`.ec` + defensive `.com` 301), DNS on Cloudflare, GSC + Bing verified by DNS TXT.
- **~32 indexable pages**: home, 4 pillars, 6 course pages, 3 teacher pages + index, 6 articles (weeks 1–6 of the calendar), 7 trust/legal pages, 4 gated city pages.
- `@astrojs/sitemap@3.7.4`, `public/robots.txt`, self-referencing canonicals, OG/Twitter cards, the `@graph` JSON-LD from §3.5 (`EducationalOrganization`, `Course`, `CourseInstance`, `Person`, `BreadcrumbList`, `ItemList` on pillars).
- CI checks: no orphan pages, no missing canonical, no missing `<title>`/`<meta description>`, no `prerender = false` on an indexable route.
- Cloudflare Web Analytics + D1 `eventos_web` table with three events.
- `src/data/negocio.ts` NAP single source; 6 directory citations submitted.
- Author bios + `reviewedBy` on all therapy content.

### v2 — months 3–6

- Articles 13–24; city pages that pass the gate; audience pages.
- `VideoObject` once lesson previews exist on Bunny/R2.
- `FAQPage` blocks across pillars.
- Off-site review collection (no markup).
- AI-referral custom channel + Workers Logs AI-bot crawl report.
- GBP, **gated on the ACESS permiso / real address existing**.
- Astro route caching + the Cloudflare CDN cache provider for the few on-demand routes.

### Deliberately deferred (do not let anyone re-add these)

hreflang and any English-language site · programmatic level pages · `AggregateRating` · GA4 · paid link building · Wikidata/Wikipedia · a crawlable on-site search · self-hosted Umami.

---

## 11. Open questions for the founder

1. **Brand name and domain** — give me three candidate strings so I can run the SERP conflict check before you register anything. Is `.ec` acceptable at ~$40/yr versus `.com` at ~$12?
2. **Which cities do the three teachers actually serve?** The city-page gate needs a named teacher per city. Without that answer I cannot tell you whether to build 4 city pages or 12.
3. **Is the speech therapist willing to be a public, named, credential-displaying author with a SENESCYT number on the site?** If not, the therapy vertical — the single highest-ROI SEO opportunity here — cannot be built to YMYL standard and should be dropped from the content plan.
4. **Who signs off on medical review, and how often can they realistically do it?** If the answer is "nobody, reliably", say so now and I will cut the clinical articles down to non-clinical logistics content.
5. **Do we publish prices?** Your most credible local competitors (Wall Street English, CECIT) deliberately hide them. Publishing is a genuine trust differentiator and it feeds AI citation — but it lets every competitor undercut you instantly. This is a strategic call, not an SEO one, and it changes the copy on ~15 pages.
6. **Can I get one hour per teacher per article** for subject-matter input? Twelve articles is ~12 hours of teacher time over 12 weeks. If that is not available, the calendar halves.
7. **Confirm: no GA4?** I am recommending against it on LOPDP grounds. If you or an investor need GA4-shaped reporting, tell me now so I can budget the consent banner and its conversion cost.
8. **Suficiencia de inglés requirements per university** — do you have access to anyone who knows the actual per-institution level requirements? That article is the best transactional opportunity in the English vertical and it needs real data.

---

## 12. Where this collides with other domains

| Domain | Collision | What must be reconciled |
|---|---|---|
| **Architecture** | Rendering mode | My §3.1 rule — *every indexable page prerendered, nothing indexable inside a server island* — constrains how the architecture agent uses `server:defer` and `output: 'server'`. If any marketing route renders on demand, SEO breaks and the Worker budget burns. **Non-negotiable.** |
| **Architecture / Tech stack** | Build triggers | Course pages must be prerendered from D1 at **build time**, so a course published by a teacher is not indexable until the next build. That needs a deploy hook on publish (Workers Builds: 3,000 min/mo free, 1 concurrent build, 20 min timeout). Decide: on-publish rebuild, or a nightly cron? A nightly cron on the free plan gets 10 ms CPU and will not work; on Workers Paid it gets 30 s. |
| **Database** | Schema additions | I need three things in D1: `revisiones_contenido` (YMYL review log), `eventos_web` (first-party analytics), and real `lastmod` timestamps on courses/articles for the sitemap. Plus teacher `credenciales` fields (SENESCYT number, ACESS registration) surfaced publicly on `/profesores/{slug}/`. |
| **Design** | Performance budget | ≤120 KB total transfer per article view, ≤40 KB JS on marketing routes, one preloaded woff2. Any hero carousel, animation library or webfont pair blows this. Also: the WhatsApp CTA must be the first contact affordance on every page, and the RUC must be visible in the footer. |
| **Brand** | Name + domain | Joint decision (§8). I need three candidates for SERP conflict checking. The exact brand string must be frozen before the first directory citation goes out — changing it later means re-doing every citation. |
| **Legal / payments** | GBP, analytics, pricing disclosure | GBP viability is gated on the ACESS *permiso de funcionamiento* and a real address. The "no GA4" recommendation needs the contracted DPD's sign-off. Publishing prices interacts with Ley 67's obligation to disclose all conditions before purchase — a legal requirement that happens to be good SEO. |
| **Product / content** | Teacher studio | Locked decision D4 (teachers self-author courses in-app) means course *marketing* copy is written by non-marketers. The teacher studio needs an SEO fields block — `meta title`, `meta description`, `slug` — with character counters and sensible defaults, or every course page ships with an unusable title. This is a ~2-hour addition to the studio spec that protects the whole channel. |

---

*Verification status: Course carousel requirements, the June-2025 retirement of the course-info rich result, the July-2026 review-snippet policy update, GBP online-only eligibility, the September-2022 removal of GSC International Targeting, `llms.txt` adoption data, GA4's July-2026 AI Assistant channel, `@astrojs/sitemap` 3.7.4, and `.ec` registration policy were all verified by web search on 2026-09-06. Cloudflare and Astro limits are taken from the verified research digest. **All search-volume figures are modelled estimates, not tool data** — replace them in week 1 per §1.1. Per-university suficiencia requirements and Ecuadorian programmer salary figures are marked unverified and must be researched before those articles publish.*
