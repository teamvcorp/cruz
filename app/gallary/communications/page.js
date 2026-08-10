import PictureContainer from "@/app/components/PictureContainer"
import { commImages } from "@/app/lib/images/images"
import { pageMetadata } from "@/app/lib/site"
import { getPublishedItems } from "@/app/lib/gallery-store"

// Server component. This page used to be 'use client', which made it
// impossible to export metadata -- so it shipped with no title, no
// description and no canonical of its own. PictureContainer stays a client
// component; only it needs the carousel JS.
export const metadata = pageMetadata({
  title: "Security Camera & Low-Voltage Gallery | Cruz Electric",
  description: "Security camera and low-voltage communications installations by Cruz Electric in Storm Lake, Cherokee and northwest Iowa. Licensed & insured. Call (712) 299-7004.",
  keywords: "security camera installation Iowa, low voltage electrician, data cabling Storm Lake IA, camera system installer Cherokee IA",
  path: "/gallary/communications",
})

export default async function CommunicationsGallery() {
  // Owner uploads from /admin are appended to the photos bundled with the
  // site rather than replacing them.
  const uploaded = await getPublishedItems("communications")

  return (
    <PictureContainer
      imageSrc={[...commImages, ...uploaded.map((u) => ({ src: u.url, alt: u.alt }))]}
      title="Communications & Low-Voltage Projects"
      description="Security camera installations and low-voltage communications work by Cruz Electric across Storm Lake, Cherokee and surrounding Iowa communities."
    />
  )
}
