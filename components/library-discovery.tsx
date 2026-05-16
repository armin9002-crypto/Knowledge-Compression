"use client";

import { ArrowUpDown, Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { BookCard } from "@/components/book-card";
import { Button } from "@/components/ui/button";
import {
  getBookDiscoveryTerms,
  getBookSearchText,
  getDiscoveryFacets
} from "@/lib/book-discovery";
import {
  getBookProgressSummary,
  readBookProgress,
  type BookProgressSummary
} from "@/lib/reader-progress";
import type { Book } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProgressFilter = "all" | "not-started" | "in-progress" | "completed";
type SortMode = "recent" | "title" | "time" | "progress";

const progressFilters: { label: string; value: ProgressFilter }[] = [
  { label: "All", value: "all" },
  { label: "Not Started", value: "not-started" },
  { label: "In Progress", value: "in-progress" },
  { label: "Completed", value: "completed" }
];

const sortOptions: { label: string; value: SortMode }[] = [
  { label: "Recently Added", value: "recent" },
  { label: "Title A-Z", value: "title" },
  { label: "Estimated Time", value: "time" },
  { label: "Progress", value: "progress" }
];

function getProgressStatus(summary: BookProgressSummary): ProgressFilter {
  if (summary.isComplete) return "completed";
  if (summary.hasStarted) return "in-progress";
  return "not-started";
}

export function LibraryDiscovery({ books }: { books: Book[] }) {
  const [query, setQuery] = useState("");
  const [activeFacet, setActiveFacet] = useState("all");
  const [progressFilter, setProgressFilter] = useState<ProgressFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("recent");
  const [summaries, setSummaries] = useState<Record<string, BookProgressSummary>>(
    () =>
      Object.fromEntries(
        books.map((book) => [
          book.slug,
          getBookProgressSummary(book, {
            completed: [],
            bookmarks: [],
            highlights: []
          })
        ])
      )
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const focus = searchParams.get("focus");
    const search = searchParams.get("q");
    if (focus) setActiveFacet(focus);
    if (search) setQuery(search);
  }, []);

  useEffect(() => {
    setSummaries(
      Object.fromEntries(
        books.map((book) => [
          book.slug,
          getBookProgressSummary(book, readBookProgress(book.slug))
        ])
      )
    );
  }, [books]);

  const facets = useMemo(() => getDiscoveryFacets(books), [books]);
  const searchTextBySlug = useMemo(
    () =>
      Object.fromEntries(
        books.map((book) => [book.slug, getBookSearchText(book)])
      ),
    [books]
  );

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedFacet = activeFacet.toLowerCase();

    return books
      .filter((book) => {
        const summary = summaries[book.slug];
        const matchesSearch =
          !normalizedQuery ||
          searchTextBySlug[book.slug]?.includes(normalizedQuery);
        const matchesFacet =
          activeFacet === "all" ||
          getBookDiscoveryTerms(book).some(
            (term) => term.toLowerCase() === normalizedFacet
          );
        const matchesProgress =
          progressFilter === "all" ||
          (summary && getProgressStatus(summary) === progressFilter);

        return matchesSearch && matchesFacet && matchesProgress;
      })
      .sort((a, b) => {
        if (sortMode === "title") return a.title.localeCompare(b.title);
        if (sortMode === "time") {
          return a.readingEstimateMinutes - b.readingEstimateMinutes;
        }
        if (sortMode === "progress") {
          return (
            (summaries[b.slug]?.percentComplete || 0) -
            (summaries[a.slug]?.percentComplete || 0)
          );
        }
        return books.indexOf(a) - books.indexOf(b);
      });
  }, [
    activeFacet,
    books,
    progressFilter,
    query,
    searchTextBySlug,
    sortMode,
    summaries
  ]);

  const hasActiveFilters =
    query.trim().length > 0 ||
    activeFacet !== "all" ||
    progressFilter !== "all" ||
    sortMode !== "recent";

  const resetFilters = () => {
    setQuery("");
    setActiveFacet("all");
    setProgressFilter("all");
    setSortMode("recent");
  };

  return (
    <section className="space-y-7">
      <div className="rounded-md border border-border bg-card/60 p-4 shadow-panel sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search books, authors, concepts..."
              className="h-11 w-full rounded-md border border-input bg-background/70 pl-10 pr-10 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/25"
            />
            {query ? (
              <button
                type="button"
                className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                aria-label="Clear search"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </label>

          <label className="relative block">
            <ArrowUpDown className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              className="h-11 w-full appearance-none rounded-md border border-input bg-background/70 pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/25"
              aria-label="Sort curricula"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Category and theme
            </div>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              <FilterChip
                active={activeFacet === "all"}
                label="All"
                onClick={() => setActiveFacet("all")}
              />
              {facets.map((facet) => (
                <FilterChip
                  key={facet.label}
                  active={activeFacet.toLowerCase() === facet.label.toLowerCase()}
                  label={`${facet.label} (${facet.count})`}
                  onClick={() => setActiveFacet(facet.label)}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Reading progress
            </p>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              {progressFilters.map((filter) => (
                <FilterChip
                  key={filter.value}
                  active={progressFilter === filter.value}
                  label={filter.label}
                  onClick={() => setProgressFilter(filter.value)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          Showing{" "}
          <span className="font-medium text-foreground">
            {filteredBooks.length}
          </span>{" "}
          of {books.length} curricula
        </p>
        {hasActiveFilters ? (
          <Button type="button" variant="ghost" size="sm" onClick={resetFilters}>
            Reset filters
          </Button>
        ) : null}
      </div>

      {filteredBooks.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.slug}
              book={book}
              progressSummary={summaries[book.slug]}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-border bg-card/45 px-6 py-16 text-center">
          <p className="font-serif text-2xl font-semibold">
            No curricula match your search.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Try a broader concept, clear one filter, or browse the full library.
          </p>
          <Button type="button" variant="outline" className="mt-6" onClick={resetFilters}>
            Show all curricula
          </Button>
        </div>
      )}
    </section>
  );
}

function FilterChip({
  active,
  label,
  onClick
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "h-9 shrink-0 rounded-md border px-3 text-sm transition-colors",
        active
          ? "border-accent/70 bg-accent/15 text-foreground"
          : "border-border bg-background/45 text-muted-foreground hover:bg-secondary/65 hover:text-foreground"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
