"use client"
import { Button } from "@lib/components/ui/button"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const StartAdventure = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-subtle border-border rounded-lg border p-12"
        >
          <Star className="text-primary mx-auto mb-6 h-16 w-16" />
          <h2 className="text-primary mb-4 text-3xl font-bold">
            Începe Aventura Ta
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Fie că ești începător sau motociclist experimentat, avem soluțiile
            perfecte pentru tine. Descoperă gama noastră completă și găsește-ți
            stilul de conducere.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              <LocalizedClientLink href="/motociclete">
                Vezi Toate Motocicletele
              </LocalizedClientLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <LocalizedClientLink href="/motociclete">
                Contactează Specialistul
              </LocalizedClientLink>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StartAdventure
