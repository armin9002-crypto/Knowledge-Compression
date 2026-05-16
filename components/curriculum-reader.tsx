"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Highlighter,
  Layers,
  ListTree,
  Menu,
  Target
} from "lucide-react";
import { ContentRenderer } from "@/components/content-renderer";
import { FontSizeToggle } from "@/components/font-size-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  emptyReaderState,
  formatMinutes,
  getBookProgressSummary,
  readBookProgress,
  writeBookProgress,
  writeLastOpenedBookSlug,
  type StoredReaderState
} from "@/lib/reader-progress";
import type { Book } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CurriculumReader({ book }: { book: Book }) {
  const [readerState, setReaderState] = useState<StoredReaderState>(() =>
    emptyReaderState()
  );
  const [hydrated, setHydrated] = useState(false);
  const [restoredPosition, setRestoredPosition] = useState(false);
  const [activeSection, setActiveSection] = useState(book.sections[0]?.id);
  const [lessonProgress, setLessonProgress] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const stored = readBookProgress(book.slug);
    const hashSection = window.location.hash.replace("#", "");
    const startingSection =
      book.sections.find((section) => section.id === hashSection)?.id ||
      book.sections.find((section) => section.id === stored.lastActiveSection)
        ?.id ||
      book.sections[0]?.id;

    setReaderState(stored);
    if (startingSection) {
      setActiveSection(startingSection);
    }
    writeLastOpenedBookSlug(book.slug);
    setHydrated(true);
  }, [book.sections, book.slug]);

  useEffect(() => {
    if (!hydrated) return;
    writeBookProgress(book.slug, readerState);
  }, [book.slug, hydrated, readerState]);

  useEffect(() => {
    if (!hydrated || restoredPosition) return;
    if (window.location.hash) {
      setRestoredPosition(true);
      return;
    }
    const sectionId = readerState.lastActiveSection;
    if (!sectionId || sectionId === book.sections[0]?.id) {
      setRestoredPosition(true);
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        block: "start"
      });
      setRestoredPosition(true);
    }, 180);

    return () => window.clearTimeout(timer);
  }, [book.sections, hydrated, readerState.lastActiveSection, restoredPosition]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.4, 0.8] }
    );

    book.sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
      section.subsections?.forEach((subsection) => {
        const subsectionNode = document.getElementById(subsection.id);
        if (subsectionNode) observer.observe(subsectionNode);
      });
    });

    return () => observer.disconnect();
  }, [book.sections]);

  const progressSummary = useMemo(
    () => getBookProgressSummary(book, readerState),
    [book, readerState]
  );

  const progress = progressSummary.percentComplete;
  const overviewSection = progressSummary.nextSection || progressSummary.currentSection;
  const overviewActionLabel = progressSummary.isComplete
    ? "Review last lesson"
    : progressSummary.nextSection &&
        progressSummary.nextSection.id !== progressSummary.currentSection?.id
      ? "Continue to next lesson"
      : "Continue from last lesson";
  const overviewSectionLabel =
    progressSummary.nextSection &&
    progressSummary.nextSection.id !== progressSummary.currentSection?.id
      ? "Next lesson"
      : "Current lesson";

  const activeTopLevelSection = useMemo(() => {
    return (
      book.sections.find(
        (section) =>
          section.id === activeSection ||
          section.subsections?.some((subsection) => subsection.id === activeSection)
      ) || book.sections[0]
    );
  }, [activeSection, book.sections]);

  useEffect(() => {
    const updateLessonProgress = () => {
      if (!activeTopLevelSection) return;
      const node = document.getElementById(activeTopLevelSection.id);
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewportAnchor = Math.min(window.innerHeight * 0.35, 260);
      const readableHeight = Math.max(rect.height - window.innerHeight * 0.55, 1);
      const raw = (viewportAnchor - rect.top) / readableHeight;
      setLessonProgress(Math.max(0, Math.min(100, Math.round(raw * 100))));
    };

    updateLessonProgress();
    window.addEventListener("scroll", updateLessonProgress, { passive: true });
    window.addEventListener("resize", updateLessonProgress);
    return () => {
      window.removeEventListener("scroll", updateLessonProgress);
      window.removeEventListener("resize", updateLessonProgress);
    };
  }, [activeTopLevelSection]);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setReadingProgress(0);
        return;
      }
      const raw = window.scrollY / scrollable;
      setReadingProgress(Math.max(0, Math.min(100, Math.round(raw * 100))));
    };

    updateReadingProgress();
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress);
    return () => {
      window.removeEventListener("scroll", updateReadingProgress);
      window.removeEventListener("resize", updateReadingProgress);
    };
  }, []);

  useEffect(() => {
    if (!hydrated || !activeTopLevelSection) return;
    setReaderState((current) => {
      if (current.lastActiveSection === activeTopLevelSection.id) {
        return current;
      }
      return {
        ...current,
        lastActiveSection: activeTopLevelSection.id,
        lastVisitedAt: Date.now()
      };
    });
  }, [activeTopLevelSection, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    setReaderState((current) => {
      if (
        current.readingProgress === readingProgress &&
        current.lastScrollY === window.scrollY
      ) {
        return current;
      }
      return {
        ...current,
        readingProgress,
        lastScrollY: window.scrollY,
        lastVisitedAt: Date.now()
      };
    });
  }, [hydrated, readingProgress]);

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId) return;
    document.getElementById(sectionId)?.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  const toggle = (
    key: "completed" | "bookmarks" | "highlights",
    id: string
  ) => {
    setReaderState((current) => {
      const exists = current[key].includes(id);
      return {
        ...current,
        [key]: exists
          ? current[key].filter((item) => item !== id)
          : [...current[key], id],
        lastActiveSection: activeTopLevelSection?.id || id,
        lastVisitedAt: Date.now()
      };
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 border-b border-border/70 bg-background/84 backdrop-blur-xl">
        <div className="mx-auto flex h-[3.25rem] w-full max-w-[1500px] items-center justify-between gap-3 px-5 sm:px-6 lg:h-12 lg:px-8">
          <div className="min-w-0 flex-1 sm:max-w-[42%]">
            <p className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Reading
            </p>
            <p className="truncate font-serif text-base font-semibold leading-5 text-foreground sm:hidden">
              {book.title}
            </p>
            <p className="truncate text-[0.7rem] leading-4 text-muted-foreground sm:hidden">
              {activeTopLevelSection?.title}
            </p>
            <p className="hidden truncate text-xs leading-5 text-muted-foreground sm:block">
              {activeTopLevelSection?.title}
            </p>
          </div>
          <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden min-w-[220px] sm:block lg:min-w-[300px]">
              <div className="mb-1 flex items-center justify-end gap-2 text-xs text-muted-foreground">
                <span className="max-w-[170px] truncate text-right font-serif text-sm font-semibold text-foreground lg:max-w-[240px]">
                  {book.title}
                </span>
                <span className="font-medium text-foreground">
                  {readingProgress}%
                </span>
              </div>
              <Progress value={readingProgress} className="h-1" />
            </div>
            <span className="w-9 text-right text-xs font-medium text-foreground sm:hidden">
              {readingProgress}%
            </span>
            <FontSizeToggle compact className="sm:hidden" />
            <ThemeToggle compact className="sm:hidden" />
            <FontSizeToggle className="hidden sm:inline-flex" />
            <ThemeToggle className="hidden sm:inline-flex" />
          </div>
        </div>
        <Progress value={readingProgress} className="h-1 rounded-none sm:hidden" />
      </div>
      <div className="border-b border-border bg-card/40">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-7 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <Button asChild variant="ghost" size="sm" className="-ml-3">
              <Link href="/library">
                <ChevronLeft className="h-4 w-4" />
                Library
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <FontSizeToggle />
              <ThemeToggle />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-end xl:grid-cols-[1fr_320px]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                {book.category} / {book.difficulty}
              </p>
              <h1 className="mt-3 font-serif text-[clamp(2.4rem,1.75rem+2.8vw,4.45rem)] font-semibold leading-[0.98] tracking-normal">
                {book.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {book.description}
              </p>
            </div>
            <div className="rounded-md border border-border bg-background/55 p-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Curriculum progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
                <span>
                  {progressSummary.completedCount} of{" "}
                  {progressSummary.totalLessons} lessons complete
                </span>
                <span>
                  {formatMinutes(progressSummary.estimatedRemainingMinutes)} left
                </span>
                <span>{readerState.bookmarks.length} saved</span>
              </div>
              <div className="mt-5 border-t border-border/70 pt-4">
                <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{overviewSectionLabel}</span>
                  <span>{lessonProgress}%</span>
                </div>
                <Progress value={lessonProgress} className="h-1.5" />
                <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted-foreground">
                  {overviewSection?.title || activeTopLevelSection?.title}
                </p>
                {progressSummary.hasStarted && overviewSection ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full"
                    onClick={() => scrollToSection(overviewSection.id)}
                  >
                    {overviewActionLabel}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-md border border-border bg-background/55 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Target className="h-4 w-4" />
                What this curriculum teaches
              </div>
              <p className="font-serif text-[clamp(1.45rem,1.18rem+0.75vw,1.85rem)] leading-[1.28] text-foreground">
                {book.promise}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {book.intendedOutcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-md border border-border/70 bg-card/55 p-3 text-sm leading-6 text-muted-foreground"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-border bg-background/55 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Layers className="h-4 w-4" />
                Curriculum map
              </div>
              <div className="flex flex-wrap gap-2">
                {book.primaryThemes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-md border border-border bg-secondary/35 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {theme}
                  </span>
                ))}
              </div>
              {book.recommendedAudience?.length ? (
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Recommended for:
                  </span>{" "}
                  {book.recommendedAudience.join(", ")}.
                </p>
              ) : null}
              {book.sourceNotes ? (
                <p className="mt-4 text-xs leading-5 text-muted-foreground">
                  {book.sourceNotes}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1500px] gap-8 px-5 py-8 sm:px-6 lg:grid-cols-[250px_minmax(0,780px)] lg:justify-center lg:gap-10 lg:px-8 lg:py-14 xl:grid-cols-[250px_minmax(0,780px)_180px] xl:gap-12 2xl:max-w-[1600px]">
        <aside
          className={cn(
            "lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-auto lg:pr-1",
            navOpen ? "block" : "hidden"
          )}
        >
          <div className="rounded-md border border-border bg-card/55 p-4">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium">
              <ListTree className="h-4 w-4" />
              Curriculum Path
            </div>
            <nav className="space-y-1.5">
              {book.sections.map((section, navIndex) => {
                const done = readerState.completed.includes(section.id);
                const active =
                  activeSection === section.id ||
                  Boolean(
                    section.subsections?.some(
                      (subsection) => subsection.id === activeSection
                    )
                  );
                return (
                  <div key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={cn(
                        "flex items-start gap-3 rounded-md px-3 py-2.5 text-sm leading-5 transition-colors",
                        active
                          ? "bg-accent/15 text-foreground"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      )}
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-[0.65rem]">
                        {done ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent-foreground" />
                        ) : (
                          navIndex + 1
                        )}
                      </span>
                      <span>
                        {section.title}
                        <span className="mt-1 block text-xs text-muted-foreground/75">
                          {section.estimatedMinutes} min
                        </span>
                      </span>
                    </a>
                    {section.subsections?.length ? (
                      <div className="ml-10 mt-1 space-y-1 border-l border-border/60 pl-3">
                        {section.subsections.map((subsection) => (
                          <a
                            key={subsection.id}
                            href={`#${subsection.id}`}
                            className={cn(
                              "block rounded-md px-2 py-1.5 text-xs leading-4 transition-colors",
                              activeSection === subsection.id
                                ? "bg-secondary/70 text-foreground"
                                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                            )}
                          >
                            {subsection.title}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="lg:hidden">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setNavOpen((open) => !open)}
          >
            <Menu className="h-4 w-4" />
            Curriculum navigation
          </Button>
        </div>

        <article className="min-w-0">
          {book.sections.map((section, index) => {
            const bookmarked = readerState.bookmarks.includes(section.id);
            const highlighted = readerState.highlights.includes(section.id);
            const completed = readerState.completed.includes(section.id);

            return (
              <section
                id={section.id}
                key={section.id}
                className="scroll-mt-28 border-b border-border/70 py-14 first:pt-0 md:py-18 lg:py-20"
              >
                <div className="mb-8 flex flex-wrap items-center gap-3 font-sans text-sm text-muted-foreground">
                  <span className="rounded-md border border-border bg-card/50 px-2.5 py-1">
                    Lesson {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.eyebrow}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {section.estimatedMinutes} min read
                  </span>
                </div>
                <div className="flex items-start justify-between gap-5 border-b border-border/70 pb-7 md:pb-8">
                  <div>
                    <h2 className="max-w-3xl font-serif text-[clamp(2.15rem,1.62rem+1.7vw,3.55rem)] font-semibold leading-[1.04] tracking-normal">
                      {section.title}
                    </h2>
                    <p className="reader-summary-text mt-5 max-w-3xl font-serif leading-[1.55] text-muted-foreground">
                      {section.summary}
                    </p>
                  </div>
                  <div className="hidden gap-2 sm:flex">
                    <Button
                      variant={bookmarked ? "secondary" : "outline"}
                      size="icon"
                      title="Bookmark section"
                      onClick={() => toggle("bookmarks", section.id)}
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={highlighted ? "secondary" : "outline"}
                      size="icon"
                      title="Mark concept highlight"
                      onClick={() => toggle("highlights", section.id)}
                    >
                      <Highlighter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {section.keyConcepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-md border border-border bg-secondary/30 px-3 py-1 text-sm text-muted-foreground"
                    >
                      {concept}
                    </span>
                  ))}
                </div>

                <ContentRenderer
                  blocks={section.blocks}
                  storagePrefix={`curriculum:${book.slug}:${section.id}`}
                />

                {section.subsections?.map((subsection) => (
                  <div
                    id={subsection.id}
                    key={subsection.id}
                    className="scroll-mt-28 py-8"
                  >
                    <h3 className="font-serif text-3xl font-semibold">
                      {subsection.title}
                    </h3>
                    <ContentRenderer
                      blocks={subsection.blocks}
                      storagePrefix={`curriculum:${book.slug}:${section.id}:${subsection.id}`}
                    />
                    {subsection.practicalApplication ? (
                      <p className="rounded-md border border-accent/35 bg-accent/10 p-4 text-sm leading-7">
                        {subsection.practicalApplication}
                      </p>
                    ) : null}
                  </div>
                ))}

                <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-card/45 p-4 md:p-5">
                    <h3 className="font-serif text-xl font-semibold md:text-2xl">
                      Learning Objectives
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                      {section.learningObjectives.map((objective) => (
                        <li key={objective} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent-foreground" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-border bg-card/45 p-4 md:p-5">
                    <h3 className="font-serif text-xl font-semibold md:text-2xl">
                      Why It Matters
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {section.whyThisMatters}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-card/45 p-4 md:p-5">
                    <h3 className="font-serif text-xl font-semibold md:text-2xl">
                      Applied Examples
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                      {section.appliedExamples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-border bg-card/45 p-4 md:p-5">
                    <h3 className="font-serif text-xl font-semibold md:text-2xl">
                      Retention Notes
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                      {section.retentionAnchors.map((anchor) => (
                        <li key={anchor}>{anchor}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 rounded-md border border-border bg-card/40 p-4 md:p-5">
                  <h3 className="font-serif text-xl font-semibold md:text-2xl">
                    Practical Application
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {section.practicalApplication}
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium">Common mistakes</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                        {section.commonMistakes.map((mistake) => (
                          <li key={mistake}>{mistake}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Section takeaways</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                        {section.takeaways.map((takeaway) => (
                          <li key={takeaway}>{takeaway}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <Button
                    variant={completed ? "secondary" : "default"}
                    onClick={() => toggle("completed", section.id)}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {completed ? "Completed" : "Mark complete"}
                  </Button>
                  <Button
                    variant={bookmarked ? "secondary" : "outline"}
                    onClick={() => toggle("bookmarks", section.id)}
                    className="sm:hidden"
                  >
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                  <Button
                    variant={highlighted ? "secondary" : "outline"}
                    onClick={() => toggle("highlights", section.id)}
                    className="sm:hidden"
                  >
                    <Highlighter className="h-4 w-4" />
                    Highlight
                  </Button>
                </div>
              </section>
            );
          })}
        </article>

        <aside className="hidden xl:block">
          <div className="sticky top-24 rounded-md border border-border bg-card/50 p-4">
            <p className="text-sm font-medium">Reading State</p>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Completed</span>
                <span>{readerState.completed.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Bookmarks</span>
                <span>{readerState.bookmarks.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Highlights</span>
                <span>{readerState.highlights.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Version</span>
                <span>{book.curriculumVersion}</span>
              </div>
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">
              Saved locally on this device so the library can remember where
              you left off.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
