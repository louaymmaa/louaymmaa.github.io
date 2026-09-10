# louaymmaa.github.io — Louay Asiri's portfolio

Single-page portfolio built with **Astro + Tailwind CSS v4**. Compiles to static
HTML/CSS with almost no JavaScript, hosted free on GitHub Pages.

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Local dev server at `localhost:4321`          |
| `npm run build`   | Build the production site to `./dist/`        |
| `npm run preview` | Preview the production build locally          |

## Where to edit content

All the text lives in plain data files — no need to touch the layout:

| File                     | Holds                                              |
| :----------------------- | :------------------------------------------------- |
| `src/data/site.ts`       | Name, tagline, email, phone, social links, CV path |
| `src/data/projects.ts`   | Project cards + case studies (`draft: true` hides one) |
| `src/data/skills.ts`     | Skill groups                                       |
| `src/data/experience.ts` | Jobs, education, achievements                      |

Lines starting with `TODO(louay)` are placeholders. They show in `npm run dev`
(highlighted amber) but are automatically hidden from the built site, so fill
them in before sharing the site widely.

Assets in `public/`: `louay.jpg` / `louay.webp` (headshot), `Louay-Asiri-CV.pdf`,
`og.png` (link-preview image), `favicon.svg`.

## Design

- One accent colour + light/dark theme — all tokens are CSS variables at the top
  of `src/styles/global.css`.
- Sections are components in `src/components/`, composed in `src/pages/index.astro`.
- Icons are inline SVG in `src/components/Icon.astro` (no icon library).

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

One-time setup on GitHub:

1. Create a repo named **`louaymmaa.github.io`** and push this project to it.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Done — the site goes live at `https://louaymmaa.github.io`.
