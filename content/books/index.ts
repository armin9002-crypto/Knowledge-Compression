import { atomicHabits } from "@/content/books/atomic-habits";
import { almanackOfNavalRavikant } from "@/content/books/almanack-of-naval-ravikant";
import { barkingUpTheWrongTree } from "@/content/books/barking-up-the-wrong-tree";
import { blink } from "@/content/books/blink";
import { charismaMyth } from "@/content/books/charisma-myth";
import { everythingIsFcked } from "@/content/books/everything-is-fcked";
import { hardThingAboutHardThings } from "@/content/books/hard-thing-about-hard-things";
import { influence } from "@/content/books/influence";
import { lawsOfHumanNature } from "@/content/books/laws-of-human-nature";
import { letThemTheory } from "@/content/books/let-them-theory";
import { neverSplitTheDifference } from "@/content/books/never-split-the-difference";
import { outliers } from "@/content/books/outliers";
import { psychologyOfMoney } from "@/content/books/psychology-of-money";
import { subtleArtOfNotGiving } from "@/content/books/subtle-art-of-not-giving";
import { theAntidote } from "@/content/books/the-antidote";
import { thinkingFastAndSlow } from "@/content/books/thinking-fast-and-slow";
import { tippingPoint } from "@/content/books/tipping-point";
import { zeroToOne } from "@/content/books/zero-to-one";

export const books = [
  charismaMyth,
  tippingPoint,
  blink,
  outliers,
  everythingIsFcked,
  hardThingAboutHardThings,
  subtleArtOfNotGiving,
  barkingUpTheWrongTree,
  theAntidote,
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
