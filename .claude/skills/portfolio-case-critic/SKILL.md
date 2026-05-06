---
name: portfolio-case-critic
description: Critique a portfolio case study for a creative technologist (design + code hybrid) against six principles tuned to that role, and return a per-principle rubric followed by a prioritized fix list. Use whenever the user shares a draft or published portfolio piece, project page, case study, or "/project/<name>" page and asks for review, feedback, critique, edit, "is this any good?", "rip this apart," "review my project page," "why isn't this landing with hiring managers?", or pastes a URL/Markdown/JSX asking what to improve. Also trigger when a user has written up a project, work sample, or engineering write-up and wants a quality check before publishing. Output is honest and concrete — every issue cites a specific line or section.
---

# Portfolio Case Critic

Critique a portfolio case study for a **creative technologist** — someone whose value lives in the integration between design and engineering. Generic UX-portfolio rubrics under-grade these cases because they reward narrative polish and miss the systems work. This rubric is tuned to the role: it grades whether the case study proves *integration*, not just process.

The companion skill `portfolio-case-writer` is built on the same six principles; pair them when the user is iterating.

The point of this skill is **honest, actionable critique**, not validation. A useful critic catches issues the author can't see because they're too close to the page. Be specific, cite lines, propose concrete edits.

## Workflow

1. **Acquire the case study.** User pastes Markdown, JSX/TSX, a URL, or a file path. If the page is a `.tsx` file in `app/project/<name>/page.tsx`, read it as-is — the prose is what matters; the JSX components (`Hero`, `TLDR`, `Section`, `Text`, `Image`, `CodeBlock`, etc.) are the structural skeleton.
2. **Read it once as a reader would.** Don't grade on the first pass. Pay attention to where you got bored, where you got confused, where you flipped from "design" mode to "engineering" mode in your head — those moments are diagnostic.
3. **Run the scan test.** Mentally strip everything but the hero, TL;DR, sub-headings, and visuals. Does the scan convey problem + role + outcome and at least hint at the systems work?
4. **Score each of the six principles** using the rubric below. Cite specific lines/sections as evidence. Do not grade-inflate.
5. **Produce the prioritized fix list.** Top issues first, ordered by likely impact on a hiring reader's trust.
6. **Hand back both** — rubric first, then fix list — followed by a one-line bottom-line verdict.

If the page is a small experiment or sketch (not a flagship project), say so and scale the critique. Don't apply senior-hiring-bar standards to a learn-in-public note unless the user asked for that bar.

---

## The six principles (rubric source)

Condensed reference. For full reasoning see the sibling `portfolio-case-writer` skill.

1. **Open with clarity.** Title + first screen must answer problem, role, outcome. TL;DR has no warm-up.
2. **Show the translation layers.** The page visibly crosses concept → interaction → system → code; layer transitions are marked.
3. **Frame constraints as creative drivers.** Real constraints (perf, hardware, API, time, money, accessibility) are named and visibly drive later decisions.
4. **Make decisions explicit.** "We picked X, not Y, because Z" sentences appear; visuals carry annotations on *why*, not just *what*.
5. **Make the invisible visible.** Diagrams, sequence flows, and lightweight code snippets expose systems work that visuals alone hide. No AI-generated decorative imagery.
6. **Show authorship and iteration honestly.** Role is stated plainly, collaborators are attributed, and at least one failure / pivot / open question is visible.

---

## Output format

Use this exact structure. It makes critiques comparable across pages and lets the author scan for the worst issue first.

```
## Rubric

### 1. Open with clarity — [Strong / OK / Weak / Failing]
- Title check: [quote it; does it name the project + an angle?]
- First-screen check: [quote the TL;DR / first body lines; do they convey problem, role, outcome?]
- Warm-up audit: [any "I've always been interested in…" / "In today's world…" / origin story before the claim?]
- Verdict: [one sentence]

### 2. Show the translation layers — [Strong / OK / Weak / Failing]
- Layers present: [which of concept / interaction / system / code are visible? cite section names]
- Missing layers: [which are absent or collapsed into a credit line?]
- Transitions: [are layer shifts marked, or do they blur?]
- Verdict: [one sentence]

### 3. Frame constraints as creative drivers — [Strong / OK / Weak / Failing]
- Constraints named: [list each: perf / hardware / API / time / money / a11y / regulation / self-imposed]
- Decisions tied to constraints: [list "X because Y" sentences; cite line refs]
- Verdict: [one sentence]

### 4. Make decisions explicit — [Strong / OK / Weak / Failing]
- "X not Y because Z" count: [N sentences; quote the strongest one]
- Annotated visuals: [do captions explain *why* the artifact is shaped this way, or only *what* it is?]
- Decision/trade-off omissions: [places where a choice is shown without justification]
- Verdict: [one sentence]

### 5. Make the invisible visible — [Strong / OK / Weak / Failing]
- Diagrams: [N architecture / sequence / flow diagrams present]
- Code snippets: [N snippets; are they load-bearing or boilerplate?]
- Visual-only-designer test: [could a competent visual designer with no engineering have produced this same page? if yes, that's a fail signal — explain]
- AI-imagery audit: [flag any AI-generated decorative images]
- Verdict: [one sentence]

### 6. Show authorship and iteration honestly — [Strong / OK / Weak / Failing]
- Authorship statement: [quote it; is it plain, specific, and not inflated?]
- Collaborators: [are material contributors attributed, or absent?]
- Iteration / failure / open questions: [is there at least one honest pivot, limitation, or "what I'd change"?]
- Verdict: [one sentence]

## Prioritized fix list

1. **[Highest-impact fix]** — [one-line action]
   - Where: [section / line ref]
   - Why this matters: [which principle, what trust it costs the page to leave it]
   - Suggested edit: [concrete proposal — quote a replacement sentence/heading where useful]

2. **[Next fix]** — [one-line action]
   - Where:
   - Why this matters:
   - Suggested edit:

[Continue for 3–7 items total. Don't pad. If there are only 2 real issues, list 2.]

## Bottom line

[One sentence: what is the single biggest reason a hiring reader will or will not trust this page, and what to fix first.]
```

## Grading scale

Use these labels consistently:

- **Strong** — Hits the principle clearly. Author can leave alone.
- **OK** — Meets the bar; minor improvements possible.
- **Weak** — Noticeable gap; will measurably hurt reader trust or the case for the role.
- **Failing** — This alone could sink the page; fix before publishing.
- **N/A** — Principle doesn't apply (e.g., a small experiment with no real constraints, or a sketch deliberately not optimised for hire-readers).

Don't grade-inflate. A "Strong" across all six is rare. If everything looks fine on first pass, look harder — most drafts have at least one Weak or worse, and creative-technologist pages most often fail Principle 2 (translation layers) and Principle 5 (invisible work).

---

## How to evaluate each principle

### 1. Open with clarity

Quote the title and the first screen (Hero subtitle + TL;DR + first lines of body). Then ask:

- Does a target reader know within 5–10 seconds what the project is, what role you played, and what changed?
- Is the TL;DR doing real work or is it just abstract mood text?
- Is there throat-clearing? (Origin stories, "In today's world…", "I've always been fascinated by…", history of the field.)

**Failing examples to flag:**
- Hero subtitle is a tagline ("A journey through interaction") rather than a sentence about the project.
- TL;DR opens with "It started when…"
- First three sections are context-setting before naming what was built.

### 2. Show the translation layers

Map the page's sections onto the four layers:

- **Concept** — the idea, the user-facing intent, why this exists.
- **Interaction** — what it feels like to use; the UX model.
- **System** — how the architecture works behind the surface.
- **Code** — a specific, load-bearing implementation detail.

Then judge:

- Which layers are present, which are absent, which are collapsed?
- A page that's all concept + interaction reads as a designer's portfolio. A page that's all system + code reads as an engineer's. Both miss the role.
- A "Built with [stack]" credit line is *not* the system layer. Flag it as a collapsed layer.
- Are layer transitions marked? (A reader should feel the shift from "what it does" to "how it works.")

**Common misses:**
- A 1500-word page with one sentence about implementation at the bottom.
- Architecture treated as trivia ("Tech: Next.js, Three.js, Postgres") rather than as part of the argument.
- Concept layer skipped entirely — the page jumps straight into UI screenshots without saying *why* the project exists.

### 3. Frame constraints as creative drivers

Look for: are real constraints named, and are later decisions visibly traceable to them?

- Performance budgets (frame rate, memory, network, latency).
- Hardware / platform limits (microcontroller class, browser floor, mobile-only).
- API / data constraints (rate limits, auth model, schema you didn't own).
- Time / money / team size.
- Accessibility, regulation, trust.
- Self-imposed constraints (scope cap, "must work offline").

If constraints are absent, the page implicitly claims unlimited resources — which reads as junior. Self-imposed constraints count, but they have to be *named* as constraints.

**Common misses:**
- Constraints listed in a final "Reflection" section but not used to justify any decision.
- Constraints mentioned in a Technologies list ("Arduino Uno") without naming what that *cost* (no JSON parser, 32KB flash).
- A "challenges" section that lists vague difficulty ("it was hard to balance design and engineering") instead of concrete limits.

### 4. Make decisions explicit

Count "we picked X, not Y, because Z" sentences in the body. Three or more across a flagship project is healthy. Zero is a Failing.

Then check visuals: does each major image/screenshot/diagram carry a caption that explains *why* the thing is shaped this way? An uncaptioned screenshot under a "Final design" heading is a missed opportunity — annotate it or you've thrown away a layer of signal.

**Common misses:**
- Long descriptions of *what* was built with no acknowledgement of *what was rejected*.
- Trade-off sections that describe the trade-off without naming what was traded *for what*.
- Captionless visuals that the prose then has to redescribe.

Do not, however, demand "Considered Options" tables. They're usually padding. One sentence woven into the body is better.

### 5. Make the invisible visible

Inventory the page's evidence of systems work:

- Architecture / system diagrams (boxes-and-arrows, sequence diagrams).
- Lightweight code snippets (5–20 lines, load-bearing, with a one-line "why this is interesting").
- Annotated screenshots showing the non-visible (debug overlays, network panels, devtools).
- Short video showing dynamic system behaviour (sync, latency, hardware response).

Then run the **visual-only-designer test:** could a competent UI designer with no engineering ability have produced this exact page? If yes, you've under-shown the systems work. This is the single most common Failing for creative-technologist portfolios.

**Always flag** AI-generated decorative imagery. It signals low effort and undermines the rest of the page; suggest an Excalidraw sketch, a real screenshot with annotations, or removal.

**Common misses:**
- "Architecture" described in prose only, no diagram.
- Code snippets that show framework boilerplate (route handlers, default config) rather than the actually-interesting bit.
- Stock illustration where a system diagram belongs.

### 6. Show authorship and iteration honestly

Find the authorship statement. Quote it. Then judge:

- Is it plain, specific, and not inflated? ("I designed and built X" beats "Was responsible for the holistic experience.")
- Are material collaborators attributed by name or role? Pages that hide collaboration read like marketing sites; pages that attribute read like practice.
- Is there at least one honest pivot, dead end, limitation, or open question?

**Common misses:**
- "I" used throughout for clearly-team work.
- A "Reflection" that reads as triumphant ("This project taught me a lot about iteration") without naming what actually broke or changed.
- No "what I'd do differently" or "what's still unsolved."
- Absent collaborators: a brand-led project with no mention of the strategist; a research-led project with no mention of the researcher; a hardware project with no mention of the fabricator.

A page without iteration / failure signals reads as junior even when the project was strong. Senior creative-technologist signal comes from calibrated honesty about what didn't work.

---

## Examples of useful critique

**Vague:** "The intro is too long."
**Useful:** "Hero subtitle is 'A journey through interactive systems', then the first body section is 600 words on personal background before naming what Microflow is. Cut the personal-background section. Move the existing TL;DR (currently buried in the second-to-last Section) to right under Hero."

**Vague:** "Show more of the system."
**Useful:** "The Microflow page describes the Figma plugin and the hardware bridge but never shows how messages travel between them. There is one screenshot of the node graph and zero diagrams. Add a sequence diagram: Figma plugin → MQTT broker → Electron host → Firmata → board. This single artifact would do more than any prose to show the systems work."

**Vague:** "Add more decisions."
**Useful:** "The page says 'Built with MQTT' but never says why MQTT and not WebSockets. The page says 'Electron' but never says why not a web app. Add two sentences: 'We picked MQTT over WebSockets so the firmware side could stay dumb — the broker handled fan-out.' and 'Electron, not web, because we needed direct USB access to the board.' Both of those are decisions a hiring reader will want to see."

**Vague:** "Headings could be better."
**Useful:** "Section headings are 'Interactivity', 'Rapid prototyping', 'The plugin', 'The bridge'. None signal a layer transition. Reframe to: 'Why designers can't reach hardware' (concept), 'A node graph that feels like Figma' (interaction), 'How the bridge keeps the firmware dumb' (system), 'The protocol we actually shipped' (code). Same content, but the scan now shows that the page crosses layers."

---

## Tone

- Direct, not cruel. The author wrote and shipped something — respect that.
- Specific, not abstract. "Section 3 has no diagram" beats "needs more visuals."
- Quote what's there before proposing a replacement.
- Don't soften with "consider" if you mean "do this." Consider when genuinely optional, do-this when not.
- If something is genuinely good, say so — accurate praise builds trust for the harder feedback.

## When the user pushes back

If the user disagrees with a critique:

- They might be right — they know the audience and intent better than the rubric.
- Ask which principle they're overriding and why. If it's deliberate (e.g., "this is a sketch, not a hire-bait page"), accept it and re-grade with N/A where appropriate.
- Don't restate the same critique louder. Move on.

---

## Output expectations

Every critique returns:

1. The rubric block with all six principles graded and evidenced.
2. The prioritized fix list (3–7 items).
3. The one-line bottom-line verdict.

If the page is too short or experimental for the full rubric, say so explicitly and offer a lighter critique — don't force the structure when it doesn't fit.
