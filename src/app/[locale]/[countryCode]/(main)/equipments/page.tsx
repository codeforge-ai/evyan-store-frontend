import { Metadata } from "next"

import EquipmentsPageContent from "app/[locale]/[countryCode]/(main)/equipments/content"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function EquipmentsPage() {
  return <EquipmentsPageContent />
}
