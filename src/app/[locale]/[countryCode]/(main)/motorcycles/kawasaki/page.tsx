import { Metadata } from "next"

import KawasakiPageContent from "app/[locale]/[countryCode]/(main)/motorcycles/kawasaki/content"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function KawasakiPage() {
  return <KawasakiPageContent />
}
