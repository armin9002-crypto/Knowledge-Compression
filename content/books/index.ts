import { atomicHabits } from "@/content/books/atomic-habits";
import { almanackOfNavalRavikant } from "@/content/books/almanack-of-naval-ravikant";
import { influence } from "@/content/books/influence";
import { lawsOfHumanNature } from "@/content/books/laws-of-human-nature";
import { letThemTheory } from "@/content/books/let-them-theory";
import { neverSplitTheDifference } from "@/content/books/never-split-the-difference";
import { psychologyOfMoney } from "@/content/books/psychology-of-money";
import { thinkingFastAndSlow } from "@/content/books/thinking-fast-and-slow";
import { zeroToOne } from "@/content/books/zero-to-one";

export const books = [
  zeroToOne,
  lawsOfHumanNature,
  letThemTheory,
  atomicHabits,
  thinkingFastAndSlow,
  psychologyOfMoney,
  almanackOfNavalRavikant,
  influence,
  neverSplitTheDifference
];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getAvailableBooks() {
  return books.filter((book) => book.sections.length > 0);
}
