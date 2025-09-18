import { useTranslations } from "next-intl"

export const getEquipmentsCategories = (
  t: ReturnType<typeof useTranslations>
) => {
  return [
    {
      title: t("helmetsTitle"),
      description: t("helmetsDescription"),
      brands: ["Shoei", "Arai", "AGV", "HJC"],
      types: ["Integrale", "Modulare", "Jet", "Off-road"],
      image: "/assets/casca.webp",
      path: "/equipments/casti",
    },
    {
      title: t("glovesBootsTitle"),
      description: t("glovesBootsDescription"),
      brands: ["Alpinestars", "Dainese", "Rev'it", "Held"],
      types: ["Racing", "Touring", "Urban", "Adventure"],
      image: "/assets/manusi.webp",
      path: "/equipments/manusi-boots",
    },
    {
      title: t("gearTitle"),
      description: t("gearDescription"),
      brands: ["Alpinestars", "Dainese", "Rukka", "Klim"],
      types: ["Combinezoane", "Geci", "Pantaloni", "Protecții"],
      image: "/assets/geaca.webp",
      path: "/equipments/haine",
    },
  ]
}

export const getMotorcyclesBrands = (t: ReturnType<typeof useTranslations>) => {
  return [
    {
      name: "Kawasaki",
      description: t("kawasakiDescription"),
      models: ["Ninja ZX-10R", "Z900", "Versys 650"],
      image: "/assets/kawasaki.webp",
      path: "/motorcycles/kawasaki",
    },
    {
      name: "Yamaha",
      description: t("yamahaDescription"),
      models: ["YZF-R1", "MT-09", "Ténéré 700"],
      image: "/assets/yamahayzf.webp",
      path: "/motorcycles/yamaha",
    },
    {
      name: "CFMoto",
      description: t("cfmotoDescription"),
      models: ["NK 650", "MT 650", "Adventure 700"],
      image: "/assets/cfmoto675.webp",
      path: "/motorcycles/cfmoto",
    },
  ]
}
