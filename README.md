# IP & Data Solutions — Landing Page

Next.js (App Router) landing page for IPDS. Content is taken from https://www.ipds.co.in/.

## Run

```bash
npm install
npm run dev       # local dev server → http://localhost:5190
npm run build     # production build → .next/
npm run start     # serve the production build → http://localhost:4190
```

> The npm scripts call `node node_modules/next/dist/bin/next` directly because the `&` in the
> folder name `IP&DS_2.0` breaks npm's Windows `.cmd` shims.

## Structure

- `src/app/layout.jsx`: root layout: metadata, theme colour, fonts (self-hosted via `next/font`).
- `src/app/page.jsx`: the single page, assembling all sections. It is prerendered to static HTML at build time.
- `src/data.js`: all text content (services, FAQs, contact details). Edit copy here.
- `src/components/`: one component per section. `ServerCorridor.jsx` is the 3D server-room intro in the hero.
  Only `Navbar`, `Hero`, `FAQ`, `Contact` and `RevealObserver` are client components (`'use client'`).
  The rest render on the server and ship no JS.
- SEO: `src/app/robots.js` (`/robots.txt`), `src/app/sitemap.js` (`/sitemap.xml`), `src/app/opengraph-image.jsx`
  (social share card), `src/components/StructuredData.jsx` (schema.org JSON-LD: business, services, FAQs).
  The live URL is `SITE_URL` in `src/data.js`. Change it there if the domain changes.
- `src/app/globals.css`: design tokens (brand red `#E41146` from the logo) and all styles and animations.

## Performance notes

- No animation libraries are used. All motion is CSS and animates only `transform`/`opacity`, so it runs on the GPU.
- Hero, About rings and the marquee pause automatically when they are off-screen.
- Scroll reveals use one shared `IntersectionObserver` and stop observing each element once it has appeared.
- The hero corridor is pure CSS 3D. On load, racks draw as red wireframes, fill in, then their LEDs switch on, while the room moves toward the viewer.
- Auto quality: after the intro the hero measures its frame rate, and on devices below 45 fps (no GPU, remote desktop) it drops the floor and ceiling planes.
- With `prefers-reduced-motion`, everything except the hero animation goes static.
- The contact form opens the visitor's mail app (`mailto:`), so no backend is needed.
