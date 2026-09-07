# Imagery brief — generate these on davinci.ai

**Use davinci.ai with Recraft V4.1. You already have it. Download PNG — not SVG.**

That is not a compromise. Research on 2026-09-06 measured a correctly-sized **AVIF at ~7 KB**
versus Recraft's native **SVG at 24–144 KB**. Raster is the better format here; Astro converts and
resizes it at build. The earlier "get SVG" advice in this file was wrong and is corrected at the
bottom.

**Settings on every generation:** model **Recraft V4.1** · aspect ratio **16:9** for covers,
**1:1** for the hero · download **PNG at the largest offered size**.

---

## Step 1 — Generate the style anchor first

This is the whole game. Generate this one image, iterate until it is right, then **save it as a
style / reuse it as a style reference** for everything else. Prompt each image independently and
you get five attractive images that visibly do not belong to the same brand — which looks worse
than the gradients you have now.

```
Flat vector-style illustration of a friendly desk scene: an open laptop, an acoustic guitar leaning
beside it, a stack of two books, and a small potted plant on a simple surface. Warm, playful,
optimistic, viewed straight on. Bold geometric shapes, thick clean outlines, soft rounded corners,
large flat colour areas, generous negative space, subtle paper grain.

Colour palette, strictly: coral #e0522c, teal #14897c, violet #5b4bc4, golden yellow #ffc24b,
cream background #fffbf5, deep indigo #2e2a63.

Modern, warm children's-education brand. No text, no letters, no numbers, no words anywhere.
No photorealism. No 3D render. No stock-photo look. No drop shadows.
```

---

## Step 2 — The four course covers · 16:9

Paste the **palette block** and the **rules block** from the anchor into each one, and apply the
saved style.

### Inglés — coral dominant
```
Two overlapping speech bubbles of different sizes with a small paper aeroplane flying between them.
Dominant colour coral #e0522c on cream #fffbf5, small accents in teal and golden yellow.
```

### Música — teal dominant
```
An acoustic guitar seen from the front with three simple rounded sound waves radiating from the
sound hole. Dominant colour teal #14897c on cream #fffbf5, small accents in coral and golden yellow.
```

### Programación — violet dominant
```
A laptop seen straight on with three simple stacked bars on the screen suggesting code, and one
small rocket rising from the corner. Dominant colour violet #5b4bc4 on cream #fffbf5, small accents
in coral and teal.
```

### Apoyo escolar — golden dominant
```
A small sprouting plant in a rounded pot with two gentle speech bubbles floating above it like
leaves. Calm, warm, reassuring. Dominant golden yellow #ffc24b on cream #fffbf5, accents in teal.
```

⚠️ **Keep this one non-clinical.** No stethoscopes, crosses, clipboards, anatomy or clinic rooms.
Per `Plan/agents/10-compliance-costed-path.md` the imagery must stay on the education side of the
regulatory line for exactly the same reason the copy does.

---

## Step 3 — Hero · 1:1 · THE BIG ONE

This fills the circular placeholder in the dark indigo hero band — the first thing anyone sees.

**Two hard constraints:**
- **Square, subject centred, generous margin.** The image is displayed inside a **circle**, so the
  corners are cut off. Anything important near an edge disappears.
- **It sits on a DARK indigo band** (`#2e2a63`). Warm, light-toned artwork pops against it; a dark
  or muddy image vanishes.

### Option A — illustrated learner (recommended)

Warmer and more human than objects, and honest: clearly an illustration, so it is not pretending to
be a real student or a real teacher.

```
Flat vector-style illustration, square composition, subject centred with generous margin on all
sides so nothing important sits near the edges. A cheerful young Latin American student with warm
brown skin and dark hair, seated at a small desk, smiling while looking at an open laptop. An
acoustic guitar leans against the desk and a small potted plant sits beside it. Simple star and dot
sparkles float around them. Bold geometric shapes, thick clean outlines, soft rounded corners, large
flat colour areas, subtle paper grain.

Colour palette, strictly: coral #e0522c, teal #14897c, violet #5b4bc4, golden yellow #ffc24b,
cream background #fffbf5, deep indigo #2e2a63.

Warm, optimistic, modern children's-education brand. Light and bright so it reads against a dark
background. No text, no letters, no numbers, no words anywhere. No photorealism. No 3D render.
No stock-photo look. No drop shadows.
```

### Option B — objects only

Safer, and sidesteps any question of depicting a specific person.

```
Flat vector-style illustration, square composition, arranged inside a circle with generous margin:
four friendly objects around the centre — a speech bubble, an acoustic guitar, an open laptop, and a
small potted plant — with simple star and dot sparkles between them. Balanced, symmetrical,
cheerful. [+ palette] [+ rules]
```

Save as `src/assets/hero.png`. Tell me when it is in and I will wire it into the hero circle.

---

## Step 4 — Drop the files in and wire them up

Save as `src/assets/cursos/{slug}.png` — **`src/assets/`, never `public/`.**
`public/` ships the file verbatim at full weight; `src/assets/` goes through Astro's pipeline, which
resizes and converts to AVIF/WebP. At Ecuador's ~$100/GB out-of-bundle data rate that difference is
real money out of your visitor's pocket.

| Course | File |
|---|---|
| Inglés | `src/assets/cursos/ingles-conversacional.png` |
| Música | `src/assets/cursos/guitarra-desde-cero.png` |
| Programación | `src/assets/cursos/programacion-desde-cero.png` |

Then add two lines to that course's frontmatter — e.g. in
`src/content/cursos/guitarra-desde-cero.md`:

```yaml
imagen: ../../assets/cursos/guitarra-desde-cero.png
imagenAlt: "Ilustración de una guitarra acústica con ondas de sonido"
```

The code already handles this: **if `imagen` is present it renders the photo, otherwise it falls
back to the gradient + emoji.** So add them one at a time — the build never breaks half-way.

`imagenAlt` is required for accessibility and read by screen readers. Write it in Spanish,
describing what the image *shows*.

---

## Do NOT generate

| Don't | Why |
|---|---|
| **Faces for David, Daniel or Elena** | Presenting a generated face as a real teacher is deception. For Elena it is worse — the compliance plan displays her título and ACESS number, and a real credential beside a fake face is the worst possible pairing. **A phone camera in good light beats anything these tools produce.** Save to `src/assets/profesores/`. |
| **Any image containing words** | AI text rendering is unreliable and the site is Spanish. A misspelt `programación` on a cover is worse than no word. Type goes in HTML, where it is selectable and translatable. |
| **Photorealistic classrooms or students** | Reads as stock photography to exactly the buyer you are trying to convince, and every local competitor already looks like that. |
| **Medical imagery for Elena's vertical** | Compliance — see above. |

---
---

# Research record — what was checked, and what I got wrong

Three independent agents, 2026-09-06.

## davinci.ai cannot export SVG. Missing model, not missing button.

davinci.ai is a multi-model aggregator operated by **HubX** (İzmir, Turkey) — not Blackmagic's
DaVinci Resolve, not an OpenAI product. Its live catalogue lists three Recraft entries:

| Model | Credits | Slug |
|---|---|---|
| Recraft V3 | 13 | — |
| **Recraft V4.1** | 15 | **`recraft-4-1`** ← the one in your URL |
| Recraft V4.1 Pro | 69 | — |

**All raster.** Recraft bills vector as separate models (`V4.1 Vector`, `V4.1 Pro Vector`) which
davinci.ai never wired up. `"svg"` appears **zero times** across its model, aspect-ratio and
art-style endpoints, and all output is stored PNG/JPEG and served as WebP through Cloudflare Image
Resizing. No vector geometry is ever generated.

*Exception:* davinci.ai's **separate Logo Generator** product does advertise SVG/PNG/PDF. Different
tool from the Recraft explore page — worth trying for a logo mark specifically.

## Four things I got wrong

1. **"SVG is 5–30 KB."** That range is icons and simple logo marks. Real flat illustrations measure
   **24–144 KB**. Recraft staff publicly acknowledge working on vector file size.
2. **The comparison was rigged** — optimised SVG against an unoptimised full-size PNG. Measured
   honestly: raw 1024px PNG **1.76 MB**, Recraft SVG **24–144 KB**, correctly-sized 480px AVIF
   **6,988 bytes**. AVIF wins.
3. **FLUX.1-dev's licence prohibits commercial use.** Use **FLUX.1-schnell** (Apache 2.0).
4. **Lucide/astro-icon is not installed.** That was a *plan recommendation* I mistook for reality.
   Actual deps: `astro`, `@astrojs/cloudflare`, `tailwindcss`, `@tailwindcss/vite`, `typescript`,
   `wrangler`.

## Recraft's free tier is a trap for a brand mark

SVG export is available on free (30 gens/day), but Recraft **owns** free-plan images, publishes them
in the public community gallery, and grants **no commercial licence** — and rights vest at
generation time, so upgrading later does not retroactively fix a logo made on free.
Paid Basic is ~$10/mo billed annually. Direct API is $0.08/image for V4.1 Vector.

## Free local escape hatch, measured

If you later want unlimited generation, the RTX 4080 SUPER does it for nothing:
**FLUX.1-schnell** → palette pre-flatten → `vtracer --palette --filter-speckle 24 --simplify 2
--path-precision 1 --optimize 2` → **SVGO**. Measured: 1.76 MB PNG → **8,295-byte, 26-path SVG in
2.1 s**. Never use `--max-colors` — it silently repainted teal as blue and coral as mauve.

## The 10-second check on any downloaded `.svg`

Open it in a text editor. `<path d="M12 4L...` → real vector. `<image href="data:image/png;base64,`
→ a PNG wearing an SVG costume, larger than the PNG it contains. The extension gives no hint.
