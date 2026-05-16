import { LibraryDiscovery } from "@/components/library-discovery";
import { SiteHeader } from "@/components/site-header";
import { books } from "@/content/books";

export default function LibraryPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-10 md:py-14">
        <div className="mb-10 max-w-4xl">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Library
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-normal sm:text-5xl md:text-7xl">
              Compressed curricula for enduring ideas.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              A growing catalog of nonfiction modules built for depth,
              comprehension, and long-form retention. Search by book, author,
              concept, category, or your own reading progress on this device.
            </p>
          </div>
        </div>
        <LibraryDiscovery books={books} />
      </main>
    </>
  );
}
