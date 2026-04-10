import Link from 'next/link'
import { Youtube, Instagram, Mic } from 'lucide-react'
import { episodes } from '@/lib/data/episodes'
import EpisodeCard from '@/components/episodes/EpisodeCard'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'

export const metadata = {
  title: 'Episodes — Real Conversations with Real Operators',
  description:
    'Listen to in-depth podcast conversations with entrepreneurs, side hustlers, and builders sharing exactly how they make money.',
}

export default function EpisodesPage() {
  const featured = episodes.filter((e) => e.featured)
  const rest = episodes.filter((e) => !e.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-16">
        <div className="container-main py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
                The Podcast
              </p>
              <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
                Real conversations.
                <br />
                <span className="text-white">Real operators.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                Long-form deep dives into how specific people built specific income streams — with
                real numbers, real setbacks, and real playbooks you can steal.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  href="https://youtube.com/@99hustlespodcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-red-600 border border-white/20 hover:border-red-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                >
                  <Youtube className="w-4 h-4" />
                  Watch on YouTube
                </a>
                <a
                  href="https://www.instagram.com/99hustlespodcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-pink-600 border border-white/20 hover:border-pink-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Follow on Instagram
                </a>
              </div>
            </div>

            {/* Episode count */}
            <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-center">
                <p className="font-display font-bold text-white text-3xl">{episodes.length}+</p>
                <p className="text-white/40 text-xs mt-1">Episodes</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="font-display font-bold text-white text-3xl">60+</p>
                <p className="text-white/40 text-xs mt-1">Avg. minutes</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="font-display font-bold text-white text-3xl">0</p>
                <p className="text-white/40 text-xs mt-1">Fluff minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="bg-brand-cream section-padding">
        <div className="container-main">
          <div className="flex items-center gap-3 mb-8">
            <Mic className="w-5 h-5 text-black" />
            <h2 className="font-display font-bold text-brand-black text-2xl">Featured episodes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
            {featured.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </section>

      {/* All Episodes */}
      {rest.length > 0 && (
        <section className="bg-white section-padding-sm border-t border-brand-border">
          <div className="container-main">
            <h2 className="font-display font-bold text-brand-black text-2xl mb-8">All episodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
        </section>
      )}

      <EmailCaptureSection
        variant="dark"
        headline="Never miss a breakdown."
        subheadline="Every new episode, hustle breakdown, and resource — delivered free to your inbox."
        ctaText="Subscribe"
      />
    </>
  )
}
