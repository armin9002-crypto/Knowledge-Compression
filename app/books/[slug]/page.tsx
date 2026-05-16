import { notFound } from "next/navigation";
import { CurriculumReader } from "@/components/curriculum-reader";
import { getAvailableBooks, getBook } from "@/content/books";

export function generateStaticParams() {
  return getAvailableBooks().map((book) => ({ slug: book.slug }));
}

export default async function BookPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book || book.sections.length === 0) {
    notFound();
  }

  return <CurriculumReader book={book} />;
}
