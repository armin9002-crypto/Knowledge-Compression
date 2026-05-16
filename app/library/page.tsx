import { Search, SlidersHorizontal } from "lucide-react";
import { BookCard } from "@/components/book-card";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { books } from "@/content/books";

export default function LibraryPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-10 md:py-14">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Library
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-normal sm:text-5xl md:text-7xl">
              Compressed curricula for enduring ideas.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              A growing catalog of nonfiction modules built for depth,
              comprehension, and long-form retention.
            </p>
          </div>
          <div className="rounded-md border border-border bg-card/60 p-4">
            <div className="flex items-center gap-3 rounded-md border border-border bg-background/60 px-3 py-2 text-muted-foreground">
              <Search className="h-4 w-4" />
              <span className="text-sm">Search architecture ready</span>
            </div>
            <div className="mt-3 flex gap-2">
              <Button variant="secondary" size="sm">All</Button>
              <Button variant="ghost" size="sm">Behavior</Button>
              <Button variant="ghost" size="sm">Cognition</Button>
              <Button variant="outline" size="icon" title="Filters">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </main>
    </>
  );
}
