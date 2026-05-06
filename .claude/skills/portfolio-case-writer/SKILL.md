---
name: portfolio-case-writer
description: Write portfolio case studies for a creative technologist (design + code hybrid) — projects that must prove integration, not just process. Use whenever the user wants to draft, plan, outline, or rewrite a portfolio piece, project page, case study, project write-up, work sample, or "/project/<name>" page on this site — even if they don't say "case study." Trigger on phrases like "write up Microflow," "turn this project into a case study," "draft the Fissa page," "I want to publish this project," "make this into a portfolio piece," or pasting raw project notes / a README asking for a published version. Optimizes for hiring-manager scan, design-and-engineering integration signals, and decision traceability over polished screenshots.
---

# Portfolio Case Writer

Write portfolio case studies for a **creative technologist** — someone who sits between designer and engineer and whose value is in *integration*. The job is not "show pretty things." The job is to convince a reader (hiring manager, collaborator, future client) that you can think across concept, interaction, system, and code, and that your decisions are deliberate.

Most portfolio advice is generic UX-fluff: problem → solution → reflection. That structure under-sells creative-technologist work because it hides the translation layers — the moves between idea, interaction, and system — which is exactly where this kind of person earns their seat. This skill is built to expose those moves.

The companion skill `portfolio-case-critic` grades against the same six principles below; pair them when iterating on a draft.

## Workflow

1. **Interview the user before drafting.** Don't write blind. Get:
   - **Project basics:** name, year, link, role, team, time/budget.
   - **Single thesis:** if a reader takes one thing away, what is it? Push back if the answer is "the project itself" — that's not a thesis.
   - **Audience:** hiring manager (which kind — agency, product, research lab?), peer creative technologists, clients, students. Different readers want different signals.
   - **Constraints that shaped the work:** hardware, performance budget, API limits, deadline, money, team size, accessibility, regulation. These are gold; surface them.
   - **The interesting failures:** what didn't work first time, what got cut, what you'd do differently. Ask explicitly — people omit these.
   - **Authorship:** what did *you* do versus the team? Be precise.
   - **Available artifacts:** screenshots, video, diagrams, code snippets, prototypes, sketches, dead ends. Note what's missing and will need to be made.

   If the user pastes notes/a README and says "make this a case study," still ask before drafting. Raw notes almost always omit constraints, decisions, and authorship.

2. **Apply the six principles below in order.** They map to the failure modes specific to creative-technologist case studies.
3. **Draft, then run the self-review checklist** at the bottom. Hand both to the user.

If the user pushes back on a principle ("this is a small experiment, I don't need a thesis"), defer — these are heuristics for hireability and reach, not laws.

---

## Theory in one paragraph

A portfolio case study is a **decision trace dressed as a story**. It is not a showcase — it is an *artifact of practice*, in the sense of Research-through-Design's "annotated portfolios": the work plus the thinking embedded in it. Hiring readers scan for signal, not content (information foraging / cognitive load), so hierarchy and the first screen do most of the work. Creative technologists carry an extra burden: their output *looks* like design, but their value lives in systems thinking, so they must make the invisible visible. The six principles below are the levers.

---

## Principle 1 — Open with clarity (problem, role, outcome — in that order)

The reader arrives wanting three things, fast:

1. What problem did this address?
2. What was your role?
3. What changed because of it?

If they don't have those three by the end of the first screen, they bounce. Aspirational mood-setting ("In an increasingly connected world…") and origin stories ("I've always been fascinated by interaction…") fail this test.

**Rule:** the title plus the first three lines of body must answer problem + role + outcome. Use a TL;DR/summary block if the platform supports one. On this site that's the `TLDR` component above the first `Section` — three short lines, no warm-up.

**Worked example (good):**

> **Microflow — microcontrollers made simple**
> Designers want to prototype with hardware but Arduino is a steep cliff for non-coders.
> Microflow replaces the cliff with a node-based editor that generates the firmware for you.
> A Figma plugin pipes hardware events directly to design prototypes.

Three lines: problem, what you built, what it unlocks. Reader knows in eight seconds whether to keep going.

**Anti-pattern:**

> Microflow is a tool I built in 2024. It started after a long conversation with a colleague about education and prototyping, and I'd been thinking for a while about the gap between physical and digital design...

Three sentences in, the reader still doesn't know what it is or who it's for.

## Principle 2 — Show the translation layers (concept → interaction → system → code)

This is the move most generic UX templates miss and the move creative technologists must nail.

A designer's case study tends to read: *research → design → final.*
An engineer's case study tends to read: *requirements → architecture → implementation.*
A creative technologist's case study must read across all of them: **concept → interaction → system → code → outcome.**

That doesn't mean a four-section template — it means every project narrative should visibly cross those layers. A hardware piece that's only described as "interaction design" hides its systems work. A web prototype described only as "WebGL" hides the design intent.

**How to apply:**

- For each major decision, ask: which layer is this on, and is the *layer above* visible? If you wrote "we used Three.js," the layer above is the interaction it enabled — say so. If you wrote "we wanted it to feel weightless," the layer below is the technique — show the technique.
- Use sub-headings or marked transitions when crossing layers. Readers should feel the gear-shift from "what we wanted" to "how we made it possible."
- A short architecture diagram or annotated screenshot is often the cheapest way to expose two layers at once (interaction + system).

**Anti-pattern:** a 1200-word page describing the look-and-feel and a single sentence at the bottom saying "Built with Next.js and Three.js." That collapses three layers into a credit line.

## Principle 3 — Frame constraints as creative drivers

The cliché is to hide constraints (60fps target, 8-bit microcontroller, two-week deadline, no backend) because they sound like excuses. Inverted, they are the strongest signal a creative technologist can give: real-world judgment under real-world friction.

State the constraints near the top of the body. Then, when describing decisions, refer back: *"Because the firmware ran on a 32 KB chip, we couldn't ship a JSON parser, which is why the protocol is positional."* That sentence does three jobs at once — names a constraint, explains a decision, and demonstrates engineering taste.

Surface at least:

- **Performance:** frame budget, memory, network, battery, latency target.
- **Platform / hardware:** microcontroller class, browser support floor, sensor noise floor, mobile vs desktop only.
- **API / data:** rate limits, auth model, data shape you didn't control.
- **Time / money / team:** real numbers when you can share them.
- **People / accessibility / regulation:** WCAG bar, GDPR, on-prem requirements, user trust constraints.

If a project genuinely had no meaningful constraints, that's a smell — say what *self-imposed* constraints kept it tight (scope cap, "must work offline," "must run on my phone"). A self-imposed constraint is still a constraint and still earns the same trust.

## Principle 4 — Make decisions explicit (annotated artifacts)

Borrowed from design-research's "annotated portfolios" theory: an artifact alone is mute. The annotation is what carries the knowledge.

For every meaningful decision in the project, the page should answer:

- **What did you choose?** (the decision)
- **What did you reject, and why?** (the alternatives)
- **What did this cost?** (the trade-off)

This does not mean a wall of "Considered Options" tables. It means weaving "we picked X, not Y, because Z" into the body. One sentence per decision is usually enough; three or four such sentences across a case study transform it from showcase to argument.

**Worked sentences:**

- "We rendered the path on the GPU rather than as SVG; SVG choked past ~2k segments and the interaction needed to feel instant."
- "We deliberately avoided real-time collaboration in v1 — the audience was solo students, and CRDTs would have eaten the schedule."
- "We picked MQTT over WebSockets so the firmware side could stay dumb; the broker handled fan-out."

**Annotation also belongs on visuals.** A screenshot with a one-line caption pointing to *why this UI is shaped this way* is worth three paragraphs of unmarked prose. On this site, a `Section` introducing an `Image` or `Safari` component is a good place for the one-line caption.

## Principle 5 — Make the invisible visible

This is the principle most specific to creative technologists. The risk: your case study *looks* like design work (because the surface artifacts are visual), but your value is in systems and integration that don't photograph well. Without deliberate effort, the systems work disappears, and the reader can't distinguish you from a UI designer.

Counter that by including the kinds of artifacts that *expose* the invisible:

- **Architecture diagrams** — boxes-and-arrows, hand-drawn-style is fine and often better. Excalidraw or similar.
- **Sequence / flow diagrams** for interactions that involve more than the front-end (sensor → device → broker → app).
- **Lightweight code snippets** for the genuinely interesting part — a shader, the protocol, the algorithm. Not boilerplate. Five to twenty lines, with a one-line explanation above them. Use the site's `CodeBlock`.
- **Annotated screenshots** showing what's happening behind the UI — debug overlays, network panels, devtools.
- **Short video clips** demonstrating a system behaviour (latency, sync, hardware response) that a still image can't carry.

**Rule of thumb:** if a competent visual-only designer could plausibly have produced the same case-study page, you've under-shown the systems work. Add at least one artifact that only an integrator could ship.

Avoid AI-generated decorative imagery. It signals low effort and undermines the rest of the page; an Excalidraw sketch reads as confident, an AI illustration reads as filler.

## Principle 6 — Show authorship and iteration honestly

Hiring readers consistently report the same anxiety about portfolios: "I can't tell what *this person* actually did." Address it directly.

- **Authorship line.** Near the top, state your role and contributions in plain sentences. *"I designed the interaction model and built the Electron + node-graph runtime. The Figma plugin and identity work were a collaboration with X. UI direction was mine."* Do not pad — do not claim solo work that wasn't.
- **Collaboration boundaries.** When a teammate did something material (a research phase, an engineering subsystem, the brand), say so by name or role. This *strengthens* your claim — readers trust authors who attribute.
- **Iteration and dead ends.** Show at least one thing that didn't work, one direction that changed, one limitation you ran into. Senior creative-technologist signals come from displaying calibrated judgement under adversity, not from displaying clean victories. A short "what I'd change" or "what we hit" section near the end carries more weight than a triumphant conclusion.

Without authorship and iteration the page reads like a marketing site for the product. With them, it reads like a window into your practice — which is the actual point.

---

## Recommended structure

Not a rigid template. A starting shape, mapped to this codebase's components.

```
Hero
  title — names the project and gives a one-line angle
  subtitle — what it actually is, in plain language
  link, date, read-time

Technologies
  list the stack honestly; do not pad

TLDR (3 lines, problem → what you built → what changed)

Section — Context and constraints
  Who it was for. What was hard about it. What constraints shaped the work.

Section — Concept and interaction
  The user-facing idea. What it feels like to use. (Layer: concept → interaction)

Section — System and architecture
  How it works. Diagram + 1–2 paragraphs. (Layer: interaction → system)

Section — A specific decision worth showing
  Code snippet, protocol detail, or shader. One per project is enough.
  "We picked X over Y because Z." (Layer: system → code)

Section — What broke, what changed, what's next
  At least one honest iteration / failure / open question.

Section — Authorship and credits
  Plain sentences. Your contribution; collaborators by name or role.

CallToAction
  Link out (live demo, repo, related project).
```

Adjust shamelessly. A small experiment might collapse five of those into one Section. A flagship project might split "system" into two. The point is that the layers are visible.

## Title and subtitle patterns that work

- **Project + sharp angle:** *"Microflow — microcontrollers made simple"*
- **What it is + what's interesting:** *"Fissa — a shared playlist that strangers actually trust"*
- **Concrete thing + verb:** *"Talking to water — interactive sound for an installation"*

Avoid:
- Pure project names with no angle ("Microflow"): no hook, no benefit.
- Mood titles ("A study in flow"): readers don't owe you a click.
- Tech-stack titles ("A Three.js + Next.js experiment"): names the materials, not the work.

## Voice

- First-person is preferred — the page is *your* practice. "I" and "we" are both fine; be honest about which.
- Specific over abstract: real frame budgets, real chip names, real component names from your stack, real numbers when you can share them.
- Short sentences. Active voice. Cut adverbs.
- The reader is intelligent and busy. Don't pre-apologize, don't over-explain, don't open with "In today's world…" — ever.
- Do not narrate the writing of the case study ("In this case study, we will explore…"). Just go.

---

## Pre-publish self-review checklist

Run this against the finished draft. If any answer is no, fix it.

**Open with clarity (Principle 1)**
- [ ] Does the title + first screen answer problem, role, and outcome?
- [ ] Is the TL;DR three lines or fewer with no warm-up?
- [ ] Have I cut every "I've always been interested in…" / "In today's world…" opener?

**Translation layers (Principle 2)**
- [ ] Does the page visibly cross concept → interaction → system → code?
- [ ] For each layer named, is the layer above or below also represented?
- [ ] Are layer transitions marked with sub-headings or visible shifts?

**Constraints as drivers (Principle 3)**
- [ ] Are the real constraints (perf, hardware, API, time, money, accessibility) named near the top?
- [ ] Do at least two later decisions visibly trace back to those constraints?
- [ ] If there were "no" constraints, did I name the self-imposed ones?

**Annotated decisions (Principle 4)**
- [ ] Do I have at least three "we picked X, not Y, because Z" sentences in the body?
- [ ] Do major visuals carry a one-line caption that says *why* the artifact is shaped that way?
- [ ] Have I avoided "Considered Options" tables that bloat without informing?

**Invisible made visible (Principle 5)**
- [ ] Is there at least one architecture / sequence / flow diagram?
- [ ] Is there at least one genuine code snippet (5–20 lines, with a one-line "why this is interesting" intro)?
- [ ] Is there at least one artifact a visual-only designer could not have produced?
- [ ] Did I avoid AI-generated decorative imagery?

**Authorship and iteration (Principle 6)**
- [ ] Is my role stated in plain sentences and not inflated?
- [ ] Are collaborators attributed where their work was material?
- [ ] Is there at least one honest failure, pivot, limitation, or open question?

**Cuts**
- [ ] Did I delete the throat-clearing intro that was actually paragraphs 1–2?
- [ ] Did I cut history/setup the reader didn't ask for?
- [ ] Are there sentences that, removed, the page wouldn't miss?

---

## Output expectations

When asked to write or draft a case study:

1. Confirm project basics, thesis, audience, constraints, failures, authorship, and available artifacts. Do not skip the interview, even if the user wants to move fast — three minutes of questions saves a bad draft.
2. Produce the draft as Markdown, structured to map onto the site components (`Hero`, `TLDR`, `Section`, `Text`, `Image`, `Safari`, `CodeBlock`, `Technologies`, `Links`, `CallToAction`). If the user is writing the actual `.tsx` page, output the JSX shape; otherwise plain Markdown is fine.
3. After the draft, list any artifacts the user still needs to source — *"You'll need: a 30s screen recording of the node graph live-controlling the breadboard; an architecture diagram of the MQTT bridge; a 10-line snippet of the protocol you actually shipped."*
4. End with the self-review checklist filled in or flagged where the user must verify (e.g., constraint plausibility, authorship accuracy).

When asked to revise an existing draft, run the checklist first, point out the top three issues, then propose specific edits — quote what's there before proposing replacements.
