export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "callout";
      title: string;
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "diagram";
      title: string;
      steps: string[];
    };

export type CurriculumSection = {
  id: string;
  title: string;
  eyebrow: string;
  estimatedMinutes: number;
  summary: string;
  concepts: string[];
  blocks: ContentBlock[];
  examples: string[];
  takeaways: string[];
};

export type Book = {
  slug: string;
  title: string;
  author: string;
  category: string;
  completionTime: string;
  progress: number;
  coverTone: string;
  description: string;
  featured: boolean;
  readingEstimateMinutes: number;
  sections: CurriculumSection[];
};
