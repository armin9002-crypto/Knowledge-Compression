"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  formatMinutes,
  getBookProgressSummary,
  readBookProgress,
  readLastOpenedBookSlug,
  type BookProgressSummary
} from "@/lib/reader-progress";
import type { Book } from "@/lib/types";

type ContinueReading = {
  book: Book;
  summary: BookProgressSummary;
  lastVisitedAt: number;
};

export function ContinueReadingCard({ books }: { books: Book[] }) {
  const [continueReading, setContinueReading] =
    useState<ContinueReading | null>(null);

  useEffect(() => {
    const lastOpenedSlug = readLastOpenedBookSlug();
    const candidates = books
      .map((book) => {
        const state = readBookProgress(book.slug);
        const summary = getBookProgressSummary(book, state);
        return {
          book,
          summary,
          lastVisitedAt: state.lastVisitedAt || 0
        };
      })
      .filter((candidate) => candidate.summary.hasStarted);

    if (!candidates.length) return;

    const preferred =
      candidates.find((candidate) => candidate.book.slug === lastOpenedSlug) ||
      candidates.sort((a, b) => b.lastVisitedAt - a.lastVisitedAt)[0];

    setContinueReading(preferred);
  }, [books]);

  if (!continueReading) return null;

  const { book, summary } = continueReading;

  return (
    <div className="mt-8 max-w-2xl rounded-md border border-border bg-card/70 p-4 shadow-panel">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" />
            Continue Reading
          </div>
          <h2 className="truncate font-serif text-2xl font-semibold">
            {book.title}
          </h2>
          <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
            Lesson {summary.currentLessonIndex + 1}:{" "}
            {summary.currentSection?.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>
              {summary.completedCount} of {summary.totalLessons} lessons complete
            </span>
            <span>{summary.percentComplete}% complete</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {formatMinutes(summary.estimatedRemainingMinutes)} remaining
            </span>
          </div>
          <Progress value={summary.percentComplete} className="mt-3 h-1.5" />
        </div>
        <Button asChild className="shrink-0">
          <Link href={summary.continueHref}>
            Continue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
