# Cruz Electric

Marketing site for Cruz Electric, a licensed electrical contractor in
Cherokee, Iowa, serving Buena Vista and Cherokee Counties.

Next.js 16 (App Router) · React 19 · Tailwind · deployed on Vercel.

## Running locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
```

Copy `.env.example` to `.env.local` if you need the admin area or live Google
reviews locally. Neither is required for the public site to run.

## Documentation

| File | What it covers |
|---|---|
| `ADMIN-SETUP.md` | Setting up `/admin`, the owner's photo upload page |
| `OPTIMIZATION-NOTES.md` | Technical record: SEO, performance, security, and the rules worth keeping |
| `LOCAL-SEO-NEXT-STEPS.md` | Local SEO actions outside the codebase (Google Business Profile, citations) |
| `ELECTRICIAN-KEYWORD-SEO-ENHANCEMENT.md` | Keyword strategy history |

## Structure

```
app/
  layout.js              root layout — MUST stay a server component (see below)
  page.js                homepage
  electrician/           general electrician services page
  locations/[slug]/      six location pages, content from lib/locations.js
  gallary/               gallery index + five category galleries
  admin/                 owner-only photo manager
  api/admin/             login, logout, upload, photo management
  components/ui/         design system: Button, Section, SectionHeading, Card, Stat
  lib/
    site.js              business identity, NAP, schema.org, metadata helper
    locations.js         per-town content
    auth.js              scrypt credentials + signed sessions
    gallery-store.js     Vercel Blob storage for uploaded photos
```

## Two rules that are easy to break

**1. `app/layout.js` must stay a server component.**

Marking it `'use client'` does not disable page-level `metadata` exports — it
emits both, so every page ends up with two `<title>` tags, two meta
descriptions, and whatever canonical the layout hardcoded. That previously
pointed every page at the homepage, telling Google to de-index the entire site
below the root. If the layout needs state, put it in a child client component;
that is why `components/SiteHeader.js` exists.

Check after any change to layout or metadata:

```bash
npm run build
grep -c '<title>' .next/server/app/locations/storm-lake.html   # must be 1
```

**2. Location pages must stay genuinely different from each other.**

They were once identical templates with only the town name swapped, which is a
doorway-page risk under Google's guidelines. Each entry in `lib/locations.js`
carries real local content for that place. If you add a location, write real
detail — do not copy another entry and rename it.

## Adding photos

Through `/admin`, not by committing files. See `ADMIN-SETUP.md`.

Images bundled in `public/` are referenced by build-time static imports in
`lib/images/images.js`; uploaded photos live in Vercel Blob and are appended to
those at render time. If you do add a file to `public/`, compress it first —
the originals in this repo were once 5–6 MB each straight off a camera.
