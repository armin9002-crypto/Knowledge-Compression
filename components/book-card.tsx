"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { BookCover } from "@/components/book-cover";
import { Progress } from "@/components/ui/progress";
import {
  formatMinutes,
  getBookProgressSummary,
  readBookProgress,
  type BookProgressSummary
} from "@/lib/reader-progress";
import type { Book } from "@/lib/types";

export function BookCard({ book }: { book: Book }) {
  const isAvailable = book.sections.length > 0;
  const [summary, setSummary] = useState<BookProgressSummary>(() =>
    getBookProgressSummary(book, {
      completed: [],
      bookmarks: [],
      highlights: []
    })
  );

  useEffect(() => {
    setSummary(getBookProgressSummary(book, readBookProgress(book.slug)));
  }, [book]);

  const href = isAvailable
    ? summary.hasStarted
      ? summary.continueHref
      : `/books/${book.slug}`
    : "/library";
  const lessonLabel = summary.isComplete
    ? "Completed"
    : summary.hasStarted
      ? "Continue"
      : "Begin";
  const actionLabel = summary.isComplete
    ? "Review"
    : summary.hasStarted
      ? "Continue"
      : "Start";
  const featuredSection = summary.nextSection || summary.currentSection;

  return (
    <Link
      href={href}
      className="group block rounded-md border border-border/70 bg-card/60 p-3 transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-card hover:shadow-glow"
    >
      <BookCover
        title={book.title}
        author={book.author}
        category={book.category}
        tone={book.coverTone}
      />
      <div className="px-1 pb-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold">{book.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>
          </div>
          <span className="rounded-md border border-border p-2 text-muted-foreground transition-colors group-hover:text-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">
          {book.description}
        </p>
        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {book.category} / {book.difficulty}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {book.completionTime}
          </span>
        </div>
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-xs text-muted-foreground">
            <span>
              {isAvailable
                ? summary.isComplete
                  ? `${summary.totalLessons} of ${summary.totalLessons} lessons complete`
                  : summary.hasStarted
                  ? `${summary.completedCount} of ${summary.totalLessons} lessons complete`
                  : "Ready to begin"
                : "Planned module"}
            </span>
            <span>{summary.percentComplete}%</span>
          </div>
          <Progress value={summary.percentComplete} />
          {isAvailable ? (
            <div className="mt-4 rounded-md border border-border/70 bg-background/45 p-3">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {lessonLabel}
              </p>
              <p className="mt-1 line-clamp-1 font-serif text-lg font-semibold">
                {featuredSection?.title || "Start curriculum"}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span>
                  {summary.isComplete
                    ? "100% complete"
                    : summary.hasStarted
                    ? `${summary.percentComplete}% complete`
                    : `${summary.totalLessons} lessons`}
                </span>
                <span>
                  {summary.isComplete
                    ? "Ready to revisit"
                    : summary.hasStarted
                    ? `${formatMinutes(
                        summary.estimatedRemainingMinutes
                      )} remaining`
                    : book.completionTime}
                </span>
              </div>
              <span className="mt-3 inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors group-hover:bg-primary/90">
                {actionLabel}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
