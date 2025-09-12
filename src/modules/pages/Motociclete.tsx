import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@lib/components/ui/card"
import { Button } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"

export const brands = [
  {
    name: "Kawasaki",
    description:
      "Legendara marcă japoneză, cunoscută pentru performanță și fiabilitate",
    models: ["Ninja ZX-10R", "Z900", "Versys 650"],
    image: "/assets/kawasaki.webp",
    path: "/motociclete/kawasaki",
  },
  {
    name: "Yamaha",
    description:
      "Inovație și calitate japoneză în fiecare motocicletă. Performanță și aspect",
    models: ["YZF-R1", "MT-09", "Ténéré 700"],
    image: "/assets/yamahayzf.webp",
    path: "/motociclete/yamaha",
  },
  {
    name: "CFMoto",
    description:
      "Motociclete moderne cu tehnologie avansată și prețuri competitive",
    models: ["NK 650", "MT 650", "Adventure 700"],
    image: "/assets/cfmoto675.webp",
    path: "/motociclete/cfmoto",
  },
]

const Motociclete = () => {
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
          {brands.map((brand, index) => (
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
                  <Link href={brand.path}>Vezi Detalii</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Motociclete
