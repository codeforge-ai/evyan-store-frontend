import { useTranslations } from "next-intl"
import { getEquipmentsCategories } from "app/[locale]/[countryCode]/const/constants"

export function useLocaleEquipmentCategories() {
  const t = useTranslations("equipments")

  return getEquipmentsCategories(t)
}
