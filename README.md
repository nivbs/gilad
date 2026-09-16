# The Gilad Times

A private birthday newspaper site — a single-page Next.js edition for Gilad, from Niv.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub (or connect the Cursor-hosted repo).
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra build settings needed.
4. Deploy.

### Keep it private

- The site sets `robots: noindex` so search engines should not index it.
- In Vercel: **Project Settings → Deployment Protection** → enable **Password Protection** and set a password only Gilad knows.
- Share the deployment URL privately (not on social media).

## Photos (next version)

Photo wells are placeholders in the layout. A future pass will add real images without restructuring the page.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
