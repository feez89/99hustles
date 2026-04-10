import Link from 'next/link'
import { ArrowRight, Play, TrendingUp, Users, Mic } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: '99+', label: 'Hustles Documented' },
  { icon: Mic, value: '50+', label: 'Real Episodes' },
  { icon: Users, value: '10K+', label: 'Builders in the Community' },
]

export default function Hero() {
  return (
    <section className="relative bg-brand-black overflow-hidden pt-16">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 60%, rgba(201,168,76,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 20%, rgba(201,168,76,0.08) 0%, transparent 45%)',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative container-main pt-16 pb-0 md:pt-24 md:pb-0">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-semibold uppercase tracking-widest">
              New episode every week
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight text-balance">
            Real People.
            <br />
            <span className="text-gradient-gold">Real Income.</span>
            <br />
            Real Breakdowns.
          </h1>

          {/* Subheadline */}
          <p className="mt-7 text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            We document exactly how everyday people build income streams, side hustles, and
            businesses — with the numbers, the tools, and the truth about what it actually takes.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/hustles"
              className="btn-primary text-sm md:text-base px-6 py-3.5 md:px-8 md:py-4 rounded-xl shadow-sm"
            >
              Explore the Hustle Library
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/episodes"
              className="inline-flex items-center gap-2.5 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-xl px-6 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-semibold transition-all duration-200"
            >
              <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Play className="w-3.5 h-3.5 fill-current" />
              </span>
              Listen to the Podcast
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-14 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#C9A84C', '#10B981', '#7C3AED', '#EC4899', '#0EA5E9'].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-brand-black"
                  style={{ backgroundColor: color + '40', borderColor: color }}
                />
              ))}
            </div>
            <p className="text-white/40 text-sm">
              Join <span className="text-white/80 font-semibold">10,000+</span> builders getting the weekly breakdown
            </p>
          </div>
        </div>

        {/* Stats Bar — floats at the bottom of the hero */}
        <div className="mt-16 -mx-4 sm:mx-0 bg-white/5 backdrop-blur-sm border-t border-x border-white/10 rounded-t-2xl sm:rounded-t-2xl">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-6 px-4 gap-1 group"
              >
                <stat.icon className="w-4 h-4 text-white mb-1" />
                <span className="font-display font-bold text-white text-2xl md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-white/40 text-xs text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
