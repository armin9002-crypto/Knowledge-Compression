import type { Book, ContentBlock, CurriculumSection } from "@/lib/types";
import { estimateSectionsMinutes } from "@/content/utils/readingTime";

type LessonDefinition = {
  id: string;
  title: string;
  eyebrow: string;
  minutes: number;
  summary: string;
  objectives: string[];
  concepts: string[];
  thesis: string;
  nuance: string;
  mentalModel: {
    name: string;
    explanation: string;
    useWhen: string;
  };
  scenario: string;
  defaultApproach: string;
  betterApproach: string;
  whyItWorks: string;
  applicationContext: string;
  applicationSteps: string[];
  applicationResult: string;
  exerciseTitle: string;
  exerciseInstructions: string;
  exercisePrompts: string[];
  reflection: string;
  whyThisMatters: string;
  practicalApplication: string;
  commonMistakes: string[];
  misconceptions: {
    misconception: string;
    correction: string;
  }[];
  retentionAnchors: string[];
  takeaways: string[];
  relatedSections?: string[];
};

function lesson(definition: LessonDefinition): CurriculumSection {
  const blocks: ContentBlock[] = [
    {
      type: "paragraph",
      text: definition.thesis
    },
    {
      type: "conceptCard",
      title: definition.concepts[0],
      body: definition.summary,
      whyItMatters: definition.whyThisMatters
    },
    {
      type: "keyDistinction",
      title: "Core distinction",
      not: definition.defaultApproach,
      but: definition.betterApproach
    },
    {
      type: "mentalModel",
      name: definition.mentalModel.name,
      explanation: definition.mentalModel.explanation,
      useWhen: definition.mentalModel.useWhen
    },
    {
      type: "paragraph",
      text: definition.nuance
    },
    {
      type: "expandedExample",
      scenario: definition.scenario,
      defaultApproach: definition.defaultApproach,
      betterApproach: definition.betterApproach,
      whyItWorks: definition.whyItWorks
    },
    {
      type: "application",
      context: definition.applicationContext,
      steps: definition.applicationSteps,
      result: definition.applicationResult
    },
    {
      type: "exercise",
      title: definition.exerciseTitle,
      instructions: definition.exerciseInstructions,
      prompts: definition.exercisePrompts,
      checklist: [
        "Make the action specific",
        "Reduce the first step until it can survive a busy day",
        "Decide what evidence will show the system is working"
      ]
    },
    {
      type: "misconception",
      misconception: definition.misconceptions[0].misconception,
      correction: definition.misconceptions[0].correction,
      whyItMatters: "Correcting this keeps the idea practical instead of turning it into another vague self-improvement slogan."
    },
    {
      type: "reflectionPrompt",
      id: `${definition.id}-reflection`,
      question: definition.reflection,
      helperText:
        "Write a short answer you could use this week. The note is saved locally in this browser."
    },
    {
      type: "retentionAnchor",
      title: "Retention anchor",
      anchor: definition.retentionAnchors[0]
    }
  ];

  return {
    id: definition.id,
    title: definition.title,
    eyebrow: definition.eyebrow,
    estimatedMinutes: definition.minutes,
    summary: definition.summary,
    learningObjectives: definition.objectives,
    keyConcepts: definition.concepts,
    blocks,
    subsections: [
      {
        id: `${definition.id}-mechanism`,
        title: "Mechanism",
        blocks: [
          {
            type: "paragraph",
            text: definition.thesis
          },
          {
            type: "framework",
            title: "How to apply this lesson",
            stages: definition.applicationSteps.map((step, index) => ({
              name: `Step ${index + 1}`,
              description: step
            }))
          }
        ],
        keyPoints: definition.takeaways.slice(0, 3),
        practicalApplication: definition.practicalApplication
      },
      {
        id: `${definition.id}-practice`,
        title: "Practice",
        blocks: [
          {
            type: "checklist",
            title: "Implementation checklist",
            items: definition.exercisePrompts
          },
          {
            type: "synthesis",
            title: "Lesson compression",
            text: definition.retentionAnchors.join(" ")
          }
        ],
        examples: [definition.scenario],
        keyPoints: definition.commonMistakes
      }
    ],
    appliedExamples: [
      definition.scenario,
      definition.applicationContext,
      definition.whyItWorks
    ],
    whyThisMatters: definition.whyThisMatters,
    practicalApplication: definition.practicalApplication,
    commonMistakes: definition.commonMistakes,
    misconceptions: definition.misconceptions,
    reflectionPrompts: [definition.reflection],
    implementationExercises: [
      definition.exerciseInstructions,
      ...definition.exercisePrompts
    ],
    retentionAnchors: definition.retentionAnchors,
    takeaways: definition.takeaways,
    relatedSections: definition.relatedSections
  };
}

const definitions: LessonDefinition[] = [
  {
    id: "core-thesis",
    title: "The Core Thesis: Tiny Behaviors, Large Outcomes",
    eyebrow: "Orientation",
    minutes: 12,
    summary:
      "Atomic Habits teaches that repeated small behaviors become the architecture of identity, capability, and results.",
    objectives: [
      "Understand why small habits are strategic rather than trivial",
      "Connect repeated behavior to identity and outcomes",
      "Diagnose behavior through systems instead of intention alone"
    ],
    concepts: ["behavioral compound interest", "systems", "identity evidence"],
    thesis:
      "The central insight is that life changes less through occasional intensity than through behaviors that survive long enough to compound. A small habit is not valuable because the single action is impressive. It is valuable because it is repeatable, and repetition gives time something to multiply.",
    nuance:
      "The book can be misread as a celebration of tiny actions for their own sake. The deeper point is design. Tiny behaviors work when they are connected to a system, pointed at a meaningful identity, and repeated under real conditions. A tiny behavior that never scales, never teaches, and never compounds is merely small.",
    mentalModel: {
      name: "Behavioral interest",
      explanation:
        "A habit is a deposit into a future capability. The individual deposit is modest; the accumulation changes what is easy, normal, and available.",
      useWhen:
        "Use this when a useful behavior feels too small to matter or when you are tempted to wait for a dramatic starting point."
    },
    scenario:
      "A reader wants to become well-read but repeatedly waits for a free weekend to make progress.",
    defaultApproach:
      "Treat reading as a large event requiring open time, high energy, and the perfect book mood.",
    betterApproach:
      "Create a daily ten-page reading slot after coffee and track one sentence worth remembering.",
    whyItWorks:
      "The new system lowers the activation cost, creates a recurring cue, and turns each session into identity evidence.",
    applicationContext: "How to begin a serious reading habit without relying on rare bursts of motivation",
    applicationSteps: [
      "Choose one stable daily anchor such as coffee, lunch, or the train",
      "Place the book where the anchor happens",
      "Read a minimum so small it feels almost too easy",
      "Capture one idea to make the reward immediate",
      "Review progress weekly instead of judging each day emotionally"
    ],
    applicationResult:
      "Reading becomes an ordinary part of the day rather than a project that requires ideal conditions.",
    exerciseTitle: "Find the smallest serious version",
    exerciseInstructions:
      "Choose one meaningful behavior and reduce it until it can be repeated on a difficult weekday.",
    exercisePrompts: [
      "What future identity does this behavior support?",
      "What is the smallest version that still counts as evidence?",
      "Where will the behavior live in the day?"
    ],
    reflection:
      "Which important behavior have you dismissed because the repeatable version looked too small?",
    whyThisMatters:
      "Most people underestimate actions that look unimpressive in the moment and overestimate plans that require ideal conditions.",
    practicalApplication:
      "Convert one desired outcome into a tiny daily behavior with a visible cue and an immediate record of completion.",
    commonMistakes: [
      "Confusing small with unserious",
      "Designing the ideal version before the repeatable version",
      "Expecting visible results before repetition has had time to accumulate"
    ],
    misconceptions: [
      {
        misconception: "Atomic habits are just tiny life hacks.",
        correction:
          "They are small units of system design that become powerful when they compound and reinforce identity."
      }
    ],
    retentionAnchors: [
      "Small is strategic when it is repeatable, meaningful, and allowed to compound.",
      "The question is not whether the action is impressive today; it is whether it can become evidence for months."
    ],
    takeaways: [
      "Habits are designable systems, not mere intentions.",
      "Tiny behaviors earn their power through repetition.",
      "The early goal is continuity, not spectacle."
    ],
    relatedSections: ["systems-vs-goals", "identity-based-behavior-change"]
  },
  {
    id: "small-habits-compound",
    title: "Why Small Habits Compound",
    eyebrow: "Compounding",
    minutes: 11,
    summary:
      "Small gains matter because repeated behavior changes skill, environment, identity, and future options at the same time.",
    objectives: [
      "Understand nonlinear progress",
      "Separate visible outcomes from hidden accumulation",
      "Identify leading indicators for habit progress"
    ],
    concepts: ["compound returns", "leading indicators", "delayed payoff"],
    thesis:
      "Compounding is not only mathematical. In behavior, repetition builds fluency, reduces friction, trains attention, and changes what feels normal. A habit can be producing value before the obvious outcome appears because capability is accumulating below the surface.",
    nuance:
      "Small habits do not compound automatically. They compound when the repeated action is directionally useful and paired with feedback. Repeating a weak behavior can also compound in the wrong direction, which is why awareness and review matter.",
    mentalModel: {
      name: "The invisible ledger",
      explanation:
        "Every repeated action creates entries in a hidden ledger of skill, identity, trust, and ease. Results appear after the ledger has accumulated enough weight.",
      useWhen:
        "Use this when early progress feels absent but your leading behaviors are becoming more consistent."
    },
    scenario:
      "A person starts exercising three times per week but sees little visible change after two weeks.",
    defaultApproach:
      "Decide the plan is not working because the mirror has not changed.",
    betterApproach:
      "Track attendance, energy, recovery, and strength as early signs that the system is taking root.",
    whyItWorks:
      "The person measures the behavior that creates the outcome instead of demanding the final outcome too early.",
    applicationContext: "How to stay with a learning or health habit while results lag",
    applicationSteps: [
      "Define the lagging outcome you eventually want",
      "List the leading behaviors that make it likely",
      "Track the leading behaviors for four weeks",
      "Review whether the behavior is easier, faster, or more natural",
      "Adjust the system only after enough repetitions to see a pattern"
    ],
    applicationResult:
      "The habit survives the emotionally difficult period where effort is visible and results are delayed.",
    exerciseTitle: "Build a leading indicator dashboard",
    exerciseInstructions:
      "Choose one goal and define three measures that show the system is working before the outcome arrives.",
    exercisePrompts: [
      "What outcome will lag?",
      "What behavior predicts it?",
      "What will you track weekly?"
    ],
    reflection:
      "Where are you quitting because the outcome is delayed, even though the system may be improving?",
    whyThisMatters:
      "Delayed rewards make good systems emotionally fragile unless the learner can see proof of progress earlier.",
    practicalApplication:
      "Track attendance, repetitions, pages, drafts, or conversations before judging weight loss, expertise, revenue, or reputation.",
    commonMistakes: [
      "Measuring only the final outcome",
      "Changing the plan before enough repetitions accumulate",
      "Ignoring the compounding of negative defaults"
    ],
    misconceptions: [
      {
        misconception: "If a habit is working, results should appear quickly.",
        correction:
          "Many valuable systems produce invisible accumulation before visible change."
      }
    ],
    retentionAnchors: [
      "Compounding begins before it becomes visible.",
      "Track the behavior that produces the result before judging the result itself."
    ],
    takeaways: [
      "Leading indicators protect patience.",
      "Small habits compound through skill, ease, and identity.",
      "Bad habits compound too."
    ],
    relatedSections: ["plateaus-delayed-results", "habit-tracking-feedback"]
  },
  {
    id: "identity-based-behavior-change",
    title: "Identity-Based Behavior Change",
    eyebrow: "Identity",
    minutes: 14,
    summary:
      "The deepest habit change happens when repeated behavior becomes evidence for the kind of person you believe yourself to be.",
    objectives: [
      "Explain why identity can outlast motivation",
      "Use evidence-based identity language",
      "Avoid rigid or shame-based identity traps"
    ],
    concepts: ["identity evidence", "self-consistency", "behavioral votes"],
    thesis:
      "Identity-based habits begin with the person you are practicing becoming. The behavior matters not just because it produces an outcome, but because it casts a vote for a self-concept. Over time, repeated evidence makes the behavior feel less like negotiation and more like self-consistency.",
    nuance:
      "Identity is powerful precisely because it can become limiting. A useful identity should be directional, not brittle. The goal is not to declare, I never miss. The goal is to gather evidence that you return, repair, practice, learn, and continue.",
    mentalModel: {
      name: "Votes for the self",
      explanation:
        "Each repetition is a vote. No single vote decides the election, but repeated votes change the story you find believable about yourself.",
      useWhen:
        "Use this when a habit feels external, forced, or dependent on temporary motivation."
    },
    scenario:
      "Someone wants to save money but thinks of themselves as bad with money.",
    defaultApproach:
      "Try to force a large savings target while keeping the same self-story.",
    betterApproach:
      "Create a tiny automatic transfer and review it as proof: I am someone who protects future options.",
    whyItWorks:
      "The action is small enough to repeat and meaningful enough to contradict the old identity with evidence.",
    applicationContext: "How to apply identity-based habits to money",
    applicationSteps: [
      "Name the identity in plain language",
      "Choose one behavior that proves it at low cost",
      "Make the behavior automatic or anchored",
      "Review the evidence weekly",
      "Increase the behavior only after the identity feels believable"
    ],
    applicationResult:
      "Financial change begins as identity proof rather than a fight against an old label.",
    exerciseTitle: "Write identity evidence, not affirmations",
    exerciseInstructions:
      "Turn one aspiration into an identity statement and one tiny proof behavior.",
    exercisePrompts: [
      "Who is the kind of person who would naturally do this?",
      "What tiny action would count as evidence today?",
      "What old identity needs less attention?"
    ],
    reflection:
      "What behavior would give you credible evidence for an identity you want to strengthen?",
    whyThisMatters:
      "Motivation asks you to push. Identity changes what feels natural to repeat.",
    practicalApplication:
      "Use identity language only when it is paired with a proof behavior; otherwise it becomes decoration.",
    commonMistakes: [
      "Using identity statements as slogans without evidence",
      "Choosing identities so rigid that a missed day becomes a crisis",
      "Letting old labels explain behavior instead of redesigning behavior"
    ],
    misconceptions: [
      {
        misconception: "Identity-based habits are positive affirmations.",
        correction:
          "They are evidence loops: repeated proof gradually changes what you believe about yourself."
      }
    ],
    retentionAnchors: [
      "Identity follows evidence.",
      "You become the kind of person your repeated proof makes believable."
    ],
    takeaways: [
      "Behavior is a vote for identity.",
      "Identity makes habits more durable than motivation.",
      "Healthy identity is directional, not perfectionistic."
    ],
    relatedSections: ["outcomes-processes-identity", "consistency-recovery"]
  },
  {
    id: "outcomes-processes-identity",
    title: "Outcomes vs Processes vs Identity",
    eyebrow: "Levels",
    minutes: 11,
    summary:
      "Behavior change works at three levels: what you get, what you do, and who you believe you are becoming.",
    objectives: [
      "Distinguish outcome, process, and identity levels",
      "Convert outcomes into repeatable systems",
      "Use identity as a stabilizing layer beneath behavior"
    ],
    concepts: ["outcomes", "processes", "identity"],
    thesis:
      "Outcomes describe the result, processes describe the recurring behavior, and identity describes the self-concept that makes the behavior coherent. Most plans start at the outcome and stop there. Atomic Habits pushes deeper: define the process that produces the outcome and the identity that makes the process worth repeating.",
    nuance:
      "Outcomes are not bad. They provide direction and standards. The problem is treating the outcome as the plan. A target weight, revenue number, or reading goal does not tell you what happens Tuesday at 7:30 a.m.",
    mentalModel: {
      name: "Three-layer change",
      explanation:
        "Outcome is the destination, process is the route, identity is the traveler learning to walk that route.",
      useWhen:
        "Use this when a goal is clear but your daily behavior still feels vague."
    },
    scenario:
      "A professional wants to become a better public speaker.",
    defaultApproach:
      "Set a goal to be confident on stage someday.",
    betterApproach:
      "Practice one two-minute explanation after lunch three days a week and adopt the identity of a person who clarifies ideas aloud.",
    whyItWorks:
      "The plan connects the desired outcome to a repeatable process and a self-concept that supports the behavior.",
    applicationContext: "How to convert a goal into a daily or weekly practice",
    applicationSteps: [
      "Write the desired outcome",
      "Ask what recurring behavior would make it likely",
      "Attach that behavior to a real context",
      "Name the identity the behavior expresses",
      "Review the process before judging the outcome"
    ],
    applicationResult:
      "The goal becomes operational instead of aspirational.",
    exerciseTitle: "Translate one goal through all three layers",
    exerciseInstructions:
      "Take one goal and write its outcome, process, and identity versions.",
    exercisePrompts: [
      "What result do you want?",
      "What recurring behavior creates it?",
      "What identity does that behavior practice?"
    ],
    reflection:
      "Which of your goals has a destination but no route?",
    whyThisMatters:
      "A goal without a process creates pressure but not progress.",
    practicalApplication:
      "For every major outcome, define one process metric and one identity sentence supported by evidence.",
    commonMistakes: [
      "Mistaking a target for a plan",
      "Choosing too many processes for one outcome",
      "Using identity language without a behavior attached"
    ],
    misconceptions: [
      {
        misconception: "Atomic Habits says goals do not matter.",
        correction:
          "Goals matter for direction; systems and identity matter for repeatable movement."
      }
    ],
    retentionAnchors: [
      "Outcome points. Process moves. Identity stabilizes.",
      "A goal is not a plan until it has a recurring behavior."
    ],
    takeaways: [
      "Use outcomes for direction.",
      "Use processes for execution.",
      "Use identity for durability."
    ],
    relatedSections: ["systems-vs-goals"]
  },
  {
    id: "habit-loop",
    title: "The Habit Loop: Cue, Craving, Response, Reward",
    eyebrow: "Mechanism",
    minutes: 13,
    summary:
      "Habits are feedback loops: a cue predicts a reward, craving creates desire, response delivers behavior, and reward teaches repetition.",
    objectives: [
      "Identify the four parts of any habit",
      "Diagnose which part of a habit loop is failing",
      "Design replacement behaviors that satisfy the real craving"
    ],
    concepts: ["cue", "craving", "response", "reward"],
    thesis:
      "A habit is a loop, not an isolated action. The cue tells the brain an opportunity is available. The craving is the desire for a state change. The response is the behavior. The reward satisfies the craving and teaches the brain whether the loop is worth repeating.",
    nuance:
      "The craving is often misunderstood. People do not always crave the object itself; they crave relief, certainty, stimulation, belonging, closure, or control. That is why replacing a bad habit requires understanding the job it performs.",
    mentalModel: {
      name: "Behavior diagnosis",
      explanation:
        "When a habit fails, ask which loop element is weak: cue, craving, response, or reward.",
      useWhen:
        "Use this when you keep blaming discipline but have not inspected the mechanics of the behavior."
    },
    scenario:
      "A worker checks email constantly during deep work blocks.",
    defaultApproach:
      "Tell themselves to stop being distracted.",
    betterApproach:
      "Identify the craving for certainty, schedule email checks, remove badges, and create a visible task queue for reassurance.",
    whyItWorks:
      "The replacement addresses the actual craving while changing the cue and response path.",
    applicationContext: "How to tell whether a habit failed because of cue, craving, response, or reward",
    applicationSteps: [
      "Write the unwanted behavior",
      "Identify the cue that usually precedes it",
      "Name the state change you want",
      "List the easiest response currently available",
      "Design a better response that still satisfies the underlying craving"
    ],
    applicationResult:
      "The habit becomes inspectable and redesignable instead of mysterious.",
    exerciseTitle: "Map one habit loop",
    exerciseInstructions:
      "Choose one repeated behavior and map cue, craving, response, and reward.",
    exercisePrompts: [
      "What happens right before the behavior?",
      "What feeling are you trying to create or remove?",
      "What reward teaches you to repeat it?"
    ],
    reflection:
      "Which recurring behavior makes more sense when you view it as an attempt to change your internal state?",
    whyThisMatters:
      "A habit can be redesigned only after its function is understood.",
    practicalApplication:
      "Use the four-part loop as a diagnostic template before adding more effort.",
    commonMistakes: [
      "Treating the visible behavior as the entire habit",
      "Replacing a habit without satisfying the craving",
      "Ignoring the reward that keeps the loop alive"
    ],
    misconceptions: [
      {
        misconception: "Bad habits are irrational.",
        correction:
          "Many bad habits are rational short-term solutions with expensive long-term consequences."
      }
    ],
    retentionAnchors: [
      "Cue predicts. Craving wants. Response acts. Reward teaches.",
      "Change the loop, not just the visible action."
    ],
    takeaways: [
      "Every habit has a structure.",
      "Cravings reveal the job a habit performs.",
      "Rewards train repetition."
    ],
    relatedSections: ["breaking-bad-habits-inversion"]
  },
  {
    id: "first-law-obvious",
    title: "The First Law: Make It Obvious",
    eyebrow: "Law 1",
    minutes: 12,
    summary:
      "Good habits become easier when their cues are visible, specific, and placed where the behavior should happen.",
    objectives: [
      "Understand why cues drive behavior",
      "Design visible triggers for good habits",
      "Reduce ambiguity in when and where action begins"
    ],
    concepts: ["cue design", "visibility", "specificity"],
    thesis:
      "The first law is about attention. A behavior that is not cued must compete with the entire day. When the cue is visible and specific, the mind has less deciding to do. Obvious cues transform a vague intention into a concrete invitation.",
    nuance:
      "Making a cue obvious does not mean making the whole environment noisy. It means placing the right signal in the right context. A visible book on a reading chair is useful; a dozen reminders across every device becomes clutter.",
    mentalModel: {
      name: "Attention architecture",
      explanation:
        "What your environment repeatedly brings to attention becomes more likely to become behavior.",
      useWhen:
        "Use this when you forget a habit or rely on memory at the moment of action."
    },
    scenario:
      "Someone wants to stretch daily but remembers only when they are already in bed.",
    defaultApproach:
      "Promise to remember tomorrow.",
    betterApproach:
      "Put the stretching mat beside the bathroom door and stretch after brushing teeth.",
    whyItWorks:
      "The cue appears in the exact context where the behavior should begin.",
    applicationContext: "How to design cues for a morning routine",
    applicationSteps: [
      "Choose the behavior",
      "Choose the place it should happen",
      "Place a physical cue there",
      "Pair the cue with a stable existing routine",
      "Remove competing cues from the same context"
    ],
    applicationResult:
      "The desired action becomes visible before the day can bury it.",
    exerciseTitle: "Install one obvious cue",
    exerciseInstructions:
      "Design a cue that appears in the precise location where your habit should start.",
    exercisePrompts: [
      "Where should the behavior happen?",
      "What object or signal can live there?",
      "What competing cue should be removed?"
    ],
    reflection:
      "Which habit is currently invisible until the moment has already passed?",
    whyThisMatters:
      "Forgetting is often an environment problem disguised as a character problem.",
    practicalApplication:
      "Use physical placement, calendar blocks, and visual defaults to make the next right action hard to miss.",
    commonMistakes: [
      "Using vague reminders instead of contextual cues",
      "Putting cues where action cannot happen",
      "Adding cues without removing competing cues"
    ],
    misconceptions: [
      {
        misconception: "If a habit matters, I should remember it.",
        correction:
          "Important habits deserve designed cues precisely because attention is limited."
      }
    ],
    retentionAnchors: [
      "Obvious cues reduce the need to remember.",
      "Put the cue where the behavior begins."
    ],
    takeaways: [
      "Visibility precedes repetition.",
      "Specific cues beat vague intentions.",
      "The environment can remember for you."
    ],
    relatedSections: ["habit-scorecards-awareness", "environment-design"]
  },
  {
    id: "habit-scorecards-awareness",
    title: "Habit Scorecards and Awareness",
    eyebrow: "Awareness",
    minutes: 10,
    summary:
      "Before redesigning behavior, make your current habits visible enough to evaluate without drama.",
    objectives: [
      "Inventory current habits",
      "Separate observation from judgment",
      "Identify high-leverage behaviors to redesign first"
    ],
    concepts: ["habit scorecard", "awareness", "behavior audit"],
    thesis:
      "A habit scorecard turns the invisible routine of a day into inspectable data. You list recurring behaviors and mark whether each one helps, hurts, or is neutral relative to the person you want to become. The point is clarity, not self-criticism.",
    nuance:
      "Awareness can become counterproductive if it turns into a courtroom. The scorecard is a map. A map helps you move; it does not need to shame you for where you are standing.",
    mentalModel: {
      name: "Behavior inventory",
      explanation:
        "You cannot redesign a system you have not made visible.",
      useWhen:
        "Use this before adding new habits or when your day feels reactive."
    },
    scenario:
      "A person wants better evenings but has never mapped the sequence from finishing work to going to sleep.",
    defaultApproach:
      "Decide to have more discipline at night.",
    betterApproach:
      "List the evening sequence, identify the cue that starts scrolling, and redesign that point in the chain.",
    whyItWorks:
      "The intervention targets the actual routine instead of an abstract desire to improve.",
    applicationContext: "How to run an evening habit audit",
    applicationSteps: [
      "Write every repeated action in a specific time window",
      "Mark each as positive, neutral, or negative",
      "Identify the first behavior that sends the routine off track",
      "Choose one cue or friction point to redesign",
      "Review after three evenings"
    ],
    applicationResult:
      "The day becomes a sequence you can edit rather than a blur you endure.",
    exerciseTitle: "Create a one-hour scorecard",
    exerciseInstructions:
      "Audit one recurring hour of your day instead of trying to map everything.",
    exercisePrompts: [
      "What behavior starts the hour?",
      "Which action is neutral but acts as a bridge to something negative?",
      "Where would one small redesign have the most leverage?"
    ],
    reflection:
      "What part of your day do you understand least because you have never written it down?",
    whyThisMatters:
      "Change accelerates when you stop guessing where the behavior begins.",
    practicalApplication:
      "Use a scorecard before choosing new habits so you can improve the current operating system first.",
    commonMistakes: [
      "Auditing too much at once",
      "Judging behaviors before understanding their function",
      "Trying to fix every negative mark immediately"
    ],
    misconceptions: [
      {
        misconception: "Awareness alone changes habits.",
        correction:
          "Awareness creates the map; design changes the route."
      }
    ],
    retentionAnchors: [
      "Make the routine visible before trying to improve it.",
      "Audit with curiosity, then redesign with precision."
    ],
    takeaways: [
      "Scorecards reveal hidden loops.",
      "Observation should precede judgment.",
      "One leverage point can change an entire routine."
    ],
    relatedSections: ["first-law-obvious", "advanced-habit-design"]
  },
  {
    id: "implementation-intentions",
    title: "Implementation Intentions",
    eyebrow: "Specificity",
    minutes: 10,
    summary:
      "A habit becomes more likely when you define exactly when and where the behavior will happen.",
    objectives: [
      "Turn vague intentions into executable commitments",
      "Use time and place to reduce decision friction",
      "Spot intentions that are too ambiguous to guide behavior"
    ],
    concepts: ["when", "where", "implementation intention"],
    thesis:
      "Implementation intentions work because they remove ambiguity at the moment of action. I will exercise more leaves every detail undecided. I will walk for ten minutes after lunch at the office park gives the behavior a time, place, and starting line.",
    nuance:
      "Specificity should make the behavior easier, not brittle. If your context changes often, define a backup version. A rigid plan that collapses whenever the day changes is not a system; it is a wish with a calendar attached.",
    mentalModel: {
      name: "Decision prepayment",
      explanation:
        "Deciding when and where in advance pays the decision cost before energy is low.",
      useWhen:
        "Use this when you intend to act but repeatedly postpone because the start point is vague."
    },
    scenario:
      "A learner wants to review notes but keeps waiting for a good time.",
    defaultApproach:
      "Plan to review sometime this week.",
    betterApproach:
      "Review notes for fifteen minutes at 8:15 p.m. at the kitchen table on Tuesday and Thursday.",
    whyItWorks:
      "The behavior has a clear appointment and a defined environment.",
    applicationContext: "How to schedule study without making it feel enormous",
    applicationSteps: [
      "Choose a small study behavior",
      "Assign a precise day and time",
      "Assign a location",
      "Prepare materials before the appointment",
      "Create a backup slot for disruptions"
    ],
    applicationResult:
      "Study becomes a scheduled action rather than an unresolved intention.",
    exerciseTitle: "Write the when-where sentence",
    exerciseInstructions:
      "Write one implementation intention for a habit you have been leaving vague.",
    exercisePrompts: [
      "I will do what?",
      "On what day and at what time?",
      "In what location?"
    ],
    reflection:
      "Which intention in your life is still too vague to execute?",
    whyThisMatters:
      "Ambiguity lets the day decide for you.",
    practicalApplication:
      "Use implementation intentions for habits that require a clear appointment: study, exercise, planning, calls, writing, and reviews.",
    commonMistakes: [
      "Writing a motivational sentence instead of a logistical one",
      "Choosing a time that regularly gets interrupted",
      "Forgetting to prepare the environment before the moment arrives"
    ],
    misconceptions: [
      {
        misconception: "Planning is procrastination.",
        correction:
          "Precise planning is useful when it reduces the number of decisions required to begin."
      }
    ],
    retentionAnchors: [
      "Vague habits wait. Specific habits start.",
      "When and where are behavior infrastructure."
    ],
    takeaways: [
      "Specificity reduces decision friction.",
      "A backup plan protects continuity.",
      "A habit needs a starting line."
    ],
    relatedSections: ["habit-stacking", "third-law-easy"]
  },
  {
    id: "habit-stacking",
    title: "Habit Stacking",
    eyebrow: "Sequencing",
    minutes: 11,
    summary:
      "Attach a new behavior to an existing reliable behavior so the old routine becomes the cue for the new one.",
    objectives: [
      "Choose stable anchors",
      "Build habit chains without overloading them",
      "Use stacking for deep work, learning, and recovery"
    ],
    concepts: ["anchor habits", "sequence design", "behavior chaining"],
    thesis:
      "Habit stacking borrows reliability from a behavior that already happens. Instead of asking a new habit to float in the day, you attach it to a routine with an established cue. The formula is simple: after I do this current habit, I will do that new habit.",
    nuance:
      "The anchor must be specific and stable. After work is often too broad because work may end in different moods, locations, and times. After I place my laptop on the desk is stronger because it marks a concrete transition.",
    mentalModel: {
      name: "Behavior docking",
      explanation:
        "A new habit docks onto an existing routine until it gains its own momentum.",
      useWhen:
        "Use this when a behavior is useful but keeps failing to find a place in the day."
    },
    scenario:
      "A knowledge worker wants a deep work ritual but opens messages immediately after sitting down.",
    defaultApproach:
      "Hope to feel focused after checking messages quickly.",
    betterApproach:
      "After opening the laptop, start a 45-minute focus timer before opening communication tools.",
    whyItWorks:
      "The first action after the anchor decides the direction of the work block.",
    applicationContext: "How to use habit stacking for deep work",
    applicationSteps: [
      "Identify the transition that begins the work session",
      "Choose one small focus-preparation behavior",
      "Place it immediately after the transition",
      "Block the competing default for the first interval",
      "End with a reset cue for the next session"
    ],
    applicationResult:
      "Deep work starts from a designed sequence rather than a battle with inbox gravity.",
    exerciseTitle: "Build a two-link stack",
    exerciseInstructions:
      "Choose one existing anchor and attach one new behavior immediately after it.",
    exercisePrompts: [
      "What anchor already happens reliably?",
      "What new behavior should follow it?",
      "What competing behavior must be delayed?"
    ],
    reflection:
      "Which existing routine could carry a new habit if you used it as an anchor?",
    whyThisMatters:
      "New habits fail when they have no home in the day.",
    practicalApplication:
      "Use stacks for behaviors that are short, repeatable, and naturally adjacent to an existing routine.",
    commonMistakes: [
      "Choosing an anchor that is not reliable",
      "Adding too many new behaviors to one stack",
      "Attaching a large behavior before it has a small version"
    ],
    misconceptions: [
      {
        misconception: "Habit stacking means building elaborate routines.",
        correction:
          "It works best as a simple link between one stable anchor and one useful action."
      }
    ],
    retentionAnchors: [
      "After current habit, do new habit.",
      "A habit needs a place to land."
    ],
    takeaways: [
      "Reliable anchors make new behaviors easier to remember.",
      "Stacks should be small at first.",
      "Transitions are powerful cue points."
    ],
    relatedSections: ["implementation-intentions", "environment-design"]
  },
  {
    id: "environment-design",
    title: "Environment Design",
    eyebrow: "Environment",
    minutes: 14,
    summary:
      "The environment is a behavior-shaping system: it decides what is visible, easy, normal, and tempting.",
    objectives: [
      "Understand why environment can beat willpower",
      "Use visibility and friction to guide behavior",
      "Apply environment design across home, work, phone, kitchen, gym, and learning contexts"
    ],
    concepts: ["choice architecture", "cue visibility", "friction assignment"],
    thesis:
      "Environment design works because people do not make decisions in a vacuum. Rooms, devices, defaults, shelves, calendars, and social spaces quietly suggest the next action. If the desired behavior is hidden and the undesired behavior is visible, discipline must fight every day.",
    nuance:
      "The goal is not to create a perfect minimalist life. It is to assign friction intentionally. Reduce friction for behaviors you want. Add friction to behaviors that exploit impulse. Good design makes the right thing easier before motivation is tested.",
    mentalModel: {
      name: "Default gravity",
      explanation:
        "The easiest visible action in a context has gravitational pull.",
      useWhen:
        "Use this when you keep blaming willpower while leaving cues and defaults unchanged."
    },
    scenario:
      "A person wants to stop late-night scrolling but keeps the phone beside the bed.",
    defaultApproach:
      "Promise not to scroll after 10 p.m.",
    betterApproach:
      "Charge the phone outside the bedroom, put a book on the nightstand, and use a separate alarm clock.",
    whyItWorks:
      "The unwanted cue is removed, friction is added to the bad habit, and a replacement behavior becomes visible.",
    applicationContext: "How to redesign your environment for better health and learning",
    applicationSteps: [
      "Identify the room or device where the habit happens",
      "Remove or hide the strongest bad-habit cue",
      "Place the good-habit cue where action should begin",
      "Prepare the first step in advance",
      "Make the undesired behavior require additional steps"
    ],
    applicationResult:
      "Behavior changes because the context stops pushing against the intention.",
    exerciseTitle: "Run an environment audit",
    exerciseInstructions:
      "Audit one environment through visibility, reach, preparation, and friction.",
    exercisePrompts: [
      "What does this environment make obvious?",
      "What does it make easy?",
      "What should be removed, prepared, or moved?"
    ],
    reflection:
      "Where are you relying on discipline while leaving the same cues in place?",
    whyThisMatters:
      "Willpower is expensive; environment design makes good behavior cheaper.",
    practicalApplication:
      "Redesign one context at a time: desk for focus, kitchen for nutrition, phone for attention, gym bag for exercise, reading chair for study.",
    commonMistakes: [
      "Changing intentions while leaving cues unchanged",
      "Making good habits visible but still inconvenient",
      "Designing for ideal energy instead of tired evenings"
    ],
    misconceptions: [
      {
        misconception: "Environment design is just tidying up.",
        correction:
          "It is behavioral architecture: arranging cues, defaults, and friction to shape action."
      }
    ],
    retentionAnchors: [
      "The room often decides before you feel you decided.",
      "Assign friction on purpose."
    ],
    takeaways: [
      "Visibility drives repetition.",
      "Friction should be designed, not accidental.",
      "Good environments reduce self-negotiation."
    ],
    relatedSections: ["first-law-obvious", "friction-convenience"]
  },
  {
    id: "second-law-attractive",
    title: "The Second Law: Make It Attractive",
    eyebrow: "Law 2",
    minutes: 11,
    summary:
      "Habits become easier to repeat when the brain expects them to be rewarding, meaningful, socially valued, or emotionally relieving.",
    objectives: [
      "Understand attraction as anticipated reward",
      "Increase the appeal of useful habits ethically",
      "Reduce the appeal of habits that create downstream costs"
    ],
    concepts: ["attraction", "anticipation", "motivational pull"],
    thesis:
      "Attraction is not decoration. Before action happens, the brain predicts whether the behavior will feel worth doing. A habit with no felt reward must be carried by discipline. A habit that promises relief, identity, beauty, belonging, or progress has its own pull.",
    nuance:
      "Making a habit attractive should not corrupt the habit. If the reward overwhelms the behavior, the person learns to chase the reward rather than value the practice. The best rewards reinforce the identity and experience of the habit itself.",
    mentalModel: {
      name: "Anticipated value",
      explanation:
        "The brain moves toward behaviors it expects to change its state in a desirable way.",
      useWhen:
        "Use this when a useful habit is clear and easy but still emotionally unappealing."
    },
    scenario:
      "A student avoids study sessions because they feel dry and punishing.",
    defaultApproach:
      "Force longer study blocks and treat discomfort as proof of seriousness.",
    betterApproach:
      "Create a calm study ritual, use a beautiful notebook, study with a focused friend, and end each session with visible progress.",
    whyItWorks:
      "The session gains immediate emotional rewards without replacing the learning itself.",
    applicationContext: "How to make a reading or study habit more attractive",
    applicationSteps: [
      "Identify why the habit feels aversive",
      "Pair it with a pleasant but non-distracting ritual",
      "Make progress visible",
      "Connect the behavior to an identity you respect",
      "Remove cues that make the alternative more attractive"
    ],
    applicationResult:
      "The habit becomes something the user can approach instead of merely endure.",
    exerciseTitle: "Design the attractive edge",
    exerciseInstructions:
      "Add one legitimate source of appeal to a habit without undermining the behavior.",
    exercisePrompts: [
      "What would make the habit feel more inviting?",
      "What reward would support rather than distract from the habit?",
      "What competing habit currently feels more attractive?"
    ],
    reflection:
      "Which useful habit do you resist because it has no immediate emotional reward?",
    whyThisMatters:
      "People repeat behaviors that feel rewarding soon, even when they care about distant outcomes.",
    practicalApplication:
      "Pair useful habits with appealing contexts, social support, immediate feedback, and identity proof.",
    commonMistakes: [
      "Trying to force habits that feel punishing forever",
      "Using rewards that distract from the habit",
      "Ignoring the attractiveness of the bad habit"
    ],
    misconceptions: [
      {
        misconception: "A serious habit should not need to feel good.",
        correction:
          "A habit can be serious and still be designed to feel satisfying, meaningful, or inviting."
      }
    ],
    retentionAnchors: [
      "The brain moves toward expected reward.",
      "Make the habit worth approaching."
    ],
    takeaways: [
      "Attraction increases repetition.",
      "Good rewards reinforce the behavior.",
      "Unattractive habits need design, not moralizing."
    ],
    relatedSections: ["dopamine-anticipation-desire", "temptation-bundling"]
  },
  {
    id: "dopamine-anticipation-desire",
    title: "Dopamine, Anticipation, and Desire",
    eyebrow: "Desire",
    minutes: 12,
    summary:
      "Desire is often driven by the anticipation of reward, which means cues can create motivation before the reward arrives.",
    objectives: [
      "Explain anticipation as a driver of habits",
      "Use cues to create healthy desire",
      "Understand why tempting habits pull attention so strongly"
    ],
    concepts: ["anticipation", "reward prediction", "desire"],
    thesis:
      "The brain does not wait for the reward to become motivated. Once it learns that a cue predicts a rewarding state, anticipation itself becomes energizing. This is why the sight of a phone, snack, inbox, or gym bag can change desire before action begins.",
    nuance:
      "Dopamine is often discussed too casually. The practical point for habit design is simpler: anticipated rewards shape behavior. If a bad habit has vivid anticipation and a good habit has none, the bad habit has the motivational advantage.",
    mentalModel: {
      name: "Prediction pull",
      explanation:
        "Cues gain power when the brain predicts they will lead to a desirable state change.",
      useWhen:
        "Use this when a cue seems to trigger desire instantly."
    },
    scenario:
      "Someone opens a food delivery app after seeing a late-night notification.",
    defaultApproach:
      "Blame appetite and try to resist inside the app.",
    betterApproach:
      "Disable notifications, pre-plan a satisfying evening snack, and make the desired routine visible before the cue appears.",
    whyItWorks:
      "The plan weakens the anticipation cue and gives the craving a lower-cost path.",
    applicationContext: "How to redesign desire around attention and food cues",
    applicationSteps: [
      "Identify the cue that generates anticipation",
      "Remove the cue when possible",
      "Create a healthier cue that predicts a better reward",
      "Make the replacement reward immediate",
      "Review whether desire changes before the action point"
    ],
    applicationResult:
      "The user stops fighting desire at maximum intensity and redesigns the prediction that created it.",
    exerciseTitle: "Track one anticipation trigger",
    exerciseInstructions:
      "For three days, record the cue that creates desire before one repeated behavior.",
    exercisePrompts: [
      "What cue appeared?",
      "What reward did your brain predict?",
      "What healthier cue could predict a better reward?"
    ],
    reflection:
      "Which cue in your environment creates desire before you consciously decide anything?",
    whyThisMatters:
      "Behavioral pull often begins before conscious deliberation.",
    practicalApplication:
      "Manage notifications, visual cues, social cues, and rituals as prediction systems.",
    commonMistakes: [
      "Waiting to intervene until craving is strongest",
      "Underestimating cues that predict relief",
      "Making good habits easy but emotionally unrewarding"
    ],
    misconceptions: [
      {
        misconception: "Desire appears randomly.",
        correction:
          "Desire is often trained by cues that predict a reward or state change."
      }
    ],
    retentionAnchors: [
      "Cues create predictions. Predictions create desire.",
      "Change the prediction before fighting the craving."
    ],
    takeaways: [
      "Anticipation motivates behavior.",
      "Bad habits often have stronger prediction cues.",
      "Healthy desire can be designed."
    ],
    relatedSections: ["second-law-attractive", "breaking-bad-habits-inversion"]
  },
  {
    id: "temptation-bundling",
    title: "Temptation Bundling",
    eyebrow: "Pairing",
    minutes: 9,
    summary:
      "Pair a needed behavior with an immediately enjoyable one so the useful action inherits motivational pull.",
    objectives: [
      "Understand how pairing changes motivation",
      "Design bundles that support rather than distract",
      "Use bundling for exercise, chores, and study"
    ],
    concepts: ["pairing", "immediate reward", "motivation transfer"],
    thesis:
      "Temptation bundling links a behavior you need to do with a behavior you want to do. The enjoyable element lends motivational energy to the useful behavior. The key is choosing a pairing that does not sabotage the task.",
    nuance:
      "Not every bundle is wise. If the tempting activity consumes attention needed for the habit, the bundle degrades the behavior. Podcasts can pair well with walking; they pair poorly with deep reading.",
    mentalModel: {
      name: "Borrowed attraction",
      explanation:
        "A low-attraction habit can borrow appeal from a compatible reward.",
      useWhen:
        "Use this when the habit is simple enough to pair without losing quality."
    },
    scenario:
      "Someone wants to walk more but finds walking alone boring.",
    defaultApproach:
      "Wait until walking feels intrinsically exciting.",
    betterApproach:
      "Listen to a favorite interview only while walking.",
    whyItWorks:
      "The person wants the paired reward, and the walk becomes the access path.",
    applicationContext: "How to bundle a health habit",
    applicationSteps: [
      "Choose a low-cognitive habit",
      "Choose an enjoyable reward compatible with it",
      "Restrict the reward to the habit context",
      "Keep the habit short enough to start",
      "Remove the bundle if it lowers habit quality"
    ],
    applicationResult:
      "A useful behavior gains immediate appeal without waiting for distant benefits.",
    exerciseTitle: "Create one compatible bundle",
    exerciseInstructions:
      "Pair one needed behavior with one enjoyable behavior that will not compete for the same attention.",
    exercisePrompts: [
      "What habit needs more pull?",
      "What reward is compatible?",
      "How will you prevent the reward from escaping the bundle?"
    ],
    reflection:
      "Which habit could borrow appeal from a reward without losing its quality?",
    whyThisMatters:
      "Long-term benefits often need short-term support.",
    practicalApplication:
      "Use bundles for walking, cleaning, mobility work, meal prep, and other low-cognitive behaviors.",
    commonMistakes: [
      "Pairing deep work with distracting rewards",
      "Letting the reward happen without the habit",
      "Choosing a reward that makes the habit harder"
    ],
    misconceptions: [
      {
        misconception: "Bundling is cheating.",
        correction:
          "It is design: pairing immediate reward with useful action so the behavior survives."
      }
    ],
    retentionAnchors: [
      "Borrow attraction only when the reward does not steal attention.",
      "The reward should support the behavior, not replace it."
    ],
    takeaways: [
      "Pairing can make useful behaviors more repeatable.",
      "Compatibility matters.",
      "Restrict the reward to preserve the bundle."
    ],
    relatedSections: ["second-law-attractive"]
  },
  {
    id: "social-environment-imitation",
    title: "Social Environment and Imitation",
    eyebrow: "Culture",
    minutes: 11,
    summary:
      "People imitate behaviors that are normal, admired, and rewarded in their social environment.",
    objectives: [
      "Understand social proof as habit pressure",
      "Choose groups that normalize desired behaviors",
      "Use social identity without surrendering judgment"
    ],
    concepts: ["social proof", "norms", "belonging"],
    thesis:
      "Habits are not purely private. We copy the close, the many, and the powerful. A behavior becomes more attractive when it is a path to belonging or status in a group we care about.",
    nuance:
      "Social influence can raise or lower standards. The point is not to outsource identity to a group; it is to choose environments where the behavior you want is ordinary and respected.",
    mentalModel: {
      name: "Norm gravity",
      explanation:
        "What is normal in your group becomes easier to repeat because belonging rewards conformity.",
      useWhen:
        "Use this when a habit feels lonely or when your environment normalizes the opposite behavior."
    },
    scenario:
      "A new investor is surrounded by friends who treat speculation as entertainment.",
    defaultApproach:
      "Try to be disciplined while absorbing speculative norms every day.",
    betterApproach:
      "Join a community that values long horizons, savings rate, risk management, and process over excitement.",
    whyItWorks:
      "The desired behavior becomes socially reinforced instead of socially isolated.",
    applicationContext: "How to use social environment for money habits",
    applicationSteps: [
      "Identify the behavior your current group normalizes",
      "Find one group where your desired behavior is ordinary",
      "Increase exposure to that group's practices",
      "Reduce exposure to norms that pull against your system",
      "Keep your own standards explicit"
    ],
    applicationResult:
      "The habit gains social support and identity reinforcement.",
    exerciseTitle: "Audit norm exposure",
    exerciseInstructions:
      "List the groups, feeds, and people that make a behavior feel normal.",
    exercisePrompts: [
      "Who makes your desired habit feel normal?",
      "Who makes the opposite behavior feel normal?",
      "What social input should you increase or reduce?"
    ],
    reflection:
      "Which group is quietly teaching you what is normal?",
    whyThisMatters:
      "Belonging is one of the strongest rewards a behavior can have.",
    practicalApplication:
      "Shape your social inputs: peers, mentors, feeds, communities, offices, and family routines.",
    commonMistakes: [
      "Trying to sustain a habit in a group that mocks it",
      "Confusing popularity with wisdom",
      "Using social identity to avoid independent thought"
    ],
    misconceptions: [
      {
        misconception: "Habits are purely individual discipline.",
        correction:
          "Many habits are socially reinforced by norms, status, and belonging."
      }
    ],
    retentionAnchors: [
      "The group teaches the behavior.",
      "Choose where your desired habit is normal."
    ],
    takeaways: [
      "Social norms shape repetition.",
      "Belonging can reinforce good or bad habits.",
      "Curate the environments that define normal."
    ],
    relatedSections: ["second-law-attractive", "relationships-application"]
  },
  {
    id: "third-law-easy",
    title: "The Third Law: Make It Easy",
    eyebrow: "Law 3",
    minutes: 12,
    summary:
      "A habit is more likely when the first action is simple, close, prepared, and low-friction.",
    objectives: [
      "Explain why ease predicts repetition",
      "Reduce activation energy for desired habits",
      "Design the first step instead of only the full behavior"
    ],
    concepts: ["activation energy", "ease", "first action"],
    thesis:
      "The third law shifts attention from intention to friction. People often assume they need more motivation when what they actually need is a smaller first step, a prepared environment, and fewer obstacles between cue and response.",
    nuance:
      "Easy does not mean unambitious. It means the entry point is designed. Serious behavior often starts with an unthreatening opening move that makes continuation more likely.",
    mentalModel: {
      name: "Activation ramp",
      explanation:
        "The easier the first step, the more likely motion begins; once motion begins, continuation becomes easier.",
      useWhen:
        "Use this when a habit feels too large to start even though you value it."
    },
    scenario:
      "A person wants to write essays but avoids the blank page.",
    defaultApproach:
      "Schedule a three-hour writing session and dread it.",
    betterApproach:
      "Open the draft every morning and write one rough sentence before deciding whether to continue.",
    whyItWorks:
      "The first step is small enough to bypass resistance and creates momentum toward deeper work.",
    applicationContext: "How to make creative work easier to start",
    applicationSteps: [
      "Prepare the document before the session",
      "Define a tiny first action",
      "Remove setup decisions",
      "Start with a timer short enough to feel safe",
      "Continue only after the entry behavior is complete"
    ],
    applicationResult:
      "Starting becomes reliable, which gives serious work more chances to happen.",
    exerciseTitle: "Reduce the entry cost",
    exerciseInstructions:
      "Pick one avoided habit and redesign only the first sixty seconds.",
    exercisePrompts: [
      "What is the true first action?",
      "What setup can happen earlier?",
      "How can the first minute become easier?"
    ],
    reflection:
      "Which habit would improve if you designed the first minute instead of the full session?",
    whyThisMatters:
      "Many valuable behaviors die at the starting line.",
    practicalApplication:
      "Prepare tools, reduce choices, shrink the first step, and make the desired action the path of least resistance.",
    commonMistakes: [
      "Designing the heroic version first",
      "Confusing ease with lack of ambition",
      "Leaving setup work inside the habit window"
    ],
    misconceptions: [
      {
        misconception: "If the first step is easy, the habit is not serious.",
        correction:
          "A serious habit often needs an easy entrance so it can happen consistently."
      }
    ],
    retentionAnchors: [
      "Make the start easy enough to repeat.",
      "Ambition can grow after motion begins."
    ],
    takeaways: [
      "Ease increases repetition.",
      "The first step deserves design.",
      "Preparation reduces activation energy."
    ],
    relatedSections: ["friction-convenience", "two-minute-rule"]
  },
  {
    id: "friction-convenience",
    title: "Friction, Convenience, and the Path of Least Resistance",
    eyebrow: "Friction",
    minutes: 12,
    summary:
      "Behavior follows the path of least resistance more often than people admit, so friction should be assigned deliberately.",
    objectives: [
      "Use friction reduction for good habits",
      "Use friction addition for bad habits",
      "Understand convenience as behavioral power"
    ],
    concepts: ["friction", "convenience", "resistance"],
    thesis:
      "Friction is the hidden tax on behavior. Every extra step, search, login, decision, or preparation requirement reduces the odds of action. Convenience is not morally neutral: it shapes what people repeat.",
    nuance:
      "The same tool can help or harm depending on where friction is placed. Autopay can protect finances; one-click buying can weaken them. Good habit design is not anti-convenience; it is pro-intentional convenience.",
    mentalModel: {
      name: "Friction budget",
      explanation:
        "Every behavior has a cost in steps, time, attention, and emotional effort. Spend friction on habits you want less of.",
      useWhen:
        "Use this when a bad habit is too convenient or a good habit is too cumbersome."
    },
    scenario:
      "Someone wants to cook more but ingredients are unplanned and delivery takes two taps.",
    defaultApproach:
      "Promise to be more disciplined at dinner.",
    betterApproach:
      "Plan two default meals, keep ingredients visible, and remove delivery apps from the home screen.",
    whyItWorks:
      "Cooking becomes the lower-friction path while ordering requires more deliberate action.",
    applicationContext: "How to redesign kitchen and phone friction",
    applicationSteps: [
      "List the steps in the good habit",
      "Remove or pre-complete two steps",
      "List the steps in the bad habit",
      "Add two pauses or barriers",
      "Make the better option visible at the decision point"
    ],
    applicationResult:
      "The desired behavior becomes easier at the exact moment the choice is made.",
    exerciseTitle: "Move two units of friction",
    exerciseInstructions:
      "Take friction away from one good habit and add it to one bad habit.",
    exercisePrompts: [
      "What step can be removed from the good habit?",
      "What step can be added to the bad habit?",
      "Where does the choice usually happen?"
    ],
    reflection:
      "Which bad habit is winning mostly because it is convenient?",
    whyThisMatters:
      "Convenience quietly determines behavior when energy is low.",
    practicalApplication:
      "Use prep, defaults, app placement, saved settings, and physical distance to guide behavior.",
    commonMistakes: [
      "Trying to out-discipline a low-friction temptation",
      "Making good habits noble but inconvenient",
      "Adding friction after the craving has already peaked"
    ],
    misconceptions: [
      {
        misconception: "Friction is always bad.",
        correction:
          "Friction is useful when placed between impulse and harmful behavior."
      }
    ],
    retentionAnchors: [
      "Behavior follows ease.",
      "Spend friction where you want hesitation."
    ],
    takeaways: [
      "Convenience is behavioral leverage.",
      "Reduce friction for good habits.",
      "Add friction before bad habits start."
    ],
    relatedSections: ["environment-design", "breaking-bad-habits-inversion"]
  },
  {
    id: "two-minute-rule",
    title: "The Two-Minute Rule",
    eyebrow: "Entry",
    minutes: 10,
    summary:
      "Scale a new habit down to a two-minute entry behavior so starting becomes automatic before expanding the workload.",
    objectives: [
      "Use tiny starts without trivializing the goal",
      "Build automaticity before intensity",
      "Know when and how to scale a habit"
    ],
    concepts: ["gateway habit", "automaticity", "scaling"],
    thesis:
      "The two-minute rule is not about doing only two minutes forever. It is about mastering the art of showing up. Once the beginning is automatic, the habit has a foundation that can carry more volume.",
    nuance:
      "The two-minute version must preserve the identity of the full behavior. Reading one page counts because it is reading. Lacing running shoes counts only if it reliably leads toward the runner identity and not merely toward checking a box.",
    mentalModel: {
      name: "Gateway behavior",
      explanation:
        "The tiny habit is the doorway into the larger practice.",
      useWhen:
        "Use this when the full habit feels too heavy to repeat consistently."
    },
    scenario:
      "A person wants to meditate for twenty minutes but keeps skipping.",
    defaultApproach:
      "Restart the twenty-minute plan every Monday.",
    betterApproach:
      "Sit on the cushion and breathe for two minutes after brushing teeth for two weeks.",
    whyItWorks:
      "The person practices the start until the identity and context become stable.",
    applicationContext: "How to build a meditation or learning habit",
    applicationSteps: [
      "Define the full habit",
      "Shrink it to a two-minute version",
      "Repeat the tiny version until it feels automatic",
      "Add volume gradually",
      "Return to two minutes when life gets chaotic"
    ],
    applicationResult:
      "The habit survives because the minimum version is always available.",
    exerciseTitle: "Design the gateway",
    exerciseInstructions:
      "Write the two-minute version of a habit you want to build.",
    exercisePrompts: [
      "What is the full habit?",
      "What is the two-minute doorway?",
      "When will you scale it?"
    ],
    reflection:
      "What habit would you trust more if the minimum version were almost impossible to skip?",
    whyThisMatters:
      "Automatic starts create more long-term progress than ambitious restarts.",
    practicalApplication:
      "Use two-minute versions for reading, exercise, writing, cleaning, meditation, language learning, and financial review.",
    commonMistakes: [
      "Treating the two-minute rule as the final standard",
      "Choosing a tiny action unrelated to the identity",
      "Scaling before the start is reliable"
    ],
    misconceptions: [
      {
        misconception: "Two minutes is too small to matter.",
        correction:
          "Two minutes matters when it trains the start and protects continuity."
      }
    ],
    retentionAnchors: [
      "First master showing up.",
      "The doorway matters because it makes the room reachable."
    ],
    takeaways: [
      "Tiny starts build reliability.",
      "Scale after automaticity.",
      "The minimum habit protects continuity."
    ],
    relatedSections: ["third-law-easy", "consistency-recovery"]
  },
  {
    id: "fourth-law-satisfying",
    title: "The Fourth Law: Make It Satisfying",
    eyebrow: "Law 4",
    minutes: 11,
    summary:
      "A habit is more likely to repeat when it produces immediate satisfaction, even if the largest benefits arrive later.",
    objectives: [
      "Understand why immediate feedback matters",
      "Create rewards that reinforce good habits",
      "Avoid rewards that conflict with the habit"
    ],
    concepts: ["immediate satisfaction", "reinforcement", "feedback"],
    thesis:
      "The brain learns from what feels rewarding now. Many good habits have delayed rewards, while many bad habits have immediate rewards and delayed costs. The fourth law closes that gap by adding immediate satisfaction to the useful behavior.",
    nuance:
      "Satisfaction does not need to be indulgence. It can be visual progress, identity proof, a clean environment, a brief ritual, or the relief of keeping a promise. The reward should point in the same direction as the habit.",
    mentalModel: {
      name: "Reward alignment",
      explanation:
        "A good reward makes the habit feel complete without teaching the opposite behavior.",
      useWhen:
        "Use this when a habit is useful but emotionally unrewarding in the short term."
    },
    scenario:
      "A person saves money but feels only deprivation because the benefit is invisible.",
    defaultApproach:
      "Rely on distant retirement goals for motivation.",
    betterApproach:
      "Track each transfer on a visible freedom fund chart and celebrate the growth of options.",
    whyItWorks:
      "The reward makes progress tangible while reinforcing the reason for saving.",
    applicationContext: "How to make delayed financial habits satisfying now",
    applicationSteps: [
      "Identify the delayed benefit",
      "Create a visible progress signal",
      "Pair completion with a small aligned ritual",
      "Avoid rewards that undo the habit",
      "Review cumulative progress regularly"
    ],
    applicationResult:
      "The habit feels rewarding before the distant payoff arrives.",
    exerciseTitle: "Design an aligned reward",
    exerciseInstructions:
      "Add immediate satisfaction to one good habit without undermining it.",
    exercisePrompts: [
      "What delayed reward does the habit create?",
      "What immediate signal can represent progress?",
      "What reward would conflict with the habit?"
    ],
    reflection:
      "Which good habit gives you too little immediate feedback to survive?",
    whyThisMatters:
      "Behaviors with immediate satisfaction are easier to repeat.",
    practicalApplication:
      "Use visual trackers, completion rituals, clean resets, and identity notes as aligned rewards.",
    commonMistakes: [
      "Rewarding a habit with something that undermines it",
      "Assuming distant benefits are motivating enough",
      "Making rewards so elaborate they become the real habit"
    ],
    misconceptions: [
      {
        misconception: "Rewards make habits childish.",
        correction:
          "Feedback is how behavior learns. Adults also repeat what feels rewarding."
      }
    ],
    retentionAnchors: [
      "Immediate satisfaction teaches repetition.",
      "Reward the habit in the same direction as the habit."
    ],
    takeaways: [
      "Delayed benefits need immediate feedback.",
      "Rewards should align with identity.",
      "Satisfaction helps habits survive."
    ],
    relatedSections: ["immediate-rewards-delayed-outcomes", "habit-tracking-feedback"]
  },
  {
    id: "immediate-rewards-delayed-outcomes",
    title: "Immediate Rewards and Delayed Outcomes",
    eyebrow: "Time",
    minutes: 10,
    summary:
      "Good habits often ask for present effort in exchange for future benefit, so design must bridge the timing gap.",
    objectives: [
      "Understand temporal mismatch in habits",
      "Add immediate signals to long-term behaviors",
      "Reduce immediate rewards for harmful behaviors"
    ],
    concepts: ["delayed outcomes", "temporal mismatch", "short-term feedback"],
    thesis:
      "A central challenge of behavior change is timing. Exercise, saving, studying, and relationship repair often pay later. Scrolling, spending, snacking, and avoidance often pay now. Habit design must make future-oriented behavior feel rewarding in the present.",
    nuance:
      "The answer is not to pretend the future does not matter. It is to translate future value into present feedback: visible progress, reduced stress, identity evidence, streak repair, or a concrete sense of control.",
    mentalModel: {
      name: "Time-gap bridge",
      explanation:
        "When rewards are delayed, build a bridge of immediate feedback that keeps behavior alive.",
      useWhen:
        "Use this when a beneficial habit feels unrewarding because the payoff is distant."
    },
    scenario:
      "A student studies consistently but exam results are weeks away.",
    defaultApproach:
      "Wait for grades to confirm whether the effort matters.",
    betterApproach:
      "Use recall scores, completed problem sets, and improved error logs as immediate indicators.",
    whyItWorks:
      "The learner receives near-term feedback that effort is converting into capability.",
    applicationContext: "How to make learning satisfying before exams or results",
    applicationSteps: [
      "Identify the distant outcome",
      "Define a near-term skill signal",
      "Track the signal after each session",
      "Review improvement weekly",
      "Adjust study based on errors rather than mood"
    ],
    applicationResult:
      "Learning becomes rewarding through visible mastery, not only final grades.",
    exerciseTitle: "Bridge the reward gap",
    exerciseInstructions:
      "Create a near-term feedback signal for one long-term habit.",
    exercisePrompts: [
      "What payoff is delayed?",
      "What near-term signal shows progress?",
      "How will you see it after each repetition?"
    ],
    reflection:
      "Which long-term behavior needs a better present-tense reward?",
    whyThisMatters:
      "The brain discounts distant rewards unless the system makes progress emotionally available now.",
    practicalApplication:
      "Use logs, charts, visible completions, before-and-after notes, and short reviews for long-horizon habits.",
    commonMistakes: [
      "Waiting for final outcomes to provide all motivation",
      "Choosing feedback that does not reflect actual progress",
      "Letting bad habits keep all the immediate rewards"
    ],
    misconceptions: [
      {
        misconception: "Long-term thinkers do not need immediate rewards.",
        correction:
          "Long-term thinkers often design immediate feedback so the long-term behavior survives."
      }
    ],
    retentionAnchors: [
      "Future value needs present feedback.",
      "Bridge the reward gap."
    ],
    takeaways: [
      "Timing shapes motivation.",
      "Immediate feedback supports delayed rewards.",
      "Good measures make progress visible."
    ],
    relatedSections: ["fourth-law-satisfying", "habit-tracking-feedback"]
  },
  {
    id: "habit-tracking-feedback",
    title: "Habit Tracking and Feedback",
    eyebrow: "Feedback",
    minutes: 11,
    summary:
      "Tracking makes behavior visible, creates immediate satisfaction, and helps distinguish pattern from mood.",
    objectives: [
      "Use tracking as feedback rather than punishment",
      "Choose measures that reflect the behavior you want",
      "Avoid streak fragility"
    ],
    concepts: ["tracking", "feedback loops", "streaks"],
    thesis:
      "Tracking works because it makes repetition visible. A mark on a calendar, a checked box, or a growing log gives the brain a small reward and gives the person a clearer view of the pattern.",
    nuance:
      "Tracking can become harmful when it turns into identity threat. The point is not to worship the streak. The point is to make behavior easier to notice, repeat, and repair.",
    mentalModel: {
      name: "Visible evidence",
      explanation:
        "Tracking converts invisible discipline into visible proof.",
      useWhen:
        "Use this when a habit is happening but progress feels intangible."
    },
    scenario:
      "A learner reads most weekdays but feels inconsistent because they remember misses more than completions.",
    defaultApproach:
      "Rely on emotional memory to judge consistency.",
    betterApproach:
      "Track reading sessions and review the weekly pattern objectively.",
    whyItWorks:
      "The tracker replaces vague self-judgment with visible evidence.",
    applicationContext: "How to track without becoming rigid",
    applicationSteps: [
      "Track the action, not your worth",
      "Choose a measure that is easy to record",
      "Review weekly rather than obsess hourly",
      "Use misses as diagnostic data",
      "Protect recovery with a never-miss-twice rule"
    ],
    applicationResult:
      "Tracking supports consistency without turning imperfection into failure.",
    exerciseTitle: "Design a humane tracker",
    exerciseInstructions:
      "Create a tracker that rewards repetition and invites repair after misses.",
    exercisePrompts: [
      "What single behavior will you track?",
      "How quickly can it be recorded?",
      "What will you do after one miss?"
    ],
    reflection:
      "Where would visible evidence help you judge your behavior more fairly?",
    whyThisMatters:
      "Feedback helps behavior improve; shame makes people hide from feedback.",
    practicalApplication:
      "Track simple actions, review patterns, and use misses to adjust cues, friction, or rewards.",
    commonMistakes: [
      "Tracking too many things",
      "Treating a broken streak as a broken identity",
      "Tracking outcomes when the behavior is what needs reinforcement"
    ],
    misconceptions: [
      {
        misconception: "Tracking is about perfection.",
        correction:
          "Good tracking is about visibility, feedback, and repair."
      }
    ],
    retentionAnchors: [
      "Track to see, not to shame.",
      "A miss is data for redesign."
    ],
    takeaways: [
      "Tracking creates immediate satisfaction.",
      "Simple trackers are more durable.",
      "Review patterns, not isolated bad days."
    ],
    relatedSections: ["consistency-recovery", "small-habits-compound"]
  },
  {
    id: "breaking-bad-habits-inversion",
    title: "Breaking Bad Habits Through Inversion",
    eyebrow: "Inversion",
    minutes: 12,
    summary:
      "Bad habits weaken when their cues become invisible, their appeal decreases, their friction increases, and their rewards become less satisfying.",
    objectives: [
      "Apply the inverse of the four laws",
      "Replace bad habits by satisfying the underlying need",
      "Design friction before cravings peak"
    ],
    concepts: ["inversion", "replacement", "commitment devices"],
    thesis:
      "Breaking a bad habit is not simply deleting an action. The action is doing a job, even if poorly. The inverse laws change the loop: make the cue invisible, make the habit unattractive, make it difficult, and make it unsatisfying.",
    nuance:
      "Suppression alone leaves a vacancy. If the bad habit provides relief, stimulation, belonging, or control, the replacement must address that need. Otherwise the original loop returns under stress.",
    mentalModel: {
      name: "Vacancy principle",
      explanation:
        "Removing a habit creates an empty role. Fill the role with a better behavior or the old one will reapply.",
      useWhen:
        "Use this when you keep eliminating a habit but it returns during stress."
    },
    scenario:
      "Someone wants to stop late-night scrolling after stressful workdays.",
    defaultApproach:
      "Delete apps repeatedly without changing the evening recovery need.",
    betterApproach:
      "Charge the phone outside the bedroom, plan a decompression walk, and put a low-effort book near the bed.",
    whyItWorks:
      "The system removes the cue, adds friction, and replaces the reward of relief.",
    applicationContext: "How to stop late-night scrolling",
    applicationSteps: [
      "Name the craving the bad habit satisfies",
      "Remove the cue before the vulnerable window",
      "Add friction to the old response",
      "Install a replacement response",
      "Make the cost of the old habit visible"
    ],
    applicationResult:
      "The person changes the loop instead of relying on tired willpower.",
    exerciseTitle: "Invert one bad habit",
    exerciseInstructions:
      "Apply the inverse four laws to one unwanted behavior.",
    exercisePrompts: [
      "How can the cue become invisible?",
      "How can the habit become less attractive or harder?",
      "What replacement will satisfy the real craving?"
    ],
    reflection:
      "What bad habit are you trying to remove without replacing the job it performs?",
    whyThisMatters:
      "Bad habits are often well-designed for immediate reward; they require deliberate counter-design.",
    practicalApplication:
      "Use app blockers, physical distance, public commitments, replacement routines, and cost visibility.",
    commonMistakes: [
      "Removing the behavior but not the cue",
      "Adding friction only after the habit has started",
      "Failing to replace the reward"
    ],
    misconceptions: [
      {
        misconception: "Breaking a bad habit is mainly about wanting it badly enough.",
        correction:
          "Desire helps, but loop design determines what happens when energy is low."
      }
    ],
    retentionAnchors: [
      "Invert the laws: invisible, unattractive, difficult, unsatisfying.",
      "Replace the job, not just the behavior."
    ],
    takeaways: [
      "Bad habits have structure.",
      "The inverse laws are practical tools.",
      "Replacement beats pure suppression."
    ],
    relatedSections: ["habit-loop", "friction-convenience"]
  },
  {
    id: "systems-vs-goals",
    title: "Systems vs Goals",
    eyebrow: "Systems",
    minutes: 12,
    summary:
      "Goals set direction, but systems create repeatable progress and determine what happens after motivation fades.",
    objectives: [
      "Understand why goals are useful but insufficient",
      "Convert goals into weekly operating systems",
      "Avoid treating the goal as the plan"
    ],
    concepts: ["systems", "goals", "operating rhythm"],
    thesis:
      "Winners and losers often share similar goals. The difference is usually the system: the repeated process, feedback, environment, and review rhythm that makes progress likely. Goals point; systems move.",
    nuance:
      "This does not mean goals are useless. A goal helps define direction and standards. The mistake is stopping there. A goal without a system creates emotional pressure but does not specify behavior.",
    mentalModel: {
      name: "Operating system",
      explanation:
        "A system is the recurring set of behaviors and reviews that keeps producing progress.",
      useWhen:
        "Use this when you know what you want but do not know what repeats each week."
    },
    scenario:
      "A person wants to advance their career by becoming more strategic.",
    defaultApproach:
      "Set a vague goal to be more strategic this year.",
    betterApproach:
      "Schedule a weekly decision review, read one industry memo, and write one synthesis note every Friday.",
    whyItWorks:
      "The system turns a vague capability into recurring behaviors that create judgment over time.",
    applicationContext: "How to convert one goal into a weekly operating system",
    applicationSteps: [
      "Write the goal",
      "Define the behavior that produces progress",
      "Choose a weekly cadence",
      "Define a review question",
      "Remove or reduce one friction point"
    ],
    applicationResult:
      "The goal becomes a living routine with feedback.",
    exerciseTitle: "Goal-to-system conversion",
    exerciseInstructions:
      "Convert one goal into a weekly system with behavior, cadence, and review.",
    exercisePrompts: [
      "What is the goal?",
      "What repeats weekly?",
      "How will you know the system is improving?"
    ],
    reflection:
      "Which goal in your life is still pretending to be a plan?",
    whyThisMatters:
      "A goal can inspire action once; a system can produce action repeatedly.",
    practicalApplication:
      "Use weekly systems for health, learning, money, career, relationships, and creative output.",
    commonMistakes: [
      "Treating the target as the method",
      "Building a system too complex to repeat",
      "Failing to review whether the system is working"
    ],
    misconceptions: [
      {
        misconception: "Systems mean you should ignore outcomes.",
        correction:
          "Systems use outcomes as feedback but focus daily attention on repeatable process."
      }
    ],
    retentionAnchors: [
      "Goals point. Systems move.",
      "The plan is what repeats."
    ],
    takeaways: [
      "Goals define direction.",
      "Systems define behavior.",
      "Review keeps systems adaptive."
    ],
    relatedSections: ["outcomes-processes-identity", "advanced-habit-design"]
  },
  {
    id: "plateaus-delayed-results",
    title: "Plateaus, Latent Potential, and Delayed Results",
    eyebrow: "Patience",
    minutes: 11,
    summary:
      "Progress often hides below the surface until accumulated effort crosses a visible threshold.",
    objectives: [
      "Interpret plateaus without quitting prematurely",
      "Use leading indicators during delayed results",
      "Understand threshold effects in learning and behavior"
    ],
    concepts: ["latent potential", "plateau", "threshold effects"],
    thesis:
      "A plateau is not always evidence that nothing is happening. Many systems store effort before results show up. Learning, fitness, reputation, trust, and creative skill often grow invisibly until a threshold is crossed.",
    nuance:
      "Patience should not become denial. If leading indicators are poor, redesign the system. If leading indicators are improving but outcomes lag, the task is to stay with the process long enough for stored effort to express itself.",
    mentalModel: {
      name: "Latent accumulation",
      explanation:
        "Progress can be real before it is visible because the system is accumulating capacity.",
      useWhen:
        "Use this when effort is consistent but external results have not caught up."
    },
    scenario:
      "A language learner studies daily but still struggles in conversation.",
    defaultApproach:
      "Conclude the method is useless because fluency has not arrived.",
    betterApproach:
      "Track vocabulary recall, listening comprehension, and shorter response time as signs of latent progress.",
    whyItWorks:
      "The learner sees capability forming before the final outcome becomes smooth.",
    applicationContext: "How to persist through skill plateaus",
    applicationSteps: [
      "Define the visible outcome",
      "Identify hidden capacities that precede it",
      "Track those capacities",
      "Adjust methods based on evidence",
      "Expect thresholds rather than straight lines"
    ],
    applicationResult:
      "The learner remains patient without becoming passive.",
    exerciseTitle: "Name the hidden capacity",
    exerciseInstructions:
      "For one plateau, identify what may be accumulating beneath the visible result.",
    exercisePrompts: [
      "What visible result is delayed?",
      "What hidden skill must grow first?",
      "What leading signal can you track?"
    ],
    reflection:
      "Where might you be judging stored effort before it has crossed a threshold?",
    whyThisMatters:
      "People abandon good systems when they mistake delayed results for absent progress.",
    practicalApplication:
      "Use leading indicators and review windows before changing a system.",
    commonMistakes: [
      "Expecting linear results from nonlinear systems",
      "Calling every plateau a failure",
      "Using patience to avoid necessary redesign"
    ],
    misconceptions: [
      {
        misconception: "A plateau means the system is broken.",
        correction:
          "A plateau may indicate stored progress, but it should be evaluated with leading indicators."
      }
    ],
    retentionAnchors: [
      "Progress can hide before it shows.",
      "Patience plus feedback beats blind persistence."
    ],
    takeaways: [
      "Results can lag effort.",
      "Track hidden capacity.",
      "Redesign based on evidence, not impatience."
    ],
    relatedSections: ["small-habits-compound", "habit-tracking-feedback"]
  },
  {
    id: "consistency-recovery",
    title: "Consistency, Recovery, and Never Missing Twice",
    eyebrow: "Recovery",
    minutes: 11,
    summary:
      "Consistency is the skill of returning quickly, not the fantasy of never missing.",
    objectives: [
      "Redefine consistency as recovery",
      "Use minimum versions during disruption",
      "Prevent one miss from becoming a new pattern"
    ],
    concepts: ["recovery", "minimum viable habit", "never miss twice"],
    thesis:
      "The crucial habit skill is not perfect streak maintenance. It is rapid return. Life will interrupt any system. A resilient habit includes a recovery rule so one missed day does not become an identity collapse.",
    nuance:
      "Never missing twice is not a law of morality; it is a pattern interrupt. It keeps the old identity from collecting fresh evidence. The second miss matters because it starts to teach the system a new normal.",
    mentalModel: {
      name: "Return speed",
      explanation:
        "The health of a habit is measured by how quickly you return after disruption.",
      useWhen:
        "Use this when a miss threatens to become abandonment."
    },
    scenario:
      "A person misses two workouts while traveling and feels the whole plan is ruined.",
    defaultApproach:
      "Wait until next month to restart properly.",
    betterApproach:
      "Do a ten-minute hotel-room workout the next morning and resume the normal plan later.",
    whyItWorks:
      "The minimum version protects identity and prevents a miss from becoming a story of failure.",
    applicationContext: "How to recover after missing a habit",
    applicationSteps: [
      "Expect disruptions in advance",
      "Define the minimum viable habit",
      "Use the minimum version immediately after a miss",
      "Avoid emotional accounting",
      "Review what caused the miss and redesign one cue or friction point"
    ],
    applicationResult:
      "The habit becomes robust under real-life conditions.",
    exerciseTitle: "Write a recovery protocol",
    exerciseInstructions:
      "Create a specific rule for what you will do after missing a habit once.",
    exercisePrompts: [
      "What is the minimum version?",
      "When will you do it after a miss?",
      "What will you review without self-attack?"
    ],
    reflection:
      "What habit needs a return plan more than it needs a stricter streak?",
    whyThisMatters:
      "Rigid habit systems break; resilient systems bend and return.",
    practicalApplication:
      "Use minimum versions, backup contexts, travel plans, and next-day repair rituals.",
    commonMistakes: [
      "Interpreting a miss as identity evidence",
      "Waiting for a perfect restart",
      "Making the minimum version too large"
    ],
    misconceptions: [
      {
        misconception: "Consistency means never missing.",
        correction:
          "Consistency means misses are brief and repaired quickly."
      }
    ],
    retentionAnchors: [
      "Never let one miss become the new normal.",
      "Return speed is a habit skill."
    ],
    takeaways: [
      "Recovery is part of the system.",
      "Minimum habits protect continuity.",
      "Misses are diagnostic data."
    ],
    relatedSections: ["two-minute-rule", "habit-tracking-feedback"]
  },
  {
    id: "advanced-habit-design",
    title: "Advanced Habit Design",
    eyebrow: "Practice",
    minutes: 13,
    summary:
      "Advanced practice combines identity, environment, friction, rewards, reviews, and seasonal focus into a personal operating system.",
    objectives: [
      "Use the four laws as a diagnostic system",
      "Build seasonal habit priorities",
      "Create review loops that keep habits adaptive"
    ],
    concepts: ["habit operating system", "seasonal focus", "review loop"],
    thesis:
      "Advanced habit design is not adding dozens of habits. It is choosing a high-leverage behavior, designing the loop carefully, and reviewing it as life changes. The mature practitioner asks which part of the system is failing rather than blaming personality.",
    nuance:
      "More habits can become less progress when they fragment attention. A single keystone behavior, designed well and reviewed consistently, can improve an entire domain.",
    mentalModel: {
      name: "Habit lab",
      explanation:
        "Treat habits as experiments: design, run, observe, adjust.",
      useWhen:
        "Use this when a habit is important enough to refine instead of merely restart."
    },
    scenario:
      "A founder wants better focus, health, and learning all at once.",
    defaultApproach:
      "Launch a large routine with ten new behaviors on Monday.",
    betterApproach:
      "Choose deep work as the seasonal keystone, design its cue and friction, and review it weekly.",
    whyItWorks:
      "Focus creates downstream benefits without overwhelming the system.",
    applicationContext: "How to build a seasonal habit operating system",
    applicationSteps: [
      "Choose one keystone behavior for the season",
      "Define identity, cue, response, and reward",
      "Design environment and friction",
      "Track a simple leading indicator",
      "Review weekly and adjust one variable at a time"
    ],
    applicationResult:
      "Habit change becomes deliberate iteration instead of repeated relaunching.",
    exerciseTitle: "Design one seasonal keystone",
    exerciseInstructions:
      "Choose one keystone habit and design it through the four laws.",
    exercisePrompts: [
      "What behavior would make other behaviors easier?",
      "Which law is most likely to fail?",
      "What will you review each week?"
    ],
    reflection:
      "What single habit would change the rest of your operating system if it became reliable?",
    whyThisMatters:
      "Scalable behavior change requires prioritization and review, not endless additions.",
    practicalApplication:
      "Use seasonal habit reviews for work, health, study, money, and family rhythms.",
    commonMistakes: [
      "Trying to optimize every habit at once",
      "Changing multiple variables so you cannot learn what worked",
      "Skipping review after the launch energy fades"
    ],
    misconceptions: [
      {
        misconception: "Advanced habit design means complex systems.",
        correction:
          "Advanced design often means fewer habits, clearer loops, and better review."
      }
    ],
    retentionAnchors: [
      "Design one keystone. Review weekly.",
      "A habit is an experiment, not a verdict."
    ],
    takeaways: [
      "Use the four laws diagnostically.",
      "Prioritize keystone behaviors.",
      "Review keeps systems alive."
    ],
    relatedSections: ["systems-vs-goals", "habit-scorecards-awareness"]
  },
  {
    id: "work-application",
    title: "Applying Atomic Habits to Work",
    eyebrow: "Application",
    minutes: 12,
    summary:
      "At work, habits shape attention, decision quality, communication, and the reliability of creative output.",
    objectives: [
      "Apply habit design to deep work",
      "Reduce workplace distraction loops",
      "Build professional systems for review and output"
    ],
    concepts: ["deep work routines", "communication defaults", "review cadence"],
    thesis:
      "Work habits determine what receives your best attention. In many jobs, the default environment is optimized for responsiveness, not depth. Habit design can protect focus, improve decision loops, and make important work easier to start.",
    nuance:
      "The goal is not to ignore collaboration. The goal is to stop allowing every signal to have equal claim on attention. Good work systems distinguish communication windows from creation windows.",
    mentalModel: {
      name: "Attention allocation",
      explanation:
        "Your workday is a portfolio of attention. Habits decide where the best hours are invested.",
      useWhen:
        "Use this when urgent inputs keep crowding out important output."
    },
    scenario:
      "A manager begins each morning in chat and loses the only quiet hour of the day.",
    defaultApproach:
      "Check messages quickly before starting strategic work.",
    betterApproach:
      "Start with a 60-minute strategy block, then open communication tools at a scheduled time.",
    whyItWorks:
      "The highest-value work receives attention before reactive loops take over.",
    applicationContext: "How to apply habit stacking for deep work",
    applicationSteps: [
      "Choose the protected work block",
      "Create a start cue",
      "Block the default distraction",
      "Define a small first output",
      "End by preparing tomorrow's first task"
    ],
    applicationResult:
      "Important work becomes scheduled behavior rather than leftover time.",
    exerciseTitle: "Design a workday opening loop",
    exerciseInstructions:
      "Create a first-hour routine that protects the most valuable work.",
    exercisePrompts: [
      "What should receive your best attention?",
      "What cue starts it?",
      "What default must wait?"
    ],
    reflection:
      "What work habit currently spends your best attention too cheaply?",
    whyThisMatters:
      "Professional outcomes compound from repeated allocation of attention.",
    practicalApplication:
      "Use focus blocks, communication windows, weekly reviews, and prepared first tasks.",
    commonMistakes: [
      "Letting communication tools set the day's agenda",
      "Planning deep work without blocking cues",
      "Ending work without preparing the next start"
    ],
    misconceptions: [
      {
        misconception: "Work habits are just personal productivity tricks.",
        correction:
          "They are systems for allocating attention, producing output, and improving decisions."
      }
    ],
    retentionAnchors: [
      "Protect your best attention before the day spends it.",
      "Start work with the output you value most."
    ],
    takeaways: [
      "Work defaults shape output.",
      "Deep work needs cues and boundaries.",
      "Review loops improve professional judgment."
    ],
    relatedSections: ["habit-stacking", "systems-vs-goals"]
  },
  {
    id: "health-application",
    title: "Applying Atomic Habits to Health",
    eyebrow: "Application",
    minutes: 12,
    summary:
      "Health habits improve when food, movement, sleep, and recovery are designed as defaults rather than repeated acts of restraint.",
    objectives: [
      "Apply environment design to health",
      "Reduce reliance on willpower around food and exercise",
      "Create small recovery-friendly health systems"
    ],
    concepts: ["health defaults", "food environment", "movement cues"],
    thesis:
      "Health behavior is highly context-sensitive. What is visible in the kitchen, packed in the bag, scheduled after work, and normal in the household often matters more than a promise to be disciplined later.",
    nuance:
      "Health habits should be designed for low-energy states. A plan that works only when you are rested and motivated is not yet a health system.",
    mentalModel: {
      name: "Low-energy design",
      explanation:
        "Design health habits for the version of you who is tired, rushed, and hungry.",
      useWhen:
        "Use this when health plans collapse at the predictable hard moments."
    },
    scenario:
      "A person plans to eat well but arrives home hungry to an unprepared kitchen.",
    defaultApproach:
      "Rely on restraint while convenient snack cues are visible.",
    betterApproach:
      "Prepare a default meal, put fruit and protein at eye level, and keep snack foods inconvenient.",
    whyItWorks:
      "The healthier option becomes the easy visible default when energy is low.",
    applicationContext: "How to redesign your environment for better health",
    applicationSteps: [
      "Identify the vulnerable health decision",
      "Prepare the desired option before the moment",
      "Make it visible and easy",
      "Hide or add friction to the less desired option",
      "Create a small satisfaction signal after completion"
    ],
    applicationResult:
      "Health improves through defaults instead of repeated self-denial.",
    exerciseTitle: "Design one health default",
    exerciseInstructions:
      "Choose one recurring health decision and make the better option easier before the decision arrives.",
    exercisePrompts: [
      "When is the vulnerable moment?",
      "What can be prepared earlier?",
      "What cue should be visible?"
    ],
    reflection:
      "Which health choice are you asking tired willpower to solve every day?",
    whyThisMatters:
      "Health is built in repeated ordinary moments, many of which happen when discipline is lowest.",
    practicalApplication:
      "Use grocery defaults, prepared workout clothes, sleep cues, walking anchors, and recovery routines.",
    commonMistakes: [
      "Planning for ideal energy",
      "Leaving unhealthy cues visible",
      "Making exercise require too much setup"
    ],
    misconceptions: [
      {
        misconception: "Health habits are mainly about discipline.",
        correction:
          "Discipline matters, but defaults, cues, and friction often decide the behavior."
      }
    ],
    retentionAnchors: [
      "Design for tired you.",
      "Health defaults beat health intentions."
    ],
    takeaways: [
      "Prepare before vulnerable moments.",
      "Make healthy cues visible.",
      "Use friction to protect choices."
    ],
    relatedSections: ["environment-design", "friction-convenience"]
  },
  {
    id: "learning-application",
    title: "Applying Atomic Habits to Learning",
    eyebrow: "Application",
    minutes: 12,
    summary:
      "Learning habits improve when study is cued, retrieval is built in, progress is visible, and review becomes a system.",
    objectives: [
      "Build a reading and retrieval habit",
      "Use immediate feedback for long-term learning",
      "Apply habit stacking to study"
    ],
    concepts: ["retrieval practice", "study cues", "learning loops"],
    thesis:
      "Learning compounds when exposure becomes retrieval, reflection, and application. A reading habit that produces no recall may feel productive while leaving little behind. Habit design can turn learning into a loop that preserves understanding.",
    nuance:
      "The goal is not to make every reading session feel like school. The goal is to add just enough structure that attention becomes retained knowledge.",
    mentalModel: {
      name: "Read, recall, apply",
      explanation:
        "Learning becomes durable when input is followed by retrieval and practical use.",
      useWhen:
        "Use this when you consume ideas but cannot later use them."
    },
    scenario:
      "A reader finishes many nonfiction books but cannot explain the core ideas a month later.",
    defaultApproach:
      "Read more books and hope retention improves.",
    betterApproach:
      "After each section, write three recall questions and one application sentence.",
    whyItWorks:
      "The habit converts reading into memory and usable insight.",
    applicationContext: "How to build a reading habit that actually retains ideas",
    applicationSteps: [
      "Anchor reading to a stable routine",
      "Stop after a section",
      "Write one-sentence compression",
      "Create three recall prompts",
      "Apply one idea to a real situation"
    ],
    applicationResult:
      "Reading produces retained mental models instead of vague familiarity.",
    exerciseTitle: "Create a learning loop",
    exerciseInstructions:
      "For the next lesson you read, write recall prompts and one application.",
    exercisePrompts: [
      "What is the core idea?",
      "What question would test recall?",
      "Where can you apply this this week?"
    ],
    reflection:
      "What are you consuming regularly without a habit that turns it into retained knowledge?",
    whyThisMatters:
      "Knowledge compression only matters if the compressed ideas remain usable.",
    practicalApplication:
      "Use section notes, retrieval prompts, spaced review, and application sentences after reading.",
    commonMistakes: [
      "Confusing familiarity with understanding",
      "Highlighting without retrieval",
      "Reading too long without pausing to consolidate"
    ],
    misconceptions: [
      {
        misconception: "More reading automatically means more learning.",
        correction:
          "Reading becomes learning when the mind retrieves, connects, and applies."
      }
    ],
    retentionAnchors: [
      "Input is not understanding until it can be recalled and used.",
      "Read, recall, apply."
    ],
    takeaways: [
      "Learning needs a feedback loop.",
      "Retrieval improves retention.",
      "Application makes ideas usable."
    ],
    relatedSections: ["habit-stacking", "habit-tracking-feedback"]
  },
  {
    id: "money-application",
    title: "Applying Atomic Habits to Money",
    eyebrow: "Application",
    minutes: 12,
    summary:
      "Money habits improve when saving, spending, review, and identity are designed into defaults before emotion enters the decision.",
    objectives: [
      "Apply identity-based habits to money",
      "Use automation and friction for financial behavior",
      "Build a weekly money review system"
    ],
    concepts: ["financial defaults", "saving identity", "spending friction"],
    thesis:
      "Financial behavior is a habit domain because money decisions repeat under emotion, status pressure, convenience, and uncertainty. A good money system makes the future-protecting behavior automatic and the impulsive behavior slower.",
    nuance:
      "Atomic Habits does not replace financial knowledge. It makes financial knowledge more executable. Knowing what to do is not enough if the environment makes the opposite easy.",
    mentalModel: {
      name: "Future-options identity",
      explanation:
        "Saving is not deprivation; it is repeated evidence that you protect future freedom.",
      useWhen:
        "Use this when saving feels like losing rather than buying options."
    },
    scenario:
      "A professional earns well but saves inconsistently because spending is impulsive and visible.",
    defaultApproach:
      "Try to spend less after money is already in the checking account.",
    betterApproach:
      "Automate saving on payday, remove saved cards from shopping sites, and run a Friday money review.",
    whyItWorks:
      "The system makes saving the default and spending more deliberate.",
    applicationContext: "How to apply identity-based habits to money",
    applicationSteps: [
      "Name the financial identity",
      "Automate one proof behavior",
      "Add friction to impulsive spending",
      "Track progress visually",
      "Review decisions weekly without shame"
    ],
    applicationResult:
      "Money behavior becomes a designed loop rather than a series of emotional decisions.",
    exerciseTitle: "Design one financial default",
    exerciseInstructions:
      "Create one automatic behavior that supports the financial identity you want.",
    exercisePrompts: [
      "What identity should money reinforce?",
      "What action can happen automatically?",
      "Where should friction be added?"
    ],
    reflection:
      "What money behavior would be easier if it happened before discretionary spending became visible?",
    whyThisMatters:
      "Financial outcomes are deeply shaped by repeated defaults.",
    practicalApplication:
      "Use payday automation, waiting periods, spending friction, review rituals, and visible savings progress.",
    commonMistakes: [
      "Relying on restraint after money is already easy to spend",
      "Using shame instead of review",
      "Making saving invisible and spending vivid"
    ],
    misconceptions: [
      {
        misconception: "Money habits are just budgeting details.",
        correction:
          "They are repeated behaviors tied to identity, emotion, status, and future options."
      }
    ],
    retentionAnchors: [
      "Automate the future before impulse sees the money.",
      "Saving is identity evidence for future freedom."
    ],
    takeaways: [
      "Defaults shape financial behavior.",
      "Friction protects against impulse.",
      "Money reviews should produce learning, not shame."
    ],
    relatedSections: ["identity-based-behavior-change", "fourth-law-satisfying"]
  },
  {
    id: "relationships-application",
    title: "Applying Atomic Habits to Relationships",
    eyebrow: "Application",
    minutes: 11,
    summary:
      "Relationships are shaped by repeated cues of attention, repair, appreciation, and presence.",
    objectives: [
      "Apply habit design to connection",
      "Build small rituals of attention",
      "Use recovery habits after conflict or distance"
    ],
    concepts: ["relationship rituals", "attention cues", "repair habits"],
    thesis:
      "Relationships are not built only by major moments. They are built by repeated micro-behaviors: greeting, listening, following up, repairing, appreciating, and making attention visible. Habit design can make care more reliable.",
    nuance:
      "Relational habits should not become mechanical scripts. The point is to make attention available, not to automate sincerity. A good ritual creates space for presence.",
    mentalModel: {
      name: "Small bids",
      explanation:
        "Repeated small moments of attention teach a relationship what it can expect.",
      useWhen:
        "Use this when care is real but not consistently expressed."
    },
    scenario:
      "A parent arrives home distracted and the first ten minutes set a disconnected tone.",
    defaultApproach:
      "Hope to reconnect later after checking the phone.",
    betterApproach:
      "Place the phone away at the door and give the first five minutes to greeting and listening.",
    whyItWorks:
      "The cue of arriving home triggers connection before distraction claims attention.",
    applicationContext: "How to create a relationship attention ritual",
    applicationSteps: [
      "Identify a recurring transition",
      "Remove the competing attention cue",
      "Choose a small expression of presence",
      "Repeat it consistently",
      "Repair quickly when the ritual is missed"
    ],
    applicationResult:
      "Connection becomes a default at important transition points.",
    exerciseTitle: "Design one relational cue",
    exerciseInstructions:
      "Choose one recurring moment where a small behavior would express care.",
    exercisePrompts: [
      "What transition matters?",
      "What competing cue steals attention?",
      "What small action would communicate presence?"
    ],
    reflection:
      "Where could a tiny repeated behavior make someone feel more consistently valued?",
    whyThisMatters:
      "Love and trust are often experienced through repeated behavior, not abstract intention.",
    practicalApplication:
      "Use greeting rituals, weekly check-ins, repair phrases, appreciation notes, and device boundaries.",
    commonMistakes: [
      "Assuming good intentions are obvious",
      "Letting devices own relational transitions",
      "Treating repair as optional after a missed moment"
    ],
    misconceptions: [
      {
        misconception: "Habits make relationships less authentic.",
        correction:
          "Good relational habits protect the conditions where authentic attention can happen."
      }
    ],
    retentionAnchors: [
      "Repeated attention teaches trust.",
      "Make care visible in ordinary moments."
    ],
    takeaways: [
      "Relationships compound through small behaviors.",
      "Transitions are powerful connection cues.",
      "Repair is a habit too."
    ],
    relatedSections: ["social-environment-imitation", "consistency-recovery"]
  },
  {
    id: "common-misreadings",
    title: "Common Misreadings of Atomic Habits",
    eyebrow: "Nuance",
    minutes: 12,
    summary:
      "The book is often flattened into slogans; the stronger reading treats habits as flexible systems, not moral judgments.",
    objectives: [
      "Avoid shallow interpretations",
      "Preserve nuance around identity, systems, and tiny habits",
      "Apply the framework without becoming rigid"
    ],
    concepts: ["misreadings", "nuance", "systems thinking"],
    thesis:
      "Atomic Habits is vulnerable to being simplified into motivational fragments: be one percent better, never miss, systems over goals. These phrases are useful only when connected to the deeper architecture of cues, cravings, responses, rewards, identity, and review.",
    nuance:
      "The best use of the book is compassionate precision. You are responsible for design, but not required to shame yourself for every failure. A miss is data. A bad habit is a loop. An identity is evidence, not a prison.",
    mentalModel: {
      name: "Compassionate engineering",
      explanation:
        "Treat behavior as designable without treating the person as defective.",
      useWhen:
        "Use this when habit change starts becoming harsh, rigid, or slogan-driven."
    },
    scenario:
      "A reader uses never miss twice as a reason to feel guilty after missing twice.",
    defaultApproach:
      "Treat the rule as proof of personal failure.",
    betterApproach:
      "Treat the second miss as a signal to reduce the habit, redesign the cue, and return with a minimum version.",
    whyItWorks:
      "The rule becomes a recovery tool rather than a shame tool.",
    applicationContext: "How to apply Atomic Habits without becoming rigid",
    applicationSteps: [
      "Translate slogans back into mechanisms",
      "Use misses as data",
      "Keep identities flexible",
      "Prefer redesign over self-attack",
      "Review whether the system fits your actual life"
    ],
    applicationResult:
      "The framework becomes practical and humane instead of brittle.",
    exerciseTitle: "Audit one slogan",
    exerciseInstructions:
      "Choose one habit slogan and translate it into a practical mechanism.",
    exercisePrompts: [
      "What phrase are you repeating?",
      "What mechanism does it point to?",
      "How could it be misused?"
    ],
    reflection:
      "Where have you turned a useful habit principle into a harsh rule?",
    whyThisMatters:
      "A shallow reading can create pressure without producing better design.",
    practicalApplication:
      "When a habit principle feels judgmental, ask what cue, friction, reward, or identity evidence it is actually asking you to redesign.",
    commonMistakes: [
      "Turning tiny habits into low standards forever",
      "Turning identity into a rigid label",
      "Treating systems over goals as goals do not matter",
      "Using tracking as self-surveillance"
    ],
    misconceptions: [
      {
        misconception: "Atomic Habits is about becoming perfectly optimized.",
        correction:
          "It is about designing repeatable behavior that supports the life and identity you value."
      }
    ],
    retentionAnchors: [
      "Translate slogans into systems.",
      "Use the framework to redesign, not to shame."
    ],
    takeaways: [
      "Mechanisms matter more than slogans.",
      "A humane system is more durable.",
      "Nuance prevents brittleness."
    ],
    relatedSections: ["advanced-habit-design", "consistency-recovery"]
  },
  {
    id: "final-synthesis-blueprint",
    title: "Final Synthesis and Implementation Blueprint",
    eyebrow: "Blueprint",
    minutes: 15,
    summary:
      "The complete method is to choose one identity-relevant behavior, design the loop through the four laws, track it lightly, and review it with curiosity.",
    objectives: [
      "Synthesize the full framework",
      "Build a complete habit design blueprint",
      "Leave with one practical implementation plan"
    ],
    concepts: ["blueprint", "synthesis", "implementation"],
    thesis:
      "Atomic Habits compresses into a practical design loop: choose the identity, define the behavior, make the cue obvious, make the habit attractive, make the response easy, make the reward satisfying, and review the system as evidence accumulates.",
    nuance:
      "The blueprint works best when it is focused. One well-designed habit can teach the entire method. Trying to redesign life all at once usually creates complexity before the first loop is reliable.",
    mentalModel: {
      name: "One-loop mastery",
      explanation:
        "Master one complete habit loop before multiplying habits.",
      useWhen:
        "Use this when you feel inspired to change everything after learning the framework."
    },
    scenario:
      "A reader finishes the curriculum and wants to improve health, money, learning, and work immediately.",
    defaultApproach:
      "Create a large plan with many simultaneous routines.",
    betterApproach:
      "Choose one keystone habit, design it through the four laws, and review it for four weeks.",
    whyItWorks:
      "A focused implementation creates learning and confidence before scaling.",
    applicationContext: "How to build your Atomic Habits implementation plan",
    applicationSteps: [
      "Choose one keystone behavior",
      "Write the identity it supports",
      "Map cue, craving, response, and reward",
      "Apply the four laws and inverse laws",
      "Create a minimum version and recovery rule",
      "Track one leading indicator",
      "Review weekly for four weeks"
    ],
    applicationResult:
      "The reader leaves with a system, not just understanding.",
    exerciseTitle: "Complete the habit blueprint",
    exerciseInstructions:
      "Design one habit from identity through review. Keep it small enough to execute this week.",
    exercisePrompts: [
      "Identity: I am becoming someone who...",
      "Cue: the habit starts when...",
      "Response: the minimum action is...",
      "Reward: the immediate satisfaction is...",
      "Review: each week I will ask..."
    ],
    reflection:
      "What is the one habit that would make the next season of your life easier, clearer, or more aligned?",
    whyThisMatters:
      "Understanding becomes valuable when it changes the next repeated action.",
    practicalApplication:
      "Use the blueprint as a reusable template for future books, skills, and life domains.",
    commonMistakes: [
      "Leaving the curriculum with inspiration but no system",
      "Choosing a habit too large for the first week",
      "Skipping the review loop",
      "Changing too many variables before learning from the first design"
    ],
    misconceptions: [
      {
        misconception: "The final step is motivation.",
        correction:
          "The final step is a designed system that makes the next repetition clear."
      }
    ],
    retentionAnchors: [
      "Identity, cue, craving, response, reward, review.",
      "Design one loop. Run it. Learn. Then scale."
    ],
    takeaways: [
      "A complete habit has identity, cue, response, reward, and review.",
      "Start with one keystone behavior.",
      "The framework is reusable across domains."
    ],
    relatedSections: ["core-thesis", "advanced-habit-design"]
  }
];

const atomicSections = definitions.map(lesson);

export const atomicHabits: Book = {
  slug: "atomic-habits",
  title: "Atomic Habits",
  author: "James Clear",
  category: "Behavioral Design",
  difficulty: "Foundational",
  completionTime: "6h 15m",
  progress: 34,
  coverTone:
    "from-stone-200 via-amber-100 to-emerald-100 dark:from-stone-800 dark:via-amber-900/40 dark:to-emerald-900/40",
  description:
    "A deep curriculum on identity, systems, environment design, habit loops, and the behavioral mechanics behind lasting change.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(atomicSections),
  curriculumVersion: "1.1",
  primaryThemes: [
    "identity-based change",
    "behavioral design",
    "environment and friction",
    "compounding",
    "practical implementation"
  ],
  intendedOutcomes: [
    "Understand the four laws of behavior change as a diagnostic system",
    "Design good habits that are obvious, attractive, easy, and satisfying",
    "Break bad habits by changing cues, friction, appeal, and rewards",
    "Convert goals into repeatable systems",
    "Build a personal habit blueprint for work, health, learning, money, or relationships"
  ],
  promise:
    "After this curriculum, you will understand how habits form, why small behaviors compound, how identity shapes repetition, and how to design practical systems that survive real life.",
  recommendedAudience: [
    "Readers who want practical behavior change",
    "Professionals building better work systems",
    "Students and lifelong learners",
    "Anyone trying to make good habits easier and bad habits harder"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public concepts and behavioral-change framework. It does not reproduce long passages or chapter text.",
  sections: atomicSections
};
