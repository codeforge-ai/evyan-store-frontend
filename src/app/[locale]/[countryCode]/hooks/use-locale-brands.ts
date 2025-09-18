import { useTranslations } from "next-intl"
import { getMotorcyclesBrands } from "app/[locale]/[countryCode]/const/constants"

export function useLocaleBrands() {
  const t = useTranslations("brands")

  return getMotorcyclesBrands(t)
}
