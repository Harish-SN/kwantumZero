# resume-site

A Vite + React + TypeScript starter for a personal resume site, themed around a 50k-point Three.js vortex background (yellow particles on `#020617`).

## Stack

- **Vite** + **React 18** + **TypeScript**
- **three** + **@react-three/fiber** for the `QuantumBackground`
- Zero component libraries — plain CSS variables + inline styles so you own every pixel

## Getting started

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # type-check + production build into dist/
npm run preview      # serve the production build locally
```

## Project layout

```
src/
├── App.tsx                     # composes background + sections
├── main.tsx                    # entry
├── components/
│   ├── QuantumBackground.tsx   # the vortex — adapted from your reference theme
│   └── SideNav.tsx             # fixed right-side section indicator
├── sections/
│   ├── Hero.tsx                # 00 — name + tagline + contact row
│   ├── Certifications.tsx      # 01 — cert grid with status pills
│   ├── Experience.tsx          # 02 — period / role timeline
│   ├── Projects.tsx            # 03 — row-style project list
│   ├── Skills.tsx              # 04 — grouped toolkit
│   └── Footer.tsx              # 05 — CTA + fine print
├── data/
│   └── resume.ts               # ✏️ EDIT THIS — single source of truth for content
└── styles/
    └── global.css              # theme tokens + typography reset
```

## Where to edit

- **All content** lives in `src/data/resume.ts`. Update `profile`, `certifications`, `experience`, `projects`, `skills` there — section components consume it.
- **Theme tokens** (`--bg`, `--accent`, `--font-display`, etc.) are in `src/styles/global.css`.
- **The vortex** is in `src/components/QuantumBackground.tsx`. The audio engine from your reference is preserved as a commented block at the bottom — drop `kwantum.mp3` and `ambient-dark.mp3` into `public/` and uncomment to enable.

## Notes on the theme adaptation

Two intentional changes vs the reference:

1. **No autoplay audio.** Recruiters opening your site in a quiet office is the use case; autoplaying a dark ambient track is a quick way to get tab-closed. The audio code is kept verbatim in comments so you can re-enable it behind a mute toggle.
2. **`position: fixed` instead of `absolute`** on the canvas, so the vortex stays put as the page scrolls. `pointerEvents: "none"` lets clicks pass through to content.

## Deploy

Any static host works — Vercel, Netlify, Cloudflare Pages, GitHub Pages. Build output is `dist/`.

For GitHub Pages, add `base: "/your-repo-name/"` to `vite.config.ts` before building.
# kwantumZero
