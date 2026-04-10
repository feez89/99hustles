import Link from 'next/link'
import { ArrowRight, Zap, Target, Mic, BookOpen, Users } from 'lucide-react'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'

export const metadata = {
  title: 'About — Who We Are and Why We Built This',
  description:
    '99 Hustles documents how real people build income streams and businesses. Learn why we built this and what we stand for.',
}

const values = [
  {
    icon: Target,
    title: 'No fluff. Ever.',
    description:
      "We don't do motivational quotes, generic advice, or success theater. Every piece of content on this site either has real numbers attached or real people behind it.",
  },
  {
    icon: BookOpen,
    title: "Document, don't prescribe.",
    description:
      "We're not here to tell you what to do. We're here to show you what others have actually done — and give you the tools to decide if it fits your situation.",
  },
  {
    icon: Users,
    title: 'Ordinary people, extraordinary results.',
    description:
      "We don't feature celebrities, VC-backed startups, or people with unfair advantages. Our guests are regular people with regular starting points who built something real.",
  },
  {
    icon: Mic,
    title: 'Long-form or nothing.',
    description:
      "Building a real income stream takes nuance. Our episodes average 60+ minutes because you can't teach the real thing in 5 minutes — and we're not going to pretend you can.",
  },
]

const stats = [
  { value: '50+', label: 'Episodes published' },
  { value: '10K+', label: 'Newsletter subscribers' },
  { value: '8+', label: 'Hustles documented' },
  { value: '$0', label: 'Content behind a paywall' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-16">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white text-sm font-semibold">99 Hustles</span>
            </div>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              We document the work.
              <br />
              <span className="text-white">You do the work.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              99 Hustles exists for one reason: to show people exactly how other people build income
              outside of a traditional job — with the real numbers, real tools, and real conversations
              that most media brands are too polished to share.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow-dark mb-4">Our Story</p>
              <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl leading-tight mb-6">
                Built out of frustration with how hustle gets covered.
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Everywhere you look, entrepreneurship content falls into two buckets: either
                  aspirational garbage designed to sell you a course, or heavily produced content
                  from people who built their business before the internet changed everything.
                </p>
                <p>
                  We wanted a third option. A media brand that actually went deep. That talked to
                  the 26-year-old running a $15K/month agency from her apartment — not the VC-backed
                  founder on their third exit.
                </p>
                <p>
                  99 Hustles is that third option. We cover real income streams — side hustles,
                  agencies, content businesses, e-commerce operations — with enough detail that you
                  can actually learn from them, not just be impressed by them.
                </p>
                <p className="font-semibold text-brand-black">
                  Real people. Real income. Real breakdowns.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-cream border border-brand-border rounded-2xl p-8 text-center"
                >
                  <p className="font-display font-bold text-black text-4xl md:text-5xl mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="bg-brand-cream section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
              What We Cover
            </p>
            <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl leading-tight">
              The full hustle spectrum
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: '🎙️',
                title: 'Podcast',
                desc: 'Long-form conversations with the people building real income — averaging 60+ minutes of unfiltered operational detail.',
              },
              {
                emoji: '📖',
                title: 'Hustle Library',
                desc: 'Documented breakdowns of income streams: startup costs, tools, revenue potential, and step-by-step playbooks.',
              },
              {
                emoji: '📩',
                title: 'Weekly Newsletter',
                desc: 'One new income story, delivered free every week. The most efficient way to keep up with the 99 Hustles universe.',
              },
              {
                emoji: '🎥',
                title: 'YouTube',
                desc: 'Full episodes and short-form clips from our guest conversations, published on @99hustlespodcast.',
              },
              {
                emoji: '📊',
                title: 'Guides & Resources',
                desc: 'Practical tools to help you start or grow: starter guides, tool recommendations, and resource lists. (Coming soon.)',
              },
              {
                emoji: '🤝',
                title: 'Community',
                desc: 'A network of builders, founders, and operators — currently being built. Join the newsletter to get early access.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-brand-border rounded-2xl p-6"
              >
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h3 className="font-display font-bold text-brand-black text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-black section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight">
              The 99 Hustles standard
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-brand-cream section-padding-sm border-t border-brand-border">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow-dark mb-3">Work With Us</p>
            <h2 className="font-display font-bold text-brand-black text-2xl md:text-3xl mb-4">
              Want to reach our audience?
            </h2>
            <p className="text-gray-500 text-base mb-8">
              We work with brands, tools, and services that genuinely help entrepreneurs and side
              hustlers. If that's you, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-dark">
                Partner with us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact#media-kit" className="btn-secondary">
                Download media kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmailCaptureSection
        variant="dark"
        headline="Join the 99 Hustles community."
        subheadline="Get the weekly breakdown and be the first to know about new episodes, guides, and community launches."
        ctaText="Count me in"
      />
    </>
  )
}
