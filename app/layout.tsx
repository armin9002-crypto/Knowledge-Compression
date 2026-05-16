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
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var stored = window.localStorage.getItem("kc-theme");
                var theme = stored === "light" || stored === "sepia" || stored === "dark" ? stored : "dark";
                var root = document.documentElement;
                root.dataset.theme = theme;
                root.classList.toggle("dark", theme === "dark");
              } catch (error) {
                document.documentElement.dataset.theme = "dark";
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
