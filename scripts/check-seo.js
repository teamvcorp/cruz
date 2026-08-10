#!/usr/bin/env node
/**
 * Post-build SEO guard.  Run: npm run check:seo  (after npm run build)
 *
 * This exists because of a specific, expensive failure: every page shipped a
 * canonical pointing at cruzelectric.com while the site was actually served
 * from electricbycruz.com. A cross-domain canonical is an explicit instruction
 * to Google to index the OTHER url instead — so the site dropped out of search
 * results, and nothing in the build output complained.
 *
 * Each assertion below maps to a real bug this project has already had:
 *   - duplicate <title> / <meta description>   (client-component root layout)
 *   - canonical on the wrong host              (wrong SITE.url)
 *   - canonical not matching the page's path   (hardcoded homepage canonical)
 *   - noindex leaking onto a public page       (admin metadata scope)
 *   - a public page missing an <h1>            (gallery pages had none)
 */
const fs = require('fs')
const path = require('path')

const APP_DIR = path.join(process.cwd(), '.next', 'server', 'app')

if (!fs.existsSync(APP_DIR)) {
  console.error('No build output found. Run `npm run build` first.')
  process.exit(1)
}

// Read the production domain the same way the app does.
const siteFile = fs.readFileSync(path.join(process.cwd(), 'app', 'lib', 'site.js'), 'utf8')
const defaultUrl = (siteFile.match(/NEXT_PUBLIC_SITE_URL\s*\|\|\s*'([^']+)'/) || [])[1]
const EXPECTED = (process.env.NEXT_PUBLIC_SITE_URL || defaultUrl || '').replace(/\/+$/, '')

if (!EXPECTED) {
  console.error('Could not determine the expected site URL from app/lib/site.js')
  process.exit(1)
}

/** Public pages only — /admin is intentionally noindex. */
function htmlFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) htmlFiles(full, acc)
    else if (entry.name.endsWith('.html')) acc.push(full)
  }
  return acc
}

const SKIP = ['/admin', '/_not-found', '/_global-error', '/404', '/500']

let failures = 0
let checked = 0

const fail = (route, msg) => {
  console.error(`  FAIL  ${route}: ${msg}`)
  failures++
}

for (const file of htmlFiles(APP_DIR).sort()) {
  const route =
    '/' +
    path
      .relative(APP_DIR, file)
      .replace(/\\/g, '/')
      .replace(/\.html$/, '')
      .replace(/(^|\/)index$/, '')
  const normalised = route === '/' ? '/' : route.replace(/\/$/, '')
  if (SKIP.some((s) => normalised.startsWith(s))) continue

  const html = fs.readFileSync(file, 'utf8')
  checked++

  const titles = (html.match(/<title>/g) || []).length
  if (titles !== 1) fail(normalised, `${titles} <title> tags (expected exactly 1)`)

  const descs = (html.match(/<meta name="description"/g) || []).length
  if (descs !== 1) fail(normalised, `${descs} meta descriptions (expected exactly 1)`)

  if (!/<h1[\s>]/.test(html)) fail(normalised, 'no <h1>')

  if (/<meta name="robots"[^>]*content="[^"]*noindex/i.test(html)) {
    fail(normalised, 'is noindex — a public page must be indexable')
  }

  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
  if (!canonical) {
    fail(normalised, 'no canonical')
  } else {
    if (!canonical.startsWith(EXPECTED)) {
      // Only report the host. Slicing a path off a string that does not share
      // the prefix produces nonsense, and the host IS the bug worth fixing.
      fail(normalised, `canonical is on the wrong domain — ${canonical} (expected ${EXPECTED}...)`)
    } else {
      const expectedPath = normalised === '/' ? '' : normalised
      const actualPath = canonical.slice(EXPECTED.length).replace(/\/$/, '')
      if (actualPath !== expectedPath) {
        fail(normalised, `canonical points at "${actualPath || '/'}" but this page is "${normalised}"`)
      }
    }
  }
}

console.log(`\nChecked ${checked} public pages against ${EXPECTED}`)
if (failures) {
  console.error(`${failures} problem(s) found.\n`)
  process.exit(1)
}
console.log('All SEO checks passed.\n')
