"use client"

import { useLocale } from "next-intl"
import { Button } from "@lib/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@lib/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"
import { usePathname, useRouter, Link } from "@lib/i18n/navigation"
import { useParams } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

export function buildLocalizedPath({
  locale,
  region,
  path = "",
}: {
  locale: string
  region: string
  path?: string
}) {
  return `/${locale}/${region}${path.startsWith("/") ? path : `/${path}`}`
}

const languages = [
  { code: "en", flag: "🇺🇸" },
  { code: "ro", flag: "🇷🇴" },
]

const LanguageSwitcher = () => {
  const locale = useLocale()
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations("language")

  const currentLanguage = languages.find((lang) => lang.code === locale)

  // Get the current path after the locale/region segment
  const getPathAfterLocaleRegion = () => {
    const pathSegments = pathname.split("/")
    // Remove empty first segment, locale and region
    if (pathSegments.length > 3) {
      return "/" + pathSegments.slice(3).join("/")
    }
    return ""
  }

  function handleLanguageChange(newLocale: string) {
    // router.replace(`/${newLocale}${pathname}`, {})
    window.location.replace(`/${newLocale}${pathname}`)
  }

  // For debugging - you can see this in the console
  console.log(pathname,' red')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <span className="h-auto w-4">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{t(locale)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-2 ${
              locale === language.code ? "bg-blue-50 text-blue-600" : ""
            }`}
          >
            <span>{language.flag}</span>
            <span>{t(language.code)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
