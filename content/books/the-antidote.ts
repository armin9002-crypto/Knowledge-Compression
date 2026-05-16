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
    id: "backwards-path-happiness",
    title: "The Backwards Path to Happiness",
    eyebrow: "Foundation",
    minutes: 31,
    summary:
      "Burkeman argues that happiness often recedes when pursued directly and becomes more available when discomfort, uncertainty, and limitation are allowed into life.",
    objectives: [
      "Understand why chasing happiness can backfire",
      "See acceptance as a route to freedom",
      "Distinguish anti-self-help from pessimism"
    ],
    concepts: ["happiness", "backwards law", "acceptance", "anti-self-help"],
    body: [
      "The Antidote begins with a reversal. Much conventional self-help assumes that the path to happiness is to become more positive, more confident, more controlled, more goal-driven, and more secure. Burkeman asks whether this effort to eliminate discomfort may be part of what keeps people anxious.",
      "Chasing happiness directly can make happiness feel like a performance target. If you are not happy, you now have a second problem: you are failing at becoming happy. The pursuit becomes tense. The mood you wanted to create becomes another object of control.",
      "Burkeman's alternative is not gloom. It is a willingness to make room for uncertainty, failure, insecurity, loss, mortality, and imperfection. Happiness may arrive less as a conquered state and more as a byproduct of ceasing to fight the conditions of being human.",
      "This is why the book feels like anti-self-help. It does not reject action, growth, or responsibility. It rejects simplistic formulas that promise emotional invulnerability. It suggests that freedom often comes from relaxing the demand that life be made safe before we can live it.",
      "The backwards path is practical: stop trying to remove every negative experience before taking action. Let life be uncertain, and act anyway."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Acceptance versus defeat",
        not: "Concluding that nothing can improve or that action is pointless.",
        but: "Stopping the extra struggle against reality so wiser action becomes possible."
      },
      {
        type: "mentalModel",
        name: "The backwards route",
        explanation:
          "Some states become harder to reach when pursued through force. Happiness, confidence, and security often emerge indirectly through engagement with reality.",
        useWhen:
          "You are trying to feel a certain way before allowing yourself to live, choose, or act."
      }
    ],
    whyThisMatters:
      "The whole book depends on seeing that discomfort is not always an obstacle to happiness; resisting discomfort can be the obstacle.",
    practicalApplication:
      "When you notice yourself trying to feel perfectly ready or happy first, ask what action would be possible if discomfort were allowed to come along.",
    commonMistakes: [
      "Reading the book as pessimism",
      "Trying to optimize happiness as another achievement metric",
      "Assuming acceptance means giving up"
    ],
    misconceptions: [
      {
        misconception: "The book says happiness is impossible.",
        correction:
          "It says happiness is often approached more wisely by making room for reality than by trying to dominate every feeling."
      }
    ],
    lens:
      "Ask whether your happiness strategy is reducing suffering or adding pressure to feel differently.",
    anchors: [
      "Happiness often arrives indirectly.",
      "Freedom comes from making room for discomfort, not defeating it completely."
    ],
    takeaways: [
      "Chasing happiness directly can create pressure.",
      "Acceptance can support action.",
      "Anti-self-help is not anti-growth."
    ],
    examples: [
      "A writer begins despite insecurity rather than waiting for confidence.",
      "A parent accepts ordinary frustration instead of treating it as failure.",
      "A professional stops demanding certainty before making a career move."
    ],
    relatedSections: ["positive-thinking-backfire", "control-everything"]
  }),
  lesson({
    id: "positive-thinking-backfire",
    title: "Why Positive Thinking Can Backfire",
    eyebrow: "Optimism",
    minutes: 31,
    summary:
      "Forced optimism can become pressure, denial, or suppression; negative thoughts often grow louder when treated as enemies.",
    objectives: [
      "Understand limits of positive thinking",
      "Relate differently to negative thoughts",
      "Distinguish helpful optimism from denial"
    ],
    concepts: ["positive thinking", "suppression", "denial", "negative thoughts"],
    body: [
      "Burkeman is not against hope. He is against the idea that the mind can be forced into permanent positivity without consequences. When people are told to think positive, negative thoughts can become shameful, as if anxiety or doubt proves a defective attitude.",
      "Trying to suppress thoughts often makes them more noticeable. The mind keeps checking whether the unwanted thought has disappeared, which keeps the thought active. A person trying not to worry may become preoccupied with whether they are worrying correctly.",
      "Visualizing success can also mislead. Sometimes it energizes action, but sometimes it creates emotional satisfaction before effort has occurred or makes later obstacles feel like violations of the imagined future. The fantasy can become a substitute for contact with reality.",
      "Helpful optimism remains connected to action and evidence. Denial refuses risk, grief, and complexity. The healthier practice is to let negative thoughts appear without treating them as commands or emergencies. A thought can be present without being obeyed.",
      "This changes the inner relationship. Instead of trying to win a war against negativity, you stop making negativity the enemy. That alone reduces its power."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Optimism versus forced positivity",
        not: "Demanding that the mind produce cheerful interpretations regardless of evidence.",
        but: "Maintaining enough hope to act while allowing fear, grief, and doubt to be present."
      },
      {
        type: "expandedExample",
        scenario: "A person preparing for an interview feels anxious.",
        defaultApproach:
          "Repeat positive statements and interpret anxiety as a sign they are not ready.",
        betterApproach:
          "Allow anxiety as a normal response, prepare concretely, and act without requiring emotional certainty.",
        whyItWorks:
          "The person stops making anxiety a second problem."
      }
    ],
    whyThisMatters:
      "People become less controlled by negative thoughts when they stop treating those thoughts as failures to be eliminated.",
    practicalApplication:
      "When a negative thought appears, label it as a thought, check whether it contains useful information, and proceed without requiring it to vanish.",
    commonMistakes: [
      "Treating negative thoughts as proof of failure",
      "Using visualization as a substitute for preparation",
      "Confusing optimism with refusal to see risk"
    ],
    misconceptions: [
      {
        misconception: "Negative thinking always creates negative outcomes.",
        correction:
          "Negative thoughts can be noise, information, or preparation. Their effect depends on how you relate to them."
      }
    ],
    lens:
      "Let thoughts be present without granting them command authority.",
    anchors: [
      "Suppressing negativity can make it louder.",
      "Optimism helps when it supports action rather than denial."
    ],
    takeaways: [
      "Positive thinking has limits.",
      "Negative thoughts do not have to disappear before action.",
      "Hope is stronger when it remains reality-based."
    ],
    examples: [
      "A leader names risks without collapsing morale.",
      "A student studies despite self-doubt.",
      "A patient plans treatment while allowing fear."
    ],
    relatedSections: ["uncertainty-insecurity-confidence", "failure-meaningful-action"]
  }),
  lesson({
    id: "control-everything",
    title: "The Problem With Trying to Control Everything",
    eyebrow: "Control",
    minutes: 32,
    summary:
      "The craving for certainty and control often creates more anxiety because life remains partly uncontrollable no matter how carefully we plan.",
    objectives: [
      "Understand why control strategies create anxiety",
      "Accept uncertainty without passivity",
      "Act effectively without guarantees"
    ],
    concepts: ["control", "uncertainty", "planning", "anxiety"],
    body: [
      "Human beings crave control because uncertainty feels vulnerable. We plan careers, protect health, manage money, monitor relationships, and try to reduce risk. Much of this is wise. The problem begins when control becomes a demand that life provide guarantees.",
      "Life resists total control. Careers depend on markets, managers, timing, and health. Relationships involve another person's freedom. Bodies age and surprise us. Money plans meet economies and emergencies. Even good planning cannot remove contingency.",
      "Control strategies can become anxiety engines. The more a person tries to eliminate uncertainty, the more uncertainty becomes intolerable. Every unknown must be solved. Every possibility must be anticipated. Planning becomes reassurance-seeking rather than preparation.",
      "Burkeman's alternative is not carelessness. It is acting inside uncertainty rather than trying to get outside it. You can make plans, buy insurance, communicate clearly, save money, and prepare well while admitting that outcomes remain open.",
      "This admission can be strangely calming. If guarantees were never available, you can stop waiting for them. You can move with partial information, repair when needed, and respond when reality changes."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Control and acceptance",
        columns: ["Domain", "Useful control", "Unhelpful control"],
        rows: [
          ["Career", "Build skills and relationships", "Demand certainty before any move"],
          ["Relationships", "Communicate and set boundaries", "Try to manage another person's feelings"],
          ["Health", "Care for body and seek treatment", "Assume perfect prevention is possible"],
          ["Money", "Save and manage risk", "Try to eliminate all future uncertainty"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Preparation versus guarantee-seeking",
        not: "Planning as an attempt to make uncertainty disappear.",
        but: "Planning as a way to act responsibly while accepting that outcomes remain uncertain."
      }
    ],
    whyThisMatters:
      "A healthier relationship with control reduces anxiety and makes action more flexible.",
    practicalApplication:
      "For a current worry, separate what can be prepared from what must remain uncertain.",
    commonMistakes: [
      "Treating uncertainty as evidence that you are unprepared",
      "Using planning mainly to seek reassurance",
      "Confusing acceptance with carelessness"
    ],
    misconceptions: [
      {
        misconception: "If I accept uncertainty, I will stop acting responsibly.",
        correction:
          "Acceptance can make action cleaner because it stops wasting energy on impossible guarantees."
      }
    ],
    lens:
      "Control what can be responsibly influenced; stop demanding that life become guarantee-shaped.",
    anchors: [
      "Life remains uncertain even after good planning.",
      "Accepting uncertainty can make action more effective."
    ],
    takeaways: [
      "Control is useful until it becomes guarantee-seeking.",
      "Uncertainty is not a sign that something is wrong.",
      "Action can happen without total security."
    ],
    examples: [
      "A founder plans runway while accepting market uncertainty.",
      "A partner communicates needs without controlling the other person's response.",
      "A family prepares financially without pretending risk can vanish."
    ],
    relatedSections: ["negative-visualization-loss", "goals-attachment-unfinished"]
  }),
  lesson({
    id: "negative-visualization-loss",
    title: "Negative Visualization and the Freedom of Facing Loss",
    eyebrow: "Stoicism",
    minutes: 32,
    summary:
      "Deliberately facing feared outcomes can reduce avoidance, increase gratitude, and make loss less mysterious without becoming rumination.",
    objectives: [
      "Understand negative visualization",
      "Distinguish it from rumination",
      "Use it to increase resilience and gratitude"
    ],
    concepts: ["negative visualization", "loss", "gratitude", "resilience"],
    body: [
      "One of the book's most practical ideas comes from Stoic thinking: sometimes it helps to imagine losing what you fear losing. This sounds bleak only if the goal is permanent cheerfulness. The point is not to dwell morbidly, but to reduce the terror created by refusing to look.",
      "Avoided fears often grow vague and enormous. What if I fail? What if they leave? What if I lose the job? What if I get sick? Negative visualization gives fear a shape. Once shaped, it can be examined, prepared for, grieved, or accepted.",
      "It can also deepen gratitude. To imagine the absence of a person, home, health, opportunity, or ordinary day can make the present less invisible. Much of what sustains life becomes unnoticed because it is familiar.",
      "The difference between negative visualization and rumination is purpose. Rumination loops helplessly and intensifies threat. Negative visualization is limited, deliberate, and clarifying. It asks: could I survive this? What would matter? What can I do now? What should I appreciate while it is here?",
      "Facing loss does not prevent loss. It changes the relationship to fear. The feared thing becomes part of reality, not an unspeakable monster at the edge of attention."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Negative visualization versus rumination",
        not: "Looping repeatedly through feared outcomes in a way that increases helplessness.",
        but: "Briefly and deliberately facing possible loss to clarify resilience, preparation, and gratitude."
      },
      {
        type: "application",
        context: "Using negative visualization carefully",
        steps: [
          "Choose one realistic fear, not a cascade of catastrophes.",
          "Imagine it briefly enough to give it shape.",
          "Ask what would remain, what could be done, and what deserves appreciation now."
        ],
        result:
          "Fear becomes more concrete and less governing without becoming a mental habit of dread."
      }
    ],
    whyThisMatters:
      "Facing loss can reduce the power of avoided fears and restore appreciation for ordinary life.",
    practicalApplication:
      "Use a brief negative visualization when fear is vague, inflated, or causing avoidance.",
    commonMistakes: [
      "Turning the practice into repetitive worry",
      "Imagining extreme catastrophes with no practical purpose",
      "Using gratitude to deny real grief"
    ],
    misconceptions: [
      {
        misconception: "Imagining loss means becoming morbid.",
        correction:
          "Handled carefully, it can make people more grateful, resilient, and less fear-governed."
      }
    ],
    lens:
      "Facing a fear briefly can make it less vague and less controlling.",
    anchors: [
      "What can be faced is often less terrifying than what must remain avoided.",
      "Imagined loss can restore gratitude for what is present."
    ],
    takeaways: [
      "Negative visualization gives fear a shape.",
      "It differs from rumination by being bounded and clarifying.",
      "Facing loss can increase gratitude and resilience."
    ],
    examples: [
      "A professional imagines a job loss and makes a practical plan.",
      "A parent appreciates ordinary family routines by remembering their impermanence.",
      "A creator faces possible criticism and publishes anyway."
    ],
    relatedSections: ["mortality-finitude", "control-everything"]
  }),
  lesson({
    id: "uncertainty-insecurity-confidence",
    title: "Uncertainty, Insecurity, and the Myth of Perfect Confidence",
    eyebrow: "Insecurity",
    minutes: 31,
    summary:
      "Insecurity is normal, and waiting for perfect confidence delays life; action often precedes confidence rather than follows it.",
    objectives: [
      "Normalize insecurity without obeying it",
      "Understand action before confidence",
      "Move forward without guarantees"
    ],
    concepts: ["uncertainty", "insecurity", "confidence", "action"],
    body: [
      "A great deal of self-help implies that confidence should come first. Once you believe in yourself, then you can act. Burkeman's view is gentler and more realistic: confidence often comes after action, feedback, and survival of uncertainty.",
      "Insecurity is not a sign that something is wrong. It is a normal response to doing something exposed, new, uncertain, or meaningful. The problem is not insecurity itself; it is the belief that insecurity disqualifies you from acting.",
      "Waiting for perfect confidence creates a postponement loop. You delay the conversation, application, project, relationship, or decision until the feeling of readiness arrives. But readiness often requires evidence, and evidence requires action.",
      "This does not mean reckless action. It means small, concrete movement without emotional guarantees. You can prepare, ask for help, reduce downside, and take the next step while still feeling unsure.",
      "The freedom is quiet: you no longer need to become a fearless person before living. You need to become a person who can act while fear is present."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A person wants to change careers but feels insecure.",
        defaultApproach:
          "Wait until they feel certain enough to make a perfect move.",
        betterApproach:
          "Run small experiments: talk to practitioners, take a project, test skills, and gather evidence while uncertainty remains.",
        whyItWorks:
          "Action creates information that confidence alone cannot provide."
      },
      {
        type: "keyDistinction",
        title: "Readiness versus certainty",
        not: "Feeling emotionally guaranteed that the outcome will work.",
        but: "Being prepared enough to take the next responsible step."
      }
    ],
    whyThisMatters:
      "Many meaningful actions are delayed because people mistake insecurity for a stop sign.",
    practicalApplication:
      "Identify the smallest responsible action that would create information before confidence is complete.",
    commonMistakes: [
      "Waiting for certainty before beginning",
      "Treating insecurity as a verdict on capability",
      "Using preparation to avoid exposure forever"
    ],
    misconceptions: [
      {
        misconception: "Confident people act because they have no insecurity.",
        correction:
          "Often they act with insecurity present and develop confidence through contact with reality."
      }
    ],
    lens:
      "Do not ask whether fear is gone. Ask whether the next step is responsible enough to take.",
    anchors: [
      "Action often precedes confidence.",
      "Uncertainty is not disqualification."
    ],
    takeaways: [
      "Insecurity is normal in meaningful action.",
      "Perfect confidence is often a myth.",
      "Small experiments create confidence through evidence."
    ],
    examples: [
      "Submitting work before feeling fully legitimate.",
      "Having a hard conversation while anxious.",
      "Starting a business experiment before every answer is known."
    ],
    relatedSections: ["failure-meaningful-action", "positive-thinking-backfire"]
  }),
  lesson({
    id: "failure-meaningful-action",
    title: "Failure as a Condition of Meaningful Action",
    eyebrow: "Failure",
    minutes: 31,
    summary:
      "Failure is unavoidable wherever action matters, and accepting its possibility reduces fear while clarifying reality.",
    objectives: [
      "Understand why failure cannot be eliminated",
      "See avoidance of failure as avoidance of meaning",
      "Use failure to clarify reality"
    ],
    concepts: ["failure", "meaningful action", "avoidance", "reality"],
    body: [
      "Failure is not an exception to meaningful action. It is one of its conditions. If an action can matter, it can probably fail. Creative work can be ignored. A career move can disappoint. A relationship can hurt. A business can close. A conversation can go badly.",
      "The attempt to avoid failure often becomes an attempt to avoid life. You can protect yourself from rejection by never asking, from criticism by never publishing, from heartbreak by never loving, from career risk by never choosing. Safety expands, but so does regret.",
      "Burkeman's approach is not to glorify failure. Failure can be painful, expensive, embarrassing, and consequential. The point is that accepting the possibility of failure reduces the extra fear created by pretending it must not happen.",
      "Failure also clarifies reality. It reveals constraints, preferences, market truth, relational truth, skill gaps, and hidden assumptions. It can hurt and still be informative.",
      "The calmer stance is to act while allowing failure to be possible. This does not guarantee courage, but it lowers the impossible standard that courage requires invulnerability."
    ],
    support: [
      {
        type: "framework",
        title: "Failure acceptance",
        stages: [
          { name: "Possibility", description: "Name the failure that could happen." },
          { name: "Survivability", description: "Ask what would remain and what could be repaired." },
          { name: "Information", description: "Identify what failure would teach." },
          { name: "Action", description: "Choose the next step with the risk visible." }
        ]
      },
      {
        type: "misconception",
        misconception: "Accepting failure lowers standards.",
        correction:
          "It can raise action quality by reducing panic and making reality visible.",
        whyItMatters:
          "Fear of failure often wastes more energy than failure itself."
      }
    ],
    whyThisMatters:
      "A life organized around failure avoidance becomes smaller than the person actually wants.",
    practicalApplication:
      "Before an avoided action, name the realistic failure and what you would do if it happened.",
    commonMistakes: [
      "Romanticizing failure instead of learning from it",
      "Avoiding meaningful action to preserve a safe identity",
      "Treating possible failure as proof you should not begin"
    ],
    misconceptions: [
      {
        misconception: "If failure is possible, I am not ready.",
        correction:
          "Failure is possible in nearly every meaningful action."
      }
    ],
    lens:
      "If the action matters, failure probably belongs in the room. Make space for it and proceed wisely.",
    anchors: [
      "Failure is a condition of meaningful action.",
      "Avoiding failure can mean avoiding life."
    ],
    takeaways: [
      "Failure cannot be eliminated from meaningful work.",
      "Acceptance reduces fear's grip.",
      "Failure can clarify reality."
    ],
    examples: [
      "A relationship conversation risks awkwardness but reveals truth.",
      "A creative launch risks criticism but creates learning.",
      "A career experiment risks disappointment but produces data."
    ],
    relatedSections: ["uncertainty-insecurity-confidence", "ego-self-improvement"]
  }),
  lesson({
    id: "ego-self-improvement",
    title: "The Ego, Self-Improvement, and the Trap of Fixing Yourself",
    eyebrow: "Self",
    minutes: 32,
    summary:
      "Self-improvement can become self-obsession when the person treats themselves as a broken project that must be perfected before life can be lived.",
    objectives: [
      "Recognize self-improvement as possible ego trap",
      "Improve without treating yourself as broken",
      "Reduce perfectionistic self-monitoring"
    ],
    concepts: ["ego", "self-improvement", "inadequacy", "perfection"],
    body: [
      "Burkeman's critique of self-help is not that growth is bad. It is that the project of improving the self can quietly intensify the sense that the self is defective. Every technique implies another gap. Every ideal version of you becomes another measuring stick.",
      "The ego can feed on self-improvement. It becomes fascinated with becoming calmer, more successful, more mindful, more productive, more healed, more optimized. Even humility can become an achievement. The person remains centered on the self, now in the name of transcending the self.",
      "The fantasy of becoming a flawless person is itself a trap. Human beings remain limited, contradictory, distracted, needy, mortal, and unfinished. Improvement is possible, but perfection is not the entry fee for living.",
      "A healthier approach is to improve locally and lightly. Build a skill, apologize, rest, focus, seek therapy, practice attention, change a habit, but do not turn your whole being into a renovation project that must be completed before you are allowed to participate in life.",
      "The antidote is not stagnation. It is a less self-punishing relationship to growth: practical change without the metaphysical insult that you are fundamentally broken."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Growth versus self-fixation",
        not: "Treating the self as a defective object requiring endless optimization.",
        but: "Making concrete changes while accepting that human life remains imperfect and unfinished."
      },
      {
        type: "expandedExample",
        scenario: "A person consumes productivity systems but still feels behind.",
        defaultApproach:
          "Search for another system to finally become the person who never struggles.",
        betterApproach:
          "Choose one practical change, accept ordinary limitation, and return attention to the work and people that matter.",
        whyItWorks:
          "Improvement becomes service to life rather than an endless self-verdict."
      }
    ],
    whyThisMatters:
      "Self-improvement can become another way to postpone living until an ideal self arrives.",
    practicalApplication:
      "Choose one concrete improvement that serves life, then stop turning the rest of yourself into a problem to solve.",
    commonMistakes: [
      "Using self-help to intensify inadequacy",
      "Seeking a flawless future self before acting",
      "Mistaking self-monitoring for wisdom"
    ],
    misconceptions: [
      {
        misconception: "Accepting yourself means refusing growth.",
        correction:
          "Acceptance can make growth less frantic and more honest."
      }
    ],
    lens:
      "Improve in order to live better, not to earn permission to live.",
    anchors: [
      "Self-improvement can become self-obsession.",
      "You can grow without treating yourself as broken."
    ],
    takeaways: [
      "The desire to perfect the self can create inadequacy.",
      "Growth should be concrete and humane.",
      "Life remains unfinished even as you improve."
    ],
    examples: [
      "Using mindfulness to be present rather than to become impressive.",
      "Building focus without demanding perfect productivity.",
      "Changing a habit without turning every lapse into identity failure."
    ],
    relatedSections: ["anti-self-help-without-cynicism", "goals-attachment-unfinished"]
  }),
  lesson({
    id: "stoicism-buddhism-acceptance",
    title: "Stoicism, Buddhism, and Acceptance",
    eyebrow: "Traditions",
    minutes: 33,
    summary:
      "Burkeman draws from traditions that treat suffering as intensified by resistance, attachment, and mistaken control, while still leaving room for wise action.",
    objectives: [
      "Understand acceptance across traditions",
      "Distinguish acceptance from passivity",
      "Apply non-resistance in daily life"
    ],
    concepts: ["Stoicism", "Buddhism", "acceptance", "attachment"],
    body: [
      "The Antidote draws on philosophical and contemplative traditions that approach suffering differently from modern positivity culture. Stoicism emphasizes distinguishing what is under our control from what is not. Buddhist thought emphasizes the suffering created by attachment, grasping, and resistance to impermanence.",
      "These traditions do not promise a life without pain. They suggest that much extra suffering comes from fighting reality: demanding that the past be different, that uncertainty vanish, that other people behave as we prefer, that impermanence stop applying to what we love.",
      "Acceptance does not mean passivity. A Stoic can act with discipline. A Buddhist can respond with compassion. Acceptance means seeing clearly enough not to add denial, panic, or fantasy to the situation. From there, action can become cleaner.",
      "Daily life offers many small chances to practice this. A delayed train, a critical email, a health scare, a child's mood, a market downturn, a failed plan. The first wave is the event. The second wave is the struggle against the fact that it happened.",
      "The practical value is space. Acceptance creates room between reality and reaction. In that room, response improves."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Two acceptance traditions",
        columns: ["Tradition", "Central emphasis", "Daily application"],
        rows: [
          ["Stoicism", "Control what is yours; release what is not", "Prepare, act, and stop demanding guarantees"],
          ["Buddhism", "Notice attachment and impermanence", "Let experiences arise without clinging or aversion"],
          ["Shared lesson", "Resistance adds suffering", "Respond to reality rather than fighting its existence"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Acceptance versus resignation",
        not: "Doing nothing because the situation is difficult.",
        but: "Dropping the fight against facts so the next wise action is clearer."
      }
    ],
    whyThisMatters:
      "Acceptance is the bridge between the book's critique of control and its practical approach to action.",
    practicalApplication:
      "When something unwanted happens, identify the event itself and the extra suffering created by insisting it should not have happened.",
    commonMistakes: [
      "Using acceptance to avoid action",
      "Treating spiritual ideas as emotional bypassing",
      "Confusing control of response with control of outcome"
    ],
    misconceptions: [
      {
        misconception: "Acceptance means approving of what happened.",
        correction:
          "It means recognizing what happened so response can begin from reality."
      }
    ],
    lens:
      "Look for the second layer of suffering: the resistance to the fact that reality is already here.",
    anchors: [
      "Acceptance removes extra struggle.",
      "Clear action begins after contact with reality."
    ],
    takeaways: [
      "Stoicism and Buddhism both challenge control and attachment.",
      "Acceptance does not mean passivity.",
      "Resistance often adds suffering to pain."
    ],
    examples: [
      "A delayed plan is handled without the extra rage that it should not be delayed.",
      "A difficult emotion is noticed rather than immediately suppressed.",
      "A leader acts on what can be influenced while releasing uncontrollable outcomes."
    ],
    relatedSections: ["control-everything", "mortality-finitude"]
  }),
  lesson({
    id: "mortality-finitude",
    title: "Mortality and the Uses of Finitude",
    eyebrow: "Mortality",
    minutes: 32,
    summary:
      "Death awareness can clarify priorities, reduce perfectionism and status anxiety, and make finite choices feel meaningful rather than defective.",
    objectives: [
      "Understand mortality as clarifying",
      "See finite life as a source of meaning",
      "Reduce status anxiety and perfectionism"
    ],
    concepts: ["mortality", "finitude", "meaning", "limits"],
    body: [
      "Burkeman treats mortality not as a depressing interruption but as a central fact that self-help often tries to avoid. Many productivity and happiness systems imply that enough optimization could make life feel unlimited: more control, more achievement, more experiences, more improvement.",
      "Death refuses that fantasy. Time is finite. Choices exclude other choices. Projects remain unfinished. People are temporary. The question becomes not how to conquer limitation but how to live inside it without denial.",
      "Mortality can reduce perfectionism because it reveals that waiting for ideal conditions is a way of spending the very time you are trying to protect. It can reduce status anxiety because many reputation games look smaller when placed beside finitude.",
      "Finitude also gives meaning. A life where everything could be done eventually would make choice less urgent. The fact that time is limited gives weight to love, work, attention, and presence. To choose one thing is to let other things go.",
      "The practical use of mortality is not dramatic. It is a quieter reordering of concern: what deserves today, given that today is not infinite?"
    ],
    support: [
      {
        type: "synthesis",
        title: "Finitude as clarity",
        text:
          "Mortality does not solve life. It helps reveal which concerns are too small to deserve so much of a finite life."
      },
      {
        type: "keyDistinction",
        title: "Limits versus failure",
        not: "Treating unfinishedness as proof that you have mismanaged life.",
        but: "Recognizing that finite lives are necessarily selective and incomplete."
      }
    ],
    whyThisMatters:
      "A finite life cannot be optimized into unlimitedness, so wisdom requires choosing within limits.",
    practicalApplication:
      "Use finitude as a priority check: what would receive less attention if you accepted that not everything can be done?",
    commonMistakes: [
      "Avoiding mortality through busyness",
      "Treating unfinishedness as personal failure",
      "Using death awareness as despair instead of clarity"
    ],
    misconceptions: [
      {
        misconception: "Remembering mortality makes life bleak.",
        correction:
          "It can make life more vivid by restoring proportion and urgency."
      }
    ],
    lens:
      "Finite time asks not how to do everything, but what is worth choosing.",
    anchors: [
      "Finitude gives choices weight.",
      "A life can be meaningful without being complete."
    ],
    takeaways: [
      "Mortality clarifies priorities.",
      "Limits are not defects to eliminate.",
      "Finitude can reduce perfectionism and status anxiety."
    ],
    examples: [
      "A professional drops a low-value ambition to protect presence.",
      "A creator publishes imperfect work because waiting has a cost.",
      "A family chooses ordinary time over another optimization project."
    ],
    relatedSections: ["negative-visualization-loss", "goals-attachment-unfinished"]
  }),
  lesson({
    id: "goals-attachment-unfinished",
    title: "Goals, Attachment, and Letting Life Be Unfinished",
    eyebrow: "Goals",
    minutes: 32,
    summary:
      "Goals are useful, but identity attachment to outcomes creates suffering; life remains unfinished no matter how well it is managed.",
    objectives: [
      "Use goals without becoming owned by them",
      "Understand attachment to outcomes",
      "Act with commitment inside uncertainty"
    ],
    concepts: ["goals", "attachment", "outcomes", "unfinishedness"],
    body: [
      "Burkeman does not say goals are useless. Goals coordinate action, clarify priorities, and help people make decisions. The problem begins when goals become emotional guarantees: I will be okay only if this outcome happens.",
      "Attachment to outcomes creates suffering because outcomes depend on more than effort. Other people, timing, luck, health, markets, and mortality all participate. When identity depends entirely on a goal, uncertainty becomes unbearable.",
      "A calmer approach is committed non-attachment. You choose a direction, work sincerely, prepare well, and care about quality, while admitting that the result remains partly outside control. This is not half-hearted. It may be more wholehearted because less energy is spent fighting uncertainty.",
      "Life also remains unfinished. There will always be unread books, unvisited places, uncompleted projects, unanswered emails, unrealized selves. The fantasy of catching up completely is one of modern life's traps.",
      "The antidote is to let goals serve life rather than demand that life justify itself through goals."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Commitment versus attachment",
        not: "Needing a specific outcome to prove your worth or secure your identity.",
        but: "Acting seriously while accepting that results remain partly uncontrollable."
      },
      {
        type: "expandedExample",
        scenario: "A writer sets a publication goal.",
        defaultApproach:
          "Treat acceptance or rejection as the final verdict on identity.",
        betterApproach:
          "Write and submit with care, learn from responses, and keep the work meaningful beyond one outcome.",
        whyItWorks:
          "The goal guides action without becoming the whole self."
      }
    ],
    whyThisMatters:
      "A healthier relationship with goals allows effort without making peace dependent on outcomes.",
    practicalApplication:
      "For an important goal, name what is under your control and what must remain uncertain.",
    commonMistakes: [
      "Treating goals as guarantees of future emotional safety",
      "Letting identity depend on one outcome",
      "Believing life will feel complete after the next achievement"
    ],
    misconceptions: [
      {
        misconception: "Non-attachment means not caring.",
        correction:
          "It means caring and acting without pretending the outcome is fully yours to control."
      }
    ],
    lens:
      "Let goals guide action without making them the condition for being okay.",
    anchors: [
      "Goals are tools, not identity guarantees.",
      "Life remains unfinished even when lived well."
    ],
    takeaways: [
      "Goals help but become painful when fused with identity.",
      "Committed non-attachment supports wiser effort.",
      "Unfinishedness is part of finite life."
    ],
    examples: [
      "A job application is pursued seriously without becoming a worth verdict.",
      "A health goal guides habits while allowing imperfect bodies.",
      "A family accepts that not every plan will be completed."
    ],
    relatedSections: ["control-everything", "ego-self-improvement"]
  }),
  lesson({
    id: "anti-self-help-without-cynicism",
    title: "Anti-Self-Help Without Cynicism",
    eyebrow: "Integration",
    minutes: 31,
    summary:
      "The book rejects simplistic happiness formulas, not action, growth, care, or responsibility.",
    objectives: [
      "Avoid misreading the book as do nothing",
      "Take action without emotional certainty",
      "Reject self-help perfectionism without becoming cynical"
    ],
    concepts: ["anti-self-help", "cynicism", "action", "imperfection"],
    body: [
      "The Antidote can be misread as a sophisticated excuse to stop trying. If positivity backfires, control fails, goals create attachment, and self-improvement can become self-obsession, why do anything? Burkeman's answer is subtler: do things, but stop demanding that action come with emotional invulnerability.",
      "Anti-self-help does not mean anti-growth. It means skepticism toward formulas that promise to remove uncertainty, insecurity, mortality, failure, or sadness from life. The book invites action that is more honest because it does not depend on those removals.",
      "Cynicism is another trap. It protects people from disappointment by refusing hope. But cynicism is still a control strategy: if nothing matters, nothing can wound me. Burkeman's philosophy is not cynicism because it remains engaged with work, love, attention, and meaning.",
      "The practical stance is modest and strong. Make plans, but not guarantees. Improve, but do not treat yourself as broken. Hope, but allow grief. Set goals, but do not fuse them with identity. Act, but let insecurity accompany you.",
      "This is a quieter form of courage. It does not require triumphing over the human condition before participating in it."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "What the book rejects and preserves",
        columns: ["Rejects", "Preserves"],
        rows: [
          ["Forced positivity", "Reality-based hope"],
          ["Total control", "Responsible influence"],
          ["Perfectionist self-improvement", "Humane growth"],
          ["Outcome attachment", "Committed action"],
          ["Cynicism", "Engaged acceptance"]
        ]
      },
      {
        type: "warning",
        title: "Acceptance is not withdrawal",
        text:
          "If these ideas make life smaller, colder, or more avoidant, they have been flattened. The point is freer engagement with reality."
      }
    ],
    whyThisMatters:
      "The book's critique is useful only if it leads to calmer participation, not withdrawal or superiority.",
    practicalApplication:
      "Choose one area where you can act without waiting for positivity, certainty, or perfect readiness.",
    commonMistakes: [
      "Using anti-self-help as an excuse for avoidance",
      "Becoming cynical about all growth practices",
      "Treating acceptance as emotional superiority"
    ],
    misconceptions: [
      {
        misconception: "The book says self-help is useless.",
        correction:
          "It challenges self-help when it promises escape from unavoidable human realities."
      }
    ],
    lens:
      "Reject formulas that deny reality; keep practices that help you engage reality more honestly.",
    anchors: [
      "Anti-self-help is not anti-action.",
      "The goal is freer engagement with imperfect life."
    ],
    takeaways: [
      "The book critiques simplistic formulas.",
      "Acceptance should support action.",
      "Cynicism is not wisdom."
    ],
    examples: [
      "Using therapy without expecting a flawless self.",
      "Planning a career move while accepting uncertainty.",
      "Practicing mindfulness to meet life, not to become superior to it."
    ],
    relatedSections: ["backwards-path-happiness", "final-calmer-philosophy"]
  }),
  lesson({
    id: "final-calmer-philosophy",
    title: "Final Synthesis: A Calmer Philosophy for an Uncertain Life",
    eyebrow: "Synthesis",
    minutes: 36,
    summary:
      "The Antidote becomes a practical philosophy of making room for discomfort, uncertainty, failure, and finitude so life can be lived more freely.",
    objectives: [
      "Connect the book's main ideas",
      "Use discomfort as part of life rather than an obstacle to life",
      "Apply the philosophy without passivity"
    ],
    concepts: ["synthesis", "acceptance", "uncertainty", "freedom"],
    body: [
      "The Antidote is a book about relaxing an impossible demand: that life become secure, positive, confident, controlled, successful, and complete before it can be lived. Burkeman's argument is that this demand creates much of the suffering it promises to cure.",
      "The ideas connect through non-resistance. Positive thinking backfires when it refuses negative thought. Control backfires when it demands guarantees. Confidence backfires when it must be perfect before action. Goals backfire when identity attaches to outcomes. Self-improvement backfires when the self becomes an endless repair project.",
      "The alternative is not passivity. It is action inside reality. Face feared outcomes enough to reduce their mystery. Let uncertainty remain while you prepare responsibly. Accept failure as possible while doing meaningful work. Remember mortality so priorities become clearer. Use goals as tools without making them gods.",
      "Months later, the core memory should be simple: freedom comes from making room. Make room for fear, and you can act before confidence is complete. Make room for failure, and you can attempt meaningful things. Make room for finitude, and you can choose. Make room for imperfection, and life can begin now.",
      "This is a calmer philosophy because it stops requiring life to become something other than life. It asks for honesty, presence, and participation in the middle of uncertainty."
    ],
    support: [
      {
        type: "framework",
        title: "The Antidote operating lens",
        stages: [
          { name: "Notice control", description: "Where am I demanding emotional certainty or guarantees?" },
          { name: "Make room", description: "What discomfort can be allowed rather than eliminated?" },
          { name: "Act responsibly", description: "What preparation, boundary, or next step is still mine?" },
          { name: "Release outcome", description: "What remains outside control after wise action?" },
          { name: "Return", description: "What deserves attention in this finite, unfinished life?" }
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text:
          "Do not wait for perfect positivity, confidence, control, or completion. Make room for discomfort and act from clearer contact with reality."
      }
    ],
    whyThisMatters:
      "The book offers a durable alternative to both shallow positivity and defeatist pessimism.",
    practicalApplication:
      "Use the operating lens when you are stuck waiting for certainty, confidence, happiness, or completion before acting.",
    commonMistakes: [
      "Turning acceptance into passivity",
      "Remembering critique but forgetting practice",
      "Using uncertainty as an excuse to avoid commitment"
    ],
    misconceptions: [
      {
        misconception: "A calmer life requires eliminating discomfort.",
        correction:
          "It often requires a better relationship with discomfort."
      }
    ],
    lens:
      "Freedom comes from making room for reality and acting anyway.",
    anchors: [
      "Make room for discomfort; do not wait for its disappearance.",
      "An uncertain life can still be lived deliberately."
    ],
    takeaways: [
      "The book's ideas form a philosophy of non-resistance.",
      "Acceptance supports wiser action.",
      "Finitude, uncertainty, and failure can clarify life rather than defeat it."
    ],
    examples: [
      "A person acts on a career decision without perfect confidence.",
      "A family accepts unfinishedness and chooses presence.",
      "A creator publishes work while allowing fear and imperfection."
    ],
    relatedSections: ["backwards-path-happiness", "anti-self-help-without-cynicism"]
  })
];

export const theAntidote: Book = {
  slug: "the-antidote",
  title: "The Antidote",
  author: "Oliver Burkeman",
  category: "Happiness / Philosophy / Psychology",
  difficulty: "Intermediate",
  completionTime: "6h 23m",
  progress: 0,
  coverTone:
    "from-indigo-100 via-stone-100 to-teal-100 dark:from-indigo-950/40 dark:via-stone-950/50 dark:to-teal-950/35",
  description:
    "A calm philosophical curriculum on negative thinking, uncertainty, failure, control, acceptance, mortality, anti-self-help, and living more freely inside imperfection.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "happiness",
    "negative thinking",
    "uncertainty",
    "failure",
    "insecurity",
    "mortality",
    "acceptance",
    "control",
    "Stoicism",
    "Buddhism",
    "anti-self-help",
    "presence",
    "imperfection",
    "meaning"
  ],
  intendedOutcomes: [
    "Understand why chasing happiness directly often backfires",
    "Understand the limits of positive thinking",
    "Become more comfortable with uncertainty and insecurity",
    "Understand negative visualization and acceptance",
    "Think differently about failure and control",
    "Recognize why mortality can clarify life",
    "Apply the book without becoming passive or pessimistic"
  ],
  promise:
    "After completing this curriculum, you will understand Oliver Burkeman's critique of forced positivity and conventional self-help, including why uncertainty, failure, insecurity, mortality, and negative thinking can become sources of freedom rather than problems to eliminate.",
  recommendedAudience: [
    "Readers interested in philosophical approaches to happiness",
    "People tired of forced positivity and optimization culture",
    "Professionals and creators working with uncertainty or insecurity",
    "Anyone seeking acceptance without passivity"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around happiness, negative thinking, Stoicism, Buddhism, uncertainty, failure, control, and mortality. It does not reproduce long passages or chapter text.",
  sections
};
