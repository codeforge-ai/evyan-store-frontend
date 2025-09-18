'use client'

import { CheckCircle, Clock, Shield, Wrench } from "lucide-react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useTranslations } from "next-intl"

export default function ServicePageContent() {
  const t = useTranslations("servicePage")

  const services = [
    {
      title: t("services.authorizedService.title"),
      description: t("services.authorizedService.description"),
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
    },
    {
      title: t("services.warrantyRepairs.title"),
      description: t("services.warrantyRepairs.description"),
      icon: <Shield className="w-8 h-8 text-primary" />,
    },
    {
      title: t("services.professionalMaintenance.title"),
      description: t("services.professionalMaintenance.description"),
      icon: <Wrench className="w-8 h-8 text-primary" />,
    },
    {
      title: t("services.flexibleSchedule.title"),
      description: t("services.flexibleSchedule.description"),
      icon: <Clock className="w-8 h-8 text-primary" />,
    },
  ]

  const serviceList = t.raw("serviceList")

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t("pageTitle")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pageSubtitle")}
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
              {t("servicesTitle")}
            </h2>
            <div className="space-y-4">
              {serviceList.map((item: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {t("warrantyTitle")}
            </h2>
            <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
              <p className="text-muted-foreground mb-4">{t("warrantyText1")}</p>
              <p className="text-muted-foreground mb-4">{t("warrantyText2")}</p>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">
                  {t("extendedWarranty")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("extendedWarrantyDetails")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-subtle rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {t("appointmentTitle")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("appointmentSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow"
              >
                <LocalizedClientLink href="/contact-us">
                  {t("bookOnline")}
                </LocalizedClientLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="tel:+40740301532">{t("callNow")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
