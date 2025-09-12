import { Button } from "@lib/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@lib/components/ui/card"
import { CheckCircle, Wrench, Shield, Clock } from "lucide-react"
import Link from "next/link"

const Service = () => {
  const services = [
    {
      title: "Service Autorizat",
      description: "Service autorizat pentru toate mărcile din portofoliu",
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
    },
    {
      title: "Reparații în Garanție",
      description: "Toate reparațiile în garanție de producător",
      icon: <Shield className="w-8 h-8 text-primary" />,
    },
    {
      title: "Mentenanță Profesională",
      description: "Servicii complete de mentenanță și îngrijire",
      icon: <Wrench className="w-8 h-8 text-primary" />,
    },
    {
      title: "Program Flexibil",
      description: "Programări flexibile adaptate nevoilor tale",
      icon: <Clock className="w-8 h-8 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Service Autorizat
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Service profesional autorizat pentru toate mărcile din portofoliu.
            Echipa noastră de specialiști garantează cele mai înalte standarde
            de calitate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300 text-center"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Serviciile Noastre
            </h2>
            <div className="space-y-4">
              {[
                "Revizie completă conform specificațiilor producătorului",
                "Diagnosticare computerizată cu echipamente de ultimă generație",
                "Reparații motor, transmisie și sisteme electronice",
                "Înlocuire piese originale și aftermarket de calitate",
                "Service frâne, ambreiaj și sisteme de suspensie",
                "Pregătire tehnică pentru sezonul de conducere",
                "Consultanță tehnică și recomandări de mentenanță",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Garanție și Calitate
            </h2>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <p className="text-muted-foreground mb-4">
                Suntem service autorizat pentru toate mărcile din portofoliu,
                ceea ce înseamnă că toate lucrările efectuate sunt acoperite de
                garanția producătorului.
              </p>
              <p className="text-muted-foreground mb-4">
                Utilizăm exclusiv piese originale și instrumente de
                diagnosticare omologate de producători pentru a garanta cea mai
                înaltă calitate a serviciilor.
              </p>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">
                  Garanție Extinsă
                </h3>
                <p className="text-sm text-muted-foreground">
                  Toate lucrările beneficiază de garanție extinsă de 12 luni sau
                  20.000 km, în funcție de ce vine primul.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-subtle rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Programează o Întâlnire
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contactează-ne pentru a programa o întâlnire la service. Oferim
              consultanță gratuită și estimări detaliate pentru toate
              serviciile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow"
              >
                <Link href={"/contact"}>Programează Online</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="tel:0740301532"> Sună Acum: 0759 594 337</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
