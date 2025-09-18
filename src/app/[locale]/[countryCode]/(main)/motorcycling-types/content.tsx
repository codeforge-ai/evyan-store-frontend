'use client'

import { useTranslations } from "next-intl"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"

export default function MotorcyclingTypesPageContent() {
  const t = useTranslations("motorcyclingTypesPage")

  const motorcycleTypes = [
    {
      title: t("enduroTitle"),
      description: t("enduroDescription"),
      gear: [
        t("enduroGear1"),
        t("enduroGear2"),
        t("enduroGear3"),
        t("enduroGear4"),
      ],
      image: "🏍️",
    },
    {
      title: t("touringTitle"),
      description: t("touringDescription"),
      gear: [
        t("touringGear1"),
        t("touringGear2"),
        t("touringGear3"),
        t("touringGear4"),
      ],
      image: "🛣️",
    },
    {
      title: t("adventureTitle"),
      description: t("adventureDescription"),
      gear: [
        t("adventureGear1"),
        t("adventureGear2"),
        t("adventureGear3"),
        t("adventureGear4"),
      ],
      image: "⛰️",
    },
    {
      title: t("urbanTitle"),
      description: t("urbanDescription"),
      gear: [
        t("urbanGear1"),
        t("urbanGear2"),
        t("urbanGear3"),
        t("urbanGear4"),
      ],
      image: "🏙️",
    },
    {
      title: t("circuitTitle"),
      description: t("circuitDescription"),
      gear: [
        t("circuitGear1"),
        t("circuitGear2"),
        t("circuitGear3"),
        t("circuitGear4"),
      ],
      image: "🏁",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycleTypes.map((type, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="text-6xl mb-4 text-center">{type.image}</div>
                <CardTitle className="text-xl text-center text-primary">
                  {type.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-foreground">
                  {t("recommendedGear")}
                </h4>
                <ul className="space-y-2 mb-6">
                  {type.gear.map((item, gearIndex) => (
                    <li
                      key={gearIndex}
                      className="text-muted-foreground flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
