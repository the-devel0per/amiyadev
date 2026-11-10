# Amiya Ranjan — Portfolio

Vite + React + TypeScript + Tailwind CSS. Static, no backend.

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # outputs dist/
npm run preview
```

## Add your content (all in `src/config/site.ts`)

| Field | What to do |
| --- | --- |
| `resumeUrl` | Already set to `/resume.pdf` (file in `public/resume.pdf`). Replace the PDF to update it |
| `about` | Content of the About page: approach, experience, tools & knowledge, education |
| `githubUrl`, `linkedinUrl`, `email` | Fill in real values; empty ones show as disabled (hero) or are hidden (footer) |
| `profileImage` | Put an image in `public/` and set its path; omitted when empty |
| `projects[].githubUrl` | Add each repository URL; empty shows a disabled GitHub button |
| `projects[].image` | Add a real screenshot (16:10, ~1280×800) to `public/projects/` and set its path |

To add a project, append an object to `projects` — cards render from this data.

## Deploy

**Vercel:** import the repo → Framework: Vite → Build `npm run build` → Output `dist`.

**Cloudflare Pages:** Build command `npm run build`, output directory `dist`.

Once the production domain is known, add `<link rel="canonical" href="https://your-domain">` and an `og:url` to `index.html`.

## Pages

- `/` — hero + projects
- `/about` — approach, experience, tools & knowledge (opened from the **About** link)

Routing is a tiny built-in router (no extra dependency). `vercel.json` and `public/_redirects` make deep links like `/about` work on Vercel and Cloudflare Pages.

## Notes

- Theme: dark by default, follows the OS on first visit, saved to `localStorage`; an inline script in `index.html` prevents a flash of the wrong theme.
- Project actions appear on hover/focus on desktop pointers and are always visible on touch devices.
- `prefers-reduced-motion` disables reveal movement, hero entrance and image scaling.
