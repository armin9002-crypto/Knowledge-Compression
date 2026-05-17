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
    id: "charisma-learnable-skill",
    title: "Charisma as a Learnable Skill",
    eyebrow: "Foundation",
    minutes: 31,
    summary:
      "Cabane reframes charisma as a pattern of signals and emotional experience rather than a mysterious trait reserved for naturally magnetic people.",
    objectives: [
      "Understand charisma as learned signaling",
      "Separate charisma from charm or performance",
      "See how internal state and attention shape social perception"
    ],
    concepts: ["charisma", "signals", "emotional transmission", "social perception"],
    body: [
      "The Charisma Myth begins by challenging the idea that charisma is a fixed gift. Some people may have temperaments, appearances, or social histories that make charisma easier, but the experience of charisma is built from signals other people can perceive. Attention, posture, facial expression, voice, emotional regulation, and regard all communicate before any clever line does.",
      "This matters because people do not experience your inner intention directly. They experience what leaks through your behavior. A person can genuinely care but seem distracted, capable but seem tense, warm but seem needy, or confident but seem cold. Charisma is the gap between what you mean to communicate and what others actually feel in your presence.",
      "Cabane's model is practical without becoming theatrical. The point is not to pretend to be impressive. It is to become more present, more grounded, and more clearly well-disposed toward the people in front of you. Charisma is less a mask than a disciplined way of bringing attention, capability, and goodwill into the room."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Real charisma",
        not: "Charisma is pretending to be impressive.",
        but: "Charisma is the felt experience others have when they perceive you as present, capable, and well-disposed toward them."
      },
      {
        type: "expandedExample",
        scenario: "A talented analyst presents an important recommendation.",
        defaultApproach:
          "They rush, overexplain, and watch the room anxiously for approval.",
        betterApproach:
          "They slow down, make grounded eye contact, state the recommendation clearly, and show genuine concern for the decision's impact.",
        whyItWorks:
          "The same intelligence becomes easier to trust when it is paired with presence and steadiness."
      }
    ],
    whyThisMatters:
      "Seeing charisma as learnable makes social presence an ethical craft rather than a personality lottery.",
    practicalApplication:
      "Before an important interaction, prepare the state you want to transmit: attention, steadiness, and goodwill.",
    commonMistakes: [
      "Confusing charisma with extroversion",
      "Trying to perform confidence instead of becoming grounded",
      "Using techniques while mentally obsessing over how you are being received"
    ],
    misconceptions: [
      {
        misconception: "Charisma means being flashy, witty, or dominant.",
        correction:
          "Charisma can be quiet; it depends on presence, perceived capability, and warmth."
      }
    ],
    lens:
      "Ask what people are likely to feel around you, not only what you intend to say.",
    anchors: [
      "Charisma is perceived presence, power, and warmth.",
      "The body broadcasts the state the mind is carrying."
    ],
    takeaways: [
      "Charisma is partly learnable.",
      "People read signals more than intentions.",
      "Authentic charisma begins with internal alignment."
    ],
    examples: [
      "A manager becomes more trusted by listening without checking messages.",
      "A speaker becomes more persuasive by pausing instead of filling every silence.",
      "A date feels safer when curiosity replaces self-presentation."
    ],
    relatedSections: ["three-pillars-presence-power-warmth", "internal-state-before-speaking"]
  }),
  lesson({
    id: "three-pillars-presence-power-warmth",
    title: "The Three Pillars: Presence, Power, and Warmth",
    eyebrow: "Core Model",
    minutes: 33,
    summary:
      "The book's central model explains charisma as the interaction of full attention, perceived capability, and perceived goodwill.",
    objectives: [
      "Understand the three-pillar model",
      "Identify what happens when one pillar is missing",
      "Adapt the balance to different social contexts"
    ],
    concepts: ["presence", "power", "warmth", "balance"],
    body: [
      "Presence means people feel you are actually with them. Power means they perceive you as capable of affecting outcomes. Warmth means they believe your intentions toward them are benevolent. Charisma emerges when these signals reinforce each other instead of contradicting each other.",
      "Each pillar compensates for the risks of the others. Power without warmth can feel intimidating or self-interested. Warmth without power can feel kind but low-impact. Presence without either may feel attentive but not especially influential. Power and warmth without presence can feel polished but strangely hollow, as if the person is performing a role while mentally elsewhere.",
      "Different settings require different blends. A crisis meeting needs calm power and enough warmth to prevent panic. A coaching conversation needs warmth and presence, with power expressed as clarity rather than dominance. A sales call needs presence and warmth before capability claims become believable."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "When a pillar is missing",
        columns: ["Pattern", "How it feels", "Typical risk"],
        rows: [
          ["Power without warmth", "Impressive but unsafe", "Intimidation or resistance"],
          ["Warmth without power", "Kind but weak", "Low confidence in follow-through"],
          ["Presence without power", "Attentive but passive", "Connection without influence"],
          ["Power and warmth without presence", "Polished but absent", "Distrust or emotional distance"]
        ]
      }
    ],
    whyThisMatters:
      "The model prevents charisma from becoming a bag of tricks by tying it to social perception.",
    practicalApplication:
      "Diagnose the pillar most likely missing in a specific context, then adjust that signal deliberately.",
    commonMistakes: [
      "Trying to maximize all signals in the same way in every room",
      "Projecting power when the situation needs warmth",
      "Projecting warmth while avoiding clear decisions"
    ],
    misconceptions: [
      {
        misconception: "Charisma is one universal style.",
        correction:
          "Charisma has different expressions depending on role, relationship, stakes, and culture."
      }
    ],
    lens:
      "Ask which of presence, power, or warmth the room needs more of from you right now.",
    anchors: [
      "Presence, power, and warmth are the charisma triangle.",
      "A missing pillar changes how all the others are interpreted."
    ],
    takeaways: [
      "Charisma is multidimensional.",
      "Balance matters more than intensity.",
      "Context determines the right expression."
    ],
    examples: [
      "A leader uses warmth before giving direct feedback.",
      "A negotiator uses stillness and concise language to project power.",
      "A friend shows presence by listening without preparing a reply."
    ],
    relatedSections: ["presence-full-attention", "power-without-arrogance", "warmth-trust-connection"]
  }),
  lesson({
    id: "presence-full-attention",
    title: "Presence: The Art of Full Attention",
    eyebrow: "Attention",
    minutes: 31,
    summary:
      "Presence is socially powerful because undivided attention is rare, reassuring, and difficult to fake for long.",
    objectives: [
      "Understand why attention creates trust",
      "Recognize the social cost of distraction",
      "Apply presence in meetings, interviews, dates, and leadership"
    ],
    concepts: ["presence", "attention", "listening", "trust"],
    body: [
      "Presence is the most understated charisma skill. People can feel when your attention is split between them, your phone, your anxiety, and your next line. The surface behavior may look polite, but the emotional signal is absence. Absence weakens trust because it implies the person in front of you is not fully real to you.",
      "Full attention is rare enough that it often feels generous. In a meeting, presence makes colleagues feel understood before they are persuaded. In an interview, it helps the candidate stop performing and start revealing. In a relationship, it communicates that the other person does not need to compete with invisible distractions.",
      "Presence is not intense staring or artificial seriousness. It is a relaxed commitment to the interaction at hand. You allow the other person's words, emotion, pacing, and meaning to reach you before you manage your own image."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Attention as status",
        explanation:
          "People often interpret your attention as a signal of their importance, even when you did not intend that message.",
        useWhen:
          "You are in a conversation where trust matters more than speed."
      }
    ],
    whyThisMatters:
      "Presence often creates more social impact than polished language because it changes how safe and seen people feel.",
    practicalApplication:
      "Remove one source of divided attention before any high-stakes conversation.",
    commonMistakes: [
      "Listening only long enough to prepare a response",
      "Checking devices during relationally important moments",
      "Mistaking intense eye contact for real presence"
    ],
    misconceptions: [
      {
        misconception: "Presence is a soft skill with little strategic value.",
        correction:
          "Presence improves trust, information quality, influence, and relational repair."
      }
    ],
    lens:
      "Ask whether your attention is making the other person feel real or managed.",
    anchors: [
      "Presence is attention made visible.",
      "Distraction quietly cancels warmth."
    ],
    takeaways: [
      "People detect divided attention.",
      "Presence increases trust and connection.",
      "Good listening begins before technique."
    ],
    examples: [
      "A manager closes the laptop before a difficult one-on-one.",
      "A salesperson notices hesitation instead of racing to the pitch.",
      "A partner pauses before replying defensively."
    ],
    relatedSections: ["body-language-voice-signals", "difficult-conversations-charisma"]
  }),
  lesson({
    id: "power-without-arrogance",
    title: "Power: Projecting Capability Without Arrogance",
    eyebrow: "Capability",
    minutes: 32,
    summary:
      "Power is the perception that you can affect outcomes, and it becomes charismatic when expressed through calm capability rather than dominance.",
    objectives: [
      "Define power as perceived capability",
      "Understand nonverbal power signals",
      "Project confidence without intimidation or neediness"
    ],
    concepts: ["power", "confidence", "capability", "status"],
    body: [
      "In Cabane's model, power is not moral superiority or control over others. It is perceived capability: the sense that you can act, decide, protect, solve, or influence outcomes. People are drawn to capability because it reduces uncertainty.",
      "Power often appears through the body before it appears through credentials. Stillness, grounded posture, a steady voice, slower pacing, and concise language can all suggest that a person is not scrambling for approval. By contrast, rushing, fidgeting, apologizing excessively, and filling every silence can signal internal instability.",
      "The ethical challenge is to project power without turning it into intimidation. Power becomes charismatic when others feel your capability is not aimed against them. That is why warmth must travel with power. Capability without goodwill produces compliance, not trust."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Power versus dominance",
        not: "Power means taking up space at other people's expense.",
        but: "Power means communicating grounded capability and the ability to affect outcomes responsibly."
      }
    ],
    whyThisMatters:
      "People hesitate to trust warmth when they do not believe the person can handle reality.",
    practicalApplication:
      "In a high-stakes room, reduce speed, reduce filler, and make one clear statement before elaborating.",
    commonMistakes: [
      "Overcompensating for insecurity with dominance",
      "Collapsing posture to avoid seeming arrogant",
      "Confusing volume with authority"
    ],
    misconceptions: [
      {
        misconception: "Projecting power requires being aggressive.",
        correction:
          "The strongest power signals are often calm, economical, and grounded."
      }
    ],
    lens:
      "Ask whether your capability feels reassuring or threatening to the people around you.",
    anchors: [
      "Power is perceived capability.",
      "Calm often communicates more authority than intensity."
    ],
    takeaways: [
      "Power is a necessary pillar of charisma.",
      "Stillness and clarity can signal confidence.",
      "Warmth keeps power from becoming intimidation."
    ],
    examples: [
      "An executive pauses before answering a hostile question.",
      "A candidate states a salary expectation without defensive overexplaining.",
      "A leader gives a clear decision while acknowledging tradeoffs."
    ],
    relatedSections: ["warmth-trust-connection", "leadership-influence-charisma"]
  }),
  lesson({
    id: "warmth-trust-connection",
    title: "Warmth: Creating Safety, Trust, and Connection",
    eyebrow: "Goodwill",
    minutes: 32,
    summary:
      "Warmth is the perception that your intentions are benevolent, and it turns capability into something people can trust.",
    objectives: [
      "Understand warmth as perceived goodwill",
      "Recognize how warmth appears through tone and attention",
      "Avoid fake warmth and approval-seeking"
    ],
    concepts: ["warmth", "trust", "goodwill", "connection"],
    body: [
      "Warmth answers a primal social question: are you safe for me? A person can be impressive, intelligent, and high status, but if others sense hostility, contempt, or self-absorption, charisma contracts. Warmth makes power usable because people believe your strength is not aimed at diminishing them.",
      "Warmth appears in small signals: relaxed facial expression, patient pacing, curiosity, generous interpretation, responsive tone, and the absence of contempt. It is also visible in restraint. You do not need to win every micro-contest for status. You can let people finish, acknowledge their point, and still remain strong.",
      "Fake warmth is usually felt as manipulation because it treats goodwill as a tactic. Real warmth does not mean universal liking or emotional gushiness. It means a baseline respect that allows other people to feel seen without feeling handled."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A senior leader gives corrective feedback.",
        defaultApproach:
          "They use clipped language and efficiency to avoid discomfort, which makes the employee feel judged and unsafe.",
        betterApproach:
          "They state the issue clearly, explain why it matters, and communicate belief in the person's ability to improve.",
        whyItWorks:
          "Warmth lowers defensiveness while power preserves the seriousness of the message."
      }
    ],
    whyThisMatters:
      "Warmth is the difference between being impressive and being trusted.",
    practicalApplication:
      "Before asking for action, communicate that you understand the other person's reality.",
    commonMistakes: [
      "Performing friendliness without genuine regard",
      "Using warmth to avoid necessary clarity",
      "Trying to be liked by everyone"
    ],
    misconceptions: [
      {
        misconception: "Warmth means being agreeable.",
        correction:
          "Warmth means goodwill; it can coexist with boundaries, standards, and difficult truth."
      }
    ],
    lens:
      "Ask whether the person can feel your regard while also hearing your point.",
    anchors: [
      "Warmth is perceived goodwill.",
      "Power becomes trustworthy through warmth."
    ],
    takeaways: [
      "Warmth creates safety.",
      "It is not the same as people-pleasing.",
      "Fake warmth often feels manipulative."
    ],
    examples: [
      "A negotiator acknowledges the other side's concern before making a firm ask.",
      "A host makes a newcomer feel included without making them the center of attention.",
      "A manager gives direct feedback without contempt."
    ],
    relatedSections: ["difficult-conversations-charisma", "common-charisma-mistakes"]
  }),
  lesson({
    id: "internal-state-before-speaking",
    title: "Internal State: Why Charisma Starts Before You Speak",
    eyebrow: "State",
    minutes: 33,
    summary:
      "Internal discomfort leaks into external signals, so charisma work begins with emotional regulation rather than surface polish alone.",
    objectives: [
      "Understand how anxiety and shame affect signals",
      "Use mental framing to change external behavior",
      "Prepare emotionally before important interactions"
    ],
    concepts: ["internal state", "emotional regulation", "self-consciousness", "framing"],
    body: [
      "Cabane repeatedly returns to a practical truth: the body leaks. Anxiety changes breathing, eye contact, pace, facial tension, and vocal tone. Shame folds posture inward. Resentment hardens the face. Self-consciousness pulls attention away from the other person and toward image management.",
      "This is why charisma cannot be built only through external technique. Technique layered on top of internal panic often looks brittle. A smile can feel strained, eye contact can feel forced, and confidence language can sound like compensation. The more pressure you place on appearing charismatic, the more self-focused you may become.",
      "Internal state work does not require perfect calm. It requires enough regulation that attention can move outward. Mental framing helps: seeing the other person as a collaborator rather than a judge, interpreting nerves as energy rather than danger, or remembering goodwill before entering a tense room.",
      "Self-compassion matters because harsh self-monitoring consumes attention. When you stop treating every signal as a verdict on your worth, you become freer to actually connect."
    ],
    support: [
      {
        type: "application",
        context: "Pre-interaction state reset",
        steps: [
          "Release obvious physical tension in the jaw, shoulders, and hands",
          "Name the state you want to transmit",
          "Choose a generous interpretation of the people you will meet",
          "Slow your first sentence and let the room arrive"
        ],
        result:
          "The interaction begins from steadiness instead of self-protection."
      }
    ],
    whyThisMatters:
      "People often try to fix charisma at the surface while the real signal is emotional leakage.",
    practicalApplication:
      "Before important conversations, regulate your body before rehearsing your words.",
    commonMistakes: [
      "Trying to look confident while ignoring panic",
      "Treating nervousness as evidence of inadequacy",
      "Entering conversations in a state of resentment and expecting warmth to appear"
    ],
    misconceptions: [
      {
        misconception: "Charismatic people never feel anxious.",
        correction:
          "Charismatic people can feel anxious but know how to keep attention and goodwill available."
      }
    ],
    lens:
      "Ask what emotional state your body is likely to transmit before you speak.",
    anchors: [
      "The body leaks internal state.",
      "Regulation restores outward attention."
    ],
    takeaways: [
      "Charisma starts before language.",
      "Self-consciousness weakens presence.",
      "Emotional regulation supports authentic social signaling."
    ],
    examples: [
      "A speaker reframes nerves as readiness before stepping on stage.",
      "A leader releases resentment before a performance conversation.",
      "A networker shifts from self-display to curiosity."
    ],
    relatedSections: ["body-language-voice-signals", "presence-full-attention"]
  }),
  lesson({
    id: "body-language-voice-signals",
    title: "Body Language, Voice, and Nonverbal Signals",
    eyebrow: "Signals",
    minutes: 32,
    summary:
      "Nonverbal signals carry emotional weight because people use the body and voice to infer safety, confidence, attention, and intent.",
    objectives: [
      "Understand why nonverbal signals matter",
      "Use posture, pace, pauses, and tone wisely",
      "Match signals to context without overperforming"
    ],
    concepts: ["body language", "voice", "nonverbal communication", "signals"],
    body: [
      "Body language is often taught badly, as if social life were a code to hack. Cabane's deeper point is subtler: nonverbal signals matter because they reveal state. People do not merely decode crossed arms or eye contact mechanically. They infer whether you are relaxed, guarded, dominant, attentive, rushed, or kind.",
      "Calm stillness often communicates confidence because it suggests you are not scrambling. A grounded posture communicates availability and capability. Pauses can make speech more authoritative because they show you are not afraid of silence. Vocal tone communicates emotional intent as much as words do.",
      "The goal is congruence. Overanimated gestures can feel needy if the internal signal is approval-seeking. Excessive eye contact can feel invasive. A soft voice can feel warm in one context and uncertain in another. Charismatic nonverbal communication fits the room, the relationship, and the message.",
      "The safest rule is to let the body support the value of the interaction. If the goal is trust, create calm and openness. If the goal is a decision, create clarity and steadiness. If the goal is repair, create softness without collapse."
    ],
    support: [
      {
        type: "framework",
        title: "Nonverbal signal scan",
        stages: [
          { name: "Posture", description: "Does your body suggest collapse, aggression, or grounded availability?" },
          { name: "Pace", description: "Are you rushing from anxiety or slowing down enough to be understood?" },
          { name: "Tone", description: "Does your voice match the emotional intent of the message?" },
          { name: "Pause", description: "Can you tolerate silence without filling it defensively?" }
        ]
      }
    ],
    whyThisMatters:
      "Nonverbal mismatch can make good words feel false or weak.",
    practicalApplication:
      "In your next important conversation, reduce one anxious behavior rather than adding five performance techniques.",
    commonMistakes: [
      "Using body language as manipulation",
      "Overcorrecting into stiffness",
      "Copying confident gestures without matching internal state"
    ],
    misconceptions: [
      {
        misconception: "Body language has universal meanings that can be decoded mechanically.",
        correction:
          "Signals are interpreted through context, culture, relationship, and congruence."
      }
    ],
    lens:
      "Ask whether your body and voice are making your words easier or harder to believe.",
    anchors: [
      "Nonverbal signals reveal state.",
      "Congruence matters more than choreography."
    ],
    takeaways: [
      "Body and voice carry emotional information.",
      "Stillness and pauses can signal confidence.",
      "Context determines what a signal means."
    ],
    examples: [
      "A presenter pauses after the key point instead of rushing to justify it.",
      "A manager softens tone before delivering hard information.",
      "A negotiator keeps posture grounded during tension."
    ],
    relatedSections: ["internal-state-before-speaking", "first-impressions-social-momentum"]
  }),
  lesson({
    id: "first-impressions-social-momentum",
    title: "First Impressions and Social Momentum",
    eyebrow: "Openings",
    minutes: 30,
    summary:
      "Early signals shape how later behavior is interpreted, so charismatic openings combine intentionality with recovery when moments begin awkwardly.",
    objectives: [
      "Understand why early signals matter",
      "Use warmth and power quickly without performance",
      "Recover from awkward openings"
    ],
    concepts: ["first impressions", "social momentum", "openings", "recovery"],
    body: [
      "First impressions matter because people form early hypotheses about you and then interpret later evidence through that frame. If the opening signal is distracted, tense, arrogant, or needy, the other person may begin searching for confirming evidence. If the opening signal is present, capable, and warm, the interaction starts with more trust.",
      "This does not mean you need a flawless entrance. Social momentum is adjustable. A clumsy opening can be repaired by becoming more present, naming a small awkwardness lightly, or shifting attention back to the other person. The bigger mistake is panicking about the awkwardness and turning inward.",
      "Intentional entrances are simple. Arrive before you speak. Let your body settle. Make contact with the room or person. Begin with a clear, context-appropriate signal: gladness to be there, confidence in the agenda, curiosity about the other person, or calm readiness to work.",
      "First impressions are not about tricks. They are about reducing the social noise that prevents others from reading your best intentions."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A new manager enters the first team meeting.",
        defaultApproach:
          "They launch into credentials and plans, hoping to prove they deserve the role.",
        betterApproach:
          "They create presence, acknowledge the team, state what they are there to learn, and name the first decision rhythm.",
        whyItWorks:
          "The team receives both warmth and capability without being forced to admire a performance."
      }
    ],
    whyThisMatters:
      "Openings influence trust, but recovery matters more than perfection.",
    practicalApplication:
      "For important entrances, decide the first emotional signal before deciding the first sentence.",
    commonMistakes: [
      "Trying too hard to be memorable",
      "Letting one awkward moment ruin your attention",
      "Opening with credentials before creating contact"
    ],
    misconceptions: [
      {
        misconception: "First impressions are fixed forever.",
        correction:
          "They are influential but can be updated through consistent presence, warmth, and capability."
      }
    ],
    lens:
      "Ask what early hypothesis your first minute invites others to form.",
    anchors: [
      "Early signals frame later interpretation.",
      "Awkwardness is recoverable when attention stays outward."
    ],
    takeaways: [
      "First impressions shape momentum.",
      "Intentionality matters more than polish.",
      "Recovery is a charisma skill."
    ],
    examples: [
      "A speaker begins with grounded silence before the first line.",
      "A date recovers from nerves by becoming curious.",
      "A leader opens a meeting with clarity and human acknowledgment."
    ],
    relatedSections: ["presence-full-attention", "body-language-voice-signals"]
  }),
  lesson({
    id: "difficult-conversations-charisma",
    title: "Charisma in Difficult Conversations",
    eyebrow: "Tension",
    minutes: 33,
    summary:
      "Under tension, charisma becomes the ability to remain present, warm, and powerful without becoming reactive, appeasing, or dominating.",
    objectives: [
      "Apply charisma under conflict",
      "Use warmth to lower defensiveness",
      "Use calm power to create safety and clarity"
    ],
    concepts: ["conflict", "emotional regulation", "defensiveness", "calm power"],
    body: [
      "Difficult conversations reveal whether charisma is real or merely social ease. When someone is upset, disappointed, defensive, or hostile, the room tests your state. If you become reactive, your presence collapses. If you appease, your power collapses. If you dominate, your warmth collapses.",
      "Charismatic tension management begins with presence. The other person needs to feel that you are actually hearing the concern, not merely waiting to rebut it. Warmth lowers defensiveness by communicating that disagreement does not equal contempt. Power creates safety by showing that you can stay clear, bounded, and responsible under pressure.",
      "This blend is especially important in leadership. A leader who is warm but evasive makes people anxious because no one knows where reality stands. A leader who is powerful but cold may get compliance while losing trust. A leader who is present, warm, and direct can make hard truth easier to absorb.",
      "The goal is not to win the emotional exchange. It is to preserve enough trust and clarity that the real issue can be handled."
    ],
    support: [
      {
        type: "application",
        context: "A difficult conversation sequence",
        steps: [
          "Listen long enough to understand the real concern",
          "Name what you understand without exaggeration",
          "State your position or boundary clearly",
          "Keep tone steady while allowing emotion in the room"
        ],
        result:
          "The conversation remains adult, clear, and relationally intact."
      }
    ],
    whyThisMatters:
      "Charisma under pressure is often more valuable than charisma in easy social settings.",
    practicalApplication:
      "In conflict, protect all three pillars: do not abandon presence, warmth, or power to reduce discomfort.",
    commonMistakes: [
      "Appeasing to preserve warmth",
      "Dominating to preserve power",
      "Preparing a rebuttal while pretending to listen"
    ],
    misconceptions: [
      {
        misconception: "Charisma means making conflict disappear.",
        correction:
          "Charisma helps conflict become clearer, safer, and more productive."
      }
    ],
    lens:
      "Ask which pillar you tend to abandon when tension rises.",
    anchors: [
      "Conflict tests the three pillars.",
      "Calm power plus warmth lowers defensiveness."
    ],
    takeaways: [
      "Difficult conversations require regulated presence.",
      "Warmth and boundaries can coexist.",
      "Charisma is not avoidance of tension."
    ],
    examples: [
      "A manager receives criticism without counterattacking.",
      "A founder tells investors bad news with clarity and ownership.",
      "A partner states a boundary without contempt."
    ],
    relatedSections: ["warmth-trust-connection", "leadership-influence-charisma"]
  }),
  lesson({
    id: "leadership-influence-charisma",
    title: "Charisma for Leadership and Influence",
    eyebrow: "Leadership",
    minutes: 33,
    summary:
      "Charismatic leadership combines conviction with care so people feel both the importance of the direction and the leader's investment in them.",
    objectives: [
      "Apply charisma to leadership settings",
      "Understand influence as trust plus direction",
      "Distinguish charisma from manipulation"
    ],
    concepts: ["leadership", "influence", "conviction", "care"],
    body: [
      "In leadership, charisma is not ornamental. It affects whether people believe the direction, trust the messenger, and feel personally implicated in the work. People follow leaders who seem capable of seeing reality, choosing a path, and caring about the people who must walk it.",
      "Presence helps leaders read the room instead of broadcasting past it. Power helps them make decisions, hold standards, and communicate conviction. Warmth helps people feel that the leader's ambition includes them rather than using them. Together, these signals turn communication into influence.",
      "This applies to presentations, team meetings, feedback, vision-setting, recruiting, and crisis communication. The leader does not need theatrical energy. Often the most charismatic leadership signal is calm clarity under pressure: the sense that someone is both honest about difficulty and committed to responsible action.",
      "Ethics matter because charisma can be misused. Charisma without integrity becomes emotional leverage. The more influence you have, the more important it is that warmth be genuine, facts be respected, and power be tied to responsibility."
    ],
    support: [
      {
        type: "synthesis",
        title: "Leadership charisma",
        text:
          "People are more willing to follow when they experience the leader as present to reality, capable of action, and genuinely invested in the people affected."
      }
    ],
    whyThisMatters:
      "Leadership communication fails when people do not feel capability, care, or attention behind the message.",
    practicalApplication:
      "Before a leadership moment, define the truth to state, the care to communicate, and the decision to make clear.",
    commonMistakes: [
      "Using charisma to compensate for weak substance",
      "Confusing vision with performance",
      "Creating warmth in public while tolerating disrespect in decisions"
    ],
    misconceptions: [
      {
        misconception: "Charismatic leadership is about commanding the room.",
        correction:
          "It is about creating trust, direction, and emotional coherence."
      }
    ],
    lens:
      "Ask whether your leadership presence gives people clarity, confidence, and evidence of care.",
    anchors: [
      "Influence is trust plus direction.",
      "Charisma without integrity becomes manipulation."
    ],
    takeaways: [
      "Leadership charisma is practical.",
      "Conviction and care must travel together.",
      "Ethics matter more as influence grows."
    ],
    examples: [
      "A CEO explains a hard pivot without contempt for past work.",
      "A manager recruits by showing both ambition and care for development.",
      "A speaker makes a complex idea feel urgent and humane."
    ],
    relatedSections: ["power-without-arrogance", "difficult-conversations-charisma"]
  }),
  lesson({
    id: "common-charisma-mistakes",
    title: "Common Charisma Mistakes and Misreadings",
    eyebrow: "Pitfalls",
    minutes: 31,
    summary:
      "The most common charisma failures come from overperformance, neediness, fake warmth, status anxiety, and treating technique as a substitute for regard.",
    objectives: [
      "Recognize common charisma errors",
      "Avoid needy or manipulative performance",
      "Keep authenticity and ethics central"
    ],
    concepts: ["overperformance", "neediness", "authenticity", "ethics"],
    body: [
      "Charisma advice can easily become socially anxious theater. People try to be magnetic, memorable, dominant, mysterious, or universally liked. The effort often creates the opposite effect because the room can feel the self-focus underneath the performance.",
      "One common mistake is confusing charisma with extroversion. Quiet people can be deeply charismatic when they are present, warm, and grounded. Another is overperforming warmth through constant smiling, praise, or agreement. That can feel less like goodwill and more like approval-seeking.",
      "Power is also frequently misread. Some people inflate themselves because they fear being dismissed. Others shrink because they fear seeming arrogant. Both reactions keep attention on status rather than service. Mature power is calm enough to be useful.",
      "The deepest mistake is using techniques without genuine regard. If charisma becomes a way to extract approval, compliance, attraction, or status, people may feel managed rather than met. The book's tools work best when they support real attention and ethical influence."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Mistake and correction",
        columns: ["Mistake", "Correction"],
        rows: [
          ["Trying to impress", "Become more present and useful"],
          ["Fake warmth", "Cultivate genuine regard and patience"],
          ["Dominant power", "Use calm capability"],
          ["Universal approval seeking", "Accept that charisma is not being liked by everyone"]
        ]
      }
    ],
    whyThisMatters:
      "Charisma becomes counterproductive when it is driven by insecurity rather than connection and capability.",
    practicalApplication:
      "When you notice yourself performing, redirect attention to the person, purpose, or shared outcome.",
    commonMistakes: [
      "Trying to be charismatic in every moment",
      "Using social tools to hide insecurity",
      "Mistaking attention for trust"
    ],
    misconceptions: [
      {
        misconception: "If people like you, you are charismatic.",
        correction:
          "Being liked is not the same as being experienced as present, capable, and trustworthy."
      }
    ],
    lens:
      "Ask whether your behavior is trying to create connection or secure validation.",
    anchors: [
      "Overperformance breaks trust.",
      "Technique must serve regard."
    ],
    takeaways: [
      "Charisma is not extroversion.",
      "Neediness weakens presence.",
      "Ethics keep influence human."
    ],
    examples: [
      "A networker stops scanning the room for better options.",
      "A leader stops using charm to avoid a decision.",
      "A speaker chooses clarity over theatrical energy."
    ],
    relatedSections: ["charisma-learnable-skill", "final-charismatic-presence-operating-system"]
  }),
  lesson({
    id: "final-charismatic-presence-operating-system",
    title: "Final Synthesis: A Practical Operating System for Charismatic Presence",
    eyebrow: "Synthesis",
    minutes: 34,
    summary:
      "The curriculum integrates presence, power, warmth, internal state, nonverbal signals, and ethical influence into a practical model for social presence.",
    objectives: [
      "Connect the book's major ideas",
      "Use the three pillars in everyday life",
      "Become more charismatic without becoming fake"
    ],
    concepts: ["synthesis", "presence", "power", "warmth", "ethics"],
    body: [
      "The Charisma Myth is most useful when read as a discipline of social clarity. People experience you through signals. Those signals are shaped by attention, body, voice, internal state, and intention. The three pillars give you a simple diagnostic: am I present, am I communicating capability, and am I communicating goodwill?",
      "The model is not a personality replacement. You do not need to become louder, smoother, more glamorous, or more socially dominant. You need to reduce the noise that hides your best state: distraction, self-consciousness, anxious speed, fake warmth, defensive posture, or power signals that feel unsafe.",
      "Months later, remember the triangle. Presence makes people feel seen. Power makes them feel you can handle reality. Warmth makes them feel your capability is safe to trust. When those three signals align, charisma becomes less mysterious and more humane.",
      "The ethical application is simple: use charisma to make interactions clearer, safer, and more effective. Do not use it to manipulate perception while withholding respect. The most sustainable charisma is not a trick; it is a more disciplined way of showing up."
    ],
    support: [
      {
        type: "synthesis",
        title: "The operating system",
        text:
          "Regulate your state, bring full attention, communicate grounded capability, show genuine goodwill, and adapt the balance to the room."
      }
    ],
    whyThisMatters:
      "The book gives readers a practical way to improve social impact without reducing human interaction to performance.",
    practicalApplication:
      "Use presence, power, and warmth as a quick pre-meeting and post-meeting diagnostic.",
    commonMistakes: [
      "Trying to become a different personality",
      "Using charisma as image management",
      "Forgetting that ethics determines whether influence is trustworthy"
    ],
    misconceptions: [
      {
        misconception: "Charisma requires becoming fake.",
        correction:
          "The strongest charisma often comes from making your real attention, capability, and goodwill more visible."
      }
    ],
    lens:
      "Ask how to make your best intention easier for others to feel.",
    anchors: [
      "Charisma is presence, power, and warmth made visible.",
      "Sustainable charisma is ethical social clarity."
    ],
    takeaways: [
      "Charisma is learnable and contextual.",
      "Internal state shapes external signals.",
      "The goal is not performance but trustworthy presence."
    ],
    examples: [
      "A leader prepares state, clarity, and care before a hard meeting.",
      "A shy professional becomes more magnetic through attention and grounded speech.",
      "A speaker uses calm pauses and warmth to make complex material accessible."
    ],
    relatedSections: ["three-pillars-presence-power-warmth", "common-charisma-mistakes"]
  })
];

export const charismaMyth: Book = {
  slug: "charisma-myth",
  title: "The Charisma Myth",
  author: "Olivia Fox Cabane",
  category: "Communication / Social Intelligence / Confidence",
  difficulty: "Intermediate",
  completionTime: "6h 24m",
  progress: 0,
  coverTone:
    "from-fuchsia-100 via-amber-100 to-teal-100 dark:from-fuchsia-950/35 dark:via-amber-950/30 dark:to-teal-950/35",
  description:
    "A practical, mature curriculum on charisma as presence, power, warmth, internal state, body language, trust, influence, and ethical social signaling.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "charisma",
    "presence",
    "warmth",
    "power",
    "confidence",
    "communication",
    "body language",
    "social intelligence",
    "executive presence",
    "emotional regulation",
    "influence",
    "first impressions",
    "self-presentation"
  ],
  intendedOutcomes: [
    "Understand charisma as a skill, not just an inborn trait",
    "Understand the roles of presence, power, and warmth",
    "Improve attention and conversational presence",
    "Recognize how internal discomfort leaks into external signals",
    "Understand how body language shapes social perception",
    "Avoid overperformance, neediness, and fake confidence",
    "Apply charisma principles in work, leadership, dating, networking, and public speaking"
  ],
  promise:
    "After completing this curriculum, you will understand Olivia Fox Cabane's model of charisma as a learnable combination of presence, power, and warmth, and how internal state, body language, attention, emotional regulation, and social signaling shape how people experience you.",
  recommendedAudience: [
    "Professionals who want stronger executive presence without performative confidence",
    "Leaders, speakers, and managers who need trust and influence",
    "Readers interested in communication, social intelligence, and confidence",
    "Anyone who wants to become more socially effective without becoming fake"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around presence, power, warmth, body language, emotional state, and charisma. It does not reproduce long passages or chapter text.",
  sections
};
