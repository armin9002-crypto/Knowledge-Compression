import type { ContentBlock } from "@/lib/types";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="editorial-prose">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === "callout") {
          return (
            <aside
              key={index}
              className="my-8 rounded-md border border-accent/40 bg-accent/10 p-5"
            >
              <p className="my-0 text-sm font-semibold uppercase tracking-[0.16em] text-accent-foreground/80">
                {block.title}
              </p>
              <p className="mb-0 mt-3 font-serif text-2xl leading-8 text-foreground">
                {block.text}
              </p>
            </aside>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="my-7 space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <div
            key={index}
            className="my-9 rounded-md border border-border bg-secondary/30 p-5"
          >
            <p className="my-0 text-sm font-medium text-muted-foreground">
              {block.title}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {block.steps.map((step, stepIndex) => (
                <div
                  key={step}
                  className="rounded-md border border-border/70 bg-background/60 p-4"
                >
                  <span className="text-xs text-muted-foreground">
                    {String(stepIndex + 1).padStart(2, "0")}
                  </span>
                  <p className="my-0 mt-2 text-base font-medium leading-6">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
