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
    id: "seeing-people-clearly",
    title: "Human Nature: Seeing People More Clearly",
    eyebrow: "Foundation",
    minutes: 36,
    summary:
      "Greene's project begins with a difficult claim: people are often opaque to themselves, so social intelligence requires patient observation of patterns.",
    objectives: [
      "Understand why the book begins with self-awareness",
      "See human nature as pattern recognition rather than cynicism",
      "Develop a more careful way to interpret behavior"
    ],
    concepts: ["human nature", "self-awareness", "pattern observation", "social intelligence"],
    body: [
      "The Laws of Human Nature is a book about seeing. Greene argues that people are rarely as transparent, rational, or self-aware as they imagine. They explain themselves after the fact, protect their self-image, perform roles, hide envy, rationalize desire, and repeat patterns they do not fully understand. Social intelligence begins when we stop taking every surface explanation as the whole truth.",
      "This can sound suspicious if read poorly. The mature reading is not that everyone is secretly terrible or that social life is only manipulation. It is that human beings are complex, emotional, status-sensitive, fearful, desirous, defensive, and shaped by forces they often cannot name. To see people clearly is to respect that complexity rather than reduce them to their self-presentation.",
      "The first object of study is oneself. Greene's laws are easy to project outward: that person is irrational, that colleague is narcissistic, that leader is performing, that friend is envious. But the book's deeper value appears when the reader recognizes the same tendencies inside their own reactions. Without self-awareness, social intelligence becomes accusation.",
      "Patterns matter more than isolated moments. Anyone can be charming once, angry once, generous once, or unreliable once. Character is revealed through repetition, especially under stress, delay, temptation, power, or conflict. Greene asks the reader to become slower and more observant: less captivated by immediate impressions, more attentive to recurring behavior.",
      "The ethical purpose of this curriculum is discernment, not dehumanization. Understanding human nature should make you less naive and less reactive, but also more humble. People are not machines to be decoded for advantage. They are human beings whose behavior becomes more understandable when emotion, history, role, and context are brought into view."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Discernment versus cynicism",
        not: "Assuming hidden motives make people untrustworthy by default.",
        but: "Recognizing patterns carefully while preserving empathy, context, and ethical restraint."
      },
      {
        type: "framework",
        title: "Reading behavior maturely",
        stages: [
          { name: "Observe", description: "Look for repeated behavior, not single impressions." },
          { name: "Contextualize", description: "Consider pressure, incentives, history, and role." },
          { name: "Self-check", description: "Ask what your own emotion wants to believe." },
          { name: "Respond", description: "Act with boundaries, patience, or distance as needed." }
        ]
      }
    ],
    whyThisMatters:
      "Social life becomes safer and wiser when you can recognize patterns without turning observation into contempt.",
    practicalApplication:
      "When interpreting someone, separate the event, the pattern, your emotional reaction, and the context before deciding what it means.",
    commonMistakes: [
      "Using the book mainly to diagnose others",
      "Confusing suspicion with intelligence",
      "Overreacting to single incidents instead of studying patterns"
    ],
    misconceptions: [
      {
        misconception: "The book teaches you to see people as manipulative objects.",
        correction:
          "A mature reading teaches clearer perception, stronger boundaries, and more ethical self-awareness."
      }
    ],
    lens:
      "Begin with the question: what pattern is being revealed, and what pattern in me is shaping how I interpret it?",
    anchors: [
      "Social intelligence begins with self-awareness and pattern recognition.",
      "Seeing clearly should make you wiser, not colder."
    ],
    takeaways: [
      "People are often opaque to themselves.",
      "Patterns reveal more than isolated performances.",
      "Ethical application requires humility."
    ],
    examples: [
      "A charming colleague repeatedly avoids accountability under pressure.",
      "A leader's stated values differ from what they reward.",
      "Your own irritation may reveal a threatened ego rather than objective judgment."
    ],
    relatedSections: ["irrationality-emotion-beneath-reason", "character-patterns-reveal-person"]
  }),
  lesson({
    id: "irrationality-emotion-beneath-reason",
    title: "Irrationality: Emotion Beneath Reason",
    eyebrow: "Emotion",
    minutes: 37,
    summary:
      "Greene treats emotion as the hidden current beneath thought: people often reason after desire, fear, ego, or stress has already moved them.",
    objectives: [
      "Understand how emotion drives reasoning",
      "Recognize rationalization in oneself and others",
      "Learn how slowing down improves judgment"
    ],
    concepts: ["irrationality", "emotion", "rationalization", "judgment"],
    body: [
      "Greene's law of irrationality begins with an uncomfortable observation: people usually experience their thoughts as reasonable, even when those thoughts are carrying emotional cargo. Fear feels like prudence. Desire feels like destiny. Ego defense feels like principle. Resentment feels like justice. The mind often produces reasons after emotion has already chosen a direction.",
      "Intelligence does not eliminate this problem. Smart people may simply become better at explaining their impulses. They can build elegant arguments around status anxiety, confirmation bias, romantic obsession, or professional insecurity. The more articulate the rationalization, the harder it can be to see the emotion underneath.",
      "Stress intensifies irrationality because it narrows attention. Under pressure, people reach for familiar defenses: blame, control, denial, aggression, avoidance, pleasing, or overconfidence. This is why observing someone under stress is often more revealing than observing them during comfort. Pressure exposes the emotional habits beneath polished identity.",
      "The practical antidote is not to become emotionless. Emotion contains information: fear may signal risk, anger may signal boundary violation, desire may signal value, sadness may signal loss. The discipline is to create a pause between emotion and interpretation. What am I feeling? What story did the feeling instantly produce? What evidence would I notice if I were less activated?",
      "In social situations, this pause prevents escalation. Instead of reacting to a defensive email, a status slight, or a critical comment as though the first interpretation is reality, you allow the emotional wave to settle enough for judgment to return. Greene's point is severe but useful: the person who can see their own irrationality becomes harder to govern by it."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A manager receives critical feedback from a direct report.",
        defaultApproach:
          "Immediately explain why the report misunderstood the situation and mentally label them ungrateful.",
        betterApproach:
          "Notice the sting of ego threat, wait before responding, and ask which part of the feedback may contain useful information.",
        whyItWorks:
          "The manager separates the emotional injury from the accuracy question."
      },
      {
        type: "mentalModel",
        name: "Emotion first, reason second",
        explanation:
          "When a conclusion arrives with unusual speed and heat, emotion may have chosen before reasoning began.",
        useWhen:
          "You feel certain, offended, drawn in, or dismissive faster than the evidence warrants."
      }
    ],
    whyThisMatters:
      "Better judgment requires understanding the emotional forces that shape thought before they become decisions.",
    practicalApplication:
      "When a reaction feels urgent, name the emotion, delay the response if possible, and ask what story the emotion is trying to make inevitable.",
    commonMistakes: [
      "Assuming intelligence protects against irrationality",
      "Treating emotions as facts",
      "Suppressing emotion instead of studying its influence"
    ],
    misconceptions: [
      {
        misconception: "Rational people do not feel strongly.",
        correction:
          "Mature judgment includes emotion but does not let emotion secretly write the whole interpretation."
      }
    ],
    lens:
      "When reasoning feels hot, fast, and self-protective, slow down. The question is not whether you have reasons; it is what those reasons are serving.",
    anchors: [
      "Emotion often moves first; reason often explains afterward.",
      "The pause between feeling and action is where judgment returns."
    ],
    takeaways: [
      "Irrationality is universal, not a flaw in only foolish people.",
      "Stress reveals emotional habits.",
      "Slowing down can convert reaction into judgment."
    ],
    examples: [
      "Fear presents itself as cautious analysis.",
      "Status injury presents itself as moral outrage.",
      "Desire presents itself as certainty that an opportunity is unique."
    ],
    relatedSections: ["defensiveness-aggression-shadow", "seeing-people-clearly"]
  }),
  lesson({
    id: "narcissism-attention-hunger",
    title: "Narcissism and the Hunger for Attention",
    eyebrow: "Self",
    minutes: 36,
    summary:
      "Greene treats narcissism as a spectrum of attention hunger, ranging from ordinary self-concern to destructive self-absorption.",
    objectives: [
      "Distinguish healthy self-regard from unhealthy narcissism",
      "Recognize attention hunger in modern contexts",
      "Respond to narcissism without becoming consumed by it"
    ],
    concepts: ["narcissism", "attention", "validation", "self-absorption"],
    body: [
      "Greene's treatment of narcissism is broader than the clinical label. He describes a human tendency to orbit around the self: our needs, image, wounds, importance, and desire for recognition. Everyone needs attention and validation. The problem begins when that need becomes so dominant that other people are experienced mainly as mirrors, audiences, rivals, or instruments.",
      "Healthy self-regard allows a person to know their needs while remaining capable of empathy. Unhealthy narcissism narrows the world. The other person's inner life becomes inconvenient. Conversations become performances. Feedback becomes attack. Relationships become sources of supply or threat depending on whether they confirm the desired self-image.",
      "Modern work and social media can intensify attention hunger. Metrics, visibility, personal brands, public comparison, and constant feedback make self-presentation feel like survival. A person may become addicted to being seen while losing the capacity to see others. Leaders can fall into the same pattern when authority surrounds them with agreement.",
      "The practical skill is to watch reciprocity of attention. Does the person ask real questions? Can they tolerate your success? Can they repair after causing harm? Do they become curious when challenged, or only defensive? Do they remember what matters to others when there is no audience?",
      "The ethical application includes self-examination. Where do you seek validation so intensely that you stop listening? Where do you turn people into proof of your worth? Greene's warning is not merely about spotting narcissists. It is about recovering the ability to direct attention outward."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Self-regard versus self-absorption",
        not: "Having needs, ambition, confidence, or a desire to be recognized.",
        but: "Needing attention so much that other people become props for self-image."
      },
      {
        type: "comparisonTable",
        title: "Attention patterns",
        columns: ["Setting", "Healthy pattern", "Unhealthy pattern"],
        rows: [
          ["Work", "Seeks impact and feedback", "Needs credit and avoids accountability"],
          ["Relationships", "Shares attention and repair", "Turns every issue into personal injury"],
          ["Leadership", "Uses visibility to serve direction", "Uses followers to confirm greatness"],
          ["Social media", "Communicates value", "Requires constant validation to feel real"]
        ]
      }
    ],
    whyThisMatters:
      "Narcissistic dynamics distort trust because attention becomes extraction rather than mutual recognition.",
    practicalApplication:
      "Assess attention reciprocity over time: curiosity, repair, accountability, and ability to celebrate others are stronger signals than charm.",
    commonMistakes: [
      "Calling every difficult person a narcissist",
      "Ignoring your own validation hunger",
      "Mistaking confidence for narcissism"
    ],
    misconceptions: [
      {
        misconception: "Narcissism means someone obviously loves themselves.",
        correction:
          "It often reflects fragile self-worth that requires constant external confirmation."
      }
    ],
    lens:
      "Watch whether attention circulates or only flows toward one person's self-image.",
    anchors: [
      "Narcissism is attention hunger that can erase other people's reality.",
      "Healthy self-regard still leaves room for empathy."
    ],
    takeaways: [
      "Narcissism exists on a spectrum.",
      "Validation hunger appears in work, relationships, leadership, and social media.",
      "Attention reciprocity is a key signal of emotional maturity."
    ],
    examples: [
      "A leader treats dissent as betrayal because it threatens image.",
      "A friend listens only long enough to redirect attention back to themselves.",
      "A professional chases visibility while neglecting substance."
    ],
    relatedSections: ["role-playing-masks-performance", "leadership-authority-motivation"]
  }),
  lesson({
    id: "role-playing-masks-performance",
    title: "Role-Playing, Masks, and Social Performance",
    eyebrow: "Persona",
    minutes: 35,
    summary:
      "People perform roles because social life requires presentation, but wisdom means reading the gap between persona and behavior.",
    objectives: [
      "Understand why people wear masks",
      "Read status signals and personas without contempt",
      "Distinguish social performance from character"
    ],
    concepts: ["role-playing", "masks", "persona", "impression management"],
    body: [
      "Greene emphasizes that social life is theatrical. People present versions of themselves: competent professional, caring friend, decisive leader, rebel, intellectual, victim, visionary, helper, outsider. This is not automatically dishonest. Civilization requires roles. We dress, speak, and behave differently across contexts because social coordination depends on performance.",
      "The danger is mistaking the role for the person. A polished persona can hide insecurity, aggression, envy, neediness, or incompetence. A rough exterior can hide loyalty and depth. Status signals can create impressions before evidence appears. The socially intelligent person does not reject appearances; they treats them as information to compare with behavior.",
      "The gap between persona and action is where truth often appears. Someone who speaks constantly about integrity but cuts corners under pressure is revealing a split. Someone who performs humility but cannot share credit is revealing a need. Someone who performs toughness but avoids hard conversations may be protecting fragility.",
      "Role-playing also matters internally. A person can become trapped in a mask they once chose strategically. The leader must always know. The expert must never be confused. The helper must never need help. The rebel must oppose whatever is conventional. These identities can become prisons when they prevent honest adaptation.",
      "The mature application is not to demand total authenticity in every setting. That would be naive. It is to understand which role is being played, what need it serves, and whether the behavior beneath it is reliable."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Persona-behavior gap",
        explanation:
          "The most useful signal is often the distance between how someone wants to be seen and how they repeatedly act.",
        useWhen:
          "A person's image is strong but the evidence of reliability, empathy, or competence is mixed."
      },
      {
        type: "expandedExample",
        scenario: "A leader performs radical transparency in public meetings.",
        defaultApproach:
          "Assume the performance proves openness.",
        betterApproach:
          "Watch how the leader responds to private disagreement, bad news, and accountability.",
        whyItWorks:
          "The role is tested against behavior under pressure."
      }
    ],
    whyThisMatters:
      "Much social misjudgment comes from believing a convincing role before observing repeated behavior.",
    practicalApplication:
      "When someone has a strong persona, look for consistency across private behavior, pressure, incentives, and treatment of lower-status people.",
    commonMistakes: [
      "Assuming all performance is fake",
      "Mistaking charisma or polish for character",
      "Demanding authenticity without respecting social context"
    ],
    misconceptions: [
      {
        misconception: "Masks are always deceptive.",
        correction:
          "Roles can be socially useful; the danger is when the role hides harmful or unreliable patterns."
      }
    ],
    lens:
      "Ask what the role is trying to communicate and whether repeated behavior confirms or contradicts it.",
    anchors: [
      "Social life requires roles, but roles are not character.",
      "The gap between persona and behavior is a major source of truth."
    ],
    takeaways: [
      "People perform identities in social life.",
      "Personas should be compared with behavior over time.",
      "You can respect roles without being fooled by them."
    ],
    examples: [
      "A charming teammate avoids difficult work when visibility drops.",
      "A humble persona masks intense credit-seeking.",
      "A severe exterior hides consistent loyalty and competence."
    ],
    relatedSections: ["character-patterns-reveal-person", "narcissism-attention-hunger"]
  }),
  lesson({
    id: "character-patterns-reveal-person",
    title: "Character: Patterns That Reveal the Person",
    eyebrow: "Reliability",
    minutes: 37,
    summary:
      "Character is not what people claim about themselves; it is the recurring pattern revealed under stress, power, delay, conflict, and temptation.",
    objectives: [
      "Evaluate reliability through patterns",
      "Understand why charm is weaker evidence than repeated behavior",
      "Read character in high-pressure moments"
    ],
    concepts: ["character", "patterns", "reliability", "stress tests"],
    body: [
      "Greene places heavy weight on character because it predicts future behavior better than charm, talent, or declared intention. Character is the settled pattern of how a person handles desire, fear, responsibility, frustration, power, and uncertainty. It is not perfectly fixed, but it is more stable than mood.",
      "People reveal character when conditions change. Under stress, do they become cruel, avoidant, honest, blaming, calm, controlling, or courageous? With power, do they become generous or entitled? Under delay, do they remain steady or resentful? In conflict, do they seek truth, victory, repair, or domination? Around temptation, do they rationalize exceptions?",
      "Charm often creates false confidence because it is immediate. Character requires time. A charming person can make you feel understood in an hour; reliability is proven across months of small promises, inconvenient moments, and unobserved choices. Greene urges the reader to privilege pattern over intensity.",
      "This matters in hiring, partnership, friendship, leadership, and romance. Many painful outcomes come from overvaluing chemistry, brilliance, or confidence while undervaluing how the person behaves when things become inconvenient. Character is most visible when the performance is expensive to maintain.",
      "The ethical use of character reading is not to freeze people forever. People can grow. But growth itself becomes a pattern: ownership, repair, humility, repeated change. Until a new pattern exists, hope should not be allowed to erase evidence."
    ],
    support: [
      {
        type: "framework",
        title: "Character stress tests",
        stages: [
          { name: "Stress", description: "How do they behave when pressured or afraid?" },
          { name: "Power", description: "How do they treat people who cannot help them?" },
          { name: "Delay", description: "Can they tolerate waiting without resentment or manipulation?" },
          { name: "Conflict", description: "Do they seek repair, truth, control, or victory?" },
          { name: "Temptation", description: "What do they rationalize when desire is high?" }
        ]
      },
      {
        type: "keyDistinction",
        title: "Charm versus reliability",
        not: "The emotional ease or admiration someone creates at first contact.",
        but: "The repeated evidence that they can be trusted when circumstances become difficult."
      }
    ],
    whyThisMatters:
      "Better character judgment prevents avoidable damage in teams, relationships, partnerships, and leadership choices.",
    practicalApplication:
      "Before deepening trust, identify how the person has behaved across pressure, power, delay, conflict, and temptation.",
    commonMistakes: [
      "Letting charm outrank pattern",
      "Assuming potential is the same as character",
      "Ignoring small reliability signals because the person is talented"
    ],
    misconceptions: [
      {
        misconception: "Character reading means judging people harshly.",
        correction:
          "It means taking repeated behavior seriously while leaving room for demonstrated growth."
      }
    ],
    lens:
      "Trust the pattern that appears when the mask is costly to maintain.",
    anchors: [
      "Character is repeated behavior under revealing conditions.",
      "Hope should update only when behavior updates."
    ],
    takeaways: [
      "Character predicts future behavior better than charm.",
      "Stress, power, delay, conflict, and temptation reveal patterns.",
      "Growth must become visible in repeated behavior."
    ],
    examples: [
      "A brilliant hire blames everyone else under pressure.",
      "A partner becomes dismissive whenever accountability appears.",
      "A leader treats low-status employees with unusual respect."
    ],
    relatedSections: ["role-playing-masks-performance", "defensiveness-aggression-shadow"]
  }),
  lesson({
    id: "envy-comparison-hidden-hostility",
    title: "Envy, Comparison, and Hidden Hostility",
    eyebrow: "Comparison",
    minutes: 35,
    summary:
      "Greene treats envy as one of the most hidden social emotions because people rarely admit that another person's success makes them feel diminished.",
    objectives: [
      "Understand why envy is often disguised",
      "Recognize indirect expressions of envy",
      "Manage success and comparison ethically"
    ],
    concepts: ["envy", "comparison", "resentment", "hidden hostility"],
    body: [
      "Envy is difficult because it threatens the self-image. People can admit anger, sadness, or fear more easily than envy. Envy says someone else's success has made me feel smaller, and that admission is humiliating. Because it is hard to confess, envy often appears indirectly.",
      "It may show up as faint praise, sudden criticism, moralizing, exclusion, gossip, joking contempt, or a strange lack of happiness when something good happens to you. The envious person may not consciously think, I envy them. They may feel that the successful person is arrogant, undeserving, lucky, fake, or changed.",
      "Comparison is the fuel. People usually envy those close enough to make comparison painful: peers, siblings, colleagues, friends, people in the same field, people with similar backgrounds. Distant greatness can inspire; nearby success can accuse. This is why success can alter relationships even when no one says anything directly.",
      "Greene's warning should be handled carefully. Not every criticism is envy. Sometimes the successful person is behaving badly. Sometimes others are raising real concerns. The skill is to observe patterns: does hostility rise specifically around your progress, attention, or recognition? Does the person diminish what they cannot share in?",
      "The self-application matters as much as the defensive one. When you feel irritated by someone's success, ask what it seems to threaten. Envy can reveal desire, insecurity, or neglected ambition. Handled honestly, it becomes information. Hidden, it becomes resentment."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Indirect forms of envy",
        columns: ["Signal", "Surface form", "Possible underlying movement"],
        rows: [
          ["Faint praise", "That is nice, but...", "Refusal to grant full recognition"],
          ["Moralizing", "They only care about status", "Converting comparison pain into virtue"],
          ["Gossip", "People should know what they are really like", "Socially lowering the successful person"],
          ["Exclusion", "They do not fit anymore", "Regaining control by withholding belonging"]
        ]
      },
      {
        type: "misconception",
        misconception: "Any criticism of success is envy.",
        correction:
          "Criticism may be valid. Envy is more likely when hostility reliably tracks another person's progress or recognition.",
        whyItMatters:
          "Calling every critic envious can become narcissistic self-protection."
      }
    ],
    whyThisMatters:
      "Envy can quietly corrode trust, especially among peers, unless it is recognized with nuance.",
    practicalApplication:
      "When success changes a relationship, watch for repeated diminishing behavior while staying open to legitimate feedback.",
    commonMistakes: [
      "Accusing critics of envy to avoid accountability",
      "Ignoring indirect hostility because it is not openly aggressive",
      "Refusing to examine your own envy"
    ],
    misconceptions: [
      {
        misconception: "Envy only appears as obvious jealousy.",
        correction:
          "It often appears as criticism, distance, moral superiority, or subtle diminishing."
      }
    ],
    lens:
      "Ask whether the emotion is responding to truth or to comparison pain.",
    anchors: [
      "Envy is often hidden because admitting it wounds the self-image.",
      "Nearby success is more likely to provoke envy than distant greatness."
    ],
    takeaways: [
      "Envy often appears indirectly.",
      "Comparison creates resentment when success feels like a verdict.",
      "Self-awareness can turn envy into information instead of hostility."
    ],
    examples: [
      "A colleague becomes critical only after your promotion.",
      "A friend minimizes your achievement through jokes.",
      "You feel irritated by someone whose success points to your own neglected ambition."
    ],
    relatedSections: ["narcissism-attention-hunger", "defensiveness-aggression-shadow"]
  }),
  lesson({
    id: "defensiveness-aggression-shadow",
    title: "Defensiveness, Aggression, and the Shadow Side",
    eyebrow: "Conflict",
    minutes: 36,
    summary:
      "People protect ego through defensiveness, passive aggression, moral self-image, and hidden hostility; maturity requires recognizing these forces without escalating them.",
    objectives: [
      "Recognize ego defense and passive aggression",
      "Understand shadow traits and moral self-deception",
      "Respond to hostility without feeding it"
    ],
    concepts: ["defensiveness", "aggression", "shadow", "ego protection"],
    body: [
      "Greene repeatedly returns to the fact that people protect their self-image. When a person feels exposed, criticized, ignored, or humiliated, they may not say, I feel ashamed. They may attack, withdraw, become sarcastic, moralize, stonewall, or rewrite the situation so they appear innocent.",
      "Aggression is not always loud. Passive aggression lets hostility travel under the cover of politeness, delay, confusion, joking, or victimhood. The person can wound while denying intent. This makes it difficult to address because the surface remains ambiguous.",
      "The shadow side refers to traits people disown in themselves: ambition, envy, cruelty, need, vanity, dependency, anger, or desire. When disowned, these traits do not disappear. They leak out indirectly or get projected onto others. A person obsessed with condemning arrogance may be wrestling with their own hunger for superiority.",
      "Moral self-image can make the shadow harder to see. People who believe they are only kind, only rational, only fair, or only principled may become dangerous when their darker motives appear because they cannot recognize them as their own. The motive must be disguised as justice, concern, standards, or truth.",
      "The practical response is calm specificity. Do not meet indirect hostility with emotional chaos if you can avoid it. Name behavior, set boundaries, reduce ambiguity, and avoid rewarding escalation. At the same time, examine your own defensive patterns. The shadow you cannot see in yourself will govern you from behind."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A teammate repeatedly misses deadlines after disagreeing with a decision.",
        defaultApproach:
          "Argue about attitude and get pulled into denials of intent.",
        betterApproach:
          "Name the observable pattern, clarify expectations, and address disagreement directly without debating hidden motives first.",
        whyItWorks:
          "Specific behavior is easier to handle than psychological accusation."
      },
      {
        type: "keyDistinction",
        title: "Motive versus behavior",
        not: "Trying to prove the other person's hidden intent before acting.",
        but: "Responding to observable behavior and setting clear limits."
      }
    ],
    whyThisMatters:
      "Defensiveness and hidden aggression can derail teams and relationships unless handled with clarity and self-control.",
    practicalApplication:
      "When hostility is indirect, document the behavior, reduce ambiguity, and set boundaries around actions rather than arguing about intent.",
    commonMistakes: [
      "Escalating because you want the other person to admit their motive",
      "Ignoring passive aggression until resentment explodes",
      "Believing your own moral self-image makes you free of darker motives"
    ],
    misconceptions: [
      {
        misconception: "Aggression is always obvious.",
        correction:
          "Aggression often appears as delay, sarcasm, confusion, moralizing, or victimhood."
      }
    ],
    lens:
      "In conflict, ask what ego injury may be present and what behavior must be addressed regardless of intent.",
    anchors: [
      "The ego defends itself before it understands itself.",
      "Respond to behavior clearly; examine motives humbly."
    ],
    takeaways: [
      "Defensiveness often hides shame or threat.",
      "Passive aggression keeps hostility deniable.",
      "Shadow traits become more dangerous when disowned."
    ],
    examples: [
      "A person punishes disagreement through delays while insisting nothing is wrong.",
      "A moral crusade hides status resentment.",
      "A leader cannot admit insecurity and converts it into control."
    ],
    relatedSections: ["irrationality-emotion-beneath-reason", "character-patterns-reveal-person"]
  }),
  lesson({
    id: "desire-seduction-influence",
    title: "Desire, Seduction, and Emotional Influence",
    eyebrow: "Influence",
    minutes: 35,
    summary:
      "Greene's view of influence centers on emotion, perceived value, mystery, validation, and desire, while requiring ethical boundaries against manipulation.",
    objectives: [
      "Understand emotional influence without reducing people to targets",
      "Recognize desire in status, career, relationships, and business",
      "Distinguish persuasion from manipulation"
    ],
    concepts: ["desire", "seduction", "influence", "perceived value"],
    body: [
      "Greene uses seduction broadly: the ability to move people through desire, imagination, validation, and emotional pull. This does not belong only to romance. Careers, brands, leaders, status systems, social media, and businesses all operate through desire. People are drawn toward what seems valuable, rare, validating, mysterious, or connected to a desired identity.",
      "Influence often works indirectly. A person may want a job not only for money but for identity. A customer may want a product not only for function but for belonging. A follower may want a leader not only for competence but for certainty. A romantic attraction may be intensified by ambiguity, projection, and the feeling of being specially seen.",
      "The ethical danger is obvious. Understanding desire can become manipulation if it bypasses truth, exploits vulnerability, or treats people as instruments. The mature application is to understand what moves people so communication can meet real emotional needs without deception.",
      "Desire is also unstable because much of it is projection. People imagine what an opportunity, person, or status will make them feel. When reality arrives, disappointment follows if the projection was doing more work than substance. This is why perceived value must eventually be supported by real value.",
      "The practical reader learns to ask two questions. What desire is being activated here? And does the thing actually deserve the desire it is receiving? Those questions apply equally to your own ambitions and to the influence attempts around you."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Desire across domains",
        columns: ["Domain", "Visible want", "Deeper emotional pull"],
        rows: [
          ["Career", "Promotion", "Status, security, recognition, identity"],
          ["Business", "Product", "Control, belonging, ease, competence"],
          ["Relationships", "Attention", "Being chosen, seen, desired, safe"],
          ["Leadership", "Direction", "Certainty, meaning, protection"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Persuasion versus manipulation",
        not: "Using emotional understanding to hide reality or reduce agency.",
        but: "Communicating real value in a way that respects desire, truth, and choice."
      }
    ],
    whyThisMatters:
      "People are moved by emotional meanings as much as explicit arguments, so ethical influence requires understanding desire without exploiting it.",
    practicalApplication:
      "When you feel drawn toward something, identify both the practical value and the emotional promise you are attaching to it.",
    commonMistakes: [
      "Pretending people are moved only by rational arguments",
      "Using emotional insight manipulatively",
      "Confusing projected value with real value"
    ],
    misconceptions: [
      {
        misconception: "Seduction in Greene's sense is only romantic.",
        correction:
          "It refers broadly to emotional attraction, perceived value, identity, and influence."
      }
    ],
    lens:
      "Look beneath the stated want to the emotional state, identity, or validation the person is seeking.",
    anchors: [
      "Influence often moves through desire before argument.",
      "Ethical influence aligns emotional pull with real value."
    ],
    takeaways: [
      "Desire operates in work, status, relationships, and business.",
      "Mystery and validation can intensify perceived value.",
      "Persuasion becomes manipulation when it hides reality or exploits vulnerability."
    ],
    examples: [
      "A brand sells competence and belonging, not only a tool.",
      "A leader offers certainty during group anxiety.",
      "A person mistakes being intensely chosen for being genuinely known."
    ],
    relatedSections: ["narcissism-attention-hunger", "leadership-authority-motivation"]
  }),
  lesson({
    id: "group-psychology-social-contagion",
    title: "Group Psychology and Social Contagion",
    eyebrow: "Groups",
    minutes: 36,
    summary:
      "Groups can amplify emotion, conformity, identity, and irrationality, making independent judgment harder precisely when belonging feels strongest.",
    objectives: [
      "Understand conformity and emotional contagion",
      "Recognize tribal thinking and group identity",
      "Stay independent without becoming isolated"
    ],
    concepts: ["group psychology", "conformity", "social contagion", "tribal identity"],
    body: [
      "Groups change people. A person who is thoughtful alone may become reactive inside a crowd, company, movement, online community, or status group. Emotion spreads. Certainty rises. Dissent becomes socially costly. The need to belong can make people adopt beliefs, tones, enemies, and priorities they would not have chosen independently.",
      "Group identity simplifies the world. It tells members who we are, what we value, who threatens us, and what loyalty requires. This can create courage, coordination, and meaning. It can also create blindness. Once a belief becomes a badge of belonging, changing your mind feels like betrayal rather than learning.",
      "Social contagion is not limited to mobs. Workplaces spread anxiety, cynicism, ambition, carelessness, urgency, or courage. Social media spreads outrage and imitation. Professional fields spread prestige assumptions. Families spread emotional roles. The group teaches people what feelings are acceptable.",
      "The mature response is not withdrawal from all groups. Humans need belonging and shared purpose. The goal is to remain capable of independent perception inside belonging. Can you disagree without panic? Can the group tolerate bad news? Can evidence modify the shared story? Can loyalty coexist with conscience?",
      "Greene's warning is especially useful for leaders and citizens. The more emotionally charged the group becomes, the more important it is to slow down, preserve dissent, and check whether identity is replacing reality."
    ],
    support: [
      {
        type: "framework",
        title: "Group independence checks",
        stages: [
          { name: "Emotion", description: "What feeling is spreading through the group?" },
          { name: "Belonging", description: "What belief or behavior signals loyalty?" },
          { name: "Dissent", description: "Can disagreement be voiced without punishment?" },
          { name: "Reality", description: "What evidence would change the group's view?" }
        ]
      },
      {
        type: "expandedExample",
        scenario: "A company becomes swept up in a competitor panic.",
        defaultApproach:
          "Copy the competitor's roadmap because everyone feels urgency.",
        betterApproach:
          "Name the anxiety, revisit customer evidence, and decide which moves are strategically justified.",
        whyItWorks:
          "The team prevents emotional contagion from becoming strategy."
      }
    ],
    whyThisMatters:
      "Groups can amplify both courage and blindness, so social intelligence must include awareness of collective emotion.",
    practicalApplication:
      "When a group feels certain and emotionally charged, ask what dissent would cost and what evidence is being ignored.",
    commonMistakes: [
      "Assuming group agreement equals truth",
      "Treating belonging as proof of moral correctness",
      "Rejecting all groups instead of choosing healthier ones"
    ],
    misconceptions: [
      {
        misconception: "Only extreme crowds distort judgment.",
        correction:
          "Ordinary teams, families, industries, and online communities also transmit emotion and conformity."
      }
    ],
    lens:
      "Inside any group, watch what emotions are rewarded and what truths become hard to say.",
    anchors: [
      "Belonging can clarify purpose or distort reality.",
      "Independent judgment is most needed when group emotion is strongest."
    ],
    takeaways: [
      "Groups spread emotion and norms.",
      "Identity can make belief feel like loyalty.",
      "Healthy groups preserve dissent and contact with reality."
    ],
    examples: [
      "An industry consensus makes a bad assumption seem obvious.",
      "A team copies a rival because anxiety spreads.",
      "An online community converts uncertainty into outrage."
    ],
    relatedSections: ["generational-forces-historical-imprinting", "leadership-authority-motivation"]
  }),
  lesson({
    id: "generational-forces-historical-imprinting",
    title: "Generational Forces and Historical Imprinting",
    eyebrow: "Context",
    minutes: 34,
    summary:
      "Greene argues that people are shaped by the historical, economic, cultural, and technological environment in which their instincts were formed.",
    objectives: [
      "Understand generational imprinting without stereotyping",
      "See how historical context shapes values",
      "Use context to interpret behavior more fairly"
    ],
    concepts: ["generations", "history", "context", "imprinting"],
    body: [
      "People do not develop in a vacuum. They are shaped by the era in which they first learned what was safe, prestigious, scarce, possible, shameful, or normal. Economic conditions, wars, technological shifts, family structures, institutions, and cultural moods leave marks on a generation's instincts.",
      "This does not mean every person in a generation is the same. Generational thinking becomes lazy when it turns into stereotypes. Greene's more useful point is contextual: people carry assumptions formed by the environment that surrounded them when their identity was taking shape.",
      "A generation that entered adulthood during economic expansion may carry different expectations about opportunity than one shaped by crisis. People formed before social media may understand privacy, reputation, and attention differently from those formed inside constant visibility. A leader shaped by institutional trust may struggle to understand employees shaped by institutional disappointment.",
      "Historical context helps explain friction. Older and younger people may not simply disagree because one side is foolish. They may be operating from different default assumptions about security, loyalty, authority, speed, technology, and identity. Understanding context reduces contempt without requiring agreement.",
      "The practical value is interpretive humility. Before reducing someone's behavior to personality, ask what world taught them to behave that way. Context does not excuse harm, but it can make behavior more intelligible and response more effective."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Context versus stereotype",
        not: "Reducing a person to a generational label.",
        but: "Using historical environment as one lens among others for understanding values and instincts."
      },
      {
        type: "comparisonTable",
        title: "Historical imprinting questions",
        columns: ["Force", "Question"],
        rows: [
          ["Economy", "What did this era teach about security and opportunity?"],
          ["Technology", "What did it make visible, fast, or normal?"],
          ["Institutions", "Did people learn trust, disappointment, or suspicion?"],
          ["Culture", "What status symbols and taboos shaped identity?"]
        ]
      }
    ],
    whyThisMatters:
      "Context helps readers interpret behavior without flattening people into stereotypes or blaming everything on individual character.",
    practicalApplication:
      "In cross-generational tension, identify the different assumptions each person may carry about authority, security, technology, and loyalty.",
    commonMistakes: [
      "Using generation labels as insults",
      "Ignoring historical forces and over-personalizing behavior",
      "Excusing harmful behavior because of context"
    ],
    misconceptions: [
      {
        misconception: "Generational analysis means stereotyping people.",
        correction:
          "Used well, it adds context while still evaluating the individual."
      }
    ],
    lens:
      "Ask what environment trained this person's instincts before judging the behavior as only personal.",
    anchors: [
      "People carry the imprint of the world that formed them.",
      "Context explains without erasing responsibility."
    ],
    takeaways: [
      "Historical conditions shape values and instincts.",
      "Generational lenses should not become stereotypes.",
      "Context can reduce contempt and improve communication."
    ],
    examples: [
      "Different economic eras shape risk tolerance.",
      "Digital visibility changes status and privacy instincts.",
      "Institutional trust or distrust affects workplace expectations."
    ],
    relatedSections: ["group-psychology-social-contagion", "seeing-people-clearly"]
  }),
  lesson({
    id: "leadership-authority-motivation",
    title: "Leadership, Authority, and Human Motivation",
    eyebrow: "Leadership",
    minutes: 36,
    summary:
      "Leadership requires understanding emotion, authority, trust, group identity, and motivation; charisma alone is not enough.",
    objectives: [
      "Understand leadership as emotional regulation and direction",
      "Recognize the limits of charisma",
      "Apply human nature ethically in authority roles"
    ],
    concepts: ["leadership", "authority", "motivation", "trust"],
    body: [
      "For Greene, leadership is inseparable from human nature. Leaders inherit group emotion: fear, ambition, resentment, confusion, hope, fatigue, pride. Their behavior amplifies or regulates those emotions. A leader who cannot read the emotional field will be surprised by resistance, dependency, conformity, and hidden conflict.",
      "Authority changes the room. People may defer, perform agreement, hide bad news, compete for favor, or project parental expectations onto the leader. This means leaders must work harder to hear reality. The higher the authority, the less natural honesty becomes unless the leader deliberately protects it.",
      "Charisma can open attention, but it cannot replace trust. Trust grows when people see consistency, competence, fairness, courage, and concern for reality. A charismatic leader without character may inflame group emotion for personal validation. A quieter leader with strong judgment may create more durable confidence.",
      "Motivation is not only incentive. People want status, belonging, meaning, fairness, autonomy, progress, security, and recognition. Good leaders understand these needs without pandering to every impulse. They connect work to purpose, clarify standards, and regulate anxiety without pretending difficulty is absent.",
      "Ethical leadership uses knowledge of human nature to strengthen agency and coordination. Manipulative leadership uses the same knowledge to create dependence, suppress dissent, and feed the leader's image. The difference becomes visible in whether people become more capable or more controlled."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Leadership signals",
        columns: ["Need", "Healthy leadership", "Unhealthy leadership"],
        rows: [
          ["Security", "Names reality and gives direction", "Uses fear to create dependence"],
          ["Belonging", "Builds shared purpose", "Turns loyalty into conformity"],
          ["Recognition", "Credits contribution", "Makes praise a control tool"],
          ["Truth", "Protects bad news", "Punishes dissent"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Charisma versus trust",
        not: "Emotional magnetism that makes people want to believe.",
        but: "Repeated evidence that authority is competent, fair, reality-based, and accountable."
      }
    ],
    whyThisMatters:
      "Authority magnifies human tendencies, so leaders need social intelligence and ethical restraint.",
    practicalApplication:
      "If you lead, create explicit channels for bad news, dissent, and reality-testing because authority naturally filters what reaches you.",
    commonMistakes: [
      "Mistaking charisma for leadership quality",
      "Assuming authority produces honesty",
      "Ignoring emotional needs until they become resistance"
    ],
    misconceptions: [
      {
        misconception: "Leadership is mainly setting direction.",
        correction:
          "Leadership also means regulating group emotion, trust, motivation, and reality contact."
      }
    ],
    lens:
      "Judge leaders by what they make possible in others: clearer judgment, stronger agency, better coordination, and more contact with truth.",
    anchors: [
      "Authority filters reality unless leaders actively protect truth.",
      "Good leadership regulates group emotion without exploiting it."
    ],
    takeaways: [
      "Leadership is social and emotional work.",
      "Charisma is not a substitute for character.",
      "Ethical leaders make people more capable, not more dependent."
    ],
    examples: [
      "A leader rewards bad news early and prevents denial.",
      "A charismatic founder turns dissent into loyalty tests.",
      "A manager motivates through meaning and standards, not only incentives."
    ],
    relatedSections: ["group-psychology-social-contagion", "narcissism-attention-hunger"]
  }),
  lesson({
    id: "mortality-urgency-perspective",
    title: "Mortality, Urgency, and Perspective",
    eyebrow: "Perspective",
    minutes: 33,
    summary:
      "Awareness of mortality can clarify values, reduce petty status obsession, and bring urgency to what deserves a finite life.",
    objectives: [
      "Understand why mortality changes perspective",
      "Recognize avoidance of death in status chasing",
      "Use urgency without panic"
    ],
    concepts: ["mortality", "urgency", "perspective", "values"],
    body: [
      "Greene ends with mortality because the awareness of death changes the scale of human drama. Much of social life is consumed by status injuries, envy, performance, resentment, and small dominance contests. Mortality does not make these disappear, but it can shrink them to their proper size.",
      "People avoid mortality because it threatens the ego's fantasy of permanence. We distract, accumulate, perform, compare, and postpone. We act as though there will always be time to repair, create, love, leave, begin, or tell the truth. The avoidance makes life feel safer but often less alive.",
      "A clear relationship with mortality creates urgency without panic. It asks what deserves attention if time is finite. Which conflicts are not worth feeding? Which ambitions are actually yours? Which relationships require repair or distance? Which work would you regret never attempting?",
      "This lesson is not motivational decoration. It is a corrective to the distortions studied throughout the book. Narcissism, envy, role-playing, group conformity, and defensiveness lose some power when measured against finitude. Mortality helps restore proportion.",
      "The ethical result should be deeper humanity. Everyone you meet is also finite, afraid, desiring, defending, and aging. Perspective can make you firmer about what matters and softer about what does not."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Urgency versus panic",
        not: "Frantic activity driven by fear of missing out.",
        but: "Clearer prioritization because time and attention are finite."
      },
      {
        type: "synthesis",
        title: "Perspective shift",
        text:
          "Mortality does not remove ambition; it purifies ambition by asking which efforts deserve the limited attention of a finite life."
      }
    ],
    whyThisMatters:
      "Mortality awareness places social conflict, status, and ambition inside a larger frame, making wiser choices possible.",
    practicalApplication:
      "Use mortality as a perspective check when a status conflict, resentment, or performance anxiety begins to consume too much attention.",
    commonMistakes: [
      "Using mortality as a slogan rather than a perspective practice",
      "Confusing urgency with impulsiveness",
      "Avoiding the subject until crisis forces it"
    ],
    misconceptions: [
      {
        misconception: "Thinking about death is morbid.",
        correction:
          "Handled maturely, it can clarify values and reduce trivial conflict."
      }
    ],
    lens:
      "Ask whether the current obsession will still deserve this much life when viewed from the end.",
    anchors: [
      "Mortality restores proportion.",
      "Finite life makes attention a moral resource."
    ],
    takeaways: [
      "Awareness of death can clarify priorities.",
      "Perspective reduces status obsession and petty conflict.",
      "Urgency should sharpen values, not create panic."
    ],
    examples: [
      "A professional stops feeding a prestige rivalry that no longer matters.",
      "A family conflict is approached with clearer boundaries and less ego.",
      "A creative ambition receives attention because postponement is no longer invisible."
    ],
    relatedSections: ["final-synthesis-practical-lens", "seeing-people-clearly"]
  }),
  lesson({
    id: "final-synthesis-practical-lens",
    title: "Final Synthesis: A Practical Lens for Reading Human Behavior",
    eyebrow: "Synthesis",
    minutes: 40,
    summary:
      "The laws connect into a practical lens: observe emotion, roles, character, envy, groups, context, authority, and mortality without becoming cynical.",
    objectives: [
      "Connect the major laws into one ethical framework",
      "Use the book without dehumanizing people",
      "Apply social intelligence to self, relationships, and work"
    ],
    concepts: ["synthesis", "ethical discernment", "social intelligence", "self-awareness"],
    body: [
      "The Laws of Human Nature can be compressed into one practice: look beneath the surface while remembering that you are part of the same human material you are observing. People rationalize emotions, seek attention, perform roles, reveal character through patterns, hide envy, defend ego, spread group feeling, carry historical imprinting, respond to authority, and avoid mortality. None of this places the observer above humanity.",
      "The laws connect through self-protection. Much behavior is organized around protecting identity, belonging, status, desire, and emotional safety. Irrationality protects feelings with reasons. Narcissism seeks validation. Role-playing protects social position. Defensiveness protects ego. Group identity protects belonging. Even envy protects the self from feeling diminished.",
      "The practical lens is sequential. First, slow down your immediate judgment. Second, observe patterns across time and pressure. Third, consider emotion and incentives. Fourth, compare persona with behavior. Fifth, check your own reaction. Sixth, respond with boundaries, empathy, distance, or clarity depending on what the pattern requires.",
      "Ethics matter because psychological insight can become domination if detached from respect. The goal is not to manipulate people more effectively. It is to become less naive, less reactive, less easily captured by appearances, and more capable of choosing relationships, teams, leaders, and responses wisely.",
      "Months later, remember the balance: be harder to fool and easier to humble. See people clearly, including yourself. Take patterns seriously. Do not let cynicism masquerade as wisdom. The point of human nature is not that people are hopeless; it is that people become more understandable when we stop demanding that they be purely rational, transparent, and simple."
    ],
    support: [
      {
        type: "framework",
        title: "The Greene reading lens",
        stages: [
          { name: "Emotion", description: "What feeling may be driving the reasoning?" },
          { name: "Persona", description: "What role is being performed?" },
          { name: "Pattern", description: "What repeats under stress, power, delay, or conflict?" },
          { name: "Context", description: "What group, generation, incentive, or history is shaping behavior?" },
          { name: "Self", description: "What in me wants a particular interpretation to be true?" },
          { name: "Response", description: "What boundary, empathy, or action fits the evidence?" }
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text:
          "Read people through patterns, emotion, roles, character, group forces, and context. Apply the same lens to yourself. Let insight produce discernment, not contempt."
      }
    ],
    whyThisMatters:
      "The book's value depends on turning psychological observation into wiser conduct, not suspicion or manipulation.",
    practicalApplication:
      "Use the final lens in one difficult relationship or workplace dynamic, starting with your own emotional stake before interpreting the other person.",
    commonMistakes: [
      "Becoming cynical and calling it realism",
      "Applying the laws outward but never inward",
      "Treating psychological insight as permission to manipulate"
    ],
    misconceptions: [
      {
        misconception: "Understanding human nature should make you distrust everyone.",
        correction:
          "It should make you more discerning, better bounded, and more humble about human complexity."
      }
    ],
    lens:
      "See patterns clearly, respond ethically, and include yourself in the diagnosis.",
    anchors: [
      "Be harder to fool and easier to humble.",
      "Insight without ethics becomes manipulation; empathy without discernment becomes naivete."
    ],
    takeaways: [
      "The laws are connected by emotion, self-protection, and social context.",
      "Self-awareness is the foundation of ethical social intelligence.",
      "The goal is discernment without dehumanization."
    ],
    examples: [
      "A team conflict is read through ego, group emotion, and incentive rather than blame alone.",
      "A relationship pattern is evaluated through repeated behavior, not chemistry.",
      "A leader's charisma is balanced against character and truth tolerance."
    ],
    relatedSections: ["seeing-people-clearly", "mortality-urgency-perspective"]
  })
];

export const lawsOfHumanNature: Book = {
  slug: "laws-of-human-nature",
  title: "The Laws of Human Nature",
  author: "Robert Greene",
  category: "Psychology / Human Behavior / Social Intelligence",
  difficulty: "Advanced",
  completionTime: "7h 46m",
  progress: 0,
  coverTone:
    "from-zinc-100 via-rose-100 to-amber-100 dark:from-zinc-950/60 dark:via-rose-950/35 dark:to-amber-950/30",
  description:
    "A mature curriculum on emotion, irrationality, narcissism, role-playing, character, envy, aggression, group psychology, leadership, mortality, and ethical social intelligence.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "human nature",
    "social intelligence",
    "power",
    "psychology",
    "emotion",
    "irrationality",
    "narcissism",
    "envy",
    "aggression",
    "character",
    "role-playing",
    "leadership",
    "self-awareness"
  ],
  intendedOutcomes: [
    "Understand the emotional roots of human behavior",
    "Recognize irrationality in oneself and others",
    "Read roles, masks, and character patterns more accurately",
    "Recognize envy, narcissism, defensiveness, and aggression",
    "Understand group psychology and generational context",
    "Apply social intelligence ethically without becoming cynical"
  ],
  promise:
    "After completing this curriculum, you will understand Robert Greene's major laws of human behavior, including irrationality, narcissism, envy, role-playing, compulsive patterns, aggression, leadership, generational influence, mortality, and the social forces that shape how people think and act.",
  recommendedAudience: [
    "Readers studying human behavior and social intelligence",
    "Leaders navigating complex group dynamics",
    "Professionals who need better judgment about people",
    "Anyone who wants discernment without cynicism"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes and psychological concepts. It does not reproduce long passages or chapter text.",
  sections
};
