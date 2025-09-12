import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"
import { Button } from "@medusajs/ui"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Suntem aici pentru tine! Contactează-ne pentru informații, oferte
            sau programări la service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">
                  Informații de Contact
                </CardTitle>
                <CardDescription>
                  Află cum să ne găsești și să ne contactezi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Adresa</p>
                    <p className="text-muted-foreground">
                      Strada Poligonului 26 A, Șcheia 727525
                      <br />
                      Suceava, România
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Telefon</p>
                    <p className="text-muted-foreground">+40 754 301 532</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      evyanindustries@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Program</p>
                    <p className="text-muted-foreground">
                      Luni - Vineri: 9:00 - 17:00
                      <br />
                      Sâmbătă: 9:00 - 12:00
                      <br />
                      Duminică: Închis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border-border mt-6">
              <CardHeader>
                <CardTitle className="text-primary">Urmărește-ne</CardTitle>
                <CardDescription>
                  Rămâi conectat cu noi pe social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button
                    size="small"
                    variant="primary"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <a
                      target="_blank"
                      href="https://www.facebook.com/p/Evyan-Moto-Hub-61573144294639/"
                    >
                      <Facebook
                        href="https://www.facebook.com/p/Evyan-Moto-Hub-61573144294639/"
                        className="w-4 h-4"
                      />
                    </a>
                  </Button>
                  <Button
                    size="small"
                    variant="primary"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <a
                      target="_blank"
                      href="https://www.instagram.com/evyanmotohub/"
                    >
                      <Instagram
                        href="https://www.instagram.com/evyanmotohub/"
                        className="w-4 h-4"
                      />
                    </a>
                  </Button>
                  <Button
                    size="small"
                    variant="primary"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <a
                      target="_blank"
                      href="https://www.tiktok.com/@evyan.dealership"
                    >
                      <Youtube
                        href="https://www.tiktok.com/@evyan.dealership"
                        className="w-4 h-4"
                      />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          {/* <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">
                  Trimite-ne un Mesaj
                </CardTitle>
                <CardDescription>
                  Completează formularul și te vom contacta în cel mai scurt
                  timp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nume">Nume *</Label>
                      <Input
                        id="nume"
                        className="bg-input border-border"
                        placeholder="Numele tău"
                      />
                    </div>
                    <div>
                      <Label htmlFor="prenume">Prenume *</Label>
                      <Input
                        id="prenume"
                        className="bg-input border-border"
                        placeholder="Prenumele tău"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-input border-border"
                        placeholder="email@exemplu.ro"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefon">Telefon</Label>
                      <Input
                        id="telefon"
                        className="bg-input border-border"
                        placeholder="+40 740 301 532"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subiect">Subiect</Label>
                    <Input
                      id="subiect"
                      className="bg-input border-border"
                      placeholder="Despre ce vrei să vorbești?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mesaj">Mesaj *</Label>
                    <Textarea
                      id="mesaj"
                      className="bg-input border-border min-h-[120px]"
                      placeholder="Scrie aici mesajul tău..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:shadow-glow">
                    Trimite Mesajul
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div> */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Locația Noastră</CardTitle>
              <CardDescription>
                Vino să ne vizitezi în showroom-ul nostru
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Locatie Google Maps
                  </p>
                  <a
                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4734ff8446963367:0x47bdd0a43a6281d8?sa=X&ved=1t:8290&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-primary hover:shadow-glow">
                      Deschide în Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
      </div>
    </div>
  )
}

export default Contact
