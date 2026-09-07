# 06 — Brand Strategy & Naming

**Owner:** Brand strategist / namer
**Date:** 2026-09-06
**Status:** Recommendation, ready for founder sign-off. Blocks: domain purchase, SENADI filing, all design work, all URL slugs.

---

## 1. Naming criteria (stated before the candidates, so the scoring is auditable)

| # | Criterion | Weight | Test I applied |
|---|---|---|---|
| C1 | **Works in Ecuadorian Spanish** | 5 | Pronounceable on first sight; spellable when dictated over a phone call or WhatsApp voice note; no accent/`ñ` in the domain string; no vulgar or racially loaded reading in EC or wider LatAm slang |
| C2 | **Not boxed into one subject** | 5 | Must survive "English + music + programming + children's speech therapy" without straining. A name meaning "code school" or "voice clinic" is disqualifying |
| C3 | **Dual-audience credibility** | 5 | Trustworthy to a mother buying clinical therapy for her 7-year-old; not stuffy to a 24-year-old learning JavaScript |
| C4 | **Ownable** | 4 | `.ec` + `.com.ec` plausibly free; no live Ecuadorian competitor in Nice Class 41; registrable as a mark |
| C5 | **Short** | 3 | ≤ 8 letters, ≤ 3 syllables; legible at 32 px favicon; fits an Instagram handle without underscores |

**Ecuador-specific slang screen — words rejected outright before shortlisting.** Anything containing or echoing *longo* or *cholo* (racial slurs in Ecuador), *chucha*/*pucha*, *chimbo* (EC = fake, counterfeit — fatal for a school), *pico*, *cachar*, *concha*, *verga*, *coger*. **`Sendero` was rejected** despite fitting the path metaphor: *Sendero Luminoso* makes it unusable across LatAm. **`Yachay` was rejected** despite being the perfect Kichwa word for "knowledge": Yachay Tech University and Yachay EP (the state "City of Knowledge") own it in the Ecuadorian education space completely — this would be a fatal collision, not a risk.

---

## 2. The tension to solve: one brand, or two?

**The call: ONE master brand, with the therapy vertical as an *endorsed sub-brand* — not a separate company brand, and not an undifferentiated fourth menu item.**

The naive answers are both wrong. "One flat brand for everything" ignores that speech therapy is a regulated health service; "two independent brands" is unaffordable and throws away the actual business case.

**Why one brand wins:**

1. **Bootstrap arithmetic.** Two brands = 2× domains, 2× Instagram accounts to grow from zero, 2× SEO footprints, 2× Google Business Profiles, 2× trust-building in a market where (per the research digest) buyers distrust online sellers by default. Karel has one budget and one pair of hands.
2. **Household lifetime value is the whole model.** The mother who buys terapia de lenguaje for her 8-year-old is the same person who buys English for the 15-year-old and hears about the programming course from her nephew. One account, one WhatsApp thread, one payment relationship, one invoice. Splitting the brand splits the household and destroys the only durable margin advantage a three-teacher school has.
3. **The four verticals are not actually incoherent — they are all "someone learning something with a person who knows it."** The incoherence only appears if the *name* commits to a subject. It doesn't have to.

**Why the therapy vertical still needs separation — and where:**

Per the research digest, terapia de lenguaje in Ecuador is a regulated health activity: the professional needs SENESCYT title registration **and** ACESS health-authority registration, the practice needs an ACESS *permiso de funcionamiento*, and the Oct-2025 **Norma Técnica de Telesalud** (RO 2º Sup. 153, 28-oct-2025) extends the permit requirement to remote delivery and makes the platform co-responsible for data security. Selling therapy sessions through the same undifferentiated checkout as a music course is named in the digest as the single largest legal exposure in the project.

So the separation is **operational and legal, not brand-identity**:

| Layer | Courses (inglés / música / programación) | Terapia |
|---|---|---|
| Brand | Umbral | **Umbral Terapia** (endorsed lockup) |
| Route | `/cursos/...` | `/terapia` (own subtree) |
| Checkout | Standard cart | Separate intake → consent → booking flow |
| Consent | Terms + privacy | Two-step telesalud consent (authorisation for telematic means, *then* data consent) per Norma Técnica §7.2.2 |
| Account role | `alumno` | `representante` (guardian) is mandatory, always |
| Colour | Amber accent | Teal accent (same ink, same type) |
| Legal entity | Karel's RUC / SAS | May need to sit under the therapist's ACESS-permitted establishment |

This is the *endorsed sub-brand* pattern: it borrows the parent's trust and traffic, but it is visibly its own thing where the regulator, the consent flow and the parent's anxiety all look. If ACESS later forces a legally distinct establishment, `Umbral Terapia` survives that change; two unrelated brands would have to be rebuilt.

---

## 3. Candidate generation and shortlist

**Territories explored.** Spanish real-word (*aula, senda, cauce, umbral, rumbo, brújula, faro, norte, cantera, taller, hilo, clave, escala, compás, semillero, puente, raíz, trino*); invented/coined (*alumbra, aprendia, aulika, sendia*); Latin/Greek root (*lumen, lumina, ápice, nova*); Kichwa/Andean (*yachay, ñan, quinde, kuri, sisa, rimay, minga, kawsay*); metaphor (growth, path, bridge, light, voice, weaving); founder/place (*equinoccio, latitud cero, mitad del mundo, andes*).

**On the Kichwa territory and appropriation — handled explicitly.** There is a defensible line and a wrong side of it. Words that Ecuadorian *Spanish* has already fully absorbed as everyday vocabulary (*quinde*, *minga*, *guagua*, *ñaño*) are loanwords of the host language, and using one is a claim of Ecuadorian-ness, not extraction. Words that remain live carriers of Kichwa cosmovision or ceremony (*kawsay*, *pachamama*, *yachay* in its philosophical sense) are a different matter — a for-profit school run by a non-Kichwa founder taking one of those is appropriation, and it will be read that way. Note that even the "safe" side has a wrinkle: the quinde/colibrí is documented as *"ave sagrada para los pueblos kichwas, mensajero de unión y de amor."* That is a reason for care in the visual treatment (respectful, not cartoon-mascot), not a reason to reject the word — but Karel should know it before he chooses.

### Scoring (1–5 per criterion × weight; max 110)

| Name | C1 Spanish (×5) | C2 Not boxed (×5) | C3 Dual audience (×5) | C4 Ownable (×4) | C5 Short (×3) | **Total /110** |
|---|---|---|---|---|---|---|
| **Umbral** | 5 | 5 | 4 | **5** | 4 | **92** |
| **Quinde** | 4 | 5 | 5 | 2 | 5 | **93** → see note |
| Cauce | 3 | 4 | 4 | 5 | 5 | 85 |
| Cantera | 5 | 4 | 4 | 3 | 4 | 84 |
| Hilo | 5 | 4 | 3 | 4 | 5 | 87 |
| Alumbra | 4 | 4 | 4 | 4 | 3 | 82 |
| Ritmo | 5 | 3 | 4 | 3 | 5 | 84 |
| Compás | 5 | 4 | 4 | 1 | 4 | 76 |
| Minga | 5 | 5 | 2 | 2 | 5 | 79 |
| Trino | 4 | 2 | 3 | 5 | 5 | 80 |

> **Note on the arithmetic, stated honestly.** Quinde scores marginally higher on the raw weighted total than Umbral. I am still recommending Umbral, and the reason is that C4 (ownable) behaves as a **gate**, not a slider: a 2/5 on ownability means a live Corporación Favorita house brand and a taken `.com.ec`, and no amount of warmth compensates for a brand you may have to abandon. Read the table as diagnostic, not as the decision — the decision is in §4.

### Shortlist detail

| Name | Meaning / pronunciation | Why it works | Why it might not | Domain / handle reality (DNS-checked 2026-09-06) |
|---|---|---|---|---|
| **Umbral** | *Threshold, doorway.* um-BRAL | Crossing a threshold fits a child saying their first clear sentence AND a junior dev shipping their first commit. Bonus: *umbral* is live technical vocabulary in **all four** verticals — *umbral auditivo* (audiology/speech therapy), threshold value (programming), threshold of hearing (music), and the everyday *cruzar el umbral de la casa*, which is domestic and warm, not clinical | Abstract — less instantly memorable than a concrete image. Slightly literary; Francisco Umbral was a well-known Spanish writer (a surname collision, in Spain, not Ecuador). Common noun, so brand-name search results will be polluted | **`umbral.ec` NXDOMAIN — almost certainly free. `umbral.com.ec` NXDOMAIN — almost certainly free.** `umbral.com` parked on Afternic (aftermarket, do not buy at launch). `umbral.app` taken. IG `@umbral` almost certainly taken → `@umbral.ec` |
| **Quinde** | *Hummingbird* (Kichwa loanword, standard Ecuadorian Spanish). KIN-de | The most *Ecuadorian* option by a distance, which is exactly the trust differentiator against Platzi/Coursera/Open English. A hummingbird visits many flowers — literally the multi-subject metaphor. Gentle enough for a therapy parent, not childish. Superb visual system (Ecuador has 130+ species) | **Crowded.** "QUINDE" is a house brand at Supermaxi (Corporación Favorita — a large group that can afford to oppose); `elquinde.ec` is Quito's municipal artisan store; Comercial Quinde in Cuenca. Also a Sierra-weighted word — a Guayaquil parent may say *colibrí* or *picaflor* | `quinde.ec` appears free; **`quinde.com.ec` TAKEN**; `quinde.com` for sale on HugeDomains; `quinde.app` free |
| **Cauce** | *Riverbed, channel.* CAU-se | "Dar cauce a" = to channel, to give direction. Elegant, low brand usage → very ownable | **Spelling friction.** With Ecuadorian *seseo*, *cauce* and *cause* are homophones; dictated over WhatsApp it will be mistyped. No resonance with programming | `cauce.ec` and `cauce.com.ec` both appear free; `cauce.com` taken by a real owner |
| **Cantera** | *Quarry — and in LatAm, the youth talent academy.* can-TE-ra | Aspirational, warm, works for a child and a 24-year-old equally, zero subject-boxing | **Live Class 41 collision risk:** "La Cantera del 10" is a football school in Quito, and the football association is strong enough to mislead search intent | `cantera.ec` and `cantera.com.ec` both appear free; `cantera.com`, `.app`, `.online` all taken |
| **Hilo** | *Thread.* EE-lo | Short, humble, warm. *Hilo conductor* = the thread running through. Nice insider wink for programmers | Very common noun → low distinctiveness; reads incomplete as a school name on its own | `hilo.ec` and `hilo.com.ec` appear free; `hilo.com` taken |
| **Alumbra** | *It lights up* (verb). a-LUM-bra | Contains "alum(no)". Warm, active | It's a verb — reads as a slogan, not an institution. *Alumbramiento* also means childbirth, an odd adjacency for a school | `alumbra.ec` appears free; **`alumbra.com.ec` TAKEN** |
| **Ritmo** | *Rhythm.* RIT-mo | "A tu ritmo" is the single best product promise for all four verticals | Extremely generic; nearly impossible to own or defend as a mark | `ritmo.ec` and `ritmo.com.ec` appear free |
| **Compás** | *Compass + musical bar.* com-PÁS | Beautiful double meaning: direction **and** rhythm. "A tu compás" | **COLLISION — FLAGGED.** *Grupo Compás* (Guayaquil, founded Oct 2016) is an established Ecuadorian academic publisher and teacher-training group, with agreements across Universidad de Guayaquil, UCSG, UEES and others. Same country, same sector | `compas.ec` appears free, but `grupocompas.com` / `grupocompas.ec` are live |
| **Minga** | *Andean communal work day.* MIN-ga | Deeply Ecuadorian, warm, zero subject-boxing, superb story ("Aprender es una minga") | **A minga is unpaid, voluntary and communal — you are charging $150/month.** That mismatch is real and a customer will feel it. Also heavily used by government campaigns (reads NGO/state), and in Argentina *"minga"* colloquially means "nothing / no way" | **`minga.ec` TAKEN** (Telconet); `minga.com.ec` appears free |
| **Trino** | *Birdsong, musical trill.* TREE-no | Perfect for voice and music | Weak-to-absent for programming, and *trino* is the established Spanish word for a tweet (Twitter/X) — a live collision in exactly the tech register | `trino.ec` and `trino.com.ec` both appear free |

> **Verification note.** Domain status above is inferred from DNS (`NS`/`SOA` lookups, NXDOMAIN results) on 2026-09-06. A domain can be registered without DNS delegation, so **every "free" result must be confirmed at nic.ec or an authorised registrar before you count on it.** No trademark register was queried directly — SENADI's *búsqueda fonética* must be run before filing (see §7).

---

## 4. THE RECOMMENDATION

# **Umbral**

**Reasoning, in order of weight:**

1. **It is the only shortlisted name that carries genuine technical meaning in all four verticals at once.** *Umbral auditivo* is real speech-and-hearing vocabulary a therapist uses with parents. Threshold values are real programming vocabulary. Threshold of hearing is real music vocabulary. And *cruzar el umbral* is warm household Spanish everybody knows. Most brands have to *assert* that they span their categories; this one is already spoken inside each of them.
2. **It solves the dual-audience problem by being serious without being institutional.** "Umbral — Terapia de Lenguaje y Aprendizaje" reads clinically credible. "Estudio en Umbral" reads fine from a 24-year-old. A cute animal mascot would have failed the first test; an academic Latinate name would have failed the second.
3. **It is genuinely ownable, which nothing else on the shortlist is.** `umbral.ec` and `umbral.com.ec` both return NXDOMAIN, and there is no Ecuadorian or LatAm education business named Umbral in search results. Compás is blocked by a real Ecuadorian competitor, Quinde by a Favorita house brand, Cantera by a Quito football school. Ownability at bootstrap scale is not a luxury — you cannot afford a rebrand or an opposition proceeding.
4. **It is subject-agnostic by construction.** A threshold has no subject. You can add photography, chess or accounting in 2028 without touching the name.
5. **It passes the WhatsApp test.** Six letters, no accent, no `ñ`, standard spelling, everyone knows the word.

**Primary domain: `umbral.ec`, not `.com`.** For an Ecuador-only business this is a trust asset, not a downgrade. `.ec` has no residency requirement, it is shorter, and it signals "we are here" against foreign competitors — which the research digest identifies as decisive. Do not spend aftermarket money on `umbral.com` at launch.

### Runner-up: **Quinde**

**Switch to Quinde if — and only if — the founder decides that maximum Ecuadorian warmth beats ownability.** The concrete trigger: if the therapy vertical turns out to be the primary revenue driver rather than a fourth vertical, the brand needs more emotional warmth than "Umbral" carries, and a hummingbird delivers it. The price of switching must be accepted going in: `quinde.com.ec` is gone, `elquinde.ec` is live, Corporación Favorita has a "QUINDE" product brand, and the Class 41 filing carries a higher chance of a citation or opposition. If Karel switches, file Class 41 **first**, before spending a dollar on design.

---

## 5. Verbal identity (es-EC)

**Tagline options** — recommend #1 as the brand line and #2 as the commercial/ad line:

1. **"Cruza el umbral."** — Three words, imperative, owns the name, works on a t-shirt and in a lockup.
2. **"Profes de aquí. Clases en vivo. A tu ritmo."** — The selling line. Answers the three things an Ecuadorian buyer actually checks: is this local, is a real person teaching me, can I go at my pace.
3. **"Aquí empieza lo que sigue."**
4. **"Todo lo que aprendes empieza con un paso."** — softer; use in the therapy subtree.
5. **"Aprender en línea, con gente de verdad."**

**Positioning statement (one sentence):**
> Umbral es la escuela en línea ecuatoriana donde profesores de aquí enseñan inglés, música y programación en clases en vivo, y donde las familias encuentran terapia de lenguaje y aprendizaje para sus hijos — todo en un solo lugar y pagando como se paga en Ecuador.

**Elevator description (2 sentences, for `<meta name="description">` and the WhatsApp Business profile):**
> Umbral es una escuela en línea ecuatoriana. Inglés, música, programación y terapia de lenguaje y aprendizaje para niños, con profesores ecuatorianos, clases en vivo y pagos en dólares con diferido.

**Usage rules (hand these to the design and content agents verbatim):**

- **No article.** "Estudia en Umbral", never "en el Umbral".
- **Never translated, never suffixed in English.** No "Umbral Academy", no "Umbral School", no "Umbral LMS".
- **Capitalisation:** `Umbral`. Never `UMBRAL` in body copy (all-caps permitted only inside the logo lockup). Never lowercase `umbral` except in URLs, handles and code identifiers.
- **Never pluralised, never conjugated.** It is a proper noun, not the common noun, in all product copy.
- **Formal/legal long form** — invoices, terms, SRI documents, footer only: `Umbral · Escuela en Línea`.
- **Sub-brand lockups:** `Umbral Inglés`, `Umbral Música`, `Umbral Código`, `Umbral Terapia`. Always parent-first, never `Terapia Umbral`.

---

## 6. Visual direction brief (for the designer — this is a brief, not a design)

**Logo concept directions:**

1. **The threshold rule (RECOMMENDED as primary).** A wordmark — `Umbral` — with a single horizontal rule beneath it, **broken at one point**: the step you cross. Cheapest to execute, reproduces at any size in one colour, and the broken rule becomes a reusable system device: section dividers, progress bars, the lesson-completion indicator in `/aula`. One graphic idea doing five jobs is what a bootstrap identity needs.
2. **The aperture mark (RECOMMENDED as favicon / app icon / WhatsApp avatar).** A doorway reduced to two verticals and a lintel, with the right vertical open — readable as a `U` and as a door frame simultaneously. Must be legible at **32 px** and inside a **circular crop** (WhatsApp and Instagram both crop to a circle; test this before approving anything).
3. **Light under the door.** A warm wedge escaping from beneath a dark bar. The most distinctive idea, but it needs gradient and depth, so it will not survive a 32 px favicon or a one-colour print. Secondary illustrative asset only.

**Colour feeling — proposal; final palette owned by the design agent:**

| Role | Proposed hex | Rationale |
|---|---|---|
| Ink (primary, text) | `#12212E` | Deep blue-black. Trustworthy, prints, ~15:1 on the ground colour |
| Accent — "the light" | `#E8A33D` | Warm amber/ochre. Andean warmth, non-clinical, and not a colour any competitor owns |
| Therapy sub-brand accent | `#3E8E7E` | Calm teal-green. Reads clinical-competent without reading cold or corporate-blue |
| Ground | `#FAF7F2` | Warm off-white, not `#FFFFFF`. Less "SaaS", easier on cheap Android screens in daylight |

Hard constraints for the design agent: **do not use green as the primary** — Platzi owns green in this market at `#98CA3F`. **Do not use the blue-purple SaaS gradient.** All text must clear **4.5:1** and all UI affordances **3:1**, verified at **360 px** width, which the research digest establishes as the primary viewport.

**Imagery / photography rules:**

- **Real photographs of the three actual teachers**, faces visible, shot on a phone in their real teaching space. Not stock. The digest is explicit that Ecuadorian buyers check for named teachers with real photos and stated credentials — this is the highest-value image on the site.
- Every teacher portrait ships with **name + credential + city**. That triple is the trust unit; a photo without it is decoration.
- **No Northern-European stock students in a library.** Ecuadorian faces, Ecuadorian rooms.
- **HARD RULE: no identifiable children's faces anywhere, ever, in the therapy vertical.** Given LOPDP Art. 25 (minors' data and health data are both special categories), the mandatory DPIA, and the SPDP's first fines in Dec 2025 (USD 259,644.01 and USD 194,856.16, both for invalid consent), the cheapest compliance posture is to never create the artefact. Use hands, materials, the therapist, or illustration.
- **Weight budget: ≤ 80 KB per hero image at 360 px.** See §9 for why this is a money constraint, not an aesthetic one.

---

## 7. Practical checklist

**Domains — buy in week 0, before any code:**

| Domain | Priority | Note |
|---|---|---|
| `umbral.ec` | **PRIMARY — buy first** | NXDOMAIN as of 2026-09-06. `.ec` has **no residency requirement** and can be registered by foreigners without being physically present |
| `umbral.com.ec` | Defensive — buy | NXDOMAIN. 301 → `umbral.ec` |
| `umbralec.com` | Cheap defensive `.com` | NXDOMAIN. ~$12/yr. Redirect |
| `umbral.com` | **Do not buy** | Parked on Afternic (aftermarket). Revisit at profitability |

Cost: reported range for `.ec` registration is **USD 60–320 depending on term (1–5 years) and operation** *(secondary source — confirm the current single-year price directly at nic.ec)*. Registry is NIC.EC (ECUADORDOMAIN S.A.) by ICANN delegation; buy direct at nic.ec or via an authorised registrar.

**Social handles — claim same day (`@umbral` will be taken everywhere; use the `.ec` form consistently):**
`@umbral.ec` (Instagram) · `@umbralec` (TikTok) · `Umbral` page + `umbral.ec` vanity URL (Facebook) · `@umbralec` (YouTube) · **WhatsApp Business on a `+593` number** — per the digest this is the first contact method Ecuadorian buyers look for, so it is not optional.

**Trademark — SENADI (Servicio Nacional de Derechos Intelectuales; this replaced IEPI in 2018 — the name "IEPI" in the brief is outdated):**

| Item | Detail |
|---|---|
| Where | Online at `derechosintelectuales.gob.ec` (trámite also listed on gob.ec) |
| Cost | **USD 208 per class**; **USD 104 per class** with the 50% discount for **MIPYMES, RIMPE and artesanos calificados** — Karel almost certainly qualifies |
| Timeline | **4–6 months** typical; **8–12 months** if opposed |
| **Class 41** | *Education and training services.* **File this first.** Covers the courses AND the platform |
| **Class 44** | *Medical/health services* — where terapia de lenguaje sits. **File only once the ACESS permit exists**; filing for health services you are not yet permitted to provide is the wrong order *(class assignment for speech therapy to be confirmed with the IP agent)* |
| Class 9 | Downloadable software / e-learning content. Defer |
| **Before paying** | Run SENADI's free **búsqueda de antecedentes / búsqueda fonética** on "UMBRAL" in Class 41. A phonetic hit is what would kill this name, and it costs $0 to check |

**Google Business Profile:** one profile at launch — name `Umbral`, category *Escuela* / *Centro de formación*, service-area business (address hidden if Karel works from home, but a real address is required to verify). **Do not create a second GBP for the therapy practice until the ACESS *permiso de funcionamiento* exists**; then create it at the permitted address with category *Logopeda / Terapeuta del habla*.

---

## 8. Naming the sub-parts (product UI, es-EC)

These are URL slugs as well as labels, so they must be locked before the architecture agent writes routes — changing them later costs redirects.

| Thing | Recommended Spanish name | Route | Why this word |
|---|---|---|---|
| Student dashboard | **Mi aula** | `/aula` | Every Ecuadorian, student or parent, knows *aula virtual*. Zero explanation needed. Beats "panel" or "dashboard" (English) |
| Teacher authoring area | **Estudio** | `/estudio` | Creative, not administrative. Works for the music teacher literally. Beats "escritorio" (clerical) and "panel del profesor" (reads like software) |
| Owner/admin area | **Administración** | `/admin` | Boring on purpose. Never customer-visible |
| Guardian area | **Representante** | `/representante` | **The exact word Ecuadorian schools use** — *el representante legal del estudiante*. Every parent in the country has filled a form with this label. Do not use "padre/madre" (excludes guardians) or "tutor" (means academic tutor here) |
| Enrolment | **Matrícula** | `/matricula` | Matches the national school calendar vocabulary and the Sierra/Costa *matrículas* windows |
| A course | **Curso**; a live session: **clase**; a recorded unit: **clase** too | `/cursos/[slug]` | Ecuadorians say *clase* for both. Do not introduce *lección* — textbook Spanish, not spoken Spanish |
| Progress | **Mi avance** | — | Warmer than *progreso* |
| **The certificate** | **Certificado de aprovechamiento** | `/certificado/[id]` | See warning below |

> **Certificate warning — this is a legal wording decision, not a copy decision.** Per RALRTI Art. 187 (quoted in the research digest), education services are only 0%-IVA when delivered by an establishment **legally authorised by the State**, and courses from non-recognised institutions are taxed at the general rate. Until Umbral registers as an **Operador de Capacitación Calificado** with the Ministerio del Trabajo, the product must **never** say *certificado avalado*, *certificado oficial*, *título* or *acreditado*. Use **"Certificado de aprovechamiento"** with a permanent, visible line on the certificate and the sales page: *"Umbral no es una institución de educación regulada por el Ministerio de Educación ni por la SENESCYT. Este certificado acredita la participación y el aprovechamiento del curso."* If Karel completes the Operador de Capacitación registration, this wording upgrades **and** IVA drops to 0% — the same decision buys both.

---

## 9. Where the Astro + Cloudflare constraint actually bites the brand

Brand work is only lightly constrained by the stack, but there are three real, quantified compromises:

1. **The brand must be type-and-colour-led, not photography-led — and the reason is the student's phone bill, not your hosting bill.** Ecuadorian prepaid data runs roughly $10 for 8 GB, with **~$0.10/MB (≈$100/GB) out of bundle**. A photography-heavy identity at ~300 KB/page over 20 page views is ~6 MB of a student's bundle before they watch a single lesson. **Budget: ≤ 80 KB per hero, one display webfont subset to Latin + Spanish accents at ≤ 30 KB woff2** (two unsubsetted weights would be ~180 KB — a ~150 KB/visit saving), and the rest of the type from the system stack.
2. **Cloudflare Images free tier is 5,000 unique transformations/month**, then $0.50/1,000. Three teacher portraits × 4 sizes × 2 formats is trivial; a photo-led brand with per-course art is not. A soft ceiling a type-led identity never touches.
3. **Logo must ship as inline SVG**, not a PNG set — a few hundred bytes versus tens of KB, and it renders correctly at 360 px on a cheap Android. This is the argument for logo direction #1 over #3.

No part of the brand recommendation requires anything Cloudflare Workers cannot serve.

---

## 10. Open questions for the founder

1. **Do you accept one brand with an endorsed therapy sub-brand, or do you want the therapy practice fully separate?** If ACESS requires a distinct permitted establishment you may be forced part-way regardless — but the *brand* answer should be yours, not the regulator's.
2. **Who is the speech therapist, and does she already have a practice name and existing patients?** If she has SENESCYT + ACESS registration under an existing brand with a patient list, `Umbral Terapia` may be wrong and a co-brand may be right. This single fact could change the recommendation.
3. **Ecuador-only, or LatAm-later?** Locked Decision D1 says Ecuador-only with no i18n. If you might sell into Colombia or Peru in 2028, `.ec` as the primary domain becomes a liability and the ranking shifts. Confirm you are genuinely Ecuador-only.
4. **Approve ~USD 104–208 (SENADI Class 41, MIPYME rate) + ~USD 60–100 (domains) in week 0?** That is the whole brand cash cost at launch.
5. **Will you pursue Operador de Capacitación Calificado registration with the Ministerio del Trabajo?** It decides your certificate wording *and* whether you charge 0% or 15% IVA. The highest-leverage administrative decision in this project.
6. **Which of the three teachers will agree to be photographed and named publicly, with credentials?** If none will, the trust strategy has to be rebuilt and I need to know now.
7. **Should "Motion Colors" appear anywhere** — e.g. "un proyecto de Motion Colors" in the footer — or is Umbral entirely standalone?
8. **Do you already own any domain or social handle under a working name** that I should account for?

---

## 11. Risks

- **"Umbral" is a common Spanish noun**, so it is weak on inherent distinctiveness in the abstract. It is, however, *arbitrary/suggestive* rather than descriptive for education services, which is the registrability test — but an examiner citation or third-party opposition is a non-zero risk, and a phonetic hit in Class 41 would kill the name. **Run the free SENADI search before spending anything.**
- **Brand-name SEO pollution.** "Umbral" as a search term returns dictionary results, Francisco Umbral (the Spanish writer), and technical threshold content. Branded search will never be a cheap acquisition channel — which is *fine*, because the digest already establishes that problem-query SEO is the real channel here.
- **`umbral.com` sits on the aftermarket**, so a competitor could buy it. Low probability, real consequence. Accept it; do not pay a squatter at launch.
- **Two-brand pressure.** If ACESS forces a legally separate therapy establishment with its own permit and RUC, the endorsed sub-brand may need to become a co-brand. `Umbral Terapia` survives that transition; a fully merged identity would not.
- **Domain availability is DNS-inferred, not registry-confirmed.** Everything in §7 is contingent on confirming at nic.ec.
- **Handle scarcity.** `@umbral` is almost certainly taken on every platform. Committing to the `@umbral.ec` / `@umbralec` pattern is fine but must be applied consistently everywhere on day one, or the brand fragments.

---

## 12. Phasing

| Phase | Scope |
|---|---|
| **Week 0 (before any code)** | Founder picks the name. Run SENADI *búsqueda fonética* on "UMBRAL" Class 41. Confirm + buy `umbral.ec`, `umbral.com.ec`, `umbralec.com`. Claim `@umbral.ec` / `@umbralec` on IG, TikTok, YouTube, Facebook. Register WhatsApp Business on a `+593` number. **Lock the §8 route slugs** and hand them to the architecture and database agents |
| **MVP (weeks 1–8)** | Wordmark + broken-threshold rule + SVG aperture favicon. Ink/amber/ground palette only (defer the teal until the therapy vertical ships). Three teacher portraits with name + credential + city. `/aula`, `/estudio`, `/representante` labelled per §8. Certificate wording per §8 including the non-accreditation disclaimer. File SENADI Class 41 |
| **v2** | `Umbral Terapia` lockup + teal variant + separate `/terapia` intake and consent flow. `Umbral Inglés / Música / Código` sub-brand lockups. Second GBP for the therapy consultorio once ACESS permits it. SENADI Class 44 |
| **Deliberately deferred** | `umbral.com` acquisition. Full brand book. Logo animation. Custom illustration system. Any brand asset that costs student bandwidth before it earns a sale |

---

## 13. Where this collides with other domains

| Specialist | Collision | Resolution needed |
|---|---|---|
| **Architecture** | §8 route slugs (`/aula`, `/estudio`, `/representante`, `/matricula`, `/terapia`, `/cursos/[slug]`) are brand decisions with permanent URL consequences. Changing them later costs 301s and SEO equity | **Adopt §8 verbatim, or tell me now.** Must be frozen before the first route file is written |
| **Database** | The role vocabulary must match the UI vocabulary exactly: `users.role ∈ {alumno, profesor, representante, admin}`. `representante` (not `parent`/`guardian`/`tutor`) must be a first-class role from day one, per Locked Decision D3 and the guardian-consent requirement | Confirm the enum. Confirm the certificate entity carries a `tipo` field so `aprovechamiento` vs a future `avalado` can be distinguished without a migration |
| **Design** | I have proposed `#12212E` / `#E8A33D` / `#3E8E7E` / `#FAF7F2`. The design agent owns the final palette | Reconcile. Two constraints I consider non-negotiable: **no green as primary** (Platzi owns it here) and **4.5:1 / 3:1 contrast verified at 360 px**. Also: circular-crop legibility of the favicon mark |
| **SEO** | The brand name is a common noun and will not be a cheap acquisition channel. SEO must be built on problem queries, not brand queries. Also: `umbral.ec` vs a `.com` changes the SEO agent's domain assumptions | Confirm the SEO plan does not assume branded search volume. Confirm `.ec` as the canonical host before any sitemap or canonical-tag work |
| **Tech stack / infra** | The 80 KB hero / 30 KB webfont / inline-SVG-logo budget in §9 constrains asset pipeline choices, and Cloudflare Images' 5,000 free transformations/month is a real ceiling for a photo-led brand | Confirm the image pipeline honours the budget, and that the logo ships as inline SVG rather than a PNG favicon set |
| **Payments / legal / tax** | The certificate wording in §8 is bound to RALRTI Art. 187 and the Operador de Capacitación Calificado decision. The `Umbral Terapia` separation is bound to ACESS permits and the Norma Técnica de Telesalud | The tax/legal agent must confirm the disclaimer language, and whether the therapy vertical can legally share a checkout and a RUC with the courses. **This is a permit-or-don't-launch question, not a fix-it-later one** |
| **Content / copy** | The §5 usage rules (no article, never translated, never all-caps in body) and the *clase* / *matrícula* / *representante* vocabulary apply to every string in the product | Adopt as the copy style guide |

---

## Sources

- [SENADI — ¿Cómo registro una marca?](https://www.derechosintelectuales.gob.ec/como-registro-una-marca/)
- [gob.ec — Registro de Marcas de Productos y Servicios (SENADI)](https://www.gob.ec/senadi/tramites/registro-marcas-productos-servicios-unico-personas-naturales-juridicas-sean-nacionales-extranjeras)
- [Clases de Niza en Ecuador: las 45 clases (2026)](https://easysasec.com/blog/clases-de-niza-en-ecuador/)
- [WIPO — Clasificación de Niza, Clase 41](https://nclpub.wipo.int/esen/?basic_numbers=show&class_number=41&explanator=)
- [NIC.EC — Registrar dominio .EC en Ecuador](https://nic.ec/)
- [NIC.EC — Registra tu Dominio](https://www.nic.ec/registra-tu-dominio.php)
- [Precios y registro de dominios .EC](https://www.seomaresme.com/precios-y-registro-de-dominios-ec/)
- [Grupo Compás (Guayaquil) — perfil editorial](https://www.redib.org/Record/oai_editorial_libro54-grupo-comp%C3%A1s)
- [Tienda El Quinde — elquinde.ec](https://elquinde.ec/nosotros/)
- [Supermaxi — marca QUINDE](https://www.supermaxi.com/marca/quinde/)
- [Aves y Conservación — Proyecto Quinde (significado kichwa)](https://avesconservacion.org/proyecto-quinde/)
- [Universidad Yachay Tech](https://yachaytech.edu.ec/en/)
