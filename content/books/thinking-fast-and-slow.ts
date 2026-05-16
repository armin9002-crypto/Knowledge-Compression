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

const thinkingSections: CurriculumSection[] = [
  lesson({
    id: "two-system-mind",
    title: "The Two-System Mind",
    eyebrow: "Foundation",
    minutes: 38,
    summary:
      "Human judgment is shaped by a fast intuitive system and a slower deliberate system that must cooperate under imperfect conditions.",
    objectives: [
      "Understand System 1 and System 2 as useful models of thought",
      "See why fast thinking usually runs first",
      "Recognize when intuition needs deliberate oversight"
    ],
    concepts: ["System 1", "System 2", "intuition", "deliberation"],
    body: [
      "Thinking, Fast and Slow begins with a simple but powerful map of the mind. System 1 is fast, automatic, associative, emotional, and effortless. It reads facial expressions, senses danger in a tone of voice, completes familiar phrases, and forms impressions before we have consciously chosen to think. System 2 is slower, deliberate, effortful, and capable of rule-following. It solves calculations, compares evidence, checks impulses, and holds competing possibilities in mind.",
      "The two systems are not literal organs or separate people inside the head. They are a useful way to describe two modes of mental activity. Fast thinking gives life speed and fluency. Without it, ordinary experience would become impossible. We could not drive a familiar route, understand speech in real time, or interpret a colleague's expression in a meeting. Slow thinking gives us correction, discipline, calculation, and the ability to resist the first answer.",
      "The crucial point is that System 1 usually moves first. It proposes impressions, feelings, causal stories, and answers. System 2 often behaves less like an independent investigator and more like a reviewer that accepts what System 1 has already made plausible. This is efficient, but it is also dangerous. A snap judgment in a meeting can become a settled belief. A market headline can become a feeling of certainty. A first impression can become a hiring decision unless effortful thinking intervenes.",
      "Fast thinking is not bad. Slow thinking is not automatically good. A firefighter, physician, chess player, or experienced manager may see a meaningful pattern quickly because repeated exposure has trained intuition. A tired analyst may reason slowly and still reason poorly. The issue is fit: is the situation familiar, stable, and feedback-rich enough for intuition to be trusted, or is it noisy, emotional, rare, and high-stakes enough to require deliberate checks?",
      "This model matters because many errors begin when the mind treats a hard problem as if it were an easy one. Should we invest in this company? Should we trust this candidate? Is this medical risk serious? System 1 may answer a nearby question instead: Do I like this story? Does this person feel competent? Did I recently hear about a similar danger? System 2 can catch the substitution, but only if it is awake.",
      "The mature use of the two-system model is not to worship rationality or distrust every feeling. It is to build judgment around the strengths and weaknesses of each mode. Let intuition notice, orient, and warn. Then use deliberate thinking when the cost of being wrong is high, the evidence is thin, the story feels too neat, or your confidence arrives faster than your analysis."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Fast is not foolish; slow is not flawless",
        not: "Assuming intuition is always bias and deliberation is always truth.",
        but: "Asking whether the situation is one where fast pattern recognition has earned trust or where slow checking is needed."
      },
      {
        type: "expandedExample",
        scenario:
          "A leader forms an instant impression that a candidate is executive material.",
        defaultApproach:
          "Treat the fluent first impression as evidence and spend the interview confirming it.",
        betterApproach:
          "Use the impression as a hypothesis, then check work samples, role criteria, references, and base rates for similar hires.",
        whyItWorks:
          "The method gives System 1 a voice without letting it become the whole decision."
      }
    ],
    whyThisMatters:
      "The two-system model gives readers a practical language for noticing when judgment is running on impression rather than evidence.",
    practicalApplication:
      "Use fast impressions as signals, not verdicts. Slow down when a decision is consequential, unfamiliar, emotionally charged, or too easy to explain.",
    commonMistakes: [
      "Treating the first coherent story as the truth",
      "Assuming slow analysis cannot be biased",
      "Using the two-system model as a slogan instead of a diagnostic tool"
    ],
    misconceptions: [
      {
        misconception: "The book says intuition is bad.",
        correction:
          "The book says intuition is powerful and often useful, but it needs oversight in environments where confidence can outrun evidence."
      }
    ],
    applicationLens:
      "Before major decisions, ask which system is currently leading. If the answer came instantly, identify what evidence would have to be true for that answer to deserve confidence.",
    anchors: [
      "System 1 proposes; System 2 is supposed to check.",
      "Trust intuition most where patterns are stable and feedback is clear."
    ],
    takeaways: [
      "Fast thinking is necessary for ordinary life.",
      "Slow thinking is limited and often accepts intuitive suggestions.",
      "Good judgment depends on matching the mode of thinking to the situation."
    ],
    examples: [
      "Reading a face is usually System 1.",
      "Doing a hard calculation recruits System 2.",
      "Reacting to a market headline often begins as intuition before analysis."
    ],
    relatedSections: ["attention-effort-laziness", "intuition-powerful-wrong"]
  }),
  lesson({
    id: "attention-effort-laziness",
    title: "Attention, Effort, and Mental Laziness",
    eyebrow: "Effort",
    minutes: 36,
    summary:
      "Effortful thinking is scarce, so the mind often substitutes easier questions and mistakes cognitive ease for truth.",
    objectives: [
      "Understand why attention is limited",
      "Recognize question substitution and cognitive ease",
      "Improve decisions by noticing when thinking feels too effortless"
    ],
    concepts: ["attention", "cognitive ease", "substitution", "mental effort"],
    body: [
      "System 2 is capable of careful thought, but it is expensive to use. Attention is limited. Holding multiple variables in mind, checking assumptions, comparing probabilities, and resisting a familiar answer all require effort. Because effort feels costly, the mind naturally conserves it. This conservation is useful when the stakes are low, but it becomes risky when a hard question deserves real analysis.",
      "A central pattern in the book is substitution. When faced with a difficult question, people often answer an easier one without noticing the switch. How likely is this business to succeed becomes Do I like the founder's story? How risky is this investment becomes How do I feel after the last month of market news? Is this policy effective becomes Does it match my political tribe? The substituted answer feels like judgment because it arrives fluently.",
      "Cognitive ease makes this worse. Ideas that are familiar, clearly expressed, repeated, or easy to process feel more true than ideas that are awkward or unfamiliar. Clear writing can make a weak argument feel strong. A repeated claim can become believable because the mind mistakes recognition for evidence. A familiar brand, phrase, or chart can reduce skepticism before any real evaluation has occurred.",
      "Mental strain has the opposite effect. When thinking feels difficult, people may become more vigilant, but they may also avoid the work entirely. At the end of a long day, a manager may approve a plan because it sounds plausible rather than because it has been tested. A consumer may choose the default because comparing options is tiring. An investor may rely on a vibe because the actual tradeoff requires unpleasant uncertainty.",
      "This is why decision fatigue matters. The quality of reasoning is not independent of energy, context, and attention. A person may be more vulnerable to shallow thinking when overloaded, hungry, rushed, emotionally activated, or surrounded by information. Serious judgment requires not only intelligence but conditions that let intelligence operate.",
      "The practical implication is to design friction around important thinking. Slow decisions down when you notice fluency, urgency, or fatigue. Translate vague impressions into explicit claims. Write the hard question at the top of the page and check whether you are answering it. System 2 does not need to run every moment, but when it is needed, it needs protection."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Question substitution",
        explanation:
          "The mind answers an easier question when the real question is difficult, then treats the easier answer as if it solved the original problem.",
        useWhen:
          "A decision feels clear even though the evidence is incomplete, ambiguous, or emotionally charged."
      },
      {
        type: "expandedExample",
        scenario:
          "A team reviews a proposal late in the afternoon after several meetings.",
        defaultApproach:
          "Approve the plan because the presentation is polished and everyone is tired of discussing uncertainty.",
        betterApproach:
          "Pause the decision, restate the hard question, identify missing evidence, and decide what must be true for the plan to work.",
        whyItWorks:
          "The team stops confusing fluency and relief with judgment."
      }
    ],
    whyThisMatters:
      "Many poor decisions are not caused by stupidity but by limited attention being spent in the wrong place.",
    practicalApplication:
      "Schedule consequential decisions when attention is fresh, define the exact question being answered, and be suspicious of answers that feel too easy.",
    commonMistakes: [
      "Equating familiar with true",
      "Mistaking a polished presentation for a strong argument",
      "Making complex decisions when tired and then calling the result instinct"
    ],
    misconceptions: [
      {
        misconception: "If something is clear, it is probably true.",
        correction:
          "Clarity improves communication, but cognitive ease can make weak evidence feel stronger than it is."
      }
    ],
    applicationLens:
      "When evaluating a claim, separate ease from evidence. Ask whether the conclusion feels true because it has been demonstrated or because it has become familiar.",
    anchors: [
      "System 2 is capable, but it is not always eager.",
      "Ease is a feeling, not proof."
    ],
    takeaways: [
      "Attention is a scarce decision resource.",
      "People often answer easier questions than the ones asked.",
      "Good judgment requires protecting the conditions for effortful thought."
    ],
    examples: [
      "A familiar claim can feel true because it has been repeated.",
      "A hiring manager may substitute charisma for role fit.",
      "A tired executive may accept a neat story instead of testing assumptions."
    ],
    relatedSections: ["two-system-mind", "heuristics-shortcuts"]
  }),
  lesson({
    id: "intuition-powerful-wrong",
    title: "Intuition: Powerful, Fast, and Often Wrong",
    eyebrow: "Intuition",
    minutes: 38,
    summary:
      "Intuition is pattern recognition, but it is only trustworthy when the environment teaches reliable patterns through clear feedback.",
    objectives: [
      "Understand intuition as learned pattern recognition",
      "Distinguish expert intuition from confident guessing",
      "Recognize when feedback conditions make intuition unreliable"
    ],
    concepts: ["pattern recognition", "feedback", "validity", "confidence"],
    body: [
      "Intuition can be astonishingly competent. A chess master sees a strong move without calculating every possibility. A seasoned firefighter senses that a building is unsafe before articulating the reason. A physician may notice a diagnostic pattern that a novice would miss. These judgments feel fast because the mind has learned from repeated exposure to structured situations.",
      "The trouble is that intuition also feels strong when it has not earned trust. Confidence is not the same as accuracy. A hiring manager may feel certain about a candidate because the interview produced a coherent story. An investor may feel that a company is obviously destined to win because the narrative is vivid. A person may trust social intuition because the emotional impression is clean and immediate.",
      "The difference is the learning environment. Intuition improves when patterns are stable and feedback is clear, rapid, and repeated. Chess has rules, observable outcomes, and many practice cycles. Some emergency settings have recognizable cues and immediate consequences. But markets, politics, hiring, strategy, and many social judgments are noisier. Feedback is delayed, ambiguous, and contaminated by luck.",
      "In noisy environments, emotional coherence can masquerade as truth. If the story fits, the mind relaxes. A charismatic founder, a rising market, or a confident expert can make uncertainty feel resolved. System 1 favors coherent narratives, but reality does not owe us coherence. A good story can be a poor forecast.",
      "This does not mean intuition should be ignored. Often it notices what formal analysis misses: tone, tension, anomalies, subtle experience. The right move is to treat intuition as a prompt for inquiry. What pattern am I seeing? Have I seen this many times before? Did I receive good feedback in the past? What evidence would contradict this feeling?",
      "Developing better intuition is therefore less about trusting your gut and more about improving the conditions that train it. Seek feedback, track predictions, compare outcomes with expectations, and distinguish domains where experience has real validity from domains where confidence mainly reflects story fluency."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Intuition vs expertise",
        not: "A strong feeling that arrives quickly and feels coherent.",
        but: "A fast judgment trained by repeated exposure to stable patterns and accurate feedback."
      },
      {
        type: "comparisonTable",
        title: "When intuition is more or less trustworthy",
        columns: ["Environment", "Feedback", "Intuition quality"],
        rows: [
          ["Chess", "Frequent and clear", "Often strong after deep practice"],
          ["Emergency response", "Concrete and repeated", "Can become highly useful"],
          ["Hiring interviews", "Delayed and noisy", "Often overconfident"],
          ["Market forecasting", "Ambiguous and luck-heavy", "Usually fragile"]
        ]
      }
    ],
    whyThisMatters:
      "Many real-world mistakes come from treating confidence as evidence that intuition has been trained.",
    practicalApplication:
      "Before trusting intuition, inspect the domain: stable patterns, repeated exposure, clear feedback, and a record of calibrated predictions.",
    commonMistakes: [
      "Treating confidence as accuracy",
      "Trusting intuition in noisy domains because it worked in cleaner ones",
      "Ignoring disconfirming evidence because the story feels coherent"
    ],
    misconceptions: [
      {
        misconception: "Gut instinct is either mystical wisdom or useless bias.",
        correction:
          "Intuition is learned pattern recognition; its quality depends on the learning environment."
      }
    ],
    applicationLens:
      "Use intuition as an early signal, then ask whether the signal comes from real expertise or from familiarity, emotion, and narrative fit.",
    anchors: [
      "Intuition is strongest where patterns are stable and feedback is clear.",
      "Confidence measures felt coherence before it measures truth."
    ],
    takeaways: [
      "Fast judgment can be expert or merely fluent.",
      "Noisy domains punish untested intuition.",
      "Better feedback creates better intuition."
    ],
    examples: [
      "A chess master can see a position quickly because the domain teaches patterns.",
      "An investor's strong feeling may reflect recent price action, not insight.",
      "A hiring interview can create confidence that later performance does not justify."
    ],
    relatedSections: ["overconfidence-validity", "heuristics-shortcuts"]
  }),
  lesson({
    id: "heuristics-shortcuts",
    title: "Heuristics: The Shortcuts Behind Judgment",
    eyebrow: "Shortcuts",
    minutes: 36,
    summary:
      "Heuristics simplify difficult judgments, but the same shortcuts that make thinking efficient can create systematic errors.",
    objectives: [
      "Understand what heuristics are and why the mind uses them",
      "See biases as side effects of useful mental machinery",
      "Recognize when shortcuts are replacing evidence"
    ],
    concepts: ["heuristics", "bias", "substitution", "efficiency"],
    body: [
      "A heuristic is a shortcut for judgment. Instead of calculating every relevant fact, the mind uses a simpler cue. How common is this event? Ask how easily examples come to mind. How good is this product? Look at price, brand, or social proof. How risky is this activity? Notice whether it feels vivid, frightening, or recently discussed.",
      "Heuristics exist because full analysis is often impossible. Life moves too quickly and information is too incomplete. Shortcuts let us act, communicate, choose, and survive without turning every moment into a research project. In many ordinary contexts, they work well enough. A familiar route, a trusted colleague, or a repeated pattern can be handled efficiently.",
      "Bias appears when the shortcut is applied outside its reliable range. Ease of recall is not the same as frequency. Price is not always quality. Vividness is not probability. A coherent story is not a base rate. The mind is not broken because it uses shortcuts. It becomes vulnerable because shortcuts can feel like direct perception rather than mental compression.",
      "This is one of the book's most humane insights. Bias is not reserved for foolish people. It is the predictable cost of a mind built for speed, coherence, and limited attention. Intelligent people can be biased because intelligence often gives them better tools for defending the intuitive answer they already prefer.",
      "The practical skill is not to eliminate heuristics. That would be impossible and undesirable. The skill is to notice domains where shortcuts are likely to mislead: rare events, probabilities, forecasts, emotionally vivid risks, social stereotypes, negotiations, and decisions where incentives encourage a particular story.",
      "When a shortcut is suspected, replace impression with structure. Use base rates. Compare alternatives. Seek disconfirming evidence. Translate the story into numbers. Ask what information would matter if the case were less vivid. Heuristics are helpful servants, but they are poor rulers of high-stakes judgment."
    ],
    support: [
      {
        type: "framework",
        title: "A shortcut audit",
        stages: [
          {
            name: "Name the judgment",
            description: "Define the hard question you are actually trying to answer."
          },
          {
            name: "Spot the cue",
            description: "Identify the easier signal your mind may be using instead."
          },
          {
            name: "Check the domain",
            description: "Ask whether the cue is reliable in this kind of decision."
          },
          {
            name: "Add structure",
            description: "Use base rates, evidence, alternatives, or outside views to correct the shortcut."
          }
        ]
      },
      {
        type: "expandedExample",
        scenario:
          "A consumer assumes a more expensive service must be more competent.",
        defaultApproach:
          "Use price as a quality shortcut and feel reassured by the premium signal.",
        betterApproach:
          "Check outcomes, references, transparent process, and fit for the actual problem.",
        whyItWorks:
          "The decision stops relying on a cue that may be informative in some markets but misleading in others."
      }
    ],
    whyThisMatters:
      "Understanding heuristics helps readers see bias as a normal judgment risk rather than a moral failure.",
    practicalApplication:
      "For high-stakes choices, identify the shortcut your mind is using and add at least one structured correction before deciding.",
    commonMistakes: [
      "Assuming shortcuts are always irrational",
      "Mistaking vividness for importance",
      "Using a useful cue in a domain where it no longer predicts the outcome"
    ],
    misconceptions: [
      {
        misconception: "Bias means the mind is defective.",
        correction:
          "Bias often emerges from mental shortcuts that are useful in many settings but unreliable in specific judgment tasks."
      }
    ],
    applicationLens:
      "When a decision feels obvious, ask what shortcut made it obvious. Then decide whether that shortcut deserves authority in this context.",
    anchors: [
      "Heuristics are efficient shortcuts with predictable failure modes.",
      "Bias is often useful machinery used in the wrong setting."
    ],
    takeaways: [
      "The mind simplifies complexity through shortcuts.",
      "Shortcuts can become systematic errors.",
      "Structure is the antidote to overconfident simplification."
    ],
    examples: [
      "Judging risk by vividness after a dramatic news story.",
      "Judging competence by confidence in a meeting.",
      "Replacing a probability question with a story-quality question."
    ],
    relatedSections: ["availability-salience", "representativeness-stories"]
  }),
  lesson({
    id: "anchoring-first-numbers",
    title: "Anchoring and the Hidden Pull of First Numbers",
    eyebrow: "Anchoring",
    minutes: 35,
    summary:
      "Initial numbers shape later judgments even when those numbers are arbitrary, irrelevant, or strategically chosen.",
    objectives: [
      "Understand how anchors influence estimates and negotiations",
      "Recognize why first numbers have disproportionate power",
      "Use counteranchors and independent estimates to reduce anchoring"
    ],
    concepts: ["anchoring", "estimation", "negotiation", "forecasting"],
    body: [
      "Anchoring is the pull of an initial number on later judgment. A listing price shapes what a buyer considers reasonable. A salary range sets expectations before performance is evaluated. A stock price target influences what feels cheap or expensive. Even arbitrary numbers can affect estimates because the mind begins adjustment from the number it has encountered.",
      "The problem is that adjustment is usually insufficient. Once an anchor enters the mind, System 1 searches for ways it could be plausible. System 2 may adjust, but it often adjusts from a contaminated starting point. This is why negotiation, pricing, budgeting, forecasting, and performance evaluation are so vulnerable to the first number on the table.",
      "Anchors are powerful partly because they create a local world. A house listed at a high price makes lower but still elevated offers feel like concessions. A menu places an expensive item near the top so other items feel reasonable by comparison. A manager's early expectation about an employee can shape interpretation of later performance.",
      "In investing, anchoring appears when people fixate on a previous high price, a purchase price, or an analyst target. A stock down 40 percent can feel cheap relative to its old price even if the old price was excessive. A losing investment can feel like it should be held until it returns to the purchase price, even though the purchase price has no moral claim on the future.",
      "Reducing anchoring requires creating distance from the first number. Make an independent estimate before seeing external numbers. Use multiple reference classes. Ask what the value would be if you did not know the listing price, target, or previous high. In negotiation, prepare your own range before entering the room.",
      "Anchoring teaches a broader lesson: judgment is not made in a vacuum. Context shapes what feels reasonable. The first number is often not information; it is architecture. Once you see it, you may already be negotiating with it."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Information vs anchor",
        not: "Treating the first number as neutral evidence simply because it is available.",
        but: "Asking whether the number is informative, strategic, arbitrary, or emotionally sticky."
      },
      {
        type: "application",
        context: "Reducing anchoring",
        steps: [
          "Make an independent estimate before looking at the proposed number.",
          "Use outside comparisons rather than only adjusting from the anchor.",
          "Ask what you would believe if the first number had never been shown."
        ],
        result:
          "The decision becomes less dependent on the first number that entered the conversation."
      }
    ],
    whyThisMatters:
      "Anchoring affects money, work, negotiation, and forecasting because initial numbers often become hidden reference points.",
    practicalApplication:
      "Before negotiations, purchases, investments, or forecasts, write your own estimate and reference range before external anchors are introduced.",
    commonMistakes: [
      "Treating listing prices as fair-value estimates",
      "Using purchase price as evidence of current value",
      "Negotiating without an independent reference point"
    ],
    misconceptions: [
      {
        misconception: "Only relevant numbers influence judgment.",
        correction:
          "Even irrelevant numbers can affect estimates because they become starting points for mental adjustment."
      }
    ],
    applicationLens:
      "Whenever a number arrives early, pause and ask who chose it, why it is here, and what estimate you would have made without it.",
    anchors: [
      "The first number often becomes the room that later thinking lives inside.",
      "Independent estimates are the best defense against anchors."
    ],
    takeaways: [
      "Anchors shape what feels reasonable.",
      "Adjustment away from anchors is often insufficient.",
      "Preparation creates resistance to strategic first numbers."
    ],
    examples: [
      "A salary negotiation is shaped by the first range named.",
      "A home listing influences buyer perception of value.",
      "A stock's old high can become a misleading reference point."
    ],
    relatedSections: ["framing-choice", "prospect-theory-loss"]
  }),
  lesson({
    id: "availability-salience",
    title: "Availability, Salience, and What Comes Easily to Mind",
    eyebrow: "Availability",
    minutes: 36,
    summary:
      "People judge frequency and importance by what is vivid, recent, emotional, repeated, or easy to recall.",
    objectives: [
      "Understand the availability heuristic",
      "Recognize how media, memory, and emotion distort risk perception",
      "Use base rates and broader samples to correct salience"
    ],
    concepts: ["availability", "salience", "risk perception", "recency"],
    body: [
      "The availability heuristic is the tendency to judge how common or important something is by how easily examples come to mind. If a risk is vivid, recent, emotional, or repeatedly discussed, it feels larger. If a risk is quiet, statistical, gradual, or ordinary, it can feel smaller than it is. The mind confuses ease of retrieval with frequency.",
      "This explains many everyday distortions. A dramatic plane crash receives intense attention, so flying may feel more dangerous than driving. A recent market loss makes future losses feel more likely. A coworker's memorable mistake can dominate your view of their competence even if their long-run record is strong. A social media trend can feel widespread because it is highly visible inside a narrow feed.",
      "Availability is useful because memory often contains relevant information. If examples of a problem come easily because you have repeatedly seen it in your own work, the signal may matter. But availability becomes misleading when exposure is shaped by media incentives, emotional intensity, algorithmic repetition, or personal experience that is too narrow to represent the world.",
      "Personal experience is especially persuasive. Statistics may say one thing, but a single vivid case can dominate judgment. A family member harmed by a rare event makes the risk feel immediate. A friend who succeeded through a risky career move can make that path seem safer than it is. Stories travel through memory more easily than distributions.",
      "The correction is not to ignore vivid evidence. It is to place it inside a broader sample. Ask how often this really happens, what base rate applies, whether recent examples are representative, and what quiet risks are being overlooked because they lack drama. In finance, health, safety, and management, the most important risks are not always the most available ones.",
      "Availability teaches humility about attention. What comes to mind is not the same as what matters. The world you can easily remember is only a small, edited version of the world you must decide in."
    ],
    support: [
      {
        type: "expandedExample",
        scenario:
          "An investor wants to abandon a long-term plan after a month of alarming market headlines.",
        defaultApproach:
          "Treat the intensity of recent news as evidence that risk has permanently changed.",
        betterApproach:
          "Compare the situation with historical downturns, personal time horizon, liquidity needs, and the original investment thesis.",
        whyItWorks:
          "The decision is corrected by base rates and context rather than dominated by recent salience."
      },
      {
        type: "keyDistinction",
        title: "Memorable is not the same as probable",
        not: "Using emotional vividness as a measure of frequency or importance.",
        but: "Checking whether the vivid example represents a broader pattern."
      }
    ],
    whyThisMatters:
      "Risk perception guides money, health, leadership, and personal choices, and availability can make rare risks feel common while common risks stay invisible.",
    practicalApplication:
      "When a risk feels large, ask whether it is statistically large, personally relevant, or merely vivid and recent.",
    commonMistakes: [
      "Overreacting to recent events",
      "Letting media exposure define probability",
      "Judging a person or trend by the most memorable example"
    ],
    misconceptions: [
      {
        misconception: "If examples come easily, the pattern must be common.",
        correction:
          "Examples may come easily because they are vivid, repeated, emotional, or personally meaningful."
      }
    ],
    applicationLens:
      "Before changing a plan because something feels prominent, look for the base rate and ask what information is missing because it is less dramatic.",
    anchors: [
      "Ease of recall is not frequency.",
      "Salience edits reality before judgment begins."
    ],
    takeaways: [
      "Recent and vivid information can dominate judgment.",
      "Personal experience can overpower statistical evidence.",
      "Base rates help correct availability."
    ],
    examples: [
      "A plane crash can make flying feel riskier than driving.",
      "A visible online trend can seem more common than it is.",
      "One memorable employee mistake can outweigh a strong record."
    ],
    relatedSections: ["heuristics-shortcuts", "representativeness-stories"]
  }),
  lesson({
    id: "representativeness-stories",
    title: "Representativeness and the Stories We Mistake for Probability",
    eyebrow: "Probability",
    minutes: 39,
    summary:
      "The mind often judges probability by resemblance and narrative coherence, while neglecting base rates and statistical reality.",
    objectives: [
      "Understand the representativeness heuristic",
      "Recognize base rate neglect and story-driven probability errors",
      "Use outside views to improve forecasts"
    ],
    concepts: ["representativeness", "base rates", "conjunction fallacy", "outside view"],
    body: [
      "Representativeness is the tendency to judge probability by how much something resembles a category, stereotype, or story. A charismatic founder seems like a successful entrepreneur. A thoughtful candidate seems like a top performer. A company with a brilliant product story seems like a winning investment. The fit feels informative, and sometimes it is. But resemblance is not probability.",
      "The problem appears when a vivid description overwhelms base rates. Many startups fail, even when founders are impressive. Many confident interviewees underperform. Many exciting companies become poor investments because price, competition, execution, and timing matter. Base rates are boring, but they are often the best starting point for judgment.",
      "Coherent stories are especially seductive. The mind likes narratives with causes, traits, and momentum. A stock is rising because visionary leadership is changing the industry. A team will succeed because the culture feels hungry. A person will excel because their biography resembles someone who succeeded before. The story may be plausible, but plausibility is not enough.",
      "The conjunction fallacy reveals the same weakness. People may judge a detailed story as more likely than a broader category because the details make it feel more representative. But adding conditions cannot make an event more probable than the larger event that contains it. The mind confuses richness of description with likelihood.",
      "Stereotypes also live here. A person can seem like they belong to a role because they match an image, while evidence of actual performance, base rates, and context receives less attention. This is harmful in hiring, leadership, education, and everyday social judgment. The story is often socially comfortable because it feels like pattern recognition.",
      "The correction is the outside view. Start with the base rate: what usually happens in cases like this? Then adjust based on case-specific evidence, but do not let the story erase the distribution. Good judgment respects both narrative detail and statistical humility."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Story vs probability",
        not: "Treating a coherent description as evidence that an outcome is likely.",
        but: "Starting with base rates, then adjusting carefully for evidence that truly distinguishes the case."
      },
      {
        type: "expandedExample",
        scenario:
          "A venture team evaluates a startup with a charismatic founder and elegant product story.",
        defaultApproach:
          "Treat the founder's resemblance to successful entrepreneurs as strong evidence of future success.",
        betterApproach:
          "Begin with startup failure rates, then assess distribution, unit economics, execution record, market timing, and price.",
        whyItWorks:
          "The team lets the story inform the case without replacing the base rate."
      }
    ],
    whyThisMatters:
      "Forecasts fail when compelling stories make low-probability outcomes feel likely.",
    practicalApplication:
      "For forecasts, hiring, investing, and strategy, begin with the base rate before discussing the vivid features of the specific case.",
    commonMistakes: [
      "Ignoring boring statistical information",
      "Treating resemblance as destiny",
      "Adding details to a story and feeling that it became more probable"
    ],
    misconceptions: [
      {
        misconception: "A detailed story is more likely because it explains more.",
        correction:
          "More detail can make a story feel plausible while mathematically narrowing the conditions that must be true."
      }
    ],
    applicationLens:
      "When a case feels obvious because it matches a pattern, ask what happens to the average case in that category and what evidence justifies moving away from the average.",
    anchors: [
      "Resemblance is not probability.",
      "Base rates are boring because they are useful."
    ],
    takeaways: [
      "Coherent stories can distort probability.",
      "Base rate neglect is a major forecasting error.",
      "The outside view disciplines narrative judgment."
    ],
    examples: [
      "A candidate who seems like a star may still have ordinary performance odds.",
      "A great company story can still be a poor investment.",
      "A detailed forecast can feel more likely while becoming more fragile."
    ],
    relatedSections: ["overconfidence-validity", "framing-choice"]
  }),
  lesson({
    id: "overconfidence-validity",
    title: "Overconfidence, Expert Intuition, and the Illusion of Validity",
    eyebrow: "Confidence",
    minutes: 40,
    summary:
      "Confidence often reflects the coherence of a story rather than the accuracy of the judgment, especially in low-validity environments.",
    objectives: [
      "Understand why people are often more confident than accurate",
      "Distinguish trustworthy expertise from confident commentary",
      "Use humility as a practical decision advantage"
    ],
    concepts: ["overconfidence", "illusion of validity", "expertise", "forecasting"],
    body: [
      "Overconfidence is one of the book's most important warnings. People often feel more certain than their evidence deserves. The mind builds a coherent story from available information, and coherence produces confidence. But a story can be coherent because missing information has been ignored, uncertainty has been compressed, and alternatives have not been seriously considered.",
      "This is why confidence is not a reliable measure of accuracy. A strategist may be certain about a market, a pundit certain about politics, a manager certain about a hire, or an investor certain about a forecast. The confidence may reveal how well the story fits internally. It does not necessarily reveal how well the story fits the world.",
      "Expert intuition is trustworthy only in environments with validity. The domain must contain stable patterns, and the expert must receive enough feedback to learn those patterns. Some forms of medicine, firefighting, chess, and technical work can meet this standard. Many forecasts in business, markets, geopolitics, and hiring do not. They are noisy, rare, delayed, and shaped by luck.",
      "The illusion of validity appears when people keep trusting judgments in low-validity environments because the judgment process feels skilled. A model is sophisticated, a meeting is rigorous, a narrative is polished, and the expert sounds authoritative. The ritual of analysis creates confidence even when the underlying predictability is low.",
      "Humility is not intellectual weakness. It is a decision advantage. A humble decision-maker asks how predictable the environment really is, how often similar forecasts succeeded, what the base rate says, what could falsify the story, and how much room for error is needed. Humility keeps confidence from becoming exposure.",
      "The practical lesson is to separate confidence, expertise, and track record. Ask whether the person has made repeated predictions in a valid environment and received clear feedback. Ask whether the forecast is being evaluated or merely admired. Ask what the decision would look like if the confident speaker had to live with the downside."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Confidence vs accuracy",
        not: "Assuming a strong internal feeling of coherence means the judgment is correct.",
        but: "Checking whether the environment is predictable and whether past predictions were calibrated."
      },
      {
        type: "application",
        context: "Testing expert confidence",
        steps: [
          "Ask whether the domain has stable patterns.",
          "Look for repeated, measurable feedback.",
          "Compare the expert's past predictions with actual outcomes.",
          "Design room for error if the environment is low-validity."
        ],
        result:
          "Expertise is evaluated by conditions and track record, not by authority or fluency alone."
      }
    ],
    whyThisMatters:
      "Overconfidence drives poor investing, hiring, strategy, and planning because people underestimate uncertainty when a story feels complete.",
    practicalApplication:
      "For consequential forecasts, require base rates, track records, alternative scenarios, and explicit uncertainty ranges.",
    commonMistakes: [
      "Mistaking fluent explanation for predictive power",
      "Trusting experts equally across high-validity and low-validity domains",
      "Planning around a single confident forecast"
    ],
    misconceptions: [
      {
        misconception: "More confidence means more expertise.",
        correction:
          "Confidence often measures story coherence; expertise requires a valid environment and feedback-trained judgment."
      }
    ],
    applicationLens:
      "When someone sounds certain, ask what would make them wrong and whether the domain gives anyone enough feedback to deserve that certainty.",
    anchors: [
      "Confidence can be the feeling of a coherent story, not the mark of truth.",
      "Expertise needs validity and feedback."
    ],
    takeaways: [
      "Overconfidence is common in noisy domains.",
      "Track records matter more than authority.",
      "Humility improves decisions by preserving room for error."
    ],
    examples: [
      "Market forecasts often sound more precise than markets allow.",
      "Hiring confidence can exceed evidence from interviews.",
      "Strategic plans can become overconfident because they explain the future too neatly."
    ],
    relatedSections: ["intuition-powerful-wrong", "representativeness-stories"]
  }),
  lesson({
    id: "framing-choice",
    title: "Framing Effects and the Architecture of Choice",
    eyebrow: "Framing",
    minutes: 36,
    summary:
      "The same facts can lead to different decisions depending on how options are presented, labeled, and made default.",
    objectives: [
      "Understand how framing changes decisions without changing facts",
      "Recognize the power of defaults, wording, and gain-loss presentation",
      "Design clearer choices for yourself and others"
    ],
    concepts: ["framing", "defaults", "choice architecture", "presentation"],
    body: [
      "A framing effect occurs when different presentations of the same underlying facts lead to different choices. A medical treatment described as having a high survival rate can feel different from one described by its mortality rate. A fee described as a surcharge can feel different from a discount lost. An investment decline framed as a temporary fluctuation can feel different from one framed as a permanent loss.",
      "This matters because people do not choose from raw reality. They choose from descriptions, defaults, categories, labels, and reference points. The architecture around a choice shapes what is noticed and what is ignored. System 1 responds to the emotional meaning of a frame before System 2 has translated the facts.",
      "Defaults are especially powerful. If employees are automatically enrolled in a savings plan, many remain enrolled. If enrollment requires active opt-in, many delay or avoid it. The underlying opportunity may be the same, but the path of least resistance changes behavior. Choice architecture matters because inertia is real.",
      "Framing is not merely manipulation. It can clarify or distort. A leader presenting a business tradeoff can frame it as cost-cutting, resilience, strategic focus, or abandonment. Each frame highlights different values and risks. A responsible frame makes the tradeoff clearer. A deceptive frame hides what the decision actually costs.",
      "Framing also affects self-management. Calling a market decline a loss may create panic if the time horizon is long and the plan is intact. Calling a health behavior an investment in energy may work better than calling it a restriction. But the goal is not to trick yourself. It is to choose frames that reveal the real decision rather than amplify the most emotional part.",
      "The practical skill is frame rotation. Restate the same decision in gains, losses, defaults, opportunity costs, and long-term consequences. If your preference changes dramatically under a neutral restatement, the frame is doing too much work."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Common framing shifts",
        columns: ["Decision", "Frame A", "Frame B"],
        rows: [
          ["Healthcare", "90% survival", "10% mortality"],
          ["Savings", "Opt in later", "Enrolled by default"],
          ["Pricing", "Discount for cash", "Surcharge for card"],
          ["Investing", "Temporary volatility", "Loss from the high"]
        ]
      },
      {
        type: "application",
        context: "Rotating frames",
        steps: [
          "Describe the choice in neutral terms.",
          "Restate it as a gain and as a loss.",
          "Identify the default and who benefits from it.",
          "Ask whether your preference survives the restatement."
        ],
        result:
          "The decision becomes less dependent on one emotionally loaded presentation."
      }
    ],
    whyThisMatters:
      "Framing shapes decisions in leadership, money, healthcare, policy, sales, and daily life even when the facts remain constant.",
    practicalApplication:
      "Before accepting a frame, restate the decision in at least two alternative ways and identify the default option.",
    commonMistakes: [
      "Assuming presentation is neutral",
      "Letting defaults decide by inertia",
      "Using frames that hide tradeoffs instead of clarifying them"
    ],
    misconceptions: [
      {
        misconception: "If the facts are the same, the decision should be the same.",
        correction:
          "Human judgment responds to how facts are organized, emphasized, and emotionally labeled."
      }
    ],
    applicationLens:
      "When a choice feels obvious, ask what frame made it obvious. Then change the frame and see whether the preference remains stable.",
    anchors: [
      "People choose from framed reality, not raw reality.",
      "Defaults are decisions made by architecture."
    ],
    takeaways: [
      "Presentation can change preferences.",
      "Defaults exploit inertia.",
      "Good choice architecture makes tradeoffs clearer."
    ],
    examples: [
      "A survival frame can feel safer than an equivalent mortality frame.",
      "Opt-out savings plans change behavior without changing values.",
      "A business cut can be framed as discipline or decline."
    ],
    relatedSections: ["anchoring-first-numbers", "prospect-theory-loss"]
  }),
  lesson({
    id: "prospect-theory-loss",
    title: "Prospect Theory: Loss Aversion and Risk Behavior",
    eyebrow: "Risk",
    minutes: 40,
    summary:
      "People evaluate gains and losses relative to reference points, and losses often carry more emotional weight than equivalent gains.",
    objectives: [
      "Understand loss aversion and reference points",
      "Recognize risk-seeking behavior around losses",
      "Apply prospect theory to investing, negotiation, and project decisions"
    ],
    concepts: ["prospect theory", "loss aversion", "reference points", "sunk costs"],
    body: [
      "Prospect theory is one of Kahneman's central contributions to behavioral economics. It challenges the idea that people evaluate outcomes only by final wealth or objective value. Instead, people evaluate gains and losses relative to reference points. A raise feels different depending on expectation. A market decline feels different depending on the purchase price. A negotiation feels different depending on what each side believes it has already conceded.",
      "Loss aversion means that losses often hurt more than equivalent gains please. Losing one hundred dollars usually feels more intense than gaining one hundred dollars feels good. This asymmetry shapes risk behavior. Around gains, people often become cautious because they want to protect what they have. Around losses, they may become risk-seeking because they want to get back to even.",
      "This explains why investors hold losing stocks too long. Selling realizes the loss and forces the reference point to be updated. Holding preserves the hope of return. The purchase price becomes psychologically powerful even though the future does not care what you paid. The same pattern appears in bad projects: teams continue investing because stopping would admit the loss.",
      "Sunk costs are emotionally sticky because they turn future decisions into referendums on past decisions. A person stays in a bad strategy, job, relationship pattern, or business initiative because abandoning it feels like making the loss official. Prospect theory helps explain why rational advice to ignore sunk costs is psychologically difficult.",
      "Risk behavior also depends on framing. A sure small loss can feel intolerable if a gamble offers a chance to avoid it, even when the gamble worsens expected outcomes. In negotiations, parties may take aggressive risks when they feel they are losing what they deserve. In leadership, teams may double down when a plan is behind schedule because the loss frame dominates judgment.",
      "The practical response is to move from reference points to forward-looking evaluation. What decision has the best future expected value from here? What would we choose if we inherited this position today? What loss are we trying not to feel? The point is not to become emotionless. It is to prevent the pain of loss from quietly governing risk."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Loss vs bad future choice",
        not: "Continuing because stopping would make the past loss feel real.",
        but: "Choosing based on the future value of continuing from the present position."
      },
      {
        type: "expandedExample",
        scenario:
          "A company has spent heavily on a product that customers are not adopting.",
        defaultApproach:
          "Keep funding the project because cancellation would make the prior investment feel wasted.",
        betterApproach:
          "Ask whether the team would fund the project today if the prior spending belonged to someone else.",
        whyItWorks:
          "The question shifts attention from sunk cost pain to future expected value."
      }
    ],
    whyThisMatters:
      "Loss aversion shapes investing, negotiation, management, and personal decisions by making recovery feel more urgent than good judgment.",
    practicalApplication:
      "When facing a loss, separate the emotional desire to break even from the forward-looking decision you would make from here.",
    commonMistakes: [
      "Holding losers to avoid realizing regret",
      "Taking bigger risks to escape a loss frame",
      "Treating sunk costs as reasons to continue"
    ],
    misconceptions: [
      {
        misconception: "People are simply risk-averse.",
        correction:
          "People are often risk-averse around gains and risk-seeking around losses, depending on the reference point."
      }
    ],
    applicationLens:
      "Ask what reference point is shaping the decision. If the goal is mainly to avoid feeling a loss, slow down and evaluate the future from the present.",
    anchors: [
      "Losses usually loom larger than equivalent gains.",
      "Reference points quietly govern risk behavior."
    ],
    takeaways: [
      "Value is felt relative to expectations and reference points.",
      "Loss aversion can create reckless attempts to break even.",
      "Sunk costs should not decide future action."
    ],
    examples: [
      "An investor holds a losing stock to avoid realizing loss.",
      "A team doubles down on a failing project.",
      "A negotiator takes risk because a fair offer feels like a loss."
    ],
    relatedSections: ["framing-choice", "remembering-experiencing-self"]
  }),
  lesson({
    id: "remembering-experiencing-self",
    title: "The Remembering Self, the Experiencing Self, and Happiness",
    eyebrow: "Memory",
    minutes: 38,
    summary:
      "The self that lives through moments is not the same as the self that remembers and evaluates a life.",
    objectives: [
      "Distinguish experienced wellbeing from remembered wellbeing",
      "Understand peak-end effects and duration neglect",
      "Apply the distinction to life planning and decision-making"
    ],
    concepts: ["remembering self", "experiencing self", "peak-end rule", "duration neglect"],
    body: [
      "Kahneman's work on happiness introduces a striking distinction. The experiencing self lives through moments. It feels the commute, the conversation, the meal, the stress, the beauty, the boredom. The remembering self looks back and turns experience into story. It evaluates the vacation, the job, the relationship, the year, or the life.",
      "These selves do not always agree. Memory does not record life evenly. It compresses, edits, and emphasizes peaks, endings, and narrative meaning. A vacation may be remembered fondly because the final day was beautiful, even if much of it was stressful. A difficult project may be remembered as worthwhile because it ended in achievement. An enjoyable season may be undervalued if it lacks a clean story.",
      "The peak-end rule captures part of this. People often remember an experience by its most intense point and its ending rather than by the average of every moment. Duration neglect adds another distortion: the length of an experience may matter less to memory than we expect. The remembering self is a storyteller, not a neutral recorder.",
      "This matters because people often make future choices for the remembering self. They choose experiences that will make good stories, careers that will look meaningful in retrospect, vacations that photograph well, or sacrifices that fit a desired identity. Sometimes this is wise. A life needs memory, meaning, and narrative. But the experiencing self also matters. A life that looks good in memory can still contain too much daily misery.",
      "The distinction affects work and relationships. A career can produce pride in retrospect while damaging daily wellbeing. A family tradition can be inconvenient in the moment but deeply valuable in memory. A relationship can have dramatic highs and painful lows that the remembering self romanticizes while the experiencing self pays the cost.",
      "Good life design respects both selves. Ask not only, Will I be glad I did this? but also, What will it be like to live through? Ask not only, Will this create a meaningful story? but also, How many ordinary days will it shape, and in what direction? Happiness is not only a memory score, and it is not only momentary pleasure. It is the relationship between lived experience, remembered meaning, and chosen values."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Memory vs experience",
        not: "Assuming the story you remember is a complete record of how life felt while it was happening.",
        but: "Recognizing that memory emphasizes peaks, endings, and meaning while daily experience accumulates quietly."
      },
      {
        type: "expandedExample",
        scenario:
          "A person chooses a prestigious role that sounds meaningful but makes most days frantic and depleted.",
        defaultApproach:
          "Let the remembering self dominate because the role creates a strong identity story.",
        betterApproach:
          "Evaluate both the long-term story and the daily experience of meetings, autonomy, stress, and recovery.",
        whyItWorks:
          "The decision respects meaning without ignoring the life that must be lived moment by moment."
      }
    ],
    whyThisMatters:
      "People often optimize for remembered stories while neglecting the quality of ordinary lived experience.",
    practicalApplication:
      "When choosing work, travel, commitments, or goals, evaluate both the remembered story and the day-to-day experience.",
    commonMistakes: [
      "Choosing experiences only because they will make good memories",
      "Ignoring daily suffering because the narrative sounds impressive",
      "Assuming longer pleasure always creates proportionally better memory"
    ],
    misconceptions: [
      {
        misconception: "Happiness is one thing that can be optimized directly.",
        correction:
          "Experienced wellbeing and remembered wellbeing can diverge, so wise choices consider both."
      }
    ],
    applicationLens:
      "Before a major life choice, ask two questions: What story will this create, and what will an ordinary Tuesday inside this choice feel like?",
    anchors: [
      "The remembering self tells stories; the experiencing self lives moments.",
      "A good life should not sacrifice one self entirely to the other."
    ],
    takeaways: [
      "Memory emphasizes peaks, endings, and meaning.",
      "Duration does not influence memory as much as intuition expects.",
      "Life design should account for both story and lived experience."
    ],
    examples: [
      "A vacation may be remembered by its ending.",
      "A difficult project can be remembered as meaningful.",
      "A prestigious career can satisfy memory while straining daily wellbeing."
    ],
    relatedSections: ["prospect-theory-loss", "final-synthesis-thinking"]
  }),
  lesson({
    id: "final-synthesis-thinking",
    title: "Final Synthesis: Thinking Better Without Pretending to Be Fully Rational",
    eyebrow: "Synthesis",
    minutes: 42,
    summary:
      "The book's practical lesson is not to eliminate intuition, but to know when judgment needs structure, humility, and safeguards.",
    objectives: [
      "Connect the major ideas into a practical decision system",
      "Use safeguards for uncertainty, bias, and overconfidence",
      "Remember how to think better months after finishing"
    ],
    concepts: ["decision safeguards", "outside view", "premortem", "calibration"],
    body: [
      "Thinking, Fast and Slow can feel like a catalog of ways the mind goes wrong, but its deeper value is more constructive. It teaches that human judgment is powerful, adaptive, and limited. We need fast thinking to live, decide, relate, and act. We need slow thinking to check, compare, calculate, and resist seductive stories. The goal is not to become fully rational. The goal is to become less easily fooled by the conditions under which intuition fails.",
      "The ideas connect through a common pattern. System 1 creates fluent impressions. System 2 often accepts them. Heuristics simplify difficult questions. Availability makes vivid information feel common. Representativeness makes stories feel probable. Anchors and frames shape what feels reasonable. Loss aversion changes risk behavior. Memory rewrites experience into stories. Confidence rises when the story feels coherent, even when evidence is weak.",
      "Better thinking therefore requires safeguards. Use base rates before case stories. Seek the outside view before building the inside narrative. Make independent estimates before seeing anchors. Rotate frames before choosing. Track predictions to calibrate confidence. Use premortems to imagine failure before commitment hardens. Separate sunk costs from future value. Ask whether the domain is valid enough for intuition.",
      "These tools work because they change the environment around thinking. They do not ask the mind to stop being human. They add friction at the points where fast judgment is most likely to overreach. A checklist, base rate, or premortem is not a sign of weak intelligence. It is a way to keep intelligence from becoming a lawyer for the first impression.",
      "The book also teaches humility. Many decisions involve uncertainty that cannot be removed. A good decision can fail; a bad decision can succeed. Confidence can exceed accuracy. Experts can be useful in one domain and unreliable in another. Humility does not mean paralysis. It means designing decisions with uncertainty in mind: smaller bets, wider ranges, more feedback, and less dependence on one story.",
      "Six months from now, remember this: when a judgment feels effortless, ask what made it easy. When a story feels complete, ask what is missing. When a number appears first, ask whether it anchored you. When a loss hurts, ask whether you are trying to recover emotionally or decide wisely. When an expert is confident, ask whether the environment deserves confidence. Thinking better is not a mood. It is a set of structures that help the mind do what it cannot reliably do unaided."
    ],
    support: [
      {
        type: "framework",
        title: "A practical decision operating system",
        stages: [
          {
            name: "Define",
            description: "Write the actual question so you do not answer an easier substitute."
          },
          {
            name: "Base rate",
            description: "Start with what usually happens in similar cases."
          },
          {
            name: "Frame",
            description: "Restate the choice as gains, losses, defaults, and opportunity costs."
          },
          {
            name: "Stress test",
            description: "Use a premortem, disconfirming evidence, and uncertainty ranges."
          },
          {
            name: "Calibrate",
            description: "Track forecasts and learn where confidence was justified."
          }
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text: "Let intuition generate hypotheses, but use structure for high-stakes decisions: base rates, outside views, independent estimates, alternative frames, premortems, and humility about confidence."
      }
    ],
    whyThisMatters:
      "The book becomes practical when its psychology is translated into repeatable safeguards for judgment under uncertainty.",
    practicalApplication:
      "For any consequential decision, use a short decision review: define the question, identify the intuitive answer, check base rates, rotate frames, imagine failure, and record your confidence.",
    commonMistakes: [
      "Trying to eliminate intuition instead of supervising it",
      "Using bias knowledge to critique others but not one's own decisions",
      "Replacing overconfidence with paralysis"
    ],
    misconceptions: [
      {
        misconception: "Better thinking means becoming purely rational.",
        correction:
          "Better thinking means building safeguards around a mind that will always use intuition, stories, emotion, and limited attention."
      }
    ],
    applicationLens:
      "The practical test is whether a decision has been protected from the most likely failure mode: substituted questions, vivid evidence, base-rate neglect, anchoring, framing, loss aversion, or overconfidence.",
    anchors: [
      "Do not eliminate intuition; supervise it where it is likely to fail.",
      "Thinking better means adding structure where confidence comes too easily."
    ],
    takeaways: [
      "The mind is adaptive, not fully rational.",
      "Most biases are predictable failure modes of useful processes.",
      "Decision safeguards make humility operational."
    ],
    examples: [
      "A hiring decision improves when interviews are paired with structured criteria and base rates.",
      "An investment decision improves when recent salience is checked against long-term evidence.",
      "A strategy decision improves when the team runs a premortem before commitment."
    ],
    relatedSections: ["two-system-mind", "overconfidence-validity"]
  })
];

export const thinkingFastAndSlow: Book = {
  slug: "thinking-fast-and-slow",
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  category: "Decision Psychology",
  difficulty: "Advanced",
  completionTime: "7h 20m",
  progress: 0,
  coverTone:
    "from-zinc-100 via-sky-100 to-slate-200 dark:from-zinc-800 dark:via-sky-950/50 dark:to-slate-900",
  description:
    "A deep prose-first curriculum on System 1 and System 2, heuristics, bias, probability, framing, loss aversion, confidence, memory, and better judgment.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(thinkingSections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "judgment",
    "intuition",
    "cognitive bias",
    "decision-making",
    "behavioral economics",
    "probability",
    "risk",
    "uncertainty",
    "confidence",
    "attention",
    "memory",
    "loss aversion",
    "framing",
    "happiness",
    "rationality"
  ],
  intendedOutcomes: [
    "Understand how System 1 and System 2 shape everyday judgment",
    "Recognize common heuristics and the biases they can produce",
    "Think more clearly about probability, risk, uncertainty, and base rates",
    "Identify anchoring, availability, representativeness, and framing effects",
    "Understand loss aversion, prospect theory, confidence, expert intuition, and remembered happiness",
    "Use decision safeguards such as outside views, alternative frames, premortems, and calibration"
  ],
  promise:
    "After completing this curriculum, you will understand how System 1 and System 2 thinking shape judgment, why cognitive biases occur, how people misread probability and risk, and how to make more thoughtful decisions in work, investing, relationships, and daily life.",
  recommendedAudience: [
    "Readers who want a serious grasp of Thinking, Fast and Slow",
    "Leaders, investors, operators, and analysts making high-stakes decisions",
    "Students of psychology, behavioral economics, and decision-making",
    "Anyone who wants more humility and structure in judgment"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public concepts and decision-science themes. It does not reproduce long passages or chapter text.",
  sections: thinkingSections
};
