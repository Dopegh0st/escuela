# Image prompt pack — Recraft 4.1 (via davinci.ai)

No MCP exists for davinci.ai or Recraft, so these are copy-paste. Canva's MCP is
connected but it does templated layouts, not raw image generation.

---

## The one rule that decides whether this works

**Lock a style once, then generate everything against it.**

Recraft's real advantage over Flux/SDXL is style consistency. Generate image #1,
save it as a style (or note the style ID), and apply that same style to every
subsequent generation. If you prompt each image independently you will get twenty
attractive images that visibly do not belong to the same brand — which is worse
than the gradient placeholders currently on the site.

Order of operations:
1. Generate the **style anchor** below until one is right.
2. Save it as a custom style / note the style ID.
3. Generate everything else with that style applied, changing only the subject.

---

## The palette — paste this into every prompt

```
Colour palette, strictly: coral #e0522c, teal #14897c, violet #5b4bc4,
golden yellow #ffc24b, cream background #fffbf5, deep indigo #2e2a63.
```

## The global style clause — paste into every prompt

```
Flat vector illustration, geometric shapes, soft rounded corners, clean thick
outlines, generous negative space, warm and friendly, subtle grain texture.
Modern children's-education brand. No gradients beyond simple two-tone.
No text, no letters, no numbers, no words anywhere in the image.
No photorealism. No 3D render. No drop shadows. No stock-photo look.
```

**Why "no text":** AI text rendering is unreliable and this site is in Spanish —
a misspelt `programación` on a cover is worse than no word at all. All type is
added in HTML, where it is also selectable, translatable and accessible.

---

## 1. Style anchor — generate this first

```
Flat vector illustration of a small friendly desk scene: an open laptop, a
guitar leaning beside it, a stack of two books, and a small potted plant,
arranged on a simple surface. Warm, playful, optimistic. Viewed straight on.

Colour palette, strictly: coral #e0522c, teal #14897c, violet #5b4bc4,
golden yellow #ffc24b, cream background #fffbf5, deep indigo #2e2a63.

Flat vector illustration, geometric shapes, soft rounded corners, clean thick
outlines, generous negative space, warm and friendly, subtle grain texture.
Modern children's-education brand. No gradients beyond simple two-tone.
No text, no letters, no numbers, no words anywhere in the image.
No photorealism. No 3D render. No drop shadows. No stock-photo look.
```

Iterate this one until it feels right. Everything else inherits from it.

---

## 2. Subject covers — 16:9, one per subject

Replaces the gradient + emoji covers in `src/content/cursos/*.md`. Keep the
per-subject colour so the site still reads as a set.

**Inglés** — dominant coral `#e0522c`
```
Flat vector illustration: two overlapping speech bubbles of different sizes,
with a small paper aeroplane flying between them. Dominant colour coral #e0522c
on a cream #fffbf5 background, with small accents in teal and golden yellow.
[+ global style clause]
```

**Música** — dominant teal `#14897c`
```
Flat vector illustration: an acoustic guitar seen from the front, with three
simple rounded sound waves radiating from the sound hole. Dominant colour teal
#14897c on a cream #fffbf5 background, with small accents in coral and golden
yellow. [+ global style clause]
```

**Programación** — dominant violet `#5b4bc4`
```
Flat vector illustration: a laptop seen straight on, with three simple stacked
bars on the screen suggesting code, and one small rocket rising from the corner.
Dominant colour violet #5b4bc4 on a cream #fffbf5 background, with small accents
in coral and teal. [+ global style clause]
```

**Apoyo / terapia de lenguaje** — dominant golden `#ffc24b`
```
Flat vector illustration: a small sprouting plant in a rounded pot, with two
gentle speech bubbles floating above it like leaves. Calm, warm, reassuring.
Dominant golden yellow #ffc24b on a cream #fffbf5 background, with accents in
teal. [+ global style clause]
```

⚠️ **Keep this one gentle and non-clinical.** No medical iconography — no
stethoscopes, crosses, clipboards, anatomy or clinic rooms. Per
`Plan/agents/10-compliance-costed-path.md`, the imagery has to stay on the
education side of the line just as the copy does.

---

## 3. Hero illustration — square, replaces the emoji circle

```
Flat vector illustration composed inside a circle: four small friendly objects
arranged around the centre — a speech bubble, a guitar, a laptop, and a small
plant — with simple star and dot sparkles between them. Balanced, symmetrical,
cheerful. Transparent or cream background.
[+ palette] [+ global style clause]
```

---

## 4. Spot illustrations — the three steps

Small, single-object, square.

```
Flat vector illustration, single small object centred, generous empty space
around it: a smartphone with a chat bubble on screen. Coral #e0522c dominant.
[+ palette] [+ global style clause]
```
Then swap the object for each step:
- **02** — `a simple wall calendar with one day circled` · teal `#14897c`
- **03** — `a laptop with a friendly waving figure on the screen` · violet `#5b4bc4`

---

## 5. Blog / SEO article headers — 16:9

The SEO plan wants ~12 weeks of articles. One template, swap the subject:

```
Flat vector illustration, wide banner composition, subject centred with plenty
of breathing room: {SUBJECT}. [+ palette] [+ global style clause]
```

Subjects that map to planned articles:
- `a child and an adult sitting together reading a book`
- `a hand writing in a notebook beside a steaming mug`
- `a simple bar chart growing upward with a small flag at the top`
- `a backpack, a pencil and an apple arranged in a row`

---

## What NOT to generate

| Don't | Why |
|---|---|
| **Faces for David, Daniel or Elena** | Presenting a generated face as a real teacher is deception. For Elena it is actively dangerous — the compliance plan displays her título and ACESS number, and a real credential beside a fake face is the worst possible pairing. **Use a phone camera in good light.** |
| **Any image containing words** | Unreliable rendering, and misspelt Spanish is worse than nothing. Type goes in HTML. |
| **Photorealistic classrooms or students** | Reads as stock photography to exactly the buyer you are trying to convince, and every local competitor already looks like that. |
| **OG / social share images** | Better generated programmatically at build time from course data — consistent, automatic per course, and tiny. |
| **Medical imagery for Elena's vertical** | Compliance. See above. |

---

## Export settings — this part costs real money if you get it wrong

Ecuadorian prepaid data runs $9–15 for 8–12 GB, and out-of-bundle is roughly
**$100/GB**. A raw 1024px PNG is ~1.5 MB. That is your visitor's money.

1. **Export SVG wherever Recraft offers it.** Flat vector illustration is exactly
   the case where SVG wins — usually 5–30 KB against 1.5 MB, and it scales
   perfectly on any screen. This is the single biggest reason to use Recraft over
   Flux here.
2. If raster only: export **PNG at 1600px wide max**, drop it in `src/assets/`,
   and reference it through Astro's `<Image />`. The `imageService: 'compile'`
   setting already in `astro.config.mjs` converts to WebP and resizes at build.
3. **Never** put an unprocessed AI export in `public/` — that path is served
   verbatim with no optimisation.

## Where files go

| Asset | Location |
|---|---|
| Course covers | `src/assets/cursos/{slug}.svg` |
| Hero | `src/assets/hero.svg` |
| Spot illustrations | `src/assets/pasos/{01,02,03}.svg` |
| Blog headers | `src/assets/blog/{slug}.svg` |
| **Teacher photos (real)** | `src/assets/profesores/{nombre}.jpg` |

Once the covers exist, the `portada` field in each course's frontmatter changes
from `{emoji, desde, hasta}` to an image import — a small schema edit in
`src/content.config.ts`.
