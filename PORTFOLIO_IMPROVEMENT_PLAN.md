# Portfolio Improvement Plan

Companion to `PORTFOLIO_CRITIQUE.md`. Ordered for highest leverage per hour, not by project. Each item lists the file, the principle it lifts, the rough effort, and a concrete starting move.

Effort key — **XS** ≤ 10 min, **S** ~30 min, **M** ~1–2 h, **L** half-day plus.

---

## Phase 0 — Bug fix (do first)

### 0.1 — Fix broken Athena link · XS

- **File:** `app/project/athena/page.tsx:64`
- **Problem:** `href` is `http://localhost:4321/project/athena/(https://www.hva.nl/opleidingen/communication-and-multimedia-design)` — broken in production.
- **Fix:** replace with `https://www.hva.nl/opleidingen/communication-and-multimedia-design`.

---

## Phase 1 — Authorship line on every page · S each, S total per page

A consistent block placed just below `Hero` (or just above the closing `aside`) that names what *you* did, what was a collaboration, and with whom. No padding, no inflated verbs.

Template — keep it three sentences max:

```
I [designed / built / led] X. [Collaborator / role] did Y. [Anything else] was solo.
```

Per-page anchors:

- **Microflow** — solo (state it). Mention the Master Digital Design context as the design constraint, not as collaboration.
- **Fissa** — already has Milan attributed; promote it from the closing aside to a one-line block under Hero so a scanner sees it without scrolling.
- **Spirit** — Carmen Scherbaum (design) and Prof. Dr. Steffen Moritz (clinical) — already attributed in the aside; surface the split (who did what) up top.
- **Athena** — likely solo; if so, say so.
- **Glosario** — solo (state it).
- **LiveStock** — three collaborators (Buğra, Chantal, Lena); surface the split (who designed, who built, who researched).
- **VeileNext** — the most important one to fix. The page reads as if the entire team rewrote everything; readers can't tell what you specifically did. State your role precisely (e.g., front-end lead on the React/Storybook/Cypress side, or whatever the actual scope was).
- **Assessor Bot** — already exemplary via the Alert callout naming Jaap, Niloo, Elena. Leave alone.

---

## Phase 2 — One architecture diagram per page · M each (six pages)

The single highest-leverage portfolio-wide edit. Tool default: Excalidraw, hand-drawn feel. Save under `public/<project>/architecture.png` (or `.svg`) and surface via the existing `Image` or `Safari` component with a `figcaption` that names *why* the diagram is shaped this way (per Principle 4).

Per-page brief:

- **Microflow** — sequence diagram: Figma plugin → MQTT broker → Electron host → Firmata → microcontroller. Highlight which side is "dumb" (firmware) and which side runs JS. This single artifact would lift P5 from S to S+ and visibly support P2.
- **Fissa** — architecture: Expo client → tRPC → Vercel serverless function (mark the **10-second boundary explicitly**) → Prisma → Postgres + Spotify Web API. Mark where the recommendations loop sits.
- **Glosario** — state diagram of the term lifecycle: `draft → pending → approved → suggestion → new revision → flagged-as-unclear → resolved`. Optionally a second small diagram of the term-relation vote graph. Lifts P2 and P5 simultaneously.
- **Spirit** — privacy-boundary flow: mood entry → local diary on device → optional explicit share → therapist view. Mark the device boundary clearly; that's the design's load-bearing constraint and the page never visualizes it.
- **Athena** — anonymization architecture: student feedback → server → aggregate → teacher view. Mark *exactly* where identifying info is dropped. That's the interesting design decision and the diagram makes it concrete.
- **LiveStock** — real-time multiplayer topology: 2–5 clients → Socket.io server → market simulator → state broadcast loop. Optionally annotate session length (15–60 min) where it shapes the design.

VeileNext already has architecture diagrams; leave it.

Assessor Bot has the LangChain reference diagram; consider adding a small "after" diagram showing the no-RAG path that ended up shipping (Phase 4).

---

## Phase 3 — Surface constraints + decisions on the four under-explained pages · M each

For each page, add 3–5 sentences in the form **"we picked X, not Y, because Z."** Weave them into existing `Section` blocks, don't create a "Trade-offs" table.

### Microflow

- "Electron, not a web app, because we needed direct USB access to flash the board — the browser sandbox can't do that."
- "MQTT over WebSockets so the firmware side could stay dumb — the broker handles fan-out and we don't need a server we run."
- "We generate JS for the microcontroller via Johnny-Five rather than compiling to bytecode — debugging stayed inside the JS toolchain a designer already half-knows."
- Mention the chip class / flash size constraint that shaped the protocol if it actually shaped it.

### Glosario

- "Drizzle over Prisma because [actual reason]."
- "Hono on the API edge with tRPC for typed contracts — Hono handles routing, tRPC handles client-server typing." (Or whatever the boundary actually is — currently both are listed and a reader can't tell why.)
- "Immutable revisions over an editable definition because we wanted history without merge logic."
- Multi-tenant: name the tenancy boundary (one schema per org? row-level filtering? Better Auth org claims?). Whatever you chose, say it and say what you rejected.

### Spirit

- Privacy: "Diary stays on device, never on a server — clinical data we don't own should not pass through infrastructure we run."
- Tech: a sentence each on Ionic vs native and Highcharts vs custom. If the choice was just "what I knew at the time," say that — students reading this also pick what they know.
- One sentence on what the avoidance hierarchy ladder *constrains* about the badge design.

### Athena

- "Anonymous to teachers as well as peers — half-anonymity (peers see, teachers don't, or vice versa) would have leaked identity through small group sizes."
- "LDAP for auth because students already have HvA accounts — making them register again would have killed adoption."
- "Trello connector instead of building our own task tracker — the value was in the feedback layer; reusing the tool teachers already used kept scope honest."

### LiveStock

- "Socket.io, not raw WebSockets, because session reconnects mattered more than wire-level efficiency for 5-player games."
- "15–60 min sessions because the research design needed enough exposure to abstract concepts without overstaying the participant's patience."
- One sentence on why farm symbolism survived paper prototyping (what other metaphors were tested and dropped).

---

## Phase 4 — Add iteration / failure paragraphs · S–M each

Every senior-creative-technologist page benefits from one paragraph that admits something didn't work. Three pages already have this (Fissa, Assessor Bot, partly VeileNext); five do not.

- **Microflow** — narrate the prototype 1 → prototype 2 → Microflow path. What did you change between them and why? The two repo links in the closing aside are *evidence* of iteration that the prose never captures.
- **Glosario** — name one open problem (e.g., the term-relations graph at scale, the suggestion-flood problem, anything you actively wonder about). Closing on a question reads as senior, not junior.
- **Spirit** — what didn't work in user testing? What was the limitation of the local-only diary in practice (e.g., can't recover if the user reinstalls the app)? Anything not finished is fair game.
- **Athena** — anonymity vs small-group identifiability is a real tension; if your team hit it, say so. If you didn't, name it as a known limitation.
- **LiveStock** — what did the INC research actually find? Did the symbolism work for participants or did they need scaffolding? Even one finding lifts the page from "we built this" to "we built this and learned something."
- **VeileNext** — the 2025 update is a great honesty signal. Add one sentence about what surprised you in the pilot vs the plan, even if framed loosely ("the latency target turned out harder/easier than expected because…").

---

## Phase 5 — Lighter polish

### 5.1 — Glosario CTA balance · S

Two CTAs and "Help your team!" headline tilt the page toward marketing. Move both CTAs to the end and let the body breathe as a case study.

### 5.2 — Microflow / LiveStock / Spirit code pull · M each

Each links to a real GitHub repo. Pull *one* 5–20 line snippet onto the page that's load-bearing, not boilerplate:

- **LiveStock** — the market generator (`room.controller.js#L287` linked but not shown). Show it.
- **Spirit** — anything from the local diary or fear-ladder progression logic.
- (Microflow already has three good snippets; leave it.)

A single load-bearing snippet on Spirit and LiveStock would move both from F to O on P5 — the largest single grade jump available across the portfolio.

### 5.3 — Heading audit on the older pages · S each

Headings on Spirit, Athena, LiveStock are mostly nouns ("Problem", "Challenge", "Outcome", "Symbolism"). Consider rewriting to surface the layer transition:

- Spirit: "Why patients drop out of CBT" (concept) · "What if obsessions felt like monsters?" (interaction) · "Why the diary stays on the device" (system)
- Athena: "Late feedback is no feedback" (concept) · "An anonymous weekly contract" (interaction) · "How we drop identity before the teacher sees it" (system)
- LiveStock: "Bitcoin is hard. A farm is not." (concept) · "Wool, milk, bacon" (interaction) · "How a 5-player session stays in sync" (system)

This is a P2 + P5 lift through pure prose, no new artifacts needed.

---

## Suggested ordering and effort budget

If working an hour at a time:

1. **Hour 1** — Phase 0 bug fix + Phase 1 authorship lines for Fissa, Spirit, LiveStock, Assessor Bot (high-leverage, low-cost). Ship.
2. **Hour 2** — Phase 1 authorship lines for Microflow, Athena, Glosario, **VeileNext** (VeileNext is the priority of the four; it's the page hiding your contribution most). Ship.
3. **Hours 3–4** — Phase 2 architecture diagrams: Spirit + Athena (these go from F to O on P5; biggest single uplift). Ship.
4. **Hours 5–6** — Phase 2 architecture diagrams: Microflow + Fissa. Ship.
5. **Hours 7–8** — Phase 2 architecture diagrams: Glosario + LiveStock. Ship.
6. **Hours 9–11** — Phase 3 constraints + decisions: Microflow, Glosario, Spirit, Athena, LiveStock (one hour per page is enough; you know the answers, the work is articulating them).
7. **Hours 12–14** — Phase 4 iteration / failure paragraphs across the five remaining pages.
8. **Hour 15+** — Phase 5 polish (Glosario CTA, Spirit + LiveStock code snippets, heading audit on the older trio).

Total: ~15 focused hours to lift the entire portfolio one full grade tier. The first 4 hours alone (Phase 0 + 1 + Phase 2 on Spirit/Athena) get the largest visible jump.

## How to verify each pass

After each page is updated, re-run `/portfolio-case-critic` against the changed `page.tsx` and check that the previously-Weak/Failing principles have moved to OK or Strong. The rubric is the same six principles used in this critique, so before/after grades are directly comparable.
