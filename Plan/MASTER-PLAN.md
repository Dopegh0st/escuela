# Umbral — Master Plan

**Online school for Ecuador.** Consolidated from 4 research agents, 6 specialist planners and
4 adversarial critics (14 agents, 2.25M tokens, 0 errors), reconciled against the founder's
locked decisions in [00-locked-decisions.md](00-locked-decisions.md).

Date: 2026-09-06 · Consolidated by Claude from `Plan/agents/*`

---

## 1. The name: **Umbral**

*Threshold.* Recommended over 9 scored alternatives, and the reasoning is unusually strong:

- **It is real vocabulary inside every vertical at once.** *Umbral auditivo* is what a speech
  therapist actually says to a parent. Threshold values are programming vocabulary. Threshold of
  hearing is music vocabulary. And *cruzar el umbral* is warm household Spanish. Most brands must
  *assert* they span their categories; this one is already spoken inside each of them.
- **It solves the dual-audience problem.** "Umbral — Terapia de Lenguaje y Aprendizaje" reads
  clinically credible to a parent. "Estudio en Umbral" reads fine from a 24-year-old. A mascot
  name fails the first test; a Latinate academic name fails the second.
- **It is actually ownable.** `umbral.ec` and `umbral.com.ec` both return **NXDOMAIN**, and no
  Ecuadorian or LatAm education business uses the name. Every other shortlisted name was blocked:
  Compás by an Ecuadorian competitor, Quinde by a Favorita house brand, Cantera by a Quito
  football school. At bootstrap scale you cannot afford a rebrand or an opposition proceeding.
- **Subject-agnostic by construction.** A threshold has no subject — add chess or accounting in
  2028 without touching the brand.
- **Passes the WhatsApp test.** Six letters, no accent, no `ñ`, spelled right first time.

**Primary domain: `umbral.ec`, not `.com`.** For an Ecuador-only business `.ec` is a trust asset,
not a downgrade — no residency requirement, shorter, and it signals "we are here" against foreign
competitors. Don't buy `umbral.com` on the aftermarket at launch.

**Act on this now:** register `umbral.ec` + `umbral.com.ec` and file **SENADI Class 41** before
spending anything on design. Runner-up *Quinde* only if therapy becomes the primary business and
you decide warmth beats ownability — and then file Class 41 first.

---

## 2. The honest verdict

**The plan as written does not ship in 6–8 weeks. It is off by 2–2.5×.**

The six specialists jointly committed to **~555–840 build hours** (midpoint ~700). One founder at
6 days × 8h for 8 weeks has a **384h ceiling** — before RUC/SRI registration, PayPhone onboarding,
firma electrónica, SENADI filing, DNS and legal drafting. Your own D8 note predicted this:
*"global craft bar + in-app teacher authoring + 6–8 week MVP is over-constrained."* All three
build plans ignored it — each kept the date, kept the scope, and quietly assumed one of the others
was carrying the cut.

**Cloudflare is not the problem.** The critics verified `astro@7.3.1`, `@astrojs/cloudflare@14.3.0`
and `better-auth@1.7.3` all exist as pinned; native scrypt works on Workers; and D1 writes land at
**~0.5% of the paid allowance** at your scale. The stack is sound and the quota math is a non-issue.

What breaks is **coherence and scope**. Six documents contradicted each other on the video backend,
the lesson player, the payment schema, and whether the revenue product is even in the MVP.

**Recommendation: 12–14 weeks to a real launch, with a paid pilot in week 5.** Or hold 8 weeks by
cutting to the scope in §4. Per D8, cut features — not craft.

---

## 3. Five decisions to make this week (three are irreversible)

| # | Decision | Why it can't wait |
|---|---|---|
| 1 | **D1 jurisdiction** (`eu` vs default) | **Immutable at `wrangler d1 create`.** Cloudflare cannot store data in Ecuador or anywhere in LatAm — jurisdictions are `eu` and `fedramp` only. Every student record is a cross-border transfer. You will hold children's records. Choose deliberately, once. |
| 2 | **The price** | Four incompatible anchors across the bundle — a **4.1× swing** ($29/mes vs $120/mes vs $22/sesión). Copy, checkout, margin and break-even are all blocked on one number. |
| 3 | **Domain + SENADI Class 41** | `umbral.ec` is free today and not tomorrow. Trademark before design spend. |
| 4 | **Which verticals launch** | Determines ~40% of the build. See §4. |
| 5 | **Who your three teachers actually are** | The design agent *assumed* Nayeli (terapia), Andrés (música), Diego (programación) — **these are invented personas, not your real staff.** The critics' "English has no teacher" finding rests on that assumption. Confirm the real three; it decides §4. |

---

## 4. What launches — the recommended cut

**Launch two verticals, not four.**

| Vertical | v1 | Reasoning |
|---|---|---|
| **Música** | ✅ Full | Teacher ready. Proven local price ($120/mes for 4 classes, AMW Academy). Async video-exchange model works well. |
| **Programación** | ✅ Full | Teacher ready. Recorded courses scale past the teacher-hour ceiling. |
| **Inglés** | ❌ Cut | **No English teacher appears anywhere in the plans.** Do not publish an `/ingles/` SEO pillar for a vertical with no supply — it burns your best-converting queries on a dead end. Confirm against decision #5. |
| **Terapia de lenguaje** | ⚠️ Waitlist page only | See below. |

### Why therapy must not launch on the platform in v1

It is a **regulated health activity**. Verified: SENESCYT + **ACESS professional registration**, an
**ACESS operating permit**, and the **Oct-2025 Norma Técnica de Telesalud** extends that permit to
remote delivery. Storing session recordings of minors stacks sensitive-data + minors' data +
large-scale classification + **mandatory DPIA** + cross-border transfer duties.

And a **Data Protection Delegate is legally mandatory** for any institution processing minors' data
(Resolution SPDP-SPD-2025-0028-R Art. 10.1/10.3) — **and the delegate cannot also be the person who
implements compliance, so you cannot legally be your own DPD.** Enforcement is live: the SPDP
issued its first fines in December 2025 (USD 259,644 to LigaPro, USD 194,856 to the FEF).

**The elegant part:** a waitlist + WhatsApp page *is* the competitive standard here. Every
Ecuadorian therapy incumbent (FUNCADE, Hemisferios) runs pure lead-gen with no price and no cart.
So this cut costs nothing competitively, removes ~60–80 build hours, and deletes the guardian role,
two-step telesalud consent, clinical DB isolation and the ACESS/DPD launch blockers from v1. Your
therapist keeps working — just not through the app until compliance is funded.

---

## 5. The business model (this was entirely missing)

Across ~6,000 lines the bundle contained **no revenue model, no unit economics, no margin, no
break-even, and no teacher-capacity model.** The only financial table was an infrastructure bill.

### The capacity ceiling you must know

**200 students is arithmetically impossible on live classes with three teachers.** At 4
classes/month, 200 students = **800 class-hours/month**. Three teachers at a generous 20 billable
hours/week deliver **~258 hours/month**. Real live ceiling: **18–64 students.**

**This resolves the recorded-vs-live tension:** live classes start the revenue and cap at ~50
students; **recorded courses are the only path to 200.** Both are needed, in that order.

### Recommended pricing

| Product | Price | Basis |
|---|---|---|
| Live package (4 classes/mes) | **$110–130/mes** | Matches AMW Academy's proven $120/mes |
| Recorded course (one-off) | **$25–45** | Against ~$200/mo discretionary income; Platzi anchors at $249/yr |
| Therapy (off-platform) | $22–25/sesión | Market rate, Guayaquil |

Anchor: 2026 SBU is **$482/month**; typical household has **~$200/month discretionary**.

### Month-2 collection — the gap that would have killed you

The headline product is monthly. **PayPhone's Botón de Pago is a one-shot browser redirect with no
card-on-file and no tokenisation.** Nothing in the stack could charge month two.

**Adopt AMW's proven local model — "mensualidades renovables":** `enrollment.expires_at` enforced,
a renewal-reminder cron, and a payment link delivered over WhatsApp. This is not a workaround; it
is what already works in this market, and it sidesteps recurring-billing infrastructure entirely.

---

## 6. Phase-1 spend discipline (D10)

Money in phase 1 goes to **marketing and teachers**. Infrastructure runs as close to zero as
correctness allows.

| Line | Phase 1 | Why |
|---|---|---|
| Workers Paid | **$5/mo — mandatory** | Password hashing needs 30–50ms CPU vs the free tier's 10ms cap. This one is not optional. |
| Bunny Stream | **~$1–3/mo** | Only once recorded courses exist. Zero until then. |
| R2 | **~$0–1/mo** | PDFs, partituras, course art. |
| Domain | ~$30/yr | `umbral.ec` |
| **Live video** | **$0** | See below |
| ~~Zoom Pro~~ | **deferred** | Saves $14.16/mo — see below |

**Total phase 1: ~$6–9/month.**

### Live classes on $0 — and better than you proposed

Your instinct was to use Zoom free and accept the 40-minute cut, since local companies do that and
people are used to it. That's true, but two verified facts make it unnecessary:

- **[Google Meet free allows 24 hours on 1:1 calls](https://meetgeek.ai/blog/google-meet-time-limit)**
  (60 minutes only once a third person joins). Zoom free caps 1:1 at 40 minutes. For one-to-one
  classes Google Meet is **free *and* has no cut** — strictly better.
- **[Zoom's "Original Sound for Musicians" is available on the free tier](https://www.musicinst.org/zoom-update-high-fidelity-mode)**
  — 48 kHz, up to 96 kbps mono / 192 kbps stereo, with Zoom's audio processing disabled. You do
  **not** need Zoom Pro to get high-fidelity instrument audio.

**Recommended $0 configuration:**

| Class type | Tool | Cap | Notes |
|---|---|---|---|
| 1:1 programación / inglés / general | **Google Meet free** | 24h — never bites | No reconnect, ever |
| 1:1 música | **Zoom free** + Original Sound for Musicians | 40 min | See below |
| Group (3+) | **Google Meet free** | 60 min | Better than Zoom's 40 |

**The music trick: schedule 40-minute lessons and the cap becomes invisible.** Standard music
lesson lengths are 30 / 45 / 60 minutes — 40 sits naturally in that range, and 30 is normal for
younger children. Price the package as *"4 clases de 40 minutos"* and no one ever reconnects. You
get free high-fidelity audio with none of the friction, which is a better outcome than the
cut-and-reopen norm you were willing to accept.

Upgrade trigger: buy the single Zoom Pro seat ($14.16/mo) only when a teacher actually wants
60-minute music lessons, and pay for it out of revenue.

**Do not embed any of this in the app in v1.** Live classes are a `meeting_url` stored in D1 —
no SDK, no WebRTC infrastructure, no cost. (Security rules in §8 still apply to those links.)

---

## 7. Locked technical stack

Astro **7.3.1** + `@astrojs/cloudflare@14.3.0` on **Workers Static Assets** (not Pages — the adapter
dropped Pages in v13). **D1** via **Drizzle 0.45.2**. **Better Auth 1.7.3**, sessions in **D1 not
KV**, with a hand-overridden `node:crypto.scryptSync` hasher. Recorded video on **Bunny Stream**.
Payments **PayPhone** REST + manual transfer. Live classes = a **meeting URL in D1**. Zero UI
framework on public routes; **Svelte 5 islands only inside `/estudio/*`**.

### Non-obvious rules that will bite you

- **Never provision KV for sessions.** The adapter auto-wires Astro Sessions to KV → 1,000
  writes/day → sessions silently fail at **19:00 Ecuador time, mid-evening study peak.**
- **Override Better Auth's default hasher.** It costs 80–100 ms CPU (issues #8456 / #8860). Native
  scrypt is 30–50 ms — still 3–5× over the free tier's 10 ms cap, which is why **$5/mo is
  mandatory**.
- **Stripe does not serve Ecuador at all** — not as merchant, not even as a payouts destination.
- **Lucia is deprecated** — do not install. **MailChannels' free Workers API died 2024-08-31.**
- **Cal.com went closed source April 2026** — build scheduling in D1.
- **IVA is 15%, and education is only 0%-rated if the State authorises the establishment**
  (RALRTI Art. 187). An unaccredited academy charges 15% unless it registers as an Operador de
  Capacitación Calificado or stays under **RIMPE Negocio Popular** (≤$20,000/yr).

### Music: stop trying to solve latency

Quito→Miami RTT is **~49 ms measured** against a **25 ms ensemble threshold**. Real-time playing
together is impossible on *any* platform at any price. **Design lessons as turn-taking and buy
fidelity, not latency.** Consider **ArtistWorks' async video-exchange model** as a primary format:
student records, teacher responds. Cheaper, better, and it sidesteps the physics entirely.

### Bandwidth: the real constraint is cost, not speed

Prepaid bundles run **$9–15/month for 8–12 GB**, and out-of-bundle data is **$0.10/MB ≈ $100/GB**.
Default the player to **480p** (538 MB/hr), ship a **240p** rung and an **audio-only** rendition
(29 MB/hr), and keep lessons **6–10 minutes**.

---

## 8. Contradictions the critics found — resolved here

| Conflict | Resolution |
|---|---|
| Design ships video to **R2**; architecture ships to **Bunny** | **Bunny wins.** Delete "direct to R2" from the design. R2 keeps PDFs, partituras, audio-only, course art. |
| Design wants a **custom hls.js player**; architecture ships a **cross-origin iframe** | An iframe cannot expose the playback state the design's keyboard map, synced transcript and resume behaviour need. **Ship the iframe in v1 and delete those features from the design**, or budget the custom player. Do not ship both specs. |
| Payment schema **cannot support the flow** | Add `payment.client_transaction_id TEXT NOT NULL UNIQUE` (PayPhone's correlation key, ≤15 chars) and the missing states `pending_transfer`, `reversed`, `pending_verification` **before migration 0005**. |
| Live classes are the **revenue hero** but absent from the architecture route map | Booking is **MVP**. Add `/clases-en-vivo`, `/reservar`, `/estudio/agenda`. Budget 30–45h. |
| **Audio-only + captions** promised in player UI, FAQ, error copy and bitrate ladder — pipeline never built | Either build it (15–30h: Bunny webhook → Workers AI Whisper → VTT + 64 kbps audio → R2) **or cut every UI promise referencing it in the same edit.** |
| Schema forbids group classes | `uq_booking_teacher_slot` makes a group class impossible to represent. Add `class_session(teacher_id, starts_at, capacity, meeting_url)` + `session_attendee` **before 0005** — retrofitting after live bookings exist is a painful migration. |

### The one that would have blocked every sale

**A mother buying therapy or classes for her child cannot be represented.** The order binds to the
payer; there is no beneficiary anywhere in the commerce chain, and `otorgarMatricula(ctx, orderId)`
has no student parameter. This is *the single most common purchase in this market*.

**Fix:** add `order_item.beneficiary_user_id` (default = buyer), make enrolment grant to the
beneficiary, and add a "¿Para quién es?" step to checkout.

---

## 9. Safeguarding — must exist before any teacher meets a student

Six documents, ~6,000 lines, designing a platform where **adults deliver 1:1 live sessions to
children**, contained **zero safeguarding controls**. No vetting, no code of conduct, no
guardian-presence rule, no off-platform-contact rule, no incident reporting, no owner.

Required in week 0:

1. **Vetting file per teacher** — certificado de antecedentes penales, título + SENESCYT
   registration (ACESS registration for a therapist), stored as evidence against `teacher_profile`
   with verifier name and date. Hard block on teaching until complete.
2. **One freshly generated meeting link per session** — never a reusable personal room — written at
   booking confirmation, nulled on cancel/refund/revoke, host-admit mandatory. *As currently
   specified the link is a permanent unauthenticated bearer URL: anyone ever forwarded it in a
   WhatsApp group can rejoin a class with children in it, indefinitely.* This applies equally to
   the free Google Meet / Zoom links in §6.
3. **Ask date of birth at registration in every vertical.** Consent and guardian controls were
   scoped only to therapy, but minors are the core audience of at least three verticals and the
   signup flow has **no age question at all**.
4. **Guardian links must be invite-and-accept**, never self-asserted. As specified, `wardIds` is
   trusted from the actor — register an account, assert a ward id, read another child's records.
5. **Never back up children's records to personal Google Drive** (as the plan instructed) — it
   voids the entire reason for choosing EU jurisdiction.

**Clinical isolation as designed does not exist.** Cloudflare bindings are per-Worker, not
per-route; Astro compiles to a single Worker, so `CLINICAL_DB` and the encryption key are reachable
from every route. Real isolation needs a **separate Worker behind a service binding**. (Moot in v1
if therapy is a waitlist page — another reason to cut it.)

---

## 10. Recommended schedule (12–14 weeks)

| Phase | Weeks | Content |
|---|---|---|
| **0 — Legal & irreversible** | 0–1 | D1 jurisdiction signed off · domain + SENADI Class 41 · price locked · RUC/SRI + RIMPE decision · teacher vetting files · privacy policy, terms, refund policy drafted |
| **1 — Foundation** | 1–3 | Astro 7 + Workers + D1 + Drizzle · Better Auth with native scrypt · schema through 0005 **including** `class_session`, `beneficiary_user_id`, `client_transaction_id` |
| **2 — Revenue rail** | 3–5 | Package product · availability · booking · attendance · meeting link · renewal job · PayPhone + manual transfer · **paid pilot with real students in week 5** |
| **3 — Teacher studio** | 5–9 | Curso → módulo → lección CRUD · drag reorder · Bunny upload with resumable progress · draft/publish · "Ver como estudiante" |
| **4 — Student experience** | 9–12 | Lesson player at the D8 bar · dashboard · progress · catalogue · marketing routes |
| **5 — Admin & launch** | 12–14 | Student lookup + destructive actions behind `audit_log` · payments queue · refunds · SEO pillars · seed 2 example courses |

**Week 5 matters most:** real money from real students before the studio is built. It validates
pricing, checkout and the payment rails while they are still cheap to change.

---

## 11. Still missing, still needs an owner

- **Refunds** — no policy, no process, no MVP schema, no SRI nota de crédito path. `refund` was
  deferred to v2 while `/legal/reembolsos` shipped in MVP. Write the policy this week; it is also
  required pre-purchase disclosure copy. Confirm PayPhone's refund capability **in writing**.
- **Admin tooling** — six route names, zero specification, yet counted inside "39 MVP screens."
  Without it you will run SQL against production D1 by hand to fix a student who paid but wasn't
  enrolled.
- **Compliance workstream** — named owner, cash line, calendar. Currently on no schedule, in no
  budget, against no name.
- **DPD appointment** — legally mandatory once you touch minors' data, and it cannot be you.

---

## 12. Open questions for you

1. Who are your **three actual teachers**, and what does each teach? (Decides §4 entirely.)
2. **Live packages or recorded courses first?** Recommendation: live for revenue in week 5,
   recorded for scale by week 12.
3. **D1 jurisdiction** — EU, or default? Irreversible.
4. Is **8 weeks a hard external commitment**, or your own target? If hard, I cut to §4's scope and
   drop the teacher studio to v2 with founder-entered courses in the interim.
5. Do you have a **lawyer/accountant in Ecuador** for RUC, RIMPE, SRI and the LOPDP work?

---

## Source documents

| File | Contents |
|---|---|
| [00-locked-decisions.md](00-locked-decisions.md) | Your decisions D1–D10 — overrides everything else |
| [agents/00-reference-sites.md](agents/00-reference-sites.md) | 128 verified reference sites with what to steal |
| [agents/01-architecture.md](agents/01-architecture.md) | Routes, auth, rendering, payment flow |
| [agents/02-database.md](agents/02-database.md) | Full DDL, 43 tables, ER diagram |
| [agents/03-tech-stack.md](agents/03-tech-stack.md) | Pinned versions, Workers traps, cost model |
| [agents/04-design-ux.md](agents/04-design-ux.md) | Personas, page inventory, design system, es-EC copy |
| [agents/05-seo.md](agents/05-seo.md) | es-EC keyword plan, schema.org, content calendar |
| [agents/06-brand-naming.md](agents/06-brand-naming.md) | Naming analysis, scoring, verbal + visual identity |
| [agents/07-critique-findings.md](agents/07-critique-findings.md) | All 81 findings, 24 blockers |
