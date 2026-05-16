# Codex Handoff: Knowledge Compression

## 1. Project Overview

Knowledge Compression is a Next.js App Router / TypeScript application that turns important nonfiction books into deep, long-form compressed curricula. The app is book-focused: a reader enters a book module, studies a structured curriculum, and leaves with a serious grasp of the book's major ideas, frameworks, applications, and synthesis.

The implementation uses Tailwind CSS, shadcn-style UI primitives, Framer Motion, Lucide React icons, localStorage persistence, and static TypeScript content modules.

## 2. Product Philosophy

Knowledge Compression should feel like a premium digital textbook, a compressed masterclass, and a deep study guide. It prioritizes depth over brevity, prose-first reading over cards, and book-specific conceptual clarity over generic self-help framing.

This product is not a quick-summary app, not a microlearning sprint, not gamified, and not a workbook. Avoid exercise cards, reflection cards, user-response fields, homework prompts, quizzes, and saved-answer interactions. Keep practical application, but express it as applied examples, implementation guidance, mental models, key distinctions, frameworks, and synthesis.

## 3. Current State

Built so far:

- Landing page at `app/page.tsx`.
- Library page at `app/library/page.tsx`.
- Dynamic book curriculum route at `app/books/[slug]/page.tsx`.
- Three full long-form book modules:
  - `content/books/atomic-habits.ts`
  - `content/books/psychology-of-money.ts`
  - `content/books/thinking-fast-and-slow.ts`
- Scalable book exports in `content/books/index.ts`.
- Curriculum schema in `lib/types.ts`.
- Flexible prose-first block renderer in `components/content-renderer.tsx`.
- Reading UI in `components/curriculum-reader.tsx` with table of contents, progress, bookmarks, highlights, completed lessons, and localStorage persistence.
- Theme cycle in `components/theme-toggle.tsx`: dark, light, sepia.
- Reading font size cycle in `components/font-size-toggle.tsx`: small, medium, large.
- Refined long-form reading typography and tightened desktop reader layout.
- Sticky reader control bar on book pages with current book title, reading progress, theme control, and font-size control.
- Content standard in `docs/content-standard.md`.

## 4. Architecture Overview

Important paths:

- `app/page.tsx`: landing page with featured books and product philosophy.
- `app/library/page.tsx`: book library grid.
- `app/books/[slug]/page.tsx`: dynamic book route. It uses `getAvailableBooks()` for `generateStaticParams()` and renders `CurriculumReader`.
- `content/books/index.ts`: imports all book files, exports `books`, `getBook(slug)`, and `getAvailableBooks()`.
- `content/books/atomic-habits.ts`: first complete curriculum and original quality reference.
- `content/books/psychology-of-money.ts`: second full curriculum.
- `content/books/thinking-fast-and-slow.ts`: third full curriculum.
- `content/utils/readingTime.ts`: helper for summing section estimates.
- `lib/types.ts`: book, section, subsection, and content block types.
- `components/content-renderer.tsx`: renders content blocks into the editorial reading experience.
- `components/curriculum-reader.tsx`: book overview, sticky reader controls, lesson navigation, scroll progress, section progress, bookmarks/highlights, completed state, and reader state persistence.
- `components/theme-toggle.tsx`: persisted theme cycling via `kc-theme`.
- `components/font-size-toggle.tsx`: persisted reading-size cycling via `kc-reading-size`.
- `components/book-card.tsx` and `components/book-cover.tsx`: library and featured book presentation.
- `components/site-header.tsx`: global header for landing/library pages.
- `components/ui/button.tsx` and `components/ui/progress.tsx`: shadcn-style primitives.

To add a new book later, create or update a file under `content/books/<slug>.ts`, export a `Book`, import it in `content/books/index.ts`, add it to the `books` array if needed, and write sections using the prose-first schema. Books with empty `sections` can appear in the library, but only books returned by `getAvailableBooks()` generate curriculum routes.

## 5. Content Model

The main schema lives in `lib/types.ts`.

`Book` metadata includes slug, title, author, category, difficulty, completion time, cover tone, description, featured status, reading estimate, curriculum version, primary themes, intended outcomes, promise, audience, source notes, and `sections`.

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

## 6. Completed Book References

Use the three completed modules as quality references:

- Atomic Habits: behavior design, identity, habit loops, the four laws, systems, applied habit playbooks.
- The Psychology of Money: financial psychology, risk, saving, wealth, status, enough, compounding, reasonable behavior, personal money philosophy.
- Thinking, Fast and Slow: System 1/System 2, heuristics, bias, probability, anchoring, availability, representativeness, overconfidence, framing, prospect theory, memory, happiness, decision safeguards.

Each uses 12 substantial lessons rather than many micro-modules. Each lesson is paragraph-heavy and supported by examples, key distinctions, misconceptions, applications, frameworks, and takeaways.

Future books should follow the same long-form lesson approach, but adapt to the actual subject of the book. A finance book should teach financial philosophy, risk, incentives, behavior, and frameworks. A psychology book should teach models of mind and behavior. A business book should teach strategy, operations, positioning, management, or execution. Do not force every book into habit, finance, or self-help language.

## 7. Reader Experience

The reader supports:

- Dark, light, and sepia themes via CSS variables and `data-theme`.
- Small, medium, and large reading font sizes via CSS variables and `data-reading-size`.
- A sticky reader control bar on book pages with book title, scroll progress, theme cycling, and font-size cycling.
- Sidebar curriculum navigation on desktop and collapsible navigation on mobile.
- Local progress state: completed lessons, bookmarks, highlights.
- Scroll-derived current lesson progress and page reading progress.

Preserve the premium, calm, editorial UI. Do not redesign the reader from scratch unless explicitly requested.

## 8. Important Product Decisions

- Use 8-14 substantial lessons per full book, not 30+ micro-modules.
- Prefer paragraphs and teaching prose over card stacks.
- Avoid exercise cards, reflection cards, user-response fields, saved-answer interactions, quizzes, and homework-style interactions.
- Keep practical application, but frame it as implementation guidance, applied examples, practical playbooks, and synthesis.
- Do not add auth, backend, accounts, database, or AI chat unless explicitly requested.
- Keep themes and reading-size controls compatible across landing, library, and book pages.
- Keep the reading experience optimized for long-form comprehension.

## 9. Copyright And Content Safety

Curricula must be original transformed educational content.

- Do not copy book text.
- Do not reproduce long quotes.
- Do not create chapter-by-chapter copied summaries.
- Do not paraphrase so closely that the curriculum substitutes for the book's expression.
- Explain ideas in original language with practical synthesis, examples, distinctions, and applications.
- Reference ideas at a high level and keep any quotes minimal.

## 10. Next Recommended Step

The next likely product task is either adding a fourth full book module or polishing the library/reader experience further. Thinking, Fast and Slow is already complete; do not add it again in a new chat.

Before adding a fourth book, a fresh Codex chat should read:

- `docs/content-standard.md`
- `docs/codex-handoff.md`
- `content/books/atomic-habits.ts`
- `content/books/psychology-of-money.ts`
- `content/books/thinking-fast-and-slow.ts`
- `lib/types.ts`
- `components/content-renderer.tsx`
- `components/curriculum-reader.tsx`
- `components/theme-toggle.tsx`
- `components/font-size-toggle.tsx`
- `content/books/index.ts`

Then add the next book using the established standard: book-specific, long-form, prose-first, substantial, and original.

## 11. Commands And Workflow

Use:

```bash
npm install
npm run dev
npm run lint
npm run build
```

Before finishing changes:

- Run `npm run lint`.
- Run `npm run build`.
- Fix all errors.
- Commit with a clear message.
- Push to GitHub.
- Confirm whether push succeeded.
