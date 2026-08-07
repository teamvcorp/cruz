import PictureContainer from "@/app/components/PictureContainer"
import { commImages } from "@/app/lib/images/images"
import { pageMetadata } from "@/app/lib/site"

// Server component. This page used to be 'use client', which made it
// impossible to export metadata -- so it shipped with no title, no
// description and no canonical of its own. PictureContainer stays a client
// component; only it needs the carousel JS.
export const metadata = pageMetadata({
  title: "Commercial Electrical Project Gallery | Cruz Electric",
  description: "View commercial electrical projects by Cruz Electric: storefront wiring, three-phase power, parking lot lighting and panel upgrades in northwest Iowa. Call (712) 299-7004.",
  keywords: "commercial electrician gallery, business electrical projects Iowa, three-phase power installation, parking lot lighting Iowa",
  path: "/gallary/commercial",
})

export default function CommercialGallery() {
  return (
    <PictureContainer
      imageSrc={commImages}
      title="Commercial Electrical Projects"
      description="A look at commercial electrical work by Cruz Electric — storefront wiring, three-phase power, parking lot lighting and business panel upgrades throughout Buena Vista and Cherokee Counties, Iowa."
    />
  )
}
