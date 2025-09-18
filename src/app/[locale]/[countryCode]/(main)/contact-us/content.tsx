"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react"
import { Button } from "@medusajs/ui"
import { useTranslations } from "next-intl"

export default function ContactUsPageContent() {
  const t = useTranslations("contactUsPage")

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t("contact")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">
                  {t("contactInfo")}
                </CardTitle>
                <CardDescription>{t("contactInfoDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("address")}
                    </p>
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
                    <p className="font-semibold text-foreground">
                      {t("phone")}
                    </p>
                    <p className="text-muted-foreground">0754 301 532</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("email")}
                    </p>
                    <p className="text-muted-foreground">
                      evyanindustries@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("program")}
                    </p>
                    <p className="text-muted-foreground">
                      {t("programDetails")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border-border mt-6">
              <CardHeader>
                <CardTitle className="text-primary">{t("followUs")}</CardTitle>
                <CardDescription>{t("followUsDesc")}</CardDescription>
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

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">{t("ourLocation")}</CardTitle>
              <CardDescription>{t("ourLocationDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center border border-border">
                <iframe
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.6040406049938!2d26.22336887763328!3d47.653260871194384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734ff8446963367%3A0x47bdd0a43a6281d8!2sEvyan%20Moto%20Hub!5e0!3m2!1sen!2sro!4v1758216034591!5m2!1sen!2sro"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
