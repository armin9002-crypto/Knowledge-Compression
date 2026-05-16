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
    id: "real-meaning-not-giving",
    title: "The Real Meaning of Not Giving a F*ck",
    eyebrow: "Foundation",
    minutes: 31,
    summary:
      "Manson's central phrase is not an argument for apathy. It is an argument for choosing what deserves the real cost of your attention, identity, and emotional energy.",
    objectives: [
      "Understand why not caring is really selective caring",
      "Recognize the exhaustion of caring about everything",
      "Distinguish disciplined priorities from apathy"
    ],
    concepts: ["selective commitment", "attention", "emotional cost", "priorities"],
    body: [
      "The title sounds like a rejection of caring, but the book's deeper argument is that a meaningful life requires caring with more discipline. Every concern has a cost. To care about status, approval, money, romance, work, family, reputation, politics, appearance, and every passing opinion with equal intensity is to spend your nervous system as if it were unlimited.",
      "Manson's point is not that nothing matters. That is emptiness, not freedom. The point is that fewer things should be allowed to matter enough to govern your mood, self-respect, decisions, and identity. Maturity is not emotional numbness; it is selective commitment. You choose the problems, values, relationships, and responsibilities that are worth the discomfort they will inevitably bring.",
      "This applies everywhere. At work, you may need to stop caring about looking impressive in every meeting so you can care about doing excellent work. In relationships, you may need to stop caring about being universally liked so you can care about honesty and trust. With money, you may need to stop caring about status display so you can care about autonomy. With social approval, you may need to accept that some people will misunderstand you if you live by real priorities.",
      "The book's bluntness works because it exposes a polite lie: many people say they want happiness, but they are actually trying to avoid the pain of choosing. If everything matters, nothing has to be chosen. But life forces selection anyway through time, attention, energy, and death. The real choice is whether your priorities are inherited unconsciously or chosen deliberately.",
      "Not giving a f*ck, then, is a values discipline. It asks what is worth the cost. If something is not worth stress, conflict, sacrifice, or repetition, it may not deserve the emotional authority you have given it."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Indifference versus disciplined prioritization",
        not: "Withdrawing from life, pretending nothing hurts, or acting above ordinary human attachment.",
        but: "Choosing which values, responsibilities, and people are worth the inevitable discomfort of caring."
      },
      {
        type: "expandedExample",
        scenario: "A professional is exhausted by trying to look successful to peers.",
        defaultApproach:
          "Say yes to visible projects, perform busyness, and keep checking whether others seem more impressive.",
        betterApproach:
          "Choose the few outcomes that reflect real values, such as craft, reliability, autonomy, or contribution, and let some status signals go unanswered.",
        whyItWorks:
          "The emotional budget moves from comparison to values-backed commitment."
      }
    ],
    whyThisMatters:
      "The rest of the book depends on understanding that freedom comes from choosing better concerns, not from escaping concern altogether.",
    practicalApplication:
      "When a concern is consuming you, ask whether it deserves the cost it is extracting from your attention, integrity, and energy.",
    commonMistakes: [
      "Using the phrase as permission to be careless or cruel",
      "Confusing emotional numbness with maturity",
      "Trying to care about every possible metric of success"
    ],
    misconceptions: [
      {
        misconception: "The book teaches apathy.",
        correction:
          "It teaches that caring is unavoidable, so the serious question is what deserves your care."
      }
    ],
    lens:
      "Treat every concern as a cost-bearing commitment. If it is not worth the cost, reduce its authority.",
    anchors: [
      "Not giving a f*ck is not indifference; it is disciplined prioritization.",
      "A meaningful life is built by caring deeply about fewer, better things."
    ],
    takeaways: [
      "Caring less means caring better.",
      "Attention and emotional energy are finite.",
      "Maturity means selective commitment rather than universal approval."
    ],
    examples: [
      "Choosing craft over workplace status theater.",
      "Choosing honest relationships over being liked by everyone.",
      "Choosing financial autonomy over visible consumption."
    ],
    relatedSections: ["choosing-worth-caring", "values-hidden-architecture"]
  }),
  lesson({
    id: "problem-constant-positivity",
    title: "The Problem With Constant Positivity",
    eyebrow: "Emotion",
    minutes: 30,
    summary:
      "Forced positivity can become avoidance when it treats normal pain, disappointment, and frustration as evidence that life has gone wrong.",
    objectives: [
      "Understand why feeling good all the time is a trap",
      "See negative emotions as information",
      "Separate optimism from denial"
    ],
    concepts: ["forced positivity", "avoidance", "negative emotion", "honesty"],
    body: [
      "Manson pushes against a style of self-help that treats negative emotion as a malfunction. If you are frustrated, you need a better mindset. If you are sad, you need gratitude. If you are anxious, you need confidence. These tools can help in some contexts, but they become harmful when they imply that ordinary pain means you are failing at life.",
      "Pain, loss, disappointment, insecurity, and conflict are not interruptions to a meaningful life. They are part of one. Trying to feel good all the time can make people feel worse because it creates a second layer of suffering: not only am I hurt, but I am also failing because I am hurt.",
      "Negative emotions often contain useful information. Anger may show a boundary issue. Anxiety may show uncertainty or care. Sadness may show attachment or loss. Envy may show a value you have not admitted. Shame may show a fragile identity system. The point is not to obey every emotion, but to listen before covering it with positivity.",
      "Modern culture amplifies the problem by selling extraordinary happiness as a normal baseline. Social media displays curated ease. Advertising promises transformation. Self-help can imply that the right technique will remove insecurity. Manson's counterargument is more adult: the goal is not constant positivity, but a more honest relationship with reality.",
      "Optimism is useful when it supports action and resilience. It becomes denial when it refuses facts. Emotional maturity can include hope, but it does not require pretending that pain is not painful."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Optimism versus denial",
        not: "Using positive language to avoid grief, risk, failure, or responsibility.",
        but: "Maintaining enough hope to act while staying in contact with facts."
      },
      {
        type: "misconception",
        misconception: "Negative emotions mean something is wrong with me.",
        correction:
          "Negative emotions often mean something matters, something hurts, or something needs attention.",
        whyItMatters:
          "Treating all discomfort as failure turns normal life into a self-improvement emergency."
      }
    ],
    whyThisMatters:
      "If pain is treated as abnormal, people will organize their lives around avoiding it instead of choosing worthwhile forms of it.",
    practicalApplication:
      "When a negative emotion appears, ask what information it may contain before trying to replace it with a better mood.",
    commonMistakes: [
      "Using positivity to avoid hard truths",
      "Assuming happiness should be the default emotional state",
      "Obeying every negative emotion as if it were wisdom"
    ],
    misconceptions: [
      {
        misconception: "Rejecting forced positivity means becoming pessimistic.",
        correction:
          "It means making room for the full emotional range required by reality."
      }
    ],
    lens:
      "Pain is not automatically a problem to eliminate. Sometimes it is information about what deserves attention.",
    anchors: [
      "Forced positivity can become avoidance.",
      "The goal is emotional honesty, not permanent good feelings."
    ],
    takeaways: [
      "Negative emotions are normal and often useful.",
      "Trying to feel good all the time can increase suffering.",
      "Optimism must remain connected to reality."
    ],
    examples: [
      "Career frustration reveals a value conflict.",
      "Relationship sadness reveals attachment and loss.",
      "Anxiety about a decision reveals uncertainty worth examining."
    ],
    relatedSections: ["good-problems-bad-problems", "responsibility-without-blame"]
  }),
  lesson({
    id: "choosing-worth-caring",
    title: "Choosing What Is Worth Caring About",
    eyebrow: "Priorities",
    minutes: 31,
    summary:
      "Every life involves tradeoffs, so the quality of a life depends partly on whether its concerns were chosen deliberately or inherited unconsciously.",
    objectives: [
      "Understand attention as finite",
      "Recognize inherited priorities",
      "Evaluate whether a concern deserves your energy"
    ],
    concepts: ["tradeoffs", "attention", "inherited priorities", "concern"],
    body: [
      "A life cannot care deeply about everything. Time, attention, emotional energy, money, and relational capacity are finite. The question is not whether tradeoffs exist. The question is whether you are making them consciously.",
      "Many concerns are inherited. Culture teaches people to care about visibility, wealth, attractiveness, winning, productivity, novelty, and being admired. Families teach people what counts as respectable or shameful. Peer groups teach what earns belonging. Social media teaches what deserves comparison. Without deliberate inspection, a person may spend years pursuing values they never chose.",
      "Manson's philosophy asks for a harder standard: what is actually worth the cost? A concern deserves serious care when it is connected to a value you respect, when it is partly within your control, when the pain it brings is meaningful, and when the long-term tradeoff is acceptable. It deserves less authority when it mostly feeds comparison, fear, ego, or inherited expectation.",
      "Caring deeply about a few things creates strength because it organizes sacrifice. A person who cares about being liked by everyone cannot speak honestly. A person who cares about honest contribution can survive some disapproval. A person who cares about status cannot stop chasing. A person who cares about mastery can endure slow progress.",
      "The discipline is not a one-time decision. Life keeps offering new objects of concern. Every season requires pruning. What mattered at twenty may not deserve the same authority at forty. What matters in public may not matter at the bedside, the funeral, the hard conversation, or the quiet work of building a decent life."
    ],
    support: [
      {
        type: "framework",
        title: "Concern quality test",
        stages: [
          { name: "Chosen", description: "Is this value yours, or did you inherit it from approval systems?" },
          { name: "Controllable", description: "Can your behavior meaningfully serve it?" },
          { name: "Costly", description: "Are you willing to pay the discomfort it requires?" },
          { name: "Durable", description: "Will it still matter when status noise fades?" }
        ]
      },
      {
        type: "expandedExample",
        scenario: "A creator checks audience reaction constantly.",
        defaultApproach:
          "Let every comment, metric, and comparison dictate mood and output.",
        betterApproach:
          "Choose to care primarily about craft, honest usefulness, and sustainable publishing rhythm while treating metrics as feedback, not identity.",
        whyItWorks:
          "The creator keeps useful information without surrendering self-respect to every signal."
      }
    ],
    whyThisMatters:
      "Your concerns quietly allocate your life. Choosing them better changes what pain you accept and what noise you ignore.",
    practicalApplication:
      "List one current worry and identify whether it is chosen, controllable, worth the cost, and durable.",
    commonMistakes: [
      "Confusing inherited status markers with personal values",
      "Trying to care equally about conflicting priorities",
      "Treating every emotional reaction as evidence that something deserves attention"
    ],
    misconceptions: [
      {
        misconception: "Prioritizing means abandoning all secondary concerns.",
        correction:
          "It means deciding which concerns get authority when tradeoffs appear."
      }
    ],
    lens:
      "A concern earns authority only when it reflects a value you would choose with clear eyes.",
    anchors: [
      "Every life involves tradeoffs; maturity chooses them deliberately.",
      "Caring deeply about fewer things creates more coherent sacrifice."
    ],
    takeaways: [
      "Attention and emotional energy are finite.",
      "Many priorities are inherited rather than chosen.",
      "Better concerns create better forms of pain."
    ],
    examples: [
      "Choosing health over constant availability.",
      "Choosing honesty over universal approval.",
      "Choosing mastery over fast recognition."
    ],
    relatedSections: ["values-hidden-architecture", "importance-saying-no"]
  }),
  lesson({
    id: "values-hidden-architecture",
    title: "Values: The Hidden Architecture of Your Life",
    eyebrow: "Values",
    minutes: 34,
    summary:
      "Values determine what counts as success, failure, threat, pride, shame, and progress; bad values create fragile emotional lives.",
    objectives: [
      "Understand values as emotional architecture",
      "Identify bad values and better values",
      "Choose values that are reality-based and controllable"
    ],
    concepts: ["values", "success", "fragility", "control"],
    body: [
      "Manson's most important move is to make values practical. A value is not merely a word that sounds noble. It is a measuring system. It tells you what counts as success, failure, humiliation, progress, and worth. Change the value, and the emotional meaning of events changes.",
      "Bad values create fragile lives because they depend on unstable externals or shallow metrics. Being liked by everyone makes every disapproval feel catastrophic. Always being right makes correction feel like identity death. Status dominance makes other people's success feel like a threat. Constant pleasure makes ordinary difficulty feel intolerable.",
      "Better values are reality-based, socially constructive, and substantially within your control. Honesty, responsibility, curiosity, courage, discipline, contribution, humility, and craft are not easy, but they give the person something actionable. You cannot control whether everyone likes you. You can control whether you try to tell the truth with care.",
      "Good values do not remove pain. They improve it. Honesty brings the pain of uncomfortable conversations. Discipline brings the pain of repetition. Courage brings the pain of fear. Contribution brings the pain of responsibility. The difference is that these pains build a life you can respect.",
      "The practical question is therefore not what value sounds attractive, but what pain it asks you to choose. Values are proven under cost. If you say you value family but never inconvenience yourself for them, the operative value may be comfort. If you say you value creativity but avoid criticism at all costs, the operative value may be approval."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Fragile and sturdier values",
        columns: ["Fragile value", "Why it breaks", "Sturdier alternative"],
        rows: [
          ["Being liked by everyone", "Other people are uncontrollable", "Honesty and respectful conduct"],
          ["Always being right", "Correction becomes threat", "Curiosity and learning"],
          ["Status dominance", "Comparison never ends", "Contribution and mastery"],
          ["Constant pleasure", "Difficulty becomes failure", "Responsibility and meaning"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Aspirational value versus operative value",
        not: "The value you admire when talking about who you want to be.",
        but: "The value your behavior protects when comfort, approval, money, or status is at stake."
      }
    ],
    whyThisMatters:
      "Values are the control panel behind much emotional experience. If the values are poor, even success can feel unstable.",
    practicalApplication:
      "Inspect a recurring emotional pattern and ask what value is being threatened or protected.",
    commonMistakes: [
      "Choosing values because they sound impressive",
      "Selecting values that depend entirely on other people's reactions",
      "Assuming good values should feel comfortable"
    ],
    misconceptions: [
      {
        misconception: "Better values make life easier.",
        correction:
          "They usually make life more meaningful, not easier."
      }
    ],
    lens:
      "A value is not real until it changes what pain you are willing to accept.",
    anchors: [
      "Values define success and failure before events happen.",
      "Good values create better problems, not problem-free lives."
    ],
    takeaways: [
      "Values shape emotional experience.",
      "Bad values are often external, fragile, or comparison-based.",
      "Better values are reality-based and actionable."
    ],
    examples: [
      "Curiosity makes correction useful rather than humiliating.",
      "Responsibility turns setbacks into response choices.",
      "Contribution reduces obsession with status."
    ],
    relatedSections: ["good-problems-bad-problems", "certainty-doubt-being-wrong"]
  }),
  lesson({
    id: "good-problems-bad-problems",
    title: "Good Problems vs Bad Problems",
    eyebrow: "Suffering",
    minutes: 32,
    summary:
      "Life is not about eliminating problems; it is about choosing problems that are meaningful enough to justify their pain.",
    objectives: [
      "Understand why success creates new problems",
      "Distinguish meaningful pain from pointless pain",
      "Choose problems aligned with better values"
    ],
    concepts: ["problems", "suffering", "tradeoffs", "meaningful pain"],
    body: [
      "Manson argues that the fantasy of a problem-free life is one of the main sources of misery. Every path creates problems. Fitness creates problems of discipline, soreness, planning, and consistency. A strong relationship creates problems of vulnerability, repair, compromise, and truth. Creative work creates problems of doubt, rejection, revision, and patience.",
      "Success does not eliminate problems; it upgrades or changes them. Earning more money may remove scarcity problems and create responsibility, complexity, tax, boundary, or identity problems. Career growth may remove entry-level frustration and create leadership, politics, and tradeoff problems. The question is not whether problems remain. The question is whether they are worth having.",
      "Bad problems are often created by bad values: chasing approval, avoiding discomfort, proving superiority, seeking constant pleasure, refusing responsibility. They repeat without producing respect. Good problems are attached to values you would still choose when the pain is visible.",
      "This reframes ambition. Instead of asking what outcome you want, ask what struggle you are willing to sustain. Many people want the visible result of a craft but not the loneliness of practice. They want intimacy but not vulnerability. They want entrepreneurship but not uncertainty. They want health but not repeated ordinary choices.",
      "A meaningful life is therefore not painless. It is a life where the pain has a reason you can respect."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Problems by value",
        columns: ["Domain", "Bad problem", "Better problem"],
        rows: [
          ["Career", "Managing image constantly", "Building skill through difficult feedback"],
          ["Relationships", "Chasing approval", "Having honest conversations"],
          ["Fitness", "Punishing yourself for appearance", "Training consistently for health"],
          ["Money", "Competing through status spending", "Choosing limits that protect autonomy"],
          ["Creativity", "Avoiding judgment", "Publishing and improving through criticism"]
        ]
      },
      {
        type: "mentalModel",
        name: "Choose the struggle",
        explanation:
          "Every valued outcome comes bundled with recurring discomfort. Wanting the outcome without its struggle is wanting a fantasy.",
        useWhen:
          "You are drawn to a goal but avoiding the daily cost attached to it."
      }
    ],
    whyThisMatters:
      "People make better decisions when they evaluate the problems attached to a path, not only the rewards.",
    practicalApplication:
      "Before committing to a goal, name the recurring problems it will create and decide whether those problems are worth choosing.",
    commonMistakes: [
      "Expecting success to remove difficulty",
      "Choosing outcomes while ignoring the process pain",
      "Staying with bad problems because they are familiar"
    ],
    misconceptions: [
      {
        misconception: "A good life has fewer problems.",
        correction:
          "A good life has problems that are more aligned with values worth respecting."
      }
    ],
    lens:
      "Do not ask only what you want. Ask what problems you are willing to have repeatedly.",
    anchors: [
      "Life is not problem-free; it is problem-selection.",
      "Meaningful pain is pain attached to values you would choose again."
    ],
    takeaways: [
      "Success creates new problems.",
      "Good values create better forms of suffering.",
      "Choosing a path means choosing its recurring difficulties."
    ],
    examples: [
      "Leadership replaces execution problems with people problems.",
      "Marriage replaces loneliness with vulnerability and repair.",
      "Creative ambition replaces obscurity comfort with judgment and revision."
    ],
    relatedSections: ["values-hidden-architecture", "failure-better-values"]
  }),
  lesson({
    id: "responsibility-without-blame",
    title: "Responsibility Without Blame",
    eyebrow: "Agency",
    minutes: 33,
    summary:
      "Responsibility is about response, not fault: you can be responsible for what you do next even when you did not cause what happened.",
    objectives: [
      "Separate responsibility from blame",
      "Understand why blame can reduce agency",
      "Use responsibility without self-punishment"
    ],
    concepts: ["responsibility", "blame", "agency", "response"],
    body: [
      "One of the book's most useful distinctions is between fault and responsibility. Fault asks who caused the situation. Responsibility asks who will respond now. They often overlap, but not always. You may not be at fault for a layoff, a childhood wound, a partner's betrayal, an illness, or an unfair setback. You are still responsible for what you do with the life in front of you.",
      "This idea can sound harsh if stripped of compassion. Manson is not saying that injustice is imaginary or that people should blame themselves for everything. He is saying that agency begins where response begins. If you wait for perfect fairness before acting, your life remains controlled by what happened and by whoever caused it.",
      "Blame can be clarifying when accountability matters. But as a life strategy, blame often narrows power. It keeps attention fixed on why the situation should not have happened. Responsibility shifts attention toward the next choice: what boundary, repair, decision, skill, conversation, or exit is now required?",
      "The danger is self-punishment. Responsibility does not mean treating every pain as proof of personal failure. It means owning your participation in the next step. You can grieve and still act. You can name harm and still choose. You can acknowledge unfairness and still build.",
      "This is emotional adulthood: not pretending you caused everything, and not pretending you are helpless because you did not."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Fault versus responsibility",
        not: "Assuming you caused the problem or deserve the pain.",
        but: "Accepting that your next response belongs to you."
      },
      {
        type: "expandedExample",
        scenario: "Someone is laid off because of company mismanagement.",
        defaultApproach:
          "Stay consumed by resentment and wait for the unfairness to be acknowledged before moving.",
        betterApproach:
          "Name the unfairness, process the loss, update finances, contact networks, and decide what the next career move requires.",
        whyItWorks:
          "The person refuses self-blame while reclaiming response power."
      }
    ],
    whyThisMatters:
      "The distinction protects agency without requiring people to deny injustice, harm, or bad luck.",
    practicalApplication:
      "In a painful situation, write two separate statements: what was not your fault, and what is now your responsibility.",
    commonMistakes: [
      "Turning responsibility into self-blame",
      "Using blame to avoid the next hard action",
      "Pretending accountability is irrelevant when harm was caused"
    ],
    misconceptions: [
      {
        misconception: "If I am responsible, it must be my fault.",
        correction:
          "Responsibility is about response. Fault is about cause."
      }
    ],
    lens:
      "Ask what response belongs to you now, even if the cause did not.",
    anchors: [
      "You may not have caused it, but your response is still yours.",
      "Responsibility restores agency without requiring self-blame."
    ],
    takeaways: [
      "Fault and responsibility are different questions.",
      "Blame can reduce agency when it becomes the whole story.",
      "Compassion and responsibility can coexist."
    ],
    examples: [
      "A betrayal is not your fault, but healing and boundaries are your responsibility.",
      "An unfair job loss is not your fault, but your next step is yours.",
      "A difficult upbringing is not your fault, but adult patterns need ownership."
    ],
    relatedSections: ["certainty-doubt-being-wrong", "final-values-operating-system"]
  }),
  lesson({
    id: "certainty-doubt-being-wrong",
    title: "Certainty, Doubt, and Being Wrong",
    eyebrow: "Humility",
    minutes: 31,
    summary:
      "Growth requires a less fragile relationship with being wrong because identity often turns correction into threat.",
    objectives: [
      "Understand why certainty protects identity",
      "Use doubt as a tool for growth",
      "Become less fragile around correction"
    ],
    concepts: ["certainty", "doubt", "identity", "humility"],
    body: [
      "People cling to certainty because uncertainty is uncomfortable and because beliefs often become identity. If I am wrong about my career, relationship, politics, talent, values, or story about myself, then who am I? The mind protects itself by turning being wrong into danger.",
      "Manson argues that growth requires staying open to the possibility that your current interpretation is incomplete. This is not weak self-doubt. It is functional humility. You can act without pretending that your map is perfect.",
      "Being wrong is painful when your value is always being right. It becomes useful when your value is learning, honesty, or responsibility. The same correction that humiliates one identity can strengthen another. Values determine whether feedback is experienced as death or data.",
      "Doubt also protects relationships. If you can doubt your first interpretation, you can listen better. If you can admit error, repair becomes possible. If you can update beliefs, you do not need to defend old mistakes forever.",
      "The mature practice is not chronic indecision. It is active humility: choose, act, observe, update. The person who can be wrong without collapsing becomes more capable of truth."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Wrong as data",
        explanation:
          "When learning is the value, being wrong becomes information that improves the next decision rather than evidence against your worth.",
        useWhen:
          "Correction feels threatening, humiliating, or identity-shaking."
      },
      {
        type: "keyDistinction",
        title: "Humility versus indecision",
        not: "Refusing to act because certainty is impossible.",
        but: "Acting with enough openness to update when reality teaches you something."
      }
    ],
    whyThisMatters:
      "A fragile relationship with being wrong traps people inside outdated beliefs, poor decisions, and defensive relationships.",
    practicalApplication:
      "When corrected, ask what value is being threatened: truth, learning, image, control, or status.",
    commonMistakes: [
      "Treating correction as humiliation",
      "Using doubt as an excuse not to act",
      "Defending old beliefs because they once protected identity"
    ],
    misconceptions: [
      {
        misconception: "Confidence means rarely doubting yourself.",
        correction:
          "The strongest confidence can tolerate doubt because it is grounded in learning rather than image."
      }
    ],
    lens:
      "If being wrong feels unbearable, inspect the value that made rightness so important.",
    anchors: [
      "Being wrong is devastating only when rightness is your identity.",
      "Act, observe, update."
    ],
    takeaways: [
      "Certainty often protects identity.",
      "Doubt can improve judgment.",
      "Better values make correction less threatening."
    ],
    examples: [
      "A leader updates a strategy after evidence changes.",
      "A partner admits a defensive reaction and repairs.",
      "A student treats poor performance as diagnostic instead of identity proof."
    ],
    relatedSections: ["values-hidden-architecture", "failure-better-values"]
  }),
  lesson({
    id: "failure-better-values",
    title: "Failure as a Path to Better Values",
    eyebrow: "Growth",
    minutes: 32,
    summary:
      "Failure reveals what you value, what you avoid, and which discomforts are necessary for meaningful improvement.",
    objectives: [
      "Understand failure as feedback about values",
      "See avoidance as avoidance of growth",
      "Use action to create clarity"
    ],
    concepts: ["failure", "action", "discomfort", "learning"],
    body: [
      "Failure is not automatically noble, but it is revealing. It shows what you were measuring, what you feared, how fragile your identity is, and whether your values can survive contact with reality. A person who values approval experiences failure as exposure. A person who values learning experiences it as information, painful but usable.",
      "Avoiding failure often means avoiding the arenas where growth could happen. You do not publish, ask, apply, train, apologize, sell, lead, create, or commit because the result might challenge the self-image. The cost is hidden: a smaller life protected from evidence.",
      "Manson's action-oriented view is that clarity often comes after movement, not before. You cannot think your way into every answer from safety. You discover through attempts, mistakes, rejection, revision, and embodied contact with the problem.",
      "In career, failure may reveal that you were chasing prestige rather than craft. In relationships, it may reveal poor boundaries or a need for approval. In learning, it may reveal that identity was built around seeming smart. In entrepreneurship, it may reveal that the market does not care about your story yet.",
      "The point is not to celebrate failure for its own sake. It is to stop letting failure avoidance choose your values by default."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "An aspiring founder avoids selling because rejection feels humiliating.",
        defaultApproach:
          "Keep refining the product privately and call the delay preparation.",
        betterApproach:
          "Have real customer conversations early and treat rejection as market information rather than identity judgment.",
        whyItWorks:
          "Action moves the founder from protected fantasy into usable reality."
      },
      {
        type: "framework",
        title: "Failure interpretation",
        stages: [
          { name: "Event", description: "What actually happened?" },
          { name: "Value", description: "What value made it hurt this way?" },
          { name: "Information", description: "What did reality teach?" },
          { name: "Next action", description: "What response would serve a better value?" }
        ]
      }
    ],
    whyThisMatters:
      "A life organized around avoiding failure often avoids the exact discomforts required for meaning and competence.",
    practicalApplication:
      "After a failure, separate the factual result from the identity story and identify the value being tested.",
    commonMistakes: [
      "Treating failure as proof of worthlessness",
      "Romanticizing failure without learning from it",
      "Waiting for confidence before taking any meaningful action"
    ],
    misconceptions: [
      {
        misconception: "Failure is valuable by itself.",
        correction:
          "Failure becomes valuable when it produces honesty, learning, better values, or better action."
      }
    ],
    lens:
      "Failure asks what you were really protecting: truth, growth, image, comfort, or approval.",
    anchors: [
      "Avoiding failure often means avoiding growth.",
      "Action creates clarity that thinking alone cannot."
    ],
    takeaways: [
      "Failure reveals values.",
      "Discomfort is often the price of meaningful improvement.",
      "The useful question is what reality taught you."
    ],
    examples: [
      "A rejection reveals approval dependence.",
      "A failed project reveals weak customer evidence.",
      "A hard conversation reveals where honesty was being avoided."
    ],
    relatedSections: ["certainty-doubt-being-wrong", "good-problems-bad-problems"]
  }),
  lesson({
    id: "boundaries-rejection-identity",
    title: "Boundaries, Rejection, and Identity",
    eyebrow: "Self-respect",
    minutes: 32,
    summary:
      "Clear values create rejection because boundaries protect priorities and honest identity cannot depend entirely on outside approval.",
    objectives: [
      "Understand why rejection is inevitable",
      "Use boundaries to protect values",
      "Avoid weaponizing authenticity"
    ],
    concepts: ["boundaries", "rejection", "identity", "approval"],
    body: [
      "If values become clear, rejection becomes unavoidable. You cannot live honestly and be approved by everyone. Some people will dislike your boundaries, misunderstand your choices, resent your priorities, or prefer the version of you that was easier to control.",
      "Boundaries are where values meet access. If you value health, you may need boundaries around time and energy. If you value honesty, you may need boundaries around evasive relationships. If you value craft, you may need boundaries around distraction. A value without a boundary is often just a preference.",
      "Rejection hurts because belonging matters. The book's point is not that you should become immune to disapproval. It is that external approval cannot be the highest value if you want a coherent life. When approval rules everything, identity becomes whatever the room rewards.",
      "There is also a misuse of authenticity. Some people use being real as an excuse for cruelty, impulsiveness, or refusal to consider impact. Manson's philosophy is not permission to be careless. Honest living still requires responsibility. A boundary can be firm without being contemptuous.",
      "The stronger your values, the more you need a durable identity: one grounded in chosen principles rather than constant social permission."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Authenticity versus cruelty",
        not: "Saying whatever you feel and making other people absorb the damage.",
        but: "Living honestly while remaining responsible for your conduct and impact."
      },
      {
        type: "expandedExample",
        scenario: "A person stops overcommitting to family demands.",
        defaultApproach:
          "Keep saying yes to avoid guilt, then become resentful and distant.",
        betterApproach:
          "Set clear limits with care, accept that some disappointment may follow, and keep acting from chosen values.",
        whyItWorks:
          "The boundary protects the relationship from hidden resentment and protects the person's priorities from collapse."
      }
    ],
    whyThisMatters:
      "Without boundaries, values remain abstract and identity stays vulnerable to whoever pressures most effectively.",
    practicalApplication:
      "Name one value that needs a boundary and define the behavior that will protect it.",
    commonMistakes: [
      "Assuming rejection means the boundary is wrong",
      "Using authenticity as a license for harshness",
      "Letting approval become the highest value"
    ],
    misconceptions: [
      {
        misconception: "Being disliked means you failed socially.",
        correction:
          "Sometimes being disliked is the normal cost of living by clearer values."
      }
    ],
    lens:
      "A boundary reveals whether a value is strong enough to survive disapproval.",
    anchors: [
      "Values require boundaries.",
      "Approval cannot be the highest value in an honest life."
    ],
    takeaways: [
      "Rejection is inevitable when values become clear.",
      "Boundaries protect priorities.",
      "Authenticity must remain responsible."
    ],
    examples: [
      "Declining work that violates family commitments.",
      "Ending a relationship where honesty is punished.",
      "Choosing a slower financial path over status display."
    ],
    relatedSections: ["importance-saying-no", "responsibility-without-blame"]
  }),
  lesson({
    id: "importance-saying-no",
    title: "The Importance of Saying No",
    eyebrow: "Commitment",
    minutes: 31,
    summary:
      "Saying no creates meaning because commitment requires exclusion; a life with unlimited options often lacks depth.",
    objectives: [
      "Understand no as a meaning-making act",
      "Recognize people-pleasing and resentment",
      "Apply no to time, money, work, and relationships"
    ],
    concepts: ["no", "commitment", "exclusion", "people-pleasing"],
    body: [
      "A meaningful yes requires many noes. To choose a partner is to reject other romantic possibilities. To build a craft is to reject endless dabbling. To protect health is to reject some convenience. To save money is to reject some status purchases. Commitment becomes real through exclusion.",
      "Manson treats unlimited options with suspicion because options can weaken depth. If every possibility remains open, no path receives enough sacrifice to become meaningful. The fantasy of keeping everything available often produces a shallow life spread across too many half-commitments.",
      "People-pleasing is a refusal to say no disguised as kindness. It creates resentment because the person gives access, time, agreement, or labor while secretly hoping others will notice the cost. Honest no is often kinder than hidden resentment.",
      "No also protects identity from cultural noise. You may need to say no to career scripts, family expectations, consumption habits, social media comparison, or impressive opportunities that do not fit your values. Not every good option is your option.",
      "The difficulty is that no creates loss. You give up the fantasy self who could have been everything to everyone. But the loss is what makes depth possible."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "What no protects",
        columns: ["Domain", "No to", "Yes protected"],
        rows: [
          ["Work", "Visible but low-value obligations", "Deep contribution"],
          ["Relationships", "Approval at any cost", "Honest connection"],
          ["Money", "Status spending", "Freedom and resilience"],
          ["Time", "Constant availability", "Attention and recovery"],
          ["Identity", "Being everything", "Becoming someone specific"]
        ]
      },
      {
        type: "mentalModel",
        name: "No as architecture",
        explanation:
          "No is not merely refusal. It is the structure that allows chosen values to have space.",
        useWhen:
          "You are tempted to say yes because discomfort feels harder than overextension."
      }
    ],
    whyThisMatters:
      "Without no, values have no protection and commitments remain shallow.",
    practicalApplication:
      "Identify one recurring yes that is actually a no to a more important value.",
    commonMistakes: [
      "Treating no as selfish by default",
      "Saying yes to avoid short-term discomfort",
      "Keeping options open until no path deepens"
    ],
    misconceptions: [
      {
        misconception: "More options always mean more freedom.",
        correction:
          "Too many options can prevent the commitments that make freedom meaningful."
      }
    ],
    lens:
      "Every yes spends your life somewhere. Ask what it says no to.",
    anchors: [
      "Commitment requires exclusion.",
      "No creates the space where meaning can deepen."
    ],
    takeaways: [
      "Saying no protects chosen values.",
      "People-pleasing creates resentment.",
      "Depth requires giving up some options."
    ],
    examples: [
      "Saying no to weekend work to protect family and recovery.",
      "Saying no to gossip to protect integrity.",
      "Saying no to lifestyle inflation to protect autonomy."
    ],
    relatedSections: ["choosing-worth-caring", "death-finitude-limits"]
  }),
  lesson({
    id: "death-finitude-limits",
    title: "Death, Finitude, and the Clarity of Limits",
    eyebrow: "Mortality",
    minutes: 33,
    summary:
      "Mortality clarifies values because limited time makes priorities real and exposes the emptiness of many status concerns.",
    objectives: [
      "Understand why death clarifies priorities",
      "See finite time as a values test",
      "Reduce status obsession through perspective"
    ],
    concepts: ["death", "finitude", "limits", "meaning"],
    body: [
      "The book's final seriousness comes from mortality. If time were infinite, priorities would be less urgent. You could postpone honesty, craft, love, repair, courage, and responsibility forever. Finitude makes avoidance costly because each day spent caring about the wrong things is a day not spent on the right ones.",
      "Death strips away many inherited status games. The question becomes less about whether you appeared impressive and more about whether you lived by values you respect. Money, recognition, attractiveness, and winning may still matter in practical ways, but they lose some power when placed against the fact that life ends.",
      "Avoiding death can produce shallow busyness. People keep chasing novelty, approval, and distraction because stillness would reveal limits. Manson's point is not to become morbid. It is to let mortality clean the lens. What pain is worth choosing if time is short? What conflict is not worth feeding? What truth should not be delayed?",
      "Limits create meaning. A relationship matters because it is not every relationship. A career matters because it spends real years. A value matters because it excludes other values. Death is the largest limit, and therefore the most clarifying.",
      "Remembering finitude does not answer every practical question, but it changes their weight. It asks whether your current concerns are worthy of a finite life."
    ],
    support: [
      {
        type: "synthesis",
        title: "Mortality as a values filter",
        text:
          "Death does not make ordinary responsibilities disappear. It helps distinguish responsibilities worth carrying from status noise that only feels urgent."
      },
      {
        type: "keyDistinction",
        title: "Perspective versus despair",
        not: "Using death awareness to conclude that nothing matters.",
        but: "Using finitude to clarify what matters enough to receive your limited life."
      }
    ],
    whyThisMatters:
      "Finitude turns values from abstract preferences into real choices about how life is spent.",
    practicalApplication:
      "Use mortality as a filter for recurring worries: would this concern deserve the same authority if time felt visibly finite?",
    commonMistakes: [
      "Avoiding mortality until crisis forces perspective",
      "Using death awareness as despair instead of clarity",
      "Letting status concerns consume finite attention"
    ],
    misconceptions: [
      {
        misconception: "Thinking about death is negative.",
        correction:
          "It can be clarifying when it returns attention to values worth living."
      }
    ],
    lens:
      "Limited time asks which concerns deserve to become part of your life story.",
    anchors: [
      "Finitude makes priorities real.",
      "Mortality clarifies what pain is worth choosing."
    ],
    takeaways: [
      "Death can reduce shallow status obsession.",
      "Limits create meaning.",
      "A finite life requires chosen priorities."
    ],
    examples: [
      "Dropping a prestige rivalry that has no deeper value.",
      "Choosing repair before pride hardens.",
      "Spending time on craft or family rather than image management."
    ],
    relatedSections: ["final-values-operating-system", "importance-saying-no"]
  }),
  lesson({
    id: "final-values-operating-system",
    title: "Final Synthesis: A Values-Based Operating System",
    eyebrow: "Synthesis",
    minutes: 36,
    summary:
      "The book compresses into one question: not how to avoid pain, but which pain is worth choosing because it serves better values.",
    objectives: [
      "Connect the book's major ideas",
      "Use values as a practical operating system",
      "Avoid apathy, cynicism, and shallow positivity"
    ],
    concepts: ["synthesis", "values", "chosen pain", "meaning"],
    body: [
      "The Subtle Art of Not Giving a F*ck is a values book disguised as an anti-self-help provocation. Its ideas connect around a single claim: you cannot avoid caring, suffering, choosing, failing, or dying. You can only decide what values will organize those realities.",
      "The phrase not giving a f*ck means refusing to give ultimate authority to every status signal, fear, comparison, expectation, or discomfort. Constant positivity fails because pain is normal. Good values matter because they define success and failure. Good problems matter because life is made of problems. Responsibility matters because response is where agency returns.",
      "Doubt and failure keep the system honest. If your values cannot survive being wrong, they are too fragile. If you avoid every failure, you avoid the evidence needed to grow. Boundaries and no protect the system. Mortality gives it urgency.",
      "The central question months later is not: how do I avoid pain? It is: what pain is worth choosing? The pain of honesty may be better than the pain of hiding. The pain of discipline may be better than the pain of drift. The pain of rejection may be better than the pain of self-betrayal. The pain of responsibility may be better than the pain of helpless blame.",
      "Used well, the book does not make you edgy, apathetic, or dismissive. It makes you more selective, honest, and responsible about where your finite life goes."
    ],
    support: [
      {
        type: "framework",
        title: "Values operating system",
        stages: [
          { name: "Concern", description: "What is currently demanding emotional authority?" },
          { name: "Value", description: "What value does that concern reveal?" },
          { name: "Cost", description: "What pain does this value require?" },
          { name: "Control", description: "Is the value actionable and reality-based?" },
          { name: "Choice", description: "Is this pain worth choosing with finite time?" }
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text:
          "Care less about what is shallow, uncontrollable, inherited, and status-driven. Care more about values worth suffering for: honesty, responsibility, courage, discipline, contribution, and love."
      }
    ],
    whyThisMatters:
      "The book becomes useful only when its blunt message is translated into a durable values practice.",
    practicalApplication:
      "Use the operating system whenever a worry, goal, conflict, or decision starts consuming disproportionate emotional energy.",
    commonMistakes: [
      "Remembering the attitude but not the values",
      "Using the book as permission for apathy",
      "Trying to eliminate pain instead of choosing better pain"
    ],
    misconceptions: [
      {
        misconception: "The book is mainly about caring less.",
        correction:
          "It is mainly about caring with more honesty, discipline, and responsibility."
      }
    ],
    lens:
      "Ask what pain a value creates and whether that pain is worthy of your finite life.",
    anchors: [
      "The central question is what pain is worth choosing.",
      "A meaningful life is values-based, not comfort-based."
    ],
    takeaways: [
      "The book's ideas form a values operating system.",
      "Caring better means choosing better problems.",
      "Responsibility, boundaries, failure, doubt, and mortality all clarify values."
    ],
    examples: [
      "Choosing the pain of honest feedback over the pain of stagnation.",
      "Choosing the pain of saying no over the pain of resentment.",
      "Choosing the pain of commitment over the emptiness of endless options."
    ],
    relatedSections: ["real-meaning-not-giving", "death-finitude-limits"]
  })
];

export const subtleArtOfNotGiving: Book = {
  slug: "subtle-art-of-not-giving",
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  category: "Self-Development / Values / Emotional Maturity",
  difficulty: "Intermediate",
  completionTime: "6h 23m",
  progress: 0,
  coverTone:
    "from-neutral-100 via-orange-100 to-rose-100 dark:from-neutral-950/60 dark:via-orange-950/35 dark:to-rose-950/35",
  description:
    "A direct, mature curriculum on values, responsibility, useful pain, failure, boundaries, finitude, and choosing what is actually worth caring about.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "values",
    "emotional maturity",
    "responsibility",
    "acceptance",
    "suffering",
    "identity",
    "limits",
    "choice",
    "failure",
    "honesty",
    "meaning",
    "death",
    "priorities"
  ],
  intendedOutcomes: [
    "Understand why caring less is really about caring better",
    "Distinguish useful pain from pointless pain",
    "Recognize bad values and fragile identity systems",
    "Take responsibility without self-blame",
    "Become more comfortable with uncertainty, failure, and limitation",
    "Understand why death and finitude clarify priorities",
    "Apply the book without turning it into apathy or cynicism"
  ],
  promise:
    "After completing this curriculum, you will understand Mark Manson's core philosophy: that a meaningful life is not built by caring about everything, avoiding pain, or chasing constant positivity, but by choosing better values, taking responsibility, accepting limitations, and becoming more honest about what is worth caring about.",
  recommendedAudience: [
    "Readers who want a grounded interpretation of Manson's values philosophy",
    "People rethinking priorities, approval, and identity",
    "Professionals and students dealing with comparison or overextension",
    "Anyone who wants direct self-development without shallow positivity"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around values, responsibility, limitation, failure, and mortality. It does not reproduce long passages or chapter text.",
  sections
};
