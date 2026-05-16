import type { CurriculumSection } from "@/lib/types";

export function estimateSectionsMinutes(sections: CurriculumSection[]) {
  return sections.reduce((total, section) => total + section.estimatedMinutes, 0);
}
