import { Button } from "@lib/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"
import { ArrowLeft, Link } from "lucide-react"

const Apparel = () => {
  const apparelItems = [
    {
      name: "Alpinestars T-GP Plus R V3",
      brand: "Alpinestars",
      category: "Jachetă Moto",
      material: "Textil 600D + protecție CE",
      features: [
        "Protecții umeri/elboi",
        "Ventilație optimizată",
        "Material rezistent la abraziune",
      ],
      price: "€199",
      image:
        "data:image/webp;base64,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",
    },
    {
      name: "Macna Cubes",
      brand: "Macna",
      category: "Jachetă Moto",
      material: "Textil cu membrane Raintex",
      features: [
        "Impermeabilă",
        "Ventilație reglabile",
        "Protecție în spate și umeri",
      ],
      price: "€229",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkqYW6jrvgcNhaZY0ShwgQDX5iFDMjXxrX6FBFIQxrjgzy1-TSLnlKZZ8w2cOYKbVOwfQpt48MjoOFKVlOAMN9Mk4Y-PPBSng9WebJlu0YIVWUXK_u0sQUrL4TBslu7CSMZ0wyBoTj7O0&usqp=CAc",
    },
    {
      name: "SMRacer Racer Pro",
      brand: "SMRacer",
      category: "Jachetă Moto",
      material: "Piele de bovină + textil",
      features: [
        "Design sportiv",
        "Protecție completă CE",
        "Acoperire impermeabilă",
      ],
      price: "€349",
      image:
        "data:image/jpeg;base64,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",
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
            <Link to="/echipamente">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Înapoi la Echipamente
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Haine Moto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Găsește jachete, mănuși și echipamente de protecție de la
              Alpinestars, Macna și SMRacer, create pentru confort și siguranță.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apparelItems.map((item, index) => (
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
                  <Link to={"/contact"}>Solicită Ofertă</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Apparel
