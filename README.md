# Flat Hack 604

A responsive, one-page hackathon site built with Next.js and local editorial artwork.

Application routes live in `src/app`, reusable page sections and UI live in
`src/components`, and editable homepage content lives in `src/content/home.ts`.

## Setup

```bash
mise install
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before a
production deployment so canonical, sitemap, and social metadata use the live domain.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Event dates, venue, registration URL, sponsors, and prizes are intentionally omitted until confirmed.
