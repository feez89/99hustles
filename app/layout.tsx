import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: '99 Hustles — Real People. Real Income. Real Breakdowns.',
    template: '%s | 99 Hustles',
  },
  description:
    'Documented income streams, hustle breakdowns, and podcast episodes from real people building real businesses. No fluff. No guru nonsense.',
  keywords: [
    'side hustles',
    'entrepreneurship',
    'make money online',
    'business breakdowns',
    'wealth building',
    'podcast',
    'income streams',
  ],
  authors: [{ name: '99 Hustles' }],
  creator: '99 Hustles',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://99hustles.com',
    siteName: '99 Hustles',
    title: '99 Hustles — Real People. Real Income. Real Breakdowns.',
    description:
      'Documented income streams, hustle breakdowns, and podcast episodes from real people building real businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '99 Hustles — Real People. Real Income. Real Breakdowns.',
    description:
      'Documented income streams, hustle breakdowns, and podcast episodes from real people building real businesses.',
    creator: '@99hustles',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
