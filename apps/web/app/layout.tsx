import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bible Transcription Site',
  description:
    'Detailed linguistic analysis of Bible verses with Korean translations and contextual explanations',
  keywords: [
    'Bible',
    'transcription',
    'analysis',
    'Korean translation',
    'linguistics',
    'NIV',
  ],
  authors: [{ name: 'Bible Transcription Site' }],
  manifest: '/manifest.json',
  openGraph: {
    title: 'Bible Transcription Site',
    description:
      'Detailed linguistic analysis of Bible verses with Korean translations',
    type: 'website',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Bible Trans',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}