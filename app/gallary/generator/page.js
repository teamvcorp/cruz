import PictureContainer from "@/app/components/PictureContainer"
import { genImages } from "@/app/lib/images/images"
import { pageMetadata } from "@/app/lib/site"
import { getPublishedItems } from "@/app/lib/gallery-store"

// Server component. This page used to be 'use client', which made it
// impossible to export metadata -- so it shipped with no title, no
// description and no canonical of its own. PictureContainer stays a client
// component; only it needs the carousel JS.
export const metadata = pageMetadata({
  title: "Generac Generator Installation Gallery | Cruz Electric",
  description: "See Generac standby generator installations by Cruz Electric. Certified Generac installers serving Storm Lake, Cherokee & Aurelia IA. Call (712) 299-7004.",
  keywords: "Generac generator installation Iowa, standby generator installer, whole house generator Storm Lake IA, backup generator Cherokee IA",
  path: "/gallary/generator",
})

export default async function GeneratorGallery() {
  // Owner uploads from /admin are appended to the photos bundled with the
  // site rather than replacing them.
  const uploaded = await getPublishedItems("generator")

  return (
    <PictureContainer
      imageSrc={[...genImages, ...uploaded.map((u) => ({ src: u.url, alt: u.alt }))]}
      title="Generac Generator Installations"
      description="Standby generator installations by Cruz Electric — certified Generac installers serving Storm Lake, Cherokee, Aurelia, Larrabee and all of northwest Iowa."
    />
  )
}
