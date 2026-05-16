import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Module unavailable
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold">
          This curriculum is still being prepared.
        </h1>
        <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
          The library architecture is ready for additional books, but only the
          Atomic Habits curriculum is published in this build.
        </p>
        <Button asChild className="mt-8">
          <Link href="/library">Return to library</Link>
        </Button>
      </main>
    </>
  );
}
