# Divine DevOps Universe – Contributing & Content Guidelines

## Basic Content Rules
1. **Clarity and Brevity**
   - Write all content to be clear, concise, and easy to understand, even when using in-universe humor or references.
   - Avoid unnecessary jargon unless it serves the joke or theme.
2. **Tone and Voice**
   - Maintain a consistent, playful, and “in-universe” tone throughout all posts.
   - Use DevOps, sysadmin, and tech metaphors to reinforce the Divine DevOps Universe theme.
3. **Accessibility**
   - Ensure all images have descriptive alt text.
   - Use semantic HTML where possible for better accessibility.
4. **Front Matter Consistency**
   - Every post must start with valid YAML front matter including: layout, title, date, summary, tags, and image.
5. **No Spoilers in Titles or Summaries**
   - Titles and summaries should not reveal the outcome or punchline of the post.
6. **One Main Incident/Miracle per Post, Plus Optional Extras**
   - Each post should focus on a single main incident, PR, or miracle for clarity and narrative focus.
   - In addition to the main event, a post can include a code snippet, a Slack thread, an event/meeting request, or other in-universe artifacts as appropriate.
7. **Chronological Consistency**
   - When posting a series (e.g., miracles), maintain chronological or logical order unless intentionally breaking it for narrative effect.

---

## Post Summary Guidelines
- Each post must have a `summary` in the YAML front matter.
- The summary should be written 'in universe' (from the perspective of the Divine DevOps Universe).
- The summary should not reveal the ending or final status of the post.
- The summary should set up the scenario, incident, or miracle as a hook for the reader, maintaining suspense or curiosity.

---

## Structure & Formatting Conventions

### Miracle/Event Post Structure
- Use the following sections in order:
  1. Miracle alert (with Adler Hash and incident summary)
  2. Incident/Event details (Event ID, User, etc.)
  3. System Logs (as a fenced code block)
  4. (Optional) Slack thread (see below)
  5. Postmortem/Commentary (blockquote or section)
  6. Status/Impact (bolded lines or emoji)
- Do not use a “Lessons Learned” box in miracle/event posts.

### Lessons Learned Box (PR/Incident Posts)
- Use a visually distinct `<div class="lessons-learned">` with a `<ul>` for “Lessons Learned” in PR or incident posts, but not in miracle/event posts.
- Example:
  ```html
  <div class="lessons-learned">
    <ul>
      <li>Lesson 1</li>
      <li>Lesson 2</li>
    </ul>
  </div>
  ```

### Section Headings and Dividers
- Use `###` or `####` for major section headings (e.g., “System Logs”, “Postmortem: Uriel-404 Commentary”, “Incident Report — ...”).
- Use `---` (horizontal rule) to visually separate major sections.

### Blockquotes for Commentary
- Use `>` blockquote formatting for in-character commentary, especially from Uriel-404 or other “reviewers.”

### Status/Impact Section
- Status, Impact, Severity, etc., are listed as bolded lines at the end of the post, sometimes with emoji for emphasis.

### Adler Hash and Incident Summary
- Miracle/incident posts begin with a “Miracle alert” block, including an Adler Hash and a one-line incident summary.

### Reviewer/Email Formatting
- Reviewer and user emails in posts should use on-theme domains ending in `.eternal` (e.g., `@divine.eternal`, `@archangels.eternal`, `@notifications.eternal`).
- The subdomain should fit the sender's role or function in the post (e.g., `notifications.eternal` for notification emails, `archangels.eternal` for archangel reviewers, etc.).
- Use `.eternal` wherever you would use `.internal` in a typical tech org.

### Code/Log Blocks
- Use fenced code blocks (with language, e.g., ```log or ```bash) for logs, commands, or system output.
- Use the correct language identifier for code blocks for syntax highlighting.

### Image Usage
- Use descriptive alt text for all images.
- For posts with a main image, display it prominently below the title (using the large-post-image class).
- Use `.webp` for post images when possible for performance.

### Tag Formatting
- Tags are displayed as archive links below the post content.

### Confession Booth (Giscus)
- The Giscus comment section is themed as a “Confession Booth” with a heading and intro, and offers both public (Giscus) and private (mailto) confession options.

---

## Image Format Guidelines
- Prefer `.webp` for new images in posts, layouts, and most site content for better performance.
- **Do NOT use `.webp` for favicons, Apple touch icons, or manifest icons** (e.g., in `_includes/seo-head.html` and `_includes/header.html`). Use `.png` for these to ensure compatibility with all browsers, devices, and social sharing platforms.
- When adding a `.webp` version of an existing `.png`, update references in posts and templates to use `.webp` where appropriate, but keep `.png` for icons and legacy compatibility as above.
- **Always keep the original `.png` alongside the `.webp`** for reference and fallback, even if the main reference is updated to `.webp`.

---

## SCSS/Sass Workflow for CSS
- All site styles are written in modular SCSS partials located in the `_sass/` directory.
- The main SCSS entry point is `assets/css/main.scss`, which imports all partials and is compiled to CSS by Jekyll.
- To add or update styles:
  1. Create or edit a partial in `_sass/` (e.g., `_slack.scss` for Slack thread styles).
  2. Import your partial in `main.scss` if it isn't already included.
  3. Use variables and mixins from shared partials for consistency.
  4. Do not write or edit raw CSS files—always use SCSS partials.
- Run the Jekyll build process to compile SCSS to CSS. Jekyll will handle minification and output to `assets/css/main.css`.
- Use Stylelint to check for code quality and consistency in your SCSS.

---

## Slack Thread Formatting for Posts
Use the following HTML structure for all Slack-style threads in posts for consistency:
```html
<div class="slack-log">
  <div class="slack-msg">
    <span class="slack-user username">username</span> <span class="slack-time">[time]</span>: message
  </div>
  ...
</div>
```
- Each message is a single line with user, time, and message.
- Use the appropriate CSS classes for usernames (e.g., `slack-user uriel`, `slack-user jesus`).
- When introducing a new username, add a custom CSS class for them in your SCSS (e.g., `.slack-user.gabriel`), and style it to be visually distinctive but harmonious with the theme. This helps readers quickly identify speakers in threads.
- Place the thread after the relevant section (e.g., after System Logs or before Postmortem).
- This ensures all Slack threads are styled consistently across posts.

---

## CSS & Styling Conventions
- Reuse existing CSS classes and partials from the `_sass` directory whenever possible (e.g., `.slack-log`, `.lessons-learned`, `.giscus-confession-booth`).
- Do not create new CSS classes for features that already have a style defined in the `_sass` directory.
- Reference or extend existing partials for new features to maintain a consistent look and reduce duplication.

---

## Formatting Consistency Vigilance
- Always keep alert for changes in formatting from previous posts.
- When a formatting change or inconsistency is found, point it out and document it for review.
- This includes (but is not limited to): section order, heading style, code/log block language, Slack thread markup, use of boxes, emoji, and tag or status placement.
- Consistency helps maintain a professional and immersive experience for readers.

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

Add additional AI content/formatting rules here as needed.
