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

const navalSections: CurriculumSection[] = [
  lesson({
    id: "wealth-freedom-point-of-game",
    title: "Wealth, Freedom, and the Point of the Game",
    eyebrow: "Foundation",
    minutes: 35,
    summary:
      "Naval's wealth philosophy begins by separating wealth, money, and status so the reader can pursue freedom instead of social comparison.",
    objectives: [
      "Distinguish wealth, money, and status as different games",
      "Understand why assets and ownership create freedom",
      "Recognize how prestige can disguise dependence"
    ],
    concepts: ["wealth", "money", "status", "freedom"],
    body: [
      "The Almanack of Naval Ravikant begins from a deceptively important distinction: wealth is not the same thing as money, and money is not the same thing as status. Wealth is ownership of assets that can produce value without your continuous labor. Money is a social accounting system that lets value move between people. Status is relative position inside a hierarchy. These three often touch each other, but confusing them creates many bad life decisions.",
      "Naval's deeper point is that wealth matters because it can buy freedom. A person who owns productive assets, equity, intellectual property, software, media, or a small business can gradually separate income from hours. That separation changes life. It gives the person more control over time, location, collaborators, and attention. Money is useful because it helps transfer and store value, but the more fundamental objective is independence.",
      "A high income does not automatically create wealth. A consultant billing impressive hourly rates may still be fragile if income stops the moment work stops. A senior executive may earn a large salary while having little control over calendar, speech, ethics, or attention. A professional with expensive status obligations can look rich while remaining trapped. The appearance of success can hide dependence.",
      "By contrast, a quiet owner of assets may have less visible prestige and more real freedom. A software founder with a profitable niche product, an investor with patient holdings, a writer with durable distribution, or an operator with equity in a cash-flowing business may have built something that works even when they are not actively performing. The point is not passivity. The point is ownership.",
      "Status games are especially dangerous because they are zero-sum. If the goal is to be ranked above someone else, another person must be ranked below. This creates a life organized around comparison, signaling, and anxiety. Social media intensifies the trap because it turns attention into a public scoreboard. People begin optimizing for the visible symbols of success rather than the invisible structure of freedom.",
      "Prestige can also distort career choices. Someone may choose a famous employer, impressive title, or fashionable industry because it earns social approval, even if the path reduces autonomy and has little ownership. Another person may choose a less glamorous niche with better learning, equity, leverage, and control. Naval's framework asks whether a choice increases real independence or merely upgrades the story you can tell at dinner.",
      "The mature reading of this lesson is not that money is bad or status should be despised. Money is useful. Reputation matters. But wealth is the game that can become positive-sum, because creating valuable products, services, ideas, and institutions can make many people better off. Status becomes psychologically expensive when it becomes the main scoreboard. Freedom is the test that keeps the game honest."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Wealth is not status",
        not: "A public signal that you are above other people in taste, rank, lifestyle, or attention.",
        but: "Ownership of assets and capabilities that expand your control over time, attention, and choice."
      },
      {
        type: "expandedExample",
        scenario:
          "Two professionals both earn high incomes, but only one is building wealth.",
        defaultApproach:
          "Use income to buy visible upgrades, accept every prestigious opportunity, and measure progress by social recognition.",
        betterApproach:
          "Convert income into ownership, reduce fixed obligations, and choose opportunities that increase autonomy and durable assets.",
        whyItWorks:
          "The second path may look quieter, but it converts present effort into future freedom instead of future dependency."
      },
      {
        type: "comparisonTable",
        title: "Three different games",
        columns: ["Game", "Core question", "Common trap"],
        rows: [
          ["Wealth", "What do I own that creates value?", "Mistaking income for ownership"],
          ["Money", "How is value stored and exchanged?", "Treating the score as the purpose"],
          ["Status", "Where do I rank?", "Letting comparison choose the life"]
        ]
      }
    ],
    whyThisMatters:
      "The first fork in Naval's philosophy is deciding whether you are pursuing freedom, cash flow, or approval. The wrong scoreboard can consume decades.",
    practicalApplication:
      "Evaluate career and financial decisions by whether they increase ownership, autonomy, and optionality, not only whether they raise income or prestige.",
    commonMistakes: [
      "Confusing a high salary with wealth",
      "Choosing prestige while surrendering autonomy",
      "Using visible consumption as proof that the wealth game is working"
    ],
    misconceptions: [
      {
        misconception: "Naval's wealth philosophy is just about getting rich.",
        correction:
          "The center of the philosophy is freedom. Wealth is valuable because it can reduce dependence and increase agency."
      }
    ],
    applicationLens:
      "When a choice looks attractive, ask what game it serves. Does it create ownership, merely move money, or mainly signal rank? A good life can include all three, but freedom requires knowing which game is driving the decision.",
    anchors: [
      "Wealth is ownership that can produce freedom; status is comparison that often produces dependence.",
      "The point of the wealth game is not looking rich. It is becoming harder to control."
    ],
    takeaways: [
      "Wealth, money, and status are distinct.",
      "Ownership matters more than income alone.",
      "Freedom is the deeper objective behind wealth."
    ],
    examples: [
      "A high-income employee may have less freedom than a quiet owner of a small profitable product.",
      "A social media status game can reward signaling while creating no durable assets.",
      "A career choice made for autonomy may beat a prestigious role that deepens dependence."
    ],
    relatedSections: ["specific-knowledge-edge", "leverage-code-capital-media-labor"]
  }),
  lesson({
    id: "specific-knowledge-edge",
    title: "Specific Knowledge: The Edge Only You Can Build",
    eyebrow: "Edge",
    minutes: 37,
    summary:
      "Specific knowledge is the hard-to-copy edge that emerges from curiosity, experience, taste, obsession, and unusual combinations of ability.",
    objectives: [
      "Understand specific knowledge as more than credentialed skill",
      "Recognize why curiosity and lived experience reveal unusual edges",
      "See why specific knowledge becomes powerful when paired with leverage"
    ],
    concepts: ["specific knowledge", "curiosity", "taste", "edge"],
    body: [
      "Specific knowledge is one of Naval's most useful ideas because it explains why generic effort is not enough. The modern economy rewards people who can do something hard to train, hard to outsource, and hard to copy. Specific knowledge is not simply being educated. It is the particular combination of skill, taste, judgment, lived experience, temperament, and obsession that lets a person notice or create value others miss.",
      "This kind of knowledge is rarely handed over as a certificate. School can teach foundations, vocabulary, and discipline, but it cannot fully teach the edge that comes from following curiosity for years. A person may become unusually good at explaining finance through software because they have spent years in markets, writing, and product design. A founder may see a workflow problem because they lived inside the frustration. A creator may develop taste that lets them make work people trust before the market can describe why.",
      "Specific knowledge is often revealed by what you learn faster than others, what you notice without being asked, what you do even when no one rewards it, and what kind of problems irritate you enough to keep investigating. It can look playful from the outside because curiosity often precedes formal opportunity. The person who keeps building small tools, studying obscure markets, interviewing operators, or writing detailed breakdowns may be accumulating an edge before it has a job title.",
      "Generic credentials still matter in many fields, but they are not the same thing as specific knowledge. Credentials say you passed a standard filter. Specific knowledge says you can produce unusual value. A credential can open a door; specific knowledge lets you do something distinctive once inside. The mistake is expecting the door itself to become the advantage.",
      "Specific knowledge compounds when paired with leverage. If your edge stays trapped inside hourly labor, its reach remains limited. But when it is attached to code, media, capital, or a team, it can scale. A person who understands a niche customer deeply can turn that knowledge into software. A person with unusual investing judgment can allocate capital. A person with rare explanatory ability can build media that teaches thousands.",
      "The mature application is not to ask, What is the hottest skill? It is to ask, What do I know, notice, or care about in a way that could become economically useful if sharpened? The answer may be at the intersection of domains: design plus medicine, law plus software, logistics plus storytelling, finance plus education, community taste plus distribution. Naval's point is not that everyone has a magical gift waiting to be discovered. It is that durable advantage is usually built where natural interest makes long practice sustainable.",
      "There is a humility built into this idea. You do not invent specific knowledge by branding yourself. You find it by reality contact. You build, publish, sell, serve, test, and listen. The market tells you which parts of your curiosity create value for others. Your inner signal matters, but it becomes economically powerful only when it meets an external problem."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Specific knowledge is not a certificate",
        not: "A standardized credential that proves you completed the same training as many other people.",
        but: "A hard-to-copy edge shaped by curiosity, practice, taste, lived experience, and unusual combinations."
      },
      {
        type: "expandedExample",
        scenario:
          "A product builder has experience in finance, communication, and software.",
        defaultApproach:
          "Pick the most marketable credential and compete directly against everyone with the same resume signal.",
        betterApproach:
          "Build tools and writing for a financial audience whose problems they understand from multiple angles.",
        whyItWorks:
          "The edge is not any single skill. It is the combination that makes the person unusually good at seeing and explaining the problem."
      },
      {
        type: "misconception",
        misconception: "Specific knowledge is something you find by taking the right course.",
        correction:
          "Courses can help with foundations, but specific knowledge usually emerges through curiosity, repetition, feedback, and personal context.",
        whyItMatters:
          "Treating it like a credential sends people toward crowded paths instead of durable edges."
      }
    ],
    whyThisMatters:
      "Specific knowledge is the source of differentiated value. Without it, leverage can simply amplify commodity work.",
    practicalApplication:
      "Track the subjects, problems, and combinations you return to without external pressure, then test them through projects that create value for real people.",
    commonMistakes: [
      "Looking for specific knowledge as if it were a predefined job title",
      "Copying fashionable skills without personal fit",
      "Mistaking private fascination for market value before testing it"
    ],
    misconceptions: [
      {
        misconception: "Specific knowledge means being naturally gifted.",
        correction:
          "It often begins with inclination, but it becomes valuable through years of practice, feedback, and useful output."
      }
    ],
    applicationLens:
      "Look for the overlap between what you are drawn to, what you improve at quickly, what others ask you to explain, and what the market rewards. That overlap is more useful than chasing a generic list of high-income skills.",
    anchors: [
      "Specific knowledge is the edge only you can build because it grows from your unusual mix of curiosity, experience, and judgment.",
      "The market rewards specific knowledge most when it is attached to leverage."
    ],
    takeaways: [
      "Specific knowledge is hard to train and hard to copy.",
      "It is discovered through curiosity, practice, and reality contact.",
      "It becomes economically powerful when paired with scalable leverage."
    ],
    examples: [
      "A creator's taste becomes an advantage when it consistently earns audience trust.",
      "A founder sees a valuable product because they lived inside the customer's pain.",
      "A professional combines finance, software, and communication into a differentiated product."
    ],
    relatedSections: ["leverage-code-capital-media-labor", "productize-yourself"]
  }),
  lesson({
    id: "leverage-code-capital-media-labor",
    title: "Leverage: Code, Capital, Media, and Labor",
    eyebrow: "Scale",
    minutes: 38,
    summary:
      "Leverage is the force multiplier that allows judgment and specific knowledge to produce results far beyond the limits of personal effort.",
    objectives: [
      "Understand leverage as the multiplier behind modern wealth",
      "Distinguish labor, capital, code, and media as different forms of scale",
      "Recognize why leverage increases the importance of judgment"
    ],
    concepts: ["leverage", "code", "capital", "media", "labor"],
    body: [
      "Naval's wealth engine depends on leverage. Without leverage, even excellent work remains bounded by personal hours. With leverage, one good decision, product, or piece of knowledge can affect thousands or millions of people. Leverage is the difference between selling time and building something that continues to work after the initial effort is spent.",
      "Traditional leverage often required permission. Labor leverage meant persuading people to work with or for you. Capital leverage meant gaining access to money, investors, lenders, or institutional trust. These forms still matter. A manager can coordinate a team to accomplish what one person cannot. An investor can allocate capital into productive assets. But both forms usually require permission, trust, and responsibility.",
      "The internet made new forms of permissionless leverage widely available. Code is leverage because software can serve many users at near-zero marginal cost. Media is leverage because writing, audio, and video can distribute one person's thinking repeatedly across time and geography. A small team can build a tool used by thousands. A writer can publish one essay that changes how an industry talks. A teacher can record an explanation once and reach people for years.",
      "This shift changes the economics of individual output. In an older model, a talented person needed an institution to scale. In the modern model, a person with specific knowledge, distribution, and taste can create leverage directly. This does not make success easy. It makes the ceiling higher for people who can combine valuable judgment with scalable tools.",
      "Leverage also raises the cost of bad direction. A bad decision with little leverage may waste a week. A bad decision with software, capital, media, or a large team behind it can waste years, money, reputation, and trust. This is why Naval places so much emphasis on judgment. The more powerful the multiplier, the more important the quality of what it multiplies.",
      "A software product serving thousands of users is leverage. A newsletter that scales one person's insight is leverage. Capital allocation is leverage because money can work across time and institutions. Labor leverage is still real, but it carries moral and managerial responsibility because other people's time and trust are involved. Each form asks the same question: what valuable judgment is being multiplied?",
      "The mature lesson is not to worship scale. More leverage is not automatically better. A person can scale noise, shallow advice, bad incentives, or fragile systems. Leverage should be attached to specific knowledge, accountability, and long-term thinking. Otherwise it becomes amplification without wisdom."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Forms of leverage",
        columns: ["Leverage", "How it scales", "Primary risk"],
        rows: [
          ["Labor", "Other people's coordinated effort", "Management without ownership or care"],
          ["Capital", "Money allocated into assets", "Confidence without judgment"],
          ["Code", "Software serving many users", "Scaling the wrong problem"],
          ["Media", "Ideas distributed repeatedly", "Amplifying noise or status games"]
        ]
      },
      {
        type: "expandedExample",
        scenario:
          "A domain expert wants to help small businesses improve pricing.",
        defaultApproach:
          "Sell hourly consulting forever, creating income only while personally present.",
        betterApproach:
          "Turn the repeated diagnosis into software, templates, writing, and selective advisory work.",
        whyItWorks:
          "The expert's specific knowledge moves from one-to-one labor into assets and media that can scale."
      },
      {
        type: "warning",
        title: "Leverage magnifies direction",
        text: "Leverage does not rescue poor judgment. It makes the consequences of judgment arrive faster and travel farther."
      }
    ],
    whyThisMatters:
      "The modern economy rewards people who can attach judgment to scalable tools. Understanding leverage helps readers stop relying only on effort.",
    practicalApplication:
      "Identify where your best judgment is still trapped in one-to-one work, then ask whether code, media, capital, or better collaboration can multiply it responsibly.",
    commonMistakes: [
      "Trying to scale before knowing what is valuable",
      "Treating leverage as a substitute for judgment",
      "Chasing audience or headcount as status rather than useful scale"
    ],
    misconceptions: [
      {
        misconception: "Leverage means doing less work.",
        correction:
          "Leverage often requires more responsibility upfront. Its value is that good work can travel farther than your hours."
      }
    ],
    applicationLens:
      "Before seeking leverage, clarify the judgment being multiplied. If the underlying insight is weak, more distribution will not make it wise. If the insight is strong, leverage can turn one person's edge into durable value.",
    anchors: [
      "Leverage multiplies judgment; it does not replace it.",
      "Modern wealth often comes from attaching specific knowledge to scalable tools."
    ],
    takeaways: [
      "Labor and capital are powerful but often permissioned.",
      "Code and media created permissionless leverage for individuals.",
      "The more leverage you use, the more judgment matters."
    ],
    examples: [
      "Software can serve thousands without proportional labor.",
      "A newsletter can scale one person's thinking across an industry.",
      "An investor uses capital allocation as leverage on judgment."
    ],
    relatedSections: ["accountability-ownership", "judgment-highest-leverage-skill"]
  }),
  lesson({
    id: "accountability-ownership",
    title: "Accountability and Ownership",
    eyebrow: "Responsibility",
    minutes: 34,
    summary:
      "Accountability is the willingness to be visibly responsible for judgment, which is why it is tied to trust, upside, and ownership.",
    objectives: [
      "Understand why accountability is required for meaningful upside",
      "Distinguish accountability from reckless risk-taking",
      "See how public ownership compounds reputation"
    ],
    concepts: ["accountability", "ownership", "reputation", "upside"],
    body: [
      "Naval pairs leverage with accountability because society rewards people who are willing to stand behind outcomes. If you want upside, you cannot hide completely behind a committee, a job description, or a vague role. Someone has to attach judgment to a decision. Someone has to say, this is what I believe, this is what I am building, this is the promise I am making.",
      "Accountability is uncomfortable because it exposes you to blame, embarrassment, and visible failure. Hiding from accountability protects comfort. It also limits trust and upside. If no one can tell what you are responsible for, they cannot easily reward you for good judgment. The person who takes ownership of a high-impact project, publishes under their own name, launches a product, or publicly owns a thesis is taking a reputational risk that can compound.",
      "This is why founders, creators, investors, and independent operators attach their names to outcomes. A founder asks customers, employees, and investors to trust a product. A creator publishes judgment in public. An investor explains a thesis and lives with the result. Over time, visible responsibility becomes reputation. People learn whether your judgment is careful, useful, honest, and durable.",
      "Accountability is not performative confidence. It is not swagger, loud prediction, or constant public certainty. Real accountability includes the willingness to be wrong, to update, to repair, and to own consequences. Reckless risk-taking seeks drama. Accountability seeks responsibility for a decision that has been thought through.",
      "Ownership has two meanings here. There is economic ownership, such as equity, assets, and profit participation. There is also psychological ownership, the stance of treating outcomes as yours to improve rather than someone else's problem. Naval's philosophy joins them: people who develop specific knowledge, apply leverage, and accept accountability should seek ownership because ownership aligns responsibility with upside.",
      "An employee can practice this before becoming an entrepreneur. Taking ownership of a critical project, making decisions explicit, communicating tradeoffs, and standing behind the work all build accountability. But if the person remains permanently separated from upside, the arrangement may become limiting. The long-term path is to move toward roles where judgment, responsibility, and rewards are aligned.",
      "The mature view is to seek accountability where you have real judgment and can survive the downside. You do not need to attach your name to every opinion or take risks you do not understand. You want visible responsibility for work where you can create value, learn from outcomes, and build trust over time."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Accountability is not recklessness",
        not: "Making loud bets, seeking drama, or confusing exposure with courage.",
        but: "Being visibly responsible for judgment, promises, tradeoffs, and outcomes you are prepared to own."
      },
      {
        type: "expandedExample",
        scenario:
          "An employee sees a neglected product problem that could materially improve retention.",
        defaultApproach:
          "Mention the issue casually, wait for permission, and avoid being associated with the result if it fails.",
        betterApproach:
          "Write the case, own the tradeoffs, volunteer to lead the fix, and communicate the result honestly.",
        whyItWorks:
          "The person becomes associated with judgment and ownership, not just task completion."
      },
      {
        type: "mentalModel",
        name: "Name on the door",
        explanation:
          "When your name is attached to the work, your incentives change. You think more carefully about promises, quality, and downstream trust.",
        useWhen:
          "Deciding whether to publish, lead, launch, invest, or take responsibility for an important decision."
      }
    ],
    whyThisMatters:
      "Leverage without accountability creates fragility. Accountability turns judgment into trust and trust into long-term opportunity.",
    practicalApplication:
      "Choose one domain where you can take more visible ownership of outcomes, then pair that ownership with careful decision-making and honest feedback.",
    commonMistakes: [
      "Avoiding accountability to avoid discomfort",
      "Performing confidence instead of owning reality",
      "Taking risks without the knowledge or margin to survive them"
    ],
    misconceptions: [
      {
        misconception: "Accountability means accepting blame for everything.",
        correction:
          "Accountability means being responsible for your judgment, commitments, and role in the outcome, while still understanding context."
      }
    ],
    applicationLens:
      "Look for places where your judgment is real but your ownership is hidden. The path to upside often begins by making responsibility visible in a measured, honest way.",
    anchors: [
      "Upside follows visible responsibility for useful judgment.",
      "Accountability is ownership of outcomes, not performance of confidence."
    ],
    takeaways: [
      "Accountability builds trust and reputation.",
      "Ownership should align responsibility with upside.",
      "Good accountability is careful, not reckless."
    ],
    examples: [
      "A founder puts their reputation behind a product.",
      "A creator publishes under their own name.",
      "An investor owns a thesis publicly and updates when facts change."
    ],
    relatedSections: ["judgment-highest-leverage-skill", "long-term-games"]
  }),
  lesson({
    id: "judgment-highest-leverage-skill",
    title: "Judgment: The Highest Leverage Skill",
    eyebrow: "Decision Quality",
    minutes: 39,
    summary:
      "As leverage increases, the quality of decisions matters more than raw effort because direction can dominate output.",
    objectives: [
      "Understand why judgment becomes more valuable with leverage",
      "Recognize how incentives, ego, fear, and imitation distort decisions",
      "Learn how reflection, reading, feedback, and reality contact improve judgment"
    ],
    concepts: ["judgment", "decision quality", "incentives", "independence"],
    body: [
      "Judgment is the highest leverage skill because it decides where effort, capital, attention, and reputation go. At low leverage, working harder can sometimes compensate for mediocre choices. At high leverage, a small error in direction can overwhelm enormous effort. Choosing the wrong market, partner, incentive structure, or life game can make productivity irrelevant.",
      "This is why Naval treats clear thinking as economically valuable. The person who chooses the right problem may need less force than the person grinding inside the wrong one. A founder who enters a growing market with a real customer pain has a tailwind. A founder who chooses a shrinking market may work heroically and still lose. Judgment selects the terrain before effort begins marching.",
      "Good judgment includes knowing what not to do. Saying no to a prestigious but misaligned opportunity can be more valuable than saying yes and performing well. Avoiding a bad partnership can preserve years of energy and reputation. Refusing a deal with hidden incentive problems may look conservative in the moment and brilliant in hindsight. Omission is often invisible, but it is central to judgment.",
      "Judgment is corrupted by incentives, ego, fear, and imitation. Incentives make convenient conclusions feel rational. Ego makes a person defend a public position after evidence changes. Fear makes short-term safety look like wisdom. Imitation makes a crowded path feel validated even when the underlying fit is poor. The mind is very good at dressing emotional needs in intellectual language.",
      "Independent thinking does not mean reflexive contrarianism. It means being willing to reason from reality rather than social pressure. Sometimes the crowd is right. Sometimes conventional wisdom contains hard-earned truth. The independent thinker is not addicted to disagreement; they are less dependent on approval as evidence.",
      "Judgment improves through a combination of reading, reflection, feedback, and contact with reality. Reading broadens the library of patterns. Reflection turns experience into learning. Feedback exposes errors the ego would prefer to miss. Reality contact prevents philosophy from floating away from consequences. You improve judgment by making decisions explicit enough to review later.",
      "A capital allocation decision makes this concrete. The question is not merely which asset has the most exciting story. It is what assumptions are being made, what incentives are shaping the pitch, what downside can be survived, what base rates suggest, and what would change your mind. Judgment is not cynicism. It is disciplined contact with tradeoffs."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Output is not direction",
        not: "Increasing activity, speed, and visible effort before asking whether the target is right.",
        but: "Improving the quality of decisions that determine where effort and leverage are applied."
      },
      {
        type: "expandedExample",
        scenario:
          "A talented operator is offered a prestigious role in a company with poor incentives.",
        defaultApproach:
          "Accept because the title impresses peers and the short-term compensation is high.",
        betterApproach:
          "Evaluate the market, ownership structure, decision rights, culture, and opportunity cost before saying yes.",
        whyItWorks:
          "The person judges the whole game rather than mistaking prestige for a good decision."
      },
      {
        type: "application",
        context: "Improving decision quality",
        steps: [
          "Write the decision, assumptions, incentives, and expected outcome before acting.",
          "Identify what evidence would change your mind.",
          "Review the decision later by process quality, not only outcome."
        ],
        result:
          "Judgment becomes a trainable loop instead of a vague self-image."
      }
    ],
    whyThisMatters:
      "At high leverage, decision quality determines whether effort compounds or gets multiplied in the wrong direction.",
    practicalApplication:
      "Before major commitments, slow down enough to inspect incentives, opportunity cost, downside, partner quality, and the assumptions you most want to be true.",
    commonMistakes: [
      "Trying to increase output before improving direction",
      "Confusing confidence with judgment",
      "Letting prestige, fear, or imitation choose the path"
    ],
    misconceptions: [
      {
        misconception: "Good judgment means always being contrarian.",
        correction:
          "Good judgment means reasoning clearly from reality. Sometimes that agrees with consensus, and sometimes it does not."
      }
    ],
    applicationLens:
      "Ask where a decision will be multiplied. The more capital, reputation, time, or people a decision affects, the more carefully judgment must be protected from ego and social pressure.",
    anchors: [
      "Judgment chooses the direction that leverage multiplies.",
      "At high leverage, a small directional error can overpower enormous effort."
    ],
    takeaways: [
      "Judgment is more valuable as leverage rises.",
      "Knowing what not to do is a major part of wisdom.",
      "Decision quality improves through explicit reasoning and review."
    ],
    examples: [
      "Choosing the right market can beat working harder in the wrong one.",
      "Avoiding a bad partner can preserve years of compounding.",
      "Saying no to prestige can protect autonomy and focus."
    ],
    relatedSections: ["long-term-games", "reading-mental-models-self-education"]
  }),
  lesson({
    id: "long-term-games",
    title: "Long-Term Games With Long-Term People",
    eyebrow: "Trust",
    minutes: 35,
    summary:
      "Long-term games create compounding rewards because trust, reputation, and repeated value can accumulate across time.",
    objectives: [
      "Understand why time horizon changes incentives",
      "Recognize how trust compounds in repeated relationships",
      "Identify the hidden costs of short-term extraction"
    ],
    concepts: ["long-term games", "trust", "reputation", "alignment"],
    body: [
      "Naval's advice to play long-term games with long-term people is a compact theory of trust. A long-term game is one where repeated interaction matters more than immediate extraction. The goal is not to win one transaction by taking as much as possible. The goal is to create enough value, reliability, and alignment that opportunities keep returning.",
      "Trust compounds because repeated behavior reduces uncertainty. A partner who does what they say, shares upside fairly, tells the truth early, and protects the relationship becomes more valuable over time. You spend less energy defending yourself and more energy building. The relationship itself becomes an asset because both parties can move faster with less friction.",
      "Reputation follows the same pattern. It is built slowly and lost quickly. A person who consistently creates value, gives clear advice, avoids hidden agendas, and behaves well when no one is watching becomes easier to trust. This does not happen through slogans. It happens through hundreds of decisions that teach others what to expect.",
      "Short-term games often look profitable because the costs are delayed. A salesperson can oversell once. A founder can hide a problem for a quarter. A creator can use outrage to gain attention. An investor can take a fee while ignoring risk. But the hidden costs arrive as distrust, churn, damaged reputation, and worse future partners. Extraction taxes the future.",
      "Long-term games apply across business, investing, learning, and relationships. A business that treats customers well accumulates goodwill. An investor who avoids chasing trends gives compounding time to work. A learner who studies consistently builds understanding that becomes easier to combine. A friend or partner who practices repair and honesty creates psychological safety over years.",
      "Long-term people are not merely patient. They are aligned. They care about reputation, repeated value, and truth more than short-term advantage. They do not need every interaction to maximize their side. They understand that trust is a more powerful asset than winning a small negotiation. You can recognize them by how they behave when incentives tempt them to defect.",
      "The mature application is selective. You cannot play long-term games with everyone. Some people are operating on short time horizons, misaligned incentives, or status competition. The task is to become a long-term person yourself and then choose collaborators, customers, investors, friends, and partners who can compound trust with you."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Extraction versus compounding",
        not: "Optimizing each interaction to take the most immediate value from the other side.",
        but: "Creating repeated value so trust, reputation, and opportunity can grow over time."
      },
      {
        type: "expandedExample",
        scenario:
          "Two founders are negotiating with an early customer who could become a long-term reference.",
        defaultApproach:
          "Maximize the initial contract even if the product cannot yet deliver every promise.",
        betterApproach:
          "Set accurate expectations, price fairly, deliver deeply, and preserve the relationship for future trust.",
        whyItWorks:
          "The founders trade a little short-term extraction for a compounding asset: a customer who trusts them."
      },
      {
        type: "framework",
        title: "Signals of long-term people",
        stages: [
          {
            name: "Truth",
            description: "They share bad news early and do not rely on hidden information."
          },
          {
            name: "Fairness",
            description: "They care about repeatability more than winning every term."
          },
          {
            name: "Repair",
            description: "They fix mistakes instead of protecting ego."
          },
          {
            name: "Patience",
            description: "They let value compound instead of forcing extraction."
          }
        ]
      }
    ],
    whyThisMatters:
      "The highest-quality opportunities often come through trust, and trust only compounds when people play games that can repeat.",
    practicalApplication:
      "Audit your major relationships and projects by time horizon. Invest more deeply where incentives, values, and behavior support repeated trust.",
    commonMistakes: [
      "Playing long-term with people who repeatedly defect",
      "Sacrificing reputation for short-term advantage",
      "Mistaking politeness for aligned incentives"
    ],
    misconceptions: [
      {
        misconception: "Long-term thinking means being naive or never negotiating hard.",
        correction:
          "Long-term thinking can be rigorous. It simply values trust and repeatability as part of the economics."
      }
    ],
    applicationLens:
      "Before entering a relationship, ask whether repeated interaction would make both sides better. If the answer is no, structure the relationship carefully or decline the game.",
    anchors: [
      "Short-term games optimize extraction; long-term games optimize trust and repeated value.",
      "Reputation is built slowly, lost quickly, and compounded through consistent behavior."
    ],
    takeaways: [
      "Time horizon changes incentives.",
      "Trust reduces friction and creates opportunity.",
      "Choose collaborators who can compound with you."
    ],
    examples: [
      "A business partner with aligned incentives becomes more valuable over years.",
      "Customer trust compounds when promises are accurate and delivery is consistent.",
      "Patient investing avoids the churn of trend-chasing."
    ],
    relatedSections: ["compounding-reputation-knowledge-money-trust", "accountability-ownership"]
  }),
  lesson({
    id: "compounding-reputation-knowledge-money-trust",
    title: "Compounding: Reputation, Knowledge, Money, and Trust",
    eyebrow: "Accumulation",
    minutes: 36,
    summary:
      "Compounding is not only financial; it also governs knowledge, trust, relationships, reputation, and personal capability.",
    objectives: [
      "Understand compounding beyond investment returns",
      "See why consistency and quality matter over long horizons",
      "Recognize why low-quality repetition does not magically compound"
    ],
    concepts: ["compounding", "reputation", "knowledge", "trust"],
    body: [
      "Compounding is one of the deep structures underneath Naval's philosophy. Money compounds when returns are reinvested. Knowledge compounds when ideas connect and make future learning easier. Reputation compounds when repeated trust makes future opportunities cheaper to access. Relationships compound when shared history lowers coordination costs. Trust compounds when behavior becomes predictable in valuable ways.",
      "The reason compounding feels unintuitive is that early returns often look small. Reading seriously for a month may not transform judgment. Publishing thoughtful work for a few weeks may not create distribution. Investing modestly for a year may not look dramatic. Building a reputation for reliability may feel invisible at first. Compounding is quiet before it becomes obvious.",
      "Knowledge compounding is especially important. Each useful idea becomes a hook for future ideas. A person who studies business, psychology, philosophy, technology, and investing does not merely collect trivia. Over time, patterns become easier to recognize. New information has more places to attach. Judgment improves because the mind has more models available.",
      "Reputation compounding works through repeated evidence. If you consistently do excellent work, tell the truth, meet commitments, and improve after mistakes, people begin to trust you before the next transaction begins. That trust changes the economics of opportunity. Introductions get easier. Deals move faster. Strong collaborators become more willing to work with you.",
      "Money compounding still matters, but Naval's broader point is that financial compounding depends on survival and patience. Interruption is expensive. Panic selling, excessive debt, impulsive pivots, and status spending can break the process. Many people do not fail because compounding is weak. They fail because they interrupt it before time can do its work.",
      "There is an important caveat: compounding rewards real return, not mere repetition. Repeating low-quality behavior does not create magic. Publishing shallow content every day may compound distrust. Practicing a skill badly may reinforce bad habits. Staying in a poor relationship may compound resentment. The activity needs a positive underlying return.",
      "The mature application is to choose compounding arenas carefully. Ask what behavior, asset, relationship, or body of knowledge would become meaningfully stronger if repeated for five or ten years. Then protect the conditions that allow it to continue. Compounding is less dramatic than intensity, but it is often more powerful."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "What can compound",
        columns: ["Domain", "What compounds", "What interrupts it"],
        rows: [
          ["Knowledge", "Models, context, pattern recognition", "Shallow consumption without integration"],
          ["Reputation", "Trust, reliability, opportunity", "Broken promises and hidden incentives"],
          ["Money", "Returns, ownership, optionality", "Debt, panic, lifestyle inflation"],
          ["Relationships", "Shared history and coordination", "Extraction, neglect, poor repair"]
        ]
      },
      {
        type: "expandedExample",
        scenario:
          "A writer publishes careful essays about a niche industry for several years.",
        defaultApproach:
          "Quit after a few months because audience growth is slow and status feedback is weak.",
        betterApproach:
          "Keep improving the quality, build relationships with serious readers, and let trust accumulate.",
        whyItWorks:
          "The writing compounds as knowledge, reputation, distribution, and opportunity reinforce each other."
      },
      {
        type: "warning",
        title: "Not all repetition compounds positively",
        text: "Compounding needs a real return. Low-quality work, bad incentives, and fragile behavior can compound in the wrong direction."
      }
    ],
    whyThisMatters:
      "Naval's long-term philosophy depends on choosing activities where time helps rather than activities that require constant reinvention.",
    practicalApplication:
      "Choose a few compounding arenas, such as learning, ownership, health, reputation, or relationships, and protect consistency and quality inside them.",
    commonMistakes: [
      "Expecting visible results before enough time has passed",
      "Repeating low-quality behavior and calling it consistency",
      "Interrupting compounding for status, novelty, or panic"
    ],
    misconceptions: [
      {
        misconception: "Compounding is only about money.",
        correction:
          "Money is one form. Knowledge, trust, reputation, and relationships can also compound when quality and time are present."
      }
    ],
    applicationLens:
      "When choosing where to invest effort, ask whether time will make the activity easier, richer, and more valuable. If time does not help, you may be renting effort instead of compounding it.",
    anchors: [
      "Compounding is quiet before it becomes powerful.",
      "Only activities with real underlying return deserve long patience."
    ],
    takeaways: [
      "Compounding applies to more than finance.",
      "Consistency must be paired with quality.",
      "Interruption is one of the great enemies of compounding."
    ],
    examples: [
      "Reading and writing for years improves pattern recognition.",
      "A trusted professional reputation lowers future friction.",
      "Patient investing lets ownership and time work together."
    ],
    relatedSections: ["long-term-games", "reading-mental-models-self-education"]
  }),
  lesson({
    id: "productize-yourself",
    title: "Productize Yourself Without Losing Yourself",
    eyebrow: "Application",
    minutes: 37,
    summary:
      "Productizing yourself means packaging genuine specific knowledge so it can scale, not becoming a shallow personal brand.",
    objectives: [
      "Understand what productizing yourself means in practical terms",
      "Learn how uniqueness and usefulness combine into scalable work",
      "Avoid turning authenticity into a performative brand machine"
    ],
    concepts: ["productize yourself", "authenticity", "distribution", "scale"],
    body: [
      "Productizing yourself is one of Naval's most quoted ideas and one of the easiest to flatten. It does not mean inventing a persona, posting constantly, or turning your personality into a marketing funnel. At its best, it means identifying your specific knowledge and packaging it in a form that can scale beyond one-to-one labor.",
      "The phrase has two halves. Productize means create something repeatable, distributable, useful, and scalable. Yourself means the product should grow from your actual interests, judgment, taste, and lived experience. If you only productize, you become a commodity. If you only express yourself, you may create art or identity without economic leverage. The power is in combining genuine edge with a form the world can use.",
      "A consultant might turn repeated expertise into software, a diagnostic framework, or a specialized advisory product. A writer might turn judgment into essays, books, research, or education. An operator might turn a proven playbook into a tool or service. An investor might build around a distinct worldview and decision process. In each case, the person is not merely selling hours. They are converting judgment into an asset.",
      "Authenticity matters commercially when it is paired with usefulness. People can copy tactics, but they cannot easily copy a genuine combination of taste, experience, voice, and judgment. A creator who understands a niche deeply and speaks with earned clarity can build trust that generic content cannot. A founder who has lived the customer's problem can design with unusual precision.",
      "The danger is becoming a caricature of yourself. Personal brands can create incentives to repeat the most marketable version of your identity until growth replaces truth. You may start simplifying your thinking to please an audience, exaggerating certainty, or turning every private interest into content. Productizing yourself should create freedom, not another performance cage.",
      "The mature version is disciplined. Keep the work anchored in real problems, real skill, and real taste. Use code, media, capital, and distribution to scale what is useful. Stay close enough to reality that the product improves. Stay independent enough that the audience does not become your boss. The goal is not to be known for being known. The goal is to make your specific knowledge useful at scale.",
      "This idea also protects against generic career advice. You do not need to become a universal entrepreneur. You need to discover what only you can do unusually well, then choose a vehicle that multiplies it. The vehicle may be a company, a fund, a book, a product, a community, a research practice, or a high-agency role with ownership."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Productizing yourself is not becoming a brand costume",
        not: "Performing a simplified identity for attention and calling the audience growth a business model.",
        but: "Packaging genuine specific knowledge into products, media, tools, or ownership that can scale."
      },
      {
        type: "expandedExample",
        scenario:
          "An operations leader repeatedly fixes onboarding problems inside technical companies.",
        defaultApproach:
          "Continue selling custom consulting hours with no reusable asset or distribution.",
        betterApproach:
          "Turn the pattern into a software workflow, implementation guide, and selective advisory practice.",
        whyItWorks:
          "The leader's specific knowledge becomes a productized system rather than remaining trapped in meetings."
      },
      {
        type: "framework",
        title: "The productize-yourself stack",
        stages: [
          {
            name: "Edge",
            description: "Identify specific knowledge rooted in genuine ability and curiosity."
          },
          {
            name: "Usefulness",
            description: "Attach the edge to a real problem people value."
          },
          {
            name: "Form",
            description: "Choose software, media, service, capital, or a hybrid vehicle."
          },
          {
            name: "Distribution",
            description: "Build trust so the work can reach the people it helps."
          }
        ]
      }
    ],
    whyThisMatters:
      "This lesson converts Naval's abstract wealth philosophy into a practical path for building around differentiated ability.",
    practicalApplication:
      "Identify a repeated problem your specific knowledge solves, then consider what form could deliver that value repeatedly without requiring your constant presence.",
    commonMistakes: [
      "Confusing audience growth with useful leverage",
      "Imitating another person's brand instead of building from specific knowledge",
      "Letting the marketable persona replace the real person"
    ],
    misconceptions: [
      {
        misconception: "Productizing yourself means turning every part of your life into content.",
        correction:
          "It means scaling the useful part of your specific knowledge while preserving independence and integrity."
      }
    ],
    applicationLens:
      "Ask what you know that is both real and useful. Then ask which vehicle could carry that knowledge farther without distorting it into performance.",
    anchors: [
      "Productizing yourself means scaling genuine specific knowledge, not pretending to be a brand.",
      "The best productized work combines uniqueness with usefulness."
    ],
    takeaways: [
      "Specific knowledge needs a scalable form.",
      "Authenticity matters when it is paired with value.",
      "Avoid becoming trapped by the persona that gets attention."
    ],
    examples: [
      "A consultant turns repeated expertise into software.",
      "A writer turns judgment into trusted media.",
      "An operator turns a playbook into a product or ownership vehicle."
    ],
    relatedSections: ["specific-knowledge-edge", "independence-solitude-clear-thinking"]
  }),
  lesson({
    id: "desire-happiness-inner-game",
    title: "Desire, Happiness, and the Inner Game",
    eyebrow: "Happiness",
    minutes: 39,
    summary:
      "Naval's happiness philosophy treats peace as a skill shaped by desire, acceptance, awareness, and the ability to want fewer things.",
    objectives: [
      "Understand why achievement does not automatically create happiness",
      "Recognize how unmanaged desire creates internal friction",
      "See happiness as a skill without rejecting ambition"
    ],
    concepts: ["desire", "happiness", "acceptance", "peace"],
    body: [
      "The Almanack is not only a book about wealth. It is equally a book about what wealth cannot solve. Naval's happiness philosophy begins with the observation that achievement does not automatically end restlessness. A person can earn the money, win the status, sell the company, or reach the goal and still find the mind moving the target immediately afterward.",
      "Desire is central because desire creates a felt gap between reality and the future you believe must happen. Some desire is useful. It motivates building, learning, repair, and ambition. But unmanaged desire can turn the mind into a machine for dissatisfaction. Every achievement becomes temporary relief before the next demand appears. The person becomes successful without becoming free.",
      "This is why Naval often points toward wanting fewer things. The idea is not laziness or withdrawal from life. It is the recognition that each desire has a cost. A desire consumes attention, creates vulnerability to comparison, and makes peace conditional. The more desires you carry unconsciously, the more the world can disturb you. Choosing desires carefully is a form of inner economics.",
      "The achievement trap is easy to see in career and money. Someone may start chasing wealth for freedom, then become less free because every success creates a larger identity to defend. They need the next raise, fund, audience milestone, house, or public win. What began as independence becomes another status game. The external scoreboard moves inside the nervous system.",
      "Happiness as a skill means training attention, interpretation, and acceptance. It means noticing when the mind is manufacturing problems out of comparison or imagined futures. It means learning to sit with ordinary moments without demanding they become stepping stones. It means simplifying inputs, relationships, obligations, and desires until peace has room to appear.",
      "Acceptance is often misunderstood. It does not mean approving everything or refusing to act. It means seeing reality clearly before adding resistance. If a business failed, a relationship changed, or a plan did not work, acceptance lets you stop fighting the fact and begin responding. Non-acceptance wastes energy arguing with what has already happened.",
      "The mature version of this lesson holds ambition and peace together. Naval is not arguing against building, wealth, or excellence. He is warning against letting unconscious desire run the entire operating system. Ambition can be cleaner when it is chosen rather than compulsive. Wealth can be healthier when it serves freedom rather than endless craving."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Desire is not the same as ambition",
        not: "A compulsive feeling that peace is impossible unless a particular future arrives.",
        but: "A chosen direction for effort that can coexist with present clarity and enoughness."
      },
      {
        type: "expandedExample",
        scenario:
          "A founder reaches a revenue milestone and immediately feels behind again.",
        defaultApproach:
          "Assume the discomfort means the next milestone must be reached faster.",
        betterApproach:
          "Notice the moving target, separate useful ambition from comparison, and decide what success is meant to buy.",
        whyItWorks:
          "The founder prevents achievement from becoming an endless treadmill disguised as progress."
      },
      {
        type: "misconception",
        misconception: "Wanting fewer things means having no ambition.",
        correction:
          "It means choosing desires deliberately so ambition serves freedom rather than controlling attention.",
        whyItMatters:
          "Without this distinction, readers can mistake inner freedom for passivity and miss the book's more mature balance."
      }
    ],
    whyThisMatters:
      "Without inner clarity, the wealth game can become another form of captivity. Naval's philosophy requires freedom inside as well as outside.",
    practicalApplication:
      "Examine major desires by their full cost: attention, anxiety, comparison, obligations, and identity. Keep the ones worth paying for consciously.",
    commonMistakes: [
      "Assuming success will automatically quiet the mind",
      "Calling every craving ambition",
      "Using spiritual language to avoid practical responsibility"
    ],
    misconceptions: [
      {
        misconception: "Naval's happiness philosophy rejects achievement.",
        correction:
          "It rejects unconscious desire as the master. Achievement can remain, but it should serve a freer life."
      }
    ],
    applicationLens:
      "When a goal feels urgent, ask whether it is chosen or compulsive. The difference is often visible in whether the goal increases agency or makes peace impossible until the world obeys.",
    anchors: [
      "Happiness requires managing desire, not merely satisfying it.",
      "The wealth game is incomplete if it buys external freedom while desire keeps the mind captive."
    ],
    takeaways: [
      "Achievement does not automatically create peace.",
      "Every desire has an attention cost.",
      "Happiness can be trained through awareness, acceptance, and simplicity."
    ],
    examples: [
      "A person achieves a goal and immediately moves the target.",
      "Upward comparison turns success into dissatisfaction.",
      "Reducing desires can lower internal noise without killing ambition."
    ],
    relatedSections: ["independence-solitude-clear-thinking", "final-synthesis-operating-system"]
  }),
  lesson({
    id: "independence-solitude-clear-thinking",
    title: "Independence, Solitude, and Clear Thinking",
    eyebrow: "Clarity",
    minutes: 35,
    summary:
      "Independent thinking requires control over attention, distance from crowds, and enough solitude for the mind to hear itself.",
    objectives: [
      "Understand why constant social input weakens independent judgment",
      "Recognize solitude as a tool for clarity rather than isolation",
      "Apply attention control to work, investing, relationships, and life design"
    ],
    concepts: ["independence", "solitude", "attention", "clear thinking"],
    body: [
      "Naval's philosophy of independence is not only financial. It is also intellectual and attentional. A person can have money and still be controlled by crowds, feeds, trends, envy, outrage, and social approval. Clear thinking requires enough distance from other people's incentives to notice what you actually believe.",
      "Constant social input weakens self-trust because it fills the mind with borrowed priorities. The algorithm wants reaction. The industry wants conformity. The peer group wants status validation. The market wants you to confuse motion with signal. If every quiet moment is filled with input, your own judgment never gets enough space to form.",
      "Solitude helps because it removes immediate social pressure. In solitude, you can ask whether the career path fits, whether the investment thesis is yours, whether the relationship is healthy, whether the desire is real, and whether the opportunity is aligned. Boredom is often the doorway. When stimulation drops, unresolved thoughts finally surface.",
      "This does not mean isolation. Isolation cuts off reality, feedback, and love. Solitude is a deliberate interval for clear seeing. You still need customers, collaborators, friends, partners, markets, and teachers. But you also need private mental space where those voices are not constantly voting inside your head.",
      "In work, independence may mean choosing a path because it fits your specific knowledge rather than because it impresses peers. In investing, it may mean stepping away from noisy markets long enough to remember your time horizon. In relationships, it may mean distinguishing genuine commitment from fear of judgment. In life design, it may mean protecting attention as seriously as money.",
      "Control over attention is part of freedom. If your attention can be captured at will, your mind is not fully yours. Naval's wealth and happiness philosophies meet here: external independence matters, but so does the ability to decide what you think about, what you consume, and what deserves emotional energy.",
      "The mature application is not to reject information. It is to create a healthier information diet and regular solitude. Read deeply instead of grazing constantly. Think before reacting. Let decisions cool. Spend time without performance. The goal is not to become detached from life. It is to return to life with cleaner judgment."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Solitude is not isolation",
        not: "Withdrawing from reality, feedback, obligation, or relationship.",
        but: "Creating enough quiet to separate your judgment from crowd pressure and constant stimulation."
      },
      {
        type: "expandedExample",
        scenario:
          "A professional is deciding whether to leave a prestigious but draining career path.",
        defaultApproach:
          "Ask everyone nearby, compare status outcomes, and keep refreshing examples of other people's lives.",
        betterApproach:
          "Create quiet space, write the real tradeoffs, test smaller experiments, and seek advice only from people with aligned values.",
        whyItWorks:
          "The decision is informed by reality without being completely outsourced to social comparison."
      },
      {
        type: "warning",
        title: "Information is not clarity",
        text: "More input can make judgment worse when it increases stimulation, comparison, and borrowed urgency without improving understanding."
      }
    ],
    whyThisMatters:
      "Naval's ideas depend on independent judgment, and independent judgment is difficult when attention is constantly colonized by crowds.",
    practicalApplication:
      "Build regular input-free time around major decisions, and reduce information sources that create urgency without improving judgment.",
    commonMistakes: [
      "Confusing being informed with being constantly stimulated",
      "Mistaking solitude for avoidance",
      "Outsourcing life direction to peers, markets, or algorithms"
    ],
    misconceptions: [
      {
        misconception: "Independent thinking means ignoring other people.",
        correction:
          "It means using feedback and information without letting social pressure replace your own reasoning."
      }
    ],
    applicationLens:
      "Before a major decision, notice who or what has been shaping your attention. If the input has mostly produced comparison or urgency, step back before choosing.",
    anchors: [
      "Clear thinking often requires less input, not more.",
      "Freedom includes control over attention."
    ],
    takeaways: [
      "Solitude protects judgment from crowd pressure.",
      "Attention is a core form of independence.",
      "Information helps only when it improves reality contact."
    ],
    examples: [
      "A career decision becomes clearer away from status comparison.",
      "An investor steps away from noisy markets to protect time horizon.",
      "Reducing algorithmic input makes room for priorities to surface."
    ],
    relatedSections: ["judgment-highest-leverage-skill", "reading-mental-models-self-education"]
  }),
  lesson({
    id: "reading-mental-models-self-education",
    title: "Reading, Mental Models, and Self-Education",
    eyebrow: "Learning",
    minutes: 36,
    summary:
      "Reading and self-education are central to Naval's philosophy because they upgrade judgment, broaden models, and compound understanding.",
    objectives: [
      "Understand reading as a tool for judgment rather than status",
      "Recognize why curiosity beats forced completion for deep learning",
      "See how mental models improve decisions across domains"
    ],
    concepts: ["reading", "mental models", "self-education", "curiosity"],
    body: [
      "Reading is central to Naval's philosophy because it is one of the highest-return ways to upgrade judgment. A good book lets you absorb years of another mind's observation, failure, synthesis, and pattern recognition. Reading is not valuable because finishing books creates status. It is valuable because understanding reality better improves decisions.",
      "This changes how reading should be approached. The goal is not to complete the most pages, display the most titles, or force yourself through books that have become dead. The goal is to follow curiosity deeply enough that learning compounds. Sometimes that means rereading. Sometimes it means abandoning a book after extracting what you need. Sometimes it means reading slowly because one paragraph changes a decision.",
      "Mental models are useful because reality is too complex for one lens. Economics helps you see incentives. Psychology helps you see bias and desire. Biology helps you see adaptation and energy. Physics helps you respect constraints. Philosophy helps you examine values. Business helps you understand markets and coordination. The more models you have, the less likely you are to mistake one perspective for the whole world.",
      "Broad learning improves pattern recognition. A founder who reads history may understand institutional inertia. An investor who studies psychology may better recognize mania and fear. A manager who reads biology may think differently about systems and adaptation. A creator who reads philosophy may produce work with deeper questions. Cross-domain learning creates unusual combinations, which feed specific knowledge.",
      "Curiosity matters because self-education is a long game. Forced discipline can begin a habit, but curiosity sustains decades of learning. Naval's approach favors reading what genuinely pulls you, because attraction increases attention. This does not mean never doing hard study. It means respecting the signal of interest as a guide to where your mind may build depth.",
      "Reading also needs integration. Consuming ideas without testing them can become intellectual entertainment. The value appears when models change decisions: choosing a better market, noticing an incentive problem, avoiding a status trap, designing a calmer life, or understanding a relationship more clearly. Knowledge that never touches behavior may still be beautiful, but it has not become judgment.",
      "The mature lesson is to read for reality contact. Read old books and new books, technical books and biographies, science and philosophy, business and literature. Let interest lead, but let usefulness test. The aim is not to become a person who has read many books. The aim is to become a person whose mind is harder to fool."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Reading for judgment is not reading for status",
        not: "Finishing books to perform intelligence or collect impressive titles.",
        but: "Using books to improve models of reality, decisions, taste, and self-understanding."
      },
      {
        type: "expandedExample",
        scenario:
          "A founder is deciding whether a market is worth entering.",
        defaultApproach:
          "Read only startup tactics and imitate current trends.",
        betterApproach:
          "Combine customer interviews with reading about incentives, history, market structure, psychology, and biographies of similar builders.",
        whyItWorks:
          "The founder develops a richer model of the terrain rather than relying on a narrow playbook."
      },
      {
        type: "framework",
        title: "A Naval-style learning loop",
        stages: [
          {
            name: "Curiosity",
            description: "Follow genuine interest because it sustains attention."
          },
          {
            name: "Breadth",
            description: "Read across domains to build a larger model library."
          },
          {
            name: "Integration",
            description: "Connect ideas to decisions, projects, and observations."
          },
          {
            name: "Review",
            description: "Return to important books and ideas as your context changes."
          }
        ]
      }
    ],
    whyThisMatters:
      "Self-education compounds into judgment, and judgment determines how effectively wealth, leverage, and happiness ideas are applied.",
    practicalApplication:
      "Build a reading practice around curiosity, rereading, cross-domain learning, and decision relevance rather than completion metrics.",
    commonMistakes: [
      "Reading for status instead of understanding",
      "Finishing books mechanically after curiosity has died",
      "Collecting models without applying them to real decisions"
    ],
    misconceptions: [
      {
        misconception: "Reading more books automatically creates better judgment.",
        correction:
          "Reading helps when it is understood, integrated, tested, and connected to reality."
      }
    ],
    applicationLens:
      "When reading, ask what model of reality the book improves. If the answer is unclear, change how you read or choose a better book for the current season.",
    anchors: [
      "Reading is not for status; it is for upgrading judgment.",
      "A good reading life makes your mind harder to fool."
    ],
    takeaways: [
      "Self-education is a compounding asset.",
      "Mental models improve cross-domain judgment.",
      "Curiosity can be a serious learning strategy."
    ],
    examples: [
      "Biographies teach decision-making through lived context.",
      "Psychology helps investors understand fear and mania.",
      "Philosophy helps clarify what wealth is meant to serve."
    ],
    relatedSections: ["judgment-highest-leverage-skill", "final-synthesis-operating-system"]
  }),
  lesson({
    id: "final-synthesis-operating-system",
    title: "Final Synthesis: Naval's Operating System for Wealth and Happiness",
    eyebrow: "Synthesis",
    minutes: 42,
    summary:
      "Naval's philosophy combines a wealth engine built on specific knowledge, leverage, accountability, and judgment with a happiness engine built on independence, desire, solitude, and acceptance.",
    objectives: [
      "Connect the major ideas into one practical operating system",
      "Understand why wealth and happiness are related but not identical",
      "Remember the highest-value ideas months after finishing"
    ],
    concepts: ["operating system", "wealth engine", "happiness engine", "freedom"],
    body: [
      "The Almanack of Naval Ravikant is best understood as an operating system for independence. It is not a linear manual, a list of quotes, or a promise that one formula will make life easy. Its ideas circle around two linked questions: how do you become free in the world, and how do you become free inside your own mind?",
      "The wealth engine begins with specific knowledge. You need an edge the market cannot easily copy. That edge is discovered through curiosity, lived experience, taste, and practice. Then you attach it to leverage: code, media, capital, or labor. Leverage lets your judgment travel beyond your hours. Accountability makes you visibly responsible for the outcome. Ownership aligns your upside with the value created. Judgment decides where the whole machine points.",
      "These pieces only work together. Specific knowledge without leverage stays trapped in personal labor. Leverage without judgment magnifies mistakes. Accountability without skill becomes noise. Ownership without long-term thinking becomes speculation. Judgment without reality contact becomes self-flattery. Naval's philosophy is powerful because the parts constrain each other.",
      "The long-term layer keeps the wealth engine from becoming frantic. Play long-term games with long-term people. Let compounding work in reputation, knowledge, money, trust, and relationships. Avoid status games that convert life into comparison. Choose positive-sum work where creating value for others also expands your freedom. Protect the future from the ego's need to win today.",
      "The happiness engine is related but not identical. Wealth can buy optionality, but it cannot automatically quiet desire. External freedom matters, but internal freedom requires attention, acceptance, simplicity, and the ability to want fewer things. If desire remains unmanaged, wealth may simply fund larger anxieties. If status remains the scoreboard, success may increase dependence.",
      "Independence sits at the center of both engines. Financial independence gives you more control over time. Intellectual independence gives you more control over judgment. Attentional independence gives you more control over the mind. Emotional independence gives you more control over desire and reaction. Naval's deepest theme is not wealth alone. It is freedom from unnecessary control.",
      "To use the book as a personal operating system, translate it into choices. Build specific knowledge where curiosity and market value overlap. Seek ownership and leverage responsibly. Take accountability where your judgment is real. Improve judgment through reading, reflection, and feedback. Choose long-term people. Let compounding work. Reduce desires that cost more attention than they are worth. Protect solitude. Use money to buy time, not merely admiration.",
      "Six months from now, remember the structure. Wealth is assets and ownership, not status. Specific knowledge is the edge. Leverage is the multiplier. Accountability earns trust and upside. Judgment chooses direction. Long-term games create compounding. Happiness requires desire management. Independence is the point. If those ideas remain alive, the book becomes more than a collection of memorable lines. It becomes a way to think."
    ],
    support: [
      {
        type: "framework",
        title: "Naval's operating system",
        stages: [
          {
            name: "Edge",
            description: "Develop specific knowledge through curiosity, practice, taste, and reality contact."
          },
          {
            name: "Scale",
            description: "Attach the edge to leverage: code, media, capital, or aligned labor."
          },
          {
            name: "Ownership",
            description: "Accept accountability and seek structures where upside follows value created."
          },
          {
            name: "Judgment",
            description: "Improve the decisions that determine where leverage and effort go."
          },
          {
            name: "Freedom",
            description: "Use wealth, solitude, simplicity, and acceptance to reduce external and internal captivity."
          }
        ]
      },
      {
        type: "comparisonTable",
        title: "Two engines of independence",
        columns: ["Engine", "Core elements", "Primary failure mode"],
        rows: [
          ["Wealth", "Specific knowledge, leverage, accountability, ownership, judgment", "Turning wealth into status competition"],
          ["Happiness", "Awareness, acceptance, fewer desires, solitude, attention control", "Using success to feed restlessness"]
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text: "Build an edge, multiply it with leverage, own the outcome, improve judgment, play long-term games, and use the resulting freedom to want fewer things and think more clearly."
      }
    ],
    whyThisMatters:
      "The value of the book is in seeing how wealth, judgment, leverage, happiness, and freedom reinforce or corrupt one another.",
    practicalApplication:
      "Use the operating system as a filter for major decisions: does this build specific knowledge, increase ownership, improve judgment, compound trust, protect attention, and move you toward freedom?",
    commonMistakes: [
      "Reducing Naval's philosophy to hustle slogans",
      "Pursuing wealth while staying trapped in status games",
      "Using happiness ideas to avoid the hard work of building"
    ],
    misconceptions: [
      {
        misconception: "The Almanack is mainly a collection of clever quotes.",
        correction:
          "The quotes point toward a coherent philosophy of wealth, judgment, leverage, independence, and inner freedom."
      }
    ],
    applicationLens:
      "The operating system is not a script. It is a set of filters. Use it to choose better games, better partners, better learning, better leverage, and a less compulsive inner life.",
    anchors: [
      "Naval's philosophy is an operating system for independence: external freedom through ownership and internal freedom through desire management.",
      "Wealth and happiness connect through freedom, but neither replaces the other."
    ],
    takeaways: [
      "Specific knowledge, leverage, accountability, and judgment form the wealth engine.",
      "Desire, attention, solitude, and acceptance form the happiness engine.",
      "The point of both engines is independence."
    ],
    examples: [
      "A founder builds around specific knowledge, uses code as leverage, and protects judgment through long-term thinking.",
      "An investor uses reading and mental models to avoid crowd pressure.",
      "A high achiever reduces desires so wealth creates freedom instead of larger obligations."
    ],
    relatedSections: ["wealth-freedom-point-of-game", "desire-happiness-inner-game"]
  })
];

export const almanackOfNavalRavikant: Book = {
  slug: "the-almanack-of-naval-ravikant",
  title: "The Almanack of Naval Ravikant",
  author: "Eric Jorgenson / Naval Ravikant",
  category: "Wealth / Philosophy / Entrepreneurship",
  difficulty: "Intermediate",
  completionTime: "7h 23m",
  progress: 0,
  coverTone:
    "from-slate-100 via-cyan-100 to-emerald-100 dark:from-slate-900 dark:via-cyan-950/40 dark:to-emerald-950/40",
  description:
    "A deep curriculum on wealth creation, specific knowledge, leverage, accountability, judgment, happiness, independence, and living according to first principles.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(navalSections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "wealth creation",
    "specific knowledge",
    "leverage",
    "accountability",
    "judgment",
    "long-term thinking",
    "compounding",
    "independence",
    "happiness",
    "desire",
    "freedom",
    "philosophy",
    "entrepreneurship",
    "decision-making"
  ],
  intendedOutcomes: [
    "Understand the difference between earning money and building wealth",
    "Understand specific knowledge and why it cannot be easily trained",
    "Understand leverage in its modern forms",
    "Understand accountability, ownership, and visible responsibility",
    "Understand Naval's view of judgment as the highest leverage skill",
    "Understand happiness as a skill shaped by desire, acceptance, and attention",
    "Understand why independence and freedom are central to the book",
    "Apply Naval's ideas without turning them into shallow hustle culture"
  ],
  promise:
    "After completing this curriculum, you will understand Naval Ravikant's core philosophy of wealth and happiness, including how specific knowledge, leverage, accountability, long-term thinking, judgment, and inner freedom compound into a more independent life.",
  recommendedAudience: [
    "Readers who want a deep grasp of Naval Ravikant's philosophy",
    "Founders, creators, investors, and operators building long-term independence",
    "Professionals seeking better judgment around work, money, and leverage",
    "Ambitious readers who want wealth ideas without shallow hustle culture"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public ideas and philosophical themes. It does not reproduce long passages or chapter text.",
  sections: navalSections
};
