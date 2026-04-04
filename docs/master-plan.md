# K — Contract Law Companion Site: Master Plan

## Vision

A 28-chapter interactive course companion for *Contract Law: Rules, Cases, and Problems* (2d ed., Oranburg, CAP 2025). Each chapter is an interactive exercise set in Middle-earth, following the story arc of *The Hobbit* (Chapters 1–9) through *The Lord of the Rings* (Chapters 10–28), structured around the Hero's Journey.

Students experience contract law doctrine as a narrative: Bilbo's simple bargains in the Shire escalate through the Fellowship's complex agreements to the remedies that make Middle-earth whole again.

---

## Story Arc

### The Hero's Journey × Contract Law

| Journey Stage | Modules | Chapters | Story Arc | Law Arc |
|---|---|---|---|---|
| Ordinary World | 1: Foundations | 1–2 | Bag End — peaceful Shire | What are promises? What is a contract? |
| Call to Adventure | 2: Mutual Assent | 3–6 | Unexpected party → trolls → riddles → Mirkwood | Bargains, offers, termination, acceptance |
| Tests & Allies | 3: Consideration | 7–9 | Lonely Mountain → Arkenstone → Battle of Five Armies | Consideration, estoppel, restitution |
| Crossing the Threshold | 4: Defenses | 10–13 | Isengard → Council of Elrond → Golden Hall → palantír | Statute of Frauds, mistake, improper bargaining, incapacity |
| Inmost Cave | 5: Interpretation | 14–18 | Moria → Lothlórien → breaking of Fellowship → Rohan | Ambiguity, intrinsic/extrinsic evidence, parol evidence, warranties |
| The Ordeal | 6: Performance | 19–23 | Helm's Deep → Osgiliath → Shelob → Pelennor → Black Gate | Conditions, performance, repudiation, excuse, modification |
| Return with Elixir | 7: Remedies | 24–28 | Mount Doom → coronation → Scouring → Grey Havens → Red Book | Damages, defective performance, limits, alternatives, TPBs |

### Chapter-by-Chapter Story Beats

| Ch | Title | Story Beat | Key Doctrine | Exercise Theme |
|----|-------|-----------|-------------|----------------|
| 1 | What Is Contract Law? | Bag End — ordinary world | Nature of promises | The Shire Archives |
| 2 | What Is a Contract? | The Unexpected Party — burglar agreement | Elements of a contract | Bilbo's Burglar Agreement |
| 3 | Bargains | Thorin's handshake — meeting of minds | Mutual assent, objective theory | The Unexpected Party |
| 4 | Offers | Trolls — shifting proposals | Definiteness, communication | Troll Campfire |
| 5 | Termination of the Offer | Riddles in the Dark — wager with Gollum | Lapse, revocation, rejection | Riddles in the Dark |
| 6 | Acceptance | Mirkwood merchants — competing terms | Battle of forms, UCC 2-207 | Mirkwood Merchants |
| 7 | Consideration | Lonely Mountain hoard — Bilbo's share | Bargained-for exchange, adequacy | The Dragon's Hoard |
| 8 | Promissory Estoppel | Arkenstone crisis — Thorin's broken promise | Detrimental reliance, R2d § 90 | The Arkenstone Betrayal |
| 9 | Promissory Restitution | Battle of Five Armies — debts of honor | Moral obligation, Webb v. McGowin | Thorin's Last Gift |
| 10 | The Statute of Frauds | Isengard — Saruman's forged orders | Writing requirement, categories | Isengard Forgery |
| 11 | Mistake | Council of Elrond — the Ring's nature | Mutual/unilateral mistake | The Council's Dilemma |
| 12 | Improper Bargaining | Golden Hall — Wormtongue's corruption | Undue influence, duress, R2d § 177 | Wormtongue's Counsel |
| 13 | Incapacity | Pippin's palantír — acting without understanding | Minority, mental incapacity | The Palantír Oath |
| 14 | Ambiguity | Doors of Moria — "speak friend and enter" | Patent/latent ambiguity | The Doors of Durin |
| 15 | Intrinsic Evidence | Balin's tomb — reading the record | Four corners, canons | The Book of Records |
| 16 | Extrinsic Evidence | Galadriel's Mirror — outside knowledge | Course of dealing, trade usage | Galadriel's Mirror |
| 17 | The Parol Evidence Rule | Breaking of the Fellowship — Boromir's side deal | Integration, merger, contradiction | The Breaking |
| 18 | Warranties | Rohan smithy — weapon guarantees | Express/implied, UCC | The Rohirrim Smithy |
| 19 | Conditions | Helm's Deep — dawn of the fifth day | Precedent, concurrent, subsequent | Dawn at Helm's Deep |
| 20 | Performance & Breach | Faramir at Osgiliath — deviation from orders | Substantial performance, materiality | Faramir's Choice |
| 21 | Repudiation | Shelob's Lair — Gollum's betrayal | Anticipatory repudiation, UCC 2-609 | The Treachery |
| 22 | Excuse | Denethor's madness — frustration of purpose | Impracticability, R2d § 265 | The Steward's Despair |
| 23 | Modification & Discharge | Black Gate — changing the plan | New consideration, good faith | The Last Debate |
| 24 | Money Damages (Nonperformance) | Mount Doom — what was at stake | Expectation interest, Hadley | The Crack of Doom |
| 25 | Money Damages (Defective) | Coronation — repairing the kingdom | Cost of repair vs. diminished value | The King's Repair |
| 26 | Limits on Damages | Scouring of the Shire — recovery limits | Foreseeability, certainty, mitigation | The Three Dams |
| 27 | Alternative Remedies | Grey Havens — when money isn't enough | Specific performance, rescission, restitution | The Last Ship |
| 28 | Third-Party Beneficiaries | The Red Book — who benefits | Intended vs. incidental | The Red Book |

---

## Technical Architecture

### Full Rebuild — Shared Engine

The old codebase had 66% code duplication across exercises (each app.js copied ~230 lines of identical rendering logic). The rebuild extracts this into a shared engine.

```
K/
├── index.html                    ← 28-chapter roadmap (DONE)
├── assets/
│   ├── css/
│   │   └── oranburg-style.css    ← design tokens + roadmap styles (DONE)
│   ├── js/
│   │   ├── engine.js             ← shared exercise engine (render loop, step types, scoring)
│   │   ├── progress.js           ← localStorage progress for roadmap (DONE)
│   │   ├── progress-sync.js      ← Quaere API sync (DONE)
│   │   ├── nav.js                ← shared navigation (DONE)
│   │   └── theme.js              ← dark/light toggle (DONE)
│   └── images/                   ← chapter images (K-{name}.png)
├── exercises/
│   └── {slug}/
│       ├── index.html            ← minimal shell (~30 lines, loads engine)
│       ├── data.js               ← EXERCISE object (content only)
│       └── styles.css            ← optional per-exercise overrides
├── tome/                         ← Phase 3: R2d + UCC reference database
│   ├── index.html
│   └── data/                     ← lazy-loaded JSON
├── archive/                      ← mothballed old exercises (reference only)
├── manuscript/                   ← source texts (casebook, teacher manual, supplement)
└── docs/
    ├── master-plan.md            ← this file
    └── image-prompts.md          ← 43 image generation prompts
```

### Shared Engine (`engine.js`)

Extracted from the 8 identical exercise app.js files. Single source of truth for:

- **State management** — stepIndex, score, total, artifacts, locked, feedback, etc.
- **Step type renderers** — desk, mcq, redline, dragdrop, scales, madlibs, objection, pivot, info
- **Main render loop** — header, progress bar, two-column layout (stage + Tome sidebar), modals
- **Event handlers** — APP.pick(), APP.next(), APP.hitRedline(), APP.assignDrag(), etc.
- **Summary screen** — score display, KSync.complete() call, next-chapter link
- **Utility functions** — el(), esc(), step()

Each exercise only needs a `data.js` that defines the EXERCISE object:
```javascript
var EXERCISE = {
  slug: "shire-promises",
  title: "The Shire Archives",
  kicker: "Module 1 • What Is Contract Law?",
  subtitle: "Bag End, The Shire",
  chapterNum: 1,
  law: "R2d § 1",
  narrative: "Before Gandalf's mark...",
  image: "../../assets/images/K-shire-morning.png",
  prevChapter: null,
  nextChapter: { title: "What Is a Contract?", url: "../bilbo-contract/" },
  tome: [ /* doctrine primer quotes */ ],
  artifacts: [ /* modal evidence cards */ ],
  steps: [ /* interactive steps */ ]
};
```

### Exercise Template (`index.html`)

Every exercise uses the same minimal HTML shell:
```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><!-- set by engine from EXERCISE.title --></title>
  <meta name="nav-depth" content="2">
  <link rel="stylesheet" href="../../assets/css/oranburg-style.css">
  <link rel="stylesheet" href="../../assets/css/engine.css">
  <link rel="stylesheet" href="styles.css">
  <script>/* theme init */</script>
</head>
<body>
  <nav class="site-nav"></nav>
  <div id="game"></div>
  <footer class="site-footer"></footer>
  <script src="../../assets/js/theme.js"></script>
  <script src="../../assets/js/nav.js"></script>
  <script src="data.js"></script>
  <script src="../../assets/js/engine.js"></script>
  <script src="../../assets/js/progress-sync.js"></script>
</body>
</html>
```

### Step Types

| Type | Description | Graded? |
|------|------------|---------|
| `info` | Narrative text, scene-setting | No |
| `desk` | Investigation desk — opens artifact modals | No |
| `mcq` | Multiple choice (3–4 options with feedback) | Yes |
| `redline` | Click a target word/phrase in text | Yes |
| `dragdrop` | Drag tokens into labeled buckets | Yes |
| `scales` | Checkbox factors with animated balance meter | Yes |
| `madlibs` | Fill-in-the-blank judicial holding | Yes |
| `objection` | Modal MCQ with courtroom objection format | Yes |
| `pivot` | Info step with doctrine annotation (transition) | No |

### Progress System

1. Exercise completes → `KSync.complete()` fires
2. `progress-sync.js` writes `k-ch-{N}-complete = "true"` to localStorage
3. `progress-sync.js` POSTs to Quaere API (if student email set)
4. On roadmap (`index.html`), `progress.js` reads localStorage and updates:
   - Chapter dots: gray → gold
   - Module headers: "3 of 5" completion count

---

## Build Phases

### Phase 1: Course Shell ✅ DONE
- [x] Rebuild `index.html` as 28-chapter roadmap
- [x] Collapsible module sections with progress counts
- [x] `progress.js` — localStorage reader
- [x] `nav.js` — shared navigation
- [x] `progress-sync.js` — localStorage write on completion
- [x] Roadmap styles in `oranburg-style.css`

### Phase 2: Engine & Mothball ✅ DONE
- [x] Archive old exercises to `archive/exercises/`
- [x] Extract shared engine → `assets/js/engine.js`
- [x] Extract engine styles → `assets/css/engine.css`
- [x] Create exercise template → `exercises/_template/`

### Phase 3: Seven Module-Level Activities ⬅ PRIORITY — BUILD FIRST

**Module activities are MORE IMPORTANT than chapter activities.** Each module activity is a larger, integrated exercise that spans the entire module's doctrine — a complete story arc within the Hero's Journey stage. These are the anchor exercises students must complete; chapter exercises are supplementary deep-dives.

Module activities follow the Hobbit→LOTR chronology and use the multi-scenario engine pattern (similar to the old `battle-of-forms` SCENARIOS format, but now powered by the shared engine).

Each module activity:
- Spans the full narrative arc for that Hero's Journey stage
- Covers ALL chapters in the module through an integrated scenario
- Uses 8–12 graded steps (longer than chapter exercises)
- Requires synthesis across multiple doctrines
- Lives in `exercises/mod-{N}-{slug}/`

| Module | Hero's Journey | Activity Name | Story Arc | Chapters Covered |
|--------|---------------|---------------|-----------|-----------------|
| 1 | Ordinary World | **There and Back Again** | Bilbo's life before and during the contract — from peaceful Shire to signing the Burglar Agreement | Ch 1–2: promises, contract elements |
| 2 | Call to Adventure | **The Road Goes Ever On** | The journey from Bag End through trolls, riddles, and Mirkwood trade — every step requires agreement | Ch 3–6: mutual assent, offers, termination, acceptance |
| 3 | Tests & Allies | **The Dragon's Price** | The Lonely Mountain quest — what was bargained for, what was promised, what was owed | Ch 7–9: consideration, estoppel, restitution |
| 4 | Crossing the Threshold | **Shadows Over Middle-earth** | The corruption of agreements — forged documents, mistaken beliefs, overborne wills, rash oaths | Ch 10–13: SoF, mistake, improper bargaining, incapacity |
| 5 | Inmost Cave | **The Words Beneath the Words** | From Moria's riddle-door through Galadriel's visions to the Fellowship's breaking — what the agreement really means | Ch 14–18: ambiguity, evidence, parol evidence, warranties |
| 6 | The Ordeal | **The War of the Ring** | From Helm's Deep to the Black Gate — performance under impossible conditions, betrayal, excuse, and adaptation | Ch 19–23: conditions, performance, repudiation, excuse, modification |
| 7 | Return with Elixir | **The Return of the King** | Mount Doom to the Grey Havens — making Middle-earth whole, measuring what was lost, and who benefits | Ch 24–28: damages, limits, alternatives, TPBs |

Process for each module activity:
1. Read ALL textbook chapters in the module
2. Read teacher manual for learning objectives across those chapters
3. Design a multi-scenario narrative that integrates the doctrines
4. Build 8–12 graded steps mixing all step types
5. Include cross-doctrine synthesis questions
6. Fire KSync.complete() for each chapter covered

### Phase 4: 28 Chapter-Level Exercises

After the 7 module activities are complete, build individual chapter exercises as supplementary deep-dives. These are shorter (4–6 steps), focused on one doctrine, and follow the chapter-by-chapter story beats already defined.

Priority: early chapters first (Module 1, then 2, etc.)

Each chapter exercise:
1. Read the specific textbook chapter
2. Doctrine primer before the activity
3. 4–6 graded steps
4. KSync.complete() call
5. Prev/next chapter navigation
6. Lives in `exercises/{slug}/`

### Phase 5: Contracts Tome
- [ ] Extract R2d sections from statutory supplement
- [ ] Extract UCC Article 2 provisions
- [ ] Extract case holdings from casebook
- [ ] Build `tome/index.html` with search
- [ ] Lazy-load JSON data files
- [ ] Three modes: quick lookup, course view, document reader

### Phase 6: Polish
- [ ] Add chapter images (as professor generates them)
- [ ] Mobile optimization pass
- [ ] Accessibility audit
- [ ] Cross-exercise scoring consistency
- [ ] Final UX walkthrough — click every button

---

## Content Sources

| File | Contents | Size |
|------|---------|------|
| `manuscript/Contract Law 2d Ed.md` | Full 28-chapter casebook with 50+ cases | 2.2 MB |
| `manuscript/Oranburg's Contract Law 2d Ed Teachers Manual.md` | IRAC solutions, learning objectives, discussion Qs | 1.2 MB |
| `manuscript/R2d and UCC Provisions for Contracts - Statutory Supplement.md` | Verbatim R2d (~80+ sections) + UCC Article 2 | 966 KB |
| `manuscript/course-notes.yml` | Course metadata, module structure | 4.1 KB |

---

## External Integrations

| System | Purpose | Config |
|--------|---------|--------|
| Quaere | 676 MC questions, LTI for Canvas/Brightspace | Course code: `K-CONTRACTS` |
| Quaere API | Progress tracking (ActivityProgress) | `progress-sync.js` → POST |
| GitHub Pages | Hosting (static, no build step) | Main branch |
| Gemini | Image generation from `docs/image-prompts.md` | Professor generates manually |

---

## Image Prompts

43 prompts in `docs/image-prompts.md`:
- 28 chapter images (one per chapter, named `K-{scene-name}`)
- 2 supplemental (hero banner, module divider)
- 13 alternates (close-ups, alternate angles, backgrounds)

Naming convention: `K-{short-name}.png` — no numbers, matched by name.

One image already generated: `K-image01-burglary-agreement.png` (to be renamed `K-burglary-agreement.png`).

---

## Design Principles

1. **Teach, then quiz** — doctrine primers before every exercise
2. **Story-driven** — Hobbit→LOTR arc gives narrative momentum
3. **Legibility first** — text-sm (14px) minimum for all readable content
4. **Static HTML** — no build step, no framework, vanilla JS
5. **One engine** — shared rendering logic, per-exercise data files
6. **Progressive** — chapter roadmap with visual progress tracking
7. **Cohesive** — same design tokens, navigation, and Middle-earth theme throughout

---

## Lessons Learned from BA (apply here)

### Repeat
- Read textbook BEFORE building activities
- Doctrine primers before every exercise
- Required synthesis notes (min 20 chars) to complete
- Scoring with doctrinal explanations
- Color-coded progress on roadmap
- Breadcrumb navigation on every page
- Commit frequently, push often

### Avoid
- Don't audit by running lint — click every button
- Don't use text-xs for readable content
- Don't map unbuilt chapters to home with no context
- Don't show progress percentages (professor prefers qualitative)
- Don't leave chapters as "planned" when they could be built
- Don't add annotation features (clutter)
