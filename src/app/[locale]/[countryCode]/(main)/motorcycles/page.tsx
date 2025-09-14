import { Metadata } from "next"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@lib/components/ui/card"
import Image from "next/image"
import { Button } from "@medusajs/ui"
import { MOTORCYCLES_BRANDS } from "app/[locale]/[countryCode]/const/constants"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function MotorcyclesPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Motociclete
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explorează gama noastră de motociclete de la cei mai respectați
            producători din lume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOTORCYCLES_BRANDS.map((brand, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="text-6xl mb-4 text-center bg-white ">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-contain rounded-t-lg mix-blend-multiply"
                  />
                </div>
                <CardTitle className="text-2xl text-center text-primary">
                  {brand.name}
                </CardTitle>
                <CardDescription className="text-center">
                  {brand.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-foreground">
                  Modele populare:
                </h4>
                <ul className="space-y-2 mb-6">
                  {brand.models.map((model, modelIndex) => (
                    <li
                      key={modelIndex}
                      className="text-muted-foreground flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {model}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-primary hover:shadow-glow"
                >
                  <LocalizedClientLink href={brand.path}>Vezi Detalii</LocalizedClientLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
