import { Metadata } from "next"

import YamahaPageContent from "app/[locale]/[countryCode]/(main)/motorcycles/yamaha/content"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function YamahaPage() {
  return <YamahaPageContent />
}
