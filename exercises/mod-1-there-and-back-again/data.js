/**
 * Module 1: There and Back Again — Foundations (Ch 1–2)
 *
 * MASTERWORK ONBOARDING: This is the first activity students encounter.
 * It must simultaneously:
 *   1. Teach them HOW TO USE the website (Investigation Desk, Tome, interactions)
 *   2. Teach Ch 1 doctrine (what is contract law, four justifications, objective theory)
 *   3. Teach Ch 2 doctrine (R2d §§ 1-3, promise vs intention, bilateral/unilateral)
 *   4. Set the narrative tone (Hobbit → Hero's Journey)
 *   5. Build confidence before harder modules
 *
 * Hero's Journey: Ordinary World
 * Story: Bilbo's peaceful Shire → Gandalf's mark → the Burglar Agreement
 *
 * Phases:
 *   Phase 1: Welcome & Orientation (info steps introducing the interface)
 *   Phase 2: The Ordinary World (Ch 1 — why does contract law exist?)
 *   Phase 3: The Contract Arrives (Ch 2 — what IS a contract?)
 *   Phase 4: The Verdict (synthesis across both chapters)
 */
var EXERCISE = {
  slug: "mod-1-there-and-back-again",
  title: "There and Back Again",
  kicker: "Module 1 • Foundations",
  subtitle: "Bag End to the Burglar Agreement",
  chapterNum: 1,
  law: "R2d §§ 1–3 (Contracts, Promises, Agreements)",
  narrative: "Before the dwarves arrived, the Shire ran on promises nobody thought to call contracts. Farmers traded vegetables over fences. Bakers passed bread through windows. Then Gandalf scratched his mark on the door, and everything changed. A formal document appeared on Bilbo's table — the Burglar Agreement — and for the first time, a hobbit had to ask: is this a contract?",
  image: "../../assets/images/k-shire-morning.png",
  prevChapter: null,
  nextChapter: { title: "The Road Goes Ever On", url: "../mod-2-road-goes-ever-on/" },
  tome: [
    "R2d § 1: \"A contract is a promise or a set of promises for the breach of which the law gives a remedy, or the performance of which the law in some way recognizes as a duty.\"",
    "R2d § 2(1): \"A promise is a manifestation of intention to act or refrain from acting in a specified way, so made as to justify a promisee in understanding that a commitment has been made.\"",
    "R2d § 3: \"An agreement is a manifestation of mutual assent on the part of two or more persons. A bargain is an agreement to exchange promises or to exchange a promise for a performance or to exchange performances.\"",
    "Casebook: \"Contract law is the law of promises. Without a promise, there is no contract.\"",
    "Casebook: \"Contract law does not require a 'meeting of the minds.' Courts assess contracts objectively, based on what the parties say and do.\"",
    "Casebook: Contract law exists for four reasons: (1) efficiency — enabling voluntary trades; (2) reliance — protecting those who act on promises; (3) fairness — preventing exploitation; (4) autonomy — respecting freedom to create obligations."
  ],
  artifacts: [
    {
      id: "shire-customs",
      name: "Shire Market Customs",
      text: "Every Tuesday, Farmer Cotton delivers potatoes to the Gamgees. No writing, no handshake — just decades of practice. The Gaffer planned his meals around it. Last week, Cotton didn't show up. The Gaffer grumbled but had no recourse. Without a bargained-for exchange, Cotton's deliveries may be merely gratuitous — a social custom, not a legal obligation. Yet the Gaffer relied on it. Should the law care?"
    },
    {
      id: "burglar-agreement",
      name: "The Burglar Agreement",
      text: "TERMS OF ENGAGEMENT: Burglar (Bilbo Baggins) shall proceed to the Lonely Mountain to recover treasure held by the Dragon Smaug. COMPENSATION: Cash on delivery, up to and not exceeding one fourteenth of total profit (if any). RISK ALLOCATION: Travelling expenses guaranteed in any event; funeral expenses to be defrayed by Thorin Oakenshield and Company or their representatives, if occasion arises and the matter is not otherwise arranged for. SIGNED: Thorin Oakenshield, for and on behalf of Thorin and Company."
    },
    {
      id: "gandalf-letter",
      name: "Gandalf's Letter to Bilbo",
      text: "\"Dear Bilbo — Every good tale begins with a contract and ends with a remedy. The question is never whether promises exist — they are as common as clover in the Shire. The question is which promises the law will enforce, and why. Your burglar's contract is a written document in a world that runs on handshakes. But the writing is not what makes it binding. What makes it binding is the exchange: your service for their gold. That is the essence of contract law — a bargained-for exchange between willing parties, judged by what they do, not what they think. — Gandalf\""
    },
    {
      id: "bilbo-journal",
      name: "Bilbo's Private Journal",
      text: "\"I never intended to go on any adventure. When I said 'Good morning' to Gandalf, I meant it as a greeting, nothing more. He seems to have taken it as some sort of invitation. The dwarves seem to think I have agreed to something. I suppose I did sign the contract, but only because they were all staring at me. My hand was shaking. Does what I meant matter, or only what I said and did?\""
    }
  ],
  steps: [
    // ═══ PHASE 1: Welcome & Orientation ═══
    {
      type: "info",
      irac: "Welcome",
      prompt: "Welcome to Contract Law! This is your interactive course companion. You are about to journey through Middle-earth, learning contract doctrine at every stop. Here is how this works: on the LEFT is the main stage — where you read, analyze, and answer questions. On the RIGHT is the Tome of Law — a sidebar containing the legal rules you need. Refer to it often. Your score appears at the top. Let's begin in the Shire."
    },
    {
      type: "desk",
      irac: "Investigation Desk",
      prompt: "This is the Investigation Desk — click each card below to read the evidence. You will need these facts to answer the questions ahead. Read all four artifacts carefully: the Shire's customs, the Burglar Agreement, Gandalf's letter about contract law, and Bilbo's private journal. When you have read them all, click Continue."
    },

    // ═══ PHASE 2: The Ordinary World — Ch 1 ═══
    {
      type: "mcq",
      irac: "Ch 1: What Kind of Law?",
      prompt: "Bilbo lives in a world with no tax collectors, no police, and no government offices. Yet hobbits make deals with each other every day. Contract law is part of which category of law?",
      options: [
        {
          text: "Private law — it governs voluntary relationships between individuals, not the relationship between people and the state.",
          correct: true,
          feedback: "Correct. Contract law is private law. Unlike public law (criminal law, tax law), it enforces only obligations people voluntarily create. As the casebook states: 'If you do not want to be liable, you can choose not to form a contract.' This voluntariness is what makes contract law fundamentally different from other legal disciplines."
        },
        {
          text: "Public law — it applies to everyone whether they agree to it or not.",
          correct: false,
          feedback: "That describes public law (criminal, tax, constitutional). Contract law is private law — it only binds people who choose to make promises. No one forced Bilbo to sign the Burglar Agreement."
        },
        {
          text: "Common law — it evolved from English courts and applies in America.",
          correct: false,
          feedback: "Common law describes the source of contract rules (judge-made law), not the category. Contract law is private law by nature and common law by origin — but the question asks about category, not source."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 1: Why Does Contract Law Exist?",
      prompt: "Farmer Cotton has delivered potatoes every Tuesday for years. One week he doesn't show. The Gaffer, who planned his meals around the delivery, goes hungry. The casebook identifies four justifications for contract law. Which justification BEST explains why the law might protect the Gaffer?",
      options: [
        {
          text: "Reliance — the Gaffer changed his behavior based on Cotton's consistent conduct, and the law protects those who reasonably rely on promises.",
          correct: true,
          feedback: "Correct. Reliance theory holds that when someone reasonably acts on a promise and suffers a loss, the law should intervene. The Gaffer planned meals, didn't buy alternatives, and went hungry — classic detrimental reliance. The other three justifications (efficiency, fairness, autonomy) also support contract law, but reliance most directly addresses the Gaffer's harm."
        },
        {
          text: "Efficiency — voluntary trades make both sides better off, and enforcing promises enables commerce.",
          correct: false,
          feedback: "Efficiency is a valid justification for contract law generally — it enables markets. But it doesn't specifically explain the Gaffer's situation. The Gaffer's problem is that he RELIED on Cotton's conduct and was harmed when it stopped. That's the reliance justification."
        },
        {
          text: "Autonomy — Cotton freely chose to deliver potatoes, so the law should hold him to his choice.",
          correct: false,
          feedback: "Autonomy supports contract enforcement by respecting voluntary commitments. But Cotton may argue he never made a binding commitment — he was just being neighborly. The Gaffer's strongest argument is reliance: he changed his position based on Cotton's conduct."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 1: Objective vs. Subjective",
      prompt: "Bilbo writes in his journal: 'I only signed because they were all staring at me. My hand was shaking.' He claims he never truly agreed. Under the OBJECTIVE theory of contracts — which modern American law follows — does Bilbo's private reluctance matter?",
      options: [
        {
          text: "No — courts look at what Bilbo DID (signed the contract), not what he privately thought. External conduct controls.",
          correct: true,
          feedback: "Correct. The objective theory focuses on external manifestations — words, conduct, signatures. As Steinberg v. Chicago Medical School held: 'In the formation of contracts, it was long ago settled that secret intent was immaterial, only overt acts being considered.' Bilbo signed a written agreement in front of witnesses. A reasonable person would understand that as assent. His shaking hand and private doubts are legally irrelevant."
        },
        {
          text: "Yes — if Bilbo's true intent was social, not contractual, there is no 'meeting of the minds.'",
          correct: false,
          feedback: "The phrase 'meeting of the minds' is, as the casebook says, 'an outdated cliche.' Modern contract law uses the objective standard: what would a reasonable person understand from the parties' outward conduct? Bilbo signed. That is an objective manifestation of assent."
        },
        {
          text: "It depends on whether the dwarves deliberately pressured him.",
          correct: false,
          feedback: "Deliberate pressure might raise a duress defense (covered in Module 4). But the objective/subjective distinction is about HOW courts evaluate assent, not whether pressure existed. Under the objective standard, the question is simply: would a reasonable person viewing Bilbo's conduct understand him to have agreed? Yes — he signed."
        }
      ]
    },

    // ═══ PHASE 3: The Contract Arrives — Ch 2 ═══
    {
      type: "redline",
      irac: "Ch 2: Promise vs. Intention",
      prompt: "Not every statement is a promise. Read Bilbo's journal entry below. Click the word that reveals his statement to Gandalf was NOT a promise — merely a social pleasantry with no legal commitment:",
      docText: "I never intended to go on any adventure. When I said Good morning to Gandalf, I meant it as a greeting, nothing more.",
      target: "greeting",
      success: "Correct. Under R2d § 2, a promise must be 'a manifestation of intention to act or refrain from acting in a specified way, so made as to justify a promisee in understanding that a commitment has been made.' A casual 'Good morning' is a greeting — it manifests no intention to act and no commitment. Compare Pappas v. Bever, where 'I intend to subscribe' was held to be a mere statement of intention, not a binding promise. Words matter in contract law."
    },
    {
      type: "dragdrop",
      irac: "Ch 2: Building Blocks of a Contract",
      prompt: "The Burglar Agreement sits on the table. Contract law uses precise terms with specific meanings. Drag each element to the correct legal category — Promise, Agreement, Bargain, or Legally Irrelevant:",
      tokens: [
        { id: "t1", label: "Bilbo shall proceed to the Lonely Mountain" },
        { id: "t2", label: "Thorin shall pay one-fourteenth of profits" },
        { id: "t3", label: "Both Bilbo and Thorin signed the document" },
        { id: "t4", label: "Bilbo privately wishes he had never signed" },
        { id: "t5", label: "Bilbo's service exchanged for Thorin's payment" }
      ],
      buckets: [
        { id: "promise", label: "Promise (R2d § 2)" },
        { id: "agreement", label: "Agreement (R2d § 3)" },
        { id: "bargain", label: "Bargain (R2d § 3)" },
        { id: "irrelevant", label: "Legally Irrelevant" }
      ],
      requiredAssignments: {
        "t1": "promise",
        "t2": "promise",
        "t3": "agreement",
        "t4": "irrelevant",
        "t5": "bargain"
      },
      success: "Excellent. Here is the hierarchy: Bilbo's commitment and Thorin's commitment are each PROMISES — manifestations of intention to act (R2d § 2). The signed document is an AGREEMENT — a manifestation of mutual assent by two persons (R2d § 3). The exchange of service for payment is a BARGAIN — an agreement to exchange a promise for a performance (R2d § 3). And Bilbo's private wishes? Under the objective standard, legally irrelevant. Notice how each term builds on the last: promises → agreement → bargain → contract.",
      failure: "Review the hierarchy in the Tome. A promise (R2d § 2) is a commitment to act. An agreement (R2d § 3) is mutual assent. A bargain is an exchange. Private thoughts are irrelevant under the objective theory. Each concept builds on the one before it."
    },
    {
      type: "mcq",
      irac: "Ch 2: Bilateral vs. Unilateral",
      prompt: "The Burglar Agreement is structured as follows: Bilbo PROMISES to serve as burglar. Thorin PROMISES to pay one-fourteenth. Both sides have made promises. Now consider a different arrangement: Thorin says 'I will pay $5,000 to whoever brings me the Arkenstone.' What is the difference?",
      options: [
        {
          text: "The Burglar Agreement is bilateral (promise for promise). The Arkenstone offer is unilateral (promise for performance — you can only accept by finding the stone, not by promising to look).",
          correct: true,
          feedback: "Correct. A bilateral contract binds both parties the moment they exchange promises. A unilateral contract binds only the offeror — the offeree accepts by performing, not by promising. As the casebook explains: in the uncle-nephew hypothetical (Hamer v. Sidway), the nephew could only accept by actually abstaining from vices for five years, not by merely promising to try. Same here: you accept Thorin's Arkenstone offer by finding it, not by saying you will look."
        },
        {
          text: "Both are bilateral — in each case, two parties are involved.",
          correct: false,
          feedback: "The number of parties doesn't determine bilateral vs. unilateral. What matters is the form of acceptance. Bilateral = promise for promise (both sides commit upfront). Unilateral = promise for performance (only the offeror commits; the offeree accepts by acting, not by promising)."
        },
        {
          text: "The Arkenstone offer is not a contract because there is no bargain yet.",
          correct: false,
          feedback: "An offer IS the beginning of a bargain — it creates a power of acceptance. Once someone finds the Arkenstone, the bargain is complete: Thorin's promise of payment in exchange for the finder's performance. The contract forms upon performance, not upon a return promise."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 1: Law vs. Equity",
      prompt: "Suppose Bilbo performs his burglar duties perfectly but Thorin refuses to pay. In the English legal tradition that contract law inherited, TWO court systems existed. What remedies could each provide?",
      options: [
        {
          text: "Courts of LAW award monetary damages (the value of Bilbo's share). Courts of EQUITY award specific performance (force Thorin to hand over the gold) when money is inadequate.",
          correct: true,
          feedback: "Correct. The dual system of law and equity — inherited from England's Court of Common Pleas (law) and Court of Chancery (equity) — persists in modern remedies. Legal remedies (damages) are the default. Equitable remedies (specific performance, injunctions, rescission) are exceptional — available only when legal remedies are inadequate. For a dragon's unique hoard, specific performance might be appropriate. For fungible goods, money damages suffice."
        },
        {
          text: "Courts of LAW award specific performance. Courts of EQUITY award monetary damages.",
          correct: false,
          feedback: "Reversed. Law = damages (money). Equity = specific performance, injunctions, rescission (compel or undo action). The Lord Chancellor developed equitable remedies precisely because monetary damages from the common law courts were sometimes insufficient."
        },
        {
          text: "The distinction no longer matters — modern courts provide whatever remedy is appropriate.",
          correct: false,
          feedback: "While most American courts have merged law and equity procedurally, the distinction in remedies persists. Equitable remedies remain 'exceptional and extraordinary' — courts prefer legal remedies and resort to equity only 'to the extent that justice requires.' This matters for jury trial rights, remedy selection, and appellate review."
        }
      ]
    },

    // ═══ PHASE 4: The Verdict ═══
    {
      type: "madlibs",
      irac: "Synthesis: The Verdict",
      prompt: "You have examined the evidence and applied the doctrine. Now draft the judicial holding — complete each blank to determine whether the Burglar Agreement is an enforceable contract:",
      template: "The Burglar Agreement between Bilbo Baggins and Thorin Oakenshield constitutes an enforceable [A]. Under R2d § 2, Bilbo's signature is an objective [B] of his intention to be bound, regardless of his private reluctance. Under R2d § 3, the exchange of burglar services for one-fourteenth of the profits is a [C] — each party gives something of value, which constitutes [D]. Under the [E] standard applied by modern American courts, Bilbo's secret wish that he had never signed is legally irrelevant. The adventure — and the contract — begins.",
      blanks: [
        {
          key: "A",
          options: ["contract", "agreement", "promise"],
          answer: "contract"
        },
        {
          key: "B",
          options: ["manifestation", "feeling", "thought"],
          answer: "manifestation"
        },
        {
          key: "C",
          options: ["bargain", "gift", "agreement"],
          answer: "bargain"
        },
        {
          key: "D",
          options: ["consideration", "reliance", "capacity"],
          answer: "consideration"
        },
        {
          key: "E",
          options: ["objective", "subjective", "equitable"],
          answer: "objective"
        }
      ],
      success: "Judgment filed. You have analyzed the Burglar Agreement using the foundational tools of contract law: R2d § 1 (contract defined), R2d § 2 (promise as manifestation), R2d § 3 (agreement and bargain), the objective standard (external conduct, not private thoughts), and the four justifications (efficiency, reliance, fairness, autonomy). The ordinary world of the Shire is behind you. Ahead lies the Call to Adventure — Module 2, where you will learn how contracts are formed through offers, acceptance, and the perils of the road.",
      failure: "Review the building blocks: A contract (R2d § 1) requires enforceable promises. A manifestation (R2d § 2) is an external expression, not a private thought. A bargain (R2d § 3) is an exchange. Consideration is what each party gives up. The objective standard judges by conduct, not intent. Check the Tome sidebar for the exact language."
    }
  ]
};
