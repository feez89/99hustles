import type { Metadata } from 'next'
import { getAllHustles } from '@/lib/data/hustles'
import FilteredHustles from '@/components/hustles/FilteredHustles'

export const metadata: Metadata = {
  title: 'Explore 99+ Side Hustles | Find Your Income Stream | 99 Hustles',
  description:
    'Browse our complete library of 99+ documented side hustles with real startup costs, income potential, and step-by-step playbooks. Filter by category, difficulty, and more.',
  keywords: [
    'side hustles',
    'make money online',
    'income streams',
    'side hustle ideas',
    'work from home',
    'passive income',
    'freelance',
    'gig economy',
  ],
  openGraph: {
    title: 'Explore 99+ Side Hustles | Find Your Income Stream',
    description:
      'Browse our complete library of 99+ documented side hustles with real startup costs, income potential, and step-by-step playbooks.',
    type: 'website',
    url: 'https://99hustles.com/hustles',
    images: [
      {
        url: 'https://99hustles.com/og-hustles.jpg',
        width: 1200,
        height: 630,
        alt: '99+ Side Hustles Directory',
      },
    ],
  },
  twitter: {
    title: 'Explore 99+ Side Hustles',
    description: 'Browse our complete library of 99+ documented side hustles with real income data.',
    card: 'summary_large_image',
    images: ['https://99hustles.com/og-hustles.jpg'],
  },
}

export default function HustlesPage() {
  const hustles = getAllHustles()

  return (
    <>
      {/* Hero Section */}
      <section className="section-y bg-gradient-to-b from-brand-dark to-brand-black">
        <div className="container-main text-center">
          <p className="eyebrow text-brand-gold uppercase tracking-widest text-sm mb-4">
            The Hustle Library
          </p>
          <h1 className="heading-lg font-display font-bold mb-6 text-4xl md:text-5xl lg:text-6xl">
            99+ Documented Income Streams
          </h1>
          <p className="text-lg text-brand-white/70 max-w-3xl mx-auto mb-8">
            Real startup costs. Real income potential. Step-by-step playbooks for every hustle type.
            Filter by difficulty, category, or startup cost to find your next income stream.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-y bg-brand-black">
        <div className="container-main">
          <FilteredHustles hustles={hustles} />
        </div>
      </section>
    </>
  )
}
