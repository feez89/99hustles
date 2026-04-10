import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedHustles } from '@/lib/data/hustles'
import HustleCard from '@/components/hustles/HustleCard'

export default function FeaturedHustles() {
  const hustles = getFeaturedHustles()

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
              Featured Breakdowns
            </p>
            <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl leading-tight">
              Hustles worth studying
            </h2>
            <p className="text-gray-500 mt-2 text-base max-w-xl">
              Deep-dives into income streams that real people are actually running — with honest numbers and actionable steps.
            </p>
          </div>
          <Link
            href="/hustles"
            className="flex items-center gap-2 text-brand-black font-semibold text-sm hover:text-white transition-colors whitespace-nowrap group"
          >
            View all hustles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hustles.map((hustle) => (
            <HustleCard key={hustle.id} hustle={hustle} />
          ))}
        </div>
      </div>
    </section>
  )
}
