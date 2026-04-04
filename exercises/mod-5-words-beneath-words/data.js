/**
 * Module 5: The Words Beneath the Words — Interpretation & Terms (Ch 14–18)
 *
 * Hero's Journey: Approach to the Inmost Cave
 * Story: From Moria's riddle-door through Galadriel's visions to the Fellowship's breaking.
 * Doctrine: Ambiguity, intrinsic/extrinsic evidence, parol evidence rule, warranties.
 */
var EXERCISE = {
  slug: "mod-5-words-beneath-words",
  title: "The Words Beneath the Words",
  kicker: "Module 5 • Interpretation & Terms",
  subtitle: "Moria to Amon Hen",
  chapterNum: 14,
  law: "R2d §§ 200–218; UCC §§ 1-303, 2-202, 2-313–316",
  narrative: "Every contract has two meanings: what it says and what it means. At the Doors of Moria, a simple inscription has two readings. In Balin's tomb, a document tells its own story. In Galadriel's mirror, knowledge from outside the text changes everything. At Amon Hen, Boromir tries to add terms the Fellowship never agreed to. And in a Rohan smithy, a sword comes with promises — some spoken, some implied. Five scenes of interpretation.",
  image: "../../assets/images/K-doors-of-moria.png",
  prevChapter: { title: "Shadows Over Middle-earth", url: "../mod-4-shadows-over-middle-earth/" },
  nextChapter: { title: "The War of the Ring", url: "../mod-6-war-of-the-ring/" },
  tome: [
    "R2d § 201: Where parties attach different meanings to a term, the contract is interpreted in accordance with the meaning attached by the party who did not know or have reason to know of the other's meaning.",
    "R2d § 202: Words are interpreted in light of all surrounding circumstances, with preference for meanings that give reasonable, lawful, and effective operation to all terms.",
    "R2d § 213: A binding integrated agreement discharges prior agreements to the extent inconsistent. Completely integrated agreements discharge all prior agreements within their scope.",
    "UCC § 2-202: Terms confirmed in writing may not be contradicted by prior agreement but may be supplemented by course of dealing, usage of trade, or course of performance.",
    "UCC § 2-313(1): Express warranties are created by affirmation of fact, description of goods, or sample/model that becomes part of the basis of the bargain.",
    "Frigaliment: \"The making of a contract depends not on the agreement of two minds in one intention, but on the agreement of two sets of external signs.\""
  ],
  artifacts: [
    {
      id: "moria-inscription",
      name: "The Doors of Durin",
      text: "The inscription reads in Elvish: 'Speak, friend, and enter.' Gandalf initially reads this as a command requiring a password — he tries dozens of opening spells. Frodo reads it as a simple statement: the Elvish word for 'friend' (mellon) IS the password. Same words, two valid interpretations. One is a command ('Speak the word \"friend\" to enter'). The other is an invitation ('Friends may speak and enter'). The ambiguity is latent — only apparent when you try to apply the text to the situation."
    },
    {
      id: "balin-record",
      name: "The Book of Records (Balin's Tomb)",
      text: "In the Chamber of Mazarbul, Gandalf reads the Book of Records — a journal kept by the dwarves of Moria. The book contains entries in chronological order, multiple handwritings, dates, and descriptions of events. It tells the story of Balin's colony entirely from within its own pages — no outside evidence needed. The last entry, in a desperate scrawl: 'They are coming.' The document interprets itself."
    },
    {
      id: "galadriel-vision",
      name: "Galadriel's Mirror",
      text: "In Lothlórien, Galadriel offers Frodo a vision in her mirror. The Mirror shows things from outside the quest agreement: the Shire burning (future possibility), past dealings between Sauron and the Ring, the Fellowship's scattered camps. None of this information is in the Council's 'contract' to destroy the Ring. But it changes how Frodo understands his obligation. Course of dealing (Sauron's history), trade usage (how Rings of Power work), and course of performance (how the quest is actually going) — all extrinsic evidence that illuminates the agreement's meaning."
    },
    {
      id: "boromir-modification",
      name: "Boromir's Proposal at Amon Hen",
      text: "At Amon Hen, Boromir proposes a change to the quest: take the Ring to Gondor as a weapon instead of destroying it. But the Fellowship's agreement at the Council of Elrond was final and integrated — Elrond declared the purpose, the members assented, and the quest was set. Boromir's proposal is a prior/contemporaneous side deal that contradicts the integrated agreement. He is attempting to introduce parol evidence that contradicts the writing."
    }
  ],
  steps: [
    {
      type: "info",
      irac: "The Interpretation Hierarchy",
      prompt: "Contract interpretation follows a careful hierarchy. First: read the text (intrinsic evidence — the four corners). Second: if the text is ambiguous, consider context (extrinsic evidence — course of dealing, trade usage, course of performance). Third: the parol evidence rule guards the boundary — prior inconsistent agreements are barred once a writing is integrated. Fourth: some terms are implied by law (warranties) whether the parties mentioned them or not. Every dispute in this module tests one rung of that hierarchy."
    },
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all four artifacts. Each illustrates a different principle of contract interpretation. Pay close attention to how meaning shifts depending on what evidence you consider."
    },
    {
      type: "mcq",
      irac: "Ch 14: Ambiguity",
      prompt: "'Speak, friend, and enter' — Gandalf reads it as requiring a password; Frodo reads it as a simple greeting. Under the Frigaliment framework, what kind of ambiguity is this?",
      options: [
        {
          text: "Latent ambiguity — the language appears clear on its face but reveals two valid meanings when applied to the situation.",
          correct: true,
          feedback: "Correct. A latent ambiguity is not apparent from the contract's face — it only becomes evident when the language is applied to external circumstances. 'Speak, friend, and enter' seems clear until someone actually tries to open the door. Compare Raffles v. Wichelhaus (the Peerless case): the word 'Peerless' seemed unambiguous until it turned out two ships had that name."
        },
        {
          text: "Patent ambiguity — the language is obviously unclear on its face.",
          correct: false,
          feedback: "A patent ambiguity is one that's evident from the text itself — garbled syntax, missing terms, contradictory clauses. The Moria inscription reads perfectly well in Elvish. The ambiguity only appears when you try to apply it."
        },
        {
          text: "There is no ambiguity — Frodo's reading is the only correct one.",
          correct: false,
          feedback: "Both readings are linguistically valid. That's precisely what makes it ambiguous. Courts (and Gandalf) must consider extrinsic evidence — context, purpose, customs — to resolve which meaning the parties intended."
        }
      ]
    },
    {
      type: "redline",
      irac: "Ch 14: Finding the Ambiguity",
      prompt: "Read the Moria inscription below. Click the word that creates the latent ambiguity — the word that means one thing to Gandalf (a command) and another to Frodo (a password):",
      docText: "Speak, friend, and enter.",
      target: "friend",
      success: "Correct. The word 'friend' creates the latent ambiguity. Gandalf reads 'friend' as the addressee of a command: 'You who are a friend, speak [a password].' Frodo reads 'friend' as the content of the speech: 'Say the word friend [mellon].' Same word, two valid parsings. This is a latent ambiguity — it only appears when you try to apply the text to the situation. Compare Raffles v. Wichelhaus: the word 'Peerless' was unambiguous until two ships bore the same name. Courts resolve latent ambiguity by admitting extrinsic evidence of the parties' intent."
    },
    {
      type: "mcq",
      irac: "Ch 15: Intrinsic Evidence",
      prompt: "The Book of Records in Balin's tomb tells the story of the dwarven colony entirely from within its own pages. This is analogous to which principle of contract interpretation?",
      options: [
        {
          text: "The four corners rule — a court interprets a contract from within the document itself, without looking outside.",
          correct: true,
          feedback: "Correct. Intrinsic evidence is evidence found within the four corners of the document. The Book of Records needs no outside knowledge — its entries, dates, and descriptions create a self-contained narrative. Courts prefer this approach: read the contract's plain language first, applying canons of construction, before looking outside."
        },
        {
          text: "The mailbox rule — the document's effectiveness depends on when it was dispatched.",
          correct: false,
          feedback: "The mailbox rule (R2d § 63) governs timing of acceptance, not interpretation. The four corners rule governs how a document is read — from within, before looking outside."
        },
        {
          text: "The contra proferentem rule — ambiguity is construed against the drafter.",
          correct: false,
          feedback: "Contra proferentem (R2d § 206) is a policy canon for resolving ambiguity, not a description of intrinsic evidence. The four corners rule is the principle that a document should first be read by its own light."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 16: Extrinsic Evidence",
      prompt: "Galadriel's Mirror shows Frodo things from outside the quest agreement — the Shire's future, Sauron's history, the Fellowship's current state. Under UCC § 1-303, which type of extrinsic evidence does the Mirror best represent?",
      options: [
        {
          text: "Course of dealing and trade usage — past patterns and industry customs that illuminate the agreement's meaning.",
          correct: true,
          feedback: "Correct. The Mirror shows Sauron's history with the Rings (course of dealing — prior transactions between the parties), how Rings of Power work (trade usage — practices with regularity of observance), and the quest's current progress (course of performance). UCC § 1-303 makes all three admissible to supplement the written agreement."
        },
        {
          text: "Parol evidence — prior oral agreements that should be barred by the written quest agreement.",
          correct: false,
          feedback: "The parol evidence rule (R2d § 213) bars prior inconsistent agreements. But course of dealing, trade usage, and course of performance are specifically exempted under UCC § 2-202 — they supplement rather than contradict the written terms."
        },
        {
          text: "Implied-in-law terms — obligations the court imposes regardless of the parties' intent.",
          correct: false,
          feedback: "Implied-in-law terms (like good faith) are imposed by legal doctrine. The Mirror's revelations are factual evidence about how the parties and their world actually work — that's extrinsic evidence under UCC § 1-303, not court-imposed obligations."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 17: Parol Evidence Rule",
      prompt: "Boromir proposes taking the Ring to Gondor instead of destroying it. The Council's agreement was final and integrated. Under R2d § 213, what happens to Boromir's proposal?",
      options: [
        {
          text: "It is barred — a completely integrated agreement discharges all prior or contemporaneous agreements within its scope that contradict it.",
          correct: true,
          feedback: "Correct. R2d § 213(2): 'A binding completely integrated agreement discharges prior agreements to the extent that they are within its scope.' The Council's decision to destroy the Ring was the integrated agreement. Boromir's 'take it to Gondor' proposal directly contradicts the core purpose. It is parol evidence barred by the merger. As Gianni v. R. Russell held: when the written contract covers the very subject matter of the oral agreement, the oral term is excluded."
        },
        {
          text: "It is admissible as a consistent additional term that supplements the quest agreement.",
          correct: false,
          feedback: "A consistent additional term (R2d § 216) must be 'in reasonable harmony' with the written agreement. 'Use the Ring as a weapon' directly contradicts 'destroy the Ring.' This is not supplementation — it is contradiction, and it is barred."
        },
        {
          text: "It is admissible because the quest agreement was only a partial integration.",
          correct: false,
          feedback: "Even if the agreement were partial, contradictory terms are still excluded. Only consistent additional terms can supplement a partial integration. Boromir's proposal negates the core term (destruction), making it inadmissible under any level of integration."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Ch 18: Warranties",
      prompt: "A Rohan smithy displays swords with different tags. Drag each description to the correct type of warranty under UCC Article 2:",
      tokens: [
        { id: "t1", label: "'Forged by Théodred — Finest Rohirric Steel' (tag on blade)" },
        { id: "t2", label: "Unmarked blade that gleams with quality, fit for ordinary combat" },
        { id: "t3", label: "'Suitable for Mounted Combat' (note for a cavalry rider)" }
      ],
      buckets: [
        { id: "express", label: "Express Warranty (UCC § 2-313)" },
        { id: "merchant", label: "Implied Merchantability (UCC § 2-314)" },
        { id: "fitness", label: "Implied Fitness (UCC § 2-315)" }
      ],
      requiredAssignments: {
        "t1": "express",
        "t2": "merchant",
        "t3": "fitness"
      },
      success: "Correct. The tag stating 'Finest Rohirric Steel' is an express warranty — an affirmation of fact that becomes part of the basis of the bargain (UCC § 2-313). The unmarked blade from a merchant smith carries an implied warranty of merchantability — fit for ordinary purposes (UCC § 2-314). The 'Suitable for Mounted Combat' note addresses a particular purpose the buyer communicated, creating an implied warranty of fitness (UCC § 2-315).",
      failure: "Review: Express warranties arise from seller's statements/descriptions. Merchantability is implied when a merchant sells goods of the kind — they must be fit for ordinary use. Fitness for particular purpose arises when the seller knows the buyer's specific need and the buyer relies on the seller's expertise."
    },
    {
      type: "madlibs",
      irac: "Verdict",
      prompt: "Complete the interpretation synthesis:",
      template: "Contract interpretation begins with [A] — reading the agreement from within its four corners. When language is [B], courts admit extrinsic evidence to resolve the meaning. But the [C] bars prior agreements that contradict an integrated writing. Supplementary evidence — course of dealing, trade usage, and course of performance — is admissible under [D] even when a writing exists. And when merchants sell goods, the law implies warranties of [E] and fitness alongside any express promises.",
      blanks: [
        { key: "A", options: ["intrinsic evidence", "extrinsic evidence", "parol evidence"], answer: "intrinsic evidence" },
        { key: "B", options: ["ambiguous", "unconscionable", "illusory"], answer: "ambiguous" },
        { key: "C", options: ["parol evidence rule", "statute of frauds", "mailbox rule"], answer: "parol evidence rule" },
        { key: "D", options: ["UCC § 1-303", "R2d § 90", "UCC § 2-207"], answer: "UCC § 1-303" },
        { key: "E", options: ["merchantability", "consideration", "mutual assent"], answer: "merchantability" }
      ],
      success: "The words beneath the words have been read. From the riddle-door of Moria to the breaking of the Fellowship, contract interpretation follows a careful hierarchy: start with the text, consider context when ambiguity appears, but respect the boundaries of integration. The cave has been entered. Ahead lies the ordeal.",
      failure: "Review the interpretation hierarchy: intrinsic evidence first, extrinsic evidence for ambiguity, parol evidence rule as gatekeeper, UCC § 1-303 for commercial context, implied warranties for merchant transactions."
    }
  ]
};
