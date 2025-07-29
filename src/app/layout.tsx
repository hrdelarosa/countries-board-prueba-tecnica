import './globals.css'
import type { Metadata } from 'next'
import { fontSans } from '../config/fonts'
import { Providers } from './providers'
import Header from '@/components/header'
import GitHub from '@/components/gitHub'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Countries Board',
  description: 'Countries Board is a technical test for a learning project',
  icons: {
    icon: '/earth.svg',
  },
  keywords: [
    'countries',
    'board',
    'country information',
    'technical test',
    'learning project',
  ],
  authors: [
    {
      name: 'Hozmel Roberto De la Rosa Rendón',
      url: 'https://github.com/hrdelarosa',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    title: 'Countries Board',
    description: 'Countries Board is a technical test for a learning project',
    siteName: 'Countries Board',
    images: [
      {
        url: '/og.jpeg',
        width: 1920,
        height: 1440,
        alt: 'Countries Board',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`min-h-screen antialiased ${fontSans.variable}`}>
        <Providers>
          <div className="relative flex flex-col h-screen">
            {/* <div>
              <GitHub className="size-5" />
            </div> */}
            <Header />

            {children}

            <footer className="flex items-center justify-center p-6 mx-auto text-sm text-center">
              <p>{new Date().getFullYear()} Countries Board</p>
            </footer>

            <Link
              href="https://github.com/hrdelarosa/countries-board-prueba-tecnica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="fixed bottom-5 right-5 flex items-center justify-center p-2 bg-foreground-100/75 rounded-full hover:bg-foreground-200/60 transition-colors"
            >
              <GitHub className="size-6" />
            </Link>
          </div>
        </Providers>
      </body>
    </html>
  )
}
