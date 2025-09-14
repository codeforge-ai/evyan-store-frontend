import { Metadata } from "next"

import { Button } from "@lib/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@lib/components/ui/card"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

const models = [
  {
    name: "CFMOTO 675SR R '25",
    category: "Sport",
    engine: "3 cilindri în linie, 4 timpi, racit cu lichid",
    power: "Nu se specifică",
    price: "€7,990",
    features: [
      "ABS",
      "Cruise Control",
      "Inmatriculabil: Da",
      "Eligibil Rabla",
    ],
    image:
      "/assets/cfmoto/cfmoto-675sr-r-01-jp-bfrjg-1733984293_500x500.webp",
    availableFinancing: "Rate de la 1,100.26 RON",
  },
  {
    name: "CFMOTO 800MT Explore Edition '25",
    category: "Touring/Travel",
    engine: "2 cilindri în linie, 4 timpi",
    power: "Nu se specifică",
    price: "€9,990",
    features: [
      "ABS",
      "Cruise Control",
      "Inmatriculabil: Da",
      "Eligibil Rabla",
    ],
    image:
      "/assets/cfmoto/cfmoto-800mt-explore-xionf-1745489802_500x500.webp",
    availableFinancing: "Rate de la 1,374.53 RON",
  },
  {
    name: "CFMOTO 450SR ABS '25",
    category: "Sport",
    engine: "2 cilindri 4 timpi DOHC",
    power: "Nu se specifică",
    price: "€5,790",
    features: [
      "ABS",
      "Cruise Control",
      "Inmatriculabil: Da",
      "Eligibil Rabla",
    ],
    image:
      "/assets/cfmoto/cfmoto-450sr-alb-jpg-msg1o-1744105401_500x500.webp",
    availableFinancing: "Rate de la 798.56 RON",
  },
  {
    name: "CFMOTO 125NK ABS '25",
    category: "Naked",
    engine: "Monocilindric, 4 timpi, racit cu lichid",
    power: "15 CP",
    price: "€3,490",
    features: ["ABS", "Inmatriculabil: Da", "Eligibil Rabla"],
    image: "/assets/cfmoto/cfmoto-125nk-02-jpg-zmija-1731336191_500x500.webp",
    availableFinancing: "Rate de la 483.14 RON",
  },
  {
    name: "CFMOTO 300NK ABS '25",
    category: "Naked",
    engine: "1 cilindru, 4 timpi, DOHC",
    power: "27 CP",
    price: "€3,690",
    features: ["ABS", "Inmatriculabil: Da", "Eligibil Rabla"],
    image:
      "/assets/cfmoto/cfmoto-300nk-albastr-vfhcr-1663829512_500x500.webp",
    availableFinancing: "Rate de la 510.57 RON",
  },
  {
    name: "CFMOTO 300CL-X '25",
    category: "Heritage",
    engine: "1 cilindru, 4 timpi",
    power: "Nu se specifică",
    price: "€4,490",
    features: ["Inmatriculabil: Da", "Eligibil Rabla"],
    image:
      "/assets/cfmoto/cfmoto-300cl-x-02-jp-o4kpm-1737011306_500x500.webp",
    availableFinancing: "Rate de la 620.28 RON",
  },
  {
    name: "CFMOTO 450NK ABS '25",
    category: "Naked",
    engine: "2 cilindri 4 timpi DOHC",
    power: "40.5 CP",
    price: "€5,390",
    features: [
      "ABS",
      "Cruise Control",
      "Control derapaj",
      "Inmatriculabil: Da",
      "Eligibil Rabla",
    ],
    image:
      "/assets/cfmoto/450nk-zephyr-blue-ri-m8wa4-1705395936_500x500.webp",
    availableFinancing: "Rate de la 743.70 RON",
  },
  {
    name: "CFMOTO 450MT '25",
    category: "Touring/Travel",
    engine: "2 cilindri",
    power: "Nu se specifică",
    price: "€5,990",
    features: [
      "ABS",
      "Cruise Control",
      "Inmatriculabil: Da",
      "Eligibil Rabla",
    ],
    image:
      "/assets/cfmoto/450mt-zephyr-blue-ri-bkxmb-1705400831_500x500.webp",
    availableFinancing: "Rate de la 825.98 RON",
  },
  {
    name: "ZEEHO C!TY SPORT '24",
    category: "Electric",
    engine: "Mid motor, tip motocicleta (L1e-B)",
    power: "Nu se specifică",
    price: "€2,990",
    features: ["Eligibil Rabla", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/city-sport-jpg-0dnmj-qp5gy-1731593651_500x500.webp",
    availableFinancing: "Rate de la 414.64 RON",
  },
  {
    name: "CFMOTO 700CL-X Heritage '25",
    category: "Heritage",
    engine: "2 cilindri în linie, 4 timpi",
    power: "71.4 CP",
    price: "€6,290",
    features: [
      "ABS",
      "Cruise Control",
      "Inmatriculabil: Da",
      "Eligibil Rabla",
    ],
    image:
      "/assets/cfmoto/cfmoto-700-cl-x-heri-hjryk-1737012868_500x500.webp",
    availableFinancing: "Rate de la 867.13 RON",
  },
  {
    name: "CFMOTO 800MT Sport '25",
    category: "Touring/Travel",
    engine: "2 cilindri în linie, 4 timpi, DOHC",
    power: "95 CP",
    price: "€7,990",
    features: [
      "ABS",
      "Cruise Control",
      "Inmatriculabil: Da",
      "Eligibil Rabla",
    ],
    image:
      "/assets/cfmoto/cfmoto-800mt-sport-j-01kc0-1734002174_500x500.webp",
    availableFinancing: "Rate de la 1,100.26 RON",
  },
  {
    name: "CFMOTO 250SR S",
    category: "Sport",
    engine: "1 cilindru, 4 timpi, răcit cu lichid",
    power: "Nu se specifică",
    price: "€3,990",
    features: ["ABS", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/cfmoto-250sr-s-champ-mllgn-1742287114_500x500.webp",
  },
  {
    name: "CFMOTO 300SR",
    category: "Sport",
    engine: "1 cilindru, 4 timpi",
    power: "Nu se specifică",
    price: "€4,190",
    features: ["ABS", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/cfmoto-300sr-alb-jpg-xcewt-1745487741_500x500.webp",
  },
  {
    name: "CFMOTO 450CL-C Bobber",
    category: "Cruiser / Bobber",
    engine: "2 cilindri, 4 timpi",
    power: "Nu se specifică",
    price: "€6,990",
    features: ["ABS", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/cfmoto-450cl-c-bobbe-jx5kl-1716792980_500x500.webp",
  },
  {
    name: "CFMOTO 675NK",
    category: "Naked",
    engine: "3 cilindri, 4 timpi",
    power: "Nu se specifică",
    price: "€7,490",
    features: ["ABS", "Inmatriculabil: Da"],
    image: "/assets/cfmoto/cfmoto-675nk-jpg-n24f1-1731336382_500x500.webp",
  },
  {
    name: "CFMOTO 700CL-X Adventure",
    category: "Adventure",
    engine: "2 cilindri, 4 timpi",
    power: "Nu se specifică",
    price: "€7,190",
    features: ["ABS", "Cruise Control", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/qfabipua1ic9ypr-cfmoto-700clx-adventure-d7d_500x500.webp",
  },
  {
    name: "CFMOTO 700CL-X Sport White",
    category: "Heritage / Sport",
    engine: "2 cilindri, 4 timpi",
    power: "Nu se specifică",
    price: "€7,390",
    features: ["ABS", "Cruise Control", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/jz0m7nkyv7wzp29-cfmoto-700cl-x-sport-white-78a_500x500.webp",
  },
  {
    name: "CFMOTO 700MT ABS",
    category: "Touring",
    engine: "2 cilindri, 4 timpi",
    power: "Nu se specifică",
    price: "€7,990",
    features: ["ABS", "Cruise Control", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/cfmoto-700mt-abs-jpg-4mxoh-1734000836_500x500.webp",
  },
  {
    name: "CFMOTO 800MT X",
    category: "Touring/Travel",
    engine: "2 cilindri, 4 timpi",
    power: "95 CP",
    price: "€8,490",
    features: ["ABS", "Cruise Control", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/cfmoto-800mt-x-albas-l8qu5-1733325819_500x500.webp",
  },
  {
    name: "CFMOTO 800NK Advanced",
    category: "Naked",
    engine: "2 cilindri, 4 timpi",
    power: "100 CP",
    price: "€8,990",
    features: ["ABS", "Cruise Control", "TFT", "Inmatriculabil: Da"],
    image:
      "/assets/cfmoto/cfmoto-800nk-advance-yxzlr-1745486109_500x500.webp",
  },
  {
    name: "CFMOTO CL-C Euro5",
    category: "Cruiser",
    engine: "2 cilindri, 4 timpi",
    power: "Nu se specifică",
    price: "€6,590",
    features: ["ABS", "Cruise Control", "Inmatriculabil: Da"],
    image: "/assets/cfmoto/clceuro5-2-jpg-hxljt-1751544812_500x500.webp",
  },
]

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <LocalizedClientLink href="/motorcycles">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Motociclete
            </LocalizedClientLink>
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              CFMoto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Motociclete moderne cu tehnologie avansată, oferind o combinație
              perfectă între performanță și accesibilitate
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="text-4xl mb-4 text-center">
                  <Image
                    src={model.image}
                    alt={model.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-xl text-primary">
                  {model.name}
                </CardTitle>
                <CardDescription>{model.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Motor:</span>
                    <span className="text-foreground">{model.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Putere:</span>
                    <span className="text-foreground">{model.power}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-muted-foreground">Preț:</span>
                    <span className="text-primary font-semibold">
                      {model.price}
                    </span>
                  </div> */}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Caracteristici:
                  </h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-glow">
                  <LocalizedClientLink href="/contact-us">Solicită Ofertă</LocalizedClientLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
