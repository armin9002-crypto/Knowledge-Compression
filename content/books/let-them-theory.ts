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
    id: "core-idea-let-them",
    title: "The Core Idea: Let Them",
    eyebrow: "Foundation",
    minutes: 30,
    summary:
      "The theory begins with releasing control over other people's choices so their behavior can become information rather than a trigger for control.",
    objectives: [
      "Understand what let them means",
      "See why other people's choices reveal information",
      "Recognize the exhaustion created by managing others"
    ],
    concepts: ["letting go", "control", "acceptance", "information"],
    body: [
      "The Let Them Theory begins with a simple phrase that can be misunderstood because it sounds casual. Let them means allowing other people to make their choices, reveal their priorities, show their limits, misunderstand you, leave, stay, change, or not change without immediately trying to control the outcome. It is a practice of releasing the grip on what was never fully yours to govern.",
      "The idea is not indifference. It is not a refusal to care. It is the recognition that another person's behavior belongs to them. Their response, timing, loyalty, interest, maturity, honesty, and willingness are not controlled by your anxiety. Trying to manage all of that turns relationships into emotional surveillance.",
      "Other people's choices reveal information. If someone does not show up, let that be data. If someone repeatedly avoids a hard conversation, let that be data. If someone chooses a path you would not choose, let that be data. The goal is not to punish them for the data. The goal is to stop arguing with reality long enough to decide what you will do next.",
      "Trying to control others often feels like love, responsibility, or effort. It may appear as persuading, chasing, explaining, fixing, reminding, monitoring, or proving. But when control becomes the main strategy, it drains self-respect and creates resentment. You become more focused on extracting a response than on living from your own values.",
      "Peace often begins when reality is allowed to be seen. Let them is the first half of a calmer operating system: release what belongs to others, then return to what belongs to you."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Letting them versus not caring",
        not: "Pretending the relationship, outcome, or behavior does not matter.",
        but: "Accepting that caring does not give you control over another person's choices."
      },
      {
        type: "expandedExample",
        scenario: "A friend repeatedly cancels plans at the last minute.",
        defaultApproach:
          "Keep explaining why it hurts, chase reassurance, and rearrange your schedule around uncertainty.",
        betterApproach:
          "Let the repeated behavior be information, stop over-adjusting, and decide what level of access fits the pattern.",
        whyItWorks:
          "You stop trying to force reliability and begin responding to reality."
      }
    ],
    whyThisMatters:
      "The core idea shifts attention from controlling others to reading reality and choosing your own response.",
    practicalApplication:
      "When someone makes a choice you dislike, first name what belongs to them before deciding what belongs to you.",
    commonMistakes: [
      "Using let them as a way to pretend you are not hurt",
      "Letting people behave however they want while giving them unlimited access",
      "Treating the phrase as a tactic to make someone come back"
    ],
    misconceptions: [
      {
        misconception: "Let them means stop caring.",
        correction:
          "It means stop confusing care with control."
      }
    ],
    lens:
      "When you feel the urge to manage another person's behavior, ask what reality is trying to show you.",
    anchors: [
      "Let them means other people's choices become information, not assignments for control.",
      "Caring does not create control."
    ],
    takeaways: [
      "Letting go begins with accepting what belongs to others.",
      "Behavior reveals priorities and limits.",
      "Peace requires contact with reality."
    ],
    examples: [
      "A dating pattern reveals availability.",
      "A colleague's repeated delay reveals reliability.",
      "A family member's reaction reveals what they can and cannot offer."
    ],
    relatedSections: ["let-me-reclaiming-agency", "boundaries-control"]
  }),
  lesson({
    id: "control-anxiety-manage-others",
    title: "Control, Anxiety, and the Need to Manage Other People",
    eyebrow: "Anxiety",
    minutes: 31,
    summary:
      "Many controlling behaviors begin as anxiety: the nervous system tries to reduce uncertainty by managing another person's choices.",
    objectives: [
      "Recognize control disguised as helping or fixing",
      "Understand why autonomy can feel threatening",
      "Reduce resentment created by control"
    ],
    concepts: ["control", "anxiety", "fixing", "autonomy"],
    body: [
      "Control often presents itself as care. You are just helping, reminding, explaining, checking in, making sure, trying one more time, protecting the relationship, or preventing a bad outcome. Sometimes that is true. But anxiety can borrow the language of love while trying to make another person behave in the way that calms you.",
      "Other people's autonomy can feel threatening because it introduces uncertainty. They may choose differently than you would. They may disappoint you. They may not prioritize you. They may misunderstand. They may make mistakes you can see coming. Anxiety reacts by trying to close the gap between what you want and what they choose.",
      "The problem is that control usually creates the very resentment it fears. People do not feel loved when they feel managed. They may comply temporarily, withdraw quietly, push back aggressively, or become less honest because honesty invites more control. The relationship becomes organized around pressure.",
      "Control also exhausts the controller. You spend energy monitoring signals you cannot stabilize: tone, timing, replies, moods, choices, opinions, loyalty, and future behavior. The more you monitor, the less secure you feel because the system trains you to look outside yourself for regulation.",
      "Let them interrupts the loop. It says: I can care, communicate, and have standards, but I cannot live inside another person's decision-making. Their autonomy is real. My task is to regulate myself and choose my response."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Anxiety in disguise",
        columns: ["Disguise", "What it may be trying to control"],
        rows: [
          ["Helping", "Their competence, timing, or dependence"],
          ["Explaining", "Their interpretation of you"],
          ["Chasing", "Their interest or availability"],
          ["Fixing", "Their discomfort or consequences"],
          ["Monitoring", "Your uncertainty about where you stand"]
        ]
      },
      {
        type: "mentalModel",
        name: "Regulation shift",
        explanation:
          "Control tries to regulate your nervous system by changing someone else. Letting go moves regulation back inside your own choices.",
        useWhen:
          "You feel unable to calm down until someone responds, agrees, apologizes, or changes."
      }
    ],
    whyThisMatters:
      "Understanding the anxiety beneath control makes it easier to release control without shaming yourself for having needs.",
    practicalApplication:
      "When you feel compelled to manage someone, pause and ask what uncertainty you are trying to eliminate.",
    commonMistakes: [
      "Calling control love because the intention feels caring",
      "Trying to regulate anxiety through another person's immediate response",
      "Assuming autonomy is rejection"
    ],
    misconceptions: [
      {
        misconception: "If I stop managing it, everything will fall apart.",
        correction:
          "Some things may change, but the change reveals what was being held together by pressure."
      }
    ],
    lens:
      "Control asks, how do I make them change? Calm agency asks, what does their choice show me, and what will I do?",
    anchors: [
      "Anxiety often disguises itself as helping, fixing, chasing, or explaining.",
      "Other people's autonomy is not an emergency."
    ],
    takeaways: [
      "Control is often an attempt to reduce uncertainty.",
      "Pressure creates resentment and less honesty.",
      "Regulation becomes stronger when it returns to your own choices."
    ],
    examples: [
      "A parent repeatedly rescues an adult child from consequences.",
      "A partner monitors response time to calm insecurity.",
      "A manager over-functions because a teammate's autonomy feels risky."
    ],
    relatedSections: ["emotional-regulation-inner-peace", "acceptance-without-passivity"]
  }),
  lesson({
    id: "acceptance-without-passivity",
    title: "Acceptance Without Passivity",
    eyebrow: "Reality",
    minutes: 31,
    summary:
      "Acceptance means seeing reality clearly; it does not mean approving of it, tolerating harm, or giving up agency.",
    objectives: [
      "Separate accepting from approving",
      "Understand why acceptance improves action",
      "Avoid confusing peace with passivity"
    ],
    concepts: ["acceptance", "agency", "passivity", "clarity"],
    body: [
      "The most common misreading of let them is passivity. People hear acceptance and imagine resignation: I guess I just have to tolerate this. But acceptance is not approval. It is the refusal to waste energy denying what is already happening. You cannot respond clearly to a reality you keep arguing with.",
      "Accepting that someone is unavailable does not mean their unavailability is good. Accepting that a workplace is unhealthy does not mean you stay forever. Accepting that a family member cannot hear you does not mean your needs are unreasonable. Acceptance simply ends the negotiation with facts.",
      "Denial often feels active because it involves effort: explaining, persuading, revisiting, hoping, reinterpreting, bargaining. But that effort may keep you stuck. Acceptance can look quieter while creating more movement because it frees attention for the question that matters: given this reality, what is my next right action?",
      "Peace is not passivity when it leads to clearer boundaries, cleaner communication, better decisions, and less emotional scrambling. It becomes passivity only when it is used to avoid truth, conflict, grief, or responsibility.",
      "Let them therefore has to be paired with let me. Let them be who they are. Let me decide what access they have, what I will communicate, what standard I will hold, what distance I need, and what life I am building."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Acceptance versus approval",
        not: "Saying the behavior is acceptable, fair, kind, or permanent.",
        but: "Seeing the behavior accurately so your response is based on reality."
      },
      {
        type: "expandedExample",
        scenario: "A workplace repeatedly rewards last-minute chaos.",
        defaultApproach:
          "Stay angry every week and hope leadership will suddenly value planning.",
        betterApproach:
          "Accept the pattern, communicate limits where possible, document tradeoffs, and decide whether to adapt, transfer, or leave.",
        whyItWorks:
          "Acceptance turns recurring frustration into a clear decision landscape."
      }
    ],
    whyThisMatters:
      "Without acceptance, people often spend their energy trying to make reality different before deciding what reality requires.",
    practicalApplication:
      "Name one fact you have been negotiating with, then identify the action that becomes available once you stop denying it.",
    commonMistakes: [
      "Thinking acceptance means approving",
      "Using peace language to avoid necessary confrontation",
      "Staying in harmful situations because you are trying to be detached"
    ],
    misconceptions: [
      {
        misconception: "Letting go means giving up.",
        correction:
          "Letting go often creates the clarity needed to act."
      }
    ],
    lens:
      "Acceptance says, this is what is happening. Agency says, this is what I will do with that reality.",
    anchors: [
      "Acceptance is contact with reality, not approval of reality.",
      "Peace becomes powerful when it restores action."
    ],
    takeaways: [
      "You can accept reality and still set boundaries.",
      "Denial can look active while keeping you stuck.",
      "Acceptance and agency belong together."
    ],
    examples: [
      "Accepting a friend's pattern helps you adjust expectations.",
      "Accepting a job's culture helps you decide whether to stay.",
      "Accepting a breakup helps you stop negotiating with absence."
    ],
    relatedSections: ["let-me-reclaiming-agency", "common-misreadings-let-them"]
  }),
  lesson({
    id: "boundaries-control",
    title: "Boundaries: What You Control and What You Do Not",
    eyebrow: "Boundaries",
    minutes: 32,
    summary:
      "Boundaries are decisions about your own behavior and access, not demands that other people become different.",
    objectives: [
      "Define boundaries accurately",
      "Separate boundaries from control attempts",
      "Apply boundaries across work, family, dating, and friendship"
    ],
    concepts: ["boundaries", "control", "access", "standards"],
    body: [
      "A boundary is often misunderstood as a rule for someone else. You need to stop texting me late. You need to respect my time. You need to treat me better. Those may be valid needs, but a boundary becomes real only when it names what you will do if the pattern continues. It is a decision about your participation.",
      "This distinction is central to let them. Other people may ignore, dislike, misunderstand, or resist your boundary. Let them. Their reaction belongs to them. Your boundary is not successful because it controls their reaction. It is successful when it clarifies your behavior and protects what you are responsible for protecting.",
      "In work, a boundary might mean no longer absorbing last-minute requests without renegotiating priorities. In family, it might mean leaving conversations that become insulting. In dating, it might mean stepping back when someone's availability is inconsistent. In friendship, it might mean reducing access when care is not reciprocal.",
      "Boundaries are not punishments. They are not tests designed to make people chase you. They are not dramatic announcements meant to create fear. They are sober decisions about what level of contact, effort, disclosure, flexibility, or responsibility is healthy given the pattern in front of you.",
      "The difficulty is emotional. Setting a boundary may trigger guilt, fear of rejection, or the desire to over-explain. Let them have their feelings. Let yourself have yours. Then act from the standard you have chosen."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Boundary or control?",
        columns: ["Control attempt", "Boundary version"],
        rows: [
          ["You cannot talk to me that way", "If insults start, I will end the conversation"],
          ["You must respond faster", "I will not build plans around uncertain replies"],
          ["You need to stop dumping work on me", "I can help after priorities are renegotiated"],
          ["You have to understand me", "I will explain once clearly, then stop debating my reality"]
        ]
      },
      {
        type: "keyDistinction",
        title: "Demand versus boundary",
        not: "A demand that someone else change so you can feel calm.",
        but: "A clear decision about your own behavior, access, and participation."
      }
    ],
    whyThisMatters:
      "Boundaries turn the theory from emotional release into practical self-respect.",
    practicalApplication:
      "Rewrite one demand as a boundary by naming what you will do rather than what the other person must do.",
    commonMistakes: [
      "Calling a demand a boundary",
      "Explaining a boundary endlessly to get approval",
      "Using boundaries as punishments or tests"
    ],
    misconceptions: [
      {
        misconception: "A boundary works only if the other person likes it.",
        correction:
          "A boundary works when it governs your behavior clearly, even if the other person dislikes it."
      }
    ],
    lens:
      "Ask whether the statement controls their behavior or clarifies yours.",
    anchors: [
      "Boundaries are about your participation, not their obedience.",
      "Access should match patterns."
    ],
    takeaways: [
      "Boundaries are decisions about your behavior.",
      "Other people's reactions do not invalidate your limits.",
      "Boundaries protect energy, dignity, and clarity."
    ],
    examples: [
      "Leaving a conversation when insults begin.",
      "Declining last-minute work without priority tradeoffs.",
      "No longer over-investing in inconsistent dating."
    ],
    relatedSections: ["core-idea-let-them", "relationships-expectations-disappointment"]
  }),
  lesson({
    id: "stop-personalizing-behavior",
    title: "Stop Personalizing Other People's Behavior",
    eyebrow: "Self-worth",
    minutes: 31,
    summary:
      "Other people's behavior often reflects their own priorities, limits, fears, habits, and desires more than it reflects your worth.",
    objectives: [
      "Understand why personalization creates pain",
      "Interpret behavior without making it a verdict on worth",
      "Stay discerning without becoming cold"
    ],
    concepts: ["personalization", "self-worth", "discernment", "emotional freedom"],
    body: [
      "Personalization turns another person's behavior into a verdict about you. They did not text back, so I am not important. They misunderstood me, so I failed. They chose someone else, so I am not enough. They are distant, so I must fix it. This interpretation is painful because it makes your worth dependent on other people's choices.",
      "The Let Them Theory loosens that link. Other people's behavior usually reflects a mixture of their priorities, capacity, maturity, interest, stress, attachment patterns, values, and desires. Sometimes their behavior affects you deeply and still is not a measurement of your value.",
      "Not personalizing does not mean ignoring impact. If someone is unreliable, the unreliability matters. If someone is cruel, the cruelty matters. The point is to stop adding a second wound: the belief that their behavior proves something degrading about you.",
      "This creates emotional freedom because you can evaluate behavior more cleanly. Instead of asking, what does this say about my worth? you ask, what does this show about compatibility, capacity, trust, and the level of access that makes sense?",
      "Warm discernment is possible. You can care about people, consider context, and still refuse to make their limitations your identity."
    ],
    support: [
      {
        type: "keyDistinction",
        title: "Impact versus identity",
        not: "Pretending another person's behavior has no effect on you.",
        but: "Refusing to treat their behavior as a final statement about your worth."
      },
      {
        type: "expandedExample",
        scenario: "Someone you are dating becomes inconsistent.",
        defaultApproach:
          "Analyze what you did wrong and try to become more appealing.",
        betterApproach:
          "Let the inconsistency reveal availability, communicate if appropriate, and choose whether the pattern works for you.",
        whyItWorks:
          "You evaluate compatibility without turning inconsistency into self-rejection."
      }
    ],
    whyThisMatters:
      "Personalization keeps people attached to patterns they should simply read and respond to.",
    practicalApplication:
      "When hurt by someone's behavior, separate impact, interpretation, and evidence before deciding what it means.",
    commonMistakes: [
      "Making every silence or choice about your worth",
      "Using non-personalization to excuse repeated disrespect",
      "Becoming detached to avoid feeling hurt"
    ],
    misconceptions: [
      {
        misconception: "If it hurts me, it must be about me.",
        correction:
          "Something can affect you without being caused by your worth or failure."
      }
    ],
    lens:
      "Ask what the behavior reveals about them or the relationship before deciding what it says about you.",
    anchors: [
      "Other people's behavior is information, not a verdict on your worth.",
      "Discernment does not require self-blame."
    ],
    takeaways: [
      "Personalization adds identity pain to relational pain.",
      "Behavior can matter without defining you.",
      "Not personalizing supports clearer decisions."
    ],
    examples: [
      "A friend's distance may reflect capacity, not your value.",
      "A family member's criticism may reflect their fear or rigidity.",
      "A workplace rejection may reflect fit, timing, budget, or politics."
    ],
    relatedSections: ["relationships-expectations-disappointment", "emotional-regulation-inner-peace"]
  }),
  lesson({
    id: "relationships-expectations-disappointment",
    title: "Relationships, Expectations, and Disappointment",
    eyebrow: "Relationships",
    minutes: 33,
    summary:
      "Expectations create pain when they are built from hope rather than repeated evidence; the theory asks readers to see people as they are.",
    objectives: [
      "Understand how expectations create disappointment",
      "Use repeated behavior as information",
      "Know when to communicate, adjust expectations, or step back"
    ],
    concepts: ["expectations", "disappointment", "compatibility", "repeated behavior"],
    body: [
      "Relationships often hurt not only because of what people do, but because of the gap between what they do and what we expected them to do. Expectations can be reasonable, but they can also be built from potential, history, fantasy, promises, or the version of someone we wish were more available.",
      "Repeated behavior is information. If a person repeatedly avoids accountability, that pattern matters more than their emotional apology. If they repeatedly show care in practical ways, that pattern matters more than a temporary misunderstanding. If they repeatedly disappear when life is hard, that pattern deserves more weight than chemistry.",
      "Let them means allowing people to reveal themselves without constantly editing the evidence. Let them be inconsistent. Let them be generous. Let them avoid. Let them show up. Then let the pattern inform your expectations.",
      "Communication still matters. Sometimes disappointment comes from an unspoken expectation that needs to be named. A mature response may be a clear conversation: this matters to me, here is the pattern I am noticing, here is what I need, here is what I will do if it continues. After communication, the next pattern becomes even more informative.",
      "The painful wisdom is that some expectations must be adjusted downward, and some relationships require distance. Acceptance makes this possible without endless argument. You stop trying to make the relationship match your hope and start deciding how to relate to the relationship that actually exists."
    ],
    support: [
      {
        type: "framework",
        title: "Expectation clarity",
        stages: [
          { name: "Name", description: "What did I expect?" },
          { name: "Source", description: "Did that expectation come from evidence, promise, hope, or fantasy?" },
          { name: "Pattern", description: "What does repeated behavior show?" },
          { name: "Response", description: "Should I communicate, adjust, set a boundary, or step back?" }
        ]
      },
      {
        type: "misconception",
        misconception: "If I lower expectations, I am accepting less than I deserve.",
        correction:
          "Sometimes lower expectations mean seeing someone's capacity accurately while choosing appropriate distance or access.",
        whyItMatters:
          "Accurate expectations prevent repeated shock."
      }
    ],
    whyThisMatters:
      "Seeing people as they are allows relationships to be chosen, bounded, or released with more honesty.",
    practicalApplication:
      "For a recurring disappointment, identify whether the expectation is evidence-based and whether the pattern calls for communication or adjustment.",
    commonMistakes: [
      "Expecting potential instead of pattern",
      "Skipping clear communication and calling the other person disappointing",
      "Adjusting expectations while keeping the same level of access"
    ],
    misconceptions: [
      {
        misconception: "Repeated disappointment means I need to explain better.",
        correction:
          "Sometimes it means the other person's capacity or willingness is already visible."
      }
    ],
    lens:
      "Let patterns update expectations, and let expectations update access.",
    anchors: [
      "Repeated behavior is more informative than potential.",
      "Expectations should be built from evidence, not hope alone."
    ],
    takeaways: [
      "Disappointment often comes from the gap between hope and pattern.",
      "Communication matters before conclusions harden.",
      "Access should reflect repeated behavior."
    ],
    examples: [
      "A family member can love you and still be unable to offer emotional safety.",
      "A friend can be fun but unreliable for serious support.",
      "A partner's repeated follow-through is stronger evidence than dramatic promises."
    ],
    relatedSections: ["let-them-misunderstand-leave-choose-change", "boundaries-control"]
  }),
  lesson({
    id: "let-them-misunderstand-leave-choose-change",
    title: "Let Them Misunderstand, Leave, Choose, or Change",
    eyebrow: "Release",
    minutes: 32,
    summary:
      "Letting people make consequential choices preserves self-respect by ending the chase for approval, certainty, or forced compatibility.",
    objectives: [
      "Let people reveal compatibility through choices",
      "Stop chasing approval or perfect understanding",
      "Understand why leaving can be information rather than catastrophe"
    ],
    concepts: ["misunderstanding", "leaving", "compatibility", "approval"],
    body: [
      "One of the hardest parts of the theory is letting people misunderstand you. The impulse to correct every interpretation can become endless. Of course, clear communication matters. But after you have explained yourself honestly, you may still be misunderstood. Let them. Your peace cannot depend on universal approval.",
      "Let people leave. This does not mean abandonment is painless or that commitment is disposable. It means that chasing someone who has chosen distance often drains dignity without creating love. If someone leaves, withdraws, or chooses elsewhere, their choice is painful information. It may show incompatibility, immaturity, different desire, or simply a path that is not yours to control.",
      "Let people choose. Adults are allowed to make decisions you would not make. They can choose relationships, habits, careers, beliefs, and priorities that disappoint you. You can communicate concern, set limits, and decide your involvement. But their life remains theirs.",
      "Let people change, too. Sometimes control appears as holding someone permanently to an old version of themselves. Letting them includes allowing growth that does not center you. It includes allowing people to become different without demanding that their change validate your preferences.",
      "The self-respect piece is crucial. Chasing clarity, approval, or return can become a way of abandoning yourself. Let them reveal what they choose. Then return to your own life with the information."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Release points",
        columns: ["Let them", "Your agency"],
        rows: [
          ["Misunderstand", "Explain clearly once or twice, then stop living in defense mode"],
          ["Leave", "Grieve, accept the information, and rebuild around reality"],
          ["Choose", "Respect autonomy while deciding your own involvement"],
          ["Change", "Update your view based on present behavior, not old control"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "A friend misunderstands a boundary and calls it selfish.",
        defaultApproach:
          "Over-explain for hours, trying to make them approve of the boundary.",
        betterApproach:
          "Clarify the boundary calmly, accept that they may dislike it, and continue acting from the limit.",
        whyItWorks:
          "The boundary no longer depends on winning agreement."
      }
    ],
    whyThisMatters:
      "Self-respect grows when you stop making other people's approval the condition for your clarity.",
    practicalApplication:
      "Identify one place where you keep chasing understanding or approval after you have already communicated clearly.",
    commonMistakes: [
      "Using let them to avoid all communication",
      "Chasing closure from someone committed to misunderstanding",
      "Treating someone leaving as proof of your unworthiness"
    ],
    misconceptions: [
      {
        misconception: "Letting someone leave means they did not matter.",
        correction:
          "It means their choice cannot be controlled by your attachment."
      }
    ],
    lens:
      "After clear communication, let choices reveal compatibility.",
    anchors: [
      "You do not need everyone to understand you to live clearly.",
      "Chasing approval can become self-abandonment."
    ],
    takeaways: [
      "Misunderstanding is sometimes unavoidable.",
      "Leaving and choosing reveal compatibility.",
      "Self-respect requires returning to your own agency."
    ],
    examples: [
      "A boundary is misunderstood but still necessary.",
      "A dating partner's exit reveals different desire.",
      "A family member makes choices you cannot rescue them from."
    ],
    relatedSections: ["let-me-reclaiming-agency", "stop-personalizing-behavior"]
  }),
  lesson({
    id: "let-me-reclaiming-agency",
    title: "Let Me: Reclaiming Agency After Letting Go",
    eyebrow: "Agency",
    minutes: 33,
    summary:
      "The other half of the theory is let me: after releasing control of others, decide what you will do with your boundaries, energy, communication, and choices.",
    objectives: [
      "Understand the agency half of the theory",
      "Avoid using let them as avoidance",
      "Choose clear responses after acceptance"
    ],
    concepts: ["let me", "agency", "responsibility", "choice"],
    body: [
      "Let them is incomplete without let me. If the first half releases control over others, the second half reclaims responsibility for your own life. Let them be unavailable. Let me stop building my schedule around uncertainty. Let them misunderstand. Let me communicate clearly and stop over-defending. Let them choose. Let me choose my proximity.",
      "This distinction prevents the theory from becoming passive. Letting go is not the endpoint. It is the clearing of emotional noise so action becomes possible. Once you stop trying to force another person's behavior, you can see your own options more cleanly.",
      "Let me may lead to communication: I want to name what I am noticing. It may lead to a boundary: I am not available for this pattern anymore. It may lead to distance: this relationship is not healthy at this level of access. It may lead to acceptance: this difference is real, but I can live with it. The response depends on context.",
      "Agency also includes self-responsibility. If you keep choosing people who are unavailable, let me examine the pattern. If you keep over-explaining, let me learn to tolerate being misunderstood. If you keep rescuing, let me face the discomfort of allowing consequences. The theory is not only about what others do; it reveals your part.",
      "The mature practice is calm ownership. I cannot control them, and I am not helpless. Both are true."
    ],
    support: [
      {
        type: "framework",
        title: "Let them, let me",
        stages: [
          { name: "Release", description: "Name what belongs to the other person." },
          { name: "Reality", description: "Let the behavior or choice become information." },
          { name: "Agency", description: "Name what belongs to you." },
          { name: "Action", description: "Choose communication, boundary, distance, acceptance, or change." }
        ]
      },
      {
        type: "keyDistinction",
        title: "Letting go versus avoiding",
        not: "Using calm language to avoid hard conversations or decisions.",
        but: "Releasing control so your own next action becomes clearer."
      }
    ],
    whyThisMatters:
      "Let me keeps the theory grounded in responsibility rather than emotional detachment.",
    practicalApplication:
      "For every let them statement, complete the sentence with a let me choice that is within your control.",
    commonMistakes: [
      "Stopping at let them and never choosing your response",
      "Using acceptance to avoid your own patterns",
      "Confusing agency with controlling the outcome"
    ],
    misconceptions: [
      {
        misconception: "Let them is the whole theory.",
        correction:
          "Let me is the part that turns release into self-responsible action."
      }
    ],
    lens:
      "The moment you stop controlling them is the moment your own choices become visible.",
    anchors: [
      "Let them releases control; let me reclaims agency.",
      "You are not in control of them, and you are not powerless."
    ],
    takeaways: [
      "Agency is the second half of letting go.",
      "The theory should produce clearer action.",
      "Self-responsibility includes examining your own patterns."
    ],
    examples: [
      "Let them be inconsistent; let me stop over-investing.",
      "Let them misunderstand; let me communicate once with clarity.",
      "Let them choose their path; let me choose my involvement."
    ],
    relatedSections: ["core-idea-let-them", "acceptance-without-passivity"]
  }),
  lesson({
    id: "emotional-regulation-inner-peace",
    title: "Emotional Regulation and Inner Peace",
    eyebrow: "Regulation",
    minutes: 31,
    summary:
      "Letting go calms the nervous system because attention returns from monitoring others to regulating the self and taking grounded action.",
    objectives: [
      "Understand why letting go reduces spiraling",
      "Pause before reacting",
      "Redirect energy toward action"
    ],
    concepts: ["emotional regulation", "peace", "spiraling", "nervous system"],
    body: [
      "A major promise of the theory is peace, but peace is not achieved by forcing yourself not to care. It comes from no longer treating every other person's choice as an emergency you must solve. The nervous system calms when it stops scanning for control points that do not exist.",
      "Spiraling often begins with uncertainty. Why did they say that? What if they leave? How do I make them understand? What does this mean about me? The mind loops because it is trying to produce certainty from someone else's autonomy. Let them interrupts the loop by naming the boundary of control.",
      "Regulation begins with a pause. Before the text, the explanation, the accusation, the rescue, or the chase, stop long enough to identify what is happening inside you. Am I scared, embarrassed, rejected, angry, responsible, or ashamed? What action would I take if I were responding from self-respect rather than panic?",
      "The redirected energy is practical. Instead of monitoring someone else's mood, you take care of your body, make a decision, communicate clearly, return to work, call a grounded friend, or set a boundary. Peace becomes active because it restores your ability to choose.",
      "Inner peace does not mean nothing hurts. It means hurt no longer automatically becomes control. You can feel disappointment and still remain anchored."
    ],
    support: [
      {
        type: "application",
        context: "Interrupting a spiral",
        steps: [
          "Name what the other person controls.",
          "Name the feeling that is rising in you.",
          "Delay the reactive move long enough to choose.",
          "Take one action that returns attention to your own agency."
        ],
        result:
          "The emotional loop loses intensity because it no longer has control as its only exit."
      },
      {
        type: "mentalModel",
        name: "Control boundary",
        explanation:
          "Peace returns when the mind stops trying to cross the boundary between your choices and another person's autonomy.",
        useWhen:
          "You are replaying, checking, chasing, or rehearsing arguments in your head."
      }
    ],
    whyThisMatters:
      "Without regulation, the theory becomes a phrase remembered after the reaction rather than a practice that changes the reaction.",
    practicalApplication:
      "Use the pause before responding to identify whether your next action is a boundary, a clear communication, or an anxiety behavior.",
    commonMistakes: [
      "Trying to shame yourself into calm",
      "Mistaking numbness for peace",
      "Using immediate reaction as proof of truth"
    ],
    misconceptions: [
      {
        misconception: "If I were regulated, I would not care.",
        correction:
          "Regulation means caring without letting panic choose your behavior."
      }
    ],
    lens:
      "The goal is not to stop feeling; it is to stop making control the only way to feel safe.",
    anchors: [
      "Peace begins when control returns to what is actually yours.",
      "Hurt does not have to become chasing, fixing, or explaining."
    ],
    takeaways: [
      "Letting go can reduce spiraling.",
      "A pause creates room for agency.",
      "Regulation is compatible with care."
    ],
    examples: [
      "Waiting before responding to a triggering message.",
      "Choosing a boundary instead of another long explanation.",
      "Returning to your day instead of monitoring someone's mood."
    ],
    relatedSections: ["control-anxiety-manage-others", "stop-personalizing-behavior"]
  }),
  lesson({
    id: "applying-family-dating-friendship-work",
    title: "Applying the Theory in Family, Dating, Friendship, and Work",
    eyebrow: "Application",
    minutes: 36,
    summary:
      "The theory adapts across contexts because different relationships require different combinations of acceptance, communication, boundaries, and distance.",
    objectives: [
      "Apply the theory across major life contexts",
      "Avoid one-size-fits-all detachment",
      "Choose responses appropriate to relationship type"
    ],
    concepts: ["family", "dating", "friendship", "work", "context"],
    body: [
      "The Let Them Theory becomes useful when applied with context. Letting a coworker misunderstand you is different from letting a parent violate a boundary, a dating partner remain inconsistent, a friend drift, or a stranger criticize you online. The principle is stable, but the response changes.",
      "In family, the difficulty is history. Roles are old, emotions are layered, and boundaries may be treated as betrayal. Let them react to your adulthood. Let them have expectations. Let them be disappointed. Let me choose what conversations, visits, topics, and responsibilities are healthy.",
      "In dating, the theory is often about availability and compatibility. Let them show interest or lack of interest. Let them communicate the way they communicate. Let them choose commitment or ambiguity. Let me stop auditioning for clarity and choose relationships where effort is mutual.",
      "In friendship, it helps distinguish seasonality from disrespect. Some friendships change because life changes. Others become one-sided. Let them have their capacity. Let me adjust expectations and access instead of silently resenting the gap.",
      "At work, the theory is not a substitute for professionalism. Let them have opinions, politics, urgency, or poor planning. Let me communicate clearly, document tradeoffs, set workload boundaries, and decide whether the environment fits. On social media, let strangers misunderstand quickly. Let me not donate my nervous system to every opinion.",
      "The common thread is contextual agency. Let them be who they are in that setting. Let me respond in a way that fits the stakes, relationship, and pattern."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Contextual applications",
        columns: ["Context", "Let them", "Let me"],
        rows: [
          ["Family", "Have reactions and expectations", "Set access, topics, and visit limits"],
          ["Dating", "Reveal availability and desire", "Choose mutuality over chasing"],
          ["Friendship", "Show capacity and season", "Adjust expectations or investment"],
          ["Work", "Have urgency, politics, or opinions", "Clarify priorities and boundaries"],
          ["Social media", "Misread or criticize", "Decline unnecessary defense"]
        ]
      },
      {
        type: "expandedExample",
        scenario: "A manager repeatedly sends urgent requests after hours.",
        defaultApproach:
          "Answer every time while building resentment and hoping they notice.",
        betterApproach:
          "Clarify response windows, ask what should be deprioritized for urgent work, and let their reaction be information about the culture.",
        whyItWorks:
          "The response combines professionalism with boundaries."
      }
    ],
    whyThisMatters:
      "A mature theory must adapt to context rather than become a blunt rule used the same way everywhere.",
    practicalApplication:
      "Choose one relationship context and define the appropriate mix of communication, boundary, expectation adjustment, and distance.",
    commonMistakes: [
      "Applying the same level of distance to every relationship",
      "Using the phrase to avoid professional communication",
      "Confusing family guilt with obligation"
    ],
    misconceptions: [
      {
        misconception: "Let them works the same way in every context.",
        correction:
          "The release is consistent, but the action must fit the stakes and relationship."
      }
    ],
    lens:
      "Match the response to the context: care, stakes, pattern, power, and access all matter.",
    anchors: [
      "The principle is stable; the response is contextual.",
      "Let me choices should fit the relationship and stakes."
    ],
    takeaways: [
      "Family, dating, friendship, work, and social media require different applications.",
      "Communication and boundaries remain important.",
      "Context prevents the theory from becoming shallow detachment."
    ],
    examples: [
      "Let a dating partner reveal availability before over-investing.",
      "Let a family member dislike a boundary without removing it.",
      "Let a coworker have urgency while clarifying priorities."
    ],
    relatedSections: ["boundaries-control", "common-misreadings-let-them"]
  }),
  lesson({
    id: "common-misreadings-let-them",
    title: "Common Misreadings of the Let Them Theory",
    eyebrow: "Nuance",
    minutes: 32,
    summary:
      "The theory is easily flattened into indifference, avoidance, or tolerating disrespect; the mature version preserves care, communication, and limits.",
    objectives: [
      "Avoid turning the theory into avoidance",
      "Distinguish detachment from self-respect",
      "Preserve communication and standards"
    ],
    concepts: ["misreadings", "indifference", "avoidance", "self-respect"],
    body: [
      "Because the phrase is simple, it can be misused. Let them can become a way to sound healed while avoiding vulnerability. It can become indifference performed for pride. It can become a refusal to communicate needs. It can become tolerating disrespect because you do not want to seem controlling. These are distortions, not the mature theory.",
      "It is not indifference. You may care deeply. The point is that care does not require control. It is not avoidance. Some situations require direct conversation, repair, apology, negotiation, or action. Letting them does not excuse you from your own responsibility.",
      "It is not tolerating disrespect. Let them behave how they choose; let me decide access. If someone lies, insults, manipulates, or repeatedly violates trust, the theory does not ask you to become serene while staying exposed. It asks you to stop arguing with the pattern and protect your life accordingly.",
      "It is not never communicating needs. Healthy relationships require requests, clarity, and negotiation. The difference is that after communication, you let the other person choose rather than trying to force the response.",
      "It is not pretending not to care. Emotional maturity includes grief. Sometimes letting them means feeling the loss fully while refusing to chase what cannot be controlled."
    ],
    support: [
      {
        type: "comparisonTable",
        title: "Misreadings and corrections",
        columns: ["Misreading", "Correction"],
        rows: [
          ["Indifference", "Care without control"],
          ["Avoidance", "Release plus appropriate action"],
          ["Tolerating disrespect", "Behavior has consequences for access"],
          ["Never communicating", "Communicate clearly, then allow choice"],
          ["Pretending not to hurt", "Feel honestly without chasing control"]
        ]
      },
      {
        type: "warning",
        title: "Do not use peace to bypass truth",
        text:
          "If calm language keeps you in a harmful pattern, it is not self-respect. It is avoidance dressed as acceptance."
      }
    ],
    whyThisMatters:
      "Nuance protects the theory from becoming another slogan that people use to avoid difficult but necessary action.",
    practicalApplication:
      "When using the phrase, check whether it is leading to clearer communication, better boundaries, and more self-responsibility.",
    commonMistakes: [
      "Using the theory to seem unbothered",
      "Avoiding hard conversations",
      "Confusing unlimited access with acceptance"
    ],
    misconceptions: [
      {
        misconception: "A regulated person never needs to confront anything.",
        correction:
          "Regulation often makes confrontation cleaner, calmer, and more effective."
      }
    ],
    lens:
      "The mature theory should make you clearer and more responsible, not colder or more avoidant.",
    anchors: [
      "Let them is not indifference, avoidance, or tolerating disrespect.",
      "Communication and boundaries remain part of self-respect."
    ],
    takeaways: [
      "Simple phrases require careful application.",
      "Letting go must be paired with access decisions.",
      "Healthy detachment still allows care and communication."
    ],
    examples: [
      "You can let someone misunderstand and still explain once clearly.",
      "You can let someone choose and still end your participation.",
      "You can care and still refuse to chase."
    ],
    relatedSections: ["acceptance-without-passivity", "final-synthesis-calmer-operating-system"]
  }),
  lesson({
    id: "final-synthesis-calmer-operating-system",
    title: "Final Synthesis: A Calmer Operating System for Relationships and Self-Respect",
    eyebrow: "Synthesis",
    minutes: 35,
    summary:
      "The theory becomes a practical operating system: accept what belongs to others, reclaim what belongs to you, and act from calm self-responsibility.",
    objectives: [
      "Connect let them and let me into one framework",
      "Use the theory across relationships without oversimplifying",
      "Remember the core months later"
    ],
    concepts: ["synthesis", "self-respect", "agency", "calm"],
    body: [
      "The Let Them Theory is most useful when held as a complete system. Let them have their choices, feelings, priorities, misunderstandings, availability, departures, and reactions. Let me have my boundaries, communication, standards, grief, distance, acceptance, and next steps. The two halves belong together.",
      "The theory reduces suffering by ending false responsibility. You are not responsible for making another adult honest, available, emotionally mature, approving, loyal, or ready. You are responsible for how you respond to the reality they show you. That distinction is where peace and self-respect meet.",
      "It also changes how relationships are evaluated. Instead of asking how to make someone become who you need, you ask what their repeated behavior shows, what you have communicated, what access fits the pattern, and what choice preserves your dignity. This is not cold. It is honest.",
      "The practical sequence is simple enough to remember: let them, observe, feel, choose. Let them reveal reality. Observe the pattern without immediately personalizing it. Feel what is true without turning hurt into control. Choose your response from agency.",
      "Months later, remember that acceptance and responsibility are not opposites. Calm acceptance of others' autonomy makes clear self-responsibility possible. You stop living as if peace depends on controlling everyone else, and you begin building a life organized around your own values."
    ],
    support: [
      {
        type: "framework",
        title: "The calmer operating system",
        stages: [
          { name: "Let them", description: "Release control over their choices, feelings, and behavior." },
          { name: "Observe", description: "Treat repeated behavior as information." },
          { name: "Feel", description: "Allow the impact without turning it into self-blame or control." },
          { name: "Let me", description: "Choose communication, boundaries, distance, acceptance, or change." }
        ]
      },
      {
        type: "synthesis",
        title: "Final compression",
        text:
          "Let them be who they are and choose what they choose. Let me be responsible for my boundaries, access, energy, communication, and next step."
      }
    ],
    whyThisMatters:
      "The final synthesis keeps the theory practical, emotionally mature, and grounded in self-respect rather than slogan-level detachment.",
    practicalApplication:
      "Use the let them, observe, feel, let me sequence in one current relationship pattern where control has become exhausting.",
    commonMistakes: [
      "Remembering let them but forgetting let me",
      "Using the theory to suppress grief",
      "Treating self-respect as emotional coldness"
    ],
    misconceptions: [
      {
        misconception: "Peace comes from needing nothing from anyone.",
        correction:
          "Peace comes from having needs without trying to control others into meeting them."
      }
    ],
    lens:
      "Let other people own their choices. Own your response with honesty, boundaries, and care.",
    anchors: [
      "Let them plus let me: release control, reclaim agency.",
      "Acceptance of reality makes self-respect actionable."
    ],
    takeaways: [
      "The theory is a relationship operating system.",
      "Other people's choices are information, not identity verdicts.",
      "Calm acceptance and clear self-responsibility work together."
    ],
    examples: [
      "A friendship becomes peaceful when expectations match capacity.",
      "A dating pattern ends when availability is accepted as information.",
      "A family boundary holds even when others dislike it."
    ],
    relatedSections: ["core-idea-let-them", "let-me-reclaiming-agency"]
  })
];

export const letThemTheory: Book = {
  slug: "let-them-theory",
  title: "The Let Them Theory",
  author: "Mel Robbins",
  category: "Self-Development / Emotional Regulation / Relationships",
  difficulty: "Intermediate",
  completionTime: "6h 22m",
  progress: 0,
  coverTone:
    "from-teal-100 via-stone-100 to-rose-100 dark:from-teal-950/40 dark:via-stone-950/50 dark:to-rose-950/35",
  description:
    "A grounded curriculum on releasing control, accepting reality, setting boundaries, reclaiming agency, and preserving self-respect in relationships.",
  featured: true,
  readingEstimateMinutes: estimateSectionsMinutes(sections),
  curriculumVersion: "1.0",
  primaryThemes: [
    "emotional regulation",
    "boundaries",
    "control",
    "relationships",
    "detachment",
    "self-respect",
    "expectations",
    "acceptance",
    "agency",
    "confidence",
    "peace",
    "personal responsibility"
  ],
  intendedOutcomes: [
    "Understand what it means to stop trying to control others",
    "Distinguish acceptance from passivity",
    "Reduce emotional overreaction to others' choices",
    "Build stronger boundaries",
    "Take responsibility for your own behavior",
    "Stop personalizing other people's actions",
    "Apply the theory in family, dating, friendship, work, and social situations"
  ],
  promise:
    "After completing this curriculum, you will understand the core idea of letting them: releasing control over other people's behavior while taking responsibility for your own choices, boundaries, energy, and emotional response.",
  recommendedAudience: [
    "Readers who want calmer relationships and clearer boundaries",
    "People working on emotional regulation and self-respect",
    "Anyone who over-explains, chases, fixes, or personalizes others' behavior",
    "Readers seeking practical self-development without shallow detachment"
  ],
  sourceNotes:
    "Original transformed curriculum based on the book's public themes around control, acceptance, boundaries, and agency. It does not reproduce long passages or chapter text.",
  sections
};
