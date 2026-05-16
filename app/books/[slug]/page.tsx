import { notFound } from "next/navigation";
import { CurriculumReader } from "@/components/curriculum-reader";
import { getBook } from "@/content/books";

export function generateStaticParams() {
  return [{ slug: "atomic-habits" }];
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
