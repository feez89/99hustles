import Link from 'next/link'
import { ArrowRight, Youtube, Instagram } from 'lucide-react'
import { getLatestEpisodes } from '@/lib/data/episodes'
import EpisodeCard from '@/components/episodes/EpisodeCard'

export default function LatestEpisodes() {
  const episodes = getLatestEpisodes(3)

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
              Latest Episodes
            </p>
            <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl leading-tight">
              Listen to the podcast
            </h2>
            <p className="text-gray-500 mt-2 text-base max-w-xl">
              Long-form conversations with real operators — no theory, just actual playbooks from people doing the work.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/99hustlespodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-brand-border rounded-lg flex items-center justify-center text-gray-500 hover:text-brand-black hover:border-brand-black transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@99hustlespodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-brand-border rounded-lg flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-300 transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <Link
              href="/episodes"
              className="flex items-center gap-2 text-brand-black font-semibold text-sm hover:text-white transition-colors group"
            >
              All episodes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Episode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>

        {/* Platform CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 py-6 border-t border-brand-border">
          <span className="text-gray-500 text-sm">Available on:</span>
          {['YouTube', 'Spotify', 'Apple Podcasts', 'Amazon Music'].map((platform) => (
            <span
              key={platform}
              className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
