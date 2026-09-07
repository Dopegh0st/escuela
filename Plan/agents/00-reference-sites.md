# Reference Sites — Models to Follow
Verified by six research agents on 2026-09-06. 6/6 agents returned, 0 errors, 511 tool calls.
Status is the agent's own verification: `live-verified` means the page was actually fetched.

---

## Spanish-language online education platforms (LatAm / Andean focus) — competitive UX models for a bootstrap Ecuadorian online school

The single most important finding is that the famous names have mostly left the building for the market Karel is entering: Crehana, Ubits and Talently have all pivoted to B2B HR/staffing software with "Solicita una demo" homepages, and Acamica is dead (acamica.com 301-redirects to digitalhouse.com). tripleten.lat does not resolve at all — TripleTen LatAm lives at country paths like tripleten.com/es-mex. What remains genuinely copyable splits into two tiers: VC-funded conversion machines (Platzi, Coderhouse, Henry, TripleTen) whose *mechanics* are stealable even though their *economics* are not, and a large, almost invisible layer of Ecuadorian and Andean operators (Aprender21.ec, CENFORPRO, Acavir, UIDE, Universidad Hemisferios, FUNCADE, AMW Academy) that are already winning es-EC buyers with WordPress-grade sites. That second tier is the real competitive set, and its playbook is remarkably consistent: WhatsApp is the primary CTA rather than a support afterthought, a named certifying authority (SETEC / Ministerio del Trabajo / a university) is the dominant trust signal instead of star ratings, and prices are very often hidden entirely behind "Solicita información" — meaning simply *publishing an honest USD price* is an available differentiator, not a table-stakes requirement. Tone across every consumer site is uniformly tú, never usted; usted appears only on the B2B pages (Talently: "su equipo"), which tells you exactly which register to use for parents versus for schools. For the therapy vertical specifically, the Ecuadorian incumbents (Hemisferios, FUNCADE) run pure lead-gen with no price, no cart, and a WhatsApp number as the conversion event — a one-person team can beat them on transparency and speed rather than on production value. On payments, card penetration reality means the winning pattern is a payment button (Payphone/Kushki) plus a manual "Registro de Pago" bank-transfer flow, which CENFORPRO already runs and which requires zero gateway integration to launch.

> **Top pick.** Aprender21.ec — it is the best-executed site in this research that a single founder with Astro and Claude Code could rebuild in a weekend, and it is already tuned for the exact buyer (es-EC, USD, cuotas, WhatsApp). Its course detail page is a complete, coherent conversion template: rating + enrolled-student count, named co-certification ("Certificado por UTN FRVM + ITSS"), scarcity-free urgency via "6 meses — Inicio en 48hs", an explicit "Sin costos ocultos" promise, "Tutor Personal 48 hs" as the service guarantee, a low-friction "Solo toma 2 minutos" form, and a WhatsApp opt-in checkbox ("Acepto recibir notificaciones por WhatsApp sobre mi inscripción") that turns a legal consent into a channel-acquisition mechanic. Pair its *page architecture* with AMW Academy's *pricing model* ($120/mes renewable mensualidad for live classes) and you have the whole product. Critical caveat that makes it a model to improve on rather than clone: it is an Argentine operation wearing an .ec skin, and the localization leaks badly — its price block renders as "$1 en cuotas sin interés ó $ 8.250 en un pago" (peso figures in a dollar market) and it offers "Pago Fácil / Rapipago", which do not exist in Ecuador. Being actually, natively Ecuadorian on price and payment method is the gap Karel can walk straight through.

### Sites (20)

#### Aprender21 (Ecuador)  <sub>[OK]</sub>

https://www.aprender21.ec/

*Distance-learning course seller targeting Ecuador with USD pricing, interest-free cuotas and university-backed certificates, built on plain PHP pages.*

**Why it matters here:** This is the closest thing to a direct template for Karel's site: same country, same currency, same buyer, same WhatsApp-first behaviour — and clearly run by a very small team on a static-ish stack, which means every mechanic on it is within reach of one person on Astro.

**Steal this:**
- The course card contract, which is only five fields and needs no database: thumbnail, title, 1–2 line description, 'Duración estimada: 3 a 9 meses', 'Certificación: UTN' / 'Certificación: ITSS', 'Desde:' price label, and a 'Ver Detalles y Precios' button. Copy this literally for English/Music/Programming cards.
- The detail-page trust stack in its exact order: '★★★★☆ 4.9 de 5' + '1,217 estudiantes' → 'Certificado por UTN FRVM + ITSS' → '6 meses — Inicio en 48hs' → 'Inscribirme ahora →'. The 'Inicio en 48hs' line manufactures urgency without a fake countdown, which is the honest version of Coderhouse's timer.
- The WhatsApp consent checkbox inside the enrolment form — 'Acepto recibir notificaciones por WhatsApp sobre mi inscripción'. It converts a compliance checkbox into permission to run the entire post-sale relationship on WhatsApp, which is the dominant Ecuadorian channel.
- Friction-reducing microcopy around the form: 'Solo toma 2 minutos', plus secondary CTAs 'Quiero más información' and 'Consultá gratis' so undecided visitors have a non-buying exit that still captures a lead.
- The 'Sin costos ocultos' FAQ promise, and the unusual honesty of disclosing that the optional physical university certificate costs 'aproximadamente 60 dólares' and 'puede tardar de 6 a 12 meses'. Pre-empting the hidden-fee objection is cheap and disproportionately effective with LatAm buyers.

**Avoid:** Its localization is broken and must not be copied: the price block shows '$1 en cuotas sin interés ó $ 8.250 en un pago' — Argentine peso amounts bleeding into a USD market — and it lists 'Pago Fácil / Rapipago', which are Argentine cash networks with no Ecuadorian presence. It also buries the actual price behind 'Ver Precios y Certificaciones' so you cannot compare offers; publishing a real, single USD number is a genuine competitive advantage against it. Its claimed enrolment counts and 4.9 rating are unverifiable — Karel should not invent equivalents, and with three teachers should instead show real named instructors.

**Open first:** https://www.aprender21.ec/programacion-1/cursos-python/experto-python-inteligencia-artificial.php

#### AMW Academy  <sub>[OK]</sub>

https://amwacademy.com/

*Small virtual-only language academy selling live 1-on-1 English classes as a renewable monthly USD subscription.*

**Why it matters here:** This is the single closest business-model match to Karel's English and Music verticals — live human teaching sold as a mensualidad in USD, not a video catalogue — and it is unmistakably a small operation, proving the model works without a platform build.

**Steal this:**
- The pricing unit itself: 'INGLÉS GOLD' at $120/mes for 1 student + 1 teacher, 3–4 classes per week of 60 minutes, with a level taking 'aproximadamente de 4 a 5 meses'. This is the number to benchmark Karel's English and Music pricing against.
- Framing subscriptions as 'mensualidades renovables' with no contract and cancellation by notice before month-end. In a low-card-penetration market this reads as safety, not as a lock-in, and it sidesteps needing recurring-billing infrastructure on day one.
- Deliberately deferring payment methods: 'Dependiendo de tu país de residencia, te ofreceremos los métodos de pago más comunes.' A one-person team can promise this honestly and settle the actual method in WhatsApp, avoiding a gateway integration before there is revenue.
- The headline structure 'Aprende inglés con clases individuales en vivo y certificación por nivel' — it names the format (live, individual) and the outcome (per-level certificate) in one line, which is exactly the promise a parent scans for.
- The advisor CTA pattern: '¿Tienes dudas? Habla con un asesor' on WhatsApp sitting directly beside the 'Ver planes y Precios' button, so the hesitant and the ready get separate paths.

**Avoid:** The site itself is weak craft — thin design, prices buried on a secondary page that returns 404s on guessable URLs, and no visible social proof, teacher bios or outcome evidence. Do not copy its information architecture, only its commercial model. Its rigid 'fixed schedule for the whole level, hard to change' policy is also a conversion killer for working parents; Karel should offer reschedule flexibility as an explicit differentiator.

**Open first:** https://amwacademy.com/ then the 'Ver planes y Precios' link (the $120/mes INGLÉS GOLD plan)

#### Coderhouse  <sub>[OK]</sub>

https://www.coderhouse.com/

*Pan-LatAm live-cohort tech school with the most aggressive and best-built conversion machinery in the region.*

**Why it matters here:** Its course detail page is the best-engineered sales page in Spanish for live, scheduled classes — which is precisely Karel's format — and the page skeleton is copyable even though the ad budget behind it is not.

**Steal this:**
- The sticky pricing card built from an anchor plus a discount: original $385 USD struck through against a promo $193 USD at '50% OFF', framed as 'CODER SALE 💸' with a countdown. Steal the *card layout*; use a real, defensible discount such as launch or first-cohort pricing.
- '¡Prueba 2 clases gratis!' as a secondary CTA sitting next to 'Ver fechas'. A free trial class is the single highest-leverage mechanic here for Karel — it costs one teacher-hour, suits English, Music and therapy alike, and gives a parent a reason to say yes now.
- The at-a-glance detail header: Nivel (Inicial) · Duración (4 semanas) · Módulos (5) · Formato ('EN VIVO, 1 clase semanal de 2 hs'). Four facts, scannable on mobile in one second, and trivial to render from Astro frontmatter.
- Explicit upcoming cohort dates with individual purchase links, so 'when does it start' is answered on the page instead of in a WhatsApp thread.
- '3 cuotas sin interés' installment framing plus enrolment via a WhatsApp advisor with a partial advance payment accepted — the hybrid of self-serve checkout and human closing that actually converts in LatAm.
- Outcome-framed headline pattern: 'Transforma tu carrera y conviértete en Negociador', followed by an explicit 'who this is for' list of three buyer types.

**Avoid:** The permanent 50%-off countdown only works because they spend heavily on paid acquisition and can anchor against an inflated list price; a small local school that runs a perpetual fake sale destroys its own credibility with word-of-mouth buyers. 'Ticher AI, tu tutor con inteligencia artificial 24/7', the points-and-weekly-rankings gamification layer, and the staffed WhatsApp sales team are all funded-company infrastructure. Their '+500.000 graduados' proof is unmatchable — Karel must compete on named teachers and real local testimonials instead.

**Open first:** https://www.coderhouse.com/us/cursos/tecnicas-de-negociacion

#### Universidad de Los Hemisferios — Educación Continua  <sub>[OK]</sub>

https://educacioncontinua.uhemisferios.edu.ec/

*Quito university's continuing-education arm, running a certified speech-therapy programme as pure WhatsApp lead-gen with no published price.*

**Why it matters here:** This is a direct, named competitor in Karel's hardest vertical — 'terapia de lenguaje' for children — in his own city, and its page shows exactly what the Ecuadorian buyer currently sees and what it fails to give them.

**Steal this:**
- The full course-detail section order, which is a proven local template: hero image → title → tabbed key details (Fecha de inicio / Horario / Modalidad) → objetivos → pensum académico → detalles (400 horas, 4 módulos, cupo) → formulario → cursos relacionados → footer.
- Surfacing the three decision facts (start date, schedule, modality) as tabs immediately under the title, before any prose. Parents and working professionals filter on these before they read anything else.
- The persistent WhatsApp widget with the imperative invitation '¡Escríbenos por whatsapp!' rather than a passive chat bubble.
- Concrete programme sizing as a credibility signal — '400 horas', '4 módulos', rolling starts in 'la primera semana de cada mes' — which makes an intangible therapy course feel like a real qualification.
- The 'cursos relacionados' block at the bottom, an easy Astro component that keeps a bouncing visitor inside the four verticals.

**Avoid:** It publishes no price at all, no certificate wording, and no financing information, and its only CTA is 'MÁS INFORMACIÓN' — a dead end that forces every buyer into a sales conversation. That is the incumbent weakness to attack: publish the USD price, state the certificate wording plainly, and let people enrol without asking permission. Its university brand also carries authority Karel cannot borrow, so he must substitute verifiable teacher credentials.

**Open first:** https://educacioncontinua.uhemisferios.edu.ec/programa/certificacion-de-terapia-de-lenguaje/

#### CENFORPRO (Capacitadora del Pacífico)  <sub>[OK]</sub>

https://www.cenforpro.com/

*Ecuadorian SETEC/Ministerio-del-Trabajo-accredited training provider selling self-paced courses across 16 categories with a manual bank-transfer payment flow.*

**Why it matters here:** It answers the two hardest bootstrap questions at once — what trust signal actually persuades Ecuadorian buyers, and how to take money before you have a payment gateway.

**Steal this:**
- The 'Registro de Pago' flow: a dedicated page where a buyer who paid by bank deposit or transfer registers the payment for manual reconciliation. This is a static form plus a spreadsheet, needs no gateway, no PCI scope and no monthly fee, and it works on Cloudflare's free tier from day one.
- SETEC-MDT accreditation as the headline value proposition rather than a footer badge — 'Cursos de Capacitación Con Certificado SETEC' — including a link to the government portal where an employer can verify a certificate by cédula number. Verifiability beats testimonials in this market.
- Category-count navigation (Administración 38, Gestión 35, Educación 21, Finanzas 9) which signals catalogue depth cheaply; with four verticals Karel can use the same pattern honestly at smaller numbers.
- 'Acceso 24/7 desde cualquier lugar' plus 'Docente de apoyo para resolver dudas' — the two reassurances that separate a real course from a PDF, stated in seven words each.
- A bare mobile phone number (0984448793) presented as the contact channel, which every Ecuadorian reads as WhatsApp without needing to say so.

**Avoid:** Prices are absent at the category level, so buyers cannot compare without contacting someone — the same incumbent flaw as Hemisferios. The site is generic WordPress with weak visual hierarchy and no teacher identity; do not copy its look. Also note SETEC accreditation is a real bureaucratic process with cost and lead time — Karel should verify whether his courses qualify before implying any government endorsement, and must never fake it.

**Open first:** https://www.cenforpro.com/ then the 'Registro de Pago' page in the main navigation

#### Platzi  <sub>[OK]</sub>

https://platzi.com/

*The dominant LatAm tech-education subscription, $249/year for the Expert plan with the region's most complete payment-method matrix.*

**Why it matters here:** It sets the price anchor and the Spanish tone that every LatAm learner has already internalised, and its instalment and payment-method handling is the definitive reference for what LatAm checkout must support.

**Steal this:**
- Splitting the annual price into a monthly-equivalent on screen — $249 USD/year displayed alongside '$21' per month — which makes a large USD number legible to a salary-constrained buyer without discounting.
- The instalment offer stated in plain words: '4 cuotas mensuales consecutivas sin intereses' on credit or debit card. Adopt this exact phrasing; 'sin intereses' is the load-bearing part.
- The two-step checkout (personal info → payment) asking only 'Nombre completo' and 'Correo electrónico' before 'Continuar', with terms acceptance inline rather than as a blocking checkbox.
- The payment-logo wall as trust furniture — Visa, Mastercard, Amex, PayPal shown together — plus a genuinely broad method list including cash/OXXO and PSE transfers, proving that cash and bank-transfer rails are mainstream, not a fallback.
- The subscription-pause feature (up to 2 pauses of one month per year) as a churn-reducer that is really just a database flag.
- Homepage proof formatting: 'Más de 6 millones de estudiantes y más de 4,000 empresas aprenden en Platzi' directly under the headline, and a free-entry CTA 'Comienza gratis' rather than a buy button.

**Avoid:** Almost everything upstream of the checkout is funding-dependent: 1,900+ courses across 17 schools, in-house video production, physical certificates, Platzi Conf, and a payment stack spanning Bitcoin, Apple/Google Pay, OXXO and PSE. Their 'Comienza gratis' funnel only pays back at enormous scale. Their all-you-can-eat catalogue subscription is also the wrong model for Karel — with three teachers and live classes, per-course or per-month-of-teaching pricing is the right shape.

**Open first:** https://platzi.com/precios/ then https://platzi.com/comprar/expert/

#### Aprende (formerly Aprende Institute)  <sub>[OK]</sub>

https://aprende.com/

*US-based, Spanish-language vocational school selling non-tech careers — gastronomy, beauty, trades, wellness — to LatAm adults; aprendeinstitute.com now 301s here.*

**Why it matters here:** It is the best proof that the LatAm online-school playbook works outside programming, which matters because three of Karel's four verticals are not tech; its category structure and advisor-led funnel are directly transferable.

**Steal this:**
- The headline formula 'Aprende lo que necesitas para construir el futuro que quieres' with the subhead 'Con el apoyo de expertos, a tu ritmo y 100% en español.' Three objections answered in nine words: expert support, self-paced, native language.
- The dual CTA split between a self-serve promise ('¡Comienza hoy y accede a una promoción!') and a human one ('Hablar con un Asesor'), sitting side by side above the fold.
- Using a WhatsApp *channel* (broadcast) rather than only 1:1 chat, positioned as a subscribe-for-value offer: 'tips, clases, descuentos exclusivos'. This builds a re-marketable audience at zero cost and suits a parent audience perfectly.
- Six-category navigation with explicit programme counts per category, which makes a modest catalogue feel structured and helps a visitor self-select fast.
- Consistent tú throughout despite an adult, professional audience — confirming the register for Karel's alumno- and parent-facing copy.

**Avoid:** They front a US toll-free number (+1 800) and run a paid-acquisition plus commissioned-advisor sales motion; the advisor headcount is the engine and a solo founder cannot staff it. They also hide all pricing above the fold, deferring to the sales conversation. Their category breadth (50+ programmes) is a scale artefact — Karel's four focused verticals with named teachers is the stronger small-team position.

**Open first:** https://aprende.com/ (note the 301 from aprendeinstitute.com)

#### SoyHenry (Henry)  <sub>[OK]</sub>

https://www.soyhenry.com/

*Argentine-origin tech bootcamp for LatAm built around income-share financing and a money-back employment guarantee.*

**Why it matters here:** It is the reference for how to present affordability and risk-reversal in Spanish to buyers who cannot pay upfront — the copy patterns transfer even though the financing instrument does not.

**Steal this:**
- Presenting three payment paths as equal, named options rather than one price: 'Pago en 1 cuota con beneficios', 'Planes en cuotas', and 'Financiamiento AIC'. Offering a discount for paying in full while normalising instalments is directly copyable.
- The 7-day money-back trial during the first week — a cheap, credible risk-reversal that a small school genuinely can honour and that is especially persuasive to a parent buying children's therapy sight-unseen.
- Compressed proof numbers rendered as badges: '+20K' graduates, '+3K' companies. The +N format reads instantly on mobile and avoids false precision.
- The short outcome-first headline 'Estudia Tech & IA' with the benefit subhead 'Potencia o acelera tu carrera con programas intensivos…' and a single-word CTA, 'Aplicar', which frames enrolment as selective rather than transactional.
- Explicitly scoping the guarantee ('disponible para programas seleccionados') so the promise stays honest — the pattern to imitate when Karel makes any outcome claim.

**Avoid:** The ISA/AIC instrument — 'Paga un 10% mientras estudias y el resto al conseguir empleo' — and the '100% de inversión' refund if unemployed after a year both require working capital, legal structuring and collections infrastructure. Do not promise employment outcomes at all: Karel's verticals (children's speech therapy, music, English) have no employment claim to make, and borrowing the bootcamp's empleo framing would be both unpersuasive and unfalsifiable.

**Open first:** https://www.soyhenry.com/ (the financing options block)

#### TripleTen LatAm  <sub>[OK]</sub>

https://tripleten.com/es-mex/

*US bootcamp localized for LatAm markets via country-specific paths, selling on a job-or-refund guarantee; the tripleten.lat domain is dead.*

**Why it matters here:** Its localization architecture — one platform, per-country URL paths and copy — is exactly the pattern Karel should plan for if he later expands beyond Ecuador to Colombia or Peru, and it is trivially implementable in Astro.

**Steal this:**
- The per-country path structure (/es-mex/, /es-chl/) instead of separate domains — one Astro build, one content collection, per-market price and payment copy. Start with /ec/ even if it is the only market.
- The parallel-construction headline 'Aprende … el trabajo. Consigue el trabajo.' — a rhythmic two-clause promise that survives translation and reads well on a narrow screen.
- The soft entry CTA 'Haz el test profesional' instead of 'Buy' or 'Apply'. A short quiz is a cheap Astro page that segments visitors (which vertical, which level, child or adult) and captures a lead — ideal for routing a parent toward therapy versus a teen toward programming.
- Stacking four proof types in one row: 93% employment, 53% hired before graduating, 5,000+ graduates, 4.8 rating from 1,000+ reviews. The mix of outcome, speed, volume and satisfaction is the template; Karel fills it with real, smaller numbers.

**Avoid:** tripleten.lat does not resolve (DNS NXDOMAIN) — do not cite or link it. The 'Consigue trabajo o te devolvemos tu dinero' guarantee with a 6-month window requires a career-services department and a balance sheet, and the 93% placement figure is only defensible with a funded outcomes-reporting operation. Their per-country localization is also staffed by local marketing teams, not just translated strings.

**Open first:** https://tripleten.com/es-mex/

#### Domestika  <sub>[OK]</sub>

https://www.domestika.org/es

*Spanish-origin creative-course marketplace with the most refined Spanish-language course card in the industry.*

**Why it matters here:** Its course card is the design reference for Karel's Music and creative verticals, and its per-course purchase model (rather than subscription) matches how a parent or hobbyist actually wants to buy.

**Steal this:**
- The exact course card field set: badge ('Top ventas' / 'Nuevo' / 'Domestika Basics'), title, 'Un curso de [instructor]', approval-percentage rating with review count ('98% (4.2K)'), student count ('178.423'), and duration in hours ('18h'). The 'Un curso de X' attribution line is the key move — it sells the teacher, which is Karel's actual asset with three named instructors.
- Approval percentage instead of stars. '98%' is more legible on a phone than a five-star widget and degrades gracefully at low review counts.
- The urgency banner 'Este precio tiene las horas contadas…' with a countdown, kept at the page level rather than repeated on every card, so it does not shout.
- The 'Añadir a una lista' save-for-later affordance under each card — a wishlist is localStorage-cheap and gives an undecided parent something to do other than leave.
- Course-type badges as a taxonomy ('Basics' for beginner tracks) — a clean way to signal level across English, Music and Programming without a separate filter UI.

**Avoid:** Prices are injected client-side and absent from the served HTML, which is bad for a bandwidth-constrained, mobile-first Ecuadorian audience and bad for SEO — Karel should render prices statically in Astro instead. Their perpetual-discount pricing and cinematic in-house video production are funded-scale operations, and the six-figure student counts per course are unmatchable social proof. The marketplace model itself (thousands of external instructors) is the wrong shape for a three-teacher school.

**Open first:** https://www.domestika.org/es/courses

#### Crehana  <sub>[OK]</sub>

https://www.crehana.com/

*Formerly the leading LatAm B2C creative-course platform; the homepage is now enterprise HR software, with the consumer catalogue surviving on secondary country paths.*

**Why it matters here:** It is the cautionary tale that defines the market gap Karel is entering — the biggest B2C player in the region walked away from consumers, leaving individual and parent buyers underserved.

**Steal this:**
- The surviving B2C tier structure on the country premium pages: Lite / Individual / Dúo, where Dúo simply allows two users. A two-seat 'family' plan is an obvious, near-zero-cost upsell for a school selling children's therapy and music to households with siblings.
- The pricing-page reassurance line 'Precios en moneda local. Múltiples métodos de pago' — one sentence that removes the two biggest LatAm purchase objections before any number is shown.
- The 'Llámame ahora' callback CTA sitting alongside the self-serve purchase path, for buyers who want a human but will not initiate contact themselves.
- The B2B pivot itself as a strategic signal: 'El software de HR que acompaña todo el journey del talento' with 'Solicita una demo'. Note the register shift to institutional language — useful when Karel eventually sells to Ecuadorian schools or clinics.

**Avoid:** Do not model the current homepage at all — it is an enterprise HR suite ('Gestión de Nómina', 'People Analytics', 'Crehana AI') and has nothing to do with a consumer school. The pivot itself is unavailable to a bootstrap team: it was financed by venture capital and took years. Their B2C prices are now hard to find and rendered client-side, and the '+6,300 cursos' catalogue is irrelevant scale.

**Open first:** https://www.crehana.com/co/premium/ (the surviving consumer pricing page — not the homepage)

#### UBITS  <sub>[OK]</sub>

https://www.ubits.com/

*Colombian corporate-learning platform, now a full B2B talent suite with no consumer offering.*

**Why it matters here:** Confirms the second major LatAm edtech has abandoned B2C, and provides the exact Spanish register to use if Karel later sells institutional licences to Ecuadorian schools or therapy clinics.

**Steal this:**
- The B2B headline pattern 'Centraliza todo el ciclo del talento en un solo lugar' with 'Solicita una demo' — the template for a future 'para instituciones' page selling seats to schools.
- Named-client logo-and-quote social proof ('UBITS nos permite fomentar una cultura de aprendizaje constante…' — Homecenter). One recognisable Ecuadorian school as a named reference would outperform any number of anonymous testimonials.
- Per-country footer localization (Colombia, México, Perú, Chile) with region-specific privacy policies and contacts — the compliance pattern to copy when expanding beyond Ecuador.

**Avoid:** There is no B2C model here to learn from and no pricing is published anywhere — it is entirely demo-gated enterprise sales requiring a sales team. The AI-powered talent-suite positioning is pure funded-company scope creep for Karel's purposes. Treat this as market intelligence, not as a design reference.

**Open first:** https://www.ubits.com/

#### Talently  <sub>[OK]</sub>

https://talently.tech/

*Formerly a LatAm tech bootcamp, now a vetted-engineer hiring and staffing marketplace for companies in Mexico and LatAm.*

**Why it matters here:** Another confirmed pivot away from selling education to individuals, and the clearest live example in this research of usted-register B2B Spanish versus the tú used everywhere in consumer edtech.

**Steal this:**
- The tone contrast worth studying: 'Talently acelera su roadmap entregando ingenieros senior validados que se integran a su equipo interno' — note 'su roadmap', 'su equipo'. Usted plus possessive for institutions; tú for alumnos and parents. This is the single most useful takeaway here.
- The two-product split (Talently Hiring for permanent placement, Talently Staffing for managed teams) as a model for cleanly separating two audiences on one site — useful for Karel's split between individual students and parent-purchased children's therapy.
- Geographic specificity in the headline ('para empresas líderes de México y LATAM') rather than a generic global claim — naming the market outperforms claiming the world.

**Avoid:** There is no course product, no pricing, no checkout and no student-facing UX left to model; the only CTA is 'Agendar una demo'. The talent-marketplace business requires a recruiting team and a two-sided network, which is the opposite of a bootstrap content business. Do not treat this as an edtech reference any more.

**Open first:** https://talently.tech/

#### Acamica  <sub>[DEAD]</sub>

https://www.acamica.com/

*Argentine bootcamp acquired by Digital House; the domain now issues a 301 permanent redirect to digitalhouse.com with no brand presence remaining.*

**Why it matters here:** Directly answers the brief's question — Acamica is gone. It should be removed from any competitive set, and its absorption is further evidence that mid-size LatAm edtech has consolidated away from the individual-learner market.

**Steal this:**
- The one durable lesson: they ran a clean 301 from the retired domain to the acquirer rather than letting it die, preserving link equity and not stranding users. Worth remembering if Karel ever rebrands or changes domain.
- Verification method for the whole competitive set: check the HTTP status and Location header before trusting any 'top LatAm edtech' listicle — several still list Acamica as active in 2026.

**Avoid:** Do not cite, link, or model anything from Acamica; any screenshots or teardowns you find are of a site that no longer exists. Digital House, the acquirer, is a large multi-country operation with corporate backing (Globant/Mercado Libre ties) and is not a bootstrap-comparable model either.

**Open first:** https://www.acamica.com/ — observe the 301 to https://digitalhouse.com/, then stop

#### Egg Educación / Egg Live  <sub>[likely]</sub>

https://egg.live/

*Argentine collaborative-learning platform that algorithmically shuffles students into six-person Zoom groups daily, claiming 150,000+ users across 30 countries.*

**Why it matters here:** Its pedagogy is the cheapest known way to deliver live-feeling education without scaling teacher hours — highly relevant to Karel's cost structure with only three teachers, though the tech is non-trivial.

**Steal this:**
- The 20/80 content contract: learning guides that are '20% teoría (material escrito y videos explicativos)' and '80% ejercicios prácticos'. This is a production-cost decision as much as a pedagogical one — far less video to shoot, which suits a bootstrap budget and low-bandwidth learners.
- Peer-support-as-staffing: advanced students help newer ones, so teacher hours do not scale linearly with enrolment. A lightweight version — a WhatsApp cohort group per course with an advanced student as moderator — is achievable immediately.
- Cohort framing over catalogue framing: students progress together on a schedule rather than browsing alone, which drives the completion rates that generate testimonials.
- The positioning contrast against traditional education ('se aleja de la educación tradicional donde un profesor dicta una clase teórica') as differentiation copy for a live-teaching school competing with recorded-video incumbents.

**Avoid:** I could not fetch egg.live directly, so live status rests on search evidence and active subdomains (checkout.egg.live, admin.egg.live) — treat as likely rather than confirmed, and verify before citing. The matching algorithm and the daily Zoom-orchestration infrastructure are real engineering that a solo founder should not attempt; also note their branding is split across egg.live and theegg.ai, which suggests a pivot in progress. The model also fails for 1-on-1 children's speech therapy, where peer grouping is inappropriate.

**Open first:** https://egg.live/

#### FUNCADE  <sub>[OK]</sub>

https://www.funcade.org/

*Ecuadorian foundation running SETEC-endorsed courses, including a children's speech-and-language therapy programme sold entirely through WhatsApp.*

**Why it matters here:** A live, named Ecuadorian competitor in the terapia de lenguaje vertical — this is what Karel's therapy course must outperform, and it sets a very beatable bar on web experience.

**Steal this:**
- The objective statement, which is the exact language Ecuadorian buyers in this niche respond to: 'Proporcionar técnicas y herramientas metodológicas para prevenir, detectar, evaluar y estimular adecuadamente en niños con trastornos de lenguaje.' Use this vocabulary (prevenir, detectar, evaluar, estimular) in Karel's therapy copy and metadata.
- The unit structure for a children's language course: fundamentals → early stimulation ages 0–5 → language disorders → parental involvement. That fourth unit is the insight — explicitly including the parent as a participant, not just as the payer.
- Publishing concrete schedule blocks (weekdays 08:30–11:00 or 19:00–21:00, Saturday 08:30–13:30, Sunday 08:00–13:00) including evening and weekend slots, which is what working parents actually filter on.
- A phone number as the primary CTA — '¡Contáctanos! (+593) 95 959 4325' as a WhatsApp link — confirming that in this vertical the conversion event is a chat, not a checkout.
- The SETEC verifiability claim: any employer can check a certificate's legality by entering a cédula number in the SETEC portal.

**Avoid:** No price, no duration, no instructor names, no online enrolment — 'Cursos continuos' is all the timing information given. This is the incumbent weakness to exploit rather than copy: Karel should publish price, hours, teacher credentials and a real start date. Their SETEC endorsement does not extend to every course they list, and Karel must not imply accreditation he has not obtained.

**Open first:** https://www.funcade.org/curso-terapia-lenguaje

#### UIDE — Cursos Virtuales (UIDE click)  <sub>[OK]</sub>

https://www.uide.edu.ec/cursos-virtuales/

*Ecuadorian private university's self-paced online course platform spanning Quito, Guayaquil and Loja, with WhatsApp advisors as the main conversion path.*

**Why it matters here:** Shows how the most credentialled players in Ecuador still convert through WhatsApp rather than checkout — strong evidence that Karel's WhatsApp-first instinct matches local buyer behaviour at every tier of the market.

**Steal this:**
- Two distinct WhatsApp numbers with labelled roles — Admisiones (0959700248) and Soporte Académico (0998014361). Separating pre-sale from post-sale support sets expectations and protects the founder's time; both can be one WhatsApp Business account with labels at first.
- The floating widget copy '¿Tienes dudas? ¡Asesoría personalizada aquí!' — 'asesoría personalizada' is the phrase that converts in this market, far better than a generic 'Chat'.
- The self-paced reassurance 'Sin fechas establecidas y avanzas a tu propio ritmo!' paired with a named credential, 'certificado otorgado por la UIDE'. Flexibility plus a named issuer is the complete promise for asynchronous courses.
- Naming the platform as a product ('UIDE click') separately from the institution — a small branding move that makes a course catalogue feel like a real product.
- Explicit city coverage (Quito, Guayaquil, Loja) as a local-trust signal even for a fully online offering.

**Avoid:** No pricing anywhere and the dual CTAs are 'Solicita Información' and 'Oferta Académica' — pure lead capture with no path to purchase. The '4 mil cursos… en 25 áreas' catalogue is licensed third-party content, not something a three-teacher school can or should match; Karel's advantage is depth and named teachers in four verticals, not breadth.

**Open first:** https://www.uide.edu.ec/cursos-virtuales/

#### Acavir  <sub>[OK]</sub>

https://www.acavir.com/

*Small Ecuadorian course seller built on WordPress, positioning Ministerio del Trabajo certification as its entire value proposition, with its own campus LMS.*

**Why it matters here:** Roughly the scale and budget Karel is operating at right now — proof that a tiny Ecuadorian operator can sell certified courses online with modest tooling, and a useful floor for what he needs to beat.

**Steal this:**
- Leading with 'Cursos con Certificado' and 'Certificado Ministerio del Trabajo' as the headline rather than course content — in Ecuador the credential is the product, which should shape Karel's title tags and H1s.
- The separate 'Campus' link in the main navigation, cleanly splitting the marketing site (static Astro on Cloudflare) from the learning platform (a hosted LMS). This is the right architecture for Karel: keep the fast static site and don't build an LMS.
- 'Conocer más' as the card-level CTA — softer than 'Comprar' and appropriate when the buyer needs a detail page before committing.
- A tight five-course catalogue presented confidently, showing that a small, focused offering does not need to apologise for its size.

**Avoid:** No prices, no payment methods, no visible SETEC badge despite the certification claim, and no instructor identity — thin even by local standards, and the design is default-theme WordPress. Their trade-and-logistics niche is unrelated to Karel's verticals, so only the structural lessons transfer. This is a floor to clear, not a standard to match.

**Open first:** https://www.acavir.com/

#### AE Virtual Class (Academia Europea)  <sub>[OK]</sub>

https://www.aevirtualclass.com/

*Pan-LatAm virtual language school delivering 2,000+ live classes daily across eight languages to children, teens and adults.*

**Why it matters here:** The best available reference for parent-facing copy in live online children's education — directly applicable to both Karel's English vertical and the parent/guardian audience for children's therapy.

**Steal this:**
- The parent-addressed hook 'Tus hijos están en el mejor momento para aprender otro idioma' — it speaks to the buyer (the parent) about the user (the child), which is exactly the split Karel faces in the therapy and kids' English verticals.
- Segmenting the catalogue by age band (niños / jóvenes / adultos) with age-appropriate content framing, rather than by level alone — the navigation cut a parent actually uses.
- Publishing wide class-hour coverage (weekdays 5 AM–10 PM, weekends 9 AM–4:30 PM) with an explicit timezone, which resolves the scheduling anxiety that kills live-class conversions.
- Bundling non-class value as named benefits — conversation clubs, book clubs, practice sessions — to justify a subscription beyond raw teaching hours. A weekly 'club de conversación' is one recurring calendar invite for Karel.
- Named instructor profiles with international certifications (IELTS, TOEFL, DELF-DALF) as the trust layer — the pattern for showcasing three real teachers with real credentials.

**Avoid:** No prices published at all; enrolment routes through regional sales offices and phone numbers, which is a legacy 50-year-old institution's motion and requires staff. The '2,000+ live classes daily' scale and 57 physical locations are irrelevant to a bootstrap. Their claim of basic fluency in four months via a proprietary 'IALS®' system is the kind of unfalsifiable methodology branding Karel should avoid.

**Open first:** https://www.aevirtualclass.com/ (the niños/jóvenes section)

#### Payphone (Ecuador payment gateway) — reference, not a competitor  <sub>[likely]</sub>

https://payphone.app/para-negocios

*Ecuadorian payment button offering links, QR and deferred-payment (diferido) card processing without a physical dataphone or monthly subscription.*

**Why it matters here:** Included because checkout was an explicit research dimension and this is the concrete answer for an Ecuadorian bootstrap: it is the one gateway a solo founder can adopt without a corporate banking relationship, and it supports the diferido that local card buyers expect.

**Steal this:**
- Payment links and QR codes as a checkout substitute — Karel can sell from a static Astro page plus a WhatsApp-delivered payment link, with no cart, no backend and no PCI scope, and still take cards.
- Its support for 'diferido con interés' on Ecuadorian credit cards, which is the local instalment mechanism buyers ask for by name; state it explicitly in Spanish on the pricing page alongside a transfer option.
- The 'sin datáfono ni suscripciones' positioning — no hardware, no monthly fee — which is why it is the correct first choice over Datafast (better suited to medium and large companies with bank backing).
- Pairing this with CENFORPRO's manual 'Registro de Pago' transfer flow gives full coverage: cards and diferido via Payphone, bank deposit for the unbanked-by-card, and WhatsApp to close either.

**Avoid:** I could not fetch the page directly (the comparison article returned 403), so fee specifics and current terms are unverified from search results only — confirm rates, settlement times and RUC/business-registration requirements with Payphone directly before committing. Note also that diferido typically carries interest for the buyer, so do not advertise it as 'sin intereses' the way Platzi and Coderhouse can with their own subsidised instalments. Datafast, Kushki, PlaceToPay, Paymentez, Nuvei and Banco Pichincha's 'De Una' are the alternatives to compare against.

**Open first:** https://payphone.app/para-negocios

---

## Course-selling and learning-experience design: lesson players, converting landing pages, progress/motivation mechanics, student dashboards, and purchasing-power-parity pricing — benchmarked for a one-founder, Spanish-language, mobile-first school in Ecuador

The most transferable finding is that a one-person course business does not need a course platform: Wes Bos, Josh Comeau and Matt Pocock all run a static marketing site plus a thin authenticated player, keep 100% of revenue, and out-convert every SaaS platform in this list — which is exactly the Astro + Cloudflare shape Karel already has. PPP turned out to be verifiable and Ecuador-specific: fetching Wes Bos's sites from this machine's Ecuadorian IP returns, in the raw HTML of five separate domains, "I noticed you are coming from Ecuador where this course may be a bit expensive... use the code ECUADORLOVE for an extra 52% off" — a geo-detected banner that dispenses a plain coupon code, the cheapest possible implementation. But PPP is an inbound mechanic built for US-priced products sold into poorer countries, and Karel's case is inverted; he should price natively for Ecuador and consider reverse-PPP (a higher "global" price for diaspora, US and Spain buyers), because the 52% discount everyone else grants is his baseline, not his discount. Critically, the standard PPP data source (ppp-api.fly.dev, the one behind most open-source PPP libraries) returns HTTP 404 for EC — and for SV — because dollarized economies with no local currency break its exchange-rate model, so any off-the-shelf PPP package will silently skip Ecuador and must be hardcoded (peers: Peru 0.50, Brazil 0.52, Colombia 0.41, Panama 0.43 → Ecuador ≈0.50). The converting landing page is a solved, near-identical template across all three independent creators, and it is worth copying section-for-section rather than reinventing. On completion, the sub-15% rate is a format problem more than a motivation problem — MOOCs sit at 3–15% while cohort-based courses with a fixed start date reach ~72%, which is free to implement and matters more than any badge; the cheapest high-yield additions are per-lesson checkmarks, a resume card, certificates gated on 100% completion, and streaks (Duolingo: users with 7+ day streaks retain at 2.4x, and streak freeze cut churn 21% among at-risk users). Architecturally, Total TypeScript is the model to clone: transcripts ship as plain text inside the page payload rather than as a video-player feature, which is the single best decision for Ecuador's expensive, variable bandwidth.

> **Top pick.** Wes Bos (wesbos.com and his per-course domains). He is one person selling 13 courses with no platform underneath, and he is the only site in this entire benchmark that I could verify serving an Ecuador-specific price today. His whole commercial model is copyable on Astro in a weekend: static sales page, two tiers (Starter $89→$44.50 / Master $139→$69.50), a sale countdown, a social-proof counter ("22,976 already sold!"), and a geo-detected PPP banner that just hands the visitor a coupon code — no dynamic pricing engine, no currency logic, no third-party service. Runner-up, and the one to copy for the product rather than the storefront: Total TypeScript, whose lesson pages ship the full timestamped transcript as plain text in the page data (Sanity → static build, video off-site, exercises in StackBlitz), which is the correct architecture for a bandwidth-constrained Ecuadorian audience and maps one-to-one onto Astro content collections + Cloudflare.

### Sites (20)

#### Wes Bos  <sub>[OK]</sub>

https://wesbos.com/courses

*One developer selling 13 courses (6 free, 7 paid) off plain static per-course domains with no course platform underneath.*

**Why it matters here:** The closest structural analogue to Karel: single author, no SaaS, no transaction fees, and the only site here I could verify serving an Ecuador-specific offer. The free-courses-as-funnel model is directly applicable to seeding demand in a market that has never bought an online course.

**Steal this:**
- The PPP banner, verbatim and verified in the raw HTML of beginnerjavascript.com, ES6.io, reactforbeginners.com, learnnode.com and advancedreact.com: 'Hey! I noticed you are coming from Ecuador where this course may be a bit expensive. I support Parity Purchasing Power — I want to make this course affordable for everyone around the world. If you need it, use the code ECUADORLOVE for an extra 52% off the listed prices.' The implementation is a geo-lookup that renders a banner containing a static coupon code — no dynamic pricing, no third-party service. Invert it for Karel: a 'GLOBAL' uplift for non-EC buyers.
- The 'if you need it' honour system: no proof, no verification, no support burden. Copy that phrasing (es: 'si lo necesitas') for a student/hardship discount rather than building eligibility checks.
- Repeating the discount line inside each pricing card, not only in the top banner: 'Use the code ECUADORLOVE for an extra 52% off the below price if you need it' appears immediately above each Get-the-Course button, at the moment of decision.
- The two-tier ladder with an honest content split — Starter $89→$44.50 (first 6 modules, 36 videos) vs Master $139→$69.50 (all 15 modules, 88 videos, plus DRM-free downloads). The download-for-offline perk on the upper tier is worth far more in Ecuador than in the US.
- Free flagship courses (JavaScript30, CSS Grid, What The Flexbox) as the top of the funnel, with paid courses as the upgrade — the cheapest possible customer-acquisition channel for a market with no purchase habit.

**Avoid:** The perpetual 'sale' countdown timer (the page ships a '00 Secs Remaining' element with the discount permanently applied) is a dark pattern that reads as fake and would corrode trust fast in a small market like Quito or Guayaquil where reputation is word-of-mouth. Also: his stack is bespoke Node/Slack-era tooling, his checkout is card-only via Stripe with no instalments, and his catalogue is one-to-many English developer content — none of the Slack-community or 4K-video production values transfer to a bootstrap budget with three teachers.

**Open first:** https://beginnerjavascript.com/ — open it and read the banner directly above the pricing cards; from an Ecuadorian IP it renders the ECUADORLOVE offer live.

#### Josh Comeau — CSS for JS Developers  <sub>[OK]</sub>

https://css-for-js.dev/

*The best-executed single-author course landing page on the web, and a full 'regional license' PPP system with a documented anti-arbitrage design.*

**Why it matters here:** This is the canonical converting landing page for a solo creator, and it is the only implementation here that has thought through what happens after a discounted sale — the exact problem Karel will hit if he ever sells outside Ecuador.

**Steal this:**
- The section order, which is the template to copy wholesale: hero with a pain headline ('Stop wrestling with CSS') → problem statement → solution → 'Trusted by developers at' logo wall → 3 named testimonials → team licences → instructor bio ('Hi, I'm Josh!') → curriculum with hard numbers (200 lessons / 40 hours / 10 modules) → 'And so much more…' bullet list → bonus tier → FAQ (21 questions) → 50+ social testimonials → closing testimonials. Note that curriculum and bio come BEFORE the FAQ, and social proof brackets the whole page.
- The regional-license mechanic and its guard rails, quoted from the FAQ: 'Regional licenses include all of the same content (including bonuses!) at a significantly lower price point. In exchange, the course can only be accessed within your home region. If you wind up moving to a higher-cost-of-living area and wish to continue accessing the course, you'll need to upgrade to a global license, and pay the difference in cost.' The upgrade-by-paying-the-difference path is the elegant part — it prevents arbitrage without punishing honest buyers.
- The discount-stacking rules, stated explicitly so support never has to adjudicate: the 20% student discount 'can be combined with regional licenses, but not with any other coupon codes', and only the top 'Ultimate' package is available as a regional licence.
- The unconditional guarantee wording: 'If you're not happy with the course, for any reason, you can reach out by email in the first 30 days and I'll refund your purchase, unconditionally.' Pair it with the Joy of React phrasing — 'no questions asked, and no hard feelings'. In a low-trust, low-card-penetration market this is the single highest-leverage sentence on the page.
- The VPN escape hatch in the FAQ — 'If you don't see the box and you're using a VPN, please try disconnecting the VPN' — which pre-empts the #1 support ticket that geo-pricing generates.

**Avoid:** The regional licence is placed 'on this page, right below the Register Now button' — i.e. it is client-side rendered and invisible in the HTML source, so it does not work without JS and is a real risk on a flaky mobile connection. Wes Bos's server-rendered coupon banner is the more robust pattern for Ecuador. Also the page is enormous (345KB of HTML, 50+ testimonials, custom animations) — the testimonial volume is not reproducible for a new school with zero students, and the production budget is not a bootstrap budget.

**Open first:** https://css-for-js.dev/ — scroll to the FAQ and expand 'Do you support Purchasing Power Parity (PPP) / regional licenses?'

#### Josh Comeau — The Joy of React  <sub>[OK]</sub>

https://joyofreact.com

*Comeau's second course; same landing template as CSS-for-JS but with a much more interesting lesson-player philosophy.*

**Why it matters here:** Its player is text-first with short videos as support, not video-first — the correct default for expensive Ecuadorian mobile data, and cheap to build in Astro because most of it is just well-designed MDX.

**Steal this:**
- The text-first lesson format: 'Over 200 bite-sized videos' mixed with written content, and — crucially — 'Text summaries for all lesson videos with written solutions'. Every video has a readable equivalent, so a student on a metered connection can complete the course without streaming. Make this a hard authoring rule for Karel's three teachers.
- Bite-sized video length as an explicit design constraint (200 videos across 6 modules), rather than hour-long lectures. Short files are resumable on bad connections and give far more checkmark events per hour of content.
- The capstone-project structure: three real builds (a Wordle clone, an accessible toast system, an MDX blog) that sit after the modules. A concrete artefact beats a certificate as proof-of-learning, and for the English and Music verticals the analogue is a recorded performance or a spoken assessment.
- The interaction vocabulary — 'coding challenges, mini-games, well timed jokes and a boss at the end of each section'. A named 'boss' (a checkpoint quiz) at the end of each module is nearly free to build and creates a natural completion milestone.
- The bundle cross-sell: a 'Joy for JavaScript Developers bundle' section on both course pages that packages his two courses at a discount — directly applicable to bundling English + Music, or a therapy programme across levels.

**Avoid:** Three tiers (Basic / Pro / Ultimate) with the regional licence available only on Ultimate is confusing, and prices are not in the HTML at all — the whole pricing block is JS-rendered. For Ecuador, do the opposite: server-render prices in the markup so they survive a bad connection and are indexable. Also the 'Job Hunting Kit' and Discord bonuses assume a professional adult developer audience; parents buying speech therapy for a child need reassurance and scheduling, not community swagger.

**Open first:** https://joyofreact.com — read the FAQ entry on regional licences and the module/capstone list

#### Total TypeScript (Matt Pocock)  <sub>[OK]</sub>

https://www.totaltypescript.com/

*Exercise-driven workshop platform built on Sanity + a static Next build, with transcripts shipped as page data rather than as a player feature.*

**Why it matters here:** This is the architecture Karel should clone. I pulled a lesson page and confirmed the content model directly: it maps almost one-to-one onto Astro content collections on Cloudflare's free tier.

**Steal this:**
- The transcript architecture, confirmed in the lesson page payload: the page data carries a plain-text, timestamped `transcript` field ('0:00 We've got some code here that looks like perfectly valid JavaScript...') plus a separate `aiTranscript` field, rendered as static text below the video. The transcript is part of the content, not a video-player plugin — so it costs zero bandwidth, is fully indexable for SEO in Spanish, and is readable when video won't load. This is the single most important thing to copy for Ecuador.
- The problem/solution pair as the unit of content: each lesson object holds a `problem` (its own video + transcript + `stackblitz` file) and a nested `solution` (its own video + transcript). Two short videos per concept instead of one long one. For English or speech therapy the analogue is 'attempt' then 'model answer'.
- Off-loading the expensive parts: video is hosted externally (Mux `videoResourceId`), exercises run in embedded StackBlitz, content comes from Sanity CDN. The site itself stays static. Karel's equivalents: Cloudflare Stream or Bunny for video, content collections for text, Cloudflare Pages for the shell.
- The certificate as an explicit, visible lock on the workshop page: a 'Certificate — Complete all lessons to unlock this certificate' block sits in the curriculum listing, so the reward is visible from lesson one rather than revealed at the end. Cheap to build (a generated PNG/PDF) and a strong completion lever for a market where a shareable credential has real social value.
- Publishing exercise counts as the value metric instead of video hours ('nearly 150 exercises', '243 interactive exercises' on Epic React) — it signals active learning and is more honest than '40 hours of video'.

**Avoid:** Prices render as 'Loading price' — the entire pricing block is client-side, so a slow Ecuadorian connection shows a blank price where the buy button should be. Never do this. Also: no PPP is offered on Total TypeScript's own pricing, StackBlitz-style embedded IDEs are heavy and irrelevant for English/Music/therapy, and the Discord-community expectation does not transfer — in Ecuador that channel is WhatsApp.

**Open first:** https://www.totaltypescript.com/tutorials/beginners-typescript/beginner-s-typescript-section/implicit-any-type-error — a free lesson; view source and search for "transcript" to see it shipped as plain text

#### Epic Web / Epic React (Kent C. Dodds)  <sub>[OK]</sub>

https://www.epicweb.dev/

*The same Skill Recordings platform as Total TypeScript, but with a fully worked PPP policy including deliberate restrictions.*

**Why it matters here:** Kent's version documents what you give up for a PPP price — the anti-abuse half of regional pricing that nobody else writes down, and the half Karel needs if he ever sells beyond Ecuador.

**Steal this:**
- The PPP restriction set, which is the honest trade for a deep discount: content is accessible only from the country of purchase, no bonus content, no downloads, no upgrade path, and only the top 'Pro' tier is PPP-eligible. Even the FAQ question is named for it — 'Does PPP limit bonus content?' Stating the limits plainly up front is what makes a 50%+ discount sustainable.
- The standard trust block repeated on every product page: lifetime access, 30-day money-back guarantee, English transcripts and subtitles, progress tracking, and completion certificates. That is a five-item checklist Karel can literally translate and reuse under every course card.
- Structuring a catalogue as several focused workshops that also sell as one bundle ('five focused workshops', 'Pro Complete — Best Value ⭐️'), which lets a low entry price coexist with a high bundle price. Directly applicable to a levelled English or music curriculum.
- The buyer-type toggle at the top of the pricing widget ('For myself / For my team') — one control that switches the whole pricing block. Karel's version is 'Para mí / Para mi hijo o hija', which matters because the therapy vertical is bought by a parent for a different user.

**Avoid:** The FAQ answers are rendered inside a JS accordion and are entirely absent from the served HTML — so the guarantee, the access terms and the PPP policy are invisible to Google and to anyone whose JS fails. For a Spanish-language SEO play this is exactly backwards; render FAQ answers in the markup and mark them up as FAQPage schema. The 'Epic' pricing (hundreds of dollars per workshop) and the eight-workshop scope also assume a US developer salary.

**Open first:** https://www.epicreact.dev/products/epic-react-pro — the pricing/PPP widget and the tier feature list

#### Master.dev (formerly Frontend Masters)  <sub>[OK]</sub>

https://master.dev/

*The long-running subscription video school for developers — as of now rebranded: frontendmasters.com issues a 302 to master.dev.*

**Why it matters here:** The clearest example of the subscription-catalogue model as the opposite of what Karel should do, plus a genuinely good transcript-as-navigation player.

**Steal this:**
- Transcript-as-search: the player lets you search the transcript and jump to that timestamp, turning a 3-hour video into a random-access reference. Since Karel will already have transcripts as text (per Total TypeScript), adding client-side search over them is nearly free and is the highest-value player feature per line of code.
- Learning paths (24 of them) layered over 300+ individual courses — an ordered, named sequence through existing material. Karel can ship 'Ruta: Inglés A1 → B1' over the same lessons at zero content cost, and a named path is a much stronger completion driver than a loose catalogue.
- Publishing instructor provenance as the credibility signal (engineers from Netflix, Spotify, Microsoft, Stripe). Karel's equivalent is the credential of each of his three teachers — for the terapia de lenguaje vertical especially, the professional licence of the therapist is the entire sale.
- Team pricing framed as a saving rather than a price ('save 37% over individual plans with 10 team members or more') — reusable for family or sibling pricing in the children's vertical, and for schools buying seats.

**Avoid:** Everything about the business model. A monthly subscription over a 300-course catalogue requires continuous content production that three teachers cannot sustain, and subscriptions are the worst fit for Ecuador's low card penetration — recurring card auth failures are the dominant churn cause. One-time purchase with lifetime access, as all three independent creators do, is the right call. Also note the rebrand itself: they abandoned a decade of brand equity in 'Frontend Masters', so do not treat their naming as a model.

**Open first:** https://master.dev/join/ — the pricing page; then open any course player to see transcript search

#### egghead.io  <sub>[OK]</sub>

https://egghead.io/

*Short-lesson (2–7 min) developer video library; the origin of the Skill Recordings/Badass Courses platform that Total TypeScript and Epic Web run on.*

**Why it matters here:** egghead invented the very-short-lesson format that these paid platforms then adopted, and its lineage explains why the Total TypeScript architecture looks the way it does.

**Steal this:**
- The hard lesson-length ceiling (most lessons run 2–7 minutes, each covering exactly one idea). A short lesson downloads on a bad connection, finishes in one sitting on a bus, and produces a completion event — three separate wins for Ecuador from one editorial rule.
- Lesson-level, not course-level, granularity: every lesson has its own URL, title and transcript, so each one is an independent SEO landing page. For Spanish-language search where competition is thin, that is a large free acquisition channel.
- The free/paid mix on the same catalogue with an `access_state=free` filter, so free lessons are browsable as a category and act as a permanent sampler.
- Joel Hooks's 'Badass Courses' body of writing on launch mechanics (badass.dev documents a $415k pre-release launch) — a practical playbook for sequencing a launch to an email list, which is how all three independent creators actually sell.

**Avoid:** egghead has churned through several business models (subscription, then per-course, then bundles) and its own lesson URLs are unstable — the lesson URL I tried first returned a 404. Don't copy the URL churn: pick a permanent lesson URL scheme on day one, because in a Spanish-language SEO strategy the accumulated lesson pages are the asset. The subscription model carries the same card-failure problem as Master.dev.

**Open first:** https://egghead.io/q?access_state=free — the free-lesson catalogue, to study lesson granularity and titling

#### Execute Program  <sub>[OK]</sub>

https://www.executeprogram.com/

*Gary Bernhardt's programming school built entirely around spaced repetition — the only platform here that treats forgetting as the core problem.*

**Why it matters here:** Spaced repetition is the single most under-used completion mechanic and it is genuinely cheap to build; for English vocabulary and speech-therapy exercises it is a far better fit than video anyway.

**Steal this:**
- The review loop as a first-class product surface: after finishing a course's lessons you keep returning for scheduled reviews at widening intervals. The public framing is honest about the cost — '20 minutes/day for a couple of weeks' to learn, then 'about ten minutes/day at first, but that approaches zero as the spaces between the repetitions grow'. Telling students the time cost up front, and that it shrinks, is excellent expectation-setting.
- A daily-review queue as the thing the dashboard opens on, instead of a course list. This is a much stronger 'continue where you left off' than a resume button, because the system decides what is due rather than asking the student to choose.
- Implementation is trivially cheap: a Leitner/SM-2 schedule is a handful of columns (item id, interval, ease, next_due) in a Cloudflare D1 table plus a nightly job — no video, no streaming, no bandwidth. For English vocabulary and for therapy drill repetition this is arguably the highest-value feature Karel could ship.
- All-in-browser interactive examples rather than video ('Courses are made up primarily of code examples, not text, and all code examples are interactive') — a zero-bandwidth lesson format.

**Avoid:** $39/mo or $235/yr for four narrow courses (JavaScript, TypeScript, SQL, regex) is a niche, high-price subscription that a general-audience Ecuadorian school cannot mirror. The austere text-only aesthetic also will not work for children's therapy or music, which need warmth, colour and audio. Take the scheduling algorithm and the review-queue-as-homepage idea; leave the pricing and the visual language.

**Open first:** https://www.executeprogram.com/spaced-repetition — their own explanation of the review scheduling

#### Boot.dev  <sub>[OK]</sub>

https://www.boot.dev/

*Gamified backend-development curriculum built explicitly around XP, levels, a leaderboard and daily-practice framing.*

**Why it matters here:** The clearest worked example of full game mechanics applied to serious adult learning, and its free-then-read-only paywall is an unusually humane gating model worth copying.

**Steal this:**
- The read-only paywall: students get 'all the immersive and interactive features for free for a few chapters', and after that unpaid users drop to 'read-only (content only) mode' rather than being locked out. Content stays readable and indexable; what you pay for is interactivity, progress and credentials. For a market with low card penetration and a slow purchase decision, degrading gracefully instead of slamming a paywall is the right default.
- The explicit editorial line 'Daily practice beats occasional binge-sessions', stated as product philosophy on the homepage. Committing publicly to a small daily habit shapes what students expect and justifies every nudge you later send.
- A public leaderboard as a standing page (/leaderboard) rather than a buried widget — for a small Ecuadorian cohort where students plausibly know each other, a class leaderboard is far more motivating than it is for an anonymous global audience.
- Aggregate XP as social proof on the marketing site ('12.5B XP earned'), which converts internal gamification telemetry into a homepage credibility number for free.

**Avoid:** Full XP-plus-levels-plus-leaderboard systems are a large build and carry real downside risk: leaderboards demotivate the bottom half of a cohort, and they are actively wrong for the children's speech-therapy vertical, where competitive ranking between children is inappropriate and parents will object. Ship checkmarks, streaks and certificates first; treat XP and leaderboards as optional and per-vertical (fine for adult English, off by default for terapia de lenguaje).

**Open first:** https://www.boot.dev/pricing — then https://www.boot.dev/leaderboard to see the ranking surface

#### Brilliant  <sub>[OK]</sub>

https://brilliant.org/

*Interactive math/science/CS learning built for mobile first, with streaks, levels and daily goals around genuinely bite-sized lessons.*

**Why it matters here:** Alongside Duolingo, this is the real answer to 'who does the lesson experience best at 360px' — because it was designed for the phone first and has essentially no video.

**Steal this:**
- The 15-minutes-a-day contract as the product's core promise, with a documented escape valve: 'On busier days, you can maintain your streak with quick 2-minute practice sessions.' A low-effort path to keep a streak alive is what stops the streak from becoming a source of dread and abandonment.
- Interaction instead of playback: lessons are solved, not watched ('drag a point across a coordinate plane', interactive logic puzzles). For a 360px screen this is the decisive choice — one interactive prompt per screen with a single primary button always reads better than a video plus a sidebar.
- The visual-explanation-first pedagogy with animation used to reward correct answers (they use Rive for lightweight animated feedback). Small vector animations are kilobytes, not megabytes — the right way to make a lesson feel alive on an Ecuadorian mobile connection.
- The trio of streaks + levels + daily goals presented together as the motivation layer, with the daily goal being user-set — letting the student choose their own commitment (5 / 10 / 15 min) raises adherence and costs nothing to build.

**Avoid:** Brilliant's content is enormously expensive to produce — every lesson is a bespoke interactive widget, which three teachers authoring in Spanish cannot replicate. Do not try to make every lesson interactive; make the assessment at the end of each lesson interactive and let the teaching itself be text, audio and short video. Their pricing is also an annual subscription, which is the wrong model for Ecuador.

**Open first:** https://brilliant.org/ on a phone (or a 360px viewport) — then https://brilliant.org/help/using-brilliant/ for how streaks and daily goals are defined

#### Duolingo  <sub>[OK]</sub>

https://www.duolingo.com/

*The reference implementation for streak and habit mechanics, with published numbers on what each mechanic is actually worth.*

**Why it matters here:** Karel's largest vertical is language teaching, so Duolingo is both the direct competitor for attention and the best-documented source of retention mechanics — and the specific mechanics that matter most are cheap.

**Steal this:**
- The streak itself, which is the highest-ROI single feature in this entire benchmark: users with 7+ day streaks retain at 2.4x the rate of users who never form one, and Duolingo holds ~55% month-over-month DAU retention. Implementation is one date column and a daily check — trivially cheap on Cloudflare D1.
- Streak freeze, and the counter-intuitive lesson behind it: protecting a streak for 1–2 days reduced churn by 21% among users at risk of breaking their streak, because it removes the anxiety without removing loss aversion. Ship the forgiveness mechanic at the same time as the streak, never after.
- The diminishing-returns finding — moving from one to two or three streak freezes helped, but three was barely better than two. Two is the number; don't over-build.
- Streak-referencing notifications as the main re-engagement channel. For Karel this is the key adaptation: WhatsApp, not push and not email, is the dominant channel in Ecuador, so the nudge is a WhatsApp template message ('Te quedan 3 horas para mantener tu racha de 12 días') — and the messaging cost is the reason to keep nudges few and streak-anchored rather than generic.
- Streak milestones as celebration moments (the Streak Society framing) — a shareable card at 7 / 30 / 100 days doubles as free WhatsApp-native marketing in a word-of-mouth market.

**Avoid:** Duolingo's full gamification stack — leagues, gems, hearts/lives, XP boosts, ads — is a monetisation machine tuned for hundreds of millions of free users, and most of it is hostile in a paid context. Hearts/lives especially: punishing a paying student by locking them out after mistakes would be indefensible for a child in speech therapy. Take the streak, the freeze and the nudge; leave the economy. Also do not compete with Duolingo on free general English — Karel's edge is live Ecuadorian teachers, local accent and accountability, which Duolingo cannot offer.

**Open first:** https://www.duolingo.com/ on mobile — and Lenny's Podcast episode 'Behind the product: Duolingo streaks' with Jackson Shuttleworth (Group PM, Retention) for the mechanics and the experiment results

#### Teachable  <sub>[OK]</sub>

https://teachable.com/

*Mainstream hosted course platform; removed its free plan in 2025 and now runs four paid tiers with transaction fees on the lower ones.*

**Why it matters here:** A likely default choice for a non-technical founder, and worth understanding precisely so Karel can articulate why he is not using it — and so he can copy its student dashboard, which is well-designed.

**Steal this:**
- The student dashboard pattern, which is the clearest 'continue where you left off' spec in this benchmark: a personalised homepage showing up to 4 in-progress courses, sorted by progress descending, each with a resume action. Sorting by highest progress first is the smart detail — it surfaces the course the student is most likely to finish, not the most recently touched one.
- Video resume position stored per lesson, so returning to a partially watched lesson continues from the same timestamp. Cheap to implement (localStorage keyed by lesson id, upgraded to D1 when logged in) and one of the most-noticed quality signals on mobile, where sessions are constantly interrupted.
- Their published tier ladder as a pricing-psychology reference: Starter / Builder / Growth / Advanced, with the entry tier deliberately crippled (5 products, 100 students, 7.5% fee) to push upgrades.

**Avoid:** The economics are the point of avoidance: $39–$499/mo plus a 5% transaction fee on Basic and 7.5% on Starter, on top of card processing. On a bootstrap budget selling $20–60 courses in Ecuador, the monthly floor alone can exceed revenue for months, and the transaction fee compounds. It also gives Karel no control over checkout — no diferido/instalments through local acquirers, no bank transfer or cash-deposit flow, which are the payment methods that actually matter in Ecuador. Astro on Cloudflare's free tier plus a local gateway is both cheaper and strictly more capable here.

**Open first:** https://support.teachable.com/en/articles/11691026-student-dashboard — the dashboard spec, which is the genuinely useful artefact

#### Thinkific  <sub>[likely]</sub>

https://www.thinkific.com/

*Hosted course platform positioned on zero transaction fees; its 'Learner Hub' is the best-documented resume-surface design of the SaaS platforms.*

**Why it matters here:** Its Learner Hub is effectively a free spec for the student dashboard Karel has to build, written down in public support docs.

**Steal this:**
- The Learner Hub layout, which is the exact component to build: one hero card for the course the learner was last working on, carrying a Start/Resume button and a progress tracker, plus up to three additional started courses beneath it. One primary continue action, a small set of secondary ones, nothing else — this is the right information density for 360px.
- The distinction between 'Start' and 'Resume' on the same button depending on state — a one-word change that removes all ambiguity about whether you have begun a course.
- Automatic video resume within a lesson ('If a student views a portion of a video lesson, leaves the lesson, and then returns to the lesson at a later time, they will be able to automatically continue from where they left off'), which is separate from and additional to course-level progress.
- Zero transaction fees across all plans as the positioning wedge against Teachable and Podia — useful framing for how Karel should talk about his own pricing to the three teachers he is recruiting.

**Avoid:** I could not read the site directly (it returns HTTP 403 to non-browser clients — Cloudflare bot protection, so the host is live but I verified its features through their support documentation rather than the product). Beyond that: $49–$199/mo with the free plan removed, a generic multi-tenant look that cannot carry a local Ecuadorian brand, and no ability to plug in PayPhone, Kushki, Datafast or a bank-transfer flow. The mobile app is theirs, not Karel's.

**Open first:** https://support.thinkific.com/hc/en-us/articles/37873047985047-The-Learner-Hub — the resume-surface spec

#### Podia  <sub>[OK]</sub>

https://www.podia.com/

*Simpler all-in-one for creators (courses + downloads + community + email) at $39–$199/mo with 5% fees on the Starter plan.*

**Why it matters here:** Podia's bundling of email marketing with the course product reflects the real lesson — the email/messaging list is the asset, not the platform — and their comparison articles are an unusually candid competitive map.

**Steal this:**
- Treating the email list as part of the course product rather than a separate tool. Every independent creator here sells through a list; Karel's version is a WhatsApp list plus email, and it should be built from day one via the free-course funnel, before any paid course exists.
- Selling small digital downloads alongside courses on the same checkout — for Karel this is the obvious low-price entry product (a PDF of speech-therapy exercises for parents, a set of backing tracks, an A1 vocabulary pack) that converts a hesitant visitor into a customer at $3–5 and creates the payment relationship.
- Their published head-to-head comparison pages (podia.com/articles/kajabi-vs-teachable, /teachable-vs-thinkific) as a content-marketing template: Karel can rank in Spanish for 'mejor curso de inglés online Ecuador' style comparisons with the same structure.
- The bundled-community feature as a reminder that community is table stakes now — but see the caveat.

**Avoid:** 5% transaction fees on the Starter plan on top of card fees, and they removed their free plan. More importantly, do not copy the 'bundle a community into every course' instinct: a Discord/forum community requires critical mass and constant moderation, and it will be dead and embarrassing at three teachers' worth of students. In Ecuador the community already exists on WhatsApp — use a WhatsApp group per cohort instead of building or renting a forum.

**Open first:** https://www.podia.com/articles/teachable-vs-thinkific — for the comparison-page template and the honest fee breakdown

#### Kajabi  <sub>[OK]</sub>

https://kajabi.com/

*The premium end of course SaaS — $89–$399/mo, no transaction fees, raised prices in January 2026 for the first time in a decade.*

**Why it matters here:** Mostly a negative benchmark on cost, but its funnel/landing-page builder encodes a well-tested sales-page structure that matches what the independent creators do by hand.

**Steal this:**
- Their standard sales-page skeleton (hero → problem → solution → curriculum → instructor → testimonials → guarantee → FAQ → final CTA) as independent confirmation of the Josh Comeau ordering — two very different sources converging on the same section order is strong evidence it is right.
- Bundling email sequences with the product: the post-purchase and abandoned-checkout sequences are where completion is actually won. The cheapest completion intervention Karel can ship is a scheduled 'you haven't been back in 5 days, your next lesson is X' message — in Ecuador, as WhatsApp.
- No transaction fees at any tier — worth knowing as the counter-argument if Karel ever does evaluate SaaS at higher volume.

**Avoid:** $89–$399/mo is unjustifiable at bootstrap scale, and the January 2026 increase shows the platform-risk problem: your cost base can move without your consent while your students' access sits inside someone else's system. Kajabi also strongly encourages high-ticket US-style funnels — countdown scarcity, upsell chains, webinar pitches — which are culturally mismatched for parents buying children's speech therapy in Ecuador and will damage a small local reputation.

**Open first:** https://kajabi.com/pricing — for the tier structure and the fee comparison

#### Circle  <sub>[OK]</sub>

https://circle.so/

*Community-first platform ($89–$199/mo, 2%→0.5% transaction fees) that added courses, gamification and native mobile apps.*

**Why it matters here:** Represents the community-led model, and its branded-app tier is a useful reference point for why Karel should not attempt a native app.

**Steal this:**
- Ordering the product community-first and courses-second — for the parent audience in the therapy vertical, peer support between parents is plausibly worth more than the lessons, and it is the retention mechanism Karel can offer that Duolingo and Coursera structurally cannot.
- Activity scores per member (on Business+) as an at-risk signal: a simple per-student engagement score lets Karel's three teachers see who has gone quiet and message them personally. At small scale, a teacher sending a personal WhatsApp beats any automated nudge, and the score is just a query.
- Automated transcriptions bundled at the higher tiers — confirming that transcripts are now an expected feature, not a luxury. Karel gets them cheaply via Whisper at authoring time.
- A 30-day 100% money-back guarantee on the platform itself, mirroring what the course creators offer their students.

**Avoid:** The branded iOS/Android app tier is the trap to note and skip: a native app is months of work plus app-store review, and it is unnecessary when a well-built mobile web app on Astro serves 360px perfectly and installs as a PWA. Also, $89–$199/mo plus transaction fees, and the same platform-risk problem as the others — plus a community product is only as good as its population, and a new school will not have one.

**Open first:** https://circle.so/pricing — tier features, transaction fees and where gamification/activity scores sit

#### Maven  <sub>[OK]</sub>

https://maven.com/

*Cohort-based course marketplace taking a 10% platform fee, with courses typically priced $500–$3,000 per cohort.*

**Why it matters here:** Maven is the strongest evidence in this entire benchmark for the single highest-impact decision Karel can make about completion — and it costs nothing to implement.

**Steal this:**
- The cohort format itself, which is the real answer to the sub-15% completion problem: self-paced MOOCs run 3–15% completion, while cohort-based courses with a fixed start date and a group moving together reach roughly 72%. A start date, a WhatsApp group and a weekly live session is free, requires no software, and beats every badge, streak and certificate combined. With three real teachers ready to teach, this is Karel's structural advantage over any recorded-video competitor.
- Course cards that lead with duration and start date ('4 weeks', a specific start date) rather than with price or video-hour count. A date creates urgency honestly — unlike a fake countdown timer — and it is the natural CTA for a live cohort.
- The 10% take rate as the benchmark for what Karel should offer his three teachers. Knowing that the market-leading cohort platform keeps 10% and gives instructors 90% is exactly the number to negotiate against when structuring revenue share.
- Instructor credentials as the headline on every card ('Ex-Airbnb, GitHub', 'AI Product Lead at Google'). Karel's analogue is licence and institution for the speech therapist, and conservatory or performance credits for the music teacher.

**Avoid:** The $500–$3,000 price point and the professional-upskilling positioning do not transfer to Ecuadorian consumer pricing in USD. Also do not put Karel's courses on a marketplace: the whole point of building the site is to own the customer relationship, the pricing and the payment methods. Take the cohort format, not the platform. Note too that live cohorts do not scale past the three teachers' calendar time — so pair each live cohort with a self-paced recording of it, sold cheaper.

**Open first:** https://maven.com/ — study the course-card format (duration + start date + instructor credential), then https://help.maven.com/en/articles/6732396-pricing-your-course

#### Gumroad  <sub>[OK]</sub>

https://gumroad.com/

*Creator checkout and digital-product storefront, notable here for having native purchasing-power-parity as a built-in toggle.*

**Why it matters here:** Karel explicitly needs a checkout, and Gumroad is the only mainstream one with PPP built in — its exact implementation is the reference for how to build the same thing himself.

**Steal this:**
- The native PPP toggle spec, which is the cleanest off-the-shelf model to copy: discounts range from 20% to 60%, are sourced from World Bank data, refresh weekly, and apply automatically at checkout based on detected location. Creators can cap the maximum discount and exclude specific products. Copy the shape — a bounded automatic discount with a creator-set ceiling and a product exclusion list.
- The two embed modes and their trade-off: an overlay popup that keeps the buyer on your own page versus a redirect to a hosted checkout that loses them. Always take the overlay/embedded option — on a flaky Ecuadorian mobile connection, every extra full-page navigation between 'buy' and 'paid' is a measurable drop-off.
- The documented alternative to automatic PPP — explicit per-region offer codes — which is precisely what Wes Bos does and what Karel should do: shareable, controllable per-region percentages, and no reliance on IP geolocation being right.
- Selling small digital products (PDFs, packs, samples) through the same checkout as courses, so one integration covers the whole catalogue.

**Avoid:** Gumroad's PPP is coarse — creators cannot set per-region percentages, it is location-detected rather than a shareable code, and it is defeated by VPNs. Two harder blockers for Ecuador: Gumroad's checkout will not give Karel diferido/instalments through Ecuadorian acquirers, nor bank transfer or cash deposit, which is where a large share of his addressable buyers actually are. And the documented limitation that a product with multiple prices cannot pre-select which price the popup opens with (the official workaround is duplicating products per tier) makes tiered pricing awkward. Use Gumroad as a design reference and a possible fallback for international buyers, but plan for a local gateway — PayPhone, Kushki, Datafast, Paymentez or De Una (Banco Pichincha) — as the primary path, since those support pagos diferidos.

**Open first:** https://gumroad.com/help/article/327-purchasing-power-parity — the PPP settings spec; then https://gumroad.com/help/article/44-build-gumroad-into-your-website for overlay vs inline embed

#### PPP API / purchasing-power-parity.com (Robin Wieruch)  <sub>[OK]</sub>

https://purchasing-power-parity.com/

*The free, no-key PPP conversion-factor API that most open-source parity-pricing libraries are built on — and it does not have Ecuador.*

**Why it matters here:** This is the concrete implementation detail behind every PPP feature in this report, and I found a blocking gap that would otherwise cost Karel a day of debugging.

**Steal this:**
- The API contract, which is as simple as it gets and free with no key: GET https://ppp-api.fly.dev/?target={ISO-3166-1 alpha-2}, returning JSON with countryCodeIsoAlpha2/3, currency info, exchangeRate, ppp and pppConversionFactor. One fetch at build time, cached — no service, no subscription, no vendor.
- The verified conversion factors for Karel's region, which I pulled directly and which are the numbers to hardcode: Peru 0.50, Brazil 0.52, Mexico 0.59, Colombia 0.41, Panama 0.43, Argentina 0.23, India 0.29, US 1.0. Ecuador sits with Peru and Brazil at roughly 0.50 — which is why Wes Bos's independently-chosen 52% Ecuador discount lands exactly there, and is strong corroboration for using ~0.50 as the factor.
- The MIT-licensed reference implementation and country table, which Karel can fork rather than write, then patch with the missing countries.
- Using the factor in reverse: since Karel prices natively for Ecuador (~0.50), the same table tells him what to charge a buyer in the US (2x), Spain or Mexico — a reverse-PPP 'global price' that is pure upside from the Ecuadorian diaspora, a real and large market.

**Avoid:** The blocking gap, which I verified directly: GET ?target=EC returns HTTP 404 with an empty body, as does SV (El Salvador). Both are fully dollarized economies with no local currency, so they have no exchange rate for the API's model to key on — and Panama only works because the balboa exists as a nominal 1:1 peg. Any drop-in PPP library built on this API will therefore silently fail to offer Ecuador a discount, or crash on the empty response. Karel must hardcode Ecuador (~0.50) and handle 404s as 'no adjustment' rather than trusting the library. The deeper point: PPP here is an inbound mechanic for US-priced products, so for a school pricing natively in Ecuador it is mostly the wrong tool — apply it in reverse or not at all.

**Open first:** https://ppp-api.fly.dev/?target=PE — then try ?target=EC and see the 404 for yourself

#### ParityDeals  <sub>[OK]</sub>

https://www.paritydeals.com/

*Hosted purchasing-power-parity and localised-pricing service ('135+ currencies', ~5-minute setup, works with any payment provider), with a Gumroad integration.*

**Why it matters here:** The buy-versus-build reference point for regional pricing — and looking at it clarifies that Karel should build, not buy.

**Steal this:**
- The 'works with any payment provider' architecture: a script that detects location and applies a discount/coupon at display time, deliberately decoupled from the payment processor. That decoupling is what lets Karel keep a local Ecuadorian gateway while still doing regional pricing — copy the pattern, not the product.
- Their integration pages (paritydeals.com/integrations/gumroad and similar) as a clear, short specification of the geo-detect → coupon → checkout flow, which is exactly the flow to reimplement in an Astro middleware or a Cloudflare Worker using the CF-IPCountry header.
- Framing localisation as conversion upside rather than as charity ('boost conversions, grow sales, unlock global revenue') — the right internal framing for a reverse-PPP global price.
- The reminder that Cloudflare gives Karel the geolocation half of this for free: request.cf.country / the CF-IPCountry header on Cloudflare Pages/Workers means the entire detection layer is zero cost and zero dependency.

**Avoid:** Paying a monthly SaaS fee for what is, in Karel's case, roughly twenty lines of code — a country lookup from a header plus a coupon code — is not defensible on a bootstrap budget. Their site also gives no Ecuador-specific guidance and, like every PPP vendor, is built around the assumption that you are a US/EU seller discounting outward, which is the inverse of Karel's position. And note the fundamental limitation of all IP-based approaches, including this one: VPNs defeat them, which is exactly why Wes Bos's honour-system coupon ('if you need it') is more robust than an automatic price change.

**Open first:** https://www.paritydeals.com/integrations/gumroad — the clearest description of the geo → coupon → checkout flow to reimplement

---

## Children's speech & learning therapy sold to parents (YMYL / high-trust health-adjacent), plus Spanish-language and Ecuadorian equivalents

The conversion mechanic in this vertical is not a pricing page or a course catalogue — it is a free, age-tailored screening quiz that ends in "an evaluation is recommended," never "your child has a disorder." I walked Expressable's screener end-to-end in a real browser: 3 setup questions, 11 behavioural questions with everyday examples, one question per screen, and full results shown with NO email gate — the email is asked only afterwards, to download a PDF of results you have already seen. That inversion (deliver value, then ask) is the single most copyable thing in this research. Trust in the first 10 seconds is bought with faces and letters after names, not with platform branding: every serious operator puts a photographed, named, licensed therapist forward (Expressable ships 430 individual therapist profile pages; Colombia's Fonoeduka is one named "Fonoaudióloga Colegiada" with 15 years of experience and a WhatsApp button). YMYL safety is achieved through a consistent grammar — screeners "recommend an evaluation," products are "an educational program… neither a medical treatment nor a means to establish a medical diagnosis" (Forbrain), apps "supplement, not replace, professional speech therapy" (Speech Blubs), and outcome claims carry n, date range and p-value (Expressable: 96% progress within 5 sessions, n=13,336). The Spanish-language market is structurally different from the US one: no insurance theatre, prices almost universally hidden, and WhatsApp as the actual booking primitive — CECIT in Quito's CTA is literally "📲 Agendar Terapia Online por WhatsApp." Ecuador specifically is wide open: of the practices ranking for "terapia de lenguaje Quito," one top result (terapiadelenguajeenquito.com) is a dead parked page, Cenna lists therapists as "Lic. Sara Caiza" with no photo and a landline, and most Guayaquil practices are Instagram-only — nobody is running a screener, publishing outcomes, or showing a price. Finally, watch the regulatory line: ACESS requires a permiso de funcionamiento for health establishments including speech-therapy consultorios, with a título registered in SENESCYT, so how Karel frames the vertical (clinical therapy vs. educational support) is a legal decision, not a copywriting one.

> **Top pick.** Expressable — and specifically its free self-screener at app.expressable.com/screener, which I completed end-to-end. It is the most complete, most transferable artefact in this entire vertical: an 11-question, age-branched, plain-language quiz that produces a real per-answer result page, hedges every clinical claim correctly, and only asks for an email AFTER showing the parent everything. Around it sits the rest of the playbook Karel needs — 430 named therapist profile pages with a "Here's what you can expect" section and a hobbies block, a public /outcomes page with sample sizes and p-values, a dedicated /objections-speech-therapy page, and a 2-minute cost estimator with consent language under the button. It is a US insurance business so the money layer is useless to Ecuador, but the trust layer, the screener, and the parent-as-co-therapist framing transfer almost line for line.

### Sites (22)

#### Expressable  <sub>[OK]</sub>

https://www.expressable.com

*US online paediatric speech therapy with licensed SLPs, insurance-billed, built around a free clinical screener and a parent-coaching model.*

**Why it matters here:** It is the fully-built version of exactly what Karel is assembling: parent as buyer, child as user, licensed therapist as the product, and a free quiz as the top of funnel. I completed its screener in a real browser and can hand over the mechanic step by step.

**Steal this:**
- The screener at app.expressable.com/screener: 'Who is in need of support?' (My Child / Myself / Another Adult) → child's DOB → 11 age-branched behavioural questions, ONE per screen, 2-3 huge tap targets, answers limited to Always/Sometimes/Never or Yes/No. The progress bar starts at 27%, not 0% — endowed progress. On mobile the desktop CTA is `hidden md:flex` and a separate mobile button is rendered; they built two CTAs rather than one responsive compromise.
- Results are shown with NO email gate. The full page renders: verdict → a 5-row 'Clinical Areas / Your Results' table (Language, Feeding & Swallowing, Articulation, Voice & Resonance, Fluency) with amber SUPPORT NEEDED badges → 'Book your evaluation' → an accordion that mirrors the parent's own answers back ('You noted that you sometimes tells short stories…') → FAQ → and only at the very bottom a purple 'Download your screener results! / Get your results' email capture. Copy this ordering exactly.
- Question microcopy: every question carries a concrete domestic example ('For example, "Take off your shoes, put them in the closet, then put your jacket away."') and every unavoidable clinical term is defined inline ('Aspiration is defined as food/liquid entering the airway or lungs. Signs during/after meals include: coughing/choking, watery/red eyes, wet/gurgly vocal quality…'). Every setup question explains why it is asked: 'This will be used to ask more relevant questions about your child's age and give the most accurate recommendation.'
- The YMYL escape hatch, verbatim from the results FAQ: 'The screener you just completed helps you understand if an evaluation is recommended. The only way to truly know whether you'd benefit from speech therapy is with an evaluation.' The verdict headline is 'Based on your answers, a speech and language evaluation is recommended' and the subhead is 'you may benefit from support from a speech-language pathologist' — recommended, may, never a diagnosis.
- /therapists (430 URLs in sitemap-therapists.xml) with filters 'Select your state', 'Who needs services', insurance and needs. Profile heading order: Name → 'Here's what you can expect' → 'Therapist details and specialties' → 'Education and training' → 'Other interests' → 'Book with [Name]' → 'Discover similar providers'. Credential line is 'Licensed Speech-Language Pathologist (M.A., CCC-SLP)'; licensed states, insurance count, languages and a hobbies paragraph humanise them. /outcomes publishes '96% of patients progress toward goals within 5 sessions (n=13,336, Jan 2023–Oct 2025)' plus CELF-5/REEL-4/GFTA-3 gains with n and p<.001, and discloses methodology ('de-identified, aggregate data from patients who completed at least 8 therapy sessions').

**Avoid:** The entire money layer is US insurance theatre — 'Most pay on average $0-$21 per visit', 250+ insurance plan logos, a Member-ID cost estimator, HSA/FSA — and none of it exists in Ecuador. Do not import the insurance-first framing; it will read as noise or as a lie. Also note two real defects to avoid: their results page has a pronoun bug ('You noted that you sometimes follows 3- to 4-step directions' — a third-person template rendered in second person), which is exactly the failure mode you will hit doing es-EC tú/usted templating; and their Spanish page (/for-kids-and-families-or-expressable-speech-therapy-spanish) is a half-translation with an English footer and no mention of Spanish-speaking therapists. Their Notice of Privacy Practices opens in ALL CAPS legalese with no plain-language summary and no section on minors or guardian consent — the weakest part of the whole site, and the part Karel most needs to do better. Their accessibility statement claims only 'partially conformant with WCAG 2.0 level AA'.

**Open first:** https://app.expressable.com/screener

#### CECIT Centro Terapéutico (Quito, Ecuador)  <sub>[OK]</sub>

https://cecit.com.ec/terapia-de-lenguaje/

*Quito/Los Valles multi-site therapy centre with the most competent Ecuadorian web presence I found, including a dedicated online-therapy page serving all of Ecuador.*

**Why it matters here:** This is Karel's actual local competitor and the only Ecuadorian site that has thought about selling virtual therapy to Ecuadorian parents. It shows precisely which conventions es-EC parents already expect — and where the ceiling currently sits, which is low enough to beat.

**Steal this:**
- The /terapia-online/ page's connectivity reassurance, which is Ecuador-specific and absent from every US site: they state the requirement plainly ('un dispositivo con cámara y micrófono (computadora, laptop, tablet o teléfono móvil) y una conexión a internet estable') and then de-risk it by guaranteeing a free reschedule if the session fails technically. On variable Ecuadorian bandwidth this is worth more than any testimonial.
- WhatsApp as the literal CTA, with the emoji in the button: '📲 Agendar Terapia Online por WhatsApp', '💬 Agendar por WhatsApp', and 'Agendar mi Sesión Virtual'. Not a floating widget — the primary conversion button IS WhatsApp. Three numbers segmented by branch (Sur 0984192304, Norte 0997978626, Valle 0987101417).
- Privacy framed as a technical property rather than a legal document: 'plataformas de videollamada cifradas de punto a punto'. For a parent this lands harder than a link to a política de privacidad.
- Anti-friction promise as a selling point: 'Coordinación rápida sin largas listas de espera' — waiting lists are the real pain in Quito, and they name it. Plus 'modalidad online para todo el Ecuador' to claim national reach from a Quito base.

**Avoid:** There are no therapist bios and no credentials anywhere — the 'Profesionales' nav link leads nowhere useful and no individual is named, photographed, or shown with a título. No prices at all. No screener, no intake questionnaire, no consent language, no accessibility work. This is precisely the gap: they have the local conventions right (WhatsApp, encryption, connectivity) and the trust layer entirely missing. Do not copy their opacity — copy their channel choices and then add faces, credentials and a screener on top.

**Open first:** https://cecit.com.ec/terapia-online/

#### Fonoeduka (Bogotá, Colombia)  <sub>[OK]</sub>

https://fonoeduka.com/

*Single-practitioner paediatric fonoaudiología practice serving Colombia plus expat families, with a WhatsApp-first funnel and a strong named-expert build.*

**Why it matters here:** This is the Spanish-language, bootstrap-budget, WhatsApp-native model executed well — and it is closer to Karel's three-teacher reality than any US platform. It proves you can win trust in this vertical with one named professional rather than a 250-therapist marketplace.

**Steal this:**
- The named-expert hero: Luz Ángela Camacho Urrego, 'Fonoaudióloga Infantil y Especialista en Aprendizaje', with 'Fonoaudióloga Colegiada' as a badge, 'Especialista en Neurodesarrollo y Aprendizaje', '+15 años de exp.' and 'Magíster en Dificultades del Aprendizaje'. The Spanish credential grammar to mirror in Ecuador is colegiada/registro + specialisation + years + postgrado — the direct analogue of 'M.A., CCC-SLP'.
- The CTA writes the action AND the person: '💬 Hablar con la Fonoaudióloga' rather than 'Contact us'. A parent knows exactly who is on the other end of the message. It links straight to WhatsApp (310 318 4233).
- Age-band navigation as the primary information architecture — separate sections for 0-3, 4-10 and adolescentes/universitarios. Parents self-select by their child's age, not by a disorder name they may not know yet. Karel should use this for the terapia de lenguaje vertical instead of a diagnosis-first menu.
- Embedded Google Maps reviews with 5-star ratings rather than hand-typed testimonials — third-party-verifiable social proof, free, and the format Latin American parents already trust.
- Hero subhead sells the outcome, not the method: 'Transformamos las barreras de comunicación en seguridad y éxito escolar' — school success is the parent's real goal.

**Avoid:** No prices anywhere and no free screening tool — every cost question is pushed into WhatsApp, which throttles the funnel to human availability and will not scale to three teachers plus a platform. There is no online booking, no intake form, no privacy/consent language, and no diagnostic-limitation disclaimer. Karel should keep the named-expert framing and the WhatsApp channel but add an asynchronous screener and at least a starting price so parents can self-qualify at 11pm.

**Open first:** https://fonoeduka.com/

#### Better Speech  <sub>[OK]</sub>

https://www.betterspeech.com/

*US online speech therapy sold as a weekly subscription with an anchored price comparison and a free 15-minute evaluation as the entry point.*

**Why it matters here:** It is the clearest example of pricing something parents perceive as healthcare as a subscription instead of per-session — the exact decision Karel faces, since Ecuador has no insurance layer to hide behind.

**Steal this:**
- The price anchor as a two-column comparison: '$79.95 /week' (billed '$319.80 every 4 weeks', including '4 weekly one-on-one sessions with a licensed Speech Therapist') set directly against 'In-Person Therapy $225 /session'. The subscription is never defended on its own — it is always shown next to the alternative the parent already knows.
- The trust badge triplet immediately under the hero: CCC-SLP accreditation mark + HIPAA logo + '256-bit SSL Secure'. One professional badge, one regulatory badge, one technical badge. Karel's es-EC equivalent would be registro/senescyt + a data-protection statement + encryption.
- 'Get Free Evaluation' as the single primary CTA everywhere, backed by a concrete, bounded promise elsewhere on the site: 'Book your 15-min free consultation'. Naming the duration removes the fear of an open-ended sales call.
- Explicit financial-aid path stated as a value: 'our own Financial Aid so anyone who needs speech therapy can get it', with an application. In Ecuador this maps to a becas/plan diferido line, and it is more credible than a discount.

**Avoid:** 'Voted Best Online Speech Therapy' is an unattributed superlative and exactly the kind of claim that fails Google's YMYL scrutiny and Ecuadorian consumer-protection norms — never write its Spanish equivalent. Their free evaluation carries no disclaimer that it is not a diagnosis, which is a liability gap, not a model. The site also leans on '250+ Licensed and Experienced Therapists' in a faceless carousel rather than deep individual profiles, so the platform ends up feeling like the expert instead of the therapist.

**Open first:** https://www.betterspeech.com/pricing

#### Understood.org (Spanish edition)  <sub>[OK]</sub>

https://www.understood.org/es

*Non-profit resource hub for parents of neurodivergent and learning-different children, with a genuine Spanish edition and expert-reviewed content.*

**Why it matters here:** It is the reference implementation for writing about children's learning difficulties in Spanish without making medical claims — the exact editorial problem Karel's terapia de lenguaje content will hit on every page.

**Steal this:**
- The disclaimer to translate and adapt almost verbatim: 'Understood no proporciona asesoramiento médico ni profesional… no sustituyen a un diagnóstico profesional.' Put this in the footer of every therapy-vertical page and inside the screener result.
- Expert bylines with full academic credentials attached to the article, e.g. 'Claudia Rinaldi (PhD), Catedrática Joan Weiler Arnow '49, presidenta del programa educativo, Lasell University'. Author-level E-E-A-T, not org-level — cheap to implement and directly what Google rewards in YMYL.
- Honest partial-translation labelling: 'Esta actividad sólo está disponible en inglés' shown inline rather than silently serving English. With three teachers authoring, Karel will have partial coverage too; label it instead of hiding it.
- Information architecture organised by the parent's lived problem, not by diagnosis: 'Entender la neurodivergencia' / 'Escuela y aprendizaje' / 'Vida diaria', with the 'Take N.O.T.E.' observation tool for parents who suspect something but have no label yet. Warm, non-clinical register throughout — 'Todos merecemos ser comprendidos'.

**Avoid:** It is a large US non-profit with foundation funding, so its content volume, video series, podcasts and app suite are not a realistic target for a bootstrap build — do not treat its breadth as the benchmark. Its Spanish is neutral/pan-Hispanic and US-school-centric (IEPs, 504 plans, parent-teacher conferences), none of which exists in Ecuador; the vocabulary and the school-system references need genuine es-EC localisation, not a copy-paste.

**Open first:** https://www.understood.org/es

#### Cerebros en Acción  <sub>[OK]</sub>

https://www.cerebrosenaccion.com/pages/terapia-lenguaje-online

*Spanish-language online fonoaudiología for children 0-12, aimed partly at bilingual and expat Latin American families, with a free language-development quiz.*

**Why it matters here:** It is the closest existing thing to what Karel is building: Spanish-language, online, child-focused, with a free quiz and a companion practice app — and it is running on Shopify with a WhatsApp close, which is a bootstrap architecture he can actually match.

**Steal this:**
- The free 'Quiz Desarrollo de Lenguaje' as the qualifying step before any human contact — the Spanish-language equivalent of Expressable's screener, and proof the mechanic works in this market.
- Their 4-step 'how it works' told in the parent's sequence: (1) assignment of a specialised fonoaudióloga, (2) personalised plan with interactive online sessions, (3) home practice via their CerebrosCare app and CerebrosTV videos, (4) weekly progress tracking. Note step 3 — between-session home practice is presented as part of the product, not homework.
- Hero copy that names the parent's two real fears at once — that the child won't engage, and that they'll be left alone: 'Terapias de Fonoaudiología en línea que capturan la atención de tu hijo y fomentan un rápido avance, con tu apoyo en cada paso.'
- A named team page with six professionals including the founder (Natalia Sánchez, fonoaudióloga) and OTs certified in sensory integration — small enough to be honest, specific enough to be credible. Karel's three teachers can be presented the same way.
- The positioning angle for bilingual/heritage families abroad ('fortaleciendo vínculos familiares y la herencia lingüística') — a real, underserved segment reachable from Ecuador in USD.

**Avoid:** Despite running on Shopify they do not sell sessions through checkout — everything funnels to '🌟 Contáctanos por WhatsApp🌟' and no price is ever shown. That is a wasted commerce layer and the single biggest thing Karel should do differently: if you already have a store, let a parent buy a first session at 11pm. There is also no visible diagnostic-limitation disclaimer and no consent language around the quiz, which collects child developmental data.

**Open first:** https://www.cerebrosenaccion.com/pages/terapia-lenguaje-online

#### Speech Blubs  <sub>[OK]</sub>

https://speechblubs.com/

*Subscription iOS/Android speech-practice app for young children built around video modelling by peer children, positioned as a supplement to therapy.*

**Why it matters here:** It is the clearest study of a two-audience product where the child UI and the parent UI are genuinely different things, and of how a consumer app stays legally safe while selling to worried parents.

**Steal this:**
- The disclaimer that lets a non-clinical product sell into a clinical worry, verbatim: 'Speech Blubs is designed to supplement, not replace, professional speech therapy. For children with speech disorders or delays, we recommend consulting with a speech-language pathologist.' If Karel's self-serve practice content sits alongside real therapy, this sentence is the boundary between them.
- Borrowed authority phrased as process, not endorsement: 'made with the help of our network of 1000+ speech therapists (SLPs)'. It claims clinical input without claiming clinical outcomes.
- The child-facing mechanic worth stealing outright: children watch OTHER CHILDREN as 'teachers and role models' and imitate them, plus face-filter role-play where the child becomes the word being practised. Peer video modelling beats an adult instructor for this age group and costs nothing but filming — Karel's three teachers could record child-led clips.
- Parent-side account structure kept deliberately boring and separate: multiple child profiles under one subscription, progress listening, billing control. The child never sees it.

**Avoid:** 'The #1 Speech Therapy App for Kids' is an unsubstantiated superlative sitting directly above a therapy disclaimer — the tension between those two lines is the exact thing that gets a YMYL page demoted, and it would be a worse problem under Ecuadorian health-advertising rules. Pricing is hidden entirely behind app-store paywalls (I could not surface figures from the site or the pricing path), and there is no visible COPPA or children's-data statement on the marketing site despite the product being aimed at toddlers. Do not copy the opacity on either price or child-data handling.

**Open first:** https://speechblubs.com/

#### Great Speech  <sub>[OK]</sub>

https://www.greatspeech.com/

*US virtual speech therapy for all ages, sold through a free introductory call and a human matching step rather than a self-serve signup.*

**Why it matters here:** Its funnel is a consultation-first funnel, not a checkout-first one — which is the shape Karel will realistically start with while he has three teachers and no scheduling engine.

**Steal this:**
- The three-step funnel stated as a promise the parent can picture: (1) 'Schedule an Introductory Call' — a free, no-commitment fit conversation with a team member, not a therapist; (2) 'Get Matched with Your Therapist'; (3) 'Attend Your First Session' where goals are defined. Separating the sales conversation from the clinical one protects the therapist's time and the parent's trust.
- Full credential strings shown on therapist cards including state-specific licensure, e.g. 'M.S. Ed., CCC-SLP, TSSLD', each paired with named specialisms (fluency, articulation, aphasia, dyslexia, stroke rehab). Specificity of specialism is what makes 'matching' believable.
- 'The Experts in Virtual Speech Therapy For All Ages' — the headline claims expertise in the DELIVERY MODE, which is the parent's actual doubt about online therapy, rather than claiming clinical superiority they cannot prove.
- A linked Accessibility Statement in the footer as a standing signal of care for a disability-adjacent audience.

**Avoid:** 'Clients with insurance pay an average of $18 per session' is the only number on the site, and it is meaningless without insurance — a parent with no coverage learns nothing about cost and has to book a call to find out. That opacity is a US-insurance artefact; in Ecuador it just reads as evasion. There is no free screener and no self-serve path at all, so every lead consumes staff time.

**Open first:** https://www.greatspeech.com/

#### Binaural / Fonoaudiólogo Online (Chile)  <sub>[OK]</sub>

https://www.fonoaudiologo.online/

*Chilean Spanish-language marketplace connecting families to certified fonoaudiólogos, with real online booking and payment.*

**Why it matters here:** It is the only Spanish-language operator I found that actually closes the loop — browse professional, pick a slot, pay online — and it uses a payment processor that works in Ecuador.

**Steal this:**
- Kushki as the payment rail alongside PayPal. Kushki is LatAm-native, supports local card and alternative methods, and is one of the few realistic options for a USD, Ecuador-based, low-volume operation — this is a concrete vendor lead, not a design idea.
- Hero that names the deliverable and removes the obstacle in one line: 'Reserva un Diagnóstico Profesional, sin salir de casa'. The product sold is a professional assessment, and the objection answered is travel.
- Commercial structure adapted to a health service: a discounted 'Precio Especial' for the initial diagnostic assessment, then monthly session packages at a discount, plus a reduced rate for public-health (Fonasa) affiliates. Karel's analogue: a cheap first evaluation, a monthly paquete, and a reduced tier — the loss-leader-evaluation pattern is the right one for a service parents commit to over months.
- A 24/7 WhatsApp assistant ('MJ') handling pre-sales questions, so the booking page never dead-ends at an unanswered doubt.

**Avoid:** Booking and payment live on a separate subdomain (binaural.bitel.cl) on third-party software, so the brand hands the parent off mid-funnel at the highest-anxiety moment — avoid that seam if you can keep scheduling on your own domain. Credentials are asserted generically ('especialistas certificados') with no registro numbers on the marketing site, and there is no free first session or screener. Pricing is in Chilean pesos and the Fonasa framing has no Ecuadorian equivalent.

**Open first:** https://www.fonoaudiologo.online/

#### Mejor Hablemos  <sub>[OK]</sub>

https://mejorhablemos.us/mejor-hablemos-ninos

*Spanish-language teletherapy for Latin American families covering children, adolescents, parents and whole families, priced in USD.*

**Why it matters here:** USD pricing, Spanish language, LatAm audience and an explicit parent-support product line — the closest commercial analogue to Karel's target customer, and proof that the parent is a billable user in their own right.

**Steal this:**
- The service split that treats the parent as a client, not just a payer: 'Niños y adolescentes' / 'Padres y madres' (parental guidance) / 'Familiar' / 'Individual'. Selling orientación a padres alongside the child's therapy is an obvious second revenue line for a speech/learning vertical and nobody in Ecuador is doing it.
- The three-step booking told from the family's point of view: 'Elige un especialista' → 'Reserva el turno' (described as 'rápido, fácil y 100% online') → 'Se conecta desde casa'. Three verbs, no jargon, no account creation mentioned.
- Credential phrasing tuned for LatAm: 'Psicólogos certificados y matriculados, con formación específica en niñez y adolescencia' — matriculados is the word that signals a real professional register in Spanish, and specialisation in childhood is stated rather than implied.
- Warm, outcome-led hero for a parent audience: 'Acompañamos a tus hijos a crecer mejor' — accompaniment, not treatment. Plus '100% confidencial y seguro' as a standing footer reassurance.
- Per-session pricing without lock-in, in the $60-100 USD range, sold explicitly as 'sin abono mensual ni compromisos' — a useful counter-model to Better Speech's subscription for a market with low card penetration.

**Avoid:** No licence numbers or country-of-registration are shown anywhere, which matters enormously for a cross-border LatAm service where a psychologist matriculado in Argentina may not be able to practise in Ecuador — Karel must be explicit about where his professionals are registered. Prices are not on the page I verified (they surface in search snippets, not in the hero), there is no free first consultation, and the privacy handling is a '/privacidad' link with no consent flow around minors' data.

**Open first:** https://mejorhablemos.us/mejor-hablemos-ninos

#### Forbrain  <sub>[OK]</sub>

https://www.forbrain.com/

*Bone-conduction headset sold to parents of children with speech and attention difficulties, marketed on science without claiming to be a medical device.*

**Why it matters here:** It is the sharpest available lesson in how to sell into a clinical worry while explicitly disclaiming clinical status — the precise tightrope Karel walks if he sells 'terapia de lenguaje' as an online course.

**Steal this:**
- The disclaimer that defines the whole legal posture, verbatim: 'Forbrain is an educational program, and is considered neither a medical treatment nor a means to establish a medical diagnosis. The content on this website is for informational purposes only and should not be considered as a substitute for medical advice.' If Karel's therapy vertical is framed as educación/apoyo rather than clinical intervention, this is the sentence that must appear — and the product must then genuinely match it.
- 'Scientifically Proven Benefits' rather than 'clinically proven' — a deliberate one-word downgrade that shifts the claim from medicine to research. Cite the study, describe the mechanism, never name a condition you treat.
- A concrete cited study with its design stated in the open (n=80, randomised into experimental and control groups of 40, Montreal Cognitive Assessment over 10 weeks) rather than a vague 'backed by research' badge.
- A '30-Day Money-Back Guarantee' used as a trust device: for a parent spending on an uncertain intervention, reversibility substitutes for proof.

**Avoid:** The disclaimer sits at the very bottom of the page while the benefit claims sit at the top — legally defensible, ethically thin, and the wrong placement for a product aimed at vulnerable families. Put the boundary statement where the claim is made. Their testimonials (a medical student, a parent, a cellist) carry no verifiable credentials, and the single cited study is on adults with cognitive dysfunction, not children with speech delay — the evidence does not actually match the audience being sold to. Do not import that mismatch.

**Open first:** https://www.forbrain.com/

#### NAPA Center  <sub>[OK]</sub>

https://www.napacenter.org/

*Intensive paediatric therapy centres (OT/PT/speech) selling multi-week burst programmes to families who often travel to attend.*

**Why it matters here:** Its intake is a deliberate multi-stage qualification for a high-commitment, high-cost programme — the model to study if Karel sells intensive multi-week terapia blocks rather than drop-in sessions.

**Steal this:**
- The optional 'discovery session' placed BEFORE formal intake, framed explicitly as no-pressure and about fit — 'to make sure NAPA is the right fit'. Giving the parent a licensed exit ramp before they commit raises conversion on the ones who stay.
- The three-stage intake ladder: (1) a short website Interest Form, (2) a thorough intake questionnaire covering the child's history and goals, (3) login to the client portal. Progressive disclosure — the long clinical questionnaire only appears after the parent has already said yes once.
- The client portal has a child-friendly product name ('Ocean Friends') rather than 'patient portal'. Naming the admin surface something warm is a cheap, effective softening for a parent who is already anxious.
- Outcome language kept aspirational and unfalsifiable in the right way — 'reach their full potential', individualised programmes — while the founder's line does the emotional work: 'Your child is unique with very specific needs. NAPA embraces these differences with an understanding that individualized programs work better.'

**Avoid:** There is essentially no credential detail on the homepage — staff are described as 'Highly Trained and Highly Caffeinated Therapists' with no degrees, certifications or licences shown, and one of their impact metrics renders with the number missing ('% of NAPA Families Use Insurance Toward Their Care'). Cute copy in place of credentials is the wrong trade in this vertical. No pricing transparency at all for a programme that runs to thousands of dollars. The site also blocks some user agents (403), which is a real SEO and accessibility smell.

**Open first:** https://www.napacenter.org/

#### Learning Ally  <sub>[OK]</sub>

https://learningally.org/

*US non-profit providing human-narrated audiobooks to students with dyslexia, other language-based learning differences, and blindness or low vision.*

**Why it matters here:** Best example in the set of pricing an accessibility product for families who cannot all pay, and of splitting a site cleanly between a parent audience and a school audience — Karel will need both when schools start asking.

**Steal this:**
- The hero reframe that removes shame from the parent's decision: 'Every child is a reader. Some just need a different path.' It rejects the deficit framing without denying the difficulty — the exact register for a Spanish-language dificultades de aprendizaje page.
- Transparent, low, cancellable pricing with an explicit affordability escape: '$135/year… Billed $135/year. Cancel anytime', under the heading 'Cost shouldn't be a barrier', with a 'Request a fee waiver' route and multiple qualification paths (school, IEP/504, household income, ESA funds). The fee-waiver request as a first-class UI element, not a hidden email, is the piece to copy for Ecuador.
- The two-door homepage split stated in the parent's words: 'Families & Individuals — Resources and support for parents and caregivers…' vs 'Schools & Districts — Proven solution to improve literacy outcomes…'. One page, two funnels, no confusion.
- The accessibility feature list written as concrete affordances rather than compliance claims: 'human-read audio, highlighting, vocabulary, notes' — human narration specifically, because synthetic speech fails these readers.

**Avoid:** Impact claims on the homepage are volume metrics and testimonials ('2.6M+ Students served', 'Learning Ally changed how my son sees himself as a reader') with no efficacy research surfaced, despite the organisation having research to point at — a missed E-E-A-T opportunity, and the opposite of what Expressable's /outcomes page does. Pricing is also buried away from the homepage. Their funding model (non-profit, donors, US school contracts, ESA vouchers) does not transfer at all.

**Open first:** https://learningally.org/Solutions-for-Home/Pricing

#### Nessy  <sub>[OK]</sub>

https://nessy.com/en-gb/

*UK dyslexia-focused structured-literacy games and phonics programmes, sold to both homes and schools at a very low annual price.*

**Why it matters here:** It shows a child-facing game product and a parent/teacher product living on one domain, and it prices a learning-difficulty intervention at a level a bootstrap market can bear.

**Steal this:**
- Radically low, transparent entry pricing — 'From £10.50 a year' — with a free trial, for a category that elsewhere costs hundreds. In a market with low card penetration, a price a parent can approve without a family discussion is a strategic choice, not a discount.
- Separate portals with separate front doors: 'Log in to learn' (students.nessy.com) for the child and 'My account' for the adult. Two subdomains, two mental models, no shared dashboard trying to serve both.
- Products explicitly labelled 'for home' versus the school offer, with the home versions named for what the child does ('Hairy Reading', 'Nessy Reading and Spelling', 'Number Sense') rather than for the deficit being remediated.
- Anchoring the whole catalogue to a recognised evidence frame — 'The Science of Reading' as a top-level CTA plus a Nessy Research section — which is how you claim rigour in a learning-difficulty product without claiming to treat anything.

**Avoid:** For a dyslexia company the marketing site itself does not surface any dyslexia-friendly reading affordances — no font choice, no line-spacing or colour-overlay control, no reading-level toggle — the accessibility lives inside the paid product only. If Karel builds for children with learning difficulties, the public site must demonstrate the same care it sells. Pricing is also in GBP and the school/inclusion framing is UK-specific.

**Open first:** https://nessy.com/en-gb/

#### Lingraphica  <sub>[OK]</sub>

https://lingraphica.com/

*AAC (augmentative and alternative communication) devices and apps for people with severe speech and language impairment, funded largely through Medicare and insurance.*

**Why it matters here:** Best example of a try-before-you-buy funnel for an expensive, intimidating intervention, and of serving a user with severe communication impairment on the marketing site itself.

**Steal this:**
- The free-trial funnel as the entire top of page, with the objection written into the CTA copy: 'The easiest way to begin with AAC? Try it for free', primary CTA 'Start a free trial', secondary 'Let's talk'. One low-commitment path and one human path, nothing else competing.
- Setting expectations before the trial starts — a 'what to expect' walkthrough plus built-in care-partner support, so the family is not left alone with an unfamiliar device. The direct analogue for Karel is a 'qué esperar en tu primera sesión' page, which Expressable notably lacks.
- Genuinely free, no-signup giveaways that build goodwill and organic reach: printable communication boards, ID cards, and free apps (TalkPath Therapy, SmallTalk). Cheap to produce, highly shareable to a WhatsApp-native audience, and they prove competence before any sale.
- Funding treated as a first-class content area rather than a footnote — 'Medicare Reimbursable' badges, a 'Device funding overview' and a dedicated funding guide. Karel's equivalent is an honest, prominent page on formas de pago: transferencia, diferido, efectivo.

**Avoid:** The www. hostname fails TLS entirely (only the apex lingraphica.com resolves) — a live reminder to verify both hostnames on your own domain. Despite serving people with severe communication impairment there is no visible text-size or contrast control on the site itself, and much of the credentialling content is aimed at SLPs earning CEUs rather than at families. The Medicare/VA funding architecture has no Ecuadorian counterpart whatsoever.

**Open first:** https://lingraphica.com/

#### Huddle Up (formerly DotCom Therapy)  <sub>[OK]</sub>

https://www.huddleupcare.com/

*Teletherapy provider that abandoned direct-to-parent sales and now contracts exclusively with K-12 school districts for IEP-related services.*

**Why it matters here:** A verified negative result: dotcomtherapy.com now 301s to huddleupcare.com and every trace of the consumer funnel is gone. It is the cautionary data point about direct-to-parent unit economics in paediatric teletherapy.

**Steal this:**
- The pivot itself is the lesson — a well-funded D2C paediatric teletherapy brand concluded that selling to institutions beat selling to parents. For Ecuador that suggests colegios and fundaciones as a parallel B2B channel worth testing early, while the parent funnel is still expensive per acquisition.
- Their B2B positioning language, if Karel ever pitches a school: 'Expanding Access to High-Quality IEP-Related Services' and 'a strategic extension of your team' — the institution is framed as retaining ownership, with the vendor as capacity.
- Supply-side trust as the headline metric: '96% provider retention rate', plus W2 employment, benefits and clinician-designed tools. In a marketplace the therapists are the scarce asset, and publishing retention signals stability to buyers. With three teachers, Karel's version is naming them and showing they stay.
- CTAs pitched at a long institutional sales cycle — 'Our Offering' and 'Schedule a Call' — with no urgency devices, which is the correct register for a B2B buyer and the wrong one for a worried parent.

**Avoid:** Do not model the parent experience on this site — there is none left. No pricing, no intake or referral detail, no family-facing language at all. Treat it as evidence about the market rather than as a design source, and note the brand-migration cost: an established domain now redirects, and all its accumulated parent-facing search equity was surrendered.

**Open first:** https://www.huddleupcare.com/

#### Ansuz Centro Psicoterapéutico (Quito, Ecuador)  <sub>[OK]</sub>

https://ansuz.ec/service/psicopedagogia-quito/

*Quito psychotherapy centre with a dedicated psicopedagogía page for learning difficulties, offering videoconference sessions.*

**Why it matters here:** The closest Ecuadorian analogue to Karel's psicopedagogía/learning-support vertical, and a direct read on the local vocabulary and expectations for that service.

**Steal this:**
- The Ecuadorian vocabulary set for this vertical, taken straight from a ranking local page: 'dificultades del aprendizaje', 'atención y rendimiento escolar', 'La Psicopedagogía permite analizar las dificultades del aprendizaje', and the CTA 'Agenda tu cita'. This is the search language es-EC parents actually use — build the page titles around it.
- The assessment described as a structured multi-dimensional evaluation (intelectual, neuropsicológica, instrumental, emocional). Naming the dimensions makes an intangible service concrete for a parent deciding whether it is worth paying for.
- Local mobile numbers exposed as tap-to-call/WhatsApp links per location (099-633-8465 Quito, 099-614-5648 Cumbayá) — location-segmented contact is the norm, and parents in Quito expect to see a valle option.
- Skip links present in the markup — a small but real accessibility baseline that most local competitors lack.

**Avoid:** No individual professional is named, photographed or credentialed anywhere on the page, no prices, no booking calendar, no intake questionnaire, and no consent language — the online therapy offering is only a footer link with almost no explanation. This is the standard Ecuadorian ceiling: correct vocabulary, competent visual design, zero trust infrastructure. Beating it requires only faces, credentials, a price and a screener.

**Open first:** https://ansuz.ec/service/psicopedagogia-quito/

#### Cenna Ecuador  <sub>[OK]</sub>

https://cenna.center/terapia-del-lenguaje/

*Multi-location Ecuadorian neurodevelopment centre (Quito and Valle de los Chillos) offering terapia del lenguaje and psicopedagogía.*

**Why it matters here:** A clean baseline measurement of the Ecuadorian competitive floor for exactly Karel's two child-facing specialisms — useful mainly as the standard to exceed.

**Steal this:**
- The clinical scope statement, which is well-written and correctly hedged for local search: evaluation and intervention for late language onset, language development disorders, speech sound disorders, stuttering, and communication difficulties linked to autism spectrum disorder, neurological conditions and intellectual disability, plus 'asesoría a padres y educadores'. Parent-and-educator counselling as a named service line is worth copying.
- Organising by location as a first-class navigation concept (Quito and Valle de los Chillos), which is how Quito families actually think about access.
- The Spanish title convention for the profession — therapists listed as 'Lic. Sara Caiza', 'Lic. Gabriela Guallichico'. The 'Lic.' prefix is the local minimum signal; Karel should exceed it with registro number, university, years and a photograph.

**Avoid:** This is mostly an anti-pattern catalogue: therapists shown as a name and a 'Lic.' with no photo, no university, no registro, no years of experience; contact is a landline only (02 331 8980) with no WhatsApp in a WhatsApp-dominant market; no online or virtual therapy offered at all; no prices; no booking form; dated visual design. On mobile, a landline-only contact for a working parent is close to no contact at all.

**Open first:** https://cenna.center/terapia-del-lenguaje/

#### Tesela NeuroIntegra  <sub>[OK]</sub>

https://www.neurotesela.com/terapia-de-lenguaje

*Mexico/Spain online cognitive-stimulation and language therapy for children aged 4+, run as a cross-border Spanish-language practice.*

**Why it matters here:** A working example of one Spanish-language practice serving two countries online — the structural question Karel faces if he sells beyond Ecuador in USD.

**Steal this:**
- Country-segmented WhatsApp numbers as the contact architecture (Mexico +52 55 5432-1035, Spain +34 674 489 430) plus a contact form whose first field is 'País'. If you serve more than one country, asking the country first is what makes the follow-up feel local.
- Positioning the language work inside a broader cognitive frame — 'A través de estimulación cognitiva se mejora y potencian las funciones cognitivas, lo cual resulta en una terapia de lenguaje eficaz y duradera' — which lets one practice sell language, attention and learning support as a coherent programme rather than separate SKUs.
- A clear age gate stated up front (4+) so parents of younger children self-select out before booking, protecting both sides from a wasted first session.
- The combined CTA 'Contáctanos ó pide tu cita ahora', which offers a low-commitment and a high-commitment action in a single line.

**Avoid:** No credentials at all — no named therapists, no cédula profesional, which in Mexico is the expected and legally meaningful signal, and its absence is conspicuous. No prices, no free first consultation, no self-assessment tool, and the only route in is a form or WhatsApp. The outcome claim 'terapia de lenguaje eficaz y duradera' is stated with no evidence and no hedging — exactly the sentence that would fail YMYL review and that Karel should not translate.

**Open first:** https://www.neurotesela.com/terapia-de-lenguaje

#### Grupo Ismart — Terapia de Lenguaje en Quito  <sub>[DEAD]</sub>

https://terapiadelenguajeenquito.com/

*An exact-match-domain Quito speech-therapy site that still ranks in search results but now serves only a parked "Contact Support" page.*

**Why it matters here:** This is the most commercially useful finding about Ecuador in the whole report: a competitor holding the perfect exact-match domain for Karel's highest-intent local query has let the site die while continuing to rank. That is an open lane.

**Steal this:**
- The keyword thesis, which is validated by their ranking: 'terapia de lenguaje en Quito' is the money query, and an exact-match or near-match page structure targeting city + service still works in this market. Build /terapia-de-lenguaje-quito, /terapia-de-lenguaje-guayaquil and similar city pages.
- The programmatic city-page pattern proven at scale by Expressable's sitemap (dozens of /speech-therapy-in-[city]-[state] pages) applied to Ecuadorian cities — cheap to generate in Astro from a data file, and there is currently no live local competitor defending those terms.
- The lesson in operational hygiene: verify the liveness of every competitor you plan to position against, because search rankings lag reality by months. Two of the top-ranked Ecuadorian results in my searches were a dead site and a persistently 503-ing site.

**Avoid:** The site itself is unusable — it returns HTTP 200 with only the text 'Contact Support', which is a suspended or misconfigured host masquerading as a live page. There is nothing to copy from the design, the content or the funnel, and no way to see what it once was. Do not cite it as a competitor in any planning document without noting it is dead.

**Open first:** https://terapiadelenguajeenquito.com/

#### Toe by Toe  <sub>[UNVERIFIED]</sub>

https://toe-by-toe.co.uk/

*Long-running UK structured phonics manual for dyslexic and struggling readers, sold as a single physical book used one-to-one by a parent or tutor.*

**Why it matters here:** Named in the brief and worth understanding as a model, but I could not confirm it is serving: repeated requests from multiple user agents failed at the TLS layer, and www.toebytoe.co.uk 301-redirects to a hostname that then closes the connection abruptly.

**Steal this:**
- The product thesis, which is directly relevant to a bootstrap build: a single, cheap, highly structured, sequential manual that a non-specialist adult can deliver in short daily sessions. If Karel's teachers cannot deliver unlimited live hours, a rigorously sequenced parent-delivered programme is the scalable second product.
- The one-to-one, few-minutes-a-day format as the commitment a parent can actually keep — the opposite of an open-ended course, and the reason this format has survived decades in dyslexia support.

**Avoid:** I could not load the site, so treat every claim about its current offer, pricing or design as unverified — do not cite it as a live reference. Its broken TLS and redirect chain are themselves the warning: a product with genuine pedagogical reputation is losing all of it at the infrastructure layer. Check both apex and www hostnames, and monitor certificate expiry, on anything Karel ships.

**Open first:** https://toe-by-toe.co.uk/

#### Zambrano Kids (Guayaquil, Ecuador)  <sub>[UNVERIFIED]</sub>

https://zambranokids.org/servicios/terapia-de-lenguaje/

*Guayaquil paediatric therapy centre advertising a free evaluation consultation for terapia de lenguaje.*

**Why it matters here:** It appears to be the one Ecuadorian practice offering a free first evaluation — the single most important funnel mechanic in this vertical — but the site returned 503 to every request I made across multiple user agents and header sets.

**Steal this:**
- The offer itself, as evidenced in search results: a 'consulta de evaluación gratis' for terapia de lenguaje in Guayaquil. Free first evaluation is the standard entry mechanic worldwide (Better Speech, Great Speech, NAPA's discovery session) and at least one Ecuadorian competitor is already using it — so it is locally acceptable and Karel should assume he needs it.
- Their stated booking method is a personalised appointment request form rather than pure WhatsApp, which suggests a form is workable for Guayaquil families and does not have to be replaced entirely by chat.
- Their honest caveat, per search snippets, that they recommend in-centre sessions because of the physical and cognitive stimulation equipment — a useful reminder to be explicit about which parts of terapia de lenguaje genuinely work online and which do not. Saying so builds more trust than overclaiming.

**Avoid:** The site returned HTTP 503 consistently from several user agents and header combinations, so I could not verify any of the above from the page itself — treat all details as search-derived and unconfirmed. Persistent 503s also mean Google may be seeing the same thing, which is a competitive opening but a warning for Karel's own hosting: Cloudflare Pages' free tier is a genuine advantage over whatever shared hosting most local practices are on.

**Open first:** https://zambranokids.org/servicios/terapia-de-lenguaje/

---

## Music education platforms (Group A) + 1:1 lesson-booking / tutor marketplaces (Group B)

The two groups answer two different halves of the same problem, and the seam between them is the most important thing here. Group A has already conceded that real-time playing together over the internet does not work: ArtistWorks, Soundfly, Pickup Music and Escuela Guitarra Online all sell *asynchronous* personalised feedback (student records, teacher replies on video, days later) as a premium feature, and ArtistWorks makes it the entire product. The rest of Group A's differentiation from a "normal course" is not content, it is the player: notation/tab scrolled in sync with video, section looping, tempo slow-down without pitch change, stem removal, and downloadable PDF/MusicXML — and you can buy that whole capability from Soundslice for $0–$5/month instead of building it. Group B splits into three business models that have very different build costs: escrow marketplaces that hold money and adjudicate disputes (Preply, italki, Wyzant — expensive, needs a dispute team), lead-generation classifieds that never touch payment (Superprof's €19–29/mo student pass, Tusclasesparticulares' teacher-pays-to-be-featured ads — cheap, and note tusclasesparticulares.com.ec is already live in Ecuador), and thin booking layers over Zoom (Lessonface, 15% commission, no custom video stack). Every serious Group B player converts times to the viewer's local timezone automatically and stores a timezone on the profile — Ecuador's UTC-5 with no DST is the easy case, but your teachers will get bookings from Spain and the US, so this is not optional. Trial mechanics cluster into three shapes: free trial (Verbling 30-min, Lessonface 15-min), cheap paid trial (italki, ~30–50% off, with a two-strike "100% Satisfaction Guarantee" refund to wallet), and paid trial where the platform takes 100% (Preply). For a bootstrap in a low-card-penetration market, italki's prepaid Credits wallet and Wyzant's pay-after-the-lesson are the two mechanics that most reduce payment friction; both let you decouple "money in" from "lesson booked", which is what makes bank transfer, cash and diferido workable.

> **Top pick.** ArtistWorks (https://artistworks.com/video-exchange). It is the only site in either group whose core mechanic is designed around the exact constraint you have — that low-latency live video is unreliable and expensive — and it turns that constraint into the paid feature rather than an apology. The loop is precisely specified and cheap to build: the student clicks "Submit a Video", uploads one recording, and cannot submit another until the teacher replies (a hard one-outstanding-per-student queue, which is what makes "unlimited Video Exchanges" survivable for a single teacher); the teacher records a reply; both videos are then published together into that school's Video Exchange Library where every Premium member can watch. That last step is the clever part — support work becomes permanent catalogue content, so three teachers authoring courses today generate a growing library simply by answering students. The packaging maps directly onto your economics: Standard $19.99/mo ($191.88/yr) buys the lessons and read-access to the exchange library; Premium $29.99/mo ($287.88/yr) buys the right to submit. You are not selling video, you are selling a teacher's attention, and the content tier subsidises it. Pair it with Lessonface's thin operational spine (Zoom links, auto-converted timezones, 24-hour cancellation, 15% take) for the small number of genuinely live sessions you will still need — and make exchanges private-by-default for the children's therapy vertical, where ArtistWorks' all-public library would be indefensible.

### Sites (22)

#### ArtistWorks  <sub>[OK]</sub>

https://artistworks.com/

*Subscription music school where each 'school' is one master teacher and the paid upgrade is asynchronous video critique, not live lessons.*

**Why it matters here:** The single best answer to 'how do you deliver personalised music teaching when real-time playing together over the internet is impossible'. Nothing is live, so it works on variable/expensive bandwidth, and the whole business model is built on that rather than working around it.

**Steal this:**
- The serialised Video Exchange loop: student clicks 'Submit a Video' (top-right of the school dashboard), uploads one recording, and per the help centre 'you'll need to wait for your teacher's response before sending another'. Videos are reviewed in order received. That one-outstanding-submission-per-student rule is what makes 'unlimited Video Exchanges' economically survivable for a single teacher — copy the rule verbatim.
- Publishing every exchange: the teacher's reply AND the student's original video both land in that school's Video Exchange Library, 'visible to all current members'. The help centre is explicit that 'Private submissions are not available'. A 5-minute critique becomes permanent library content, so answering students IS content production. With three teachers and an empty catalogue, this is how you get a library for free.
- The two-tier split where the paid thing is human attention, not content: Standard $19.99/mo or $191.88/yr = all video lessons + read access to the exchange library; Premium $29.99/mo or $287.88/yr = the right to submit exchanges. Both start with a 7-day free trial that auto-renews.
- The funnel order: the primary CTA is 'Pick Your Teacher For Free' and school pages live at a vanity slug (/bryan-sutton, /christie-peery), with cards showing genre, one credential line and a student count ('16,773 students taught'). You commit to a person before you commit to a plan — which is right for three named local teachers.
- The positioning essay at blog.artistworks.com/7-pitfalls-private-music-lessons-and-how-video-exchange-can-help, which pre-empts 'async is worse than a live class' by reframing scheduling friction, student performance anxiety and teacher burnout as problems that LIVE lessons cause. Translate this argument into es-EC; you will need it on day one.

**Avoid:** The 'learn from the masters' premise (Grammy winners, Juilliard faculty) is unavailable to you, so lead with es-EC, local curriculum fit and named teachers instead of fame. The all-public exchange library would be indefensible for children's speech therapy — that vertical must be private-by-default with explicit parent consent. And note what they DON'T do: nowhere on the site or help centre is a turnaround time published. That is a gap to close, not copy — publish an explicit SLA ('respuesta del profesor en 72 horas') because it is the only concrete quality promise an async product has.

**Open first:** https://artistworks.com/video-exchange — then https://intercom.help/artistworks-help-center/en/collections/13980148-video-exchange-ve for the six articles that state the actual rules (submit, delete, privacy, limits, editing).

#### Musora (Drumeo / Pianote / Guitareo / Singeo / PlayBass)  <sub>[OK]</sub>

https://www.musora.com/

*One membership spanning five instrument brands, with a player built for practising rather than watching.*

**Why it matters here:** The clearest worked example of bundling several verticals under a single subscription — exactly your English/Music/Programming/Therapy problem — plus the canonical feature list that separates a music course from a normal video course.

**Steal this:**
- The cross-vertical single membership at /choose-plan: $23.25/mo billed as $279/yr, versus $30/mo monthly, framed as 'Save $83/year'. 7-day free trial (card required), 90-day money-back guarantee, and one membership unlocks all five instruments with 'no switching fees'. Your four verticals can be sold the same way.
- The player capability list, which is the actual definition of a music course: tempo control, section looping, stem removal ('Remove instrument tracks and play your part'), scrolling professionally-transcribed notation and tabs, and downloadable sheet music for offline use. On expensive mobile data, the downloadable notation is worth more than the video.
- Framing lessons as guided play-along practice sessions — 'the video IS your practice session' — rather than as lectures with homework. Combined with numbered levels (the 10-level 'Drumeo Method'), the student is never asked what to do next.
- The Progress Tracker that 'captures every lesson, practice session, and performance' with daily/weekly streaks. It is a cheap retention mechanic that works identically for English and Programming, and it is the thing a normal LMS progress bar does not do.

**Avoid:** 3,000+ licensed song transcriptions is a catalogue-and-rights moat you cannot fund — never benchmark yourself on library size. Their 90-day refund guarantee silently assumes card refunds are near-free; with diferido, bank transfer and cash, a refund is manual labour, so make your guarantee a credit or a free replacement class instead of cash back.

**Open first:** https://www.musora.com/choose-plan

#### Pickup Music  <sub>[OK]</sub>

https://www.pickupmusic.com/

*Guitar/bass/piano subscription organised as six graded Learning Pathways, with async 1-on-1 coach video feedback bundled into the membership.*

**Why it matters here:** Proves the ArtistWorks async-feedback mechanic works as an included feature inside a mid-priced subscription rather than as a premium upsell — a simpler packaging decision if you only have three teachers.

**Steal this:**
- The 'Learning Pathway' spine: six numbered grades, each a mix of daily lessons, play-along exercises, workouts and a song-performance challenge with a live-recorded backing band. The promise is 'know exactly what to practice… in the right order', which is the single most valuable thing a structured school sells over YouTube.
- Async coach feedback stated plainly on the pricing page: 'submit recordings and an expert coach will send you a detailed feedback video with what to work on next' — included in the membership, not a separate tier.
- Trial + guarantee stacking: 14-day free trial AND a 60-day money-back guarantee for first-time customers who sign up on the website. Two different risk-reversals aimed at two different objections.
- Catalogue navigation that mixes axes: pathways by level (Beginner → Late Intermediate), then technique clusters (CAGED, triads, arpeggios, modes), then genre (blues, jazz, neo-soul, gospel), then short accelerated courses like 'Clean Chord Switching in 7 Days'. Those 7-day micro-courses are ideal low-cost first purchases.

**Avoid:** $29.99/mo monthly vs $14.99/mo annual ($179.99 up front) is a US-income anchor; a $180 annual charge is a hard sell in Ecuador without diferido. Also, their 'weekly live lessons' are outsourced to a third party (til.co) — do not assume the live component is theirs, and do not commit to weekly live sessions you cannot staff.

**Open first:** https://www.pickupmusic.com/pricing — the async-feedback and guarantee language is stated most plainly there.

#### tonebase  <sub>[OK]</sub>

https://www.tonebase.co/

*Premium classical-music school split into per-instrument sub-brands (piano, guitar, voice, strings, winds, brass) at conservatory-level pricing.*

**Why it matters here:** Shows how to run one platform as many narrow vertical storefronts — each instrument gets its own subdomain, its own pricing page and its own funnel — which is a directly reusable pattern for English / Music / Programming / Terapia de Lenguaje on one Astro codebase.

**Steal this:**
- The vertical-storefront URL architecture: www.tonebase.co/piano, /guitar, /voice plus strings.tonebase.co/violin, woodwinds.tonebase.co/flute, brass.tonebase.co/trumpet — each with its own /pricing, /lessons, /courses and /blog. One platform, four separately marketable schools, which is exactly your structure.
- The trial page that narrates the trial as a timeline rather than a checkbox: 'Today: get instant access' → 'Days 1–13: learn & enjoy' → 'Day 14: trial ends… Forgot to cancel? No worries, we'll issue a full refund right away' → 'Plus 90 days worry-free'. Removing the forgot-to-cancel fear is worth more than the discount.
- Three membership shapes including a one-off: Monthly $59, Yearly $359, Lifetime $895. A lifetime/one-payment option is unusually well suited to a market where recurring card billing fails often — a single transfer or diferido purchase never churns on a failed charge.
- The stated deliverables mix that is not just video: 'PDF workbooks and annotated scores', 'a custom video player and platform tailored to music education', weekly LIVE workshops, 'AI Learning Pathways' and a 'Personal Coach'. The annotated-score PDFs are the cheap, bandwidth-friendly half.

**Avoid:** $59/mo and $895 lifetime target affluent adult hobbyists in the US/EU; the absolute numbers are irrelevant to you, only the tier shapes transfer. Also, tonebase runs a permanent discount banner ('45% Off All Plans', 'Back to School Sale') — permanent fake urgency erodes trust fast in a small market where your students talk to each other.

**Open first:** https://www.tonebase.co/piano/pricing — the FAQ block near the bottom carries the exact tier prices and the trial timeline.

#### Fender Play  <sub>[OK]</sub>

https://www.fender.com/play

*Song-first guitar/bass/ukulele course app with seven numbered levels and real-time pitch-detection scoring.*

**Why it matters here:** The cleanest public example of a level-by-level curriculum page that sells the syllabus itself, and of 'Feedback Mode' — automated listening feedback that substitutes for a teacher at zero marginal cost.

**Steal this:**
- The level ladder rendered as the main homepage content: seven levels, each with a one-line skills summary AND three named songs you'll be able to play ('Level 2 Highlights: power chords plus new songs, riffs and music theory — like reading tabs and the musical alphabet. Top Songs: Come As You Are, Black, Another Brick in the Wall Pt. 2'). Concrete outcomes per level, not vague competencies. This works identically for English (A1→B2) and Programming.
- 'Feedback Mode' — the app listens via microphone and gives instant accuracy/timing feedback plus a high score to beat. Automated feedback for the routine 80%, human video critique reserved for the 20% that needs it, is the right cost structure for three teachers.
- Three separate free-preview surfaces that are not the course: a free tuner (fender.com/tune), a Beginners hub, and article/Toolkit content — all SEO entry points that need no login. Cheap top-of-funnel for an Astro static site.
- The onboarding question 'I Want to Play' with an instrument + genre choice up front, which generates 'a personalized path' — the personalisation is just a filtered ordering of existing content, which is a weekend of work, not ML.

**Avoid:** Reviewers note Fender abandoned its original split-screen video+tab layout for a plain central video player with supplementary material below, and the consensus criticism is that production quality (multi-angle HD/4K) does not compensate for shallow content. Do not spend your budget on camera angles. Also $19.99/mo or $150/yr with 10% off Fender gear is a hardware-funnel business — you have no gear to cross-sell.

**Open first:** https://www.fender.com/play — scroll to the Level 1–7 accordion, then https://www.fender.com/play/guitar/songs for the song-catalogue browse pattern (difficulty as 'Difficulty level of 2 out of 3', browse by artist, by genre, 'Got 5 Minutes? Learn a Riff').

#### Yousician  <sub>[OK]</sub>

https://yousician.com/

*Gamified play-along app for guitar, bass, piano, ukulele and singing that listens through the microphone and scores accuracy and timing.*

**Why it matters here:** The reference point for the fully automated, teacherless end of the market — useful mainly as the thing you should NOT try to build, and as a source of retention mechanics you can copy cheaply.

**Steal this:**
- The core promise stated in one sentence: technology that 'listens to you play and gives instant feedback on your accuracy and timing. You always know when you're hitting the right notes.' That sentence is the entire value proposition; note how short it is.
- Gamification as retention: 'Earn rewards, beat high scores, and level up as you learn new skills', on top of a personal learning path. Streaks and scores are almost free to implement and are the main defence against month-two churn.
- The Family Plan as the pricing unit (4 Premium+ accounts). For your children's therapy and children's English verticals the buyer is a parent, and a per-household price beats a per-student price.
- The free-tuner-and-tools funnel (guitar/violin/ukulele/bass/mandolin/banjo tuners as separate indexable pages) — free single-purpose utility pages that rank and capture email.

**Avoid:** Real-time polyphonic pitch detection is a multi-year engineering investment; do not attempt it. Pricing is deliberately hidden behind a funnel with rotating 'FLASH SALE' banners, which is hostile and would read as untrustworthy in a small word-of-mouth market. And the model has no human in it at all — your differentiator in Ecuador is precisely that there is a named teacher, so copy the mechanics, not the philosophy.

**Open first:** https://yousician.com/ — note that /pricing 404s; plan details sit behind the app funnel and the Family Plan page.

#### Simply (formerly JoyTunes — Simply Piano, Simply Guitar, Simply Sing, Simply Draw)  <sub>[OK]</sub>

https://www.hellosimply.com/

*Family of consumer learn-an-instrument apps that listen through the phone microphone and colour notes green/red in real time.*

**Why it matters here:** The best documented example of the video+notation+play-along layout done WITHOUT any teacher video at all, and the clearest evidence of where microphone-based feedback breaks — which matters if you are tempted to build it.

**Steal this:**
- The note-level feedback affordance: notation on a staff, each note turning green/blue when correct and red when wrong, in time. It is the simplest possible representation of 'am I doing this right' and it needs no teacher present.
- Explicitly working with hardware the student already owns — 'any acoustic or digital piano or keyboard you already own, so there's no need to buy specific hardware'. In a bootstrap market, removing a purchase precondition is a conversion lever.
- The Individual vs Family split: roughly $17.90/mo or $169.90/yr individual, versus $23.90/mo or $209.90/yr for a Family plan covering up to 5 profiles across ALL the Simply apps, both with a 14-day free trial. Multi-profile-per-household is the right shape when parents are the payer.
- The corporate rebrand pattern itself: joytunes.com now 301s to hellosimply.com and simplypiano.com redirects into a funnel URL (join-piano.hellosimply.com/start?flow=…). If you register several product domains early, plan the redirect topology now.

**Avoid:** Independent testing reports real problems with microphone input: 'a delay between us playing a note and it being correctly acknowledged on screen', a backing track 'wavering up and down in pitch', tempo locked to only three speeds (60%/80%/100%), and no way to disable the backing track. MIDI input works far better than the mic. If you were considering mic-based scoring on cheap Android phones over variable connections, this is your warning — the async video-critique route avoids the problem entirely.

**Open first:** https://www.hellosimply.com/ — then the MusicRadar review for the honest account of the player's limits.

#### Soundfly  <sub>[OK]</sub>

https://soundfly.com/

*Artist-taught online music courses on a cheap subscription, with 1-on-1 human mentorship sold separately as a custom programme.*

**Why it matters here:** The clearest separation anywhere of 'content subscription' from 'human attention', priced independently — and its subscription is the lowest-priced credible model in Group A, which is the right order of magnitude for Ecuador.

**Steal this:**
- The subscription/mentorship split. Content is $12/month or $96/year for unlimited access to every course. Mentorship is not a tier — the course page says 'Want to work on this course with 1-on-1 support from an expert mentor? Request a mentor through our custom mentorship program here', i.e. a request form, human-matched, four- or six-week programmes. You can run mentorship as a form and a WhatsApp thread on day one with zero booking infrastructure.
- The 'Friend of the Fly' tier at $39/mo or $312/yr, which grants the SAME access as the $12 tier and is sold purely as patronage ('For our super-fans… feel good inside for supporting our work'). A voluntary higher price with no extra features costs nothing to offer and some people take it.
- Course pages that sell the syllabus in full: every section and every lesson title listed openly (Section 1 Introduction → Section 5 Other Triads, with 'Week 1 Challenge', quizzes and 'Into the Studio' application exercises), with a handful of specific lessons marked 'Preview' and playable free at /courses/<slug>/preview. Full transparency plus targeted free samples, rather than a paywalled blur.
- The four-icon value row on every course page — 'Learn on Your Schedule / Go Deep / Challenge Yourself / Get Help & Feedback' — where the feedback promise is an invite-only Discord, not staff time. Community as the cheap substitute for support.

**Avoid:** The site is Cloudflare-protected and the visible catalogue skews to production/songwriting for adults — none of the child-facing patterns you need for the therapy vertical are here. Their mentorship pricing is never published on-site (a discount of $125 for subscribers is mentioned only in blog posts), which makes it un-buyable without a sales conversation; publish your mentorship price.

**Open first:** https://soundfly.com/subscription for the tier structure, then https://soundfly.com/courses/unlocking-the-emotional-power-of-chords for the course-page and syllabus pattern.

#### Playground Sessions  <sub>[OK]</sub>

https://www.playgroundsessions.com/

*MIDI-keyboard-based piano learning app with real-time note scoring, song-by-song progression and a lifetime purchase option.*

**Why it matters here:** Useful mainly for its commercial packaging — it is the mainstream product that pushes a lifetime licence hardest — and as a live example of a heavily promo-driven React funnel you should not imitate.

**Steal this:**
- A lifetime (one-payment) SKU sold alongside monthly and annual. Their promo config exposes three parallel offers — isMonthlyActive / isAnnualActive / isLifetimeActive — plus a family-plan bundle slot. In a market with weak recurring-card reliability, a one-payment tier removes the renewal failure mode entirely.
- A configurable-content layer driving the whole marketing page (banner text, hero title, CTA labels, colours, and different CTA copy for members vs non-members: 'SIGN IN' vs 'START FREE'). Being able to change hero copy and prices without a deploy is genuinely worth building on an Astro site — a small JSON in the repo gets you 90% of it.
- Separate CTA destinations by intent: /choose-free-trial for non-members, /register for members, with a persistent above-nav banner. Two-audience routing from one page.
- Preferring MIDI over microphone for note detection — the reason their scoring is more reliable than mic-based competitors.

**Avoid:** Pricing is entirely behind a login wall (/pricing redirects to a sign-up form), which is a conversion-killer and would be fatal in a market where buyers compare by asking friends. The site runs a permanent 'Labor Day Sale — Up to 70% off' banner with a two-month window; permanent discounting trains buyers to never pay list price. And it requires a MIDI keyboard for the good experience — a hardware precondition your market largely won't meet.

**Open first:** https://www.playgroundsessions.com/ — view source and read the window._playground_promo_config and window.configurableContent blocks; they are the most instructive part of the page.

#### School of Rock (School of Rock Online + Method App)  <sub>[OK]</sub>

https://www.schoolofrock.com/method-app

*Franchised in-person music school with a proprietary assignment/practice app and a purpose-built low-latency online lesson platform.*

**Why it matters here:** It is the one Group A player attacking the latency problem head-on with real-time audio, AND it already has a franchise in Cumbayá, Quito — so it is simultaneously your best technical case study and your nearest physical competitor.

**Steal this:**
- The Method App's teacher→student assignment loop: teachers 'assign exercises and songs, and provide feedback and comments'; students 'manipulate playback, tempo and backing track audio'; and — critically for your therapy vertical — 'parents can also use this app to monitor their child's progress, review their practice history, and view assignments and comments from their instructor'. A parent-visible progress and assignment view is a first-class feature, not an afterthought.
- Bundling the boring utilities into the lesson environment rather than sending students elsewhere: built-in metronome, tuner, virtual keyboard, scale and chord generators. Small, cheap, and they keep the student on your property.
- The 'SongFirst' framing — over 1,000 song transcriptions organised so the student is always working toward playing a real song, with the method book exercises attached to it rather than the other way round.
- Using an off-the-shelf membership/scheduling back office (Pike13) rather than building one. Students 'claim your Pike13 account' for membership and scheduling while the branded app handles only learning. Buy the boring half.

**Avoid:** Their RealTime Audio (built on Taylor Robinson Music's low-latency tech plus MatchMySound, pitched as 'Zoom-like webcam technology designed with musicians in mind') publishes NO latency figure in milliseconds and NO bandwidth requirement anywhere — after five years. Treat that silence as the answer: synchronous remote ensemble playing is not a solved problem you can buy into on a bootstrap budget over Ecuadorian consumer connections. Also, the franchise model's economics (physical locations, house bands, live performances) do not transfer.

**Open first:** https://www.schoolofrock.com/method-app — then the 2021 PRWeb release on RealTime Audio for the low-latency claim, and note the site auto-detects and lists the Cumbayá, Quito location.

#### Escuela Guitarra Online  <sub>[OK]</sub>

https://www.escuelaguitarraonline.com/

*Spanish-language guitar school (jazz/beginner/advanced) selling month-by-month courses where students upload weekly recordings and the teacher grades and comments on every one.*

**Why it matters here:** This is the closest existing thing to what you are building, in Spanish, at bootstrap scale: async recorded-exercise feedback, a graded weekly cadence, and an optional live tier — run by what looks like a very small team. It proves the ArtistWorks mechanic works in Spanish without ArtistWorks' budget.

**Steal this:**
- The weekly submit-and-grade cadence, in their own words: 'Todas las grabaciones y ejercicios que hagas son comentados por el profesor para saber qué mejorar.' Weekly tasks are graded, and students can then compare their work against classmates'. Weekly rhythm + a grade + peer comparison is much stickier than 'submit whenever you like'.
- Courses sold as a numbered, sequential monthly ladder — GJ1–GJ12 (jazz), Gini1–Gini4 (iniciación), GA1–GA7 (avanzada) — each course a month's work at 45€ Premium / 27€ Lite. Selling one month at a time, with an obvious next step, avoids asking for an annual commitment up front. This maps perfectly onto three teachers each authoring a numbered ladder.
- The two-price-per-course Premium/Lite split, where Premium adds free access to supplementary material (taller de teoría musical básica, curso de solfeo, clases complementarias). Same course, two levels of support.
- The clearly separated live tier as a distinct, more expensive product: videoconferencia at fixed weekly times, 85€/month for four 1-hour individual sessions, or 45€/month per person in groups of 2–3 maximum. Small group live at roughly half the individual price is a good template for your English vertical.

**Avoid:** Euro pricing and a Spain/EU audience; 45€/month is far above Ecuadorian willingness to pay, and the live tier runs on Skype at fixed weekly times, which is dated. The site is also visually dense and desktop-shaped — you should ship the same mechanics mobile-first. Note they publish no cancellation or refund policy, which you should not imitate.

**Open first:** https://www.escuelaguitarraonline.com/ — the plan grid and the videoconferencia pricing are both on the homepage.

#### Clases Guitarra Online (Escuela de Guitarra Online)  <sub>[OK]</sub>

https://www.clasesguitarraonline.com/

*Spanish-language guitar school running a flat monthly all-access subscription plus scheduled live sessions, built on a hosted course platform (Teachable-style subdomain).*

**Why it matters here:** A second Spanish-language data point at a lower, simpler price, and a demonstration that a solo teacher can run this on a hosted course platform rather than custom software — which is a real option for your first three courses.

**Steal this:**
- The single flat price with no tiers: 25€/month with 7 days free, and 'una vez inscrito, tienes acceso a todo el material y clases hasta que decidas cancelar'. One price, one decision — far easier to explain over WhatsApp than a tier matrix.
- The split between an evergreen library and scheduled live sessions on separate URLs — /directo for 'clases en directo' as the recurring event that gives members a reason to log in on a specific day, with the recorded library as the always-available base.
- Running the school on a hosted platform at a subdomain (escuela.clasesguitarraonline.com/p/escuela-de-guitarra-online) while keeping the marketing site on the apex domain. That split lets you launch the paid product this month on Astro + a hosted checkout, and rebuild the LMS later without moving your SEO.
- Spanish-language naming that doubles as the SEO keyword — the brand IS the search term ('clases de guitarra online'). Worth copying for 'terapia de lenguaje', which is a high-intent, low-competition Spanish query.

**Avoid:** 25€/month is EU-priced and the checkout is euro-denominated; you need USD and diferido. Because it runs on a third-party course host, the member experience is generic and off-brand and there is no async feedback mechanic at all — which is exactly the gap you should fill. Treat this as a floor for launch speed, not a target for product quality.

**Open first:** https://www.clasesguitarraonline.com/directo — it shows how the live cadence is sold alongside the recorded library.

#### Soundslice  <sub>[OK]</sub>

https://www.soundslice.com/

*Embeddable player that syncs music notation/tablature to video or audio, with looping, slow-down, transposition and part soloing — the buy-instead-of-build answer for the whole Group A player question.*

**Why it matters here:** You asked how these sites handle the video + notation/tab + play-along layout. Most of them do not build it — Musora has an account here, and TrueFire and JTC Guitar license it. For one technical founder on a bootstrap budget, this converts your hardest music-vertical feature into an iframe.

**Steal this:**
- The feature set that defines the layout, which you can now simply have: notation synced to a real recording, click a note to jump the video to that moment, drag across notes to create a loop, slow down without changing pitch, transpose, and solo individual parts. Their own comparison page frames the alternative honestly — 'instructional videos and static PDFs… video and notation aren't linked; get lost easily… awkward on devices with small screens'.
- The free tier as your actual launch path: $0 for the web-based notation/tab editor, an unlimited number of 'slices', syncing to YouTube videos, and MusicXML / Guitar Pro import, usable on any device with no install. Host lesson video unlisted on YouTube (free bandwidth, adaptive bitrate — which matters enormously on Ecuadorian mobile data), sync the notation in Soundslice, embed both in Astro.
- The paid steps when you outgrow free: Plus at $5/month or $50/year adds syncing to your own uploaded MP3/video and printing/exporting; the Teacher plan is $20/month for up to 100 students, then 20¢ per extra student per month. That is your entire music-player line item.
- Embedding is copy-paste ('you simply copy and paste Soundslice's embed code into your site') and works in any browser with nothing to install — no app-store dependency, which suits a static Astro + Cloudflare Pages deployment.

**Avoid:** Note /pricing 404s — the correct path is /plans/. The commercial embedding licence for a paid platform is quoted, not listed, so budget for a conversation before you build it into your unit economics. It also only solves the music vertical; there is no equivalent for speech therapy or programming, so do not let it set your architecture for the other three.

**Open first:** https://www.soundslice.com/licensing/ — the 'old way vs Soundslice way' comparison is the clearest statement of the problem; then https://www.soundslice.com/plans/ for the free/Plus/Teacher tiers.

#### Preply  <sub>[OK]</sub>

https://preply.com/

*Escrow tutor marketplace that converts a paid trial lesson into a recurring 28-day subscription of N lessons per week.*

**Why it matters here:** The reference implementation of the trial→package conversion you asked about, and the clearest published cancellation and commission rules of any marketplace here. Also fully localised into es, so you can read its exact Spanish UI copy.

**Steal this:**
- Tutor cards that lead with price expressed as a unit of time, not an hourly abstraction: '$25 / 50-min lesson', star rating with review count, active student count and lifetime lesson count ('13 students', '1614 lessons'), a Super Tutor / Professional badge, languages spoken, and two CTAs — 'Book trial lesson' and 'View full schedule'. Filters include a 'Price per lesson' slider ($3–$40+), 'I'm available' (time-of-day), 'Country of birth', 'Native speaker', teaching style and specialties.
- The 12-hour cancellation rule, stated in one sentence with the reason attached: cancel more than 12 hours ahead and 'the lesson returns to your balance with that tutor'; less than 12 hours and it does not, because 'the tutor is paid because the lesson time was reserved in their calendar'. Tutors may only cancel outside 12 hours; inside it they can only reschedule with the student's agreement, and the student's balance is not touched. Explaining WHY the tutor gets paid is what makes the rule feel fair.
- The 'reserved slot' concept for subscriptions: when a student has no lessons left in the current cycle, the slot they picked is held as 'reserved' and 'become[s] a lesson automatically when their subscription renews'. That single idea lets a weekly rhythm survive a lapsed or late payment — very useful when payment is a transfer that clears on Monday.
- The three-step conversion narrative on the landing page: filter by 'goals, schedule, and budget' → book a 25- or 50-minute trial where 'you'll meet your tutor and share your goals, so they can personalize your learning from the start' → 'Subscribe to a flexible lesson plan… You can reschedule, pause, or switch tutors anytime'. The trial's stated job is goal-setting, not teaching — which is why it converts.
- Timezone handled by storing it on the profile and rendering every slot in it; the 12-hour cancellation window is computed from 'the lesson start time shown in your account' and always from the CURRENT scheduled time, including after either party reschedules. Ecuador being UTC-5 with no DST makes your side trivial, but that recompute-on-reschedule rule is the bug you would otherwise ship.

**Avoid:** Do not copy the economics. Commission is a sliding 18–33% by cumulative platform hours (33% for 0–20 h, 28% at 20+, 18% at 400+), and 'the commission for every trial lesson with a new student is 100%' — the tutor is paid nothing for trials. With three teachers who are your partners, not supply, that is corrosive; if you want a free or cheap trial, absorb the cost yourself. The 28-day auto-renewing subscription with a saved card is also widely resented and simply will not work where card penetration is low.

**Open first:** https://preply.com/en/online/english-tutors for the card and filter anatomy; then help.preply.com/en/articles/4179413-cancellation-policy-for-students and .../4171383-preply-commission-model for the rules.

#### italki  <sub>[OK]</sub>

https://www.italki.com/

*Language marketplace built on a prepaid Credits wallet, per-teacher lesson packages, and an unusually well-specified dispute system.*

**Why it matters here:** Its payment architecture is the single most transferable thing in Group B for Ecuador: decoupling 'money in' from 'lesson booked' via a wallet is what lets you accept bank transfer, cash deposit or diferido without breaking booking.

**Steal this:**
- The wallet. 'italki Credits' is virtual currency bought once and spent on lessons; every refund path returns credits to the Student Wallet rather than to a card — cancel 24h+ ahead, teacher declines, request expires unconfirmed, or a lesson problem is agreed, all land back in the wallet at 100%. This is exactly how you make a bank transfer or cash top-up work: one payment event, many bookings, no card on file. Credits expire only after 12 months of no login, and expired credits can be reactivated once.
- The 72-hour escrow with a structured dispute ladder: after a lesson either party has 72 hours to hit 'Lesson incomplete' (found under My Lessons → 'Action Required'), choosing a reason, a proposed solution and uploaded evidence; the other party has 3 days to respond; accept resolves it, decline bounces it back, and no action within 3 days escalates it to italki for a final decision. Otherwise the lesson auto-completes at 72 hours and credits transfer to the teacher. A requester can withdraw within the window. This is a complete, copyable spec for holding money safely without a support team improvising.
- Packages as the retention unit: teacher-created bundles of 5 / 10 / 20 lessons at a discount, prepaid, valid for six months, with teacher and lesson length locked after purchase, and explicit Extension and Termination flows that require the student to talk to the teacher first. Booked from the profile via 'Book Now' → lesson type → duration and lesson count → checkout with a payment method or Credits → teacher accepts.
- The '100% Satisfaction Guarantee' scoped narrowly enough to be affordable: up to TWO credit refunds on TRIAL lessons only, when the teacher didn't show up or 'didn't meet your expectations', claimed within 48 hours, excluding voucher-purchased lessons. It de-risks teacher-shopping without exposing you to open-ended refunds.
- The hard 24-hour freeze: inside 24 hours a lesson 'can NOT be changed to a new time or canceled', and if the student simply doesn't attend, 'your teacher is entitled to receive full payment'. Stated bluntly, in advance, in the student's own help centre.

**Avoid:** 'Authorized payments are final. No cash refunds will be given for purchased italki Credits' — a wallet you can never cash out of is a hard sell in a low-trust market and may sit badly under Ecuadorian consumer-protection expectations; consider allowing withdrawal, or keep balances small. The Professional Teacher vs Community Tutor split also implies a supply pool you don't have. And their dispute machinery presumes staff to arbitrate — with three teachers, keep the 72-hour auto-complete and the evidence form, but let the founder be the arbiter.

**Open first:** https://support.italki.com/hc/en-us/sections/360004249594 (the ⚖️ Policies section) — read 'What is a package?', 'How to cancel a lesson?' and 'How to submit a lesson incomplete request' back to back; the whole marketplace design is in those three pages.

#### Superprof  <sub>[likely]</sub>

https://www.superprof.es/

*Global tutor classifieds where teachers list free and STUDENTS pay a monthly pass for the right to contact them — no commission, no escrow, no booking.*

**Why it matters here:** The cheapest marketplace model to build, by a wide margin: it never touches a lesson, a calendar or a payout. If your constraint is one technical founder on Cloudflare's free tier, this is the model that fits — and superprof.ec exists, so it is already in your market.

**Steal this:**
- The inverted monetisation: teachers list at no cost; the student buys a 'Pase Alumno' (~€19–29/month depending on country and period) that unlocks contacting any teacher across 1,000+ subjects, for a minimum 30-day period. You never process a lesson payment, never hold funds, never adjudicate a no-show.
- The charge trigger that makes it palatable: the student is only debited once a teacher ACCEPTS their class request — 'solo te cobran la suscripción en el caso de que la profesora acepte tu solicitud de clases'. Payment is gated on a human confirming, which massively reduces refund demands.
- Letting teachers advertise 'primera clase gratis' as a per-teacher choice rather than a platform-wide policy. Free-trial risk sits with the teacher who wants the student, not with your P&L.
- Extreme subject breadth as the SEO surface (1,000+ materias × cities), which is what makes a classifieds model rank — the same programmatic city×subject page strategy an Astro static build is unusually good at.

**Avoid:** COULD NOT VERIFY DIRECTLY — superprof.es, .ec, .mx and even their /help pages all return 403 to automated requests ('Please enable JS and disable any ad blocker'), so open these in a real browser before relying on details; the mechanics above come from their own help pages surfaced via search, not from a page I rendered. On substance: the pass has a poor reputation (Trustpilot ~3.8) precisely because students pay before any teaching happens and auto-renewal surprises them. If you adopt it, make cancellation one click, state the renewal date on the receipt, and never auto-renew silently — in a WhatsApp-driven market one angry parent's screenshot travels further than your ad spend.

**Open first:** https://www.superprof.com/help/students/student-pass-subscription/35/ (Suscripción Pase Alumno/a) — it is the clearest statement of the model.

#### Tusclasesparticulares (incl. tusclasesparticulares.com.ec)  <sub>[OK]</sub>

https://www.tusclasesparticulares.com.ec/

*Spanish-language private-lessons classifieds — 'anuncios', not bookings — with a live Ecuador edition already claiming the largest tutor catalogue in the country.*

**Why it matters here:** This is your actual incumbent in Ecuador for the marketplace half, in Spanish, and it is a shallow product: it lists ads and hands off to contact. Everything past 'Contactar' is unoccupied ground.

**Steal this:**
- The 3-step homepage that sets expectations honestly — 'Busca / Contacta / ¡Adelante!' with 'Empieza tus clases de forma totalmente personalizada, tras ponerte en contacto con tu profesor'. It never promises booking, so it never has to deliver it. Copy the clarity, then beat it by actually booking.
- Card anatomy in Spanish you can lift wholesale: price as '22 €/h', star rating with count ('★ 5,0 (93 valoraciones)'), first name only, a 'Profesor Verificado' badge, an 'En línea' badge, city, subject, a bold one-line hook and two truncated bio lines with 'ver más', then a single 'Contactar' CTA — plus a 'Destacado' flag for paid placement.
- Filters shaped for parents rather than for adults buying themselves: 'Lugar de la clase' (puedo desplazarme / a domicilio / online), 'Nivel' (iniciación → alto), price bands, and crucially 'Para alumnos de' — preescolar, niños/primaria, E.S.O., bachillerato, universitarios, adultos, empresas. That audience-age filter is exactly what your children's therapy and children's English verticals need.
- Monetising placement rather than transactions ('Destacado', 'Anúnciate', plus 'Empleo para profesores' and 'Alumnos que buscan profe' as a reverse marketplace where students post requests and teachers respond). The reverse-request board is very cheap to build and generates supply-side engagement.
- Social proof aggregated at platform level and repeated on every row — '3.401.804 alumnos valoran a sus profesores con un 9,5/10' — with named parent testimonials ('Padre de un estudiante de física'). Parents are quoted as parents, not as students.

**Avoid:** The Ecuador site is largely a shell over Spain's inventory — a search for English teachers in Quito returned teachers based in Zaragoza, and the homepage still frames results with a Spain-first tone and euro-shaped assumptions. Their new 'Búsqueda con IA' returned 'No encontramos resultados' on a plain query. Do not copy the classifieds ceiling either: no scheduling, no payment, no timezone handling, no lesson record, no progress, no parent visibility. Their weakness is your entire product.

**Open first:** https://www.tusclasesparticulares.com.ec/ — then compare with the Spain edition at tusclasesparticulares.com to see how thin the Ecuador inventory actually is.

#### Lessonface  <sub>[OK]</sub>

https://www.lessonface.com/

*Live 1:1 online music, arts and language lessons booked on the platform but delivered over plain Zoom, at a deliberately low 15% commission.*

**Why it matters here:** The most directly copyable operational spine for your live sessions: it proves you do not need to build a video stack, and it is the only site here that treats children's safeguarding as a first-class product feature — which your terapia de lenguaje vertical requires.

**Steal this:**
- Not building video. 'Over Zoom! You'll need to have Zoom installed on your device, but no need to log in to a separate account. Lessonface will provide a link to connect you with your teacher.' They add a pre-lesson setup test page and a guide to optimising Zoom's audio settings for music. That is your entire live-lesson infrastructure for $0 of engineering.
- Timezones stated as a product promise in the FAQ: 'Time zones are converted automatically. Teachers' schedules and your lesson times will appear according to your region', backed by a teacher-side feature to 'view students' profile and time zone details'. Say it out loud on the page — it is a real anxiety for cross-border booking.
- One flat, unambiguous 24-hour policy: 'You may schedule, reschedule, and cancel lessons up to 24 hours before lesson start time. After the 24-hour mark, you may not change a scheduled lesson.' Lessons are paid at booking 'so that teachers are confident that their allocated teaching time will be compensated', and if the student no-shows or cancels late, the teacher is still paid. One rule, both sides, no exceptions.
- The commission structure that aligns with teacher-partners: 15% when the platform brought the student, 5% when the teacher brought their own. That second rate turns your three teachers' existing private students into platform volume instead of a conflict — the single most useful pricing idea in Group B for your situation.
- Child-safety as visible product surface: teachers who work with children pass a background check, there is a 'Background checked' profile tag, the org states it is COPPA compliant, and there are dedicated 'kid-friendly features' and PARENTS sections. Also note the profile-level offerings a teacher can configure — free 15-minute trial lesson, weekly subscription, single lesson, or a package — plus recorded lessons, per-student special pricing, discounts, and lesson notes/attachments.
- Community events that cost nothing but create retention and word-of-mouth: seasonal online recitals and open mics, free and open to students, teachers AND prospective students. A recital is the single best conversion event a music school has, and online it is just a scheduled Zoom.

**Avoid:** Their /our-guarantee link 404s from the nav, and the taxonomy is wildly over-split (dozens of guitar sub-genres as separate landing pages) which would fragment your tiny catalogue — start with four verticals and a handful of levels. Zoom also costs money above 40-minute group meetings, so budget for that or use 1:1 (unlimited on free tier) plus a paid host account only for group classes.

**Open first:** https://www.lessonface.com/how-it-works — the 'What else should I know?' block has the timezone, cancellation and recital policies in four lines; then https://www.lessonface.com/teacherfaq for the full list of teacher-side features worth building.

#### Wyzant  <sub>[OK]</sub>

https://www.wyzant.com/

*US tutor marketplace where students pay only after the lesson happens and the first hour with any new tutor is refundable.*

**Why it matters here:** It has the two trust mechanics best suited to a low-card, low-trust market: no money up front, and a named guarantee on the first lesson. Both are cheap to offer and directly attack the 'why should I pay a stranger online' objection.

**Steal this:**
- Pay-after-the-lesson as the headline promise: 'you only pay after you've had a lesson, and Wyzant securely processes everything for you.' The tutor reports their time after the fact, the platform then charges the student, deducts its fee and pays out by direct deposit. For Ecuador this is enormous — it lets a first lesson happen before any payment instrument has to work.
- The 'Good Fit Guarantee', named and repeated everywhere: 'Find the right fit or it's free. We guarantee you'll find the right tutor, or we'll cover the first hour of your lesson.' Scoped tightly — it applies only to a FIRST lesson with a NEW tutor, never to a repeat, and must be claimed within 30 days. A named guarantee is worth more than an unnamed discount.
- Contact-before-commit: the student messages the tutor on-site or in the app first, then books; there is no forced prepaid trial. That maps naturally onto WhatsApp-first behaviour.
- Trust signals on the card: hourly rate ('$35/hr'), rating and review count, and background-check status shown alongside credentials.
- A default 24-hour cancellation policy attached to the 'Book Now' instant-booking path, while tutors who book manually set their own policy. Having a platform default that applies specifically to the self-serve path is a neat way to avoid policing every teacher.

**Avoid:** The take is brutal and double-sided: tutors keep 75% (a 25% platform fee) AND students are charged an additional ~9% service fee on top of the lesson. Do not stack fees on both sides in a price-sensitive market — pick one. Letting every tutor set their own cancellation policy also produces exactly the inconsistency their help centre has to apologise for ('Each tutor has a different cancellation policy unless you use Book Now'); with three teachers, set one policy for the whole school.

**Open first:** https://www.wyzant.com/howitworks/students — then support.wyzant.com/students-parents/lessons/whats-the-good-fit-guarantee/ for the exact scope of the guarantee.

#### Cambly  <sub>[OK]</sub>

https://www.cambly.com/

*English practice with no booking at all — you open the app, see who is online, and are in a live video conversation within a minute; you buy minutes per week, not lessons.*

**Why it matters here:** The most radical answer to your booking and timezone problem: delete the calendar. Worth studying precisely because it shows which parts of Group B's machinery are optional.

**Steal this:**
- The instant-connect mechanic: log in, see who is online now, tap a profile, start talking. No calendar, no timezone conversion, no confirmation email, no reschedule flow, no no-show policy — an enormous amount of the software everyone else in Group B builds simply does not exist. If you ever add conversation practice for English, consider a 'profesores disponibles ahora' surface before a booking system.
- Subscription denominated in time-per-week rather than lessons: pick 1, 2, 3, 5 or 10 sessions a week (or 15/30/60 minutes a day across 2/3/5 days), which makes the cost predictable and nudges habitual practice. Plus purchasable 'Anytime Minutes' as a top-up on an existing plan — a consumable add-on alongside a subscription.
- Term-length discounting as the main lever: monthly, 3-month (~30% off), or 12-month (~50% off), so the same product ranges from roughly $12 to $5.54 per 30-minute lesson depending on commitment. Deep prepay discounts suit a market where you would rather have one cleared transfer than twelve card attempts.
- A cheap group entry tier — small groups of 1 tutor plus 2–3 students from around $15/month promotional — as the lowest rung of the ladder before 1:1.

**Avoid:** The model requires a large always-on tutor pool to make 'someone is online now' true — impossible with three teachers, so do not promise instant availability. Tutors are paid a flat $0.17/minute of connected time only, with no pay for waiting; that is a supply-side race to the bottom you cannot and should not run with teacher-partners. Their plan structure also changes constantly and is not clearly published, which is the opposite of what you need.

**Open first:** https://www.cambly.com/en/student — note it renders as a login shell without JS; read a current 2026 review for the plan matrix, which changes often.

#### Verbling  <sub>[OK]</sub>

https://www.verbling.com/

*Language marketplace whose distinguishing move is a genuinely free 30-minute trial lesson, with everything happening in its own in-browser classroom.*

**Why it matters here:** The counter-example to Preply on trial economics — free rather than paid — plus a multi-currency storefront, which matters when your es-EC pages will also be found from Spain, Mexico and the US.

**Steal this:**
- Free trial as the headline, not a footnote: 'Discover Your Perfect Tutor with One Free 30-min Trial', with 'Book Free Trial' as the CTA on every card, and step two of How It Works reading 'Once you've found a teacher, select a time that suits you and add it to their calendar. Get to know the teacher and discuss your goals totally free of charge.' Again the trial's stated job is goal-setting, not teaching.
- Teacher cards carrying language proficiency as CEFR badges — English Native, German C2, Afrikaans C1, with a '+2 More' overflow — alongside price per hour in a selectable currency, 'Lessons: 1 434', 'Students: 96', a rating with count ('5.0, Ratings: 521'), country, a 'Featured' flag and a truncated bio with 'Read More'. CEFR levels are objective, checkable and translate directly to your English vertical.
- A currency selector in the global nav ('Currency (USD)') next to a site-language selector, with per-language 'From $X per hour' entry prices on the homepage. Explicit currency is a trust signal for cross-border buyers and stops the 'is this dollars or euros' hesitation.
- 'All-in-one platform' positioning — booking, the lesson itself and materials all in one place, 'wherever you go' — as an explicit contrast to marketplaces that punt you to an external video tool.

**Avoid:** The site is fully JavaScript-dependent and renders 'Your browser does not support JavaScript! Verbling needs Javascript to work.' with no fallback — on Ecuadorian mobile connections that is a real bounce risk, and it is the opposite of what Astro gives you for free. Their teacher-count claims are also inconsistent on the same page ('over 2,000 expert tutors' in one block, 'over 10,000 qualified tutors' in another); do not let marketing copy contradict itself. And a fully free trial only works if you can absorb it — decide whether the school or the teacher eats that 30 minutes before you promise it.

**Open first:** https://www.verbling.com/find-teachers/english — the card layout and the free-trial CTA are both visible immediately.

#### Cal.com  <sub>[OK]</sub>

https://cal.com/

*Open-source scheduling infrastructure with public booking pages, native Stripe/PayPal payments and configurable no-show fees — free forever for an individual.*

**Why it matters here:** You asked about its booking pages specifically, and the answer is that it can be your booking layer rather than a design reference. It removes the hardest, least differentiating part of Group B from your build.

**Steal this:**
- The free tier is genuinely enough to launch: 1 user, unlimited event types and calendars, email AND SMS notifications, 100+ app integrations, mobile app, browser extension, embed, and — critically — 'Accept Stripe & PayPal payments' at $0/month, forever. A paid 1:1 booking page for your first teacher costs nothing.
- Paid bookings that collect before the meeting: enable the Stripe app, then choose per event type whether it has a charge and how much, so payment is taken at booking. That is your escrow substitute without writing any payments code.
- Time-based cancellation fees, which is the most sophisticated no-show mechanic in this whole research set: connect Stripe, pick the event type, open its Stripe app settings, set the fee amount and currency, enable auto-charge of no-show fees for last-minute cancellations, then 'define the timeframe by selecting how many minutes, hours, or days before the event start the fee should apply'. You can graduate it — full refund beyond 48h, a fee inside 24h, the full no-show fee inside 2h — and the booker 'will see a warning and the fee will be charged automatically'. Organizers and admins are exempt automatically.
- The 'Lock timezone' option on an event type, which pins displayed times to a fixed zone instead of auto-detecting the visitor's — the right setting for a class that only ever happens in Ecuador (UTC-5, no DST), and the wrong one for a teacher taking students from Spain. Knowing both modes exist is the whole timezone answer.
- Webhooks plus automatic no-show detection from video-call participant data (only for bookings that use Cal Video as the location), so attendance can drive your own logic — a WhatsApp nudge, a credit back, a parent notification — without manual marking.

**Avoid:** The free plan is ONE user. Three teachers on managed/shared availability means the Teams plan at $12 per user per month billed yearly (14-day trial) — about $432/year for three, which is real money on a bootstrap budget. Self-hosting the open-source version avoids that but adds ops work you may not want on Cloudflare Pages. Also note that removing Cal.com branding is a Teams feature, so the free tier is visibly Cal-branded, and automatic no-show detection only works with Cal Video — not with Zoom or Meet.

**Open first:** https://cal.com/blog/time-based-cancellation-fees-for-no-show — it walks the exact five-step Stripe configuration; then https://cal.com/pricing to confirm what the free tier includes.

---

## Creator / authoring experience: how a non-technical teacher builds and publishes a course (course-platform back-offices + the realistic CMS options for an Astro + Cloudflare MVP)

The whole category converges on one screen that matters: a single vertical list of modules with drag handles, an "+ Añadir lección" row at the bottom, and a "Ver como estudiante" button — Teachable, Thinkific, Podia and Skool all ship essentially the same thing, and Skool proves it works with a two-table schema (folders + pages). The differentiators sit at the two ends nobody copies: the empty state (Kajabi's Product Creation Wizard and Circle's Eclipse AI builder now take a plain-language description and propose modules/lessons, which is the pattern that actually gets a stalled teacher to publish) and assessment (LearnWorlds is the clear winner with 16 question types, reusable question banks, audio/video assignment submissions and questions embedded at video timestamps — everyone else's quiz builder is an afterthought and Skool has none at all). Video upload is the surface every platform treats as an implementation detail and every teacher on a bad connection experiences as the product: the correct answer is tus resumable upload with a real byte-offset progress bar and an explicit "reanudar" affordance, not a spinner — Cloudflare Stream exposes exactly this via one-time tokenised direct-creator-upload URLs, and Bunny Stream is roughly half the price for the same capability. On the build-vs-buy side I verified that the "Astro-native" default answer, Keystatic, has an open unresolved bug (#1497, Jan 2026) where GitHub OAuth produces no state parameter on Cloudflare Pages and returns 401, and that Sanity's very generous free tier (20 seats, 10K docs, 100GB assets) only offers *public* datasets — meaning paid lesson content would be readable by anyone with the project ID. The under-known option that fits this project almost suspiciously well is Sveltia CMS: a Decap-config-compatible single-page app loaded from a CDN with no server or SSR adapter, shipping a Latin-American Spanish UI (es-CO, 1,792 of 2,055 strings), first-class mobile/tablet editing with QR login, native Cloudflare R2 media storage, and per-field max_file_size plus automatic WebP conversion — released twice on the day I checked. The single biggest strategic mistake available here is spending 15-25 days of a 6-8 week MVP building a custom admin over D1; the second biggest is assuming three teachers will self-serve at all in week one. Plan for the founder to hand-enter the first three courses, but do it *through* the CMS from day one so switching teachers to self-service is a config change rather than a rewrite. Budget two days for the video upload page regardless of which content path you pick, because it is the one authoring task the founder physically cannot do on the teachers' behalf.

> **Top pick.** **Sveltia CMS (git-based, Decap-compatible) for course content + a hand-built tus upload page for video + founder hand-entry for the first three courses.** Total build: ~5-6 days. Ongoing cost: $0 plus video.

Here is the full option-by-option evaluation the decision needs.

**(a) Git-based / markdown CMS — RECOMMENDED, in the Sveltia variant.**
*Teacher's day-to-day:* opens escuela.ec/admin on her phone or laptop, logs in with GitHub (one-time 15-min setup you do with her on a WhatsApp call), sees "Cursos → Módulos → Lecciones" in Spanish, types the lesson, drags it into place, hits "Publicar". Behind the scenes that is a git commit and a Cloudflare Pages rebuild — she sees it live in ~60 seconds. Auto-backup while editing survives a dropped connection.
*Cloudflare + Astro:* perfect fit and this is the deciding factor. Sveltia is `public/admin/index.html` with one `<script src>` tag plus a `config.yml` — pure static output, no SSR adapter, no Node runtime, nothing that can break on workerd. Auth is a one-click `sveltia-cms-auth` Cloudflare Worker. Content lands as .md/.mdoc that Astro's `glob` Content Layer loader reads with zero glue and zero API rate limits.
*Free-tier limits:* none. MIT, no seat cap, no record cap, no vendor. GitHub free. The only hard limit is git's 100MB file cap — which is why media goes to R2, natively supported in config.
*Build cost:* 2-3 days (schema in config.yml + matching Astro collections + OAuth Worker + R2 media config), plus 1 day writing a one-page Spanish guide and recording a 5-min Loom per teacher.
*Verified 2026-09-06:* v0.206.1 published today; es-CO locale present at 87% string coverage; R2/S3/B2/Supabase/Cloudinary/Uploadcare media backends documented; mobile + QR login documented.
*Risks to accept:* docs are explicitly incomplete and the maintainer states free support won't help you set it up from scratch; it's 0.x so pin the version rather than loading `@latest` from a CDN; each teacher needs a GitHub account.
*The alternative inside this option, Keystatic, I would not bet on for Cloudflare:* it is the better schema API and it's actively maintained (0.6.9, 2026-08-26, near-weekly releases), but issue #1497 — GitHub OAuth generates no state parameter on Cloudflare Pages, callback 401s — has been open since January 2026 with no fix, and its admin routes need a server adapter. Use Keystatic in `storage: {kind: 'local'}` mode for *your own* bulk entry if you like the DX; don't hand it to teachers on Cloudflare. TinaCMS is out on economics alone: free tier is 2 users and you have 3 teachers plus yourself, so it's $24/mo day one and $41/mo the moment you want draft workflow.

**(b) Hosted headless CMS free tier — the strong runner-up, specifically Sanity.**
*Teacher's day-to-day:* genuinely the nicest. Logs in at tuescuela.sanity.studio with a Google account (no GitHub), Spanish UI via the official `@sanity/locale-es-es` plugin (v1.2.39, updated 2026-08-25), drag-to-reorder arrays for free, real draft/published document pairs, document history and restore, and live multiplayer editing.
*Cloudflare + Astro:* works, but deploy the Studio to `*.sanity.studio` with `npx sanity deploy` (free, 2GB build cap) rather than embedding it in your Astro app — embedding on Cloudflare has a known `prerender_{HASH}` missing-file bug. Astro pulls content via the Content Layer loader.
*Free-tier limits (verified on sanity.io/pricing):* 20 seats, 10,000 documents, 2 datasets, 1M CDN requests/mo, 250K API requests/mo, 100GB assets, 100GB bandwidth. Growth is $15/seat/mo.
*The disqualifier for this project:* free-plan datasets are **public only**. Anyone who knows your project ID can query your paid lesson bodies without a token. Private datasets are Growth-only. For a school selling courses in USD that is a real leak, and $15 × 4 people = $60/mo on a bootstrap budget. Choose Sanity anyway if your teachers will refuse GitHub, or if you keep paid lesson bodies out of Sanity and use it only for structure and marketing copy.
*Build cost:* 3-5 days. Storyblok (1 user, 1 space, 10K CDN calls/mo) and Contentful (25 content types on a Starter Space) are both worse fits; Directus Cloud Core is 3 seats/25 collections.

**(c) Notion or Google Docs + sync script — NO.**
*Teacher's day-to-day:* the best possible, honestly — they already have it on their phone and already know it, and Notion database templates would give you consistent lesson structure across three very different teachers.
*Why it fails:* the API averages ~3 req/s, caps payloads at 1,000 blocks, and returns nested block graphs requiring recursive traversal, so a full course sync is slow and fragile; image URLs expire and must be re-hosted; and there is no schema validation, so a teacher deleting a heading silently breaks your build. You would be debugging someone else's Notion page at 11pm during a launch.
*Build cost:* 4-8 days and permanently fragile. Use Notion as the *drafting* surface (teachers already will) and paste into the CMS — that's free and has none of the downside.

**(d) Airtable / Google Sheets — NO.**
*Verified free limits:* 1,000 records **per base**, 1GB attachments per base, **1,000 API calls per workspace per month**, 5 editor collaborators, 2 weeks revision history. Team is $20-24/collaborator/mo.
1,000 API calls/month forces build-time-only reads (workable), but 1,000 records per base is roughly two courses' worth of lessons plus quiz questions before you're paying per seat. No drafts, no rich text worth the name, proprietary lock-in. The grid *is* an excellent bulk-entry surface — if you use it, use it as your own scratch pad, not as production storage. Build cost 2-3 days; you'd regret it inside one term.

**(e) Minimal custom admin over D1 — YES, but in v2, not now.**
*Build cost honestly:* 15-25 days for auth, roles, a rich-text editor that doesn't lose work, drag reordering, media handling, drafts, and preview. That is your entire MVP budget spent on the back office. The counterargument is real — you need D1 + Workers anyway for students, progress and payments, so the marginal cost of an admin drops a lot once that exists — which is exactly why it belongs in v2, when you also know what your teachers actually asked for. Note Cloudflare free-tier ceilings for when you get there: Workers 100K req/day and 10ms CPU, D1 5M rows read + 100K rows written per day and 5GB (and as of 2026-09-01 D1 now *fails* queries past those limits rather than degrading), R2 10GB with no egress fees, Pages 500 builds/month with unmetered static bandwidth.

**(f) Founder hand-enters from WhatsApp — YES, do this simultaneously, weeks 1-6.**
This is not a fallback, it's the plan for the first three courses. ~5-8 days of typing, zero build. The critical detail: enter it **through** the CMS from (a), not into files or a database directly, so that turning on teacher self-service later is a config change and a WhatsApp call, not a migration. It also forces you to discover the schema's real shape before three people depend on it.

---

**The concrete 6-8 week plan this implies:**
- Days 1-3: Sveltia config.yml + Astro Content Layer collections + `sveltia-cms-auth` Worker + R2 media. Model lessons as an ordered list of typed blocks (`{type: video|texto|actividad|quiz|descarga}`) — one shape covers everything, copied from Teachable.
- Days 4-5: the video upload page. `POST /stream?direct_user=true` → take the `Location` header → hand it to tus-js-client/Uppy in the teacher's browser. Real byte-offset percentage, filename, "puedes cerrar esta pestaña y continuar después", explicit "Reanudar subida". Auto-generate Spanish captions (Cloudflare Stream supports `es`) and let the teacher edit the VTT — it doubles as your transcript, your low-bandwidth fallback and your SEO. Cap the upload and tell teachers to export 1080p H.264; a 2GB ProRes file is not a requirement, it's a mistake. Price check: Cloudflare Stream is $5/1,000 min stored + $1/1,000 min delivered with free ingest/encoding and no free tier; Bunny Stream is from $0.01/GB storage + $0.005/GB delivery with free encoding, free player and tus support — roughly half, and worth taking on a bootstrap budget.
- Days 6-10: you hand-enter all three courses from WhatsApp material. Ship four Spanish course presets so the empty state is never empty — *Inglés A1*, *Módulo de música*, *Sesión de terapia de lenguaje*, *Bootcamp de programación* — each pre-filled with 4 módulos and 3 lecciones. This is the highest-ROI onboarding work in the whole project.
- Week 5-6: quizzes. Copy Thinkific's four-field model exactly (question bank + pass mark + randomise order + must-pass-to-advance) and LearnWorlds' question-type shortlist: multiple choice with **text, image AND audio** options, true/false, fill-in-the-blank. Audio options are non-negotiable for terapia de lenguaje and for English pronunciation. Add a CSV question importer before you polish the quiz UI — teachers already have their questions in Word and Excel. Add "generar preguntas de esta lección" via the Claude API in a day; gate it to English/Music/Programming, never to speech therapy where a generated question can be clinically wrong.
- Week 7-8: turn on teacher accounts one at a time, 30-minute WhatsApp video call each, with a persistent "3 de 7 pasos completados" checklist on their dashboard (stolen from Kajabi) and a "Ver como estudiante" button on every lesson (stolen from Teachable).

**The one thing not to skip:** make every lesson a real full-page route with a real URL. Mighty Networks' pop-up lesson windows are the most-cited friction point in its reviews, and in a WhatsApp-dominant market a shareable lesson URL is a distribution channel, not a nicety.

### Sites (18)

#### Sveltia CMS  <sub>[OK]</sub>

https://sveltiacms.app/

*A modern, Decap-config-compatible git CMS that is just a single-page app loaded from a CDN — no server, no build step, Spanish UI, mobile-first.*

**Why it matters here:** It is the only option in this entire list that runs natively on Cloudflare Pages static output with zero SSR adapter, ships a Latin-American Spanish interface out of the box, supports Cloudflare R2 as a media backend in YAML, and costs nothing forever. That combination is a bullseye for a bootstrap Astro + Cloudflare school with three Spanish-speaking non-technical teachers on flaky mobile connections.

**Steal this:**
- The deployment shape itself: `public/admin/index.html` containing one `<script src="...sveltia-cms.js">` plus a `config.yml`. That is the whole install. It deploys as static output on Cloudflare Pages today, which is exactly what Keystatic currently cannot do cleanly.
- The es-CO UI locale — I fetched src/lib/locales/es-CO.yaml and it is 1,792 lines against 2,055 for en-US (~87% coverage), with real strings: create: Nuevo, publish: Publicar, reorder: Reordenar, saving: Guardando…. Your profesoras never see an English button.
- Cloudflare R2 as a configured media backend (alongside S3, B2, Supabase, Cloudinary, Uploadcare). Images and PDFs go to R2, never into git, so you never touch the 100MB git file limit.
- Per-field `max_file_size` plus automatic WebP conversion and max-dimension resize on upload. You enforce Ecuadorian-bandwidth discipline at authoring time instead of arguing with teachers about 8MB JPEGs later.
- Mobile and tablet editing with QR-code login, plus automatic local backup while editing with restore of previous versions — the flaky-connection insurance policy no hosted platform in this list offers.
- The `sveltia-cms-auth` Cloudflare Worker: one-click deploy or `wrangler deploy`, register a GitHub OAuth app, set 3 env vars, paste the Worker URL into config.yml. Roughly four steps, free on Workers.

**Avoid:** Docs are explicitly marked incomplete and the maintainer states free support will not help you set it up from scratch — budget real time for the first config. It is 0.x and moves extremely fast (0.205.2, 0.205.3, 0.205.4, 0.206.0, 0.206.1 all shipped between 2026-09-02 and 2026-09-06), so pin an exact version in your script tag rather than loading @latest from a CDN in production. Each teacher needs a GitHub account with write access to your repo — 15 minutes each, but it is real friction and the one place Sanity is genuinely nicer. And it does nothing for video: video must go to Stream/Bunny separately, which you build yourself.

**Open first:** https://sveltiacms.app/en/docs/start — then immediately https://sveltiacms.app/en/docs/media for the R2 configuration

#### Cloudflare Stream — direct creator uploads  <sub>[OK]</sub>

https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/

*The one-time tokenised, tus-resumable upload endpoint that lets a teacher's browser push a large video straight to Cloudflare without ever seeing your API token.*

**Why it matters here:** This is the single authoring surface you cannot outsource, buy, or hand-do for your teachers — the files are huge and on their laptops. It is also the surface where Ecuadorian bandwidth actually bites. Two days of work here is worth more than two weeks of course-builder polish.

**Steal this:**
- The mechanic verbatim: `POST /stream?direct_user=true` returns a `Location` header containing a one-time tokenised tus URL. Hand that URL to tus-js-client or Uppy in the teacher's browser. Your API token never leaves the Worker. ~1 day of work.
- tus is *required* above 200MB and Cloudflare explicitly recommends it below 200MB when the end user's connection is unreliable — which describes your entire teacher base. Pause/resume across a dropped connection is the highest-value authoring feature you will ship.
- AI-generated captions in 12 languages including Spanish (`es`), WebVTT, 10MB cap per file, with inprogress/ready/error status you can poll. Generate on upload, let the teacher correct the VTT. Captions double as transcript, low-bandwidth fallback, and SEO body text.
- The UI to build around it: filename, a genuine percentage driven by the tus byte offset (not a fake animation), the literal sentence "puedes cerrar esta pestaña y continuar después", and an explicit "Reanudar subida" button on return. Never a bare spinner.

**Avoid:** There is no free tier and storage is prepaid — $5 per 1,000 minutes stored, $1 per 1,000 minutes delivered (ingest and encoding are free). A teacher who uploads 40 hours of raw footage costs you ~$12/month before a single student watches, and if you run out of prepaid storage new uploads simply fail. Compare Bunny Stream first: from $0.01/GB storage and $0.005/GB delivery with free encoding, free player and tus support — roughly half the cost for this workload. Also cap the upload size and tell teachers to export 1080p H.264; do not accept 2GB ProRes just because the protocol can handle it.

**Open first:** https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/ then https://developers.cloudflare.com/stream/pricing/

#### Sanity Studio  <sub>[OK]</sub>

https://www.sanity.io/pricing

*Hosted, real-time, React-configurable editing studio with the most generous free tier in the category — and one disqualifying catch.*

**Why it matters here:** It is the best teacher experience available at $0: Google login instead of GitHub, official Spanish UI plugin, native drafts and version history, drag-to-reorder arrays you don't write. It is the correct choice if your teachers balk at GitHub, and the free-tier catch is worth understanding precisely before you rule it out.

**Steal this:**
- The array-of-references field. Model `curso.modulos[] -> modulo.lecciones[]` and drag-to-reorder is free, out of the box — you get a drag-and-drop course builder you never wrote a line of.
- Native draft/published document pairs plus document history with restore. That is your versioning story, done, and it is the part founders always underestimate.
- Custom Structure (Desk) configuration: reshape the studio into exactly "Mis cursos → Módulos → Lecciones" so a teacher never sees a generic document list. This is the difference between Sanity feeling like a CMS and feeling like a database.
- `npx sanity deploy` puts the Studio on a free tuescuela.sanity.studio URL (2GB build cap). Do this instead of embedding it in Astro — it sidesteps the known Cloudflare prerender_{HASH} embedding bug and gives teachers a stable URL to bookmark.
- The official es-ES Studio locale: @sanity/locale-es-es, v1.2.39, last published 2026-08-25, from the sanity-io/locales repo. Install as a plugin, whole UI in Spanish.

**Avoid:** The Free plan's 2 datasets are PUBLIC ONLY — anyone with your project ID can query your paid lesson bodies over the API without a token. Private datasets are a Growth ($15/seat/month) feature. For a school selling courses this is a genuine content leak, and $15 × 4 people is $60/month on a bootstrap budget. Verified free limits: 20 seats, 10,000 documents, 1M CDN requests/mo, 250K API requests/mo, 100GB assets, 100GB bandwidth — generous, but 10K documents goes faster than you think once quiz questions become documents. Also do not embed the Studio inside your Astro app on Cloudflare; there is an open issue about the build breaking.

**Open first:** https://www.sanity.io/pricing — read the Free column carefully, specifically the word "public" next to datasets

#### Keystatic  <sub>[OK]</sub>

https://keystatic.com/

*Thinkmill's git-based CMS with first-party Astro support and the best schema API in the Astro ecosystem — with a Cloudflare-shaped hole in it.*

**Why it matters here:** This is the answer everyone will tell you to use for Astro, and it is genuinely well built and actively maintained (@keystatic/core 0.6.9 published 2026-08-26, with 0.6.4→0.6.9 all shipping between 2026-07-31 and 2026-08-26). You need to know the specific reason it is not the answer on Cloudflare before you spend three days finding out.

**Steal this:**
- The TypeScript schema API: `fields.array(fields.object({...}))` renders as a drag-to-reorder list, so módulos/lecciones ordering costs you nothing. Even if you use a different CMS, steal this schema shape.
- Local mode (`storage: {kind: 'local'}`) for YOUR OWN bulk entry: run `astro dev`, edit at /keystatic against the real filesystem, commit. This is the single fastest way to hand-enter the first three courses from WhatsApp material, and it works today with zero auth setup.
- Content lands as .mdoc/.md that Astro's `glob` Content Layer loader reads directly — no adapter, no API, no rate limits, no vendor.
- Keystatic Cloud Free: unlimited projects, 3 users per team, managed GitHub auth so you skip the custom GitHub App and env vars. Pro is $10/team/mo + $5/user beyond 3 for Cloud Images and multiplayer.

**Avoid:** Open issue #1497 (filed 2026-01-10, still unresolved): Keystatic's GitHub OAuth flow on Cloudflare Pages generates no state parameter — neither in the redirect URL nor in a Set-Cookie header — so the callback 401s. The documented workaround is to switch to Keystatic Cloud storage, which means paying to route around a bug. There is a second open issue where content edited via the admin in GitHub mode doesn't appear in public views on Cloudflare. Keystatic also requires a server adapter (its admin API routes touch the filesystem), and its Astro docs still reference the `hybrid` output mode that Astro 5 removed. Drafts are a browser-localStorage workaround, not a real staging system — there is no scheduling, workflow engine, or localization layer.

**Open first:** https://github.com/Thinkmill/keystatic/issues/1497 — read this BEFORE https://keystatic.com/docs/cloud

#### LearnWorlds  <sub>[OK]</sub>

https://www.learnworlds.com/features/

*The platform that takes assessment seriously: 16 question types, reusable question banks, branching exams, and questions embedded at video timestamps.*

**Why it matters here:** Your terapia de lenguaje vertical for children and your English vertical both live or die on assessment quality, and this is the only platform in the list that treats the quiz builder as a first-class product rather than a checkbox. Copy its question model; ignore everything else about it.

**Steal this:**
- Interactive video: questions embedded at timestamps that pause playback until answered. For children's speech therapy this is the highest-value single feature in the whole category, and it is cheap to build — `[{t: 92, pregunta: {...}}]` on the lesson plus a `timeupdate` listener. Two days.
- The question-type shortlist worth shipping in an MVP: multiple choice with text, image AND audio options; true/false; fill-in-the-blank; drag-to-match. Image and audio options are non-negotiable for children who can't read fluently and for English pronunciation drills.
- Assignment types beyond quizzes: audio submissions and video submissions with manual grading and written feedback. For speech therapy and for spoken English, "grábate diciendo esto" IS the assessment. No other platform here makes this so central.
- Question banks as a first-class entity separate from any individual quiz, so a therapist reuses the same 40 items across 12 sessions without retyping.

**Avoid:** Its video upload flow is a documented weak point — reviewers complain about having to route through Vimeo and paste a link for each lesson, which is precisely the failure mode you must not reproduce. The builder is heavy enough that it would overwhelm your three teachers. Pricing is well above bootstrap. And its maths quiz support is weak, which matters if the programming vertical grows.

**Open first:** https://www.learnworlds.com/features/ — go straight to the assessments and interactive video sections

#### Thinkific  <sub>[OK]</sub>

https://www.thinkific.com/

*The most complete conventional course builder at its price point, with an AI quiz generator and a clean quiz data model worth copying wholesale.*

**Why it matters here:** Its quiz model is four fields and covers ~90% of what a real teacher needs — that is your D1 schema, essentially free. Its AI quiz generation is also the highest value-per-day feature you could add with the Claude API.

**Steal this:**
- The quiz model verbatim: question bank + pass mark + randomize question order + require-passing-to-advance. Four fields. That is a tiny table and it is enough.
- "Generate quiz from this lesson" — send the lesson markdown to Claude, get 5 multiple-choice questions back as JSON, teacher edits inline before saving. One day of work, enormous perceived value, and it directly attacks the reason teachers stall.
- Import a question set from a file. Your teachers already have their quizzes in Word and Excel. A CSV importer beats a beautiful quiz UI and takes an afternoon.
- Course presets at creation time (pre-sell / mini-course / flagship / membership) that pre-fill the chapter structure. Ship four Spanish ones — Inglés A1, Módulo de música, Sesión de terapia, Bootcamp de programación — so the empty state is never empty.

**Avoid:** Two incompatible course builders where courses cannot be transferred between them — never ship a v2 builder you can't migrate content into. Quizzes were moved above the cheapest tier, which is the kind of feature-gating that makes creators leave. Multiple 2026 Trustpilot reports describe the platform as slow and glitchy with tasks taking hours due to loading failures — on Ecuadorian connections that is fatal, so keep your admin light. And their mobile app doesn't support quizzes, surveys, assignments or presentations; since your students are mobile-first, your quizzes must be plain responsive web, not an app feature.

**Open first:** https://support.thinkific.com/hc/en-us/articles/360030371674-Create-a-Course

#### Teachable  <sub>[OK]</sub>

https://teachable.com/

*The archetype of the simple curriculum screen: one vertical list, drag handles on sections, per-lesson typed content blocks.*

**Why it matters here:** If you only copy one screen from this entire research pass, copy Teachable's curriculum page. It is the interface a non-technical teacher understands in about eight seconds, and reviewers consistently say the drag-and-drop works without glitches.

**Steal this:**
- The curriculum page as ONE screen: vertical list of sections, each with a drag handle, per-section drip settings, a three-dot quick menu, and an "+ Añadir lección" row at the bottom of each section. No tabs, no modals, no settings drawer.
- Lesson editor as an ordered stack of typed blocks (video / texto / quiz / archivo / código) added from a "+" menu and dragged to reorder vertically. One data shape — `bloques: [{tipo, ...}]` — covers every lesson type in every vertical and maps cleanly onto a single JSON or MDX field.
- A "Ver como estudiante" (preview as student) button on every single lesson, so the teacher never logs out or maintains a second test account. This one button removes an entire class of support questions.
- Two-level publishing: publish state on the lesson AND on the course, so an unpublished lesson sits greyed-out in place in the curriculum rather than vanishing. Copy the two-level model, not a single global draft flag.

**Avoid:** Everything commercial. 7.5%+ transaction fees on lower plans, US-centric checkout with no diferido, transfer or cash options — irrelevant and actively misleading for Ecuador. Design customisation is close to zero, so don't study it for anything visual. And the block editor is not a real page builder: don't let its screenshots make you promise your teachers layout control you won't build.

**Open first:** https://support.teachable.com/hc/en-us — search "curriculum" and read the Curriculum + Lesson editor articles for the screenshots

#### Skool  <sub>[OK]</sub>

https://www.skool.com/

*Deliberately minimal course builder: Folders (modules) and Pages (lessons), upload a video, write a description, publish. That's it.*

**Why it matters here:** Skool is proof that the two-table schema is enough to build a real business on. It is the honest baseline for what your week-one MVP should contain, and it tells you exactly which features you can defer.

**Steal this:**
- The entire data model, which is your week-one D1 schema: `modulo(id, curso_id, titulo, orden)` + `leccion(id, modulo_id, titulo, cuerpo_md, video_ref, orden, publicado_en)`. No drag-and-drop module builder to wrestle with, no granular permissions.
- Native video upload OR paste a YouTube/Wistia/Loom link, in the same field. Give your teachers the same escape hatch — on a bad Ecuadorian connection, "pega un enlace de YouTube" is a reliability feature, not a compromise. It also means you can ship before your Stream upload page is finished.
- Drip by enrollment date as a single integer day-offset on the module. Two lines of logic, covers the cohort use case that matters for terapia de lenguaje sessions.

**Avoid:** No quizzes, no assessments, no certificates, no progress tracking depth. You cannot copy those omissions — English and terapia de lenguaje both require assessment, so Skool's ceiling is your week-five starting point. Its single-big-community model also won't accommodate parent/guardian accounts sitting alongside child students, which you need.

**Open first:** https://www.skool.com/discovery — open any free group and click into its Classroom tab to see what the builder actually produces

#### Kajabi  <sub>[OK]</sub>

https://kajabi.com/

*The best-in-class onboarding wizard: title + one paragraph → AI drafts the module and lesson outline → teacher edits and publishes.*

**Why it matters here:** The empty state is where your three teachers will stall, and Kajabi has the most refined answer to it in the category. This pattern is now cheap to reproduce with the Claude API and is probably the single highest-leverage onboarding feature you could build.

**Steal this:**
- The Product Creation Wizard flow: teacher enters a title and a short description in Spanish, AI proposes modules and lesson titles, teacher accepts/edits/reorders. One day of work with the Claude API and it converts a blank page into a half-built course.
- The wizard creates the course AND its landing page AND its email AND its tags in one flow. Your version: creating a course also creates its public page and a pre-written WhatsApp share message — WhatsApp is your distribution channel, so generate the message.
- The persistent onboarding checklist widget on the dashboard ("3 de 7 pasos completados") backed by Kajabi University content. A checklist that never disappears until done is what gets a stalled teacher back in.
- The interface's logical spine: create product → build content → set up payments → launch. Use those exact four steps as your checklist headings.

**Avoid:** Expensive and enormous — the surface area alone would drown three teachers. More importantly: AI-drafted outlines are generic, and for terapia de lenguaje for children a plausible-sounding generated outline is actively harmful. Gate any AI drafting to English, Music and Programming; never offer it for the therapy vertical, where the outline must come from the licensed therapist.

**Open first:** https://help.kajabi.com/hc/en-us — search for "How to Use the AI Content Assistant to Create Course Content"

#### Circle  <sub>[OK]</sub>

https://circle.so/eclipse-release

*Its June-August 2026 "Eclipse" release replaced the form-based course builder with a conversational one: describe your course and watch modules, lessons and assessments appear.*

**Why it matters here:** This is the current state of the art for the exact problem you have — getting a non-technical person from empty account to structured course — and it shipped three months ago, so it's the pattern your teachers may already have seen elsewhere.

**Steal this:**
- Conversational course creation: a chat box where the teacher describes in plain Spanish what she wants to teach, and the system proposes modules, lessons and assessments in real time for her to accept or edit. This is directly reproducible with Claude and is the strongest available answer to the empty state.
- The redesigned lesson player framed explicitly as "video-native" — the lesson page IS the video, everything else is secondary chrome. Correct for a mobile-first Ecuadorian audience.
- Visual learning paths sequencing one course into the next — exactly what you need for Inglés A1 → A2 and for a therapy programme that runs across terms.

**Avoid:** Courses remain a community add-on rather than the main event, and the pricing is far above bootstrap. One instructive anti-pattern: Circle's video progress tracking only works for video uploaded natively to Circle and is disabled for externally hosted video. That is vendor lock-in — but it also flags a real engineering task for you, since your video will live on Stream/Bunny/YouTube and you will need to emit your own progress events from the player.

**Open first:** https://circle.so/eclipse-release

#### Mighty Networks  <sub>[likely]</sub>

https://www.mightynetworks.com/

*Treats courses as a primary workflow with real module/lesson hierarchy, and gates lesson unlocks on 90% video watched — including for externally hosted video.*

**Why it matters here:** Two useful data points: one mechanic worth stealing that works with third-party video hosting, and one UX mistake documented repeatedly in reviews that you must not repeat.

**Steal this:**
- The 90%-watched-to-unlock rule that works for imported as well as natively uploaded video. Since your video will not live in your own database, this is the model to copy — track playback progress client-side and post completion events to your Worker.
- Treating courses as first-class rather than a community bolt-on: your primary nav should be Cursos, with community later or never. Three teachers and a paying audience need a course product, not a social network.

**Avoid:** Lessons open in pop-up windows that members must manually expand to full screen — cited repeatedly in G2 reviews as a friction point. Give every lesson a real full-page route with a real URL: it is better UX, it is shareable over WhatsApp (your main channel), and it is indexable. Also no completion certificates and limited quiz functionality, so don't look here for assessment patterns.

**Open first:** https://mightynetworks.com/help — note that help.mightynetworks.com currently 404s

#### Podia  <sub>[OK]</sub>

https://www.podia.com/

*The simplest authoring surface in the category — creators consistently report going from zero to a published course in an afternoon.*

**Why it matters here:** It is the calibration point for how few options you should ship. With three teachers and eight weeks, Podia's restraint is the correct design philosophy, not a limitation to design around.

**Steal this:**
- The ruthless reduction: no tabs, no settings drawer, no theme panel inside the authoring flow. For three teachers the correct number of options is the smallest number that works, and Podia shows you where that floor is.
- A single "Products" list as the home screen — one list, one primary button. Copy this information architecture directly; your teacher dashboard should be "Mis cursos" and a "+ Nuevo curso" button, nothing else.
- Price, description and content all on one scroll rather than behind a separate course-settings page. Fewer places to get lost.

**Avoid:** It caps out fast — thin quiz depth, minimal branding, no advanced layouts — and reviewers note it "gets limiting fast" for anyone beyond mid-tier. Its simplicity is also why creators eventually leave, so if you copy the restraint, plan the escape hatch (an export path, a richer block type) from the start. Do not copy its checkout assumptions, which are card-first and wrong for Ecuador.

**Open first:** https://help.podia.com/ — search "create a course"

#### Notion  <sub>[OK]</sub>

https://www.notion.com/

*Not a CMS, but the authoring surface your teachers already have on their phones and already know how to use.*

**Why it matters here:** Every founder considers Notion-as-backend and most regret it. The honest answer is that Notion is an excellent drafting surface and a bad production content store — and you should use it deliberately for the first, never the second.

**Steal this:**
- The block model plus the slash menu: typing `/` opens a typed-block picker. If you ever build a custom editor, this is the one interaction to copy and essentially the only one.
- Database templates — a "Lección" template that pre-creates the same six headings every time. This is how you get structural consistency out of three very different teachers (an English teacher, a musician, a speech therapist) with zero training.
- Toggle lists and callouts as the natural way teachers already express "actividad", "para padres", and "material descargable". If you do sync, map these to your components.
- The free, zero-friction reality: tell teachers to draft in Notion or Google Docs and paste into your CMS. Costs you nothing, uses a tool they already have, and removes the "I don't know where to start" objection.

**Avoid:** As a backend it is a trap. The API averages ~3 requests/second per connection with an additional workspace-level cap, payloads cap at 1,000 blocks, and the API returns nested block graphs requiring recursive traversal — so reading a course means fetching the database, then pages, then each page's block children, and the effective throughput is a fraction of 3 req/s. Image URLs expire and must be re-hosted. There is no schema validation, so a teacher deleting a heading silently breaks your build. Community Astro Content Layer loaders exist (notion-astro-loader and forks) but you will own the fragility.

**Open first:** https://developers.notion.com/reference/request-limits — read this before writing any sync script

#### Decap CMS  <sub>[OK]</sub>

https://decapcms.org/

*The MIT-licensed git CMS whose config.yml became the de-facto standard — and, contrary to widespread claims, still actively released in 2026.*

**Why it matters here:** Worth knowing two things: it is not dead (I verified the npm registry directly), and its config format is the portable dialect that also drives Sveltia — so writing your schema in it keeps two independent implementations available to you.

**Steal this:**
- The config.yml collection format itself. It is the de-facto standard for git CMS schemas and Sveltia reads it, so authoring your schema in this dialect means you can swap editors without touching your content or your Astro collections.
- The deployment shape: `/admin/index.html` plus one script tag. Nothing to build, nothing to server-render, works on Cloudflare Pages static hosting today. Sveltia inherited exactly this.
- Its `relation` and `list` widgets as the modelling reference for módulos → lecciones.
- A shipped Spanish UI locale (`es`) among 36 locale packs, if you want a second opinion on Spanish CMS terminology.

**Avoid:** The widely repeated claim that Decap died in 2024 is wrong — I checked npm directly: decap-cms-app 3.16.0 published 2026-08-31, with 3.13.0 (2026-06-01), 3.15.0 (2026-07-23) and 3.15.1 (2026-07-24) before it. What IS true is that the UI is dated and slow, Git Gateway auth is effectively unmaintained (use a Cloudflare Worker OAuth proxy instead), and its media library will cheerfully try to commit a video into git. "Decap Turbo" managed hosting is still closed-beta waitlist. Given you'd write Decap-format config anyway, Sveltia gives you the same config with a far better editor, Spanish UI and R2 support.

**Open first:** https://decapcms.org/docs/intro/

#### TinaCMS  <sub>[OK]</sub>

https://tina.io/pricing

*Git-based CMS with genuine visual/inline editing — click text on the live page, edit it in a sidebar — but priced out of a three-teacher bootstrap on day one.*

**Why it matters here:** Visual editing is the demo that makes non-technical people relax, and it is the one thing Tina does that Sveltia and Keystatic do not. The seat maths is what rules it out.

**Steal this:**
- Visual editing as a concept: the teacher clicks the heading on the actual rendered lesson page and edits it in place. If you ever want a wow moment in a teacher onboarding call, this is it.
- Content stays as markdown in your own repo, so switching away costs essentially nothing — the same portability argument as Sveltia and Keystatic.

**Avoid:** The free tier is 2 users (verified on tina.io/pricing 2026-09-06). You have three teachers plus yourself, so you are on Team at $24/month (3 users, +$90/seat/year beyond) from the first day, and Editorial Workflow — i.e. any real draft/review model — is Team Plus at $41/month. Asset cap is 100MB across every tier. Tina Cloud is also a hosted dependency you cannot trivially self-host away from, which is a strange trade for a git-based CMS. tinacms 3.13.0 was published 2026-09-07, so the project is very much alive; the economics are the problem, not the code.

**Open first:** https://tina.io/pricing

#### Payload CMS  <sub>[OK]</sub>

https://payloadcms.com/

*Open-source, config-as-code headless CMS with a clean generated admin UI, no per-seat fees and no record limits — now with an official Cloudflare Workers template.*

**Why it matters here:** Its economics (no seat fees, no record caps, self-hosted, MIT) are exactly right for three teachers forever, and Cloudflare shipped a one-click Payload template with D1 and R2 bindings. The reasons to skip it are about your timeline and your framework, not about quality.

**Steal this:**
- Collections-and-fields config as code, with an admin UI generated from it. If you ever build the custom D1 admin in v2, this is the architecture to imitate — you write a schema, you don't write CRUD screens.
- The Blocks field: a lesson as an ordered array of typed blocks, with each block type defining its own fields. Same shape Teachable uses in its lesson editor; Payload shows you how to make it declarative.
- The cost curve: no per-seat fees, no content record limits, you pay for infrastructure not for users. Over three years that is the cheapest serious option in this list.

**Avoid:** It is optimised for a persistent Node process. On Workers you are inside a 1MB bundle limit on the free plan (10MB paid), GraphQL support in the Workers environment is incomplete so you're REST-only, and initialisation plus connection-pool behaviour becomes the limiting factor before compute does. It is also Next.js-shaped and you are Astro-shaped, so you'd be running and deploying a second application. Reviewers are explicit that you should skip Payload if you need something running in an afternoon or if editors need to manage schema changes themselves. For a 6-8 week MVP this is a week you do not have; revisit it in v2.

**Open first:** https://payloadcms.com/docs/getting-started/what-is-payload, then Cloudflare's Payload-on-Workers template announcement

#### Directus  <sub>[OK]</sub>

https://directus.io/pricing

*A generic Data Studio you point at any SQL database — free to self-host for a company your size, but it needs a persistent server you don't have.*

**Why it matters here:** Relevant mainly as the reference architecture for the v2 custom admin: a configurable UI over an existing schema rather than hand-written CRUD screens. Also worth knowing you qualify for its free-use grant, in case a VPS ever becomes acceptable.

**Steal this:**
- The core idea for your v2 admin: point a generic, role-configurable UI at your existing D1 schema instead of writing screens per entity. Directus is the clearest demonstration of how far that gets you.
- Per-role field visibility and interface layout configuration — precisely the mechanism you'd need to hide 30 columns from a profesora and show her six.
- The licensing model to note: BSL 1.1 converting to MIT after four years, with an Open Innovation grant giving full permissive access at no software cost to organisations under $5M annual revenue and fewer than 50 employees. Motion Colors qualifies comfortably.

**Avoid:** It needs a persistent Node server plus Postgres or MySQL — that is a VPS, which breaks your Cloudflare-free-tier constraint and adds ops you have no time for. Reviewers repeatedly note that a raw Directus install handed to a non-technical editor "looks closer to Airtable than to WordPress" and needs real configuration work (hiding fields, arranging interfaces) before handover — so the setup cost is not just the server. Editing child collections in a side drawer with no relationship context is a documented usability complaint. Directus Cloud Core is $0 for 3 seats and 25 collections, but the genuinely useful tiers are $99-$599/month.

**Open first:** https://directus.io/pricing — check the Open Innovation grant terms specifically

#### Airtable  <sub>[OK]</sub>

https://support.airtable.com/docs/airtable-plans

*Familiar grid-and-expanded-record editing that non-technical people genuinely like — with free-tier limits that make it unusable as a backend for a school.*

**Why it matters here:** It is the option a bootstrap founder reaches for reflexively, so it's worth having the exact numbers to rule it out with. It does remain a good private scratch pad for your own bulk data entry.

**Steal this:**
- The grid plus expanded-record pattern as a bulk-entry surface. If YOU are typing in three teachers' worth of content from WhatsApp, a spreadsheet grid genuinely beats any form-based CMS for raw speed. Use it as your own staging area, then paste into the CMS.
- The attachment-field mental model, which teachers already understand from Excel — one column that holds files. Worth mirroring in how you label your media fields in Spanish.

**Avoid:** The free plan, verified on Airtable's own plans page: 1,000 records per base, 1GB attachments per base, 1,000 API calls per WORKSPACE per MONTH, max 5 Editor/Creator collaborators, and only 2 weeks of revision history. 1,000 API calls/month forces build-time-only reads, and 1,000 records per base is roughly two courses of lessons plus quiz questions before you're paying $20-24 per collaborator per month for the Team plan. There is no draft/publish model, rich text is poor, and your content ends up in a proprietary base. Also note the platform-wide rate limit of 5 requests/second per base with a 30-second cooldown on 429.

**Open first:** https://support.airtable.com/docs/airtable-plans

---

## Proof-of-stack (Astro 5/7 + Cloudflare D1 + auth) and visual design direction for a warm, trustworthy es-EC education brand

Two things changed under this project's feet and both are good news. First: the Astro Technology Company joined Cloudflare on 2026-01-16 (astro.build/blog/joining-cloudflare/), Astro stays MIT and multi-target, and Cloudflare now ships a first-party Astro + D1 + Workers admin template. The stack the architecture plan assumes is no longer a bet — it is the vendor's own reference implementation. Second: the plan says Astro 5, but Astro 7.3 shipped 2026-09-03 and @astrojs/cloudflare v14 moved the default deploy target from Pages to Workers. Karel should decide Astro version and Pages-vs-Workers deliberately, now, before writing code. On capability: Astro Sessions landed in 5.7 with a default Cloudflare driver, and Astro Actions (4.15+) give type-safe server functions with Zod validation that still submit as plain HTML forms when JS fails — that progressive-enhancement property is worth more in Ecuador than anywhere, because a form that works on a stalled 3G connection is the difference between a paying alumno and a bounce. The honest gap: there is no large, maintained "Astro + D1 + Better Auth + roles" starter. GitHub's best matches are 1-12 star repos. The real proof splits in two — Cloudflare's saas-admin-template proves Astro-on-D1-on-Workers, and CodeTV proves Astro can carry auth, Stripe subscriptions, paywalled video and a course builder in production — but neither does both, so Karel writes the auth/roles layer himself with Better Auth's Astro docs as the map. On design: escape the edtech purple gradient by stealing structure, not decoration. The single highest-leverage move is Khan Academy's type stack — one webfont for display, a system stack for body — because it is warm, sets Spanish diacritics correctly, and costs almost nothing on metered mobile data. Nubank Colombia and Platzi show what earns trust in Latin America specifically (regulator badges, "sin letra pequeña", real users named by city, cuotas, WhatsApp in the nav) and none of that appears on a US edtech site. Watch weight: Lovevery is 3.6MB/250 requests and css-for-js.dev is 2MB — beautiful, and both would be hostile on an Ecuadorian prepaid plan.

> **Top pick.** Two picks, because the question has two halves and they answer different risks. For proof-of-stack, the pair is Cloudflare's saas-admin-template (github.com/cloudflare/templates/tree/main/saas-admin-template) and CodeTV (github.com/codetv-dev/codetv.dev). The Cloudflare template is the stronger single pick: it is first-party, maintained, has a live demo, and settles the question the architecture plan actually depends on — yes, Astro renders on Cloudflare against D1, and here is the wrangler config and migration layout to copy. But it stops at API-token auth, so read CodeTV immediately after for the parts it does not cover: a real middleware.ts session gate, real Astro Actions, a real paywall, and an actual coursebuilder/ directory in a production revenue-generating app. Together they cover the whole architecture; neither does alone, and the gap between them — Better Auth wired to D1 with three roles — is the code Karel has to write himself, using better-auth.com/docs/integrations/astro as the map. Do this before any design work, because it will surface the Astro-5-vs-7 and Pages-vs-Workers decision that everything else sits on. For visual direction, the pick is Khan Academy en Español (es.khanacademy.org) — not because it is the prettiest here, but because its type decision is the one that satisfies every constraint at once: Plus Jakarta Sans 700 for display, a system stack for body, Noto Sans in the fallback chain for diacritic safety. Warm, free, correct for á/ñ/¿, verified clean at 360px, and near-zero bytes on metered data. Build on that foundation, then layer Duolingo's button physics and #4B4B4B ink for the children's surfaces, Nubank Colombia's trust devices (cuotas, named users by city, 'sin letra pequeña', real credentials) for the parent-facing pages, Expressable's free-screener-plus-status-pill-results mechanic for the terapia de lenguaje funnel, and Linear's restraint for the logged-in dashboard. Deliberately skip Lovevery's 3.6MB implementation and Domestika's countdown timer.

### Sites (26)

#### Cloudflare saas-admin-template (Astro + D1 + Workers)  <sub>[OK]</sub>

https://github.com/cloudflare/templates/tree/main/saas-admin-template

*Cloudflare's own first-party SaaS admin dashboard template, built with Astro, shadcn/ui, D1 and Workers, with a running public demo.*

**Why it matters here:** This is the proof that the exact assumed stack — Astro rendering on Cloudflare with D1 as the database — is not just possible but is what Cloudflare itself ships as a reference. It is a maintained, first-party artifact in the cloudflare/templates monorepo, not a hobby repo, and the demo at saas-admin-template.templates.workers.dev loads today. It is the closest thing to a blessed skeleton for the profesor/admin side of the school.

**Steal this:**
- The wrangler.jsonc D1 binding shape and the migrations/ directory layout — copy this verbatim rather than inventing your own; it is the file Cloudflare keeps current as the adapter changes.
- customer_workflow.ts: a Cloudflare Workflows background job. Use this pattern for the things that must not run in the request — sending the WhatsApp/email enrolment confirmation, reconciling a transfer/cash payment, nightly progress rollups.
- The Astro API routes with Zod validation on the request body. That validation layer is where you enforce that a profesor can only mutate their own curso.
- The shadcn/ui-inside-Astro wiring in astro.config.mjs — it is fiddly to set up from scratch and this template has already solved it.
- The customers/subscriptions table pair as the literal starting schema for alumno + matrícula; rename the columns, keep the shape.

**Avoid:** Its only auth is a static API bearer token — there is no login, no password, no session, no roles. It gives you zero of the alumno/profesor/acudiente model, so do not mistake it for an auth starter. It is also Workers-first, so if you stay on Pages you will be porting config.

**Open first:** https://saas-admin-template.templates.workers.dev/ (click through to /admin), then read wrangler.jsonc and src/pages/api/ in the repo

#### CodeTV (codetv.dev) — production Astro video subscription platform, open source  <sub>[OK]</sub>

https://github.com/codetv-dev/codetv.dev

*Jason Lengstorf's developer TV network: a real, revenue-generating Astro site with accounts, paid membership, paywalled video and a course builder — with the full source public.*

**Why it matters here:** This is the single best code-reading target for this project. It is a production Astro app that does everything the architecture plan assumes and more: Clerk auth, Stripe subscriptions, member-only content, a user dashboard, Mux adaptive-bitrate video, and — critically — an apps/website/src/coursebuilder/ directory. Astro's own case study on it reports LCP 1.5s p75, INP 45ms, CLS 0.0 on a video-heavy site, which is the performance answer to 'can Astro carry an app, not just a blog'.

**Steal this:**
- apps/website/src/middleware.ts — read this first. It is the session gate that decides on every request who the viewer is and what they may see. This is the file you will write an equivalent of for alumno/profesor/acudiente.
- apps/website/src/actions/ — a real-world, non-toy use of Astro Actions for mutations. Shows what belongs in an action versus an API route.
- apps/website/src/coursebuilder/ — an actual course-authoring surface inside an Astro app. Three teachers are ready to author now, and this is a working answer to 'what does the teacher's authoring UI look like'.
- The paywall gate itself: how a video page decides to render the player versus the upsell. Copy the decision point, not the Clerk/Stripe specifics.
- Mux for adaptive bitrate. Even if you cannot afford Mux, copy the principle — never ship one fixed-bitrate MP4 to an Ecuadorian mobile connection.

**Avoid:** The vendor stack does not transfer to a bootstrap budget: Netlify hosting, Clerk auth, Sanity CMS, Inngest and Mux are five paid SaaS dependencies, and Mux is metered per minute streamed — it will bankrupt a free-tier project fast. Read it for architecture and file layout, then substitute Cloudflare Stream or R2 + a cheap player, D1, and Better Auth.

**Open first:** https://github.com/codetv-dev/codetv.dev/tree/main/apps/website/src — then middleware.ts, then coursebuilder/

#### Astro case study: CodeTV + Mux  <sub>[OK]</sub>

https://astro.build/case-studies/codetv/

*Astro's official write-up of the CodeTV build, with the stack named and Core Web Vitals published.*

**Why it matters here:** Short, citable evidence that Astro handles authenticated, subscription, video-heavy production traffic. Useful when Karel needs to justify the stack choice to himself or a partner rather than re-derive it.

**Steal this:**
- The published numbers — LCP 1.5s p75, INP 45ms, CLS 0.0 — as the performance bar to hold yourself to on Ecuadorian mobile.
- The named stack list as a shopping list to find free/cheap Cloudflare equivalents for each line item.
- The framing of 'I haven't found the limits yet' as permission to keep the whole school in one Astro app rather than splitting a marketing site from an app.

**Avoid:** It is a marketing case study — it names what was used but not how. Do not treat it as documentation; the repo is where the answers are.

**Open first:** https://astro.build/case-studies/codetv/

#### Astro joins Cloudflare (announcement)  <sub>[OK]</sub>

https://astro.build/blog/joining-cloudflare/

*2026-01-16: the Astro Technology Company became a Cloudflare subsidiary; Astro stays open-source, MIT, and multi-platform.*

**Why it matters here:** This is the de-risking fact for the whole architecture plan. Choosing Astro + Cloudflare is no longer betting on two independent vendors staying friendly — the framework team is inside the host. It also explains why D1 is now the natural database answer for Astro.

**Steal this:**
- The explicit commitments to quote back at yourself later: MIT-licensed, actively maintained, and continuing to support deployment targets beyond Cloudflare — that last one is your escape hatch if Cloudflare pricing ever turns.
- The context that Astro's own commercial products (hosted DB, e-commerce) failed and were dropped — which is exactly why Astro Studio died and D1 is the path.

**Avoid:** The post deliberately does not promise deeper D1/Workers integration or preferential treatment. Do not plan around Cloudflare-specific Astro features that have not shipped.

**Open first:** https://astro.build/blog/joining-cloudflare/

#### Astro release blog (version reality check)  <sub>[OK]</sub>

https://astro.build/blog/

*Astro 7.3 shipped 2026-09-03; 7.0 brought a Rust compiler and Vite 8; @astrojs/cloudflare v14 switched the default deploy target from Pages to Workers.*

**Why it matters here:** The project context says 'Astro 5'. That is two majors behind as of today. Before any code is written, Karel needs to consciously choose a version and a Cloudflare deploy target, because getting this wrong means a migration on a live school later.

**Steal this:**
- Decide Astro 7 vs 5 now. Astro 7's Rust compiler and Vite 8 mean meaningfully faster builds, which matters when you are the only developer.
- Read the Astro 7.2 notes on incremental static builds — with four verticals of course content, rebuild time becomes your iteration bottleneck.
- Note that 7.2 added an option to opt out of session support; know it exists before you debug why sessions behave unexpectedly.
- Settle Pages vs Workers deliberately. Workers is where the adapter is heading and where D1 bindings are most natural.

**Avoid:** Do not upgrade majors mid-build just because a newer one exists. Pick one, pin it, and note that some community Astro auth examples still target Astro 5 and will need adapting.

**Open first:** https://astro.build/blog/ — read the Astro 7.0 post, then 7.2

#### Astro Actions documentation  <sub>[OK]</sub>

https://docs.astro.build/en/guides/actions/

*Type-safe server functions with built-in Zod validation and standardized errors, added in Astro 4.15, that degrade to plain HTML form posts without JavaScript.*

**Why it matters here:** This is the most important Astro feature for the Ecuadorian constraint set. Every enrolment, every quiz submission, every therapy-session booking can be an Action that works when JavaScript never finishes loading on a congested mobile connection. It also removes the need to hand-write API endpoints plus fetch calls plus validation for each mutation, which matters enormously for a solo founder.

**Steal this:**
- defineAction with accept: 'form' plus <form method="POST" action={actions.x}> and Astro.getActionResult() — this exact trio is your zero-JS fallback. Build every critical flow this way first, then enhance.
- The Zod input schema as the single source of truth for validation — write your Spanish error messages here so they are consistent across client and server.
- ActionError for standardized failures, so 'sesión expirada' and 'pago rechazado' render the same way everywhere.
- Use Actions for mutations and plain .astro pages for reads; that split keeps a solo-founder codebase legible.

**Avoid:** Actions are not a substitute for webhook endpoints — Stripe/payment callbacks still need real API routes with signature verification. Do not route those through Actions.

**Open first:** https://docs.astro.build/en/guides/actions/ — jump to the 'Form data' and progressive-enhancement sections

#### Astro Sessions documentation  <sub>[OK]</sub>

https://docs.astro.build/en/guides/sessions/

*Server-side session storage added in astro@5.7.0; the Cloudflare adapter supplies a default session driver automatically.*

**Why it matters here:** Confirms Astro has first-class server sessions on Cloudflare without bolting on a third-party service — you get Astro.session.get/set in components, context.session in Actions, API endpoints and middleware. That is the plumbing under any login you build.

**Steal this:**
- Astro.session?.get('cart') / .set() as the pattern for a partially-completed enrolment or a half-finished therapy intake form — the parent can close the tab and come back.
- Declare App.SessionData in src/env.d.ts to get typed session data; do this on day one, it costs nothing and prevents a class of bugs.
- Sessions serialize via devalue, so Dates and Maps survive — useful for storing progress state without manual JSON juggling.

**Avoid:** Sessions are unavailable in edge middleware, and the page does not document which Cloudflare store (KV vs D1) backs the default driver — verify that in the Cloudflare adapter guide before you rely on durability or assume free-tier limits.

**Open first:** https://docs.astro.build/en/guides/sessions/ then https://docs.astro.build/en/guides/integrations-guide/cloudflare/

#### Better Auth — Astro integration docs  <sub>[OK]</sub>

https://better-auth.com/docs/integrations/astro

*Official Better Auth guide for Astro: catch-all auth route, framework-agnostic client, and middleware that populates Astro.locals with user and session.*

**Why it matters here:** Astro has no official auth solution, and its own docs list Better Auth first. Better Auth is self-hosted — your user table lives in your D1, so there is no per-MAU bill, which is the deciding factor on a bootstrap budget in a market where you need thousands of low-ARPU users to work.

**Steal this:**
- src/pages/api/auth/[...all].ts as the catch-all handler — one file, done.
- The middleware.ts that calls auth.api.getSession() and writes user + session into Astro.locals. Every protected page then just reads Astro.locals. This is the single pattern the whole three-role model hangs off.
- Because Better Auth is framework-agnostic and plugin-based, plan roles (alumno/profesor/acudiente) as a plugin/field rather than three parallel auth systems.
- Self-hosted user records in your own D1 means you can join users to cursos and pagos in a single SQL query — no cross-service reconciliation.

**Avoid:** This page does not cover Cloudflare D1 or Drizzle at all — you must combine it with a D1 adapter yourself, and that seam is where the community repos below are thin and where you will spend real time. Budget for it.

**Open first:** https://better-auth.com/docs/integrations/astro — the middleware section

#### tylermercer/astro-better-auth-cloudflare-d1  <sub>[OK]</sub>

https://github.com/tylermercer/astro-better-auth-cloudflare-d1

*The literal named stack — Astro (SSR/MPA) + Better Auth + Cloudflare D1 — in one small public repo.*

**Why it matters here:** It is the only repo found whose title is exactly the architecture plan's assumption. Worth reading precisely because it is small: you can hold the whole D1-to-Better-Auth seam in your head in one sitting, which is what you actually need before writing your own.

**Steal this:**
- better-auth.config.ts plus wrangler.toml side by side — how the Better Auth database adapter gets pointed at a D1 binding is the one non-obvious step, and it is right here.
- script-utils/ — helper scripts for running migrations against local and remote D1, which is the friction point everyone hits.
- The MPA framing: this is server-rendered auth with no client framework, which is exactly right for a fast, low-bandwidth es-EC site.

**Avoid:** 2 stars, 52 commits, last updated November 2025, and the README's own TODO list admits local/production migrations and DB setup docs are incomplete and it is not yet a template repo. Treat it as a worked example to read, never as a foundation to build on — and check whether it targets Astro 5 before copying config.

**Open first:** https://github.com/tylermercer/astro-better-auth-cloudflare-d1 — better-auth.config.ts and wrangler.toml

#### aleksa-codes/deep-reads  <sub>[likely]</sub>

https://github.com/aleksa-codes/deep-reads

*A real bookmarking/discovery app — not a hello-world — built on Astro + Better Auth + Drizzle ORM + Cloudflare D1, updated March 2026.*

**Why it matters here:** Same four-part stack as the plan, but it is an actual application with users, saved items and a personal library rather than a login demo. The 'user has many saved things' shape is structurally the same as 'alumno has many cursos and progress', so the Drizzle schema and the queries transfer more directly than any starter would.

**Steal this:**
- The Drizzle schema files — how Better Auth's required user/session/account tables sit alongside your own domain tables in one D1 database.
- The per-user query patterns (fetch only this user's rows) — that is your alumno dashboard query, renamed.
- Its Astro + Drizzle + D1 build/migration scripts in package.json, which is the workflow you will run daily.

**Avoid:** 2 stars and one maintainer — no community, no issue support, and no guarantee it tracks Astro 7. Read the schema and queries; do not npm-install-and-pray. Also verify the last commit date yourself before investing time.

**Open first:** https://github.com/aleksa-codes/deep-reads — the Drizzle schema file under src/db/

#### aostiles/astro-webauthn-starter  <sub>[OK]</sub>

https://github.com/aostiles/astro-webauthn-starter

*Astro + WebAuthn (passwordless) + Cloudflare D1 + Turnstile, with a members-only content area and an admin dashboard, deployed on Cloudflare Pages.*

**Why it matters here:** Two things here matter for Ecuador specifically. First, it demonstrates gated members-only content on D1 — the core mechanic of a paid course. Second, Turnstile is Cloudflare's free CAPTCHA, and you will need it on the contact and enrolment forms. It also shows the Pages deploy path if you stay on Pages rather than Workers.

**Steal this:**
- The private/friends-only content gate — the smallest complete example of 'this page is only for logged-in members' on D1.
- The Turnstile integration on the contact form — free bot protection, no third-party bill, and one less thing to build.
- The admin dashboard for reading submitted messages — a plausible v1 for how a profesor reviews student submissions.
- Passwordless WebAuthn is worth considering as a secondary login: Ecuadorian users on mid-range Androids overwhelmingly have fingerprint sensors, and it removes password-reset support burden.

**Avoid:** 12 stars and effectively a single commit — it is a snapshot, not a maintained project, and it predates recent Astro majors. WebAuthn alone is also the wrong primary login for parents of therapy patients; offer email/WhatsApp-based access first and treat passkeys as an upgrade.

**Open first:** https://github.com/aostiles/astro-webauthn-starter — the D1 schema and the protected-route code

#### Mindful Auth — Astro 6 + Cloudflare D1 auth starter  <sub>[OK]</sub>

https://astro.build/themes/details/mindful-auth-cloudflare-d1-astro-authentication-starter/

*A free auth template listed in Astro's official theme directory: Astro 6 on Cloudflare Workers with D1, magic links, TOTP 2FA, Turnstile, CSP and audit logging.*

**Why it matters here:** The most feature-complete thing found that targets a modern Astro on Workers with D1 and does full user auth rather than API tokens. Magic-link login is a genuinely good fit for Ecuador — no password to forget, works from a WhatsApp-shared link, and sidesteps the password-reset support load that would otherwise land on a solo founder.

**Steal this:**
- The magic-link flow end to end — issue, email, verify, session — as your primary login for parents and students.
- Turnstile plus audit logging on auth events, which you will want the first time someone disputes a payment or an account access.
- Its Astro 6 middleware + CSP setup as a current-generation reference (most community auth examples are still on Astro 5).
- The demo at https://astro.mindfulvm.com to feel the flow before committing.

**Avoid:** Real caution: no public GitHub repo is linked from the listing, and access runs through a 'go.mindfulauth.com' funnel recruiting 20 founding developers for a beta with 'free lifetime access'. That is a vendor relationship, not open source. Do not put your school's auth on something you cannot read the source of and cannot fork if the founder loses interest. Evaluate the demo, steal the ideas, verify the license before adopting.

**Open first:** https://astro.mindfulvm.com — run through the magic-link and 2FA flows

#### markteekman/accessible-astro-dashboard  <sub>[OK]</sub>

https://github.com/markteekman/accessible-astro-dashboard

*MIT-licensed, 217-star Astro dashboard theme built around WCAG compliance, with a login page, dashboard overview, and keyboard-accessible collapsible sidebar. Live demo available.*

**Why it matters here:** The most-starred and most maintained Astro dashboard shell found, and the only one that leads with accessibility. That matters unusually much here: the specialized speech/learning-therapy vertical serves children with communication difficulties, and their parents will judge you on whether the interface is navigable. It is also a free, MIT alternative to buying a template.

**Steal this:**
- The keyboard-accessible sidebar (arrow keys to move, escape to close) and the mobile nav pattern — use it as the shell for both the alumno and profesor areas.
- Skip links and the .sr-only utility class — copy these into your base layout on day one, not as a later fix.
- Reduced-motion support and visible focus outlines, which are the two accessibility wins with the highest ratio of benefit to effort.
- The dashboard-overview widget grid as the layout for 'mis cursos' and a profesor's class list.
- The bundled accessible-astro-components package for accordions, modals and notifications you would otherwise build badly.

**Avoid:** Its 'login' is a fake demo using localStorage — there is no real authentication, no server session, no roles. Take the UI shell and the accessibility work; wire Better Auth + D1 underneath it yourself. Also confirm which Astro major it targets before installing.

**Open first:** https://accessible-astro-dashboard.incluud.dev/login/ — then tab through the whole thing with the keyboard only

#### Astro Showcase and Case Studies  <sub>[OK]</sub>

https://astro.build/showcase/

*99 pages of production Astro sites — Unilever, IKEA, Porsche, Proton, NordVPN, eBay Kleinanzeigen, Firebase Studio, Gitter, Microsoft Fluent 2 — plus written case studies with published numbers.*

**Why it matters here:** Answers the 'is this a serious framework' question with names, and the case studies give hard numbers (Firebase: 71% performance increase; Microsoft: Fluent 2's 200+ pages built in half the time; Thinkmill: near-100 Lighthouse across the board). Firebase Studio and Gitter are the app-shaped entries rather than marketing sites.

**Steal this:**
- Firebase Studio (firebase.studio) and Gitter (gitter.im) as the two showcase entries that are actual applications, not brochures — open them and inspect how much JS they ship.
- eBay Kleinanzeigen as evidence Astro survives high-traffic, database-backed, transactional use.
- The Thinkmill case study's argument — Astro reduced the team's dependency on senior developers — which is precisely the solo-founder-with-Claude-Code situation.
- The Microsoft Fluent 2 study as the template for structuring lots of content pages fast, which is your four-vertical course catalogue problem.

**Avoid:** The showcase is overwhelmingly marketing sites, docs and design systems. Do not read it as proof that Astro is common for logged-in apps — it is not, and the thin community tooling around Astro + D1 + auth reflects that. You are slightly off the beaten path and should expect to write more yourself.

**Open first:** https://astro.build/case-studies/thinkmill/ then https://firebase.studio

#### Khan Academy en Español  <sub>[OK]</sub>

https://es.khanacademy.org/

*The reference implementation of free education at scale in Spanish — verified at 360px, and its type stack is a masterclass in getting warmth cheaply.*

**Why it matters here:** It is the one site in this list that is simultaneously Spanish-first, education, parent-and-teacher-and-student, and engineered for low-bandwidth global reach. Ecuadorian parents and teachers already recognize and trust it, so borrowing its conventions buys instant familiarity. Measured at 360px: no horizontal overflow, clean stacking.

**Steal this:**
- The type stack, verified in the browser: headings are Plus Jakarta Sans 700 with a Noto Sans fallback; body is a pure system stack ("Helvetica Neue", Arial, Helvetica) at 14-16px. One webfont for display, zero for body. Plus Jakarta Sans is free on Google Fonts, is warm and slightly rounded without being childish, and its á/é/í/ó/ú/ñ/¿/¡ are properly drawn. Copy this decision exactly — it is the single highest-value move in this whole report for a bandwidth-constrained project.
- The Noto Sans fallback is deliberate: Noto exists for full diacritic and script coverage. Keep it in your font-family chain so no accented character ever falls back to a mismatched face.
- The headline treatment at 360px: 42px, weight 700, near-black #151521, with one phrase set in italic for emphasis ("Convierte grandes metas de aprendizaje en resultados reales"). A single italic accent inside an otherwise plain headline is a free way to add warmth without adding a font file.
- Body ink is #151521, not #000 — softened black reduces harshness on cheap LCD Android panels.
- The Spanish copy register: instructional and warm, addressing schools and students in the same sentence without talking down. Read the homepage aloud as a model for your own es-EC voice.

**Avoid:** The homepage is a JavaScript app that renders almost nothing without JS — a text-only fetch returns just the words "Khan Academy". Do not copy that architecture; Astro exists precisely so you do not have to. Also, the site is institutionally oriented (schools, districts) and its visual system is fairly neutral — it will not carry the emotional warmth the children's therapy vertical needs on its own.

**Open first:** https://es.khanacademy.org/ at 360px width, then inspect the computed font-family on an h1 versus a p

#### Duolingo (Spanish edition)  <sub>[OK]</sub>

https://es.duolingo.com/

*The benchmark for warm, chunky, unmistakably friendly learning UI — screenshotted and measured at 360px, and it is genuinely light.*

**Why it matters here:** Directly relevant to the English vertical and to any child-facing surface. More importantly it proves warmth does not require weight: measured 416KB across 120 requests with only 3 webfonts, and no horizontal overflow at 360px (content 345px in a 360px viewport). That is a realistic budget for an Ecuadorian mobile connection, unlike most of the other 'warm' brands here.

**Steal this:**
- The two-button stack at 360px: a solid green primary (#58CC02) with a hard-edged solid drop shadow that gives a physical 3D press, above a white secondary with blue text and a light grey border. All-caps, bold, generous vertical padding, full width. This is the most copyable component on the list — one primary action, one escape hatch, both thumb-sized.
- Body/heading ink is #4B4B4B — a soft warm grey, not black. Combined with pure white ground it reads friendly rather than severe. This single color choice does a lot of the warmth work.
- Flat vector characters with thick uniform outlines, no gradients, no shadows — which is why they compress to almost nothing as SVG. Commission illustrations in this style and they stay cheap forever.
- Their custom face 'duolingo-sans' at weight 700 for the H1 at 32px on mobile. Free equivalents with the same rounded-geometric warmth and correct Spanish diacritics: Nunito, Baloo 2 (designed with Devanagari/Latin diacritics in mind), or Quicksand for a lighter touch.
- The Spanish headline construction with inverted punctuation carried through — "¡La forma más divertida de aprender idiomas, ajedrez y más!". Verified: ¡, á and í all render cleanly at display size. Test your chosen font on exactly this string.

**Avoid:** The gamification apparatus — streaks, gems, hearts, leagues — is a retention machine built for a free consumer app with enormous scale. Bolted onto a paid school with three teachers it will feel gimmicky and will eat your build time. Take the visual language and the button physics; leave the game economy. The all-caps button labels also get long fast in Spanish, so check your longest label at 360px.

**Open first:** https://es.duolingo.com/ at 360px — study the two stacked buttons and the shadow on the primary

#### Nubank Colombia  <sub>[OK]</sub>

https://nu.com.co/

*The Latin American masterclass in earning trust from people who are wary of financial commitment — purple, plain-spoken, and built for exactly this market's anxieties.*

**Why it matters here:** This is the reference nobody thinks to look at, and it is the most transferable one for Ecuador. Nubank had to convince millions of Latin Americans with low card penetration and low institutional trust to hand over money online. That is Karel's exact conversion problem: an Ecuadorian parent deciding whether to pay in USD for their child's therapy from a school they have never heard of. Every trust device on this page was earned the hard way.

**Steal this:**
- "Sin letra pequeña" (no fine print) as an explicit, prominent promise. For a school taking money for children's therapy, saying plainly what is and is not included — and what happens if you cancel — is worth more than any testimonial.
- Named real users with their city: @Juanse Medellín, @Camilo Bogotá, @Lina Cartagena. Do this with real Ecuadorian students and parents — @María, Cuenca; @Diego, Guayaquil. City names make social proof feel local and checkable in a way anonymous star ratings never do.
- The regulatory trust line ("vigilada por la SuperFinanciera", Fogafín backing). Your equivalent: name the teachers' actual credentials, licence numbers for the terapia de lenguaje professionals, and any Ministerio de Educación registration. Put it in the footer of every page.
- Explicit cuotas language — "cambia las cuotas desde tu celular". Diferido is a first-class feature in this market, not a checkout afterthought. Show the per-month figure next to the total price on the course card itself.
- Scale-as-proof phrased in human terms: "3 millones de personas en Colombia ya confían en Nu" — 'ya confían' (already trust) rather than 'usan'. Copy the verb choice.
- The purple. It is warm, distinctive, reads as neither corporate-blue nor generic-edtech-gradient, and it is already coded in Latin America as trustworthy-but-modern.

**Avoid:** It is a bank — the density of legal and regulatory furniture would feel cold and bureaucratic on a children's education site. Take the trust devices and the copy register, not the layout or the information density. Also, do not literally copy Nubank's purple; you will look like a clone and you specifically want to avoid the edtech-purple trap. Take the warmth and saturation level, shift the hue.

**Open first:** https://nu.com.co/ on mobile — scroll to the named-user testimonials and the footer trust block

#### Expressable (online speech therapy)  <sub>[OK]</sub>

https://www.expressable.com/

*US telehealth speech-language pathology for children — the closest direct analogue anywhere to the terapia de lenguaje vertical, and its funnel mechanic is genuinely stealable.*

**Why it matters here:** The specialized speech/learning-therapy vertical is the hardest of the four to design, because you must be warm to an anxious parent and clinically credible at the same time. This is a real company that has solved that exact brief, and its free screener is the answer to 'how does a worried parent take a first step without committing money'.

**Steal this:**
- The free screener as top of funnel. Verified live at app.expressable.com/screener: a three-step promise — 'complete the screener' / 'view your results' / 'find a therapist' — with questions tailored to the child's age. Build a Spanish equivalent ('evaluación gratuita de lenguaje'). It converts anxiety into a concrete next step and gives you a qualified lead.
- The screener results component, which is the best single UI idea in this report: a table of Development Areas (Language, Feeding & Swallowing, Articulation, Voice & Resonance) each with a status pill — amber 'SUPPORT NEEDED' with a warning glyph, green 'ON TRACK' with a check. Reuse this exact card as both the screener output and the ongoing progress report the parent sees each month.
- The visual register on that page: warm cream/off-white ground rather than clinical white, a soft lavender pill-shaped button, a chartreuse accent, and a bold humanist sans. It reads calm and non-alarming while delivering potentially worrying news. That balance is exactly what you need.
- Therapist credibility built explicitly: master's degrees, CCC-SLP licensure, 10+ years average experience, and employees rather than contractors. Write the Ecuadorian equivalent for your three teachers and put it where a parent will see it before pricing.
- Photography of real families mid-session — not stock, not staged smiling. It shows the parent what the thing actually looks like, which reduces the fear of the unknown.

**Avoid:** The entire commercial model is US health insurance — '250+ insurance plans accepted', '$0-$21 per visit', Joint Commission accreditation. None of that exists in Ecuador and copying the pricing presentation would be meaningless or misleading. Replace it with transparent USD pricing plus cuotas/transferencia options. The claim-heavy style ('94% of clients achieve clinical progress') also carries regulatory risk for health claims — do not fabricate equivalents.

**Open first:** https://app.expressable.com/screener — take the screener yourself and study the results table

#### Lovevery  <sub>[OK]</sub>

https://lovevery.com/

*Stage-based child development products with the warmest, most parent-trusted visual system in the category — screenshotted at 360px, but heavy.*

**Why it matters here:** The best answer to 'how do we look warm and trustworthy to a parent without looking like a toy'. Its age-stage information architecture maps almost one-to-one onto structuring children's therapy and children's English by developmental stage rather than by arbitrary course level.

**Steal this:**
- Social proof placed ABOVE the H1: five stars, then '4.9/5 from 21K+ happy families', then the headline. Verified at 360px. Most sites bury reviews; putting the number first is what converts a skeptical parent. Your version: '4.9/5 según 200+ familias ecuatorianas'.
- The age-stage IA — 0-12 Months / 1-Year-Old / 2 / 3 / 4. Restructure the children's verticals this way: parents know their child's age, not their child's 'level'. It also makes the catalogue self-navigating.
- Photography direction: a real baby in a real home, natural light, slightly imperfect framing, full-bleed edge to edge. No studio, no white cyclorama, no visibly staged joy. This is achievable on a bootstrap budget in Ecuador with a decent phone and window light — arguably easier than sourcing stock.
- Warm near-black text at #424140 rather than pure black, on white, with a single saturated navy for the primary button. Restrained palette, warmth carried by photography rather than by color.
- The type pairing concept: a geometric sans for everything plus a serif italic used sparingly for emotional accent. Their faces are the licensed Brown Pro and Bradford — free substitutes with equally good Spanish diacritics are Hanken Grotesk or Poppins for the sans, and Fraunces italic or Newsreader italic for the accent.

**Avoid:** Measured 3.6MB across 250 requests — this would be punishing on Ecuadorian mobile data and is the clearest 'do not copy the implementation' case in this report. They also serve BrownPro as .woff rather than .woff2, which is careless. And Brown Pro and Bradford are expensive licensed faces, out of reach on this budget. Steal the art direction and the IA; build it at a tenth of the weight.

**Open first:** https://lovevery.com/ at 360px — the hero: stars, then review count, then headline, then one button

#### Platzi  <sub>[OK]</sub>

https://platzi.com/

*"La escuela de tecnología de Latinoamérica" — the incumbent Spanish-language tech school, and the direct competitor-shaped reference for the programming vertical.*

**Why it matters here:** This is what a 24-year-old Ecuadorian learning to code already compares everything against. Understanding its conventions tells you which patterns read as 'a real tech school' in this specific market, and where it is weak enough to differentiate against.

**Steal this:**
- The course card metadata line: "15 clases · 2hrs de contenido". Two numbers, middle dot separator, nothing else. Concrete, scannable, and it answers the buyer's actual question — how much time is this. Use this exact format on every course card.
- Testimonials tagged with country flags (Mexico, Argentina, Peru, Colombia). Add Ecuador and lead with it — being visibly Ecuadorian is your differentiator against a pan-regional incumbent that treats Ecuador as a rounding error.
- Outcome-led framing over feature-led: salary increases, career pivots, remote work. For the programming vertical, an Ecuadorian-specific outcome claim ('trabajo remoto pagado en dólares') will outperform any curriculum list.
- "Comienza gratis" as the primary CTA — a free entry point before any price is shown. Pair this with the Expressable screener idea: every vertical should have a free first step.
- The blue-dominant, neutral-background, sans-serif treatment as the baseline 'serious tech school' register — useful as the crisp end of your range for the programming vertical specifically.

**Avoid:** It is pan-Latin-American and fairly generic-modern-tech visually — it will not help at all with warmth for parents or for children's therapy. It also hides pricing behind a /precios page rather than showing it on cards, which is the wrong call for a market where people need to see the cuota before they will engage. Show your prices.

**Open first:** https://platzi.com/ — study a course card's metadata line and the flagged testimonials

#### Domestika (español)  <sub>[OK]</sub>

https://www.domestika.org/es/courses

*The largest Spanish-language creative course marketplace — screenshotted at 360px; strong catalogue mechanics wrapped in aggressive discount-driven commerce.*

**Why it matters here:** It is the most-visited Spanish-language course catalogue in the world, so its browsing conventions are what a Spanish-speaking user has been trained on. Worth studying for catalogue navigation at 360px specifically — and worth studying as a cautionary tale about what urgency tactics do to a trust-first brand.

**Steal this:**
- The 2x2 filter dropdown grid at 360px (Cursos / Categorías / Áreas / Software). Four filters in a compact square block above the results, rather than a hidden drawer. With four verticals and multiple levels, this is a clean solution to catalogue filtering on a small screen.
- The corner badge system on course cards — a small yellow 'TOP VENTAS' flag on the thumbnail. Use sparingly and honestly: 'MÁS POPULAR', 'NUEVO', 'CUPOS LIMITADOS' only when literally true.
- Breadcrumbs (Cursos > Cursos) persisting at 360px, which keeps orientation in a deep catalogue without eating vertical space.
- The high-contrast black/white/orange palette as proof you can be bold and legible without gradients — and it renders fast.

**Avoid:** The permanent countdown timer bar pinned to the top ('Este precio tiene las horas contadas… 03h:24m:02s') is a manufactured-urgency dark pattern. On a school selling children's speech therapy it would actively destroy the trust you are trying to build with parents. Do not copy it, and do not copy the perpetual-discount pricing model — it trains customers never to pay full price and makes your instalment offer look like a trick.

**Open first:** https://www.domestika.org/es/courses at 360px — the 2x2 filter block and a course card, then consciously ignore the timer

#### Crehana  <sub>[OK]</sub>

https://www.crehana.com/

*Former LatAm B2C course platform, now pivoted to B2B HR software for Latin America — useful now for exactly one thing.*

**Why it matters here:** Included for a single verified, highly transferable detail and as a market lesson. It puts WhatsApp in the primary sales path with a Mexican number, confirming that in Latin American commerce WhatsApp is a first-class conversion channel, not a support afterthought.

**Steal this:**
- WhatsApp as a primary CTA sitting alongside the main action, not hidden in a footer. Given WhatsApp is the dominant channel in Ecuador, put 'Escríbenos por WhatsApp' next to 'Inscríbete' on every pricing and course page — and make it a wa.me link with a prefilled Spanish message naming the course.
- The regional-compliance signalling (naming local institutions by acronym) as a model for how specific you should be about being Ecuadorian.
- The strategic lesson, free of charge: a LatAm B2C course marketplace found the consumer model hard enough to pivot to B2B. Consider whether schools, or parents' employers, are a second revenue line for the therapy vertical.

**Avoid:** Do not use it as a course-catalogue or B2C design reference any more — the consumer product is gone and the site is now enterprise HR SaaS with no public pricing, icon-led feature grids and 'Solicita una demo' CTAs. That whole register is wrong for selling to an individual parent.

**Open first:** https://www.crehana.com/ — find the WhatsApp CTA in the nav, then close the tab

#### CSS for JS Developers (Josh Comeau)  <sub>[OK]</sub>

https://css-for-js.dev/

*A solo-authored premium course site that is simultaneously playful and technically credible — and it prices for the developing world on purpose.*

**Why it matters here:** It solves the precise brief in the second half of the design question: warm and human, yet unquestionably credible to a working developer. It is also a one-person operation selling paid education, which is Karel's exact commercial shape, and it has already thought hard about pricing for markets like Ecuador.

**Steal this:**
- Purchasing Power Parity regional pricing — an explicit discount for lower-income countries. This is the pricing idea to take seriously: it is the respectable, non-gimmicky way to be affordable in Ecuador while charging more elsewhere, and it is a better lever than permanent fake discounts.
- The three-tier structure (Basic / Pro / Ultimate) with defined upgrade paths, plus a student discount with proof of enrolment and a 30-day refund. The refund promise in particular is cheap to offer and directly counters the 'I've never heard of this school' objection.
- The tone balance: hand-drawn curved underlines, lego and cupcake illustrations, and 'CSS can be fun. I promise.' set against testimonials from engineers at Apple, Google, Netflix and Spotify. Whimsy carries the warmth; named credible people carry the authority. Neither alone would work.
- The verified type system: Wotfard (a warm geometric sans) for headings and body, League Mono for code, and Sriracha — a handwriting face — used sparingly for asides. That third handwritten voice is the trick worth stealing; a free substitute with proper Spanish diacritics is Caveat or Gloria Hallelujah, used only for margin notes.
- A dark hero with white text opening into lighter content below — a way to feel technical without the whole site being dark.

**Avoid:** Measured at roughly 2MB over 160 requests with 5 webfonts — too heavy as-is for Ecuadorian mobile, and it threw 21 console errors on load. Wotfard is a licensed face. There are also no instalment options, only PPP, so it does not solve the diferido problem for you. And its audience is exclusively developers — none of this register works for a parent booking speech therapy.

**Open first:** https://css-for-js.dev/#pricing — read the PPP and student-discount policy, then scroll the homepage for the illustration voice

#### Headspace  <sub>[OK]</sub>

https://www.headspace.com/

*Sells a health product without looking clinical — soft yellows, calming blues, cream grounds and abstract blob illustrations instead of medical imagery.*

**Why it matters here:** The closest match to the emotional problem in the terapia de lenguaje vertical: something health-adjacent and potentially anxiety-inducing, made to feel like self-improvement rather than treatment. Their solution — organic abstract shapes instead of either clinical icons or realistic human figures — is directly applicable and cheap to produce.

**Steal this:**
- Cream and soft-neutral grounds instead of clinical white. One CSS variable change, and it immediately removes the hospital feeling from the therapy vertical.
- Abstract soft blob/organic shapes as the illustration system. They are non-threatening, they carry no age or ethnicity assumptions, they are trivially small as inline SVG, and they scale from a child's page to an adult's page without redrawing. This is the most budget-appropriate illustration direction on the list.
- The lifestyle-not-treatment copy register — 'happier and healthier lives' rather than disease language. Your Spanish equivalent should talk about a child's confidence and communication, never about deficits or disorders, on the marketing surface.
- Soft yellow as an accent. It is warm, optimistic, unusual in edtech, and it sidesteps the purple-gradient cliché entirely. Paired with a calm blue it gives you a two-accent system that can flex warm for children and cool for the programming vertical.
- One prominent 'Try for free' CTA and vertical stacking on mobile with generous spacing — legibility over density.

**Avoid:** The abstract-blob style can tip into vague and corporate if overused — Headspace gets away with it because meditation is genuinely abstract, whereas speech therapy has concrete, demonstrable outcomes that parents want to see. Mix the blobs with real photography of real Ecuadorian children and teachers, or the brand will feel like it is hiding something. Also verify page weight before copying any of their motion work.

**Open first:** https://www.headspace.com/ on mobile — note the cream ground and the blob shapes, then imagine them in Spanish

#### Linear  <sub>[OK]</sub>

https://linear.app/

*The crisp end of the range: extreme restraint, real product data in screenshots, and no marketing hyperbole.*

**Why it matters here:** The calibration reference for the programming vertical and for the logged-in application areas. A 24-year-old learning to code has absorbed this aesthetic as the signal of a serious software product; the alumno dashboard should feel closer to this than to the marketing homepage.

**Steal this:**
- Product screenshots containing realistic data — issue IDs like ENG-2852, real activity threads, actual names — rather than lorem-ipsum mockups. Screenshot your real course player with a real Spanish lesson in it. Fake-looking screenshots destroy credibility with technical users faster than anything.
- The status-badge system: small, quiet, consistently styled pills (iOS, Performance, Bug). Your equivalents: 'En progreso', 'Completado', 'Nuevo módulo'. Note this is the same component family as Expressable's screener pills — build one badge component and use it across both the technical and the therapy surfaces.
- Generous whitespace as a confidence signal. Resist filling space; a sparse pricing page reads more trustworthy than a crowded one.
- Restraint in color: neutral ground, dark text, accent color used only on interactive elements. This is also the cheapest possible design system to build and maintain solo — and it is fast.
- Avatar circles and subtle timeline graphics for the profesor/alumno activity feed.

**Avoid:** It is cold. Applied to the children's therapy vertical or to a nervous parent's first visit, this restraint reads as corporate and unwelcoming. Use it strictly for the logged-in application chrome and the programming vertical's pages, and let the marketing and children's surfaces carry the warmth. Linear's heavy gradient and animation work is also a performance trap — skip it entirely.

**Open first:** https://linear.app/ — look only at the product screenshots and the status badges, ignore the gradients

#### Brilliant  <sub>[UNVERIFIED]</sub>

https://brilliant.org/

*Interactive math and coding lessons positioned as 'your personal tutor' — bright, illustrative and interaction-first rather than video-first.*

**Why it matters here:** The strongest reference for making the programming vertical feel like doing rather than watching, which matters when your competitor is a Platzi video library and your bandwidth budget makes long video expensive to deliver anyway. Interactive text-and-diagram lessons are dramatically cheaper to serve over Ecuadorian mobile data than streamed video.

**Steal this:**
- The 'personal tutor' positioning rather than 'course library' — it justifies a higher price and smaller catalogue, which suits three teachers far better than competing on volume.
- Short interactive lesson units with an immediate feedback loop, built as HTML/SVG rather than video. This is both pedagogically better and roughly two orders of magnitude lighter than streaming.
- Its bright, confident illustration and diagram style for explaining abstract concepts — directly reusable for programming and music theory.
- The daily-problem habit mechanic as a lighter, less gimmicky alternative to Duolingo's full streak economy.

**Avoid:** Honest caveat on status: the URL resolved and the page title confirmed live ("Brilliant | Your Personal Tutor for Math and Coding"), but a competing process took over the shared browser and my 360px screenshot captured a different site, so I could not verify its mobile layout, page weight or fonts myself. Verify those before committing. Separately, its interactive lessons are JavaScript-heavy by nature — measure the payload before adopting the approach wholesale, and make sure any interactive lesson degrades to readable static content when the script fails to load.

**Open first:** https://brilliant.org/ at 360px — and check the network panel yourself, since I could not

---
