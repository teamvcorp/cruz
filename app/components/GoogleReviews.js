'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Live Google reviews via the Places UI Kit (`gmp-place-details`).
 *
 * WHY THE UI KIT AND NOT THE PLACES API
 * Reviews sit in the Places API "Enterprise + Atmosphere" SKU at $40 per 1,000
 * calls with only 1,000 free per month, AND Google's terms say "You must not
 * pre-fetch, cache, or store Places API content" -- only place_id is exempt.
 * That makes ISR caching a terms violation and every uncached render billable.
 * The UI Kit is 10,000 free calls/month and Google renders the mandatory
 * attribution (author avatar, name, profile link, and a link to the original
 * review on Maps) itself, so compliance is not left to us.
 *
 * WHAT IT WILL NOT DO
 * These reviews are client-rendered and therefore not indexable, and they can
 * never produce star ratings in search results: Google excludes any page where
 * "the entity that's being reviewed controls the reviews about itself" from
 * the star feature, which explicitly includes embedding your own Google
 * reviews via a widget. That is exactly why the curated testimonials above it
 * stay as real page text -- they are the SEO content, this is the trust
 * signal. Do not delete one in favour of the other.
 *
 * PERFORMANCE
 * The Maps JS bundle is large, so it is only fetched once this section is
 * about to enter the viewport. Loading it on mount would undo the LCP work.
 *
 * CONFIG
 * NEXT_PUBLIC_GOOGLE_MAPS_API_KEY  — restrict by HTTP referrer to
 *                                    cruzelectric.com/* AND to the Maps
 *                                    JavaScript API only. It is public by
 *                                    design; referrer restriction is the
 *                                    only thing preventing quota theft.
 * NEXT_PUBLIC_GOOGLE_PLACE_ID      — the ChIJ... Place ID, not a CID.
 *
 * With either missing this renders nothing at all, so the site builds and
 * deploys fine before the keys exist.
 */

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID

let mapsLoader = null

/** Loads the Maps JS API exactly once per page, no matter how many callers. */
function loadMaps() {
  if (mapsLoader) return mapsLoader

  mapsLoader = new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !API_KEY) {
      reject(new Error('Maps API key missing'))
      return
    }
    if (window.google?.maps?.importLibrary) {
      resolve(window.google.maps)
      return
    }

    const script = document.createElement('script')
    script.src =
      `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(API_KEY)}` +
      '&v=weekly&libraries=places&loading=async'
    script.async = true
    script.onerror = () => reject(new Error('Maps JS failed to load'))
    script.onload = async () => {
      try {
        // Registers the <gmp-place-*> custom elements.
        await window.google.maps.importLibrary('places')
        resolve(window.google.maps)
      } catch (err) {
        reject(err)
      }
    }
    document.head.appendChild(script)
  })

  return mapsLoader
}

export default function GoogleReviews() {
  const hostRef = useRef(null)
  const [state, setState] = useState('idle') // idle | loading | ready | failed

  useEffect(() => {
    if (!API_KEY || !PLACE_ID) return
    const el = hostRef.current
    if (!el) return

    // Only pay for the Maps bundle when the section is actually approached.
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        setState('loading')
        loadMaps()
          .then(() => setState('ready'))
          .catch(() => setState('failed'))
      },
      { rootMargin: '400px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Nothing configured yet, or Google failed: render nothing. The curated
  // testimonials above already carry this section, so an error state here
  // would be noise rather than information.
  if (!API_KEY || !PLACE_ID) return null

  return (
    <div ref={hostRef} className="min-h-[120px]">
      {state === 'ready' && (
        <div className="overflow-hidden rounded-sm bg-white p-1 ring-1 ring-gray-200">
          {/*
            Structure and layout of this widget are fixed by Google. Only the
            font and a limited set of Material colour tokens can be themed, and
            the attribution must stay white, grey or black per the terms -- so
            it reads a little quieter than the rest of the page by design.
          */}
          <gmp-place-details
            style={{
              '--gmp-mat-font-family': 'var(--font-lato), system-ui, sans-serif',
              '--gmp-mat-color-primary': '#005cb9',
              width: '100%',
            }}
          >
            <gmp-place-details-place-request place={PLACE_ID}></gmp-place-details-place-request>
            <gmp-place-content-config>
              <gmp-place-rating></gmp-place-rating>
              <gmp-place-reviews></gmp-place-reviews>
            </gmp-place-content-config>
          </gmp-place-details>
        </div>
      )}

      {state === 'loading' && (
        <div
          className="h-[120px] animate-pulse rounded-sm bg-gray-100 ring-1 ring-gray-200"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
