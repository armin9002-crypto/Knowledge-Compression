import Link from "next/link";
import {
  ArrowRight,
  BookMarked,
  Brain,
  Check,
  GraduationCap,
  Layers,
  Library,
  PenLine
} from "lucide-react";
import { BookCard } from "@/components/book-card";
import { BookCover } from "@/components/book-cover";
import { FadeIn, FloatingStack } from "@/components/motion-shell";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { books } from "@/content/books";

const principles = [
  {
    icon: Brain,
    title: "Depth over speed",
    text: "Each module preserves the architecture of the argument, not just the punchlines."
  },
  {
    icon: Layers,
    title: "Structured compression",
    text: "Books become guided curricula with concepts, examples, diagrams, and retention notes."
  },
  {
    icon: PenLine,
    title: "Retention by design",
    text: "Progress, bookmarks, highlights, and future recall flows make learning durable."
  }
];

export default function Home() {
  const featured = books.filter((book) => book.featured);
  const firstBook = books[0];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(84,143,135,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="container relative grid min-h-[calc(100vh-4rem)] gap-12 py-14 md:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <FadeIn>
              <div>
                <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  Deep learning from great nonfiction
                </p>
                <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl md:text-8xl">
                  Master the world&apos;s best ideas.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
                  Curriculum transforms important nonfiction into comprehensive
                  compressed courses: readable, structured, retained, and worthy
                  of serious attention.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/books/atomic-habits">
                      Start Atomic Habits
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/library">
                      <Library className="h-4 w-4" />
                      Browse Library
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FloatingStack>
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="absolute -left-6 top-16 hidden w-44 rotate-[-8deg] opacity-75 sm:block">
                  <BookCover
                    title="Thinking, Fast and Slow"
                    author="Daniel Kahneman"
                    category="Cognition"
                    tone={books[1].coverTone}
                  />
                </div>
                <div className="absolute -right-5 bottom-12 hidden w-44 rotate-[7deg] opacity-80 sm:block">
                  <BookCover
                    title="Psychology of Money"
                    author="Morgan Housel"
                    category="Finance"
                    tone={books[2].coverTone}
                  />
                </div>
                <div className="relative mx-auto w-72 sm:w-80">
                  <BookCover
                    title={firstBook.title}
                    author={firstBook.author}
                    category={firstBook.category}
                    tone={firstBook.coverTone}
                    className="shadow-glow"
                  />
                </div>
              </div>
            </FloatingStack>
          </div>
        </section>

        <section id="philosophy" className="border-b border-border py-16 md:py-24">
          <div className="container">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                Product philosophy
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                Not summaries. Compressed curricula.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                The goal is not to skim the shadow of a book. The goal is to
                absorb its durable value: the thesis, the structure, the mental
                models, the applications, and the review loops that help the
                ideas stay available after the session ends.
              </p>
            </FadeIn>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {principles.map((principle, index) => (
                <FadeIn key={principle.title} delay={index * 0.08}>
                  <div className="h-full rounded-md border border-border bg-card/60 p-6">
                    <principle.icon className="h-5 w-5 text-accent-foreground" />
                    <h3 className="mt-6 font-serif text-2xl font-semibold">
                      {principle.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {principle.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="preview" className="border-b border-border py-16 md:py-24">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                Reading experience
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                Built for long-form understanding.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Sticky curriculum navigation, section completion, local progress,
                bookmarks, highlighted concepts, and quiet typography support the
                kind of reading that rewards time instead of punishing it.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Optimized reading width and dark-mode contrast",
                  "Section-level progress and learning state",
                  "Expandable content model for future AI recall and tutoring"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent-foreground" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-md border border-border bg-card/65 p-5 shadow-panel">
                <div className="border-b border-border pb-5">
                  <p className="text-sm text-muted-foreground">
                    Atomic Habits / Section 03
                  </p>
                  <h3 className="mt-2 font-serif text-4xl font-semibold">
                    The Four Laws of Behavior Change
                  </h3>
                </div>
                <div className="grid gap-5 pt-5 md:grid-cols-[180px_1fr]">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="rounded-md bg-accent/15 px-3 py-2 text-foreground">
                      Core thesis
                    </p>
                    <p className="px-3 py-2">Identity-based habits</p>
                    <p className="px-3 py-2">Four laws</p>
                    <p className="px-3 py-2">Environment design</p>
                  </div>
                  <div className="space-y-5">
                    <p className="font-serif text-2xl leading-8">
                      Behavior change is a design problem before it is a
                      discipline problem.
                    </p>
                    <p className="leading-7 text-muted-foreground">
                      Make good habits obvious, attractive, easy, and satisfying.
                      Invert those same laws to weaken behaviors you no longer
                      want to reinforce.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {["Cue", "Craving", "Response", "Reward"].map((step) => (
                        <div
                          key={step}
                          className="rounded-md border border-border bg-background/60 p-4 text-sm"
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  Featured library
                </p>
                <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
                  Serious books, designed for study.
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/library">
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {featured.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-foreground">
            <BookMarked className="h-4 w-4" />
            <span className="font-serif text-lg">Curriculum</span>
          </div>
          <p>Compressed wisdom for deep, durable understanding.</p>
        </div>
      </footer>
    </>
  );
}
