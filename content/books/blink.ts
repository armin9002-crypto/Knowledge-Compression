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
    id: "power-danger-snap-judgment",
    title: "The Power and Danger of Snap Judgment",
    eyebrow: "Foundation",
    minutes: 32,
    summary:
      "Blink explores rapid cognition: the mind's ability to reach fast judgments that can be either impressively accurate or dangerously distorted.",
    objectives: [
      "Understand why people judge quickly",
      "Recognize the usefulness and danger of snap judgments",
      "Avoid reading the book as simple gut-trust advice"
    ],
    concepts: ["rapid cognition", "snap judgment", "intuition", "risk"],
    body: [
      "Blink begins with a tension most people recognize. Sometimes we know something quickly before we can explain why. A seasoned expert senses a fake, a leader reads a room, a doctor notices a pattern, or a person feels that an interaction is off. Fast judgment can be powerful because the mind extracts patterns faster than conscious explanation can follow.",
      "But the same speed can be dangerous. First impressions can encode bias. Stress can narrow perception. Confidence can attach itself to stereotypes, status signals, or misleading appearances. The snap judgment feels immediate and therefore true, but immediacy is not evidence.",
      "Gladwell's real subject is not whether intuition is good or bad. It is what kind of intuition we are trusting. Was it shaped by repeated exposure and feedback, or by cultural bias? Is the environment stable enough for patterns to mean something, or noisy enough to fool us? Are we seeing signal or reacting to emotional pressure?",
      "The book is valuable because it preserves the tension. Fast judgment can be wiser than overanalysis in the right conditions and worse than useless in the wrong ones."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Trusting the gut carefully",
        not: "The lesson is trust your gut.",
        but: "The lesson is to understand what kind of gut you are trusting and what shaped it."
      }
    ],
    whyThisMatters:
      "People either overtrust intuition or dismiss it; both mistakes reduce decision quality.",
    practicalApplication:
      "Before acting on a snap judgment, ask whether this domain has trained your intuition or merely triggered a reaction.",
    commonMistakes: [
      "Treating fast confidence as accuracy",
      "Dismissing intuition because it cannot be explained immediately",
      "Using Blink to justify bias or impulse"
    ],
    misconceptions: [
      {
        misconception: "The book says intuition is always superior to analysis.",
        correction:
          "It shows that fast judgment can be powerful or flawed depending on conditions, training, and bias."
      }
    ],
    lens:
      "Ask whether the judgment is calibrated pattern recognition or unexamined reaction.",
    anchors: [
      "Fast judgment is powerful and dangerous.",
      "Know what shaped the gut you are trusting."
    ],
    takeaways: [
      "Rapid cognition is real.",
      "Speed does not guarantee truth.",
      "The key is knowing when intuition is reliable."
    ],
    examples: [
      "A hiring manager likes a candidate instantly because of polish, not evidence.",
      "A firefighter senses structural danger from subtle pattern cues.",
      "An investor reacts to market panic before checking whether the signal is real."
    ],
    relatedSections: ["thin-slicing-patterns", "when-intuition-works", "when-intuition-fails"]
  }),
  lesson({
    id: "thin-slicing-patterns",
    title: "Thin-Slicing: How the Mind Reads Patterns Quickly",
    eyebrow: "Pattern Recognition",
    minutes: 32,
    summary:
      "Thin-slicing is the mind's ability to extract meaningful signals from a narrow slice of experience when the slice contains real diagnostic information.",
    objectives: [
      "Define thin-slicing",
      "Understand when small samples can reveal useful signals",
      "Recognize the dependence on context and expertise"
    ],
    concepts: ["thin-slicing", "patterns", "diagnostic cues", "context"],
    body: [
      "Thin-slicing describes rapid judgment based on limited information. The phrase can sound casual, but the mechanism is serious: the mind is constantly sampling behavior, tone, timing, facial expression, design, structure, and context to infer larger patterns.",
      "Small samples can be meaningful when they contain diagnostic cues. A skilled designer may see from one screen that a product lacks hierarchy. A marriage researcher may notice a pattern in a short exchange. An experienced teacher may sense classroom confusion before students can articulate it.",
      "The risk is that small samples can also be misleading. A confident interview answer may reveal performance skill rather than job competence. A person's appearance may trigger a stereotype rather than useful evidence. A market move may feel meaningful while being noise.",
      "Thin-slicing works best when the observer has learned which cues matter and when the environment provides stable relationships between cue and outcome."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Diagnostic cue",
        explanation:
          "A small signal is useful only if it reliably indicates something important about the larger reality.",
        useWhen:
          "You are tempted to draw a big conclusion from a brief observation."
      }
    ],
    whyThisMatters:
      "Thin-slicing explains why small moments can be revealing without making every first impression trustworthy.",
    practicalApplication:
      "When making a fast read, identify the specific cue and why it is diagnostic in that domain.",
    commonMistakes: [
      "Treating any small sample as meaningful",
      "Ignoring base rates and context",
      "Confusing vivid cues with diagnostic cues"
    ],
    misconceptions: [
      {
        misconception: "Thin-slicing means judging people from almost nothing.",
        correction:
          "It means extracting patterns from limited information when the information contains reliable cues."
      }
    ],
    lens:
      "Ask whether this small slice contains a real signal or just a vivid impression.",
    anchors: [
      "Thin-slicing depends on diagnostic cues.",
      "Small samples can reveal or mislead."
    ],
    takeaways: [
      "The mind reads patterns quickly.",
      "Limited information can be useful in the right domain.",
      "Cue quality matters more than speed."
    ],
    examples: [
      "A product leader spots confusion from a user's first hesitation.",
      "A recruiter overreads charisma in a short interview.",
      "A doctor recognizes a familiar symptom pattern quickly."
    ],
    relatedSections: ["adaptive-unconscious", "expertise-feedback-trained-judgment"]
  }),
  lesson({
    id: "adaptive-unconscious",
    title: "The Adaptive Unconscious",
    eyebrow: "Mind",
    minutes: 31,
    summary:
      "The adaptive unconscious processes patterns quickly beneath awareness, giving humans speed while also hiding the origins of judgment.",
    objectives: [
      "Understand unconscious processing as pattern recognition",
      "See why explanations often lag behind perception",
      "Recognize how experience and bias shape unconscious judgment"
    ],
    concepts: ["adaptive unconscious", "unconscious processing", "explanation", "bias"],
    body: [
      "Gladwell uses the adaptive unconscious to describe the mind's fast, below-awareness processing. We often perceive patterns before we can explain them. The conscious mind then tries to translate the perception into reasons, but the reasons may be incomplete or invented after the fact.",
      "This is useful because conscious analysis is slow. If humans had to reason explicitly through every social signal, physical risk, design judgment, or conversation, ordinary life would stall. Fast processing allows action in complex environments.",
      "The danger is opacity. Because we do not always know why we feel certain, we may mistake unconscious bias for insight. We may create tidy explanations for judgments shaped by familiarity, fear, attraction, stereotypes, or incentives.",
      "The mature stance is neither worship nor suspicion. The adaptive unconscious is a powerful system that must be trained, audited, and sometimes overridden."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Fast perception versus reliable explanation",
        not: "If you cannot explain a judgment, it must be wrong.",
        but: "If you cannot explain a judgment, you need to examine the conditions that produced it before trusting it."
      }
    ],
    whyThisMatters:
      "Many decisions feel rational because the conscious mind creates explanations after fast judgment has already formed.",
    practicalApplication:
      "When a fast judgment matters, separate the felt conclusion from the reasons you invented afterward.",
    commonMistakes: [
      "Assuming explanations are always the true causes of judgment",
      "Treating unconscious certainty as proof",
      "Ignoring how culture trains fast perception"
    ],
    misconceptions: [
      {
        misconception: "Unconscious judgment is mysterious wisdom.",
        correction:
          "It is fast pattern processing shaped by experience, environment, and bias."
      }
    ],
    lens:
      "Ask what experiences, incentives, or stereotypes may have trained this fast perception.",
    anchors: [
      "The mind knows before it explains.",
      "Opacity requires auditing."
    ],
    takeaways: [
      "Unconscious processing is adaptive.",
      "Explanations can lag or mislead.",
      "Fast judgment must be calibrated."
    ],
    examples: [
      "A leader senses morale has shifted before survey data arrives.",
      "A juror mistakes confidence for credibility.",
      "A designer knows a page feels wrong before naming the hierarchy problem."
    ],
    relatedSections: ["bias-first-impressions-hidden-associations", "expertise-feedback-trained-judgment"]
  }),
  lesson({
    id: "when-intuition-works",
    title: "When Intuition Works",
    eyebrow: "Reliability",
    minutes: 31,
    summary:
      "Intuition is most reliable in stable, pattern-rich environments where people have repeated exposure, clear feedback, and real expertise.",
    objectives: [
      "Identify conditions for reliable intuition",
      "Distinguish trained intuition from impulse",
      "Apply fast judgment in appropriate domains"
    ],
    concepts: ["reliable intuition", "feedback", "expertise", "stable environments"],
    body: [
      "Intuition works best when the environment teaches the mind well. Stable patterns, repeated exposure, fast feedback, and meaningful consequences allow people to build reliable judgment. The expert's gut is not magic; it is compressed experience.",
      "A firefighter, nurse, chess player, therapist, designer, musician, or negotiator may notice cues that novices miss. Their judgment feels fast because the learning happened earlier. Repetition taught them which signals matter, and feedback corrected the signals that did not.",
      "Stable does not mean simple. Many expert domains are complex. The important point is that patterns repeat often enough and feedback is clear enough for the mind to calibrate. If feedback is delayed, noisy, political, or absent, intuition may become confident without becoming accurate.",
      "The practical test is to ask whether your intuition has been trained by reality or merely by preference. Experience matters only when it has taught the right lessons."
    ],
    support: [
      {
        type: "framework",
        title: "Conditions for useful intuition",
        stages: [
          { name: "Stable patterns", description: "The domain has recurring cues that predict outcomes." },
          { name: "Repeated exposure", description: "The person has seen many cases, not just a few vivid ones." },
          { name: "Clear feedback", description: "Reality corrected errors quickly and honestly." },
          { name: "Domain fit", description: "The judgment is being used in the domain where it was trained." }
        ]
      }
    ],
    whyThisMatters:
      "The difference between expert intuition and raw impulse is often the difference between wisdom and overconfidence.",
    practicalApplication:
      "Trust fast judgment more in domains where you have repeated, feedback-rich experience.",
    commonMistakes: [
      "Generalizing intuition from one domain to another",
      "Counting years of experience without checking feedback quality",
      "Trusting confidence more than calibration"
    ],
    misconceptions: [
      {
        misconception: "Experienced people always have reliable intuition.",
        correction:
          "Experience improves intuition only when the environment provides learnable patterns and honest feedback."
      }
    ],
    lens:
      "Ask whether reality has trained this intuition enough to deserve trust.",
    anchors: [
      "Expert intuition is compressed feedback.",
      "Reliable gut judgment requires calibration."
    ],
    takeaways: [
      "Intuition can work very well.",
      "Feedback is essential.",
      "Domain boundaries matter."
    ],
    examples: [
      "A physician recognizes a dangerous pattern from repeated cases.",
      "A designer notices visual imbalance instantly after years of critique.",
      "A founder correctly reads customer urgency after hundreds of sales calls."
    ],
    relatedSections: ["expertise-feedback-trained-judgment", "when-intuition-fails"]
  }),
  lesson({
    id: "when-intuition-fails",
    title: "When Intuition Fails",
    eyebrow: "Failure Modes",
    minutes: 32,
    summary:
      "Intuition fails in noisy, biased, unfamiliar, emotionally charged, or weak-feedback environments where fast impressions feel clearer than they are.",
    objectives: [
      "Identify conditions that corrupt intuition",
      "Recognize bias and emotional arousal",
      "Know when to slow down"
    ],
    concepts: ["intuition failure", "noise", "bias", "unfamiliar domains"],
    body: [
      "The same fast system that protects us can mislead us. Intuition fails when the environment is noisy, when feedback is weak, when incentives distort perception, or when the domain is unfamiliar. It also fails when stereotypes or emotional arousal supply false patterns.",
      "Hiring is a classic danger zone. Interviewers often form rapid impressions from confidence, similarity, appearance, schools, or conversational ease. Those impressions feel like judgment, but they may predict very little. Finance can be similar: market movements create emotional stories that feel like signals but may be noise.",
      "Relationships also expose intuition's limits. Chemistry can be mistaken for compatibility. Anxiety can be mistaken for warning. Familiar dysfunction can be mistaken for comfort. The fast mind is shaped by history, not only by truth.",
      "The antidote is not paralysis. It is process. Slow down where bias risk is high, feedback is poor, or stakes are large. Use structured criteria, outside views, and evidence that is less vulnerable to first impressions."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Reliable versus unreliable intuition",
        columns: ["Condition", "More reliable", "Less reliable"],
        rows: [
          ["Environment", "Stable patterns", "Noise and randomness"],
          ["Experience", "Repeated cases", "A few vivid examples"],
          ["Feedback", "Fast and honest", "Delayed or distorted"],
          ["Emotion", "Regulated attention", "Stress, fear, attraction, status threat"]
        ]
      }
    ],
    whyThisMatters:
      "The most dangerous judgments are often the ones that feel obviously true but were formed under bad conditions.",
    practicalApplication:
      "When stakes are high and feedback is weak, use structured decision criteria before trusting the first impression.",
    commonMistakes: [
      "Trusting intuition in unfamiliar domains",
      "Ignoring incentives that distort perception",
      "Letting chemistry, confidence, or status substitute for evidence"
    ],
    misconceptions: [
      {
        misconception: "A strong feeling means the intuition is important.",
        correction:
          "A strong feeling may signal importance, bias, fear, attraction, or uncertainty; it still needs context."
      }
    ],
    lens:
      "Ask what could make this fast judgment feel true while being wrong.",
    anchors: [
      "Bad conditions corrupt intuition.",
      "Strong feeling is not proof."
    ],
    takeaways: [
      "Intuition has predictable failure modes.",
      "Bias and noise can feel like insight.",
      "Process protects high-stakes decisions."
    ],
    examples: [
      "A manager overvalues a candidate who feels culturally familiar.",
      "An investor interprets volatility as a meaningful pattern.",
      "A person confuses relational intensity with trustworthiness."
    ],
    relatedSections: ["bias-first-impressions-hidden-associations", "too-much-information-overthinking"]
  }),
  lesson({
    id: "bias-first-impressions-hidden-associations",
    title: "Bias, First Impressions, and Hidden Associations",
    eyebrow: "Bias",
    minutes: 33,
    summary:
      "Fast judgment can encode social bias because the mind absorbs associations around race, gender, status, confidence, attractiveness, familiarity, and authority.",
    objectives: [
      "Understand how bias enters fast judgment",
      "Recognize why first impressions feel objective",
      "Design processes that reduce bias"
    ],
    concepts: ["bias", "first impressions", "hidden associations", "process design"],
    body: [
      "Blink is at its strongest when it refuses to romanticize first impressions. Fast judgment can be shaped by hidden associations that people did not consciously choose. Appearance, race, gender, accent, age, status, body size, confidence, and familiarity can alter perception before deliberate thought begins.",
      "This is why first impressions feel objective. The judgment arrives as perception, not as a belief statement. A person simply seems competent, threatening, polished, warm, unserious, brilliant, or suspicious. The mind then explains the feeling in socially acceptable language.",
      "Individual awareness helps, but institutions need process design. Structured interviews, blind review where possible, clear evaluation criteria, diverse panels, delayed judgment, and evidence-based scoring can reduce the room for biased impressions to masquerade as expertise.",
      "The ethical lesson is demanding: if fast judgment can be biased, good intentions are insufficient. Systems must be designed for the mind we have, not the perfectly fair mind we wish we had."
    ],
    support: [
      {
        type: "application",
        context: "Reducing biased snap judgments",
        steps: [
          "Define criteria before seeing candidates or options",
          "Separate first impression from evidence",
          "Use structured comparisons instead of vague fit language",
          "Review decisions for patterns across groups"
        ],
        result:
          "Fast impressions become data to inspect, not verdicts to obey."
      }
    ],
    whyThisMatters:
      "Bias is most powerful when it feels like neutral perception.",
    practicalApplication:
      "In hiring or evaluation, require evidence for any first-impression claim.",
    commonMistakes: [
      "Believing good intentions eliminate bias",
      "Using vague fit language as evidence",
      "Treating confidence as competence"
    ],
    misconceptions: [
      {
        misconception: "Bias only affects obviously prejudiced people.",
        correction:
          "Bias can shape fast perception even in people who consciously reject unfair beliefs."
      }
    ],
    lens:
      "Ask whether the impression is supported by evidence or by culturally trained association.",
    anchors: [
      "Bias can arrive as perception.",
      "Process protects fairness."
    ],
    takeaways: [
      "Fast judgment can encode hidden associations.",
      "First impressions need evidence.",
      "Systems can reduce biased decision-making."
    ],
    examples: [
      "A hiring panel delays discussion of first impressions until after structured scoring.",
      "A musician audition changes when visual cues are removed.",
      "A manager distinguishes cultural fit from job-relevant behavior."
    ],
    relatedSections: ["adaptive-unconscious", "limits-misreadings-thinking-fast-slow"]
  }),
  lesson({
    id: "expertise-feedback-trained-judgment",
    title: "Expertise, Feedback, and Trained Judgment",
    eyebrow: "Expertise",
    minutes: 32,
    summary:
      "Expert intuition is not mere experience; it is experience corrected by high-quality feedback in a domain where patterns can be learned.",
    objectives: [
      "Understand expertise as trained intuition",
      "See why practice alone is insufficient",
      "Assess whether intuition has been calibrated"
    ],
    concepts: ["expertise", "feedback", "calibration", "trained intuition"],
    body: [
      "Blink is often remembered for fast judgment, but its most practical implication is about training. Intuition becomes reliable when the mind repeatedly encounters a domain, makes judgments, receives feedback, and updates. Without feedback, confidence can grow while accuracy stays flat.",
      "Some domains provide excellent training. A musician hears mistakes immediately. A chess player sees consequences. A salesperson learns which objections predict real risk. A surgeon receives outcome feedback. Other domains are murkier. Leadership, investing, hiring, and strategy often involve delayed, noisy outcomes where luck and politics cloud learning.",
      "Fake expertise often sounds confident because confidence is easier to develop than calibration. People can collect stories that confirm their instincts while ignoring misses. Real expertise has humility because feedback has punished oversimplification.",
      "The practical question is not whether someone has experience, but what kind of feedback their experience contained."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Experience versus calibration",
        not: "Years in a domain automatically create reliable gut judgment.",
        but: "Reliable gut judgment comes from repeated decisions corrected by clear feedback."
      }
    ],
    whyThisMatters:
      "Organizations often defer to confidence and seniority without checking whether judgment has actually been trained.",
    practicalApplication:
      "For any claimed intuition, ask what feedback history calibrated it.",
    commonMistakes: [
      "Equating seniority with judgment",
      "Ignoring domains where luck hides errors",
      "Treating confidence as proof of expertise"
    ],
    misconceptions: [
      {
        misconception: "Experts should always trust their first impression.",
        correction:
          "Experts should trust fast judgment most within the boundaries where their intuition was trained."
      }
    ],
    lens:
      "Ask what feedback taught this person which cues matter.",
    anchors: [
      "Expert intuition is trained intuition.",
      "Feedback creates calibration."
    ],
    takeaways: [
      "Practice alone is insufficient.",
      "Feedback quality determines learning quality.",
      "Expertise has domain boundaries."
    ],
    examples: [
      "A sales leader trusts pattern recognition from hundreds of calls but uses data in a new market.",
      "An interviewer discovers that confident early impressions did not predict performance.",
      "A designer improves taste through repeated critique and user behavior."
    ],
    relatedSections: ["when-intuition-works", "too-much-information-overthinking"]
  }),
  lesson({
    id: "stress-pressure-collapse-judgment",
    title: "Stress, Pressure, and the Collapse of Good Judgment",
    eyebrow: "Pressure",
    minutes: 32,
    summary:
      "Stress can narrow attention, distort perception, and make trained judgment harder to access unless people prepare with protocols and regulation.",
    objectives: [
      "Understand how stress affects perception",
      "Recognize why high-stakes contexts need preparation",
      "Use protocols to protect judgment"
    ],
    concepts: ["stress", "pressure", "attention", "protocols"],
    body: [
      "Fast judgment changes under pressure. Stress narrows attention, increases threat sensitivity, compresses time, and can make people miss information they would normally see. A person under arousal may become too focused on one cue while losing the wider pattern.",
      "This matters in leadership, conflict, emergency response, negotiation, medicine, policing, and investing. The issue is not that fast judgment disappears. It is that fast judgment can become dominated by fear, status threat, anger, or urgency.",
      "Training and protocols exist because the mind under pressure needs scaffolding. A checklist, communication routine, pre-brief, decision threshold, or calm handoff can preserve judgment when emotion rises. The goal is not robotic behavior. It is protecting perception from overload.",
      "The practical lesson is to prepare the decision environment before the high-stakes moment. Under stress, people rarely rise to ideals they have not practiced."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Stress narrows the aperture",
        explanation:
          "Pressure can make one cue dominate attention while other important evidence disappears from awareness.",
        useWhen:
          "A situation feels urgent, threatening, or identity-loaded."
      }
    ],
    whyThisMatters:
      "High-stakes environments punish unprepared intuition because pressure changes what the mind can see.",
    practicalApplication:
      "Create simple decision protocols for situations where stress predictably distorts judgment.",
    commonMistakes: [
      "Assuming expertise is immune to stress",
      "Making irreversible decisions at peak arousal",
      "Treating panic as urgency"
    ],
    misconceptions: [
      {
        misconception: "Pressure reveals true judgment.",
        correction:
          "Pressure can reveal training, but it can also distort perception and access to skill."
      }
    ],
    lens:
      "Ask what pressure is making you overnotice and undernotice.",
    anchors: [
      "Stress narrows attention.",
      "Protocols protect judgment under pressure."
    ],
    takeaways: [
      "Pressure changes perception.",
      "Preparation matters before stakes rise.",
      "Calm is often a trained condition."
    ],
    examples: [
      "A negotiator pauses before responding to a threat.",
      "A medical team uses a checklist during a crisis.",
      "An executive delays a reactive decision after a public setback."
    ],
    relatedSections: ["when-intuition-fails", "applying-blink-decisions"]
  }),
  lesson({
    id: "too-much-information-overthinking",
    title: "Too Much Information and the Problem of Overthinking",
    eyebrow: "Information",
    minutes: 31,
    summary:
      "More information is not always better; good judgment often depends on finding the right signals and ignoring noise.",
    objectives: [
      "Understand why information overload can weaken judgment",
      "Distinguish signal from noise",
      "Use simplicity without becoming simplistic"
    ],
    concepts: ["information overload", "signal", "noise", "overthinking"],
    body: [
      "Blink complicates the assumption that better decisions always require more information. Sometimes additional data improves judgment. Sometimes it buries the signal. Experts often need the right information, not all available information.",
      "Overthinking can weaken judgment when it forces people to explain preferences or patterns that were formed through tacit expertise. It can also create false precision. A hiring committee may collect more impressions while still avoiding the job-relevant evidence. An investor may gather more commentary while losing sight of the base case.",
      "The danger is not analysis itself. The danger is undisciplined information gathering that feels responsible while avoiding judgment. Information should clarify the decision, not become a substitute for deciding.",
      "Good decision design asks which variables actually matter, which data is noise, and when the search for more information has diminishing returns."
    ],
    support: [
      {
        type: "framework",
        title: "Information discipline",
        stages: [
          { name: "Decision", description: "What choice must this information improve?" },
          { name: "Signal", description: "Which variables have real predictive value?" },
          { name: "Noise", description: "What information is vivid but irrelevant?" },
          { name: "Stopping point", description: "When will more information stop changing the decision?" }
        ]
      }
    ],
    whyThisMatters:
      "Information overload can make people feel more rational while making the actual decision worse.",
    practicalApplication:
      "Before collecting more data, name the decision it will change and the threshold that would change it.",
    commonMistakes: [
      "Collecting information to avoid accountability",
      "Treating all data as equally relevant",
      "Reducing complex judgment to a simplistic shortcut"
    ],
    misconceptions: [
      {
        misconception: "The book is anti-analysis.",
        correction:
          "It argues for disciplined analysis and respect for trained fast judgment, not ignorance."
      }
    ],
    lens:
      "Ask whether new information is clarifying the signal or just making uncertainty feel busy.",
    anchors: [
      "More information is not always better.",
      "The right signal beats more noise."
    ],
    takeaways: [
      "Information can overload judgment.",
      "Experts need diagnostic cues.",
      "Analysis should serve the decision."
    ],
    examples: [
      "A product team focuses on activation behavior instead of dozens of vanity metrics.",
      "A hiring team uses work samples instead of more informal interviews.",
      "A leader stops gathering opinions once the decision threshold is met."
    ],
    relatedSections: ["expertise-feedback-trained-judgment", "applying-blink-decisions"]
  }),
  lesson({
    id: "applying-blink-decisions",
    title: "Applying Blink to Work, Hiring, Relationships, and Decisions",
    eyebrow: "Application",
    minutes: 34,
    summary:
      "Blink becomes practical when readers learn where to trust fast judgment, where to slow down, and how to build safeguards around vulnerable decisions.",
    objectives: [
      "Apply rapid cognition wisely across domains",
      "Know when to trust and when to slow down",
      "Build decision safeguards"
    ],
    concepts: ["application", "hiring", "relationships", "decision safeguards"],
    body: [
      "In work, Blink asks leaders to respect pattern recognition while auditing it. A founder may sense that a customer is not truly urgent. A manager may notice that a team meeting has lost trust. A designer may see that a product feels confusing. These fast reads are useful starting points when backed by domain experience.",
      "Hiring requires more caution because first impressions are seductive and bias-prone. Structured interviews, work samples, scoring rubrics, and delayed discussion can prevent polish or similarity from masquerading as fit. The goal is not to eliminate judgment; it is to improve the conditions under which judgment operates.",
      "In relationships, fast perception can notice real patterns: contempt, kindness, avoidance, generosity, volatility, ease. But chemistry and fear can also distort. A wise application separates the immediate feeling from repeated evidence over time.",
      "In investing, negotiations, and leadership, the same rule applies: trust fast judgment more when the domain is familiar, feedback has been honest, emotional arousal is regulated, and the cues are diagnostic. Slow down when stakes are high, bias risk is high, or the domain is unfamiliar."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Trust or slow down",
        columns: ["Situation", "Lean faster", "Slow down"],
        rows: [
          ["Domain", "Familiar and feedback-rich", "New or noisy"],
          ["Emotion", "Regulated", "Threatened or euphoric"],
          ["Bias risk", "Low and checked", "High or unexamined"],
          ["Evidence", "Diagnostic cues present", "Surface cues dominate"]
        ]
      }
    ],
    whyThisMatters:
      "The book's value is practical only when fast judgment is matched to the right decision environment.",
    practicalApplication:
      "For an important decision, decide explicitly whether it deserves fast trust, structured slowdown, or both.",
    commonMistakes: [
      "Using intuition as a blanket excuse",
      "Suppressing useful fast reads because they are hard to explain",
      "Failing to design safeguards where bias is likely"
    ],
    misconceptions: [
      {
        misconception: "Fast and slow thinking are enemies.",
        correction:
          "Good judgment often uses fast perception to notice signals and slow process to test them."
      }
    ],
    lens:
      "Ask what speed this decision deserves and what safeguards protect it.",
    anchors: [
      "Match speed to conditions.",
      "Fast reads can inform slow decisions."
    ],
    takeaways: [
      "Application depends on domain conditions.",
      "Hiring and evaluation need safeguards.",
      "Fast and slow judgment can work together."
    ],
    examples: [
      "A manager notes a concern from an interview, then tests it with a work sample.",
      "A negotiator trusts a tension read but verifies the economic terms.",
      "A partner waits for repeated behavior before treating chemistry as compatibility."
    ],
    relatedSections: ["when-intuition-works", "when-intuition-fails", "bias-first-impressions-hidden-associations"]
  }),
  lesson({
    id: "limits-misreadings-thinking-fast-slow",
    title: "Limits, Misreadings, and the Relationship to Thinking, Fast and Slow",
    eyebrow: "Nuance",
    minutes: 33,
    summary:
      "Blink should be read as an exploration of rapid cognition, not as a blanket endorsement of gut instinct, and it pairs well with broader behavioral psychology.",
    objectives: [
      "Avoid the common trust-your-gut misreading",
      "Connect Blink to behavioral psychology and bias",
      "Understand how it differs from Thinking, Fast and Slow"
    ],
    concepts: ["limits", "misreadings", "behavioral psychology", "System 1"],
    body: [
      "The most common misreading of Blink is that it tells readers to trust their gut. That reading extracts the appealing part of the book and leaves behind the harder part: fast judgment is shaped. It can be shaped by expertise, but it can also be shaped by prejudice, stress, and misleading environments.",
      "Compared with Thinking, Fast and Slow, Blink is more narrative and focused on the drama of rapid cognition. Kahneman's framework emphasizes the systematic biases and limits of intuitive thinking. Gladwell emphasizes the surprising power of fast judgment and the conditions that reveal or corrupt it. The two books are best read together rather than against each other.",
      "A mature decision-maker does not choose one system forever. They ask which system is better suited to the situation. Fast perception may notice the right clue. Slow analysis may test whether the clue is valid. Structured process may protect against bias that neither speed nor confidence can solve.",
      "Blink's enduring usefulness is that it makes intuition visible as a subject of study. Once intuition can be studied, it can be trained, questioned, and improved."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Blink and Thinking, Fast and Slow",
        not: "Blink says fast judgment is good while behavioral psychology says it is bad.",
        but: "Both show that intuition is powerful; the question is when it is calibrated and when it is biased."
      }
    ],
    whyThisMatters:
      "Without nuance, readers may use the book to justify exactly the kinds of snap judgments it warns about.",
    practicalApplication:
      "Treat intuition as evidence to examine, not as a command to obey.",
    commonMistakes: [
      "Using the book to defend unchecked impulse",
      "Ignoring bias because a judgment feels immediate",
      "Opposing intuition and analysis instead of integrating them"
    ],
    misconceptions: [
      {
        misconception: "Blink is less rigorous because it is narrative.",
        correction:
          "Its narrative style makes ideas accessible, but readers should still apply them with evidence and safeguards."
      }
    ],
    lens:
      "Ask how fast perception and slow testing can cooperate in this decision.",
    anchors: [
      "Do not worship the gut; audit it.",
      "Fast and slow judgment are complementary."
    ],
    takeaways: [
      "Blink is not gut-instinct propaganda.",
      "Bias remains central.",
      "Fast perception and slow analysis can work together."
    ],
    examples: [
      "A leader uses intuition to flag a risk and data to evaluate it.",
      "A hiring process captures impressions but prevents them from dominating evidence.",
      "A reader compares Blink with Thinking, Fast and Slow to understand both speed and bias."
    ],
    relatedSections: ["bias-first-impressions-hidden-associations", "final-fast-judgment-without-being-ruled"]
  }),
  lesson({
    id: "final-fast-judgment-without-being-ruled",
    title: "Final Synthesis: Using Fast Judgment Without Being Ruled by It",
    eyebrow: "Synthesis",
    minutes: 34,
    summary:
      "The curriculum integrates thin-slicing, expertise, bias, stress, information overload, and safeguards into a balanced approach to rapid cognition.",
    objectives: [
      "Integrate the book's major ideas",
      "Use fast judgment wisely",
      "Build safeguards around intuition"
    ],
    concepts: ["synthesis", "rapid cognition", "calibration", "safeguards"],
    body: [
      "Blink is a book about the mind's speed. It shows that humans can perceive patterns rapidly, sometimes before conscious explanation catches up. Thin-slicing can reveal real signals, expert intuition can outperform slow reasoning, and too much information can bury what matters.",
      "But the same book shows that speed is vulnerable. Bias can arrive as perception. Stress can narrow attention. Unfamiliar domains can make confidence meaningless. Weak feedback can produce false expertise. First impressions can feel objective while reflecting hidden association.",
      "The synthesis is not fast versus slow. It is calibration. Trust fast judgment when the domain is stable, your experience is deep, feedback has been honest, emotion is regulated, and cues are diagnostic. Slow down when bias risk is high, stakes are large, feedback is weak, or the domain is unfamiliar.",
      "Months later, remember the central discipline: use intuition as a signal, not a sovereign. Let it notice. Let process test. Let evidence correct. Let safeguards protect the decisions where fast judgment is most likely to become unfair or wrong."
    ],
    support: [
      {
        type: "synthesis",
        title: "The Blink operating system",
        text:
          "Fast judgment is useful when calibrated, dangerous when biased, and strongest when paired with process in high-stakes decisions."
      }
    ],
    whyThisMatters:
      "The book helps readers respect intuition without becoming ruled by impulse, bias, or overconfidence.",
    practicalApplication:
      "For consequential choices, write down the fast read, the evidence for it, the bias risk, and the process that will test it.",
    commonMistakes: [
      "Blindly trusting the gut",
      "Blindly distrusting all intuition",
      "Skipping safeguards in decisions involving people"
    ],
    misconceptions: [
      {
        misconception: "The final lesson is to slow every decision down.",
        correction:
          "The final lesson is to match decision speed and safeguards to the reliability conditions."
      }
    ],
    lens:
      "Ask whether intuition should lead, inform, or be restrained in this specific decision.",
    anchors: [
      "Use intuition as a signal, not a sovereign.",
      "Calibration determines trust."
    ],
    takeaways: [
      "Fast judgment can be powerful.",
      "Bias and stress can corrupt it.",
      "Wise decisions combine speed, evidence, and safeguards."
    ],
    examples: [
      "A founder trusts a sales-pattern read but tests it with customer data.",
      "A hiring team records first impressions and then uses structured evidence.",
      "A negotiator notices a tension shift and slows down before reacting."
    ],
    relatedSections: ["power-danger-snap-judgment", "applying-blink-decisions"]
  })
];

export const blink: Book = {
  slug: "blink",
  title: "Blink",
  author: "Malcolm Gladwell",
  category: "Psychology / Decision-Making / Intuition",
  difficulty: "Intermediate",
  completionTime: "6h 25m",
  progress: 0,
  coverTone:
    "from-indigo-100 via-slate-100 to-amber-100 dark:from-indigo-950/40 dark:via-slate-950/45 dark:to-amber-950/35",
  description:
    "A balanced curriculum on rapid cognition, thin-slicing, intuition, bias, expertise, stress, information overload, and fast judgment safeguards.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "intuition",
    "rapid cognition",
    "thin-slicing",
    "judgment",
    "decision-making",
    "bias",
    "expertise",
    "unconscious processing",
    "first impressions",
    "psychology",
    "perception",
    "social cognition",
    "uncertainty"
  ],
  intendedOutcomes: [
    "Understand rapid cognition and thin-slicing",
    "Recognize when snap judgments can be useful",
    "Recognize when intuition becomes biased or misleading",
    "Understand the difference between trained intuition and raw impulse",
    "Understand how stress and context affect judgment",
    "Think more clearly about first impressions, hiring, leadership, investing, and social perception",
    "Apply the book's lessons without blindly trusting gut feelings"
  ],
  promise:
    "After completing this curriculum, you will understand Malcolm Gladwell's exploration of rapid cognition: how snap judgments can be surprisingly powerful, when intuition works, when it fails, and why thin-slicing, expertise, bias, emotion, and context shape fast decisions.",
  recommendedAudience: [
    "Readers interested in psychology and decision-making",
    "Managers, hiring teams, and leaders making people decisions",
    "Professionals who rely on taste, judgment, or pattern recognition",
    "Anyone who wants to use intuition without being ruled by it"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around rapid cognition, thin-slicing, intuition, bias, expertise, and judgment. It does not reproduce long passages or chapter text.",
  sections
};
