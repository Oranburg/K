/**
 * Module 6: The War of the Ring — Performance & Breach (Ch 19–23)
 *
 * Hero's Journey: The Ordeal
 * Story: From Helm's Deep to the Black Gate — performance under impossible conditions.
 * Doctrine: Conditions, substantial performance, repudiation, excuse, modification.
 */
var EXERCISE = {
  slug: "mod-6-war-of-the-ring",
  title: "The War of the Ring",
  kicker: "Module 6 • Performance & Breach",
  subtitle: "Helm's Deep to the Black Gate",
  chapterNum: 19,
  law: "R2d §§ 224–266; UCC §§ 2-601, 2-609–610",
  narrative: "The contracts are formed. The terms are set. Now comes the hardest question: was the contract performed? At Helm's Deep, Gandalf's return depends on a condition. At Osgiliath, Faramir deviates from his father's orders. In Shelob's Lair, Gollum's treachery reveals itself. Denethor's madness destroys his ability to govern. And at the Black Gate, the plan changes at the last hour. Five scenes of performance, breach, and adaptation.",
  image: "../../assets/images/K-helms-deep-dawn.png",
  prevChapter: { title: "The Words Beneath the Words", url: "../mod-5-words-beneath-words/" },
  nextChapter: { title: "The Return of the King", url: "../mod-7-return-of-the-king/" },
  tome: [
    "R2d § 224: A condition is an event, not certain to occur, which must occur before performance under a contract becomes due.",
    "R2d § 241: Factors in determining materiality of breach: (a) extent of deprivation, (b) adequacy of compensation, (c) extent of part performance, (d) likelihood of cure, (e) good faith and fair dealing.",
    "R2d § 250: Repudiation is a statement by the obligor indicating he will commit a breach, or a voluntary act rendering him unable to perform.",
    "R2d § 265: Frustration of purpose — where a party's principal purpose is substantially frustrated by an event not his fault, his remaining duties are discharged.",
    "R2d § 89: A promise modifying a contract not fully performed is binding if fair and equitable in view of unanticipated circumstances.",
    "Jacob & Youngs v. Kent: Trivial, innocent omissions may be cured by damages rather than forfeiture. The willful transgressor must accept his penalty; the innocent one may hope for mercy."
  ],
  artifacts: [
    {
      id: "gandalf-promise",
      name: "Gandalf's Promise at Helm's Deep",
      text: "'Look to my coming at first light on the fifth day. At dawn, look to the East.' Gandalf's promise was specific and conditional — tied to an exact time and place. If the condition is not met (dawn, fifth day, eastern ridge), the relief does not arrive. Théoden committed to defending the Hornburg based on this promise. The condition was strictly satisfied: Gandalf appeared at dawn on the fifth day, on the eastern ridge."
    },
    {
      id: "faramir-orders",
      name: "Denethor's Orders to Faramir",
      text: "Denethor's letter to Faramir at Osgiliath commanded: 'Any weapon of the Enemy that falls into your hands shall be brought to me in Minas Tirith. You serve Gondor, and Gondor is mine to command.' Faramir captured Frodo and the Ring. He defended Osgiliath bravely, fought well, and served Gondor faithfully — performing substantially all his duties. But on the most critical term, he deviated: he released Frodo and the Ring rather than bringing them to his father."
    },
    {
      id: "gollum-betrayal",
      name: "Gollum's Treachery",
      text: "Gollum swore on the Precious to serve Frodo faithfully: 'We will serve the master of the Precious. Sméagol will do what Master says.' But from the moment he made the promise, Gollum's conduct told a different story. He whispered to himself about plans. He led the hobbits toward Shelob's lair instead of a safe passage. Sam saw it coming: 'He's up to something.' Gollum's words said one thing; his conduct said another. Before the time for performance arrived, his intention to breach was clear."
    },
    {
      id: "black-gate-plan",
      name: "The Last Debate — Modifying the Plan",
      text: "The original quest: destroy the Ring by carrying it to Mount Doom. At the Last Debate before the Black Gate, Aragorn proposed a modification: instead of a military siege of Mordor, march to the Gate as a diversionary force to draw Sauron's eye from Frodo. This changed the original plan materially — from 'defeat Sauron's army' to 'distract Sauron long enough for Frodo to succeed.' Aragorn offered new consideration: 'I risk my life and kingdom on this gamble.' The captains agreed."
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all four artifacts. Each presents a different performance problem from the War of the Ring."
    },
    {
      type: "mcq",
      irac: "Ch 19: Conditions",
      prompt: "Gandalf said: 'Look to my coming at first light on the fifth day.' Under R2d § 224, what type of condition is this?",
      options: [
        {
          text: "A condition precedent — Gandalf's arrival at the specified time must occur before Théoden's obligation to charge is triggered.",
          correct: true,
          feedback: "Correct. R2d § 224: 'A condition is an event, not certain to occur, which must occur before performance under a contract becomes due.' Gandalf's arrival at dawn on the fifth day is the triggering event. If the condition fails (Gandalf doesn't come), Théoden has no obligation to make the final charge. The condition was an express term — specific as to time, place, and manner."
        },
        {
          text: "A condition subsequent — Théoden must charge first, and Gandalf's arrival discharges his retreat obligation.",
          correct: false,
          feedback: "A condition subsequent (R2d § 230) discharges a duty that has already arisen. Here, Théoden's charge is contingent on Gandalf's arrival — the event must occur BEFORE the duty to charge arises. That makes it precedent, not subsequent."
        },
        {
          text: "A promissory condition — Gandalf's arrival is both a promise and a condition.",
          correct: false,
          feedback: "While Gandalf's statement contains a promise ('Look to my coming'), the condition itself (dawn, fifth day, east) is an event whose occurrence triggers Théoden's response. The distinction matters: failure of a condition is not a breach, but failure of a promise IS. If Gandalf came late, it would be breach of his promise but the condition would simply fail."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 20: Substantial Performance",
      prompt: "Faramir performed nearly all of Denethor's orders — defended Osgiliath, fought bravely, served Gondor. But he released the Ring-bearer instead of bringing the Ring to Minas Tirith. Under R2d § 241, was this a material breach?",
      options: [
        {
          text: "It depends on the factors — the deviation goes to the purpose of the contract, but Faramir acted in good faith and the deviation arguably served Gondor's true interests better than strict compliance.",
          correct: true,
          feedback: "Correct. R2d § 241 lists five factors: (a) extent of deprivation — Denethor was fully deprived of the Ring, a severe loss from his perspective; (b) adequacy of compensation — there is no substitute; (c) extent of part performance — Faramir performed substantially everything else; (d) likelihood of cure — the Ring cannot be recalled; (e) good faith — Faramir acted reasonably, not willfully. This is the hardest kind of case: Jacob & Youngs says the 'willful transgressor must accept his penalty' but Faramir's deviation was principled, not willful."
        },
        {
          text: "Yes, clearly — Faramir failed the single most important term of the contract.",
          correct: false,
          feedback: "This overstates the materiality analysis. Under R2d § 241, materiality is not determined solely by the importance of the breached term — good faith, extent of other performance, and likelihood of cure all matter. Faramir's good faith and otherwise exemplary performance weigh against finding material breach."
        },
        {
          text: "No — Faramir substantially performed because he did most of what was asked.",
          correct: false,
          feedback: "This understates the analysis. Substantial performance requires that the breach be immaterial. When the deviation goes to the essential purpose of the contract (obtaining the Ring), the materiality inquiry is serious. The correct answer weighs all five R2d § 241 factors rather than assuming either outcome."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 21: Anticipatory Repudiation",
      prompt: "Gollum swore to serve Frodo but his conduct — whispering plans, leading toward Shelob — made his intention to breach clear before the time for performance arrived. Under R2d § 250, what can Sam (the aggrieved party) do?",
      options: [
        {
          text: "Demand adequate assurance of performance under UCC § 2-609, and if Gollum fails to provide it within a reasonable time, treat the contract as repudiated.",
          correct: true,
          feedback: "Correct. When reasonable grounds for insecurity arise (R2d § 251; UCC § 2-609), the aggrieved party may demand adequate assurance. Gollum's suspicious conduct — whispering, choosing dangerous paths — gives Sam 'reasonable grounds for insecurity.' If Gollum cannot provide adequate assurance (and he cannot), Sam may treat the contract as repudiated and suspend performance. Sam was right to be suspicious: Gollum's conduct was an anticipatory repudiation."
        },
        {
          text: "Nothing — Sam must wait until Gollum actually breaches before taking action.",
          correct: false,
          feedback: "The doctrine of anticipatory repudiation (R2d § 250; Hochster v. De La Tour) exists precisely so the aggrieved party need NOT wait for actual breach. When repudiation is clear, the aggrieved party can suspend performance and seek remedies immediately."
        },
        {
          text: "Kill Gollum — self-help is the appropriate remedy in a wilderness setting.",
          correct: false,
          feedback: "Contract law provides legal remedies, not violent ones. The appropriate response to anticipatory repudiation is to suspend performance, demand assurance, or treat the contract as breached and seek cover. Even in Middle-earth, Frodo's mercy toward Gollum is the legally correct instinct — termination, not execution."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 22: Frustration of Purpose",
      prompt: "Denethor's stewardship — his 'contract' to govern Gondor until the king returns — collapses when the palantír shows him Sauron's overwhelming force. Under R2d § 265, is Denethor excused from performance?",
      options: [
        {
          text: "Possibly — if the supervening event (Sauron's apparent invincibility) has substantially frustrated the principal purpose of Denethor's stewardship, and the event was not his fault.",
          correct: true,
          feedback: "Correct. R2d § 265 requires: (1) the party's principal purpose was substantially frustrated; (2) by an event whose non-occurrence was a basic assumption; (3) not the party's fault. Denethor's purpose was to govern until the king returned — but if the kingdom is about to be destroyed, the purpose is frustrated. Compare Krell v. Henry: the coronation hall rental was frustrated when the procession was canceled. However, Denethor's use of the palantír (his own choice) complicates the 'not his fault' element."
        },
        {
          text: "No — Denethor's duty continues regardless of difficulty. Mere hardship does not excuse performance.",
          correct: false,
          feedback: "This confuses impracticability (extreme difficulty) with frustration of purpose (destruction of purpose). Transatlantic Financing held that mere cost increases don't excuse performance. But frustration of purpose (R2d § 265) is different — it applies when performance is still possible but the underlying reason for the contract has been destroyed."
        },
        {
          text: "Yes, absolutely — any overwhelming event excuses performance automatically.",
          correct: false,
          feedback: "Excuse is not automatic. R2d § 265 requires the supervening event to be (1) not the party's fault and (2) whose non-occurrence was a basic assumption. Denethor's choice to use the palantír contributed to his despair — courts might find he assumed the risk or caused his own frustration."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 23: Modification",
      prompt: "At the Black Gate, Aragorn proposed changing the quest from military victory to a diversionary sacrifice. Under the pre-existing duty rule, what makes this modification enforceable?",
      options: [
        {
          text: "Aragorn offered new consideration — risking his life and kingdom as a diversionary force, beyond his existing obligation to fight.",
          correct: true,
          feedback: "Correct. The pre-existing duty rule (R2d § 73) says performing what you're already obligated to do is not consideration. But Aragorn offered something beyond his existing duty: a suicide mission as a distraction, not a battle to win. R2d § 89 also supports enforcement: the modification is 'fair and equitable in view of unanticipated circumstances' — Sauron's force was larger than expected. Under UCC § 2-209, modification doesn't even need consideration if made in good faith."
        },
        {
          text: "No new consideration was needed — the UCC eliminates the consideration requirement for modifications.",
          correct: false,
          feedback: "UCC § 2-209 does eliminate the consideration requirement for modifications of goods contracts, but this isn't a goods contract. The quest is a service/alliance agreement governed by common law. Under common law, modification generally requires new consideration (R2d § 73) or must meet the R2d § 89 exception for unanticipated circumstances."
        },
        {
          text: "The modification is unenforceable because it was made under duress — the army had no real choice.",
          correct: false,
          feedback: "Duress requires an improper threat (R2d § 175). Aragorn didn't threaten anyone — he proposed a modification. The difficult circumstances (Sauron's force) are not duress; they are the unanticipated circumstances that R2d § 89 contemplates. Alaska Packers v. Domenico involved coercion (sailors refused to work mid-season); Angel v. Murray involved fair modification due to changed conditions. This is closer to Angel."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Verdict",
      prompt: "Complete the performance synthesis:",
      template: "Performance depends on [A] — events that must occur before duties arise. When performance deviates, courts apply R2d § 241 to assess [B]. Before breach occurs, anticipatory [C] allows the aggrieved party to demand assurance. When the purpose of a contract is destroyed by a supervening event, the doctrine of [D] may excuse performance. And when circumstances change, a [E] is enforceable if supported by new consideration or fair in view of unanticipated events.",
      blanks: [
        { key: "A", options: ["conditions", "warranties", "remedies"], answer: "conditions" },
        { key: "B", options: ["materiality", "unconscionability", "privity"], answer: "materiality" },
        { key: "C", options: ["repudiation", "estoppel", "rescission"], answer: "repudiation" },
        { key: "D", options: ["frustration of purpose", "promissory estoppel", "specific performance"], answer: "frustration of purpose" },
        { key: "E", options: ["modification", "novation", "rescission"], answer: "modification" }
      ],
      success: "The ordeal is survived. From the conditional promise at Helm's Deep to the modified plan at the Black Gate, performance in the War of the Ring tested every doctrine: conditions strict and implied, breach material and immaterial, repudiation anticipated, purpose frustrated, and plans modified under fire. Now comes the final question: what remedy makes it right?",
      failure: "Review: Conditions (R2d § 224) trigger duties. Materiality (R2d § 241) determines breach severity. Repudiation (R2d § 250) allows early action. Frustration (R2d § 265) excuses when purpose is destroyed. Modification (R2d § 89) requires new consideration or fair circumstances."
    }
  ]
};
