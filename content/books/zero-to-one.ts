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

const zeroToOneSections: CurriculumSection[] = [
  lesson({
    id: "creating-something-new",
    title: "From Zero to One: Creating Something New",
    eyebrow: "Foundation",
    minutes: 34,
    summary:
      "Thiel's central distinction is between copying what already works and creating a new source of value that did not previously exist.",
    objectives: [
      "Understand horizontal versus vertical progress",
      "See why startups are vehicles for new futures",
      "Recognize the difference between scale and invention"
    ],
    concepts: ["zero to one", "horizontal progress", "vertical progress", "new value"],
    body: [
      "Zero to One begins with a contrast between two kinds of progress. Horizontal progress takes something that already works and extends it: another restaurant in another city, another bank with a familiar model, another software product that imitates a proven category. Vertical progress creates something new: a technology, business model, distribution path, or category that changes what is possible. The book's title points to this second movement.",
      "The distinction is not a moral ranking of all businesses. Copying and scaling can be useful. Societies need diffusion, execution, and operational competence. But Thiel is interested in the rare company that opens a new frontier of value. A startup matters because it is small enough to coordinate around an unusual belief and ambitious enough to build a future that larger institutions may be too inert to imagine.",
      "In software, zero-to-one progress might be a new interface that changes how people work rather than another feature clone. In AI, it might be a workflow that turns previously impossible analysis into ordinary practice. In finance, it might be a market structure that lowers friction for a neglected customer. In biotech, it might be a platform that changes what can be diagnosed or treated. In consumer products, it might be a new behavior pattern that feels obvious only after someone makes it real.",
      "The lesson is not that novelty itself is valuable. Many new things are useless. The point is that important value often begins as a non-obvious improvement in the world. The founder's task is to identify a real change in possibility, build around it before everyone agrees, and turn fragile insight into durable institution.",
      "This also changes how to read business opportunity. A crowded market can look attractive because demand is obvious. A new market can look strange because demand is still forming. Thiel asks the reader to look beyond visible demand and ask whether a company can create a unique future rather than merely occupy an existing lane."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Scale versus invention",
        not: "Doing a known thing in more places, for more users, with more capital.",
        but: "Creating a new capability, market, or strategic position that did not meaningfully exist before."
      },
      {
        type: "expandedExample",
        scenario: "A founder wants to build an AI product for legal teams.",
        defaultApproach:
          "Copy a popular chatbot interface and compete on slightly lower price or faster onboarding.",
        betterApproach:
          "Find a specific legal workflow where new model capabilities change the economics of research, review, or compliance, then build a product around that wedge.",
        whyItWorks:
          "The second approach looks for a new source of value instead of entering a visible category with weak differentiation."
      },
      {
        type: "comparisonTable",
        title: "Two kinds of progress",
        columns: ["Mode", "Question", "Risk"],
        rows: [
          ["Horizontal", "How do we extend what already works?", "Competition, commoditization, thin margins"],
          ["Vertical", "What can now be done that could not be done before?", "Uncertainty, timing, market education"],
          ["Startup", "What new future can a small team coordinate around?", "Being early, wrong, or unable to distribute"]
        ]
      }
    ],
    whyThisMatters:
      "The book's other arguments about monopoly, secrets, founders, and power laws all depend on the premise that great companies create unique value rather than merely join crowded competition.",
    practicalApplication:
      "When evaluating a startup idea, ask what becomes newly possible if the company works, not only what existing market it can enter.",
    commonMistakes: [
      "Treating novelty as valuable without proving usefulness",
      "Assuming a large existing market means a good startup opportunity",
      "Confusing operational expansion with zero-to-one creation"
    ],
    misconceptions: [
      {
        misconception: "Zero to One means every company must invent a scientific breakthrough.",
        correction:
          "The newness can appear in technology, market structure, distribution, customer insight, or business model."
      }
    ],
    lens:
      "Ask whether an idea creates a new capability, a new category, or a new strategic position. If the answer is only that it copies a known product with modest improvements, it may still be a business, but it is not yet a zero-to-one bet.",
    anchors: [
      "Zero-to-one progress creates new value; horizontal progress extends known value.",
      "A startup is a coordinated bet on a future that is not yet obvious."
    ],
    takeaways: [
      "Thiel's startup philosophy begins with creation, not competition.",
      "New value can emerge through technology, markets, behavior, or distribution.",
      "Novelty must be tied to usefulness and durable advantage."
    ],
    examples: [
      "A biotech platform creates a diagnostic capability that did not previously exist.",
      "A fintech product changes access or settlement rather than copying a bank app.",
      "An AI workflow makes a professional task dramatically cheaper or faster."
    ],
    relatedSections: ["competition-is-not-the-goal", "secrets-hidden-truths"]
  }),
  lesson({
    id: "competition-is-not-the-goal",
    title: "Competition Is Not the Goal",
    eyebrow: "Strategy",
    minutes: 34,
    summary:
      "Thiel argues that competition is often romanticized, even though it can compress profits, narrow imagination, and trap companies in imitation.",
    objectives: [
      "Understand why competition can destroy value",
      "Recognize status-driven competitive behavior",
      "Learn why differentiation is a strategic necessity"
    ],
    concepts: ["competition", "commoditization", "differentiation", "status traps"],
    body: [
      "Business culture often treats competition as proof of seriousness. A hard market, visible rivals, and dramatic head-to-head battles can make a company feel legitimate. Thiel reverses the frame. If many companies are fighting to provide similar value to similar customers in similar ways, the customer may benefit, but the businesses often bleed away profit and strategic freedom.",
      "Competition compresses margins because customers can compare alternatives easily. It also compresses imagination. Teams begin watching rivals more than customers, copying roadmaps more than discovering secrets, and measuring success by relative position rather than unique value. The company becomes reactive even when it calls itself ambitious.",
      "The psychological danger is especially subtle. Competition can become identity. A founder may want to beat the rival more than serve the market. A student may choose a career because prestigious peers are chasing it. A company may enter a category because competitors are raising money there. In these cases, the rival becomes the reference point, and the real question of value disappears.",
      "Escaping competition does not mean avoiding difficulty. It means differentiating so clearly that the company is no longer interchangeable. The strongest startups are not usually better in every dimension for every customer. They are dramatically better for a specific customer, use case, or market wedge, then they expand from strength.",
      "This is one of the book's most useful correctives for founders. A market with many competitors is not automatically validated. It may be a warning that the available profit pool will be competed away unless the company has a structural advantage, a proprietary insight, or a distribution path others cannot easily copy."
    ],
    support: [
      {
        type: "misconception",
        misconception: "A crowded market proves the opportunity is good.",
        correction:
          "A crowded market proves that demand is visible. It does not prove that a new entrant can earn durable profits.",
        whyItMatters:
          "Founders often mistake visible demand for strategic attractiveness."
      },
      {
        type: "mentalModel",
        name: "Rival gravity",
        explanation:
          "The more your strategy is defined by a rival, the more your attention is pulled away from unique customer value.",
        useWhen:
          "Roadmaps, pricing, messaging, or hiring decisions are mostly reactions to competitors."
      },
      {
        type: "expandedExample",
        scenario: "A startup enters a crowded productivity software category.",
        defaultApproach:
          "Match the top competitors feature by feature and compete on a lower subscription price.",
        betterApproach:
          "Choose a neglected workflow, become unusually effective there, and let the product's category emerge from that strength.",
        whyItWorks:
          "The company avoids becoming a cheaper substitute and creates a reason to exist."
      }
    ],
    whyThisMatters:
      "The goal of startup strategy is not to prove toughness by entering a fight; it is to create a position where the company can generate and keep value.",
    practicalApplication:
      "Before entering a market, write the specific reason customers would choose you even if they know every alternative.",
    commonMistakes: [
      "Using competitor activity as the main evidence for opportunity",
      "Building a roadmap from rival features instead of customer insight",
      "Treating low price as differentiation when the product is otherwise interchangeable"
    ],
    misconceptions: [
      {
        misconception: "Avoiding competition means choosing easy markets.",
        correction:
          "It means choosing a strategy where your advantage is structural rather than performative."
      }
    ],
    lens:
      "Look for places where competition is shaping your imagination. If the rival is the center of the strategy, the company may be optimizing for comparison instead of creation.",
    anchors: [
      "Competition can be a trap when it makes companies interchangeable.",
      "Differentiation is not decoration; it is the escape route from commoditization."
    ],
    takeaways: [
      "Crowded markets can punish every participant.",
      "Competition can become a status game.",
      "Escaping competition requires unique value, not merely confidence."
    ],
    examples: [
      "A consumer brand that copies every trend competes away identity.",
      "A B2B startup wins by owning one neglected workflow before expanding.",
      "A career choice based only on prestige can become personal competition disguised as ambition."
    ],
    relatedSections: ["monopoly-durable-value", "startup-markets-niches-expansion"]
  }),
  lesson({
    id: "monopoly-durable-value",
    title: "Monopoly, Differentiation, and Durable Value",
    eyebrow: "Advantage",
    minutes: 36,
    summary:
      "Thiel uses monopoly to describe companies that create and preserve unique value through technology, network effects, scale, brand, or category ownership.",
    objectives: [
      "Understand monopoly as strategic uniqueness, not coercion",
      "Identify common sources of durable advantage",
      "Avoid confusing a small niche with small ambition"
    ],
    concepts: ["monopoly", "durability", "network effects", "proprietary technology"],
    body: [
      "Thiel's use of monopoly can sound provocative because the word often suggests illegal coercion or anti-consumer behavior. In the book's strategic vocabulary, monopoly means a company is so differentiated that it is not forced into commodity competition. It offers unique value, owns a category in the customer's mind, and can retain enough profit to invest in the future.",
      "Durable monopolies usually have reinforcing advantages. Proprietary technology gives the company a performance gap. Network effects make the product more valuable as more people use it. Economies of scale lower costs as the company grows. Brand creates trust and meaning that cannot be copied instantly. None of these is magic alone; the power comes when they compound around a real customer need.",
      "A monopoly position also requires a clear market definition. A company can begin by dominating a small market that looks unimportant to outsiders. That does not mean the ambition is small. The small market is a beachhead: a place where the company can win decisively, learn deeply, and build momentum before expanding into adjacent markets.",
      "The common mistake is to announce a huge market too early. A startup that claims to target all small businesses, all healthcare, or all productivity work may sound ambitious but lack any credible path to dominance. A narrower initial market can be more ambitious because it creates a real chance to become the default choice for someone.",
      "Durability matters because value creation and value capture are different. A company can create enormous value and still fail to capture enough of it if rivals copy the product, distribution costs explode, suppliers hold power, or customers see no meaningful switching cost. Thiel's monopoly argument forces founders to ask how a company will still matter after the first excitement fades."
    ],
    support: [
      {
        type: "framework",
        title: "Sources of durable advantage",
        stages: [
          { name: "Technology", description: "A meaningful performance or capability gap." },
          { name: "Network", description: "More users make the product more valuable." },
          { name: "Scale", description: "Growth improves economics or operating leverage." },
          { name: "Brand", description: "Trust, status, or meaning that competitors cannot instantly copy." }
        ]
      },
      {
        type: "keyDistinction",
        title: "Niche dominance versus small ambition",
        not: "Choosing a tiny market because the company has no larger path.",
        but: "Winning a focused beachhead that can compound into adjacent markets."
      },
      {
        type: "example",
        title: "Owning the first market",
        body:
          "A vertical software company may start with one type of clinic, law firm, or logistics operator. If it becomes indispensable there, it can expand with credibility rather than vague ambition."
      }
    ],
    whyThisMatters:
      "A startup must create value and keep enough of it to survive, invest, and compound. Durability is what turns a clever product into a serious company.",
    practicalApplication:
      "Define the smallest market where your company could become the obvious choice, then name the advantage that would let that position last.",
    commonMistakes: [
      "Using monopoly language to excuse anti-customer behavior",
      "Choosing a niche with no expansion path",
      "Assuming brand exists before customers have a reason to believe"
    ],
    misconceptions: [
      {
        misconception: "Monopoly means charging more because customers have no choice.",
        correction:
          "In Thiel's strategic sense, monopoly begins with unique value that makes the company meaningfully different."
      }
    ],
    lens:
      "Evaluate whether an advantage compounds. If growth makes the company stronger, smarter, cheaper, more trusted, or more useful, durability may be forming.",
    anchors: [
      "A great company is differentiated enough to avoid commodity competition.",
      "Start small when the small market can become a platform for expansion."
    ],
    takeaways: [
      "Monopoly means strategic uniqueness in this curriculum's context.",
      "Durability can come from technology, networks, scale, brand, or their combination.",
      "A focused beachhead can be the beginning of a large company."
    ],
    examples: [
      "A marketplace improves as liquidity grows on both sides.",
      "A hardware company protects value through proprietary manufacturing skill.",
      "A trusted brand lowers customer uncertainty in a complex category."
    ],
    relatedSections: ["startup-markets-niches-expansion", "distribution-go-to-market"]
  }),
  lesson({
    id: "secrets-hidden-truths",
    title: "Secrets: The Hidden Truths Great Companies Are Built On",
    eyebrow: "Insight",
    minutes: 35,
    summary:
      "A secret is a true, important, non-obvious insight about technology, markets, behavior, regulation, or distribution.",
    objectives: [
      "Define secrets in startup strategy",
      "Find where non-obvious opportunities can originate",
      "Separate independent thinking from vague contrarianism"
    ],
    concepts: ["secrets", "non-consensus truth", "independent thinking", "hidden opportunity"],
    body: [
      "For Thiel, a secret is not gossip or mystery. It is a true thing about the world that most people have not recognized or have chosen not to pursue. Great companies often begin with such a hidden truth: customers behave differently than incumbents assume, a technology has crossed a threshold, a regulation creates a new opening, or a distribution channel can reach people no one else can reach efficiently.",
      "Secrets matter because obvious truths are usually already priced into the market. If everyone agrees that an opportunity is attractive and everyone can pursue it, the resulting competition may erase the upside. A valuable startup insight must be both true and not yet fully accepted.",
      "Secrets can come from many places. Technical secrets emerge when a founder sees that a capability has become possible before the market notices. Market secrets emerge when a customer segment is misunderstood. Behavioral secrets emerge when people say one thing but reliably do another. Regulatory secrets appear when rules shift incentives. Distribution secrets appear when a company can reach buyers through a channel others overlook.",
      "Discovering secrets requires independent thought, but not theatrical rebellion. The goal is not to disagree for the pleasure of disagreeing. The goal is to investigate reality closely enough to notice what consensus misses. Many false contrarian ideas feel exciting because they oppose the crowd. A real secret survives contact with evidence.",
      "This is also why secrets often look small at first. A narrow workflow, a neglected customer, or an unglamorous bottleneck may contain more truth than a grand market slogan. The founder's job is to protect the insight long enough to test it, build around it, and convert it into a product customers can actually use."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Where secrets come from",
        columns: ["Source", "Hidden question", "Example pattern"],
        rows: [
          ["Technology", "What is newly possible?", "A model, chip, sensor, or platform crosses a threshold"],
          ["Market", "Who is badly served?", "A customer segment is treated as too small or strange"],
          ["Behavior", "What do people do that contradicts what they say?", "Workarounds reveal real demand"],
          ["Regulation", "What rules changed incentives?", "Compliance creates a new buying need"],
          ["Distribution", "Who can be reached differently?", "A channel unlocks trust or acquisition"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "A founder notices doctors using informal spreadsheets despite expensive hospital software.",
        defaultApproach:
          "Conclude that the hospital software market is already served because large vendors exist.",
        betterApproach:
          "Treat the workaround as evidence of a hidden workflow problem, then study why existing systems fail in that context.",
        whyItWorks:
          "The secret begins in observed behavior rather than an abstract market map."
      },
      {
        type: "warning",
        title: "Contrarian is not enough",
        text:
          "A secret must be true. Being non-consensus only creates value when the minority belief is grounded in reality."
      }
    ],
    whyThisMatters:
      "Without a secret, a startup is likely to compete on visible ideas that others can copy or already understand.",
    practicalApplication:
      "Study anomalies: customer workarounds, dismissed niches, new technical thresholds, and incentives that no longer match the current market.",
    commonMistakes: [
      "Mistaking a provocative opinion for a secret",
      "Ignoring small anomalies because they do not sound like big markets",
      "Keeping an insight abstract instead of testing it through customer behavior"
    ],
    misconceptions: [
      {
        misconception: "A secret is just an idea nobody has heard before.",
        correction:
          "It is a true, important, non-obvious insight that can support a durable strategy."
      }
    ],
    lens:
      "Look for evidence that reality is disagreeing with consensus. Workarounds, frustration, surprising adoption, and overlooked constraints often reveal the beginning of a secret.",
    anchors: [
      "A real secret is true, important, and not yet broadly accepted.",
      "The best secrets are discovered through close observation, not rebellious branding."
    ],
    takeaways: [
      "Secrets are the insight layer beneath great startups.",
      "They can come from technology, markets, behavior, regulation, or distribution.",
      "Non-consensus must be paired with truth."
    ],
    examples: [
      "A compliance change creates a new software need before incumbents respond.",
      "A consumer workaround reveals demand for a simpler product.",
      "A technical threshold makes a previously impossible workflow viable."
    ],
    relatedSections: ["contrarian-thinking-without-theater", "technology-timing-progress"]
  }),
  lesson({
    id: "definite-optimism-clear-vision",
    title: "Definite Optimism and the Importance of Clear Vision",
    eyebrow: "Future",
    minutes: 33,
    summary:
      "Thiel favors a specific, planned view of the future over vague belief that things will somehow improve.",
    objectives: [
      "Understand definite versus indefinite thinking",
      "See why planning still matters under uncertainty",
      "Apply definite optimism to startups, careers, and investing"
    ],
    concepts: ["definite optimism", "planning", "vision", "uncertainty"],
    body: [
      "One of Thiel's deeper arguments is cultural. He contrasts definite thinking, which believes the future can be shaped by specific plans, with indefinite thinking, which expects improvement without a concrete view of how it will happen. Definite optimism says the future can be better and we can build toward it deliberately.",
      "This matters for startups because uncertainty can become an excuse for vagueness. Founders often say they are experimenting, iterating, and staying flexible. Those are valuable disciplines, but they can hide the absence of a real thesis. A startup does not need perfect prediction, but it does need a view about what should become true if the company succeeds.",
      "Planning is not the opposite of learning. A good plan names the future the company is trying to create, the assumptions that must hold, and the sequence in which proof must be gathered. Without that, iteration can become wandering. The team may confuse activity with progress because no definite destination exists.",
      "Definite optimism also applies outside startups. In a career, it means building toward a specific capability or position rather than merely collecting credentials and hoping optionality pays off. In investing, it means understanding the future implied by a bet rather than buying because a category feels exciting. In product strategy, it means having a point of view about the world customers are moving into.",
      "The danger is overconfidence. Definite optimism becomes brittle when the plan refuses evidence. The mature version is specific but updateable: clear enough to coordinate action, humble enough to learn when reality pushes back."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Flexible is not the same as vague",
        not: "Avoiding commitment because the future is uncertain.",
        but: "Holding a clear thesis while updating tactics as evidence arrives."
      },
      {
        type: "framework",
        title: "A definite thesis",
        stages: [
          { name: "Future", description: "What specific change do we believe will happen or can be caused?" },
          { name: "Proof", description: "What evidence would show the thesis is working?" },
          { name: "Sequence", description: "What must be built, learned, or won first?" },
          { name: "Update", description: "What evidence would make us revise the plan?" }
        ]
      },
      {
        type: "example",
        title: "Career definite optimism",
        body:
          "Instead of collecting generic experiences, a person might decide to become unusually strong at AI-enabled operations for healthcare teams, then choose projects that compound toward that future."
      }
    ],
    whyThisMatters:
      "Clear vision lets people coordinate around a future instead of drifting through options that never compound.",
    practicalApplication:
      "Write the specific future your project assumes, the evidence that would validate it, and the sequence needed to reach it.",
    commonMistakes: [
      "Using uncertainty as an excuse for no thesis",
      "Confusing a rigid plan with a definite view",
      "Pursuing optionality for so long that no advantage compounds"
    ],
    misconceptions: [
      {
        misconception: "Planning is useless because startups are uncertain.",
        correction:
          "Planning is useful when it clarifies assumptions, sequence, and direction while remaining open to evidence."
      }
    ],
    lens:
      "Ask whether your strategy would still make sense if no one else validated it for a while. Definite optimism requires a view strong enough to guide action before consensus arrives.",
    anchors: [
      "Definite optimism is the belief that a better future can be deliberately built.",
      "A good plan coordinates learning; it does not deny uncertainty."
    ],
    takeaways: [
      "Vague optimism produces weak strategy.",
      "Startups need a thesis about the future.",
      "Specific plans should update with evidence."
    ],
    examples: [
      "A founder sequences a niche market before broad expansion.",
      "An investor names the adoption curve implied by a bet.",
      "A professional builds toward a specific capability instead of generic optionality."
    ],
    relatedSections: ["technology-timing-progress", "founders-role-building-future"]
  }),
  lesson({
    id: "power-laws-uneven-outcomes",
    title: "Power Laws: Why Outcomes Are Not Evenly Distributed",
    eyebrow: "Leverage",
    minutes: 34,
    summary:
      "Startup outcomes, talent, markets, and strategic decisions often follow power laws where a few choices produce most of the results.",
    objectives: [
      "Understand why venture returns depend on outliers",
      "Apply power law thinking to focus and prioritization",
      "Avoid spreading attention evenly across unequal opportunities"
    ],
    concepts: ["power laws", "outliers", "venture capital", "focus"],
    body: [
      "In ordinary life, people often expect outcomes to be roughly proportional. More effort should produce somewhat more result. More bets should diversify risk. More projects should create more opportunity. Thiel argues that startups frequently operate in a power law world: a small number of outcomes account for most of the value.",
      "Venture capital makes this visible. A fund can lose money on many investments and still succeed if one company becomes enormous. The best investment may return more than all the others combined. This is not a normal distribution mindset. It forces investors to ask whether a company can become exceptional, not merely whether it can become decent.",
      "The power law also applies inside companies. A few product decisions may determine most customer adoption. A few hires may shape the culture for years. A few distribution channels may create most growth. A few technical bets may define the company's future. Treating all decisions as equal is a category error.",
      "For founders, the practical implication is focus. If outcomes are uneven, attention should not be spread evenly. The hard question is which market, product, customer, hire, or partnership has the potential to change the slope of the company. This does not mean ignoring operations. It means recognizing where leverage actually lives.",
      "Power law thinking can be misused as lottery thinking. The point is not to chase any huge upside story. The point is to identify where a real compounding advantage could produce disproportionate results, then concentrate effort there."
    ],
    support: [
      {
        type: "mentalModel",
        name: "Unequal weights",
        explanation:
          "In power law environments, decisions that look similar in effort can differ radically in consequence.",
        useWhen:
          "You are allocating time, capital, hiring attention, or product focus across many possible bets."
      },
      {
        type: "expandedExample",
        scenario: "A startup is dividing effort across five customer segments.",
        defaultApproach:
          "Give each segment equal sales attention because all could generate revenue.",
        betterApproach:
          "Identify the segment where adoption, urgency, expansion, and reference value could compound fastest, then focus there.",
        whyItWorks:
          "The company treats market choice as a leverage decision rather than a calendar allocation problem."
      },
      {
        type: "warning",
        title: "Upside stories are not enough",
        text:
          "Power law thinking requires evidence of possible compounding advantage, not just a large imagined market."
      }
    ],
    whyThisMatters:
      "If outcomes are uneven, the quality of a few decisions matters more than the quantity of average activity.",
    practicalApplication:
      "List the decisions in your project that could plausibly determine most of the outcome, then protect disproportionate attention for them.",
    commonMistakes: [
      "Diversifying effort across too many weak opportunities",
      "Using big-market language to justify unfocused strategy",
      "Treating all hires, customers, or features as equally consequential"
    ],
    misconceptions: [
      {
        misconception: "Power laws mean you should gamble on huge ideas.",
        correction:
          "They mean you should understand where compounding advantage can make outcomes highly unequal."
      }
    ],
    lens:
      "When deciding what deserves focus, ask which choice could make the next set of choices easier, stronger, or more valuable.",
    anchors: [
      "Startup outcomes are often dominated by a few extraordinary results.",
      "Power law thinking turns focus into a strategic discipline."
    ],
    takeaways: [
      "Venture returns depend on outliers.",
      "A few company decisions can dominate the outcome.",
      "Focus should follow leverage, not equal distribution."
    ],
    examples: [
      "One distribution channel drives most acquisition.",
      "One early hire defines engineering culture.",
      "One market wedge unlocks expansion into adjacent categories."
    ],
    relatedSections: ["startup-markets-niches-expansion", "distribution-go-to-market"]
  }),
  lesson({
    id: "founders-role-building-future",
    title: "The Founder's Role in Building the Future",
    eyebrow: "Leadership",
    minutes: 32,
    summary:
      "Founders shape a company's taste, culture, risk tolerance, and view of the future, but founder mythology can become dangerous when vision turns into ego.",
    objectives: [
      "Understand why founders have unusual influence",
      "Separate vision from ego",
      "Recognize both the value and danger of founder mythology"
    ],
    concepts: ["founder culture", "vision", "eccentricity", "ego"],
    body: [
      "Thiel gives unusual weight to founders because early companies are plastic. A founder's beliefs, taste, standards, pace, and contradictions become embedded before formal systems exist. The first hires learn what matters by watching what the founder rewards, ignores, repeats, and refuses to compromise.",
      "Unusual founders can create unusual companies because they are willing to hold beliefs that do not yet have institutional support. They may tolerate ambiguity, recruit around a mission others find strange, and keep attention on a future that is not yet validated. In a zero-to-one company, this kind of conviction can be necessary.",
      "But founder importance can easily become founder worship. Charisma is not strategy. Intensity is not truth. Eccentricity is not evidence. A founder who cannot distinguish vision from ego may ignore customers, rationalize dysfunction, or treat disagreement as betrayal. The same force that creates coherence can become a source of fragility.",
      "The healthier reading is that founders matter because early choices compound. They choose the secret, market, people, culture, and standards before the company has much inertia. Their job is to create a strong center of gravity without making the company dependent on personal mythology.",
      "Vision becomes valuable when it clarifies tradeoffs, attracts the right people, and sustains effort through uncertainty. Ego becomes dangerous when it makes the founder immune to reality. The difference is often visible in how the founder responds to evidence."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Vision versus ego",
        not: "Insisting the founder is right because their identity depends on being exceptional.",
        but: "Holding a clear view of the future while letting evidence refine the path."
      },
      {
        type: "comparisonTable",
        title: "Founder influence",
        columns: ["Domain", "Healthy expression", "Dangerous expression"],
        rows: [
          ["Culture", "Clear standards and taste", "Personal loyalty tests"],
          ["Strategy", "A definite thesis", "Unchallengeable certainty"],
          ["Hiring", "Mission and capability fit", "Charisma over competence"],
          ["Execution", "Urgency with learning", "Intensity without listening"]
        ]
      },
      {
        type: "example",
        title: "A founder's early standards",
        body:
          "If the founder repeatedly chooses customer trust over short-term revenue, that decision teaches the team more than a values document."
      }
    ],
    whyThisMatters:
      "The founder's early decisions shape the company's trajectory long before processes and managers can stabilize the system.",
    practicalApplication:
      "Evaluate founder strength by the quality of their thesis, standards, hiring, learning, and evidence response, not by theatrical confidence.",
    commonMistakes: [
      "Assuming unusual personality equals strategic insight",
      "Dismissing founder influence as irrelevant once a company grows",
      "Treating disagreement with the founder as lack of commitment"
    ],
    misconceptions: [
      {
        misconception: "Great founders succeed because they ignore everyone.",
        correction:
          "They may resist consensus, but they still need disciplined contact with reality."
      }
    ],
    lens:
      "Look at what the founder makes easier or harder for the organization to see. The best founders sharpen perception; the worst bend perception around themselves.",
    anchors: [
      "Founders matter because early choices compound into culture and strategy.",
      "Vision listens to evidence; ego defends itself from evidence."
    ],
    takeaways: [
      "Founders set the initial gravity of a company.",
      "Unusual conviction can be valuable in zero-to-one work.",
      "Founder mythology becomes dangerous when it replaces reality."
    ],
    examples: [
      "A founder's hiring bar shapes culture for years.",
      "A clear mission attracts people who can tolerate uncertainty.",
      "A founder who punishes dissent weakens the company's ability to learn."
    ],
    relatedSections: ["definite-optimism-clear-vision", "final-synthesis-startup-operating-system"]
  }),
  lesson({
    id: "technology-timing-progress",
    title: "Technology, Timing, and the Question of Progress",
    eyebrow: "Timing",
    minutes: 33,
    summary:
      "Technology is broader than software, and startup success depends on whether the world is ready for the specific progress a company proposes.",
    objectives: [
      "Define technology as doing more with less",
      "Understand why timing matters",
      "Evaluate whether a startup is too early, too late, or right on time"
    ],
    concepts: ["technology", "timing", "progress", "readiness"],
    body: [
      "Thiel treats technology broadly. It is not only code or devices. Technology is any new and better way of doing things: a scientific method, a manufacturing process, a financial infrastructure, a logistics system, a medical platform, or a software tool. The deeper question is whether the company enables real progress.",
      "Timing is crucial because true ideas can still fail. A product may be technically sound but too early for customers, infrastructure, regulation, or behavior. Another product may be too late, entering after the market has consolidated and advantages have hardened. The right time is when a meaningful change has occurred but the opportunity has not yet become obvious to everyone.",
      "Good timing often appears at the intersection of capability and readiness. A model becomes accurate enough. A distribution channel matures. Customers feel a new pain. Regulation changes. Costs fall. A cultural habit shifts. The founder's insight is not only that the idea is good, but that the world has become ready enough for it to work.",
      "This is why progress must be studied concretely. Saying a sector will be transformed is not enough. Which bottleneck has changed? Which buyer can act now? Which cost curve matters? Which infrastructure dependency has been solved? Which incumbent assumption has become false?",
      "The mature application is neither techno-optimist hype nor skepticism for its own sake. It is a disciplined question: what can now be built, sold, adopted, or scaled that could not happen before?"
    ],
    support: [
      {
        type: "framework",
        title: "Timing diagnosis",
        stages: [
          { name: "Capability", description: "Has the technology crossed a practical threshold?" },
          { name: "Readiness", description: "Are customers, infrastructure, and behavior prepared?" },
          { name: "Urgency", description: "Is the problem painful enough now?" },
          { name: "Openness", description: "Has the market not yet locked around incumbents?" }
        ]
      },
      {
        type: "expandedExample",
        scenario: "A healthcare AI tool is technically impressive.",
        defaultApproach:
          "Assume model performance alone proves the startup is ready.",
        betterApproach:
          "Check workflow integration, buyer incentives, compliance, liability, clinician trust, and reimbursement timing.",
        whyItWorks:
          "The company evaluates whether progress can actually enter the world."
      },
      {
        type: "keyDistinction",
        title: "Good idea versus good timing",
        not: "The belief that technical correctness guarantees adoption.",
        but: "The recognition that adoption depends on infrastructure, incentives, trust, and urgency."
      }
    ],
    whyThisMatters:
      "Many startups fail not because the idea is absurd, but because the surrounding system is not ready or has already moved on.",
    practicalApplication:
      "For any startup thesis, identify the specific change in technology, cost, regulation, behavior, or distribution that makes now different.",
    commonMistakes: [
      "Equating software with all technology",
      "Assuming a true idea is automatically timely",
      "Ignoring buyer readiness and market structure"
    ],
    misconceptions: [
      {
        misconception: "Timing is luck.",
        correction:
          "Luck matters, but timing can be analyzed through capability, readiness, urgency, and market openness."
      }
    ],
    lens:
      "Ask what changed. If nothing meaningful changed in capability, cost, regulation, behavior, or distribution, the timing thesis may be weak.",
    anchors: [
      "Technology is any better way of doing things.",
      "Good timing means the world has become ready enough before the opportunity is obvious."
    ],
    takeaways: [
      "Technology is broader than software.",
      "Timing can make true ideas fail or succeed.",
      "Progress requires both capability and adoption."
    ],
    examples: [
      "Battery cost curves change electric vehicle feasibility.",
      "Regulatory shifts create new compliance software markets.",
      "AI model performance crosses a threshold for professional workflows."
    ],
    relatedSections: ["secrets-hidden-truths", "definite-optimism-clear-vision"]
  }),
  lesson({
    id: "distribution-go-to-market",
    title: "Distribution: Why Great Products Still Need Go-to-Market",
    eyebrow: "Sales",
    minutes: 34,
    summary:
      "Thiel argues that product excellence is not enough; a company must understand how value will reach customers and how sales actually work.",
    objectives: [
      "Understand why distribution matters as much as product",
      "Recognize why technical founders underestimate sales",
      "Match go-to-market motion to product and customer"
    ],
    concepts: ["distribution", "sales", "go-to-market", "customer acquisition"],
    body: [
      "A common startup fantasy is that great products sell themselves. Thiel attacks this directly. Products do not reach customers through purity. They move through distribution: sales teams, channels, partnerships, virality, brand, content, enterprise relationships, app stores, communities, and word of mouth. The path matters as much as the product.",
      "Technical founders often underestimate sales because selling can look less noble than building. It can feel like persuasion rather than truth. But this misses the point. If customers do not understand, trust, adopt, implement, or remember the product, value remains trapped. Distribution is not a dirty add-on; it is part of making the invention real.",
      "Different products require different sales motions. A low-price consumer app cannot afford expensive enterprise sales. A complex enterprise platform may need high-touch selling because the buyer must coordinate budget, security, procurement, integration, and internal politics. A marketplace must solve both supply and demand. A developer tool may grow through community and product-led adoption.",
      "Distribution also shapes product. A product sold through executives must communicate economic value and risk reduction. A product adopted by individual users must show immediate utility. A product distributed through partners must fit partner incentives. Go-to-market is not merely a post-product activity; it feeds back into positioning and design.",
      "The practical lesson is severe: if you cannot name how customers will be reached profitably and repeatedly, you do not yet have a complete startup strategy."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Distribution fit",
        columns: ["Product type", "Likely motion", "Key risk"],
        rows: [
          ["Enterprise platform", "High-touch sales", "Long cycles and stakeholder complexity"],
          ["Consumer app", "Virality, brand, paid acquisition", "Low willingness to pay or weak retention"],
          ["Developer tool", "Community, docs, product-led growth", "Usage without monetization"],
          ["Marketplace", "Supply and demand sequencing", "Cold-start liquidity"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "A technically excellent analytics product targets large companies.",
        defaultApproach:
          "Wait for inbound demand because the product is obviously better to the team.",
        betterApproach:
          "Define the economic buyer, build proof for that buyer's risk, and create a sales process that handles procurement and implementation.",
        whyItWorks:
          "The company treats customer adoption as a designed system, not a reward for technical merit."
      },
      {
        type: "misconception",
        misconception: "Sales is what you do when the product is not good enough.",
        correction:
          "Sales is how many valuable products are explained, trusted, adopted, and integrated.",
        whyItMatters:
          "Disrespect for distribution can kill products that are otherwise strong."
      }
    ],
    whyThisMatters:
      "A company can build something valuable and still fail if it has no reliable way to reach, persuade, and serve customers.",
    practicalApplication:
      "Before building more features, map the buyer, adoption path, sales motion, acquisition cost, and proof needed for trust.",
    commonMistakes: [
      "Assuming product quality automatically creates adoption",
      "Choosing a sales motion that cannot work with the product's price",
      "Treating sales as manipulation instead of customer education and trust-building"
    ],
    misconceptions: [
      {
        misconception: "Distribution comes after product strategy.",
        correction:
          "Distribution is part of strategy because it determines whether value can reach customers."
      }
    ],
    lens:
      "Ask how the product travels. If the path to the customer is vague, expensive, or misaligned with price, the business model is incomplete.",
    anchors: [
      "Great products still need distribution.",
      "Go-to-market must fit the product, buyer, price, and adoption complexity."
    ],
    takeaways: [
      "Distribution is a core startup function.",
      "Sales can be ethical when it clarifies real value.",
      "The sales motion must match the economics of the product."
    ],
    examples: [
      "Enterprise software needs proof for multiple stakeholders.",
      "Developer tools often grow through documentation and community.",
      "Marketplaces must sequence supply and demand carefully."
    ],
    relatedSections: ["startup-markets-niches-expansion", "monopoly-durable-value"]
  }),
  lesson({
    id: "startup-markets-niches-expansion",
    title: "Startup Strategy: Markets, Niches, and Expansion",
    eyebrow: "Sequencing",
    minutes: 35,
    summary:
      "Thiel's market strategy favors starting with a focused beachhead, dominating it, and expanding from strength rather than beginning in an undifferentiated huge market.",
    objectives: [
      "Understand why starting small can be strategically ambitious",
      "Sequence markets from wedge to expansion",
      "Avoid huge undifferentiated market claims"
    ],
    concepts: ["beachhead market", "niche", "sequencing", "expansion"],
    body: [
      "Thiel's advice to start small can sound modest, but it is actually a theory of sequencing. A startup should begin where it can become the best and most important solution for a clearly defined group. That first market creates proof, product sharpness, reference customers, and operational learning.",
      "Huge market claims often conceal weak strategy. Saying a product targets all knowledge workers, all consumers, or all small businesses does not explain how the company will win its first customers or why it will be the default choice. A beachhead market forces specificity: who needs this urgently, why now, and why us?",
      "The right niche is not merely small. It is concentrated, reachable, underserved, and connected to larger adjacent opportunities. If the first market has no expansion path, the company may become a small business with a ceiling. If it is too broad, the company may never win enough density to matter.",
      "Expansion should compound advantage. The company moves from one segment to another because capabilities, data, trust, distribution, or product architecture transfer. Expansion without transfer is just starting over repeatedly.",
      "This sequencing logic is especially useful in modern software and AI markets. A general tool may sound bigger, but a vertical workflow can create clearer urgency, better training data, stronger references, and more defensible product insight. The narrow start can be the path to a broader platform."
    ],
    support: [
      {
        type: "framework",
        title: "Beachhead quality test",
        stages: [
          { name: "Urgent", description: "The customer has a painful, current problem." },
          { name: "Reachable", description: "The company can find and sell to this group efficiently." },
          { name: "Winnable", description: "The product can become clearly better for this context." },
          { name: "Expandable", description: "The advantage can transfer to adjacent markets." }
        ]
      },
      {
        type: "expandedExample",
        scenario: "A startup wants to sell workflow automation to every operations team.",
        defaultApproach:
          "Position as a general automation platform for all industries.",
        betterApproach:
          "Start with one operational niche where the pain is frequent, costly, and poorly served, then expand to adjacent workflows after winning trust.",
        whyItWorks:
          "Specificity creates product clarity and customer density."
      },
      {
        type: "keyDistinction",
        title: "Large market versus good entry market",
        not: "A giant category where the startup has no wedge.",
        but: "A focused entry point that can be dominated and expanded from."
      }
    ],
    whyThisMatters:
      "Market sequencing determines whether a startup can build enough density and proof to create a durable position.",
    practicalApplication:
      "Define the first market narrowly enough that you can name the buyer, pain, alternative, distribution path, and expansion logic.",
    commonMistakes: [
      "Choosing a broad market to sound ambitious",
      "Picking a niche with no path to adjacent value",
      "Expanding before winning the first market"
    ],
    misconceptions: [
      {
        misconception: "Starting small means thinking small.",
        correction:
          "Starting small can be the disciplined route to owning a category and expanding from strength."
      }
    ],
    lens:
      "The first market should be small enough to win and important enough to matter. If both are not true, the sequence is weak.",
    anchors: [
      "Win a focused market before expanding.",
      "Expansion should transfer advantage, not restart the company."
    ],
    takeaways: [
      "A good beachhead is urgent, reachable, winnable, and expandable.",
      "Huge market claims can hide strategic vagueness.",
      "Sequencing markets creates compounding advantage."
    ],
    examples: [
      "A vertical SaaS product starts with one profession before adjacent roles.",
      "A marketplace begins with one geography to build liquidity.",
      "An AI workflow starts in one regulated use case to build trust and data."
    ],
    relatedSections: ["monopoly-durable-value", "power-laws-uneven-outcomes"]
  }),
  lesson({
    id: "contrarian-thinking-without-theater",
    title: "Contrarian Thinking Without Contrarian Theater",
    eyebrow: "Judgment",
    minutes: 32,
    summary:
      "The book's famous contrarian posture is useful only when disagreement is disciplined by truth, evidence, and strategic relevance.",
    objectives: [
      "Distinguish real non-consensus insight from empty rebellion",
      "Use contrarian thinking without making it an identity performance",
      "Understand why being different is insufficient"
    ],
    concepts: ["contrarian thinking", "truth", "evidence", "judgment"],
    body: [
      "Zero to One is often remembered for contrarian thinking, but the shallow version is easy to misuse. A person can mistake disagreement for intelligence, provocation for insight, or unpopularity for truth. Thiel's useful question is not merely what everyone is wrong about. It is what important truth is hidden because consensus has missed it.",
      "Contrarian theater performs difference. It wants to be seen disagreeing. Real contrarian thinking investigates reality where incentives, habits, fear, expertise, or fashion may have distorted perception. It is quieter, more specific, and more accountable to evidence.",
      "A real non-consensus insight has three parts: it is not widely believed, it is true or increasingly supported by evidence, and it matters enough to change action. If an idea is non-consensus but irrelevant, it is trivia. If it matters but is false, it is danger. If it is true and important but already obvious, it may not create advantage.",
      "The discipline is especially important in startups because being different is easy; being right about something valuable is hard. A strange product, unusual founder, or unpopular market can all be symptoms of insight, but they can also be symptoms of poor judgment. The test is whether the difference creates customer value and strategic advantage.",
      "The mature reader uses contrarian thinking as a lens, not a personality. It asks better questions, studies neglected evidence, and resists consensus when needed. It does not worship disagreement."
    ],
    support: [
      {
        type: "framework",
        title: "Non-consensus insight test",
        stages: [
          { name: "Different", description: "Is the belief actually outside consensus?" },
          { name: "True", description: "What evidence suggests the belief maps to reality?" },
          { name: "Important", description: "Would acting on it change strategy or value creation?" },
          { name: "Actionable", description: "Can a company build a durable advantage from it?" }
        ]
      },
      {
        type: "keyDistinction",
        title: "Contrarian insight versus contrarian identity",
        not: "Being different to signal independence, toughness, or superiority.",
        but: "Seeing a true and important opportunity that consensus has missed."
      },
      {
        type: "expandedExample",
        scenario: "A founder rejects all conventional SaaS metrics as herd thinking.",
        defaultApproach:
          "Treat the rejection itself as evidence of originality.",
        betterApproach:
          "Identify which metric is misleading for this business, why, and what better signal predicts durable value.",
        whyItWorks:
          "The founder replaces vague rebellion with a specific truth claim."
      }
    ],
    whyThisMatters:
      "Contrarian language can either sharpen strategy or become a costume that protects weak thinking from scrutiny.",
    practicalApplication:
      "For every contrarian belief, write the consensus view, the evidence against it, and the action that follows if your view is true.",
    commonMistakes: [
      "Assuming unpopular ideas are more likely to be profound",
      "Using contrarianism to avoid customer evidence",
      "Confusing personal rebelliousness with strategic insight"
    ],
    misconceptions: [
      {
        misconception: "The goal is to disagree with consensus.",
        correction:
          "The goal is to discover important truths, whether or not they flatter consensus."
      }
    ],
    lens:
      "A contrarian belief earns attention only when it changes what you build, whom you serve, how you distribute, or why the company can become durable.",
    anchors: [
      "Being different is not enough; you must be right about something important.",
      "Contrarian thinking should be accountable to evidence."
    ],
    takeaways: [
      "Contrarianism is useful only when grounded in truth.",
      "Non-consensus insight must be important and actionable.",
      "Do not turn disagreement into a personality brand."
    ],
    examples: [
      "A founder notices a neglected customer because incumbents dismiss the segment.",
      "An investor rejects a popular category after studying weak unit economics.",
      "A team replaces a vanity metric with a better indicator of retention."
    ],
    relatedSections: ["secrets-hidden-truths", "final-synthesis-startup-operating-system"]
  }),
  lesson({
    id: "final-synthesis-startup-operating-system",
    title: "Final Synthesis: A Startup Operating System for Creating New Value",
    eyebrow: "Synthesis",
    minutes: 38,
    summary:
      "Zero to One becomes a strategic operating system: seek secrets, create unique value, start with a winnable market, build durable advantage, and distribute deliberately.",
    objectives: [
      "Connect the major ideas of the curriculum",
      "Use the book as a strategy lens",
      "Avoid blind contrarianism while preserving independent thought"
    ],
    concepts: ["synthesis", "startup strategy", "durable value", "new futures"],
    body: [
      "Zero to One is best understood as a connected philosophy of startup creation. Its pieces reinforce one another. The company begins with a secret: a true and important opportunity that consensus has missed. It uses that secret to create new value rather than compete as an interchangeable entrant. It starts in a focused market where it can win. It builds durable advantage through technology, networks, scale, brand, or distribution. It is guided by a definite view of the future.",
      "Competition is the negative image of the whole system. If a startup lacks a secret, it competes on obvious ideas. If it lacks differentiation, it competes on price and features. If it lacks a beachhead, it competes for vague demand. If it lacks distribution, it competes for attention inefficiently. If it lacks durability, competitors copy away the value.",
      "The book's deepest practical value is as a diagnostic lens. When a company feels weak, ask which part of the system is missing. Is the insight too obvious? Is the first market too broad? Is the product valuable but unreachable? Is the advantage real but not durable? Is the founder's vision specific or merely optimistic? Is contrarian language hiding poor evidence?",
      "For a founder, the operating system can be compressed into a sequence. Find a real secret. Choose a winnable beachhead. Build something meaningfully better for that market. Design distribution as seriously as product. Compound an advantage. Expand from strength. Keep the future thesis definite enough to guide action and humble enough to update.",
      "For a non-founder, the book remains useful. It teaches how to evaluate companies, career paths, technologies, and opportunities. Look for unique value, power law leverage, hidden truths, timing, and distribution. Be cautious around crowded status games. Do not mistake consensus for safety or rebellion for wisdom.",
      "Months later, remember the central discipline: create new value and build a position that lets that value endure. Everything else in the book serves that idea."
    ],
    support: [
      {
        type: "framework",
        title: "Zero to One strategy lens",
        stages: [
          { name: "Secret", description: "What true, important opportunity has consensus missed?" },
          { name: "Creation", description: "What new capability or category does the company create?" },
          { name: "Beachhead", description: "Where can it win decisively first?" },
          { name: "Advantage", description: "Why will the position become durable?" },
          { name: "Distribution", description: "How will value reach customers repeatedly?" },
          { name: "Expansion", description: "How does the first win compound into larger markets?" }
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text:
          "Great startups do not merely compete inside the present. They discover a non-obvious truth, create unique value around it, win a focused market, and compound advantage until a new category feels inevitable."
      },
      {
        type: "comparisonTable",
        title: "Diagnostic questions",
        columns: ["Theme", "Question"],
        rows: [
          ["Competition", "Are we escaping comparison or inviting it?"],
          ["Monopoly", "What makes this company uniquely valuable and durable?"],
          ["Secrets", "What do we believe that is true, important, and not obvious?"],
          ["Distribution", "How does the product actually reach and persuade customers?"],
          ["Power law", "Which few decisions could dominate the outcome?"]
        ]
      }
    ],
    whyThisMatters:
      "The book is most useful when its ideas are held together as a strategy system rather than remembered as isolated provocative claims.",
    practicalApplication:
      "Use the final strategy lens to evaluate one startup, investment, product idea, or career bet you are considering.",
    commonMistakes: [
      "Remembering slogans while missing the strategic system",
      "Using monopoly or contrarian language without customer value",
      "Ignoring distribution after admiring the product"
    ],
    misconceptions: [
      {
        misconception: "Zero to One is mainly a celebration of bold founders.",
        correction:
          "It is a strategy argument about unique value, hidden truth, durable advantage, and deliberate progress."
      }
    ],
    lens:
      "When applying the book, keep asking whether the idea creates something new, wins somewhere specific, and compounds into durable value.",
    anchors: [
      "Create new value, win a focused market, and compound durable advantage.",
      "Contrarian thinking matters only when it discovers truth that can be built into the world."
    ],
    takeaways: [
      "Zero to One is a startup strategy system.",
      "Secrets, monopoly, power laws, timing, founders, and distribution connect.",
      "The mature application is independent thought disciplined by evidence."
    ],
    examples: [
      "A startup diagnosis reveals strong product but weak distribution.",
      "A career bet improves when evaluated for power law learning and market timing.",
      "An investor studies whether a company has a real secret or only category excitement."
    ],
    relatedSections: ["creating-something-new", "contrarian-thinking-without-theater"]
  })
];

export const zeroToOne: Book = {
  slug: "zero-to-one",
  title: "Zero to One",
  author: "Peter Thiel",
  category: "Startups / Business Strategy / Innovation",
  difficulty: "Intermediate",
  completionTime: "6h 50m",
  progress: 0,
  coverTone:
    "from-slate-100 via-cyan-100 to-lime-100 dark:from-slate-950/60 dark:via-cyan-950/35 dark:to-lime-950/30",
  description:
    "A deep curriculum on startup strategy, monopoly, secrets, power laws, founder vision, distribution, and creating fundamentally new value.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(zeroToOneSections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "startups",
    "monopoly",
    "competition",
    "innovation",
    "secrets",
    "technology",
    "power laws",
    "founder thinking",
    "business strategy",
    "distribution",
    "contrarian thinking"
  ],
  intendedOutcomes: [
    "Understand why Thiel argues competition can be destructive",
    "Distinguish horizontal progress from vertical progress",
    "Understand monopoly as durable unique value creation",
    "Recognize the role of secrets in startup strategy",
    "Apply power law thinking to focus and market choice",
    "Understand why distribution matters as much as product",
    "Use contrarian thinking without turning it into empty rebellion"
  ],
  promise:
    "After completing this curriculum, you will understand Peter Thiel's philosophy of startups, monopoly, secrets, technology, competition, power laws, founder thinking, and why truly valuable companies create something fundamentally new rather than merely competing inside existing markets.",
  recommendedAudience: [
    "Founders and operators studying startup strategy",
    "Investors evaluating technology companies",
    "Product leaders thinking about positioning and distribution",
    "Readers who want to apply contrarian thinking with discipline"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public concepts and startup strategy themes. It does not reproduce long passages or chapter text.",
  sections: zeroToOneSections
};
