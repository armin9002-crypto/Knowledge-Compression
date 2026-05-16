import { cn } from "@/lib/utils";

type BookCoverProps = {
  title: string;
  author: string;
  category: string;
  tone: string;
  className?: string;
};

export function BookCover({
  title,
  author,
  category,
  tone,
  className
}: BookCoverProps) {
  return (
    <div
      className={cn(
        "relative aspect-[3/4] overflow-hidden rounded-md border border-white/15 bg-gradient-to-br p-5 shadow-panel",
        tone,
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-white/30 blur-3xl dark:bg-white/10" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="mb-5 h-px w-16 bg-foreground/30" />
          <p className="text-xs uppercase tracking-[0.24em] text-foreground/60">
            {category}
          </p>
        </div>
        <div>
          <h3 className="font-serif text-3xl font-semibold leading-none text-foreground">
            {title}
          </h3>
          <p className="mt-4 text-sm text-foreground/70">{author}</p>
        </div>
      </div>
    </div>
  );
}
