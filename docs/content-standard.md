# Knowledge Compression Content Standard

Knowledge Compression turns important nonfiction books into substantial long-form compressed curricula. A book module should feel like a premium study guide, a compressed masterclass, a modern digital textbook, and a serious learning experience.

It should not feel like a quick summary, a short bullet-point article, a shallow AI outline, a microlearning sprint, or a gamified course.

## Product Philosophy

The purpose of a curriculum is not to reduce a book into the smallest possible summary. The purpose is to preserve the book's core value in a more efficient learning format: structure, explanation, examples, nuance, application, and retention.

A user should leave a completed module feeling:

- I understand the book's major ideas.
- I understand why those ideas matter.
- I understand how the ideas connect.
- I can apply the ideas in real contexts.
- I retained more than a few slogans.

The experience should reward serious reading. Supporting blocks, examples, exercises, and takeaways should help the prose; they should not replace it.

## Curriculum Structure

Most full book curricula should contain 8-14 major lessons.

Use fewer lessons when a book is narrow, short, or built around one tight argument. Use more only when the book truly requires more major conceptual units. Do not create a separate lesson for every minor concept, anecdote, or tactic.

Each major lesson should be substantial and prose-first. Concepts should usually be grouped inside larger lessons when they naturally belong together.

For example, in a behavior-change book:

- Implementation intentions and habit stacking may belong inside a larger lesson on cues.
- Dopamine, anticipation, social norms, and temptation bundling may belong inside a larger lesson on attraction.
- Friction, convenience, and two-minute starts may belong inside a larger lesson on ease.

## Lesson Standard

Each major lesson should usually include:

- `title`: clear, specific, and book-relevant.
- `summary`: a concise orientation to the lesson.
- `learningObjectives`: what the reader should understand by the end.
- Long-form teaching prose: the main event.
- Examples: concrete, realistic, and woven into the lesson where possible.
- Practical applications: how the idea changes action.
- Nuance and limitations: where the idea can be misused or misunderstood.
- Common mistakes: what readers usually get wrong.
- Implementation guidance: how to apply the lesson in real life.
- Reflection prompt: one useful question, not a generic journaling prompt.
- Takeaways: concise, high-signal synthesis.

The prose should appear before most study aids. A lesson should read like a chapter first and a worksheet second.

## Depth Targets

For a substantial nonfiction book, each major lesson should generally be 600-1,200 words when appropriate. Some lessons may be shorter if the idea is narrow; some final synthesis or applied playbook lessons may be longer.

The full curriculum should feel meaningful enough that a reader can spend real study time inside it.

Avoid:

- One-liners pretending to teach.
- Excessive fragmentation.
- Turning every minor concept into a module.
- Lists replacing explanation.
- Thin cards stacked one after another.

Prefer:

- Paragraph-heavy explanation.
- Strong conceptual framing.
- Realistic examples.
- Applied learning.
- Sharp distinctions.
- Nuanced caveats.
- Retention-oriented synthesis.

## Writing Style

The writing should be clear, intelligent, practical, nuanced, original, premium, useful, paragraph-heavy, and applied.

Write for ambitious adults. Assume the reader wants depth and clarity, not motivational decoration.

Good style:

> The central mistake people make with habits is assuming behavior change is primarily a motivation problem. Atomic Habits points toward a different conclusion: behavior is usually shaped more by the structure around the person than by the intensity of their desire. Motivation can help someone begin, but it rarely carries them through repetition, boredom, friction, and delayed results.

Weak style:

> Make habits obvious. Use cues. Stack habits. Design your environment.

Avoid:

- Generic motivational fluff.
- Excessive bullets.
- Shallow summaries.
- Repeated phrasing.
- Obvious filler.
- Overusing phrases like "this is important because."
- Copying the book's prose.
- Sounding like a generic AI outline.

## Book-Specific Adaptation

Every curriculum must reflect the specific book. Do not force every book into self-help language or the same lesson template.

Examples:

- Finance books should teach financial philosophy, behavior, risk, tradeoffs, incentives, and frameworks.
- Theology books should teach theological concepts, interpretive frameworks, doctrine, worldview, and spiritual implications.
- Psychology books should teach models of mind, behavior, cognition, emotion, bias, and evidence.
- Business books should teach strategy, management, operations, positioning, culture, or execution principles.
- Investing books should teach capital allocation, valuation, risk, temperament, market structure, and decision quality.
- History books should teach causal patterns, context, institutions, chronology, and interpretation.
- Communication books should teach rhetoric, social dynamics, listening, persuasion, and conversational judgment.

Use the book's own center of gravity. Preserve what makes it distinctive.

## Supporting Blocks

Supporting blocks should be used sparingly and purposefully. They are there to improve comprehension, not to break the curriculum into micro-content.

Use supporting blocks for:

- Key distinctions.
- Applied examples.
- Reflection prompts.
- Exercises.
- Misconceptions.
- Mental models.
- Frameworks.
- Comparison tables.
- Retention anchors.
- Final synthesis.

Avoid using supporting blocks as a substitute for teaching prose. If a reader only scans cards, they should miss the depth of the lesson.

## Copyright And Content Safety

Curricula must be original transformed educational content.

Rules:

- Do not reproduce copyrighted book text.
- Do not use long quotes.
- Do not copy chapter text.
- Do not create chapter-by-chapter copied summaries.
- Do not paraphrase so closely that the module becomes a substitute for the book's expression.
- Reference ideas at a high level, then write original explanations, examples, and applications.
- Use short references only when necessary and keep them minimal.

The curriculum should teach ideas and frameworks. It should not recreate the book.

## Future Book Checklist

Before adding a new book:

- [ ] Create book metadata: slug, title, author, category, difficulty, completion time, description, themes, audience, and source notes.
- [ ] Define the book promise: "After this curriculum, you will understand..."
- [ ] Identify 8-14 major lessons, fewer only for narrow books and more only when truly necessary.
- [ ] Write long-form lesson content first.
- [ ] Add examples and practical applications.
- [ ] Add nuance, limitations, and common mistakes.
- [ ] Add reflection prompts and implementation guidance.
- [ ] Add a final synthesis lesson.
- [ ] Test rendering on the book page.
- [ ] Confirm the curriculum feels like a deep study guide, not a summary.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.

## Quality Review Questions

Before shipping a curriculum, ask:

- Does this feel like a serious learning experience?
- Does each lesson teach through prose, not just cards and bullets?
- Are the examples concrete enough to apply?
- Does the structure reflect this specific book?
- Are minor concepts merged into larger lessons where appropriate?
- Is the writing original and transformed?
- Would a thoughtful reader feel they meaningfully absorbed the book's core value?

If the answer is no, deepen the lesson before adding more sections.
