"use client";

import { ALargeSmall } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ReadingSize = "small" | "medium" | "large";

const sizeOrder: ReadingSize[] = ["medium", "large", "small"];

const sizeLabels: Record<ReadingSize, string> = {
  small: "Small",
  medium: "Medium",
  large: "Large"
};

const sizeMarks: Record<ReadingSize, string> = {
  small: "S",
  medium: "M",
  large: "L"
};

function isReadingSize(value: string | undefined | null): value is ReadingSize {
  return value === "small" || value === "medium" || value === "large";
}

function applyReadingSize(size: ReadingSize) {
  document.documentElement.dataset.readingSize = size;
  window.localStorage.setItem("kc-reading-size", size);
}

export function FontSizeToggle({
  className,
  compact = false
}: {
  className?: string;
  compact?: boolean;
}) {
  const [size, setSize] = useState<ReadingSize>("medium");

  useEffect(() => {
    const current =
      document.documentElement.dataset.readingSize ||
      window.localStorage.getItem("kc-reading-size");
    if (isReadingSize(current)) {
      setSize(current);
      applyReadingSize(current);
    }
  }, []);

  const nextSize = useMemo(() => {
    const currentIndex = sizeOrder.indexOf(size);
    return sizeOrder[(currentIndex + 1) % sizeOrder.length];
  }, [size]);

  const cycleSize = () => {
    setSize(nextSize);
    applyReadingSize(nextSize);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size={compact ? "icon" : "sm"}
      className={cn(
        "border-border/80 bg-card/45 text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
        compact ? "h-9 w-9" : "h-9",
        className
      )}
      aria-label={`Current reading size: ${sizeLabels[size]}. Switch to ${sizeLabels[nextSize]} reading size.`}
      title={`Reading size: ${sizeLabels[size]}`}
      onClick={cycleSize}
    >
      <ALargeSmall className="h-4 w-4" />
      {compact ? null : (
        <span className="hidden sm:inline">{sizeMarks[size]}</span>
      )}
    </Button>
  );
}
