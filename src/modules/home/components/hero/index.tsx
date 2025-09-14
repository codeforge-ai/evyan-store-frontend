"use client"
import { motion } from "framer-motion"

import { ArrowRight, Star } from "lucide-react"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import heroImage from "../../../../../public/assets/hero-motorcycle.jpg"
import { useTheme } from "next-themes"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"
import { EQUIPMENTS_CATEGORIES, MOTORCYCLES_BRANDS } from "app/[locale]/[countryCode]/const/constants"

const Hero = () => {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagine fundal */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            opacity: theme === "light" ? 0.9 : 0.6,
          }}
        />
        {/* Overlay 3D */}
        <div className="absolute inset-0 z-10 hidden md:block"></div>

        {/* Text Hero */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
          >
            Adrenalină Pură
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Descoperă lumea motocicletelor cu cele mai bune branduri și
            echipamente profesionale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow group"
              asChild
            >
              <LocalizedClientLink href="/motorcycles">
                Explorează Motocicletele
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </LocalizedClientLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="tel:0740301532">Sună Acum: 0740 301 532</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Branduri Section */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent"
          >
            Brandurile Noastre
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {MOTORCYCLES_BRANDS.map((brand, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="text-6xl mb-4 text-center bg-white ">
                    <img
                      src={brand.image}
                      alt={brand.name}
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
                  <h4 className="font-semibold mb-3 text-foreground text-center">
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
                    <LocalizedClientLink href={brand.path}>
                      Vezi Detalii
                    </LocalizedClientLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Echipamente Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent"
          >
            Echipamente Moto
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {EQUIPMENTS_CATEGORIES.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-4 text-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-contain rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="text-2xl text-center text-primary">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2 text-foreground text-center">
                    Branduri:
                  </h4>
                  <p className="text-muted-foreground text-center mb-3">
                    {item.brands.join(", ")}
                  </p>
                  <h4 className="font-semibold mb-2 text-foreground text-center">
                    Tipuri disponibile:
                  </h4>
                  <p className="text-muted-foreground text-center mb-6">
                    {item.types.join(", ")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-subtle rounded-lg p-12 border border-border"
          >
            <Star className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Începe Aventura Ta
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fie că ești începător sau motociclist experimentat, avem soluțiile
              perfecte pentru tine. Descoperă gama noastră completă și
              găsește-ți stilul de conducere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow"
                asChild
              >
                <LocalizedClientLink href="/motorcycles">
                  Vezi Toate Motocicletele
                </LocalizedClientLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <LocalizedClientLink href="/contact-us">
                  Contactează Specialistul
                </LocalizedClientLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hero
