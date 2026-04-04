/**
 * Chapter 7: The Dragon's Hoard — Consideration
 * Focus: R2d §§ 71, 79; bargained-for exchange; benefit/detriment; peppercorn doctrine
 */
var EXERCISE = {
  slug: "dragons-hoard",
  title: "The Dragon's Hoard",
  kicker: "Chapter 7 \u2022 Consideration",
  subtitle: "Lonely Mountain Treasure Chamber",
  chapterNum: 7,
  law: "R2d \u00a7\u00a7 71, 79; Hamer v. Sidway; Pennsy Supply v. American Ash",
  narrative: "Bilbo stands in the vast treasure chamber beneath the Lonely Mountain. Smaug is slain, and the contract with Thorin promises Bilbo one-fourteenth of the hoard. But Thorin now questions the deal: Was Bilbo\u2019s service really worth a fortune in gold? Does the law care whether consideration is \u2018adequate\u2019? Consideration is the glue that makes enforceable promises meaningful and ensures mutual benefit. This chapter explores what counts as consideration \u2014 and what doesn\u2019t.",
  image: "../../assets/images/K-lonely-mountain-hoard.png",
  prevChapter: { title: "Mirkwood Merchants", url: "../mirkwood-merchants/" },
  nextChapter: { title: "The Arkenstone", url: "../arkenstone-betrayal/" },
  tome: [
    "R2d \u00a7 71(1): \u201cTo constitute consideration, a performance or a return promise must be bargained for.\u201d",
    "R2d \u00a7 71(2): \u201cA performance or return promise is bargained for if it is sought by the promisor in exchange for his promise and is given by the promisee in exchange for that promise.\u201d",
    "R2d \u00a7 71(3): \u201cThe performance may be an act other than a promise, or a forbearance, or the creation, modification, or destruction of a legal relation.\u201d",
    "R2d \u00a7 79: \u201cIf the requirement of consideration is met, there is no additional requirement of equivalence in the values exchanged.\u201d (Peppercorn doctrine: courts do not weigh adequacy.)",
    "Benefit/detriment test (historical): Consideration exists if the promisee suffers a legal detriment OR the promisor receives a legal benefit.",
    "Modern bargained-for exchange test (Holmes formula): The promise must induce the detriment AND the detriment must induce the promise \u2014 mutual inducement is required.",
    "Gratuitous promises are not enforceable. A conditional gift is not consideration unless the condition itself benefits the promisor."
  ],
  artifacts: [
    {
      id: "bilbo-contract",
      name: "Bilbo\u2019s Burglar Contract",
      text: "THORIN OAKENSHIELD, leader of the Company of Dwarves, promises to pay BILBO BAGGINS one-fourteenth (1/14) of total profits from the quest to reclaim Erebor. In exchange, Bilbo shall serve as the Company\u2019s \u2018expert treasure-hunter\u2019 (burglar), bearing the risks of the journey including but not limited to: dragon fire, goblin ambush, giant spiders, and an extended absence from the Shire.\n\nAnalysis under R2d \u00a7 71: Thorin\u2019s promise (one-fourteenth share) was SOUGHT in exchange for Bilbo\u2019s service. Bilbo\u2019s service (risking life as burglar) was GIVEN in exchange for the promised share. Both elements of \u00a7 71(2) are satisfied: the promise induced the detriment, and the detriment induced the promise.\n\nThorin\u2019s later objection \u2014 that Bilbo\u2019s contribution was not \u2018worth\u2019 one-fourteenth \u2014 fails under R2d \u00a7 79. Courts do not examine the adequacy of consideration. A peppercorn would suffice. Bilbo risked his life; that is more than enough."
    },
    {
      id: "hamer-pennsy-comparison",
      name: "Case Comparison: Hamer v. Sidway & Pennsy Supply",
      text: "HAMER v. SIDWAY, 124 N.Y. 538 (1891)\nFacts: An uncle promised his nephew $5,000 if the nephew refrained from drinking, smoking, swearing, and gambling until age 21. The nephew complied. After the uncle died, the executor refused to pay.\nHolding: Forbearance from a LEGAL RIGHT is valid consideration regardless of whether the promisor benefited. The nephew had a legal right to drink and smoke; giving up that right was a detriment sufficient to constitute consideration.\nKey principle: Consideration does not require benefit to the promisor \u2014 detriment to the promisee is sufficient.\n\nPENNSY SUPPLY v. AMERICAN ASH RECYCLING, 895 A.2d 595 (Pa. Super. 2006)\nFacts: American Ash offered \u2018free\u2019 AggRite (recyciteite aggregate made from coal ash) to Pennsy Supply for use in a paving project. The material was actually hazardous waste. Pennsy Supply argued the transaction lacked consideration because the material was free.\nHolding: Consideration existed because American Ash AVOIDED the cost of disposing of hazardous waste. By taking the material, Pennsy Supply conferred a benefit on American Ash (disposal cost savings) and suffered a detriment (accepting hazardous material). The \u2018free\u2019 label did not defeat consideration.\nKey principle: Even a transaction labeled \u2018free\u2019 can involve consideration when the promisor receives a hidden benefit.\n\nCOMPARISON: Bilbo\u2019s contract mirrors both cases. Like the nephew in Hamer, Bilbo suffered real detriment (risking his life, leaving his comfortable home). Like the paving company in Pennsy Supply, Bilbo conferred a benefit on Thorin (the Company needed a burglar to face the dragon). Consideration flows in both directions."
    },
    {
      id: "gift-vs-bargain",
      name: "Gratuitous Promises vs. Bargained-For Exchange",
      text: "SCENARIO A \u2014 GRATUITOUS PROMISE (No Consideration):\nGandalf says to Bilbo: \u2018I shall give you a mithril coat when we reach Erebor.\u2019 Bilbo does nothing in return. This is a gift promise. Bilbo gave nothing in exchange, and Gandalf sought nothing from Bilbo. Under R2d \u00a7 71, no bargained-for exchange exists.\n\nSCENARIO B \u2014 CONDITIONAL GIFT (Still No Consideration):\nGandalf says: \u2018If you walk to Rivendell, I shall give you a mithril coat.\u2019 Walking to Rivendell is merely the means of collecting the gift \u2014 it does not benefit Gandalf. The condition is not \u2018bargained for\u2019 because Gandalf does not seek the walk as the price of his promise. Under the Holmes formula, the condition must INDUCE the promise. Here, Gandalf\u2019s generosity, not Bilbo\u2019s walk, is the motive.\n\nSCENARIO C \u2014 BARGAINED-FOR EXCHANGE (Valid Consideration):\nThorin says: \u2018If you serve as our burglar, I shall give you one-fourteenth of the treasure.\u2019 Bilbo\u2019s service is sought by Thorin as the PRICE of the promise. The service induced the promise and the promise induced the service. This is a bargained-for exchange under R2d \u00a7 71(2)."
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all three artifacts: Bilbo\u2019s Burglar Contract, the Hamer/Pennsy case comparison, and the Gratuitous Promises guide. Study how consideration doctrine distinguishes enforceable bargains from empty promises."
    },
    {
      type: "mcq",
      irac: "Bargained-For Exchange",
      prompt: "Thorin promised Bilbo one-fourteenth of the treasure in exchange for serving as burglar. Thorin now argues the deal lacks consideration because Bilbo\u2019s contribution was not \u2018worth\u2019 a fourteenth of the hoard. How should a court rule?",
      options: [
        {
          text: "The court should enforce the contract \u2014 R2d \u00a7 79 provides that courts do not examine the adequacy of consideration, only its existence.",
          correct: true,
          feedback: "Correct. R2d \u00a7 79 (the peppercorn doctrine): \u2018If the requirement of consideration is met, there is no additional requirement of equivalence in the values exchanged.\u2019 Bilbo\u2019s service as burglar is a performance bargained for under \u00a7 71(2) \u2014 Thorin sought it in exchange for his promise, and Bilbo gave it in exchange for the promised share. Whether the service was \u2018worth\u2019 one-fourteenth is irrelevant. A peppercorn would suffice."
        },
        {
          text: "The court should reduce Bilbo\u2019s share to reflect the fair market value of his services as a burglar.",
          correct: false,
          feedback: "Courts do not adjust consideration to reflect market value. R2d \u00a7 79 expressly rejects any requirement of equivalence. The doctrine of consideration asks only whether something of legal value was bargained for \u2014 not whether the exchange was a good deal. Thorin agreed to the terms; the court will not rewrite the bargain."
        },
        {
          text: "The contract is void because a hobbit\u2019s burglar services are not the type of \u2018performance\u2019 recognized as consideration.",
          correct: false,
          feedback: "R2d \u00a7 71(3) defines performance broadly: \u2018an act other than a promise, or a forbearance, or the creation, modification, or destruction of a legal relation.\u2019 Bilbo\u2019s act of serving as burglar \u2014 risking his life, scouting the dragon\u2019s lair \u2014 is squarely an \u2018act\u2019 that constitutes valid performance. The nature of the service does not diminish its legal sufficiency."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Forbearance as Consideration",
      prompt: "In Hamer v. Sidway, the nephew refrained from drinking, smoking, and gambling in exchange for $5,000. The executor argued there was no consideration because the uncle received no benefit. Why did the court disagree?",
      options: [
        {
          text: "Forbearance from a legal right constitutes valid consideration \u2014 the nephew\u2019s detriment (giving up rights he could lawfully exercise) was sufficient regardless of benefit to the uncle.",
          correct: true,
          feedback: "Correct. Hamer v. Sidway, 124 N.Y. 538 (1891): The court held that \u2018consideration means not so much that one party is profiting as that the other abandons some legal right.\u2019 The nephew had a legal right to drink and gamble. His forbearance \u2014 giving up those rights \u2014 was a legal detriment sufficient to constitute consideration under R2d \u00a7 71(3), which expressly includes forbearance as a type of performance."
        },
        {
          text: "The uncle did benefit because he was relieved of worry about his nephew\u2019s habits, so the benefit/detriment test was satisfied on both sides.",
          correct: false,
          feedback: "While the uncle may have been pleased, the court did NOT rely on subjective benefit to the promisor. The holding rests on the promisee\u2019s DETRIMENT: \u2018It is sufficient that [the promisee] restricted his lawful freedom of action within certain prescribed limits.\u2019 The beauty of Hamer is that it establishes detriment alone \u2014 without any corresponding promisor benefit \u2014 as sufficient consideration."
        },
        {
          text: "The promise was enforceable as a conditional gift, not as a contract supported by consideration.",
          correct: false,
          feedback: "A conditional gift exists when the condition is merely the means of collecting the gift and does not benefit the promisor. Here, the uncle SOUGHT the nephew\u2019s forbearance as the price of his promise \u2014 it was a bargained-for exchange, not a gift. Under the Holmes formula, the promise induced the forbearance AND the forbearance induced the promise. This distinguishes Hamer from a mere conditional gift."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Classifying Consideration",
      prompt: "Classify each scenario: Does it involve valid consideration or not? Drag each item to the correct bucket.",
      tokens: [
        { id: "t1", label: "Bilbo risks his life as burglar in exchange for 1/14 of treasure" },
        { id: "t2", label: "Gandalf promises Bilbo a mithril coat as a birthday present" },
        { id: "t3", label: "Nephew refrains from drinking and gambling for $5,000 (Hamer)" },
        { id: "t4", label: "Gandalf says: \u2018Walk to Rivendell and I\u2019ll give you a mithril coat\u2019" },
        { id: "t5", label: "Pennsy takes free hazardous waste, saving American Ash disposal costs" },
        { id: "t6", label: "Thorin says: \u2018I will give you gold because you are my friend\u2019" }
      ],
      buckets: [
        { id: "valid", label: "Valid Consideration (Bargained-For Exchange)" },
        { id: "gift", label: "No Consideration (Gift / Gratuitous Promise)" }
      ],
      requiredAssignments: {
        "t1": "valid",
        "t2": "gift",
        "t3": "valid",
        "t4": "gift",
        "t5": "valid",
        "t6": "gift"
      },
      success: "Correct. Valid consideration requires a bargained-for exchange (R2d \u00a7 71). Bilbo\u2019s service, the nephew\u2019s forbearance in Hamer, and the waste disposal in Pennsy Supply all satisfy the test: the promise induced the performance AND the performance induced the promise. Gandalf\u2019s birthday gift and friendship gift from Thorin are gratuitous \u2014 no exchange was sought. The walk-to-Rivendell scenario is a conditional gift: the condition does not benefit the promisor and is merely the means of collecting the gift.",
      failure: "Ask: Was the performance SOUGHT by the promisor as the price of the promise? Did the promise INDUCE the performance? If both answers are yes, it is a bargained-for exchange. If the promisor sought nothing in return, it is a gift. If the condition only helps the promisee collect, it is a conditional gift."
    },
    {
      type: "mcq",
      irac: "Hidden Consideration (Pennsy Supply)",
      prompt: "In Pennsy Supply v. American Ash Recycling, American Ash gave away AggRite aggregate for \u2018free.\u2019 The material was actually hazardous waste. Why did the court find consideration existed despite the zero price?",
      options: [
        {
          text: "American Ash avoided hazardous waste disposal costs by having Pennsy take the material \u2014 this hidden benefit to the promisor constituted consideration.",
          correct: true,
          feedback: "Correct. Pennsy Supply v. American Ash, 895 A.2d 595 (Pa. Super. 2006): The court looked beyond the \u2018free\u2019 label to find real consideration. American Ash saved significant disposal costs (benefit to promisor), and Pennsy accepted hazardous material (detriment to promisee). Under R2d \u00a7 71(2), this was a bargained-for exchange: American Ash sought Pennsy\u2019s acceptance of the waste in exchange for providing it at no charge. The economic reality, not the label, controls."
        },
        {
          text: "The court applied the peppercorn doctrine: even a nominal price of $0 satisfies consideration.",
          correct: false,
          feedback: "The peppercorn doctrine (R2d \u00a7 79) says courts won\u2019t examine adequacy \u2014 but there must still BE consideration. A price of $0 is not a peppercorn; it is no price at all. The court in Pennsy Supply did not treat zero as nominal consideration. Instead, it found REAL consideration: American Ash received a tangible benefit (avoided disposal costs) and Pennsy suffered a tangible detriment (accepted hazardous material)."
        },
        {
          text: "The contract was enforceable under promissory estoppel, not consideration, because Pennsy reasonably relied on the promise of free material.",
          correct: false,
          feedback: "The court found actual consideration \u2014 it did not need to resort to promissory estoppel (R2d \u00a7 90), which is a substitute for consideration when none exists. The holding specifically identified a bargained-for exchange: waste removal saved American Ash money, and Pennsy\u2019s acceptance of hazardous material was a real detriment. When consideration exists, estoppel is unnecessary."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Complete the consideration holding:",
      template: "Consideration requires a [A] exchange (R2d \u00a7 71). The performance must be [B] by the promisor in exchange for the promise and [C] by the promisee in exchange for the promise. Performance includes an act, a [D], or creation of a legal relation (\u00a7 71(3)). Courts do not examine the [E] of consideration (\u00a7 79) \u2014 a peppercorn will do. But a [F] promise, where nothing is sought in return, is not enforceable.",
      blanks: [
        { key: "A", options: ["bargained-for", "equivalent", "written"], answer: "bargained-for" },
        { key: "B", options: ["sought", "received", "documented"], answer: "sought" },
        { key: "C", options: ["given", "promised", "witnessed"], answer: "given" },
        { key: "D", options: ["forbearance", "signature", "recital"], answer: "forbearance" },
        { key: "E", options: ["adequacy", "legality", "formality"], answer: "adequacy" },
        { key: "F", options: ["gratuitous", "conditional", "bilateral"], answer: "gratuitous" }
      ],
      success: "Chapter 7 complete. You now understand the doctrine that separates enforceable bargains from empty promises. Bilbo\u2019s contract with Thorin is supported by valid consideration: Bilbo\u2019s service was bargained for, and courts will not second-guess the price. Like the nephew in Hamer who gave up legal rights, and the paving company in Pennsy Supply that accepted hidden costs, Bilbo\u2019s detriment was real. Ahead in Chapter 8: What happens when Bilbo gives away the Arkenstone \u2014 and whether that promise can be enforced without consideration at all.",
      failure: "Review the framework: R2d \u00a7 71 requires a bargained-for exchange. The promisor must SEEK the performance; the promisee must GIVE it. Forbearance counts (\u00a7 71(3)). Adequacy is irrelevant (\u00a7 79). And without a bargain, a promise is merely gratuitous."
    }
  ]
};
