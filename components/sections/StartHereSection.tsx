import Link from 'next/link'
import { ArrowRight, Rocket, BarChart2, Users } from 'lucide-react'

const paths = [
  {
    icon: Rocket,
    emoji: '🚀',
    headline: 'Start a Side Hustle',
    description:
      "You want income outside your 9-to-5 and you're not sure where to start. We'll match you to the right hustle based on your time, skills, and budget.",
    cta: 'Find my hustle',
    href: '/hustles?filter=beginner',
    accent: '#C9A84C',
    tag: 'Beginner-friendly',
    picks: ['Freelance Video Editing', 'Newsletter Business', 'Print on Demand'],
  },
  {
    icon: BarChart2,
    emoji: '📈',
    headline: 'Grow a Business',
    description:
      "You're already making money but want systems, scale, and structure. We've got breakdowns from operators building $10K–$100K/month businesses.",
    cta: 'Study the playbooks',
    href: '/hustles?filter=advanced',
    accent: '#10B981',
    tag: 'For operators',
    picks: ['Social Media Agency', 'Amazon FBA', 'Dropshipping'],
  },
  {
    icon: Users,
    emoji: '🎙️',
    headline: 'Learn from Real Founders',
    description:
      'No motivational fluff. Just deep-dive podcast conversations with people building real income — including the mistakes, pivots, and actual numbers.',
    cta: 'Browse episodes',
    href: '/episodes',
    accent: '#7C3AED',
    tag: 'Podcast breakdowns',
    picks: ['Ep. 12 — The $22K/month Edit Agency', 'Ep. 9 — 47K Subscribers Newsletter', 'Ep. 15 — SMMA to $15K/month'],
  },
]

export default function StartHereSection() {
  return (
    <section id="start-here" className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
            Start Here
          </p>
          <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl leading-tight">
            What are you here to do?
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-lg mx-auto">
            Skip the overwhelm. Pick your path and we'll point you to the right resources.
          </p>
        </div>

        {/* Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.headline}
              className="relative bg-brand-cream border border-brand-border rounded-2xl p-8 flex flex-col group hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                style={{ backgroundColor: path.accent }}
              />

              {/* Emoji + Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{path.emoji}</span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: path.accent + '15', color: path.accent }}
                >
                  {path.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-brand-black text-xl mb-3">
                {path.headline}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {path.description}
              </p>

              {/* Featured Picks */}
              <div className="mb-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">
                  Featured
                </p>
                <ul className="space-y-1.5">
                  {path.picks.map((pick) => (
                    <li key={pick} className="text-xs text-gray-600 flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: path.accent }}
                      />
                      {pick}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href={path.href}
                className="inline-flex items-center gap-2 font-semibold text-sm group/link"
                style={{ color: path.accent }}
              >
                {path.cta}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
