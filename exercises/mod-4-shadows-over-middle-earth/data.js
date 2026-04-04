/**
 * Module 4: Shadows Over Middle-earth — Defenses to Formation (Ch 10–13)
 *
 * Hero's Journey: Crossing the Threshold
 * Story: The corruption of agreements — forged documents, mistaken beliefs,
 *        overborne wills, rash oaths.
 * Doctrine: Statute of Frauds, mistake, improper bargaining, incapacity.
 */
var EXERCISE = {
  slug: "mod-4-shadows-over-middle-earth",
  title: "Shadows Over Middle-earth",
  kicker: "Module 4 • Defenses to Formation",
  subtitle: "From Isengard to Edoras",
  chapterNum: 10,
  law: "R2d §§ 110, 152–154, 175–177; UCC § 2-201",
  narrative: "The Lord of the Rings begins in shadow. Saruman forges documents in Orthanc. The Council of Elrond misunderstands the Ring's nature. Wormtongue corrupts Théoden's will. And Pippin makes an oath he cannot comprehend. Four scenes of contracts gone wrong — each a different defense that can void an agreement.",
  image: "../../assets/images/K-council-of-elrond.png",
  prevChapter: { title: "The Dragon's Price", url: "../mod-3-dragons-price/" },
  nextChapter: { title: "The Words Beneath the Words", url: "../mod-5-words-beneath-words/" },
  tome: [
    "R2d § 110: Certain contracts require a signed writing to be enforceable (MYLEGS: Marriage, Year-long, Land, Executorship, Goods $500+, Suretyship).",
    "R2d § 152: Mutual mistake — contract voidable when both parties are mistaken as to a basic assumption on which the contract was made, with material effect on the exchange.",
    "R2d § 153: Unilateral mistake — voidable when enforcement would be unconscionable or other party had reason to know of the mistake.",
    "R2d § 177: Undue influence — unfair persuasion of a party who is under the domination of the person exercising persuasion or who is justified in assuming that person will not act inconsistently with his welfare.",
    "R2d § 14: An infant's contract is voidable at the infant's election. Upon reaching majority, the infant may disaffirm within a reasonable time.",
    "Casebook: \"The incapacity doctrines share a common purpose of ensuring that contracts are founded on voluntary, informed consent while protecting individuals from exploitation.\""
  ],
  artifacts: [
    {
      id: "saruman-forgery",
      name: "Saruman's Forged Orders",
      text: "Found on Saruman's desk in Orthanc: letters bearing the seal of Rohan, ordering the Rohirrim to stand down. The signatures are expertly copied but not authentic. Alongside them, a genuine document from Théoden with proper seals — the template Saruman used. The forged documents lack one critical element: they were never actually signed by the party to be charged."
    },
    {
      id: "council-ring",
      name: "Council of Elrond — The Ring's Nature",
      text: "At the Council, Boromir sees the Ring as a weapon to save Gondor (golden glow of power). Gandalf sees it as Sauron's trap (dark shadow of corruption). Frodo sees it as an unbearable burden (heavy weight). The same object — fundamentally different understandings. All three beliefs are sincerely held. All three cannot be correct about the Ring's true nature."
    },
    {
      id: "wormtongue-counsel",
      name: "Wormtongue's Counsel to Théoden",
      text: "For years, Gríma Wormtongue served as Théoden's most trusted advisor — a position of confidence and trust. During Théoden's illness, Wormtongue persuaded the king to sign away Rohan's western provinces to Saruman, whispering that the provinces were indefensible and the alliance would bring protection. Théoden, weakened and dependent on Wormtongue, signed without consulting Éowyn, Éomer, or any other advisor. Wormtongue's persuasion was not violent — it was patient, systematic, and exploited the king's vulnerability."
    },
    {
      id: "pippin-palantir",
      name: "Pippin and the Palantír",
      text: "Pippin, a young hobbit of the Shire, crept to the palantír while the camp slept. When he touched it, Sauron's eye appeared and demanded information. Pippin — terrified, fascinated, unable to look away — answered Sauron's questions. He did not understand what he was agreeing to. He did not comprehend that his responses constituted intelligence that could endanger the quest. Gandalf later said: 'He had no idea what he was doing. A hobbit of his age cannot be expected to grasp the consequences of speaking to the Dark Lord.'"
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all four artifacts. Each presents a contract or agreement that is defective in a different way."
    },
    {
      type: "mcq",
      irac: "Ch 10: Statute of Frauds",
      prompt: "Saruman's forged orders purport to command the Rohirrim to stand down. Under the Statute of Frauds (R2d § 110), what is the fundamental problem with these documents?",
      options: [
        {
          text: "They are not signed by the party to be charged — Théoden never actually signed them.",
          correct: true,
          feedback: "Correct. R2d § 131 requires that a memorandum be 'signed by or on behalf of the party to be charged.' A forged signature is no signature at all. The Statute of Frauds exists precisely to prevent enforcement of fabricated agreements — the irony being that the rule requiring writing as proof of reliability is defeated when the writing itself is fraudulent."
        },
        {
          text: "They are oral agreements that should have been in writing.",
          correct: false,
          feedback: "The documents ARE in writing — that's not the problem. The problem is that the signature is forged. The Statute of Frauds requires a genuine signature by the party to be charged, not just any mark on paper."
        },
        {
          text: "Military orders are not contracts and cannot be subject to the Statute of Frauds.",
          correct: false,
          feedback: "While military orders differ from commercial contracts, the doctrinal point remains: agreements that fall within the Statute of Frauds categories require genuine signatures. The forgery issue transcends the type of document."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 11: Mistake — The Council",
      prompt: "At the Council of Elrond, Boromir believes the Ring is a weapon, Gandalf believes it is a trap, and Frodo sees it as a burden. If these three entered a contract about the Ring's disposition, what type of mistake would this represent?",
      options: [
        {
          text: "Mutual mistake — all parties are mistaken about a basic assumption (the Ring's true nature), and this materially affects the exchange.",
          correct: true,
          feedback: "Correct. Under R2d § 152, a contract is voidable when both parties share a mistaken belief about a basic assumption. Here, the Ring's nature is the basic assumption underlying any agreement about what to do with it. Compare Sherwood v. Walker: both parties believed the cow was barren — a mutual mistake going to the substance of the contract, not mere quality."
        },
        {
          text: "Unilateral mistake — only Boromir is wrong about the Ring; Gandalf knows the truth.",
          correct: false,
          feedback: "This would apply under R2d § 153 if only one party were mistaken. But the scenario shows ALL parties hold different beliefs about the Ring's fundamental nature. Even Gandalf's understanding may be incomplete. The mistake is mutual because it goes to the basic assumption — what kind of thing the Ring IS."
        },
        {
          text: "No mistake — the parties simply disagree about strategy, not about facts.",
          correct: false,
          feedback: "This is not a mere disagreement about tactics. The parties hold fundamentally different beliefs about the Ring's nature — weapon vs. trap vs. burden. These are factual beliefs about the object itself (like Sherwood's cow: breeding animal vs. beef), not strategic preferences."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 12: Undue Influence — Wormtongue",
      prompt: "Wormtongue persuaded Théoden to sign away Rohan's western provinces. Under R2d § 177, what makes this undue influence rather than legitimate persuasion?",
      options: [
        {
          text: "Wormtongue exploited a relationship of trust and confidence to unfairly persuade a vulnerable person who was not acting of free will.",
          correct: true,
          feedback: "Correct. R2d § 177 defines undue influence as 'unfair persuasion of a party who is under the domination of the person exercising the persuasion, or who by virtue of the relation between them is justified in assuming that person will not act in a manner inconsistent with his welfare.' Wormtongue was Théoden's trusted advisor — a fiduciary-like position. The king was weakened and dependent. The persuasion was systematic and excluded other counsel."
        },
        {
          text: "Wormtongue used physical threats to force Théoden to sign.",
          correct: false,
          feedback: "That would be duress (R2d § 175), not undue influence. The key difference: duress involves improper threats; undue influence involves unfair persuasion within a trust relationship. Wormtongue never threatened Théoden — he whispered, counseled, and slowly eroded the king's independent judgment."
        },
        {
          text: "The provinces were worth more than the protection Saruman offered, making the deal unconscionable.",
          correct: false,
          feedback: "Unconscionability (R2d § 208) focuses on the terms being unreasonably one-sided. Undue influence focuses on the process — how consent was obtained. The problem here is not the deal's terms but how Wormtongue obtained Théoden's agreement: through exploitation of a trust relationship and systematic undermining of the king's free will."
        }
      ]
    },
    {
      type: "redline",
      irac: "Ch 13: Incapacity — Pippin",
      prompt: "Read Gandalf's statement about Pippin below. Click the phrase that identifies WHY Pippin lacked capacity to form a binding agreement with Sauron:",
      docText: "He had no idea what he was doing. A hobbit of his age cannot be expected to grasp the consequences of speaking to the Dark Lord.",
      target: "grasp the consequences",
      success: "Correct. Under R2d § 14, an infant's contract is voidable because minors lack the maturity to 'grasp the consequences' of their actions. R2d § 15 extends this to mental incapacity: a person who is 'unable to understand in a reasonable manner the nature and consequences of the transaction.' Pippin's youth and inexperience made him unable to understand what he was agreeing to when he communicated with Sauron."
    },
    {
      type: "dragdrop",
      irac: "Synthesis: Match Defense to Scenario",
      prompt: "Each Middle-earth scenario illustrates a different defense to contract formation. Drag each scenario to the correct defense:",
      tokens: [
        { id: "t1", label: "Saruman's forged orders bearing copied signatures" },
        { id: "t2", label: "Council members holding different beliefs about the Ring" },
        { id: "t3", label: "Wormtongue exploiting Théoden's trust and weakness" },
        { id: "t4", label: "Pippin communicating with Sauron without understanding" }
      ],
      buckets: [
        { id: "sof", label: "Statute of Frauds (Ch 10)" },
        { id: "mistake", label: "Mistake (Ch 11)" },
        { id: "influence", label: "Undue Influence (Ch 12)" },
        { id: "incapacity", label: "Incapacity (Ch 13)" }
      ],
      requiredAssignments: {
        "t1": "sof",
        "t2": "mistake",
        "t3": "influence",
        "t4": "incapacity"
      },
      success: "All four matched correctly. Each defense attacks contract formation from a different angle: the Statute of Frauds challenges the evidence of agreement (no genuine signature). Mistake challenges the parties' shared understanding (basic assumption was wrong). Undue influence challenges the quality of consent (will was overborne). Incapacity challenges the party's ability to consent at all (too young to understand consequences).",
      failure: "Review: Statute of Frauds = writing/signature requirement. Mistake = erroneous belief about basic assumption. Undue influence = exploitation of trust relationship. Incapacity = inability to understand consequences."
    },
    {
      type: "madlibs",
      irac: "Verdict",
      prompt: "Complete the synthesis holding:",
      template: "Four defenses, four ways a contract can fail. Saruman's forged orders fail the [A] because the party to be charged never signed. The Council's disagreement about the Ring is a [B] going to the substance of the agreement. Wormtongue's corruption of Théoden is [C] — exploitation of a [D] relationship to overcome free will. And Pippin's communication with Sauron is voidable for [E] — he could not understand the consequences of his actions. Each defense protects the foundational principle that contracts require voluntary, informed consent.",
      blanks: [
        { key: "A", options: ["Statute of Frauds", "parol evidence rule", "mailbox rule"], answer: "Statute of Frauds" },
        { key: "B", options: ["mutual mistake", "unilateral mistake", "misunderstanding"], answer: "mutual mistake" },
        { key: "C", options: ["undue influence", "duress", "fraud"], answer: "undue influence" },
        { key: "D", options: ["trust and confidence", "arms-length", "commercial"], answer: "trust and confidence" },
        { key: "E", options: ["incapacity", "illegality", "impossibility"], answer: "incapacity" }
      ],
      success: "Judgment complete. The shadow that falls over Middle-earth is the shadow of involuntary agreement. Every defense in this module serves the same principle: contract law will not enforce promises extracted through forgery, confusion, manipulation, or from those unable to understand what they are agreeing to. The threshold has been crossed — ahead lies the deeper question of what agreements actually mean.",
      failure: "Review the four defenses: Statute of Frauds (writing requirement), mutual mistake (shared erroneous belief), undue influence (exploitation of trust), and incapacity (inability to understand consequences)."
    }
  ]
};
