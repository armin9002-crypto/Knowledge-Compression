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
    id: "what-is-tipping-point",
    title: "What Is a Tipping Point?",
    eyebrow: "Foundation",
    minutes: 31,
    summary:
      "Gladwell's central metaphor describes the moment when small changes accumulate enough force for an idea, behavior, product, or trend to accelerate suddenly.",
    objectives: [
      "Understand the central tipping point metaphor",
      "See why change can look sudden after slow buildup",
      "Avoid reducing tipping points to random virality"
    ],
    concepts: ["tipping point", "nonlinear change", "thresholds", "spread"],
    body: [
      "The Tipping Point is about social change that does not move in a smooth line. A product sits quietly, then becomes fashionable. A behavior remains marginal, then appears everywhere. A neighborhood changes gradually until it seems to change all at once. Gladwell gives readers a language for these moments of acceleration.",
      "The central idea is that small factors can matter disproportionately when they interact with the right network, message, and context. A few people can carry a message across social worlds. A small change in wording can make an idea more memorable. A subtle environmental cue can shift behavior enough to alter a visible pattern.",
      "This does not mean tipping points are magic. They are often easier to explain backward than predict forward. Looking back, we can see the connectors, sticky messages, contextual cues, and thresholds that mattered. Looking ahead, those ingredients are harder to identify because social systems are noisy and adaptive.",
      "The book's usefulness lies in its lens: when something spreads or fails to spread, do not ask only whether the thing is good. Ask who carries it, how it is framed, where it travels, and what context makes adoption easier or harder."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Tipping point versus viral magic",
        not: "A tipping point is random virality that no one can understand.",
        but: "A tipping point is a moment when network conditions, message quality, context, and human behavior combine to accelerate spread."
      }
    ],
    whyThisMatters:
      "The framework helps explain why quality alone rarely determines what spreads.",
    practicalApplication:
      "When evaluating spread, examine the people, message, context, and threshold instead of looking for one magic cause.",
    commonMistakes: [
      "Explaining spread with a single factor",
      "Assuming tipping points are easy to predict",
      "Treating popularity as proof of quality"
    ],
    misconceptions: [
      {
        misconception: "The book says tiny changes always create huge outcomes.",
        correction:
          "It argues that small changes can matter when they occur at leverage points inside a receptive system."
      }
    ],
    lens:
      "Ask what must combine before slow adoption becomes visible acceleration.",
    anchors: [
      "Tipping points are nonlinear social accelerations.",
      "Spread depends on people, message, and context."
    ],
    takeaways: [
      "Social change can accelerate suddenly.",
      "Small factors can matter when conditions align.",
      "Tipping points are easier to explain after the fact than predict before."
    ],
    examples: [
      "A workplace norm shifts after enough respected employees adopt it.",
      "A consumer product spreads when a clear use case meets the right audience.",
      "A fashion trend moves from subculture to mainstream through bridging networks."
    ],
    relatedSections: ["social-epidemics-logic-spread", "small-changes-thresholds"]
  }),
  lesson({
    id: "social-epidemics-logic-spread",
    title: "Social Epidemics and the Logic of Spread",
    eyebrow: "Diffusion",
    minutes: 32,
    summary:
      "Ideas and behaviors spread socially through imitation, trust, repeated exposure, context, and the choices of people embedded in networks.",
    objectives: [
      "Understand the epidemic metaphor",
      "See why social transmission matters",
      "Analyze adoption through people, message, and environment"
    ],
    concepts: ["social epidemics", "diffusion", "social proof", "imitation"],
    body: [
      "Gladwell's epidemic metaphor is powerful because it shifts attention from isolated choice to transmission. People do not adopt ideas, products, or behaviors in a vacuum. They notice what trusted peers do, what high-status people endorse, what becomes visible repeatedly, and what the environment makes easy.",
      "Social proof matters because uncertainty is expensive. When people are unsure what to buy, believe, try, or normalize, they look to others. Adoption can then become self-reinforcing: visible use creates legitimacy, legitimacy reduces risk, reduced risk creates more adoption.",
      "But spread rarely comes from social proof alone. The idea must be carried by people who can reach others, expressed in a form that sticks, and placed in a context that supports adoption. A weak message in a strong network may still fail. A sticky message in the wrong context may not move.",
      "This is why serious tipping point thinking is ecological. It asks how people, message, and environment interact rather than searching for a single hero cause."
    ],
    support: [
      {
        type: "diagram",
        title: "The spread system",
        steps: [
          "People encounter a signal",
          "Trusted carriers reduce uncertainty",
          "The message becomes memorable enough to repeat",
          "Context lowers friction or raises urgency",
          "Adoption becomes visible and self-reinforcing"
        ]
      }
    ],
    whyThisMatters:
      "Understanding social transmission prevents simplistic product or marketing explanations.",
    practicalApplication:
      "Map how an idea would travel through real relationships, not only through broadcast channels.",
    commonMistakes: [
      "Assuming awareness equals adoption",
      "Ignoring trust and imitation",
      "Treating social proof as manipulation rather than a normal uncertainty shortcut"
    ],
    misconceptions: [
      {
        misconception: "People spread ideas because they are rationally convinced.",
        correction:
          "People are influenced by reason, but also by trust, imitation, identity, and context."
      }
    ],
    lens:
      "Ask how the social environment makes the behavior feel normal, useful, or worth repeating.",
    anchors: [
      "Spread is social transmission.",
      "Adoption depends on people, message, and environment."
    ],
    takeaways: [
      "Ideas travel through networks.",
      "Social proof reduces uncertainty.",
      "Spread is rarely caused by one factor alone."
    ],
    examples: [
      "A software tool spreads when teams see adjacent teams using it successfully.",
      "A health behavior changes when it becomes visible among trusted peers.",
      "A meme spreads because repetition and identity make it easy to share."
    ],
    relatedSections: ["law-of-the-few", "stickiness-factor"]
  }),
  lesson({
    id: "law-of-the-few",
    title: "The Law of the Few",
    eyebrow: "Networks",
    minutes: 32,
    summary:
      "The Law of the Few argues that influence is uneven because some people sit at unusually important social, informational, or persuasive positions.",
    objectives: [
      "Understand why networks are uneven",
      "Identify Connectors, Mavens, and Salesmen",
      "Apply the idea without worshiping influencers"
    ],
    concepts: ["Law of the Few", "influence", "networks", "uneven distribution"],
    body: [
      "Gladwell's Law of the Few rests on a network reality: people are not equally positioned. Some individuals know many kinds of people, some collect and share unusually useful information, and some are unusually persuasive carriers of emotion. Their choices can affect spread more than average because they sit near important channels.",
      "This idea is attractive because it gives shape to social influence. Instead of broadcasting to everyone, a marketer, organizer, founder, or community builder can ask who actually moves information, trust, and enthusiasm through the system.",
      "The risk is overapplication. Not every successful spread story depends on a small set of special people, and modern platforms can simulate reach without trust. The useful version of the idea is not celebrity worship. It is network literacy: influence is distributed unevenly, and different kinds of influence do different jobs.",
      "Connectors bridge worlds. Mavens reduce uncertainty through knowledge. Salesmen make ideas emotionally compelling. Confusing these roles leads to poor strategy because the person who knows everyone is not always the person people trust for technical advice, and the expert is not always the persuasive messenger."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Three influential roles",
        columns: ["Role", "Primary strength", "What they move"],
        rows: [
          ["Connector", "Broad social reach across worlds", "Access and introductions"],
          ["Maven", "Useful information and discernment", "Trust and decision confidence"],
          ["Salesman", "Persuasion and emotional transmission", "Motivation and conviction"]
        ]
      }
    ],
    whyThisMatters:
      "Network strategy improves when different forms of influence are distinguished.",
    practicalApplication:
      "For an idea you want to spread, identify who provides access, who provides credibility, and who provides emotional momentum.",
    commonMistakes: [
      "Treating all influential people as interchangeable",
      "Equating follower count with trust",
      "Ignoring the quiet people who carry information inside communities"
    ],
    misconceptions: [
      {
        misconception: "Only a tiny elite matters in social change.",
        correction:
          "The point is that influence is uneven, not that ordinary adoption is irrelevant."
      }
    ],
    lens:
      "Ask what kind of influence a person actually has before asking how popular they are.",
    anchors: [
      "Influence is unevenly distributed.",
      "Different people move access, trust, and persuasion."
    ],
    takeaways: [
      "Networks contain disproportionate carriers.",
      "Connector, Maven, and Salesman are different roles.",
      "Influence requires context, not just reach."
    ],
    examples: [
      "A startup finds early adopters through a trusted community organizer.",
      "A restaurant grows because local food experts recommend it.",
      "A movement gains energy through persuasive storytellers."
    ],
    relatedSections: ["connectors-bridge-worlds", "mavens-information-specialists", "salesmen-persuasive-carriers"]
  }),
  lesson({
    id: "connectors-bridge-worlds",
    title: "Connectors: The People Who Bridge Worlds",
    eyebrow: "Connectors",
    minutes: 31,
    summary:
      "Connectors matter because they link otherwise separate social worlds, allowing information and opportunities to travel across weak ties.",
    objectives: [
      "Understand who Connectors are",
      "See why weak ties help information travel",
      "Apply Connector thinking to communities and business"
    ],
    concepts: ["Connectors", "weak ties", "bridging", "social worlds"],
    body: [
      "Connectors are people whose social maps are unusually broad. They know people across industries, classes, neighborhoods, subcultures, professions, and friend groups. Their influence comes less from deep expertise than from their ability to move information between worlds that do not naturally touch.",
      "Weak ties are powerful because new information often comes from outside the circle that already knows what you know. A close team may share trust but also share blind spots. A Connector introduces novelty: a candidate, customer, idea, investment, venue, or community that would otherwise remain invisible.",
      "In business, Connectors can accelerate hiring, partnerships, customer discovery, and reputation. In social change, they help ideas cross demographic boundaries. In careers, they create serendipity by making distant opportunities reachable.",
      "The common mistake is to treat connection as transaction. Connectors are valuable because they understand social texture: who should meet, why trust might transfer, and when an introduction would be welcome."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Bridging capital",
        explanation:
          "Some relationships create value not through depth but by connecting groups that normally do not exchange information.",
        useWhen:
          "An idea is strong inside one circle but invisible outside it."
      }
    ],
    whyThisMatters:
      "Many ideas fail because they remain trapped inside the same social cluster.",
    practicalApplication:
      "Identify the worlds an idea needs to cross and the people who naturally move between them.",
    commonMistakes: [
      "Mistaking networking volume for genuine bridging",
      "Asking Connectors for access without earning trust",
      "Ignoring weak ties because they feel less emotionally close"
    ],
    misconceptions: [
      {
        misconception: "The best Connector is the person with the largest audience.",
        correction:
          "A Connector's value often lies in relevant bridges, not raw audience size."
      }
    ],
    lens:
      "Ask which social boundary must be crossed for spread to continue.",
    anchors: [
      "Connectors bridge worlds.",
      "Weak ties often carry new information."
    ],
    takeaways: [
      "Connectors expand reach across clusters.",
      "Weak ties matter for novelty.",
      "Good introductions depend on trust and timing."
    ],
    examples: [
      "A recruiter knows both technical communities and executive teams.",
      "A local organizer links neighborhood groups that rarely collaborate.",
      "A startup advisor introduces founders to an unexpected buyer segment."
    ],
    relatedSections: ["law-of-the-few", "applying-tipping-point-thinking"]
  }),
  lesson({
    id: "mavens-information-specialists",
    title: "Mavens: The Information Specialists",
    eyebrow: "Mavens",
    minutes: 31,
    summary:
      "Mavens influence adoption by gathering, evaluating, and sharing useful information that helps others make better decisions.",
    objectives: [
      "Understand the Maven role",
      "See why trusted information reduces uncertainty",
      "Apply Maven thinking to product, consumer, and expert communities"
    ],
    concepts: ["Mavens", "information", "trust", "curation"],
    body: [
      "Mavens are information specialists. They notice details, compare options, remember quality differences, and often share what they know because they enjoy helping others choose well. Their influence is rooted in usefulness rather than charm alone.",
      "People trust Mavens because decisions are uncertain. Which restaurant is worth visiting? Which software tool is reliable? Which investment claim is nonsense? Which school, doctor, device, or process actually works? A Maven reduces the cost of judgment by curating credible information.",
      "In product adoption, Mavens can be decisive because they make early uncertainty less threatening. They inspect quality, explain tradeoffs, and warn against weak options. In expert communities, they shape what becomes legitimate. In consumer markets, they can turn obscure quality into visible reputation.",
      "The danger is assuming expertise automatically creates spread. A Maven may know what is good but may not have broad reach or persuasive energy. Their role is credibility; other roles may be needed for scale."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A new productivity app enters a crowded market.",
        defaultApproach:
          "The company buys broad ads and assumes awareness will create trust.",
        betterApproach:
          "It earns detailed reviews from respected workflow experts who can explain exactly where the tool is superior.",
        whyItWorks:
          "Mavens reduce buyer uncertainty by translating quality into credible judgment."
      }
    ],
    whyThisMatters:
      "Information specialists often determine whether a product or idea becomes trusted enough to try.",
    practicalApplication:
      "If quality is your advantage, make it easy for knowledgeable evaluators to inspect and explain the difference.",
    commonMistakes: [
      "Confusing expertise with persuasion",
      "Ignoring detailed evaluators because they are not flashy",
      "Trying to fool Mavens with surface claims"
    ],
    misconceptions: [
      {
        misconception: "Mavens are just influencers with niche knowledge.",
        correction:
          "Mavens are trusted because they provide useful judgment, not merely attention."
      }
    ],
    lens:
      "Ask who helps your audience decide what is credible, useful, or worth trying.",
    anchors: [
      "Mavens reduce uncertainty.",
      "Useful information can become social influence."
    ],
    takeaways: [
      "Mavens influence through discernment.",
      "Credible curation supports adoption.",
      "Expertise needs channels to spread."
    ],
    examples: [
      "A local food expert makes a hidden restaurant legible to diners.",
      "A technical reviewer helps buyers distinguish real performance from hype.",
      "An investing analyst shapes which risks a community notices."
    ],
    relatedSections: ["salesmen-persuasive-carriers", "stickiness-factor"]
  }),
  lesson({
    id: "salesmen-persuasive-carriers",
    title: "Salesmen: The Persuasive Carriers of Ideas",
    eyebrow: "Persuasion",
    minutes: 31,
    summary:
      "Salesmen matter because some people transmit belief, enthusiasm, and emotional conviction in ways that make ideas feel compelling.",
    objectives: [
      "Understand persuasion as emotional transmission",
      "Distinguish persuasion from manipulation",
      "See why credibility, timing, and delivery matter"
    ],
    concepts: ["Salesmen", "persuasion", "emotional transmission", "credibility"],
    body: [
      "Gladwell's Salesmen are persuasive carriers. They do not merely repeat information; they make an idea feel alive. Their influence may come through confidence, timing, social attunement, storytelling, warmth, authority, or the ability to sense what a listener needs to hear before they can move.",
      "Persuasion matters because people rarely adopt ideas through facts alone. Facts need emotional relevance. A message must feel credible, timely, and connected to a real desire or fear. The Salesman helps bridge the gap between understanding and action.",
      "This does not mean persuasion is manipulation. Ethical persuasion respects reality and the other person's agency. Manipulation hides costs, distorts truth, or exploits vulnerability. The difference matters because trust is a long-term spread asset; manipulation may create short-term adoption while poisoning future credibility.",
      "In movements, companies, and communities, persuasive carriers give ideas momentum. They translate abstract value into felt urgency."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Persuasion versus manipulation",
        not: "Persuasion means making people do what they otherwise would not choose.",
        but: "Ethical persuasion helps people feel the relevance of a truthful idea while preserving agency."
      }
    ],
    whyThisMatters:
      "Many strong ideas fail because no one can make their importance emotionally legible.",
    practicalApplication:
      "When communicating an idea, connect evidence to the listener's real context and emotional stakes.",
    commonMistakes: [
      "Treating persuasion as hype",
      "Assuming facts speak for themselves",
      "Using emotional energy without credibility"
    ],
    misconceptions: [
      {
        misconception: "Persuasive people are always loud or extroverted.",
        correction:
          "Persuasion can be quiet when trust, timing, and relevance are strong."
      }
    ],
    lens:
      "Ask what would make the idea not only understandable but felt as relevant.",
    anchors: [
      "Persuasion moves ideas from understanding to action.",
      "Trust is the ethical boundary around influence."
    ],
    takeaways: [
      "Persuasion is a distinct influence role.",
      "Emotion shapes adoption.",
      "Ethical persuasion preserves credibility."
    ],
    examples: [
      "A teacher makes an abstract concept matter through a vivid example.",
      "A founder turns customer pain into a clear product story.",
      "A community leader gives people language for a shared frustration."
    ],
    relatedSections: ["law-of-the-few", "stickiness-factor"]
  }),
  lesson({
    id: "stickiness-factor",
    title: "The Stickiness Factor: Why Some Messages Stay",
    eyebrow: "Message",
    minutes: 33,
    summary:
      "A message must be memorable, understandable, and actionable enough to survive the journey from exposure to adoption.",
    objectives: [
      "Understand stickiness as message retention",
      "See why exposure alone is insufficient",
      "Use framing, repetition, story, and relevance to improve adoption"
    ],
    concepts: ["stickiness", "message design", "memory", "actionability"],
    body: [
      "The Stickiness Factor asks why some messages stay in the mind while others vanish immediately. Awareness is not enough. A person can see an advertisement, hear a policy idea, watch a lesson, or encounter a product and still retain no clear reason to care or act.",
      "Sticky messages reduce cognitive friction. They are simple enough to remember, concrete enough to picture, relevant enough to matter, and actionable enough to repeat or use. This does not mean simplistic. It means designed for human memory and behavior rather than for the sender's internal complexity.",
      "Framing matters because the same idea can be inert or memorable depending on how it is packaged. Repetition matters when it reinforces meaning rather than merely adding noise. Story matters because people remember causal sequences and human stakes better than abstract claims.",
      "The practical lesson is uncomfortable for experts: being right is not the same as being understood. If a message cannot be remembered, repeated, or acted on, it is unlikely to tip."
    ],
    support: [
      {
        type: "framework",
        title: "Sticky message checks",
        stages: [
          { name: "Clarity", description: "Can the audience state the idea in their own words?" },
          { name: "Relevance", description: "Does it connect to a felt problem or desire?" },
          { name: "Memory", description: "Is there a concrete image, phrase, or story that holds it?" },
          { name: "Action", description: "Does the audience know what to do next?" }
        ]
      }
    ],
    whyThisMatters:
      "Ideas often fail not because they are weak, but because they are not designed to survive attention and memory limits.",
    practicalApplication:
      "Rewrite one message so it is easier to remember, repeat, and act on without losing its truth.",
    commonMistakes: [
      "Equating more information with better communication",
      "Optimizing for cleverness instead of retention",
      "Making the sender's complexity the audience's burden"
    ],
    misconceptions: [
      {
        misconception: "Stickiness means creating a catchy slogan.",
        correction:
          "Stickiness means making an idea memorable and actionable enough to influence behavior."
      }
    ],
    lens:
      "Ask what the audience will remember and do after the message disappears.",
    anchors: [
      "Exposure is not adoption.",
      "Sticky ideas are memorable and actionable."
    ],
    takeaways: [
      "Messages need retention design.",
      "Clarity and relevance create adoption energy.",
      "Experts must translate complexity into usable form."
    ],
    examples: [
      "A public health message becomes clearer when it names one visible behavior.",
      "A product onboarding flow sticks because the first action creates value quickly.",
      "A teacher uses a recurring metaphor to hold a complex idea together."
    ],
    relatedSections: ["power-of-context", "applying-tipping-point-thinking"]
  }),
  lesson({
    id: "power-of-context",
    title: "The Power of Context: Environments Shape Behavior",
    eyebrow: "Context",
    minutes: 33,
    summary:
      "The Power of Context argues that behavior is more sensitive to surrounding cues, norms, and conditions than people usually believe.",
    objectives: [
      "Understand context as a behavior-shaping force",
      "See how small cues can shift norms",
      "Apply context thinking to cities, workplaces, schools, and digital environments"
    ],
    concepts: ["context", "environment", "norms", "behavior change"],
    body: [
      "Gladwell's Power of Context challenges the idea that behavior is driven mainly by stable character. People are more responsive to environment than they like to admit. Physical space, social norms, timing, design cues, enforcement patterns, and visible behavior all shape what seems acceptable or likely.",
      "This idea is powerful because it reveals leverage. If a workplace rewards interruption, people become interruptive. If a digital product makes outrage more visible than nuance, outrage spreads. If a school environment communicates low expectations, students may internalize the norm before any explicit message is spoken.",
      "Context does not erase responsibility, but it changes the strategy for behavior change. Instead of only persuading individuals, we can alter cues, defaults, friction, visibility, and norms. Sometimes a small environmental change matters because it changes what behavior feels normal.",
      "The limitation is that context is rarely simple. A cue that matters in one setting may not matter in another, and social systems have histories. Still, the lens is indispensable: if you want behavior to change, inspect the environment that keeps reproducing it."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "A company wants more thoughtful written decisions.",
        defaultApproach:
          "Leaders tell employees to be more rigorous while rewarding fast verbal reactions in meetings.",
        betterApproach:
          "They require short decision memos before major meetings and praise teams that surface tradeoffs clearly.",
        whyItWorks:
          "The context starts rewarding the desired behavior instead of merely requesting it."
      }
    ],
    whyThisMatters:
      "Behavior change is more effective when the environment supports the behavior instead of silently opposing it.",
    practicalApplication:
      "For a behavior you want to spread, change one cue, default, or visible norm that currently works against it.",
    commonMistakes: [
      "Blaming character while ignoring environment",
      "Changing messaging without changing conditions",
      "Assuming context effects are universal and simple"
    ],
    misconceptions: [
      {
        misconception: "Context means people have no responsibility.",
        correction:
          "Context shapes behavior, but people and institutions can still redesign contexts responsibly."
      }
    ],
    lens:
      "Ask what the environment is making easy, visible, rewarded, or normal.",
    anchors: [
      "Context shapes what behavior feels normal.",
      "Change the environment, not only the argument."
    ],
    takeaways: [
      "People are context-sensitive.",
      "Small cues can shift norms.",
      "Environment design is behavior strategy."
    ],
    examples: [
      "A city changes behavior by altering visible disorder and enforcement expectations.",
      "A classroom norm changes when participation becomes safe and routine.",
      "A product changes behavior by making the best next action obvious."
    ],
    relatedSections: ["small-changes-thresholds", "limits-modern-critiques"]
  }),
  lesson({
    id: "small-changes-thresholds",
    title: "Small Changes, Big Effects, and Thresholds",
    eyebrow: "Leverage",
    minutes: 31,
    summary:
      "Nonlinear systems can remain stable until enough accumulated pressure, adoption, or contextual change pushes them past a threshold.",
    objectives: [
      "Understand thresholds and nonlinear effects",
      "Recognize how small factors accumulate",
      "Think about leverage without oversimplifying"
    ],
    concepts: ["thresholds", "nonlinear systems", "leverage", "accumulation"],
    body: [
      "The language of tipping points is really language about thresholds. A system can absorb small changes for a long time without obvious movement. Then, once enough conditions align, the same kind of change produces a visible shift. This makes social life feel surprising even when the buildup was real.",
      "Thresholds appear in adoption, norms, markets, and culture. A person may try a product only after enough peers use it. A team norm may shift once enough respected people behave differently. A public idea may remain fringe until repeated exposure lowers the cost of agreement.",
      "Small changes matter when they affect leverage points: the right carrier, the right message detail, the right default, the right social proof, the right timing. Small changes do not matter equally everywhere. A tiny adjustment in the wrong place is just tiny.",
      "The practical skill is to look for bottlenecks. Is spread blocked by trust, memory, access, cost, visibility, or context? A threshold often tips when the binding constraint changes."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Binding constraint",
        explanation:
          "The most useful small change is the one that removes the factor currently preventing adoption from compounding.",
        useWhen:
          "An idea has interest but is not spreading."
      }
    ],
    whyThisMatters:
      "Leverage thinking helps people avoid both fatalism and magical thinking.",
    practicalApplication:
      "Identify the current constraint to spread before making random small changes.",
    commonMistakes: [
      "Believing any small change can create a big effect",
      "Missing slow buildup because visible change has not arrived",
      "Ignoring thresholds until after they are crossed"
    ],
    misconceptions: [
      {
        misconception: "Tipping points prove social change is unpredictable chaos.",
        correction:
          "They show that change can be nonlinear, which requires better attention to thresholds and constraints."
      }
    ],
    lens:
      "Ask what threshold must be crossed before adoption becomes self-reinforcing.",
    anchors: [
      "Systems can change slowly, then suddenly.",
      "Leverage depends on the binding constraint."
    ],
    takeaways: [
      "Thresholds create sudden visible change.",
      "Small changes matter at leverage points.",
      "Constraints determine what intervention is useful."
    ],
    examples: [
      "A community norm shifts after visible adoption reaches social safety.",
      "A product grows after onboarding friction is removed.",
      "A behavior spreads once the cost of being early drops."
    ],
    relatedSections: ["what-is-tipping-point", "power-of-context"]
  }),
  lesson({
    id: "applying-tipping-point-thinking",
    title: "Applying Tipping Point Thinking to Products, Culture, and Change",
    eyebrow: "Application",
    minutes: 34,
    summary:
      "The framework can guide product launches, community building, organizational culture, content strategy, and social change when used as a diagnostic rather than a formula.",
    objectives: [
      "Apply the framework to real contexts",
      "Design for carriers, stickiness, and context",
      "Avoid treating spread as automatic"
    ],
    concepts: ["application", "product adoption", "culture change", "community"],
    body: [
      "Tipping Point thinking is most useful as a diagnostic sequence. If a product, behavior, or idea is not spreading, ask where the spread system is weak. Are the right people carrying it? Is the message easy to remember and repeat? Does the context support adoption? Has the system reached a threshold where adoption becomes socially safer?",
      "In product launches, this means looking beyond features. A strong product needs early users who can credibly carry it, a use case simple enough to explain, an onboarding path that produces value quickly, and a context where the problem is urgent. In community building, it means identifying bridges, trusted curators, and rituals that make participation visible.",
      "In organizations, tipping point thinking can shape culture. Leaders often announce values and wonder why behavior does not change. A better approach examines who models the value, whether the value is sticky, what norms reward the old behavior, and what small contextual changes would make the new behavior easier.",
      "In social movements, the framework reminds us that moral truth alone does not guarantee spread. Ideas need carriers, language, stories, and contexts that allow people to act."
    ],
    support: [
      {
        type: "framework",
        title: "Spread diagnostic",
        stages: [
          { name: "Carrier", description: "Who can move this through trust, access, or persuasion?" },
          { name: "Message", description: "Can people understand, remember, and repeat it?" },
          { name: "Context", description: "What makes adoption easy, visible, or legitimate?" },
          { name: "Threshold", description: "What would make spread self-reinforcing?" }
        ]
      }
    ],
    whyThisMatters:
      "The framework becomes practical when it helps locate weak links in the spread system.",
    practicalApplication:
      "Use the spread diagnostic before spending more money on broad awareness.",
    commonMistakes: [
      "Buying reach before earning trust",
      "Optimizing message while ignoring context",
      "Expecting a good idea to spread without carriers"
    ],
    misconceptions: [
      {
        misconception: "The framework is mainly for marketing.",
        correction:
          "It applies to products, norms, culture, movements, education, and behavior change."
      }
    ],
    lens:
      "Ask which part of the spread system is weakest: carrier, message, context, or threshold.",
    anchors: [
      "Design for spread as a system.",
      "Awareness is only one ingredient."
    ],
    takeaways: [
      "The framework is a diagnostic tool.",
      "Products and ideas need carriers and context.",
      "Culture change requires more than announcements."
    ],
    examples: [
      "A startup earns credibility with expert users before chasing mass awareness.",
      "A company changes meeting norms by changing preparation rituals.",
      "A nonprofit creates a memorable behavior rather than a vague campaign."
    ],
    relatedSections: ["law-of-the-few", "stickiness-factor", "power-of-context"]
  }),
  lesson({
    id: "limits-modern-critiques",
    title: "Limits, Misreadings, and Modern Critiques",
    eyebrow: "Nuance",
    minutes: 33,
    summary:
      "The Tipping Point is influential, but its framework can be overapplied, retrospectively rationalized, and complicated by modern platform dynamics.",
    objectives: [
      "Understand why prediction is hard",
      "Recognize overapplication and retrospective storytelling",
      "Account for modern platforms and social science complexity"
    ],
    concepts: ["limits", "critique", "prediction", "platform dynamics"],
    body: [
      "The Tipping Point is best used with intellectual humility. Its categories are memorable, but memorable frameworks can seduce people into overconfidence. After something spreads, it is easy to tell a clean story about the few, the sticky message, and the context. Beforehand, the same system is much harder to read.",
      "Social science examples are also more complex than any popular framework can fully capture. Multiple causes interact, evidence can be debated, and local context matters. A tipping point explanation may be useful without being complete.",
      "Modern platforms complicate the model. Algorithms can simulate virality, accelerate outrage, reward engagement over trust, and make attention appear more meaningful than adoption. A person can have reach without deep influence, and a message can be widely seen without changing behavior.",
      "The mature reading is not to discard the book. It is to hold the framework as a lens, not a law. Use it to ask better questions, then test assumptions against real behavior."
    ],
    support: [
      {
        type: "warning",
        title: "Use the framework carefully",
        text:
          "A clean tipping point story can be a useful explanation or a seductive oversimplification. The difference is whether it survives evidence, context, and uncertainty."
      }
    ],
    whyThisMatters:
      "Nuance prevents the book from becoming a simplistic viral marketing manual.",
    practicalApplication:
      "When using the framework, state what evidence would disconfirm your spread story.",
    commonMistakes: [
      "Explaining every trend with the same template",
      "Mistaking attention metrics for durable adoption",
      "Turning retrospective stories into confident predictions"
    ],
    misconceptions: [
      {
        misconception: "If you identify the few and make a sticky message, spread is predictable.",
        correction:
          "Those factors can help, but social systems remain uncertain and context-dependent."
      }
    ],
    lens:
      "Ask whether your tipping point explanation predicts behavior or merely makes the past sound orderly.",
    anchors: [
      "The framework is a lens, not a law.",
      "Reach is not the same as adoption."
    ],
    takeaways: [
      "Prediction is hard.",
      "Modern platforms alter spread dynamics.",
      "Intellectual honesty improves application."
    ],
    examples: [
      "A campaign goes viral but changes no behavior.",
      "A niche product grows slowly through trust rather than platform reach.",
      "A trend is explained neatly only after many failed similar attempts are forgotten."
    ],
    relatedSections: ["final-designing-for-spread", "what-is-tipping-point"]
  }),
  lesson({
    id: "final-designing-for-spread",
    title: "Final Synthesis: Designing for Spread Without Believing in Magic",
    eyebrow: "Synthesis",
    minutes: 34,
    summary:
      "The book connects people, message, context, and thresholds into a practical but uncertain lens for understanding how ideas and behaviors spread.",
    objectives: [
      "Integrate the book's major ideas",
      "Use the framework without treating it as a formula",
      "Remember the people-message-context model"
    ],
    concepts: ["synthesis", "spread", "networks", "context"],
    body: [
      "The Tipping Point endures because it gives readers a compact way to think about spread. Ideas do not move only because they are good. Products do not win only because they are well built. Behaviors do not change only because people are informed. Spread depends on people, message, context, and thresholds.",
      "The Law of the Few highlights uneven networks. Connectors move ideas across social boundaries. Mavens make quality and information trustworthy. Salesmen create emotional momentum. The Stickiness Factor reminds us that messages must survive memory and action. The Power of Context shows that environments silently shape behavior.",
      "Months later, remember the framework as a set of questions. Who carries the idea? Why would anyone remember it? What environment makes adoption easier? What threshold would make spread self-reinforcing? What evidence shows adoption rather than mere attention?",
      "The disciplined version of tipping point thinking is neither cynicism nor magical virality. It is designing for spread while respecting uncertainty."
    ],
    support: [
      {
        type: "synthesis",
        title: "The operating model",
        text:
          "Spread accelerates when the right carriers move a sticky message through a context that makes adoption easier and eventually self-reinforcing."
      }
    ],
    whyThisMatters:
      "The synthesis helps readers use the book as a strategic lens without flattening social complexity.",
    practicalApplication:
      "For any idea, product, or behavior, evaluate carriers, stickiness, context, and threshold before assuming more exposure will solve the problem.",
    commonMistakes: [
      "Believing good things spread automatically",
      "Treating the model as a guaranteed formula",
      "Ignoring context and thresholds"
    ],
    misconceptions: [
      {
        misconception: "The book is a manual for making anything viral.",
        correction:
          "It is a lens for understanding spread, with useful categories and real limits."
      }
    ],
    lens:
      "Ask how to design conditions for adoption while staying humble about prediction.",
    anchors: [
      "People, message, context, threshold.",
      "Design for spread without believing in magic."
    ],
    takeaways: [
      "Spread is systemic.",
      "Influence roles differ.",
      "Context and stickiness matter as much as exposure."
    ],
    examples: [
      "A product launch coordinates expert trust, simple onboarding, and visible early wins.",
      "A culture change effort changes rituals and rewards, not just language.",
      "A social idea grows when it becomes easy to understand, repeat, and enact."
    ],
    relatedSections: ["law-of-the-few", "stickiness-factor", "power-of-context"]
  })
];

export const tippingPoint: Book = {
  slug: "tipping-point",
  title: "The Tipping Point",
  author: "Malcolm Gladwell",
  category: "Sociology / Marketing / Social Change",
  difficulty: "Intermediate",
  completionTime: "6h 23m",
  progress: 0,
  coverTone:
    "from-lime-100 via-cyan-100 to-violet-100 dark:from-lime-950/35 dark:via-cyan-950/35 dark:to-violet-950/35",
  description:
    "A nuanced curriculum on social epidemics, networks, Connectors, Mavens, Salesmen, stickiness, context, thresholds, and how ideas spread.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "social epidemics",
    "networks",
    "influence",
    "marketing",
    "diffusion",
    "behavior change",
    "ideas",
    "trends",
    "context",
    "social proof",
    "connectors",
    "mavens",
    "salesmen",
    "stickiness",
    "tipping points"
  ],
  intendedOutcomes: [
    "Understand why some ideas spread while others do not",
    "Understand social epidemics and threshold effects",
    "Understand the Law of the Few",
    "Understand Connectors, Mavens, and Salesmen",
    "Understand the Stickiness Factor",
    "Understand the Power of Context",
    "Think more clearly about marketing, social change, product adoption, and behavior spread",
    "Avoid oversimplifying tipping points as viral magic"
  ],
  promise:
    "After completing this curriculum, you will understand Malcolm Gladwell's framework for how ideas, products, behaviors, and trends spread, including the roles of social networks, influential people, message stickiness, context, small changes, and threshold effects.",
  recommendedAudience: [
    "Product, marketing, and growth leaders",
    "Community builders and organizers",
    "Readers interested in sociology, networks, and social change",
    "Anyone who wants to understand spread without simplistic virality thinking"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around social epidemics, networks, stickiness, context, and tipping points. It does not reproduce long passages or chapter text.",
  sections
};
