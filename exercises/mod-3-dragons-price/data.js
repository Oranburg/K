/**
 * Module 3: The Dragon's Price — Consideration & Alternatives (Ch 7–9)
 *
 * Hero's Journey: Tests, Allies, Enemies
 * Story: The Lonely Mountain quest — what was bargained for, promised, and owed.
 * Doctrine: Consideration, promissory estoppel, promissory restitution.
 *
 * Three acts across the climax of the Hobbit:
 *  - Ch 7: The treasure chamber — was Bilbo's service adequate consideration?
 *  - Ch 8: The Arkenstone crisis — Thorin's broken promise, detrimental reliance
 *  - Ch 9: The deathbed — moral obligation and material benefit (Webb v. McGowin)
 */
var EXERCISE = {
  slug: "mod-3-dragons-price",
  title: "The Dragon's Price",
  kicker: "Module 3 • Consideration & Alternatives",
  subtitle: "The Lonely Mountain",
  chapterNum: 7,
  law: "R2d §§ 71, 79, 86, 90",
  narrative: "The dragon is gone. The treasure lies before you. But now comes the harder question: who is owed what, and why? Bilbo's contract promised one-fourteenth of the profits. Thorin promised the Arkenstone's finder would be rewarded above all else. And on the battlefield, debts were paid that no contract ever created. Three scenes. Three theories of enforcement.",
  image: "../../assets/images/K-lonely-mountain-hoard.png",
  prevChapter: { title: "The Road Goes Ever On", url: "../mod-2-road-goes-ever-on/" },
  nextChapter: { title: "Shadows Over Middle-earth", url: "../mod-4-shadows-over-middle-earth/" },
  tome: [
    "R2d § 71(1): \"To constitute consideration, a performance or a return promise must be bargained for.\"",
    "R2d § 71(2): \"A performance or return promise is bargained for if it is sought by the promisor in exchange for his promise and is given by the promisee in exchange for that promise.\"",
    "R2d § 79: \"If the requirement of consideration is met, there is no additional requirement of equivalence in the values exchanged.\"",
    "R2d § 90(1): \"A promise which the promisor should reasonably expect to induce action or forbearance... is binding if injustice can be avoided only by enforcement of the promise.\"",
    "R2d § 86(1): \"A promise made in recognition of a benefit previously received by the promisor from the promisee is binding to the extent necessary to prevent injustice.\"",
    "Hamer v. Sidway: Forbearance from a legal right constitutes valid consideration, regardless of whether it benefits the promisor or burdens the promisee.",
    "Webb v. McGowin: A moral obligation is sufficient consideration to support a subsequent promise where the promisor has received a material benefit."
  ],
  artifacts: [
    {
      id: "contract-terms",
      name: "The Burglar Agreement (Compensation Clause)",
      text: "Cash on delivery, up to and not exceeding one fourteenth of total profit (if any). Travelling expenses guaranteed in any event. Bilbo Baggins promises to serve as Burglar and proceed to the Lonely Mountain to recover treasure from the Dragon Smaug."
    },
    {
      id: "arkenstone-promise",
      name: "Thorin's Promise About the Arkenstone",
      text: "Thorin Oakenshield, upon the ramparts of the Lonely Mountain, declared to the Company: 'The Arkenstone of my father, I will give to the one who finds it — and more besides. For that stone is worth more to me than a river of gold. Whoever brings it to me shall name their reward, and I shall pay it.' This promise was made before the Company, witnessed by Balin, Dwalin, and the others."
    },
    {
      id: "bilbo-actions",
      name: "Bilbo's Actions After Finding the Arkenstone",
      text: "Upon finding the Arkenstone in the hoard, Bilbo did not immediately return it to Thorin. Instead, relying on Thorin's promise of reward, Bilbo kept it hidden — intending to use it as a bargaining chip to prevent war between the dwarves, the men of Lake-town, and the elves. He gave the Arkenstone to Bard and Thranduil as a peace offering, expecting Thorin to honor his promise. Instead, Thorin was furious and expelled Bilbo from the Company."
    },
    {
      id: "battlefield-rescue",
      name: "The Battle of Five Armies — Bilbo's Rescue",
      text: "During the Battle of Five Armies, Bilbo — wearing his ring of invisibility — saw Thorin fall, surrounded by enemies. Without being asked, without any contract or promise compelling him, Bilbo fought his way to Thorin and dragged him from the field. Bilbo was struck on the head by a stone and knocked unconscious. Thorin was carried to a tent, mortally wounded. In his final hours, Thorin said to Bilbo: 'I wish to part in friendship from you, and I would take back my words and deeds at the Gate. There is more in you of good than you know. If more of us valued food and cheer and song above hoarded gold, it would be a merrier world. I go now to the halls of waiting. Since I leave now all gold and silver, and go where it is of little worth, I wish to part in friendship. I am sorry I threatened you with such a punishment. I would give you your share, and more — all I have, if I could.'"
    }
  ],
  steps: [
    {
      type: "info",
      irac: "The Three Theories",
      prompt: "Contract law enforces promises through three distinct theories: (1) Consideration — a bargained-for exchange where each party gives something of value; (2) Promissory Estoppel — enforcement based on reasonable, detrimental reliance on a promise; (3) Promissory Restitution — enforcement of a promise made in recognition of a material benefit previously received. The Lonely Mountain quest tests all three."
    },
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all four artifacts to examine the evidence. Read the compensation clause, Thorin's Arkenstone promise, Bilbo's actions, and the battlefield rescue."
    },
    {
      type: "mcq",
      irac: "Ch 7: Consideration — The Bargain",
      prompt: "Under the Burglar Agreement, Bilbo promises to serve as burglar in exchange for one-fourteenth of the profits. Is Bilbo's service valid consideration under R2d § 71?",
      options: [
        {
          text: "Yes — Bilbo's service was sought by Thorin in exchange for the payment promise, and given by Bilbo in exchange for that promise. This is a bargained-for exchange.",
          correct: true,
          feedback: "Correct. R2d § 71(2): 'A performance or return promise is bargained for if it is sought by the promisor in exchange for his promise and is given by the promisee in exchange for that promise.' Thorin sought a burglar; Bilbo provided the service. The exchange is mutual and voluntary."
        },
        {
          text: "No — Bilbo's service was inadequate consideration because a hobbit's burglar skills are worth far less than one-fourteenth of a dragon's hoard.",
          correct: false,
          feedback: "Courts do not inquire into the adequacy of consideration. R2d § 79: 'If the requirement of consideration is met, there is no additional requirement of equivalence in the values exchanged.' A peppercorn can be consideration for a palace. What matters is that the exchange was bargained for, not that it was 'fair.'"
        },
        {
          text: "No — Bilbo was coerced into signing by peer pressure from the dwarves, so his service was involuntary.",
          correct: false,
          feedback: "Peer pressure is not legal duress. Under the objective standard, Bilbo signed the contract and performed. His subjective reluctance is irrelevant. Duress requires a wrongful threat that overcomes the victim's free will — social awkwardness at a dinner party does not qualify."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 7: Adequacy & Forbearance",
      prompt: "In Hamer v. Sidway, an uncle promised $5,000 if his nephew refrained from drinking, smoking, and gambling until age 21. The nephew did so. The executor argued the nephew actually benefited from clean living, so there was no consideration. How did the court rule?",
      options: [
        {
          text: "The nephew's restriction of his legal freedom was valid consideration regardless of whether he personally benefited.",
          correct: true,
          feedback: "Correct. The court held that giving up a legal right — even one the promisor might be better off without — constitutes valid consideration. 'A valuable consideration may consist in some right, interest, profit, or benefit accruing to the one party, or some forbearance, detriment, loss, or responsibility given, suffered, or undertaken by the other.' Courts do not measure subjective benefit."
        },
        {
          text: "There was no consideration because the nephew gained more than he lost by living cleanly.",
          correct: false,
          feedback: "This was the executor's argument, and the court rejected it. The benefit/detriment analysis looks at legal rights, not personal welfare. The nephew had a legal right to drink; he gave it up. That forbearance is consideration regardless of health outcomes."
        },
        {
          text: "The promise was enforceable only because it was in writing, not because of consideration.",
          correct: false,
          feedback: "The writing is relevant to the Statute of Frauds, not to consideration. Consideration requires a bargained-for exchange. The nephew's forbearance from legal conduct in exchange for the uncle's money is the consideration."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 8: Promissory Estoppel — The Arkenstone",
      prompt: "Thorin promised that whoever found the Arkenstone could 'name their reward.' Bilbo found it and, relying on this promise, gave it away as a peace offering instead of returning it directly. Thorin then expelled Bilbo. Does Bilbo have a promissory estoppel claim under R2d § 90?",
      options: [
        {
          text: "Yes — Thorin's promise was clear, Bilbo reasonably relied on it, he suffered detriment (expulsion from the Company), and injustice can be avoided only by enforcement.",
          correct: true,
          feedback: "Correct. All four elements of R2d § 90 are met: (1) Clear promise — Thorin publicly declared a specific reward. (2) Reasonable reliance — Bilbo acted on the promise by keeping the stone and using it strategically. (3) Detriment — Bilbo was expelled and lost his standing. (4) Injustice — Thorin induced reliance and then punished it. Compare Ricketts v. Scothorn: the grandfather's promise induced the granddaughter to quit her job; here, Thorin's promise induced Bilbo to act."
        },
        {
          text: "No — Bilbo should have returned the Arkenstone directly to Thorin instead of giving it to Bard and Thranduil.",
          correct: false,
          feedback: "Bilbo's choice of how to use the Arkenstone doesn't defeat his reliance claim. He relied on the promise that the finder would be rewarded. His reliance was reasonable — Thorin's promise was public and specific. The fact that Bilbo used the stone for peace rather than personal gain actually strengthens his claim."
        },
        {
          text: "No — promissory estoppel only applies to charitable pledges, not to commercial disputes.",
          correct: false,
          feedback: "Promissory estoppel applies broadly. While charitable pledges are one common context, R2d § 90 applies to any promise that induces reasonable, foreseeable, detrimental reliance. Employment (Ricketts, Conrad v. Fields), business dealings (Katz v. Danny Dare), and personal promises all qualify."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Ch 8: Elements of Promissory Estoppel",
      prompt: "Match each element of promissory estoppel (R2d § 90) to the fact from the Arkenstone scenario that satisfies it:",
      tokens: [
        { id: "t1", label: "Thorin publicly declared the finder would be rewarded" },
        { id: "t2", label: "Bilbo kept the stone and used it as a peace offering" },
        { id: "t3", label: "Bilbo was expelled from the Company and lost his share" },
        { id: "t4", label: "Thorin induced reliance then punished it — enforcement is the only fair outcome" }
      ],
      buckets: [
        { id: "promise", label: "1. Clear Promise" },
        { id: "reliance", label: "2. Reasonable Reliance" },
        { id: "detriment", label: "3. Detriment" },
        { id: "justice", label: "4. Injustice" }
      ],
      requiredAssignments: {
        "t1": "promise",
        "t2": "reliance",
        "t3": "detriment",
        "t4": "justice"
      },
      success: "All four elements satisfied. Thorin's public declaration was a clear promise (1). Bilbo's actions were reasonable reliance on that promise (2). His expulsion and loss of share constitute detriment (3). And Thorin's inducement followed by punishment makes enforcement necessary to avoid injustice (4). This mirrors Ricketts v. Scothorn, where the grandfather's promise induced the granddaughter to quit her job.",
      failure: "Review the four elements of R2d § 90: (1) a clear promise, (2) reasonable reliance the promisor should have foreseen, (3) detriment to the promisee, and (4) injustice that can only be avoided by enforcement."
    },
    {
      type: "mcq",
      irac: "Ch 9: Promissory Restitution — The Deathbed",
      prompt: "On the battlefield, Bilbo saved Thorin's life without being asked and without any contract requiring it. Thorin, dying, promised Bilbo his share and more. Under Webb v. McGowin and R2d § 86, is Thorin's deathbed promise enforceable?",
      options: [
        {
          text: "Yes — Bilbo conferred a material benefit (saving Thorin's life), and Thorin's subsequent promise recognized that benefit. Enforcement prevents unjust enrichment.",
          correct: true,
          feedback: "Correct. This is Webb v. McGowin precisely. Webb saved McGowin's life at great personal cost (permanent injury). McGowin promised to pay Webb for the rest of Webb's life. The court held: 'A moral obligation is sufficient consideration to support a subsequent promise to pay where the promisor has received a material benefit.' Life has material, pecuniary value — measurable in insurance, tort damages, and medical practice."
        },
        {
          text: "No — under Mills v. Wyman, moral obligation alone cannot support a promise. Bilbo's rescue was voluntary and unrequested.",
          correct: false,
          feedback: "Mills v. Wyman is distinguishable. In Mills, the father received NO material benefit from the stranger caring for his adult son. Here, Thorin received the ultimate material benefit — his life was saved. Webb v. McGowin specifically distinguished Mills: 'The case at bar is clearly distinguishable from that class of cases where the consideration is a mere moral obligation unconnected with receipt by promisor of benefits of a material or pecuniary nature.'"
        },
        {
          text: "No — past consideration is never valid. The rescue happened before the promise, so it cannot constitute consideration.",
          correct: false,
          feedback: "This states the general rule correctly but misses the exception. R2d § 86 specifically addresses promises for benefits previously received: 'A promise made in recognition of a benefit previously received by the promisor from the promisee is binding to the extent necessary to prevent injustice.' Promissory restitution exists precisely for situations where the benefit precedes the promise."
        }
      ]
    },
    {
      type: "scales",
      irac: "Synthesis: Three Theories Compared",
      prompt: "For each of the three scenarios, check the theory that BEST supports enforcement. The meter shows how strong the case for enforcement is overall.",
      factors: [
        { id: "f1", label: "Burglar Agreement (one-fourteenth share) → Consideration: bargained-for exchange" },
        { id: "f2", label: "Arkenstone promise (name your reward) → Promissory Estoppel: reliance on clear promise" },
        { id: "f3", label: "Battlefield rescue (deathbed promise) → Promissory Restitution: material benefit + subsequent promise" }
      ],
      required: ["f1", "f2", "f3"],
      labelLeft: "Weak Case",
      labelRight: "Strong Case",
      success: "All three checked — and all three theories support enforcement. The Burglar Agreement is a classic bargain contract (consideration). The Arkenstone promise is enforceable through promissory estoppel (reliance). The deathbed promise is enforceable through promissory restitution (material benefit). Together, these three theories cover the full spectrum of contract enforcement: exchange, reliance, and restitution.",
      failure: "All three scenarios have strong enforcement claims. Each represents a different theory: consideration for the bargain, estoppel for the promise, restitution for the rescue. Check all three."
    },
    {
      type: "madlibs",
      irac: "Verdict",
      prompt: "Complete the synthesis holding covering all three theories:",
      template: "The Burglar Agreement is enforceable as a bargain contract supported by [A] — Bilbo's service exchanged for Thorin's payment promise satisfies R2d § 71. The Arkenstone promise is enforceable under [B] — Bilbo reasonably relied on Thorin's public declaration to his detriment, satisfying R2d § 90. The deathbed promise is enforceable under [C] — Bilbo conferred a [D] (saving Thorin's life) and Thorin's subsequent promise recognized that benefit, satisfying R2d § 86. In each case, the law reaches the same result through a different path: promises that induce action or acknowledge value must be [E].",
      blanks: [
        { key: "A", options: ["consideration", "estoppel", "restitution"], answer: "consideration" },
        { key: "B", options: ["promissory estoppel", "consideration", "unjust enrichment"], answer: "promissory estoppel" },
        { key: "C", options: ["promissory restitution", "specific performance", "quasi-contract"], answer: "promissory restitution" },
        { key: "D", options: ["material benefit", "moral obligation", "conditional gift"], answer: "material benefit" },
        { key: "E", options: ["enforced", "forgiven", "reformed"], answer: "enforced" }
      ],
      success: "Judgment complete. Three theories, one principle: promises that create value — through exchange (consideration), reliance (estoppel), or recognition of benefit (restitution) — must be enforced. The dragon's price is paid not just in gold, but in the law's commitment to holding people to their word.",
      failure: "Review: Consideration (R2d § 71) enforces bargains. Promissory estoppel (R2d § 90) enforces promises that induce reliance. Promissory restitution (R2d § 86) enforces promises recognizing material benefits previously received."
    }
  ]
};
