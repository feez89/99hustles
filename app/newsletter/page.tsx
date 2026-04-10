'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight, Zap, Star } from 'lucide-react'

const perks = [
  {
    title: 'One real income breakdown',
    desc: 'Every week, we document exactly how one person is making money — with startup costs, revenue numbers, and the actual steps.',
  },
  {
    title: 'Tools our operators actually use',
    desc: 'Software, platforms, and resources recommended by the people we feature — not affiliate-padded listicles.',
  },
  {
    title: 'Episode highlights + key takeaways',
    desc: 'Can\'t listen to a 60-minute episode? We surface the 5 most important insights from every conversation.',
  },
  {
    title: 'Early access to everything',
    desc: 'New hustle breakdowns, guides, community features, and partner deals — subscribers get first access.',
  },
]

const testimonials = [
  {
    quote:
      "I've been subscribed for 6 months and this is the only newsletter I actually look forward to. The breakdowns are detailed, honest, and actually useful.",
    author: 'Marcus T.',
    role: 'Freelance designer',
  },
  {
    quote:
      'I started my dropshipping store after reading the breakdown in issue #14. Made my first sale in week 2. This stuff is real.',
    author: 'Priya K.',
    role: 'E-commerce operator',
  },
  {
    quote:
      "As someone who's tried every money newsletter, 99 Hustles is the only one that doesn't feel like it's trying to sell me something.",
    author: 'Jordan R.',
    role: 'Corporate marketer',
  },
]

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    // TODO: Connect to email provider (Beehiiv, ConvertKit, etc.)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-16">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span className="text-white text-xs font-semibold uppercase tracking-widest">
                Free weekly newsletter
              </span>
            </div>

            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              The hustle breakdown,{' '}
              <span className="text-gradient-gold">every week.</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10">
              One real income stream, documented in detail — with honest numbers, real tools, and
              the step-by-step of how someone built it. Free. No spam. Every week.
            </p>

            {submitted ? (
              <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h2 className="font-display font-bold text-white text-2xl mb-2">
                  You're in. Welcome to the list.
                </h2>
                <p className="text-white/60 text-sm">
                  Check your inbox for a confirmation email. Your first breakdown drops on the next
                  send day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-base focus:outline-none focus:border-black/30 transition-all"
                  />
                  {error && <p className="text-red-400 text-xs mt-1.5 text-left">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-white text-black font-bold text-base px-8 py-4 rounded-xl hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap shadow-sm"
                >
                  Get Free Access
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-white/30 text-xs mt-4">
              Join 10,000+ builders. Free forever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
                What's Inside
              </p>
              <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl">
                What you get every week
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex gap-4 p-6 bg-brand-cream border border-brand-border rounded-2xl"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-black text-base mb-1">
                      {perk.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Issue Preview */}
      <section className="bg-brand-cream section-padding border-t border-brand-border">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
                Sample Issue
              </p>
              <h2 className="font-display font-bold text-brand-black text-2xl">
                Here's what a typical issue looks like
              </h2>
            </div>

            {/* Mock newsletter */}
            <div className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-card">
              <div className="bg-brand-black px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-brand-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-black font-display font-bold text-sm">99 Hustles <span className="text-black">Weekly</span></span>
                </div>
                <span className="text-white/40 text-xs">Issue #23</span>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <p className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-2">
                    This week's breakdown
                  </p>
                  <h3 className="font-display font-bold text-brand-black text-xl leading-tight">
                    How Marcus Built a $22K/Month Video Agency at 26
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    Starting with zero experience and a free trial of DaVinci Resolve, Marcus Cole
                    built a video editing agency that now serves 14 ongoing clients. Here's the
                    exact playbook — from his first client pitch to his current retainer pricing...
                  </p>
                </div>

                <div className="flex gap-3">
                  {[
                    { label: 'Startup Cost', val: '$0' },
                    { label: 'Monthly Revenue', val: '$22K' },
                    { label: 'Time to Start', val: '3 weeks' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 bg-brand-cream rounded-xl p-3 text-center"
                    >
                      <p className="font-display font-bold text-brand-black text-base">{stat.val}</p>
                      <p className="text-gray-400 text-[10px] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Also in this issue
                  </p>
                  <ul className="space-y-2">
                    {[
                      '🛠️ Tool of the week: Frame.io for client reviews',
                      '😙️ Episode 12 highlights — 5 key takeaways',
                      '📊 Resource: Video editing pricing guide PDF',
                    ].map((item) => (
                      <li key={item} className="text-sm text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-black section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl">
              From the inbox
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-white fill-white" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-cream section-padding border-t border-brand-border">
        <div className="container-main">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="font-display font-bold text-brand-black text-3xl mb-4">
              Ready? Let's go.
            </h2>
            <p className="text-gray-500 text-base mb-8">
              Free. Weekly. No BS. Cancel whenever.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-4 bg-white border border-brand-border rounded-xl text-brand-black placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30"
              />
              <button
                type="submit"
                className="btn-dark px-8 py-4 text-sm whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
