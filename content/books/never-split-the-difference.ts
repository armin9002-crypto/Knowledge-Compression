import type { Book, ContentBlock, CurriculumSection } from "@/lib/types";
import { estimateSectionsMinutes } from "@/content/utils/readingTime";

type LessonInput = {
  id: string;
  title: string;
  eyebrow: string;
  minutes: number;
  summary: string;
  objectives: string[];
  concepts: string[];
  body: string[];
  support: ContentBlock[];
  whyThisMatters: string;
  practicalApplication: string;
  commonMistakes: string[];
  misconceptions: {
    misconception: string;
    correction: string;
  }[];
  applicationLens: string;
  anchors: string[];
  takeaways: string[];
  examples: string[];
  relatedSections?: string[];
};

function lesson(input: LessonInput): CurriculumSection {
  return {
    id: input.id,
    title: input.title,
    eyebrow: input.eyebrow,
    estimatedMinutes: input.minutes,
    summary: input.summary,
    learningObjectives: input.objectives,
    keyConcepts: input.concepts,
    blocks: [
      ...input.body.map(
        (text): ContentBlock => ({
          type: "paragraph",
          text
        })
      ),
      ...input.support,
      {
        type: "callout",
        id: `${input.id}-application-lens`,
        title: "Application lens",
        text: input.applicationLens
      },
      {
        type: "retentionAnchor",
        title: "Retention anchor",
        anchor: input.anchors[0]
      }
    ],
    appliedExamples: input.examples,
    whyThisMatters: input.whyThisMatters,
    practicalApplication: input.practicalApplication,
    commonMistakes: input.commonMistakes,
    misconceptions: input.misconceptions,
    retentionAnchors: input.anchors,
    takeaways: input.takeaways,
    relatedSections: input.relatedSections
  };
}

const neverSplitSections: CurriculumSection[] = [
  lesson({
    id: "negotiation-emotional-before-rational",
    title: "Negotiation Is Emotional Before It Is Rational",
    eyebrow: "Foundation",
    minutes: 35,
    summary:
      "The book reframes negotiation as emotional information discovery rather than a purely logical exchange of offers.",
    objectives: [
      "Understand why emotion shapes negotiation before logic",
      "See listening as a strategic advantage",
      "Recognize negotiation as uncovering constraints, fears, and interests"
    ],
    concepts: ["emotion", "information discovery", "fairness", "listening"],
    body: [
      "Never Split the Difference begins by rejecting the fantasy that negotiation is mainly an exchange of rational offers. In real conversations, people are moved by fear, pride, identity, perceived fairness, distrust, urgency, and the need to feel respected. Numbers matter, but numbers are interpreted through emotion. A salary offer can feel insulting even if it is market-based. A vendor discount can feel inadequate if the buyer feels ignored. A family request can become a fight because the surface issue is carrying years of emotional history.",
      "Facts alone rarely persuade a defensive person because defensiveness changes what facts mean. When someone feels threatened, corrected, cornered, or disrespected, information is filtered through self-protection. This is why more explanation can make a conflict worse. The other person is not simply missing data. They may be protecting autonomy, status, safety, or fairness.",
      "Voss's central move is to treat negotiation as a process of uncovering. The goal is not to overpower the other side into saying yes. The goal is to learn what prevents agreement, what constraints are hidden, what emotions are active, what the other side values, and what kind of decision they can actually make. Listening becomes tactical because it reveals the map.",
      "A compensation conversation illustrates this. An employee may arrive focused on salary, while the manager is worried about internal bands, timing, retention risk, budget approvals, and precedent. If the employee only argues value, they may miss the actual constraints. If they listen carefully and ask calibrated questions, they can discover what needs to be true for movement to happen.",
      "The same pattern appears in vendor pricing, real estate, workplace conflict, and family disagreement. A buyer may say the price is too high when the deeper concern is implementation risk. A seller may resist a lower offer because they fear being taken advantage of. A spouse may argue about logistics when the real issue is feeling unsupported. Negotiation starts improving when the conversation moves from positions to the emotional and practical structure underneath.",
      "The key distinction is that negotiation is not only about getting someone to say yes. It is about understanding what prevents a meaningful yes. A premature yes can hide resistance, confusion, or lack of authority. A slower conversation that surfaces emotion and constraints may produce a better outcome than a quick agreement built on pressure."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Agreement versus understanding",
        not: "Trying to push the other person into saying yes as quickly as possible.",
        but: "Discovering what emotions, constraints, and interests must be understood before agreement can be real."
      },
      {
        type: "expandedExample",
        scenario:
          "An employee asks for a compensation adjustment after taking on a larger role.",
        defaultApproach:
          "Present achievements, ask for a number, and argue harder when the manager hesitates.",
        betterApproach:
          "Acknowledge possible constraints, ask what would need to be true for approval, and listen for budget, timing, and authority issues.",
        whyItWorks:
          "The employee shifts from pushing a position to uncovering the real path to a decision."
      },
      {
        type: "warning",
        title: "Facts do not land the same inside threat",
        text: "When someone feels cornered, even accurate information can sound like pressure. Lowering threat often comes before making the strongest case."
      }
    ],
    whyThisMatters:
      "Negotiations fail when people treat visible positions as the whole truth and miss the emotional logic underneath them.",
    practicalApplication:
      "Before making your strongest argument, slow down and identify what the other side may fear, need, misunderstand, or be unable to say directly.",
    commonMistakes: [
      "Assuming logic will persuade a defensive person",
      "Treating the first stated position as the real issue",
      "Pushing for yes before understanding what blocks commitment"
    ],
    misconceptions: [
      {
        misconception: "Negotiation is mainly about being tougher with offers.",
        correction:
          "Strong negotiation begins with emotional and informational clarity. Offers matter more after the map is visible."
      }
    ],
    applicationLens:
      "Enter important conversations looking for the hidden map: emotions, constraints, decision rights, fears, deadlines, and definitions of fairness.",
    anchors: [
      "Negotiation is emotional information discovery before it is rational deal-making.",
      "The real obstacle is often what prevents agreement, not the first number on the table."
    ],
    takeaways: [
      "Emotion shapes how offers are heard.",
      "Listening is a strategic advantage.",
      "The goal is to uncover, not overpower."
    ],
    examples: [
      "A vendor negotiation may be about risk more than price.",
      "A workplace conflict may be about respect more than the stated task.",
      "A real estate deal may turn on timing, fear, or alternatives."
    ],
    relatedSections: ["tactical-empathy-understanding-without-agreeing", "calibrated-questions-solve-with-you"]
  }),
  lesson({
    id: "tactical-empathy-understanding-without-agreeing",
    title: "Tactical Empathy: Understanding Without Agreeing",
    eyebrow: "Core Skill",
    minutes: 36,
    summary:
      "Tactical empathy is the disciplined ability to understand and communicate the other side's perspective without surrendering your own interests.",
    objectives: [
      "Define tactical empathy accurately",
      "Distinguish empathy from agreement or weakness",
      "Use understanding to lower threat and open problem-solving"
    ],
    concepts: ["tactical empathy", "validation", "threat reduction", "perspective"],
    body: [
      "Tactical empathy is the center of the book. It means understanding the other person's world so clearly that you can communicate from inside it. This does not mean agreeing, conceding, becoming soft, or prioritizing their interests over yours. It means seeing the emotional and practical reality they are operating within and showing them that you see it.",
      "People become more flexible when they feel understood because the need to defend themselves decreases. If a buyer believes you do not understand budget pressure, they repeat the objection. If an employee believes a manager does not understand frustration, the frustration gets louder. If a client believes a proposal ignores risk, they resist even good ideas. Recognition lowers the temperature.",
      "Tactical empathy works because it separates acknowledgment from surrender. A manager can say, it sounds like the workload has felt unsustainable, without promising every requested change. A buyer can say, it seems like margin pressure is real on your side, without accepting the first price. An employee can say, it sounds like compensation decisions have to fit a process, without abandoning the ask.",
      "This differs from being nice. Niceness often avoids tension. Tactical empathy moves toward tension with precision. It names what is present so the conversation can become clearer. It is also different from emotional caretaking. You are not responsible for removing every discomfort. You are responsible for understanding enough to negotiate with reality rather than with your fantasy of the other side.",
      "In practice, tactical empathy often begins before the ask. If a client is likely worried about cost, risk, or internal approval, those concerns should be understood before the proposal is defended. If a manager is likely constrained by budget, timing, or precedent, those constraints should be explored before the employee pushes for a number. Understanding the other side's world gives you better language and better timing.",
      "Ethically, tactical empathy should make conversations more truthful. It becomes manipulative when empathy language is used as a mask for pressure. The test is whether you are genuinely trying to understand the other person's constraints and agency or merely performing understanding to get compliance."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Empathy is not agreement",
        not: "Accepting the other side's position or giving up your own interests.",
        but: "Understanding their perspective well enough to communicate accurately and lower defensiveness."
      },
      {
        type: "expandedExample",
        scenario:
          "A client pushes back that a proposal is too expensive.",
        defaultApproach:
          "Defend the price immediately and list features until the client feels sold to.",
        betterApproach:
          "Acknowledge that the cost may feel risky, ask what concern is largest, and uncover whether the issue is budget, trust, timing, or internal approval.",
        whyItWorks:
          "The conversation shifts from price combat to understanding the real constraint."
      },
      {
        type: "misconception",
        misconception: "Empathy in negotiation means being weak.",
        correction:
          "Tactical empathy can be firm. It lowers threat so reality can be discussed more accurately.",
        whyItMatters:
          "Without this distinction, negotiators choose aggression or avoidance and miss the power of clear understanding."
      }
    ],
    whyThisMatters:
      "Tactical empathy is the foundation that makes the book's tools ethical and effective rather than mechanical.",
    practicalApplication:
      "Before arguing your side, state the other side's likely concern in a way they would recognize as fair.",
    commonMistakes: [
      "Confusing empathy with concession",
      "Using empathy phrases mechanically without listening",
      "Avoiding hard issues in the name of being nice"
    ],
    misconceptions: [
      {
        misconception: "Understanding the other side gives them power over you.",
        correction:
          "Understanding gives you a better map. It does not require giving up your boundaries or goals."
      }
    ],
    applicationLens:
      "Ask whether your next sentence proves you understand the other person's world or simply proves you want something from them.",
    anchors: [
      "Tactical empathy is understanding without surrender.",
      "People become more flexible when they no longer have to fight to feel understood."
    ],
    takeaways: [
      "Empathy lowers threat.",
      "Acknowledgment is not agreement.",
      "Understanding improves strategy and ethics."
    ],
    examples: [
      "A manager validates an upset employee before discussing options.",
      "A buyer acknowledges a seller's margin pressure without accepting price.",
      "An employee recognizes budget constraints while still negotiating compensation."
    ],
    relatedSections: ["labeling-naming-emotion", "accusation-audits-defusing-negativity"]
  }),
  lesson({
    id: "mirroring-small-tool-outsized-impact",
    title: "Mirroring: The Smallest Tool With Outsized Impact",
    eyebrow: "Listening Tool",
    minutes: 33,
    summary:
      "Mirroring selectively repeats important words to encourage elaboration, build rhythm, and uncover information without confrontation.",
    objectives: [
      "Understand what mirroring is and why it works",
      "Use mirroring to invite elaboration without sounding robotic",
      "Recognize when mirroring can become manipulative or unnatural"
    ],
    concepts: ["mirroring", "elaboration", "attention", "conversation momentum"],
    body: [
      "Mirroring is one of the smallest tools in the book: repeat a few important words the other person just said, usually with a curious tone. If they say the timeline is impossible, you might say, the timeline is impossible? If they say the price is too high, you might say, too high? The point is not cleverness. It is invitation.",
      "Mirroring works because people often continue when they feel heard. A mirror signals that a phrase mattered and gives the speaker a low-pressure opening to explain. It also slows the negotiator down. Instead of rushing to answer, defend, or counter, the mirror keeps the other person talking. More talk often means more information.",
      "The psychology is subtle. Mirroring creates attention, similarity, and conversational momentum. The other person hears their own language, not your interpretation. That reduces friction. They do not have to argue with your framing because you have not added much framing yet. You have simply reflected a meaningful piece of theirs.",
      "The tool is especially useful when a phrase seems loaded. You need approval? That creates risk? The deadline is fixed? You are worried about implementation? Each mirror invites the other person to expand the map. Maybe approval means a finance committee. Maybe risk means a prior failed vendor. Maybe fixed means flexible if another stakeholder agrees. The mirror finds hidden structure.",
      "Good mirroring is selective. It is not parroting everything. Repeating every sentence sounds strange and disrespectful. The skill is choosing the words that appear emotionally or strategically important, then offering them back with calm curiosity. Tone matters. A mirror spoken with sarcasm becomes challenge. A mirror spoken with pressure becomes interrogation.",
      "Mirroring can backfire when it is used mechanically or as a trick. If the other person senses you are running a script, trust drops. The ethical use of mirroring is to understand, not to extract. You are creating room for them to clarify their own meaning. Used that way, it is less a tactic than disciplined listening."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Mirroring is not parroting",
        not: "Repeating everything the other person says in a mechanical way.",
        but: "Selectively reflecting important language to invite clarification and keep information flowing."
      },
      {
        type: "expandedExample",
        scenario:
          "A vendor says the proposed implementation timeline creates too much risk.",
        defaultApproach:
          "Argue that the timeline is realistic and defend the project plan.",
        betterApproach:
          "Mirror the phrase: too much risk? Then listen for what risk means in their environment.",
        whyItWorks:
          "The mirror uncovers whether the concern is staffing, prior experience, technical uncertainty, or internal politics."
      },
      {
        type: "application",
        context: "Using a mirror naturally",
        steps: [
          "Listen for a phrase that carries emotion, constraint, or ambiguity.",
          "Repeat one to three key words with calm curiosity.",
          "Let silence do some work instead of explaining the mirror."
        ],
        result:
          "The other side often explains more than they would after a direct challenge."
      }
    ],
    whyThisMatters:
      "Mirroring gives negotiators a simple way to slow down, listen better, and uncover information without escalating.",
    practicalApplication:
      "Use mirrors when a word or phrase seems important but unclear, especially around price, timing, approval, risk, or fairness.",
    commonMistakes: [
      "Mirroring too often",
      "Using a sarcastic or challenging tone",
      "Mirroring as a script rather than a listening move"
    ],
    misconceptions: [
      {
        misconception: "Mirroring is a trick to make people talk.",
        correction:
          "Mirroring is most useful when it is genuine attention directed at language that needs clarification."
      }
    ],
    applicationLens:
      "When you feel the urge to answer too quickly, mirror the most important phrase instead and see what information appears.",
    anchors: [
      "A good mirror invites the other person to reveal the map in their own words.",
      "Mirroring is selective reflection, not verbal copying."
    ],
    takeaways: [
      "Mirrors encourage elaboration.",
      "Tone and selectivity matter.",
      "Mirroring protects against premature arguing."
    ],
    examples: [
      "Too expensive?",
      "You need approval?",
      "That creates risk?",
      "The timeline is impossible?"
    ],
    relatedSections: ["labeling-naming-emotion", "calibrated-questions-solve-with-you"]
  }),
  lesson({
    id: "labeling-naming-emotion",
    title: "Labeling: Naming the Emotion to Lower Resistance",
    eyebrow: "Emotional Clarity",
    minutes: 36,
    summary:
      "Labeling offers a tentative name for the other person's emotion or concern, helping reduce intensity and surface hidden issues.",
    objectives: [
      "Understand what labeling is and why it lowers resistance",
      "Distinguish labels from assumptions or accusations",
      "Use labels to surface concerns in tense conversations"
    ],
    concepts: ["labeling", "emotion", "resistance", "validation"],
    body: [
      "Labeling is the practice of naming what the other person may be feeling or experiencing. It often begins with language like it seems like, it sounds like, or it looks like. The tentative form matters. A good label does not announce what someone feels. It offers a careful read that they can accept, refine, or reject.",
      "Labels work because unacknowledged emotion keeps demanding attention. If a client is worried about risk, a manager feels boxed in, or a buyer feels pressured, the conversation will be shaped by that emotion even if no one names it. A label brings the emotion into the open without making it an argument.",
      "Naming emotion can reduce its intensity because it shows the other person that you are tracking their experience. It sounds like the main concern is risk. It seems like this deadline feels unrealistic. It looks like there is hesitation around the cost. These statements do not solve the problem immediately, but they can lower the need for the other person to keep proving that the problem exists.",
      "Labeling is different from assuming. Bad labeling tells people what they feel. You are scared, you are being defensive, or you do not trust us will often provoke resistance because it sounds like accusation. Good labeling is humble. It leaves room for correction: it sounds like there may be concern about whether this will work under the timeline.",
      "Labels can also reveal hidden structure. If you say, it seems like approval is the sticking point, the other person may correct you: approval is not the problem, implementation capacity is. That correction is valuable. A wrong label offered respectfully can still improve the map because it invites the other person to clarify.",
      "Ethically, labeling should increase understanding. It should not be used to corner someone into admitting emotion or to pretend intimacy. The other person should feel more accurately seen, not analyzed. The tone should be calm, observant, and nonjudgmental."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Labeling is not diagnosing",
        not: "Declaring what the other person feels as if you have authority over their inner life.",
        but: "Offering a tentative read that helps them clarify what is actually happening."
      },
      {
        type: "expandedExample",
        scenario:
          "A manager resists a team member's proposal for a new process.",
        defaultApproach:
          "Argue the merits and treat resistance as lack of understanding.",
        betterApproach:
          "Label the likely concern: it sounds like the risk is disrupting a workflow that is already under pressure.",
        whyItWorks:
          "The label acknowledges the manager's world and opens a clearer conversation about the real objection."
      },
      {
        type: "misconception",
        misconception: "A good label must be perfectly accurate.",
        correction:
          "A respectful label can be useful even when corrected because the correction reveals better information.",
        whyItMatters:
          "This makes labeling a learning tool rather than a performance of mind reading."
      }
    ],
    whyThisMatters:
      "Negotiations often stall because emotion is active but unnamed. Labeling gives emotion a safe place in the conversation.",
    practicalApplication:
      "Use labels when you sense concern, hesitation, frustration, pressure, or distrust shaping the conversation beneath the words.",
    commonMistakes: [
      "Telling people what they feel",
      "Using labels in a patronizing tone",
      "Skipping labels because emotion feels inefficient"
    ],
    misconceptions: [
      {
        misconception: "Emotion should be kept out of serious negotiation.",
        correction:
          "Emotion is already in the room. Labeling helps it become discussable instead of covertly controlling the conversation."
      }
    ],
    applicationLens:
      "When resistance appears, label the emotion or concern before solving. The label may unlock the actual obstacle.",
    anchors: [
      "Good labeling names emotion tentatively enough that the other person can correct it.",
      "Naming emotion can lower the need to defend it."
    ],
    takeaways: [
      "Labels reduce resistance by showing understanding.",
      "Tentative language preserves dignity.",
      "Even corrected labels can improve information."
    ],
    examples: [
      "It sounds like the main concern is risk.",
      "It seems like this deadline feels unrealistic.",
      "It looks like there is hesitation around the cost."
    ],
    relatedSections: ["accusation-audits-defusing-negativity", "voice-tone-silence-control"]
  }),
  lesson({
    id: "accusation-audits-defusing-negativity",
    title: "Accusation Audits and Defusing Negativity",
    eyebrow: "Defusing",
    minutes: 35,
    summary:
      "Accusation audits name predictable negative perceptions upfront so they lose some power before hard conversation begins.",
    objectives: [
      "Understand what an accusation audit is",
      "Use it to reduce defensiveness without self-sabotage",
      "Recognize when unspoken objections are controlling the room"
    ],
    concepts: ["accusation audit", "defensiveness", "objection", "relief"],
    body: [
      "An accusation audit is the deliberate naming of negative things the other person may already be thinking about you, your request, or the situation. You may feel like I am pushing too hard here. This may sound like I am asking for a lot. You might be wondering whether this is worth the cost. The move is counterintuitive because it brings objections forward before the other person says them.",
      "The reason it works is that unspoken objections often control the conversation. If the other person thinks you are ignoring constraints, they hear every proposal through that suspicion. If a client thinks a price is excessive, they may discount your explanation before it begins. If a family member thinks you are being selfish, logistics will not be the real debate.",
      "Naming the negative perception can create psychological relief. The other person no longer has to carry the objection alone or fight to make it visible. You have shown that you understand how the situation might look from their side. This does not make the objection disappear, but it reduces the emotional need to defend it aggressively.",
      "An accusation audit is not an apology spiral. You are not confessing to being wrong about everything, weakening your position, or preemptively surrendering. You are surfacing predictable resistance so it can be discussed. The tone should be calm and matter-of-fact, not self-punishing.",
      "This tool is useful before difficult asks. An employee seeking a compensation adjustment might say, this may sound like a lot to raise right now, and you may be thinking about internal bands. A consultant raising fees might say, you may wonder whether this price creates more risk than value. A leader announcing change might say, some of this may feel like another initiative being added to an already full plate.",
      "The risk is overuse or melodrama. If the audit becomes too long, it can create concerns the other person did not have. If it sounds scripted, it can feel manipulative. The best accusation audits name the most likely negative perceptions with precision, then create room for the other person to respond."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Accusation audit is not apology spiral",
        not: "Listing flaws until your own position collapses.",
        but: "Naming predictable negative perceptions so they can be addressed before they harden."
      },
      {
        type: "expandedExample",
        scenario:
          "A consultant presents a higher fee to a long-term client.",
        defaultApproach:
          "Hide discomfort and justify the price only after the client objects.",
        betterApproach:
          "Begin by naming the likely concern: this may feel like a big jump, and you may wonder whether the value has changed enough to justify it.",
        whyItWorks:
          "The consultant shows awareness of the client's possible reaction and reduces the feeling of being sold to."
      },
      {
        type: "application",
        context: "Building a precise accusation audit",
        steps: [
          "Identify the strongest negative interpretation the other person may hold.",
          "State it calmly without dramatizing or defending.",
          "Pause long enough for correction, relief, or elaboration."
        ],
        result:
          "The hard issue becomes discussable before it turns into resistance."
      }
    ],
    whyThisMatters:
      "Hard conversations often fail because predictable objections are ignored until they become defensive positions.",
    practicalApplication:
      "Use accusation audits before high-friction asks, especially when the other side may feel pressured, ignored, or skeptical.",
    commonMistakes: [
      "Creating a long list of negatives that overwhelms the conversation",
      "Using the audit as an apology instead of a clarity tool",
      "Skipping predictable objections because they feel uncomfortable"
    ],
    misconceptions: [
      {
        misconception: "Naming the negative makes it more persuasive.",
        correction:
          "Naming a concern respectfully often reduces its hidden power because the other person no longer has to fight to surface it."
      }
    ],
    applicationLens:
      "Before a difficult ask, ask what the other person might accuse you of privately. Then name the most relevant concern with humility.",
    anchors: [
      "Unspoken objections often control the conversation.",
      "An accusation audit surfaces resistance before it hardens."
    ],
    takeaways: [
      "Accusation audits name likely negative perceptions.",
      "They create relief when done precisely.",
      "They should not become self-sabotage."
    ],
    examples: [
      "You may feel like I am pushing too hard here.",
      "This may sound like I am asking for a lot.",
      "You might think I am ignoring the constraints."
    ],
    relatedSections: ["calibrated-questions-solve-with-you", "tactical-empathy-understanding-without-agreeing"]
  }),
  lesson({
    id: "calibrated-questions-solve-with-you",
    title: "Calibrated Questions: Making the Other Side Solve With You",
    eyebrow: "Question Design",
    minutes: 38,
    summary:
      "Calibrated questions use open how and what language to reveal constraints, invite collaboration, and shift problem-solving without confrontation.",
    objectives: [
      "Understand calibrated questions as collaborative pressure",
      "Use how and what questions to reveal constraints",
      "Avoid disguised arguments masquerading as questions"
    ],
    concepts: ["calibrated questions", "collaboration", "constraints", "problem-solving"],
    body: [
      "Calibrated questions are open questions designed to make the other side think with you. They often begin with how or what: How can we make this work with the timeline? What would need to be true for this to be approved? How should I think about that constraint? What is the biggest obstacle from your side? These questions slow conflict and invite the other person into problem-solving.",
      "The power of calibrated questions is that they reduce confrontation while still applying pressure. Instead of saying, your timeline is impossible, you ask, how can we make this work with the timeline? Instead of saying, that price does not work, you ask, how am I supposed to do that under these constraints? The other person has to engage the problem rather than merely reject your position.",
      "Good calibrated questions make hidden constraints visible. They reveal authority, process, risk, priorities, and unstated obstacles. If a manager says a raise is not possible, what would need to be true for this to be considered? may reveal timing, bands, approvals, or performance documentation. If a client resists a proposal, what is the biggest concern from your side? can separate price from trust or implementation risk.",
      "The famous version, how am I supposed to do that? is powerful because it asks the other side to confront the practicality of their request. Used carefully, it is not a complaint. It is an invitation to solve the implementation problem. Used with a hostile tone, it becomes sarcasm and loses its value.",
      "The common mistake is using questions as disguised arguments. Why would you ask for that? or how could that possibly be fair? may be grammatically questions, but they are emotionally accusations. A good calibrated question is genuinely open enough that the other side has room to think, explain, and sometimes change course without losing face.",
      "Ethically, calibrated questions preserve agency. They do not trap the other person into a script. They make constraints discussable and distribute problem-solving. In good negotiation, both sides learn more about what is actually possible."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Question versus disguised argument",
        not: "Using question form to accuse, corner, or shame the other person.",
        but: "Asking open questions that reveal constraints and invite shared problem-solving."
      },
      {
        type: "expandedExample",
        scenario:
          "A client asks for a major discount while keeping the original scope and timeline.",
        defaultApproach:
          "Reject the request directly and trigger a price argument.",
        betterApproach:
          "Ask, how can we adjust scope or timing so the economics work for both sides?",
        whyItWorks:
          "The question makes the tradeoff visible without turning the client into an opponent."
      },
      {
        type: "framework",
        title: "Calibrated question patterns",
        stages: [
          {
            name: "Feasibility",
            description: "How can we make this work under the constraints?"
          },
          {
            name: "Approval",
            description: "What would need to be true for this to be approved?"
          },
          {
            name: "Obstacle",
            description: "What is the biggest obstacle from your side?"
          },
          {
            name: "Fairness",
            description: "How should I think about what would be fair here?"
          }
        ]
      }
    ],
    whyThisMatters:
      "Calibrated questions turn conflict into joint problem-solving while revealing information that direct argument often hides.",
    practicalApplication:
      "Replace your next defensive statement with a how or what question that makes the real constraint visible.",
    commonMistakes: [
      "Asking questions that are really accusations",
      "Using a sarcastic tone",
      "Answering your own question before the other person thinks"
    ],
    misconceptions: [
      {
        misconception: "Calibrated questions are passive.",
        correction:
          "They can apply strong pressure because they require the other side to engage the practical problem."
      }
    ],
    applicationLens:
      "When stuck, ask a question that makes the other side explain how their position can work in reality.",
    anchors: [
      "A good calibrated question makes the other side solve with you.",
      "How and what questions reveal constraints without direct confrontation."
    ],
    takeaways: [
      "Calibrated questions reduce defensiveness.",
      "They surface authority, process, and obstacles.",
      "Tone determines whether they feel collaborative or hostile."
    ],
    examples: [
      "How can we make this work with the timeline?",
      "What would need to be true for this to be approved?",
      "What is the biggest obstacle from your side?"
    ],
    relatedSections: ["power-of-no", "leverage-deadlines-hidden-constraints"]
  }),
  lesson({
    id: "power-of-no",
    title: "The Power of No and Why Agreement Can Be Misleading",
    eyebrow: "Commitment",
    minutes: 35,
    summary:
      "An honest no can create safety, reveal boundaries, and produce better information than a shallow yes given to avoid tension.",
    objectives: [
      "Understand why yes can be misleading",
      "Recognize no as a source of safety and information",
      "Invite useful disagreement without escalating"
    ],
    concepts: ["no", "commitment", "boundaries", "agreement"],
    body: [
      "Never Split the Difference treats no differently than many negotiation books. A yes can be cheap. People say yes to be polite, end discomfort, avoid conflict, or keep options open. They may agree in the moment and fail to follow through because the agreement was not real commitment. A shallow yes can be less useful than an honest no.",
      "No gives people a sense of control. When someone can say no, they are less likely to feel trapped. This can make them more willing to continue the conversation. A forced yes often creates resistance because the other person feels their autonomy shrinking. An invited no can create safety because it confirms they still have boundaries.",
      "No also reveals the map. If a prospect says no, the reason matters. No because of budget is different from no because of timing, trust, authority, risk, or lack of need. A manager's vague yes may hide impossibility. A clear no followed by explanation can reveal what would have to change.",
      "The point is not to seek rejection for its own sake. It is to stop worshiping agreement. Questions like is this a bad time? or would it be ridiculous to consider another structure? can let the other person protect autonomy while keeping the door open. Used carefully, they reduce pressure. Used as gimmicks, they sound manipulative.",
      "In sales, a prospect may say yes to a follow-up because they want to be nice, then disappear. A no would have been more useful. In workplace conflict, a manager may agree vaguely to consider a change, but a no with reasons could reveal budget timing or stakeholder resistance. In family conversation, an honest no may prevent resentment that a reluctant yes would create.",
      "The key distinction is that no is not always rejection. Sometimes it is a boundary, a clarification, a request for safety, or the beginning of a more honest conversation. Negotiators who can hear no calmly often get better information than negotiators who panic at the first sign of resistance."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "No is not always rejection",
        not: "Treating every no as the end of the relationship or conversation.",
        but: "Understanding no as boundary, information, control, and sometimes the beginning of honesty."
      },
      {
        type: "expandedExample",
        scenario:
          "A sales prospect keeps agreeing to next steps but never commits internally.",
        defaultApproach:
          "Chase more yeses and assume politeness means momentum.",
        betterApproach:
          "Invite clarity: would it be wrong to say this is not a priority right now?",
        whyItWorks:
          "The question gives the prospect permission to reveal the real status instead of maintaining polite ambiguity."
      },
      {
        type: "warning",
        title: "A yes without implementation may be theater",
        text: "Agreement matters only when it is backed by authority, clarity, resources, and willingness to act."
      }
    ],
    whyThisMatters:
      "Negotiators waste time when they mistake polite agreement for real commitment and avoid the information inside disagreement.",
    practicalApplication:
      "When yes feels vague, invite a safe no and listen for what the boundary reveals.",
    commonMistakes: [
      "Forcing yes too early",
      "Treating no as personal rejection",
      "Accepting vague agreement without implementation detail"
    ],
    misconceptions: [
      {
        misconception: "The best negotiator gets yes as fast as possible.",
        correction:
          "The best negotiator gets reality as clearly as possible. Sometimes no reveals reality better than yes."
      }
    ],
    applicationLens:
      "Ask whether the agreement you received contains authority, resources, timing, and ownership. If not, seek clearer truth rather than more polite yeses.",
    anchors: [
      "A shallow yes can be less useful than an honest no.",
      "No can create the safety needed for real conversation."
    ],
    takeaways: [
      "Yes can be polite rather than committed.",
      "No clarifies boundaries and constraints.",
      "Disagreement can be information."
    ],
    examples: [
      "A prospect says yes to avoid conflict but never advances.",
      "A manager says no and explains the approval constraint.",
      "A family member's no reveals a boundary that prevents resentment."
    ],
    relatedSections: ["voice-tone-silence-control", "calibrated-questions-solve-with-you"]
  }),
  lesson({
    id: "voice-tone-silence-control",
    title: "Voice, Tone, Silence, and Conversational Control",
    eyebrow: "Delivery",
    minutes: 34,
    summary:
      "Negotiation language only works when delivery supports it; tone, pace, and silence shape whether words soothe or provoke.",
    objectives: [
      "Understand why tone changes meaning",
      "Use calm voice and silence to regulate tension",
      "Distinguish conversational control from domination"
    ],
    concepts: ["tone", "silence", "pace", "control"],
    body: [
      "Negotiators often obsess over words while underestimating delivery. The same sentence can calm or provoke depending on tone. How am I supposed to do that? can sound curious, overwhelmed, sarcastic, or hostile. It seems like the timeline is the concern can sound empathetic or condescending. In tense conversations, people hear emotional meaning before technical content.",
      "A calm voice can regulate tension because it signals that the conversation is not out of control. Calm does not mean flat or passive. It means steady enough that the other person does not have to defend against your emotional escalation. In compensation, vendor, leadership, or family conversations, steadiness often makes hard content easier to hear.",
      "Pace matters. Speaking too quickly can sound anxious, defensive, or sales-driven. Slowing down gives the other person time to process and gives you time to listen. Warmth matters too. A cold voice can make a neutral question feel like interrogation. A warm voice can make a hard question feel like problem-solving.",
      "Silence is one of the most underused tools. After a calibrated question or label, silence gives the other person space to think. Many people rush to fill the gap because silence feels uncomfortable. That rush often steals the answer. In negotiation, silence can reveal information because the other person keeps talking, clarifies, or exposes what matters.",
      "Conversational control does not require domination. Control often means regulating yourself, setting pace, making space, and refusing to be pulled into reactive argument. A person who stays calm while asking precise questions can have more control than someone who talks the most.",
      "Delivery must remain ethical. Tone should not be used to patronize, intimidate, or perform false intimacy. The aim is to create enough emotional safety and clarity for a hard conversation to become productive."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Control is not domination",
        not: "Winning the conversation by overpowering, rushing, or intimidating the other person.",
        but: "Managing pace, tone, silence, and self-regulation so useful information can surface."
      },
      {
        type: "expandedExample",
        scenario:
          "An employee receives pushback during a compensation conversation.",
        defaultApproach:
          "Speed up, defend accomplishments, and make the manager feel cornered.",
        betterApproach:
          "Slow down, label the concern, ask what would need to be true, and let silence create room.",
        whyItWorks:
          "The delivery keeps the discussion from becoming a threat exchange."
      },
      {
        type: "application",
        context: "Using silence",
        steps: [
          "Ask a calibrated question or offer a label.",
          "Stop talking before you dilute the question.",
          "Let the other person think, correct, or elaborate."
        ],
        result:
          "Silence often uncovers information that more talking would bury."
      }
    ],
    whyThisMatters:
      "The book's tools depend on emotional experience, and delivery is what determines that experience.",
    practicalApplication:
      "In hard conversations, treat tone, pace, and silence as part of the negotiation, not decoration around the words.",
    commonMistakes: [
      "Using the right words with a defensive tone",
      "Filling silence too quickly",
      "Mistaking calm control for passivity"
    ],
    misconceptions: [
      {
        misconception: "Negotiation skill is mostly about what to say.",
        correction:
          "Words matter, but tone, timing, pace, and silence often determine how those words are received."
      }
    ],
    applicationLens:
      "Before a difficult conversation, decide not only your words but the emotional temperature you want your delivery to create.",
    anchors: [
      "The same sentence can soothe or provoke depending on tone.",
      "Silence gives the other person room to reveal the map."
    ],
    takeaways: [
      "Delivery shapes meaning.",
      "Calm voice can regulate tension.",
      "Silence is a negotiation tool."
    ],
    examples: [
      "Slowing down during compensation pushback.",
      "Using silence after a calibrated question.",
      "Avoiding defensive tone in a tense meeting."
    ],
    relatedSections: ["leverage-deadlines-hidden-constraints", "labeling-naming-emotion"]
  }),
  lesson({
    id: "leverage-deadlines-hidden-constraints",
    title: "Leverage, Deadlines, and Hidden Constraints",
    eyebrow: "Power",
    minutes: 38,
    summary:
      "Leverage is not only raw power; it is knowledge of what the other side wants, fears, needs, or must avoid.",
    objectives: [
      "Understand leverage as information about what matters",
      "Recognize deadlines and hidden constraints",
      "Use leverage ethically rather than coercively"
    ],
    concepts: ["leverage", "deadlines", "constraints", "alternatives"],
    body: [
      "Leverage is often misunderstood as brute power. In Never Split the Difference, leverage is closer to knowledge of what matters to the other side. What do they want? What do they fear losing? What deadline shapes their behavior? What internal constraint limits them? What problem must they solve? The person with better information often has more leverage than the person with the louder position.",
      "Alternatives matter. A buyer with credible alternatives has leverage because they can walk away. An employee with a competing offer has leverage because the employer faces retention risk. A landlord with vacancy risk may have less power than they appear to have. A vendor near quarter-end may care about timing more than price.",
      "Deadlines change behavior because they compress attention. Some deadlines are real. Others are negotiable or used to create pressure. The negotiator's job is to learn which is which. A deadline may reveal hidden needs: revenue recognition, internal approval cycles, moving dates, budget expiration, staffing availability, or political risk.",
      "Hidden constraints often explain positions that look unreasonable. A manager may not control compensation bands. A salesperson may not control implementation capacity. A seller may need a closing date more than a higher price. A client may resist because legal, finance, or operations has veto power. Leverage emerges when these constraints become visible.",
      "Perceived leverage can be as important as actual leverage because people act on what they believe. If the other side believes you have no alternatives, they may behave differently. If they believe you understand their constraints, they may become more careful. Ethical negotiation does not require revealing every card, but it should avoid deception that destroys trust.",
      "The ethical use of leverage is to create better decisions, not to humiliate or corner. Bullying can win a concession and lose the relationship, implementation, or future trust. Strong leverage used well creates clarity about tradeoffs and helps both sides decide whether a deal is possible."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Leverage is not bullying",
        not: "Using pressure to overpower the other side because you can.",
        but: "Understanding what matters, what constrains action, and what tradeoffs shape the decision."
      },
      {
        type: "expandedExample",
        scenario:
          "A software vendor resists price movement but needs the deal closed before quarter-end.",
        defaultApproach:
          "Argue about list price without understanding timing pressure.",
        betterApproach:
          "Explore implementation constraints, procurement timing, and what flexibility exists if the buyer can close within the vendor's deadline.",
        whyItWorks:
          "The buyer uses information about timing to create a tradeoff rather than a fight."
      },
      {
        type: "comparisonTable",
        title: "Sources of leverage",
        columns: ["Source", "What it means", "Ethical use"],
        rows: [
          ["Alternatives", "You can walk away", "Negotiate without desperation"],
          ["Deadline", "Timing matters", "Trade speed for value honestly"],
          ["Hidden constraint", "A limit shapes behavior", "Design around the real obstacle"],
          ["Information", "You know what matters", "Clarify tradeoffs without deception"]
        ]
      }
    ],
    whyThisMatters:
      "Negotiators who understand leverage as information make better decisions than those who rely on pressure alone.",
    practicalApplication:
      "In every negotiation, look for what the other side wants, fears, must avoid, and cannot easily say.",
    commonMistakes: [
      "Equating leverage with aggression",
      "Ignoring deadlines as sources of information",
      "Missing constraints behind stated positions"
    ],
    misconceptions: [
      {
        misconception: "Leverage means having all the power.",
        correction:
          "Leverage often means understanding what matters most and what constraints shape the other side's choices."
      }
    ],
    applicationLens:
      "Ask what would make the other side change behavior. The answer often reveals leverage more accurately than the opening position.",
    anchors: [
      "Leverage is knowledge of what matters to the other side.",
      "Deadlines and constraints often reveal the real negotiation."
    ],
    takeaways: [
      "Leverage can come from alternatives, timing, information, or constraints.",
      "Perceived leverage shapes behavior.",
      "Ethical leverage clarifies tradeoffs rather than coercing."
    ],
    examples: [
      "A seller faces a quarter-end deadline.",
      "An employee has a competing offer.",
      "A landlord has vacancy risk.",
      "A vendor has implementation constraints."
    ],
    relatedSections: ["bargaining-without-splitting", "calibrated-questions-solve-with-you"]
  }),
  lesson({
    id: "bargaining-without-splitting",
    title: "Bargaining Without Splitting the Difference",
    eyebrow: "Bargaining",
    minutes: 38,
    summary:
      "Compromise can be lazy when it treats the midpoint as fair without examining anchors, interests, constraints, and value.",
    objectives: [
      "Understand why splitting the difference can produce bad outcomes",
      "Recognize anchors, ranges, and concessions as bargaining dynamics",
      "Negotiate price while preserving respect and value"
    ],
    concepts: ["bargaining", "compromise", "anchors", "concessions"],
    body: [
      "The title Never Split the Difference is not an argument against every compromise. It is an argument against lazy compromise. Splitting the difference feels fair because the midpoint looks neutral. But if the starting positions are arbitrary, the midpoint can be arbitrary too. Halfway between a bad idea and a good idea is not automatically wise.",
      "In price negotiation, anchors matter because the first serious number can shape the perceived range. A consulting fee, salary request, used car price, or real estate offer may create a frame before value is fully discussed. The danger is letting the frame become the negotiation. The better path is to understand interests, constraints, alternatives, and standards before treating numbers as meaningful.",
      "Concessions communicate. A fast concession can signal that the original number was inflated or that you are uncomfortable holding value. A thoughtful concession tied to a tradeoff preserves respect. If price moves, scope, timing, risk, payment terms, or implementation may need to move too. Bargaining becomes stronger when concessions are connected to reality rather than given to relieve tension.",
      "The book's philosophy favors calm firmness. You can protect value without becoming combative. You can use labels, mirrors, calibrated questions, and silence to understand why a number matters. You can ask how the other side arrived at it, what constraint it solves, and what would need to change for movement. Price becomes part of a larger conversation.",
      "Compromise is useful when both sides understand the tradeoff and the midpoint solves the actual problem. It is harmful when it ignores underlying interests. If one person wants black shoes and another wants brown, splitting the difference does not produce a good shoe. If a vendor needs margin and a buyer needs risk reduction, the solution may be scope, warranty, timing, or phased rollout rather than a simple midpoint.",
      "The mature lesson is that bargaining should preserve dignity while protecting value. Do not let fairness theater replace analysis. Do not treat tension as proof that you must concede. Do not turn every price conversation into a battle. Slow the conversation until the numbers are attached to real constraints."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Compromise is not problem-solving",
        not: "Assuming the midpoint is fair because both sides moved.",
        but: "Finding an outcome that addresses the real interests, constraints, and value at stake."
      },
      {
        type: "expandedExample",
        scenario:
          "A consultant quotes a fee and the client asks to cut it in half.",
        defaultApproach:
          "Meet in the middle to avoid losing the deal.",
        betterApproach:
          "Ask what budget constraint is driving the request, then adjust scope, timeline, deliverables, or payment terms if price must move.",
        whyItWorks:
          "The consultant preserves value by connecting concessions to tradeoffs."
      },
      {
        type: "application",
        context: "Protecting value in price negotiation",
        steps: [
          "Clarify what the number is meant to solve.",
          "Ask calibrated questions about constraints and priorities.",
          "Trade concessions for changes in scope, timing, risk, or terms."
        ],
        result:
          "The price conversation becomes a design problem rather than a tug-of-war."
      }
    ],
    whyThisMatters:
      "Many people call a midpoint fair because it feels polite, not because it solves the underlying problem.",
    practicalApplication:
      "When pressured to split the difference, ask what assumptions made the endpoints valid and what tradeoffs should change if the number changes.",
    commonMistakes: [
      "Treating the midpoint as automatically fair",
      "Conceding quickly to reduce discomfort",
      "Negotiating price without scope, terms, or risk"
    ],
    misconceptions: [
      {
        misconception: "Never splitting the difference means never compromising.",
        correction:
          "The point is not stubbornness. The point is to avoid empty midpoint thinking when deeper problem-solving is needed."
      }
    ],
    applicationLens:
      "Before moving a number, ask what tradeoff moves with it. Value should not disappear just because tension appeared.",
    anchors: [
      "The midpoint is not fair when the endpoints are arbitrary.",
      "Concessions should be tied to real tradeoffs."
    ],
    takeaways: [
      "Compromise can be lazy.",
      "Anchors shape perceived fairness.",
      "Bargaining should protect value and respect."
    ],
    examples: [
      "Salary negotiation requires role, market, and authority context.",
      "A vendor discount may require scope change.",
      "A real estate midpoint may ignore timing or repairs."
    ],
    relatedSections: ["applying-system-work-money-life", "leverage-deadlines-hidden-constraints"]
  }),
  lesson({
    id: "applying-system-work-money-life",
    title: "Applying the System in Work, Money, and Life",
    eyebrow: "Application",
    minutes: 40,
    summary:
      "The tools work best as a system: empathy first, labels and mirrors for discovery, calibrated questions for collaboration, and leverage for clear tradeoffs.",
    objectives: [
      "Combine the tools in real conversations",
      "Apply the system to compensation, leadership, sales, vendors, and family life",
      "Negotiate strongly while staying ethical and human"
    ],
    concepts: ["application", "system", "workplace conflict", "boundaries"],
    body: [
      "The book's tools are most useful when combined, not performed as isolated tricks. Tactical empathy sets the posture. Labels and mirrors uncover emotion and information. Accusation audits defuse predictable resistance. Calibrated questions make the other side participate in solving. No reveals boundaries. Tone and silence regulate the conversation. Leverage clarifies tradeoffs. Bargaining protects value.",
      "In a compensation conversation, the system begins before asking for a number. The employee considers the manager's constraints, labels possible concerns, and asks what would need to be true for an adjustment. If the manager says no, the employee listens for whether the issue is timing, authority, budget, performance evidence, or internal equity. The conversation becomes a map rather than a demand.",
      "In workplace conflict, the system helps slow reactivity. A leader can label frustration, mirror key phrases, and ask what feels most at risk. Instead of deciding who is right too quickly, the leader uncovers identity, workload, incentives, and communication breakdowns. This does not mean avoiding accountability. It means understanding enough to make accountability fair.",
      "In sales or client conversations, the ethical application is not to manipulate prospects into yes. It is to understand their world accurately. If a client hesitates, the seller labels risk, asks calibrated questions, and listens for implementation concerns. Strong selling helps buyers make better decisions. Manipulative selling hides pressure inside tactics.",
      "In vendor management and real estate, the system reveals hidden constraints. A vendor may care about timing, cash flow, case study value, or scope. A seller may care about closing certainty more than headline price. A buyer who asks good questions can create value by solving the actual problem instead of fighting only over numbers.",
      "In family conversations and personal boundaries, the same tools require extra humility. Tactical empathy can lower defensiveness, but the goal is not to win at home. The goal is clearer understanding, honest boundaries, and less escalation. Labels and calibrated questions can help, but they must be used with genuine care rather than as techniques deployed on loved ones.",
      "The mature application is to keep the person in front of you human. Negotiation skill should make you more patient, observant, and clear, not more predatory. Strong outcomes and ethical communication are not enemies."
    ],
    support: [
      {
        type: "framework",
        title: "The applied conversation flow",
        stages: [
          {
            name: "Prepare",
            description: "Identify likely emotions, constraints, authority, and accusations."
          },
          {
            name: "Connect",
            description: "Use tactical empathy, labels, and mirrors to lower threat."
          },
          {
            name: "Discover",
            description: "Ask calibrated questions and listen for hidden constraints."
          },
          {
            name: "Trade",
            description: "Use leverage and bargaining to design a respectful outcome."
          },
          {
            name: "Confirm",
            description: "Make sure any yes has authority, timing, resources, and ownership."
          }
        ]
      },
      {
        type: "expandedExample",
        scenario:
          "A team lead needs to resolve conflict between two high-performing employees.",
        defaultApproach:
          "Mediate quickly, push both sides to compromise, and move on.",
        betterApproach:
          "Label the tension, mirror charged phrases, ask what each side sees as the real obstacle, and clarify commitments after emotions settle.",
        whyItWorks:
          "The leader treats the conflict as emotional information before imposing a solution."
      },
      {
        type: "comparisonTable",
        title: "Where the system applies",
        columns: ["Setting", "Primary tools", "Ethical aim"],
        rows: [
          ["Compensation", "Labels, calibrated questions, leverage", "Reveal approval path and value"],
          ["Sales", "Tactical empathy, mirrors, no", "Help buyers decide honestly"],
          ["Family", "Labels, tone, silence", "Reduce threat and clarify boundaries"],
          ["Vendors", "Questions, deadlines, bargaining", "Trade around real constraints"]
        ]
      }
    ],
    whyThisMatters:
      "Negotiation is not a rare event. The book's value appears when the system improves ordinary high-friction conversations.",
    practicalApplication:
      "Before a meaningful ask, prepare the likely emotions, constraints, accusation audit, calibrated questions, and tradeoffs.",
    commonMistakes: [
      "Using one tactic repeatedly instead of the whole system",
      "Applying negotiation tools to loved ones without care",
      "Trying to win before understanding what a good outcome would require"
    ],
    misconceptions: [
      {
        misconception: "These tools are only for hostage negotiation or sales.",
        correction:
          "They apply anywhere emotion, uncertainty, constraints, and decision-making meet."
      }
    ],
    applicationLens:
      "Ask which part of the system the conversation needs now: empathy, discovery, safety, leverage, bargaining, or confirmation.",
    anchors: [
      "The tools work best as a system, not as scripts.",
      "Strong negotiation should make conversations more human, not less."
    ],
    takeaways: [
      "Prepare emotions and constraints before the ask.",
      "Use tools to uncover, not manipulate.",
      "Confirm that agreement can actually be implemented."
    ],
    examples: [
      "Asking for compensation adjustment.",
      "Resolving workplace conflict.",
      "Negotiating a contract.",
      "Discussing boundaries in personal life."
    ],
    relatedSections: ["final-synthesis-negotiation-operating-system", "bargaining-without-splitting"]
  }),
  lesson({
    id: "final-synthesis-negotiation-operating-system",
    title: "Final Synthesis: A Negotiation Operating System",
    eyebrow: "Synthesis",
    minutes: 42,
    summary:
      "The book compresses into a negotiation operating system: listen first, lower threat, uncover information, ask calibrated questions, and bargain around real constraints.",
    objectives: [
      "Connect all major concepts into one operating system",
      "Use the tools as ethical communication, not tricks",
      "Remember the highest-value lessons months later"
    ],
    concepts: ["operating system", "listening", "emotion", "leverage", "ethics"],
    body: [
      "Never Split the Difference is best understood as a system for making hard conversations more truthful. The title can sound aggressive, but the deeper philosophy is not domination. It is disciplined listening under pressure. The negotiator slows the conversation, lowers threat, reveals hidden information, and protects value without treating the other person as an enemy.",
      "The system begins with the premise that negotiation is emotional before it is rational. People need to feel heard before they can think flexibly. Tactical empathy establishes that you understand the other side's world without surrendering your own. Labels name emotion. Mirrors invite elaboration. Accusation audits surface resistance before it hardens.",
      "Once the emotional field is clearer, calibrated questions make the conversation collaborative. How and what questions reveal constraints, authority, deadlines, risk, and practical obstacles. The power of no protects autonomy and clarifies boundaries. Tone and silence regulate the exchange so useful information can emerge. Leverage turns information into tradeoffs. Bargaining protects value without worshiping the midpoint.",
      "The concepts are linked. Emotion affects information. Information affects leverage. Leverage affects bargaining. Tone affects whether questions feel safe. Labels affect whether resistance softens. No affects whether agreement is real. The tools are not independent tricks. They are parts of one conversation architecture.",
      "The ethical center matters. These tools can be misused if the goal is to corner people. Used well, they increase clarity and agency. They help a client express the real concern, a manager explain constraints, an employee negotiate value, a buyer avoid bad terms, a family member feel understood, and a leader guide conflict without false harmony.",
      "Six months from now, remember the sequence. Slow down. Listen for emotion. Name what seems present. Mirror important language. Ask how and what questions. Invite honest no. Watch deadlines and hidden constraints. Trade around real value. Do not split the difference merely to escape tension. Confirm implementation before trusting yes.",
      "The practical promise of the book is not that every negotiation will end with your ideal outcome. It is that you can enter difficult conversations with more calm, clarity, and control. You can become less reactive, more observant, more ethical, and harder to pressure. That is a serious form of power."
    ],
    support: [
      {
        type: "framework",
        title: "The negotiation operating system",
        stages: [
          {
            name: "Regulate",
            description: "Use tone, pace, and silence to keep the conversation workable."
          },
          {
            name: "Understand",
            description: "Use tactical empathy, labels, mirrors, and accusation audits."
          },
          {
            name: "Discover",
            description: "Ask calibrated questions to reveal constraints, authority, and priorities."
          },
          {
            name: "Clarify",
            description: "Invite useful no and separate polite agreement from real commitment."
          },
          {
            name: "Trade",
            description: "Use leverage and bargaining to protect value around real interests."
          }
        ]
      },
      {
        type: "comparisonTable",
        title: "Tools and purposes",
        columns: ["Tool", "Purpose", "Risk if misused"],
        rows: [
          ["Tactical empathy", "Lower threat and understand the other side", "Performing empathy to pressure"],
          ["Mirroring", "Invite elaboration", "Sounding robotic or manipulative"],
          ["Labeling", "Name emotion and surface concerns", "Telling people what they feel"],
          ["Calibrated questions", "Create collaborative problem-solving", "Disguised argument"],
          ["Leverage", "Clarify what matters", "Bullying or coercion"]
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text: "Listen before arguing, label before solving, ask before pushing, invite no before chasing yes, and bargain around real constraints instead of splitting the difference to escape tension."
      }
    ],
    whyThisMatters:
      "The value of the book is not a list of phrases but a coherent way to move through conflict, uncertainty, and high-stakes communication.",
    practicalApplication:
      "Use the operating system before any important conversation: prepare likely emotions, identify constraints, choose labels and questions, and define what value must be protected.",
    commonMistakes: [
      "Treating the book as a script list",
      "Using empathy language without actual listening",
      "Compromising too early because tension feels uncomfortable"
    ],
    misconceptions: [
      {
        misconception: "The system is about getting your way.",
        correction:
          "The system is about discovering reality, lowering resistance, protecting value, and reaching decisions that can actually hold."
      }
    ],
    applicationLens:
      "When a conversation becomes tense, return to the operating system: regulate, understand, discover, clarify, trade.",
    anchors: [
      "Negotiation begins with listening and becomes powerful through information.",
      "Use the tools as a system for clarity, not a bag of tricks."
    ],
    takeaways: [
      "Emotion, information, and leverage are linked.",
      "The best negotiators slow the conversation down.",
      "Ethical negotiation protects agency while pursuing strong outcomes."
    ],
    examples: [
      "A salary negotiation improves when constraints are uncovered.",
      "A client conversation changes when risk is labeled.",
      "A family conflict softens when the emotion is named before the solution."
    ],
    relatedSections: ["negotiation-emotional-before-rational", "applying-system-work-money-life"]
  })
];

export const neverSplitTheDifference: Book = {
  slug: "never-split-the-difference",
  title: "Never Split the Difference",
  author: "Chris Voss",
  category: "Negotiation / Communication / Psychology",
  difficulty: "Intermediate",
  completionTime: "7h 19m",
  progress: 0,
  coverTone:
    "from-zinc-100 via-rose-100 to-amber-100 dark:from-zinc-900 dark:via-rose-950/35 dark:to-amber-950/35",
  description:
    "A deep curriculum on negotiation psychology, tactical empathy, emotional labeling, mirroring, calibrated questions, leverage, and the communication tools that help people create better outcomes in high-stakes conversations.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(neverSplitSections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "negotiation",
    "tactical empathy",
    "communication",
    "emotional intelligence",
    "mirroring",
    "labeling",
    "calibrated questions",
    "leverage",
    "conflict",
    "listening",
    "persuasion",
    "decision-making"
  ],
  intendedOutcomes: [
    "Understand why negotiation is emotional before it is rational",
    "Understand tactical empathy",
    "Use mirroring and labeling with nuance",
    "Ask calibrated questions",
    "Understand accusation audits",
    "Recognize leverage",
    "Avoid premature compromise",
    "Negotiate with more calm, clarity, and control",
    "Apply the ideas ethically in work and life"
  ],
  promise:
    "After completing this curriculum, you will understand how tactical empathy, calibrated questions, labeling, mirroring, emotional awareness, and leverage reshape negotiation from a battle of positions into a process of uncovering information, lowering resistance, and guiding better decisions.",
  recommendedAudience: [
    "Readers who want a deep grasp of Never Split the Difference",
    "Professionals navigating compensation, sales, vendor, and leadership conversations",
    "Managers and founders handling conflict, pricing, and high-stakes decisions",
    "Anyone who wants to negotiate more calmly and ethically in work and life"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public negotiation concepts and communication framework. It does not reproduce long passages or chapter text.",
  sections: neverSplitSections
};
