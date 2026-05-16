"use client";

import { BookOpen, Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light" | "sepia";

const themeOrder: Theme[] = ["dark", "light", "sepia"];

const themeLabels: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
  sepia: "Sepia"
};

const themeIcons = {
  dark: Moon,
  light: Sun,
  sepia: BookOpen
};

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light" || value === "sepia";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
  window.localStorage.setItem("kc-theme", theme);
}

export function ThemeToggle({
  className,
  compact = false
}: {
  className?: string;
  compact?: boolean;
}) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current =
      document.documentElement.dataset.theme ||
      window.localStorage.getItem("kc-theme");
    if (isTheme(current)) {
      setTheme(current);
      applyTheme(current);
    }
  }, []);

  const Icon = themeIcons[theme];
  const nextTheme = useMemo(() => {
    const currentIndex = themeOrder.indexOf(theme);
    return themeOrder[(currentIndex + 1) % themeOrder.length];
  }, [theme]);

  const cycleTheme = () => {
    const next = nextTheme;
    setTheme(next);
    applyTheme(next);
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
      aria-label={`Current theme: ${themeLabels[theme]}. Switch to ${themeLabels[nextTheme]} theme.`}
      title={`Theme: ${themeLabels[theme]}`}
      onClick={cycleTheme}
    >
      <Icon className="h-4 w-4" />
      {compact ? null : <span className="hidden sm:inline">{themeLabels[theme]}</span>}
    </Button>
  );
}
