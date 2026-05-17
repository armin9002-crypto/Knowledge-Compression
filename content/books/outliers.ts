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
    id: "myth-self-made-outlier",
    title: "The Myth of the Self-Made Outlier",
    eyebrow: "Foundation",
    minutes: 32,
    summary:
      "Gladwell challenges success stories that isolate the individual from the timing, opportunity, culture, and systems that made achievement possible.",
    objectives: [
      "Understand why success is rarely purely individual",
      "See talent as real but incomplete",
      "Read success stories through context"
    ],
    concepts: ["outliers", "context", "talent", "opportunity"],
    body: [
      "Outliers begins by questioning the most familiar success story: an exceptional person rises because of exceptional talent, grit, intelligence, and ambition. Gladwell does not deny those qualities. His point is that they are never the whole story. Extraordinary achievement usually emerges when ability meets unusual opportunity.",
      "This shift changes the unit of analysis. Instead of asking only what made a person special, we ask what made their situation special. What access did they receive? What historical window opened? What cultural habits shaped them? What family background taught them how to navigate institutions? What system selected them early and then gave them more chances to improve?",
      "Success stories often hide enabling conditions because those conditions become invisible once the person has matured into excellence. The great programmer eventually looks like someone who was simply born brilliant. The elite athlete looks naturally dominant. The executive looks self-made. But behind the finished outlier is usually a sequence of accumulated opportunities.",
      "The mature reading is not that winners are frauds or that effort does not matter. Outliers are often talented people who worked extremely hard. The deeper point is that talent needs a runway. If the runway is missing, ability may never become visible."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Talent plus conditions",
        not: "Outliers are talentless beneficiaries of luck.",
        but: "Outliers are often talented people whose talent met unusually favorable conditions."
      },
      {
        type: "expandedExample",
        scenario: "A founder is celebrated as a lone genius after building a major company.",
        defaultApproach:
          "Explain the success almost entirely through personality, intelligence, and hustle.",
        betterApproach:
          "Study the founder's timing, early access, mentors, market window, capital environment, and cultural training alongside individual ability.",
        whyItWorks:
          "The fuller account preserves agency while showing why similar talent without similar conditions may not produce the same result."
      }
    ],
    whyThisMatters:
      "A contextual view of success makes judgment more accurate and system design more humane.",
    practicalApplication:
      "When studying any success, identify the individual qualities and the enabling conditions rather than choosing only one explanation.",
    commonMistakes: [
      "Reducing success entirely to luck",
      "Reducing success entirely to personal virtue",
      "Judging unsuccessful people without considering starting conditions"
    ],
    misconceptions: [
      {
        misconception: "Gladwell is saying effort and talent do not matter.",
        correction:
          "He is saying effort and talent are shaped, amplified, or constrained by opportunity and context."
      }
    ],
    lens:
      "Ask what had to be true around the person for their ability to become visible.",
    anchors: [
      "Success is easier to understand when talent is placed inside context.",
      "The self-made story often hides the system that made the self."
    ],
    takeaways: [
      "Outliers are produced by talent and conditions together.",
      "Achievement stories often conceal enabling structures.",
      "Context improves judgment without erasing responsibility."
    ],
    examples: [
      "A gifted programmer receives unusual early access to computing.",
      "A student benefits from institutions that recognize and develop talent.",
      "A business leader enters a market at the moment it becomes fertile."
    ],
    relatedSections: ["accumulated-advantage", "rethinking-meritocracy"]
  }),
  lesson({
    id: "accumulated-advantage",
    title: "Accumulated Advantage: How Small Edges Compound",
    eyebrow: "Compounding",
    minutes: 33,
    summary:
      "Small early advantages can compound into major differences when systems reward those who are already slightly ahead.",
    objectives: [
      "Understand accumulated advantage",
      "Recognize early selection effects",
      "Apply the idea across sports, school, career, and business"
    ],
    concepts: ["accumulated advantage", "selection", "compounding", "confidence"],
    body: [
      "One of Gladwell's most important ideas is that advantage often begins small. A child slightly older than peers in a youth sports cohort may be selected for better coaching. Better coaching produces better skill. Better skill produces more playing time. More playing time produces confidence and visibility. What began as a small edge becomes a real performance difference.",
      "Systems often reward those who are already ahead. The top students get enrichment. The promising employees get stretch assignments. The early winners get mentors, capital, and attention. Over time, the original cause becomes hard to see because the advantage has turned into genuine competence.",
      "This pattern appears beyond sports. In school, early reading confidence can become more reading, better vocabulary, and stronger academic identity. In careers, one early prestigious role can create references and networks that lead to the next. In investing and business, early capital or distribution can create more opportunity to learn and survive.",
      "Accumulated advantage is not a conspiracy theory. It is a compounding mechanism. It shows how systems can unintentionally magnify small differences until they look like destiny."
    ],
    support: [
      {
        type: "diagram",
        title: "The advantage loop",
        steps: [
          "Small early edge",
          "Early selection",
          "Better coaching or resources",
          "More practice and confidence",
          "Visible performance gap",
          "Further opportunity"
        ]
      },
      {
        type: "expandedExample",
        scenario: "A junior employee receives one visible project early.",
        defaultApproach:
          "Assume later promotions prove they were obviously superior from the start.",
        betterApproach:
          "Notice how the early project created trust, feedback, senior exposure, and future assignments that compounded.",
        whyItWorks:
          "It reveals how real skill can be produced by repeated opportunity."
      }
    ],
    whyThisMatters:
      "Understanding accumulated advantage helps schools, companies, and individuals design systems that develop more people rather than only amplifying early winners.",
    practicalApplication:
      "Look for places where early selection is deciding long-term opportunity, then create second chances, wider scouting, or deliberate access.",
    commonMistakes: [
      "Assuming early winners were always destined to win",
      "Ignoring confidence and coaching as performance multipliers",
      "Designing systems that select too early and then call the result merit"
    ],
    misconceptions: [
      {
        misconception: "Accumulated advantage means later skill is fake.",
        correction:
          "The skill can be real; the point is that opportunity helped produce it."
      }
    ],
    lens:
      "Ask what early advantages are being compounded by the system before calling the final ranking natural.",
    anchors: [
      "Small early edges can become large real differences.",
      "Systems often manufacture the talent they later appear to merely discover."
    ],
    takeaways: [
      "Early advantage can compound through selection and resources.",
      "Opportunity creates skill as well as reveals it.",
      "Fairer systems broaden access to development."
    ],
    examples: [
      "Sports teams that select by age cohort can magnify maturity differences.",
      "Schools that track early may lock in confidence gaps.",
      "Startups with early investor access can learn through failures others cannot afford."
    ],
    relatedSections: ["education-unequal-starting-lines", "rethinking-meritocracy"]
  }),
  lesson({
    id: "timing-historical-windows",
    title: "Timing, Birthdates, and Historical Windows",
    eyebrow: "Timing",
    minutes: 32,
    summary:
      "Historical windows shape opportunity because some generations encounter technologies, markets, and institutions at unusually fertile moments.",
    objectives: [
      "Understand timing as a success variable",
      "Recognize historical windows",
      "See how timing interacts with skill and ambition"
    ],
    concepts: ["timing", "historical window", "generation", "opportunity"],
    body: [
      "Gladwell pays close attention to when people are born, not because birthdate is magical, but because historical timing shapes what is available. A person can be the right age when a new technology becomes accessible, when a market opens, when a profession changes, or when an institution is expanding.",
      "Timing interacts with ambition. Being born into a technological wave does not guarantee success, but it can create a rare opening for those prepared to use it. A programmer who comes of age when computers are newly available faces a different world from someone equally talented born too early or too late.",
      "Historical windows appear in entrepreneurship, finance, entertainment, science, and careers. A generation that enters the workforce during a boom may build networks and confidence quickly. Another entering during a recession may face delayed earnings, weaker mobility, and different risk tolerance. The same personal traits meet different opportunity landscapes.",
      "This lesson encourages humility. We often interpret success as proof of superior choices while underestimating the historical conditions that made those choices available."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Timing effects",
        columns: ["Window", "Opportunity created", "Risk"],
        rows: [
          ["Technology boom", "New tools and markets before incumbents settle", "Hype and rapid obsolescence"],
          ["Economic expansion", "Hiring, capital, and promotion velocity", "Confusing tailwind with pure skill"],
          ["Institutional change", "New roles and rules", "Unclear career paths"],
          ["Cultural shift", "New audience demand", "Crowded imitation once visible"]
        ]
      },
      {
        type: "mentalModel",
        name: "Right age for the wave",
        explanation:
          "Some opportunities reward people who are old enough to act and young enough to adapt when a new window opens.",
        useWhen:
          "Evaluating why one cohort or generation seems overrepresented in a field."
      }
    ],
    whyThisMatters:
      "Timing helps explain why similar talent and effort can produce very different outcomes across generations.",
    practicalApplication:
      "When planning a career or business, ask what historical or technological window is opening now and what age, skill, or position it favors.",
    commonMistakes: [
      "Treating timing as destiny",
      "Ignoring timing because it feels less flattering than talent",
      "Copying strategies from a different historical window"
    ],
    misconceptions: [
      {
        misconception: "Timing means success is just luck.",
        correction:
          "Timing creates openings, but people still need skill, effort, judgment, and access to use them."
      }
    ],
    lens:
      "Ask whether a person's success came from talent meeting a rare historical opening.",
    anchors: [
      "Timing shapes which talents become valuable.",
      "Historical windows reward preparation unevenly."
    ],
    takeaways: [
      "Birth cohort and historical moment can affect achievement.",
      "Technological and economic windows create opportunity.",
      "Timing works with skill rather than replacing it."
    ],
    examples: [
      "AI creates new career openings for people able to learn quickly now.",
      "A recession changes early-career opportunity and risk tolerance.",
      "A new platform rewards creators who arrive before norms harden."
    ],
    relatedSections: ["opportunity-structures", "intelligence-thresholds"]
  }),
  lesson({
    id: "practice-reality",
    title: "The 10,000-Hour Idea and the Reality of Practice",
    eyebrow: "Mastery",
    minutes: 33,
    summary:
      "Sustained practice matters enormously, but the deeper lesson is that practice requires access, feedback, timing, and an environment that makes repetition possible.",
    objectives: [
      "Understand practice as a major ingredient in mastery",
      "Avoid reducing mastery to a magic number",
      "Recognize the opportunity structure behind practice"
    ],
    concepts: ["practice", "mastery", "feedback", "access"],
    body: [
      "The 10,000-hour idea became the most famous shorthand from Outliers, but shorthand can flatten the argument. Gladwell's deeper point is not that a precise number mechanically produces mastery. It is that extraordinary performance usually requires sustained, high-volume practice, and that this practice is itself an opportunity.",
      "Hours alone are not magic. Practice quality matters. Feedback matters. Coaching matters. Starting age matters. Tools and access matter. The ability to spend thousands of hours on a skill often depends on family support, institutional access, unusual timing, or a setting that rewards repeated effort.",
      "This is why practice belongs in a sociology of success, not only a psychology of grit. The question is not only who has discipline. It is who gets access to the piano, the computer terminal, the laboratory, the court, the mentor, the safe time, or the early audience.",
      "The practical use of the idea is serious but modest. Mastery requires repetition over time. But if you want to build mastery, you must build a practice environment: feedback loops, protected hours, increasing challenge, and access to better standards."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Practice hours versus practice ecology",
        not: "A magic total that automatically converts effort into mastery.",
        but: "A sustained environment of access, feedback, challenge, time, and motivation that makes mastery possible."
      },
      {
        type: "application",
        context: "Building a practice ecology",
        steps: [
          "Protect regular time for the skill.",
          "Create feedback from people or results better than your current level.",
          "Increase difficulty gradually instead of repeating only comfortable work.",
          "Seek environments where practice is visible and rewarded."
        ],
        result:
          "Practice becomes a system rather than a heroic act of willpower."
      }
    ],
    whyThisMatters:
      "The number became famous, but the real lesson is that mastery is built by repeated practice under enabling conditions.",
    practicalApplication:
      "Instead of counting hours alone, inspect whether your practice environment includes feedback, challenge, access, and protected time.",
    commonMistakes: [
      "Treating 10,000 hours as a formula",
      "Ignoring feedback quality",
      "Blaming lack of mastery only on motivation when access is missing"
    ],
    misconceptions: [
      {
        misconception: "Anyone can master anything by logging enough hours.",
        correction:
          "Sustained practice matters, but ability, feedback, access, timing, and environment shape what practice can produce."
      }
    ],
    lens:
      "Ask what makes sustained practice possible before praising or blaming individual discipline.",
    anchors: [
      "Mastery requires practice, but practice requires opportunity.",
      "The deeper point is practice ecology, not a magic number."
    ],
    takeaways: [
      "Practice is central to mastery.",
      "Quality and feedback matter as much as quantity.",
      "Access often precedes the ability to practice deeply."
    ],
    examples: [
      "A young programmer improves through rare access to computers.",
      "A musician develops through repeated performance and coaching.",
      "A salesperson improves faster when calls are reviewed with a skilled manager."
    ],
    relatedSections: ["opportunity-structures", "meaningful-work-mastery"]
  }),
  lesson({
    id: "opportunity-structures",
    title: "Opportunity Structures: Access Before Achievement",
    eyebrow: "Access",
    minutes: 32,
    summary:
      "Achievement often appears before us as personal merit, but access to mentors, institutions, networks, geography, and tools frequently comes first.",
    objectives: [
      "Recognize how access shapes achievement",
      "Understand why opportunity later looks like merit",
      "Build or seek better opportunity structures"
    ],
    concepts: ["access", "mentors", "institutions", "networks"],
    body: [
      "Gladwell's account of success repeatedly returns to access. Before achievement can be measured, someone must get near the resources that develop it. A mentor notices them. A school opens a door. A family provides time. A city contains the right industry. A network passes along an opportunity.",
      "Opportunity becomes invisible after it has matured. Once a person performs well, observers focus on the performance. The hours of coaching, institutional comfort, introductions, and early chances fade into the background. Merit is real, but it may have been cultivated by access.",
      "This matters for individuals because seeking opportunity structures is more practical than simply trying harder in isolation. The right environment can accelerate learning, raise standards, and create visibility. It matters for organizations because talent pipelines widen when access is intentionally broadened.",
      "Opportunity is not only permission. It is repeated exposure to higher standards, useful feedback, and situations where performance can be seen. A person who never enters those rooms may remain underestimated."
    ],
    support: [
      {
        type: "framework",
        title: "Opportunity structure map",
        stages: [
          { name: "Tools", description: "What resources are needed to practice seriously?" },
          { name: "People", description: "Who can teach, sponsor, or evaluate?" },
          { name: "Institutions", description: "Which schools, firms, programs, or platforms open doors?" },
          { name: "Visibility", description: "Where can progress be noticed and rewarded?" }
        ]
      },
      {
        type: "expandedExample",
        scenario: "A first-generation professional enters a complex corporate environment.",
        defaultApproach:
          "Assume advancement depends only on doing assigned work well.",
        betterApproach:
          "Seek mentors, learn informal promotion norms, understand decision-makers, and build visible evidence of contribution.",
        whyItWorks:
          "The person learns the opportunity structure rather than relying only on effort."
      }
    ],
    whyThisMatters:
      "Access helps determine whose talent gets developed, seen, and rewarded.",
    practicalApplication:
      "Identify one skill or ambition and map the tools, people, institutions, and visibility needed for it to grow.",
    commonMistakes: [
      "Assuming hard work alone creates access",
      "Treating informal rules as obvious to everyone",
      "Ignoring geography and networks as opportunity variables"
    ],
    misconceptions: [
      {
        misconception: "Opportunity is separate from achievement.",
        correction:
          "Opportunity often shapes the practice, standards, and visibility that produce achievement."
      }
    ],
    lens:
      "Before judging outcomes, inspect who had access to the developmental system.",
    anchors: [
      "Access often precedes achievement.",
      "Opportunity becomes invisible once it matures into performance."
    ],
    takeaways: [
      "Mentors, institutions, geography, and networks shape outcomes.",
      "Opportunity can look like merit after years of compounding.",
      "Better systems deliberately broaden access."
    ],
    examples: [
      "A student gains confidence through a teacher's sponsorship.",
      "A founder benefits from being near capital and experienced operators.",
      "A young employee accelerates through a manager who teaches informal rules."
    ],
    relatedSections: ["family-class-language", "education-unequal-starting-lines"]
  }),
  lesson({
    id: "cultural-inheritance",
    title: "Cultural Inheritance and Hidden Scripts",
    eyebrow: "Culture",
    minutes: 32,
    summary:
      "Culture shapes inherited habits around authority, risk, effort, communication, and conflict, influencing outcomes without determining them.",
    objectives: [
      "Understand culture as inherited scripts",
      "Avoid treating culture as destiny",
      "Recognize how norms shape behavior"
    ],
    concepts: ["culture", "inheritance", "scripts", "norms"],
    body: [
      "Outliers argues that people carry cultural inheritance into modern settings. This inheritance can include assumptions about authority, work, conflict, family obligation, risk, respect, persistence, and communication. These assumptions may be invisible to the people who hold them because they feel like common sense.",
      "Culture is not destiny. Gladwell's point is contextual, not fatalistic. Cultural patterns can help in some environments and hurt in others. A habit of deference may support harmony in one setting and create danger in another if speaking up is necessary. A tradition of hard work may produce discipline but also over-compliance if conditions have changed.",
      "The practical skill is to name the script. What did your environment teach you about asking questions? Challenging authority? Negotiating? Taking risks? Admitting confusion? Handling conflict? These hidden lessons can shape professional and educational outcomes.",
      "Organizations also have cultures. They teach what is safe to say, who gets heard, how mistakes are treated, and whether authority can be challenged. Culture lives in behavior, not slogans."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Cultural scripts",
        columns: ["Script area", "Possible effect"],
        rows: [
          ["Authority", "Deference can preserve order or suppress necessary dissent"],
          ["Risk", "Caution can protect stability or limit opportunity"],
          ["Conflict", "Avoidance can maintain harmony or hide problems"],
          ["Effort", "Discipline can compound skill or normalize exploitation"],
          ["Communication", "Directness can clarify or offend depending on context"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Context versus destiny",
        not: "A fixed cultural explanation that traps people in stereotypes.",
        but: "An inherited set of habits and assumptions that interacts with institutions and can be examined."
      }
    ],
    whyThisMatters:
      "Cultural awareness helps explain behavior more accurately and design environments where hidden scripts do not create avoidable failure.",
    practicalApplication:
      "Identify one inherited assumption about authority, risk, conflict, or effort and ask whether it fits your current environment.",
    commonMistakes: [
      "Using culture as a stereotype",
      "Ignoring inherited norms because they feel like common sense",
      "Assuming the same script works equally everywhere"
    ],
    misconceptions: [
      {
        misconception: "Culture explains everything about a person.",
        correction:
          "Culture is one layer of context, interacting with individual choice, institutions, and circumstance."
      }
    ],
    lens:
      "Ask what hidden script is operating before judging behavior as purely personal.",
    anchors: [
      "Culture carries scripts into new environments.",
      "Culture is context, not destiny."
    ],
    takeaways: [
      "Inherited norms shape communication and behavior.",
      "Cultural scripts can help or hinder depending on setting.",
      "Awareness allows adaptation."
    ],
    examples: [
      "A team learns to invite dissent because deference is suppressing risk signals.",
      "A professional learns negotiation scripts not taught at home.",
      "A company discovers its stated values are contradicted by meeting behavior."
    ],
    relatedSections: ["family-class-language", "intelligence-thresholds"]
  }),
  lesson({
    id: "family-class-language",
    title: "Family, Class, and the Language of Advantage",
    eyebrow: "Class",
    minutes: 33,
    summary:
      "Family and class background can shape institutional comfort, negotiation, expectations, and the invisible language of opportunity.",
    objectives: [
      "Understand class as practical knowledge",
      "Recognize institutional comfort as advantage",
      "Apply the lesson to education and professional life"
    ],
    concepts: ["class", "family", "institutional comfort", "practical intelligence"],
    body: [
      "Gladwell shows that family background matters not only through money, but through practical knowledge. Some children learn early how to talk to authority figures, ask for accommodations, negotiate, explain themselves, and treat institutions as responsive. Others learn deference, silence, or distance from authority.",
      "This invisible knowledge can become a major advantage in school and professional life. A student who comfortably asks a teacher for clarification may get more help. A young employee who understands office norms may get better feedback. A founder who knows how investors talk may navigate fundraising differently.",
      "Class advantage often feels like confidence because the person knows the language of the environment. They understand what can be requested, which rules are flexible, how to advocate without seeming disrespectful, and how to interpret institutional signals.",
      "This does not mean people from less advantaged backgrounds lack ability. It means they may be asked to decode a hidden curriculum while also performing the official task. Recognizing that hidden curriculum makes development more fair and more practical."
    ],
    support: [
      {
        type: "expandedExample",
        scenario: "Two equally capable students struggle with a confusing assignment.",
        defaultApproach:
          "Assume the student who asks for help is more motivated or naturally confident.",
        betterApproach:
          "Notice that one student may have been taught that authority is approachable while another was taught not to bother or challenge adults.",
        whyItWorks:
          "It reveals how family scripts can affect access to support."
      },
      {
        type: "framework",
        title: "Hidden curriculum of advantage",
        stages: [
          { name: "Ask", description: "Knowing when and how to request help." },
          { name: "Negotiate", description: "Understanding which terms are flexible." },
          { name: "Translate", description: "Reading institutional language and expectations." },
          { name: "Advocate", description: "Presenting needs or achievements in accepted forms." }
        ]
      }
    ],
    whyThisMatters:
      "Invisible social knowledge can shape outcomes as powerfully as formal skill.",
    practicalApplication:
      "In any institution, identify the hidden rules that successful insiders seem to know and make them explicit for yourself or others.",
    commonMistakes: [
      "Reducing class advantage only to money",
      "Mistaking institutional comfort for natural superiority",
      "Leaving hidden rules hidden and then calling outcomes neutral"
    ],
    misconceptions: [
      {
        misconception: "If rules are written down, everyone has equal access.",
        correction:
          "Many decisive rules are informal: how to ask, negotiate, interpret, and advocate."
      }
    ],
    lens:
      "Look for the invisible language of institutions before judging performance alone.",
    anchors: [
      "Class can transmit practical institutional knowledge.",
      "Hidden rules shape visible achievement."
    ],
    takeaways: [
      "Family background shapes confidence and institutional comfort.",
      "Advantage often appears as knowing how to ask.",
      "Making hidden rules explicit can widen opportunity."
    ],
    examples: [
      "A first-generation employee learns promotion norms through mentorship.",
      "A student discovers office hours are expected, not intrusive.",
      "A founder learns investor language from a well-connected advisor."
    ],
    relatedSections: ["opportunity-structures", "education-unequal-starting-lines"]
  }),
  lesson({
    id: "meaningful-work-mastery",
    title: "Meaningful Work and the Roots of Mastery",
    eyebrow: "Work",
    minutes: 31,
    summary:
      "Meaningful work often combines autonomy, complexity, and a visible connection between effort and reward, building persistence across generations and careers.",
    objectives: [
      "Understand what makes work meaningful",
      "Connect meaningful work to mastery",
      "Recognize family work cultures"
    ],
    concepts: ["meaningful work", "autonomy", "complexity", "effort and reward"],
    body: [
      "Gladwell treats meaningful work as a powerful developmental force. Work becomes meaningful when it offers autonomy, complexity, and a visible link between effort and reward. People are more likely to persist when they can make decisions, solve nontrivial problems, and see that effort changes outcomes.",
      "This matters for family and culture because children often inherit expectations about work. A family business, craft tradition, farm, professional household, or entrepreneurial environment can teach that work is not merely obedience but problem-solving and agency.",
      "Meaningful work builds mastery because it invites attention. If effort seems pointless, discipline erodes. If effort visibly improves outcomes, people learn persistence. This does not make all hard work noble. Repetitive, powerless labor can exhaust without developing mastery.",
      "The lesson applies to career choice and management. People grow faster in roles where they own decisions, face real complexity, and receive feedback that connects action to result. Organizations that strip autonomy and feedback from work should not be surprised when motivation declines."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Meaningful work ingredients",
        columns: ["Ingredient", "Why it matters"],
        rows: [
          ["Autonomy", "People learn agency by making consequential choices"],
          ["Complexity", "Skill grows through nontrivial problems"],
          ["Effort-reward link", "Persistence strengthens when effort visibly matters"],
          ["Feedback", "Improvement requires seeing the effect of action"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "A manager wants a junior team to become more capable.",
        defaultApproach:
          "Give narrow tasks with little context and judge motivation when energy fades.",
        betterApproach:
          "Give ownership over a defined problem, explain the stakes, and create feedback showing how decisions affect outcomes.",
        whyItWorks:
          "The work becomes developmental rather than merely assigned."
      }
    ],
    whyThisMatters:
      "Meaningful work explains why some environments produce persistence and mastery while others produce compliance and fatigue.",
    practicalApplication:
      "Assess a role or project for autonomy, complexity, feedback, and a visible link between effort and reward.",
    commonMistakes: [
      "Assuming all hard work builds mastery",
      "Ignoring autonomy as a motivational force",
      "Designing jobs with no visible connection between effort and outcome"
    ],
    misconceptions: [
      {
        misconception: "Meaningful work means easy or passion-filled work.",
        correction:
          "It often means difficult work where effort, choice, complexity, and reward are connected."
      }
    ],
    lens:
      "Ask whether the work teaches agency or only demands compliance.",
    anchors: [
      "Meaningful work links autonomy, complexity, and effort to reward.",
      "Mastery grows where effort visibly matters."
    ],
    takeaways: [
      "Meaningful work can cultivate persistence.",
      "Autonomy and complexity matter for development.",
      "Work culture can be inherited across families and organizations."
    ],
    examples: [
      "A craft apprenticeship builds judgment through feedback.",
      "A startup role accelerates growth through ownership and complexity.",
      "A low-autonomy role can drain motivation despite high effort."
    ],
    relatedSections: ["practice-reality", "family-class-language"]
  }),
  lesson({
    id: "education-unequal-starting-lines",
    title: "Education, Systems, and Unequal Starting Lines",
    eyebrow: "Education",
    minutes: 33,
    summary:
      "Schools can amplify or reduce inequality depending on resources, calendars, expectations, support, and the developmental opportunities they provide.",
    objectives: [
      "Understand systemic achievement gaps",
      "Recognize how school structures shape opportunity",
      "Avoid reducing educational outcomes to motivation alone"
    ],
    concepts: ["education", "systems", "inequality", "starting lines"],
    body: [
      "Outliers pushes readers to see education as a system of opportunity, not only a test of motivation. Students arrive with different resources, home support, language exposure, institutional comfort, summer experiences, and expectations. Schools can either reduce those gaps or magnify them.",
      "Calendar structure matters because learning does not happen only during class. Long breaks, enrichment opportunities, tutoring, stable routines, and safe environments shape whether skills keep developing. When students have unequal access outside school, equal classroom time may not be enough.",
      "Expectations matter too. Students often internalize what adults assume about them. Support matters because confidence and skill grow through feedback, not merely exhortation. Resources matter because practice and attention require books, time, safety, nutrition, and teachers with bandwidth.",
      "This does not deny student effort. It places effort inside a developmental ecology. A fair system asks how to create more conditions where effort can actually compound."
    ],
    support: [
      {
        type: "framework",
        title: "Educational opportunity variables",
        stages: [
          { name: "Time", description: "How much structured learning and support is available?" },
          { name: "Resources", description: "What materials, safety, food, and technology support learning?" },
          { name: "Expectations", description: "What standards and beliefs do adults communicate?" },
          { name: "Continuity", description: "Does learning continue outside formal school hours?" }
        ]
      },
      {
        type: "keyDistinction",
        title: "Equal treatment versus equal development",
        not: "Giving everyone the same surface conditions and assuming fairness follows.",
        but: "Understanding what different students need for effort to compound."
      }
    ],
    whyThisMatters:
      "Educational systems shape future opportunity by determining whose abilities get developed early.",
    practicalApplication:
      "When evaluating achievement gaps, ask what developmental resources differed before judging motivation or ability.",
    commonMistakes: [
      "Explaining gaps only through student effort",
      "Ignoring summer, home, and resource differences",
      "Confusing equal rules with equal opportunity"
    ],
    misconceptions: [
      {
        misconception: "Systemic explanations deny personal responsibility.",
        correction:
          "They explain how responsibility is supported or undermined by conditions."
      }
    ],
    lens:
      "Look at the developmental system behind the score.",
    anchors: [
      "Schools can amplify or reduce unequal starting lines.",
      "Effort compounds only when conditions allow it to compound."
    ],
    takeaways: [
      "Education is an opportunity system.",
      "Resources, calendars, expectations, and support matter.",
      "Achievement gaps are often developmental before they are motivational."
    ],
    examples: [
      "Summer enrichment widens reading gaps.",
      "Tutoring and stable routines support compounding learning.",
      "High expectations with real support can change academic identity."
    ],
    relatedSections: ["accumulated-advantage", "rethinking-meritocracy"]
  }),
  lesson({
    id: "intelligence-thresholds",
    title: "Intelligence, Thresholds, and Practical Success",
    eyebrow: "Ability",
    minutes: 32,
    summary:
      "Intelligence matters, but beyond certain thresholds practical intelligence, communication, creativity, persistence, and opportunity often matter more.",
    objectives: [
      "Understand threshold effects",
      "Avoid overvaluing raw IQ",
      "Recognize practical intelligence and context"
    ],
    concepts: ["intelligence", "thresholds", "practical intelligence", "communication"],
    body: [
      "Gladwell complicates the idea that more raw intelligence always predicts more success. Intelligence matters; certain fields require high cognitive ability. But beyond a threshold, additional IQ may not explain outcomes as well as practical judgment, creativity, communication, opportunity, and social navigation.",
      "This is easy to see in business and leadership. A technically brilliant person may struggle if they cannot persuade, manage conflict, read incentives, or choose markets. A leader may need enough analytical power to understand complexity, but success also depends on timing, trust, hiring, and decision-making under ambiguity.",
      "Practical intelligence includes knowing how to ask, negotiate, read rooms, communicate needs, and translate knowledge into action. It is often learned through family, culture, institutions, and experience. That makes it part of context, not merely personality.",
      "The lesson is not anti-intellectual. It is anti-reductionist. Raw intelligence is a powerful ingredient, but achievement rarely follows a single scale."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Cognitive ability versus practical intelligence",
        not: "Treating testable intelligence as the only serious success variable.",
        but: "Recognizing that communication, judgment, social navigation, and opportunity shape how intelligence becomes useful."
      },
      {
        type: "comparisonTable",
        title: "Beyond the threshold",
        columns: ["Domain", "Additional variables after baseline ability"],
        rows: [
          ["Business", "Market timing, persuasion, hiring, risk judgment"],
          ["Technical careers", "Collaboration, product sense, communication"],
          ["Leadership", "Trust, decision quality, emotional regulation"],
          ["Creative work", "Taste, persistence, audience access, originality"]
        ]
      }
    ],
    whyThisMatters:
      "Overvaluing raw intelligence can obscure the social, practical, and contextual skills that convert ability into achievement.",
    practicalApplication:
      "For a goal requiring ability, identify the non-IQ variables that will determine whether ability translates into results.",
    commonMistakes: [
      "Assuming the smartest person will naturally win",
      "Ignoring communication and institutional navigation",
      "Treating practical intelligence as innate rather than learned"
    ],
    misconceptions: [
      {
        misconception: "Threshold effects mean intelligence does not matter.",
        correction:
          "Intelligence matters greatly up to a point; beyond that point other variables can dominate."
      }
    ],
    lens:
      "Ask what converts ability into real-world effectiveness.",
    anchors: [
      "Intelligence matters, but it is not the whole achievement equation.",
      "Beyond thresholds, context and practical judgment often decide outcomes."
    ],
    takeaways: [
      "Raw intelligence has limits as an explanation.",
      "Practical intelligence shapes success.",
      "Communication and opportunity help ability become useful."
    ],
    examples: [
      "A brilliant engineer grows faster after learning product communication.",
      "A founder with enough technical depth wins through market judgment.",
      "A student succeeds by learning how institutions work."
    ],
    relatedSections: ["family-class-language", "final-talent-plus-context"]
  }),
  lesson({
    id: "rethinking-meritocracy",
    title: "Rethinking Meritocracy",
    eyebrow: "Fairness",
    minutes: 33,
    summary:
      "Meritocracy is incomplete when starting lines differ; recognizing context allows societies and organizations to produce more excellence, not less.",
    objectives: [
      "Understand why meritocracy is incomplete",
      "Preserve effort while recognizing context",
      "Think about fairness and excellence together"
    ],
    concepts: ["meritocracy", "fairness", "opportunity", "excellence"],
    body: [
      "Outliers does not ask readers to stop valuing excellence. It asks them to stop pretending that excellence emerges from a neutral field. Meritocracy is incomplete when some people receive better development, access, timing, language, safety, and second chances before merit is measured.",
      "Recognizing context is not the same as denying effort. It is an argument for better opportunity design. If talent is widely distributed but opportunity is not, then better systems can produce more outliers by giving more people the conditions in which effort can compound.",
      "This changes how we judge winners and losers. Winners may deserve respect for effort and skill while also owing something to context. Those who do not win may not lack potential; they may have lacked a runway. Humility and responsibility can coexist.",
      "In organizations, rethinking meritocracy means inspecting selection systems, promotion criteria, mentorship access, informal networks, and who gets developmental assignments. In education, it means looking at calendars, resources, support, and expectations. In society, it means asking how many outliers are being wasted because opportunity is narrow."
    ],
    support: [
      {
        type: "framework",
        title: "Meritocracy audit",
        stages: [
          { name: "Selection", description: "Who gets identified early, and by what criteria?" },
          { name: "Development", description: "Who receives coaching, feedback, and stretch opportunities?" },
          { name: "Visibility", description: "Whose work is noticed by decision-makers?" },
          { name: "Second chances", description: "Who gets to recover from early mistakes?" }
        ]
      },
      {
        type: "keyDistinction",
        title: "Context awareness versus excuse-making",
        not: "Denying effort, standards, or excellence.",
        but: "Designing conditions where more people's effort can become excellent."
      }
    ],
    whyThisMatters:
      "A more accurate meritocracy creates more excellence by widening the conditions that develop talent.",
    practicalApplication:
      "In any team or school, inspect who gets access to mentorship, visibility, and stretch work before talent is declared.",
    commonMistakes: [
      "Treating current winners as proof the system is fair",
      "Assuming context awareness lowers standards",
      "Ignoring informal opportunity channels"
    ],
    misconceptions: [
      {
        misconception: "Recognizing privilege denies individual achievement.",
        correction:
          "It places achievement inside the opportunity system that helped make it possible."
      }
    ],
    lens:
      "Fairness asks not only who performed, but who was developed enough to perform.",
    anchors: [
      "Merit is measured after opportunity has already done work.",
      "Better systems can produce more outliers."
    ],
    takeaways: [
      "Meritocracy is incomplete when starting lines differ.",
      "Context awareness can strengthen excellence.",
      "Opportunity design matters for fairness and performance."
    ],
    examples: [
      "A company broadens access to high-visibility projects.",
      "A school extends learning support to reduce unequal summers.",
      "A manager notices informal mentorship is reaching only insiders."
    ],
    relatedSections: ["accumulated-advantage", "final-talent-plus-context"]
  }),
  lesson({
    id: "final-talent-plus-context",
    title: "Final Synthesis: Success as Talent Plus Context",
    eyebrow: "Synthesis",
    minutes: 36,
    summary:
      "Outliers becomes a lens for seeing success as the interaction of talent, practice, timing, culture, family, opportunity, and systems.",
    objectives: [
      "Connect the book's major ideas",
      "Use the lens without becoming fatalistic",
      "Apply context awareness to career, education, and organizations"
    ],
    concepts: ["synthesis", "talent plus context", "systems", "opportunity"],
    body: [
      "Outliers is not a book about luck replacing talent. It is a book about talent needing context. The major ideas connect into one model: ability matters, but ability becomes extraordinary when it receives opportunity, sustained practice, favorable timing, cultural tools, family support, meaningful work, and systems that amplify development.",
      "Accumulated advantage explains how small edges compound. Historical windows explain why some cohorts meet unusually fertile conditions. Practice explains how mastery is built, but opportunity explains who gets to practice deeply. Culture and class explain hidden scripts. Education and institutions explain why some starting lines are unequal. Threshold effects explain why intelligence is important but incomplete.",
      "The practical use of the book is twofold. For your own life, seek environments where practice, mentors, tools, and timing can help your abilities compound. Learn hidden rules. Choose meaningful work. Pay attention to windows. For systems you influence, widen access, delay premature selection, make informal rules explicit, and create more developmental chances.",
      "Months later, remember the nuance: success is neither purely self-made nor purely accidental. It is produced by people acting inside structures. Better understanding of those structures gives individuals more strategy and institutions more responsibility."
    ],
    support: [
      {
        type: "framework",
        title: "Outlier lens",
        stages: [
          { name: "Talent", description: "What ability or inclination was present?" },
          { name: "Practice", description: "What repeated development turned ability into skill?" },
          { name: "Timing", description: "What historical window made the skill valuable?" },
          { name: "Culture", description: "What inherited scripts shaped behavior?" },
          { name: "Access", description: "What people, institutions, and resources opened doors?" },
          { name: "System", description: "What rules amplified or restricted opportunity?" }
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text:
          "Outliers are not made by talent alone. They emerge when talent meets practice, timing, culture, family, access, and systems that let advantage compound."
      }
    ],
    whyThisMatters:
      "The book gives readers a more accurate and useful model of achievement than either self-made mythology or fatalism.",
    practicalApplication:
      "Use the outlier lens to analyze one success story, one personal goal, and one system you influence.",
    commonMistakes: [
      "Turning context into fatalism",
      "Turning talent into the whole story",
      "Admiring outliers without studying the systems that produced them"
    ],
    misconceptions: [
      {
        misconception: "The lesson is that individuals have no agency.",
        correction:
          "The lesson is that agency becomes more powerful when it understands and seeks better opportunity structures."
      }
    ],
    lens:
      "Ask how talent, timing, practice, culture, family, and systems interacted.",
    anchors: [
      "Success is talent plus context.",
      "Individuals act, but systems shape whose action compounds."
    ],
    takeaways: [
      "Outliers are produced by interacting conditions.",
      "Context awareness improves personal strategy and system design.",
      "Opportunity is a central ingredient in achievement."
    ],
    examples: [
      "A career plan improves by seeking mentors and practice environments.",
      "A school improves by creating more second chances and support.",
      "A company improves by broadening who receives developmental opportunities."
    ],
    relatedSections: ["myth-self-made-outlier", "rethinking-meritocracy"]
  })
];

export const outliers: Book = {
  slug: "outliers",
  title: "Outliers",
  author: "Malcolm Gladwell",
  category: "Success / Sociology / Opportunity",
  difficulty: "Intermediate",
  completionTime: "6h 33m",
  progress: 0,
  coverTone:
    "from-sky-100 via-amber-100 to-emerald-100 dark:from-sky-950/40 dark:via-amber-950/35 dark:to-emerald-950/35",
  description:
    "A sociological curriculum on success, opportunity, timing, practice, cultural inheritance, class, education, meritocracy, and the systems that produce extraordinary achievement.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "success",
    "opportunity",
    "timing",
    "culture",
    "accumulated advantage",
    "practice",
    "talent",
    "environment",
    "social systems",
    "privilege",
    "education",
    "achievement",
    "context"
  ],
  intendedOutcomes: [
    "Understand why success is rarely purely individual",
    "Recognize how timing and opportunity shape achievement",
    "Understand accumulated advantage",
    "Understand the role of culture and family background",
    "Think more clearly about talent, practice, and environment",
    "Understand why systems create outliers",
    "Avoid simplistic self-made success narratives"
  ],
  promise:
    "After completing this curriculum, you will understand Malcolm Gladwell's argument that extraordinary success is not simply the result of individual talent, but a product of opportunity, timing, cultural inheritance, deliberate practice, accumulated advantage, and the systems surrounding a person.",
  recommendedAudience: [
    "Readers interested in success, education, and social systems",
    "Leaders designing talent development systems",
    "Students and professionals evaluating opportunity and career strategy",
    "Anyone who wants a more nuanced view of achievement"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around success, opportunity, culture, practice, education, and meritocracy. It does not reproduce long passages or chapter text.",
  sections
};
