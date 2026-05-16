import type { Book, CurriculumSection } from "@/lib/types";

export type StoredReaderState = {
  completed: string[];
  bookmarks: string[];
  highlights: string[];
  lastActiveSection?: string;
  lastScrollY?: number;
  lastVisitedAt?: number;
  readingProgress?: number;
};

export type BookProgressSummary = {
  completedCount: number;
  totalLessons: number;
  percentComplete: number;
  currentSection?: CurriculumSection;
  currentLessonIndex: number;
  estimatedRemainingMinutes: number;
  hasStarted: boolean;
  continueHref: string;
};

export const LAST_OPENED_BOOK_KEY = "kc-last-opened-book";

export function getBookStorageKey(slug: string) {
  return `curriculum:${slug}`;
}

export function emptyReaderState(): StoredReaderState {
  return {
    completed: [],
    bookmarks: [],
    highlights: []
  };
}

function normalizeReaderState(value: unknown): StoredReaderState {
  if (!value || typeof value !== "object") return emptyReaderState();
  const input = value as Partial<StoredReaderState>;
  return {
    completed: Array.isArray(input.completed) ? input.completed : [],
    bookmarks: Array.isArray(input.bookmarks) ? input.bookmarks : [],
    highlights: Array.isArray(input.highlights) ? input.highlights : [],
    lastActiveSection:
      typeof input.lastActiveSection === "string"
        ? input.lastActiveSection
        : undefined,
    lastScrollY: typeof input.lastScrollY === "number" ? input.lastScrollY : undefined,
    lastVisitedAt:
      typeof input.lastVisitedAt === "number" ? input.lastVisitedAt : undefined,
    readingProgress:
      typeof input.readingProgress === "number" ? input.readingProgress : undefined
  };
}

export function readBookProgress(slug: string): StoredReaderState {
  if (typeof window === "undefined") return emptyReaderState();
  try {
    const stored = window.localStorage.getItem(getBookStorageKey(slug));
    if (!stored) return emptyReaderState();
    return normalizeReaderState(JSON.parse(stored));
  } catch {
    return emptyReaderState();
  }
}

export function writeBookProgress(slug: string, state: StoredReaderState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(getBookStorageKey(slug), JSON.stringify(state));
}

export function readLastOpenedBookSlug() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(LAST_OPENED_BOOK_KEY);
}

export function writeLastOpenedBookSlug(slug: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LAST_OPENED_BOOK_KEY, slug);
}

export function getSectionById(book: Book, sectionId?: string) {
  if (!sectionId) return undefined;
  return book.sections.find((section) => section.id === sectionId);
}

export function getBookProgressSummary(
  book: Book,
  state: StoredReaderState
): BookProgressSummary {
  const totalLessons = book.sections.length;
  const completed = new Set(state.completed);
  const completedCount = book.sections.filter((section) =>
    completed.has(section.id)
  ).length;
  const lessonPercentComplete = totalLessons
    ? Math.round((completedCount / totalLessons) * 100)
    : 0;
  const readingPercentComplete =
    typeof state.readingProgress === "number"
      ? Math.max(0, Math.min(100, Math.round(state.readingProgress)))
      : 0;
  const percentComplete = Math.max(
    lessonPercentComplete,
    readingPercentComplete
  );
  const currentSection =
    getSectionById(book, state.lastActiveSection) || book.sections[0];
  const currentLessonIndex = currentSection
    ? Math.max(
        0,
        book.sections.findIndex((section) => section.id === currentSection.id)
      )
    : 0;
  const remainingByLessons = book.sections
    .filter((section) => !completed.has(section.id))
    .reduce((total, section) => total + section.estimatedMinutes, 0);
  const remainingByReadingProgress = Math.round(
    book.readingEstimateMinutes * ((100 - percentComplete) / 100)
  );
  const estimatedRemainingMinutes =
    percentComplete > 0
      ? Math.min(remainingByLessons, remainingByReadingProgress)
      : remainingByLessons;
  const hasStarted = Boolean(
    state.lastActiveSection ||
      state.lastVisitedAt ||
      state.readingProgress ||
      completedCount ||
      state.bookmarks.length ||
      state.highlights.length
  );

  return {
    completedCount,
    totalLessons,
    percentComplete,
    currentSection,
    currentLessonIndex,
    estimatedRemainingMinutes,
    hasStarted,
    continueHref: currentSection
      ? `/books/${book.slug}#${currentSection.id}`
      : `/books/${book.slug}`
  };
}

export function formatMinutes(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  if (!remainder) return `${hours}h`;
  return `${hours}h ${remainder}m`;
}
