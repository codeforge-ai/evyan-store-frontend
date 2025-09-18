import { Metadata } from "next"

import MotorcyclingTypesPageContent from "app/[locale]/[countryCode]/(main)/motorcycling-types/content"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function MotorcyclingTypesPage() {
  return <MotorcyclingTypesPageContent />
}
