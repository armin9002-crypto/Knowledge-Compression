import type { Book } from "@/lib/types";

const atomicSections = [
  {
    id: "core-thesis",
    title: "Core Thesis",
    eyebrow: "Orientation",
    estimatedMinutes: 8,
    summary:
      "Atomic Habits argues that exceptional outcomes are usually the visible surface of invisible systems repeated consistently.",
    concepts: ["compound growth", "behavioral systems", "marginal gains"],
    blocks: [
      {
        type: "paragraph",
        text: "The book's central claim is not that habits are magical, but that small repeated behaviors become the architecture of a life. A habit is a vote cast in favor of a future identity, a tiny unit of personal design that seems insignificant until time magnifies it."
      },
      {
        type: "paragraph",
        text: "This matters because most self-improvement advice overweights intensity and underweights continuity. People imagine transformation as a dramatic reinvention. Atomic Habits reframes it as a set of reliable loops: make the useful behavior easier to repeat, make the harmful behavior harder to repeat, and let consistency do the slow work."
      },
      {
        type: "callout",
        title: "Compressed principle",
        text: "You do not rise to the level of your intentions. You settle into the structure your environment and identity make easiest to repeat."
      },
      {
        type: "diagram",
        title: "The behavior architecture",
        steps: ["Identity", "System", "Cue", "Action", "Feedback", "Compounding"]
      }
    ],
    examples: [
      "A writer does not become prolific by waiting for inspiration; they protect a daily writing window and remove friction before the window begins.",
      "A healthier diet starts less with heroic restraint and more with changing what is visible, available, and already prepared."
    ],
    takeaways: [
      "Habits are long-term leverage points, not productivity tricks.",
      "The system surrounding a behavior often predicts repetition better than motivation.",
      "Tiny gains matter when they survive long enough to compound."
    ]
  },
  {
    id: "identity-based-habits",
    title: "Identity-Based Habits",
    eyebrow: "Self-image",
    estimatedMinutes: 10,
    summary:
      "The deepest form of habit change works by changing what feels like evidence about who you are.",
    concepts: ["identity", "self-evidence", "behavioral votes"],
    blocks: [
      {
        type: "paragraph",
        text: "Outcome-based change asks, What do I want to achieve? Identity-based change asks, Who is the kind of person who naturally does this? The second question is more durable because it moves behavior from external pressure into self-consistency."
      },
      {
        type: "paragraph",
        text: "Identity is not a slogan pasted over old behavior. It is accumulated proof. Each repetition provides a small piece of evidence: I am the kind of person who trains, reads, saves, studies, repairs, listens, or finishes. Misses do not erase the identity, but repeated evidence strengthens it."
      },
      {
        type: "list",
        items: [
          "Choose the identity implied by the habit.",
          "Design one small behavior that expresses that identity.",
          "Repeat it often enough that the identity has evidence.",
          "Let the identity make future repetitions feel less negotiable."
        ]
      },
      {
        type: "callout",
        title: "Nuance",
        text: "Identity can liberate or imprison. The goal is not to create a rigid label; it is to make your best behaviors feel natural without turning misses into shame."
      }
    ],
    examples: [
      "Instead of, I need to read more, use the identity: I am a serious student of important ideas. Then make the proof small: read and annotate three pages after coffee.",
      "Instead of, I must stop procrastinating, use: I am someone who starts before I feel ready. Then open the document and write one rough sentence."
    ],
    takeaways: [
      "Identity gives behavior emotional gravity.",
      "Small actions are not small when they become evidence.",
      "Avoid identities that depend on perfection."
    ]
  },
  {
    id: "four-laws",
    title: "The Four Laws of Behavior Change",
    eyebrow: "Framework",
    estimatedMinutes: 11,
    summary:
      "Make good habits obvious, attractive, easy, and satisfying; make bad habits invisible, unattractive, difficult, and unsatisfying.",
    concepts: ["obvious", "attractive", "easy", "satisfying"],
    blocks: [
      {
        type: "paragraph",
        text: "The Four Laws translate behavioral psychology into design constraints. Instead of relying on willpower at the moment of action, you shape the conditions before the action occurs. This is the practical heart of the curriculum."
      },
      {
        type: "diagram",
        title: "The habit loop mapped to intervention",
        steps: ["Cue: make it obvious", "Craving: make it attractive", "Response: make it easy", "Reward: make it satisfying"]
      },
      {
        type: "paragraph",
        text: "The inversion is just as important. Bad habits are rarely defeated through direct combat. They are weakened by removing cues, lowering appeal, increasing friction, and making the true cost more visible."
      },
      {
        type: "callout",
        title: "Design lens",
        text: "Ask which law is failing. If you forget, improve the cue. If you resist, increase attractiveness. If you delay, reduce friction. If you quit, improve feedback."
      }
    ],
    examples: [
      "Want to practice guitar? Put it on a stand beside your desk, pair it with a favorite playlist, keep the first practice under five minutes, and track the session immediately.",
      "Want less late-night scrolling? Charge the phone outside the bedroom, remove the most tempting apps from the home screen, require a longer login path, and make sleep quality visible the next morning."
    ],
    takeaways: [
      "Behavior change is a design problem before it is a discipline problem.",
      "Each law gives you a diagnostic question.",
      "The inverse laws are essential for breaking bad habits."
    ]
  },
  {
    id: "cue-craving-response-reward",
    title: "Cue / Craving / Response / Reward",
    eyebrow: "Mechanism",
    estimatedMinutes: 9,
    summary:
      "Every habit can be understood as a loop that notices an opportunity, wants a state change, acts, and receives feedback.",
    concepts: ["habit loop", "feedback", "prediction"],
    blocks: [
      {
        type: "paragraph",
        text: "A cue is not just a signal; it is a prediction that a reward may be available. The craving is not always for the object itself, but for the internal state the object promises. The response is the behavior, and the reward teaches the brain whether the loop is worth repeating."
      },
      {
        type: "paragraph",
        text: "Understanding the loop makes habits less mysterious. You can inspect a behavior without moralizing it. What triggered it? What state was I trying to reach? What made the response easy? What reward trained me to repeat it?"
      },
      {
        type: "list",
        items: [
          "Cues can be locations, times, emotions, people, or prior actions.",
          "Cravings are often desires for relief, stimulation, belonging, control, or closure.",
          "Responses follow the path that feels available under current energy.",
          "Rewards reinforce behavior by satisfying the craving and updating memory."
        ]
      }
    ],
    examples: [
      "Checking email repeatedly may be less about email and more about craving certainty or a brief sense of progress.",
      "Evening snacking may be a response to fatigue, not hunger, which means the better replacement may be recovery rather than stricter food rules."
    ],
    takeaways: [
      "Name the loop before trying to change it.",
      "Cravings reveal the emotional job a habit performs.",
      "Replacement behaviors must satisfy the real craving."
    ]
  },
  {
    id: "environment-design",
    title: "Environment Design",
    eyebrow: "Friction",
    estimatedMinutes: 10,
    summary:
      "Your environment is a silent curriculum that teaches you what to do next.",
    concepts: ["choice architecture", "visibility", "friction"],
    blocks: [
      {
        type: "paragraph",
        text: "Environment design is powerful because attention is limited. What is visible, reachable, prepared, and socially normal gets a behavioral advantage. The room often decides before the person feels they have decided."
      },
      {
        type: "paragraph",
        text: "The point is not aesthetic minimalism. It is behavioral clarity. A desk can invite deep work or shallow checking. A kitchen can invite nourishment or grazing. A phone can be a tool or a slot machine, depending on its defaults."
      },
      {
        type: "callout",
        title: "Practical standard",
        text: "Make the right action the default path. Make the wrong action require enough extra steps that impulse has time to cool."
      }
    ],
    examples: [
      "Place a book open on the chair where you drink coffee so reading is the first visible option.",
      "Put distracting apps in a folder off the first screen, disable badges, and log out after each session."
    ],
    takeaways: [
      "Visibility is behavioral gravity.",
      "Friction is not the enemy; it should be assigned intentionally.",
      "A well-designed environment reduces the need for self-negotiation."
    ]
  },
  {
    id: "habit-stacking",
    title: "Habit Stacking",
    eyebrow: "Sequencing",
    estimatedMinutes: 8,
    summary:
      "Attach a new behavior to an existing reliable behavior so the old habit becomes the cue for the new one.",
    concepts: ["implementation intention", "stacking", "context"],
    blocks: [
      {
        type: "paragraph",
        text: "Habit stacking works because existing routines already have momentum. Rather than inventing a new time and context, you borrow the stability of a behavior that already happens."
      },
      {
        type: "paragraph",
        text: "The formula is simple: after I do current habit, I will do new habit. The power comes from specificity. A vague intention competes with everything. A precise sequence has a place to live."
      },
      {
        type: "list",
        items: [
          "After I pour morning coffee, I review today's top priority.",
          "After I close my laptop, I reset my desk for tomorrow.",
          "After I brush my teeth, I stretch for two minutes.",
          "After I sit on the train, I read one curriculum section."
        ]
      }
    ],
    examples: [
      "A founder who forgets weekly reflection can stack it after Friday invoice review, when the business is already in view.",
      "A student can stack retrieval practice immediately after finishing a lesson, before the material decays."
    ],
    takeaways: [
      "Attach new habits to reliable anchors.",
      "Specific sequencing beats vague aspiration.",
      "Stacks should be small enough to survive busy days."
    ]
  },
  {
    id: "dopamine-reinforcement",
    title: "Dopamine and Reinforcement",
    eyebrow: "Motivation",
    estimatedMinutes: 9,
    summary:
      "Desire is shaped by anticipation; rewards train the brain to return to what felt meaningful, relieving, or satisfying.",
    concepts: ["anticipation", "reward prediction", "reinforcement"],
    blocks: [
      {
        type: "paragraph",
        text: "Habits are not maintained only by the reward after action. The anticipation of reward becomes motivating. This is why cues can generate desire before anything has happened: the brain has learned what the cue predicts."
      },
      {
        type: "paragraph",
        text: "Good habit design therefore makes the desired action emotionally appealing before it is automatic. Pairing, social reinforcement, beautiful tools, immediate tracking, and meaningful rituals can all increase the pull of a behavior."
      },
      {
        type: "callout",
        title: "Retention angle",
        text: "A learning habit improves when progress is felt quickly. The mind needs some immediate evidence that attention was worth spending."
      }
    ],
    examples: [
      "A reading session becomes more attractive when paired with a calm place, a favorite drink, and a visible note archive that grows over time.",
      "Exercise becomes more repeatable when the first reward is immediate relief and identity proof, not a distant physique goal."
    ],
    takeaways: [
      "Anticipation drives action.",
      "Immediate satisfaction helps long-term behaviors survive.",
      "Make the habit rewarding without undermining the habit."
    ]
  },
  {
    id: "systems-vs-goals",
    title: "Systems vs Goals",
    eyebrow: "Strategy",
    estimatedMinutes: 8,
    summary:
      "Goals set direction; systems determine whether progress becomes repeatable.",
    concepts: ["systems", "outcomes", "process"],
    blocks: [
      {
        type: "paragraph",
        text: "Goals are useful because they clarify destination, but they are insufficient because winners and losers often share similar goals. The differentiator is usually the system: the repeatable process that keeps producing evidence and improvement."
      },
      {
        type: "paragraph",
        text: "Overattachment to goals can also create a finish-line problem. Once the goal is reached, the behavior loses its reason. A system lets the behavior remain valuable because it is connected to identity and process."
      },
      {
        type: "diagram",
        title: "From outcome to system",
        steps: ["Desired result", "Required behavior", "Recurring context", "Friction removed", "Feedback loop"]
      }
    ],
    examples: [
      "The goal is to write a book; the system is a protected morning drafting block, weekly editing review, and idea capture process.",
      "The goal is to learn finance; the system is one curriculum section, one worked example, and one recall prompt each weekday."
    ],
    takeaways: [
      "Goals point. Systems move.",
      "A system should be visible in the calendar and environment.",
      "Process quality compounds before outcome quality is obvious."
    ]
  },
  {
    id: "breaking-bad-habits",
    title: "Breaking Bad Habits",
    eyebrow: "Inversion",
    estimatedMinutes: 9,
    summary:
      "Bad habits weaken when their cues disappear, their appeal is reframed, their friction increases, and their rewards become less immediate.",
    concepts: ["inversion", "substitution", "commitment devices"],
    blocks: [
      {
        type: "paragraph",
        text: "Breaking a bad habit is not simply deleting behavior. The behavior exists because it solves something, even if poorly. To change it, you identify the job it performs and create a better path to the same underlying need."
      },
      {
        type: "paragraph",
        text: "The inverse laws are practical: make it invisible, unattractive, difficult, and unsatisfying. This can include removing triggers, rewriting the story around the habit, adding steps, using accountability, or replacing the reward."
      },
      {
        type: "callout",
        title: "Replacement rule",
        text: "A bad habit leaves a vacancy. Fill the vacancy with a behavior that addresses the same craving with fewer downstream costs."
      }
    ],
    examples: [
      "If stress drives social media use, deleting apps may help, but stress still needs a replacement response: a walk, a short reset, a call, or a written worry list.",
      "If impulsive spending is triggered by browsing, remove saved cards, unsubscribe from sale emails, and add a 24-hour waiting rule."
    ],
    takeaways: [
      "Treat bad habits as understandable loops.",
      "Increase friction before the craving peaks.",
      "Substitution works better than pure suppression."
    ]
  },
  {
    id: "consistency-compounding",
    title: "Consistency and Compounding",
    eyebrow: "Time",
    estimatedMinutes: 8,
    summary:
      "Small behaviors matter because time transforms repetition into capability, trust, and identity.",
    concepts: ["frequency", "compound returns", "resilience"],
    blocks: [
      {
        type: "paragraph",
        text: "Consistency is not perfection. It is the ability to return. Atomic Habits treats missed days as normal noise in the system, not as evidence that the project has failed."
      },
      {
        type: "paragraph",
        text: "Compounding is delayed, which makes it emotionally difficult. In the early phase, effort is visible and results are not. The habit must be designed to survive that asymmetry."
      },
      {
        type: "list",
        items: [
          "Never let one miss become the new pattern.",
          "Reduce the habit on low-energy days instead of canceling it.",
          "Track continuity as identity evidence, not as self-punishment.",
          "Expect results to arrive after the behavior already feels boring."
        ]
      }
    ],
    examples: [
      "A ten-minute daily language habit may look unimpressive for weeks, then suddenly make conversations and reading feel possible.",
      "A savings habit feels tiny until the balance begins producing options and calm."
    ],
    takeaways: [
      "Returning matters more than maintaining a perfect streak.",
      "Minimum viable habits protect identity during difficult weeks.",
      "Boredom is often the doorway to mastery."
    ]
  },
  {
    id: "plateaus-delayed-results",
    title: "Plateaus and Delayed Results",
    eyebrow: "Patience",
    estimatedMinutes: 8,
    summary:
      "Progress often hides below the surface until accumulated effort crosses a visible threshold.",
    concepts: ["latent potential", "plateau", "threshold effects"],
    blocks: [
      {
        type: "paragraph",
        text: "One of the book's most useful ideas is that progress can be real before it is measurable. A plateau may be a period of storage, where capability is accumulating but has not yet expressed itself as a result."
      },
      {
        type: "paragraph",
        text: "This explains why people quit early. They expect linear feedback from nonlinear systems. Learning, fitness, craft, reputation, and trust often show threshold effects: nothing seems to happen, then the stored work becomes visible."
      },
      {
        type: "callout",
        title: "Interpretation shift",
        text: "A plateau is not always a verdict. Sometimes it is the quiet phase before stored effort becomes visible."
      }
    ],
    examples: [
      "A researcher may read for months before the field suddenly organizes into a map.",
      "A team may improve process quality long before customers notice faster delivery."
    ],
    takeaways: [
      "Do not judge compounding systems too early.",
      "Track leading indicators when outcomes lag.",
      "Patience is easier when the system gives immediate identity proof."
    ]
  },
  {
    id: "advanced-implementation",
    title: "Advanced Implementation",
    eyebrow: "Practice",
    estimatedMinutes: 11,
    summary:
      "The mature application of Atomic Habits is a personal operating system: review loops, environment audits, identity design, and friction tuning.",
    concepts: ["reviews", "behavior audit", "operating system"],
    blocks: [
      {
        type: "paragraph",
        text: "Advanced implementation starts with diagnosis. Rather than adding many habits, inspect the loops already running. Which behaviors are shaping identity? Which contexts repeatedly produce unwanted action? Which good behaviors depend on motivation instead of design?"
      },
      {
        type: "paragraph",
        text: "Then create a weekly review. The goal is not bureaucratic tracking; it is stewardship. Habits drift as life changes. Review restores fit between identity, environment, and priorities."
      },
      {
        type: "list",
        items: [
          "Run a habit scorecard: mark recurring behaviors as positive, neutral, or negative.",
          "Choose one keystone behavior per season.",
          "Define the smallest repeatable version.",
          "Design the cue, attraction, ease, and reward.",
          "Review misses without drama and adjust the system."
        ]
      }
    ],
    examples: [
      "A knowledge worker might select deep work as a seasonal keystone, redesign mornings around it, and review output every Friday.",
      "A parent might choose calmer evenings as the keystone, changing meal prep, device placement, and bedtime cues."
    ],
    takeaways: [
      "Implementation is iterative design.",
      "Audit before adding complexity.",
      "Seasonal focus prevents habit sprawl."
    ]
  },
  {
    id: "real-world-applications",
    title: "Real-World Applications",
    eyebrow: "Transfer",
    estimatedMinutes: 10,
    summary:
      "The framework transfers across health, learning, creative work, money, leadership, and relationships because it targets behavior loops.",
    concepts: ["transfer", "domains", "keystone habits"],
    blocks: [
      {
        type: "paragraph",
        text: "Atomic Habits is most powerful when it becomes a lens rather than a checklist. In any domain, ask what repeated behavior creates the desired future and what environment makes that behavior likely."
      },
      {
        type: "diagram",
        title: "Application map",
        steps: ["Health", "Learning", "Creative output", "Finance", "Relationships", "Leadership"]
      },
      {
        type: "paragraph",
        text: "For teams, the framework shifts attention from individual blame to shared systems. Meetings, defaults, incentives, and norms are organizational habits. Culture is often repeated behavior with a story attached."
      }
    ],
    examples: [
      "Learning: after each lesson, write three recall questions and answer them tomorrow.",
      "Leadership: start each meeting by naming the decision needed, so discussion has a behavioral cue.",
      "Relationships: after arriving home, place the phone away and give the first five minutes to connection."
    ],
    takeaways: [
      "The same loop appears in many domains.",
      "Teams have habits, not just individuals.",
      "Culture changes when repeated defaults change."
    ]
  },
  {
    id: "key-mental-models",
    title: "Key Mental Models",
    eyebrow: "Synthesis",
    estimatedMinutes: 9,
    summary:
      "The book can be compressed into a set of mental models for designing repeatable behavior.",
    concepts: ["mental models", "leverage", "diagnosis"],
    blocks: [
      {
        type: "paragraph",
        text: "Mental models help retain the book because they are portable. Instead of memorizing every example, keep the models available: identity evidence, friction assignment, cue visibility, immediate reward, and compounding delay."
      },
      {
        type: "list",
        items: [
          "Identity evidence: repeated actions teach the self what kind of person it is.",
          "Friction assignment: make the desired path easier and the undesired path harder.",
          "Cue design: what gets noticed gets repeated.",
          "Reward immediacy: the brain repeats what feels satisfying soon.",
          "Nonlinear progress: outcomes often lag behind accumulated effort."
        ]
      },
      {
        type: "callout",
        title: "Memory anchor",
        text: "When stuck, diagnose the behavior through identity, environment, four laws, and feedback."
      }
    ],
    examples: [
      "If a habit is not starting, inspect cue and friction.",
      "If a habit is not lasting, inspect reward and identity evidence.",
      "If a habit is not scaling, inspect the system rather than the goal."
    ],
    takeaways: [
      "Mental models preserve the book's practical value.",
      "Diagnosis prevents random self-improvement experiments.",
      "The models are mutually reinforcing."
    ]
  },
  {
    id: "actionable-takeaways",
    title: "Actionable Takeaways",
    eyebrow: "Integration",
    estimatedMinutes: 12,
    summary:
      "A complete implementation converts insight into a small, reviewed, emotionally sustainable behavior system.",
    concepts: ["integration", "practice", "retention"],
    blocks: [
      {
        type: "paragraph",
        text: "The final step is to turn the curriculum into practice. Choose one behavior that would make many other things easier. Keep it narrow enough to repeat, meaningful enough to care about, and visible enough to review."
      },
      {
        type: "list",
        items: [
          "Write the identity: I am the kind of person who...",
          "Define the two-minute version of the habit.",
          "Attach it to a specific existing routine.",
          "Make the cue visible before the moment of action.",
          "Add one immediate reward that does not conflict with the habit.",
          "Review weekly: keep, reduce, redesign, or replace."
        ]
      },
      {
        type: "paragraph",
        text: "The aim is not to become a person who manages dozens of tiny rules. The aim is to design a life where important behaviors happen with less drama, less bargaining, and more continuity."
      },
      {
        type: "callout",
        title: "Final compression",
        text: "Behavior becomes destiny only after it becomes repeatable. Make the right things repeatable."
      }
    ],
    examples: [
      "For this platform: after finishing each section, bookmark one concept and write one application sentence.",
      "For health: after lunch, walk for seven minutes before reopening work.",
      "For money: after each paycheck arrives, automate saving before discretionary spending is visible."
    ],
    takeaways: [
      "Start with one keystone behavior.",
      "Design for repetition under real conditions.",
      "Review the system with curiosity, not self-judgment."
    ]
  }
] satisfies Book["sections"];

export const books: Book[] = [
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Behavioral Design",
    completionTime: "2h 20m",
    progress: 34,
    coverTone:
      "from-stone-200 via-amber-100 to-emerald-100 dark:from-stone-800 dark:via-amber-900/40 dark:to-emerald-900/40",
    description:
      "A deep curriculum on identity, systems, environment design, and the behavioral mechanics behind lasting change.",
    featured: true,
    readingEstimateMinutes: atomicSections.reduce(
      (total, section) => total + section.estimatedMinutes,
      0
    ),
    sections: atomicSections
  },
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Cognitive Science",
    completionTime: "3h 10m",
    progress: 0,
    coverTone:
      "from-zinc-100 via-sky-100 to-slate-200 dark:from-zinc-800 dark:via-sky-950/50 dark:to-slate-900",
    description:
      "Decision-making, bias, heuristics, and the architecture of human judgment.",
    featured: true,
    readingEstimateMinutes: 190,
    sections: []
  },
  {
    slug: "the-psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Money & Behavior",
    completionTime: "1h 50m",
    progress: 0,
    coverTone:
      "from-neutral-100 via-teal-100 to-stone-200 dark:from-neutral-800 dark:via-teal-950/40 dark:to-stone-900",
    description:
      "A curriculum on risk, wealth, compounding, status, and financial behavior.",
    featured: true,
    readingEstimateMinutes: 110,
    sections: []
  }
];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}
