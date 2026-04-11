import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: '99 Hustles — Real People. Real Income. Real Breakdowns.',
    template: '%s | 99 Hustles',
  },
  description:
    'Documented income streams, hustle breakdowns, and long-form podcast conversations with real people building real businesses. No fluff. No theory. Just the playbook.',
  keywords: [
    'side hustles',
    'entrepreneurship',
    'make money online',
    'business breakdowns',
    'wealth building',
    'podcast',
    'income streams',
    'side gig',
    'passive income',
  ],
  authors: [{ name: '99 Hustles' }],
  creator: '99 Hustles',
  metadataBase: new URL('https://99hustles.com'),
  alternates: {
    canonical: 'https://99hustles.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://99hustles.com',
    siteName: '99 Hustles',
    title: '99 Hustles — Real People. Real Income. Real Breakdowns.',
    description:
      'Documented income streams, hustle breakdowns, and long-form podcast conversations with real people building real businesses.',
    images: [
      {
        url: 'https://99hustles.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '99 Hustles - Real People. Real Income. Real Breakdowns.',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '99 Hustles — Real People. Real Income. Real Breakdowns.',
    description:
      'Documented income streams, hustle breakdowns, and long-form podcast conversations with real people building real businesses.',
    images: ['https://99hustles.com/og-image.jpg'],
    creator: '@99hustles',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '99 Hustles',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '99 Hustles',
    description:
      'Documented income streams, hustle breakdowns, and long-form podcast conversations with real people building real businesses.',
    url: 'https://99hustles.com',
    logo: 'https://99hustles.com/logo.png',
    sameAs: [
      'https://twitter.com/99hustles',
      'https://instagram.com/99hustles',
      'https://youtube.com/99hustles',
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://99hustles.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '99 Hustles',
    url: 'https://99hustles.com',
    logo: 'https://99hustles.com/logo.png',
    description:
      'Documented income streams, hustle breakdowns, and long-form podcast conversations with real people building real businesses.',
    sameAs: [
      'https://twitter.com/99hustles',
      'https://instagram.com/99hustles',
      'https://youtube.com/99hustles',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@99hustles.com',
    },
  }

  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{
        colorScheme: 'dark',
      }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-brand-black text-brand-white antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
