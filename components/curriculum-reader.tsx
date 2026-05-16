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
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Book } from "@/lib/types";
import { cn } from "@/lib/utils";

type ReaderState = {
  completed: string[];
  bookmarks: string[];
  highlights: string[];
};

const emptyState: ReaderState = {
  completed: [],
  bookmarks: [],
  highlights: []
};

export function CurriculumReader({ book }: { book: Book }) {
  const storageKey = `curriculum:${book.slug}`;
  const [readerState, setReaderState] = useState<ReaderState>(emptyState);
  const [activeSection, setActiveSection] = useState(book.sections[0]?.id);
  const [lessonProgress, setLessonProgress] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      setReaderState(JSON.parse(stored) as ReaderState);
    }
  }, [storageKey]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(readerState));
  }, [readerState, storageKey]);

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

  const progress = useMemo(() => {
    if (!book.sections.length) return 0;
    return Math.round((readerState.completed.length / book.sections.length) * 100);
  }, [book.sections.length, readerState.completed.length]);

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

  const toggle = (key: keyof ReaderState, id: string) => {
    setReaderState((current) => {
      const exists = current[key].includes(id);
      return {
        ...current,
        [key]: exists
          ? current[key].filter((item) => item !== id)
          : [...current[key], id]
      };
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/40">
        <div className="container py-7">
          <Button asChild variant="ghost" size="sm" className="-ml-3 mb-4">
            <Link href="/library">
              <ChevronLeft className="h-4 w-4" />
              Library
            </Link>
          </Button>
          <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                {book.category} / {book.difficulty}
              </p>
              <h1 className="mt-3 font-serif text-5xl font-semibold tracking-normal md:text-7xl">
                {book.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                {book.description}
              </p>
            </div>
            <div className="rounded-md border border-border bg-background/55 p-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Reading progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
                <span>{book.sections.length} lessons</span>
                <span>{book.readingEstimateMinutes} min</span>
                <span>{readerState.bookmarks.length} saved</span>
              </div>
              <div className="mt-5 border-t border-border/70 pt-4">
                <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Current lesson</span>
                  <span>{lessonProgress}%</span>
                </div>
                <Progress value={lessonProgress} className="h-1.5" />
                <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted-foreground">
                  {activeTopLevelSection?.title}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-md border border-border bg-background/55 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Target className="h-4 w-4" />
                What this curriculum teaches
              </div>
              <p className="font-serif text-2xl leading-8 text-foreground md:text-3xl md:leading-10">
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

      <div className="container grid gap-10 py-8 lg:grid-cols-[270px_minmax(0,800px)] lg:py-14 xl:grid-cols-[270px_minmax(0,800px)_200px]">
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
                className="scroll-mt-28 border-b border-border/70 py-16 first:pt-0 md:py-20"
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
                <div className="flex items-start justify-between gap-5 border-b border-border/70 pb-8">
                  <div>
                    <h2 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.02] tracking-normal md:text-6xl">
                      {section.title}
                    </h2>
                    <p className="mt-5 max-w-3xl font-serif text-2xl leading-9 text-muted-foreground md:text-[1.7rem] md:leading-10">
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

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-card/45 p-5">
                    <h3 className="font-serif text-2xl font-semibold">
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
                  <div className="rounded-md border border-border bg-card/45 p-5">
                    <h3 className="font-serif text-2xl font-semibold">
                      Why It Matters
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {section.whyThisMatters}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-card/45 p-5">
                    <h3 className="font-serif text-2xl font-semibold">
                      Applied Examples
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                      {section.appliedExamples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-border bg-card/45 p-5">
                    <h3 className="font-serif text-2xl font-semibold">
                      Retention Notes
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                      {section.retentionAnchors.map((anchor) => (
                        <li key={anchor}>{anchor}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 rounded-md border border-border bg-card/40 p-5">
                  <h3 className="font-serif text-2xl font-semibold">
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
            <p className="text-sm font-medium">Study State</p>
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
              Saved locally for now. The data model is ready for account-level
              sync, AI recall prompts, and spaced review.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
