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
    id: "reality-building-company",
    title: "The Reality of Building a Company",
    eyebrow: "Foundation",
    minutes: 33,
    summary:
      "Horowitz strips away the clean startup narrative and focuses on what leadership requires when plans break, markets resist, and choices are ugly.",
    objectives: [
      "Understand why company building is unusually difficult",
      "Recognize the difference between advice and judgment",
      "See why leadership is tested when conditions deteriorate"
    ],
    concepts: ["company building", "ambiguity", "leadership", "judgment"],
    body: [
      "The Hard Thing About Hard Things is not primarily a book about elegant strategy. It is a book about the moments when strategy collides with payroll, customers, morale, competitors, investors, and the limits of human endurance. Horowitz writes from the inside of those moments, where the ideal answer is rarely available.",
      "Startup narratives often sanitize the work. They compress years of fear, near-failure, bad hires, product misses, cash pressure, and emotional exhaustion into a clean arc of vision and victory. This book refuses that polish. It treats company building as an operating problem under uncertainty, not a stage for founder mythology.",
      "The hard thing is not knowing what a perfect leader would do in a case study. The hard thing is making the best available decision when every option damages something important. You may have to choose between layoffs and insolvency, speed and quality, loyalty and performance, transparency and panic, conviction and adaptation.",
      "The practical value of the book is its refusal to outsource judgment to slogans. It prepares leaders to think clearly when the problem is real enough that all simple advice has become insufficient."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "The hard thing",
        not: "The hard thing is knowing the ideal answer.",
        but: "The hard thing is making the best available decision when every option has serious downsides."
      },
      {
        type: "expandedExample",
        scenario: "A startup misses growth targets while burn remains high.",
        defaultApproach:
          "The CEO keeps repeating the original story because changing it would scare the team and investors.",
        betterApproach:
          "The CEO faces the numbers, narrows priorities, updates the plan, and communicates the reality with urgency.",
        whyItWorks:
          "Reality becomes actionable only after leaders stop negotiating with it."
      }
    ],
    whyThisMatters:
      "Leaders who expect clean choices are often least prepared for the choices that decide the company's survival.",
    practicalApplication:
      "When facing a major decision, write the real tradeoffs plainly before searching for a comforting framework.",
    commonMistakes: [
      "Confusing startup mythology with operating reality",
      "Waiting for a painless option",
      "Using inspirational language to avoid concrete decisions"
    ],
    misconceptions: [
      {
        misconception: "The book is only relevant to venture-backed CEOs.",
        correction:
          "Its lessons apply wherever leaders must make consequential decisions with incomplete information."
      }
    ],
    lens:
      "Ask what reality is demanding that your preferred story is trying to avoid.",
    anchors: [
      "Hard leadership begins when every option has a cost.",
      "Reality must become visible before it can become manageable."
    ],
    takeaways: [
      "Company building is ambiguous and psychologically demanding.",
      "Leadership is tested when the plan fails.",
      "Judgment matters most when frameworks run out."
    ],
    examples: [
      "A product leader kills a beloved feature because customers do not value it.",
      "A founder shifts fundraising strategy after the market changes.",
      "A manager confronts underperformance before it spreads."
    ],
    relatedSections: ["no-easy-answers", "leading-through-crisis"]
  }),
  lesson({
    id: "the-struggle-ceo-loneliness",
    title: "The Struggle: Psychological Pressure and CEO Loneliness",
    eyebrow: "Psychology",
    minutes: 32,
    summary:
      "The Struggle names the emotional reality of leadership: isolation, fear, doubt, and responsibility when the organization looks to one person for judgment.",
    objectives: [
      "Understand the psychological burden of leadership",
      "Recognize why isolation increases under crisis",
      "Learn why denial worsens pressure"
    ],
    concepts: ["the struggle", "CEO psychology", "loneliness", "pressure"],
    body: [
      "Horowitz's idea of The Struggle is one of the book's lasting contributions because it gives language to a condition leaders often hide. The leader must absorb uncertainty while others seek confidence. The leader must make decisions that affect families, careers, investors, customers, and the company's existence.",
      "This pressure isolates. A CEO cannot fully vent to employees without damaging morale, cannot fully vent to investors without triggering concern, and cannot fully vent to friends who do not understand the stakes. The role compresses fear into responsibility.",
      "The dangerous response is performance: pretending everything is fine until the facts become impossible to hide. Denial may protect the leader's image briefly, but it destroys trust and reduces the time available to act. The organization cannot respond to a reality the leader refuses to name.",
      "Staying functional in The Struggle requires discipline around truth, counsel, sleep, communication, and decision rhythm. It is not about feeling fearless. It is about keeping judgment available while fear is present."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Fear with operating discipline",
        explanation:
          "A leader does not need to eliminate fear before acting; they need routines and advisors that keep fear from making decisions alone.",
        useWhen:
          "Pressure is high and the temptation is either panic or denial."
      }
    ],
    whyThisMatters:
      "The unspoken psychological burden of leadership can distort decisions if leaders do not manage it directly.",
    practicalApplication:
      "Build a small trusted counsel structure before crisis, including people who can hear the truth and challenge your thinking.",
    commonMistakes: [
      "Equating leadership with emotional invulnerability",
      "Performing confidence instead of communicating reality",
      "Making isolated decisions to avoid looking uncertain"
    ],
    misconceptions: [
      {
        misconception: "Great CEOs do not feel panic, loneliness, or doubt.",
        correction:
          "Great CEOs feel pressure but build enough discipline and counsel to keep functioning."
      }
    ],
    lens:
      "Ask whether you are managing the company's reality or managing your image as a leader.",
    anchors: [
      "The Struggle is pressure plus responsibility.",
      "Fear is manageable; denial is corrosive."
    ],
    takeaways: [
      "Leadership pressure is psychologically real.",
      "Isolation increases when stakes rise.",
      "Truth and cadence keep fear from taking over."
    ],
    examples: [
      "A CEO tells the board the sales pipeline is weaker than forecast.",
      "A manager asks for outside advice before a painful reorganization.",
      "A founder sets a weekly decision review during crisis."
    ],
    relatedSections: ["leading-through-crisis", "founder-psychology-accountability"]
  }),
  lesson({
    id: "no-easy-answers",
    title: "No Easy Answers: Decision-Making Under Fire",
    eyebrow: "Judgment",
    minutes: 33,
    summary:
      "The book's management philosophy is built around judgment in situations where every clean principle collides with another clean principle.",
    objectives: [
      "Recognize problems that frameworks cannot solve alone",
      "Understand tradeoff-heavy decision-making",
      "Practice making calls with incomplete information"
    ],
    concepts: ["judgment", "tradeoffs", "incomplete information", "decision-making"],
    body: [
      "Many leadership books imply that the right framework will reveal the right answer. Horowitz is more severe. Real company problems often involve conflicting truths. Moving fast matters, but quality matters. Transparency matters, but panic is real. Loyalty matters, but underperformance is expensive. Culture matters, but survival matters.",
      "Under fire, decisions are not made in isolation. Timing, cash, morale, customer trust, executive capability, competitive pressure, and investor confidence all interact. A decision that would be wise in a stable company can be fatal in a crisis. A decision that looks harsh in the abstract can be humane if delay would create larger harm.",
      "This is why judgment matters. Judgment is not intuition floating free of analysis. It is the disciplined weighing of facts, second-order consequences, people, timing, and company context. It includes the courage to decide before certainty arrives.",
      "A leader's job is to make the call, explain the reasoning, own the consequences, and update when reality changes. Avoiding the decision is also a decision, usually one made on behalf of fear."
    ],
    support: [
      {
        type: "framework",
        title: "A hard-decision scan",
        stages: [
          { name: "Reality", description: "What facts are no longer deniable?" },
          { name: "Constraints", description: "What cash, time, talent, or trust limits exist?" },
          { name: "Tradeoffs", description: "What does each option damage?" },
          { name: "Cadence", description: "When must the decision be made?" },
          { name: "Ownership", description: "Who must communicate and absorb the consequences?" }
        ]
      }
    ],
    whyThisMatters:
      "The quality of leadership often shows up in the problems where advice sounds true but incomplete.",
    practicalApplication:
      "For a hard decision, list the cost of action, the cost of delay, and the cost of pretending the choice can be avoided.",
    commonMistakes: [
      "Waiting for certainty",
      "Applying generic advice without context",
      "Confusing decisiveness with impulsiveness"
    ],
    misconceptions: [
      {
        misconception: "Good leaders always know the answer quickly.",
        correction:
          "Good leaders know how to reach, communicate, and revise decisions under uncertainty."
      }
    ],
    lens:
      "Ask what decision fear would make by default if you refuse to choose deliberately.",
    anchors: [
      "No decision is often a fear-made decision.",
      "Judgment is contextual tradeoff discipline."
    ],
    takeaways: [
      "Hard problems contain competing truths.",
      "Frameworks support judgment but do not replace it.",
      "Leaders must decide before certainty arrives."
    ],
    examples: [
      "A pricing change risks churn but may save cash runway.",
      "A pivot risks morale but may align with market reality.",
      "Replacing an executive risks disruption but may unblock the organization."
    ],
    relatedSections: ["reality-building-company", "peacetime-wartime-ceo"]
  }),
  lesson({
    id: "peacetime-wartime-ceo",
    title: "Peacetime CEO vs Wartime CEO",
    eyebrow: "Leadership Mode",
    minutes: 33,
    summary:
      "Horowitz distinguishes leadership modes because companies need different behaviors when optimizing growth than when fighting for survival.",
    objectives: [
      "Understand peacetime and wartime leadership",
      "Recognize the danger of misreading the company mode",
      "Apply the right cadence, communication, and focus"
    ],
    concepts: ["peacetime CEO", "wartime CEO", "survival", "operating mode"],
    body: [
      "The peacetime versus wartime distinction is not about personality. It is about context. In peacetime, the company has room to optimize: develop people, refine process, expand markets, delegate broadly, and make systems more elegant. In wartime, the company faces an existential threat or urgent constraint, and the leadership mode must change.",
      "Wartime requires focus, speed, directness, and an intolerance for ambiguity that would be unnecessary in calmer conditions. A leader may need to centralize decisions, narrow priorities, confront brutal facts, and communicate with unusual clarity. The organization must know what matters now.",
      "The danger is using the wrong mode. A peacetime style during wartime can look thoughtful while the company dies slowly. A wartime style during peacetime can exhaust people, suppress initiative, and create unnecessary fear. The skill is reading the environment accurately.",
      "The practical question for leaders is not which style they prefer. It is what the situation demands and what the organization needs to hear, stop doing, and execute next."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Leadership modes",
        columns: ["Dimension", "Peacetime", "Wartime"],
        rows: [
          ["Primary concern", "Optimization and expansion", "Survival or decisive threat"],
          ["Communication", "Developmental and distributed", "Direct, repeated, urgent"],
          ["Decision style", "Delegated systems", "Tighter command around priorities"],
          ["Risk", "Complacency", "Exhaustion and fear"]
        ]
      }
    ],
    whyThisMatters:
      "Companies suffer when leaders use a comfortable mode instead of the mode reality requires.",
    practicalApplication:
      "Name the current mode of your team or company and identify one behavior that must change because of it.",
    commonMistakes: [
      "Treating wartime as permanent identity",
      "Staying in peacetime process during existential threat",
      "Using crisis language to avoid management discipline"
    ],
    misconceptions: [
      {
        misconception: "Wartime leadership is simply being harsher.",
        correction:
          "Wartime leadership is focused, truthful, urgent, and disciplined around survival priorities."
      }
    ],
    lens:
      "Ask whether your current leadership behavior matches the company's actual operating environment.",
    anchors: [
      "Mode determines leadership behavior.",
      "Misreading the mode damages the company."
    ],
    takeaways: [
      "Peacetime and wartime require different operating rhythms.",
      "Wartime is not an excuse for chaos.",
      "Peacetime is not an excuse for complacency."
    ],
    examples: [
      "A company freezes side projects to protect runway.",
      "A stable business invests in management development instead of emergency controls.",
      "A product team shifts from exploration to a single launch priority."
    ],
    relatedSections: ["no-easy-answers", "leading-through-crisis"]
  }),
  lesson({
    id: "hiring-scaling-executive-judgment",
    title: "Hiring, Scaling, and Executive Judgment",
    eyebrow: "Scaling",
    minutes: 32,
    summary:
      "Scaling exposes the difference between early heroics and executive capacity: hiring becomes a judgment problem about trust, fit, systems, and stage.",
    objectives: [
      "Understand why executive hiring is difficult",
      "See why scaling requires different skills than founding",
      "Evaluate fit, references, clarity, and judgment"
    ],
    concepts: ["hiring", "executives", "scaling", "fit"],
    body: [
      "Early startups often run on founder intensity and small-team improvisation. As the company scales, that style breaks. The organization needs leaders who can build teams, manage managers, design systems, communicate across functions, and make decisions without constant founder intervention.",
      "Hiring executives is difficult because resumes can mislead. A leader who succeeded in a large company may be lost in a messy startup. A brilliant early employee may not scale into an executive role. A charismatic candidate may lack operating discipline. The role requires stage fit, judgment, and trust, not just prestige.",
      "Horowitz emphasizes clarity: what problem is this hire supposed to solve, what strengths are required now, and what risks can the company absorb? References matter because executive failure is expensive and often becomes visible only after damage has accumulated.",
      "The practical implication is to treat hiring as one of the highest-leverage decisions in company building. Bad hires do not remain isolated; they reshape incentives, communication, morale, and culture."
    ],
    support: [
      {
        type: "framework",
        title: "Executive hiring filters",
        stages: [
          { name: "Stage fit", description: "Has the person operated at this company's level of ambiguity?" },
          { name: "Problem fit", description: "Do their strengths match the current business constraint?" },
          { name: "Cultural fit", description: "Will their behavior reinforce the company you need?" },
          { name: "Reference fit", description: "Do trusted people confirm the same operating pattern?" }
        ]
      }
    ],
    whyThisMatters:
      "A company cannot scale beyond the quality of the leaders trusted with its most important functions.",
    practicalApplication:
      "Before opening a senior role, define the actual business problem, decision rights, success metrics, and failure risks.",
    commonMistakes: [
      "Hiring prestige instead of stage fit",
      "Promoting early loyalty into roles that now require different skills",
      "Ignoring reference patterns because the interview felt strong"
    ],
    misconceptions: [
      {
        misconception: "The best executive is the most impressive executive.",
        correction:
          "The best executive is the one whose judgment fits the company's stage, problem, and culture."
      }
    ],
    lens:
      "Ask what this hire will change in decisions, systems, and culture after the interview glow fades.",
    anchors: [
      "Scaling is a leadership-quality problem.",
      "Prestige is not the same as stage fit."
    ],
    takeaways: [
      "Executive hiring is high leverage and high risk.",
      "Stage fit matters as much as talent.",
      "Bad leadership hires spread through the organization."
    ],
    examples: [
      "A big-company executive struggles without staff and clean process.",
      "An early generalist resists the discipline needed at scale.",
      "A strong VP hire creates reporting clarity and better hiring standards."
    ],
    relatedSections: ["management-debt-discipline", "training-communication-cadence"]
  }),
  lesson({
    id: "firing-layoffs-human-cost",
    title: "Firing, Layoffs, and the Human Cost of Leadership",
    eyebrow: "People Decisions",
    minutes: 33,
    summary:
      "Horowitz treats firing and layoffs as unavoidable leadership duties that must be handled with clarity, ownership, and humanity.",
    objectives: [
      "Understand why avoiding necessary people decisions can cause more harm",
      "Learn principles for clear and humane layoffs",
      "Recognize the leader's responsibility to own painful decisions"
    ],
    concepts: ["firing", "layoffs", "humanity", "ownership"],
    body: [
      "Firing people is one of the hardest parts of leadership because it combines business necessity with human consequence. Jobs are not abstractions. They support families, identities, plans, friendships, and dignity. Horowitz does not soften this cost, but he also refuses the fantasy that avoiding the decision is kindness.",
      "Avoidance often makes pain worse. Tolerated underperformance burdens teammates. Delayed layoffs can consume runway until the remaining company is weaker. Unclear communication humiliates people by forcing them to decode what leaders already know. The humane path is often direct, prepared, and accountable.",
      "The leader must own the decision. Blaming the market, the board, or vague circumstances may be emotionally tempting, but it reduces trust. People can handle bad news better than evasive news. Clarity is a form of respect when the news is painful.",
      "A serious layoff process considers timing, severance, manager preparation, message discipline, legal constraints, team aftermath, and the dignity of the people leaving. The goal is not to make the decision feel good. It is to make it as honest and responsible as possible."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Kindness versus avoidance",
        not: "Kindness means delaying painful decisions indefinitely.",
        but: "Kindness means facing necessary decisions with clarity, preparation, and respect."
      }
    ],
    whyThisMatters:
      "How leaders handle painful exits becomes part of the company's moral memory.",
    practicalApplication:
      "When a people decision is necessary, prepare the facts, ownership message, transition plan, and team communication before acting.",
    commonMistakes: [
      "Delaying because the conversation is painful",
      "Outsourcing responsibility to vague forces",
      "Communicating layoffs in a way that protects leaders more than people"
    ],
    misconceptions: [
      {
        misconception: "Humane leadership avoids hurting people.",
        correction:
          "Humane leadership reduces unnecessary harm while taking responsibility for necessary decisions."
      }
    ],
    lens:
      "Ask what delay is costing the person, the team, and the company.",
    anchors: [
      "Painful decisions still require dignity.",
      "Avoidance is not humanity."
    ],
    takeaways: [
      "Firing and layoffs carry real human costs.",
      "Leaders must own painful decisions.",
      "Clarity and preparation reduce unnecessary damage."
    ],
    examples: [
      "A manager addresses a role mismatch before resentment spreads.",
      "A CEO explains layoffs plainly rather than hiding behind jargon.",
      "A team receives a clear plan after a reorganization."
    ],
    relatedSections: ["culture-what-you-do", "management-debt-discipline"]
  }),
  lesson({
    id: "management-debt-discipline",
    title: "Management Debt and Organizational Discipline",
    eyebrow: "Operating Discipline",
    minutes: 32,
    summary:
      "Management debt accumulates when short-term people and process shortcuts become long-term organizational liabilities.",
    objectives: [
      "Define management debt",
      "Recognize how unclear roles and tolerated problems compound",
      "Build operating discipline before crisis"
    ],
    concepts: ["management debt", "roles", "underperformance", "discipline"],
    body: [
      "Management debt is the organizational version of technical debt. A company makes a short-term choice that feels expedient: unclear titles, ambiguous decision rights, tolerated underperformance, compensation exceptions, skipped training, or a messy reporting structure. The choice solves today's discomfort by creating tomorrow's drag.",
      "Debt compounds because people build expectations around the shortcut. The unclear role becomes political conflict. The tolerated underperformer becomes a performance standard. The exception becomes precedent. The missing process becomes recurring confusion. Eventually leaders spend more time servicing the debt than building the company.",
      "Horowitz's operating lesson is that discipline before crisis creates options during crisis. If roles are clear, managers are trained, communication is regular, and performance standards are real, the organization can absorb stress. If not, crisis exposes every hidden weakness at once.",
      "The practical challenge is that management discipline rarely feels urgent when things are going well. That is exactly when it is cheapest to build."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A founder avoids defining decision rights between product and sales.",
        defaultApproach:
          "They keep peace by letting both teams negotiate every major customer promise informally.",
        betterApproach:
          "They clarify ownership, escalation paths, and what kinds of commitments require product approval.",
        whyItWorks:
          "The company stops paying recurring coordination costs for a decision the leader avoided."
      }
    ],
    whyThisMatters:
      "Organizational problems rarely stay local; they become the environment in which every future decision happens.",
    practicalApplication:
      "Identify one recurring organizational confusion and resolve the underlying role, standard, or decision-right issue.",
    commonMistakes: [
      "Treating people problems as isolated events",
      "Avoiding role clarity to preserve short-term harmony",
      "Waiting until crisis to build management systems"
    ],
    misconceptions: [
      {
        misconception: "Management process is bureaucracy.",
        correction:
          "Good management process preserves speed by reducing recurring ambiguity."
      }
    ],
    lens:
      "Ask which short-term accommodation has become a recurring organizational tax.",
    anchors: [
      "Management debt compounds.",
      "Discipline is cheapest before crisis."
    ],
    takeaways: [
      "Shortcuts in management become long-term liabilities.",
      "Clarity is an operating asset.",
      "Standards must exist before pressure rises."
    ],
    examples: [
      "A title exception creates status conflict across teams.",
      "An unclear reporting line slows every cross-functional decision.",
      "A tolerated low performer teaches the team that standards are optional."
    ],
    relatedSections: ["hiring-scaling-executive-judgment", "training-communication-cadence"]
  }),
  lesson({
    id: "culture-what-you-do",
    title: "Culture Is What You Do, Not What You Say",
    eyebrow: "Culture",
    minutes: 32,
    summary:
      "Culture is created by repeated behavior, especially what leaders reward, tolerate, promote, ignore, and punish.",
    objectives: [
      "Understand culture as behavior rather than slogans",
      "See how leadership actions communicate values",
      "Align culture with operating reality"
    ],
    concepts: ["culture", "behavior", "standards", "tolerance"],
    body: [
      "Horowitz's view of culture is practical and unsentimental. Culture is not the values page, the poster, or the all-hands speech. Culture is what people learn is actually required to succeed inside the company.",
      "Promotions define culture. Firings define culture. Meeting behavior defines culture. What leaders inspect defines culture. What leaders ignore defines culture. A company that praises collaboration but rewards internal empire-building has an empire-building culture. A company that praises excellence but tolerates sloppy execution has a sloppy execution culture.",
      "This is why culture must match reality. Aspirational values can be useful, but only if they are translated into behavior, decisions, and tradeoffs. Otherwise they become decorative language that increases cynicism.",
      "The practical question for leaders is: what would a new employee conclude after watching who gets rewarded, who gets corrected, how bad news travels, and how decisions are made?"
    ],
    support: [
      {
        type: "mentalModel",
        name: "What gets tolerated gets taught",
        explanation:
          "Every repeated tolerance becomes informal training for the organization.",
        useWhen:
          "A leader wonders why stated values are not changing behavior."
      }
    ],
    whyThisMatters:
      "Culture becomes the company's default decision-making system when leaders are not in the room.",
    practicalApplication:
      "Compare one stated value with the last five promotions, corrections, and high-stakes decisions.",
    commonMistakes: [
      "Writing values instead of enforcing standards",
      "Tolerating behavior that contradicts the desired culture",
      "Copying another company's culture without matching your own reality"
    ],
    misconceptions: [
      {
        misconception: "Culture is mainly about being inspiring.",
        correction:
          "Culture is mainly about repeated standards, consequences, and behaviors."
      }
    ],
    lens:
      "Ask what your organization is teaching through consequences, not language.",
    anchors: [
      "Culture is behavior under consequences.",
      "What leaders tolerate becomes normal."
    ],
    takeaways: [
      "Culture is built through action.",
      "Rewards and tolerances matter more than slogans.",
      "Culture must fit the company's real operating demands."
    ],
    examples: [
      "A company claims customer obsession but rewards internal politics.",
      "A manager praises ownership and then rescues every missed deadline.",
      "A CEO reinforces transparency by rewarding early bad-news escalation."
    ],
    relatedSections: ["firing-layoffs-human-cost", "training-communication-cadence"]
  }),
  lesson({
    id: "training-communication-cadence",
    title: "Training, Communication, and Operating Cadence",
    eyebrow: "Management",
    minutes: 31,
    summary:
      "As companies scale, repeated communication and manager training become core operating infrastructure rather than optional polish.",
    objectives: [
      "Understand why managers must train people",
      "See why communication breaks as companies scale",
      "Use cadence to create alignment"
    ],
    concepts: ["training", "communication", "cadence", "alignment"],
    body: [
      "Small teams can operate through osmosis. People overhear context, share assumptions, and correct misunderstandings quickly. Scaling destroys that convenience. Once the company grows, communication must become intentional or the organization fragments into local realities.",
      "Horowitz argues that training is a management responsibility. Leaders sometimes avoid training because it feels slow or remedial, but lack of training creates repeated errors, inconsistent standards, and manager dependency. Training is how expectations become transferable.",
      "Communication also requires repetition. Leaders may feel bored saying the same thing, but employees often need to hear priorities multiple times, in multiple contexts, before they become operational. What is obvious to the executive team may be invisible three levels away.",
      "Operating cadence gives the company a rhythm: meetings, metrics, reviews, planning cycles, written updates, and escalation paths. Done well, cadence reduces confusion. Done badly, it becomes ritual without decision."
    ],
    support: [
      {
        type: "application",
        context: "Building alignment",
        steps: [
          "Name the few priorities that must be understood across the company",
          "Choose the forums where those priorities will be repeated",
          "Train managers on what decisions and standards they must carry",
          "Inspect whether behavior changes, not just whether messages were sent"
        ],
        result:
          "Communication becomes an operating system rather than a pile of announcements."
      }
    ],
    whyThisMatters:
      "A scaling company can fail from communication entropy even when the strategy is sound.",
    practicalApplication:
      "Pick one recurring misalignment and determine whether it is a training, cadence, or decision-right problem.",
    commonMistakes: [
      "Assuming one announcement creates alignment",
      "Treating training as optional",
      "Letting meetings exist without decisions or accountability"
    ],
    misconceptions: [
      {
        misconception: "Good people should just figure it out.",
        correction:
          "Good management makes expectations explicit so good people can execute without guesswork."
      }
    ],
    lens:
      "Ask what people three layers away would say the priority is and whether their answer matches yours.",
    anchors: [
      "Scaling requires intentional communication.",
      "Training converts expectations into capability."
    ],
    takeaways: [
      "Communication must be repeated as the company grows.",
      "Managers are responsible for training.",
      "Cadence should produce decisions and alignment."
    ],
    examples: [
      "A launch slips because dependencies were never made explicit.",
      "A new manager fails because expectations were never taught.",
      "A weekly business review surfaces problems early enough to act."
    ],
    relatedSections: ["management-debt-discipline", "culture-what-you-do"]
  }),
  lesson({
    id: "product-market-survival",
    title: "Product, Market, and the Search for Survival",
    eyebrow: "Survival",
    minutes: 32,
    summary:
      "Survival depends on finding a market that urgently cares, not merely on believing the product deserves to win.",
    objectives: [
      "Understand why product quality alone is insufficient",
      "See how market, timing, competition, distribution, and cash interact",
      "Navigate when the market rejects the plan"
    ],
    concepts: ["product", "market", "survival", "distribution"],
    body: [
      "Founders often love their product before the market does. That love is necessary but dangerous. A company survives when customers care enough to adopt, pay, switch, renew, and tell the truth through behavior. Internal conviction cannot substitute for market pull.",
      "Horowitz's operating reality is that product, market, distribution, competition, timing, and cash are inseparable. A good product can fail if the market is not ready, acquisition is too expensive, competitors control the channel, or runway ends before learning compounds.",
      "When the market rejects the plan, leaders face a brutal choice: keep pushing, pivot, narrow the segment, change pricing, replace executives, sell the company, or cut burn. None of these options is clean because each one affects morale and identity.",
      "The practical lesson is to stay loyal to the company mission and customer truth, not to the first version of the plan. Survival often requires changing the story while preserving enough conviction to keep moving."
    ],
    support: [
      {
        type: "framework",
        title: "Market reality checks",
        stages: [
          { name: "Urgency", description: "Do customers experience the problem as important now?" },
          { name: "Access", description: "Can the company reach buyers efficiently?" },
          { name: "Switching", description: "Will customers leave existing habits or vendors?" },
          { name: "Economics", description: "Can revenue, margin, and cash support survival?" }
        ]
      }
    ],
    whyThisMatters:
      "A company can be internally excellent and externally irrelevant if it misreads market reality.",
    practicalApplication:
      "Separate evidence of customer admiration from evidence of customer commitment.",
    commonMistakes: [
      "Equating product quality with market demand",
      "Ignoring distribution and timing",
      "Staying loyal to the original plan after customer behavior disproves it"
    ],
    misconceptions: [
      {
        misconception: "If the product is great, the market will find it.",
        correction:
          "Markets require timing, access, urgency, economics, and trust."
      }
    ],
    lens:
      "Ask what customers are doing, paying for, and changing, not only what they say they like.",
    anchors: [
      "Market truth outranks founder preference.",
      "Survival is product plus market plus distribution plus cash."
    ],
    takeaways: [
      "Product quality is necessary but not sufficient.",
      "Market rejection requires leadership adaptation.",
      "Cash and timing shape strategic options."
    ],
    examples: [
      "A technically strong product fails because buyers have no urgency.",
      "A startup narrows to a painful niche where adoption is faster.",
      "A company changes pricing after discovering the wrong buyer owns the budget."
    ],
    relatedSections: ["reality-building-company", "leading-through-crisis"]
  }),
  lesson({
    id: "leading-through-crisis",
    title: "Leading Through Crisis Without Losing the Company",
    eyebrow: "Crisis",
    minutes: 34,
    summary:
      "Crisis leadership requires truth, focus, communication, credibility, and calm that does not depend on pretending conditions are better than they are.",
    objectives: [
      "Communicate truthfully during crisis",
      "Maintain focus when morale is fragile",
      "Preserve credibility through action"
    ],
    concepts: ["crisis", "truth", "morale", "credibility"],
    body: [
      "Crisis compresses time. Problems that could once be handled gradually now demand immediate prioritization. Cash runs down, customers hesitate, employees speculate, competitors attack, and investors ask sharper questions. The leader's behavior becomes a signal everyone reads.",
      "Denial kills trust because people usually sense more than leaders admit. When the official story contradicts observable reality, employees stop believing leadership. Once credibility is gone, even good decisions are harder to execute because the organization no longer trusts the messenger.",
      "Crisis communication must be truthful but not theatrical. Leaders need to state the situation, explain the plan, define priorities, repeat what matters, and show evidence of action. Calm does not mean pretending. Calm means the leader can face reality without spreading panic.",
      "The company survives crisis through focus. A crisis plan with ten priorities is often a wish list. The leader must decide what will be protected, what will be sacrificed, and what the organization must execute now."
    ],
    support: [
      {
        type: "diagram",
        title: "Crisis leadership sequence",
        steps: [
          "Face the facts",
          "Narrow priorities",
          "Communicate the plan",
          "Act visibly",
          "Update as reality changes"
        ]
      }
    ],
    whyThisMatters:
      "A leader can lose the company psychologically before losing it financially if credibility collapses.",
    practicalApplication:
      "In crisis, reduce the plan to the few decisions and behaviors that most affect survival.",
    commonMistakes: [
      "Hiding bad news to preserve morale",
      "Creating too many priorities",
      "Confusing calm with vague reassurance"
    ],
    misconceptions: [
      {
        misconception: "Morale depends on positive messaging.",
        correction:
          "Morale depends on credible truth, visible action, and belief that leadership is facing reality."
      }
    ],
    lens:
      "Ask whether your communication increases clarity or merely reduces your discomfort.",
    anchors: [
      "Credibility is crisis capital.",
      "Calm means facing reality without panic."
    ],
    takeaways: [
      "Crisis requires focus and truth.",
      "Denial destroys trust.",
      "Visible action supports morale more than vague optimism."
    ],
    examples: [
      "A CEO explains a burn reduction plan and the priorities it protects.",
      "A manager names a delivery risk early instead of hiding slippage.",
      "A leadership team cancels secondary initiatives to preserve the core business."
    ],
    relatedSections: ["the-struggle-ceo-loneliness", "peacetime-wartime-ceo"]
  }),
  lesson({
    id: "founder-psychology-accountability",
    title: "Founder Psychology, Resilience, and Accountability",
    eyebrow: "Accountability",
    minutes: 32,
    summary:
      "Founders need conviction, adaptability, emotional endurance, and enough humility to let reality correct their identity.",
    objectives: [
      "Understand founder psychology under pressure",
      "Balance conviction with adaptability",
      "Recognize accountability as lonely but necessary"
    ],
    concepts: ["founder psychology", "resilience", "accountability", "ego"],
    body: [
      "The founder role rewards unusual conviction. Without it, most companies would never survive the early disbelief, rejection, and chaos. But the same conviction can become dangerous when it turns into ego protection. Founders must believe strongly and still let reality speak.",
      "Accountability is lonely because the leader cannot distribute ultimate responsibility evenly across the organization. Advisors advise, executives execute, investors pressure, employees commit, but the CEO often owns the final call and its consequences.",
      "Fear distorts this role. A founder may avoid replacing a loyal executive, delay a pivot, overpromise to investors, hide bad news, or defend a failing strategy because changing course feels like personal failure. The company then becomes hostage to the leader's identity.",
      "Resilience is not stubbornness. It is the ability to keep functioning, learning, deciding, and communicating under stress. It includes the courage to adapt without collapsing into shame."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Conviction versus ego",
        not: "Conviction means defending the original belief at all costs.",
        but: "Conviction means staying committed to the mission while updating the plan as reality changes."
      }
    ],
    whyThisMatters:
      "A company's adaptability often depends on whether the founder can separate reality from self-protection.",
    practicalApplication:
      "Identify one place where changing your mind would feel like identity loss, then examine the evidence anyway.",
    commonMistakes: [
      "Calling stubbornness conviction",
      "Avoiding accountability through blame",
      "Treating adaptation as humiliation"
    ],
    misconceptions: [
      {
        misconception: "Resilience means never changing course.",
        correction:
          "Resilience means continuing to lead responsibly as evidence changes."
      }
    ],
    lens:
      "Ask whether the company needs your conviction or your ego is demanding protection.",
    anchors: [
      "Accountability cannot be outsourced.",
      "Resilience is adaptive endurance."
    ],
    takeaways: [
      "Founder psychology shapes company decisions.",
      "Conviction must be balanced by reality.",
      "Accountability is lonely but central to leadership."
    ],
    examples: [
      "A founder admits a go-to-market strategy failed and rebuilds it.",
      "A CEO owns a hiring mistake instead of blaming the executive.",
      "A leader keeps morale steady while revising the plan."
    ],
    relatedSections: ["the-struggle-ceo-loneliness", "no-easy-answers"]
  }),
  lesson({
    id: "final-operating-manual-hard-leadership",
    title: "Final Synthesis: An Operating Manual for Hard Leadership",
    eyebrow: "Synthesis",
    minutes: 35,
    summary:
      "The book connects crisis, people decisions, culture, management discipline, and CEO psychology into a practical operating manual for difficult leadership.",
    objectives: [
      "Integrate the book's major lessons",
      "Use the ideas as a leadership operating lens",
      "Remember what matters months later"
    ],
    concepts: ["synthesis", "leadership", "operating discipline", "responsibility"],
    body: [
      "The Hard Thing About Hard Things is ultimately a book about responsibility under pressure. It does not promise that leadership becomes clean once you learn the right concepts. It teaches that serious leadership often means acting when the clean answer does not exist.",
      "The ideas connect through operating reality. Company building is hard because markets resist, people are complicated, cash is finite, culture is behavioral, communication decays, and leaders are human. The CEO's job is to face this reality earlier than everyone else and help the organization act on it.",
      "The book's most practical pattern is truth plus discipline. Tell the truth about the business. Tell the truth about people. Tell the truth about culture. Then build the cadence, standards, decisions, and communication that make truth actionable.",
      "Months later, remember this: hard leadership is not inspirational performance. It is judgment, courage, clarity, and responsibility when there is no painless way forward."
    ],
    support: [
      {
        type: "synthesis",
        title: "The hard leadership loop",
        text:
          "Face reality, choose priorities, make the call, communicate clearly, absorb responsibility, and update when evidence changes."
      }
    ],
    whyThisMatters:
      "The curriculum helps leaders prepare for the moments that slogans and clean frameworks do not cover.",
    practicalApplication:
      "Use the book as a leadership diagnostic for crisis, hiring, firing, culture, management debt, and communication.",
    commonMistakes: [
      "Reducing the book to founder toughness",
      "Using wartime language to justify poor management",
      "Admiring hard decisions without building humane operating discipline"
    ],
    misconceptions: [
      {
        misconception: "The lesson is that leadership should be brutal.",
        correction:
          "The lesson is that leadership must be truthful, responsible, humane, and decisive when reality is brutal."
      }
    ],
    lens:
      "Ask what the organization needs you to face, decide, communicate, and own.",
    anchors: [
      "Hard leadership is judgment under cost.",
      "Truth plus discipline turns crisis into action."
    ],
    takeaways: [
      "The book is an operating manual for difficult conditions.",
      "People decisions, culture, and communication are survival issues.",
      "Leaders must combine courage with responsibility."
    ],
    examples: [
      "A CEO uses the framework before a restructuring.",
      "A manager resolves role ambiguity before it becomes debt.",
      "A founder communicates reality without surrendering focus."
    ],
    relatedSections: ["reality-building-company", "leading-through-crisis"]
  })
];

export const hardThingAboutHardThings: Book = {
  slug: "hard-thing-about-hard-things",
  title: "The Hard Thing About Hard Things",
  author: "Ben Horowitz",
  category: "Startups / Leadership / Management",
  difficulty: "Advanced",
  completionTime: "7h 1m",
  progress: 0,
  coverTone:
    "from-zinc-100 via-red-100 to-amber-100 dark:from-zinc-950/60 dark:via-red-950/35 dark:to-amber-950/35",
  description:
    "A serious operator curriculum on CEO psychology, crisis leadership, hiring, firing, management debt, culture, communication, survival, and hard decisions.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "startups",
    "leadership",
    "management",
    "CEO psychology",
    "crisis",
    "hiring",
    "firing",
    "culture",
    "wartime leadership",
    "decision-making",
    "company building",
    "accountability",
    "operating discipline",
    "resilience"
  ],
  intendedOutcomes: [
    "Understand why company building is psychologically brutal",
    "Understand the difference between peacetime and wartime leadership",
    "Understand how CEOs make decisions under uncertainty",
    "Understand hiring, firing, and executive management challenges",
    "Understand why culture is shaped by actions, not slogans",
    "Understand how to handle crises without denial",
    "Apply leadership lessons to startups, teams, and operating roles"
  ],
  promise:
    "After completing this curriculum, you will understand Ben Horowitz's hard-earned lessons on company building, CEO decision-making, crisis leadership, hiring, firing, management, culture, wartime leadership, and the psychological burden of running a company when there are no easy answers.",
  recommendedAudience: [
    "Founders and startup operators",
    "Managers moving into senior leadership",
    "Investors and advisors who want a more realistic view of company building",
    "Team leaders facing crisis, scaling, or difficult people decisions"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around company building, CEO psychology, management, culture, crisis, and leadership. It does not reproduce long passages or chapter text.",
  sections
};
