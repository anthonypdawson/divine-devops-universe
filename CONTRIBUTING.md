# Divine DevOps – Contributing & Content Guidelines

## Overview
- This guide covers all content, formatting, style, and technical conventions for contributing to Divine DevOps posts and site content.
- When adding new sections or rules, place them in the most relevant section below to keep the file organized and easy to use.

---

## Basic Content Rules
1. **Clarity and Brevity**
   - Write all content to be clear, concise, and easy to understand, even when using in-universe humor or references.
   - Avoid unnecessary jargon unless it serves the joke or theme.
2. **Tone and Voice**
   - Maintain a consistent, playful, and “in-universe” tone throughout all posts.
   - Use DevOps, sysadmin, and tech metaphors to reinforce the Divine DevOps theme.
3. **Accessibility**
   - Ensure all images have descriptive alt text.
   - Use semantic HTML where possible for better accessibility.
4. **Category Requirements**
   - Every post must start with valid YAML front matter including:
     - `layout`
     - `title`
     - `date`
     - `summary` (see Post Summary Guidelines)
     - `intro` (see Post Intro Guidelines)
     - `tags`
     - `image` (see Image Usage and Post Images: Alt Text Guidelines)
     - `image_alt` (optional, see Post Images: Alt Text Guidelines)
     - `category` (required for all posts; synonymous with "series" or "topic")
       - See the [Categorization and Topic Rules](#categorization-and-topic-rules) section below for more details.
5. **No Spoilers in Titles or Summaries**
   - Titles and summaries should not reveal the outcome or punchline of the post.
6. **One Main Incident/Miracle/Topic per Post, Plus Optional Extras**
   - Each post should focus on a single main incident, PR, or miracle for clarity and narrative focus.
   - In addition to the main event, a post can include a code snippet, a Slack thread, an event/meeting request, or other in-universe artifacts as appropriate.
7. **Chronological Consistency**
   - When posting a series (e.g., miracles), maintain chronological or logical order unless intentionally breaking it for narrative effect.

---

## Formatting Consistency Vigilance
- Always keep alert for changes in formatting from previous posts.
- When a formatting change or inconsistency is found, point it out and document it for review.
- Always check the front matter of posts to ensure it adheres to the current rules and guidelines outlined in this document.
- This includes (but is not limited to):
  - Section order
  - Heading style
  - Code/log block language
  - Slack thread markup
  - Use of boxes
  - Emoji
  - Tag or status placement
- Consistency helps maintain a professional and immersive experience for readers.

---

## Post Summary Guidelines
- Each post must have a `summary` in the YAML front matter.
- The summary should be written 'in universe' (from the perspective of the Divine DevOps Universe).
- The summary should not reveal the ending or final status of the post.
- The summary should set up the scenario, incident, or miracle as a hook for the reader, maintaining suspense or curiosity.

---

## Post Intro Guidelines
- Every post should include an `intro` field in the YAML front matter.
- The `intro` is displayed immediately after the post title (line 1) and the post date/time (line 2), before the main content.
- Write the intro as a single, punchy sentence or two that sets the tone, context, or stakes for the post.
- Keep it concise, engaging, and in-universe—think of it as the "hook" for the reader.
- Example:
  ```yaml
  intro: "Pull Request #666 represents one of the most audacious attempts at privilege escalation in divine history."
  ```
- If no `intro` is provided, the intro section will be omitted from the rendered post.

---

## Categorization and Topic Rules
- All new posts must include a `category` field in the front matter.
- The `category` field should specify the topic under which the post falls and is synonymous with "series" or "topic."
- Contributors must either:
  1. Assign the post to an existing topic by referencing the `/topics` directory.
  2. Create a new topic if no suitable topic exists, following the guidelines in [How to Create a New Topic](./docs/how-to-create-a-new-topic.md).
- If a post does not fit into any existing topic and creating a new topic is not appropriate, assign it to the default category: **General Divine Operations**.
- Refer to [AI-Assisted Post Categorization](./docs/ai-categorization.md) for examples of categorized posts and ongoing efforts.

---

## Divine Domain Substitution Reference
- When parodying typical tech domains, use these divine twists:
  - `.internal` → `.eternal` (e.g., notifications@heaven.eternal)
  - `.corp` → `.celestial` (e.g., admin@heaven.celestial)
  - `.cloud` → `.halo` (e.g., storage@miracles.halo)
  - `.svc` (service) → `.blessing` (e.g., api@miracles.blessing)
  - `.local` → `.paradise` (e.g., dev@devbox.paradise)
  - `.dev` → `.divine` (e.g., uriel@devops.divine)
  - `.test` → `.trial` (e.g., runner@ci.trial)
  - `.prod` → `.eternity` (e.g., deploy@heaven.eternity)
  - `.io` → `.omni` (e.g., logs@heaven.omni)
- Choose the subdomain to fit the sender's role or function in the post (e.g., `alerts.halo` for alerts, `support.eternal` for helpdesk, etc.).
- **Mix and match both real and parody domains throughout posts for maximum effect, immersion, and humor.**
- **Domain substitutions should feel natural and in-character, not forced or overused.** Use parody domains where they fit the joke or context, but don't avoid real domains entirely—sometimes a classic `.com`, `.org`, or `.io` is funnier or more immersive in context.
- The goal is to keep the world playful and immersive, not distractingly artificial.

---

## AI-Generated Image and Story Credit
- For posts where AI was used to generate the main image, or where the core story idea or substantial narrative content was generated by AI (not just minor edits, formatting, or expansion), add the following credit at the bottom (or in another unobtrusive location):
  ```html
  <p class="post-credit">Compiled in collaboration with an automated celestial compliance assistant</p>
  ```
- This ensures transparency and consistency for significant AI-assisted content and ideas.

---

## Documentation Structure
To keep this file concise, some sections have been moved to the `/docs` directory. Below are the links to the relevant documentation:

### Formatting Guidelines
- [Structure & Formatting Conventions](./docs/structure-and-formatting.md)
- [Slack Thread Formatting Guidelines](./docs/slack-thread-formatting.md)

### Topic Creation
- [Topic-Specific Rules](./docs/topic-specific-rules.md)
- [How to Create a New Topic](./docs/how-to-create-a-new-topic.md)

---

## AI-Specific Guidelines
For AI-specific rules and processes, please refer to the [AI-Specific Guidelines](./docs/ai-specific-guidelines.md) document.
