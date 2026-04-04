/**
 * Chapter 8: The Arkenstone — Promissory Estoppel
 * Focus: R2d § 90(1), four elements, reliance damages, safety-net doctrine
 * Cases: Ricketts v. Scothorn (1898), Conrad v. Fields (2007)
 */
var EXERCISE = {
  slug: "arkenstone-betrayal",
  title: "The Arkenstone",
  kicker: "Chapter 8 • Promissory Estoppel",
  subtitle: "Ramparts of the Lonely Mountain",
  chapterNum: 8,
  law: "R2d § 90",
  narrative: "Thorin Oakenshield made a public vow: whoever recovered the Arkenstone would be rewarded above all others. Bilbo found it — and relied on that promise, surrendering the stone to Bard and Thranduil as a bargaining chip to avert war. Now Thorin rages at the betrayal and refuses any reward. There was no formal bargain, no consideration exchanged. But Bilbo changed his position in reliance on Thorin's promise. Promissory estoppel serves as a safety net within contract law, filling the gaps left by doctrines like consideration.",
  image: "../../assets/images/K-arkenstone-betrayal.png",
  prevChapter: { title: "The Dragon's Hoard", url: "../dragons-hoard/" },
  nextChapter: { title: "Battle of Five Armies", url: "../battle-of-five-armies/" },
  tome: [
    "R2d § 90(1): \"A promise which the promisor should reasonably expect to induce action or forbearance on the part of the promisee or a third person and which does induce such action or forbearance is binding if injustice can be avoided only by enforcement of the promise.\"",
    "Four elements of promissory estoppel: (1) clear and definite promise, (2) reasonable reliance by the promisee, (3) actual detriment suffered, (4) injustice avoidable only by enforcement.",
    "The remedy may be limited as justice requires — courts can award reliance damages rather than full expectation damages (R2d § 90(1)).",
    "Ricketts v. Scothorn, 57 Neb. 51 (1898): Grandfather's promissory note induced granddaughter to quit her job; court enforced the promise via estoppel despite lack of consideration.",
    "Conrad v. Fields, 2007 WL 2106302 (Minn. App. 2007): Wealthy friend promised to pay law school tuition; plaintiff quit $45K job in reliance; court awarded full tuition damages.",
    "The promise must be clear and definite from a reasonable person's perspective — vague hopes or social courtesies are not actionable promises."
  ],
  artifacts: [
    {
      id: "thorins-vow",
      name: "Thorin's Vow & Bilbo's Reliance",
      text: "THORIN'S PUBLIC VOW (spoken before the Company):\n'The Arkenstone is the heart of this mountain. I would give anything to see it returned. Whoever brings me the Arkenstone shall name their own reward — I will honor it above all other claims.'\n\nBILBO'S RELIANCE:\n• Found the Arkenstone in Smaug's hoard (Ch 7)\n• Surrendered it to Bard and Thranduil as a peace offering\n• Gave up possession of the most valuable gem in Middle-earth\n• Reasoned: Thorin promised a reward; trading the stone for peace serves everyone\n• Expected: Thorin would honor his vow and reward Bilbo's judgment\n\nTHORIN'S REVOCATION:\n'You! You miserable hobbit — you undersized burglar! I gave you a share, and now you steal what is mine? I will throw you to the rocks! There shall be no reward for treachery!'\n\nRESULT: Bilbo is worse off than before the promise — he surrendered the Arkenstone (immense value) and received nothing."
    },
    {
      id: "estoppel-elements",
      name: "Promissory Estoppel — Element Checklist",
      text: "R2d § 90(1) ELEMENT ANALYSIS — Applied to Bilbo's Claim:\n\n1. CLEAR PROMISE\n   Thorin: 'Whoever brings me the Arkenstone shall name their own reward.'\n   Specific? Yes — identifies the act (return the stone) and the reward (promisee's choice).\n   Compare Ricketts: grandfather's note = clear promise to pay $2,000.\n\n2. REASONABLE RELIANCE\n   Did the promisor reasonably expect to induce action? Yes — the vow was designed to motivate the Company to search for the stone.\n   Did Bilbo actually rely? Yes — he surrendered the stone based on the promise.\n   Compare Conrad: plaintiff quit $45K job based on friend's tuition promise.\n\n3. DETRIMENT\n   Bilbo is worse off than if the promise had never been made.\n   He gave up the Arkenstone (priceless gem) and received nothing.\n   Without the promise, he might have kept the stone or never searched for it.\n\n4. INJUSTICE\n   Can injustice be avoided only by enforcement? Bilbo relied to his detriment on a public vow. Thorin benefited (the stone was found). Leaving Bilbo with nothing rewards Thorin's broken promise.\n\nREMEDY NOTE: R2d § 90(1) — 'The remedy granted for breach may be limited as justice requires.' A court might award reliance damages (value Bilbo gave up) rather than full expectation damages (the reward Bilbo would have named)."
    },
    {
      id: "case-comparison",
      name: "Case Comparison: Ricketts & Conrad",
      text: "RICKETTS v. SCOTHORN (Neb. 1898)\nFacts: Grandfather gave granddaughter a promissory note for $2,000 at 6% interest, saying 'I don't want you to work anymore.' She quit her job in reliance.\nPromise: Clear — written note with specific amount.\nReliance: Quit employment.\nDetriment: Lost wages and job security.\nHolding: Promise enforced via estoppel. No consideration (gift promise), but reliance made it binding.\n\nCONRAD v. FIELDS (Minn. App. 2007)\nFacts: Wealthy friend promised to pay plaintiff's law school tuition. Plaintiff quit $45K/year job and enrolled.\nPromise: Clear — specific commitment to fund legal education.\nReliance: Left stable employment, incurred educational obligations.\nDetriment: Lost income, career disruption.\nHolding: Full tuition damages awarded. Court found all four elements satisfied.\n\nCOMMON THREAD: In both cases, (1) no traditional consideration existed, (2) the promise was specific enough to rely on, (3) the promisee changed position to their detriment, and (4) only enforcement prevented injustice."
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all three artifacts: Thorin's vow and Bilbo's reliance, the promissory estoppel element checklist, and the Ricketts/Conrad case comparison. Study the four elements of R2d § 90(1) and how each maps to both the Arkenstone scenario and the real cases."
    },
    {
      type: "mcq",
      irac: "Clear Promise",
      prompt: "Thorin declared: 'Whoever brings me the Arkenstone shall name their own reward.' Bilbo claims this is a clear and definite promise under R2d § 90(1). Thorin argues it was merely an expression of gratitude — a social courtesy, not a legal commitment. Who has the stronger argument?",
      options: [
        {
          text: "Bilbo — Thorin's statement identified a specific act (returning the stone) and a specific consequence (reward of the finder's choosing), making it a clear and definite promise actionable under R2d § 90(1).",
          correct: true,
          feedback: "Correct. A promise must be clear and definite from a reasonable person's perspective to trigger estoppel. Thorin's vow specifies the triggering condition ('brings me the Arkenstone') and the commitment ('shall name their own reward'). Compare Ricketts v. Scothorn: the grandfather's note specified both the amount ($2,000) and the purpose ('I don't want you to work'). Thorin's vow, made publicly before the Company, is at least as specific. Vague social pleasantries ('I'll take care of you someday') would fail this element — but Thorin's language is promissory, not aspirational."
        },
        {
          text: "Thorin — promising 'any reward' is too vague to be enforceable because it has no definite terms or dollar amount.",
          correct: false,
          feedback: "Indefiniteness can defeat a contract claim, but estoppel has a more flexible standard. 'Name your own reward' is actually quite specific — it delegates the selection to the promisee. The key question under R2d § 90 is whether the promise was clear enough to reasonably induce reliance, not whether every term was fixed. In Conrad v. Fields, the promise to 'pay for law school' lacked a specific dollar figure but was still enforceable because the commitment was definite enough to rely upon."
        },
        {
          text: "Thorin — statements made in the heat of a quest are not legally binding because there is no intent to create legal relations.",
          correct: false,
          feedback: "While context matters, the 'intent to create legal relations' doctrine is more prominent in British than American contract law. Under R2d § 90, the question is whether the promisor should reasonably expect the promise to induce action — not whether the promisor subjectively intended legal consequences. Thorin made the vow specifically to motivate the Company to find the stone. That is exactly the kind of action-inducing promise § 90 was designed to enforce."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Reasonable Reliance & Detriment",
      prompt: "Bilbo surrendered the Arkenstone — the most valuable gem in Middle-earth — to Bard and Thranduil, reasoning that Thorin's promised reward made the sacrifice worthwhile. Thorin argues Bilbo's reliance was unreasonable because no sensible hobbit would give away a priceless gem based on words alone. Under R2d § 90(1), was Bilbo's reliance reasonable?",
      options: [
        {
          text: "Yes — the promisor's own expectations control: Thorin made the vow specifically to induce the Company to recover the stone, so he should reasonably have expected someone to act on it.",
          correct: true,
          feedback: "Correct. R2d § 90(1) asks whether 'the promisor should reasonably expect to induce action or forbearance.' The analysis focuses on the PROMISOR'S reasonable expectations, not the promisee's state of mind alone. Thorin designed the vow to motivate action — he cannot later claim that acting on it was unreasonable. In Conrad v. Fields, the defendant similarly argued that quitting a $45K job was unreasonable reliance on a friend's promise. The court disagreed: the promise was made to induce exactly that change in position. Detriment is clear — Bilbo gave up an immensely valuable gem and received nothing in return. He is worse off than if the promise had never been made."
        },
        {
          text: "No — reliance on an oral promise is never reasonable when the stakes are this high; Bilbo should have gotten it in writing.",
          correct: false,
          feedback: "There is no general rule requiring written promises for estoppel to apply. Ricketts v. Scothorn happened to involve a written note, but the court's holding rested on reliance, not the writing. In Conrad v. Fields, the tuition promise was oral, yet the court enforced it. The Statute of Frauds may require writing for certain categories of contracts, but promissory estoppel can operate as an exception even to that requirement (R2d § 139)."
        },
        {
          text: "No — Bilbo's act of giving the stone to Thorin's enemies was not the kind of reliance Thorin's promise contemplated.",
          correct: false,
          feedback: "This is the strongest counterargument, but it likely fails. Thorin promised a reward for finding and delivering the Arkenstone. Bilbo found it and attempted to use it for the Company's benefit (averting war). While Thorin may not have anticipated this specific use, R2d § 90 asks whether the promisor should reasonably expect the promise to induce action — and Bilbo's surrender of the stone was a direct consequence of his reliance on the reward promise. The foreseeability inquiry focuses on the general category of action (giving up something valuable), not the specific form."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Element Matching",
      prompt: "Match each fact from the Arkenstone scenario to the promissory estoppel element it satisfies. Drag each fact to the correct element bucket:",
      tokens: [
        { id: "t1", label: "'Whoever brings me the Arkenstone shall name their own reward'" },
        { id: "t2", label: "Bilbo surrendered the stone to Bard and Thranduil" },
        { id: "t3", label: "Bilbo lost possession of the most valuable gem in Middle-earth" },
        { id: "t4", label: "Thorin made the vow to motivate the Company to search" },
        { id: "t5", label: "Leaving Bilbo with nothing rewards Thorin's broken promise" }
      ],
      buckets: [
        { id: "promise", label: "1. Clear Promise" },
        { id: "reliance", label: "2. Reasonable Reliance" },
        { id: "detriment", label: "3. Detriment" },
        { id: "injustice", label: "4. Injustice" }
      ],
      requiredAssignments: {
        "t1": "promise",
        "t2": "reliance",
        "t3": "detriment",
        "t4": "reliance",
        "t5": "injustice"
      },
      success: "Correct. Each element maps to specific facts: (1) Thorin's vow is the clear and definite promise — it identifies the act and the reward, like the promissory note in Ricketts v. Scothorn. (2) Bilbo's surrender of the stone and Thorin's intent to motivate action establish reasonable reliance — the promisor expected to induce this very kind of action (R2d § 90(1)). (3) Bilbo's loss of the Arkenstone is the detriment — he is materially worse off than before the promise, like the lost wages in Conrad v. Fields. (4) Injustice exists because Thorin benefits from Bilbo's action while leaving Bilbo empty-handed — enforcement is the only remedy.",
      failure: "Review the four elements: (1) Clear promise = the specific words of commitment. (2) Reasonable reliance = the action induced AND the promisor's expectation of inducing it. (3) Detriment = the promisee is worse off than before. (4) Injustice = only enforcement can make things right. Each fact fits one element best."
    },
    {
      type: "mcq",
      irac: "Remedy Limitation",
      prompt: "Assume a court finds all four elements of R2d § 90(1) satisfied. Bilbo claims expectation damages — the reward he would have named (one-fourteenth of the entire treasure hoard). Thorin argues the remedy should be limited. What does R2d § 90(1) say about remedies?",
      options: [
        {
          text: "The remedy may be limited as justice requires — the court could award reliance damages (the value of the Arkenstone Bilbo surrendered) rather than full expectation damages (the reward he would have named).",
          correct: true,
          feedback: "Correct. R2d § 90(1): 'The remedy granted for breach may be limited as justice requires.' Unlike a standard breach of contract, where expectation damages are the default, promissory estoppel gives courts discretion to calibrate the remedy. A court might award Bilbo the value of the Arkenstone he surrendered (reliance measure) rather than the full one-fourteenth share (expectation measure). This flexibility distinguishes estoppel from consideration-based claims. However, some courts DO award full expectation damages under § 90 — as in Conrad v. Fields, where the court awarded full tuition, not just the lost wages from quitting."
        },
        {
          text: "Promissory estoppel always awards full expectation damages — the promisee gets exactly what was promised, just like a regular contract.",
          correct: false,
          feedback: "This conflates estoppel with consideration-based contracts. R2d § 90(1) expressly states that 'the remedy may be limited as justice requires.' Estoppel is a substitute for consideration, not a full equivalent. Courts have discretion to limit the award to reliance damages. That said, some courts (like the Conrad v. Fields court) do award full expectation damages when justice requires it — the point is that courts have flexibility."
        },
        {
          text: "Promissory estoppel provides only nominal damages — it establishes that a promise existed but does not provide real compensation.",
          correct: false,
          feedback: "Promissory estoppel provides real, substantial relief — not just nominal damages. In Ricketts v. Scothorn, the court enforced the full $2,000 promissory note. In Conrad v. Fields, the court awarded complete tuition reimbursement. The 'limited as justice requires' language in R2d § 90(1) means the remedy may be REDUCED from full expectation damages, not that it is merely symbolic."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Complete the promissory estoppel holding for Bilbo's claim:",
      template: "Under R2d § [A], a promise is binding without consideration when four elements are met. First, the promisor made a [B] promise — Thorin's vow identified the act and the reward. Second, the promisor should reasonably have expected to induce [C] — Thorin designed the vow to motivate the Company. Third, the promisee suffered [D] — Bilbo surrendered the Arkenstone and received nothing. Fourth, [E] can be avoided only by enforcement. Unlike consideration-based contracts, the remedy may be limited as justice requires — courts may award [F] damages rather than full expectation damages.",
      blanks: [
        { key: "A", options: ["90", "71", "45"], answer: "90" },
        { key: "B", options: ["clear and definite", "vague and aspirational", "mutual and bilateral"], answer: "clear and definite" },
        { key: "C", options: ["action or forbearance", "bilateral performance", "written acceptance"], answer: "action or forbearance" },
        { key: "D", options: ["detriment", "enrichment", "consideration"], answer: "detriment" },
        { key: "E", options: ["injustice", "unjust enrichment", "impossibility"], answer: "injustice" },
        { key: "F", options: ["reliance", "punitive", "nominal"], answer: "reliance" }
      ],
      success: "Chapter 8 complete. Promissory estoppel is the safety net of contract law — when consideration fails, R2d § 90 asks whether a clear promise induced reasonable reliance to the promisee's detriment, and whether only enforcement can prevent injustice. Thorin's broken vow mirrors the broken promises in Ricketts v. Scothorn and Conrad v. Fields: specific commitments that induced real changes in position. The doctrine does not require a bargained-for exchange — only a promise that should not, in justice, be broken. Next: Chapter 9, the Battle of Five Armies, where we explore the limits of contractual obligation.",
      failure: "Review: R2d § 90 requires (1) clear promise, (2) reasonable expectation of inducing action or forbearance, (3) detriment, (4) injustice avoidable only by enforcement. The remedy may be limited to reliance damages as justice requires."
    }
  ]
};
