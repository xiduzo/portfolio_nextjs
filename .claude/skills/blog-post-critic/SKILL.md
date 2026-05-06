---
name: blog-post-critic
description: Critique an existing developer blog post against Michael Lynch's "Refactoring English" principles and return a per-principle rubric followed by a prioritized fix list. Use whenever the user shares a draft or published post and asks for review, feedback, critique, edit, "is this any good?", "why isn't this getting traction?", "rip this apart," "review my post," or pastes a URL/markdown asking what to improve. Also trigger when a user has written a technical article, dev-log, engineering write-up, or case study and wants a quality check before publishing. Output is honest and concrete — every issue cites a specific line or section.
---

# Blog Post Critic

Critique a developer blog post using the five principles from Michael Lynch's [How to Write Blog Posts that Developers Read](https://refactoringenglish.com/chapters/write-blog-posts-developers-read/). The chapter is the rubric — Lynch's blog gets 300k–500k unique readers/year and these are the levers he attributes most of that to.

The point of this skill is **honest, actionable critique**, not validation. A useful critic catches issues the author can't see because they're too close to the draft. Be specific, cite lines, propose concrete edits.

## Workflow

1. **Acquire the post.** User pastes markdown, pastes a URL, gives a file path, or asks about a draft already in conversation. If only a URL is given and the tools allow, fetch it; otherwise ask the user to paste the text.
2. **Read the post fully once.** Don't grade on the first pass — read it as a reader would.
3. **Run the skim test.** Mentally strip everything but headings + images. Note whether the skim conveys the story.
4. **Score each of the five principles** using the rubric below. Cite specific lines/sections as evidence.
5. **Produce the prioritized fix list.** Top issues first, ordered by likely impact on reach and reader retention.
6. **Hand back both** — rubric first, then fix list — followed by a one-line bottom-line verdict.

If the post is short or informal (e.g., a personal note, a TIL), say so and scale the critique accordingly. Don't apply HN-front-page standards to a learn-in-public note unless the user asked for that bar.

---

## The five principles (rubric source)

A condensed reference. For full reasoning see the source chapter or the sibling `blog-post-writer` skill.

1. **Get to the point.** Title + first 3 sentences must answer (a) is this for me? (b) what do I get?
2. **Think one degree bigger.** Could a small tweak widen the audience meaningfully? Is jargon necessary?
3. **Plan the route to your readers.** Is there a realistic distribution path? Multiple shots on goal?
4. **Show more pictures.** Is there a visual anchor every screen? Are visuals load-bearing or decorative? Any AI slop?
5. **Accommodate skimmers.** Headings descriptive? Wall-of-text moments? Does the skim tell the story?

---

## Output format

Use this exact structure. It makes critiques comparable across posts and lets the author scan for the worst issue first.

```
## Rubric

### 1. Get to the point — [Strong / OK / Weak / Failing]
- Title check: [does it name audience and benefit? quote it.]
- Three-sentence check: [quote sentences 1–3, then say what they answer / fail to answer]
- Verdict: [one sentence]

### 2. Think one degree bigger — [Strong / OK / Weak / Failing]
- Current target: [who this assumes the reader is]
- Wider audience available?: [yes/no, and which one]
- Jargon audit: [list any terms the broader audience wouldn't know, with line refs]
- Verdict: [one sentence]

### 3. Plan the route to your readers — [Strong / OK / Weak / Failing / N/A]
- Plausible Google path? [yes/no + reasoning]
- Plausible HN/Lobsters path? [yes/no + reasoning]
- Plausible subreddit/forum path? [yes/no + reasoning]
- Verdict: [one sentence — N/A if user didn't ask about distribution]

### 4. Show more pictures — [Strong / OK / Weak / Failing]
- Visual count: [N images / diagrams / screenshots / code blocks]
- Density: [is there a visual anchor every screen? where are the bare stretches?]
- Quality: [bespoke / screenshots / stock / AI-generated — flag the last]
- Missed opportunities: [list specific spots that beg for a visual]
- Verdict: [one sentence]

### 5. Accommodate skimmers — [Strong / OK / Weak / Failing]
- Skim test result: [if a reader saw only headings + images, what would they conclude?]
- Heading audit: [list each heading; mark descriptive vs vague]
- Wall-of-text moments: [section names or paragraph refs over ~5 sentences]
- Verdict: [one sentence]

## Prioritized fix list

1. **[Highest-impact fix]** — [one-line action]
   - Where: [section / line ref]
   - Why this matters: [which principle, what the cost of leaving it is]
   - Suggested edit: [concrete proposal — quote a replacement sentence/heading where useful]

2. **[Next fix]** — [one-line action]
   - Where:
   - Why this matters:
   - Suggested edit:

[Continue for 3–7 items total. Don't pad. If there are only 2 real issues, list 2.]

## Bottom line

[One sentence: what is the single biggest reason this post will or won't land, and what to do first.]
```

## Grading scale

Use these labels consistently:

- **Strong** — Hits the principle clearly. Author can leave alone.
- **OK** — Meets the bar, minor improvements possible.
- **Weak** — Noticeable gap, will measurably hurt the post's reach or retention.
- **Failing** — This alone could sink the post; fix before publishing.
- **N/A** — Principle doesn't apply (e.g., very short post, principle 3 if not seeking reach).

Don't grade-inflate. A "Strong" across all five is rare. If everything looks fine on first pass, look harder — most drafts have at least one Weak or worse.

---

## How to evaluate each principle

### 1. Get to the point

Quote the title. Quote the first three sentences exactly. Then ask:
- Does the title alone tell a member of the target audience that the post is for them?
- By the end of sentence 3, does the reader know what concrete benefit they get from finishing?
- Is there a meandering opener? (Personal anecdote unrelated to the claim, history of the field, "I've been thinking lately about…")

**Failing examples to flag:**
- Opens with an autobiographical hook that doesn't pay off until paragraph 4+.
- Title is a topic, not a claim ("On caching", "About TypeScript generics").
- First three sentences set up context but never name the benefit.

### 2. Think one degree bigger

List every term in the post that a "one degree wider" audience wouldn't know. Suggest replacements or short asides. Then judge whether broadening is worth it for *this* post — not every post should broaden, but most could.

**Common misses:**
- A term used 8 times that could be defined once at the top in a sentence.
- An example that requires domain context unrelated to the post's actual claim.
- An opening assumption ("As you know, the X protocol works by…") that loses anyone unfamiliar.

### 3. Plan the route to your readers

If the user shared distribution intent, evaluate it. If not, assess plausibility yourself:
- Search the topic mentally — is page 1 of Google already saturated by Stack Overflow, MDN, or major blogs?
- Is the topic HN-friendly? (Generally: novel tech, indie business, hardware, war stories, contrarian takes do well; tutorials on saturated topics don't.)
- Is there a niche subreddit or forum that allows blog links and is active?

If only one path looks plausible, flag it — single-path posts are high-variance.

This principle is **N/A** if the user explicitly says they're not optimizing for reach (e.g., personal journal, internal documentation).

### 4. Show more pictures

Count visuals. Identify long text stretches (multiple screens of paragraphs). For each long stretch, propose what visual would belong there:
- Is there a tool/UI being described? → screenshot.
- Is there a metric improvement? → graph.
- Is there an architecture or flow? → diagram.
- Is there a comparison? → table or side-by-side.

**Always flag** AI-generated decorative images. Per the source chapter, these are worse than nothing professional — they signal low effort. Suggest replacing with a screenshot, Excalidraw sketch, or removing.

### 5. Accommodate skimmers

List every H2/H3 heading verbatim. For each, classify:
- **Descriptive:** tells the skimmer what the section contains.
- **Vague:** generic ("The problem", "My approach", "Conclusion") — give them content.
- **Clever-empty:** tries to be witty but conveys nothing — rewrite.

Then do the skim test: imagine a reader who only reads headings + images. Would they understand the arc and want more? If headings alone read as a meaningless list, that's a Failing.

Also flag wall-of-text — paragraph blocks longer than ~5 sentences, especially without intervening visuals or code.

---

## Examples of useful critique

**Vague:** "The intro is too long."
**Useful:** "Intro is 4 paragraphs (236 words) before the claim. Sentence 3 is 'I've always loved testing.' That sentence answers neither 'is this for me?' nor 'what do I get?' Cut paragraphs 1–3 entirely. Open with what is currently paragraph 4."

**Vague:** "Add more images."
**Useful:** "Sections 'Why this matters' and 'Setting it up' run 9 paragraphs without any visual. The 'Setting it up' section describes a UI flow — three numbered screenshots there would carry the section. The 'Why this matters' performance claim needs the before/after graph."

**Vague:** "Headings could be better."
**Useful:** "Headings: 'The Problem', 'My Approach', 'Conclusion'. None convey content. Replace with: 'The cache invalidation broke at 3am'; 'Why we moved invalidation to the write path'; 'What this cost us, and when not to do it'."

---

## Tone

- Direct, not cruel. The author wrote something — respect that.
- Specific, not abstract. "Heading 3 is vague" beats "headings are vague."
- Quote what's there before proposing a replacement.
- Don't soften with "consider" if you mean "do this." Consider when genuinely optional, do-this when not.
- If something is genuinely good, say so — accurate praise builds trust for the harder feedback.

## When the user pushes back

If the user disagrees with a critique:
- They might be right — they know their audience and intent better than the rubric.
- Ask which principle they're overriding and why. If it's a deliberate choice (e.g., narrow audience by design), accept it and re-grade.
- Don't restate the same critique louder. Move on.

---

## Output expectations

Every critique returns:
1. The rubric block with all 5 principles graded and evidenced.
2. The prioritized fix list (3–7 items).
3. The one-line bottom-line verdict.

If the post is too short or informal for the full rubric, say so explicitly and offer a lighter critique instead — don't force the structure when it doesn't fit.
