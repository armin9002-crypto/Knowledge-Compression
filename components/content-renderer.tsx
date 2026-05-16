"use client";

import {
  AlertTriangle,
  Brain,
  Check,
  ClipboardCheck,
  GitCompare,
  Lightbulb,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import type { ContentBlock } from "@/lib/types";
import { cn } from "@/lib/utils";

function NumberedCards({
  title,
  items,
  ordered = false
}: {
  title?: string;
  items: string[];
  ordered?: boolean;
}) {
  return (
    <div className="my-7 rounded-md border border-border/80 bg-secondary/15 p-4 md:p-5">
      {title ? (
        <p className="my-0 mb-4 text-sm font-medium text-muted-foreground">
          {title}
        </p>
      ) : null}
      <div className="space-y-2.5">
        {items.map((item, index) => (
          <div key={item} className="flex gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-background font-sans text-xs text-muted-foreground">
              {ordered ? index + 1 : <Check className="h-3.5 w-3.5" />}
            </span>
            <span className="font-sans text-[0.95rem] leading-6">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContentRenderer({
  blocks
}: {
  blocks: ContentBlock[];
  storagePrefix?: string;
}) {
  return (
    <div className="editorial-prose">
      {blocks.map((block, index) => {
        const key = block.id || `${block.type}-${index}`;

        if (block.type === "paragraph") {
          return <p key={key}>{block.text}</p>;
        }

        if (block.type === "heading") {
          return (
            <div key={key} className="mb-4 mt-10 border-t border-border/70 pt-7 md:mt-12 md:pt-8">
              {block.eyebrow ? (
                <p className="my-0 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {block.eyebrow}
                </p>
              ) : null}
              <h3 className="mt-2 font-serif text-2xl font-semibold md:text-3xl">
                {block.title}
              </h3>
            </div>
          );
        }

        if (
          block.type === "callout" ||
          block.type === "quoteStyleInsight" ||
          block.type === "synthesis" ||
          block.type === "warning"
        ) {
          const Icon =
            block.type === "warning"
              ? AlertTriangle
              : block.type === "synthesis"
                ? Sparkles
                : Lightbulb;
          return (
            <aside
              key={key}
              className={cn(
                "my-8 rounded-md border-l-2 border-r-0 border-t-0 border-b-0 p-4 md:my-9 md:p-5",
                block.type === "warning"
                  ? "border-amber-400/50 bg-amber-400/5"
                  : "border-accent/60 bg-accent/10"
              )}
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground/80 md:text-sm">
                <Icon className="h-4 w-4" />
                {block.title}
              </div>
              <p className="mb-0 mt-3 font-serif text-[clamp(1.28rem,1.14rem+0.42vw,1.55rem)] leading-[1.38] text-foreground">
                {block.text}
              </p>
            </aside>
          );
        }

        if (block.type === "list" || block.type === "orderedList") {
          return (
            <NumberedCards
              key={key}
              title={block.title}
              items={block.items}
              ordered={block.type === "orderedList"}
            />
          );
        }

        if (block.type === "checklist") {
          return (
            <div
              key={key}
              className="my-7 rounded-md border border-border/80 bg-card/45 p-4 md:p-5"
            >
              {block.title ? (
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <ClipboardCheck className="h-4 w-4" />
                  {block.title}
                </div>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-2">
                {block.items.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border border-border/70 bg-background/45 p-3 font-sans text-sm leading-6">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-foreground" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (block.type === "conceptCard") {
          return (
            <div
              key={key}
              className="my-8 rounded-md border border-border/80 bg-card/50 p-4 md:my-9 md:p-5"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Brain className="h-4 w-4" />
                Concept
              </div>
              <h3 className="mb-0 mt-3 font-serif text-2xl font-semibold md:text-3xl">
                {block.title}
              </h3>
              <p className="mb-0 mt-3">{block.body}</p>
              {block.whyItMatters ? (
                <p className="mb-0 mt-4 border-l border-accent pl-4 font-sans text-[0.95rem] leading-6 text-muted-foreground">
                  {block.whyItMatters}
                </p>
              ) : null}
            </div>
          );
        }

        if (block.type === "example") {
          return (
            <div key={key} className="my-7 rounded-md border border-border/80 bg-secondary/15 p-4 md:p-5">
              <p className="my-0 text-sm font-medium text-muted-foreground">
                Example
              </p>
              <h3 className="mb-0 mt-2 font-serif text-xl font-semibold md:text-2xl">
                {block.title}
              </h3>
              <p className="mb-0 mt-3">{block.body}</p>
            </div>
          );
        }

        if (block.type === "expandedExample") {
          return (
            <div key={key} className="my-9 rounded-md border border-border/80 bg-card/45 p-4 md:my-10 md:p-5">
              <p className="my-0 text-sm font-medium text-muted-foreground">
                Expanded example
              </p>
              <h3 className="mb-0 mt-2 font-serif text-xl font-semibold md:text-2xl">
                {block.scenario}
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-md border border-border/70 bg-background/55 p-4">
                  <p className="my-0 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Default approach
                  </p>
                  <p className="mb-0 mt-2 font-sans text-[0.95rem] leading-6">
                    {block.defaultApproach}
                  </p>
                </div>
                <div className="rounded-md border border-accent/40 bg-accent/10 p-4">
                  <p className="my-0 text-xs uppercase tracking-[0.16em] text-accent-foreground/80">
                    Better approach
                  </p>
                  <p className="mb-0 mt-2 font-sans text-[0.95rem] leading-6">
                    {block.betterApproach}
                  </p>
                </div>
              </div>
              <p className="mb-0 mt-4 font-sans text-[0.95rem] leading-6 text-muted-foreground">
                {block.whyItWorks}
              </p>
            </div>
          );
        }

        if (block.type === "application") {
          return (
            <div key={key} className="my-8 rounded-md border border-border/80 bg-secondary/15 p-4 md:my-9 md:p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Target className="h-4 w-4" />
                Application
              </div>
              <h3 className="mb-0 mt-3 font-serif text-xl font-semibold md:text-2xl">
                {block.context}
              </h3>
              <NumberedCards items={block.steps} ordered />
              <p className="mb-0 mt-4 rounded-md border border-accent/30 bg-accent/10 p-4 font-sans text-[0.95rem] leading-6">
                {block.result}
              </p>
            </div>
          );
        }

        if (block.type === "keyDistinction") {
          return (
            <div key={key} className="my-8 rounded-md border border-border/80 bg-card/45 p-4 md:my-9 md:p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <GitCompare className="h-4 w-4" />
                {block.title}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-md border border-border bg-background/55 p-4">
                  <p className="my-0 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Not
                  </p>
                  <p className="mb-0 mt-2 font-sans text-[0.95rem] leading-6">{block.not}</p>
                </div>
                <div className="rounded-md border border-accent/40 bg-accent/10 p-4">
                  <p className="my-0 text-xs uppercase tracking-[0.16em] text-accent-foreground/80">
                    But
                  </p>
                  <p className="mb-0 mt-2 font-sans text-[0.95rem] leading-6">{block.but}</p>
                </div>
              </div>
            </div>
          );
        }

        if (block.type === "misconception") {
          return (
            <div key={key} className="my-8 rounded-md border border-border/80 bg-card/50 p-4 md:my-9 md:p-5">
              <p className="my-0 text-sm font-medium text-muted-foreground">
                Misconception
              </p>
              <p className="mb-0 mt-3 font-serif text-xl leading-7 text-foreground md:text-2xl md:leading-8">
                {block.misconception}
              </p>
              <p className="mb-0 mt-4 rounded-md border border-accent/30 bg-accent/10 p-4 font-sans text-[0.95rem] leading-6">
                {block.correction}
              </p>
              <p className="mb-0 mt-3 font-sans text-[0.95rem] leading-6 text-muted-foreground">
                {block.whyItMatters}
              </p>
            </div>
          );
        }

        if (block.type === "mentalModel") {
          return (
            <div key={key} className="my-8 rounded-md border border-border/80 bg-secondary/15 p-4 md:my-9 md:p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Workflow className="h-4 w-4" />
                Mental model
              </div>
              <h3 className="mb-0 mt-3 font-serif text-xl font-semibold md:text-2xl">
                {block.name}
              </h3>
              <p className="mb-0 mt-3">{block.explanation}</p>
              <p className="mb-0 mt-4 font-sans text-[0.95rem] leading-6 text-muted-foreground">
                <span className="font-medium text-foreground">Use when: </span>
                {block.useWhen}
              </p>
            </div>
          );
        }

        if (block.type === "diagram") {
          return (
            <div key={key} className="my-8 rounded-md border border-border/80 bg-secondary/15 p-4 md:my-9 md:p-5">
              <p className="my-0 text-sm font-medium text-muted-foreground">
                {block.title}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {block.steps.map((step, stepIndex) => (
                  <div key={step} className="rounded-md border border-border/70 bg-background/60 p-4">
                    <span className="text-xs text-muted-foreground">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="my-0 mt-2 font-sans text-[0.95rem] font-medium leading-6">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (block.type === "framework") {
          return (
            <div key={key} className="my-8 rounded-md border border-border/80 bg-card/45 p-4 md:my-9 md:p-5">
              <p className="my-0 text-sm font-medium text-muted-foreground">
                {block.title}
              </p>
              <div className="mt-5 space-y-3">
                {block.stages.map((stage, stageIndex) => (
                  <div key={`${stage.name}-${stageIndex}`} className="grid gap-2 rounded-md border border-border/70 bg-background/55 p-4 sm:grid-cols-[120px_1fr]">
                    <p className="my-0 font-sans text-sm font-medium text-foreground">
                      {stage.name}
                    </p>
                    <p className="my-0 font-sans text-sm leading-6 text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (block.type === "comparisonTable") {
          return (
            <div key={key} className="my-8 overflow-hidden rounded-md border border-border/80 bg-card/45 md:my-9">
              <div className="border-b border-border p-4">
                <p className="my-0 text-sm font-medium text-muted-foreground">
                  {block.title}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left font-sans text-[0.84rem] md:text-sm">
                  <thead className="bg-secondary/40 text-muted-foreground">
                    <tr>
                      {block.columns.map((column) => (
                        <th key={column} className="px-4 py-3 font-medium">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={row.join("-")} className={rowIndex === block.rows.length - 1 ? "" : "border-b border-border/70"}>
                        {row.map((cell) => (
                          <td key={cell} className="px-4 py-3 leading-6 text-muted-foreground">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        if (block.type === "retentionAnchor") {
          return (
            <div
              key={key}
              className="my-8 rounded-md border-l-2 border-r-0 border-t-0 border-b-0 border-accent/60 bg-accent/10 p-4 md:my-9 md:p-5"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground/80 md:text-sm">
                <Sparkles className="h-4 w-4" />
                {block.title}
              </div>
              <p className="mb-0 mt-3 font-serif text-[clamp(1.28rem,1.14rem+0.42vw,1.55rem)] leading-[1.38] text-foreground">
                {block.anchor}
              </p>
            </div>
          );
        }

        return (
          <div key={key} className="my-8 rounded-md border border-border bg-card/65 p-5">
            <p className="my-0 text-base leading-7 text-muted-foreground">
              Unsupported content block.
            </p>
          </div>
        );
      })}
    </div>
  );
}
