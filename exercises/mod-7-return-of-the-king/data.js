/**
 * Module 7: The Return of the King — Remedies & Third Parties (Ch 24–28)
 *
 * Hero's Journey: Return with the Elixir
 * Story: Mount Doom to the Grey Havens — making Middle-earth whole.
 * Doctrine: Expectation damages, defective performance, limits, alternatives, TPBs.
 */
var EXERCISE = {
  slug: "mod-7-return-of-the-king",
  title: "The Return of the King",
  kicker: "Module 7 • Remedies & Third Parties",
  subtitle: "Mount Doom to the Grey Havens",
  chapterNum: 24,
  law: "R2d §§ 302, 347–357; Hadley v. Baxendale",
  narrative: "The Ring is destroyed. The war is won. But the story is not over — now comes the reckoning. What was lost at Mount Doom? What does it cost to repair a kingdom? What limits apply to recovery? When is money not enough? And who benefits from a story they were never part of? Five scenes of remedy and resolution.",
  image: "../../assets/images/K-mount-doom.png",
  prevChapter: { title: "The War of the Ring", url: "../mod-6-war-of-the-ring/" },
  nextChapter: null,
  tome: [
    "R2d § 347: Damages for breach put the injured party in the position they would have been in had the contract been performed (expectation interest).",
    "Hadley v. Baxendale: Damages limited to those (a) arising naturally from breach, or (b) reasonably in the contemplation of both parties at contracting.",
    "R2d § 348: Damages measured by cost of repair when proportionate; diminished value when cost of repair is grossly disproportionate.",
    "R2d § 350: Injured party must mitigate — use reasonable efforts to avoid loss.",
    "R2d § 357: Specific performance available when money damages are inadequate to compensate.",
    "R2d § 302: A beneficiary is 'intended' if recognition of enforceable rights is appropriate to effectuate the parties' intent.",
    "Peevyhouse: When cost of repair is grossly disproportionate to loss in value, measure of damages is diminished value."
  ],
  artifacts: [
    {
      id: "mount-doom-stakes",
      name: "The Stakes at Mount Doom",
      text: "If the Ring had NOT been destroyed, the expectation interest is calculable: the Shire would burn (lost value of homeland), Rivendell would fall (lost cultural heritage), Gondor would be conquered (lost sovereignty). The gap between 'Ring destroyed' (contract performed) and 'Ring not destroyed' (contract breached) is the measure of expectation damages — the benefit of the bargain that the Free Peoples expected to receive."
    },
    {
      id: "coronation-damage",
      name: "Minas Tirith Damage Assessment",
      text: "After the siege, the master builder presents Aragorn with two estimates for repairing the White City. Full restoration to pre-war condition: 10,000 gold pieces (cost of repair). Functional repair leaving cosmetic damage but structurally sound: 3,000 gold pieces (diminished value from the diminished condition). The White Tree has been replanted but is small. Some towers are cracked but standing. The question: which measure of damages applies?"
    },
    {
      id: "shire-damage",
      name: "The Scouring of the Shire — Three Limits",
      text: "The four hobbits survey the damage Sharkey left behind. Three categories emerge: (1) Foreseeable damage — Saruman's malice was known; the cut trees and polluted water were natural consequences. (2) Speculative damage — would the Party Tree have grown taller? Would the Shire's population have increased? These damages are uncertain. (3) Mitigable damage — Sam has Galadriel's gift (silver dust and the seed of a mallorn tree). He can replant. His duty to mitigate means he must try, and his failure to do so would reduce recovery."
    },
    {
      id: "red-book-beneficiaries",
      name: "The Red Book of Westmarch",
      text: "Sam writes in the Red Book — the book Bilbo started, Frodo continued, and Sam completes. Through the window, Sam's children play in the restored Shire. They were not at the Council of Elrond. They did not sign any contract. They did not participate in the quest. But the entire quest — every promise, every sacrifice, every performance — was for their benefit. The question: are they intended beneficiaries with enforceable rights, or merely incidental beneficiaries who happened to benefit?"
    }
  ],
  steps: [
    {
      type: "info",
      irac: "The Final Question",
      prompt: "The contract was formed. The terms were set. Performance was rendered — or it wasn't. Now comes the final question of contract law: what remedy makes it right? The default answer is expectation damages — money that puts you where you would have been. But three limits constrain recovery: foreseeability, certainty, and mitigation. When money fails, equity offers alternatives: specific performance, injunctions, rescission. And sometimes, the people who benefit from a contract were never parties to it at all. This module brings the story full circle."
    },
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all four artifacts. Each presents a different remedies question from the conclusion of the quest. Study the stakes at Mount Doom, the repair estimates for Minas Tirith, the Shire's damage categories, and the Red Book's question about beneficiaries."
    },
    {
      type: "mcq",
      irac: "Ch 24: Expectation Damages",
      prompt: "The quest to destroy the Ring was, in contract terms, a service agreement. If the quest had failed (breach), what would expectation damages look like under R2d § 347?",
      options: [
        {
          text: "The difference between the world with the Ring destroyed (contract performed) and the world with Sauron victorious (contract breached) — putting the Free Peoples in the position they would have been in had the contract been performed.",
          correct: true,
          feedback: "Correct. R2d § 347 awards damages that put the injured party 'in the position in which he would have been had the contract been performed.' The expectation interest is the benefit of the bargain — freedom from Sauron. Compare Hadley v. Baxendale: the miller expected his mill to run; the Free Peoples expected their lands to survive. The measure is the gap between the promised world and the breached world."
        },
        {
          text: "The cost of hiring a replacement Ring-bearer to try again.",
          correct: false,
          feedback: "This is a cover/substitute performance measure, which is one component of damages but not the full expectation interest. And in this case, there is no substitute — the Ring is unique and the quest cannot be replicated. That uniqueness is why equitable remedies (specific performance) might be more appropriate than money damages."
        },
        {
          text: "Restitution of whatever the Fellowship members contributed to the quest.",
          correct: false,
          feedback: "Restitution (R2d § 376) returns the value conferred, not the value expected. The expectation interest looks forward — what would the world look like if the contract had been performed? Restitution looks backward — what did the parties put in? Expectation damages are usually larger."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 25: Cost of Repair vs. Diminished Value",
      prompt: "The master builder offers Aragorn two estimates: full restoration (10,000 gold) or functional repair (3,000 gold). Under Peevyhouse and R2d § 348, which measure applies?",
      options: [
        {
          text: "It depends on proportionality — if full restoration is grossly disproportionate to the increase in value it would create, the measure is diminished value (the lesser amount).",
          correct: true,
          feedback: "Correct. R2d § 348 and Peevyhouse establish that when cost of repair is 'grossly and unfairly out of proportion to the good to be attained,' diminished value is the measure. But Jacob & Youngs notes the owner is entitled to completion cost unless disproportionate. Here, the White City is the seat of the kingdom — full restoration may be proportionate. The analysis turns on whether the difference in value justifies the difference in cost."
        },
        {
          text: "Always cost of repair — the kingdom deserves full restoration regardless of cost.",
          correct: false,
          feedback: "Courts do not always award cost of repair. Peevyhouse specifically held that when repair cost ($29,000) vastly exceeds the value increase it would create, the smaller diminished-value measure applies. The proportionality test prevents crushing damages for minimal benefit."
        },
        {
          text: "Always diminished value — courts prefer the cheaper option.",
          correct: false,
          feedback: "Courts don't default to the cheaper option. They apply a proportionality test. When the breach involves something the owner specifically contracted for (like restoring a family home or a kingdom's capital), cost of repair may be awarded even when it exceeds diminished value — as long as it's not grossly disproportionate."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Ch 26: Three Limits on Damages",
      prompt: "The Scouring of the Shire created three types of damage. Drag each to the correct damages limitation:",
      tokens: [
        { id: "t1", label: "Cut trees and polluted water — Saruman's known malice" },
        { id: "t2", label: "Would the Party Tree have grown taller? Population growth?" },
        { id: "t3", label: "Sam has Galadriel's gift — he can replant and restore" }
      ],
      buckets: [
        { id: "foresee", label: "Foreseeability (Hadley)" },
        { id: "certain", label: "Certainty (R2d § 352)" },
        { id: "mitigate", label: "Mitigation (R2d § 350)" }
      ],
      requiredAssignments: {
        "t1": "foresee",
        "t2": "certain",
        "t3": "mitigate"
      },
      success: "Correct. The three dams of damages: (1) Foreseeability (Hadley v. Baxendale) — damages must be foreseeable at the time of contracting. Saruman's malice was known, so environmental damage was foreseeable. (2) Certainty (R2d § 352) — speculative damages are excluded. Future growth of the Party Tree is uncertain. (3) Mitigation (R2d § 350) — the injured party must use reasonable efforts to minimize loss. Sam's gift from Galadriel means he has the means to mitigate, and failure to use it would reduce recovery.",
      failure: "Review the three limitations: Foreseeability limits recovery to what was reasonably contemplated (Hadley). Certainty requires damages be provable, not speculative. Mitigation requires reasonable efforts to avoid loss."
    },
    {
      type: "mcq",
      irac: "Ch 27: Alternative Remedies",
      prompt: "At the Grey Havens, Frodo boards the ship to the Undying Lands. No amount of gold can undo the Ring's damage to him. Under R2d § 357, what remedy applies when money is inadequate?",
      options: [
        {
          text: "Specific performance — when the subject matter is unique and money cannot compensate, equity compels the actual promised performance or its equivalent.",
          correct: true,
          feedback: "Correct. R2d § 357: specific performance is available when 'damages would be inadequate to protect the expectation interest.' Frodo's passage to the Undying Lands is unique — there is no substitute and no amount of money can replicate it. This is the quintessential case for equitable relief: rescission (undoing the Ring's harm), restitution (returning what was taken), and specific performance (the actual journey West)."
        },
        {
          text: "Punitive damages — Sauron should be punished for what the Ring did to Frodo.",
          correct: false,
          feedback: "Contract law generally does not award punitive damages. R2d § 355: 'Punitive damages are not recoverable for a breach of contract unless the conduct constituting the breach is also a tort for which punitive damages are recoverable.' The remedy is compensatory or equitable, not punitive."
        },
        {
          text: "Nominal damages — since Frodo cannot prove monetary loss, he gets only a token award.",
          correct: false,
          feedback: "Nominal damages apply when there is a technical breach but no provable loss. Frodo's loss is very real — it's just not measurable in money. That's exactly when equity steps in with specific performance, rescission, or restitution instead of monetary substitutes."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 28: Third-Party Beneficiaries",
      prompt: "Sam's children play in the restored Shire. They were never at the Council of Elrond and signed nothing. Under R2d § 302, are they intended or incidental beneficiaries of the quest?",
      options: [
        {
          text: "Intended beneficiaries — the entire quest was undertaken for the benefit of future generations, and the contracting parties (the Fellowship) intended this benefit.",
          correct: true,
          feedback: "Correct. R2d § 302(1): a beneficiary is 'intended' if 'recognition of a right to performance in the beneficiary is appropriate to effectuate the intention of the parties.' The Council of Elrond's purpose was explicitly to save Middle-earth for future generations. Sam's children are the embodiment of that purpose — the people who would inherit the world the Fellowship fought to protect. Compare Lawrence v. Fox: the third party's benefit was the whole point of the contract."
        },
        {
          text: "Incidental beneficiaries — they happened to benefit but the quest was about destroying the Ring, not about them specifically.",
          correct: false,
          feedback: "R2d § 302(2) defines incidental beneficiaries as those who benefit but were not the intended recipients. Here, the quest's entire PURPOSE was to protect the future of Middle-earth — which means Sam's children, and all future inhabitants. They are not accidental beneficiaries; they are the reason the contract existed."
        },
        {
          text: "They have no standing because they weren't alive when the contract was formed.",
          correct: false,
          feedback: "Third-party beneficiary doctrine does not require the beneficiary to exist at the time of contracting. A parent can contract for the benefit of an unborn child. The Fellowship contracted for the benefit of all future generations — their not-yet-existence does not defeat their intended-beneficiary status."
        }
      ]
    },
    {
      type: "scales",
      irac: "Remedy Selection",
      prompt: "Frodo seeks a remedy for the Ring's damage. Check each factor that supports awarding specific performance (equitable relief) rather than money damages:",
      factors: [
        { id: "f1", label: "The harm is unique — no amount of money can replicate undoing the Ring's corruption" },
        { id: "f2", label: "Money damages are inadequate — Frodo's suffering cannot be measured in gold" },
        { id: "f3", label: "The subject matter is irreplaceable — passage to the Undying Lands has no substitute" },
        { id: "f4", label: "Equity historically intervenes when legal remedies fail — courts of Chancery exist for this" }
      ],
      required: ["f1", "f2", "f3", "f4"],
      labelLeft: "Money Damages",
      labelRight: "Specific Performance",
      success: "All factors point to equitable relief. R2d § 357 authorizes specific performance when 'damages would be inadequate to protect the expectation interest.' Frodo's case satisfies every criterion: the harm is unique (the Ring's corruption is sui generis), money is inadequate (no sum compensates for a shattered spirit), the remedy is irreplaceable (the Undying Lands cannot be purchased), and equity's historical purpose is precisely this — to provide justice when common law falls short. This is why courts of equity were created: for the cases money cannot reach.",
      failure: "All four factors apply. The key question is always: can money make the injured party whole? When the answer is no — because the harm is unique, the subject irreplaceable, and the suffering immeasurable — equity intervenes with specific performance."
    },
    {
      type: "madlibs",
      irac: "Final Verdict",
      prompt: "Complete the remedies synthesis — the final holding of the course:",
      template: "When a contract is breached, the default remedy is [A] — putting the injured party in the position they would have been in had the contract been performed. These damages are limited by [B] (Hadley v. Baxendale), certainty, and the duty to [C]. When money is inadequate, courts award [D] — compelling actual performance or unwinding the transaction. And when a contract benefits someone who was not a party, the [E] beneficiary doctrine determines whether that person has enforceable rights.",
      blanks: [
        { key: "A", options: ["expectation damages", "punitive damages", "nominal damages"], answer: "expectation damages" },
        { key: "B", options: ["foreseeability", "unconscionability", "privity"], answer: "foreseeability" },
        { key: "C", options: ["mitigate", "disclose", "perform"], answer: "mitigate" },
        { key: "D", options: ["equitable remedies", "liquidated damages", "restitution only"], answer: "equitable remedies" },
        { key: "E", options: ["third-party beneficiary", "promissory estoppel", "quasi-contract"], answer: "third-party beneficiary" }
      ],
      success: "The journey is complete. From the first promise in the Shire to the last page of the Red Book, contract law has guided every step: formation, defenses, interpretation, performance, and now remedies. The Hero's Journey ends where it began — at Bag End, where Sam writes the story for those who come after. The law of promises ensures that what was bargained for is delivered, what was relied upon is honored, and what was broken is made whole. There and back again.",
      failure: "Review: Expectation damages (R2d § 347) are the default. Foreseeability (Hadley), certainty, and mitigation limit recovery. Equitable remedies (specific performance, rescission) apply when money is inadequate. Third-party beneficiaries (R2d § 302) can enforce contracts made for their benefit."
    }
  ]
};
