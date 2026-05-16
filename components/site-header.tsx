import Link from "next/link";
import { BookOpen, Library, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/82 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card">
            <BookOpen className="h-4 w-4" />
          </span>
          <span className="font-serif text-xl font-semibold">Curriculum</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/library" className="transition-colors hover:text-foreground">
            Library
          </Link>
          <Link href="/#philosophy" className="transition-colors hover:text-foreground">
            Philosophy
          </Link>
          <Link href="/#preview" className="transition-colors hover:text-foreground">
            Preview
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href="/library">
              <Library className="h-4 w-4" />
              Browse
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/books/atomic-habits">
              <Sparkles className="h-4 w-4" />
              Start
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
