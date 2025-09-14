import { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

const motorcycleTypes = [
  {
    title: "Enduro",
    description: "Pentru aventura off-road și terenuri dificile",
    gear: [
      "Cască off-road",
      "Protecții genunchi",
      "Bocanci enduro",
      "Jerseu ventilat",
    ],
    image: "🏍️",
  },
  {
    title: "Touring",
    description: "Confort maxim pentru călătorii lungi",
    gear: [
      "Cască modulară",
      "Geacă impermeabilă",
      "Mănuși încălzite",
      "Pantaloni touring",
    ],
    image: "🛣️",
  },
  {
    title: "Adventure",
    description: "Versatilitate pentru drum și off-road",
    gear: ["Cască adventure", "Protecții corp", "Bocanci ADV", "Geacă 3-în-1"],
    image: "⛰️",
  },
  {
    title: "Urban",
    description: "Mobilitate urbană eficientă",
    gear: ["Cască jet", "Geacă urban", "Mănuși scurte", "Pantaloni jeans"],
    image: "🏙️",
  },
  {
    title: "Circuit/Sport",
    description: "Performanță maximă pe pistă",
    gear: [
      "Cască integrală",
      "Combinezon piele",
      "Mănuși racing",
      "Bocanci sport",
    ],
    image: "🏁",
  },
]

export default async function MotorcyclingTypesPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Tipuri de Motociclism
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descoperă diversele stiluri de motociclism și echipamentele
            recomandate pentru fiecare aventură
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycleTypes.map((type, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="text-6xl mb-4 text-center">{type.image}</div>
                <CardTitle className="text-xl text-center text-primary">
                  {type.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-foreground">
                  Echipament recomandat:
                </h4>
                <ul className="space-y-2 mb-6">
                  {type.gear.map((item, gearIndex) => (
                    <li
                      key={gearIndex}
                      className="text-muted-foreground flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                {/* <Button className="w-full bg-gradient-primary hover:shadow-glow">
                  <Link to={"/equipments"}>Vezi Echipamentele</Link>
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
