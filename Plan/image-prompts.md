# Imagery: what to actually do

**Researched 2026-09-06 by three independent agents. This corrects earlier advice in this file,
which was wrong.**

---

## The short answer

**No — davinci.ai cannot give you SVG.** And you probably shouldn't buy anything at all.

---

## 1. davinci.ai cannot export SVG. This is a missing model, not a missing button.

davinci.ai is a multi-model aggregator operated by **HubX** (HubX Yazılım Hizmetleri A.Ş., İzmir,
Turkey) — not Blackmagic's DaVinci Resolve, not an OpenAI product.

Its live public model catalogue (pulled from `wl-cms-web-prod.davinci.ai/image-models`, 204 KB of
JSON) lists 28 image models, including exactly three Recraft entries:

| Model | Credits | Slug |
|---|---|---|
| Recraft V3 | 13 | — |
| **Recraft V4.1** | 15 | **`recraft-4-1`** ← the model in your URL |
| Recraft V4.1 Pro | 69 | — |

**None of them is a Vector variant.** Recraft ships raster and vector as *separately billable
models* — `V4.1 Vector`, `V4.1 Pro Vector`, `V4.1 Utility Vector`. davinci.ai wired up only the
raster ones.

Corroborating evidence:
- The string `"svg"` appears **zero times** in the entire 204 KB model catalogue, zero times in the
  aspect-ratio endpoint, and zero times in the art-styles endpoint.
- All generated content is stored as `.png`/`.jpeg` and served through Cloudflare Image Resizing as
  WebP (`img.davinci.ai/cdn-cgi/image/format=webp,...`) — a pipeline that cannot carry SVG at all.

So no vector geometry is ever generated. Even a hypothetical "SVG" button could only auto-trace.

**One exception worth knowing:** davinci.ai's *separate* **Logo Generator** product does advertise
"SVG, PNG, PDF". That is a different tool from the Recraft explore model. If you want to try it for
a logo, that is the place — not the `recraft-4-1` explore page.

## 2. The "5–30 KB" figure was optimistic by 3–5×

Recraft's vector output *is* genuine native vector, not auto-traced — Recraft states this plainly
("Recraft generates true vectors… The paths are real, the points are yours"). That part was right.

The size figure was not:

| Asset | Real size |
|---|---|
| Icons, simple logo marks | 5–30 KB ✅ |
| **Flat illustrations** | **24–144 KB** ❌ (I said 5–30) |

Recraft's own feedback board has a user reporting SVGs "starting at 9k characters", with a Recraft
staffer replying they are "currently working on reducing the file size of vector images" and
suggesting simpler visuals as the workaround.

## 3. The comparison I made was rigged

I compared an *optimised SVG* against an *unoptimised, full-size PNG*. The honest counterfactual is
an image encoded at the size it is actually displayed:

| Format | Size |
|---|---|
| Raw 1024px PNG | 1.76 MB (measured) |
| Recraft native SVG | 24–144 KB |
| **480px AVIF** | **6,988 bytes** (measured) |

**A correctly-sized AVIF beats Recraft's SVG by 3–20×.** SVG only wins when the artwork is
genuinely flat and palette-locked — and then it also wins on scalability, which AVIF cannot match.

⚠️ **Also: drop "subtle grain texture" from any vector prompt.** In raster, grain is free. In
vector, grain means thousands of tiny shapes — it is the fastest way to turn a 20 KB SVG into a
300 KB one. That instruction was in the earlier version of this file and was self-defeating.

## 4. Recraft's free tier is a trap for a brand mark

SVG export *is* available on the free plan (30 generations/day). But on the free plan:

- **Recraft owns the images.**
- They appear **publicly in the community gallery.**
- They are explicitly **"not licensed for commercial use."**
- **Rights vest at generation time** — upgrading later does *not* retroactively license a logo you
  made on free.

If you ever generate the logo there, do it on a paid plan or not at all.

Paid: **Basic ~$10/mo billed annually**, 1,000 credits; V4.1 Vector costs ~2–4 credits per
generation. Direct API: **$0.08/image** for V4.1 Vector, $0.01 for vectorization — which skips
davinci.ai entirely.

---

## The recommendation: don't buy anything

**Your entire built site is 123 KB today, and the course covers cost zero bytes.** The cheapest
asset is the one you don't ship.

1. **Keep the CSS-gradient + emoji course covers exactly as they are.** Unbeatable at ~$100/GB, and
   they already look deliberate rather than placeholder.
2. **Hand-author the logo as inline SVG** — 1–2 KB, infinitely scalable, no licence questions, no
   subscription. A wordmark plus a simple geometric mark is well within reach by hand.
3. **If the covers ever need more than an emoji**, add **Lucide** or **Iconoir** (ISC/MIT,
   `currentColor`, ~500 bytes per icon, recolours to your palette for free).
   ⚠️ Correction: these are **not** currently installed. The project's only dependencies are
   `astro`, `@astrojs/cloudflare`, `tailwindcss`, `@tailwindcss/vite`, `typescript`, `wrangler`.
   An earlier note claiming astro-icon was already a dependency was wrong — that was a *plan*
   recommendation, not an installed package.
4. **Do not pay davinci.ai, Recraft, Kittl or Canva** for this.
   ⚠️ The connected Canva MCP cannot export SVG either — only PDF/JPG/PNG/PPTX/GIF/MP4/CSV.

---

## Escape hatch: the local pipeline, free and measured

If you later want real illustration, your RTX 4080 SUPER does it for nothing. This was built and
verified end to end: **1.76 MB PNG → 8,295-byte, 26-path, on-brand SVG in 2.1 seconds.**

1. Generate with **FLUX.1-schnell**, not FLUX.1-dev.
   ⚠️ **FLUX.1-dev's licence prohibits commercial use.** FLUX.1-schnell is Apache 2.0. I
   recommended `dev` earlier — that was wrong for a business.
2. Pre-flatten to your exact palette (coral `#e0522c`, teal `#14897c`, violet `#5b4bc4`, golden
   `#ffc24b`, cream `#fffbf5`).
3. Trace:
   ```
   vtracer --palette --filter-speckle 24 --simplify 2 --path-precision 1 --optimize 2
   ```
4. Run **SVGO** on the result.

⚠️ **Never use vtracer's `--max-colors`.** In testing it silently repainted teal as blue and coral
as mauve.

---

## The 10-second check, if you try any tool

Open the downloaded `.svg` in a text editor:

- `<path d="M12 4L...` → real vector. Good.
- `<image href="data:image/png;base64,iVBOR...` → a PNG wearing an SVG costume. It is **larger**
  than the PNG it contains. The file extension gives no hint.

---

## Prompts — only if you go the local/Recraft route

Palette clause:
```
Colour palette, strictly: coral #e0522c, teal #14897c, violet #5b4bc4,
golden yellow #ffc24b, cream background #fffbf5, deep indigo #2e2a63.
```

Style clause (note: **no grain**, and flatter than before — Recraft's own staff say simpler art is
the fix for oversized SVGs):
```
Flat vector illustration, bold geometric shapes, few colours, large flat colour
areas, soft rounded corners, clean thick outlines, generous negative space.
No gradients. No texture. No grain. No shading.
No text, no letters, no numbers, no words anywhere in the image.
No photorealism. No 3D render. No drop shadows.
```

Subjects, one per course:
- **Inglés** — `two overlapping speech bubbles with a small paper aeroplane between them` · coral dominant
- **Música** — `an acoustic guitar seen from the front with three rounded sound waves` · teal dominant
- **Programación** — `a laptop seen straight on with three stacked bars on screen and a small rocket` · violet dominant
- **Apoyo escolar** — `a sprouting plant in a rounded pot with two gentle speech bubbles above it` · golden dominant

⚠️ Keep the last one **non-clinical** — no stethoscopes, crosses, clipboards or clinic rooms. Per
`Plan/agents/10-compliance-costed-path.md` the imagery must stay on the education side of the
regulatory line, exactly as the copy does.

## Still true, and the most important line here

**Do not generate faces for David, Daniel or Elena.** A phone camera in good light beats anything
these tools produce, and for Elena a generated face beside a real ACESS registration number is the
worst possible pairing.
