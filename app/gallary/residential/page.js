import PictureContainer from "@/app/components/PictureContainer"
import { resImages } from "@/app/lib/images/images"
import { pageMetadata } from "@/app/lib/site"
import { getPublishedItems } from "@/app/lib/gallery-store"

// Server component. This page used to be 'use client', which made it
// impossible to export metadata -- so it shipped with no title, no
// description and no canonical of its own. PictureContainer stays a client
// component; only it needs the carousel JS.
export const metadata = pageMetadata({
  title: "Residential Electrical Project Gallery | Cruz Electric",
  description: "See completed residential electrical work by Cruz Electric: panel upgrades, rewiring, lighting and outlet installation in Storm Lake, Cherokee & Aurelia IA. Call (712) 299-7004.",
  keywords: "residential electrician gallery, home electrical projects Iowa, electrical panel upgrade photos, house rewiring Storm Lake IA",
  path: "/gallary/residential",
})

export default async function ResidentialGallery() {
  // Owner uploads from /admin are appended to the photos bundled with the
  // site rather than replacing them.
  const uploaded = await getPublishedItems("residential")

  return (
    <PictureContainer
      imageSrc={[...resImages, ...uploaded.map((u) => ({ src: u.url, alt: u.alt }))]}
      title="Residential Electrical Projects"
      description="Browse completed residential electrical projects from Cruz Electric — panel upgrades, whole-house rewiring, lighting, and outlet installation across Storm Lake, Cherokee, Aurelia and Larrabee, Iowa."
    />
  )
}
