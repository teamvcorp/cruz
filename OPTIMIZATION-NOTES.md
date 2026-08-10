# SEO, Mobile & Performance Optimization — 2026-08-07

Reference notes for the Cruz Electric site (Next.js 14 App Router).
Supersedes the technical claims in `LOCAL-SEO-NEXT-STEPS.md` and
`ELECTRICIAN-KEYWORD-SEO-ENHANCEMENT.md`, which describe keyword work that was
real but was being silently cancelled out by the bug described below.

---

## 1. The bug that was undoing the previous SEO work

`app/layout.js` was marked `'use client'` and wrote its own `<head>` by hand.

In the App Router, page-level `export const metadata` still runs — but the
layout's hardcoded tags are emitted **as well**. Every page therefore shipped:

- two `<title>` tags
- two `<meta name="description">` tags
- `<link rel="canonical" href="https://cruzelectric.com">` — **the homepage URL,
  on every single page**

That canonical is an instruction to Google saying "this page is a duplicate of
the homepage; index the homepage instead." All six `/locations/*` pages,
`/electrician`, and every gallery page were asking to be de-indexed. The
keyword work in the two older docs could not rank while that was in place.

### Verified before

```
$ grep -o '<title>[^<]*</title>' .next/server/app/locations/storm-lake.html
<title>Electrician in Storm Lake, Cherokee, Aurelia & Larrabee IA | ...</title>
<title>Electrician Storm Lake IA | 24/7 Electrical Repair & Service | ...</title>
$ grep -o '<link rel="canonical"[^>]*>' .next/server/app/locations/storm-lake.html
<link rel="canonical" href="https://cruzelectric.com"/>
```

### Verified after

```
/locations/storm-lake   titles: 1   descriptions: 1
<link rel="canonical" href="https://cruzelectric.com/locations/storm-lake"/>
<meta property="og:image" content="https://cruzelectric.com/og-image.jpg"/>
```

### The rule to keep

**`app/layout.js` must stay a server component.** If it ever needs `useState`,
put the stateful part in a child client component — that is exactly why
`app/components/SiteHeader.js` exists. Never hand-write `<head>` in a layout;
use the `metadata` export.

---

## 2. What changed

### SEO

| Change | File |
|---|---|
| Root layout → server component, real `metadata` export | `app/layout.js` |
| Interactive nav split out (only client component in the chrome) | `app/components/SiteHeader.js` |
| `metadataBase` set — killed 3 build warnings, fixes relative OG URLs | `app/layout.js` |
| Self-referencing canonical on every page via `pageMetadata()` | `app/lib/site.js` |
| `og:image` / `twitter:image` — previously **absent site-wide** | `public/og-image.jpg` |
| 5 gallery pages given titles, descriptions, canonicals, `<h1>`, body copy | `app/gallary/*/page.js` |
| Gallery image `alt` text: `"first"`, `"second"` → descriptive | `app/lib/images/images.js` |
| `FAQPage` + `Review` JSON-LD added, generated from the rendered arrays | `app/page.js` |
| NAP centralised so it cannot drift (local-SEO consistency signal) | `app/lib/site.js` |
| Sitemap derived from config instead of a hand-maintained list | `app/sitemap.js` |
| `/electrician` title 101 chars → 64 (Google truncates near 60) | `app/electrician/page.js` |
| Footer service-area links so location pages aren't near-orphans | `app/components/SiteFooter.js` |

Note: `openGraph` in Next metadata is **shallow-merged**. A page that defines
`openGraph` replaces the layout's entirely — which is why every subpage was
losing `og:image`, `og:url` and `og:site_name`. `pageMetadata()` handles this.

### Mobile

- All six location pages: CTA row was `flex items-center gap-x-4`, two buttons
  side by side, overflowing at 375px. Now stacks below `sm:`.
- Touch targets raised to 44×44 (menu, close, footer icons, carousel arrows).
- Tap-to-call button added beside the mobile menu button — the primary
  conversion action is no longer buried inside the menu.
- Footer link columns go single-column below `sm:` instead of two cramped ones.
- `overflow-x: hidden` on `body` — the decorative blurred gradient blobs on the
  homepage are ~68rem wide and positioned off-viewport by design.
- FAQ answer padding `pr-12` → `pr-2 sm:pr-12`; it was clipping text on phones.
- `prefers-reduced-motion` respected for smooth scrolling.

### Load speed

- **Images: 72.7 MB → 12.08 MB.** All photos were committed straight off a
  camera (4032×3024 and up). `commercial.jpg` alone was 5797 KB → 278 KB.
  Resized to the largest size the layout can actually display, ×2 for retina.
- `hero.jpg` was **437×372 stretched full-bleed** — visibly blurry. Regenerated
  at 2400×1350 from the unused 6480×4320 `electrician.jpg`.
- Lato moved from a render-blocking `@import` of `fonts.googleapis.com` in
  `globals.css` to `next/font/google`. Self-hosted, no extra DNS+TLS round
  trips, and emits a `size-adjust` fallback face so the swap causes no layout
  shift.
- AVIF + WebP enabled. Measured: mobile hero **26.8 KB** WebP @828px,
  57 KB AVIF @1920px.
- Carousel: only slide 1 is `priority`; slides 2-8 are explicitly lazy. Embla
  keeps all slides mounted in an overflow-hidden track, so without this the
  browser can be tricked into fetching all eight photos on load.
- Homepage is now a server component (FAQ accordion extracted). Route JS
  13.6 kB → 6.57 kB.
- Dropped unused deps: `react-bingmaps`, `@react-google-maps/api`,
  `react-icons`, `sass`.
- Deleted dead code: `_document.js` (Pages Router leftover referencing an
  undefined `NEXT_PUBLIC_GA_TRACKING_ID` — **Google Analytics was never
  running**), `BingMap.js`, `GoogleMap.js`, `Card.js`, 3 orphan stylesheets,
  9 unused images incl. a 2.2 MB `cruz.svg`.

### Security

- `npm audit`: **5 vulnerabilities (1 critical, 4 high) → 2 high.**
  Next 14.1.0 → 14.2.35 cleared the critical; sharp → 0.35.3.
- Response headers added in `next.config.js`: HSTS, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors` CSP +
  `X-Frame-Options`. `poweredByHeader: false`.
- Removed an unused `images.unsplash.com` entry from `remotePatterns`. An open
  remote pattern turns `/_next/image` into a proxy third parties can drive at
  your bandwidth (this is also advisory GHSA-9g9p-9gw9-jx7f).
- Two `Thumbs.db` files were committed inside `public/` and therefore served to
  the open internet. Deleted and added to `.gitignore`.
- JSON-LD is escaped (`</` → `<`) before injection.

**No strict script CSP.** It would require per-request nonces, which forces
every page out of static generation into dynamic rendering — a real load-speed
cost on a marketing site. Documented in `next.config.js`.

---

## 3. Still outstanding

1. **Next.js 14 → 15/16.** Two high-severity advisories remain and are only
   fixed in a major release. Most do not apply here (no Server Actions, no
   middleware, no rewrites, no custom server, no Pages Router), and removing the
   open `remotePatterns` already mitigated one. Still worth scheduling — this is
   a breaking upgrade that needs its own testing pass.
2. **`/gallary/communications` and `/gallary/commercial` render the same photo
   set** (`commImages`). Pre-existing. Two pages with identical imagery is a
   thin/duplicate-content signal. Needs real communications photos.
3. **Google Analytics is not installed.** Dead code removed; nothing wired up.
   Add `@next/third-parties` `GoogleAnalytics` once a GA4 ID (`G-XXXXXXX`)
   exists.
4. **`aggregateRating` is self-declared.** Google does not show review snippets
   for self-serving LocalBusiness reviews. Real ratings come from the Google
   Business Profile — still the highest-leverage item, see
   `LOCAL-SEO-NEXT-STEPS.md`.
5. **Location page titles run 70-83 chars** and will truncate in results. Left
   as-is because the important keywords are front-loaded; trim if desired.
6. **`sameAs: []` is empty** in the business schema. Add Google Business
   Profile / Facebook URLs when available — these are strong entity signals.
7. Employee names on `/gallary` are placeholders ("Two Dudes", "Crew Members").

## 4. Verify after any future change

```bash
npm run build
# exactly one of each, and a canonical matching the page's own path:
grep -c '<title>' .next/server/app/locations/storm-lake.html   # must be 1
grep -o '<link rel="canonical"[^>]*>' .next/server/app/locations/storm-lake.html
```

---

# Phase 2 — Redesign, Next.js 16, admin upload (2026-08-09)

Companion doc: `ADMIN-SETUP.md` for the operational runbook.

## Design system

Before this there was no system. The audit found the same red primary CTA
written **six different ways**, three competing section padding scales, roughly
ten card permutations, and seven distinct `h3` class strings.

- `app/components/ui/{Button,Section,SectionHeading,Card,Stat}.js`
- **Heading hierarchy was inverted** — eyebrows were marked up as `<h2>` while
  the visually dominant title was a `<p>`. Roughly half the site's `<h2>`
  elements were eyebrow text, so the document outline claimed pages were about
  "FAQ" and "Service Areas". `SectionHeading` fixes this permanently.
- Corners 16px → 2px. The logo is built from hard-outlined letterforms; soft
  `rounded-2xl` fought it, which is much of why the mark read as a sticker on
  someone else's template.
- Display face: Barlow Condensed 700/800 via `next/font/google`, latin subset
  only (~22 KB per weight). Lato stays for body.

### Header colour — the exact value matters

The nav is `#005CB9`, **sampled from the logo swoosh**, not matched by eye.
`headerplain.png` is transparent except the artwork, and the blue swoosh bleeds
to the image's top-left edge — so on white it rendered as a hard blue blob.
`cruz-blue` was `#005CBB`, two units off, which is enough to leave a faint
seam. Only an exact match makes the boundary disappear.

Pink strip sits above the blue nav separated by a black rule. That is not
decoration: saturated pink directly against saturated blue vibrates along the
edge, and the logo already solves it the same way with black outlines.

## Location pages — a doorway-page fix, not a refactor

Six files collapsed into `app/locations/[slug]/page.js`. URLs unchanged, all
six still prerender via `generateStaticParams`.

The important part is **not** the deduplication. Those pages shared a
byte-identical 12-item service array, "Why Choose Us" block and CTA with only
the town name swapped — which is what Google calls a doorway page, a ranking
liability rather than a tidiness problem. Componentising alone would have made
the duplication neater without making it safer.

`app/lib/locations.js` now carries genuinely different content per place: real
local geography, actual housing stock, the industries driving electrical
demand, and a service list ordered for that community.

**`featuredWork` is a flagged placeholder on all six entries.** Real completed
jobs are the strongest local content available, but they must come from the
owner — inventing them would put false claims on a real business's site.

## Next.js 16 upgrade

`next 16.3.0` · `react 19.2.8` · `embla 8.6.0`. **`npm audit`: 5 vulnerabilities
(1 critical, 4 high) → 0.**

Four traps, all specific to this codebase:

1. **`images.qualities` defaults to `[75]`** and silently coerces anything else.
   The hero's `quality={70}` and the carousel's `quality={78}` would have been
   rewritten. Pinned to `[70, 75, 78]`. Verified: the three qualities return
   26,780 / 28,180 / 31,046 bytes — three distinct sizes, so not coerced — and
   an unlisted `quality=60` returns 400, which also stops anyone hammering the
   optimizer with arbitrary values.
2. **Next no longer suppresses `scroll-behavior` during navigation.**
   `globals.css` sets `scroll-behavior: smooth` for anchor links, so without
   `data-scroll-behavior="smooth"` on `<html>` every route change would
   smooth-scroll and feel sluggish.
3. **Turbopack resolves file extensions case-sensitively.** `gen2.PNG` failed
   the build outright with "Unknown module type" — the same file behind the
   earlier "Fix case-sensitive import" commit. Renamed via `git mv`.
4. `embla-carousel-react@8.0.0` peers excluded React 19; 8.6.0 adds it.

Also removed the `/_next/static` `Cache-Control` override added in phase 1 —
Next already serves fingerprinted output as immutable and warns that overriding
it can break dev behaviour.

## Admin photo upload

Full runbook in `ADMIN-SETUP.md`. Architecture summary:

Two hard blockers ruled out writing into `public/`: the gallery uses build-time
static imports that a runtime file can never join, and Vercel's filesystem is
read-only and ephemeral. So uploads go to Vercel Blob with a JSON manifest, and
bundled images are never replaced — only appended to.

Security ordering in `app/api/admin/upload/route.js` is deliberate: fail closed
if unconfigured → authenticate **before** reading the body → size cap → **magic
bytes**, not extension or `Content-Type` → re-encode through sharp →
server-generated filename.

The re-encode is the highest-value step: it normalises to a known-good JPEG,
neutralises polyglot files, and **strips EXIF including GPS**. Job-site photos
carry the coordinates of customers' homes and farms; publishing them raw would
leak those addresses.

### The `$` vs `:` bug

The hash delimiter is `:`, not the conventional `$`. **Next.js expands
`$VARIABLE` inside `.env` files**, so `scrypt$salt$hash` silently becomes
`scrypt` and login fails forever with no diagnostic. Found during testing.
Do not "fix" this back to `$`.

### Verification

18/18 security tests pass — unauthenticated upload/list/delete/patch all 401,
forged session cookies rejected, identical error text for bad username vs bad
password (no user enumeration), `Secure`/`HttpOnly`/`SameSite=strict` cookie,
non-image renamed `.jpg` rejected on magic bytes, path-traversal category
rejected, short alt text rejected, and robots/noindex/sitemap exclusion.

EXIF stripping verified against a GPS-tagged image: 204-byte EXIF block before,
none after.

**Not verified:** the Vercel Blob round-trip. All testing used a dummy token,
so `put`/`list`/`del` and the manifest write-then-read cycle have never run
against real storage. Test with one photo before relying on it.

## SEO

- **Removed `aggregateRating`.** Google excludes pages where "the entity that's
  being reviewed controls the reviews about itself" from the star feature —
  which covers both self-published testimonials and embedded Google review
  widgets. It could never render stars, and `aggregateRating` is the element
  most associated with spammy-markup manual actions. Individual `Review`
  objects stay: truthful, and useful to AI/LLM search.
- `GoogleReviews` uses the **Places UI Kit**, not the Places API. Reviews sit
  in the Enterprise + Atmosphere SKU at $40/1,000 calls with 1,000 free/month,
  and Google's terms forbid caching Places content — making ISR a terms
  violation and every render billable. The UI Kit is 10,000 free/month and
  Google renders the mandatory attribution itself. Lazy-loaded on scroll;
  renders nothing until a Place ID and key exist.
- Live reviews are a **trust signal, not SEO** — client-rendered, not
  indexable, and never eligible for stars. The curated testimonials remain the
  indexable content. Do not delete one in favour of the other.

## Still outstanding

1. Six `featuredWork` placeholders in `app/lib/locations.js` (`pending: true`)
2. Real crew names on `/gallary` — currently role-based labels with a TODO
3. Place ID converted from CID `03545373047881462406`, and a Maps key
   restricted by HTTP referrer to `cruzelectric.com/*` and to the Maps
   JavaScript API only
4. `/gallary/communications` still renders the commercial photo set
5. `sameAs: []` in the business schema — add the Google Business Profile URL

---

# CRITICAL — wrong production domain (found 2026-08-09)

**The site dropped out of Google search results.** Root cause: every page
declared a canonical pointing at a domain the site is not served from.

The site is served from **`https://electricbycruz.com`**
(`cruzelectriccontractor.com` forwards to it). `SITE.url` said
`https://cruzelectric.com` — a **different site**, running Wix, that returns
404 on every path this app serves.

Evidence at the time:

```
electricbycruz.com/locations/storm-lake  → 200   (real site, fine)
cruzelectric.com/locations/storm-lake    → 404   (different site)

electricbycruz.com emitted:
  <link rel="canonical" href="https://cruzelectric.com"/>
  robots.txt:  Host: https://cruzelectric.com
               Sitemap: https://cruzelectric.com/sitemap.xml
```

A cross-domain canonical is an explicit instruction to Google: *index that URL
instead of this one.* Google obeyed. The target 404s, so nothing was indexed
anywhere.

## How it happened

The wrong domain was inherited — the original `app/layout.js` hardcoded
`<link rel="canonical" href="https://cruzelectric.com" />` and the original
`sitemap.js` used it as `baseUrl`. The SEO rewrite adopted that value as
`SITE.url` without verifying it against the live site, then fanned it out to
every page's canonical, `og:url`, the JSON-LD `@id`, the sitemap and a new
`Host:` directive. One wrong signal became a comprehensive one.

The lesson is narrow and worth keeping: **verify the production domain against
the running site before wiring it into `metadataBase`.** A single `curl` would
have caught it at any point.

## The fix

- `SITE_URL` in `app/lib/site.js` is now `NEXT_PUBLIC_SITE_URL ||
  'https://electricbycruz.com'`, trailing slash stripped. Nothing else
  hardcodes a domain.
- New `npm run check:seo` (`scripts/check-seo.js`) runs against the build
  output and asserts, for every public page: exactly one `<title>`, exactly one
  meta description, an `<h1>`, no `noindex`, and a canonical on the expected
  host pointing at that page's own path.
  Confirmed it catches this exact bug — pointed at the wrong domain it reports
  28 problems across 14 pages.

Note: `cruzelectric712@gmail.com` is the real contact email and has nothing to
do with the domain. Do not "correct" it.

## Recovery (owner actions, outside the code)

1. Deploy the fix, then confirm `electricbycruz.com` emits canonicals on its
   own domain.
2. Google Search Console: add/verify `electricbycruz.com` as a property,
   submit `https://electricbycruz.com/sitemap.xml`, and use **URL Inspection →
   Request Indexing** on the homepage and the six location pages.
3. If `cruzelectric.com` is yours, 301 it to `electricbycruz.com`. If it is
   not, nothing to do — just never reference it again.
4. Recovery takes days to weeks; Google must recrawl before pages return.
