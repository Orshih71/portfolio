# Bat-Orshikh Baatar · Portfolio

Live at [batbaatar.com](https://batbaatar.com). Built with [Astro](https://astro.build), deployed on Cloudflare Workers as static assets.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the site to `./dist/`                 |
| `npm run preview` | Preview the build locally                   |

## Where things live

- `src/data/profile.ts`: all site copy (work, experience, links)
- `src/pages/index.astro`: page layout and section styles
- `src/components/Sidebar.astro`: the sticky left panel
- `src/styles/global.css`: theme tokens ("Bay at dusk") and base styles
- `public/Bat-Orshikh-Baatar-Resume.pdf`: the downloadable resume

## Deploy

Every push to `main` builds and deploys through Cloudflare Workers Builds.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (config in `wrangler.jsonc`)
