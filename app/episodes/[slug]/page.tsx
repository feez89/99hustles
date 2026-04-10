import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Play, Clock, CheckCircle2, Quote } from 'lucide-react'
import { getEpisodeBySlug, episodes } from '@/lib/data/episodes'
import { getRelatedHustles } from '@/lib/data/hustles'
import HustleCard from '@/components/hustles/HustleCard'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return episodes.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const episode = getEpisodeBySlug(params.slug)
  if (!episode) return {}
  return {
    title: episode.title,
    description: episode.summary.slice(0, 160),
  }
}

export default function EpisodePage({ params }: Props) {
  const episode = getEpisodeBySlug(params.slug)
  if (!episode) notFound()

  const relatedHustles = getRelatedHustles(episode.relatedHustleSlugs)

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-16">
        <div className="container-main py-12 md:py-16">
          {/* Breadcrumb */}
          <Link
            href="/episodes"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Episodes
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="on-dark">Ep. {episode.episodeNumber}</Badge>
            <Badge variant="default" className="bg-white/10 text-white/70 border-0">
              {episode.category}
            </Badge>
            <span className="text-white/30">·</span>
            <div className="flex items-center gap-1 text-white/50 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {episode.duration}
            </div>
            <span className="text-white/30">·</span>
            <span className="text-white/50 text-sm">{formatDate(episode.publishDate)}</span>
          </div>

          <h1 className="font-display font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mb-8">
            {episode.title}
          </h1>

          {/* Guest Card */}
          <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl max-w-md">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-brand-black text-lg">
                {episode.guest.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{episode.guest.name}</p>
              <p className="text-white/50 text-xs">
                {episode.guest.title}
                {episode.guest.company && ` · ${episode.guest.company}`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Embed */}
      <section className="bg-brand-charcoal border-b border-white/10">
        <div className="container-main py-10">
          <div className="max-w-4xl mx-auto">
            {episode.youtubeId ? (
              <div className="aspect-video rounded-2xl overflow-hidden bg-brand-black">
                <iframe
                  src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={episode.title}
                />
              </div>
            ) : (
              <div className="aspect-video rounded-2xl bg-brand-black flex flex-col items-center justify-center gap-4 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Play className="w-7 h-7 text-white fill-white" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold">Watch on YouTube</p>
                  <a
                    href="https://youtube.com/@99hustlespodcast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:underline"
                  >
                    @99hustlespodcast ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Episode Content */}
      <section className="bg-white">
        <div className="container-main py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Summary */}
              <div>
                <h2 className="font-display font-bold text-brand-black text-2xl mb-5">
                  Episode summary
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">{episode.summary}</p>
              </div>

              {/* Key Takeaways */}
              <div>
                <h2 className="font-display font-bold text-brand-black text-2xl mb-5">
                  Key takeaways
                </h2>
                <div className="space-y-4">
                  {episode.keyTakeaways.map((takeaway, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-brand-cream rounded-xl border border-brand-border">
                      <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm leading-relaxed">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights / Quotes */}
              <div>
                <h2 className="font-display font-bold text-brand-black text-2xl mb-5">
                  Best quotes
                </h2>
                <div className="space-y-5">
                  {episode.highlights.map((quote, i) => (
                    <blockquote
                      key={i}
                      className="relative pl-6 border-l-4 border-white/30"
                    >
                      <Quote className="absolute -left-1 top-0 w-4 h-4 text-neutral-300" />
                      <p className="text-gray-700 text-base italic leading-relaxed">{quote}</p>
                      <cite className="text-sm text-gray-400 not-italic mt-2 block">
                        — {episode.guest.name}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Guest Bio */}
              <div className="bg-brand-cream border border-brand-border rounded-2xl p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  About the guest
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-neutral-100 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-brand-black">
                      {episode.guest.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-sm">{episode.guest.name}</p>
                    <p className="text-gray-500 text-xs">
                      {episode.guest.title}
                      {episode.guest.company && `, ${episode.guest.company}`}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{episode.guest.bio}</p>
              </div>

              {/* Subscribe CTA */}
              <div className="bg-brand-black rounded-2xl p-6 text-center">
                <p className="text-white text-xs font-semibold uppercase tracking-widest mb-2">
                  Don't miss a single one
                </p>
                <h3 className="font-display font-bold text-white text-lg mb-3">
                  Get every episode in your inbox
                </h3>
                <p className="text-white/50 text-xs mb-5">
                  Plus weekly hustle breakdowns and resources from our operators.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50"
                  />
                  <button type="submit" className="btn-primary w-full justify-center text-xs">
                    Subscribe Free
                  </button>
                </form>
              </div>

              {/* Platform Links */}
              <div className="border border-brand-border rounded-2xl p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Listen on
                </p>
                <div className="space-y-2.5">
                  {[
                    { name: 'YouTube', href: 'https://youtube.com/@99hustlespodcast', emoji: '▶️' },
                    { name: 'Spotify', href: '#', emoji: '🎵' },
                    { name: 'Apple Podcasts', href: '#', emoji: '🎙️' },
                    { name: 'Amazon Music', href: '#', emoji: '🎧' },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-brand-cream transition-colors text-sm font-medium text-gray-700"
                    >
                      <span>{platform.emoji}</span>
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Hustles */}
      {relatedHustles.length > 0 && (
        <section className="bg-brand-cream border-t border-brand-border section-padding-sm">
          <div className="container-main">
            <h2 className="font-display font-bold text-brand-black text-2xl mb-8">
              Hustles mentioned in this episode
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedHustles.map((hustle) => (
                <HustleCard key={hustle.id} hustle={hustle} />
              ))}
            </div>
          </div>
        </section>
      )}

      <EmailCaptureSection
        variant="dark"
        headline="More episodes like this in your inbox."
        subheadline="Subscribe to the 99 Hustles newsletter and get the weekly breakdown every week — free."
        ctaText="Subscribe now"
      />
    </>
  )
}
