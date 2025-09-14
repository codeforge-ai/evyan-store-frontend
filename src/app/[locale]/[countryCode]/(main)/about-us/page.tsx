import { Metadata } from "next"

import { Card, CardDescription, CardHeader, CardTitle } from "@lib/components/ui/card"
import { CheckCircle, Shield, User } from "lucide-react"
import { Button } from "@medusajs/ui"

export const metadata: Metadata = {
  title: "Evyan - Moto Hub",
  description:
    "Descoperă lumea motocicletelor cu cele mai bune branduri și equipments profesionale. CFMoto, Kawasaki, Yamaha și multe altele..",
}

export default async function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Despre Noi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Suntem o echipă de profesioniști pasionați, dedicați să oferim cele
            mai înalte standarde de calitate în serviciile auto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Cine Suntem
            </h2>
            <p className="text-muted-foreground mb-6">
              Suntem un service auto autorizat, cu o echipă de tehnicieni
              specializați care lucrează pentru a asigura performanța optimă a
              vehiculului tău. Oferim o gamă largă de servicii pentru toate
              mărcile din portofoliu, utilizând echipamente de diagnosticare de
              ultimă generație.
            </p>
            <p className="text-muted-foreground mb-6">
              Ne mândrim cu o echipă experimentată care pune accent pe detalii
              și pe satisfacția clientului. Fiecare reparație este realizată
              conform celor mai stricte standarde de calitate, iar siguranța și
              confortul tău sunt priorități pentru noi.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Viziunea Noastră
            </h2>
            <p className="text-muted-foreground mb-6">
              Viziunea noastră este de a deveni cel mai de încredere service
              auto din regiune, oferind servicii de înaltă calitate,
              transparente și accesibile. Ne dorim să fim partenerul de
              încredere al fiecărui client, ajutându-l să mențină performanța și
              siguranța vehiculului său pe termen lung.
            </p>
            <p className="text-muted-foreground mb-6">
              Credem într-o comunicare deschisă cu clienții noștri,
              asigurându-ne că sunt informați despre fiecare pas al procesului
              de reparație și întreținere. Suntem dedicați să oferim soluții
              personalizate și eficiente, care să răspundă nevoilor fiecărui
              vehicul.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div>
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Echipa Noastră</CardTitle>
                <CardDescription>
                  Echipa noastră este formată din profesioniști cu experiență,
                  fiecare membru aducând expertiza și pasiunea sa pentru
                  domeniul auto.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div>
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Calitate Garantată</CardTitle>
                <CardDescription>
                  Ne asigurăm că fiecare lucrare efectuată este conformă cu cele
                  mai înalte standarde, utilizând piese originale și tehnologii
                  avansate.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div>
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">
                  Siguranța Ta, Prioritatea Noastră
                </CardTitle>
                <CardDescription>
                  Fiecare reparație și întreținere sunt realizate cu maximă
                  atenție pentru siguranța ta, respectând cele mai riguroase
                  norme de siguranță.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-subtle rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Contactează-ne
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vrei să afli mai multe despre serviciile noastre sau să programezi
              o întâlnire? Contactează-ne acum pentru informații suplimentare
              sau pentru a discuta despre nevoile tale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="large"
                className="bg-gradient-primary hover:shadow-glow"
              >
                <a href="/contact">Contactează-ne</a>
              </Button>
              <Button
                size="large"
                variant="primary"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="tel:0740301532"> Sună Acum: 0740 301 532</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
