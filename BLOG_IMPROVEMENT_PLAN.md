# Blog Improvement Plan

Sequenced execution plan derived from `BLOG_CRITIQUE.md`. Ordered by impact × effort: cheap site-wide wins first, then per-post fixes hardest-hit first, then visual investments last.

Legend: **[S]** small (≤15 min) · **[M]** medium (15–60 min) · **[L]** large (>1 hr, design work).

---

## Status — 2026-05-06

| Phase | State |
|---|---|
| 0 — Bug sweep | ✅ Done |
| 1 — Site-wide H1 refactor (Title component: subtitle is now H1) | ✅ Done |
| 2a — Suspense (opener, headings, hero subtitle) | ✅ Done |
| 2b — Zod (intro, Parsable heading, aftermath, caption) | ✅ Done |
| 2c — Testing (section names, ordered list, callback) | ✅ Done |
| 2d — Talking-to-water (filler headings, opener, distribution closer) | ✅ Done |
| 2e — Designing-intent (opener, CTA Alert, glossary `<details>`) | ✅ Done |
| 2.5 — Heading-as-claim sweep + opener trims | ✅ Done |
| **3 — Visuals (specs documented, artifacts pending)** | ⏳ Specs ready, next |
| 4 — Verify and ship | ⏳ Pending |

Re-critique result (after Phases 0–2): Suspense lifted ~3 grades and is no longer the worst post. Zod and Testing meaningfully sharper. Picture grades unchanged for technical posts (Phase 3 not yet started). The re-critique surfaced new heading-as-label issues across all 5 posts that were not in the first pass — captured in Phase 2.5 below.

---

## Phase 0 — Bug sweep (do first, all [S])

Fast wins; no design judgement needed.

- [x] **testing/page.tsx:975** — fix `@testing-library` link target (was `playwright.dev`).
- [x] **talking-to-water/page.tsx** — fix Quote `link` (was *Clean Code* on Amazon — link removed).
- [x] **talking-to-water/page.tsx** — rewrite broken sentence.
- [x] **designing-intent/page.tsx:472** — typo "It the process working" → "It is the process working".
- [x] **designing-intent/page.tsx:139** — `<<period>>` markup gag retained at user's request (personal touch).

**Exit criteria:** ✅ committed as `blog: bug sweep`.

---

## Phase 1 — Site-wide H1 fix [M] ✅

Refactored `components/custom/title.tsx` so `subtitle` renders as `<h1>` and `title` renders as a small italic eyebrow. The visual layout was unchanged; only the semantic markup moved.

Per-post subtitle updates landed in Phase 2 commits (suspense, zod, talking-to-water got new subtitles; testing, designing-intent already had strong subtitles).

**Exit criteria:** ✅ every post's visible big text is now the H1.

---

## Phase 2 — Per-post text fixes (do worst → best) ✅

Order: `suspense` → `zod` → `testing` → `talking-to-water` → `designing-intent`. All complete; commits in git.

### 2a. `2023/suspense` ✅
- [x] Opening replaced with concrete claim; SO ref moved to footnote.
- [x] Con-section H3s renamed (Added abstraction cost / Manual loading control / Server Components may eclipse it).
- [x] Hero subtitle now "React Suspense, beyond the magic".

### 2b. `2024/zod` ✅
- [x] Opener leads with IoT pain.
- [x] `### The Parsable helper` heading + one-line summary inserted.
- [x] Aftermath converted to 3 outcome bullets.
- [x] Safari screenshot has descriptive caption.
- [x] "Silent data corruption" reused at "The problem".
- [x] Hero subtitle changed to "TypeScript is not enough — runtime validation with Zod".

### 2c. `2024/testing` ✅
- [x] H2 "Conducting simulations" → "Simulating failure with mocks".
- [x] H2 "Performing real-world trials" → "Beyond unit tests: real-world strategy".
- [x] Broken `<ol start={n}>` fragments converted to 4 named H4s.
- [x] Bridge-engineer callback added at end.

### 2d. `2024/talking-to-water` ✅
- [x] Filler headings renamed (Why bodge it / The concept: speech in, emotion out).
- [x] Rhetorical-question filler removed.
- [x] One-degree-bigger closer added (prototypes fail on distribution).
- [x] Hero subtitle changed to "Generative art with Whisper & MQTT".

### 2e. `2026/designing-intent` ✅
- [x] Cliche opener replaced ("Most teams I see are still copy-pasting from ChatGPT…").
- [x] "Try this tomorrow" promoted to Alert callout.
- [x] Glossary table wrapped in `<details>` so it stops blocking the hook.
- [x] Layout fix: glossary summary stacks H3 + hint vertically.

**Exit criteria:** ✅ every post has a strong opening, descriptive headings, and no clever-empty / duplicate H3s.

---

## Phase 2.5 — Heading-as-claim sweep + opener trim [M]

Re-critique surfaced one consistent miss across all posts: **headings are still labels, not claims**. A skimmer who reads only headings should reconstruct the argument; right now several headings just say "this section exists" without saying what's in it. This phase fixes that, plus three opener trims that the second pass flagged.

Why this is its own phase rather than part of Phase 2: each item is small, but they share a pattern (heading = verdict, not topic) that's easier to apply consistently in one sweep than scattered across per-post commits.

### 2.5a. `2023/suspense` [S]

Three headings still hide content from the skimmer.

- [ ] **H2 "But how does it work?"** (line ~83) — self-answering. Replace with the thesis: *"Suspense is a try/catch for thrown Promises"*. Lets the skimmer leave with the insight.
- [ ] **H2 "TL;DR"** (line ~99) — duplicates the `<TLDR>` component above it. Either delete the H2 + merge prose into the section above, or rename to *"The mechanism, in 60 lines"* (this is where the actual code walkthrough begins).
- [ ] **Pro-section H3 "Be a step ahead"** (line ~318) — vague. Rename to *"Library support (Relay, SWR, React Query)"* — tells the skimmer what's there.

### 2.5b. `2024/zod` [S]

- [ ] **H3 "Adding runtime validation"** (line ~367) — duplicates H2 "Removing the lies" conceptually. Rename to *"Retrofitting Zod into a class-heavy codebase"* — names the actual constraint that drove the design.
- [ ] **Add one principle line in "Lying interfaces"** (line ~70) — *"Static types describe intent; runtime validation enforces it. Anywhere data crosses a trust boundary, you need both."* This is the one-degree-bigger frame the post never says out loud.

### 2.5c. `2024/testing` [M]

The mid-post H3s are still generic labels. Rename to claims so the second half of the post stops blurring:

- [ ] **H3 "Build for speed"** → *"Switch from Jest to Vitest"*
- [ ] **H3 "Validation"** → *"Validate inputs with Zod, not 20 unit tests"*
- [ ] **H3 "Passing objects"** → *"Use the Builder pattern for test fixtures"*
- [ ] **H3 "UI testing"** → *"Test the DOM with @testing-library, not Cypress"*
- [ ] **H3 "Code coverage"** → *"Coverage targets cause worse tests"*
- [ ] **Foreground the spicy take** — promote *"chasing coverage numbers that mean nothing"* (already in TLDR) into a callout in the Code coverage section. Right now the strongest claim is buried.

### 2.5d. `2024/talking-to-water` [S]

The single change that meaningfully moves Principle 1 + 2:

- [ ] **Cut/replace the meandering opener** — current first paragraph: *"One of the things I like about my job at the Master Digital Design is the odd requests I get from students from time to time."* Replace with the buried thesis: *"Prototypes do not fail because the idea is too ambitious. They fail on distribution. Here is how a 'talk to water' student project ran into that wall — and the bodge that got it across."*
- [ ] **Move the existing closer** (lines ~410–417, "The lesson worth keeping…") into the TLDR/intro. The thesis should lead, not close.
- [ ] **(Optional) move long author-credits Alert** to the bottom of the post; keep one-line credit at top so the actual story starts sooner.

### 2.5e. `2026/designing-intent` [M]

This post took the biggest hit on the second pass — same content, but second-pass agent noticed structural issues the first missed. Two fixes will recover most of it:

- [ ] **Trim the post-opener meta-paragraphs** (lines ~56–66) — three paragraphs after the strong first sentence all restate "there's a spectrum". Keep the first paragraph + the tomorrow-CTA-style aside; cut the middle two; jump straight to "Context matters".
- [ ] **Convert workflow H3s from labels to claims**:
  - `Prompt engineering` → *"Prompt engineering: fast, fragile, fine for drafts"*
  - `AI agents` → *"AI agents: width without depth"*
  - `Spec-driven development` → *"Spec-driven development: pay upfront, ship straighter"*
  - `Agentic AI` → *"Agentic AI: depth on rails"*
- [ ] **Add a one-line "use when / avoid when" line** at the top of each workflow section. The Spec-driven section already has this energy in its `Alert`; the other three need parity.
- [ ] **(Optional) "If you only read one section" pointer** in the intro for skimmers — direct designers/PMs to the quadrant + workflows table; direct devs to spec-driven and agentic.

### Exit criteria after Phase 2.5

- Every H2/H3 in every post tells a skimmer what they'll learn (not what topic exists).
- No post has a duplicate or self-answering heading.
- Every opener has its strongest claim within the first 3 sentences.

### Estimated effort

~90 minutes total: testing is the biggest (~30 min), designing-intent ~25, others ~15 each. All edits are text-only — no component or layout changes.

---

## Phase 3 — Visuals [L]

Highest reach-per-effort gain on the weak posts. Defer until text is settled.

This phase is **specifications, not artifacts**: each entry below describes exactly what visual to make, where it goes, why it earns its place, and what the alt text / caption should say. An author or designer can pick these up and produce them without re-deriving the brief.

### 3a. Tooling and conventions

- **Recommended tool:** [Excalidraw](https://excalidraw.com/). Hand-drawn vibe matches the blog, fast to iterate, exports to SVG/PNG, files can be re-edited later. Mermaid would also work for the state machines/flowcharts (and renders inline) but loses the personality.
- **Storage:** `public/<post-slug>/<descriptive-name>.{svg,png}`. Match the existing pattern (`/zod/parse-failures.png`, `/talking-to-water/auramotions.jpeg`).
- **Format:** SVG when possible (sharp on retina, smaller file). PNG for screenshots.
- **Width target:** 1200–1600px wide for diagrams. The Section component caps display width.
- **Source files:** save the editable Excalidraw `.excalidraw` files alongside the export, e.g. `public/zod/data-boundary.excalidraw` next to `data-boundary.svg`. Future-you will thank present-you.
- **Captions:** every visual gets a `<Text variant='note' as='figcaption'>` below it. State what it shows — not "diagram of the system" but "Each spike is a previously-silent corruption now caught at the boundary."
- **Alt text:** describe content for screen readers, not aesthetics. "Flow diagram showing mic input feeding Whisper, then a sentiment classifier, then an MQTT broker, then TouchDesigner."

### 3b. Per-post visual specs

Each entry has: **Where** (file + line) · **What** (concrete content) · **Why** (which principle it fixes) · **Caption** · **Alt text**.

---

#### Visual 1 — Suspense state machine

- **Where:** `app/post/2023/suspense/page.tsx`, after the `use`-hook CodeBlock (currently line ~238, after the `Then use it inside your component:` block).
- **What:** A single state-machine diagram with three nodes and labelled edges:
  - Nodes: `pending` (yellow), `fulfilled` (green), `rejected` (red).
  - Edges:
    - start → `pending` (label: "promise.then registered, throws promise")
    - `pending` → `fulfilled` (label: "resolve → throws promise → re-render → returns value")
    - `pending` → `rejected` (label: "reject → throws reason")
    - From `pending`, a side-arrow upward to a "Suspense boundary catches" box, then back into "renders fallback".
  - A small legend in the corner: "→ control flow", "↻ React re-renders".
- **Why:** Principle 4 (the section is otherwise three code blocks of dense state-machine logic, with no visual anchor). Also Principle 5 — gives skimmers a way to grasp the mechanism without reading the code.
- **Caption:** "Suspense's three states: thrown promise → fallback → re-render on resolve. The 'magic' is just exception flow."
- **Alt text:** "State machine showing a promise moving from pending to either fulfilled or rejected. While pending, the promise is thrown and caught by the Suspense boundary, which renders the fallback. On resolve, React re-renders and the promise returns its value."

---

#### Visual 2 — Suspense fallback swap (screenshot or short GIF)

- **Where:** `app/post/2023/suspense/page.tsx`, near the end of the "Why would you use" section (~line 277), before the H3 sub-sections start.
- **What:** A two-panel screenshot, OR a short looping GIF (~3s):
  - Panel 1 / frame 1: a UI showing `loading user…`
  - Panel 2 / frame 2: the same UI now showing the resolved content (e.g. `Hello xiduzo`).
  - Use the actual code example from the post (`fakeApi("xiduzo")` with the 2s delay) so the visual matches the code.
  - Recommend GIF: it shows the *transition*, which is the entire point of Suspense.
- **Why:** Principle 4 — currently the post has one meme as its only image. A user-visible payoff screenshot/GIF makes "what does this actually do for my users" concrete.
- **Caption:** "What the user sees: fallback during the 2-second `fakeApi` delay, then the resolved content."
- **Alt text:** "Two screenshots of the same page: first showing 'loading user...', then showing 'Hello xiduzo' once the promise resolves."

---

#### Visual 3 — Zod boundary / data-flow diagram

- **Where:** `app/post/2024/zod/page.tsx`, immediately before the `### The problem` heading (currently line ~333, before the "Silent data corruption…" paragraph).
- **What:** A horizontal flow diagram in three columns:
  - **Left column — sources** (untrusted): IoT device icons (~3 stacked), an MQTT broker icon, a DynamoDB icon. Labelled "Untrusted data — shape may differ from contract".
  - **Centre — the boundary**: a vertical dashed line labelled "Application boundary". On it, a `Zod schema` icon/badge. Two arrows passing through: one green ("✓ matches schema") going right, one red ("✗ ZodError") looping back to a "log + drop" sink.
  - **Right column — domain**: a `GrowthCycle` class icon labelled "Validated, typed, trusted". Below it, a small "DynamoDB write" arrow.
  - Title above: "Without runtime validation, lies cross the boundary."
- **Why:** Principle 4 — the entire post is about a boundary, never drawn. Principle 2 — makes the IoT context legible at a glance to readers who skim past the prose.
- **Caption:** "The Zod schema is the boundary. Every payload from the outside world is parsed before it becomes a typed object."
- **Alt text:** "Diagram showing untrusted data sources (IoT devices, MQTT, DynamoDB) on the left, an application boundary in the middle marked with a Zod schema, and validated typed objects on the right. Arrows show valid data passing through and invalid data being rejected with ZodError."

---

#### Visual 4 — Testing folder-tree side-by-side

- **Where:** `app/post/2024/testing/page.tsx`, replacing the two stacked code blocks at ~lines 170–201 (the `__tests__/` folder example vs. co-located tests).
- **What:** A two-column layout. Each column is a hand-drawn folder tree, side-by-side, with a strikethrough/checkmark verdict:
  - **Left (✗ Buried):**
    ```
    src/
    ├── billing/
    │   ├── invoice.ts
    │   └── tax.ts
    └── auth/
        └── session.ts
    __tests__/
    ├── billing/
    │   ├── invoice.test.ts
    │   └── tax.test.ts
    └── auth/
        └── session.test.ts
    ```
  - **Right (✓ Co-located):**
    ```
    src/
    ├── billing/
    │   ├── invoice.ts
    │   ├── invoice.test.ts
    │   ├── tax.ts
    │   └── tax.test.ts
    └── auth/
        ├── session.ts
        └── session.test.ts
    ```
  - Annotation arrow on the left: "Tests live in a parallel universe — easy to forget, easy to drift." Annotation arrow on the right: "Open the file, see the tests. No mental remap."
- **Why:** Principle 4 — currently the reader has to mentally diff two stacked code blocks. Side-by-side with annotations does the work for them. Principle 5 — turns a wall-of-code section into a glance.
- **Caption:** "Same project, same tests. Where they live changes whether they get maintained."
- **Alt text:** "Two folder trees side by side. The left tree shows tests in a separate top-level __tests__ directory mirroring the src structure, marked as 'buried'. The right tree shows tests co-located beside their source files inside src, marked as 'co-located'."

---

#### Visual 5 — Testing annotated coverage screenshot

- **Where:** `app/post/2024/testing/page.tsx`, inside the "Code coverage" section (~lines 514–566), right after "what parts of your code are tested and which are not."
- **What:** A real screenshot of a coverage report (Vitest `--coverage`, Jest, or SonarQube — any of them). Two annotation overlays:
  - One callout pointing at a line with green coverage but a comment like `// TODO: validate input` — caption arrow says "Covered ≠ tested. The branch executes; nothing asserts."
  - One callout pointing at an `if (error)` branch with red/uncovered colour — caption arrow says "This is the line that paged you at 3am."
- **Why:** Principle 4 — the post's strongest claim is "80% coverage means nothing"; that argument lands 10× harder with a real artifact. Principle 1 — gives the section a concrete payoff instead of more prose.
- **Caption:** "80% line coverage. 0% behaviour coverage. The metric is silent on whether you actually checked the result."
- **Alt text:** "Screenshot of a code coverage report. One annotation points at a green-highlighted line with a TODO comment, labelled 'covered but not tested'. Another points at an uncovered red branch in error handling."
- **Optional alternative:** if no real coverage report is available, mock one in a screenshot of a code editor with red/green gutters — the annotation does the persuading.

---

#### Visual 6 — Talking-to-water architecture diagram

- **Where:** `app/post/2024/talking-to-water/page.tsx`, immediately after the "The game plan" numbered list (~line 213).
- **What:** A horizontal flow diagram, five nodes left to right:
  1. **Microphone** icon — label "Speech (audio)"
  2. **Whisper (`pywhispercpp`)** box — label "Speech → text"
  3. **Hugging Face classifier** box — label "Text → emotion + score"
  4. **MQTT broker (`mosquitto`)** box — label "Pub/sub"
  5. **TouchDesigner** box — label "Generative visuals"
  - Connecting arrows labelled with the actual message: between #3 and #4 the arrow says `AuraMotions/<emotion>: <score>`; between #4 and #5 the arrow says "subscribe".
  - Below the chain: a thin dashed line labelled "All glued together with ~30 lines of Python."
- **Why:** Principle 4 — currently the post describes this chain in prose three times. One diagram replaces ~200 words. Principle 5 — gives the "game plan" section a visual map skimmers can latch onto.
- **Caption:** "The whole pipeline. Each box is one Python import, one config, or one click."
- **Alt text:** "Architecture diagram. From left to right: a microphone feeds Whisper, which produces text and feeds a Hugging Face emotion classifier. The classifier publishes emotion-score pairs to an MQTT broker on topic 'AuraMotions/<emotion>'. TouchDesigner subscribes to the broker and renders generative visuals."

---

#### Visual 7 — Designing-intent: a real spec snippet

This one is **not a diagram** — it is a concrete artifact the post currently describes in the abstract. Cheaper than a diagram, equally important.

- **Where:** `app/post/2026/designing-intent/page.tsx`, inside the "Spec-driven development" section (~lines 384–401), after the introductory paragraphs.
- **What:** A `<CodeBlock>` showing a short, real-feeling Markdown spec the reader could copy and adapt. Suggested content (~30 lines):

  ```markdown
  # Spec: Add CSV export to the reports page

  ## Intent
  Let users download the same data they see on screen, in a
  format their finance team already uses (CSV, comma-separated,
  RFC 4180).

  ## In scope
  - A "Download CSV" button on /reports
  - File reflects the current filter state (date range, project)
  - Streams (no full materialise in memory) for >10k rows

  ## Out of scope
  - Excel (.xlsx) — tracked separately in REPORTS-142
  - Email delivery — different feature

  ## Acceptance criteria
  - Empty state: button disabled with tooltip "No rows to export"
  - File name: `reports-<projectSlug>-<YYYY-MM-DD>.csv`
  - Header row matches the visible columns, in display order
  - Special characters in cells are quoted per RFC 4180

  ## Open questions
  - Timezone for date columns: user-local or UTC?
  - Cap on row count? (related: SRE-88)
  ```

- **Why:** Principle 4 — the entire Spec-driven section currently hand-waves at "specs" without showing one. A reader who has never written a spec leaves the section no closer to writing one. Principle 1 — makes the section's claim ("specs are the artifact you delegate to AI") concrete.
- **Caption:** "A spec the AI can act on: intent, scope, acceptance criteria, open questions. Notice what is *not* there — implementation."
- **Alt text:** N/A (it is a code block; the existing `CodeBlock` component handles accessibility).
- **Optional add-on:** a second "anti-spec" snippet showing the same task as a one-line prompt — `"Build a CSV export"` — so the reader sees the contrast directly.

---

### 3c. Sequencing within Phase 3

If splitting work across sessions, do them in this order (highest impact first):

1. **Visual 7** (designing-intent spec snippet) — fastest, just text in a code block. Single biggest gap on an otherwise strong post.
2. **Visual 6** (talking-to-water architecture) — single diagram, replaces most prose.
3. **Visual 3** (zod boundary diagram) — fixes the weakest principle on a Weak-on-pictures post.
4. **Visual 1** (suspense state machine) — same as above for the worst-graded post.
5. **Visual 4** (testing folder-tree side-by-side) — straightforward to draw.
6. **Visual 5** (testing coverage screenshot) — needs a real artifact, slowest to source.
7. **Visual 2** (suspense fallback GIF/screenshot) — nice-to-have; lower priority once Visual 1 ships.

**Exit criteria after Phase 3:** every technical post has at least one explanatory (not decorative) visual; weak-on-pictures posts (`zod`, `testing`, `suspense`) have ≥2.

---

## Phase 4 — Verify and ship [M]

- [ ] Re-run the rubric mentally on each post: does the skim test now tell the story?
- [ ] Check all post pages render with `npm run dev` — confirm no broken JSX from heading/text edits.
- [ ] Re-check OG metadata still matches the new H1s for social sharing.
- [ ] Optional: re-run `/blog-post-critic` per post and confirm grades have moved.

---

## Suggested commit cadence

Done:
1. ✅ `blog: bug sweep` (Phase 0)
2. ✅ `blog: promote subtitle to H1 in post hero` (Phase 1)
3. ✅ `blog: fix suspense — opening, headings, hero subtitle` (Phase 2a)
4. ✅ `blog: fix zod — intro, parsable heading, aftermath` (Phase 2b)
5. ✅ `blog: fix testing — section names, ordered list, callback` (Phase 2c)
6. ✅ `blog: tighten talking-to-water` (Phase 2d)
7. ✅ `blog: tighten designing-intent` (Phase 2e)

Next:
8. `blog: heading-as-claim sweep — suspense` (Phase 2.5a)
9. `blog: heading-as-claim sweep — zod` (Phase 2.5b)
10. `blog: rename testing mid-post H3s + spicy-take callout` (Phase 2.5c)
11. `blog: lead with thesis in talking-to-water` (Phase 2.5d)
12. `blog: tighten designing-intent workflow headings + opener` (Phase 2.5e)
13. `blog: add diagrams` (Phase 3, can split per post)

Small, reviewable commits. Each phase independently shippable.

---

## What this plan deliberately skips

- **No new posts.** Critique was about existing five.
- **No content rewrites of substance.** All edits are openings, headings, callouts, captions — not the technical body.
- **No Principle 3 (distribution) work.** Out of scope; would need separate audience/SEO planning.
