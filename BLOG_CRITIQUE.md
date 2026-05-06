# Blog Post Critique — Findings

Critique of all 5 blog posts under `app/post/` using Michael Lynch's [How to Write Blog Posts that Developers Read](https://refactoringenglish.com/chapters/write-blog-posts-developers-read/) (5 principles).

Date: 2026-05-06

## Posts reviewed

- `app/post/2023/suspense/page.tsx`
- `app/post/2024/zod/page.tsx`
- `app/post/2024/talking-to-water/page.tsx`
- `app/post/2024/testing/page.tsx`
- `app/post/2026/designing-intent/page.tsx`

## Scorecard

| Post | 1. Point | 2. Bigger | 3. Route | 4. Pictures | 5. Skim |
|---|---|---|---|---|---|
| 2026/designing-intent | OK | Strong | OK | Strong | Strong |
| 2024/talking-to-water | Strong | OK | OK | Strong | Strong |
| 2024/zod | OK | OK | N/A | Weak | OK |
| 2024/testing | OK | OK | N/A | Weak | OK |
| 2023/suspense | OK | Weak | N/A | Weak | Weak |

Grades: Strong / OK / Weak / Failing.

---

## Cross-post patterns

### 1. Hero `<H1>` ≠ SEO title (every post)

Visible H1s are bare nouns: `Zod`, `Testing`, `<Suspense />`, `Talking to water`, `Designing intent`. The `metadata.title` strings are sharper. Reader sees the H1 first.

**Fix:** Promote the SEO title to the hero, or render `metadata.title` directly as H1.

### 2. Opening sentences bury the lede (4 of 5)

- **Suspense** opens with StackOverflow backstory.
- **Designing-intent** opens with "AI won't replace thinking" cliche.
- **Zod** opens with generic TS love.
- **Testing** TLDR is fine but H1 is just "Testing".

The `TLDR` component is rescuing every post. Make it redundant — let the prose lead match the TLDR's punch.

### 3. Visuals thin on technical posts

- Zod — 2 images, no diagrams.
- Testing — 0 images, code only.
- Suspense — 1 meme.

Each has a state machine / data flow / before-after begging to be drawn. Excalidraw or simple SVG, not AI decoration.

### 4. Clever-empty headings defeat skimming

- **Suspense:** duplicate "More than lazy loading" / "User Experience" / "Be a step ahead" in both pro and con sections — skimmer cannot tell them apart.
- **Testing:** "Conducting simulations" / "Performing real-world trials" hide that they mean "mocking" and "integration tests".
- **Talking-to-water:** "How does one talk to water?" / "So, what is the concept?" tell a skimmer nothing.

### 5. Wall-of-text around the densest content

- **Zod:** `Parsable` helper (lines 396–473) — no heading, no diagram.
- **Designing-intent:** Spec-driven section (lines 384–401) — 5 stacked `<Text>` blocks, no example.
- **Suspense:** `use` hook section (lines 193–260) — three code blocks, thin connective prose.

---

## Top 3 site-wide actions (ranked by impact)

1. **Fix the H1 pattern globally.** Use `metadata.title` as the visible hero on every post. Single mechanical change, lifts all 5.
2. **Add one diagram to each technical post.** Zod (boundary/data-flow), Testing (folder-tree side-by-side or annotated coverage report), Suspense (throw/catch lifecycle).
3. **Rewrite duplicate/clever headings** on Suspense and Testing. Disambiguate Suspense's pro/con duplicates; rename Testing's "Conducting simulations" / "Performing real-world trials".

---

## Bug bag (found during critique)

- **Testing**, line 975 — `@testing-library` link points to `playwright.dev`.
- **Talking-to-water** — Quote attributed to "The students" links to *Clean Code* on Amazon.
- **Talking-to-water** — "Before going down the rabbit hole and I will lose you." (broken sentence).
- **Designing-intent**, line 472 — "It the process working" (missing "is").
- **Designing-intent**, line 139 — `<<period>>` markup gag reads as noise.

---

## Per-post fix lists

### `2023/suspense`

1. **Opening lines 49–60** — buries the lede in personal backstory. Replace with one sentence stating the claim: *"Suspense is not magic — it's a try/catch that catches thrown Promises."*
2. **Duplicate H3s in pro/con sections (lines 279–405)** — rename cons to "Added abstraction cost", "Manual loading control", "Server Components may eclipse it".
3. **After `use` hook code (line 238)** — add a state-machine diagram (`pending → throw → Suspense catches → resolves → re-render`).
4. **Hero title `<Suspense />`** — use SEO title "React Suspense, beyond the magic".
5. **TLDR placement (line 41)** — keep TLDR; delete StackOverflow framing or move to footnote.
6. **Single meme image** — add at least one explanatory diagram and one screenshot of fallback swap.

### `2024/zod`

1. **Hero title (line 34)** — "Zod" alone tells a skimmer nothing. Use SEO title: "TypeScript is not enough: runtime validation with Zod".
2. **Intro lines 50–60** — three sentences pass without naming Zod, IoT, or payoff. Open with the IoT pain.
3. **Between lines 332 and 395** — insert a boundary diagram (device → MQTT/DynamoDB → class) before "The problem".
4. **Line 396 onward** — add `### The Parsable helper` heading and one-line summary before the code dump.
5. **Safari image at line 544** — add caption (what tool, what metric, what time window).
6. **Aftermath lines 554–570** — convert prose to 3 bullets with numbers if available.
7. **TLDR line 45** — reuse "silent data corruption" phrase as the lead of "The problem".

### `2024/talking-to-water`

1. **Hero title** — use SEO title verbatim: "Talking to water: generative art with Whisper & MQTT".
2. **After "The game plan"** — insert mic→Whisper→classifier→MQTT→TouchDesigner architecture diagram.
3. **Filler headings** — "How does one talk to water?" → "Why bodge it"; "So, what is the concept?" → "The concept: speech in, emotion out".
4. **Tighten opening** — cut "Well, that is an interesting question." and "And what does it even mean to talk to water?".
5. **Fix broken sentence** — "Before we go down the rabbit hole — this is where I lose half of you."
6. **Quote attribution bug** — Quote cites "The students" but `link` points to *Clean Code* on Amazon.
7. **One-degree-bigger closer** — 2–3 sentences after "Magic with 30 lines of code" generalising: prototypes fail on distribution, not capability.

### `2024/testing`

1. **Hero title (line 33)** — "Testing" too generic. Use "Testing: the discipline that makes everything else click" or the SEO title.
2. **Section labels (lines 1007, 1009, 1083)** — clever framing fails skim test. Rename to "Simulating failure with mocks" and "Beyond unit tests: real-world strategy".
3. **Folder-tree comparison (lines 170–201)** — replace stacked code blocks with a side-by-side image or styled diff.
4. **Coverage section (lines 514–566)** — add a screenshot of an annotated coverage report.
5. **Broken ordered list (lines 243–419)** — `<ol start={n}>` fragments. Render as one continuous `<ol>` or convert to four named subheadings.
6. **One-degree-bigger payoff** — bridge-engineer analogy (line 93) is dropped. Callback at the end: *"A bridge engineer doesn't ship 80% coverage; they ship a bridge that holds."*
7. **Wrong link text (line 975)** — `@testing-library` link points to `playwright.dev`.

### `2026/designing-intent`

1. **Title (line 37/21)** — promote subtitle: "Stop prompting. Start delegating: a field guide to AI workflows".
2. **Opening sentence (line 53)** — replace cliche with concrete tension: *"Most teams I see are still copy-pasting from ChatGPT and calling it an AI workflow. There are at least four better ones."*
3. **`<<period>>` gag (line 139)** — drop markup; let sentence stand.
4. **Spec-driven section (lines 384–401)** — insert a literal spec snippet (Markdown code block) so readers see what you mean.
5. **Typo (line 472)** — "It is the process working."
6. **Closing CTA (line 489)** — promote "tomorrow, try three things" line out of small-text aside into a callout.
7. **Glossary placement (lines 78–132)** — move 5-row definitions table to appendix or collapsible.

---

## Bottom line

`designing-intent` and `talking-to-water` are the strongest; `suspense` needs the most work (Weak on 3 of 4 applicable principles). Biggest single site-wide lever: stop using bare-noun H1s — promote the SEO title to the hero.
