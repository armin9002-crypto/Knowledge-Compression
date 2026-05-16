import type { Book, ContentBlock, CurriculumSection } from "@/lib/types";
import { estimateSectionsMinutes } from "@/content/utils/readingTime";

type ChapterInput = {
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
  reflection: string;
  exercises: string[];
  anchors: string[];
  takeaways: string[];
  examples: string[];
  relatedSections?: string[];
};

function chapter(input: ChapterInput): CurriculumSection {
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
        type: "reflectionPrompt",
        id: `${input.id}-reflection`,
        question: input.reflection,
        helperText:
          "Write one practical answer. This note stays local to your browser."
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
    reflectionPrompts: [input.reflection],
    implementationExercises: input.exercises,
    retentionAnchors: input.anchors,
    takeaways: input.takeaways,
    relatedSections: input.relatedSections
  };
}

const atomicSections: CurriculumSection[] = [
  chapter({
    id: "real-power-small-habits",
    title: "The Real Power of Small Habits",
    eyebrow: "Foundation",
    minutes: 28,
    summary:
      "Small habits matter because they are repeatable units of change that compound into identity, capability, and environment.",
    objectives: [
      "Understand why tiny behaviors are powerful only when they compound",
      "Separate meaningful consistency from shallow life hacks",
      "See habits as the architecture beneath visible outcomes"
    ],
    concepts: ["compounding", "behavioral systems", "latent progress"],
    body: [
      "Atomic Habits begins from a deceptively simple observation: most meaningful change is not produced by a single dramatic act. It is produced by repeated behavior that becomes part of the structure of life. A tiny habit is not impressive because the individual action is large. It is powerful because it can be repeated when energy is ordinary, time is limited, and motivation is not especially high.",
      "That distinction matters. Many people dismiss small habits because they compare the size of the action with the size of the desired outcome. Reading five pages feels laughably small compared with becoming intellectually serious. Walking for ten minutes feels too modest compared with getting healthy. Saving a small amount feels irrelevant compared with building wealth. But the first question is not whether the action looks impressive today. The first question is whether it can survive long enough to compound.",
      "Compounding in behavior is broader than arithmetic. A repeated action changes skill, attention, self-trust, identity, and defaults. The person who reads each morning becomes faster at entering the reading state. The person who writes a few sentences daily lowers the emotional cost of a blank page. The person who walks after lunch starts to see movement as normal rather than exceptional. Over time, the action reshapes the person who performs it.",
      "This is why the book is not really about tiny behaviors in isolation. A small habit with no direction, no feedback, and no connection to a meaningful identity is just a small behavior. The deeper idea is system design. You are looking for behaviors that are small enough to repeat and meaningful enough to become evidence for the life you are building.",
      "The early phase of a habit is often emotionally unrewarding because effort is visible before results are. This is where many people quit. They judge the system by lagging outcomes instead of leading behaviors. The better question is: Is the behavior becoming more automatic? Is the environment making it easier? Is the identity becoming more believable? Those are signs that the compounding engine has started even if the visible result has not arrived.",
      "Health makes this easy to see. A single walk does not transform cardiovascular fitness. A single healthy meal does not remake a body. But a repeated walking habit changes what the day expects from you. It shifts energy, appetite, sleep, and self-respect. It also lowers the threshold for more ambitious training later. The small behavior is not the finish line; it is the platform from which larger change becomes realistic.",
      "The same pattern applies to learning and money. Reading ten pages a day seems modest until it becomes several serious books per year, a growing note archive, and a stronger capacity to recognize patterns. Saving a small amount automatically seems minor until it becomes proof that you pay your future self first. The first visible gain is often not the final outcome. It is the reduction of psychological resistance around the behavior.",
      "At work, small habits compound into professional reliability. A weekly review, a prepared first task, or a daily deep work block may not feel dramatic in the first week. Over months, these habits change what gets finished, what gets noticed, and what problems you are trusted to solve. The person who repeatedly protects attention becomes the kind of person who can produce work that requires attention."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Small is not the same as trivial",
        not: "A tiny habit is not a miniature motivational trick that magically replaces serious effort.",
        but: "It is the repeatable entry point into a larger system of identity, practice, feedback, and compounding."
      },
      {
        type: "expandedExample",
        scenario:
          "A reader wants to become someone who deeply understands important nonfiction.",
        defaultApproach:
          "Wait for long uninterrupted weekends and attempt large reading sessions that happen irregularly.",
        betterApproach:
          "Read a small number of pages after coffee, write one sentence of compression, and review those notes weekly.",
        whyItWorks:
          "The behavior is small enough to repeat, but it still preserves the seriousness of the identity: a person who studies ideas carefully."
      },
      {
        type: "exercise",
        title: "Find the smallest serious version",
        instructions:
          "Choose one behavior you care about and reduce it until it can survive a busy weekday without becoming meaningless.",
        prompts: [
          "What larger identity does this behavior support?",
          "What is the smallest version that still counts as real evidence?",
          "What leading signal will show the system is taking root?"
        ]
      }
    ],
    whyThisMatters:
      "People often abandon useful systems because early progress is quiet. Understanding compounding helps you stay with the behaviors that are building capacity beneath the surface.",
    practicalApplication:
      "Pick one behavior that is small enough to repeat daily or weekly, then track the leading behavior rather than waiting for the final result to validate the effort.",
    commonMistakes: [
      "Treating small habits as a substitute for serious effort",
      "Expecting visible outcomes before enough repetitions accumulate",
      "Choosing a tiny action that has no meaningful connection to the desired identity"
    ],
    misconceptions: [
      {
        misconception: "Atomic Habits is saying tiny actions are enough by themselves.",
        correction:
          "Tiny actions are the starting units of a system. They matter when they repeat, compound, and scale into deeper capability."
      }
    ],
    reflection:
      "Where are you underestimating a small behavior because it does not look impressive yet?",
    exercises: [
      "Write one small behavior that supports an identity you care about.",
      "Define one leading indicator you can track for four weeks.",
      "Review whether the behavior is becoming easier before judging the outcome."
    ],
    anchors: [
      "Small habits are powerful when they are repeatable, directional, and allowed to compound.",
      "Judge early habits by leading behaviors before judging them by lagging outcomes."
    ],
    takeaways: [
      "Habits are the invisible architecture beneath results.",
      "The repeatable version is often more valuable than the heroic version.",
      "Compounding begins before progress becomes visible."
    ],
    examples: [
      "Reading five pages after coffee becomes a durable learning identity.",
      "A ten-minute walk after lunch creates a health default before fitness outcomes are visible.",
      "A small automatic transfer builds the identity of someone who protects future options."
    ],
    relatedSections: ["identity-based-change", "systems-over-goals"]
  }),
  chapter({
    id: "identity-based-change",
    title: "Identity-Based Behavior Change",
    eyebrow: "Identity",
    minutes: 32,
    summary:
      "The deepest form of habit change works by creating repeated evidence for the kind of person you believe you are becoming.",
    objectives: [
      "Understand why identity can be more durable than motivation",
      "Learn how identity is built through evidence",
      "Avoid rigid identity language that creates shame or limitation"
    ],
    concepts: ["identity evidence", "self-consistency", "behavioral votes"],
    body: [
      "One of the book's most important contributions is the shift from outcome-based change to identity-based change. Outcome-based change asks, What result do I want? Identity-based change asks, Who is the kind of person who naturally produces that result? The second question reaches deeper because it connects behavior to self-understanding rather than temporary pressure.",
      "Identity is not built by declaring a slogan. It is built through evidence. Each repetition is a small vote for a self-concept. A person who writes every morning, even briefly, gathers evidence that they are a writer. A person who keeps a weekly money review gathers evidence that they are financially responsible. A person who returns to exercise after missing a session gathers evidence that they are someone who repairs rather than abandons.",
      "This is why identity can be stronger than motivation. Motivation asks you to push against resistance. Identity changes the meaning of the behavior. If reading is merely a task, it competes with every other task. If reading is evidence that you are a serious student of ideas, the behavior has a different emotional gravity. You are not just finishing pages; you are reinforcing who you are becoming.",
      "There is also a danger here. Identity can liberate, but it can also imprison. People carry old identity statements such as I am bad with money, I never finish things, I am not athletic, or I am not a reader. These statements feel descriptive, but they also become instructions. They make certain behaviors feel unnatural before the person even begins.",
      "The way out is not fake confidence. The way out is small proof. Instead of trying to believe a new identity all at once, create evidence that makes the new identity increasingly credible. The person who thinks they are bad with money can automate a tiny transfer. The person who thinks they never finish can complete a small weekly review. The person who thinks they are not athletic can become someone who walks after lunch. Identity follows accumulated proof.",
      "A healthy identity is directional rather than brittle. I am someone who trains is more useful than I never miss a workout. I am someone who returns is more durable than I am perfectly consistent. The best identity language makes good behavior easier without turning imperfection into a crisis.",
      "The three levels of change help organize this. Outcomes are what you get: lose weight, save money, write the proposal, finish the course. Processes are what you do: shop differently, automate transfers, write every morning, review notes after each lesson. Identity is who the behavior teaches you to become: a person who protects their health, future, craft, or attention. Outcome gives direction, process creates movement, and identity gives the movement emotional stability.",
      "Good identity language is specific enough to guide behavior but flexible enough to survive real life. I am a reader can become brittle if missing one morning feels like evidence against the identity. I am someone who returns to important ideas gives you a recovery path. I am disciplined can turn into self-judgment. I am someone who designs my environment to support what matters points toward practical action.",
      "The perfectionist trap appears when identity becomes a courtroom. If every action is treated as proof for or against your worth, habits become emotionally dangerous. Atomic Habits is more useful when identity is treated as evidence accumulation, not identity prosecution. Each repetition is a vote. A missed vote matters, but it is not the whole election."
    ],
    support: [
      {
        type: "callout",
        title: "Identity principle",
        text: "You do not think your way into a new identity first. You gather enough behavioral evidence that the new identity becomes believable."
      },
      {
        type: "expandedExample",
        scenario:
          "Someone wants to become better with money but carries the identity that they are irresponsible.",
        defaultApproach:
          "Set an aggressive savings goal, fail to maintain it, and use the failure as more evidence for the old identity.",
        betterApproach:
          "Automate a small transfer on payday and review it weekly as proof: I am someone who protects future options.",
        whyItWorks:
          "The behavior is modest enough to repeat, but meaningful enough to challenge the old identity with evidence."
      },
      {
        type: "misconception",
        misconception: "Identity-based habits are just affirmations.",
        correction:
          "They are evidence loops. The identity becomes believable because repeated action makes it harder to deny.",
        whyItMatters:
          "Without evidence, identity language becomes decoration. With evidence, it becomes a stabilizing force."
      },
      {
        type: "exercise",
        title: "Build identity evidence",
        instructions:
          "Choose one identity you want to strengthen and pair it with one proof behavior.",
        prompts: [
          "Who is the kind of person who would naturally do this?",
          "What tiny action would count as evidence this week?",
          "What old identity statement needs less authority over your choices?"
        ]
      }
    ],
    whyThisMatters:
      "Habits last longer when they are connected to self-consistency instead of depending only on mood, pressure, or external rewards.",
    practicalApplication:
      "For any habit you want to build, write the identity it supports and the smallest behavior that can provide credible evidence for that identity.",
    commonMistakes: [
      "Using identity statements without proof behaviors",
      "Choosing rigid identities that turn missed days into shame",
      "Letting old labels explain behavior instead of redesigning evidence"
    ],
    misconceptions: [
      {
        misconception: "You need to fully believe the new identity before acting.",
        correction:
          "Often you act first in small ways, then belief catches up as evidence accumulates."
      }
    ],
    reflection:
      "What small behavior would give you credible evidence for the person you want to become?",
    exercises: [
      "Write one identity sentence: I am becoming someone who...",
      "Choose one proof behavior that takes less than ten minutes.",
      "Review the proof weekly without demanding perfection."
    ],
    anchors: [
      "Identity follows evidence.",
      "Every repetition is a vote, not a final verdict."
    ],
    takeaways: [
      "Identity-based change reaches deeper than outcome-based change.",
      "Small actions matter because they become self-evidence.",
      "Useful identities are flexible, humane, and supported by behavior."
    ],
    examples: [
      "A reader becomes a serious learner by keeping a daily study appointment.",
      "A saver becomes financially responsible through repeated proof, not one dramatic budget.",
      "A healthy person identity can begin with a reliable walk, not a complete fitness overhaul."
    ],
    relatedSections: ["real-power-small-habits", "systems-over-goals"]
  }),
  chapter({
    id: "habit-loop",
    title: "The Habit Loop: Cue, Craving, Response, Reward",
    eyebrow: "Mechanism",
    minutes: 30,
    summary:
      "Habits are loops: a cue predicts a reward, craving creates desire, response performs the behavior, and reward teaches repetition.",
    objectives: [
      "Understand the four-part structure of habits",
      "Diagnose why a habit succeeds or fails",
      "Design replacement behaviors that satisfy the real craving"
    ],
    concepts: ["cue", "craving", "response", "reward"],
    body: [
      "The habit loop is the operating mechanism beneath the book's practical advice. A cue signals that a reward may be available. A craving creates desire for a state change. A response is the behavior itself. A reward satisfies the craving and teaches the brain whether the loop is worth repeating.",
      "This model is useful because it makes behavior inspectable. Instead of treating a habit as a mysterious failure of character, you can ask where the loop begins. What cue starts it? What state are you trying to reach? What response is easiest in that moment? What reward keeps the loop alive?",
      "The craving is especially important. People often assume they crave the object of the habit, but often they crave the internal state the object promises. Email checking may be a craving for certainty. Snacking may be a craving for relief. Scrolling may be a craving for stimulation, escape, or social connection. If you replace the behavior without addressing the state change, the old habit usually returns.",
      "This is why many habit plans fail. They focus on the visible behavior while ignoring the invisible function. A person says, I need to stop checking my phone, but the phone is providing relief from boredom and uncertainty. A person says, I need to stop procrastinating, but procrastination is providing temporary escape from ambiguity or fear. The replacement has to solve the real problem better.",
      "The four laws of behavior change are built on this loop. Make it obvious addresses the cue. Make it attractive addresses the craving. Make it easy addresses the response. Make it satisfying addresses the reward. The laws are not random tips; they are interventions at different points in the loop.",
      "A good habit loop can be designed deliberately. Imagine someone building a workout habit. The cue is workout clothes placed beside the bed. The craving is not only fitness; it may be the desire to feel energetic, capable, and less mentally foggy. The response begins with a two-minute warmup. The reward is a visible checkmark, a better mood, and the identity evidence of being someone who trains. The behavior becomes easier because each part of the loop has a job.",
      "A bad habit loop can be diagnosed the same way. Late-night phone use may start with the cue of getting into bed with the device nearby. The craving is decompression after the day. The response is scrolling. The reward is novelty and escape. If you only attack the response, you fight the strongest part of the loop at the worst time. If you redesign the cue, create another decompression ritual, and charge the phone elsewhere, you intervene earlier and more intelligently.",
      "When a habit is failing, do not ask only whether you care enough. Ask which stage is weak. If you forget, the cue is not obvious. If you resist, the habit is not attractive enough or the competing habit is too attractive. If you delay, the response is too hard. If you stop repeating, the reward may be too distant or invisible. Diagnosis turns frustration into design."
    ],
    support: [
      {
        type: "diagram",
        title: "The habit loop",
        steps: [
          "Cue: notice an opportunity",
          "Craving: desire a state change",
          "Response: perform the behavior",
          "Reward: learn whether to repeat"
        ]
      },
      {
        type: "expandedExample",
        scenario:
          "A knowledge worker checks email repeatedly during a writing block.",
        defaultApproach:
          "Blame distraction and promise to focus harder tomorrow.",
        betterApproach:
          "Recognize the craving for certainty, schedule message checks, remove inbox cues, and use a visible task list for reassurance.",
        whyItWorks:
          "The new design addresses the craving and changes the cue, instead of merely scolding the response."
      },
      {
        type: "exercise",
        title: "Map one loop",
        instructions:
          "Choose one repeated behavior, helpful or harmful, and map it through the four-part loop.",
        prompts: [
          "What cue usually appears before the behavior?",
          "What state change do you want in that moment?",
          "What reward teaches you to repeat the behavior?"
        ]
      }
    ],
    whyThisMatters:
      "When you can see the loop, you can redesign behavior with precision instead of relying on vague discipline.",
    practicalApplication:
      "Before changing a habit, map its cue, craving, response, and reward. Then choose the weakest or most accessible point for intervention.",
    commonMistakes: [
      "Treating the visible action as the entire habit",
      "Ignoring the emotional job the habit performs",
      "Replacing a habit with a behavior that does not satisfy the craving"
    ],
    misconceptions: [
      {
        misconception: "Bad habits are simply irrational.",
        correction:
          "Many bad habits are effective short-term solutions with costly long-term consequences."
      }
    ],
    reflection:
      "Which habit makes more sense when you view it as an attempt to change your internal state?",
    exercises: [
      "Map one habit loop in writing.",
      "Name the craving behind the behavior.",
      "Design one replacement that satisfies the craving with fewer downstream costs."
    ],
    anchors: [
      "Cue predicts. Craving wants. Response acts. Reward teaches.",
      "Change the loop, not just the visible behavior."
    ],
    takeaways: [
      "Habits are feedback loops.",
      "Cravings often reveal the emotional function of a habit.",
      "The four laws intervene at different points in the loop."
    ],
    examples: [
      "Checking email can be a craving for certainty.",
      "Late-night scrolling can be a craving for decompression.",
      "Exercise can become a reward loop when it reliably creates relief and identity proof."
    ],
    relatedSections: ["make-it-obvious", "breaking-bad-habits"]
  }),
  chapter({
    id: "make-it-obvious",
    title: "Make It Obvious",
    eyebrow: "First Law",
    minutes: 34,
    summary:
      "The first law is about cues: make good habits visible, specific, and attached to contexts where action can actually happen.",
    objectives: [
      "Use cues to make good habits easier to remember",
      "Understand implementation intentions and habit stacking",
      "Design environments where the desired action is visible at the right moment"
    ],
    concepts: ["cue design", "implementation intentions", "habit stacking", "environment design"],
    body: [
      "A habit that is not cued has to be remembered from scratch. That is a fragile arrangement. The modern day is full of competing signals, and attention is not a neutral field. What is visible, urgent, nearby, or socially reinforced gets an advantage. The first law, make it obvious, is about giving the desired behavior a clear signal before the moment passes.",
      "This begins with awareness. Many habits are invisible because they have become automatic. A habit scorecard helps by turning the day into something you can inspect. You list recurring actions and notice whether each one supports, harms, or has little effect on the person you want to become. The point is not self-judgment. The point is seeing the routine clearly enough to edit it.",
      "Once you can see the routine, you can make new behaviors more specific. Implementation intentions do this by defining when and where the behavior will happen. I will read more is weak because it leaves the day to decide. I will read for fifteen minutes at the kitchen table after breakfast gives the behavior a time, place, and beginning.",
      "Habit stacking adds another layer. Instead of asking a new behavior to float somewhere in the day, you attach it to a reliable existing behavior: after I pour coffee, I will review the day's priority; after I brush my teeth, I will stretch; after I close my laptop, I will reset my desk. The existing habit becomes the cue for the new one.",
      "Environment design is the physical version of the same principle. Put the book where reading should happen. Put the running shoes by the door. Put the guitar on a stand instead of in a case. Remove or hide cues that pull the opposite direction. The environment should remember the habit before you have to.",
      "The nuance is that obvious does not mean noisy. A dozen reminders become clutter. A good cue is placed in the context where the behavior can begin. The mat beside the bed works better than a generic phone notification because the cue is where the action happens.",
      "Clarity beats vague intention because vague intention still leaves negotiation alive. If the plan is to work out more, the mind has to decide when, where, how hard, and whether today counts. Each unanswered question is a place for resistance to enter. If the plan is to put on running shoes after brushing teeth and walk for ten minutes before checking messages, the beginning is already decided.",
      "This matters for phone use as much as it matters for good habits. If the phone is the most obvious object in the bedroom, the environment is teaching a habit. If the book is hidden and the phone is glowing, the room has made a recommendation. Habit change often begins by noticing that your environment already has a curriculum. It is teaching you what to notice, what to reach for, and what to repeat.",
      "A practical habit scorecard should be small enough to complete honestly. Do not audit your entire life on the first attempt. Audit the first hour after waking, the first hour after work, or the last thirty minutes before sleep. Look for the moment where the routine changes direction. Often one cue, not the entire day, is the leverage point."
    ],
    support: [
      {
        type: "framework",
        title: "Make it obvious toolkit",
        stages: [
          {
            name: "Scorecard",
            description:
              "Make current routines visible before choosing what to change."
          },
          {
            name: "Intention",
            description:
              "Specify when and where the behavior will happen."
          },
          {
            name: "Stack",
            description:
              "Attach the new behavior to an existing reliable anchor."
          },
          {
            name: "Environment",
            description:
              "Place the cue where the behavior should begin and remove competing cues."
          }
        ]
      },
      {
        type: "expandedExample",
        scenario: "Redesigning a morning routine for reading and planning.",
        defaultApproach:
          "Wake up, check the phone, react to messages, and hope to read later.",
        betterApproach:
          "Charge the phone outside the bedroom, place the book beside coffee, and stack planning after the first cup: after I pour coffee, I read ten pages and write the day's top priority.",
        whyItWorks:
          "The desired actions become visible before reactive cues take control of the morning."
      },
      {
        type: "misconception",
        misconception: "If a habit matters, I should remember it.",
        correction:
          "Important habits deserve designed cues because attention is limited and the day is crowded.",
        whyItMatters:
          "This shifts the solution from self-blame to cue design."
      },
      {
        type: "exercise",
        title: "Design one obvious cue",
        instructions:
          "Choose one habit and give it a specific time, place, anchor, and visible cue.",
        prompts: [
          "When and where will this happen?",
          "What existing habit can it follow?",
          "What object or signal should be visible in that location?"
        ]
      }
    ],
    whyThisMatters:
      "Many good habits fail because they are invisible until the opportunity has already passed.",
    practicalApplication:
      "Create one implementation intention, attach it to an existing routine, and place a physical cue in the exact context where the habit should begin.",
    commonMistakes: [
      "Using vague reminders instead of contextual cues",
      "Choosing an anchor that is not actually reliable",
      "Adding good-habit cues while leaving stronger bad-habit cues unchanged"
    ],
    misconceptions: [
      {
        misconception: "Cue design is just reminder management.",
        correction:
          "Cue design is attention architecture: arranging the environment so the right behavior comes to mind at the right time."
      }
    ],
    reflection:
      "Which useful behavior is currently invisible in the moment when it should happen?",
    exercises: [
      "Create a habit scorecard for one hour of your day.",
      "Write one implementation intention.",
      "Place one physical cue where the behavior starts."
    ],
    anchors: [
      "Make the cue visible where the behavior begins.",
      "The environment can remember for you."
    ],
    takeaways: [
      "Obvious cues reduce dependence on memory.",
      "Implementation intentions make vague goals executable.",
      "Habit stacking gives new behaviors a place in the day."
    ],
    examples: [
      "Put a book on the chair where you drink coffee.",
      "After closing your laptop, reset the desk for tomorrow.",
      "After sitting on the train, open the saved curriculum lesson."
    ],
    relatedSections: ["habit-loop", "make-it-easy"]
  }),
  chapter({
    id: "make-it-attractive",
    title: "Make It Attractive",
    eyebrow: "Second Law",
    minutes: 31,
    summary:
      "The second law is about desire: make good habits more appealing and reduce the pull of habits that create long-term costs.",
    objectives: [
      "Understand attraction as anticipated reward",
      "Use dopamine, pairing, and social norms without cheapening the habit",
      "Make useful behaviors emotionally easier to approach"
    ],
    concepts: ["anticipation", "temptation bundling", "social norms", "desire"],
    body: [
      "A behavior becomes easier to repeat when the brain expects it to be rewarding. This is the heart of the second law. The reward does not have to be dramatic. It might be relief, beauty, progress, belonging, control, or identity proof. But some form of attraction needs to be present, especially when the long-term benefit is delayed.",
      "Desire often begins before the behavior. A cue predicts a reward, and the anticipation of that reward creates pull. This is why the sight of a phone can create the urge to check it, why a notification can feel magnetic, and why a prepared reading chair can invite study. The cue has learned to promise a state change.",
      "Good habit design can use this mechanism. A study ritual can become more attractive when paired with a calm space, a good pen, a visible progress log, or a respected community of learners. Exercise can become more attractive when the first reward is immediate relief rather than a distant body transformation. Saving money can become more attractive when each transfer is framed as buying future options rather than losing present pleasure.",
      "Temptation bundling is one practical tool: pair a needed behavior with something you already enjoy. Listen to a favorite podcast only while walking. Drink a favorite tea only while doing weekly planning. The pairing works best when the reward supports the habit rather than stealing attention from it. A podcast can pair with walking; it usually pairs poorly with deep reading.",
      "Social environment also shapes attraction. People imitate what is normal, admired, and rewarded in groups they care about. If your peers treat deep study as strange, it will feel harder to sustain. If you spend time around people who take ideas seriously, careful reading becomes socially reinforced. The same is true for money, health, work, and relationships.",
      "The nuance is that attractiveness should not become entertainment at all costs. The goal is not to make every useful behavior constantly pleasurable. The goal is to make the behavior approachable enough to repeat while preserving its integrity. Serious habits can be satisfying without becoming shallow.",
      "Dopamine is often discussed casually, but the practical lesson is about anticipation. The brain learns what cues predict rewarding states. If opening a social app reliably predicts novelty, the icon itself starts to create pull. If the gym reliably predicts embarrassment or exhaustion, the cue creates avoidance. If a study desk predicts calm progress, the desk becomes more inviting. The emotional history of a cue matters.",
      "To make a good habit attractive, change what the habit predicts. A workout can predict relief and energy rather than punishment. A money review can predict control rather than guilt. A reading session can predict intellectual momentum rather than obligation. The behavior does not have to become easy in every moment; it has to become emotionally approachable enough that beginning is not a constant fight.",
      "The people around you shape this prediction system. If your social feed rewards outrage, distraction becomes attractive. If your peers admire craft, practice becomes attractive. If your household treats sleep as optional, sleep discipline feels strange. Attraction is not only personal preference; it is socially trained. A serious habit often becomes easier when you spend more time near people who make that habit feel normal."
    ],
    support: [
      {
        type: "callout",
        title: "Attraction principle",
        text: "The brain moves toward behaviors it expects will create a desirable state change."
      },
      {
        type: "expandedExample",
        scenario: "Building a reading habit that feels inviting rather than punitive.",
        defaultApproach:
          "Treat reading as a duty and force long sessions in a distracting room.",
        betterApproach:
          "Create a quiet reading ritual, keep notes visible, join a serious reading group, and end each session by capturing one idea worth using.",
        whyItWorks:
          "The habit gains emotional appeal through environment, identity, social reinforcement, and immediate progress."
      },
      {
        type: "keyDistinction",
        title: "Attractive is not the same as entertaining",
        not: "Turning every good habit into a dopamine-maximized distraction.",
        but: "Adding enough immediate meaning, progress, or satisfaction that the habit becomes easier to approach."
      },
      {
        type: "exercise",
        title: "Add legitimate attraction",
        instructions:
          "Choose a useful habit you avoid and add one source of appeal that does not undermine it.",
        prompts: [
          "What makes the habit feel aversive right now?",
          "What reward would support the habit rather than distract from it?",
          "What social or environmental cue could make the behavior feel more normal?"
        ]
      }
    ],
    whyThisMatters:
      "Useful habits often have delayed rewards, so they need near-term emotional support if they are going to survive ordinary resistance.",
    practicalApplication:
      "Pair a useful behavior with an aligned reward, make progress visible, and increase exposure to people or environments where the desired behavior is normal.",
    commonMistakes: [
      "Assuming serious habits should feel punishing",
      "Choosing rewards that distract from or contradict the habit",
      "Ignoring social environments that make the bad habit more attractive"
    ],
    misconceptions: [
      {
        misconception: "If I make a habit attractive, I am making it less serious.",
        correction:
          "A serious habit can be designed to feel meaningful, satisfying, and worth returning to."
      }
    ],
    reflection:
      "Which good habit do you resist because it has no immediate emotional reward?",
    exercises: [
      "Create one temptation bundle for a low-cognitive habit.",
      "Name one social environment that makes your desired habit more normal.",
      "Remove one cue that makes the competing habit more attractive."
    ],
    anchors: [
      "Anticipation creates desire.",
      "Make the habit worth approaching, not merely worth admiring."
    ],
    takeaways: [
      "Attraction is anticipated reward.",
      "Temptation bundling works when the reward is compatible.",
      "Social norms can make habits easier or harder to repeat."
    ],
    examples: [
      "Listen to a favorite interview only while walking.",
      "Study in a room that feels calm and intentional.",
      "Join a group where saving, training, reading, or deep work is normal."
    ],
    relatedSections: ["habit-loop", "make-it-satisfying"]
  }),
  chapter({
    id: "make-it-easy",
    title: "Make It Easy",
    eyebrow: "Third Law",
    minutes: 34,
    summary:
      "The third law is about friction: reduce the activation cost of good habits and increase the cost of bad ones.",
    objectives: [
      "Understand why ease predicts repetition",
      "Use friction and convenience intentionally",
      "Apply the two-minute rule without trivializing serious goals"
    ],
    concepts: ["friction", "convenience", "two-minute rule", "activation energy"],
    body: [
      "The third law is where habit design becomes especially practical. People often assume a habit fails because they lack motivation. Sometimes that is true. More often, the behavior is simply too hard to start under real conditions. The tools are in another room. The document is not open. The workout requires too much setup. The healthy meal is less convenient than the delivery app.",
      "Friction is any step, delay, decision, search, setup, or emotional cost between cue and response. The more friction a behavior has, the less likely it is to happen when energy is low. This is not weakness; it is how behavior works. Convenience is behavioral power.",
      "The solution is to make the desired action the path of least resistance. Prepare the gym bag before the morning. Open the writing document before ending work. Put the healthy food at eye level. Remove saved cards from shopping sites. Keep the guitar on a stand. The point is not to eliminate effort from life, but to spend effort where it matters instead of wasting it at the starting line.",
      "The two-minute rule fits here. Scale a new habit down until the entry point takes roughly two minutes: read one page, put on running shoes, open the draft, sit on the meditation cushion. This can sound unserious until you understand its purpose. The two-minute habit is not the final ambition. It is the doorway. You are training the start.",
      "Once starting becomes reliable, the habit can grow. But many people try to scale before the entry behavior is stable. They design the heroic version first and then wonder why it collapses. A serious habit often needs an easy entrance precisely because the larger behavior matters.",
      "Ease also applies to breaking bad habits, but in reverse. Add friction before the vulnerable moment. Charge the phone outside the bedroom. Log out of tempting apps. Keep snack foods inconvenient. Add a waiting period before purchases. Friction creates space for intention to return.",
      "Activation energy is especially visible in creative and professional work. The hard part of deep work is often not the second hour; it is crossing the threshold into focus. If the document is closed, the desk is cluttered, the next task is vague, and communication tools are open, the start is expensive. If the document is open, the next sentence is identified, and messages are blocked for the first interval, the same person may appear far more disciplined.",
      "Convenience should be treated as a design force, not a moral category. Autopay, automatic transfers, prepared meals, calendar defaults, and pre-packed bags can all serve worthwhile goals. One-click shopping, autoplay, app badges, and food delivery shortcuts can serve impulses. The question is not whether convenience is good or bad. The question is which behavior you have made convenient.",
      "Consistency beats intensity early because the system is still learning. A difficult workout performed once does less for the habit than a manageable workout repeated long enough to become normal. A huge study session may create exhaustion, while a repeatable study block creates identity and rhythm. Intensity can come later; first the habit needs a reliable doorway."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Friction design",
        columns: ["Behavior", "Reduce friction", "Add friction"],
        rows: [
          ["Reading", "Place book where the routine starts", "Keep phone outside the room"],
          ["Exercise", "Pack clothes the night before", "Remove easy excuses by scheduling with a friend"],
          ["Spending", "Automate saving first", "Remove saved cards and add a waiting period"],
          ["Deep work", "Open the document in advance", "Block communication tools for the first interval"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "Starting a writing habit when the blank page feels heavy.",
        defaultApproach:
          "Schedule a three-hour writing session and avoid it because the emotional cost is high.",
        betterApproach:
          "Open the draft at the end of the previous day and begin tomorrow by writing one rough sentence.",
        whyItWorks:
          "The entry point is small enough to begin, and once motion starts, continuation becomes more likely."
      },
      {
        type: "exercise",
        title: "Redesign the first two minutes",
        instructions:
          "Choose one avoided habit and make only the beginning easier.",
        prompts: [
          "What is the true first action?",
          "What setup can happen before the habit window?",
          "What bad habit needs added friction before the vulnerable moment?"
        ]
      }
    ],
    whyThisMatters:
      "Many valuable behaviors die before they begin because the first step is too expensive under ordinary conditions.",
    practicalApplication:
      "Prepare the environment in advance, shrink the entry point, remove setup decisions, and add friction to competing behaviors.",
    commonMistakes: [
      "Designing the heroic version before the repeatable version",
      "Calling an easy start unserious",
      "Adding friction after the bad habit has already begun"
    ],
    misconceptions: [
      {
        misconception: "Easy habits are low standards.",
        correction:
          "Easy starts are entry points. They help serious behaviors happen consistently enough to grow."
      }
    ],
    reflection:
      "Which habit would change if you designed the first two minutes instead of the full ideal session?",
    exercises: [
      "Define the two-minute version of one habit.",
      "Prepare one tool or environment before the habit window.",
      "Add one unit of friction to a competing behavior."
    ],
    anchors: [
      "Make the start easy enough to repeat.",
      "Spend friction where you want hesitation."
    ],
    takeaways: [
      "Ease predicts repetition.",
      "The two-minute rule trains the start.",
      "Friction can be removed for good habits and added to bad ones."
    ],
    examples: [
      "Open the lesson before the study block begins.",
      "Pack the gym bag before morning energy is tested.",
      "Remove delivery apps from the home screen before evening hunger arrives."
    ],
    relatedSections: ["make-it-obvious", "breaking-bad-habits"]
  }),
  chapter({
    id: "make-it-satisfying",
    title: "Make It Satisfying",
    eyebrow: "Fourth Law",
    minutes: 30,
    summary:
      "The fourth law is about reinforcement: good habits need immediate satisfaction because many of their most important rewards arrive late.",
    objectives: [
      "Understand why immediate feedback reinforces habits",
      "Use tracking and aligned rewards without becoming rigid",
      "Bridge the gap between delayed outcomes and present effort"
    ],
    concepts: ["reinforcement", "immediate rewards", "tracking", "delayed outcomes"],
    body: [
      "Good habits often suffer from a timing problem. Their costs arrive now while their benefits arrive later. Exercise costs effort now; health arrives later. Studying costs attention now; expertise arrives later. Saving money costs present spending power; freedom arrives later. Bad habits often reverse the timing: the reward is immediate and the cost is delayed.",
      "The fourth law solves part of this problem by making good habits satisfying in the present. Satisfaction does not have to mean indulgence. It can mean checking a box, seeing a streak, feeling the room reset, watching a savings chart rise, or writing one sentence that captures what you learned. The reward should reinforce the habit rather than contradict it.",
      "Habit tracking is powerful because it makes invisible consistency visible. A mark on a calendar gives immediate feedback. A completed lesson count shows progress. A simple log turns effort into evidence. Tracking also makes patterns easier to review. You can see whether the habit is actually happening rather than relying on emotional memory.",
      "But tracking has a shadow side. If the tracker becomes a perfection scoreboard, it can turn one miss into shame. The point is not to worship the streak. The point is to create feedback, satisfaction, and repair. A missed day is not a verdict; it is information. The useful question is what broke: cue, craving, response, reward, friction, or context?",
      "Immediate rewards should be aligned. Rewarding a workout with behavior that undermines health may teach the wrong lesson. Rewarding a savings transfer with impulsive spending can erase the habit's meaning. Better rewards point in the same direction: visible progress, a recovery ritual, a clean reset, or a moment of identity recognition.",
      "This law is especially important for learning. The payoff of study is often delayed, so the learner needs immediate signals: a recall question answered, an idea applied, a note connected, a concept explained. The mind needs to feel that attention produced something usable.",
      "Delayed outcomes create an emotional mismatch. The rational part of you may know that sleep, saving, training, and study matter. The habit system still learns from what happens soon after action. If the only reward is months away, the behavior asks a lot from patience. A visible tracker, a short reflection, a cleaner room, or a sense of closure can bridge that timing gap.",
      "Obsessive tracking usually happens when the metric becomes more important than the behavior it was meant to support. Step counts can replace health judgment. Reading streaks can replace comprehension. Budget categories can replace thoughtful financial choices. The measure should serve the habit, not become the habit. If tracking increases anxiety and reduces learning, simplify it.",
      "A satisfying habit does not need constant celebration. Often the best reward is quiet evidence: I kept the promise, I returned after a miss, I made progress visible, I can trust this system a little more. That kind of satisfaction is mature. It reinforces identity without turning habit change into a prize economy."
    ],
    support: [
      {
        type: "callout",
        title: "Reward alignment",
        text: "A good reward makes the habit feel complete without teaching the opposite behavior."
      },
      {
        type: "expandedExample",
        scenario: "Making a savings habit satisfying before wealth is visible.",
        defaultApproach:
          "Rely on distant financial security to motivate a behavior that feels like present deprivation.",
        betterApproach:
          "Automate a transfer, watch a visible freedom fund grow, and treat each deposit as proof that future options are being protected.",
        whyItWorks:
          "The reward becomes immediate identity evidence rather than a distant abstraction."
      },
      {
        type: "exercise",
        title: "Design an aligned reward",
        instructions:
          "Add immediate satisfaction to a habit without undermining the behavior.",
        prompts: [
          "What delayed benefit does this habit create?",
          "What immediate signal could represent progress?",
          "What reward would accidentally teach the wrong behavior?"
        ]
      }
    ],
    whyThisMatters:
      "Behaviors that feel satisfying now are easier to repeat, especially when the largest benefits are delayed.",
    practicalApplication:
      "Use a simple tracker, visible progress, and aligned completion rituals to reinforce good habits without turning tracking into self-punishment.",
    commonMistakes: [
      "Waiting for distant outcomes to provide all motivation",
      "Using rewards that undermine the habit",
      "Treating a broken streak as a broken identity"
    ],
    misconceptions: [
      {
        misconception: "Tracking is about perfection.",
        correction:
          "Good tracking is about feedback, visibility, satisfaction, and repair."
      }
    ],
    reflection:
      "Which good habit needs a better present-tense reward to survive long enough for delayed benefits to arrive?",
    exercises: [
      "Create one visible progress signal.",
      "Define one aligned reward for completion.",
      "Write a recovery rule for the first missed day."
    ],
    anchors: [
      "Immediate satisfaction teaches repetition.",
      "Track to see, not to shame."
    ],
    takeaways: [
      "Good habits need present feedback.",
      "Tracking makes consistency visible.",
      "Rewards should reinforce the identity behind the habit."
    ],
    examples: [
      "Answer one recall question after a lesson.",
      "Mark a calendar after a walk.",
      "Move money to savings and update a visible progress chart."
    ],
    relatedSections: ["make-it-attractive", "advanced-habit-design"]
  }),
  chapter({
    id: "breaking-bad-habits",
    title: "Breaking Bad Habits",
    eyebrow: "Inversion",
    minutes: 31,
    summary:
      "Bad habits are weakened by inverting the four laws: make them invisible, unattractive, difficult, and unsatisfying.",
    objectives: [
      "Apply the inverse four laws to unwanted behaviors",
      "Understand the job a bad habit performs",
      "Design replacements instead of relying only on suppression"
    ],
    concepts: ["inversion", "replacement behavior", "friction", "craving"],
    body: [
      "Bad habits are not usually random. They persist because they work in the short term. They provide relief, stimulation, comfort, certainty, belonging, avoidance, or a feeling of control. The problem is that their long-term consequences are often misaligned with the life the person wants.",
      "The mistake is trying to delete the behavior without understanding the job it performs. If late-night scrolling provides decompression, deleting apps may help, but decompression still needs a place to go. If impulsive spending provides status or emotional relief, a budget alone may not address the craving. If procrastination provides escape from ambiguity, the task itself needs a clearer first step.",
      "The inversion of the four laws gives a practical structure. Make it invisible: remove or reduce cues. Make it unattractive: change the story and make the real cost visible. Make it difficult: add friction before the vulnerable moment. Make it unsatisfying: add accountability, remove the reward, or make the aftermath more visible.",
      "Replacement is essential. A bad habit leaves a vacancy. If the replacement does not satisfy the underlying craving, the old behavior remains the most efficient path to the desired state. The goal is not merely to stop scrolling; it may be to recover. Not merely to stop snacking; perhaps to rest. Not merely to stop avoiding a project; perhaps to clarify the next action.",
      "Breaking bad habits is therefore an act of design, not just restraint. You are redesigning cues, friction, rewards, and emotional pathways so the old loop becomes less automatic and a better loop becomes more available.",
      "This approach is humane because it treats the behavior as understandable without pretending it is harmless. You can take responsibility for redesigning the system without turning every bad habit into a moral failure.",
      "Shame is a weak system because it often increases the emotional state that the bad habit was managing in the first place. If someone scrolls to escape stress, feeling ashamed about scrolling may create more stress and therefore more desire to escape. If someone overspends to feel status or relief, shame can make the spending more secretive rather than more thoughtful. Shame may create a temporary jolt, but it rarely creates a stable alternative loop.",
      "Phone use is a clean example. The cue might be boredom, a notification, or the phone sitting face-up on the desk. To make the habit invisible, remove badges and keep the phone away during focus blocks. To make it unattractive, notice the cost: fragmented attention and lower-quality work. To make it difficult, require a longer unlock path or app blocker. To make it unsatisfying, review screen time honestly. Then install a replacement: a short walk, a written task list, or a scheduled message check.",
      "Junk food, procrastination, and overspending follow the same logic. Do not rely on willpower while leaving the cue untouched and the alternative unclear. Keep snack foods out of the most visible spaces, define the next two minutes of the avoided task, remove saved payment details, or create a 24-hour purchase rule. The goal is to slow the old loop and make the better loop easier to choose."
    ],
    support: [
      {
        type: "framework",
        title: "The inversion method",
        stages: [
          {
            name: "Invisible",
            description: "Remove the cue or keep it out of the vulnerable context."
          },
          {
            name: "Unattractive",
            description: "Make the real cost more vivid than the short-term reward."
          },
          {
            name: "Difficult",
            description: "Add steps, distance, waiting periods, or accountability."
          },
          {
            name: "Unsatisfying",
            description: "Reduce the reward and increase honest feedback."
          }
        ]
      },
      {
        type: "expandedExample",
        scenario: "Stopping late-night scrolling.",
        defaultApproach:
          "Tell yourself not to scroll while keeping the phone beside the bed after a stressful day.",
        betterApproach:
          "Charge the phone outside the bedroom, use a separate alarm, plan a decompression ritual, and place a low-effort book on the nightstand.",
        whyItWorks:
          "The cue is removed, friction is added, and the underlying need for recovery receives a better path."
      },
      {
        type: "exercise",
        title: "Invert one unwanted loop",
        instructions:
          "Choose one bad habit and redesign it through the inverse four laws.",
        prompts: [
          "What cue can be removed or hidden?",
          "What craving does the habit satisfy?",
          "What replacement can satisfy that craving with fewer costs?"
        ]
      }
    ],
    whyThisMatters:
      "Bad habits are often well-designed for immediate reward. They need counter-design, not just stronger intentions.",
    practicalApplication:
      "Map the loop, identify the craving, remove cues, add friction, and install a replacement behavior that solves the same underlying need more cleanly.",
    commonMistakes: [
      "Removing a behavior without replacing its emotional function",
      "Adding friction too late in the loop",
      "Treating the bad habit as irrational instead of understanding its short-term reward"
    ],
    misconceptions: [
      {
        misconception: "Breaking a bad habit is mainly about wanting change badly enough.",
        correction:
          "Desire matters, but the loop must be redesigned for moments when desire is not enough."
      }
    ],
    reflection:
      "What unwanted habit are you trying to remove without replacing the job it performs?",
    exercises: [
      "Write the cue, craving, response, and reward of one bad habit.",
      "Apply the inverse four laws.",
      "Choose a replacement behavior that satisfies the real craving."
    ],
    anchors: [
      "Make bad habits invisible, unattractive, difficult, and unsatisfying.",
      "Replace the job, not just the behavior."
    ],
    takeaways: [
      "Bad habits often solve real short-term needs.",
      "The inverse laws create practical intervention points.",
      "Replacement is more durable than suppression alone."
    ],
    examples: [
      "Remove social media cues before the evening begins.",
      "Add a 24-hour waiting period before discretionary purchases.",
      "Replace stress snacking with a decompression walk or written worry list."
    ],
    relatedSections: ["habit-loop", "make-it-easy"]
  }),
  chapter({
    id: "systems-over-goals",
    title: "Systems Over Goals",
    eyebrow: "Strategy",
    minutes: 30,
    summary:
      "Goals provide direction, but systems determine whether progress becomes repeatable.",
    objectives: [
      "Understand why goals are useful but insufficient",
      "Convert outcomes into repeatable systems",
      "Use identity, process, and review to sustain progress"
    ],
    concepts: ["systems", "goals", "process", "review"],
    body: [
      "Atomic Habits is often summarized as systems over goals, but that phrase needs nuance. Goals are not useless. They clarify direction. A goal can tell you what matters, what standard you are aiming for, and what outcome would count as progress. The problem is treating the goal as the plan.",
      "Many people who succeed and fail share similar goals. Competing athletes want to win. Entrepreneurs want revenue. Students want high scores. Professionals want advancement. The difference is usually not the existence of a goal but the quality of the system that repeatedly produces behavior.",
      "A system includes the recurring actions, environment, feedback loops, review cadence, and identity that make progress likely. If the goal is to write a book, the system is the protected writing block, the note capture process, the editing rhythm, and the review of pages produced. If the goal is to learn, the system is the reading habit, recall practice, application notes, and spaced review.",
      "Goals can also create a finish-line problem. If the behavior exists only to reach a target, the behavior may disappear once the target is reached. Systems keep value in the process. The person who exercises only to hit a number may stop after reaching it. The person who sees themselves as someone who trains has a reason to continue.",
      "The practical move is to translate every important goal into a weekly operating system. What behavior repeats? When does it happen? What environment supports it? What feedback shows whether it is working? What review question keeps it adaptive? Without those answers, the goal may create pressure but not movement.",
      "A good system should be small enough to run and serious enough to matter. Overly elaborate systems collapse under their own weight. The best system is often a simple set of repeated behaviors with honest feedback.",
      "In career terms, a goal might be to become a stronger operator, writer, manager, or investor. The system is the repeated practice that builds that capability: a weekly decision review, a daily writing block, a recurring one-on-one preparation ritual, or a monthly investment memo. The goal names the capability. The system creates the evidence.",
      "In money, the goal might be to build wealth or eliminate debt. The system is payday automation, spending friction, a weekly review, and a rule for windfalls. In health, the goal might be strength or better sleep. The system is scheduled training, prepared meals, a consistent wind-down cue, and recovery after disruptions. In learning, the goal might be mastery. The system is reading, recall, application, and spaced review.",
      "The weekly operating system is where goals become real. It should fit on a calendar and survive an ordinary week. If you cannot identify when the behavior happens, what triggers it, and how it is reviewed, the goal is still mostly an aspiration. The system is the bridge from desired future to repeated present."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Goal vs system",
        not: "The goal is the plan.",
        but: "The goal is the direction; the system is what repeats."
      },
      {
        type: "expandedExample",
        scenario: "A professional wants to become more strategic.",
        defaultApproach:
          "Set a vague annual goal to think more strategically.",
        betterApproach:
          "Schedule a weekly decision review, read one industry memo, and write one synthesis note every Friday.",
        whyItWorks:
          "The system turns a desired capability into repeated behavior and feedback."
      },
      {
        type: "exercise",
        title: "Convert a goal into a system",
        instructions:
          "Choose one goal and translate it into a weekly operating rhythm.",
        prompts: [
          "What behavior would make this goal more likely?",
          "When will that behavior repeat?",
          "What feedback will you review weekly?"
        ]
      }
    ],
    whyThisMatters:
      "A goal can inspire action once, but a system can produce action repeatedly.",
    practicalApplication:
      "For one important goal, define the recurring behavior, cue, environment, feedback measure, and weekly review question.",
    commonMistakes: [
      "Treating the target as the method",
      "Building a system too complex to repeat",
      "Ignoring identity and feedback after setting the goal"
    ],
    misconceptions: [
      {
        misconception: "Systems over goals means goals do not matter.",
        correction:
          "Goals set direction. Systems make movement repeatable."
      }
    ],
    reflection:
      "Which goal in your life has a destination but no operating system?",
    exercises: [
      "Write one goal.",
      "Define the weekly behavior that supports it.",
      "Create one review question for the system."
    ],
    anchors: [
      "Goals point. Systems move.",
      "The plan is what repeats."
    ],
    takeaways: [
      "Goals provide direction but not execution.",
      "Systems include behavior, environment, feedback, and review.",
      "Identity helps systems continue after targets are reached."
    ],
    examples: [
      "A learning goal becomes a reading, recall, and review system.",
      "A money goal becomes payday automation and a weekly review.",
      "A career goal becomes a recurring output and feedback cadence."
    ],
    relatedSections: ["identity-based-change", "advanced-habit-design"]
  }),
  chapter({
    id: "advanced-habit-design",
    title: "Advanced Habit Design in Real Life",
    eyebrow: "Integration",
    minutes: 34,
    summary:
      "Advanced habit design means using the four laws diagnostically and building systems that survive disruption, plateaus, and changing seasons.",
    objectives: [
      "Use the four laws as a diagnostic framework",
      "Understand plateaus and delayed results",
      "Build recovery rules and seasonal habit systems"
    ],
    concepts: ["diagnosis", "plateaus", "recovery", "seasonal focus"],
    body: [
      "The beginner asks, How do I get motivated? The more advanced practitioner asks, Which part of the system is failing? If the behavior is forgotten, the cue may be weak. If the behavior is resisted, the craving may not be attractive enough. If the behavior is delayed, the response may be too hard. If the behavior does not repeat, the reward may be too thin or too delayed.",
      "This diagnostic posture is one of the strongest ways to use the book. Instead of restarting the same habit with more intensity, you inspect the loop. Maybe the reading habit failed because the book was not visible. Maybe the workout failed because the first step required too much setup. Maybe the budget failed because saving was invisible and spending was vivid. The solution depends on the failure point.",
      "Real life also includes plateaus. Progress often hides beneath the surface before it becomes visible. Learning, fitness, reputation, trust, and creative skill all have delayed results. The danger is quitting a good system because the final outcome has not appeared. The countermeasure is tracking leading indicators: repetitions, pages, recall, practice sessions, conversations, drafts, saved dollars.",
      "At the same time, patience should not become denial. If leading indicators are poor, redesign the system. If leading indicators are improving but outcomes lag, keep going long enough for stored effort to express itself. The skill is knowing whether a plateau needs persistence or adjustment.",
      "Consistency should also be understood realistically. The goal is not a flawless streak. The goal is rapid return. A resilient habit includes a minimum version and a recovery rule. Never missing twice is less about moral discipline and more about preventing one miss from becoming a new pattern.",
      "Advanced habit design often means fewer habits, not more. Choose a seasonal keystone behavior, design it through the four laws, track one leading indicator, and review it weekly. A single well-designed habit can improve an entire domain because it changes the operating rhythm around it.",
      "Real life will stress every habit system. Travel disrupts cues. Illness lowers capacity. Busy seasons compress time. Family responsibilities change the available environment. A rigid system interprets these disruptions as failure. A flexible system has modes: full version, minimum version, travel version, recovery version. The identity remains stable even when the expression changes.",
      "Never missing twice is useful because it prevents drift, not because two misses are morally catastrophic. The first miss is often life. The second miss can become the beginning of a new default. A recovery rule keeps the habit from depending on emotional interpretation. You already know what to do after a miss because the system decided in advance.",
      "Avoiding all-or-nothing thinking is a serious habit skill. If the full workout is impossible, the ten-minute version still protects the pattern. If the full study session is impossible, one recall question still keeps the identity alive. If the full budget review is impossible, checking the account and categorizing one transaction may be enough to return. Flexible systems keep contact with the behavior."
    ],
    support: [
      {
        type: "framework",
        title: "Habit diagnosis questions",
        stages: [
          {
            name: "Cue",
            description: "Is the behavior obvious in the right context?"
          },
          {
            name: "Craving",
            description: "Does the behavior feel worth approaching?"
          },
          {
            name: "Response",
            description: "Is the first step easy enough under real conditions?"
          },
          {
            name: "Reward",
            description: "Is there immediate feedback that reinforces repetition?"
          }
        ]
      },
      {
        type: "expandedExample",
        scenario: "Recovering after missing a workout while traveling.",
        defaultApproach:
          "Treat the missed session as proof the plan failed and wait for a perfect restart.",
        betterApproach:
          "Use the minimum version the next morning, such as ten minutes of bodyweight movement, then resume the normal plan when home.",
        whyItWorks:
          "The recovery behavior protects identity and prevents disruption from becoming abandonment."
      },
      {
        type: "exercise",
        title: "Design a recovery rule",
        instructions:
          "Choose one habit and decide what happens after the first miss.",
        prompts: [
          "What is the minimum viable version?",
          "When will you do it after a miss?",
          "What will you inspect without self-attack?"
        ]
      }
    ],
    whyThisMatters:
      "Habits fail in predictable ways. A diagnostic approach lets you redesign the system instead of repeatedly blaming yourself.",
    practicalApplication:
      "Choose one keystone habit for the next month, design it through the four laws, track one leading indicator, and review misses as data.",
    commonMistakes: [
      "Trying to optimize every habit at once",
      "Changing multiple variables before learning what failed",
      "Treating a missed day as identity evidence"
    ],
    misconceptions: [
      {
        misconception: "Advanced habit design means complex routines.",
        correction:
          "Advanced design usually means clearer loops, better recovery, and more disciplined review."
      }
    ],
    reflection:
      "What habit needs diagnosis and recovery rules more than it needs another motivational restart?",
    exercises: [
      "Run the four-law diagnosis on one habit.",
      "Define a minimum viable version.",
      "Schedule a weekly review for the next four weeks."
    ],
    anchors: [
      "Diagnose the loop before restarting the habit.",
      "Consistency is the skill of returning quickly."
    ],
    takeaways: [
      "The four laws are diagnostic tools.",
      "Plateaus require leading indicators.",
      "Recovery rules make habits resilient."
    ],
    examples: [
      "Track recall questions before judging whether studying works.",
      "Use a minimum workout after travel disruption.",
      "Choose deep work as a seasonal keystone instead of adding ten new routines."
    ],
    relatedSections: ["make-it-satisfying", "systems-over-goals"]
  }),
  chapter({
    id: "applied-habit-playbooks",
    title: "Applied Habit Playbooks",
    eyebrow: "Application",
    minutes: 38,
    summary:
      "The framework transfers across work, health, learning, money, and relationships because each domain is built from repeated behavior.",
    objectives: [
      "Apply habit design across multiple real-life domains",
      "See how the same principles adapt to different book-specific contexts",
      "Build practical playbooks without forcing every habit into one template"
    ],
    concepts: ["transfer", "domain playbooks", "keystone behaviors"],
    body: [
      "The power of Atomic Habits is that the framework transfers. The same four laws can improve work, health, learning, money, and relationships because all of those domains are shaped by repeated behavior. But transfer does not mean every domain is identical. A finance habit, a relationship habit, and a deep work habit each require different sensitivity to context.",
      "At work, habit design is largely attention design. Most modern work environments make responsiveness obvious and deep work obscure. A good work playbook protects the first high-quality attention block, defines communication windows, prepares the next task before ending the day, and creates a weekly review. The habit is not productivity theater; it is repeated allocation of attention.",
      "In health, the most important design often happens before the vulnerable moment. Plan food before hunger, prepare movement before fatigue, and make sleep cues visible before the evening becomes reactive. A health system designed for ideal energy is incomplete. It has to work for tired, busy, ordinary life.",
      "In learning, the key is turning exposure into retention. Reading is not the same as understanding. A strong learning habit includes recall, compression, and application. After a lesson, write the core idea in one sentence, create a recall question, and apply the idea to a real situation. This makes knowledge usable instead of merely familiar.",
      "In money, the framework helps because financial behavior repeats under emotion, convenience, and status pressure. Automate saving before spending is visible. Add friction to impulsive purchases. Use a weekly review that produces learning rather than shame. Build the identity of someone who protects future options.",
      "In relationships, habits are repeated signals of attention, care, repair, and presence. Put the phone away during the first minutes at home. Send the follow-up message. Hold a weekly check-in. Repair quickly after a miss. The point is not to mechanize affection; it is to create reliable spaces where affection can be expressed.",
      "A reading habit playbook might begin with the identity: I am someone who studies important ideas carefully. The cue is morning coffee or a commute seat. The design is fifteen pages followed by one sentence of compression. Friction is reduced by leaving the book open where the session begins and keeping the phone out of reach. The immediate reward is a growing note archive. The common failure point is reading without recall; the recovery plan is to read one page and write one question on difficult days.",
      "A workout habit playbook begins with the identity: I am someone who trains for energy and capacity. The cue might be putting on shoes after brushing teeth or leaving work. Friction is reduced by packing clothes in advance and choosing a gym or route that is easy to access. The immediate reward is a completed checkmark, better mood, or post-workout reset. The common failure point is an all-or-nothing plan; the recovery plan is a ten-minute minimum session.",
      "A deep work habit playbook begins with the identity: I protect my best attention for work that matters. The cue is opening the laptop or sitting at the desk. The design is a 45- to 90-minute block before communication tools open. Friction is reduced by identifying the first task the day before. The immediate reward is visible output. The failure point is checking messages first; the recovery plan is to restart with one focused interval after the interruption.",
      "A sleep habit playbook begins with the identity: I protect tomorrow's mind tonight. The cue is a fixed evening transition, such as closing the kitchen or setting an alarm. The design is a wind-down routine that lowers light, removes the phone, and repeats a calming sequence. Friction is reduced by preparing the bedroom and charging devices elsewhere. The immediate reward is relief and closure. The failure point is revenge bedtime scrolling; the recovery plan is to return to the wind-down cue the next night without making the miss dramatic.",
      "A money habit playbook begins with the identity: I protect future options. The cue is payday. The design is automatic saving before discretionary spending is visible. Friction is reduced for saving and increased for impulse purchases by removing saved cards or adding a waiting period. The immediate reward is seeing the freedom fund grow. The failure point is emotional spending after stress; the recovery plan is a weekly review focused on learning, not shame.",
      "A phone-reduction playbook begins with the identity: I choose attention deliberately. The cue is entering a focus block, bedroom, or meal. The design is to place the phone outside the context and schedule intentional check windows. Friction is increased through app limits, grayscale, or physical distance. The immediate reward is calmer attention. The failure point is boredom; the recovery plan is a replacement action such as walking, writing the next task, or reading a page.",
      "A skill-learning playbook begins with the identity: I practice before I judge my talent. The cue is a scheduled practice window. The design is a short deliberate session with feedback, not vague exposure. Friction is reduced by preparing the tool and defining the drill. The immediate reward is a visible improvement note. The failure point is practicing only when motivated; the recovery plan is a five-minute drill that preserves contact with the skill."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Domain playbooks",
        columns: ["Domain", "Keystone habit", "Design focus"],
        rows: [
          ["Work", "First deep work block", "Protect attention before reactive tools open"],
          ["Health", "Prepared default meal or walk", "Design for tired, hungry, low-energy moments"],
          ["Learning", "Read, recall, apply", "Turn input into retained knowledge"],
          ["Money", "Payday automation and review", "Make saving default and spending deliberate"],
          ["Relationships", "Transition ritual", "Make care visible in ordinary moments"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "Building a learning habit for serious nonfiction.",
        defaultApproach:
          "Read quickly, highlight heavily, and assume familiarity equals understanding.",
        betterApproach:
          "After each lesson, write one-sentence compression, answer one recall prompt, and record one practical application.",
        whyItWorks:
          "The habit turns reading into retrieval and use, which makes the ideas more durable."
      },
      {
        type: "exercise",
        title: "Choose one domain playbook",
        instructions:
          "Pick one domain and design a keystone habit through cue, response, reward, and review.",
        prompts: [
          "Which domain would benefit most from one reliable habit?",
          "What repeated behavior would create leverage?",
          "How will the four laws shape that behavior?"
        ]
      }
    ],
    whyThisMatters:
      "A framework becomes valuable when it transfers from the page into ordinary decisions, routines, and relationships.",
    practicalApplication:
      "Choose one domain, identify the repeated behavior with the most leverage, and design it through cues, friction, reward, and review.",
    commonMistakes: [
      "Applying the framework too generically without respecting the domain",
      "Choosing too many domain habits at once",
      "Confusing consumption of ideas with application"
    ],
    misconceptions: [
      {
        misconception: "The same habit template works unchanged everywhere.",
        correction:
          "The same principles transfer, but each domain has different cues, rewards, constraints, and risks."
      }
    ],
    reflection:
      "Which domain of your life would change most if one keystone habit became reliable?",
    exercises: [
      "Select one domain: work, health, learning, money, or relationships.",
      "Write the keystone behavior.",
      "Design its cue, easy start, reward, and review."
    ],
    anchors: [
      "Principles transfer; playbooks adapt.",
      "Choose one domain and make one high-leverage behavior reliable."
    ],
    takeaways: [
      "Habit design applies across life domains.",
      "Each domain requires contextual judgment.",
      "Applied learning turns the book into behavior."
    ],
    examples: [
      "Start work with a protected strategy block.",
      "Use a prepared default meal to avoid low-energy food decisions.",
      "Automate savings and review spending weekly.",
      "Put the phone away during relational transitions."
    ],
    relatedSections: ["advanced-habit-design", "final-synthesis-blueprint"]
  }),
  chapter({
    id: "final-synthesis-blueprint",
    title: "Final Synthesis and Implementation Blueprint",
    eyebrow: "Synthesis",
    minutes: 36,
    summary:
      "The book compresses into a practical blueprint: choose an identity-relevant behavior, design the loop, make it repeatable, and review it as evidence accumulates.",
    objectives: [
      "Synthesize the major ideas of the curriculum",
      "Build one complete habit implementation plan",
      "Leave with a practical system rather than inspiration alone"
    ],
    concepts: ["implementation blueprint", "review", "identity", "four laws"],
    body: [
      "Atomic Habits is best understood as a system for making important behaviors repeatable. The book is not merely saying that small actions matter. It is showing how identity, cues, cravings, friction, rewards, environment, and review combine to shape what people do repeatedly.",
      "The final synthesis begins with identity. Who are you practicing becoming? That question prevents the habit from becoming a disconnected task. Then define the behavior that would provide evidence for that identity. Keep it small enough to repeat under real conditions. A habit that cannot survive ordinary life is not yet designed.",
      "Next, map the loop. What cue will make the behavior obvious? What will make it attractive enough to approach? How will you make the first step easy? What immediate satisfaction will reinforce it? These questions turn the four laws into a design checklist rather than a set of slogans.",
      "Then plan for failure before it happens. What is the minimum version? What will you do after one miss? What friction should be added to the competing habit? What will you review weekly? This is where many habit systems become mature. They stop depending on the fantasy of perfect conditions.",
      "Finally, keep the system small long enough to learn from it. The temptation after understanding the framework is to redesign everything. Resist that. Choose one keystone behavior and run the system for four weeks. Watch what happens. Adjust one variable at a time. Let the habit teach you how your real life works.",
      "The goal of this curriculum is not to make you admire the idea of habits. It is to help you understand the book well enough to design behavior. The proof is not whether the framework sounds elegant. The proof is whether the next repeated action becomes clearer, easier, and more aligned with the person you want to become.",
      "Six months later, the most important thing to remember is not a list of tactics. Remember the relationship between identity and environment. You are shaped by what you repeatedly do, and what you repeatedly do is shaped by the cues, friction, rewards, and norms around you. If behavior is not changing, inspect the system before attacking your character.",
      "Start tomorrow by choosing one habit, not a new personality. Write the identity it supports, place the cue, shrink the first action, make the reward visible, and decide what happens after a miss. That is enough. The system does not need to be grand on the first day. It needs to be real enough to run.",
      "Treat every repetition as evidence and every miss as information. Evidence builds identity; information improves design. This is the mature version of habit change: less drama, more observation, better environments, clearer starts, faster recovery. Motivation can still help, but it is no longer carrying the whole structure."
    ],
    support: [
      {
        type: "framework",
        title: "The complete habit blueprint",
        stages: [
          {
            name: "Identity",
            description: "Name the kind of person the habit helps you become."
          },
          {
            name: "Behavior",
            description: "Choose the smallest serious action that provides evidence."
          },
          {
            name: "Loop",
            description: "Design cue, craving, response, and reward through the four laws."
          },
          {
            name: "Recovery",
            description: "Define the minimum version and the rule after a miss."
          },
          {
            name: "Review",
            description: "Check the leading behavior weekly and adjust one variable at a time."
          }
        ]
      },
      {
        type: "exercise",
        title: "Build your implementation blueprint",
        instructions:
          "Design one habit from identity through weekly review. Keep it narrow enough to begin this week.",
        prompts: [
          "Identity: I am becoming someone who...",
          "Cue: this starts when...",
          "Easy response: the minimum action is...",
          "Reward: the immediate satisfaction is...",
          "Review: each week I will ask..."
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text: "Make the right behavior obvious, attractive, easy, and satisfying. Make the wrong behavior invisible, unattractive, difficult, and unsatisfying. Use identity for direction, systems for repetition, and review for adaptation."
      }
    ],
    whyThisMatters:
      "Understanding becomes valuable when it changes the next repeated action.",
    practicalApplication:
      "Complete one habit blueprint and run it for four weeks before adding another major behavior.",
    commonMistakes: [
      "Leaving with inspiration but no designed system",
      "Trying to change too many habits at once",
      "Skipping recovery and review because the launch feels exciting"
    ],
    misconceptions: [
      {
        misconception: "The final step is to feel motivated.",
        correction:
          "The final step is to design a system that makes the next repetition clear under ordinary conditions."
      }
    ],
    reflection:
      "What is the one habit that would make the next season of your life easier, clearer, or more aligned?",
    exercises: [
      "Complete the habit blueprint.",
      "Schedule the first week of repetitions.",
      "Set a review appointment four weeks from now."
    ],
    anchors: [
      "Design one loop. Run it. Learn. Then scale.",
      "Identity gives direction; systems create repetition; review keeps the system alive."
    ],
    takeaways: [
      "Atomic Habits is a behavior design framework.",
      "The four laws map to the habit loop.",
      "A mature habit system includes recovery and review."
    ],
    examples: [
      "A reading habit becomes identity, cue, easy start, note reward, and weekly review.",
      "A money habit becomes payday automation, spending friction, visible progress, and a Friday check-in.",
      "A health habit becomes prepared cues, a two-minute start, aligned reward, and a recovery rule."
    ],
    relatedSections: ["real-power-small-habits", "advanced-habit-design"]
  })
];

export const atomicHabits: Book = {
  slug: "atomic-habits",
  title: "Atomic Habits",
  author: "James Clear",
  category: "Behavioral Design",
  difficulty: "Foundational",
  completionTime: "6h 10m",
  progress: 34,
  coverTone:
    "from-stone-200 via-amber-100 to-emerald-100 dark:from-stone-800 dark:via-amber-900/40 dark:to-emerald-900/40",
  description:
    "A prose-first curriculum on identity, habit loops, the four laws of behavior change, systems, and real-life habit design.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(atomicSections),
  curriculumVersion: "1.2",
  primaryThemes: [
    "identity-based change",
    "habit loops",
    "the four laws",
    "systems over goals",
    "applied behavior design"
  ],
  intendedOutcomes: [
    "Understand why small habits compound into meaningful outcomes",
    "Use identity as evidence-based behavior change rather than empty affirmation",
    "Diagnose habits through cue, craving, response, and reward",
    "Apply the four laws to build good habits and break bad ones",
    "Create a practical implementation blueprint for one real habit"
  ],
  promise:
    "After this curriculum, you will understand the major ideas of Atomic Habits, how they connect, why they matter, and how to apply them as a practical system for behavior change.",
  recommendedAudience: [
    "Readers who want a deep grasp of Atomic Habits",
    "Professionals designing better work systems",
    "Students and lifelong learners",
    "Anyone building healthier routines without shallow motivation"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public concepts and behavioral-change framework. It does not reproduce long passages or chapter text.",
  sections: atomicSections
};
