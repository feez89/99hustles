import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ExternalLink, Mic, AlertTriangle } from 'lucide-react'
import { getHustleBySlug, getRelatedHustles, hustles } from '@/lib/data/hustles'
import { getEpisodeBySlug } from '@/lib/data/episodes'
import QuickStatsPanel from '@/components/hustles/QuickStatsPanel'
import HustleCard from '@/components/hustles/HustleCard'
import EpisodeCard from '@/components/episodes/EpisodeCard'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return hustles.map((h) => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hustle = getHustleBySlug(params.slug)
  if (!hustle) return {}
  return {
    title: `${hustle.title} — How It Works, What It Pays`,
    description: hustle.tagline,
  }
}

export default function HustleBreakdownPage({ params }: Props) {
  const hustle = getHustleBySlug(params.slug)
  if (!hustle) notFound()

  const relatedHustles = getRelatedHustles(hustle.relatedHustleSlugs)
  const relatedEpisode = hustle.relatedEpisodeSlug
    ? getEpisodeBySlug(hustle.relatedEpisodeSlug)
    : null

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-16">
        <div className="container-main py-12 md:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link
              href="/hustles"
              className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Hustle Library
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/70">{hustle.category}</span>
          </div>

          {/* Category + Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="on-dark" size="md">
              {hustle.category}
            </Badge>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/50 text-xs">{hustle.readTime}</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/50 text-xs">Updated {formatDate(hustle.publishDate)}</span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mb-5">
            {hustle.title}
          </h1>

          {/* Tagline */}
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            {hustle.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {hustle.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/50 border border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-brand-cream border-b border-brand-border">
        <div className="container-main py-8">
          <QuickStatsPanel hustle={hustle} />
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white">
        <div className="container-main py-14">
          <div className="max-w-3xl">

            {/* What This Hustle Is */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">💡</span>
                <h2 className="font-display font-bold text-brand-black text-2xl">
                  What this hustle is
                </h2>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">{hustle.whatItIs}</p>
            </div>

            {/* How It Makes Money */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">💰</span>
                <h2 className="font-display font-bold text-brand-black text-2xl">
                  How it makes money
                </h2>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">{hustle.howItMakesMoney}</p>
            </div>

            {/* Email Capture Mid-Page */}
            <div className="my-14 rounded-2xl bg-brand-black p-8 text-center">
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-2">
                Stay in the loop
              </p>
              <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3">
                Get this breakdown + weekly new ones.
              </h3>
              <p className="text-white/50 text-sm mb-5">
                Free weekly breakdowns. No spam. Just the playbooks.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50"
                />
                <button
                  type="submit"
                  className="btn-primary text-xs whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* How to Get Started */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🚀</span>
                <h2 className="font-display font-bold text-brand-black text-2xl">
                  How to get started
                </h2>
              </div>
              <div className="space-y-4">
                {hustle.howToGetStarted.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Needed */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🛠️</span>
                <h2 className="font-display font-bold text-brand-black text-2xl">Tools needed</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hustle.toolsNeeded.map((tool) => (
                  <div
                    key={tool.name}
                    className="border border-brand-border rounded-xl p-4 bg-brand-cream hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-brand-black text-sm">{tool.name}</h4>
                      {tool.url && (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors ml-2"
                          aria-label={`Visit ${tool.name}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-2">{tool.description}</p>
                    <span className="text-xs font-semibold text-black">{tool.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mistakes to Avoid */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">⚠️</span>
                <h2 className="font-display font-bold text-brand-black text-2xl">
                  Mistakes to avoid
                </h2>
              </div>
              <div className="space-y-3">
                {hustle.mistakesToAvoid.map((mistake, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 bg-red-50 border border-red-100 rounded-xl"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{mistake}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Episode */}
            {relatedEpisode && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <Mic className="w-5 h-5 text-black" />
                  <h2 className="font-display font-bold text-brand-black text-2xl">
                    Related episode
                  </h2>
                </div>
                <EpisodeCard episode={relatedEpisode} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Hustles */}
      {relatedHustles.length > 0 && (
        <section className="bg-brand-cream border-t border-brand-border">
          <div className="container-main py-14">
            <h2 className="font-display font-bold text-brand-black text-2xl mb-8">
              Related hustles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedHustles.map((h) => (
                <HustleCard key={h.id} hustle={h} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Email Capture */}
      <EmailCaptureSection
        variant="dark"
        headline="Found this useful? Get a new one every week."
        subheadline="Join 10,000+ builders who get the weekly hustle breakdown — free, every week, in your inbox."
        ctaText="Subscribe free"
      />
    </>
  )
}
