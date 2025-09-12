import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import WhyToUse from "@modules/home/components/why-we-use"
import StartAdventure from "@modules/home/components/start-adventure/start-adventure"
import Page from "@modules/pages/motorcycle-brands/CFMoto"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și echipamente profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  // TODO: Check if region is required
  // if (!region) {
  //   return null
  // }

  return (
    <>
      <Page />
    </>
  )
}
