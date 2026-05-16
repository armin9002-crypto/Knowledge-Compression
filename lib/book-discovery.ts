import type { Book } from "@/lib/types";

export type DiscoveryFacet = {
  label: string;
  count: number;
};

function toTitleCase(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) =>
      word.length <= 3 && word === word.toUpperCase()
        ? word
        : `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    )
    .join(" ");
}

export function normalizeDiscoveryValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function getBookDiscoveryTerms(book: Book) {
  const categoryTerms = book.category
    .split("/")
    .map(normalizeDiscoveryValue)
    .filter(Boolean);

  return Array.from(
    new Set([
      ...categoryTerms,
      ...book.primaryThemes.map(normalizeDiscoveryValue)
    ])
  );
}

export function getBookSearchText(book: Book) {
  return [
    book.title,
    book.author,
    book.category,
    book.description,
    book.promise,
    ...book.primaryThemes,
    ...book.intendedOutcomes,
    ...book.sections.map((section) => section.title)
  ]
    .join(" ")
    .toLowerCase();
}

export function getDiscoveryFacets(books: Book[]) {
  const counts = new Map<string, { label: string; count: number }>();

  books.forEach((book) => {
    getBookDiscoveryTerms(book).forEach((term) => {
      const key = term.toLowerCase();
      const existing = counts.get(key);
      counts.set(key, {
        label: existing?.label || toTitleCase(term),
        count: (existing?.count || 0) + 1
      });
    });
  });

  return Array.from(counts.values()).sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.label.localeCompare(b.label);
  });
}
