import { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"
import Image from "next/image"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { EQUIPMENTS_CATEGORIES } from "app/[locale]/[countryCode]/const/constants"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function EquipmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Echipamente
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Echipament profesional de protecție pentru motocicliști, de la cele
            mai renumite mărci
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EQUIPMENTS_CATEGORIES.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="text-6xl mb-4 text-center">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-contain rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-xl text-center text-primary">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Mărci disponibile:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.brands.map((brand, brandIndex) => (
                      <span
                        key={brandIndex}
                        className="text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full text-center"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Tipuri:
                  </h4>
                  <ul className="space-y-2">
                    {category.types.map((type, typeIndex) => (
                      <li
                        key={typeIndex}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-glow">
                  <LocalizedClientLink href={category.path}>Vezi Detalii</LocalizedClientLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Consultanță Expertă
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nu știi ce echipament să alegi? Experții noștri te vor ajuta să
              găsești echipamentul perfect pentru stilul tău de conducere și
              bugetul disponibil.
            </p>
            <Button
              size="large"
              className="bg-gradient-primary hover:shadow-glow"
            >
              <LocalizedClientLink href="/contact-us">Contactează Specialistul</LocalizedClientLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
