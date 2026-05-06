---
name: blog-post-writer
description: Write technical blog posts that developers actually read, following Michael Lynch's "Refactoring English" principles (300k+ readers/year, 30+ HN front page hits). Use whenever the user wants to draft, plan, outline, or rewrite a developer-focused blog post, dev-log entry, technical article, engineering write-up, case study, or post-mortem — even if they don't say "blog post." Trigger on phrases like "write a post about X," "turn this into an article," "draft a blog," "I want to publish," "write up my project," or pasting raw notes asking for a published version. Optimizes for skimmer-friendly structure, audience reach, and a title+intro that earns the click.
---

# Blog Post Writer

Write developer blog posts using five principles from Michael Lynch's chapter [How to Write Blog Posts that Developers Read](https://refactoringenglish.com/chapters/write-blog-posts-developers-read/). Lynch's blog gets 300k–500k unique readers/year and has hit the Hacker News front page 30+ times — these principles compound.

The goal is not "fine prose." Goal is: a developer lands on the page, stays past three sentences, finishes (or skims usefully), and shares it. Every move below serves that.

## Workflow

1. **Interview the user before drafting.** Get: target reader profile, the single insight or claim, distribution plan (HN? subreddit? Google?), available visuals, length budget. If user pastes notes and asks "make this a post," ask before writing — most raw notes target too narrow an audience and bury the insight.
2. **Apply the five principles below in order.** They map to common failure modes; respect them.
3. **Draft, then run the self-review checklist** at the bottom. Hand both to the user.

If the user pushes back on any principle ("I don't need a hook, this is for my own audience"), defer to them — these are heuristics for reach, not laws.

---

## Principle 1 — Get to the point

The biggest mistake software bloggers make is meandering. Readers arrive trying to answer two questions, fast:

1. Did the author write this for someone like me?
2. How will I benefit from reading it?

**Rule:** the title plus the first three sentences must answer both. If you're in paragraph two and haven't, you've lost most of the tab.

To signal "this is for you," name topics they care about and use terms they recognize. Don't open with the history of the field, a personal anecdote, or "I recently was working on a project when…" — the reader doesn't yet care about you, only what they get.

Possible benefits to promise upfront:
- A technique they can apply.
- A clear explanation of a concept that affects their work.
- An insight that sharpens their model of a tech or industry.
- A story or case study with a transferable lesson.

**Worked example (verbatim from the chapter):**

> **if got, want: A Simple Way to Write Better Go Tests**
>
> There's an excellent Go testing pattern that too few people know. I can teach it to you in 30 seconds.

Title flags audience (Go developers). Sentence one promises a pattern. Sentence two promises low time cost. Click earned.

**Anti-pattern:** "I've always loved testing. When I started programming in 2008, my dad gave me a copy of *The Pragmatic Programmer*…" — five paragraphs in, still no claim, reader gone.

## Principle 2 — Think one degree bigger

Most posts are scoped to a tiny audience by accident. "Debugging Memory Leaks in Java" is written for intermediate-to-advanced Java devs. With one or two sentences of setup, it can serve all Java devs (~10× the audience). With a bit more framing, it might reach all programmers.

**Rule:** before publishing, ask: *Is there a wider audience I could include with a small tweak?* Usually yes — replace jargon with a friendly term, add one sentence defining a concept, or rework an example so it doesn't require domain context.

You can't broaden every post (your dentist won't read about JVM internals), and you stop broadening when terms start losing precision. But the default should be one degree wider than your first instinct.

**Worked example:** Lynch's *How I Stole Your Siacoin* started for ~hundreds of Siacoin users. He swapped "blockchain" and "Merkle tree" for "wallet" and "passphrase," and the post hit Hacker News front page and topped /r/cryptocurrency. Same insight, ~1000× the reach.

**How to apply during drafting:**
- After draft 1, list every term that requires domain knowledge. For each, ask: can I use a more common word, or add a one-sentence aside?
- If your post assumes the reader already knows X, ask: is X explainable in one paragraph? If yes, explain it.

## Principle 3 — Plan the route to your readers

Before writing, plan how the post will reach humans. A great post nobody finds is just journaling.

**Pre-write distribution audit.** For the proposed topic, check:

- **Google:** Are there already 500 articles on this from established domains? Search the keywords your reader would. If page 1 is dominated by docs, big blogs, or Stack Overflow, organic search is a dead lane — that's fine, but plan accordingly.
- **Hacker News / Lobsters:** Search for similar past submissions. Do posts on this topic land on the front page, or sink? Some topics (Zig, Rust internals, weird hardware, indie business) play well; others (yet-another-React-tutorial) don't.
- **Subreddits / niche forums:** Does the relevant subreddit allow blog links? Is it active? Do similar posts get upvoted, or auto-moderated as self-promo?

**Rule:** give the post **multiple shots on goal**. Betting only on Google is a slow heartbreak; betting only on HN is a fast one. Aim for at least two viable distribution paths before drafting.

**Topic implication:** the *choice* of what to write is part of writing. A novel angle on a niche topic ("Using Zig to unit-test C") often beats a polished take on a saturated topic ("Python tutorial").

## Principle 4 — Show more pictures

The biggest bang-for-your-buck change to most posts is adding visuals. Long stretches of text fatigue readers and look like work; images give the eye a place to rest and signal effort.

**Defaults:**
- GUI program → screenshots.
- Performance / metrics claim → graph.
- Server overload, error, alert → screenshot of the dashboard or alert email.
- Difficult concept → diagram.
- Architecture → boxes-and-arrows diagram.
- Sequence of steps → numbered screenshots or a small flowchart.

**Tools:**
- Free diagrams: [Excalidraw](https://excalidraw.com/) is the default. Hand-drawn feel beats sterile.
- Paid illustrations: $50–100 per illustration via cartoonists is realistic for a hit-aspiring post.
- **AI-generated images are worse than nothing professional and worse than an MS Paint sketch.** They signal low effort and low taste. Skip them. A crude hand-drawing reads as charming; a generic AI illustration reads as slop.
- Stock photos: better than AI, worse than anything bespoke. Use sparingly.

**Rule of thumb:** every screenful of text should have a visual anchor — heading, image, code block, callout, blockquote. If you scroll a draft and see a wall of paragraphs, intervene.

## Principle 5 — Accommodate skimmers

Many readers skim first to decide whether to read. Most never go past the skim. Design for them.

**The skim test:** if the reader saw only your headings and images, would they (a) understand what the post is about, and (b) want to read the full version?

**Heading rules:**
- Headings should be **descriptive of content**, not decorative ("How I solved it" — bad; "Why the cache invalidation broke at 3am" — good).
- A heading should be a useful summary on its own. If it requires the previous paragraph for context, rewrite it.
- Avoid clever-but-empty headings ("The plot thickens"). Cleverness fine, *plus* information always.

**Layout rules:**
- Break long paragraphs. Three to five sentences max as a default.
- Use bulleted lists for anything that's actually a list.
- Use blockquotes for quotes and key takeaways.
- Use code blocks for code, even single lines if they're identifiers.
- Add an image, callout, or sub-heading every ~few hundred words.

**Self-test:** Lynch's "skimmify" bookmarklet strips paragraphs and shows just headings + images. Mentally do the same — read only the headings/images of your draft top to bottom. Does it tell a story? If not, the skim will fail.

---

## Recommended structure

Not a rigid template — a starting shape. Adjust to fit the post.

```
# [Title that names the audience and the benefit]

[Sentence 1: who this is for / what concrete claim]
[Sentence 2: why it matters or what's surprising]
[Sentence 3: what the reader will walk away with]

[Optional: TOC for long posts — Lynch uses one for 1500+ word posts]

## [First descriptive heading — names a sub-claim, not a topic]
[Short paragraphs, visual every screen, code where relevant]

## [Worked example or evidence]
[Concrete: real screenshot, real numbers, real code, real story]

## [Generalize / takeaway]
[What the reader does differently on Monday]
```

## Title patterns that work

- Specific technique + audience: *"if got, want: A Simple Way to Write Better Go Tests"*
- First-person stakes: *"I Regret My $46k Website Redesign"*
- Bold claim that invites the click: *"How I Stole Your Siacoin"*
- Concrete number + unexpected pairing: *"Using Zig to Unit Test a C Application"*

Avoid:
- Pure topic names ("On testing"): no audience signal, no benefit.
- Mystery titles ("A surprising lesson"): readers don't owe you a click.
- Listicle without value ("5 Things About React"): cliché-coded; you must overcome it.

## Voice

- First-person is fine, often preferred — it earns trust and lets you tell stories.
- Short sentences. Cut adverbs. Active voice.
- Specific over abstract: real file names, real error messages, real numbers.
- The reader is smart and busy. Don't pad. Don't pre-apologize. Don't over-explain that you're about to explain.

---

## Pre-publish self-review checklist

Run this against the finished draft. If any answer is no, fix it.

**Hook (Principle 1)**
- [ ] Does the title name the audience or the benefit?
- [ ] By the end of sentence 3, can a reader tell whether this is for them?
- [ ] By the end of sentence 3, do they know what they get out of finishing it?

**Reach (Principle 2)**
- [ ] Could one extra sentence widen the audience by an order of magnitude?
- [ ] Is every term requiring domain knowledge either necessary or explained?

**Distribution (Principle 3)**
- [ ] Do I have ≥2 plausible places this could land (Google, HN, Lobsters, subreddit, niche forum)?
- [ ] Is there at least one path that doesn't depend on Google ranking?

**Visuals (Principle 4)**
- [ ] Is there a visual anchor every screen of scrolling?
- [ ] Are graphs/screenshots labelled and legible?
- [ ] Did I avoid AI-generated decorative imagery?

**Skimmability (Principle 5)**
- [ ] Reading only headings + images, does the post still tell a story?
- [ ] Are paragraphs ≤5 sentences in most places?
- [ ] Does each heading describe its section's content (not just label it)?

**Cuts**
- [ ] Did I delete the throat-clearing intro that was actually paragraphs 1–2?
- [ ] Did I cut history/setup the reader didn't ask for?
- [ ] Are there any sentences that, removed, the post wouldn't miss?

---

## Output expectations

When asked to write or draft a post:
1. Confirm audience, claim, and distribution plan if not already clear.
2. Produce the draft as Markdown.
3. After the draft, list any visuals the user still needs to source (e.g., "screenshot of the dashboard at the moment of the spike — you'll need to capture this").
4. End with the self-review checklist filled in (or flagged where the user must verify, e.g., distribution plausibility).

When asked to revise an existing draft, run the checklist first, point out the top 3 issues, then propose specific edits.
