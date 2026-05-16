import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { BookCover } from "@/components/book-cover";
import { Progress } from "@/components/ui/progress";
import type { Book } from "@/lib/types";

export function BookCard({ book }: { book: Book }) {
  const isAvailable = book.sections.length > 0;

  return (
    <Link
      href={isAvailable ? `/books/${book.slug}` : "/library"}
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
            <span>{isAvailable ? "Curriculum progress" : "Planned module"}</span>
            <span>{book.progress}%</span>
          </div>
          <Progress value={book.progress} />
        </div>
      </div>
    </Link>
  );
}
