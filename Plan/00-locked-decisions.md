# Locked Decisions — Ecuador Online School

Decisions the founder (Karel) has made explicitly. These are **not open for re-litigation** by
planning agents. Where a plan conflicts with this file, this file wins.

Last updated: 2026-09-06

---

## D1 — Market & language

- Primary (and only) market at launch: **Ecuador**.
- The site is **Spanish-only**, in **Ecuadorian Spanish (es-EC)**. Not generic Spanish.
- **Consequence: build NO i18n layer for v1.** Single locale, `lang="es-EC"`, plain unprefixed
  routes. Astro's i18n routing taxes every route for a hypothetical second language. Retrofit
  later if English is ever genuinely needed.
- Open sub-question (founder to confirm): the English-teaching vertical necessarily has
  part-English *lesson content*. Assumption for v1 is that all marketing, chrome and checkout
  remain Spanish, and no English-language landing pages exist.

## D2 — Stack

- **Astro**, deployed on **Cloudflare**. Founder constraint.
- Corrections established by research on 2026-09-06 that supersede the original brief:
  - Astro is at **7.3.1**, not 5.x. Target Astro 7.
  - **Cloudflare Pages is off the table for new Astro builds** — `@astrojs/cloudflare` v13+
    removed Pages support entirely, and Cloudflare's own docs now say "Start new projects with
    Workers." Correct target is **Workers Static Assets** via `@astrojs/cloudflare@14.3.0`.
  - "Free tier" is not achievable in practice. Honest floor is **~$7–13/month**
    ($5 Workers Paid + $2–8 R2). The $5 is worth it primarily because CPU per invocation goes
    from 10 ms to 30 s.
- Tailwind v4 (CSS-native `@theme` config), per the workspace standard.

## D3 — Roles

- **Alumnos** (students) and **profesores** (teachers) are required.
- An **admin/owner** role is implied and required in practice.
- **Guardians/parents** are a real third party for the children's therapy vertical.

## D4 — Teacher course authoring  ⟵ ADDED 2026-09-06, HIGH IMPACT

**Teachers must be able to create their courses inside the app.** This is an explicit founder
requirement and it is **MVP scope, not v2**.

This rules OUT the cheaper options that planning agents would otherwise gravitate to:

| Ruled out | Why it fails the requirement |
|---|---|
| Founder hand-enters courses from WhatsApp material | Not teacher self-service |
| Git-based markdown CMS (Keystatic, TinaCMS, Decap) | Requires git/markdown literacy from non-technical teachers |
| Notion / Google Docs + sync script | Authoring happens outside the app; sync is a permanent tax |
| Raw SQL against production D1 | Not a product |

Still permitted, to be decided by the plan: a **custom in-app teacher studio** built on the
Astro + D1 stack, or an **embedded/headless CMS** whose authoring UI is genuinely usable by a
non-technical teacher and can be surfaced inside the app.

Seed content: roughly **2 example courses** to start, so the platform is not empty — but the
tooling for teachers to self-author is the deliverable, not the example courses.

**Known consequence, stated honestly:** a real authoring studio (course/module/lesson CRUD with
reordering, resumable video upload, draft/publish states, quiz builder, preview) is the single
largest scope item in the project and is the main reason a 6–8 week MVP is at risk. The plan must
either budget for it explicitly or state what else is cut to make room.

## D5 — Out of scope this round

- **Marketing plan** — deliberately deferred to a later phase. SEO planning IS in scope.

---

## Market facts established by research (2026-09-06) that constrain design

- 2026 Salario Básico Unificado: **$482/month**. Average household income ~$1,135/month against
  ~$930/month spend — roughly **$200/month of genuinely discretionary income**. 35.7% of
  households earn below one SBU.
- Market clearing prices: **$9–16/hour** for 1:1 tutoring; **~$120/month** for 4 online music
  classes; **$22–25/session** for in-person child speech/learning therapy in Guayaquil;
  **$225 per English level** at CEC-EPN. Platzi at **$249/year** anchors self-paced programming.
- **Device data conflict — resolved.** StatCounter reports 79% desktop for Ecuador, but INEC's
  ENEMDU (July 2025) shows only **32.7% of households own any computer/tablet** while **59.3% of
  people own a smartphone**, and PCMI puts mobile at **75% of e-commerce volume**. StatCounter is
  an artifact. **Design mobile-first; do not let the desktop number drive decisions.**
- Ecuador runs **two school calendars** (Sierra/Amazonía from 1 Sep 2026; Costa/Galápagos from
  4 May 2026), producing **four demand spikes a year**. Quito nivelación centres report +50%
  enrolment in June–July.
- The model that converts locally is a **monthly live-class package sold over WhatsApp with
  interest-free installments**, not a self-serve subscription. This is in tension with D4's
  recorded-course authoring focus, and the master plan must reconcile the two.

---

## D6 — Scale posture and infrastructure spend  ⟵ ADDED 2026-09-06

**Do not design for scale that does not exist yet, and do not contort the architecture to stay
inside a free tier.**

Founder's position, accepted as a decision:
- Target the **20–200 student** range. Past ~20 students there is revenue to pay for
  infrastructure; at 200 there is comfortably more.
- Infra at $7–13/month is **irrelevant next to revenue**. At 20 students on a $120/month
  live-class package that is ~$2,400/month gross. The hosting bill is a rounding error.

**Consequences the plans must follow:**

| Do | Don't |
|---|---|
| Assume **Workers Paid ($5/mo) from day one** | Contort code to fit 10 ms CPU |
| Assume **paid R2** for video from day one | Build around the 10 GB free cap |
| Put sessions in D1 because it's *correct* | Build caching layers to dodge KV's 1,000 writes/day |
| Size for 200 concurrent-ish students | Design read replicas, queues, sharding for 5,000 |
| Spend complexity budget on the **teacher authoring studio** | Spend it on premature scaling |

The free-tier limits documented in this file remain useful as *awareness of where cliffs are*,
not as design constraints. **Delete the scaling anxiety, keep the cost table.**

## D7 — The competitive wedge is technical capability  ⟵ ADDED 2026-09-06

Research found that Ecuadorian incumbents (Aprender21, CENFORPRO, FUNCADE, Universidad
Hemisferios, AMW Academy) run WhatsApp-first lead-gen on WordPress-grade sites, frequently with
**no published price and no cart at all** — conversion is a WhatsApp message.

Founder's read, accepted: they do this because building and running a real web app is beyond
their capability or willingness to invest — **not because it is the optimal product.** The
founder has the stack experience and app-management experience, so that constraint does not
apply here.

**Therefore: building a genuinely good product IS the differentiation.** This retroactively
justifies D4 (in-app teacher authoring) — it is not scope creep, it is the moat. Competitors
cannot follow.

**Important nuance the plan must preserve, so this is not over-corrected:** Ecuadorian *buyer*
preference for WhatsApp is partly independent of *seller* capability. 75% of e-commerce is
mobile and WhatsApp is where trust is established before payment. So:

- The product is a real web app, not a WhatsApp thread. ✅
- **But keep WhatsApp as a first-class contact, pre-sale and support channel.** Removing it
  would be a self-inflicted conversion wound.
- Publishing an **honest USD price** is a live differentiator, since most incumbents hide price
  behind "Solicita información."

## Resolution of the recorded-vs-live tension noted above

D4 (authoring studio for recorded courses) and the market finding (live packages sell) are **not
in conflict once sequenced**: live classes are how revenue starts at 20 students; the authoring
studio is how the business stops being time-for-money. The master plan should carry both, with an
explicit order.

## D8 — Quality bar is GLOBAL, not Ecuadorian  ⟵ ADDED 2026-09-06, SETS THE STANDARD

**Do not benchmark craft against Ecuadorian sites.** Competing with local WordPress-grade
operators sets expectations far too low. The target is to get **as close as realistically
possible to globally recognised products**, which by itself produces an enormous edge in Ecuador.

**This reclassifies the reference research.** The two groups are used for different things and
must not be confused:

| Group | Use it for | Do NOT use it for |
|---|---|---|
| **Ecuadorian / LatAm** (Aprender21, CENFORPRO, AMW, FUNCADE, Hemisferios) | **Local mechanics only** — payment methods, cuotas, WhatsApp placement, price framing, trust signals (SETEC / university certification), es-EC tone | Craft, visual design, UX, performance, information architecture |
| **Global** (Duolingo, Khan Academy, Linear, Frontend Masters, Epic Web, Stripe, Expressable, Teachable) | **The craft bar** — visual system, lesson player, checkout friction, empty states, motion, accessibility, performance | Business model, payment methods, pricing (US economics do not transfer) |

### What "global bar" means operationally — measurable, not vibes

- **Performance:** LCP under 2.5s on a mid-range Android over a throttled 3G connection.
  Course/marketing page weight budget well under 500 KB. (For scale: Lovevery is 3.6 MB /
  250 requests, css-for-js.dev is 2 MB — both would be hostile on an Ecuadorian prepaid plan.)
- **Accessibility:** WCAG 2.2 AA, genuinely met, not claimed. Non-negotiable given the platform
  serves children with learning difficulties.
- **Design system:** a real token system (Tailwind v4 `@theme`), not ad-hoc utility soup.
- **Lesson player:** Frontend Masters / Epic Web quality — video + transcript + progress +
  next-lesson, working properly at 360px.
- **Checkout:** Gumroad/Stripe-level friction, i.e. as few steps as the local payment
  methods permit.

### Where we can realistically EXCEED the global names, not just match them

**Performance on poor connections.** Astro shipping static HTML from Cloudflare's edge can be
genuinely *faster* than Coursera, Domestika or Duolingo on an Ecuadorian mobile connection,
because those carry heavy SPA bundles. This is the one axis where "as close as realistically
possible" understates what is achievable — we should simply win it, and it is also the axis the
local market feels most acutely.

### Consequence for scope-cutting decisions

When the plan must cut to hit a date, **cut FEATURES, never craft.** A smaller product built to a
global standard beats a broad product built to a local one. This overrides any critic advice of
the form "ship it rough and polish later" on student-facing surfaces.

### Consequence for effort allocation

The edge is created by what **buyers** see. Priority order for the quality budget:

1. **Student/buyer-facing** (homepage, course pages, checkout, lesson player, mobile perf) —
   global bar from day one. This is the differentiation.
2. **Teacher-facing authoring** (D4) — must be genuinely usable and in-app, but the buyer never
   sees it. Functional in v1, global bar in v2.

**Noted tension for the master plan to resolve honestly:** "global craft bar" + "in-app teacher
authoring" + "6–8 week MVP" is over-constrained. One of the three has to give, and the honest
candidate is the timeline or the number of verticals at launch — not the craft bar (D8) and not
teacher self-service (D4).

## D4a — AMENDMENT: teacher dashboard is custom and in-app. Fork closed.  ⟵ 2026-09-06

The authoring fork raised after the reference research is **resolved by founder decision**:

> "teachers wont have to code or create the courses via github, we should have a dashboard for
> the teachers where they can create the courses"

- **Sveltia CMS / Keystatic / any git-backed CMS: RULED OUT.** Requiring a teacher to hold a
  GitHub account fails D8's global bar — no respected platform does this — and fails D4's intent.
- **The deliverable is a custom teacher dashboard** inside the app: course → módulo → lección
  CRUD, drag reordering, video upload, draft/publish, preview ("Ver como estudiante").
- Cost is accepted: this is the ~15–25 day item the authoring scout priced. The master plan must
  make room by cutting elsewhere (timeline, or number of verticals at launch), per D8.
- The founder still hand-enters the first ~2 example courses **through the dashboard**, which
  doubles as its first real test.

## D9 — Cloudflare-only, and a hard 200-student planning ceiling  ⟵ 2026-09-06

> "lets see if we can do everything with cloudflare functions or if we will need a server where
> we can have a backend like django I would rather use cloudflare completly, and plan for 200
> students top, once we reach that we could even build a better app later on"

- **Strong preference: 100% Cloudflare.** No origin server, no Django, no VPS, unless something
  genuinely cannot be done otherwise — in which case it must be named explicitly with the reason.
- **Plan for 200 students maximum.** This is a design ceiling, not a forecast. At 200 the business
  can fund a rebuild or a deliberate upgrade.
- **Explicitly permitted consequence:** this app is allowed to be a *stepping stone*. Do not
  build for a 5,000-student future. Optimise for shipping well now and replacing later.
- The architecture must therefore avoid anything justified only by scale: no sharding, no read
  replicas, no queue-based fan-out, no microservices, no premature abstraction.

**Open technical question this raises, to be answered with verified 2026 facts:** is there any
requirement in this product that Cloudflare Workers genuinely cannot serve? The known suspect is
**video transcoding** (Workers cannot run ffmpeg). Secondary suspects: PDF certificate
generation, image/thumbnail processing, and long-running jobs. Each needs a verified verdict and
a Cloudflare-native or managed-service answer before the stack is locked.

## D10 — Phase-1 spend discipline: money goes to marketing and teachers  ⟵ 2026-09-06

> "to reduce expenses even more since the 1 phase we will only focus in putting money on marketing
> and paying our teachers we could start the video handling with zoom even with the free one and
> dealing with the cutting and reopening most companies does that over here so people are use to that"

**Accepted.** Infrastructure runs as close to $0 as correctness allows. Phase-1 cash goes to
marketing and teacher pay.

**Total phase-1 infra: ~$6–9/month.** Only genuinely non-optional line is **Workers Paid $5/mo**
(password hashing needs 30–50 ms CPU vs the free tier's 10 ms cap). Bunny Stream stays at $0 until
recorded courses actually exist.

### Live video: $0, and better than the proposal

The founder's willingness to accept Zoom free's 40-minute cut is not needed. Two verified facts:

- **Google Meet free allows 24 hours on 1:1 calls** (60 min only once a 3rd person joins). Zoom
  free caps 1:1 at 40 min. For one-to-one classes Meet is free *and* uncut — strictly better.
- **Zoom's "Original Sound for Musicians" is available on the FREE tier** — 48 kHz, up to 96 kbps
  mono / 192 kbps stereo, audio processing disabled. Zoom Pro is **not** required for
  high-fidelity instrument audio. Saves $14.16/mo.

| Class type | Tool | Cap | Notes |
|---|---|---|---|
| 1:1 programación / general | **Google Meet free** | 24h — never bites | No reconnect, ever |
| 1:1 música | **Zoom free** + Original Sound for Musicians | 40 min | Schedule 40-min lessons |
| Group (3+) | **Google Meet free** | 60 min | Better than Zoom's 40 |

**The music trick: schedule 40-minute lessons and the cap becomes invisible.** Standard music
lesson lengths are 30/45/60 min; 40 sits naturally between them, and 30 is normal for younger
children. Sell it as *"4 clases de 40 minutos"* and nobody ever reconnects — free high-fidelity
audio with none of the friction the founder was prepared to tolerate.

Upgrade trigger: buy one Zoom Pro seat ($14.16/mo) only when a teacher actually wants 60-minute
music lessons, paid from revenue.

**Do not embed live video in the app in v1.** It is a `meeting_url` stored in D1 — no SDK, no
WebRTC, no cost. The per-session link security rules still apply (fresh link per session, nulled
on cancel/refund, host-admit on) because these are classes with children in them.

## D11 — The REAL teacher roster (supersedes all invented personas)  ⟵ 2026-09-06

An earlier planning round **invented** teacher personas (Nayeli / Andrés / Diego), and a critic then
concluded "English has no teacher — cut it". **Both were wrong.** The founder's actual roster:

| Teacher | Teaches | Verticals covered |
|---|---|---|
| **David** | English **and** music | `/ingles/` + `/musica/` |
| **Daniel** | Programming and computation | `/programacion/` |
| **Elena** | Special needs | `/apoyo-escolar/` (naming TBD — see below) |

**Unresolved ambiguity:** the founder wrote "4 teachers total" but named three people. This may mean
three people covering four subject areas (David counted twice), or a genuine fourth teacher not yet
named. **Capacity math depends on headcount, not subject count**, so this must be confirmed. All
capacity modelling is being done for both readings.

### Corrections this forces to MASTER-PLAN.md

1. **§4 "Cut English" is REVERSED.** David teaches it. Restore `/ingles/`, its SEO pillar, and its
   share of the launch content calendar. The cut was based on invented personas — exactly the risk
   flagged in decision #5 of §3.
2. **David is a single point of failure across two of four verticals.** No plan modelled this. If
   David leaves, half the catalogue dies. Needs an explicit mitigation.
3. **Elena's vertical may not be what the plan assumed.** See D12.

## D12 — Elena is a SPECIAL NEEDS TEACHER, not (necessarily) a speech therapist  ⟵ 2026-09-06

The entire "therapy vertical cannot launch" recommendation rested on the original Plan/Option 1 doc's
framing of *"specialized speech/learning therapy"*. The founder has now said Elena is a
**"special needs teacher"** — which is a materially different thing.

**The distinction that decides it:**

| Framing | Regulator | Likely obligations |
|---|---|---|
| *Docente de educación especial / psicopedagoga* — educational support, refuerzo, apoyo pedagógico | **MINEDUC** (education) | Far lighter. ACESS permit and telesalud norm likely do **not** apply. |
| *Fonoaudióloga / terapista de lenguaje* — evaluación, diagnóstico, tratamiento, terapia | **MSP / ACESS** (health) | SENESCYT + ACESS registration, ACESS operating permit, Oct-2025 Norma Técnica de Telesalud, mandatory DPIA. |

**If Elena sits on the education side, most of the blockers that forced the waitlist recommendation
evaporate — and the vertical can launch.**

**Two things remain true either way and must not be assumed away:**
- **Minors' data still triggers LOPDP obligations**, very likely including the mandatory Data
  Protection Delegate — who legally cannot be the person implementing compliance, i.e. not the founder.
- **Marketing copy can create health-claim exposure by itself**, regardless of what the service
  actually is. Wording like *evaluación*, *diagnóstico*, *tratamiento* or *terapia* may cross the line
  where *refuerzo*, *apoyo*, *acompañamiento*, *nivelación* and *tutoría* do not.

**Open question for the founder — needed before this vertical launches:**
**What is Elena's actual título, and is it SENESCYT-registered?** The whole analysis is contingent on
it. A *docente de educación especial* and a *fonoaudióloga* face different rules even if they do
similar-looking work.

*Status: under investigation by a dedicated workflow (2 independent regulatory investigators + 2
adversarial verifiers) as of 2026-09-06.*

## D12a — RESOLVED: Elena is a *terapista de lenguaje titulada*  ⟵ 2026-09-06

Founder confirmed: **"Elena es una terapista de lenguaje titulada."**

**She is on the HEALTH side of the line, not the education side.** The hoped-for MINEDUC escape hatch
in D12 is **not available**. The original MASTER-PLAN analysis was correct: this is a regulated health
activity, and ACESS professional registration, the operating-permit question, and the Oct-2025 Norma
Técnica de Telesalud all apply.

### But "titulada" is genuinely good news, and reframes the problem

The earlier blocker was never Elena's competence — it was whether a *legal path* existed at all. It
does. A titled professional can be SENESCYT-verified and ACESS-registered. This moves the vertical from
"cannot launch" to **"launches on a known compliance path with a real cost and timeline."**

### The trap to avoid — explicitly

**Do NOT frame Elena's service as "apoyo escolar / refuerzo pedagógico" to dodge health regulation.**
With a *terapista de lenguaje titulada* actually delivering the service, an educational framing is
likely to create **more** exposure than doing it properly — it misrepresents a regulated service while
the practitioner's own título makes the real nature of the work obvious. Either do it as regulated
speech therapy, or genuinely do not offer it. No middle path.

*(The naming change to `/apoyo-escolar/` floated in D11 is therefore withdrawn for Elena's vertical.
It stays available if a separate, genuinely educational tutoring product is added later — delivered by
someone who is not Elena.)*

### Her credentials are an ASSET, not just a compliance cost

Every Ecuadorian therapy incumbent found in the reference research (FUNCADE, Universidad Hemisferios)
runs anonymous WhatsApp lead-gen with **no price, no cart, and no named practitioner**. A named,
verifiable, SENESCYT-registered *terapista de lenguaje titulada* with her credentials displayed is:

- the **strongest trust signal available** to a parent choosing therapy for their child;
- exactly what Google's **YMYL / E-E-A-T** standard demands for health-adjacent content, which the SEO
  plan already flagged — meaning the compliance work and the SEO work are the *same work*;
- a genuine differentiator against incumbents who hide behind a phone number.

**Display her título, SENESCYT registration and ACESS number prominently.** What was framed as a
regulatory burden is also the vertical's main competitive weapon.

### Sequencing (to be costed by the running workflow)

Launch **inglés, música and programación** immediately — none of them touch health regulation. Run
Elena's compliance track in **parallel**, and open her vertical when it clears. A waitlist page with
her credentials on it collects demand meanwhile, at zero regulatory risk.

**Unchanged and still binding:** minors' data triggers LOPDP obligations across *every* vertical, very
likely including the mandatory Data Protection Delegate, who cannot be the founder. Registration must
ask date of birth in all four verticals, not just Elena's.

## D13 — Project identity: Dopegh0st, NOT Motion Colors  ⟵ 2026-09-06

All accounts, repos and services for this project use the founder's **personal** identity.
Motion Colors is his work information and must not be attached to this venture.

| Item | Value |
|---|---|
| GitHub user | **`Dopegh0st`** (zero in position 7) |
| Repo | `https://github.com/Dopegh0st/escuela` — named `escuela` until the brand name is chosen |
| Email for all accounts | **`dopeghostseo@gmail.com`** |
| Test domain | **`dopeghost.com`** |

**Trap:** the machine's *global* git config is `andyc-dev / dev@motion-colors` — exactly the wrong
identity. Every repo for this project needs **repo-local** `user.name` / `user.email` overrides.
Never let a commit land under the Motion Colors identity.

Cloudflare: wrangler is logged in as of 2026-09-06.

## D14 — Pricing: course-based and far cheaper. $120/mes is dead.  ⟵ 2026-09-07

**Founder's own transaction, the most reliable market data in this whole project:**

> "we got our kid in a roblox course to program custom maps and mini games they charged us $20 for
> 2 clases per week and 3 weeks total, $20 was the payment for the full course"

**$20 ÷ 6 classes = $3.33 per class.** The site was priced at $120/mes for 4 classes = **$30 per
class — 9× the real local anchor.** It would have scared away exactly the buyer it was aimed at.

### Why the earlier research pointed the wrong way

The research anchors were real but were the wrong *segment*:

| Anchor | Segment | Per class |
|---|---|---|
| $9–16/hour (Preply, Superprof, tusclasesparticulares) | **1-to-1 private tutoring** | $6–11 |
| $120/mes for 4 classes (AMW Academy) | **1-to-1 adult language, monthly** | $30 |
| **$20 for 6 classes (founder's actual purchase)** | **kids' group course, fixed scope** | **$3.33** |

Both are true. They are different products. The site was aimed at children's group classes while
carrying 1-to-1 adult subscription pricing.

### The structural lesson, which matters as much as the number

They bought a **course**, not a **subscription** — fixed scope, fixed price, clear end date, one
payment. That is easier to buy at every level, and it **eliminates the recurring-billing gap**
flagged as a blocker in MASTER-PLAN §5: PayPhone has no card-on-file, so a monthly product had no
way to charge month two. A fixed-price course sidesteps the problem entirely rather than working
around it.

### New pricing

| Product | Scope | Format | Price | Per class |
|---|---|---|---|---|
| **Curso en grupo** | 6 clases de 40 min, 2×/semana, 3 semanas | grupo de hasta 8 | **$25** | $4.17 |
| **Curso individual** | 6 clases de 40 min, 2×/semana, 3 semanas | 1 a 1 | **$60** | $10.00 |

- Group sits just above the $20 anchor, justified by **smaller groups and titled teachers** — a
  modest premium is defensible, a 6× one is not.
- Individual lands at $10/class, inside the verified $9–16/hour 1-to-1 market band.
- **Lead with the per-class number** in the UI (`$25 el curso · $4 por clase`). It reframes a lump
  sum as obviously affordable against ~$200/month household discretionary income.

### Consequences the plan must absorb

- **Group size must rise from 6 to 8.** At $25 × 8 = $200 per cohort over ~4 teacher-hours = $50/h
  gross. At 6 students it is $37/h, which is too thin once the teacher's share comes out.
- **Revenue per cohort is small.** 20 students ≈ $500 per 3-week cycle. Volume and repeat
  enrolment, not price, are the growth levers. Plan accordingly and do not pretend otherwise.
- **The capacity model in `Plan/agents/08-capacity-economics.md` is now wrong** — it was built on
  the $120/mes assumption and needs redoing against these numbers.
- Free first class (D-prueba, 25 min 1-to-1) stays. Against a $25 course it is a proportionally
  bigger giveaway, so the 25-minute length matters more, not less.

## D15 — Database created. Subscriptions are gone by design.  ⟵ 2026-09-07

**D1 `escuela` created and migrated — this was the irreversible step.**

| | |
|---|---|
| Name | `escuela` |
| ID | `549b0c6e-e6d0-4334-a0c5-c3f745bdbddb` |
| Jurisdiction | **default** (founder's choice), placed in **ENAM**, served from **MIA** |
| Binding | `DB` |
| Tables | 20 |

Miami is about as close to Ecuador as Cloudflare gets, so the default choice paid
off on latency. When Elena's vertical opens, create a **second** D1 with EU
jurisdiction for clinical records only — jurisdiction is per-database, so this
does not have to be traded off now.

### Subscriptions: removed by D14, not deferred

Repricing to a fixed $25 course deleted the hardest part of the build. Nothing
below needs to exist:

| Was required for $120/mes | Status |
|---|---|
| Card-on-file tokenisation | not needed |
| Renewal cron + dunning | not needed |
| Failed-payment recovery | not needed |
| Subscription state machine | not needed |
| Proration / mid-cycle cancellation | not needed |

This resolves the blocker the critics raised in MASTER-PLAN §5: **PayPhone is a
one-shot browser redirect with no card-on-file**, so a monthly product had no
mechanism to charge month two. The fixed-price course sidesteps it rather than
engineering around it. What remains is "take $25 once, grant access."

### Fixes from the critique that are now in the schema, not a to-do list

- **`orden_item.beneficiario_user_id`** — a mother buying for her child was
  previously impossible to represent, and it is the most common purchase here.
- **`pago.client_transaction_id UNIQUE`** — PayPhone's correlation key. The
  uniqueness is what makes the webhook idempotent; without it a retried callback
  double-grants enrolment.
- **`clase_sesion` + `sesion_asistente`** — group classes were physically
  impossible under the old 1:1 booking constraint while the business sold groups
  of 8.
- **Order states `pending_transfer` / `reversed`, payment state
  `pending_verification`** — manual bank transfer is a first-class rail in this
  market, not a fallback.
- **`user.fecha_nacimiento` in every vertical** — minors trigger LOPDP duties
  platform-wide (Res. SPDP-SPD-2025-0028-R Art. 10.1/10.3, "toda actividad"),
  and signup previously had no age question at all. Stored as a date, never a
  derived boolean, so it stays correct as the person ages.
- **`guardian_link.verified_at` / `revoked_at`** — guardian links must be
  invite-and-accept. Trusting a client-supplied ward id was a live IDOR.
- **`profesor.vetting_completado_at`** — hard gate before any teacher is
  assigned to a session with children.
- **`clase_sesion.meeting_url` nullable per session** — one fresh link per
  session, nulled on cancel. The old permanent bearer URL meant anyone ever
  forwarded it could rejoin a class with children indefinitely.
- **`audit_log`** — append-only, with a reason on every destructive action.

### Cost check (founder asked to verify nothing is paid)

Every dependency is **MIT or Apache-2.0**: astro, @astrojs/cloudflare, tailwindcss,
typescript, wrangler, **better-auth (MIT, free forever, no per-user fees)**,
drizzle-orm (Apache-2.0), drizzle-kit (MIT). Better Auth does sell an optional
*managed* service (hosted dashboard, audit logs, enterprise SSO) — we self-host
the library and never touch it.

Known advisory: `esbuild <=0.24.2` via `drizzle-kit` (GHSA-67mh-4wv8-2f99).
Dev-server-only, drizzle-kit is a devDependency that never ships to production,
and the offered fix downgrades to drizzle-kit 0.18.1 which is ancient and
breaking. Accepted knowingly.
