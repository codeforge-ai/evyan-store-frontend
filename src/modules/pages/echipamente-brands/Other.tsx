import { Button } from "@lib/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@lib/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const Gear = () => {
  const gearItems = [
    {
      name: "Alpinestars SMX-6 V2",
      brand: "Alpinestars",
      category: "Încălțăminte",
      material: "Microfibră durabilă",
      features: [
        "Protecții TPU",
        "Talpă anti-alunecare",
        "Ventilație laterală",
      ],
      price: "€259",
      image:
        "data:image/webp;base64,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",
    },
    {
      name: "Alpinestars SMX-1 R V2",
      brand: "Alpinestars",
      category: "Încălțăminte",
      material: "Microfibră + plasă 3D",
      features: ["Design low-cut", "Zone flexibile", "Protectie călcâi/gleznă"],
      price: "€179",
      image:
        "data:image/webp;base64,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",
    },
    {
      name: "Alpinestars SP-8 V3",
      brand: "Alpinestars",
      category: "Mănuși",
      material: "Piele de capră + piele sintetică",
      features: [
        "Protectie articulatii",
        "Palmă întărită",
        "Ventilație perforată",
      ],
      price: "€89",
      image:
        "https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/61E4/4A92/5EF0/51C4/2DBB/0A0A/2BE4/FCF5/Alpinestars-SP-8-V3-Black-White.jpg",
    },
    {
      name: "Alpinestars Stella SP-8",
      brand: "Alpinestars",
      category: "Mănuși Moto",
      material: "Piele de capră + neopren",
      features: ["Protecție articulații", "Bază elastică", "Palmă întărită"],
      price: "€129",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKtXA9YKyD3qPV0IPbPgpHAZ2dHzqiyNSQTwUR6zSJ0aRMFc8DsJWPatHt7sa5kj2jr7NUpVjesGbgjh8w4UP5vFNkP1AnXesIvxLFsX0M1iPO1UCfctb5pI5kX9fuqw&usqp=CAc",
    },
    {
      name: "Macna Catch Mesh",
      brand: "Macna",
      category: "Mănuși",
      material: "Textil + piele sintetică",
      features: [
        "Ventilație completă",
        "Protecție soft TPR",
        "Grip bun în palmă",
      ],
      price: "€49",
      image:
        "https://motoboom.ro/86699-large_default/manusi-macna-catch-mesh-negru.jpg",
    },
    {
      name: "SMRacer GPX",
      brand: "SMRacer",
      category: "Mănuși",
      material: "Piele naturală + carbon",
      features: ["Protecții dure", "Design sportiv", "Palmă antiderapantă"],
      price: "€69",
      image:
        "https://motoemotion.ro/51229-large_default/manusi-moto-piele-smracer-gpx.jpg",
    },
    {
      name: "SMRacer Track Evo",
      brand: "SMRacer",
      category: "Încălțăminte",
      material: "Piele sintetică",
      features: [
        "Slider de protecție",
        "Întărituri la gleznă",
        "Închidere velcro",
      ],
      price: "€139",
      image:
        "https://motoemotion.ro/58465-large_default/cizme-moto-sport-smracer-track-evo.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <Link href="/echipamente">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Echipamente
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Încălțăminte & Mănuși Moto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ghete și mănuși moto de calitate de la branduri de top precum
              Alpinestars, Macna și SMRacer – pentru protecție și stil la
              fiecare drum.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gearItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="text-4xl mb-4 text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-contain rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-xl text-primary">
                  {item.name}
                </CardTitle>
                <CardDescription>{item.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categorie:</span>
                    <span className="text-foreground">{item.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="text-foreground">{item.material}</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-muted-foreground">Preț:</span>
                    <span className="text-primary font-semibold">
                      {item.price}
                    </span>
                  </div> */}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Caracteristici:
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
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
                  <Link href={"/contact"}>Solicită Ofertă</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gear
