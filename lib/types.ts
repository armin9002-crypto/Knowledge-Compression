export type DifficultyLevel = "Foundational" | "Intermediate" | "Advanced";

type BaseBlock = {
  id?: string;
};

export type ContentBlock =
  | (BaseBlock & {
      type: "paragraph";
      text: string;
    })
  | (BaseBlock & {
      type: "heading";
      title: string;
      eyebrow?: string;
    })
  | (BaseBlock & {
      type: "callout" | "quoteStyleInsight" | "synthesis" | "warning";
      title: string;
      text: string;
    })
  | (BaseBlock & {
      type: "list" | "orderedList" | "checklist";
      title?: string;
      items: string[];
    })
  | (BaseBlock & {
      type: "conceptCard";
      title: string;
      body: string;
      whyItMatters?: string;
    })
  | (BaseBlock & {
      type: "example";
      title: string;
      body: string;
    })
  | (BaseBlock & {
      type: "expandedExample";
      scenario: string;
      defaultApproach: string;
      betterApproach: string;
      whyItWorks: string;
    })
  | (BaseBlock & {
      type: "application";
      context: string;
      steps: string[];
      result: string;
    })
  | (BaseBlock & {
      type: "exercise";
      title: string;
      instructions: string;
      prompts: string[];
      checklist?: string[];
    })
  | (BaseBlock & {
      type: "reflectionPrompt";
      question: string;
      helperText?: string;
    })
  | (BaseBlock & {
      type: "keyDistinction";
      title: string;
      not: string;
      but: string;
    })
  | (BaseBlock & {
      type: "misconception";
      misconception: string;
      correction: string;
      whyItMatters: string;
    })
  | (BaseBlock & {
      type: "mentalModel";
      name: string;
      explanation: string;
      useWhen: string;
    })
  | (BaseBlock & {
      type: "diagram";
      title: string;
      steps: string[];
    })
  | (BaseBlock & {
      type: "framework";
      title: string;
      stages: {
        name: string;
        description: string;
      }[];
    })
  | (BaseBlock & {
      type: "comparisonTable";
      title: string;
      columns: string[];
      rows: string[][];
    })
  | (BaseBlock & {
      type: "retentionAnchor";
      title: string;
      anchor: string;
    });

export type CurriculumSubsection = {
  id: string;
  title: string;
  blocks: ContentBlock[];
  examples?: string[];
  keyPoints?: string[];
  practicalApplication?: string;
};

export type CurriculumSection = {
  id: string;
  title: string;
  eyebrow: string;
  estimatedMinutes: number;
  summary: string;
  learningObjectives: string[];
  keyConcepts: string[];
  blocks: ContentBlock[];
  subsections?: CurriculumSubsection[];
  appliedExamples: string[];
  whyThisMatters: string;
  practicalApplication: string;
  commonMistakes: string[];
  misconceptions: {
    misconception: string;
    correction: string;
  }[];
  reflectionPrompts: string[];
  implementationExercises: string[];
  retentionAnchors: string[];
  takeaways: string[];
  relatedSections?: string[];
};

export type Book = {
  slug: string;
  title: string;
  author: string;
  category: string;
  difficulty: DifficultyLevel;
  completionTime: string;
  progress: number;
  coverTone: string;
  description: string;
  featured: boolean;
  readingEstimateMinutes: number;
  curriculumVersion: string;
  primaryThemes: string[];
  intendedOutcomes: string[];
  promise: string;
  recommendedAudience?: string[];
  sourceNotes?: string;
  sections: CurriculumSection[];
};
