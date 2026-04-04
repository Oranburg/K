/**
 * Module 2: The Road Goes Ever On — Mutual Assent (Ch 3–6)
 *
 * EXEMPLAR OF INTERACTIVE LEGAL EDUCATION
 *
 * Hero's Journey: Call to Adventure
 * Story: From the Unexpected Party through trolls, riddles, and Mirkwood trade.
 *
 * Formation Formula: Offer - Termination + Acceptance = Contract
 *
 * Phases:
 *   Phase 1: Scene Setting + Evidence Collection
 *   Phase 2: Mutual Assent & Offers (Ch 3-4)
 *   Phase 3: Termination & Irrevocability (Ch 5)
 *   Phase 4: Acceptance — Common Law vs. UCC (Ch 6)
 *   Phase 5: Synthesis — The Formation Formula
 *
 * Doctrine tested: Lucy v. Zehmer (objective theory), R2d § 24 (offers),
 *   R2d § 26 (ads), R2d § 33 (certainty), R2d § 36 (termination methods),
 *   R2d § 39 (counteroffers), R2d § 45 (part performance/OFUR),
 *   R2d §§ 50-59 (acceptance/mirror image), UCC § 2-207 (battle of forms),
 *   R2d § 63 (mailbox rule)
 */
var EXERCISE = {
  slug: "mod-2-road-goes-ever-on",
  title: "The Road Goes Ever On",
  kicker: "Module 2 • Mutual Assent",
  subtitle: "Bag End to Lake-town",
  chapterNum: 3,
  law: "R2d §§ 17–63; UCC § 2-207",
  narrative: "In Module 1, you learned what a contract IS. Now you will learn how one is FORMED. The formula is deceptively simple: Offer - Termination + Acceptance = Contract. But at every stop on the road from Bag End to Lake-town, something goes wrong. Offers are too vague. Deals expire. Terms clash. This module will teach you to spot exactly where formation succeeds — and where it fails.",
  image: "../../assets/images/K-unexpected-party.png",
  prevChapter: { title: "There and Back Again", url: "../mod-1-there-and-back-again/" },
  nextChapter: { title: "The Dragon's Price", url: "../mod-3-dragons-price/" },
  tome: [
    "R2d § 24: \"An offer is the manifestation of willingness to enter into a bargain, so made as to justify another person in understanding that his assent to that bargain is invited and will conclude it.\"",
    "R2d § 33: Terms must be reasonably certain — providing a basis for determining breach and giving an appropriate remedy.",
    "R2d § 36(1): Power of acceptance terminated by: (a) rejection/counteroffer, (b) lapse of time, (c) revocation, (d) death/incapacity.",
    "R2d § 45: Part performance on a unilateral contract creates an option — the offeror cannot revoke once performance begins.",
    "R2d § 59: A conditional acceptance is not acceptance — it is a counteroffer.",
    "UCC § 2-207(1): A definite, seasonable acceptance operates as acceptance even with additional/different terms, unless expressly conditional on assent to new terms.",
    "R2d § 63(a): The mailbox rule — acceptance is effective upon dispatch, not receipt.",
    "Lucy v. Zehmer: \"If the words or other acts of one of the parties have but one reasonable meaning, his undisclosed intention is immaterial.\""
  ],
  artifacts: [
    {
      id: "thorin-handshake",
      name: "Thorin's Handshake at Bag End",
      text: "At the head of the table, amid the remains of supper, Thorin Oakenshield extended his hand to Bilbo. 'Will you join our Company as burglar?' The twelve dwarves fell silent. Bilbo looked at the hand, looked at the contract on the table, and — without a word — reached out and shook it. Later he claimed he was merely being polite. The dwarves took it as acceptance. Compare Lucy v. Zehmer, where a farmer wrote a contract on a restaurant guest check after drinking. He later claimed he was joking. The Virginia Supreme Court held: conduct that would lead a reasonable person to believe agreement was reached is binding, regardless of secret intent."
    },
    {
      id: "troll-argument",
      name: "Troll Negotiation Transcript",
      text: "TOM: 'Let's roast 'em slowly.' BERT: 'No, let's sit on 'em and squash 'em into jelly!' WILLIAM: 'I says, let's boil 'em.' TOM: 'We ain't got no water, fool.' BERT: 'Make 'em into mutton pies then — who's got a recipe?' WILLIAM: 'You never agree to nothin'! There ain't no deal here and there ain't gonna be.' Compare Lefkowitz v. Great Minneapolis Surplus Store, where an ad for a fur stole at $1, 'first come first served,' WAS an offer because it specified item, price, quantity, and acceptance method. The trolls' proposals lack all of these."
    },
    {
      id: "riddle-wager",
      name: "The Riddle Game Terms",
      text: "GOLLUM: 'If precious asks, and it doesn't answer, we eats it, my preciousss. If it asks us, and we doesn't answer, then we does what it wants, eh? We shows it the way out, yes!' BILBO: 'All right!' Both parties agreed. The terms were specific: ask riddles in turns; fail to answer and lose. This is a unilateral contract — Bilbo can only 'win' by performing (answering all riddles correctly), not by promising to try. The offer terminates automatically when one party fails. And under R2d § 45, once Bilbo begins answering, Gollum cannot revoke."
    },
    {
      id: "mirkwood-forms",
      name: "Competing Trade Forms at Mirkwood",
      text: "SILVAN ELVEN COVENANT:\n• One Moon Delivery, Non-Refundable\n• Elven Silks — No Warranty\n• Fine Wine — Returnable\n• Disputes: Elvenking's Court\n\nESGAROTH TRADERS UNION:\n• Delivery Upon Request\n• Returns Within 30 Days\n• Human Furs and Crafted Ironware\n• Disputes: Master of Lake-town\n\nBoth sides proceeded to trade despite the conflicting terms. Under common law's mirror-image rule (R2d § 59), the Elves' response would be a counteroffer, killing the deal. But under UCC § 2-207, for goods transactions, a contract forms anyway — conflicting terms are 'knocked out' and replaced by UCC default provisions."
    }
  ],
  steps: [
    // ═══ PHASE 1: Scene Setting ═══
    {
      type: "info",
      irac: "The Formation Formula",
      prompt: "Contract formation follows a formula: OFFER - TERMINATION + ACCEPTANCE = CONTRACT. An offer creates a power of acceptance. That power can be destroyed (termination). If it survives, acceptance completes the deal. This module tests each element at a different stop on the road. Read the Investigation Desk evidence carefully — the cases and rules embedded in the artifacts will help you answer what follows."
    },
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all four artifacts. Each stop on the road presents a different formation problem. Pay attention to the real case comparisons embedded in each artifact — Lucy v. Zehmer, Lefkowitz, and the UCC § 2-207 framework."
    },

    // ═══ PHASE 2: Mutual Assent & Offers (Ch 3-4) ═══
    {
      type: "mcq",
      irac: "Ch 3: The Objective Standard",
      prompt: "Bilbo shook Thorin's hand but later claimed he was 'merely being polite.' In Lucy v. Zehmer, a farmer wrote a sale agreement on a guest check after drinking and later claimed he was joking. Both cases raise the same question. Under the objective theory, what controls?",
      options: [
        {
          text: "External conduct — what a reasonable person would understand from the parties' words and actions, regardless of private intent.",
          correct: true,
          feedback: "Correct. Lucy v. Zehmer: 'The mental assent of the parties is not requisite for the formation of a contract. If the words or other acts of one of the parties have but one reasonable meaning, his undisclosed intention is immaterial.' Bilbo shook hands on a specific proposal. Zehmer wrote and signed a sale agreement. Both manifested assent through conduct. Private jokes and social politeness cannot undo what a reasonable observer would understand as agreement."
        },
        {
          text: "The parties' actual intentions — if someone was joking or being polite, there is no real agreement.",
          correct: false,
          feedback: "This is the subjective view. Modern American contract law uses the objective standard. As the Lucy court stated: 'So, a person cannot set up that he was merely jesting when his conduct and words would warrant a reasonable person in believing that he intended a real agreement.' Zehmer spent 40 minutes discussing terms and signed — that is objective assent, regardless of his inner thoughts."
        },
        {
          text: "Whether alcohol was involved — contracts made while drinking are automatically voidable.",
          correct: false,
          feedback: "Intoxication is an incapacity defense (R2d § 16), but it requires the other party to have reason to know the intoxicated person could not understand the transaction. In Lucy, the court found both parties were capable of transacting. Drinking does not automatically void a contract."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 4: Offer vs. Preliminary Negotiation",
      prompt: "The trolls argued over how to cook the dwarves. Tom proposed roasting, Bert proposed squashing, William proposed boiling. None agreed. Under R2d § 24, why did no contract form?",
      options: [
        {
          text: "The proposals were preliminary negotiations, not offers — none was definite enough to invite acceptance that would conclude a bargain.",
          correct: true,
          feedback: "Correct. R2d § 24 requires an offer to be 'the manifestation of willingness to enter into a bargain, so made as to justify another person in understanding that his assent to that bargain is invited and will conclude it.' The trolls were brainstorming. R2d § 33 adds that terms must be 'reasonably certain' — providing a basis for determining breach. 'Let's roast 'em slowly' specifies no method, timing, or division. These are negotiations, not offers."
        },
        {
          text: "Each proposal was an offer that was rejected by counteroffer, terminating the prior one.",
          correct: false,
          feedback: "This assumes each proposal met the definiteness threshold of R2d § 33. It did not. 'Let's squash 'em into jelly' is not a definite proposal — it lacks essential terms. Before you can analyze rejection or counteroffer, there must first be a valid offer."
        },
        {
          text: "William's statement 'There ain't no deal here' constituted a revocation of all prior offers.",
          correct: false,
          feedback: "You can only revoke an offer that exists. Since no valid offer was ever made (the proposals lacked definiteness under R2d § 33), there was nothing to revoke. William was simply stating the obvious: no agreement was ever reached."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 4: When IS an Advertisement an Offer?",
      prompt: "The trolls post a sign: 'MUTTON TONIGHT — BEST OFFER.' In Lefkowitz v. Great Minneapolis Surplus Store, a newspaper ad reading '1 Black Lapin Stole, $1, First Come First Served' WAS held to be an offer. What distinguishes these two advertisements?",
      options: [
        {
          text: "Lefkowitz specified the item, price, quantity, and acceptance method. The trolls' sign has none of these — it is merely an invitation to deal.",
          correct: true,
          feedback: "Correct. Under R2d § 26 cmt. b, advertisements are ordinarily NOT offers. Lefkowitz is the exception: the ad specified (1) exact item (Black Lapin Stole), (2) exact price ($1), (3) quantity (1), and (4) manner of acceptance ('First Come First Served,' which solved the oversubscription problem). The trolls' sign — 'MUTTON TONIGHT — BEST OFFER' — has no price, no quantity, and no acceptance method. It invites negotiation, not acceptance."
        },
        {
          text: "The trolls' sign is an offer because it communicates willingness to sell mutton.",
          correct: false,
          feedback: "Willingness is necessary but not sufficient. An offer must contain reasonably certain terms (R2d § 33) and justify the offeree in understanding that acceptance will conclude the bargain (R2d § 24). 'BEST OFFER' explicitly invites further negotiation — the opposite of a definite offer."
        },
        {
          text: "Neither is an offer — all advertisements are invitations to deal, with no exceptions.",
          correct: false,
          feedback: "The general rule is correct (R2d § 26 cmt. b), but Lefkowitz established the exception. When an ad specifies item, price, quantity, and acceptance method with sufficient definiteness, it CAN be an offer. The question is always: would a reasonable person understand this ad as inviting acceptance that would conclude the bargain?"
        }
      ]
    },

    // ═══ PHASE 3: Termination & Irrevocability (Ch 5) ═══
    {
      type: "redline",
      irac: "Ch 5: Termination by Lapse",
      prompt: "Gollum's riddle game has built-in termination rules. Click the phrase in his proposal that creates the automatic termination condition — the event that kills the power of acceptance:",
      docText: "If precious asks, and it doesn't answer, we eats it. If it asks us, and we doesn't answer, then we shows it the way out.",
      target: "doesn't answer",
      success: "Correct. 'Doesn't answer' is the termination event. Under R2d § 36(1)(b), offers terminate by lapse of time. Here, the 'time' is measured in riddles: fail to answer and the deal dies. R2d § 41 provides that if no time is specified, offers lapse after a 'reasonable time.' In a riddle game, 'reasonable time' means the time to answer one riddle. This is an express condition of termination built into the offer's own terms."
    },
    {
      type: "mcq",
      irac: "Ch 5: Counteroffers",
      prompt: "Suppose instead of answering Gollum's riddle, Bilbo says: 'I'll play your game, but if I win, you must also give me your ring.' Under R2d § 39, what has Bilbo done?",
      options: [
        {
          text: "Made a counteroffer — proposing a substitute bargain that terminates Gollum's original offer. Gollum's original terms are dead unless he renews them.",
          correct: true,
          feedback: "Correct. R2d § 39(1): 'A counter-offer is an offer made by an offeree to his offeror relating to the same matter as the original offer and proposing a substituted bargain differing from that proposed by the original offer.' Bilbo's added term (give me your ring) changes the deal. Under R2d § 39(2), a counteroffer terminates the original power of acceptance. If Gollum rejects, Bilbo cannot fall back on the original terms — they are dead."
        },
        {
          text: "Made a valid acceptance with a request for additional terms — the original game stands plus the ring.",
          correct: false,
          feedback: "Under R2d § 61, an acceptance that merely REQUESTS a change is still valid. But Bilbo is not requesting — he is CONDITIONING his participation on getting the ring. That makes it a counteroffer under R2d § 59: 'A reply to an offer which purports to accept it but is conditional on the offeror's assent to terms additional to or different from those offered is not an acceptance but is a counter-offer.'"
        },
        {
          text: "Nothing legally significant — Bilbo is just negotiating, and the original offer remains open.",
          correct: false,
          feedback: "A counteroffer is legally significant — it terminates the original offer (R2d § 39(2)). This distinguishes counteroffers from mere inquiries. If Bilbo had said 'Would you also consider putting up the ring?' without conditioning his participation, that would be an inquiry (not a counteroffer) and the original offer would survive."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 5: Irrevocability (OFUR)",
      prompt: "Midway through the riddle game, Gollum wants to quit. He made a unilateral offer (promise for performance). Bilbo has already answered several riddles. Under R2d § 45, can Gollum revoke?",
      options: [
        {
          text: "No — Bilbo's part performance created an option contract. Gollum cannot revoke once Bilbo has begun the invited performance.",
          correct: true,
          feedback: "Correct. R2d § 45: 'Where an offer invites an offeree to accept by rendering a performance, an option contract is created when the offeree tenders or begins the invited performance.' This is the 'U' in OFUR — the four methods of making offers irrevocable: Option contracts (R2d § 25), Firm offers (UCC § 2-205, merchants only, 3-month max), Unilateral part-performance (R2d § 45), and Reliance (R2d § 87(2)). Bilbo is protected by the third method."
        },
        {
          text: "Yes — Gollum is the offeror and the 'master of the bargain.' He can revoke anytime before full performance.",
          correct: false,
          feedback: "The 'master of the bargain' principle applies to revocation BEFORE performance begins. Once the offeree starts performing on a unilateral contract, R2d § 45 creates an option — the offeror is locked in. This prevents the injustice of revoking after someone has partially performed a task they can only 'accept' by completing."
        },
        {
          text: "It depends on whether there was a writing — oral offers are always freely revocable.",
          correct: false,
          feedback: "The presence or absence of a writing has no bearing on revocability under R2d § 45. Part performance creates an option contract regardless of form. Many unilateral contracts (reward offers, riddle games, employment challenges) are oral and become irrevocable through part performance."
        }
      ]
    },

    // ═══ PHASE 4: Acceptance (Ch 6) ═══
    {
      type: "dragdrop",
      irac: "Ch 6: Battle of the Forms (UCC § 2-207)",
      prompt: "The Elven merchants and Lake-town traders exchanged conflicting written forms but proceeded to trade goods. Under UCC § 2-207, what happens to each term? Drag to the correct outcome:",
      tokens: [
        { id: "t1", label: "Disputes resolved by the Elvenking" },
        { id: "t2", label: "Disputes resolved by Master of Lake-town" },
        { id: "t3", label: "Elven Silks — No Warranty disclaimer" },
        { id: "t4", label: "Returns Within 30 Days (Lake-town only)" },
        { id: "t5", label: "Exchange: silks and wine for furs and ironware" }
      ],
      buckets: [
        { id: "knockout", label: "Knocked Out (conflicting terms cancel)" },
        { id: "additional", label: "Additional Term (proposal only)" },
        { id: "survives", label: "Part of the Contract" }
      ],
      requiredAssignments: {
        "t1": "knockout",
        "t2": "knockout",
        "t3": "additional",
        "t4": "additional",
        "t5": "survives"
      },
      success: "Correct. Under the knock-out rule (majority approach), conflicting 'different terms' — like two forum selection clauses — cancel each other out and are replaced by UCC gap-filler provisions. Neither the Elvenking nor the Master of Lake-town gets jurisdiction. The 'No Warranty' and 'Returns' clauses appear in only one form — they are 'additional terms' under § 2-207(2). Between merchants, they become part of the contract UNLESS they materially alter the deal, the offer expressly limits acceptance to its terms, or the offeror objects within a reasonable time. The core exchange (the goods both sides agreed to trade) survives because it was never in dispute. Compare Flender Corp. v. Tippins: conflicting forum clauses (Vienna vs. Chicago) were both knocked out.",
      failure: "Review UCC § 2-207: (1) Conflicting 'different terms' knock each other out. (2) 'Additional terms' in only one form are proposals — becoming part of the contract between merchants unless they materially alter. (3) Terms both sides agreed to always survive."
    },
    {
      type: "mcq",
      irac: "Ch 6: Mirror Image Rule vs. UCC",
      prompt: "If this were a common law transaction (land, not goods), and the Elves' acceptance contained different terms, what would the mirror-image rule (R2d § 59) require?",
      options: [
        {
          text: "The Elves' response is a counteroffer, not an acceptance — no contract forms. The original offer is destroyed.",
          correct: true,
          feedback: "Correct. R2d § 59: 'A reply to an offer which purports to accept it but is conditional on the offeror's assent to terms additional to or different from those offered is not an acceptance but is a counter-offer.' At common law, acceptance must MIRROR the offer exactly. Any deviation kills the deal. The UCC created § 2-207 precisely to avoid this harsh result in commercial goods transactions — recognizing that merchants routinely exchange forms with non-matching boilerplate."
        },
        {
          text: "A contract forms on the last document sent before performance began.",
          correct: false,
          feedback: "This is the 'last-shot rule' — a minority approach under UCC § 2-207 for conduct-based contracts, not the common law rule. Common law is harsher: different terms = counteroffer = original offer terminated."
        },
        {
          text: "The court splits the difference between the competing terms.",
          correct: false,
          feedback: "Courts do not 'split the difference.' Under common law, it is binary: either the acceptance mirrors the offer (contract forms) or it doesn't (counteroffer). The UCC knock-out rule is the closest to a middle ground, but it replaces conflicting terms with statutory defaults rather than splitting."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 6: The Mailbox Rule",
      prompt: "Suppose a Lake-town trader mails an acceptance of the Elves' offer on Monday. The Elves mail a revocation on Tuesday. The revocation arrives Wednesday. The acceptance arrives Thursday. Is there a contract?",
      options: [
        {
          text: "Yes — under the mailbox rule (R2d § 63), acceptance is effective upon DISPATCH (Monday), which is before the revocation was even sent (Tuesday).",
          correct: true,
          feedback: "Correct. R2d § 63(a): acceptance is effective upon dispatch — the moment the trader dropped the letter in the mail on Monday. The Elves' revocation, by contrast, is effective only upon RECEIPT (R2d § 42). Even though the revocation arrived first (Wednesday before Thursday), the contract was already formed on Monday when the acceptance was dispatched. This asymmetry heavily favors acceptors and is one of the most frequently tested rules on bar exams."
        },
        {
          text: "No — the revocation arrived first (Wednesday), so it terminated the offer before the acceptance arrived (Thursday).",
          correct: false,
          feedback: "This applies the receipt rule to acceptance — but R2d § 63(a) uses the DISPATCH rule for acceptances. The acceptance was effective Monday (dispatch), beating the revocation regardless of arrival order. Offers, revocations, rejections, and counteroffers all use the receipt rule. Only acceptance uses dispatch."
        },
        {
          text: "It depends on which letter the Elves opened first.",
          correct: false,
          feedback: "The order of opening is irrelevant. What matters is the legal rule: acceptance effective on dispatch (R2d § 63), revocation effective on receipt (R2d § 42). Monday dispatch beats Tuesday send and Wednesday receipt. The contract formed before the revocation existed."
        }
      ]
    },

    // ═══ PHASE 5: Synthesis ═══
    {
      type: "madlibs",
      irac: "Synthesis: The Formation Formula",
      prompt: "You have traveled from Bag End to Lake-town. At every stop, the formation formula was tested. Complete the synthesis:",
      template: "Contract formation requires an [A] — a definite proposal inviting acceptance (R2d § 24). The proposal must contain [B] terms (R2d § 33). The offeree's power of acceptance can be destroyed by rejection, [C], lapse, revocation, or death (R2d § 36). But once performance begins on a unilateral offer, R2d § 45 makes the offer [D]. Acceptance must [E] the offer at common law, but under UCC § 2-207, contracts form even with non-matching terms. And under the mailbox rule, acceptance is effective upon [F].",
      blanks: [
        { key: "A", options: ["offer", "promise", "invitation"], answer: "offer" },
        { key: "B", options: ["reasonably certain", "perfectly precise", "written"], answer: "reasonably certain" },
        { key: "C", options: ["counteroffer", "consideration", "modification"], answer: "counteroffer" },
        { key: "D", options: ["irrevocable", "bilateral", "void"], answer: "irrevocable" },
        { key: "E", options: ["mirror", "exceed", "approximate"], answer: "mirror" },
        { key: "F", options: ["dispatch", "receipt", "opening"], answer: "dispatch" }
      ],
      success: "The formation formula is complete: Offer (definite, certain) - Termination (rejection, counteroffer, lapse, revocation, death) + Acceptance (mirror at common law, flexible under UCC, effective on dispatch) = Contract. From Thorin's handshake to the Mirkwood trading post, every stop tested a different element. The road goes ever on — but now you know how the deals along the way are made. Ahead: Module 3, where you will learn what makes a deal STICK — consideration and its alternatives.",
      failure: "Review: An offer must be definite with reasonably certain terms. Power of acceptance is fragile — destroyed by counteroffer (among other things). Part performance makes unilateral offers irrevocable. Common law requires mirror-image acceptance. The mailbox rule makes acceptance effective on dispatch, not receipt."
    }
  ]
};
