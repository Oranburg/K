/**
 * Chapter 9: Battle of Five Armies — Promissory Restitution
 * Focus: R2d § 86, moral obligation, material benefit rule
 * Cases: Mills v. Wyman, Webb v. McGowin, Drake v. Bell
 */
var EXERCISE = {
  slug: "battle-of-five-armies",
  title: "Battle of Five Armies",
  kicker: "Chapter 9 • Promissory Restitution",
  subtitle: "Field Hospital Tent",
  chapterNum: 9,
  law: "R2d § 86 (Promise for Benefit Received)",
  narrative: "The battle is over. In a field hospital tent on the slopes beneath Erebor, Thorin Oakenshield lies dying. He summons Bilbo — not to enforce the burglar's contract, but to acknowledge a deeper debt. Bilbo saved Thorin's life at the Goblin Gate, shielded him from Azog, and warned the company of treachery. Thorin made no promise beforehand. But now, recognizing the benefit he received, he pledges Bilbo a share of the treasure. Is a deathbed promise binding when it follows — rather than precedes — the benefit? That is the doctrine of promissory restitution.",
  image: "../../assets/images/K-battle-of-five-armies.png",
  prevChapter: { title: "The Arkenstone", url: "../arkenstone-betrayal/" },
  nextChapter: { title: "Saruman's Forgeries", url: "../isengard-forgery/" },
  tome: [
    "R2d § 86(1): \"A promise made in recognition of a benefit previously received by the promisor from the promisee is binding to the extent necessary to prevent injustice.\"",
    "R2d § 86(2): Promise NOT binding if: (a) the benefit was a gift, or (b) the value is disproportionate to the benefit.",
    "General Rule (Mills v. Wyman): Moral obligation alone is insufficient consideration. Past consideration is no consideration.",
    "Exception (Webb v. McGowin): Where the promisor received a MATERIAL BENEFIT and subsequently promised to pay for it, the promise is enforceable.",
    "\"A moral obligation is sufficient consideration to support a subsequent promise where the promisor has received a material benefit.\" — Webb v. McGowin, 27 Ala. App. 82 (1936)."
  ],
  artifacts: [
    {
      id: "thorin-ledger",
      name: "Thorin's Ledger of Debts",
      text: "DEBTS ACKNOWLEDGED BY THORIN OAKENSHIELD\n(Field Hospital Tent, after the Battle of Five Armies)\n\n1. BILBO'S RESCUE AT THE GOBLIN GATE\n   Benefit: Bilbo distracted Azog's warg riders, allowing Thorin to escape certain death.\n   Thorin's promise: 'I will give you one-fourteenth of the hoard — you earned it when you saved my life.'\n   Timing: Benefit received BEFORE promise made. No prior agreement to pay for rescue.\n\n2. GANDALF'S GUIDANCE THROUGH MIRKWOOD\n   Benefit: Gandalf provided maps, counsel, and introduction to Beorn — all as a gift, freely given.\n   Thorin's promise: 'I owe you more than gold, Gandalf.'\n   Timing: Benefit received before promise — but Gandalf intended his aid as a GIFT, not as something requiring repayment.\n\n3. BARD'S SLAYING OF SMAUG\n   Benefit: Bard killed the dragon, saving Erebor and all its inhabitants.\n   Thorin's promise: None. Thorin refused to acknowledge the debt.\n   Timing: Benefit received, but no subsequent promise at all."
    },
    {
      id: "case-comparison",
      name: "Mills v. Wyman vs. Webb v. McGowin",
      text: "MILLS v. WYMAN, 20 Mass. 207 (1825)\n  Facts: Daniel Mills nursed Levi Wyman (adult son of Seth Wyman) through illness. Father Seth later wrote promising to reimburse Mills for expenses.\n  Held: Promise UNENFORCEABLE. The father received no material benefit himself. His son — an independent adult — was the one who benefited. Moral obligation alone cannot serve as consideration.\n  Rule: Past consideration is no consideration.\n\nWEBB v. McGOWIN, 27 Ala. App. 82 (1936)\n  Facts: Webb, an employee, diverted a falling pine block to avoid hitting McGowin, his employer. Webb was severely injured saving McGowin's life. McGowin promised to pay Webb $15 every two weeks for life.\n  Held: Promise ENFORCEABLE. McGowin received a direct, material benefit (his life was saved). His subsequent promise recognized that benefit.\n  Rule: Material benefit + subsequent promise = enforceable obligation under promissory restitution.\n\nDRAKE v. BELL, 55 N.Y.S. 945 (App. Div. 1899)\n  Facts: Contractor mistakenly repaired wrong house. Homeowner, upon learning of mistake, promised to pay for repairs.\n  Held: Promise ENFORCEABLE. Homeowner received material benefit (improved property) and knowingly promised to pay.\n\nKEY DISTINCTION: Did the PROMISOR personally receive a material benefit? If yes → Webb (enforceable). If no → Mills (unenforceable)."
    },
    {
      id: "restitution-flowchart",
      name: "R2d § 86 Flowchart",
      text: "PROMISSORY RESTITUTION ANALYSIS (R2d § 86)\n\nStep 1: Was a benefit previously conferred on the promisor?\n  NO → No promissory restitution. Stop.\n  YES → Continue.\n\nStep 2: Did the promisor make a subsequent promise recognizing that benefit?\n  NO → No enforceable obligation. Stop.\n  YES → Continue.\n\nStep 3: Was the benefit conferred as a GIFT?\n  YES → Promise NOT binding (R2d § 86(2)(a)). Stop.\n  NO → Continue.\n\nStep 4: Is the promised value disproportionate to the benefit received?\n  YES → Promise enforceable only to extent of benefit (R2d § 86(2)(b)). Stop.\n  NO → Promise is BINDING to prevent injustice (R2d § 86(1)).\n\nCompare:\n  ESTOPPEL (R2d § 90): Promise → Reliance (forward-looking)\n  PROMISSORY RESTITUTION (R2d § 86): Benefit → Promise (backward-looking)"
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all three artifacts: Thorin's Ledger of Debts, the Mills v. Wyman vs. Webb v. McGowin case comparison, and the R2d § 86 flowchart. Study the distinction between moral obligation (unenforceable) and material benefit (enforceable)."
    },
    {
      type: "mcq",
      irac: "Material Benefit (R2d § 86(1))",
      prompt: "Bilbo saved Thorin's life at the Goblin Gate. Afterward, Thorin promises Bilbo one-fourteenth of the hoard 'because you saved my life.' No agreement existed beforehand. Is Thorin's promise enforceable?",
      options: [
        {
          text: "Yes — Thorin received a material benefit (his life was saved), and his subsequent promise recognizes that benefit. Under R2d § 86(1), the promise is binding to prevent injustice.",
          correct: true,
          feedback: "Correct. This tracks Webb v. McGowin exactly. Webb saved McGowin's life; McGowin promised to pay. The court held the promise enforceable because the promisor received a direct, material benefit. Here, Thorin IS the one whose life was saved — he personally received the benefit. His subsequent promise recognizes that benefit. R2d § 86(1) makes such promises binding 'to the extent necessary to prevent injustice.' Unlike Mills v. Wyman, the promisor himself — not a third party — was the beneficiary."
        },
        {
          text: "No — past consideration is no consideration. Bilbo's rescue was already complete before any promise was made.",
          correct: false,
          feedback: "This states the general rule correctly (Mills v. Wyman), but misses the exception. R2d § 86 carves out promissory restitution precisely for this situation: when past consideration would normally fail, a material benefit to the promisor plus a subsequent promise creates enforceability. Webb v. McGowin (1936) established that 'a moral obligation is sufficient consideration where the promisor has received a material benefit.' The general rule has an important exception."
        },
        {
          text: "It depends on whether Thorin was conscious when rescued — an unconscious promisor cannot receive a benefit.",
          correct: false,
          feedback: "Consciousness is irrelevant. In Webb v. McGowin, the benefit (saving a life) was conferred in an emergency without the promisor's advance consent. R2d § 86 does not require the promisor to have been aware of or consented to the benefit at the time it was conferred. What matters is the subsequent promise recognizing the benefit — not the promisor's mental state during the rescue."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Gift Exception (R2d § 86(2)(a))",
      prompt: "Gandalf guided the company through Mirkwood, provided maps, and arranged shelter with Beorn — all freely given, as wizards do. Thorin says on his deathbed: 'I owe you more than gold, Gandalf. Take 500 gold pieces.' Is this promise enforceable under R2d § 86?",
      options: [
        {
          text: "No — Gandalf's aid was a gift, freely bestowed. R2d § 86(2)(a) excludes benefits conferred as gifts from promissory restitution.",
          correct: true,
          feedback: "Correct. R2d § 86(2)(a): a promise is NOT binding if 'the promisee conferred the benefit as a gift.' Gandalf's guidance was freely given — he expected nothing in return. The gift exception exists because promissory restitution is designed to prevent injustice, and there is no injustice in declining to enforce a promise for a benefit the giver never expected compensation for. Compare Bilbo's rescue: while also voluntary, it imposed severe personal risk and cost — making it more like Webb's sacrifice than a mere gift."
        },
        {
          text: "Yes — Thorin received a material benefit (safe passage) and promised to pay for it. R2d § 86(1) applies regardless of the giver's intent.",
          correct: false,
          feedback: "The giver's intent matters critically. R2d § 86(2)(a) specifically carves out gifts: if the benefit was 'conferred as a gift,' the subsequent promise is NOT binding. Gandalf intended his guidance as a gift — he is a wizard, not a hired guide. This is the gift exception at work: the promisee's intent at the time of conferral determines whether § 86 applies."
        },
        {
          text: "Yes — a deathbed promise carries extra moral weight that overcomes the gift exception.",
          correct: false,
          feedback: "Moral weight does not override statutory exceptions. R2d § 86(2)(a) is a bright-line rule: gifts are excluded from promissory restitution. The circumstances of the promise (deathbed, emotional) do not alter the legal analysis. Mills v. Wyman itself involved a moral father's promise — and the court held moral obligation insufficient without material benefit to the promisor."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Applying R2d § 86",
      prompt: "Classify each scenario: Is the subsequent promise enforceable under R2d § 86, or does an exception bar enforcement?",
      tokens: [
        { id: "t1", label: "Bilbo saves Thorin's life; Thorin promises gold" },
        { id: "t2", label: "Gandalf freely guides the company; Thorin promises payment" },
        { id: "t3", label: "Seth Wyman promises to pay stranger who nursed his adult son" },
        { id: "t4", label: "Webb saves McGowin's life; McGowin promises biweekly payments" },
        { id: "t5", label: "Contractor repairs wrong house; homeowner promises to pay" },
        { id: "t6", label: "Thorin promises Bilbo the entire hoard for saving his life" }
      ],
      buckets: [
        { id: "enforceable", label: "Enforceable (R2d § 86(1))" },
        { id: "gift", label: "Not Enforceable — Gift Exception (§ 86(2)(a))" },
        { id: "no-benefit", label: "Not Enforceable — No Benefit to Promisor" },
        { id: "disproportionate", label: "Enforceable Only to Extent of Benefit (§ 86(2)(b))" }
      ],
      requiredAssignments: {
        "t1": "enforceable",
        "t2": "gift",
        "t3": "no-benefit",
        "t4": "enforceable",
        "t5": "enforceable",
        "t6": "disproportionate"
      },
      success: "Correct. The key distinctions: (1) Bilbo/Thorin and Webb/McGowin are classic § 86(1) — material benefit to the promisor, subsequent promise, enforceable to prevent injustice. (2) Gandalf's aid was a gift — § 86(2)(a) bars enforcement. (3) Mills v. Wyman (Seth Wyman) fails because the PROMISOR never received a benefit — his adult son did. (4) Drake v. Bell (wrong house) is enforceable because the homeowner directly benefited. (5) The entire hoard is disproportionate — § 86(2)(b) limits recovery to the value of the benefit received.",
      failure: "Review the R2d § 86 flowchart. Ask: (1) Did the PROMISOR personally receive a benefit? (2) Was it a gift? (3) Is the promised amount proportionate? Each filter narrows the outcome."
    },
    {
      type: "mcq",
      irac: "Distinguishing Estoppel from Restitution",
      prompt: "Thorin's promise to Bilbo is backward-looking: it recognizes a benefit already received. How does promissory restitution (R2d § 86) differ from promissory estoppel (R2d § 90)?",
      options: [
        {
          text: "Restitution is backward-looking (benefit precedes promise); estoppel is forward-looking (reliance follows promise). They protect different interests.",
          correct: true,
          feedback: "Correct. R2d § 86 (promissory restitution) enforces promises that look BACKWARD: the promisee already conferred a benefit, and the promisor's subsequent promise acknowledges it. R2d § 90 (promissory estoppel) enforces promises that look FORWARD: the promisee relies on the promise to her detriment AFTER it is made. Thorin's case is § 86 — Bilbo already saved him. If instead Thorin had promised gold and Bilbo had then quit his job in reliance, that would be § 90. The temporal direction of the exchange is the key distinction."
        },
        {
          text: "There is no meaningful difference — both are alternatives to consideration that enforce promises to prevent injustice.",
          correct: false,
          feedback: "Both are indeed consideration substitutes that prevent injustice, but they are structurally different. R2d § 86 requires a PRIOR benefit conferred on the promisor — no benefit, no claim. R2d § 90 requires SUBSEQUENT reliance by the promisee — no reliance, no claim. One looks backward (what was given before the promise), the other forward (what was done after the promise). The distinction determines which section applies and what must be proven."
        },
        {
          text: "Restitution requires a written promise; estoppel can be oral.",
          correct: false,
          feedback: "Neither R2d § 86 nor R2d § 90 requires a writing. Both can enforce oral promises. The distinction is directional: § 86 looks backward (benefit already received), § 90 looks forward (reliance yet to come). Webb v. McGowin's promise was oral; it was enforced under promissory restitution because McGowin had received a material benefit."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Complete the promissory restitution holding for Thorin's deathbed promise:",
      template: "The general rule is that past consideration is no [A] (Mills v. Wyman). But R2d § 86(1) creates an exception: a promise made in recognition of a [B] previously received is binding to prevent injustice. This is called promissory [C]. Thorin's promise to Bilbo is enforceable because Thorin — like McGowin in [D] v. McGowin — personally received a material benefit. Gandalf's claim fails because his aid was a [E], excluded by § 86(2)(a). Unlike promissory estoppel, which looks forward to reliance, promissory restitution looks [F] to benefit already conferred.",
      blanks: [
        { key: "A", options: ["consideration", "obligation", "contract"], answer: "consideration" },
        { key: "B", options: ["benefit", "promise", "payment"], answer: "benefit" },
        { key: "C", options: ["restitution", "estoppel", "reliance"], answer: "restitution" },
        { key: "D", options: ["Webb", "Mills", "Drake"], answer: "Webb" },
        { key: "E", options: ["gift", "loan", "service"], answer: "gift" },
        { key: "F", options: ["backward", "forward", "inward"], answer: "backward" }
      ],
      success: "Chapter 9 complete. Thorin dies reconciled — and his promise to Bilbo stands as law. Promissory restitution bridges the gap between moral obligation and legal enforceability: when a material benefit precedes a promise, R2d § 86 transforms gratitude into duty. Mills teaches the general rule (moral obligation alone is insufficient). Webb teaches the exception (material benefit makes it sufficient). And the gift exception ensures that freely given aid remains truly free. Ahead: Module 4, where contracts face challenges of fraud, duress, and misrepresentation.",
      failure: "Review: Past consideration generally fails (Mills). Exception under R2d § 86: material benefit + subsequent promise = enforceable (Webb). Gifts excluded (§ 86(2)(a)). Restitution looks backward; estoppel looks forward."
    }
  ]
};
