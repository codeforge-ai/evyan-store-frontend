import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getLocale, setRequestLocale } from "next-intl/server"
import { routing } from "@lib/i18n/settings"

import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ region?: string; locale?: string }>
}) {
  const locale = await getLocale()
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <main className="relative">{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
