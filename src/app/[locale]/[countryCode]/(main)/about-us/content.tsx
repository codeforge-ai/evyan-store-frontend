'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "@lib/components/ui/card"
import { CheckCircle, Shield, User } from "lucide-react"
import { Button } from "@medusajs/ui"
import { useTranslations } from "next-intl"

export default function AboutUsPageContent() {
  const t = useTranslations("aboutUsPage")

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("intro")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {t("whoWeAreTitle")}
            </h2>
            <p className="text-muted-foreground mb-6">{t("whoWeAreText1")}</p>
            <p className="text-muted-foreground mb-6">{t("whoWeAreText2")}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {t("visionTitle")}
            </h2>
            <p className="text-muted-foreground mb-6">{t("visionText1")}</p>
            <p className="text-muted-foreground mb-6">{t("visionText2")}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div>
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{t("teamTitle")}</CardTitle>
                <CardDescription>{t("teamDescription")}</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div>
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{t("qualityTitle")}</CardTitle>
                <CardDescription>{t("qualityDescription")}</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div>
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-300 text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{t("safetyTitle")}</CardTitle>
                <CardDescription>{t("safetyDescription")}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-subtle rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {t("contactTitle")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("contactText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="large"
                className="bg-gradient-primary hover:shadow-glow"
              >
                <a href="/contact">{t("contactButton")}</a>
              </Button>
              <Button
                size="large"
                variant="primary"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="tel:+40740301532">{t("callButton")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
