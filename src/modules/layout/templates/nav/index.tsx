import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { ThemeToggle } from "@lib/components/theme-toggle"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Tipuri Motociclism", path: "/tipuri-motociclism" },
  { name: "Motociclete", path: "/motociclete" },
  { name: "Echipamente", path: "/echipamente" },
  { name: "Service", path: "/service" },
  { name: "Contact", path: "/contact" },
  { name: "Despre noi", path: "/despre-noi" },
]

export default async function Nav() {
  // const regions = await listRegions().then((regions: StoreRegion[]) => regions)

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
            <ThemeToggle />
            {/*<CartButton />*/}
            {/*</Suspense>*/}
          </div>
        </div>
      </div>
    </nav>
  )
}
