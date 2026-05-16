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
  misconceptions: { misconception: string; correction: string }[];
  lens: string;
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
      ...input.body.map((text): ContentBlock => ({ type: "paragraph", text })),
      ...input.support,
      { type: "callout", title: "Application lens", text: input.lens },
      { type: "retentionAnchor", title: "Retention anchor", anchor: input.anchors[0] }
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

const sections: CurriculumSection[] = [
  lesson({
    id: "success-advice-misleading",
    title: "Why Success Advice Is Often Misleading",
    eyebrow: "Foundation",
    minutes: 32,
    summary:
      "Barker's central move is to challenge simple formulas: success advice often contradicts itself because the right lesson depends on context.",
    objectives: [
      "Understand why generic success rules fail",
      "Recognize the limits of advice like work hard or never quit",
      "Approach success as a context-sensitive problem"
    ],
    concepts: ["success advice", "context", "tradeoffs", "evidence"],
    body: [
      "Barking Up the Wrong Tree begins from a practical irritation: most success advice sounds confident until it meets another piece of success advice. Be confident, but be humble. Persist, but know when to quit. Follow the rules, but think differently. Be nice, but do not be naive. Work hard, but protect balance. The contradictions are not always errors. They reveal that advice is incomplete without context.",
      "Barker's book is useful because it refuses to turn success into a single virtue. Hard work matters, but effort in the wrong game can trap you. Confidence matters, but overconfidence can blind you. Grit matters, but refusing to quit dead ends can waste years. Networking matters, but transactional networking corrodes trust.",
      "Success depends on the person, the environment, the timing, the rules of the game, and the metric being used. School rewards compliance, memory, and deadlines. Entrepreneurship may reward tolerance for ambiguity and selling. Creative fields may reward distinctiveness. Corporate life may reward reliability, politics, and collaboration. Elite performance may reward obsession that would be unhealthy elsewhere.",
      "The mature reader therefore uses success advice diagnostically. Before applying a rule, ask where it works, where it fails, what it costs, and whether it fits your traits and situation. The right lesson is rarely universal. It is conditional.",
      "This does not make the book relativistic. It makes it practical. The goal is to build a success strategy that fits reality instead of collecting slogans that sound impressive."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Principle versus formula",
        not: "A rule applied everywhere regardless of context, personality, timing, or cost.",
        but: "A pattern that becomes useful when matched to the right game and constraints."
      },
      {
        type: "comparisonTable",
        title: "Common advice and missing question",
        columns: ["Advice", "Missing question"],
        rows: [
          ["Never quit", "Is this temporary difficulty or a strategic dead end?"],
          ["Be confident", "Is confidence grounded in evidence and feedback?"],
          ["Work harder", "Is effort aimed at a game where effort compounds?"],
          ["Network more", "Are relationships being built with trust or extraction?"]
        ]
      }
    ],
    whyThisMatters:
      "People waste time when they apply impressive advice to the wrong situation.",
    practicalApplication:
      "Before taking success advice seriously, identify the context where it was learned and whether that context matches yours.",
    commonMistakes: [
      "Applying advice because it sounds morally attractive",
      "Ignoring context and personality fit",
      "Treating successful people's stories as clean formulas"
    ],
    misconceptions: [
      {
        misconception: "If advice is evidence-informed, it must be universally useful.",
        correction:
          "Evidence still has scope. A finding can be true in one context and misleading in another."
      }
    ],
    lens:
      "Ask not whether the advice is inspiring, but where it works, what it costs, and whether it fits the game you are playing.",
    anchors: [
      "Success advice becomes useful only after context is named.",
      "The right lesson depends on the right situation."
    ],
    takeaways: [
      "Generic success rules are often incomplete.",
      "Context, personality, timing, and environment shape outcomes.",
      "The book is about tradeoffs, not formulas."
    ],
    examples: [
      "Persistence helps a founder through rejection but traps someone in a dying industry.",
      "Confidence helps in sales but harms when it blocks feedback.",
      "Rule-following helps in credentialed systems but can limit creative breakthroughs."
    ],
    relatedSections: ["context-hidden-variable", "final-success-strategy"]
  }),
  lesson({
    id: "context-hidden-variable",
    title: "Context: The Hidden Variable Behind Achievement",
    eyebrow: "Fit",
    minutes: 33,
    summary:
      "The same trait can become an asset or liability depending on the environment, so success strategy begins with finding the right game.",
    objectives: [
      "Understand trait-environment fit",
      "Compare different success environments",
      "Choose games where your traits can become advantages"
    ],
    concepts: ["context", "fit", "environment", "game selection"],
    body: [
      "Barker repeatedly shows that traits do not have fixed value. A behavior that looks like weakness in one setting can become strength in another. Stubbornness may be disruptive in a bureaucracy and essential in entrepreneurship. Sensitivity may be a liability in a harsh sales floor and an asset in therapy, design, or leadership. Rule-following may help in school and hurt in a creative market that rewards originality.",
      "This is why game selection matters. People often try to become well-rounded enough to survive any environment. Sometimes that is necessary. But long-term success often comes from choosing contexts where your unusual traits are rewarded rather than constantly corrected.",
      "Different systems reward different behaviors. School often rewards compliance, deadline management, and test performance. Corporate environments may reward reliability, collaboration, political judgment, and scalable communication. Entrepreneurship rewards risk tolerance, sales, speed, and resilience to ambiguity. Creative fields reward distinctiveness and taste. Elite performance rewards deliberate practice and unusually high standards.",
      "The point is not to avoid growth. It is to stop treating every weakness as a universal defect. Some weaknesses need management. Others signal that the game is wrong. The strategic question is whether changing yourself or changing contexts creates more leverage.",
      "A good success strategy therefore begins with self-knowledge and environmental knowledge. What do you do easily that others find hard? What drains you unusually fast? Where have your odd traits produced value? What game rewards the person you are becoming?"
    ],
    support: [
      {
        type: "framework",
        title: "Fit diagnosis",
        stages: [
          { name: "Trait", description: "What recurring quality do you bring?" },
          { name: "Reward", description: "Does this environment reward or punish it?" },
          { name: "Cost", description: "What does adaptation require from you?" },
          { name: "Alternative", description: "Where might the same trait create advantage?" }
        ]
      },
      {
        type: "expandedExample",
        scenario: "A detail-obsessed analyst is miserable in a fast, improvisational sales role.",
        defaultApproach:
          "Assume the problem is lack of confidence and try to become more spontaneous.",
        betterApproach:
          "Recognize that analytical rigor may be better rewarded in research, operations, finance, product, or technical sales support.",
        whyItWorks:
          "The person stops treating a context mismatch as a character flaw."
      }
    ],
    whyThisMatters:
      "Choosing the wrong game can make strengths invisible and weaknesses unnecessarily expensive.",
    practicalApplication:
      "Map one trait that has been criticized and identify contexts where it might become valuable.",
    commonMistakes: [
      "Trying to fix every weakness equally",
      "Choosing prestigious games that punish your natural advantages",
      "Assuming success looks the same across school, work, entrepreneurship, and creative life"
    ],
    misconceptions: [
      {
        misconception: "Fit means avoiding hard things.",
        correction:
          "Fit means choosing hard things where your effort can compound rather than constantly fighting the environment."
      }
    ],
    lens:
      "Before judging a trait, ask what game is evaluating it.",
    anchors: [
      "Traits become strengths or weaknesses inside contexts.",
      "Game selection is a form of strategy."
    ],
    takeaways: [
      "The same trait can help or hurt depending on environment.",
      "Success often depends on fit more than abstract virtue.",
      "Self-knowledge must be paired with context knowledge."
    ],
    examples: [
      "A nonconformist struggles in a rule-bound firm but thrives in product invention.",
      "A patient relationship-builder may outperform in long-cycle enterprise sales.",
      "A high-energy competitor may need arenas with clear stakes and feedback."
    ],
    relatedSections: ["strengths-weaknesses-right-game", "rules-rule-breakers"]
  }),
  lesson({
    id: "strengths-weaknesses-right-game",
    title: "Strengths, Weaknesses, and Finding the Right Game",
    eyebrow: "Self-knowledge",
    minutes: 33,
    summary:
      "Weaknesses can become strengths in the right niche, and strengths can become liabilities when overused or placed in the wrong system.",
    objectives: [
      "Understand inversion between strengths and weaknesses",
      "Use self-knowledge strategically",
      "Avoid overusing strengths"
    ],
    concepts: ["strengths", "weaknesses", "niche", "overuse"],
    body: [
      "Barker's view of strengths is more nuanced than simply double down on what you are good at. Strengths are contextual and can be overused. Confidence becomes arrogance. Persistence becomes stubbornness. Empathy becomes over-accommodation. Analytical thinking becomes paralysis. Speed becomes carelessness.",
      "Weaknesses can also invert. Being obsessive may be costly socially but valuable in elite craft. Being skeptical may make someone difficult in shallow brainstorming but essential in risk management. Being impatient with inefficiency may create conflict in stable systems and innovation in broken ones.",
      "The strategy is not to romanticize flaws. Some weaknesses damage trust, health, or performance and must be managed. But the first question should be diagnostic: is this trait a defect, an overused strength, or a poor fit with the current environment?",
      "Career strategy improves when people stop chasing generic competence and start finding niches where their specific combination matters. Leadership, sales, creativity, investing, operations, and research reward different profiles. The right game does not make effort unnecessary; it makes effort compound.",
      "Self-knowledge becomes practical when it informs placement, partnerships, boundaries, and feedback systems. You do not need to be good at everything. You need to know what game you are playing and where your profile creates advantage."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Trait inversion",
        columns: ["Trait", "Strength version", "Liability version"],
        rows: [
          ["Confidence", "Action and social credibility", "Blindness to feedback"],
          ["Persistence", "Resilience through difficulty", "Sunk-cost stubbornness"],
          ["Empathy", "Trust and emotional intelligence", "People-pleasing"],
          ["Skepticism", "Risk awareness", "Cynicism or delay"],
          ["Intensity", "High standards", "Burnout or relational damage"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Fixing versus fitting",
        not: "Assuming every weakness must be repaired before success is possible.",
        but: "Managing real liabilities while choosing contexts where your unusual strengths matter."
      }
    ],
    whyThisMatters:
      "Success strategy becomes sharper when people identify where their particular profile is rewarded.",
    practicalApplication:
      "Identify one strength that becomes a liability when overused and one weakness that may signal a better niche.",
    commonMistakes: [
      "Romanticizing harmful weaknesses",
      "Overusing a strength until it damages results",
      "Trying to become generically good instead of strategically placed"
    ],
    misconceptions: [
      {
        misconception: "A weakness is always something to fix.",
        correction:
          "Some weaknesses must be managed, but others become strengths in different contexts."
      }
    ],
    lens:
      "Ask whether a trait needs repair, restraint, partnership, or a better arena.",
    anchors: [
      "Strengths and weaknesses are often contextual.",
      "The right game turns traits into leverage."
    ],
    takeaways: [
      "Strengths can become liabilities when overused.",
      "Weaknesses can become advantages in the right niche.",
      "Self-knowledge should guide game selection."
    ],
    examples: [
      "A contrarian investor needs skepticism but must avoid permanent negativity.",
      "A creative founder benefits from obsession but needs operational partners.",
      "A diplomatic leader must avoid becoming conflict-avoidant."
    ],
    relatedSections: ["context-hidden-variable", "grit-quitting"]
  }),
  lesson({
    id: "nice-jerks-winning",
    title: "Nice Guys, Jerks, and the Complexity of Winning",
    eyebrow: "Social Strategy",
    minutes: 32,
    summary:
      "Cooperation, aggression, trust, and reputation have different payoffs depending on whether the game is short-term, repeated, transparent, or anonymous.",
    objectives: [
      "Understand why social behavior affects success",
      "Distinguish short-term and repeated games",
      "Avoid both naivete and cynicism"
    ],
    concepts: ["cooperation", "reputation", "repeated games", "trust"],
    body: [
      "The question of whether nice people finish first is too simple. In some narrow, short-term, low-reputation environments, selfishness can win. If there is no future interaction, no transparency, and no cost to betrayal, aggressive behavior may extract value quickly. But many important parts of life are repeated games.",
      "In repeated games, reputation compounds. Colleagues remember who shares credit, who defects, who helps, who tells the truth, and who creates unnecessary drama. Trust reduces transaction costs. People prefer to work with those who are competent and reliable. Cooperation becomes strategic because relationships carry forward.",
      "The mistake is to think niceness means weakness. Healthy cooperation includes boundaries, discernment, and willingness to enforce consequences. Being generous does not mean being exploitable. Being direct does not mean being cruel.",
      "Aggression can also be misunderstood. Some forms of assertiveness are necessary: negotiating, defending standards, refusing unfairness, giving hard feedback. The problem is not strength. It is selfishness that destroys trust for short-term advantage.",
      "Barker's nuanced lesson is that social success depends on the game structure. Are interactions repeated? Is reputation visible? Are incentives aligned? Can bad behavior be punished? The answer changes which strategy works."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Kindness versus weakness",
        not: "Avoiding conflict, tolerating exploitation, or needing everyone to approve.",
        but: "Creating trust while maintaining standards, boundaries, and accountability."
      },
      {
        type: "framework",
        title: "Social game diagnosis",
        stages: [
          { name: "Repeat", description: "Will you interact with these people again?" },
          { name: "Reputation", description: "Will behavior become known?" },
          { name: "Accountability", description: "Can harmful behavior be checked?" },
          { name: "Trust", description: "Does cooperation create long-term value?" }
        ]
      }
    ],
    whyThisMatters:
      "People need a strategy that preserves trust without becoming naive about incentives and exploitation.",
    practicalApplication:
      "In any professional relationship, ask whether the game rewards cooperation, assertion, defense, or exit.",
    commonMistakes: [
      "Equating kindness with passivity",
      "Assuming selfishness always wins because it sometimes wins quickly",
      "Ignoring reputation in repeated games"
    ],
    misconceptions: [
      {
        misconception: "Nice people succeed by simply being pleasant.",
        correction:
          "Long-term cooperative success depends on competence, boundaries, reliability, and trust."
      }
    ],
    lens:
      "Choose social strategy based on game structure, not a simplistic belief that nice or ruthless always wins.",
    anchors: [
      "Reputation compounds in repeated games.",
      "Cooperation works best with boundaries."
    ],
    takeaways: [
      "Social behavior has strategic consequences.",
      "Short-term and repeated games reward different behavior.",
      "Avoid both naivete and cynicism."
    ],
    examples: [
      "A reliable colleague gets invited into better opportunities.",
      "A selfish salesperson wins one deal and loses long-term referrals.",
      "A leader combines warmth with clear consequences."
    ],
    relatedSections: ["networks-relationships-social-capital", "work-meaning-cost"]
  }),
  lesson({
    id: "confidence-useful-delusional",
    title: "Confidence, Self-Belief, and the Line Between Useful and Delusional",
    eyebrow: "Belief",
    minutes: 32,
    summary:
      "Confidence helps action and social perception, but it becomes dangerous when it outruns competence, feedback, and reality.",
    objectives: [
      "Understand the benefits of confidence",
      "Recognize overconfidence and blind spots",
      "Build evidence-based confidence"
    ],
    concepts: ["confidence", "competence", "feedback", "overconfidence"],
    body: [
      "Confidence has real advantages. It helps people act before certainty arrives, handle rejection, influence social perception, and recover from setbacks. In interviews, leadership, sales, entrepreneurship, and performance, hesitant competence can be overlooked while confident competence attracts trust.",
      "But confidence is not truth. Overconfidence can create strategic blindness, poor preparation, bad risk assessment, and resistance to feedback. The same belief that helps someone begin can prevent them from learning if it becomes untouchable.",
      "The strongest confidence is evidence-based. It grows from preparation, reps, feedback, earned skill, and tested resilience. It does not require perfect certainty. It says: I have done enough work to act, and I am willing to learn from what happens.",
      "Empty self-belief often demands protection. It avoids feedback because feedback might puncture the story. Evidence-based confidence seeks feedback because feedback improves performance. This difference is crucial in leadership and entrepreneurship, where confident errors can become expensive for others.",
      "The practical aim is calibrated confidence: enough belief to move, enough humility to update."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Confidence types",
        columns: ["Type", "Source", "Risk"],
        rows: [
          ["Low confidence", "Underestimated capability", "Missed action and visibility"],
          ["Empty confidence", "Image and wishful belief", "Blindness and poor preparation"],
          ["Evidence-based confidence", "Skill, feedback, reps", "Requires continued humility"],
          ["Calibrated confidence", "Action plus updating", "Emotionally harder but stronger"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "A founder pitches investors after early traction.",
        defaultApproach:
          "Project certainty about every number and dismiss doubts as lack of vision.",
        betterApproach:
          "Show conviction in the thesis while being precise about evidence, risks, and what remains unproven.",
        whyItWorks:
          "The confidence is credible because it remains connected to reality."
      }
    ],
    whyThisMatters:
      "Confidence affects action and perception, but uncalibrated confidence can damage judgment.",
    practicalApplication:
      "Before a high-stakes action, separate what you know, what you believe, and what feedback could change your mind.",
    commonMistakes: [
      "Treating confidence as proof of competence",
      "Waiting for perfect confidence before acting",
      "Protecting self-belief from feedback"
    ],
    misconceptions: [
      {
        misconception: "More confidence is always better.",
        correction:
          "The best confidence is calibrated to evidence and open to correction."
      }
    ],
    lens:
      "Confidence should help you act, not exempt you from learning.",
    anchors: [
      "Useful confidence moves; delusional confidence refuses feedback.",
      "Calibrated confidence combines conviction with updating."
    ],
    takeaways: [
      "Confidence can improve action and social perception.",
      "Overconfidence creates blind spots.",
      "Evidence-based confidence is more durable than empty self-belief."
    ],
    examples: [
      "A leader invites dissent before making a decision.",
      "A candidate practices enough to speak with grounded confidence.",
      "A salesperson learns from objections instead of dismissing them."
    ],
    relatedSections: ["luck-timing-stories", "grit-quitting"]
  }),
  lesson({
    id: "grit-quitting",
    title: "Grit, Persistence, and Knowing When to Quit",
    eyebrow: "Persistence",
    minutes: 33,
    summary:
      "Persistence matters, but never quitting becomes irrational when sunk cost, identity, or pride keeps people in the wrong game.",
    objectives: [
      "Understand when persistence helps",
      "Recognize sunk cost and identity traps",
      "Distinguish temporary difficulty from strategic dead ends"
    ],
    concepts: ["grit", "quitting", "sunk cost", "focus"],
    body: [
      "Grit is powerful because meaningful work includes boredom, rejection, plateaus, and slow progress. People who abandon every path at the first difficulty never stay long enough to compound skill. Persistence is often the difference between interest and mastery.",
      "But never quit is bad strategy. Some paths are wrong. Some markets are dying. Some roles do not fit. Some relationships or projects are held together only by sunk cost. Persistence becomes irrational when it protects identity rather than serves a goal.",
      "Successful people often quit many things. They quit distractions, low-leverage commitments, weak markets, misfit roles, and projects that no longer teach. Quitting the wrong things creates focus for the right things.",
      "The hard part is distinguishing temporary difficulty from a dead end. Difficulty alone is not a signal to quit. Look instead at learning, fit, evidence of progress, opportunity cost, and whether additional effort is likely to change the outcome.",
      "Identity traps make quitting painful because the path has become part of who you are. I am a lawyer. I am a founder. I am the person who never gives up. A better identity is more flexible: I am someone who pursues meaningful work honestly and updates when evidence demands it."
    ],
    support: [
      {
        type: "framework",
        title: "Quit or persist diagnosis",
        stages: [
          { name: "Difficulty", description: "Is the pain normal for the path or evidence of poor fit?" },
          { name: "Learning", description: "Are you still improving or merely repeating?" },
          { name: "Evidence", description: "What signals show future potential?" },
          { name: "Cost", description: "What better opportunity is being crowded out?" },
          { name: "Identity", description: "Are you staying to protect a self-image?" }
        ]
      },
      {
        type: "keyDistinction",
        title: "Quitting versus drifting",
        not: "Leaving because the work became uncomfortable or boring.",
        but: "Stopping deliberately because evidence, fit, or opportunity cost points elsewhere."
      }
    ],
    whyThisMatters:
      "A mature success strategy needs both resilience and intelligent exit.",
    practicalApplication:
      "For a difficult commitment, evaluate whether more effort is likely to compound or merely protect sunk cost.",
    commonMistakes: [
      "Quitting at the first plateau",
      "Staying because of sunk cost or identity",
      "Treating persistence as moral superiority"
    ],
    misconceptions: [
      {
        misconception: "Successful people never quit.",
        correction:
          "They often quit strategically so their best efforts can concentrate."
      }
    ],
    lens:
      "Persistence is virtuous when the game is right; quitting is virtuous when it frees focus from the wrong game.",
    anchors: [
      "Grit and quitting are complementary tools.",
      "Quit wrong things to persist in right things."
    ],
    takeaways: [
      "Persistence matters through difficulty.",
      "Never quitting can become irrational.",
      "Strategic quitting protects focus."
    ],
    examples: [
      "A founder pivots from a weak customer segment to one with urgent demand.",
      "A professional leaves a prestigious role that blocks their strengths.",
      "A musician quits side projects to focus on the work that compounds."
    ],
    relatedSections: ["strengths-weaknesses-right-game", "final-success-strategy"]
  }),
  lesson({
    id: "networks-relationships-social-capital",
    title: "Networks, Relationships, and Social Capital",
    eyebrow: "Relationships",
    minutes: 33,
    summary:
      "Relationships are central to success, but the strongest networks are built through trust, usefulness, generosity, and reputation rather than extraction.",
    objectives: [
      "Understand weak and strong ties",
      "Build non-transactional networks",
      "See reputation as compounding social capital"
    ],
    concepts: ["networks", "relationships", "social capital", "reputation"],
    body: [
      "Barker treats relationships as a core part of success, not a soft supplement. Opportunities often travel through people: referrals, advice, introductions, collaboration, feedback, mentorship, and trust. Talent matters, but talent that no one trusts or knows about has limited reach.",
      "Weak ties and strong ties serve different functions. Strong ties provide loyalty, depth, emotional support, and repeated collaboration. Weak ties often bring new information because they move in different circles. A healthy network has both.",
      "The danger is transactional networking. If every interaction is an extraction attempt, people feel it. Trust does not compound when generosity is merely a tactic. The best networking often looks like being useful before needing something, staying in touch without urgency, sharing credit, and doing excellent work that makes referral easy.",
      "Reputation compounds slowly. Being reliable once helps. Being reliable repeatedly changes how people categorize you. The same is true for selfishness, flakiness, gossip, generosity, competence, and courage. In repeated professional communities, reputation becomes an invisible asset or liability.",
      "Relationships also keep achievement human. A successful career with no trust, friendship, or support may look impressive and feel empty. Barker's success lens repeatedly returns to the fact that outcomes are social."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Network quality",
        columns: ["Pattern", "Weak version", "Strong version"],
        rows: [
          ["Networking", "Ask when you need something", "Create value and stay connected"],
          ["Weak ties", "Collect contacts", "Maintain bridges to different worlds"],
          ["Strong ties", "Assume loyalty without care", "Invest in trust and reciprocity"],
          ["Reputation", "Manage image", "Repeatedly behave in ways people can trust"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "A job seeker reaches out only when unemployed.",
        defaultApproach:
          "Send urgent messages asking for referrals from distant contacts.",
        betterApproach:
          "Build relationships over time through useful sharing, thoughtful follow-up, and genuine interest before a need becomes urgent.",
        whyItWorks:
          "The network rests on trust and familiarity rather than sudden extraction."
      }
    ],
    whyThisMatters:
      "Many opportunities are created or blocked by trust, reputation, and social connection.",
    practicalApplication:
      "Choose a small number of relationships to strengthen through usefulness, consistency, and genuine attention.",
    commonMistakes: [
      "Treating networking as contact collection",
      "Asking for help before establishing trust",
      "Neglecting strong ties while chasing visibility"
    ],
    misconceptions: [
      {
        misconception: "Networking is manipulative.",
        correction:
          "It becomes manipulative when it is purely extractive; healthy networks are built through mutual value and trust."
      }
    ],
    lens:
      "Think less about who can help you this week and more about what reputation your repeated behavior is creating.",
    anchors: [
      "Relationships carry opportunity.",
      "Reputation is social capital that compounds through repeated behavior."
    ],
    takeaways: [
      "Weak ties and strong ties both matter.",
      "Generosity and reliability build better networks than extraction.",
      "Success is deeply social."
    ],
    examples: [
      "A former colleague refers someone because reliability was proven.",
      "A weak tie introduces a new industry possibility.",
      "A mentor relationship grows from consistent curiosity and follow-through."
    ],
    relatedSections: ["nice-jerks-winning", "happiness-balance-life"]
  }),
  lesson({
    id: "work-meaning-cost",
    title: "Work, Meaning, and the Cost of Achievement",
    eyebrow: "Tradeoffs",
    minutes: 32,
    summary:
      "Achievement often requires real costs, so success must be defined beyond external markers if it is going to remain worth pursuing.",
    objectives: [
      "Understand achievement tradeoffs",
      "Define success beyond visible markers",
      "Recognize hidden costs of extreme performance"
    ],
    concepts: ["achievement", "meaning", "cost", "tradeoffs"],
    body: [
      "Barker is interested in success, but not in a fantasy version where achievement has no cost. High performers often pay with time, health, relationships, leisure, emotional bandwidth, or flexibility. Sometimes the tradeoff is worth it. Sometimes the visible success hides a life the observer would not actually choose.",
      "This is why meaning matters. External markers such as title, income, awards, status, and visibility are not meaningless, but they are incomplete. If achievement is disconnected from contribution, growth, autonomy, relationships, or values, it can become a scoreboard that never satisfies.",
      "Extreme performers are often admired selectively. People see the medal, company, book, wealth, or title and miss the sacrifices, obsession, support systems, luck, and opportunity costs. Learning from them requires asking not only what they did, but what they gave up and whether you would choose the same bargain.",
      "Career ambition becomes healthier when the cost is visible. A demanding role may be worth choosing for a season. A startup may be worth the uncertainty. A craft may be worth years of slow progress. But pretending there is no cost creates resentment and confusion.",
      "The mature question is: what kind of success would still feel like success from the inside?"
    ],
    support: [
      {
        type: "framework",
        title: "Achievement cost audit",
        stages: [
          { name: "External", description: "What visible marker are you pursuing?" },
          { name: "Internal", description: "What meaning or value does it serve?" },
          { name: "Cost", description: "What time, health, relationship, or freedom cost follows?" },
          { name: "Season", description: "Is this cost sustainable, temporary, or unacceptable?" }
        ]
      },
      {
        type: "keyDistinction",
        title: "Admiring success versus choosing its bargain",
        not: "Wanting the visible outcome while ignoring its hidden costs.",
        but: "Evaluating whether the full tradeoff fits your values and life."
      }
    ],
    whyThisMatters:
      "Success can become hollow when people chase symbols without understanding the life required to maintain them.",
    practicalApplication:
      "For a major ambition, name the hidden costs and decide which are acceptable, seasonal, or deal-breaking.",
    commonMistakes: [
      "Admiring outcomes without studying costs",
      "Letting status define success by default",
      "Assuming meaning will arrive after achievement"
    ],
    misconceptions: [
      {
        misconception: "If something is impressive, it is worth wanting.",
        correction:
          "The worth of an achievement depends on the full life it creates, not only how it looks."
      }
    ],
    lens:
      "Judge success by the bargain, not only the trophy.",
    anchors: [
      "Achievement has costs.",
      "Success should feel worth living, not merely worth displaying."
    ],
    takeaways: [
      "Extreme performance often requires hidden sacrifices.",
      "Meaning protects achievement from emptiness.",
      "The right ambition depends on the life attached to it."
    ],
    examples: [
      "A promotion brings money and influence but less family time.",
      "A founder accepts a season of uncertainty for a meaningful mission.",
      "An artist chooses slower growth to protect creative control."
    ],
    relatedSections: ["happiness-balance-life", "luck-timing-stories"]
  }),
  lesson({
    id: "rules-rule-breakers",
    title: "Rules, Rule-Breakers, and Strategic Nonconformity",
    eyebrow: "Nonconformity",
    minutes: 32,
    summary:
      "Rules help in stable systems, but breakthrough success may require intelligent nonconformity that is grounded in reality rather than rebellion.",
    objectives: [
      "Understand when rules are useful",
      "Recognize intelligent nonconformity",
      "Avoid rebellion as a personality strategy"
    ],
    concepts: ["rules", "nonconformity", "outsiders", "breakthroughs"],
    body: [
      "Rules are not automatically oppressive. In stable systems, they transmit accumulated knowledge, reduce risk, create fairness, and help beginners perform reliably. School, medicine, law, aviation, accounting, and many corporate systems depend on rule-following for good reasons.",
      "But some systems reward rule-breaking when the rules encode outdated assumptions. Outsiders sometimes see opportunities insiders miss because they are not overtrained in what cannot be done. Entrepreneurs, artists, scientists, and reformers may need to violate norms to create something new.",
      "The key word is strategic. Nonconformity is useful when it reveals a better way to create value, not when it merely expresses personality. Rebellion without evidence is just another formula. It may feel brave while producing little.",
      "Knowing when to follow or break rules requires understanding the system. Are the rules protecting safety, trust, and quality? Or are they preserving status, inertia, and outdated constraints? What happens if the rule is broken? Who bears the risk?",
      "Barker's broader lesson is that success often belongs to people who know which game they are in. In some games, rule-following is the path. In others, intelligent deviation creates the edge."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Rule diagnosis",
        columns: ["Rule function", "Follow when", "Challenge when"],
        rows: [
          ["Safety", "Mistakes cause serious harm", "Evidence shows a safer method"],
          ["Quality", "Standards protect customers", "The standard blocks better outcomes"],
          ["Status", "It coordinates expertise", "It merely protects insiders"],
          ["Tradition", "It preserves hard-won knowledge", "Context has changed"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Strategic nonconformity versus rebellion",
        not: "Breaking rules to feel original, superior, or unconstrained.",
        but: "Departing from norms because evidence shows a better path in this context."
      }
    ],
    whyThisMatters:
      "People need to know whether their environment rewards compliance, creativity, disciplined deviation, or exit.",
    practicalApplication:
      "Before breaking a rule, identify what the rule protects and what evidence suggests a better approach.",
    commonMistakes: [
      "Assuming rules are always limiting",
      "Mistaking rebellion for insight",
      "Following rules in systems where the game has changed"
    ],
    misconceptions: [
      {
        misconception: "Rule-breakers succeed because they ignore norms.",
        correction:
          "The best rule-breakers understand norms well enough to know which ones no longer serve reality."
      }
    ],
    lens:
      "Ask whether the rule protects value or protects inertia.",
    anchors: [
      "Rules help in stable systems and limit in changed systems.",
      "Nonconformity needs evidence, not attitude."
    ],
    takeaways: [
      "Rule-following and rule-breaking are both contextual.",
      "Outsiders can see opportunities insiders miss.",
      "Strategic nonconformity is grounded in value creation."
    ],
    examples: [
      "A doctor follows safety protocols because stakes are high.",
      "A startup challenges an industry assumption that customers no longer accept.",
      "A creative worker breaks format conventions to serve the audience better."
    ],
    relatedSections: ["context-hidden-variable", "luck-timing-stories"]
  }),
  lesson({
    id: "luck-timing-stories",
    title: "Luck, Timing, and the Stories We Tell About Success",
    eyebrow: "Causality",
    minutes: 32,
    summary:
      "Success stories often clean up luck, timing, and survivorship bias, so learning from winners requires humility and careful interpretation.",
    objectives: [
      "Recognize luck and timing in success",
      "Understand hindsight and survivorship bias",
      "Learn from success stories without copying blindly"
    ],
    concepts: ["luck", "timing", "hindsight", "survivorship bias"],
    body: [
      "People prefer clean success stories. The founder saw the future. The athlete wanted it more. The executive made the bold choice. The artist trusted their vision. These stories may contain truth, but they often understate luck, timing, networks, starting conditions, and randomness.",
      "Hindsight makes outcomes look more inevitable than they were. Once a person succeeds, their traits are reinterpreted as causes. Stubbornness becomes vision. Risk becomes courage. Weirdness becomes originality. But if the outcome had failed, the same traits might have been described as delusion, recklessness, or immaturity.",
      "Timing matters because environments change. A strategy that worked in one market, economy, technology cycle, or cultural moment may fail elsewhere. Learning from successful people requires asking what was transferable and what depended on circumstances.",
      "Respecting luck does not mean becoming passive. It means building more robust strategies: increase surface area for opportunity, keep learning, build relationships, manage downside, and avoid moralizing outcomes too quickly.",
      "The healthiest success mindset combines agency with humility. Work matters. Choices matter. So do timing, randomness, and conditions you did not control."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Same trait, different story",
        explanation:
          "After success, traits are often interpreted positively; after failure, the same traits are interpreted negatively.",
        useWhen:
          "You are tempted to copy a winner's behavior without examining context and luck."
      },
      {
        type: "comparisonTable",
        title: "Learning from winners carefully",
        columns: ["Question", "Purpose"],
        rows: [
          ["What was under their control?", "Separate agency from circumstance"],
          ["What timing helped?", "Identify environmental tailwinds"],
          ["Who failed doing the same thing?", "Reduce survivorship bias"],
          ["What principle transfers?", "Avoid copying surface behavior"]
        ]
      }
    ],
    whyThisMatters:
      "Misreading success stories can make people copy non-transferable behaviors and blame themselves for missing invisible advantages.",
    practicalApplication:
      "When studying a successful person, identify controllable behaviors, timing advantages, hidden support, and failed comparables.",
    commonMistakes: [
      "Assuming winners know exactly why they won",
      "Ignoring survivorship bias",
      "Using luck as an excuse for passivity"
    ],
    misconceptions: [
      {
        misconception: "Acknowledging luck devalues effort.",
        correction:
          "It places effort inside a more accurate picture of reality."
      }
    ],
    lens:
      "Learn principles from success, but do not mistake the winner's story for the whole causal map.",
    anchors: [
      "Hindsight makes success look cleaner than it was.",
      "Agency matters, and so do luck and timing."
    ],
    takeaways: [
      "Success stories often understate randomness.",
      "Timing can make the same behavior succeed or fail.",
      "Humility improves learning from winners."
    ],
    examples: [
      "A startup benefits from a technology wave that later entrants miss.",
      "A career breakthrough comes through a weak tie at the right moment.",
      "A bold decision is celebrated only because the outcome worked."
    ],
    relatedSections: ["confidence-useful-delusional", "final-success-strategy"]
  }),
  lesson({
    id: "happiness-balance-life",
    title: "Happiness, Balance, and the Life Outside the Resume",
    eyebrow: "Life",
    minutes: 32,
    summary:
      "Achievement alone does not guarantee happiness; relationships, meaning, autonomy, health, and ordinary life must be part of the success equation.",
    objectives: [
      "Understand the limits of achievement",
      "Balance ambition with relationships and meaning",
      "Define success beyond status"
    ],
    concepts: ["happiness", "balance", "relationships", "meaning"],
    body: [
      "Barker's book is not anti-achievement. It is anti-narrowness. A person can win professionally and lose contact with the life that was supposed to make winning worthwhile. The resume can improve while health, friendship, family, presence, and meaning quietly erode.",
      "Achievement is seductive because it is visible and measurable. Titles, income, rankings, awards, and audience size provide clean signals. Happiness and meaning are messier. They depend on relationships, autonomy, contribution, recovery, identity, and whether daily life feels livable.",
      "Relationships are especially important because they are not merely support systems for ambition. They are part of the point. A strategy that treats people only as networking assets, employees, or audience members may produce advancement and loneliness at the same time.",
      "Balance does not mean equal time for everything. It means conscious tradeoffs. Some seasons demand intensity. But intensity should be chosen, bounded, and reviewed rather than allowed to become permanent by default.",
      "The deepest question is not how to become impressive. It is how to build a life where achievement, relationships, health, and meaning can coexist well enough to be worth living."
    ],
    support: [
      {
        type: "framework",
        title: "Whole-life success check",
        stages: [
          { name: "Achievement", description: "What external progress is happening?" },
          { name: "Relationships", description: "What trust, love, and belonging are being built or eroded?" },
          { name: "Health", description: "What is the body paying for this strategy?" },
          { name: "Meaning", description: "Does the work serve values beyond status?" },
          { name: "Autonomy", description: "Does success create more choice or less?" }
        ]
      },
      {
        type: "keyDistinction",
        title: "Balance versus comfort",
        not: "Avoiding demanding seasons or difficult ambition.",
        but: "Making tradeoffs consciously so achievement does not quietly consume everything else."
      }
    ],
    whyThisMatters:
      "A success strategy is incomplete if it wins externally while undermining the life it was meant to improve.",
    practicalApplication:
      "Evaluate your current ambition across achievement, relationships, health, meaning, and autonomy.",
    commonMistakes: [
      "Letting measurable success crowd out unmeasured life",
      "Assuming happiness will arrive after the next milestone",
      "Calling permanent overwork a temporary season"
    ],
    misconceptions: [
      {
        misconception: "Balance means lack of ambition.",
        correction:
          "Balance means ambition remains connected to a life worth living."
      }
    ],
    lens:
      "Ask what your success strategy is doing to the person who has to live inside it.",
    anchors: [
      "The resume is not the whole life.",
      "Achievement should serve a life, not consume it."
    ],
    takeaways: [
      "Achievement alone does not guarantee happiness.",
      "Relationships and meaning are central success variables.",
      "Tradeoffs should be conscious and revisited."
    ],
    examples: [
      "A high-performing professional protects one non-negotiable family rhythm.",
      "A founder defines what costs are acceptable only for a season.",
      "A student chooses a path that fits both ambition and mental health."
    ],
    relatedSections: ["work-meaning-cost", "networks-relationships-social-capital"]
  }),
  lesson({
    id: "final-success-strategy",
    title: "Final Synthesis: Building a Success Strategy That Actually Fits",
    eyebrow: "Synthesis",
    minutes: 36,
    summary:
      "The book becomes a practical lens for building success around fit, context, relationships, calibrated confidence, strategic persistence, and whole-life meaning.",
    objectives: [
      "Connect the book's main ideas",
      "Build a context-sensitive success strategy",
      "Avoid rigid formulas and status-driven definitions"
    ],
    concepts: ["synthesis", "fit", "strategy", "tradeoffs"],
    body: [
      "Barking Up the Wrong Tree is best understood as a correction to simplistic success thinking. It does not replace one formula with another. It teaches that success is conditional: traits depend on context, advice depends on the game, persistence depends on evidence, confidence depends on calibration, and achievement depends on the life it creates.",
      "The first strategic question is fit. What game rewards your strengths and makes your weaknesses manageable? The second is social: what relationships, reputation, and trust are compounding around you? The third is judgment: where should you persist, quit, follow rules, or break them? The fourth is humility: what role do luck, timing, and hidden costs play?",
      "A good success strategy is neither naive nor cynical. It recognizes that nice behavior needs boundaries, confidence needs feedback, grit needs exit criteria, networking needs generosity, and ambition needs meaning. Each principle becomes useful only when paired with its limit.",
      "Months later, remember that the book's central lesson is not work harder or be different or never give up. It is: understand the game, understand yourself, build relationships, adapt intelligently, and define success broadly enough that winning does not hollow out your life.",
      "The practical result is a strategy that fits. Not the most impressive strategy in the abstract. Not the most heroic. The one that lets your traits, values, relationships, and opportunities compound in a context where the costs are worth paying."
    ],
    support: [
      {
        type: "framework",
        title: "Fit-based success strategy",
        stages: [
          { name: "Game", description: "What environment are you actually playing in?" },
          { name: "Profile", description: "Which traits become advantages or liabilities there?" },
          { name: "People", description: "What relationships and reputation are compounding?" },
          { name: "Decision", description: "Where should you persist, quit, follow, or deviate?" },
          { name: "Life", description: "What costs does this success create outside the scoreboard?" }
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text:
          "Success is not a universal formula. It is a fit between person, game, timing, relationships, strategy, and values, adjusted with humility as reality changes."
      }
    ],
    whyThisMatters:
      "The book's value is a more adaptive strategy for achievement that respects context, tradeoffs, and whole-life outcomes.",
    practicalApplication:
      "Use the fit-based strategy lens to evaluate your current career path, project, or ambition.",
    commonMistakes: [
      "Turning nuanced findings into new rigid rules",
      "Defining success only by external markers",
      "Ignoring context when copying successful people"
    ],
    misconceptions: [
      {
        misconception: "The book says success is too complex to plan.",
        correction:
          "It says planning improves when it accounts for context, fit, luck, relationships, and tradeoffs."
      }
    ],
    lens:
      "Build a strategy for your game, your traits, your relationships, and the life you actually want.",
    anchors: [
      "Success strategy should fit the person and context.",
      "Every success principle needs its limit."
    ],
    takeaways: [
      "Context determines which advice works.",
      "Strengths, weaknesses, grit, confidence, and relationships all have tradeoffs.",
      "Whole-life success matters more than resume-only success."
    ],
    examples: [
      "A career pivot succeeds because it moves a trait into the right context.",
      "A founder quits weak markets to persist in a better one.",
      "A high achiever redefines success to include relationships and health."
    ],
    relatedSections: ["success-advice-misleading", "happiness-balance-life"]
  })
];

export const barkingUpTheWrongTree: Book = {
  slug: "barking-up-the-wrong-tree",
  title: "Barking Up the Wrong Tree",
  author: "Eric Barker",
  category: "Success / Psychology / Career Strategy",
  difficulty: "Intermediate",
  completionTime: "6h 27m",
  progress: 0,
  coverTone:
    "from-emerald-100 via-sky-100 to-amber-100 dark:from-emerald-950/40 dark:via-sky-950/35 dark:to-amber-950/30",
  description:
    "An evidence-informed curriculum on success, context, strengths, weakness, confidence, grit, relationships, luck, happiness, and building a strategy that fits real life.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "success",
    "career",
    "psychology",
    "strengths",
    "weakness",
    "confidence",
    "grit",
    "relationships",
    "networking",
    "decision-making",
    "happiness",
    "meaning",
    "achievement",
    "tradeoffs"
  ],
  intendedOutcomes: [
    "Understand why success advice is often oversimplified",
    "Identify the role of context in success",
    "Understand how strengths and weaknesses can invert depending on environment",
    "Understand the value and limits of confidence, grit, and networking",
    "Think more clearly about career strategy",
    "Balance achievement with relationships and happiness",
    "Apply success principles without turning them into rigid formulas"
  ],
  promise:
    "After completing this curriculum, you will understand Eric Barker's evidence-informed view of success: why common success advice is often incomplete, why context matters, how strengths and weaknesses can both become advantages, and how achievement, relationships, confidence, grit, and meaning interact in real life.",
  recommendedAudience: [
    "Readers evaluating career strategy and achievement",
    "Professionals who want nuanced success principles",
    "Founders, students, and leaders balancing ambition with life tradeoffs",
    "Anyone tired of one-size-fits-all success advice"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around success research, context, strengths, relationships, grit, luck, and happiness. It does not reproduce long passages or chapter text.",
  sections
};
