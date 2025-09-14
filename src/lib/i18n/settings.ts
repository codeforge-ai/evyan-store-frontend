import { defineRouting } from "next-intl/routing"

export const fallbackLng = "ro"
export const languages = [fallbackLng, "en"]
export const localePrefix = "always"
export const LOCALE_COOKIE = "NEXT_LOCALE"

export const routing = defineRouting({
  locales: languages,
  defaultLocale: fallbackLng,
  localeDetection: true,
})
