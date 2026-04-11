import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, DollarSign, Clock, TrendingUp, Zap, CheckCircle2, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react'
import { getHustleBySlug, getAllHustles, getRelatedHustles } from '@/lib/data/hustles'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'
import HustleCard from '@/components/hustles/HustleCard'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const hustle = getHustleBySlug(params.slug)

  if (!hustle) {
    return {
      title: 'Hustle Not Found | 99 Hustles',
      description: 'This hustle does not exist.',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99hustles.com'
  const description = `${hustle.tagline} Learn how to get started with ${hustle.title}, including startup costs, time to first income, and realistic earnings potential.`

  return {
    title: `${hustle.title} - Side Hustle Guide | 99 Hustles`,
    description,
    keywords: [hustle.title, hustle.category, ...hustle.tags, 'side hustle', 'make money online'].join(', '),
    openGraph: {
      title: `${hustle.title} - Side Hustle Guide`,
      description,
      url: `${baseUrl}/hustles/${hustle.slug}`,
      type: 'article',
      publishedTime: hustle.publishDate,
      tags: hustle.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${hustle.title} - Side Hustle Guide`,
      description,
    },
    alternates: {
      canonical: `${baseUrl}/hustles/${hustle.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const hustles = getAllHustles()
  return hustles.map((hustle) => ({
    slug: hustle.slug,
  }))
}

export default function HustleDetailPage({ params }: PageProps) {
  const hustle = getHustleBySlug(params.slug)

  if (!hustle) {
    notFound()
  }

  const relatedHustles = getRelatedHustles(hustle.relatedHustleSlugs)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Start ${hustle.title}`,
    description: hustle.whatItIs,
    image: '/images/hustles/placeholder.jpg',
    estimatedCost: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      price: hustle.startupCostRange[1].toString(),
    },
    totalTime: hustle.timeToFirstIncome,
    step: hustle.howToGetStarted.map((step, index) => ({
      '@type': 'HowToStep',
      position: (index + 1).toString(),
      name: `Step ${index + 1}`,
      text: step,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="container-main">
          <div className="mb-6 inline-block">
            <div className="badge-on-dark">
              {hustle.category}
            </div>
          </div>

          <h1 className="heading-xl mb-4 text-white">
            {hustle.title}
          </h1>

          <p className="prose-light mb-12 max-w-2xl text-lg">
            {hustle.tagline}
          </p>

          {/* METRICS STRIP */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-brand-dark p-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Startup Cost
              </div>
              <div className="text-lg font-display font-semibold text-white">
                {hustle.startupCost}
              </div>
            </div>

            <div className="rounded-lg bg-brand-dark p-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Time to First Dollar
              </div>
              <div className="text-lg font-display font-semibold text-white">
                {hustle.timeToFirstIncome}
              </div>
            </div>

            <div className="rounded-lg bg-brand-dark p-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Income Potential
              </div>
              <div className="text-lg font-display font-semibold text-white">
                {hustle.revenuePotential}
              </div>
            </div>

            <div className="rounded-lg bg-brand-dark p-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Difficulty
              </div>
              <div className="text-lg font-display font-semibold text-white">
                {hustle.difficulty}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="section-y bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {/* LEFT COLUMN - MAIN CONTENT */}
            <div className="lg:col-span-2">
              {/* What It Is */}
              <div className="mb-16">
                <h2 className="heading-lg font-display mb-6 text-brand-black">
                  What It Is
                </h2>
                <p className="prose-light text-lg leading-relaxed text-gray-700">
                  {hustle.whatItIs}
                </p>
              </div>

              {/* How It Makes Money */}
              <div className="mb-16">
                <h2 className="heading-lg font-display mb-6 text-brand-black">
                  How It Makes Money
                </h2>
                <p className="prose-light text-lg leading-relaxed text-gray-700">
                  {hustle.howItMakesMoney}
                </p>
              </div>

              {/* How to Get Started */}
              <div className="mb-16">
                <h2 className="heading-lg font-display mb-8 text-brand-black">
                  How to Get Started
                </h2>
                <ol className="space-y-6">
                  {hustle.howToGetStarted.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full font-display font-semibold text-white"
                          style={{ backgroundColor: hustle.accentColor }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-base text-gray-700 leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tools & Platforms */}
              {hustle.toolsNeeded.length > 0 && (
                <div className="mb-16">
                  <h2 className="heading-lg font-display mb-8 text-brand-black">
                    Tools & Platforms
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {hustle.toolsNeeded.map((tool, index) => (
                      <div
                        key={index}
                        className="card-light border border-brand-subtle rounded-lg p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-display font-semibold text-brand-black">
                            {tool.name}
                          </h3>
                          {tool.url && (
                            <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          {tool.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: hustle.accentColor }}
                          >
                            {tool.cost}
                          </span>
                          {tool.url && (
                            <Link
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-gray-600 hover:text-brand-black transition-colors"
                            >
                              Visit
                              <ArrowRight className="inline-block h-3 w-3 ml-1" />
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Mistakes to Avoid */}
              {hustle.mistakesToAvoid.length > 0 && (
                <div className="mb-16">
                  <h2 className="heading-lg font-display mb-8 text-brand-black flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6" style={{ color: hustle.accentColor }} />
                    Common Mistakes to Avoid
                  </h2>
                  <div className="space-y-4">
                    {hustle.mistakesToAvoid.map((mistake, index) => (
                      <div
                        key={index}
                        className="flex gap-4 rounded-lg border-l-4 p-4"
                        style={{ borderLeftColor: hustle.accentColor, backgroundColor: '#FFFBF7' }}
                      >
                        <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: hustle.accentColor }} />
                        <p className="text-gray-700">
                          {mistake}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Hustles */}
              {relatedHustles.length > 0 && (
                <div className="mb-16">
                  <h2 className="heading-lg font-display mb-8 text-brand-black">
                    Related Hustles
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {relatedHustles.map((relatedHustle) => (
                      <HustleCard key={relatedHustle.id} hustle={relatedHustle} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN - STICKY SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="card-dark rounded-lg p-8 bg-brand-card border border-brand-subtle">
                  <div className="space-y-6 mb-8">
                    {/* Startup Cost */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Startup Cost
                        </span>
                      </div>
                      <div
                        className="text-xl font-display font-semibold"
                        style={{ color: hustle.accentColor }}
                      >
                        {hustle.startupCost}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {hustle.startupCostRange[0]} - ${hustle.startupCostRange[1]}
                      </p>
                    </div>

                    {/* Time to First Dollar */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Time to First Dollar
                        </span>
                      </div>
                      <div className="text-lg font-display font-semibold text-white">
                        {hustle.timeToFirstIncome}
                      </div>
                    </div>

                    {/* Income Potential */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Income Potential
                        </span>
                      </div>
                      <div className="text-lg font-display font-semibold text-white">
                        {hustle.revenuePotential}
                      </div>
                    </div>

                    {/* Skill Level */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Skill Level
                        </span>
                      </div>
                      <div className="inline-block">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                          style={{ backgroundColor: hustle.accentColor }}
                        >
                          {hustle.skillLevel}
                        </span>
                      </div>
                    </div>

                    {/* Difficulty */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Difficulty
                        </span>
                      </div>
                      <div className="inline-block">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                          style={{ backgroundColor: hustle.accentColor }}
                        >
                          {hustle.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-brand-subtle pt-6 space-y-3">
                    <Link
                      href="/quiz"
                      className="btn-primary block text-center w-full py-3 rounded-lg font-semibold transition-all"
                      style={{ backgroundColor: hustle.accentColor }}
                    >
                      Take the Hustle Quiz
                    </Link>
                    <Link
                      href="/hustles"
                      className="btn-dark block text-center w-full py-3 rounded-lg font-semibold border border-brand-subtle text-white hover:bg-brand-subtle transition-colors"
                    >
                      View All Hustles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <EmailCaptureSection
        variant="dark"
        headline="Join Thousands Getting Weekly Hustle Breakdowns"
        subheadline="Get detailed guides for side hustles that actually work, with real income numbers and startup costs."
        ctaText="Get Free Access"
      />
    </>
  )
}
