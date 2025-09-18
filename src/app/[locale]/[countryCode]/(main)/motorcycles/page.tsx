import { Metadata } from "next"

import MotorcyclesPageContent from "app/[locale]/[countryCode]/(main)/motorcycles/content"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function MotorcyclesPage() {
  return <MotorcyclesPageContent />
}
