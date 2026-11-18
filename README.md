# Abhay Krishna M V · Portfolio

Personal site for **Abhay Krishna M V**, Product Engineer (Mobile & Full-Stack). It's a single dark-themed page built from the resume, with Motion animations, React Bits components and hand-made SVG illustrations.

Sections: Hero, Objective, Shipped Apps, Experience, Skills, Projects, Currently Exploring, Education and Contact.

## Stack

- React 18, TypeScript and Vite 5
- Tailwind CSS 3, with theme colors stored as CSS variables in `client/src/index.css`
- [Motion](https://motion.dev) (`motion/react`) for reveals, the scroll-drawn timeline and the nav indicator
- [React Bits](https://reactbits.dev) components (MIT), copied in as source under `client/src/components/reactbits/`: Aurora, BlurText, RotatingText, CountUp, Magnet, TiltedCard, LogoLoop and SpotlightCard
- Self-hosted variable fonts (Space Grotesk, Inter, JetBrains Mono) via Fontsource
- Icons from `lucide-react` and `react-icons`
- Vitest and Testing Library for tests

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build into `dist/` |
| `npm run preview` | Serve the production build |
| `npm run check` | Type-check with `tsc` |
| `npm test` | Run the test suite once |
| `npm run fetch:icons` | Re-download App Store icons into `public/apps/` |

## Editing content

All copy lives in one typed file: **`client/src/content/resume.ts`**. It holds the profile, objective, shipped apps, experience, skills, projects, exploring, education and nav sections. Edit that file and the page updates. The tests in `client/src/content/resume.test.ts` check the role order, the dates and that no phone number appears on the site.

To update the downloadable resume, replace `public/resume/Abhay_Krishna_MV_Resume.pdf`.

### App icons

The icons for the shipped apps are fetched once from Apple's public lookup API and committed, so the site never hotlinks Apple at runtime. If an app's icon changes:

```bash
npm run fetch:icons
```

To add an app, add its App Store ID to `scripts/fetch-app-icons.mjs` and an entry to `shippedApps` in `resume.ts`.

## Project structure

```
client/
  index.html
  src/
    content/resume.ts          # all site content
    components/
      layout/                  # Navbar, Footer, SectionHeading
      sections/                # one component per page section
      illustrations/           # custom animated SVGs (hero, mockups, projects, video checks)
      motion/Reveal.tsx        # shared scroll-reveal / stagger wrappers
      reactbits/               # React Bits components (MIT)
    lib/                       # cn() helper, WebGL + active-section hooks
public/
  apps/                        # App Store icons
  resume/                      # downloadable PDF
  favicon.svg, og.png
scripts/fetch-app-icons.mjs
```

## Accessibility and motion

- The app is wrapped in `<MotionConfig reducedMotion="user">`, so motion is reduced when `prefers-reduced-motion` is set. Looping SVG animations are turned off in that case.
- The Aurora WebGL background is lazy-loaded. If WebGL2 isn't available, a CSS gradient shows in its place.
- The page has a skip link, one `h1`, labelled sections, visible focus rings and a keyboard-operable mobile menu.

## Deployment

`vercel.json` builds with `npm run build` and serves `dist/`. Any other static host works too: just upload the `dist/` folder.

## Credits

The animated components in `client/src/components/reactbits/` come from [React Bits](https://reactbits.dev) under the MIT license. The source URL is noted at the top of each file.
