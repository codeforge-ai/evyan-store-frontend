import { Metadata } from "next"

import WhyToUse from "@modules/home/components/why-we-use"
import StartAdventure from "@modules/home/components/start-adventure/start-adventure"
import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function HomePage() {
  return (
    <>
      <Hero />
      <WhyToUse />
      <StartAdventure />
    </>
  )
}
