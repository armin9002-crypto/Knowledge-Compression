import { atomicHabits } from "@/content/books/atomic-habits";
import { psychologyOfMoney } from "@/content/books/psychology-of-money";
import { thinkingFastAndSlow } from "@/content/books/thinking-fast-and-slow";

export const books = [atomicHabits, thinkingFastAndSlow, psychologyOfMoney];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getAvailableBooks() {
  return books.filter((book) => book.sections.length > 0);
}
