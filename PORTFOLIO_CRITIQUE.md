# Portfolio Critique — All 8 Project Cases

Reviewed against the six creative-technologist principles in `.claude/skills/portfolio-case-critic/SKILL.md`. Pages graded **S**trong / **O**K / **W**eak / **F**ailing on each principle.

| Project | P1 Open | P2 Layers | P3 Constraints | P4 Decisions | P5 Invisible | P6 Authorship |
|---|---|---|---|---|---|---|
| Fissa (2023) | S | S | **S** | **S** | S | **S** |
| Assessor Bot (2025) | **S** | S | O | **S** | S | **S** |
| VeileNext (2021) | S | S | **S** | **S** | O | O |
| Microflow (2024) | S | S | W | W | S | W |
| Glosario (2026) | S | O | W | W | O | W |
| LiveStock (2018) | S | W | W | W | W | O |
| Spirit (2019) | O | W | W | W | **F** | O |
| Athena (2017) | O | W | W | W | **F** | W |

Principles: **P1** Open with clarity (problem/role/outcome on first screen) · **P2** Show translation layers (concept→interaction→system→code) · **P3** Frame constraints as creative drivers · **P4** Make decisions explicit · **P5** Make the invisible visible (diagrams + code) · **P6** Show authorship and iteration honestly.

---

## Per-case findings

### Fissa — `app/project/fissa/page.tsx`

- **P1 S** — TLDR is two sharp lines; subtitle "Not only one person should decide what's playing on a party" is on-thesis.
- **P2 S** — All four layers cross: concept (DJ hijack), interaction (vote + theme), system (Vercel serverless + Prisma + Spotify), code (sort algorithm, schema diff, recommendations). Best layer-crossing in the portfolio.
- **P3 S** — The 10-second Vercel serverless limit plus 50+ song scale is named *and* drives the index→score redesign. Spotify-as-recs source named.
- **P4 S** — The whole index→score arc is one long "we picked X, not Y, because Z." The pivot is honest and explicit.
- **P5 S** — Six load-bearing snippets. Missing only a high-level architecture diagram of the tRPC + Prisma + Spotify topology, but the prose carries it.
- **P6 S** — Milan attributed top + bottom. Honest pivot. Strongest page in the portfolio.

### Assessor Bot — `app/project/assessor-bot/page.tsx`

- **P1 S** — TLDR is the best on the site. Line three ("The hard part: getting the AI to stop making things up. The fix: stop over-engineering it.") is the page's thesis in 18 words.
- **P2 S** — Concept (guidance not banning) → interaction (upload→feedback video) → system (LangChain + Ollama + RAG-then-not-RAG) → code (5+ real snippets including the production prompt). Layers crossed cleanly.
- **P3 O** — Privacy ("data stays on device") and the $200/month cost barrier are explicit constraints driving Ollama. Could state the model-size / hardware floor (which Ollama models work on a student laptop?).
- **P4 S** — Multiple explicit decisions: full-context not RAG (because word-limited reflections fit), Ollama not cloud (privacy), `format: "json"` + post-processing not structured-output (lib didn't support it yet). Honest pivot section ("I should be less confident").
- **P5 S** — Five load-bearing snippets including the actual production prompt — gutsy. Two videos. One LangChain reference diagram. Missing: a final "after" architecture diagram (no-RAG path) which would close the loop.
- **P6 S** — Three students attributed up front via an Alert callout — exemplary. Jaap's parrot iteration credited. Honest about ~80% structured-output success. Best authorship/iteration on the site.

### VeileNext — `app/project/veilenext/page.tsx`

- **P1 S** — TLDR is exemplary: problem (decade-old Windows), action, outcome (rolled out 2025).
- **P2 S** — All four layers visible. The "four areas to modernize" structure is exactly the translation-layer move.
- **P3 S** — UDP unreliability + 90ms global latency target + Windows-only/VPN + release freezes — all named, all drive the four chosen areas.
- **P4 S** — Best alternative-listing in the portfolio: "evaluated Native Websockets, socket.io, SignalR, gRPC, WebRTC; chose .NET WebSockets." Microservices and Storybook rationales also given.
- **P5 O** — Two real architecture diagrams (status quo + proposed). One Storybook screenshot. Zero code (acknowledged: "details left out for competitive reasons"). The competitive-reasons disclaimer is honest but caps this principle.
- **P6 O** — "We" used throughout — your authorship is not separated from the broader Conclusion AI team. Conclusion + Cypress meetup attributions are good. The 2025 update is a great honesty signal. Missing: what *you* specifically did, what didn't work in the pilot.

### Microflow — `app/project/microflow/page.tsx`

- **P1 S** — Subtitle "Microcontrollers made simple" + 3-line TLDR cleanly answer problem/build/unlock.
- **P2 S** — All four layers cross — concept (designers can't reach hardware), interaction (node graph), system (MQTT bridge, Firmata stack), code (3 load-bearing snippets).
- **P3 W** — Constraints implicit only. Never names the chip class, perf budget, why Electron not web (USB? FS access?), or what the Figma plugin sandbox forbids.
- **P4 W** — Why MQTT not WebSockets? Why xyflow not LiteGraph or React Flow alternatives? Why generate JS for the firmware not bytecode? Zero "X not Y because Z" sentences.
- **P5 S** — Three real snippets (MQTT messenger, Flasher, code-generator). Missing: a sequence diagram (Figma → MQTT → Electron → Firmata → board) which would do more than any prose.
- **P6 W** — "I" throughout, but the linked "first prototype" and "second prototype" *imply* a pivot you never narrate. No failure mode, no "what I'd change."

### Glosario — `app/project/glosario/page.tsx`

- **P1 S** — "Acronyms Seriously Suck" hook works. TLDR three lines, on point.
- **P2 O** — Concept → interaction (draft/pending/approved + suggestions + flagging + crowd-voted relations) → system (revisioning) → code (one schema snippet). Layers thin: only one snippet, no diagram, multi-tenant boundary unexplored.
- **P3 W** — Multi-tenant is non-trivial; tenancy isolation isn't discussed. Why Hono *and* tRPC (both listed)? Why Drizzle over Prisma? Why Better Auth? None justified.
- **P4 W** — Zero "X not Y because Z." Decisions look made but not shown.
- **P5 O** — Three captioned screenshots, one schema snippet. The crowd-voting graph and term-relation system *cry out* for a diagram. Currently borderline-passes the visual-only-designer test.
- **P6 W** — Solo (presumably) but not stated. No pivot, no limitation, no open question. CTA-heavy ("Help your team!") tilts the page toward marketing.

### LiveStock — `app/project/livestock/page.tsx`

- **P1 S** — Hook is strong. "Farm animals are mining rigs and bacon is the most volatile currency."
- **P2 W** — Concept and interaction (paper proto, symbolism map) thoroughly shown. System (Angular/Express/Socket.io for real-time multiplayer 2–5 players) collapsed. No code despite a real-time multiplayer game being non-trivial.
- **P3 W** — "2–5 participants, 15–60 min sessions" — that's a constraint, but never connected to a design or system choice (e.g., why Socket.io, why session length cap).
- **P4 W** — Symbolism well *shown* but not *justified* against alternatives. Why farm? Why these animals? Why volatility model?
- **P5 W** — Many illustrations, mind map, paper proto, wireframes — design process visible. No architecture, no code. The single GitHub link to a generation function is not pulled into the page.
- **P6 O→S** — Three collaborators attributed. INC mention. Visible iteration via paper-proto / wireframe progression — the strongest implicit-iteration story on the site, but never narrated in prose.

### Spirit — `app/project/spirit/page.tsx`

- **P1 O** — Subtitle is aspirational ("Empower patients…"). TLDR good. Conference mention is signal.
- **P2 W** — Concept and interaction (Face component, monsters, badges, fear ladder) thoroughly shown. **System and code layers entirely absent.** Stack list (AWS Amplify, Angular, Ionic) is a credit line.
- **P3 W** — "Local diary, never sent to server" is *almost* a privacy constraint but never framed as a design driver. No clinical/regulatory or accessibility constraint named.
- **P4 W** — Monster narrative explained, but no alternatives shown. Why Ionic? Why Highcharts for mood?
- **P5 F** — Zero diagrams, zero code, zero systems signal. **Fails the visual-only-designer test outright.**
- **P6 O** — Carmen Scherbaum + Prof. Steffen Moritz attributed. Conference attribution. But no failure / pivot / limitation across the whole page.

### Athena — `app/project/athena/page.tsx`

- **P1 O** — Subtitle ("An honest feedback tool…") is a tagline. TLDR clear.
- **P2 W** — Concept and interaction clear. System (LDAP integration, Trello sync, anonymization) collapsed into the tech list. No code, no architecture.
- **P3 W** — Anonymity is named as a value but not as a system constraint. The interesting question — how do you anonymize *and* let teachers see signal? — is not addressed. HvA LDAP is the kind of constraint worth surfacing.
- **P4 W** — "Anonymous because honest feedback" — a decision, but no alternative discussed. Trello-sync is a feature with no rationale.
- **P5 F** — Zero diagrams, zero code. Visual-only-designer test fails.
- **P6 W** — Apparently solo (no collab section), but never stated. No iteration. **Broken link bug:** `http://localhost:4321/project/athena/(https://www.hva.nl/...)` on the CMD link, line 64 — needs fixing.

---

## Cross-portfolio patterns

1. **Recency cliff in P2 (translation layers).** Pages from 2021+ (VeileNext, Fissa, Microflow, Assessor Bot, Glosario) cross all four layers. Pages from 2017–2019 (Athena, LiveStock, Spirit) read as designer-mode portfolios — concept + interaction strong, system + code absent. This is the single largest pattern in the portfolio. Same author, same skills, same GitHub repos with code that isn't reached for.
2. **Constraint-surfacing is uneven.** Fissa (10s serverless) and VeileNext (90ms latency) name their constraints and let those constraints drive every later decision — that's senior signal. Microflow, Glosario, Spirit, Athena, LiveStock leave constraints in the tech list rather than the argument.
3. **Pivots are mostly invisible.** Only Fissa (index → score) and Assessor Bot (RAG → full-context) make the failure → fix legible. Microflow's "first/second prototype" links *imply* a pivot that's never narrated; LiveStock's paper-proto → wireframe progression *implies* iteration without naming what changed.
4. **Architecture diagrams are missing in 6 of 8.** VeileNext is the only page with real architecture diagrams. Microflow, Fissa, Glosario, Spirit, Athena, and LiveStock would each be lifted by *one* boxes-and-arrows diagram. Single highest-leverage edit across the portfolio.
5. **Authorship is implied, not stated.** No page has a plain "I did X, Y, Z; A did W; everything else was solo" sentence. Microflow / Glosario read as solo but never say so. VeileNext uses "we" throughout, hiding your specific contribution to a multi-team enterprise rewrite — likely the page that costs you the most by omitting this.
6. **Spirit and Athena fail the visual-only-designer test.** A reader can't tell from these pages that you write code. Both link to GitHub repos in the aside, but neither pulls a single signal out of those repos onto the page.
7. **Bug:** Athena CMD link is `http://localhost:4321/project/athena/(https://www.hva.nl/...)` — broken in production.

## Bottom line

The portfolio bifurcates: four pages (Fissa, Assessor Bot, VeileNext, Microflow) read like the work of a senior creative technologist; three (Spirit, Athena, LiveStock) read like the work of a designer who happens to have a GitHub. Glosario sits in between. The cheapest, highest-leverage fix is a single architecture diagram per page on the six that lack one, paired with a plain authorship line. Everything else is incremental.
