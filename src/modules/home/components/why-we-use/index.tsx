"use client"
import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"

import { Shield, Zap } from "lucide-react"

const WhyToUse = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            De ce noi?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pasiunea pentru motociclism vine cu responsabilitatea de a alege
            echipamentul potrivit și brandurile de încredere. Iată de ce suntem
            alegerea perfectă pentru aventura ta pe două roți.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text-Image Section 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <Card className="bg-gradient-subtle border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-primary mr-3" />
                  <CardTitle className="text-2xl text-primary">
                    Siguranță Maximă
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Oferim doar echipamentele de cea mai înaltă calitate,
                  certificate conform standardelor europene de siguranță.
                  Fiecare produs din portofoliul nostru este testat rigorosos
                  pentru a-ți oferi protecția maximă în orice aventură.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Certificări CE și DOT pentru toate produsele
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Testare riguroasă în condiții extreme
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Consultanță specializată pentru fiecare client
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="bg-gradient-primary p-1 rounded-lg shadow-glow">
              <div className="bg-card rounded-lg p-8 text-center">
                <Shield className="w-24 h-24 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Protecție Certificată
                </h3>
                <p className="text-muted-foreground">
                  Standardele cele mai înalte de siguranță
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text-Image Section 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:order-2"
          >
            <div className="bg-gradient-primary p-1 rounded-lg shadow-glow">
              <div className="bg-card rounded-lg p-8 text-center">
                <Zap className="w-24 h-24 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Performanță
                </h3>
                <p className="text-muted-foreground">
                  Tehnologie de vârf pentru experiențe unice
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center md:order-1"
          >
            <Card className="bg-gradient-subtle border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-primary mr-3" />
                  <CardTitle className="text-2xl text-primary">
                    Performanță de Vârf
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Colaborăm cu cei mai prestigioși producători din industrie
                  pentru a-ți oferi motociclete cu performanțe excepționale. De
                  la motoare de ultimă generație la sisteme electronice
                  avansate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Motoare cu tehnologii de Formula 1
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Sisteme electronice inteligente
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Aerodinamică optimizată pentru viteză
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyToUse
