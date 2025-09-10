"use client"
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/*/!* Background Image *!/*/}
      {/*<div*/}
      {/*  className="absolute inset-0 z-0"*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${heroImage})`,*/}
      {/*    backgroundSize: "cover",*/}
      {/*    backgroundPosition: "center",*/}
      {/*    opacity: theme ? 0.9 : 0.3,*/}
      {/*  }}*/}
      {/*/>*/}

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
        >
          Pure Adrenaline
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Descoperă lumea motocicletelor cu cele mai bune branduri și
          echipamente profesionale
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
          >
            <LocalizedClientLink href="/motociclete"> Explorează Motocicletele</LocalizedClientLink>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <LocalizedClientLink href="/echipamente">Vezi Echipamentele</LocalizedClientLink>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
