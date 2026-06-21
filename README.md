# Neaz Morshed — Portfolio

Lightweight, SEO-friendly one-page portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and the **Inter** font. Optimized for Vercel.

## Stack
- Next.js 14 App Router (React Server Components, near-zero client JS)
- Tailwind CSS 3
- next/font Inter (self-hosted, no CLS)
- next/image with AVIF/WebP
- JSON-LD Person schema, Open Graph & Twitter cards
- app/sitemap.ts + app/robots.ts

## Run locally
```bash
cd portfolio-nextjs
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push the `portfolio-nextjs` folder to a GitHub repo.
2. Visit https://vercel.com/new and import the repo.
3. Framework preset auto-detects as **Next.js** — click **Deploy**.
4. After your domain is live, update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.

## Edit content
- SEO / personal info: `app/layout.tsx`
- Hero copy: `components/Hero.tsx`
- Projects list: `components/Projects.tsx`
- Skills: `components/Skills.tsx`

## Assets
- Profile photo: `public/neaz.png`
- Project thumbnails: `public/projects/*`

## Performance notes
- All sections are RSC — no client hydration cost.
- Hero image is `priority`; project images lazy-load below the fold.
- All animations are pure CSS — no animation libraries shipped.
- Inter loaded via next/font with display:swap.
