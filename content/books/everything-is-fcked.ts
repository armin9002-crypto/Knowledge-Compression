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
    id: "hope-when-broken",
    title: "Why Hope Matters When Everything Feels Broken",
    eyebrow: "Foundation",
    minutes: 32,
    summary:
      "Manson treats hope as a psychological need: the structure that lets people move through pain toward something they believe matters.",
    objectives: [
      "Understand hope as a source of direction",
      "Distinguish hope from naive optimism",
      "See why comfort and progress do not automatically create meaning"
    ],
    concepts: ["hope", "meaning", "future orientation", "modern emptiness"],
    body: [
      "Everything Is F*cked begins from a paradox: many modern people live with more safety, convenience, and choice than previous generations, yet still feel anxious, angry, or empty. Manson uses this tension to ask what human beings actually require. His answer is not merely comfort. People need a future that feels worth moving toward.",
      "Hope organizes action. When someone believes a goal, relationship, community, mission, or value is meaningful, pain becomes more tolerable because it has a place inside a larger direction. Without hope, suffering feels random. Energy collapses into cynicism, distraction, or destructive forms of certainty.",
      "This does not mean hope is the belief that everything will improve. That kind of optimism can be brittle. Mature hope accepts that life is painful, uncertain, and often unfair, while still choosing a direction worthy of effort. It is less about prediction and more about commitment.",
      "The practical question is therefore not whether the world feels broken. Many parts of it do. The question is whether your values give you a reason to act without needing the world to reassure you first."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Hope versus naive optimism",
        not: "Hope is the belief that everything will be fine.",
        but: "Hope is the belief that something is worth moving toward despite pain and uncertainty."
      },
      {
        type: "expandedExample",
        scenario: "A professional feels disillusioned by unstable markets and institutional distrust.",
        defaultApproach:
          "They drift into outrage, doomscrolling, and sarcastic detachment because nothing feels dependable.",
        betterApproach:
          "They choose concrete values: mastery, usefulness, honesty, family stability, and meaningful work.",
        whyItWorks:
          "The world remains uncertain, but action now has a center of gravity."
      }
    ],
    whyThisMatters:
      "Without hope, people often mistake numbness or contempt for wisdom.",
    practicalApplication:
      "Name the future you are willing to serve even when the mood of the moment is discouraging.",
    commonMistakes: [
      "Treating hope as denial",
      "Expecting progress to automatically create meaning",
      "Confusing cynicism with intelligence"
    ],
    misconceptions: [
      {
        misconception: "The book says the world is hopeless.",
        correction:
          "It argues that fragile, comfort-based hope fails, and that mature hope must be rooted in values."
      }
    ],
    lens:
      "Ask what future value would still be worth serving if life remained uncertain.",
    anchors: [
      "Hope is direction under uncertainty.",
      "Comfort cannot replace meaning."
    ],
    takeaways: [
      "Humans need a meaningful future.",
      "Hope is not emotional decoration; it organizes behavior.",
      "Mature hope accepts pain instead of pretending it away."
    ],
    examples: [
      "A parent keeps investing in a child despite cultural anxiety.",
      "A founder keeps building because the problem matters, not because success is guaranteed.",
      "A citizen acts locally instead of waiting for society to feel fixed."
    ],
    relatedSections: ["values-foundation-meaning", "anti-nihilism-hope-without-delusion"]
  }),
  lesson({
    id: "thinking-feeling-brain",
    title: "The Thinking Brain and the Feeling Brain",
    eyebrow: "Psychology",
    minutes: 34,
    summary:
      "The curriculum reframes self-control as cooperation between reason and emotion rather than reason simply commanding emotion to behave.",
    objectives: [
      "Understand the distinction between rational analysis and emotional motivation",
      "See why emotion often drives action before reason explains it",
      "Apply self-control by working with desire, fear, and identity"
    ],
    concepts: ["emotion", "reason", "self-control", "rationalization"],
    body: [
      "Manson's thinking brain and feeling brain distinction is a simple way to describe a familiar experience: you can know what is wise and still do something else. The rational mind can calculate consequences, but it does not automatically control motivation. Emotion supplies urgency, attraction, fear, loyalty, and resistance.",
      "People often imagine self-control as an internal debate where reason wins by making a stronger argument. In real life, reason frequently arrives after the fact to justify what emotion has already chosen. A person buys the thing, sends the message, avoids the conversation, or keeps the habit, then constructs a story that makes the choice sound sensible.",
      "This is why purely logical advice often fails. You do not stop procrastinating merely by knowing the task matters. You do not repair a relationship merely by knowing defensiveness is unhelpful. You need to understand what the feeling brain is protecting, seeking, or avoiding.",
      "The practical implication is compassionate but demanding. You are responsible for your behavior, yet responsibility includes learning how emotion actually works. Better self-control means aligning feelings with chosen values through environment, repetition, identity, and honest feedback."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Motivation before justification",
        explanation:
          "When behavior seems irrational, look for the emotional payoff or emotional protection it provides.",
        useWhen:
          "You repeatedly make choices that contradict your stated goals."
      },
      {
        type: "comparisonTable",
        title: "Two modes of decision-making",
        columns: ["Mode", "Strength", "Risk"],
        rows: [
          ["Thinking brain", "Analysis, planning, abstraction", "Can rationalize and detach"],
          ["Feeling brain", "Energy, loyalty, desire, fear", "Can overreact and distort reality"]
        ]
      }
    ],
    whyThisMatters:
      "People become less self-deceived when they stop pretending reason is always in charge.",
    practicalApplication:
      "When you resist a good decision, identify the emotional fear or reward underneath the resistance.",
    commonMistakes: [
      "Trying to logic yourself out of every emotion",
      "Treating feelings as truth",
      "Using emotional intensity as proof that a decision is wise"
    ],
    misconceptions: [
      {
        misconception: "Emotion is the enemy of good decisions.",
        correction:
          "Emotion is necessary for action, but it must be educated by values and reality."
      }
    ],
    lens:
      "Ask what your feelings are trying to protect before asking what your logic can prove.",
    anchors: [
      "Reason explains; emotion moves.",
      "Self-control means alignment, not internal domination."
    ],
    takeaways: [
      "The rational mind often justifies emotional choices.",
      "Behavior changes when values reach the emotional system.",
      "Durable discipline works with emotion instead of denying it."
    ],
    examples: [
      "Overspending justified as self-care when the feeling underneath is anxiety.",
      "Avoiding feedback because correction feels like identity threat.",
      "Staying in a bad job because uncertainty feels worse than frustration."
    ],
    relatedSections: ["entitlement-fragility-avoidance", "values-foundation-meaning"]
  }),
  lesson({
    id: "values-foundation-meaning",
    title: "Values as the Foundation of Meaning",
    eyebrow: "Values",
    minutes: 33,
    summary:
      "Meaning comes from the values that make certain forms of pain worth choosing and certain forms of comfort worth refusing.",
    objectives: [
      "Understand how values organize hope",
      "Distinguish mature values from fragile values",
      "See why meaning requires caring beyond immediate comfort"
    ],
    concepts: ["values", "meaning", "identity", "chosen pain"],
    body: [
      "In Manson's philosophy, values are not decorative beliefs. They are the standards by which you decide what matters, what hurts, what feels successful, and what feels unbearable. Change the value and you change the emotional meaning of the same event.",
      "A fragile value depends heavily on external validation, comfort, dominance, or constant certainty. If your value is being admired, criticism becomes catastrophic. If your value is feeling good, ordinary frustration becomes evidence that life is failing. If your value is always being right, learning becomes humiliating.",
      "Mature values are reality-based and responsibility-oriented. They do not remove pain, but they make pain more coherent. Honesty creates the pain of difficult conversations. Love creates the pain of vulnerability. Mastery creates the pain of practice. Service creates the pain of obligation. These are not bugs in the system; they are the costs of meaningful commitments.",
      "Hope becomes stable when it is connected to values that can survive bad moods, bad days, and bad outcomes. A person with mature values can be disappointed without becoming directionless."
    ],
    support: [
      {
        type: "framework",
        title: "Tests of a mature value",
        stages: [
          { name: "Reality", description: "It can survive contact with facts." },
          { name: "Responsibility", description: "It depends partly on your choices." },
          { name: "Cost", description: "It names a pain you are willing to carry." },
          { name: "Connection", description: "It links your life to something beyond impulse." }
        ]
      }
    ],
    whyThisMatters:
      "A life organized around weak values becomes emotionally unstable even when circumstances improve.",
    practicalApplication:
      "Evaluate a frustration by asking which value was threatened and whether that value is worth keeping.",
    commonMistakes: [
      "Calling preferences values",
      "Choosing values that depend entirely on other people's reactions",
      "Expecting good values to feel comfortable"
    ],
    misconceptions: [
      {
        misconception: "Meaning is something you discover only when life feels inspiring.",
        correction:
          "Meaning is often revealed by the pain you willingly accept for a value."
      }
    ],
    lens:
      "Ask what pain your current values create and whether that pain makes you more mature.",
    anchors: [
      "Values decide what pain means.",
      "Mature hope grows from mature values."
    ],
    takeaways: [
      "Values are emotional architecture.",
      "Fragile values make ordinary life feel threatening.",
      "Mature values make chosen difficulty meaningful."
    ],
    examples: [
      "Choosing truth over being liked.",
      "Choosing craft over quick recognition.",
      "Choosing responsibility over resentment."
    ],
    relatedSections: ["hope-when-broken", "pain-suffering-maturity"]
  }),
  lesson({
    id: "pain-suffering-maturity",
    title: "Pain, Suffering, and the Price of Maturity",
    eyebrow: "Maturity",
    minutes: 31,
    summary:
      "Maturity is not the elimination of pain; it is the ability to choose forms of pain that serve better values.",
    objectives: [
      "Recognize pain as unavoidable",
      "Distinguish meaningful pain from avoidable suffering",
      "Connect adulthood with responsibility and discipline"
    ],
    concepts: ["pain", "suffering", "maturity", "discipline"],
    body: [
      "A central continuity between Manson's books is the idea that pain is unavoidable. Everything Is F*cked adds a broader philosophical frame: the attempt to engineer a painless life often produces a weaker, more entitled, more anxious person.",
      "Maturity begins when someone stops treating discomfort as proof that something has gone wrong. Love brings vulnerability. Work brings friction. Health brings discipline. Leadership brings responsibility. Honesty brings conflict. A meaningful life does not remove these costs; it selects them.",
      "Suffering often increases when people demand that valuable things arrive without their natural burdens. They want intimacy without risk, success without criticism, freedom without responsibility, and wisdom without humiliation. This demand puts them at war with reality.",
      "The practical art is to ask whether the pain in front of you is the price of a value or the consequence of avoiding one. That distinction is one of the book's most useful operating tools."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Chosen pain versus wasted suffering",
        not: "All pain is noble or useful.",
        but: "Pain becomes meaningful when it is attached to a worthy value and honest action."
      }
    ],
    whyThisMatters:
      "People make better decisions when they stop using comfort as the only measure of a good life.",
    practicalApplication:
      "Before escaping discomfort, ask whether it is the cost of growth, love, honesty, or responsibility.",
    commonMistakes: [
      "Romanticizing suffering",
      "Treating discomfort as failure",
      "Avoiding short-term pain in ways that create long-term damage"
    ],
    misconceptions: [
      {
        misconception: "The point is to endure everything.",
        correction:
          "The point is to choose the right burdens and refuse unnecessary ones."
      }
    ],
    lens:
      "Ask whether this difficulty is making you more responsible or merely more depleted.",
    anchors: [
      "Maturity is choosing better pain.",
      "A painless life is not the same as a meaningful life."
    ],
    takeaways: [
      "Pain is inevitable, but not all pain is equal.",
      "Avoidance often multiplies suffering.",
      "Maturity accepts the costs of chosen values."
    ],
    examples: [
      "The pain of apologizing prevents the suffering of denial.",
      "The pain of training prevents the suffering of decay.",
      "The pain of focus prevents the suffering of scattered ambition."
    ],
    relatedSections: ["values-foundation-meaning", "freedom-constraint-responsibility"]
  }),
  lesson({
    id: "problem-with-comfort",
    title: "The Problem With Comfort",
    eyebrow: "Modern Life",
    minutes: 30,
    summary:
      "Comfort solves many real problems, but dependence on comfort can weaken resilience, inflate expectations, and make normal difficulty feel intolerable.",
    objectives: [
      "Understand why comfort does not guarantee fulfillment",
      "See how convenience can lower resilience",
      "Relate to comfort without making it the highest value"
    ],
    concepts: ["comfort", "resilience", "expectations", "fragility"],
    body: [
      "Manson is not against comfort. Food, medicine, safety, technology, and prosperity are genuine achievements. The problem begins when comfort becomes the assumed baseline and discomfort becomes an outrage.",
      "Modern convenience can quietly train the nervous system to expect frictionless living. Waiting feels offensive. Boredom feels unbearable. Disagreement feels unsafe. Effort feels suspicious unless it is rewarded quickly. A society can become materially stronger while individuals become emotionally less practiced at enduring ordinary difficulty.",
      "Comfort also raises expectations. The easier life becomes, the more intolerable remaining frustrations can feel. This is one reason progress does not automatically produce gratitude. The mind compares reality not to the past but to an imagined frictionless alternative.",
      "The practical implication is not to reject comfort theatrically. It is to stop worshiping it. Use comfort as support, not as the definition of a successful life."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A high-performing student reaches a demanding workplace.",
        defaultApproach:
          "They interpret ambiguity, criticism, and slow advancement as evidence that something is wrong with the job.",
        betterApproach:
          "They treat discomfort as part of skill acquisition and separate unfair conditions from normal growth pain.",
        whyItWorks:
          "They remain discerning without becoming fragile."
      }
    ],
    whyThisMatters:
      "Comfort dependence can make good lives feel broken because they still contain friction.",
    practicalApplication:
      "Choose one area where you will practice tolerating useful discomfort instead of immediately numbing it.",
    commonMistakes: [
      "Using comfort as the main measure of success",
      "Treating all friction as oppression",
      "Rejecting comfort in a performative way"
    ],
    misconceptions: [
      {
        misconception: "A harder life is automatically more meaningful.",
        correction:
          "Difficulty is useful only when it develops capacity or serves a worthy value."
      }
    ],
    lens:
      "Ask whether comfort is supporting your values or quietly replacing them.",
    anchors: [
      "Comfort is a tool, not a purpose.",
      "Convenience can lower tolerance for normal difficulty."
    ],
    takeaways: [
      "Comfort can coexist with emptiness.",
      "Resilience requires practice with discomfort.",
      "Progress solves problems and creates new expectations."
    ],
    examples: [
      "Using technology for work while protecting attention from compulsive stimulation.",
      "Enjoying convenience without expecting relationships to be frictionless.",
      "Choosing training, hard conversations, or focused work despite discomfort."
    ],
    relatedSections: ["entitlement-fragility-avoidance", "technology-distraction-meaning-crisis"]
  }),
  lesson({
    id: "freedom-constraint-responsibility",
    title: "Freedom, Constraint, and Responsibility",
    eyebrow: "Philosophy",
    minutes: 32,
    summary:
      "Unlimited choice can create anxiety; responsibility and constraint give freedom a shape strong enough to support meaning.",
    objectives: [
      "Understand why unlimited freedom can become unstable",
      "See the role of commitment and constraint",
      "Connect responsibility with meaningful freedom"
    ],
    concepts: ["freedom", "constraint", "responsibility", "commitment"],
    body: [
      "Modern culture often treats freedom as the removal of limits: more options, fewer obligations, fewer constraints. Manson complicates this picture. Unlimited freedom can become paralyzing because nothing tells you what deserves your loyalty.",
      "Constraint is not always the enemy of freedom. A marriage constrains options but can deepen intimacy. A craft constrains attention but produces mastery. A budget constrains spending but creates stability. A value constrains impulse but gives action coherence.",
      "Responsibility is the force that turns freedom from possibility into life. Without responsibility, freedom can decay into drift, distraction, consumption, or anxious comparison. You can do anything, but nothing feels worth doing deeply.",
      "The practical question is not how to keep every option open. It is which constraints are worthy enough to organize your life around."
    ],
    support: [
      {
        type: "diagram",
        title: "How freedom becomes meaning",
        steps: [
          "Choice creates possibility",
          "Values select worthy directions",
          "Constraints protect depth",
          "Responsibility sustains commitment",
          "Meaning emerges through repeated action"
        ]
      }
    ],
    whyThisMatters:
      "People often seek more freedom when what they need is a more responsible relationship to the freedom they already have.",
    practicalApplication:
      "Identify a commitment that would reduce options but increase depth.",
    commonMistakes: [
      "Equating more options with more meaning",
      "Treating commitment as self-betrayal",
      "Using freedom to avoid responsibility"
    ],
    misconceptions: [
      {
        misconception: "Constraint always reduces life.",
        correction:
          "Chosen constraints can make life deeper by protecting attention, loyalty, and practice."
      }
    ],
    lens:
      "Ask which responsibilities would make your freedom less scattered and more meaningful.",
    anchors: [
      "Freedom needs responsibility to become meaning.",
      "Commitment trades breadth for depth."
    ],
    takeaways: [
      "Unlimited choice can create anxiety.",
      "Good constraints help values become real.",
      "Responsibility stabilizes freedom."
    ],
    examples: [
      "Choosing one career direction long enough to build expertise.",
      "Committing to a relationship instead of optimizing endlessly.",
      "Using a schedule to protect creative work."
    ],
    relatedSections: ["values-foundation-meaning", "pain-suffering-maturity"]
  }),
  lesson({
    id: "religion-progress-limits-rationality",
    title: "The Religion of Progress and the Limits of Rationality",
    eyebrow: "Modernity",
    minutes: 32,
    summary:
      "Technology and rationality solve real problems, but they cannot by themselves answer what people should worship, love, endure, or become.",
    objectives: [
      "Understand progress as powerful but incomplete",
      "See why rational systems do not replace meaning",
      "Recognize the need for values, community, and story"
    ],
    concepts: ["progress", "rationality", "technology", "meaning crisis"],
    body: [
      "Manson argues that modern society often treats progress like a substitute religion. Science, technology, markets, data, and institutions promise control over uncertainty and liberation from suffering. They deliver many extraordinary benefits, but they do not answer every human question.",
      "Rationality can tell us how to optimize a system, but it cannot by itself decide what the system is for. Technology can increase access, speed, and power, but it cannot tell us which uses of power are meaningful. Progress can solve old problems while generating new forms of anxiety, alienation, and moral confusion.",
      "The danger is not progress itself. The danger is expecting progress to remove the need for values. People still need belonging, sacrifice, trust, moral orientation, and a story about why their lives matter.",
      "This is why a more advanced society can still feel spiritually thin. The tools improve faster than the meanings that guide them."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Power versus purpose",
        not: "Modern progress is fake or worthless.",
        but: "Progress increases capacity, while values decide what that capacity is for."
      }
    ],
    whyThisMatters:
      "Without values, increased capability can amplify emptiness, conflict, and distraction.",
    practicalApplication:
      "When adopting a tool or optimization, ask what human value it is meant to serve.",
    commonMistakes: [
      "Rejecting progress because it is incomplete",
      "Assuming data can answer moral questions",
      "Confusing efficiency with meaning"
    ],
    misconceptions: [
      {
        misconception: "The critique of progress is anti-technology.",
        correction:
          "The critique is that technology needs values and judgment to become humane."
      }
    ],
    lens:
      "Ask whether a system is merely becoming more powerful or also becoming more meaningful.",
    anchors: [
      "Progress gives power; values give purpose.",
      "Rationality cannot replace moral orientation."
    ],
    takeaways: [
      "Modern tools do not remove ancient human needs.",
      "Progress solves problems and creates new ones.",
      "Meaning requires more than optimization."
    ],
    examples: [
      "A company has better analytics but no shared ethical priorities.",
      "A person has more options but less commitment.",
      "A community has more connection tools but weaker trust."
    ],
    relatedSections: ["technology-distraction-meaning-crisis", "anti-nihilism-hope-without-delusion"]
  }),
  lesson({
    id: "entitlement-fragility-avoidance",
    title: "Entitlement, Fragility, and Emotional Avoidance",
    eyebrow: "Character",
    minutes: 30,
    summary:
      "Entitlement is not only arrogance; it is often the expectation that life should spare us the ordinary costs of being human.",
    objectives: [
      "Understand entitlement as resistance to tradeoffs",
      "See how avoidance produces fragility",
      "Build a more durable relationship with discomfort"
    ],
    concepts: ["entitlement", "fragility", "avoidance", "tradeoffs"],
    body: [
      "Manson's critique of entitlement is broader than a complaint about spoiled people. Entitlement appears whenever someone believes they should receive the benefits of life without the costs: love without vulnerability, achievement without effort, freedom without responsibility, truth without discomfort.",
      "Emotional avoidance makes this worse. If every unpleasant feeling must be escaped immediately, the person loses confidence in their ability to endure. Normal conflict feels traumatic. Slow progress feels intolerable. Criticism feels like annihilation. The world becomes threatening not because it is always harsher, but because the self has not practiced strength.",
      "Fragility also hides behind moral language. A person can frame discomfort as injustice when what they are really avoiding is accountability. This does not mean all distress is illegitimate. It means discernment matters: some pain signals harm, and some pain signals growth.",
      "The mature alternative is not toughness theater. It is the steady willingness to experience discomfort in service of values without making discomfort the center of identity."
    ],
    support: [
      {
        type: "misconception",
        misconception: "Durability means never being affected.",
        correction:
          "Durability means being affected without surrendering judgment, values, or responsibility.",
        whyItMatters:
          "This keeps resilience humane instead of performative."
      }
    ],
    whyThisMatters:
      "A person who cannot tolerate discomfort becomes easy to manipulate by impulse, outrage, and fear.",
    practicalApplication:
      "When you feel wronged, separate genuine boundary violations from the discomfort of accountability.",
    commonMistakes: [
      "Calling every discomfort harm",
      "Using resilience language to dismiss real pain",
      "Mistaking avoidance for self-protection"
    ],
    misconceptions: [
      {
        misconception: "The answer is to be emotionally hard.",
        correction:
          "The answer is to become emotionally honest and responsible."
      }
    ],
    lens:
      "Ask whether the feeling is warning you of harm or inviting you into responsibility.",
    anchors: [
      "Entitlement refuses life's tradeoffs.",
      "Avoidance trains fragility."
    ],
    takeaways: [
      "Entitlement often hides as expectation.",
      "Avoidance reduces emotional capacity.",
      "Resilience requires discernment, not numbness."
    ],
    examples: [
      "Avoiding hard feedback and then blaming the environment for stalled growth.",
      "Expecting relationships to provide validation without reciprocal responsibility.",
      "Using distraction whenever boredom asks for attention."
    ],
    relatedSections: ["problem-with-comfort", "thinking-feeling-brain"]
  }),
  lesson({
    id: "love-trust-human-connection",
    title: "Love, Trust, and Human Connection",
    eyebrow: "Connection",
    minutes: 31,
    summary:
      "Human connection gives meaning emotional reality, but genuine connection requires vulnerability, trust, obligation, and the acceptance of pain.",
    objectives: [
      "Understand why connection is central to meaning",
      "Distinguish love from transaction",
      "See why trust requires risk and responsibility"
    ],
    concepts: ["love", "trust", "vulnerability", "connection"],
    body: [
      "For Manson, meaning is not only an individual project. Humans are relational creatures. Values become real through loyalty, care, sacrifice, and trust. A life devoted only to self-protection eventually becomes too small to feel meaningful.",
      "Love is powerful precisely because it creates vulnerability. To care about someone is to give them some capacity to hurt you. To trust is to live without total control. To commit is to accept obligations that will sometimes inconvenience your impulses.",
      "Modern life often tempts people into transactional connection: relationships measured by convenience, status, validation, or utility. These arrangements can feel efficient, but they rarely generate the depth people crave. Depth requires the willingness to be responsible to and for other people.",
      "The practical lesson is that connection cannot be optimized like a consumer choice. It is built through repeated trust, repair, honesty, and shared difficulty."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Connection versus consumption",
        not: "Relationships exist to constantly confirm your comfort and identity.",
        but: "Relationships become meaningful when they involve mutual responsibility, truth, and care."
      }
    ],
    whyThisMatters:
      "A life can be comfortable and still feel empty if it lacks durable human bonds.",
    practicalApplication:
      "Invest in one relationship through truth, reliability, or repair rather than performance.",
    commonMistakes: [
      "Treating vulnerability as weakness",
      "Expecting connection without obligation",
      "Confusing attention with love"
    ],
    misconceptions: [
      {
        misconception: "Meaning is purely personal.",
        correction:
          "Much meaning is relational because humans need trust, belonging, and responsibility."
      }
    ],
    lens:
      "Ask whether your relationships are built on mutual responsibility or mutual consumption.",
    anchors: [
      "Love gives meaning a human form.",
      "Trust requires risk."
    ],
    takeaways: [
      "Connection is central to durable hope.",
      "Love includes pain because it includes vulnerability.",
      "Transactional relationships rarely satisfy the need for meaning."
    ],
    examples: [
      "Repairing a friendship instead of replacing it when friction appears.",
      "Choosing honesty in a relationship even when it risks conflict.",
      "Leading a team through trust rather than surveillance."
    ],
    relatedSections: ["values-foundation-meaning", "freedom-constraint-responsibility"]
  }),
  lesson({
    id: "technology-distraction-meaning-crisis",
    title: "Technology, Distraction, and the Modern Meaning Crisis",
    eyebrow: "Attention",
    minutes: 31,
    summary:
      "Modern technology can expand possibility while intensifying comparison, outrage, distraction, and the collapse of attention needed for deeper values.",
    objectives: [
      "See how tools amplify emotional patterns",
      "Understand distraction as a values problem",
      "Reconnect attention with agency"
    ],
    concepts: ["technology", "distraction", "comparison", "attention"],
    body: [
      "Technology in Manson's argument is not simply good or bad. It magnifies human tendencies. It gives access to knowledge, markets, friendship, and creative possibility. It also gives constant access to comparison, outrage, novelty, and artificial urgency.",
      "The danger is that attention becomes externally governed. If every spare moment is filled by stimulation, deeper values never receive the quiet required to become active. People feel informed but not grounded, connected but lonely, entertained but restless.",
      "Distraction is therefore not merely a productivity issue. It is a meaning issue. What captures attention repeatedly becomes emotionally important, even if you would never consciously name it as a value. The feed becomes a curriculum for anxiety.",
      "The practical response is not nostalgia or rejection. It is agency. Use tools deliberately, design friction around compulsive patterns, and protect attention for commitments that matter when the screen is gone."
    ],
    support: [
      {
        type: "application",
        context: "Regaining attention",
        steps: [
          "Identify the tool that most often hijacks your emotional state",
          "Name the value it displaces",
          "Create a boundary that protects time for that value",
          "Measure success by restored agency, not perfect abstinence"
        ],
        result:
          "Technology becomes a tool inside your values rather than the environment that chooses them for you."
      }
    ],
    whyThisMatters:
      "A person cannot live by chosen values if attention is constantly trained by outrage and novelty.",
    practicalApplication:
      "Audit one digital habit by asking what emotion it reliably produces and what value it replaces.",
    commonMistakes: [
      "Blaming technology for every problem",
      "Treating distraction as only a time-management issue",
      "Using information as a substitute for direction"
    ],
    misconceptions: [
      {
        misconception: "The solution is to leave modern technology behind.",
        correction:
          "The solution is to govern technology with values, boundaries, and attention."
      }
    ],
    lens:
      "Ask what your tools are teaching your nervous system to care about.",
    anchors: [
      "Attention is where values become lived.",
      "The feed can become an emotional curriculum."
    ],
    takeaways: [
      "Technology amplifies human needs and weaknesses.",
      "Distraction can erode meaning.",
      "Agency requires deliberate attention design."
    ],
    examples: [
      "A worker checks messages constantly and loses the capacity for deep work.",
      "A teenager learns social worth through visible metrics.",
      "A founder mistakes online attention for customer value."
    ],
    relatedSections: ["problem-with-comfort", "religion-progress-limits-rationality"]
  }),
  lesson({
    id: "anti-nihilism-hope-without-delusion",
    title: "Anti-Nihilism: Building Hope Without Delusion",
    eyebrow: "Hope",
    minutes: 33,
    summary:
      "The answer to modern instability is neither forced positivity nor despair, but values strong enough to carry action without guarantees.",
    objectives: [
      "Reject cynicism without retreating into denial",
      "Build hope from chosen responsibility",
      "Understand mature hope as anti-nihilistic"
    ],
    concepts: ["anti-nihilism", "mature hope", "responsibility", "values"],
    body: [
      "A shallow reading of Everything Is F*cked can sound bleak. The more useful reading is anti-nihilistic. Manson is trying to strip away hopes that collapse easily: hope based on constant comfort, permanent progress, total rational control, or universal approval.",
      "When those hopes fail, the temptation is cynicism. Cynicism feels protective because it refuses to be disappointed. But it also refuses to be responsible. If nothing matters, then no commitment can demand courage. Cynicism becomes a way to avoid grief, effort, and loyalty.",
      "Mature hope is different. It does not require certainty that history is moving in the right direction or that your life will reward every good choice. It begins with chosen values and accepts that worthwhile action remains worthwhile even when outcomes are uncertain.",
      "This kind of hope is emotionally sober. It can mourn without collapsing, work without guarantees, love without control, and commit without pretending pain will disappear."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Three responses to uncertainty",
        columns: ["Response", "Core belief", "Result"],
        rows: [
          ["Naive optimism", "Everything will work out", "Fragile motivation"],
          ["Cynicism", "Nothing is worth trusting", "Protected emptiness"],
          ["Mature hope", "Some values are worth serving anyway", "Responsible action"]
        ]
      }
    ],
    whyThisMatters:
      "Hope that depends on denial breaks; hope grounded in values can survive contact with reality.",
    practicalApplication:
      "Choose one value you can enact this week without needing certainty that it will pay off.",
    commonMistakes: [
      "Mistaking cynicism for maturity",
      "Demanding certainty before commitment",
      "Building hope on outcomes you cannot control"
    ],
    misconceptions: [
      {
        misconception: "If you are realistic, you cannot be hopeful.",
        correction:
          "The strongest hope is often the most realistic because it includes pain, loss, and uncertainty."
      }
    ],
    lens:
      "Ask what you would keep serving if easy optimism and easy despair were both unavailable.",
    anchors: [
      "Mature hope serves values without guarantees.",
      "Cynicism protects against disappointment by shrinking life."
    ],
    takeaways: [
      "The book is not a case for despair.",
      "Hope must be grounded in responsibility.",
      "Anti-nihilism means choosing values in an uncertain world."
    ],
    examples: [
      "Working on a community problem without believing society will become perfect.",
      "Loving someone without demanding emotional guarantees.",
      "Building a craft because mastery matters even if recognition is uncertain."
    ],
    relatedSections: ["hope-when-broken", "religion-progress-limits-rationality"]
  }),
  lesson({
    id: "final-philosophy-certainty-breaks",
    title: "Final Synthesis: A Philosophy for Living When Certainty Breaks",
    eyebrow: "Synthesis",
    minutes: 35,
    summary:
      "The book connects hope, values, emotion, pain, responsibility, technology, and modern life into a philosophy of sober commitment.",
    objectives: [
      "Integrate the book's major ideas",
      "Compare this book with Manson's earlier values philosophy",
      "Use the curriculum as a meaning-and-values operating system"
    ],
    concepts: ["synthesis", "meaning", "hope", "responsibility"],
    body: [
      "Everything Is F*cked is best read as a companion to values-based living. The Subtle Art asks what is worth caring about. This book asks what kind of hope can survive when the world feels unstable, comfort proves insufficient, and rational progress cannot answer every question of meaning.",
      "The ideas connect through a single pattern. Humans need hope, but hope needs values. Values create meaningful pain, and meaningful pain requires maturity. Maturity depends on responsibility, constraint, emotional honesty, and the willingness to act without certainty.",
      "The book's critique of modern life is not that progress is bad, technology is evil, or happiness is impossible. It is that tools, comfort, and freedom cannot replace a moral center. Without values, more power can mean more confusion. Without responsibility, more freedom can mean more drift.",
      "Months later, the useful memory is simple: do not demand a painless world before becoming responsible. Build hope from values you are willing to suffer for, relationships you are willing to protect, and actions you can take even when certainty breaks."
    ],
    support: [
      {
        type: "synthesis",
        title: "The operating system",
        text:
          "Hope gives direction, values give standards, pain gives cost, responsibility gives agency, and connection gives meaning a human form."
      }
    ],
    whyThisMatters:
      "The curriculum offers a way to remain engaged without denial, cynicism, or emotional fragility.",
    practicalApplication:
      "Use the book as a diagnostic: when you feel empty or anxious, inspect hope, values, pain tolerance, responsibility, and attention.",
    commonMistakes: [
      "Reading the book as pessimism",
      "Using blunt language as a substitute for depth",
      "Trying to solve meaning with comfort alone"
    ],
    misconceptions: [
      {
        misconception: "This is just a darker version of The Subtle Art.",
        correction:
          "It extends the values argument into hope, modernity, progress, and the psychology of meaning."
      }
    ],
    lens:
      "Ask what value-based hope would look like if certainty never arrived.",
    anchors: [
      "Build hope from values, not guarantees.",
      "Meaning requires responsibility in an uncertain world."
    ],
    takeaways: [
      "Hope is necessary but must mature.",
      "Comfort and progress are insufficient without values.",
      "A durable life accepts pain, uncertainty, responsibility, and connection."
    ],
    examples: [
      "A leader makes decisions from values instead of mood or public panic.",
      "A person reduces distraction to protect relationships and craft.",
      "A community builds trust without pretending the future is guaranteed."
    ],
    relatedSections: ["hope-when-broken", "anti-nihilism-hope-without-delusion"]
  })
];

export const everythingIsFcked: Book = {
  slug: "everything-is-fcked",
  title: "Everything Is F*cked",
  author: "Mark Manson",
  category: "Philosophy / Hope / Meaning",
  difficulty: "Intermediate",
  completionTime: "6h 14m",
  progress: 0,
  coverTone:
    "from-rose-100 via-slate-100 to-cyan-100 dark:from-rose-950/40 dark:via-slate-950/45 dark:to-cyan-950/35",
  description:
    "A philosophical curriculum on hope, values, emotion, pain, freedom, progress, technology, and building meaning without denial or cynicism.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "hope",
    "meaning",
    "values",
    "emotional reasoning",
    "freedom",
    "pain",
    "maturity",
    "modernity",
    "nihilism",
    "self-control",
    "responsibility",
    "identity",
    "philosophy",
    "mental resilience"
  ],
  intendedOutcomes: [
    "Understand why humans need hope",
    "Understand the relationship between values, pain, and meaning",
    "Understand the thinking brain versus feeling brain distinction",
    "Recognize why comfort can create fragility",
    "Understand why freedom without values becomes unstable",
    "Think more clearly about maturity, responsibility, and emotional discipline",
    "Apply the book without becoming cynical or nihilistic"
  ],
  promise:
    "After completing this curriculum, you will understand Mark Manson's argument about hope, values, emotional decision-making, freedom, pain, maturity, and the psychological challenges of modern life, especially why comfort and progress do not automatically produce meaning.",
  recommendedAudience: [
    "Readers interested in meaning, modern life, and values",
    "People who want a mature alternative to forced positivity",
    "Professionals and students dealing with distraction, anxiety, or cynicism",
    "Anyone comparing Manson's hope philosophy with his values philosophy"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around hope, values, emotional reasoning, modernity, pain, and meaning. It does not reproduce long passages or chapter text.",
  sections
};
