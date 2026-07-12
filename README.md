# Portfolio — Shadrack Musa

Terminal-themed developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Setup

1. Extract this folder into `~/Documents/certificates/portfolio` (or wherever you like), replacing the empty one `create-next-app` was still installing into.
2. Install dependencies:
   ```
   npm install
   ```
3. Run locally:
   ```
   npm run dev
   ```
   Open http://localhost:3000

## Before you deploy

- `components/GitHubStats.tsx` — replace `your-github-username` with your real GitHub handle.
- `components/Contact.tsx` — replace email, phone, LinkedIn, and GitHub URLs with your real ones.
- Add your real photo to `public/profile.png` and your CV to `public/cv.pdf` (the "Download CV" buttons already link to `/cv.pdf`).
- `data/projects.ts` — fill in real `liveUrl` / `githubUrl` values (currently `#` placeholders).
- `data/certificates.ts` — add/remove certificates as you earn them.

## Deploy

Push to GitHub, then import the repo on [vercel.com](https://vercel.com) — zero config needed for Next.js. Once live, put the URL in your LinkedIn bio and GitHub profile.

## About the interrupted `npx create-next-app`

Your install got Ctrl+C'd mid-download — the ping test showed working but high-latency (127–1007ms) connectivity to the npm registry, which is likely why it looked stuck. It wasn't broken, just slow. This zip skips that wait: it's pre-built, so you only need to run `npm install` once.
