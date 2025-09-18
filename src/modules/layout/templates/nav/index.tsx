'use client'

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ThemeToggle } from "@lib/components/theme-toggle"
import LanguageSwitcher from "@modules/layout/components/language-switcher"
import { useTranslations } from "next-intl"

export default function Nav() {
  const t = useTranslations("nav")
  // const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("motorcyclingTypes"), path: "/motorcycling-types" },
    { name: t("motorcycles"), path: "/motorcycles" },
    { name: t("equipments"), path: "/equipments" },
    { name: t("service"), path: "/service" },
    { name: t("contact"), path: "/contact-us" },
    { name: t("aboutUs"), path: "/about-us" }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <LocalizedClientLink
            href="/"
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
          ></LocalizedClientLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <LocalizedClientLink
                key={item.path}
                href={item.path}
                className="px-3 py-2 text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-primary/50"
              >
                {item.name}
              </LocalizedClientLink>
            ))}
            {/* ThemeToggle can be added here if you have a client component */}
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            {/*<Suspense*/}
            {/*  fallback={*/}
            {/*    <LocalizedClientLink*/}
            {/*      className="px-3 py-2 text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-primary/50"*/}
            {/*      href="/cart"*/}
            {/*    >*/}
            {/*      Cart (0)*/}
            {/*    </LocalizedClientLink>*/}
            {/*  }*/}
            {/*>*/}
            <LanguageSwitcher/>
            <ThemeToggle />
            {/*<CartButton />*/}
            {/*</Suspense>*/}
          </div>
        </div>
      </div>
    </nav>
  )
}
