# Portfolio

Personal portfolio of **Rakesh Gandla** — full stack & AI engineer.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Motion (Framer Motion), GSAP ScrollTrigger, and Lenis smooth scrolling. Dark-first design with full light-mode support.

## Editing content

**Every word, link, metric, project, and role on the site lives in one file:**

```
src/data/content.json
```

Edit it and the site updates — no component changes needed. The schema is documented in `src/data/types.ts`:

| Key | Drives |
| --- | --- |
| `meta` | Name, SEO title/description, email, site URL |
| `social` | GitHub / LinkedIn / Twitter / résumé links (empty string hides a link) |
| `hero` | Headline lines, subheadline, CTAs |
| `metrics` | The proof strip under the hero |
| `projects` | Full case studies: metrics, architecture layers, challenges, outcomes, stack |
| `experience` | Roles with expandable highlights |
| `skills` | Capability map domains |
| `principles` | Engineering philosophy |
| `contact` | Closing section copy |

Each project's `architecture` array renders as its animated system diagram — top layer first.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
npm start       # serve the production build
```

## Performance & accessibility

- Fully static prerender, ~215 kB first-load JS
- All animation respects `prefers-reduced-motion`
- Hero canvas pauses when off-screen; DPR capped at 2
- Semantic landmarks, labelled controls, keyboard-reachable interactions
