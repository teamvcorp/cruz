import PictureContainer from "@/app/components/PictureContainer"
import { agImages } from "@/app/lib/images/images"
import { pageMetadata } from "@/app/lib/site"

// Server component. This page used to be 'use client', which made it
// impossible to export metadata -- so it shipped with no title, no
// description and no canonical of its own. PictureContainer stays a client
// component; only it needs the carousel JS.
export const metadata = pageMetadata({
  title: "Agricultural & Farm Electrical Gallery | Cruz Electric",
  description: "Agricultural electrical projects by Cruz Electric: farm building wiring, grain system power and livestock facility electrical in Buena Vista & Cherokee Counties IA.",
  keywords: "agricultural electrician Iowa, farm electrical wiring, grain bin electrical, livestock building electrician",
  path: "/gallary/agricultural",
})

export default function AgriculturalGallery() {
  return (
    <PictureContainer
      imageSrc={agImages}
      title="Agricultural Electrical Projects"
      description="Farm and agricultural electrical work by Cruz Electric — grain system wiring, outbuilding power, and livestock facility electrical across northwest Iowa."
    />
  )
}
