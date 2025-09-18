"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lib/components/ui/card"

import { Shield, Zap } from "lucide-react"

const WhyToUse = () => {
  const t = useTranslations("whyToUse")

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Safety Section */}
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
                    {t("safety.title")}
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  {t("safety.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {t.raw("safety.list").map((item: string, i: number) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Safety Highlight */}
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
                  {t("safety.highlightTitle")}
                </h3>
                <p className="text-muted-foreground">{t("safety.highlightText")}</p>
              </div>
            </div>
          </motion.div>

          {/* Performance Highlight */}
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
                  {t("performance.highlightTitle")}
                </h3>
                <p className="text-muted-foreground">{t("performance.highlightText")}</p>
              </div>
            </div>
          </motion.div>

          {/* Performance Section */}
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
                    {t("performance.title")}
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  {t("performance.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {t.raw("performance.list").map((item: string, i: number) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
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
