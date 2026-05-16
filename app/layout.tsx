import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Curriculum | Master the world's best ideas",
  description:
    "A premium deep-learning platform that transforms great nonfiction into comprehensive compressed curricula."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      data-theme="dark"
      data-reading-size="medium"
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var stored = window.localStorage.getItem("kc-theme");
                var theme = stored === "light" || stored === "sepia" || stored === "dark" ? stored : "dark";
                var storedReadingSize = window.localStorage.getItem("kc-reading-size");
                var readingSize = storedReadingSize === "small" || storedReadingSize === "medium" || storedReadingSize === "large" ? storedReadingSize : "medium";
                var root = document.documentElement;
                root.dataset.theme = theme;
                root.dataset.readingSize = readingSize;
                root.classList.toggle("dark", theme === "dark");
              } catch (error) {
                document.documentElement.dataset.theme = "dark";
                document.documentElement.dataset.readingSize = "medium";
                document.documentElement.classList.add("dark");
              }
            })();
          `}
        </Script>
      </head>
      <body className={cn(inter.variable, newsreader.variable, "min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
