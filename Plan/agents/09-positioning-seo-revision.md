# 09 — Positioning & SEO Revision (es-EC)

**Owner:** Positioning / SEO
**Date:** 2026-09-06
**Supersedes:** `Plan/agents/05-seo.md` §1.2, §1.3, §2.1, §2.4, §2.5, §4, §4.1, §5.1, §10 — and reverses
MASTER-PLAN §4's "cut Inglés" line.
**Triggered by:** D11 (real teacher roster) and D12 (Elena is a *special needs teacher*, not necessarily
a speech therapist) in `Plan/00-locked-decisions.md`.

> **Not legal advice.** §2.6–§2.9 are marketing recommendations that happen to reduce legal exposure.
> Every phrasing rule marked ⚖️ must be confirmed by an Ecuadorian lawyer before publication, and
> reconciled with the regulatory investigation running in parallel. Where the two disagree, the lawyer
> wins and this document loses.

---

## 0. What changed, in one paragraph

An earlier round invented three teacher personas, and a critic — reasoning correctly from bad data —
concluded that English had no teacher and should be cut, and that the therapy vertical could not launch.
The real roster is **David (inglés + música), Daniel (programación), Elena (necesidades especiales)**.
Two of those facts move SEO strategy materially:

1. **`/ingles/` is restored.** It was never a supply-less vertical. On the evidence below it is the best
   commercial-intent vertical in the portfolio for Ecuador, and it contains the one query in the whole
   plan with genuine transactional pull and almost no competition (`suficiencia de inglés`).
2. **Elena's vertical is renamed and re-aimed.** It moves off the health SERP entirely and onto the
   education SERP. This is not a compromise — the education SERP is *both* safer **and** easier to win
   **and** better matched to an online-only provider with no physical address. Those three usually pull
   in different directions; here they align. That is the central finding of this document.

A third fact nobody has costed: **David is a single point of failure across half the catalogue.** §3.6
gives the SEO-specific mitigation.

### Headcount ambiguity — carried explicitly, both readings

The founder wrote "4 teachers total" but named three people.

| | Reading A — 3 people, 4 subjects | Reading B — 4 people, one unnamed |
|---|---|---|
| `/profesores/` pages at launch | **3** + index = 4 pages | **4** + index = 5 pages |
| David's pillar coverage | 2 of 4 pillars (50%) — concentration risk real | 2 of 4 pillars — identical risk |
| City-page gate (§4.4) passes | Quito + Guayaquil only | Depends entirely on where teacher #4 lives |
| Launch indexable pages | **~34** | **~35** |
| Article capacity (§5) | 3 teachers × ~1 h/article → the calendar is **tight**; founder must write | 4 teachers → comfortable |
| `EducationalOrganization` `employee` array | 3 `Person` refs | 4 `Person` refs |

**Nothing in the IA breaks under either reading.** The only real differences are the article cadence and
one row of the page count. Do not block SEO work on resolving it — but resolve it before committing to
the month-6 column, because Reading A means the 26-article target needs the founder writing, not just
the teachers.

---

## 1. Method, and how much to trust the numbers

Unchanged from `05-seo.md` §1.1 and worth repeating because it is the most-ignored caveat in SEO
planning: **there is no paid keyword tool behind these figures.** Every volume is a modelled national
monthly estimate for Ecuador, triangulated from:

- **(a) Market size.** ~15.4M Ecuadorian internet users (DataReportal Digital 2026), ≈3.5% of the
  LatAm Spanish search market. Anything that would be 10,000/mo across LatAm is roughly 300/mo here.
- **(b) Live SERP composition observed 2026-09-06.** Who ranks, how strong they are, and whether the
  result set is a map pack, a marketplace, a directory, or a keyword-stuffed local site.
- **(c) Ecuadorian institutional anchors** — MINEDUC calendar dates, LOEI terminology, CEC-EPN pricing,
  marketplace inventory depth.

| Confidence | Meaning |
|---|---|
| **M** | Modelled *and* corroborated by SERP evidence examined today |
| **L** | Modelled only — treat as a rank ordering, not a number |
| **S** | The **SERP read is verified**; the volume is still L, but the competitive judgement is solid |

Nothing here is H. **Replace the whole volume column in week 1** with Google Keyword Planner (free
account, location = Ecuador, language = Spanish — it returns banded ranges without spend, which is
enough) plus Google Trends (EC, 12-month) for the seasonality shape. From month 2, Search Console is the
only accurate source you will ever have, and it only covers queries you already rank for.

`KD` is a 1–100 judgement of SERP difficulty, not a tool score.

---

# PART 1 — Elena's vertical

## 2.1 The crux: the keyword you choose decides the regulator you face

This is the finding that should drive the decision, and — importantly — it is not primarily a legal
argument. I examined both SERPs today. **They are two different markets that happen to describe
overlapping human problems.**

| | **Education SERP**<br>`refuerzo escolar`, `tareas dirigidas`, `nivelación`, `apoyo escolar` | **Health SERP**<br>`terapia de lenguaje`, `psicopedagogía`, `dificultades de aprendizaje` + city |
|---|---|---|
| Who ranks (observed 2026-09-06) | `apprentus.com`, `tusclasesparticulares.com.ec`, `infoclases.com`, `estudioscarpediem.com`, `centrodeapoyopedagogico.com`, `futurekidsquito.com`, `mindsecuador.com`, `soyecuatoriano.com` | `cecit.com.ec`, `grupoismartec.com`, `saludinfantilpami.com` (a *centro médico*), `terapiadelenguajeenquito.com` (EMD), `psico.org`, `ansuz.ec`, `psicologoluispellon.com` |
| Result type | Marketplaces + small local sites, several with **phone numbers stuffed into the `<title>`** | Clinics with physical addresses, **map packs**, medical-centre branding |
| Credential bar the SERP sets | A named teacher | A visibly licensed clinician |
| Can an online-only provider with no address win it? | **Yes** | **No.** The map pack takes most of the click share and you cannot enter it without a real, verifiable address |
| Regulator implied by the copy | MINEDUC | MSP / ACESS |
| Competitor quality | **Genuinely weak** — stuffed titles, no schema, no author bios, WordPress-grade | Established, funded, physically present, several with 10+ years of local reputation |

**Read that table twice.** The education-side SERP is winnable by a well-built Astro site with named
teachers inside 90 days. The health-side SERP is not winnable by *anyone* without a consultorio address,
regardless of what the law permits. So even in the scenario where Elena turns out to be a fully
ACESS-registered fonoaudióloga holding a permiso de funcionamiento, **the health keywords would still be
a poor SEO investment for this business at this stage.**

That is the durable version of the argument. The legal exposure is real and is being investigated
separately; the SEO case stands on its own and points the same direction.

### 2.1.1 The URL and vertical name — recommendation

| Candidate | Verdict |
|---|---|
| **`/apoyo-escolar/`** | ✅ **Recommended.** Broad enough to hold both the mainstream refuerzo audience and the NEE audience under one pillar. Unambiguously educational. Short, WhatsApp-legible. Not owned by any Ecuadorian incumbent. |
| `/refuerzo-academico/` | Strong keyword — it is the *official* MINEDUC/LOEI term — but it names one service, not a vertical. **Use as a spoke.** |
| `/tareas-dirigidas/` | Highest consumer intent in Ecuador and the weakest competition, but it reads as a physical after-school room and cannot house the NEE work. **Use as a spoke.** |
| `/apoyo-pedagogico/` | ⚠️ **Avoid as pillar.** `centrodeapoyopedagogico.com` is an existing Quito operator ranking on exactly this term. Fighting an exact-match domain for no extra volume. |
| `/educacion-especial/` | Accurate to Elena's title, frightening to the mainstream buyer, low volume. **Spoke at most.** |
| `/psicopedagogia/` | ❌ **Do not use.** Puts you on the clinical SERP (psico.org, psychologists, diagnostic language) — exactly where §2.1 says not to go — and implies a título Elena may not hold. |
| `/terapia-de-lenguaje/` | ❌ **Delete from the plan** unless the regulatory investigation returns a green light *and* a real address exists. |

**Decision: the vertical is `/apoyo-escolar/`, branded in copy as _"Apoyo escolar y acompañamiento
personalizado"_.**

## 2.2 Keyword research — the EDUCATION side

National monthly estimates, Ecuador. See §1 for what these numbers are and are not.

### 2.2.1 Core service cluster

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target page |
|---|---|---|---|---|---|
| **tareas dirigidas** | 720 | **S** | Commercial | **18** | `/apoyo-escolar/tareas-dirigidas/` |
| **deberes dirigidos** | 320 | **S** | Commercial | 14 | same page (secondary term) |
| refuerzo académico | 480 | M | Commercial | 24 | `/apoyo-escolar/refuerzo-academico/` |
| refuerzo escolar | 290 | M | Commercial | 26 | pillar |
| clases particulares | 1,300 | M | Commercial | 58 | pillar — **head term, do not chase** |
| clases particulares para niños | 210 | L | Commercial | 30 | `/apoyo-escolar/para/ninos/` (month 6) |
| nivelación escolar | 260 | M | Commercial | 22 | `/apoyo-escolar/nivelacion/` |
| nivelación de matemáticas | 190 | L | Commercial | 20 | spoke (month 6) |
| clases de nivelación online | 140 | L | Commercial | 19 | `/apoyo-escolar/nivelacion/` |
| apoyo escolar | 170 | M | Commercial | 28 | pillar |
| tutoría personalizada | 90 | L | Commercial | 21 | pillar |
| profesor particular a domicilio | 260 | L | Local commercial | 34 | ⚠️ **do not target** — you are online-only; the query means in-person |
| profesor particular online | 110 | L | Commercial | 25 | pillar |
| ayuda con los deberes | 130 | L | Problem-aware | 12 | `/apoyo-escolar/tareas-dirigidas/` |
| **Cluster subtotal** | **≈ 2,600–3,200** | | | | |

**`tareas dirigidas` is the single best keyword in Elena's vertical and it appears nowhere in
`05-seo.md`.** It is the phrase Ecuadorian parents actually use — Spain and Argentina say *apoyo
escolar*, Mexico says *asesorías*, **Ecuador says _tareas dirigidas_ / _deberes dirigidos_.** Its SERP is
a wall of small Quito centres with phone numbers in their title tags and no structured data. A properly
built page wins it.

Corollary rule for all copy: **`deberes` beats `tareas` in es-EC.** Use *deberes* as the primary noun in
body copy, *tareas* as the synonym — not the reverse.

### 2.2.2 Learning-difficulty cluster — the careful part

Every one of these is answerable in purely educational language, and every one is also answerable in
clinical language that would land you on the wrong side of §2.6.

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Safe? | Target |
|---|---|---|---|---|---|---|
| dificultades de aprendizaje | 390 | M | Informational | 34 | ⚠️ conditional — safe as an *educational article*, unsafe as a *service page* | Article |
| problemas de aprendizaje en niños | 240 | L | Informational | 30 | ⚠️ conditional | Article |
| **necesidades educativas especiales** | 320 | M | Informational | 22 | ✅ safe — MINEDUC term of art | `/apoyo-escolar/necesidades-educativas-especiales/` |
| **adaptación curricular** | 210 | **S** | Informational | **11** | ✅ **safe — best opportunity in the cluster** | Article + spoke |
| adaptaciones curriculares ejemplos | 140 | L | Informational | 13 | ✅ safe | Article |
| inclusión educativa Ecuador | 170 | L | Informational | 25 | ✅ safe | Article |
| mi hijo no quiere hacer los deberes | 210 | L | Problem-aware | **9** | ✅ safe | Article |
| mi hijo se distrae mucho al estudiar | 170 | L | Problem-aware | 12 | ✅ safe | Article |
| mi hijo no entiende lo que lee | 140 | L | Problem-aware | 10 | ✅ safe | Article |
| cómo ayudar a mi hijo con matemáticas | 190 | L | Problem-aware | 16 | ✅ safe | Article |
| mi hijo bajó las notas qué hago | 110 | L | Problem-aware | 8 | ✅ safe | Article |
| déficit de atención niños tareas | 190 | L | Informational | 28 | ⚠️ conditional — write about *study strategies*, never about the condition | Article (month 6) |
| TDAH en la escuela | 260 | M | Informational | 40 | ⚠️ KidsHealth / UNIR / Bupa own this. High risk, low ROI | **skip at launch** |
| dislexia en niños | 320 | M | Informational | 44 | ❌ skip — clinical topic, clinical competitors, no service to sell | — |
| evaluación psicopedagógica | 130 | L | Commercial | 27 | ❌ skip — the word *evaluación* is the exposure (§2.6) | — |
| informe psicopedagógico para el colegio | 70 | L | Commercial | 18 | ❌ skip — you cannot legally produce one | — |

**`adaptación curricular` is the sleeper.** It is a real MINEDUC mechanism that schools tell parents
about, parents do not understand, and for which there is essentially **no consumer-facing Ecuadorian
content**. It is 100% educational vocabulary with zero clinical implication, and it positions Elena as
exactly what she is: the person who helps a family work *with* the school. Rankable at #1 inside 60 days.
It also converts, because a parent searching it has just been handed a document they cannot read.

### 2.2.3 City modifiers — education side

| City | Régimen | `tareas dirigidas {ciudad}` | `refuerzo escolar {ciudad}` | `clases particulares {ciudad}` | Build a page? |
|---|---|---|---|---|---|
| **Quito** | Sierra | 320 (M) | 110 (L) | 390 (M) | ✅ if a teacher genuinely serves it |
| **Guayaquil** | Costa | 170 (L) | 90 (L) | 290 (M) | ✅ different régimen = genuinely different content |
| Cuenca | Sierra | 70 (L) | 40 (L) | 110 (L) | ⚠️ month 6+ |
| Ambato | Sierra | 40 (L) | 20 (L) | 50 (L) | ❌ |
| Manta | Costa | 30 (L) | 20 (L) | 40 (L) | ❌ |
| Loja | Sierra | 30 (L) | 20 (L) | 40 (L) | ❌ |

Read §4.4 first. The régimen argument `05-seo.md` used to justify six unique city pages **does not
survive scrutiny** — it produces two unique calendars, not six.

## 2.3 Keyword research — the HEALTH side, i.e. exactly what you are declining

Requested so the decision is made with the number in front of you. Here it is — and then the number that
actually matters.

| Keyword (es-EC) | Est. vol/mo | Conf | SERP reality (observed 2026-09-06) |
|---|---|---|---|
| terapia de lenguaje Quito | 880 | M | CECIT, Grupo iSmart, PAMI, `terapiadelenguajeenquito.com`, map pack |
| terapia de lenguaje para niños | 720 | M | Same clinics, national |
| terapia de lenguaje Guayaquil | 480 | M | Local clinics + map pack |
| a qué edad debe hablar un niño | 480 | M | KidsHealth, clinic blogs |
| dislexia en niños | 320 | M | Medical/educational publishers |
| mi hijo de 3 años no habla | 390 | M | Clinic blogs, KidsHealth |
| retraso del lenguaje en niños | 290 | L | Medical |
| terapia de lenguaje online | 210 | M | CECIT already advertises "terapia de lenguaje virtual para todo el Ecuador" |
| dislalia en niños tratamiento | 210 | L | Medical |
| terapeuta de lenguaje / terapista de lenguaje | 210 / 160 | L | Directories, clinics |
| tartamudez en niños qué hacer | 190 | L | Medical |
| fonoaudiología / fonoaudiólogo Ecuador | 140 | L | Professional/clinical |
| cuánto cuesta la terapia de lenguaje | 90 | L | Clinic price pages |
| terapia del habla | 90 | L | Minority variant — *terapia de lenguaje* dominates in es-EC |
| **Raw cluster total** | **≈ 4,000–4,600/mo** | L | |

**Now the number that matters.** The 4,000+ figure is the wrong one to weigh, because most of it is
structurally unreachable for an online-only school:

| Segment | Est. vol/mo | Reachable online-only, no address? |
|---|---|---|
| City-modified clinical queries (`… Quito`, `… Guayaquil`, `… cerca de mí`) | ~1,600 | ❌ **No.** Map pack takes the majority of clicks. No address → no GBP → no map pack. |
| Head clinical service queries (`terapia de lenguaje para niños`, `terapista de lenguaje`) | ~1,100 | ❌ **Realistically no.** Decade-old clinics with real local authority. A new domain does not enter this in year one. |
| Informational / problem-aware (`a qué edad debe hablar`, `mi hijo de 3 años no habla`, `dislalia`) | ~1,600 | ⚠️ **Partly** — but YMYL-hard, needs a licensed reviewer, and the CTA has nowhere honest to go |
| **Genuinely addressable: explicitly-online clinical queries** (`terapia de lenguaje online`, `… virtual`) | **~250–350** | ⚠️ In principle yes — and CECIT already ranks there |

**So the honest cost of staying on the education side is roughly 250–350 addressable sessions/month at
maturity, not 4,000.** Against that, the education side offers ~2,600–3,200/mo of national volume on
SERPs whose strongest competitor stuffs phone numbers into title tags. It is not a close call.

**One real loss, named honestly.** The problem-aware speech queries are the best pure content plays in
this entire keyword universe — high volume, low difficulty, enormous emotional pull. `mi hijo de 3 años
no habla` at ~390/mo and KD 18 is the sort of query SEOs build businesses on. Walking away is a genuine
sacrifice. But an article on it published by a school that does not offer speech therapy has no honest
call to action, and an article with no honest CTA is a traffic vanity metric.

**Mitigation that keeps the ethics clean and costs nothing:** publish one page,
`/apoyo-escolar/cuando-buscar-otro-tipo-de-ayuda/`, which says plainly *"Estas señales no se resuelven
con refuerzo académico. Si tu hijo presenta X, lo que necesita es una valoración con un profesional de la
salud."* No keyword targeting, no CTA to your own service, a real referral list. It is the single
strongest trust signal available to this vertical, it is what a real special-needs teacher would tell a
parent anyway, and Google's raters are explicitly instructed to reward content that puts the user's
interest above the site's.

## 2.4 Vocabulary: the two words that decide the framing

Before the phrasing table, three es-EC facts that everything else rests on:

1. **`refuerzo académico` is a legal term in Ecuador.** Under the Reglamento General a la LOEI, refuerzo
   académico / refuerzo pedagógico is an **obligation of the child's own teacher and school**, with a
   report that must be socialised with the family. Consequence for copy: **never position your service
   as replacing the school's refuerzo académico.** Position it as *complementary* — *"acompañamos el
   refuerzo académico que ya hace el colegio"*. This is both accurate and it neatly avoids implying the
   school is failing, which Ecuadorian parents are sensitive about.
2. **`necesidades educativas especiales` (NEE) is the MINEDUC term** and is safe. `discapacidad` is a
   CONADIS/legal term and should only appear where genuinely accurate. `trastorno` is clinical.
3. **`psicopedagoga` is a title, not an adjective.** Ecuadorian universities (e.g. UTEQ) award a
   *Psicopedagogía* degree, but whether the título sits on ACESS's health-professions register is
   **unverified** — ACESS registers "otras carreras relacionadas a la salud" including psychologists.
   ⚖️ **Do not describe Elena as *psicopedagoga* unless her título literally says so and it is
   SENESCYT-registered.** Using a protected professional title you do not hold is a separate and more
   serious exposure than any marketing-language question.

## 2.5 Safe-phrasing guide — the two-column table

Left column ships. Right column does not ship, in any surface, ever — including image alt text, the
WhatsApp pre-filled message, the Instagram bio, and a teacher's own words in a testimonial.

⚖️ Every row is a marketing judgement pending legal confirmation.

### 2.5.1 H1s and page titles

| ✅ Safe — educational framing | ❌ Unsafe — reads as a clinical claim |
|---|---|
| Apoyo escolar personalizado para niños en Ecuador | Terapia de aprendizaje para niños en Ecuador |
| Tareas dirigidas online: acompañamiento en los deberes | Tratamiento de dificultades de aprendizaje |
| Refuerzo académico y nivelación escolar online | Evaluación y diagnóstico de problemas de aprendizaje |
| Acompañamiento para estudiantes con necesidades educativas especiales | Intervención psicopedagógica para niños con NEE |
| ¿Qué es una adaptación curricular y cómo pedirla en el colegio? | Cómo detectar si tu hijo tiene dislexia |
| Estrategias de estudio para niños que se distraen | Terapia para el déficit de atención |
| Nivelación para supletorios: plan de 4 semanas | Rehabilitación del rendimiento escolar |

**Structural rule:** the H1 must name a **school activity** (deberes, nivelación, refuerzo, estudio,
adaptación curricular, acompañamiento) — never a **condition** and never a **procedure**.

### 2.5.2 Meta descriptions

| ✅ Safe | ❌ Unsafe |
|---|---|
| "Clases de apoyo escolar online con una docente de educación especial. Acompañamos a tu hijo en sus deberes, su nivelación y sus adaptaciones curriculares. Escríbenos por WhatsApp." | "Nuestra especialista evalúa y trata las dificultades de aprendizaje de tu hijo. Resultados comprobados en 8 semanas." |
| "Refuerzo académico online en Ecuador. Grupos pequeños, docente titulada, horarios de tarde. Precio publicado: USD X al mes." | "Superamos la dislexia, la disgrafía y el TDAH con un método propio." |
| "¿Tu hijo va a supletorio? Plan de nivelación de 4 semanas, en línea, con seguimiento semanal para la familia." | "Diagnóstico psicopedagógico gratuito en la primera sesión." |

**Three words to remove from every meta description:** *diagnóstico*, *tratamiento*, *terapia*. Two more
to remove for a different reason — *garantizamos* and *comprobado* — because outcome guarantees are a
Ley Orgánica de Defensa del Consumidor (Ley 67) misleading-advertising exposure independent of anything
health-related. ⚖️

### 2.5.3 CTAs and buttons

| ✅ Safe | ❌ Unsafe |
|---|---|
| Agenda una clase de prueba | Agenda una evaluación / una valoración |
| Conversemos por WhatsApp sobre tu hijo | Solicita un diagnóstico |
| Reserva tu cupo de tareas dirigidas | Reserva tu sesión de terapia |
| Cuéntanos cómo le va en el colegio | Cuéntanos sus síntomas |
| Ver el plan de nivelación | Ver el plan de tratamiento |
| Habla con Elena, docente de educación especial | Habla con nuestra especialista / nuestra terapeuta |
| Primera clase sin costo | Primera consulta sin costo |

**The single highest-risk word in the entire funnel is `evaluación`,** because it is the natural Spanish
word for the free first call every tutoring business offers, *and* it is the statutory word for a
clinical assessment. Replace it everywhere with **`clase de prueba`**, **`primera clase`** or
**`conversación inicial`**. The word *consulta* carries the same problem and gets the same treatment.

### 2.5.4 Testimonials — the surface everyone forgets

Testimonials are the highest-risk copy on the site because parents write them in clinical language
naturally, and **a claim a customer makes on your page is still a claim on your page.**

| ✅ Safe to publish | ❌ Must be edited or not published |
|---|---|
| "Mateo entrega los deberes a tiempo y ya no llora los domingos." | "Elena diagnosticó la dislexia de Mateo." |
| "Subió de 6 a 8 en matemáticas en un quimestre." | "Nos curó el problema de aprendizaje de Mateo." |
| "Por fin entendimos qué era la adaptación curricular que pedía el colegio." | "La terapia con Elena funcionó mejor que la del hospital." |
| "Elena habló con la profesora del colegio y armaron un plan juntas." | "Es la mejor terapeuta de Quito." |
| "Ahora se sienta a estudiar solo 40 minutos." | "Le quitó el déficit de atención." |

**Process rule, not just a wording rule:** collect testimonials in writing with an explicit permission
line, edit them for clinical language, show the edited text back to the parent, and keep the approval.
Store consent and the approved text in D1 alongside the testimonial. ⚖️ Note separately that
`05-seo.md` §3.4 already forbids marking any of this up as `Review`/`AggregateRating` — that stands, and
here it has a second reason: schema-marked reviews are machine-read at scale.

Also: **use first names and an initial only for minors** (*"Mateo S., 9 años, Quito"*). Do not publish
children's photographs, full names, school names, or any diagnosis, even with parental consent — the
LOPDP treatment of minors' data makes this the wrong place to be clever.

### 2.5.5 Teacher bio and credential display

| ✅ Safe | ❌ Unsafe |
|---|---|
| "Elena [Apellido], docente de educación especial. Título de tercer nivel registrado en SENESCYT nº XXXX." | "Elena [Apellido], especialista en trastornos del aprendizaje." |
| "Trabaja con estudiantes con necesidades educativas especiales, en coordinación con sus colegios." | "Evalúa, diagnostica y trata dificultades de aprendizaje." |
| "X años acompañando a familias en refuerzo académico y adaptaciones curriculares." | "X años de experiencia clínica." |
| "No realiza diagnósticos ni terapias. Cuando hace falta, deriva a un profesional de la salud." | *(omitting the boundary entirely)* |

That last row is a **positive requirement, not just an absence.** State the boundary explicitly on
Elena's page and on the pillar. It is simultaneously the legal safeguard, the E-E-A-T trust signal, and —
counter-intuitively — a conversion asset, because it is the only page in this market that tells a worried
parent the truth about what it is not.

### 2.5.6 Service names, FAQ answers and schema

| Surface | ✅ Safe | ❌ Unsafe |
|---|---|---|
| Service name | "Programa de refuerzo académico — 8 semanas" | "Programa de intervención — 8 semanas" |
| Service name | "Acompañamiento NEE" | "Terapia de apoyo NEE" |
| FAQ Q | "¿Qué pasa si mi hijo tiene una adaptación curricular?" | "¿Ustedes tratan el TDAH?" |
| FAQ A opener | "Trabajamos con el plan que ya definió el colegio…" | "Nuestro método corrige…" |
| Schema `@type` | `EducationalOrganization`, `Course`, `Service`, `Person` | `MedicalBusiness`, `MedicalWebPage`, `MedicalTherapy`, `MedicalCondition`, `Physician` |
| Schema `jobTitle` | "Docente de educación especial" | "Terapeuta" / "Especialista clínica" |
| Schema `reviewedBy` label | "Revisado por Elena [Apellido], docente de educación especial" | "Revisado médicamente" |

**The schema point is not cosmetic.** Emitting `MedicalWebPage` or `MedicalBusiness` is a machine-readable
self-declaration that you are a health provider — a Google ranking signal, an AI-answer-engine signal, and
a documentary artefact that a regulator or a plaintiff can point at. Use `EducationalOrganization` and
`Service`/`Course` only. Package the offering as a defined program (start date, weeks, hours) so that
`Course` is *honest* — if the offering has no defined curriculum, use `Service` with
`serviceType: "Apoyo escolar"` rather than stretching `Course`.

### 2.5.7 The words list, for the CI check

Add a build-time lint over `/apoyo-escolar/**` and its articles that **fails the build** on these tokens
outside an explicitly whitelisted context (the referral page in §2.3, and quoted regulation):

```
terapia · terapéutic* · terapeuta · terapista · tratamiento · tratar ·
diagnóstic* · diagnostic* · evaluación · valoración clínica · rehabilitación ·
paciente · consulta · síntoma · patología · trastorno · cura* ·
fonoaudiolog* · logoped* · psicoterapia · clínic* ·
garantizamos · resultados comprobados · método científico propio
```

This is a ~30-line check and it is the cheapest insurance in the entire plan. Copy drifts — a teacher
writes a course description in the D4a dashboard six months from now, uses the word *terapia* because it
is the natural word, and nobody notices. **The lint must also run over teacher-authored content from the
dashboard, not just over the marketing routes.** That is a real requirement on the D4a studio: a
publish-time validation with a human-readable explanation, not a silent rejection.

## 2.6 YMYL and E-E-A-T for Elena's pages

Google's current Search Quality Rater Guidelines (**published 11 September 2025, 182 pages, still the
live version in 2026**; the September 2025 revision expanded YMYL to cover civics and elections and added
AI-content rules) define YMYL as content that could affect a person's **health, safety, financial
security or wellbeing**. Trust is named as the foundation of E-E-A-T, and the guidelines state that a page
with low trust cannot be rated high quality regardless of the author's expertise.

**Staying on the education side does not exit YMYL.** Content about a child's schooling, development and
future is squarely "wellbeing", and any page a worried parent reads about their child will be rated
against the high bar. The practical consequence is that Elena's pages need almost the same E-E-A-T
apparatus the therapy pages would have needed — minus the licensed-clinician reviewer, which is the
expensive part.

### Required on every `/apoyo-escolar/` page and article

| # | Requirement | Detail |
|---|---|---|
| 1 | **Named author byline, no exceptions** | Full name, photo, título, and years of experience. Never "Equipo Umbral", never anonymous. Links to `/profesores/elena-{apellido}/`. |
| 2 | **Credential display, verifiable in 30 seconds** | Título de tercer nivel + **SENESCYT registry number**, with an outbound link to the SENESCYT public title-consultation service so a parent can check it themselves. This is the highest-value single element on the page. |
| 3 | **Scope-of-practice statement** | The §2.5.5 boundary line, visible on the pillar and on every article. Doubles as the legal safeguard. |
| 4 | **Citations to primary sources** | 2–4 per article, as normal outbound links, to **MINEDUC**, the **Reglamento General a la LOEI** (cite the article number), **CONADIS**, and UNESCO/OEI inclusion materials. **Not** to MSP/ACESS/ASHA — citing health authorities re-frames you as health content. This is a change from `05-seo.md` §4.1, which listed MSP and ASHA. |
| 5 | **Editorial disclaimer, above the fold** | *"Esta información es orientación pedagógica y no reemplaza la valoración de un profesional de la salud ni el criterio del colegio de tu hijo."* |
| 6 | **Reviewer line where content touches development** | "Revisado por [Elena], docente de educación especial, [fecha]." Mirrored as `reviewedBy` → `Person` in schema, with an educational `jobTitle`. |
| 7 | **Review log in D1** | Keep the `revisiones_contenido` table from `05-seo.md` §4.1 (`articulo_id`, `revisor_id`, `fecha_revision`, `notas`). Re-review annually. **Update `dateModified` only when content actually changes.** |
| 8 | **No AI-drafted content published without a recorded sign-off** | The Sept-2025 QRG added explicit AI-content rules. Drafting with AI is fine; publishing without a named human reviewer on a YMYL child topic is not. |
| 9 | **A real `/sobre-nosotros/` and a real `/contacto/`** | Raters check "who is behind this site" for YMYL. Named founder, RUC, named teachers, physical contact method. Thin About pages are an explicit low-quality signal. |
| 10 | **`Person.hasCredential` in schema** | `EducationalOccupationalCredential` with `credentialCategory: "degree"` and `recognizedBy` → SENESCYT. Educational vocabulary only. |

### What you do NOT need, and should not fake

You do not need a "medically reviewed by" badge, a clinical advisory board, or medical citations. Adding
them would be both false and self-defeating: it would re-declare you as health content while providing
none of the actual authority. **The correct E-E-A-T posture is to be maximally credible as an education
provider, not minimally credible as a health one.**

## 2.7 The content calendar, built on Ecuador's two school calendars

Verified MINEDUC dates (2026-09-06):

| Régimen | Cities in scope | Year structure | Recuperación | Supletorios | Year closes |
|---|---|---|---|---|---|
| **Sierra–Amazonía** | Quito, Cuenca, Ambato, Loja | Started **1–2 Sep 2026** (staggered: 1 Sep bachillerato + inicial; 2 Sep EGB superior + preparatoria). Prior year closed **26 Jun 2026** | 26 Jun – 3 Jul 2026 | **6–9 Jul 2026** | ~late Jun 2027, supletorios ~early Jul 2027 |
| **Costa–Galápagos** | Guayaquil, Manta | Started **4 May 2026**. P1 4 May–7 Aug 2026 · P2 11 Aug–13 Nov 2026 · P3 16 Nov 2026–**24 Feb 2027**. Fin-de-año break 26 Dec 2026–3 Jan 2027 | **25 Feb – 3 Mar 2027** | **4–11 Mar 2027** | **11 Mar 2027**; teacher holidays 12 Mar–10 Apr 2027; next year starts ~early May 2027 |

### The four demand spikes, and the only lead-time rule that matters

| # | Window | Régimen | Dominant query shape | **Content must be LIVE by** |
|---|---|---|---|---|
| 1 | **Sep–Oct 2026** | Sierra back-to-school | `útiles`, `cómo empezar bien el año`, `hábitos de estudio`, `tareas dirigidas {ciudad}` | **now** — this spike is already running |
| 2 | **Nov 2026 – Jan 2027** | Sierra Q1 results + Costa P3 | `mi hijo bajó las notas`, `refuerzo académico`, `nivelación` — *the first-bad-report-card spike* | **Sep 2026** |
| 3 | **Feb–Mar 2027** | **Costa supletorios (25 Feb–11 Mar)** | `supletorio`, `nivelación`, `cómo aprobar el supletorio`, `examen remedial` | **Nov 2026** |
| 4 | **Jun–Jul 2027** | **Sierra supletorios + cursos vacacionales** — the biggest | `supletorio`, `curso vacacional`, `nivelación`, `clases vacacionales {ciudad}` | **Mar 2027** |

**This is the single most actionable line in Part 1:** a new domain takes 8–16 weeks to rank. Therefore
seasonal content must publish **one full quarter before its spike**, not during it. Publishing a
supletorio guide in June 2027 for the July 2027 supletorio is publishing it for July 2028.

**Practical consequence for the launch calendar:** the Costa supletorio content (spike 3) has a
**November 2026 deadline**, which falls inside the launch window. It must be in the week 1–12 calendar,
not deferred to v2. §5 does this.

**One competitive fact for the vacacional spike:** Quito's municipality runs *free* cursos vacacionales
(Verano 2026 ran 13 Jul–14 Aug; "Sol y Viento" camps 27 Jul–7 Aug, free, ages 6–12). These compress
willingness to pay for *general-interest* holiday activities but not for *academic* nivelación or for
subject instruction (inglés, música, programación). Position paid vacacional offerings as academic and
subject-specific; do not compete with a free municipal football camp.

### The evergreen asset this produces

Build **`/calendario-escolar/`** with two children — `/calendario-escolar/sierra-amazonia/` and
`/calendario-escolar/costa-galapagos/` — carrying the actual dates, updated once a year. These are:

- genuinely unique content no template mill can produce,
- linkable (colegios, parent Facebook groups, local news aggregators cite calendar pages),
- the natural internal-link hub for every seasonal article and every vertical, and
- the honest replacement for the six-city-page fantasy in §4.4.

Two pages, not six. They also serve all four verticals, not just Elena's.

---

# PART 2 — English is back in

## 3.1 Why this is the strongest vertical, not merely a restored one

`/ingles/` was cut on a false premise. Restoring it is not a neutral correction — English has the best
combination of volume, intent and Ecuador-specific structural demand in the portfolio:

- It has **the highest commercial-intent volume** of the four verticals.
- It has **a legally-mandated buyer**: B2 is a graduation requirement at Ecuador's leading universities
  (USFQ requires B2 CEFR to graduate; UEES and ESPE publish suficiencia regulations; UCE requires a B1
  certificate for some postgraduate medical specialisations). This is *verified* and it is **not
  seasonal in the way the school calendar is** — it runs on university terms and on individual panic.
- It has **an established price anchor that makes your price look reasonable**, which is rarer than it
  sounds (§3.4).
- Unlike programación, **it is not owned by a $249/yr global platform with 1,900 courses**. Open English,
  the closest thing, is a mass-market subscription with a very different value proposition.

## 3.2 Intent segmentation

Four buyers, four different pages, four different price sensitivities. Treating them as one audience is
the mistake every Ecuadorian language academy makes.

| # | Segment | Who | Trigger | What they will pay for | Page |
|---|---|---|---|---|---|
| **A** | **Requisito de grado** | 20–26, final-year or recently-finished university student | The university will not issue the título without proof of level | Passing a specific exam by a specific date | `/ingles/suficiencia/` |
| **B** | **Trabajo** | 24–40, employed or job-hunting | A job posting says "inglés B2"; a promotion is blocked | Speaking without freezing; a certificate they can attach | `/ingles/para/trabajo/` |
| **C** | **Padres → niños** | Parents 30–45 buying for a 6–14-year-old | Bad English grade at colegio, or aspiration | Their child not falling behind; a patient teacher | `/ingles/para/ninos/` |
| **D** | **Viaje / migración** | 25–50 | A trip, a visa, a family move | Surviving the airport, the interview, the first month | v2 — see §3.3 |

### 3.2.1 Segment A — `suficiencia de inglés` (the best query in the plan)

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target |
|---|---|---|---|---|---|
| **suficiencia de inglés** | 480 | M | Informational→Transactional | **28** | `/ingles/suficiencia/` |
| examen de suficiencia de inglés | 260 | L | Transactional | 26 | same |
| certificado de inglés para graduarse | 210 | L | Transactional | 26 | same |
| qué nivel de inglés piden para graduarse | 140 | L | Informational | 18 | article |
| suficiencia de inglés {universidad} | 20–90 ea. | L | Transactional | 10–20 | **month 6 spokes** — one per university, gated by real data |
| curso de inglés B2 online Ecuador | 90 | L | Commercial | 30 | `/ingles/cursos/ingles-b2/` |
| examen EF SET / MET / TOEFL Ecuador | 40–170 ea. | L | Transactional | 25–45 | article |

**Verified and it resolves `05-seo.md` open question #8:** B2 (CEFR) is the graduation requirement at
leading Ecuadorian universities — USFQ states it explicitly; UEES and ESPE publish suficiencia
regulations; UCE requires B1 for entry to some medical specialisations. Per-university *detail* (which
exam, which score, which exemptions) remains **unverified per institution** and must be researched
before publishing any university-specific page. Getting one of them wrong on a page a student relies on
is a trust catastrophe, so gate those spokes on real data.

**Why this segment is worth more than its volume suggests:** the buyer has a hard deadline, a
non-negotiable requirement, and no price sensitivity relative to the cost of not graduating. It is the
only genuinely urgent buyer in the whole portfolio.

### 3.2.2 Segment B — work and employability

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target |
|---|---|---|---|---|---|
| inglés para el trabajo | 210 | L | Commercial | 32 | `/ingles/para/trabajo/` |
| curso de inglés para conseguir trabajo | 110 | L | Commercial | 28 | same |
| inglés para entrevista de trabajo | 140 | L | Informational | 22 | article |
| inglés de negocios online | 90 | L | Commercial | 34 | month 6 |
| cómo pasar de A2 a B1 en inglés | 110 | L | Informational | 20 | article |
| inglés para adultos desde cero | 180 | L | Commercial | 31 | `/ingles/nivel/principiantes/` |
| aprender inglés rápido para trabajar | 90 | L | Informational | 26 | article |
| clases de inglés conversacional online | 170 | L | Commercial | 36 | `/ingles/cursos/conversacional/` |

**Copy note:** this segment does not want "English classes", it wants *to stop being the person in the
meeting who does not speak*. Lead with the outcome, not the curriculum. Ecuadorian job postings that
specify a level almost always say **B1** or **B2** — use the CEFR letters in copy; they are recognised.

### 3.2.3 Segment C — parents buying for children

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target |
|---|---|---|---|---|---|
| clases de inglés para niños online | 260 | L | Commercial | 33 | `/ingles/para/ninos/` |
| inglés para niños | 590 | M | Commercial | 52 | pillar — head, don't chase |
| **refuerzo de inglés escolar** | 140 | L | Commercial | **16** | **cross-links `/apoyo-escolar/`** |
| mi hijo va mal en inglés | 70 | L | Problem-aware | 8 | article |
| clases de inglés para niños Quito | 110 | L | Local commercial | 30 | city page (gated) |
| inglés para niños desde cero | 90 | L | Commercial | 28 | spoke |

**`refuerzo de inglés escolar` is the bridge between David's vertical and Elena's**, and it is the only
genuine, non-forced cross-sell in the whole portfolio: a parent who bought apoyo escolar has a child who
also has a bad English grade, and vice versa. Build one article that serves both and link it from both
pillars. (This matters for §3.6 too — it is a link between verticals that survives a staffing change.)

### 3.2.4 General commercial and city terms

| Keyword (es-EC) | Est. vol/mo | Conf | Intent | KD | Target |
|---|---|---|---|---|---|
| clases de inglés online | 1,900 | M | Commercial | 62 | pillar — **head, don't chase** |
| curso de inglés online | 1,300 | M | Commercial | 60 | pillar — head |
| clases de inglés online Ecuador | 320 | M | Commercial | 34 | **`/ingles/` — the realistic head target** |
| cuánto cuesta un curso de inglés en Ecuador | 140 | L | Commercial | 19 | article — **high AI-citation value** |
| profesor de inglés online Ecuador | 90 | L | Transactional | 25 | pillar + `/profesores/david-…/` |
| clases de inglés Quito | 590 | M | Local commercial | 44 | `/ingles/en/quito/` (gated) |
| clases de inglés Guayaquil | 390 | M | Local commercial | 41 | `/ingles/en/guayaquil/` (gated) |
| clases de inglés Cuenca | 140 | L | Local commercial | 30 | month 6 |
| clases de inglés por Zoom | 90 | L | Commercial | 24 | pillar FAQ block |
| **Cluster subtotal (excl. head terms)** | **≈ 1,700–2,100** | | | | |

**Where users search in English:** almost never in this vertical, with one exception — **exam names**.
`TOEFL`, `IELTS`, `EF SET`, `MET`, `Cambridge B1 Preliminary`, `TOEIC` appear verbatim and untranslated
inside Spanish queries. Use them exactly as written.

## 3.3 What waits until month 6

Segment D (travel/migration) and exam-prep depth. Reason: migration-related English content in 2026
attracts a query set entangled with visa and immigration advice — which is YMYL, which you are not
qualified to give, and which would require a disclaimer apparatus disproportionate to ~150/mo of
volume. Revisit once the core three segments are ranking.

## 3.4 The CEC-EPN anchor and how to position against institutional providers

### The anchor, corrected

`05-seo.md` and `00-locked-decisions.md` both carry **"$225 per English level at CEC-EPN."** That number
is now stale. Verified 2026-09-06 from CEC-EPN's own course page:

| Item | Amount |
|---|---|
| **Cost per level** | **$230** |
| **Matrícula (registration)** | **$20** |
| Placement exam | $0 |
| Discount for enrolling in 2 levels and/or conversation clubs in one cycle | 5% |
| Regular enrolment window | 6 Jul – 6 Aug 2026 |
| Classes begin | 12 Aug 2026 |
| Modalities | Presencial (EARME, Ladrón de Guevara, Quito) **and remote by videoconference** |

**So the real first-level cost is $250, not $225.** Update it in both files. *(Hours per level and the
number of levels to reach B2 remain **unverified** and must be confirmed before any comparison table
publishes a per-hour figure.)*

### The rest of the competitive set (verified 2026-09-06, prices as advertised)

| Provider | Advertised price | Note |
|---|---|---|
| **CEC-EPN** | $230/level + $20 matrícula | Institutional certificate, university-backed. **Also teaches by videoconference** — do not assume you have the online lane to yourself |
| Open English | "from $39/mo" advertised; Ecuadorian reports of "from ~$100" | Price varies by country and promotion. Mass-market, 24/7 group classes with native teachers |
| EnQuality (Quito) | from $50/mo | Local, offers a free first class |
| Wall Street English Ecuador | **hidden** — "personalised quote"; 35% discount promo on annual full access (Quito) | Premium franchise, physical centres |
| EF Ecuador, Oxford Ecuador, Cambridge SOL, ILE, COPEI (ESPOL) | hidden or institutional | Institutional/franchise |
| Preply / Superprof / tusclasesparticulares.com.ec | marketplace, ~$8–16/h | Where individual teachers already compete |

### The positioning recommendation

Do **not** try to beat CEC-EPN on certification. Its asset is that the certificate says *Escuela
Politécnica Nacional*, and a university or an employer accepts it. You cannot manufacture that, and
pretending otherwise is the kind of claim that gets found out.

**Position as preparation and progress, not as certification.** Four moves, in priority order:

1. **Sell the outcome the institution does not sell: passing *their* exam.** The highest-value page in
   this vertical is *"cómo prepararte para el examen de suficiencia de tu universidad"*. That is a
   complementary product to CEC-EPN and every university language centre — not a competing one. It is
   honest, it converts, and it cannot be undercut, because they are not selling it.
2. **Publish the price.** CEC-EPN publishes; Wall Street English hides. `05-seo.md` §D7 already
   establishes price transparency as a differentiator in this market. Concretely: *"$X al mes. Sin
   matrícula."* The **"sin matrícula"** line is worth more than the headline price, because CEC-EPN's
   $20 matrícula is the single most irritating line item in Ecuadorian course buying.
3. **Compete on group size and named teacher, not on hours.** An institution sells 100 hours in a room
   with 20 people. Sell "grupos de máximo 6" and *David, by name, with his credential visible*. This is
   the one axis where a three-teacher school structurally wins, and it is also what feeds the entity
   graph in `05-seo.md` §5.4.
4. **Compete on schedule.** CEC-EPN runs fixed cycles with a fixed enrolment window (6 Jul–6 Aug 2026 for
   the August start). A student who decides in September waits eleven months or goes elsewhere. **"Empieza
   cualquier lunes"** is a real and defensible advantage — and it is a genuine query intent
   (`clases de inglés que empiecen ya`).

**The comparison table you should publish** (and which AI answer engines lift verbatim — `05-seo.md`
§6.1 point 3): a `/ingles/cuanto-cuesta/` page comparing published Ecuadorian prices with dates and
sources, updated quarterly. Comparison tables with dated, sourced figures are the single most-cited
content format in AI answers, and no Ecuadorian competitor has built one because most of them hide their
own prices.

## 3.5 David teaches English *and* music — dilution or cross-sell?

**Recommendation: keep the verticals visibly separate in the IA; unify only on the teacher page and in
exactly one deliberate crossover product. Do not put "profesor de inglés y música" in either pillar's H1.**

### Why not two teacher pages

Splitting David into `/profesores/david-ingles/` and `/profesores/david-musica/` is tempting and wrong:
two thin pages, a duplicated `Person` entity that fragments the exact `sameAs`/`@id` graph
`05-seo.md` §5.4 depends on, and a structure that looks evasive to anyone who notices. **One canonical
`Person` page, one `@id`, one URL** — `/profesores/david-{apellido}/` — with two clearly separated
credential blocks and two `knowsAbout` groupings, and each pillar linking to it with an anchor fragment
(`#ingles`, `#musica`).

### Is the pairing itself a credibility problem?

Less than instinct suggests, and the reason is specific: **"English and music" is a recognisable real
profile in a way that "English and accounting" is not.** Both are performance skills taught by practice,
both are taught in the same institutional settings (language institutes, conservatories, private
tuition), and the "language teacher who is also a musician" is a familiar type. The buyer's suspicion is
not triggered by the *combination* — it is triggered by *vagueness*. A page that says "clases de inglés,
música y más" reads as a person looking for any work. A page that says *"Licenciatura en X, mención
Inglés — nivel C1 certificado"* in one block and *"N años de guitarra, formación en Y"* in another block
reads as two real qualifications.

**So the rule is: never generalise, always enumerate.** Two credential blocks, two `hasCredential`
entries, two `knowsAbout` arrays, two separate testimonial sets. Specificity is the antidote to
dilution, not separation.

### Is there a real cross-sell?

**Yes, but at the household level, not the student level** — and one narrow product-level exception.

| Cross-sell | Verdict |
|---|---|
| Same student buys English *and* music | ❌ Rare. Different budget lines, different motivations, and the household discretionary budget is ~$200/month total (D-section, `00-locked-decisions.md`). Two $110–130/mo packages is not a real purchase. |
| **Same household, different children or different terms** | ✅ **Real.** A parent who trusts one teacher buys again. This is a **CRM and WhatsApp play, not an SEO one** — a "hermanos" discount and a follow-up message, not a landing page. |
| **"Inglés a través de canciones" for children (6–10)** | ✅ **One course, deliberately.** Genuinely differentiated, low-competition, and only David can teach it. Ship it as a single course page under `/ingles/cursos/ingles-con-canciones-ninos/`, not as the framing of the English vertical. |
| Music theory taught in English | ❌ No demand in Ecuador at this price point. |

**Guardrail:** the crossover course is a *bonus*, not the positioning. Segment A (a 24-year-old who needs
B2 to receive their título) must never land on a page that smells like a children's singing class. Keep
the crossover course out of the `/ingles/` pillar's above-the-fold and out of the pillar `<title>`.

## 3.6 David as a single point of failure — the SEO-specific exposure

Nobody has modelled this. David covers **2 of 4 verticals**, i.e. roughly half the launch catalogue,
under **both** headcount readings.

| SEO asset at risk if David leaves | Count at launch |
|---|---|
| Vertical pillars whose named teacher disappears | 2 (`/ingles/`, `/musica/`) |
| Course/service spokes | ~4 |
| City pages that pass the §4.4 gate only because of him | up to 2 |
| Articles carrying his byline | ~4 |
| `Person` node whose `@id` is referenced by every one of the above | 1 |
| **Total pages that become factually false overnight** | **~13 of ~34 (38%)** |

### Five mitigations, all cheap, all SEO-specific

1. **Never make the brand depend on a person's name.** No `davidingles.ec`, no "Academia David". This is
   already implied by `05-seo.md` §8's brandable-name recommendation; now it has a second reason.
2. **Course pages must survive an instructor swap.** `instructor` is a *field* referencing a `Person`
   `@id` — never the page's identity. The URL, `<title>`, H1 and the `Course` `@id` must contain no
   teacher name. This is a schema and CMS-schema decision to make *now*, because retrofitting it means
   changing URLs, which means redirects, which means losing rankings at the worst possible moment.
3. **Byline policy: teacher-authored, school-published.** Articles carry the teacher's byline (E-E-A-T
   requires a named human), but the `EducationalOrganization` is the `publisher`. If a teacher leaves,
   the byline can be reassigned with a transparent editorial note without the page's authority
   collapsing.
4. **Do not build programmatic city pages whose only gate-pass is David.** Two verticals × six cities =
   twelve pages that all die at once. §4.4 already caps this at two city pages; this is the second reason.
5. **The `/apoyo-escolar/` ↔ `/ingles/` link (`refuerzo de inglés escolar`, §3.2.3) is a structural
   hedge**, not just a cross-sell. It means the English cluster has inbound internal links from a
   vertical David does not teach.

**Non-SEO note for the master plan, stated once:** the real mitigation is a second English teacher, and
this is the strongest available argument that the unnamed fourth teacher (Reading B) — if they exist —
should be an English teacher rather than anything else.

---

# PART 3 — The four-vertical information architecture

## 4.1 Revised URL taxonomy

Slugs stay ASCII-only — `ninos` not `niños`, `programacion` not `programación`, `nivelacion` not
`nivelación`. Accented slugs percent-encode into unreadable strings when pasted into WhatsApp, which is
this project's primary sharing surface.

| Pattern | Example | Depth |
|---|---|---|
| `/` | | 0 |
| `/{vertical}/` | `/apoyo-escolar/` | 1 |
| `/{vertical}/{servicio}/` | `/apoyo-escolar/tareas-dirigidas/` | 2 |
| `/{vertical}/cursos/{slug}/` | `/ingles/cursos/ingles-b2-suficiencia/` | 3 |
| `/{vertical}/en/{ciudad}/` | `/ingles/en/quito/` | 3 |
| `/{vertical}/para/{audiencia}/` | `/ingles/para/ninos/` | 3 |
| `/{vertical}/nivel/{nivel}/` | `/ingles/nivel/principiantes/` | 3 |
| **`/calendario-escolar/{regimen}/`** ⟵ **new** | `/calendario-escolar/sierra-amazonia/` | 2 |
| `/profesores/` · `/profesores/{slug}/` | `/profesores/david-{apellido}/` | 1 · 2 |
| `/blog/` · `/blog/{slug}/` | `/blog/que-es-una-adaptacion-curricular/` | 1 · 2 |
| `/precios/` `/como-funciona/` `/preguntas-frecuentes/` `/sobre-nosotros/` `/contacto/` | | 1 |
| `/politica-de-privacidad/` `/terminos-y-condiciones/` | | 1 |
| `/app/**` (alumno, profesor, admin, checkout) | — | **noindex + robots Disallow** |

The four verticals — **`/ingles/`, `/musica/`, `/programacion/`, `/apoyo-escolar/`** — sit at depth 1 and
are linked from the site header on every page.

**Reserved second segments** (a service slug may never collide with one): `cursos`, `en`, `para`,
`nivel`. Enforce in the route builder and in a CI check, because the moment a teacher creates a course
called "Para Niños" in the D4a dashboard and it slugs to `para-ninos`, the router breaks in a way that is
maddening to debug.

**Changed from `05-seo.md`:** `/terapia-de-lenguaje/` → `/apoyo-escolar/`. Since nothing is published
yet, this is a rename, not a migration — **but if any URL has already been shared, a 301 is required and
must never be a soft 404 to the homepage.**

**Depth note:** with services at depth 2, the deepest indexable routes (`/ingles/cursos/…`,
`/ingles/en/quito/`) sit at depth 3 from `/`, but every one of them is **2 clicks** from the homepage via
the header → pillar → page. The "no indexable page more than 3 clicks from `/`" rule holds.

## 4.2 Hub and spoke — four hubs

Every pillar is a genuine ~1,800–2,200-word page, not a category stub: what it is, who it is for, who
teaches it (named, credentialed), the services/courses, prices in USD, a `Datos clave` table, 6–8 FAQs,
and a "Guías" block linking every cluster article.

| Hub | Spokes at launch | Cluster articles at launch | Distinctive asset |
|---|---|---|---|
| **`/ingles/`** | `/ingles/suficiencia/`, `/ingles/cursos/ingles-b2-suficiencia/` | 3 | The suficiencia-de-grado angle — no competitor owns it |
| **`/musica/`** | `/musica/cursos/guitarra-desde-cero/`, `/musica/cursos/piano-desde-cero/` | 2 | Ecuadorian repertoire (pasillo, pasacalle, albazo) — near-zero competition |
| **`/programacion/`** | `/programacion/cursos/python-desde-cero/` | 1 | Ecuador employment/salary angle only. **Do not chase head terms** — Platzi, freeCodeCamp and YouTube own them |
| **`/apoyo-escolar/`** | `/apoyo-escolar/tareas-dirigidas/`, `/apoyo-escolar/refuerzo-academico/`, `/apoyo-escolar/necesidades-educativas-especiales/` | 3 (+ the referral page, unindexed from nav but indexable) | `tareas dirigidas` + `adaptación curricular` — weak SERPs, real intent |
| **`/calendario-escolar/`** (cross-vertical) | 2 régimen pages | — | Serves all four hubs; the linkable asset |

Internal-linking rules from `05-seo.md` §2.3 carry over unchanged (link up in the first 150 words, pillar
links down to every cluster article, 2–3 contextual sideways links, bidirectional course↔teacher links,
no orphans enforced in CI, `BreadcrumbList` below depth 1, no `?utm_` internally). Two additions:

6. **Every seasonal article links to the relevant `/calendario-escolar/{regimen}/` page**, and each
   régimen page links to every vertical's seasonal offering. This is what turns two pages into the
   internal-link hub of the whole site.
7. **`/apoyo-escolar/` and `/ingles/` cross-link** via the `refuerzo de inglés escolar` article
   (§3.2.3). It is the only honest cross-vertical link on the site; do not manufacture others.

## 4.3 Page count — launch vs month 6

| | **Launch** (Reading A / B) | **Month 6** |
|---|---|---|
| Home | 1 | 1 |
| Trust + legal (`/precios/`, `/como-funciona/`, `/preguntas-frecuentes/`, `/sobre-nosotros/`, `/contacto/`, `/politica-de-privacidad/`, `/terminos-y-condiciones/`) | 7 | 7 |
| Vertical pillars | 4 | 4 |
| Service / course spokes | 8 | 18 |
| **`/calendario-escolar/` + 2 régimen pages** | **3** | 3 |
| Teacher pages + index | **4 / 5** | 5 / 6 |
| Articles | 8 | 26 |
| City pages (gated, §4.4) | **2** | 6 |
| Audience / level pages (gated) | 0 | 6 |
| Referral / boundary page (§2.3) | 1 | 1 |
| **Indexable total** | **~38 / ~39** | **~77 / ~78** |

Note this is *higher* than `05-seo.md`'s 32 at launch, because four verticals need four pillars rather
than the critique's two — but the growth is concentrated in **pillars and the calendar asset**, not in
programmatic pages. That is the right place for it. **Thirty-eight strong pages still beats three hundred
weak ones**, and it is what a founder plus three or four teachers can actually maintain.

### What deliberately waits for month 6

- Per-university `suficiencia` spokes (gated on verified per-institution requirements — §3.2.1).
- Segment D (viaje/migración) English content (§3.3).
- `/apoyo-escolar/nivelacion/`, `/apoyo-escolar/para/ninos/`, `/apoyo-escolar/educacion-especial/`.
- Cuenca city pages, and any further city page, gated on §4.4.
- `/ingles/nivel/{nivel}/` level pages.
- `VideoObject` markup once lesson previews exist.
- Music course depth (canto, violín) and programming course depth.
- GBP (`05-seo.md` §5.1) — and note that the ACESS-permit route to GBP eligibility **disappears** under
  the education framing. If nobody teaches in person from a real address, there is no legitimate GBP.
  **Do not create one anyway.** Under the education framing, the honest answer is: no GBP, ever, unless a
  physical teaching address genuinely exists. This is a real cost of the education framing and it is not
  recoverable by cleverness.

## 4.4 Thin content on programmatic city pages — the warning, corrected

`05-seo.md` §2.4 argued that Ecuadorian city pages escape the thin-content trap because "Quito, Cuenca,
Ambato and Loja are Sierra régimen; Guayaquil and Manta are Costa régimen. Their term dates genuinely
differ."

**That argument is half wrong, and the wrong half is the load-bearing half.** The régimen distinction
produces **two** distinct calendars, not six. A Quito page, a Cuenca page, an Ambato page and a Loja page
would all carry **byte-identical calendar content**. Four near-duplicate pages differing only in a
find-and-replaced city name is precisely the pattern Google's spam policies name as scaled content abuse,
and the penalty is site-wide, not page-wide.

**The correction:** move the calendar content to the two `/calendario-escolar/{regimen}/` pages, where it
is genuinely unique, and require city pages to earn their existence on something else entirely.

### The revised gate — five conditions, all required

A city page ships only if it passes **all five**:

1. ✅ A **named teacher** who actually serves that city, with hours in that city's timezone context.
2. ✅ ≥250 words that **could not appear on any sibling page** — and the régimen calendar **no longer
   counts** toward this. Acceptable sources of genuine uniqueness: named local colegios the students
   attend, a local price point, a local testimonial, a local partner, a specific local demand pattern.
3. ✅ A distinct, real CTA — a specific teacher's WhatsApp, a specific schedule.
4. ✅ At least one **local proof point** that exists today, not one that is planned.
5. ✅ **⟵ new:** a **named person accountable for updating it**. A city page nobody owns becomes stale
   local claims, which is worse than no page.

**At launch, exactly two cities pass: Quito and Guayaquil.** Under Reading B, a third may pass if the
unnamed teacher is somewhere else — but it must pass the gate, not be assumed in.

Anything failing the gate ships **`noindex, follow`** — *not* canonicalised to the pillar. `noindex` is a
directive; a cross-page canonical is only a hint, and Google routinely ignores it.

### The arithmetic that should scare you

4 verticals × 6 cities × 4 audiences × 3 levels = **288 pages**, from a business with three or four
teachers and roughly twelve real service offerings. The generator is trivial to write in Astro and the
temptation is real, especially because the D4a teacher dashboard makes page creation cheap. **Put the
gate in CI**, not in a document — a build-time check that every city/audience/level route resolves to a
record with a `profesor_id`, a `contenido_unico` field of ≥250 words, and a `responsable` field, and
fails the build otherwise. A rule that lives only in a plan document will be violated in month 4 by
someone in a hurry, and the cost of that will be site-wide.

**One more Astro-specific trap:** `05-seo.md` §3.1's rule (every indexable page prerendered; never
`run_worker_first`; nothing indexable inside a `server:defer` island) applies with extra force to
programmatic pages, because they are the ones most likely to be built as on-demand routes reading from
D1 at request time. A `getStaticPaths` that reads D1 at **build** time is correct; a dynamic route that
reads D1 at **request** time burns Worker quota on every crawl hit and returns `429` past the limit.

---

## 5. Revised 12-week editorial calendar

Prioritised by `(volume × intent weight) / KD` — intent weight 3 transactional, 2 commercial, 1.5
problem-aware, 1 informational — **and then re-ordered by the seasonal lead-time rule in §2.7**, which
overrides raw priority. The Costa supletorio content (spike 3, Feb–Mar 2027) must be live by November
2026, so it moves into weeks 9–10 rather than waiting for v2.

| Wk | Title (es-EC) | Primary keyword | Vertical | Words | Links out |
|---|---|---|---|---|---|
| 1 | Tareas dirigidas online: cómo funcionan y cuándo sirven de verdad | tareas dirigidas | apoyo-escolar | 1,400 | ↑ pillar · → W3, W4 |
| 2 | Suficiencia de inglés: qué nivel te piden para graduarte en Ecuador | suficiencia de inglés | inglés | 1,900 | ↑ `/ingles/` · → W5, W8 · → `/ingles/suficiencia/` |
| 3 | ¿Qué es una adaptación curricular y cómo pedirla en el colegio? | adaptación curricular | apoyo-escolar | 1,500 | ↑ pillar · → W1, W6 · cites Reglamento LOEI |
| 4 | Mi hijo no quiere hacer los deberes: 7 estrategias que sí funcionan | mi hijo no quiere hacer los deberes | apoyo-escolar | 1,300 | ↑ pillar · → W1, W3 |
| 5 | Cómo pasar de A2 a B1 en inglés en 6 meses: plan de estudio real | cómo pasar de A2 a B1 | inglés | 1,600 | ↑ `/ingles/` · → W2 · → curso B2 |
| 6 | Necesidades educativas especiales en Ecuador: qué son y qué puede pedir tu familia | necesidades educativas especiales | apoyo-escolar | 1,700 | ↑ pillar · → W3 · cites MINEDUC, CONADIS |
| 7 | Aprender guitarra desde cero: tus primeras 8 semanas, paso a paso | aprender guitarra desde cero | música | 1,500 | ↑ `/musica/` · → W11 |
| 8 | Cuánto cuesta aprender inglés en Ecuador en 2026 (precios comparados) | cuánto cuesta un curso de inglés en Ecuador | inglés | 1,800 | ↑ `/ingles/` · → W2, W5 · → `/precios/` · **comparison table, quarterly refresh** |
| **9** | **Supletorios en la Costa: fechas 2027 y plan de nivelación de 4 semanas** | supletorio / nivelación | apoyo-escolar | 1,400 | ↑ pillar · → `/calendario-escolar/costa-galapagos/` · **must be live by Nov 2026** |
| **10** | **Calendario escolar 2026-2027: Sierra-Amazonía y Costa-Galápagos** | calendario escolar Ecuador | cross | 1,600 | ↑ all 4 pillars · → W9, W12 · **the linkable asset** |
| 11 | Cómo tocar un pasillo ecuatoriano en guitarra: acordes y ritmo | cómo tocar pasillo en guitarra | música | 1,200 | ↑ `/musica/` · → W7 |
| 12 | Cuánto gana un programador en Ecuador en 2026 | cuánto gana un programador en Ecuador | programación | 1,300 | ↑ `/programacion/` |

**Changed from `05-seo.md` §4:** all four speech-therapy articles (W1, W2, W3, W11 in the old calendar —
`a qué edad debe hablar un niño`, `mi hijo de 3 años no habla`, `terapia de lenguaje online`, `dislalia /
retraso del lenguaje / TEL`) are **removed**. They were the top of the old priority list, and removing
them costs the single best set of content plays in the plan — that cost is named honestly in §2.3. They
are replaced by four education-side problem-aware articles at comparable difficulty and lower risk.

**Weeks 13–24 (month 6):** `mi hijo se distrae mucho al estudiar`, `mi hijo no entiende lo que lee`,
`cómo ayudar a mi hijo con matemáticas`, `inglés para el trabajo`, `inglés para entrevista de trabajo`,
`refuerzo de inglés escolar` (the cross-vertical bridge), `clases de piano para niños: a qué edad
empezar`, `inglés con canciones para niños`, per-university suficiencia spokes, `ruta de 12 meses para
aprender a programar en Ecuador`, plus a **Sierra supletorio article published in March 2027** for the
June–July 2027 spike.

### Capacity check, honestly

Twelve articles at ~1 hour of teacher input each is 12 teacher-hours over 12 weeks. Under **Reading A**
(three teachers) that is 4 hours each — achievable but tight, and five of the twelve fall on Elena
alone, who is also the person with the least slack. Under **Reading B** it distributes better. **If
teacher time is not available, cut to eight articles and keep weeks 1, 2, 3, 6, 8, 9, 10, 12** — that
preserves both seasonal deadlines, both money queries, and the calendar asset.

---

## 6. What this changes in the existing documents

| File | Section | Change |
|---|---|---|
| `MASTER-PLAN.md` | §4 table | **"Inglés ❌ Cut" → "Inglés ✅ Full."** David teaches it. Delete the "no English teacher appears anywhere in the plans" reasoning. |
| `MASTER-PLAN.md` | §4 table | "Terapia de lenguaje ⚠️ Waitlist" → **"Apoyo escolar ✅ Full, education framing"**, conditional on the regulatory investigation confirming Elena is MINEDUC-side. |
| `MASTER-PLAN.md` | §3 decision #5 | Resolved by D11 — but replace it with a new open decision: **headcount, 3 or 4** (§0). |
| `MASTER-PLAN.md` | §5 pricing table | "Therapy (off-platform) $22–25/sesión" → **"Apoyo escolar, on-platform, $110–130/mes"** — the market rate for tutoring, not for therapy (Quito tutoring observed at $8–16/h). |
| `00-locked-decisions.md` | Market facts | **"$225 per English level at CEC-EPN" → "$230/level + $20 matrícula = $250 first level"** (verified 2026-09-06). |
| `05-seo.md` | §1.2 | Replace with §3.2 here — intent-segmented, `suficiencia` promoted to a dedicated spoke. |
| `05-seo.md` | §1.3 | **Delete entirely.** Replace with §2.2 (education) and keep §2.3 (health) as the recorded cost of the decision. |
| `05-seo.md` | §2.1 | `/terapia-de-lenguaje/` → `/apoyo-escolar/`; add `/calendario-escolar/{regimen}/`; add reserved-segment rule. |
| `05-seo.md` | §2.4 | **Correct the régimen argument** — it justifies two pages, not six. Add gate condition #5 (named owner). |
| `05-seo.md` | §2.5 | 32 → ~38 launch pages (four pillars + calendar asset). |
| `05-seo.md` | §4 | Replace the calendar with §5 here. Four therapy articles removed. |
| `05-seo.md` | §4.1 | Rewrite as §2.6 — same rigour, **educational** citations (MINEDUC, LOEI, CONADIS) not medical (MSP, ASHA), and a docente reviewer rather than a clinical one. |
| `05-seo.md` | §5.1 | **GBP: the ACESS-permit route to eligibility disappears** under the education framing. Honest answer becomes "no GBP unless a real physical teaching address exists." |
| `05-seo.md` | §11 Q3/Q4 | Superseded — the therapist-as-public-author question becomes "will Elena display her SENESCYT número?", and the medical-reviewer question dissolves. |
| **New CI requirement** | — | The §2.5.7 forbidden-terms lint, running over marketing routes **and** teacher-authored content from the D4a dashboard. |
| **New product requirement** | — | The D4a teacher dashboard needs a publish-time copy validation with human-readable errors, plus the SEO fields block already noted in `05-seo.md` §12. |

---

## 7. Open questions

1. **Headcount: three teachers or four?** (§0.) It changes the article cadence, one row of the page
   count, and the `employee` array in schema. If there is a fourth, §3.6 argues hard that they should be
   an English teacher.
2. **Elena's exact título, and is it SENESCYT-registered?** (D12.) Everything in §2.5.5 and §2.6 depends
   on what can truthfully be printed next to her name. ⚖️ **Do not print "psicopedagoga" unless the
   título says it.**
3. **Does Elena consent to being a public, named, credential-displaying author with her SENESCYT number
   on the site?** If not, the `/apoyo-escolar/` vertical cannot be built to the YMYL standard in §2.6 and
   should launch as a WhatsApp lead-gen page only — the same conclusion the old plan reached for therapy,
   for a different reason.
4. **Which cities do David, Daniel and Elena actually serve, and can each name a real local proof point?**
   The §4.4 gate needs this. Without it, build zero city pages, not two.
5. **Per-university `suficiencia` requirements.** B2 at leading universities is verified; the
   per-institution detail is not. Does anyone in the network have access to real data for UCE, ESPOL,
   USFQ, PUCE, UTPL, ESPE? This is the best transactional opportunity in the plan and it needs facts.
6. **Do we publish prices?** Unchanged from `05-seo.md` §11 Q5, but §3.4 now sharpens it: against a
   competitor set where CEC-EPN publishes and Wall Street English hides, publishing plus **"sin
   matrícula"** is a specific, defensible wedge — not a generic transparency gesture.
7. **Legal review of §2.5.** ⚖️ The two-column table is a marketing artefact. An Ecuadorian lawyer must
   confirm which side of the health-services advertising line each phrase actually sits on, and whether
   the outcome-claim rules under Ley 67 add constraints beyond those listed.
8. **Does anyone teach in person, anywhere?** It is the only route to a legitimate Google Business
   Profile now that the ACESS-permit route is gone (§4.3).

---

## 8. Verification status

**Verified by web search on 2026-09-06:**

- **CEC-EPN pricing** — $230/level, $20 matrícula, $0 placement exam, 5% two-level discount, enrolment
  6 Jul–6 Aug 2026, classes from 12 Aug 2026, presencial **and** videoconference. *(Corrects the $225
  figure in two existing plan files.)*
- **Sierra–Amazonía calendar 2026-2027** — staggered start 1–2 Sep 2026; prior year closed 26 Jun 2026;
  recuperación pedagógica 26 Jun–3 Jul 2026; supletorios 6–9 Jul 2026.
- **Costa–Galápagos calendar 2026-2027** — start 4 May 2026; three periods (4 May–7 Aug, 11 Aug–13 Nov,
  16 Nov–24 Feb 2027); fin-de-año break 26 Dec–3 Jan; recuperación 25 Feb–3 Mar 2027; supletorios
  4–11 Mar 2027; year closes 11 Mar 2027; teacher holidays 12 Mar–10 Apr 2027.
- **B2 (CEFR) is the graduation requirement** at leading Ecuadorian universities (USFQ explicit; UEES and
  ESPE publish suficiencia regulations; UCE requires B1 for some medical postgraduate entry).
- **`refuerzo académico` is a Reglamento General a la LOEI obligation of the school's own teacher**, with
  a report socialised to the family.
- **`tareas dirigidas` / `deberes dirigidos` is the dominant Ecuadorian consumer term**, with a SERP of
  small Quito centres, several with phone numbers in their `<title>` tags.
- **Both SERPs' composition** (education vs health) as described in §2.1, observed live.
- **Google Search Quality Rater Guidelines** — current version published **11 September 2025**, 182
  pages, still live in 2026; Sept-2025 revision expanded YMYL to civics/elections and added AI-content
  rules; Trust is the foundation of E-E-A-T and low trust caps quality regardless of expertise.
- **ACESS registers "otras carreras relacionadas a la salud"** (psychologists, nutritionists,
  tecnólogos), requiring a SENESCYT/SNIESE-registered third-level title.
- **Quito municipal cursos vacacionales 2026 are free** (Verano 2026: 13 Jul–14 Aug; "Sol y Viento"
  camps 27 Jul–7 Aug, ages 6–12).
- **Competitor price points** as advertised: Open English "from $39/mo" (Ecuadorian reports ~$100),
  EnQuality from $50/mo, Wall Street English Ecuador price hidden, Quito tutoring $8–16/h.

**Explicitly UNVERIFIED — do not publish content that depends on these without checking:**

- **Every search-volume figure in this document.** All modelled per §1. Replace in week 1 with Keyword
  Planner.
- **Whether *psicopedagogía* is on ACESS's regulated-health-professions register in Ecuador.** Searched;
  the results returned Chilean MINEDUC registers and Ecuadorian ACESS pages that do not resolve the
  question. **This is a live legal question, not a settled one**, and it is why §2.4 point 3 says not to
  use the title.
- **Whether Elena's specific título places her under MINEDUC or ACESS.** Owned by the parallel
  regulatory investigation. This document assumes the education framing and says exactly where that
  assumption is load-bearing (§2.1, §2.5, §2.6, §4.3).
- **Per-university `suficiencia` exam, score and exemption detail.**
- **CEC-EPN hours per level and number of levels to B2.**
- **Whether §2.5's specific phrasings satisfy Ecuadorian health-services advertising law and Ley 67's
  misleading-advertising provisions.** ⚖️ Lawyer required.
- **Ecuadorian programmer salary figures** for the week-12 article (carried over unverified from
  `05-seo.md`).

**Carried over unchanged and still valid from `05-seo.md`:** the technical SEO layer (§3 — prerendering,
Core Web Vitals, sitemap/robots/canonicals, structured-data emission plan, the review-snippet policy
trap, the FAQPage caveat), the AI-search layer (§6), measurement (§7 — Cloudflare Web Analytics + GSC +
first-party D1 events, no GA4), domain strategy (§8 — `.ec` recommended), and the es-EC vocabulary rules
(`computadora`, `celular`, `ustedes`, `colegio`/`escuela`, `matrícula`, `pensión`, `cupos`, `deberes`,
`profe`, USD prices). To those add: **`deberes` over `tareas`**, **`tareas dirigidas`**, **`refuerzo
académico`**, **`nivelación`**, **`supletorio`**, **`adaptación curricular`**, **`necesidades educativas
especiales` / `NEE`** — and, permanently, **never** `logopeda`, `terapia`, `diagnóstico` or `tratamiento`
anywhere on the site.
