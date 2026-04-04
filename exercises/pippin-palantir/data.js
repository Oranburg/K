/**
 * Chapter 13: Pippin's Palantír — Incapacity
 * Focus: R2d §§ 12–16, Webster St. Partnership v. Sheridan
 */
var EXERCISE = {
  slug: "pippin-palantir",
  title: "Pippin's Palantír",
  kicker: "Chapter 13 • Incapacity",
  subtitle: "Camp at Night",
  chapterNum: 13,
  law: "R2d §§ 12–16",
  narrative: "Pippin cannot resist the palantír. In the dead of night he lifts it from Gandalf's sleeping form and gazes into the stone — entering a 'communication' with Sauron that he cannot understand, cannot control, and never meaningfully consented to. Contract law recognizes that some parties lack the capacity to be bound: infants, the mentally ill, and the intoxicated. The incapacity doctrines share a common purpose of ensuring that contracts are founded on voluntary, informed consent.",
  image: "../../assets/images/K-pippin-palantir.png",
  prevChapter: { title: "Wormtongue's Whispers", url: "../golden-hall/" },
  nextChapter: { title: "The Doors of Moria", url: "../doors-of-moria/" },
  tome: [
    "R2d § 12: \"No one can be bound by contract who has not legal capacity to incur at least voidable contractual duties. Capacity to contract is a prerequisite.\"",
    "R2d § 14: \"Unless a statute provides otherwise, a natural person has the capacity to incur only voidable contractual duties until the beginning of the day before the person's eighteenth birthday.\"",
    "R2d § 15(1)(a): Mental illness or defect — a person incurs only voidable contractual duties if \"by reason of mental illness or defect\" the person is \"unable to understand in a reasonable manner the nature and consequences of the transaction.\"",
    "R2d § 15(1)(b): Mental illness or defect — alternatively, the person is \"unable to act in a reasonable manner in relation to the transaction and the other party has reason to know of his condition.\"",
    "R2d § 16: \"A person incurs only voidable contractual duties by entering into a transaction if the other party has reason to know that by reason of intoxication\" the person is unable to understand the nature and consequences of the transaction.",
    "Webster St. Partnership v. Sheridan (1985): Two minors leased an apartment, paid rent, then sought to disaffirm. Court held the lease voidable — an apartment was not a 'necessary' where the minors could have lived at home with parents."
  ],
  artifacts: [
    {
      id: "palantir-scene",
      name: "The Palantír Communication",
      text: "Pippin lifted the dark globe from Gandalf's side and peered in. At first — nothing. Then: fire, a great Eye, a voice demanding answers. Pippin could not look away, could not understand what was being asked, could not voluntarily respond. He screamed and fell rigid, the stone rolling from his hands.\n\nAnalysis: Pippin's encounter maps onto R2d § 15(1)(a) — he was 'unable to understand in a reasonable manner the nature and consequences of the transaction.' Sauron's mental domination parallels R2d § 15(1)(b) — Pippin could not 'act in a reasonable manner,' and the other party (Sauron) had reason to know it. Additionally, as a young hobbit — not yet of age by Shire reckoning — Pippin parallels the infant doctrine of R2d § 14."
    },
    {
      id: "webster-comparison",
      name: "Webster Street and the Necessaries Exception",
      text: "In Webster St. Partnership v. Sheridan, two 16-year-olds rented an apartment in Omaha, paying deposits and two months' rent. When they vacated and sought their money back, the landlord argued the apartment was a 'necessary' that should be excepted from the infant's power to disaffirm.\n\nThe court disagreed: both minors had parents willing and able to provide shelter. An apartment is only a 'necessary' when the minor cannot obtain it from parents or guardians. Result: the lease was voidable, and the minors recovered their deposits.\n\nMiddle-earth parallel: If young Pippin 'agreed' to serve Sauron, could Sauron argue the agreement was for 'necessaries'? No — Pippin had Gandalf, Aragorn, and the Fellowship to protect and provide for him. Like the Webster Street minors, Pippin had adequate guardians."
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open both artifacts: the palantír scene analysis and the Webster Street comparison. Note the three categories of incapacity: infancy (R2d § 14), mental illness (R2d § 15), and intoxication (R2d § 16)."
    },
    {
      type: "mcq",
      irac: "Cognitive Incapacity (R2d § 15)",
      prompt: "Pippin gazes into the palantír and is mentally overwhelmed by Sauron — he cannot understand what is being communicated, cannot control his responses, and falls rigid. If Sauron extracted a 'promise' from Pippin during this encounter, what is the strongest incapacity argument?",
      options: [
        {
          text: "R2d § 15(1)(a) — Pippin was unable to understand in a reasonable manner the nature and consequences of the transaction due to Sauron's mental domination.",
          correct: true,
          feedback: "Correct. R2d § 15(1)(a) provides that a contract is voidable if a party 'by reason of mental illness or defect' is 'unable to understand in a reasonable manner the nature and consequences of the transaction.' Pippin had no comprehension of what Sauron was asking, what he was revealing, or what any 'agreement' entailed. This is the cognitive test — the party simply cannot understand the deal. Note that R2d § 15(1)(b) also applies (inability to act reasonably where the other party has reason to know), but (1)(a) is the stronger argument because it does not require proving what the other party knew."
        },
        {
          text: "R2d § 16 — Pippin was effectively intoxicated by the palantír's power, impairing his judgment.",
          correct: false,
          feedback: "While the palantír's hypnotic effect is tempting to analogize to intoxication, R2d § 16 specifically addresses intoxication by substances. More importantly, § 16 requires the other party to 'have reason to know' of the impairment — an extra element. R2d § 15(1)(a) is the cleaner fit: Pippin's mental state (regardless of its cause) rendered him unable to understand the nature and consequences of the transaction."
        },
        {
          text: "R2d § 12 — Pippin had no legal capacity at all, making any agreement void rather than voidable.",
          correct: false,
          feedback: "R2d § 12 states the general principle that capacity is required, but it specifies that most incapacity results in 'voidable' — not void — duties. Only persons under full guardianship adjudication lack ALL capacity (void). Pippin's situation is better analyzed under the specific provisions: § 14 (infancy) or § 15 (mental illness/defect), both of which make contracts voidable, not void."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Infancy Doctrine (R2d § 14)",
      prompt: "In Webster St. Partnership v. Sheridan, two minors leased an apartment, then sought to disaffirm. The landlord argued the apartment was a 'necessary' that should be excepted from the infant's right to void the contract. Why did the court reject this argument?",
      options: [
        {
          text: "The minors had parents willing and able to provide shelter — an apartment is only a 'necessary' when the minor cannot obtain it from a parent or guardian.",
          correct: true,
          feedback: "Correct. Webster St. Partnership v. Sheridan held that shelter is a 'necessary' only when the minor has no other source. Both teenagers had parents able and willing to house them. The court applied R2d § 14's default rule: contracts with minors are voidable at the minor's election. The 'necessaries' exception is narrow — it applies only when the minor genuinely needs the good or service and cannot obtain it through a guardian. The minors recovered their deposits."
        },
        {
          text: "Housing is never a 'necessary' as a matter of law — only food and medical care qualify.",
          correct: false,
          feedback: "Housing CAN be a necessary. The traditional categories include food, clothing, shelter, and medical care. The issue in Webster Street was not whether housing is categorically excluded, but whether THESE minors needed THIS housing — and they did not, because their parents could provide it. The necessaries doctrine is fact-specific."
        },
        {
          text: "The minors had already vacated, so the contract was fully executed and disaffirmance was too late.",
          correct: false,
          feedback: "Under R2d § 14, a minor may disaffirm within a reasonable time after reaching majority — or even during minority. Vacating the apartment did not extinguish the right to disaffirm; it was part of exercising that right. The court allowed full recovery of deposits paid."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Intoxication (R2d § 16)",
      prompt: "Gimli, deep in his cups at Edoras, wagers his battle axe against Legolas's bow in a drinking contest and signs an agreement. Legolas, entirely sober, watches Gimli stumble through the signing. Under R2d § 16, is Gimli's agreement voidable?",
      options: [
        {
          text: "Yes — Gimli was unable to understand the nature and consequences of the transaction, and Legolas had reason to know of Gimli's intoxication.",
          correct: true,
          feedback: "Correct. R2d § 16 requires two elements: (1) the intoxicated party is unable to understand the nature and consequences of the transaction, and (2) the other party has reason to know of the intoxication. Gimli was visibly stumbling and deep in his cups — Legolas clearly had reason to know. Both elements are met, making Gimli's wager voidable at his election."
        },
        {
          text: "No — voluntary intoxication is never a defense to contract formation because the intoxicated party chose to drink.",
          correct: false,
          feedback: "Unlike some criminal law doctrines, contract law does not distinguish between voluntary and involuntary intoxication. R2d § 16 applies regardless of whether the party chose to drink. The policy protects against exploitation: a sober party who knowingly contracts with someone too impaired to understand the deal should not benefit from that advantage."
        },
        {
          text: "No — a wager is an illegal contract, so incapacity is irrelevant.",
          correct: false,
          feedback: "Whether the subject matter raises legality issues is a separate doctrine (Chapter 12). The incapacity analysis under R2d § 16 applies independently. Even if the wager were enforceable, Gimli could void it on incapacity grounds. The question tests whether Gimli lacked understanding AND whether Legolas had reason to know — both are satisfied here."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Classifying Incapacity",
      prompt: "Classify each scenario by the applicable incapacity doctrine. Drag each item to the correct category.",
      tokens: [
        { id: "t1", label: "Pippin, a young hobbit not yet of age, signs a contract with Sauron" },
        { id: "t2", label: "Pippin, mentally dominated by the palantír, cannot understand what he is agreeing to" },
        { id: "t3", label: "Gimli, visibly drunk, wagers his axe while Legolas watches" },
        { id: "t4", label: "Two 16-year-olds lease an apartment (Webster Street)" },
        { id: "t5", label: "Denethor, consumed by despair and madness, pledges Gondor's treasury" },
        { id: "t6", label: "Théoden, under Wormtongue's influence, cannot act reasonably and Wormtongue knows it" }
      ],
      buckets: [
        { id: "infant", label: "Infancy — R2d § 14" },
        { id: "mental", label: "Mental Illness/Defect — R2d § 15" },
        { id: "intox", label: "Intoxication — R2d § 16" }
      ],
      requiredAssignments: {
        "t1": "infant",
        "t2": "mental",
        "t3": "intox",
        "t4": "infant",
        "t5": "mental",
        "t6": "mental"
      },
      success: "Well sorted. Notice how the three doctrines share a common structure: diminished understanding + (in some cases) the other party's knowledge of the impairment. R2d § 14 (infancy) is the simplest — age alone triggers voidability. R2d § 15 (mental illness) uses either a cognitive test (§ 15(1)(a)) or a volitional test requiring the other party's knowledge (§ 15(1)(b)). R2d § 16 (intoxication) mirrors § 15(1)(a) but adds the requirement that the other party had reason to know.",
      failure: "Review the three categories: R2d § 14 covers minors (under 18) — age alone triggers the doctrine. R2d § 15 covers mental illness or defect — inability to understand (§ 15(1)(a)) or inability to act reasonably where the other party should know (§ 15(1)(b)). R2d § 16 covers intoxication — inability to understand where the other party has reason to know."
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Complete the holding on incapacity:",
      template: "Under R2d § 12, full contractual capacity is presumed unless a party falls within a recognized exception. R2d § 14 provides that a [A] incurs only voidable duties — unless the contract is for [B]. In Webster St. Partnership v. Sheridan, the court held that shelter was not a necessary because the minors had [C] able to provide it. R2d § 15(1)(a) voids contracts where a party cannot [D] the nature and consequences of the transaction. R2d § 16 applies to intoxication but adds the requirement that the other party had [E] of the impairment.",
      blanks: [
        { key: "A", options: ["minor", "fiduciary", "merchant"], answer: "minor" },
        { key: "B", options: ["necessaries", "real property", "services"], answer: "necessaries" },
        { key: "C", options: ["parents", "employers", "landlords"], answer: "parents" },
        { key: "D", options: ["understand", "negotiate", "memorialize"], answer: "understand" },
        { key: "E", options: ["reason to know", "actual knowledge", "written notice"], answer: "reason to know" }
      ],
      success: "Chapter 13 complete. The incapacity doctrines — infancy, mental illness, and intoxication — protect parties who cannot give voluntary, informed consent. Pippin's encounter with the palantír illustrates the core principle: a 'communication' that the weaker party cannot understand, control, or meaningfully agree to is not a binding contract. The law voids such agreements to protect the vulnerable — even when the other party (Sauron) insists a deal was struck. Next: Chapter 14, where we examine the Statute of Frauds at the Doors of Moria.",
      failure: "Review: R2d § 12 presumes capacity. § 14 makes minors' contracts voidable except for necessaries — Webster Street narrowed this exception by requiring the minor to lack parental support. § 15(1)(a) uses a cognitive test (unable to understand). § 16 mirrors § 15(1)(a) for intoxication but requires the other party to have reason to know."
    }
  ]
};
