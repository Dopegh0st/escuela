# 08 — Capacity & Unit Economics (real roster)

**Owner of this file:** capacity, pricing, revenue split, break-even, regime choice.
**Date:** 2026-09-06 · Supersedes the (absent) business model in `MASTER-PLAN.md` §5.

The prior bundle contained **no revenue model**. `07-critique-findings.md` ran the first arithmetic
against **invented** teacher personas. This file redoes it against the **real roster** and corrects
three conclusions the master plan got wrong.

---

## 0. The roster, and the headcount ambiguity

| Person | Teaches | Verticals covered |
|---|---|---|
| **David** | Inglés **and** música | 2 |
| **Daniel** | Programación y computación | 1 |
| **Elena** | Educación especial / apoyo pedagógico | 1 |

The founder wrote **"4 teachers"** but named three people. Both readings are carried through every
table in this document:

- **Reading A — 3 people, 4 subject areas.** David is counted twice; his weekly hours are *split*
  between inglés and música. **This is the conservative planning case and every headline number
  below uses it.**
- **Reading B — 4 people.** An unnamed fourth teacher exists. Modelled as a second English teacher,
  which frees David to do música only (the highest-value use of the 4th slot — see §2).

**The ambiguity is worth $480/month of platform contribution ($5,759/yr) at 15 billable h/week, 1:1
— and $669/month if group classes ship.** That is larger than the entire month-3 founder draw in
§5. Resolve it this week; it is not a detail.

### Three corrections to the master plan

| Master plan says | Correct |
|---|---|
| "Recorded courses are the only path to 200 students" | **False.** Group classes of 4 reach 200 with the same three teachers at 15 h/week (§1.6). Recorded is the path to *margin* and *teacher-departure insurance*, not to 200. |
| "Live ceiling: 18–64 students" | **Understated.** It assumed 60-minute sessions. At the 40–45-minute lesson lengths D10 already locked, the real 1:1 ceiling is **32–65 students (Reading A)**. |
| Price "$110–130/mes, matches AMW $120" | **Wrong anchor.** AMW is Samborondón. The broader market clears at **$70/mes (Música en Casa)** and **$50/mes (Enquality inglés en vivo)**. See §8. |

---

## 1. Capacity model

### 1.1 Inputs

| Input | Value | Source |
|---|---|---|
| Weeks per month | 4.333 (52 ÷ 12) | — |
| Session length — música | 40 min | D10 (Zoom free "Original Sound" trick) |
| Session length — inglés / apoyo | 45 min | Standard tutoring block |
| Session length — programación | 60 min | Needs setup + debugging time |
| Sessions sold per month | 4 | The "4 clases/mes" package |
| Practical slot fill | **80%** | §1.4 — derived, not assumed |

### 1.2 Billable-hour ceiling per teacher

| Billable h/week | Billable h/month |
|---|---|
| 10 | **43.3** |
| 15 | **65.0** |
| 20 | **86.7** |

*Billable ≠ worked.* Add ~30–40% for prep, parent WhatsApp, no-shows and rescheduling. A teacher at
20 billable h/week is working ~27 h/week. Treat 20 as the ceiling for a teacher who has another job,
and 15 as the realistic sustained number.

### 1.3 Hours consumed per student per month, and student ceiling per teacher

| Vertical | h/student/mo | 10 h/wk | 15 h/wk | 20 h/wk |
|---|---|---|---|---|
| Música (4 × 40 min) | 2.67 | 16.2 | **24.4** | 32.5 |
| Inglés (4 × 45 min) | 3.00 | 14.4 | **21.7** | 28.9 |
| Inglés intensivo (8 × 45 min) | 6.00 | 7.2 | **10.8** | 14.4 |
| Programación (4 × 60 min) | 4.00 | 10.8 | **16.2** | 21.7 |
| Apoyo / ed. especial (4 × 45 min) | 3.00 | 14.4 | **21.7** | 28.9 |

Programación is the most expensive vertical to deliver — 60-minute sessions cost 50% more teacher
time per student than música. Either shorten it to 45 minutes or price it higher. Do not sell it at
the same price as música at the same margin.

### 1.4 The constraint nobody modelled: children are only available five hours a day

Ecuadorian *jornada matutina* runs ~07:00–13:30. School-age students are reachable roughly
**15:00–20:00 weekdays plus Saturday morning** — about **29 prime hours per teacher per week** — and
every student wants a **recurring** weekly slot.

| Billable h/wk | % of all prime slots occupied |
|---|---|
| 10 | 34% |
| 15 | 52% |
| 20 | 69% |
| 25 | 86% |

Above ~20 h/week a teacher cannot accept a new student without a slot collision, because the only
hours left are the ones no family wants. **This is why the practical fill factor is 80%, not 100%,
and why "just have the teachers work more" stops working past 20 h/week.** It also means adult
programming students — available 20:00–22:00 and during the day — are *capacity-free* relative to
children. That is a real argument for Daniel's vertical carrying an adult segment.

### 1.5 Roster ceilings — the headline numbers

**Reading A — 3 people (David split 50/50 between inglés and música), 1:1 delivery**

| | 10 h/wk | 15 h/wk | 20 h/wk |
|---|---|---|---|
| David — música | 8.1 | 12.2 | 16.2 |
| David — inglés | 7.2 | 10.8 | 14.4 |
| Daniel — programación | 10.8 | 16.2 | 21.7 |
| Elena — apoyo | 14.4 | 21.7 | 28.9 |
| **Nominal total** | 40.6 | 60.9 | 81.2 |
| **At 80% fill** | **32** | **49** | **65** |

**Reading B — 4 people (4th teacher takes inglés, David does música only), 1:1**

| | 10 h/wk | 15 h/wk | 20 h/wk |
|---|---|---|---|
| David — música | 16.2 | 24.4 | 32.5 |
| Teacher 4 — inglés | 14.4 | 21.7 | 28.9 |
| Daniel — programación | 10.8 | 16.2 | 21.7 |
| Elena — apoyo | 14.4 | 21.7 | 28.9 |
| **Nominal total** | 56.0 | 84.0 | 111.9 |
| **At 80% fill** | **45** | **67** | **90** |

> ### The maximum students the live 1:1 rail can serve
> **Reading A (3 teachers): 32 students at 10 h/wk · 49 at 15 h/wk · 65 at 20 h/wk.**
> **Reading B (4 teachers): 45 · 67 · 90.**
>
> **D9's 200-student ceiling is unreachable on 1:1 live delivery under either reading, at any
> plausible number of teacher hours.** Reading B at 20 h/week — four teachers each working ~27
> hours and occupying 69% of every after-school slot — still tops out at 90.

### 1.6 Group classes of 4 — this is what reaches 200

A group of 4 students in one 60-minute weekly session consumes **4.0 teacher-hours/month for four
students = 1.0 h per student**, versus 3.0 h for a 1:1 student. Threefold capacity gain.

| Roster / hours | Billable h/mo (80% fill) | 1:1 students | **Groups of 4** |
|---|---|---|---|
| Reading A @ 10 h/wk | 104 | 35 | **104** |
| Reading A @ 15 h/wk | 156 | 52 | **156** |
| Reading A @ 20 h/wk | 208 | 69 | **208** |
| Reading B @ 15 h/wk | 208 | 69 | **208** |
| Reading B @ 20 h/wk | 277 | 92 | **277** |

**200 students is reachable with the three named teachers at 15–20 billable hours per week, if and
only if group classes ship.** No authoring studio required, no recorded catalogue required.

This raises the priority of the schema fix the master plan already flagged: `uq_booking_teacher_slot`
permits exactly one student per teacher per slot and makes the *only* route to the founder's own
target structurally impossible. `class_session(teacher_id, starts_at, capacity, meeting_url)` +
`session_attendee` is not a nice-to-have — it is the difference between a 49-student business and a
200-student one.

---

## 2. David is a single point of failure — quantified

**Reading A, 15 billable h/week, 80% fill, $79/mes (§8):**

| Teacher | Students | Gross/mo | Platform contribution/mo |
|---|---|---|---|
| David — música | 9.8 | $770 | $254 |
| David — inglés | 8.7 | $685 | $226 |
| Daniel — programación | 13.0 | $1,027 | $339 |
| Elena — apoyo | 17.3 | $1,369 | $452 |
| **David total** | **18.4** | **$1,455** | **$480** |

> **David carries 37.8% of live revenue and 50% of the verticals.**
> Annualised exposure: **$17,459 gross / $5,759 of platform contribution.**
> The concentration is invariant to teacher hours — it is 37.8% at 10, 15 and 20 h/week alike,
> because it is structural, not a utilisation artefact.

It is worse than the percentage suggests, for three reasons the dollar figure hides:

1. **Two verticals go dark in the same billing cycle.** Not a 38% dip — a simultaneous failure of the
   *música* and *inglés* rails. There is no partial degradation mode.
2. **Half the SEO investment becomes a dead end.** `05-seo.md` builds pillars per vertical.
   `/musica/` and `/ingles/` are both David. If he leaves, ~50% of the content asset points at a
   product that cannot be delivered — the exact failure the master plan warned about for inglés, now
   applied to two verticals at once.
3. **Inglés is the highest-search-volume vertical and the most competitive.** It is the one that most
   needs continuity of teacher, because parents buy a *level progression*, not a class.

### Recommended mitigation — five items, in priority order

1. **Do not launch inglés and música simultaneously.** Sequence them. Launch **música first** (§5),
   and open inglés only when *either* (a) a second English teacher is signed, or (b) inglés launches
   as a **recorded/asynchronous** product with no teacher-hour dependency. This costs nothing and
   removes the concentration at the source. **Highest-leverage mitigation.**
2. **If Reading B is correct, put the 4th teacher in inglés — not anywhere else.** Modelled above: it
   is worth $480/mo of contribution *and* it takes David from 37.8% to 24.4% concentration in one
   move. If Reading A is correct, an English teacher is the first hire the business makes, funded
   from month-3 contribution.
3. **Record David's foundations before anyone else's.** This inverts the natural instinct (record the
   most scalable vertical first) and it is right: the recorded library is the only asset that
   survives a teacher leaving. Prioritise the *concentrated* teacher, not the diversified one. It is
   insurance, and it is the strongest business case for the authoring studio (§6).
4. **A tracked covenant: no teacher above 35% of platform contribution.** One line in the monthly
   review. When David crosses it, that month's marketing spend goes to the vertical that dilutes him.
5. **Contract terms that actually bind:** 60-day notice, a perpetual non-exclusive licence to
   recorded content that survives departure (so students who paid keep access), and a defined
   handover of in-flight students. Do **not** rely on a non-solicit — it is unenforceable in practice.
   Rely on the economics in §3.3 instead.

---

## 3. Revenue model, teacher split, and the fee/IVA waterfall

### 3.1 The waterfall — decided, not left open

`02-database.md:209` carries `revenue_share_bp DEFAULT 7000` with the note *"confirm the real number
and whether gateway fees come off the top or off the teacher's share."* Decided here:

> **IVA comes off the top** — it was never revenue; it is collected on behalf of the SRI.
> **The 5.75% PayPhone fee comes off the top, before the split.** Both parties benefit from being
> paid; and if it came only off the platform's 35%, a 5.75% cost would consume **16.4%** of the
> platform's take.
> **The teacher receives 65% of what remains.**

Order of operations, per enrolment:

```
gross charged to the parent          P
  − IVA remitted to SRI              P − P/1.15   (zero under RIMPE Negocio Popular)
  = net revenue                      N
  − PayPhone 5% + IVA on the fee     0.0575 × P   ← charged on the FULL transacted amount, incl. IVA
  = contribution base                B
  − teacher share (65% × B)          T
  = PLATFORM CONTRIBUTION            B − T
```

PayPhone's 5.75% is levied on the **gross transacted amount**, not on the net — so under 15% IVA the
gateway silently costs 6.6% of net revenue, not 5.75%. Verified: PayPhone charges 5% + IVA on the
commission, i.e. **$5.75 on a $100 charge**, with no activation fee, no monthly fee and no fixed
per-transaction component.

### 3.2 Unit waterfall — 1:1 monthly plan, 65% teacher share

**Under RIMPE Negocio Popular (0% IVA) — the year-1 case:**

| Price | IVA | Net | Gateway | Base | Teacher (65%) | **Platform (35%)** |
|---|---|---|---|---|---|---|
| $49 | $0.00 | $49.00 | $2.82 | $46.18 | $30.02 | **$16.16** |
| $69 | $0.00 | $69.00 | $3.97 | $65.03 | $42.27 | **$22.76** |
| **$79** | $0.00 | $79.00 | $4.54 | $74.46 | $48.40 | **$26.06** |
| $85 | $0.00 | $85.00 | $4.89 | $80.11 | $52.07 | **$28.04** |
| $89 | $0.00 | $89.00 | $5.12 | $83.88 | $54.52 | **$29.36** |
| $120 | $0.00 | $120.00 | $6.90 | $113.10 | $73.52 | **$39.58** |

**Under 15% IVA (Emprendedor / general regime), price shown IVA-inclusive:**

| Price | IVA | Net | Gateway | Base | Teacher (65%) | **Platform (35%)** |
|---|---|---|---|---|---|---|
| $49 | $6.39 | $42.61 | $2.82 | $39.79 | $25.86 | **$13.93** |
| $69 | $9.00 | $60.00 | $3.97 | $56.03 | $36.42 | **$19.61** |
| **$79** | $10.30 | $68.70 | $4.54 | $64.15 | $41.70 | **$22.45** |
| $85 | $11.09 | $73.91 | $4.89 | $69.03 | $44.87 | **$24.16** |
| $89 | $11.61 | $77.39 | $5.12 | $72.27 | $46.98 | **$25.30** |
| $120 | $15.65 | $104.35 | $6.90 | $97.45 | $63.34 | **$34.11** |

> **Contribution per student per month, at the recommended $79 price and 65% split:**
> **$26.06 under RIMPE Negocio Popular · $22.45 under 15% IVA.**

### 3.3 Why 65% and not 70% or 50% — the anti-leakage argument

The critique's sharpest observation stands: *"the teachers have the students' WhatsApp numbers from
the first trial class and no reason not to take them off-platform."* A revenue split does not solve
that by being generous. **It solves it by making the platform's price higher than the teacher's solo
price**, so a smaller share of a bigger number beats 100% of a smaller one.

Verified solo rates in Ecuador: Superprof lists **piano from $17/h**, **string instruments from
$13/h**, **lenguaje musical from $18/h**; general tutoring clears **$10–15/h**.

| Price · split | Teacher $/month | Teacher **$/hour** | vs a $15/h solo rate | Platform $/teacher-hour |
|---|---|---|---|---|
| $69 · 65% | $42.27 | $14.09 | −6% ❌ | $7.59 |
| $79 · 60% | $44.67 | $14.89 | −1% ❌ | $9.93 |
| **$79 · 65%** | **$48.40** | **$16.13** | **+8%** ✅ | **$8.69** |
| $79 · 70% | $52.12 | $17.37 | +16% ✅ | $7.45 |
| $85 · 65% | $52.07 | $17.36 | +16% ✅ | $9.35 |
| $89 · 65% | $54.52 | $18.17 | +21% ✅ | $9.79 |

At **$79 and 65%** the teacher earns **$16.13/hour** — above the top of the Ecuadorian solo tutoring
band and above Superprof's piano floor — while doing zero marketing, zero scheduling, zero payment
chasing and zero no-show management. That is the honest bargain, and it is the reason to stay.

**Do not implement a two-tier split** (a higher rate for teacher-sourced students). It is tempting
because months 1–3 are entirely teacher-sourced, but it permanently taxes the platform on the cohort
that will be its largest for a year, it adds schema and admin burden, and it concedes the argument
that the platform is only worth what it acquires. Instead: **one rate, 65%, plus a one-time $20
referral bonus** paid when a teacher-introduced student completes their second month. Cheap,
front-loaded, trivially buildable.

**Recorded courses split 50/50**, not 65/35 — the platform funds the studio, the hosting, the
catalogue and the traffic, and the teacher's marginal cost per additional sale is zero.

### 3.4 Teacher payout mechanics (add to the week-0 runbook)

Paying an Ecuadorian professional requires their **factura** (so each teacher needs an active RUC) or
a *liquidación de compra* with withholding. Resolution **NAC-DGERCGC26-00000009**, in force since
**1 March 2026**, sets **retención en la fuente at 10%** for *honorarios y pagos a personas naturales
por servicios en los que prevalece el intelecto*. Two consequences:

- Budget the teacher's **gross** as the 65% figure; the 10% retención is withheld from it and
  remitted, not an extra cost to Umbral. Tell teachers this before they sign, or the first payout
  will feel like a pay cut.
- **RIMPE contributors are generally not agentes de retención**, which would remove this obligation
  entirely in year 1 — one more reason to sit in Negocio Popular while you can. *Confirm with the
  accountant; the exceptions are specific and this is not legal advice.*

### 3.5 Group classes — better for everyone

| Price/student | Group revenue (×4) | Teacher (65%) | **Teacher $/hour** | Platform/group | **Platform $/teacher-hour** | Platform $/student |
|---|---|---|---|---|---|---|
| $29 | $116 | $71.06 | $17.77 | $38.27 | $9.57 | $9.57 |
| $35 | $140 | $85.77 | $21.44 | $46.18 | $11.55 | $11.55 |
| **$39** | **$156** | **$95.57** | **$23.89** | **$51.46** | **$12.87** | **$12.87** |
| $45 | $180 | $110.27 | $27.57 | $59.38 | $14.84 | $14.84 |
| *1:1 $79 (reference)* | *$79* | *$48.40* | *$16.13* | *$26.06* | *$8.69* | *$26.06* |

A group of 4 at $39 pays the teacher **$23.89/hour — 48% more than 1:1** — charges the family **half**
the 1:1 price, and earns the platform **48% more per teacher-hour**. The only cost is pedagogical
(4:1 attention), which is acceptable for música de conjunto, programación and inglés conversacional,
and **not** acceptable for Elena's apoyo pedagógico, which must stay 1:1.

---

## 4. Break-even

### 4.1 Fixed monthly cost — three regimes

| Line | Lean (RIMPE NP) | Emprendedor | Emprendedor + DPD |
|---|---|---|---|
| Workers Paid | $5.00 | $5.00 | $5.00 |
| Dominio `umbral.ec` (~$30/yr) | $2.50 | $2.50 | $2.50 |
| R2 / Bunny Stream | $1.00 | $2.00 | $2.00 |
| Contador | $25.00 | $50.00 | $50.00 |
| Facturación electrónica (Dátil) | $0 (notas de venta) | $10.00 | $10.00 |
| **DPD externo** | $0 | $0 | **$200.00** |
| **Total / month** | **$33.50** | **$69.50** | **$269.50** |

One-off, not monthly: **SENADI Class 41 — $208, or $104 with the MIPYME/RIMPE 50% discount** (Ecuador
has no multiclass system; each Niza class is a separate filing). Firma electrónica ~$30/yr
*[unverified]*. Accountant and DPD retainer figures are **estimates — get written quotes**; no
Ecuadorian provider publishes external-DPD pricing.

**The DPD line is the single largest uncertainty in this model, and it is a schema decision as much
as a legal one.** Resolución SPDP-SPD-2025-0028-R makes a DPD mandatory where an organisation *"tenga
como finalidad o se dedique habitualmente al tratamiento de **categorías especiales** de datos"* of
minors. Storing a child's name, age, guardian contact and attendance is **ordinary** personal data —
that does not trigger it. Storing a **diagnosis, a disability status, a DECE report or a
psychopedagogical assessment** is a special category and does.

> **If Elena's vertical stores no clinical or diagnostic field, the DPD line is plausibly $0 and
> fixed costs stay at $69.50/month. If it stores one, fixed costs jump to ~$269.50/month and the
> break-even for a $1,000 draw moves from 48 students to 57.** Design the schema accordingly.
>
> *Sources conflict on whether "instituciones educativas" are separately enumerated as obligated
> regardless of data category. An Ecuadorian lawyer must confirm before Elena's vertical takes a
> payment. Not legal advice.*

### 4.2 Break-even table — students needed

**Lean / RIMPE Negocio Popular** · contribution $26.06 (1:1 @ $79) or $12.87 (group of 4 @ $39) · fixed $33.50

| Founder draw | Total to cover | Students 1:1 | Students (groups of 4) |
|---|---|---|---|
| $0 | $33.50 | **2** | 3 |
| $300 | $333.50 | **13** | 26 |
| $500 | $533.50 | **21** | 42 |
| $800 | $833.50 | **32** | 65 |
| $1,000 | $1,033.50 | **40** | 81 |
| $1,500 | $1,533.50 | **59** ⚠ | 120 |
| $2,000 | $2,033.50 | **79** ⚠ | 159 |

**Emprendedor (15% IVA)** · contribution $22.45 · fixed $69.50

| Founder draw | Total to cover | Students 1:1 | Students (groups of 4) |
|---|---|---|---|
| $0 | $69.50 | **4** | 6 |
| $500 | $569.50 | **26** | 45 |
| $1,000 | $1,069.50 | **48** | 84 |
| $1,500 | $1,569.50 | **70** ⚠ | 122 |
| $2,000 | $2,069.50 | **93** ⚠ | 161 |

**Emprendedor + DPD** · contribution $22.45 · fixed $269.50

| Founder draw | Total to cover | Students 1:1 | Students (groups of 4) |
|---|---|---|---|
| $0 | $269.50 | **13** | 21 |
| $500 | $769.50 | **35** | 60 |
| $1,000 | $1,269.50 | **57** ⚠ | 99 |
| $1,500 | $1,769.50 | **79** ⚠ | 138 |

⚠ = **exceeds the Reading-A 1:1 live ceiling of 49 students at 15 h/week.**

### 4.3 The hard truth

| Roster · hours · mode | Students at ceiling | Gross/yr | **Max founder draw/mo** |
|---|---|---|---|
| Reading A @ 15 h/wk · 1:1 $79 | 52 | $49,296 | **$1,098** |
| Reading A @ 20 h/wk · 1:1 $79 | 69 | $65,728 | **$1,487** |
| Reading A @ 15 h/wk · **grupos de 4** $39 | 156 | $73,008 | **$1,660** |
| Reading A @ 20 h/wk · **grupos de 4** $39 | 208 | $97,344 | **$2,237** |
| Reading B @ 15 h/wk · 1:1 $79 | 69 | $65,728 | **$1,487** |
| Reading B @ 20 h/wk · **grupos de 4** $39 | 277 | $129,792 | **$3,005** |

> **A $1,500/month founder draw is unreachable on 1:1 live classes with three teachers at 15 billable
> hours a week.** The ceiling is $1,098. Reaching $1,500 requires *one* of: teachers at 20 h/week, a
> fourth teacher, group classes, or recorded revenue. **Group classes are the cheapest of the four** —
> they need a schema change, not a hire and not a studio.
>
> Note that D9's 200-student ceiling, delivered as groups of 4, is a **~$97,000/year gross business**.
> That is the size of the thing being planned. It is worth building properly.

---

## 5. Which vertical earns first, and the 90-day path

Scored on what actually determines month-1 revenue: buyer urgency, the price the market already pays,
the existence of a warm contact list, the regulatory gate, and teacher-hour efficiency.

| Vertical | Buyer urgency | Proven price | Regulatory gate | h/student | Capacity efficiency | Earns first? |
|---|---|---|---|---|---|---|
| **Apoyo / ed. especial (Elena)** | **Highest** — child failing school, DECE report in hand | $22–25/sesión presencial (Guayaquil) · ~$35/sesión online (Terapify) · psicólogo Quito $55 | ⚠ **Depends on the education-vs-health verdict** | 3.00 | Good | **Yes — if education** |
| **Música (David)** | Medium — discretionary, joyful | **$70/mes (Música en Casa)** · $120/mes (AMW) · $13–18/h (Superprof) | None | **2.67 — best** | **Best** | **Yes — safest** |
| **Programación (Daniel)** | Medium — adult self-funded possible | Every local competitor hides price; Platzi $249/yr | None (SETEC route open) | 4.00 — worst | Poor 1:1, **excellent in groups** | Third |
| **Inglés (David)** | High — but most competitive | **$50/mes en vivo (Enquality)** · $150/nivel (UISEK) · $225/nivel (CEC-EPN) | None | 3.00 | Good | **Hold** — see §2 |

**The call:**

1. **Elena's vertical has the best economics in the entire business** — the least price-sensitive
   buyer, near-zero online competition in es-EC, an in-person price ($22–55/session) that online can
   undercut by 25–40% while still clearing more per teacher-hour than música, and a purchase that
   recurs for *years* rather than a school term. **If the "docente de educación especial ≠ regulated
   health activity" verdict holds, this earns first.** That is precisely why the classification
   question is the highest-value open item in the project.
2. **Música is the safe first launch and the correct hedge.** No regulator, proven local price, the
   most capacity-efficient vertical (2.67 h/student), a trust asset that costs 45 seconds of video,
   and a teacher who is already ready. **Do not let the 90-day plan depend on a regulatory verdict.
   Launch música on day 1 regardless, and add Elena's vertical the week the verdict lands.**
3. **Programación third, and in groups from the start.** It is the worst 1:1 economics in the roster
   (4.00 h/student) and the best group economics — adults are available outside the 15:00–20:00
   child-slot crunch, so Daniel's capacity is genuinely additive rather than competing for the same
   scarce hours. It is also the only vertical with a credible **SETEC Operador de Capacitación** route
   to 0% IVA (§7.4). And a real wedge exists: **Kodland, Play Code Academy and Robotic Minds all
   publish no price for Ecuador.** D7 already identifies an honest published USD price as a live
   differentiator — this is the vertical where it is worth the most.
4. **Inglés last**, per §2, and preferably not as David's simultaneous second live vertical.

### The 90-day path from 0 students

SEO contributes **nothing** in 90 days — `05-seo.md`'s own plan is a 6–12 month asset. Months 1–3 come
from the teachers' contact lists and WhatsApp. Nothing else.

| Days | Action | Owner | Cost |
|---|---|---|---|
| 1–14 | RUC + **RIMPE Negocio Popular** registration → firma electrónica → PayPhone Business onboarding (**requires the active RUC — this is the long pole**) → bank account → `umbral.ec` → **SENADI Class 41 at the $104 RIMPE rate** | Founder | ~$140 one-off |
| 1–14 | **In parallel:** each teacher writes 20 names — current students, former students, colleagues, their own children's classmates' parents. 3 × 20 = **60 warm names.** This is the entire month-1 pipeline and it costs $0. | Teachers | $0 |
| 1–14 | One landing page per teacher + WhatsApp Business + a **published price**. No app is required to take the first payment — a PayPhone link over WhatsApp is enough. | Founder | $0 |
| 15–30 | WhatsApp outreach to the 60. Offer a **free 20-minute diagnostic**, not a free class — it converts better, costs a third of the teacher time, and produces a written recommendation the parent can act on. | Teachers | ~20 teacher-h |
| 30–60 | Renewals (`enrollment.expires_at` + T-5 WhatsApp reminder — the AMW *mensualidades renovables* model) + referrals from cohort 1 + Meta ads → WhatsApp | Founder | $100–150/mo |
| 60–90 | Second cohort · first group class · **RIMPE threshold decision (§7)** | Founder | — |

**Modelled trajectory** — 60 warm names, ~20% conversion in month 1, 80% monthly retention, $79 1:1,
RIMPE Negocio Popular, 65% split:

| Month | Students | Gross | To teachers | Platform | Fixed | **Founder draw** | Annual run-rate |
|---|---|---|---|---|---|---|---|
| 1 | 10 | $790 | $484 | $261 | $34 | **$227** | $9,480 |
| 2 | 18 | $1,422 | $871 | $469 | $34 | **$436** | $17,064 |
| 3 | 26 | $2,054 | $1,258 | $678 | $34 | **$644** | **$24,648** ⚠ |

⚠ **Month 3 crosses the $20,000/yr RIMPE Negocio Popular ceiling on a run-rate basis.** The regime
decision in §7 is a **month-3 decision, not a year-2 decision.** Put it on the calendar now.

**Paid acquisition — worth it, with a stop rule:**

| Spend/mo | Students acquired | CAC | Payback |
|---|---|---|---|
| $100 | 3 | $33.33 | 1.3 months |
| $150 | 4 | $37.50 | 1.4 months |
| $200 | 5 | $40.00 | 1.5 months |

> **Stop rule: kill the channel if CAC exceeds $78** (three months of contribution). Track it from
> week 1 — "¿Cómo nos conociste?" is one field at checkout and it is the only marketing
> instrumentation the MVP needs.

---

## 6. Recorded vs live mix

**Live caps at §1.5. Recorded does not — but it is not the fastest route past the cap, and the master
plan is wrong to say it is.** Groups are (§1.6). Recorded is the route to *margin* and to *insurance*.

### 6.1 Recorded unit economics

| Price | Teacher share | Platform per sale |
|---|---|---|
| $25 | 50% | $11.78 |
| **$39** | **50%** | **$18.38** |
| $39 | 40% | $22.05 |
| $49 | 50% | $23.09 |
| $79 | 50% | $37.23 |

Marginal delivery cost is negligible: at the 480p default D10 mandates (538 MB/hr), an 8-hour course
streams ~4.3 GB ≈ **$0.04–0.13** on Bunny. Effectively 94% gross margin before the split.

### 6.2 When the studio pays back

The honest hurdle is not the cash cost of the studio — there is none, it is founder time. It is
**what those 15–25 days would otherwise have produced.** In the launch window the founder's selling
converts roughly 0.65 students/day (26 students from ~40 selling-days):

| Avg student lifetime | LTV | Value of one selling-day | 20 days of studio = forgone | Payback at $39/course |
|---|---|---|---|---|
| 5.0 months | $130 | $85 | $1,694 | **92 sales** |
| 6.7 months | $174 | $113 | $2,260 | **123 sales** |
| 8.0 months | $208 | $136 | $2,710 | **148 sales** |

**92–148 course sales.** Against a live base of 26–49 students and a realistic 15% attach rate,
direct course sales alone reach that around **month 12–18, not month 6.** Anyone promising faster is
not counting the opportunity cost.

### 6.3 The real business case is retention, not sales

Bundle the recorded library **free with every live plan**. Marginal cost ≈ $0.10/student/month; the
effect is on churn:

| Retention lift | Avg lifetime | LTV | Gain/student | × 50 students/yr | × 100 students/yr |
|---|---|---|---|---|---|
| 80% → 85% | 5.0 → 6.7 mo | $130 → $174 | **+$43** | **+$2,172/yr** | **+$4,343/yr** |
| 80% → 88% | 5.0 → 8.3 mo | $130 → $217 | **+$87** | **+$4,343/yr** | **+$8,687/yr** |

**A 5-point retention lift pays back the entire studio build inside year 1** — on the existing student
base, with no new acquisition. That is a far stronger case than 92–148 course sales, and it is the
case the plan should make for D4a.

### 6.4 Recommended sequencing

| Weeks | Rail | Rationale |
|---|---|---|
| 0–5 | **Live 1:1 only.** No studio, no catalogue. Booking + `expires_at` + PayPhone link. | Revenue in week 5 validates price and checkout while both are cheap to change. |
| 5–9 | **Add group classes.** `class_session` + `session_attendee`. | Cheapest capacity multiplier in the business (3×) and the only route to 200. Ships **before** the studio. |
| 9–16 | **Authoring studio (D4a).** Author **David's** música + inglés foundations first. | Concentration insurance (§2.3) + the retention bundle. Built after there is revenue to author into. |
| 16+ | Sell recorded courses standalone to SEO traffic. | The SEO asset matures on roughly the same clock. |

---

## 7. RIMPE Negocio Popular vs the alternative — the arithmetic

### 7.1 Verified rules (2026)

| | **RIMPE Negocio Popular** | **RIMPE Emprendedor** | **Régimen General** |
|---|---|---|---|
| Income band | $0 – $20,000/yr | $20,000.01 – $300,000/yr | > $300,000, or time-expired |
| **IVA** | **0% — no declarations; the IVA is inside the annual quota (LRTI Art. 97.9)** | 15%, semi-annual declarations | 15%, monthly |
| Income tax | Fixed quota by bracket: $0 / $5 / $15 / $35 / **$60** | $60 + 1% of excess over $20k (rising to 2%) | Progressive personal table |
| Receipts | **Notas de venta** or e-invoices (choice) | Electronic invoices only | Electronic invoices only |
| **Permanence** | **No time limit** while under $20k | **Maximum 3 fiscal years, then General Regime — permanently, no re-entry** | — |

The 3-year clock is the fact nobody in the bundle had, and it changes the character of the decision:
crossing the threshold is not just a 15% tax, it starts a countdown to a permanent regime.

*Sources disagree on whether the 3-year limit also binds Negocio Popular. The weight of 2026
commentary — and the SRI's own recategorisation, which moved ~56,000 **Emprendedores** to the general
regime while moving ~14,000 **Negocios Populares** only up to Emprendedor — says it binds Emprendedor
only. **Confirm with the accountant; this is a one-way door.***

### 7.2 Where the threshold actually bites

The annual quota at the top Negocio Popular bracket is **$60** — trivial. **The whole value of the
regime is the 0% IVA.**

- $20,000/yr ÷ ($79 × 12) = **21.1 students.** The ceiling is 21 students. §5 shows month 3 at 26.
- Platform contribution per $1 of displayed price: **$0.3299** (NP) vs **$0.2842** (15% IVA).
- **Crossing costs 13.84% of platform contribution on every dollar.**

### 7.3 At what revenue does staying under $20,000 stop being worth it?

Sitting exactly at the ceiling yields **$20,000 × 0.3299 − $60 = $6,538/yr** of platform contribution.
Under Emprendedor you must out-earn that:

| Extra compliance cost | Emprendedor break-even revenue | In students @ $79 | **Dead zone** |
|---|---|---|---|
| None | $23,330/yr | 24.6 | **22 – 25 students** |
| +$40/mo (accountant + e-invoicing) | $25,080/yr | 26.5 | **22 – 26 students** |
| +$240/mo (incl. a $200 DPD retainer) | $33,832/yr | 35.7 | **22 – 36 students** |

> ### The verdict
> **The dead zone is only 4–5 students wide.** At the growth rate modelled in §5 you pass through it
> in **one month**. Throttling growth to stay under $20,000 is therefore **not a strategy** — it caps
> the founder draw at ~$500/month (§4.2: 21 students ≈ a $500 draw) and buys nothing.
>
> **Recommendation: register as RIMPE Negocio Popular on day 1.** It is free, it removes IVA, it
> removes e-invoicing, it likely removes the retención obligation on teacher payouts, and it halves
> the SENADI fee to $104. **Then cross deliberately in month 3–4 and do not look back.** Plan for the
> crossing rather than avoiding it.
>
> **The one case where the dead zone matters:** if Elena's vertical forces a $200/month DPD retainer,
> the dead zone widens to **22–36 students** — a 14-student, roughly 4-month traverse. In that case
> the sequencing changes: reach ~36 students on the non-Elena verticals *before* switching on the one
> that triggers the retainer.

### 7.4 The paperwork worth more than any code you will write

Education is 0%-rated under **LRTI Art. 56 numeral 5**, but only for establishments *"legalmente
autorizados por el Estado"* — MINEDUC, the CES, **or other training centres authorised by public
entities** (RALRTI Art. 187). That last clause is the **SETEC Operador de Capacitación** route, and
SETEC's qualification carries **no fee**.

| Annual revenue | IVA avoided | **Platform contribution gained** |
|---|---|---|
| $25,000 | $3,261 | **$1,141/yr** |
| $30,000 | $3,913 | **$1,370/yr** |
| $50,000 | $6,522 | **$2,283/yr** |
| $80,000 | $10,435 | **$3,652/yr** |

**Caveat that matters:** SETEC's remit is *capacitación continua y competencias laborales* — adult
vocational training. **Daniel's programming vertical plausibly qualifies. Children's música, inglés
and apoyo escolar plausibly do not** — those would need MINEDUC authorisation as an *institución
educativa particular*, which is a heavy lift and which, per §4.1, may itself trigger the DPD
obligation by making Umbral an "institución educativa". *So the SETEC route could save 15% IVA on one
vertical while adding a $200/month retainer across all four — which at $30,000/yr revenue is a **net
loss of $1,030/yr**.* Do the specific arithmetic before filing. **Unverified — accountant and lawyer
must confirm both halves.**

---

## 8. The pricing decision — one number per product

The bundle carried four incompatible anchors with a 4.1× swing. Here is the full evidence base,
including anchors the earlier rounds did not have:

| Anchor | Price | Note |
|---|---|---|
| AMW Academy | $120/mes, 4 clases | **Samborondón — the wealthiest suburb of Guayaquil.** Not the market. |
| **Música en Casa** (Guayaquil / Samborondón) | **desde $70/mes**, clases desde $25 | Same city, broader segment |
| **Enquality** (inglés en vivo, Quito) | **desde $50/mes** | Live teachers, monthly |
| UISEK inglés online autónomo | $150/nivel | Self-paced, university brand |
| CEC-EPN inglés | $225/nivel | Institutional, ~2 months |
| Superprof Ecuador | piano $17/h · cuerdas $13/h · lenguaje musical $18/h | Solo teachers |
| General tutoring | $10–15/h | tusclasesparticulares.com.ec |
| Terapia infantil presencial | $22–25/sesión (Guayaquil) | Prior research |
| Psicopedagogía / terapia online | ~$35/sesión (Terapify) · psicólogo Quito $55 | Online runs 25–40% below presencial |
| Platzi | $249/yr, unlimited | The recorded-content ceiling |
| Kodland · Play Code · Robotic Minds | **no published price** | The wedge D7 identifies |
| Household discretionary income | **~$200/month** | SBU 2026 = $482 |

### The recommendation

| # | Product | **Price** | What the family gets |
|---|---|---|---|
| 1 | **Plan Mensual 1:1** | **$79/mes** | 4 clases individuales (40–45 min) + biblioteca grabada incluida |
| 2 | **Plan Grupal (4 alumnos)** | **$39/mes** | 4 clases grupales de 60 min + biblioteca incluida |
| 3 | **Apoyo Pedagógico 1:1** (Elena) | **$99/mes** | 4 sesiones de 45 min + informe mensual de progreso · *1:1 only, never group* |
| 4 | **Curso grabado** (standalone) | **$39** | Acceso de por vida · free with any live plan |
| 5 | **Segundo hermano** | **−50%** | Applies to products 1–3 |
| 6 | **Clase diagnóstica** | **Gratis, 20 min** | Not a free class — a written recommendation |

### Defence of $79 against the $200/month discretionary constraint

| Price | % of $200 discretionary | 2 children, full price | 2 children with the 50% sibling discount |
|---|---|---|---|
| $49 | 24% | 49% | 37% |
| $69 | 34% | 69% | 52% |
| **$79** | **40%** | 79% ❌ | **59%** |
| $89 | 44% | 89% ❌ | 67% |
| $120 | **60%** ❌ | 120% ❌ | 90% ❌ |

**Six reasons $79 is the number:**

1. **$120 fails the household test.** It is 60% of *all* discretionary income, for one activity, for
   one child. AMW can charge it because Samborondón is not the $200/month household. Umbral's own
   locked market facts rule the $120 anchor out; the master plan kept it anyway.
2. **$79 sits between the two real live-class anchors** — Música en Casa's $70 and AMW's $120 — and
   above Enquality's $50, which is a larger-class product. It is defensible on the page.
3. **It clears the teacher-retention bar.** At 65% it pays $16.13/hour — above Superprof's $13–18 band
   and above the $10–15 general tutoring rate. At $69 it pays $14.09 and the teacher is better off
   leaving (§3.3). **$79 is the lowest price at which the split is stable.** This is the binding
   constraint, and it is why the answer is not $69.
4. **It survives the IVA crossing without a price rise.** At $79 IVA-inclusive the platform still
   keeps $22.45/student under Emprendedor. Raising the price in month 3, in front of the first cohort,
   would be the worst possible moment for it.
5. **The sibling discount is market access, not a nicety.** Two children at $79 is 79% of
   discretionary income and simply will not be bought. At −50% it is 59%, which is. Ecuadorian
   households commonly have two school-age children; without this, half the addressable market is
   priced out and the *second* sale — the cheapest sale you will ever make — never happens.
6. **The $39 group price is the affordability rail.** It is 20% of discretionary income, it undercuts
   every named competitor, and — uniquely — it pays the teacher *more* per hour than the $79 product.
   A family that cannot afford $79 is not lost; they are routed to a product with better unit
   economics for everyone.

**On Elena's $99:** priced above música and inglés because (a) the buyer is the least price-sensitive
in the market — a parent with a failing child and a DECE report; (b) the in-person alternative runs
$22–55/session ≈ $88–220/month, so $99 for four online sessions undercuts it while clearing
$25/teacher-hour at 65%; (c) it must never be group-delivered, so it cannot use the capacity escape
and must earn its keep on price. **Contingent on the education-not-health verdict.** If it lands as a
regulated health activity, this product does not launch on the platform at any price.

**On $39 for a recorded course:** Platzi's $249/yr for unlimited access caps standalone willingness to
pay hard. $39 is a considered one-off — 20% of one month's discretionary income, comparable to a video
game. Do not price recorded content above $49; the comparison set is brutal and Umbral does not win it
on catalogue breadth.

---

## 9. What this changes in the master plan

| MASTER-PLAN.md | Change |
|---|---|
| §4 "Launch two verticals" | **Launch música first (safe), Elena's second (best economics, pending verdict), programación third in groups, inglés last.** Inglés is back in — but not as David's simultaneous second live vertical. |
| §5 "Recorded is the only path to 200" | **Wrong. Groups of 4 are.** Move `class_session` + `session_attendee` ahead of the authoring studio. |
| §5 "Live ceiling 18–64 students" | **32 / 49 / 65 (Reading A) · 45 / 67 / 90 (Reading B)** at 10/15/20 billable h/week. |
| §5 "$110–130/mes" | **$79/mes 1:1 · $39/mes grupal · $99/mes apoyo · $39 curso · −50% hermano.** |
| §3 decision #2 "the price" | **Closed.** See §8. |
| §3 decision #5 "who your teachers are" | **Partially closed** — three named, headcount still ambiguous, worth $480–669/month. |
| §7 "RIMPE ≤$20,000 or 15%" | **Register Negocio Popular day 1, cross deliberately at ~21 students in month 3.** The dead zone is 4–5 students wide. |
| §10 phase 0 | Add: SENADI at the **$104 RIMPE rate**; the teachers' **60-name contact list** as a week-0 deliverable; a **written quote for an external DPD**. |
| §11 "DPD appointment" | **May not be required at all** if no special-category data on minors is stored. It is a schema decision worth $200/month. |

---

## 10. Open questions this file cannot close

1. **Is Elena's role education (MINEDUC) or health (ACESS/MSP)?** Gates the highest-margin vertical
   and, via the special-category-data question, a $200/month DPD retainer. **Highest-value open
   question in the project.**
2. **Three teachers or four?** Worth $480–669/month of contribution. One question to the founder.
3. **Does SETEC Operador de Capacitación cover children's tutoring, or only adult vocational
   training?** Worth $1,141–$3,652/yr — and it may cost more than it saves if it makes Umbral an
   "institución educativa" for DPD purposes.
4. **Does the 3-year RIMPE permanence limit bind Negocio Popular?** Sources conflict. It is a one-way
   door to the general regime. Accountant.
5. **Is a RIMPE Negocio Popular an agente de retención on teacher payouts?** Worth real admin cost.
6. **External DPD retainer — an actual quoted price.** No Ecuadorian provider publishes one. The $200
   used here is an estimate, and it is the largest uncertain line in the fixed-cost model.
7. **Does PayPhone charge its 5.75% on the gross including IVA?** Modelled as yes (standard gateway
   practice). Confirm in writing — it is worth 0.86 points of margin.
8. **Retention.** Every LTV figure here assumes 80% monthly retention. Nothing in Ecuador validates
   that number. Instrument it from student one; it moves LTV by 60%+ across the plausible range.

---

## Sources

- [PayPhone — ¿Cuánto cuesta Payphone?](https://help.payphone.app/hc/es/articles/31532700571931--Cu%C3%A1nto-cuesta-Payphone) · [Botón de pago](https://www.payphone.app/productos/boton-de-pago)
- [SRI — Régimen RIMPE](https://www.sri.gob.ec/en/rimpe) · [Russell Bedford — Recategorización RIMPE 2026](https://russellbedford.com.ec/recategorizacion-rimpe-y-nuevas-obligaciones-ante-el-sri-2026/) · [Boletín Contable — IR RIMPE 2026](https://boletincontable.com/2026/05/05/impuesto-a-la-renta-rimpe-negocio-popular-2026/) · [VerifacturaEC — Régimen RIMPE](https://www.verifacturaec.com/guias/sri/regimen-rimpe)
- [SRI — LRTI Art. 56 (IVA sobre servicios)](https://www.sri.gob.ec/o/sri-portlet-biblioteca-alfresco-internet/descargar/b206dbb3-c588-4f1f-9923-8f3150e8d5a0/Ley%20de%20R%C3%A9gimen%20Tributario%20Interno_art%C3%ADculo%2056.pdf) · [SRI — Bienes y servicios con tarifa 0%](https://www.sri.gob.ec/o/sri-portlet-biblioteca-alfresco-internet/descargar/38e837fe-49b1-460c-983e-efd39fd04303/Bienes%20y%20servicios%20gravados%20con%20tarifa%20cero%20porciento%20del%20IVA.pdf)
- [gob.ec — Calificación como Operador de Capacitación (SETEC)](https://www.gob.ec/mt/tramites/calificacion-operador-capacitacion-0)
- [EcuFacturas — Retención en la fuente 2026](https://ecufacturas.com/noticias/retencion-en-la-fuente-ecuador-2026-porcentajes-codigos.html) · [HLB Ecuador — Nuevos porcentajes 2026](https://www.hlbecuador.com/nuevos-porcentajes-de-retencion-en-la-fuente-2026/)
- [SPDP — Resolución SPDP-SPD-2025-0028-R](https://spdp.gob.ec/wp-content/uploads/2025/07/028-R.pdf) · [SB Abogados — Delegado de Protección de Datos](https://sbabogados.com.ec/delegado-proteccion-datos-ecuador-resolucion-spdp-0028/) · [NMS — plazo DPD](https://nmslaw.com.ec/blog/2025/12/15/recordatorio-plazo-delegado-proteccion-datos-ecuador/)
- [Juristam — Registro de marca Ecuador 2026](https://juristam.net/blog/proceso-registro-marca-ecuador.html) · [gob.ec — Registro de marcas SENADI](https://www.gob.ec/senadi/tramites/registro-marcas-productos-servicios-unico-personas-naturales-juridicas-sean-nacionales-extranjeras)
- [Música en Casa — clases online](https://academiamusicaencasa.com/clases-musica-online) · [Superprof Ecuador — piano](https://www.superprof.com.ec/clases/piano/ecuador/) · [Superprof — lenguaje musical](https://www.superprof.com.ec/clases/lenguaje-musical/ecuador/)
- [Enquality — curso de inglés Quito](https://www.enquality.com/) · [UISEK — inglés online autónomo](https://uisek.edu.ec/oferta-academica/instituto-de-idiomas-uisek/ingles-online-autonomo/)
- [tusclasesparticulares.com.ec — costo por hora](https://www.tusclasesparticulares.com.ec/questions/espanol/cual-es-el-costo-por-hora-de-clase) · [cuantomecuesta.com — psicólogo y terapia Ecuador](https://cuantomecuesta.com/ec/psicologo-terapia/) · [Precios psicólogo Quito 2026](https://psicologoluispellon.com/precio-psicologo-quito/)
- [Kodland](https://www.kodland.org/) · [Play Code Academy](https://playcodeacademy.com/) · [Robotic Minds Ecuador](https://roboticminds.com.ec/) — all consulted; **none publishes a price for Ecuador**

*Not legal, tax or accounting advice. Every regime, retención, DPD and 0%-IVA claim in this document
must be confirmed by an Ecuadorian accountant and lawyer before the first sale.*
