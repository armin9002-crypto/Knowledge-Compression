# Codex Handoff: Knowledge Compression

## 1. Project Overview

Knowledge Compression is a Next.js App Router / TypeScript application that turns nonfiction books into deep, long-form compressed curricula. The app is book-focused: a reader enters a book module, studies a structured curriculum, and leaves with a serious grasp of the book's major ideas, frameworks, applications, and synthesis.

The current implementation uses Tailwind CSS, shadcn-style UI primitives, Framer Motion, and Lucide React icons.

## 2. Product Philosophy

Knowledge Compression should feel like a premium digital textbook, a compressed masterclass, and a deep study guide. It prioritizes depth over brevity, prose-first reading over cards, and book-specific conceptual clarity over generic self-help framing.

This product is not a quick-summary app, not a microlearning sprint, not gamified, and not a workbook. Avoid exercise cards, reflection cards, user-response fields, homework prompts, and saved-answer interactions. Keep practical application, but express it as applied examples, implementation guidance, mental models, key distinctions, and synthesis.

## 3. Current State

Built so far:

- Landing page at `app/page.tsx`.
- Library page at `app/library/page.tsx`.
- Dynamic book curriculum route at `app/books/[slug]/page.tsx`.
- Atomic Habits as the first full long-form module in `content/books/atomic-habits.ts`.
- Planned placeholder metadata for The Psychology of Money and Thinking, Fast and Slow.
- Scalable book exports in `content/books/index.ts`.
- Curriculum schema in `lib/types.ts`.
- Flexible prose-first block renderer in `components/content-renderer.tsx`.
- Reading UI with table of contents, progress, bookmarks, highlights, completed lessons, and localStorage persistence in `components/curriculum-reader.tsx`.
- Content standard in `docs/content-standard.md`.

## 4. Architecture Overview

Important paths:

- `app/page.tsx`: landing page with featured books and product philosophy.
- `app/library/page.tsx`: book library grid.
- `app/books/[slug]/page.tsx`: dynamic book route. It uses `getAvailableBooks()` for `generateStaticParams()` and renders `CurriculumReader`.
- `content/books/index.ts`: imports all book files, exports `books`, `getBook(slug)`, and `getAvailableBooks()`.
- `content/books/atomic-habits.ts`: first complete curriculum and current quality reference.
- `content/books/psychology-of-money.ts` and `content/books/thinking-fast-and-slow.ts`: planned book metadata with empty `sections`.
- `content/utils/readingTime.ts`: helper for summing section estimates.
- `lib/types.ts`: book, section, subsection, and content block types.
- `components/content-renderer.tsx`: renders content blocks into the editorial reading experience.
- `components/curriculum-reader.tsx`: book overview, lesson navigation, progress, bookmark/highlight controls, and reader state persistence.
- `components/book-card.tsx` and `components/book-cover.tsx`: library and featured book presentation.
- `components/site-header.tsx`: global header.
- `components/ui/button.tsx` and `components/ui/progress.tsx`: shadcn-style primitives.

To add a new book later, create a new file under `content/books/<slug>.ts`, export a `Book`, import it in `content/books/index.ts`, add it to the `books` array, and write sections using the prose-first schema. Books with empty `sections` can appear in the library, but only books returned by `getAvailableBooks()` generate curriculum routes.

## 5. Content Model

The main schema lives in `lib/types.ts`.

`Book` metadata includes slug, title, author, category, description, featured status, difficulty, completion time, reading estimate, curriculum version, primary themes, intended outcomes, promise, audience, source notes, and `sections`.

`CurriculumSection` includes id, title, eyebrow, estimated minutes, summary, learning objectives, key concepts, content blocks, optional subsections, applied examples, why-this-matters, practical application, common mistakes, misconceptions, retention anchors, takeaways, and optional related sections.

Supported `ContentBlock` types include:

- `paragraph`
- `heading`
- `callout`
- `quoteStyleInsight`
- `synthesis`
- `warning`
- `list`
- `orderedList`
- `checklist`
- `conceptCard`
- `example`
- `expandedExample`
- `application`
- `keyDistinction`
- `misconception`
- `mentalModel`
- `diagram`
- `framework`
- `comparisonTable`
- `retentionAnchor`

Exercise and reflection prompt blocks have been removed from the active schema and renderer. Future books should not rely on workbook-style prompts or user-input interactions.

## 6. Atomic Habits As Template

Atomic Habits is the first full module and should be treated as the reference for depth, tone, and lesson structure. It uses 12 substantial lessons rather than many micro-modules. Each lesson is paragraph-heavy and supported by examples, key distinctions, misconceptions, application guidance, frameworks, and takeaways.

Future books should follow the same long-form lesson approach, but adapt to the actual subject of the book. A finance book should teach financial philosophy, risk, incentives, behavior, and frameworks. A theology book should teach its theological structure and worldview. A psychology book should teach models of mind and behavior. Do not force every book into habit or self-help language.

## 7. Important Product Decisions

- Use 8-14 substantial lessons per full book, not 30+ micro-modules.
- Prefer paragraphs and teaching prose over card stacks.
- Avoid exercise cards, reflection cards, user-response fields, and homework-style interactions.
- Keep practical application, but frame it as implementation guidance, applied examples, practical playbooks, and synthesis.
- Do not add auth, backend, accounts, database, or AI chat unless explicitly requested.
- Do not redesign the app from scratch; preserve the premium, calm, editorial UI.
- Keep the reading experience optimized for long-form comprehension.

## 8. Copyright And Content Safety

Curricula must be original transformed educational content.

- Do not copy book text.
- Do not reproduce long quotes.
- Do not create chapter-by-chapter copied summaries.
- Do not paraphrase so closely that the curriculum substitutes for the book's expression.
- Explain ideas in original language with practical synthesis, examples, distinctions, and applications.
- Reference ideas at a high level and keep any quotes minimal.

## 9. Next Recommended Step

The next likely product task is adding the second full book module. Before doing that, a fresh Codex chat should read:

- `docs/content-standard.md`
- `docs/codex-handoff.md`
- `content/books/atomic-habits.ts`
- `lib/types.ts`
- `components/content-renderer.tsx`
- `components/curriculum-reader.tsx`

Then add the next book using the established standard: book-specific, long-form, prose-first, substantial, and original.

## 10. Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```
