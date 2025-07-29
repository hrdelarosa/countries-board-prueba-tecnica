'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { HeroUIProvider } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type { ThemeProviderProps } from 'next-themes'

interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const navigate = useRouter()
  return (
    <HeroUIProvider navigate={navigate.push}>
      <NuqsAdapter>
        <NextThemeProvider
          attribute="class"
          defaultTheme="dark"
          {...themeProps}
        >
          {children}
        </NextThemeProvider>
      </NuqsAdapter>
    </HeroUIProvider>
  )
}
