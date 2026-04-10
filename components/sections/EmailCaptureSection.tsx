'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmailCaptureSectionProps {
  variant?: 'dark' | 'light' | 'gold'
  headline?: string
  subheadline?: string
  placeholder?: string
  ctaText?: string
  className?: string
}

const perks = [
  'One weekly hustle breakdown — with real numbers',
  'Tools and resources our featured operators actually use',
  'Early access to new content, guides, and community features',
]

export default function EmailCaptureSection({
  variant = 'dark',
  headline = 'Get the weekly hustle breakdown.',
  subheadline = 'Real income stories, documented playbooks, and tools from our featured operators — delivered free to your inbox.',
  placeholder = 'Your email address',
  ctaText = 'Get Free Access',
  className,
}: EmailCaptureSectionProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    // TODO: Connect to your email provider (ConvertKit, Beehiiv, Mailchimp, etc.)
    setSubmitted(true)
    setError('')
  }

  const isDark = variant === 'dark'
  const isGold = variant === 'gold'

  return (
    <section
      className={cn(
        'section-padding',
        isDark && 'bg-brand-black',
        !isDark && !isGold && 'bg-brand-cream',
        isGold && 'bg-white',
        className
      )}
    >
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div
            className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6',
              isDark && 'bg-white/10',
              !isDark && 'bg-brand-black/10'
            )}
          >
            <Zap
              className={cn('w-6 h-6', isDark && 'text-white', !isDark && 'text-brand-black')}
              strokeWidth={2.5}
            />
          </div>

          {/* Headline */}
          <h2
            className={cn(
              'font-display font-bold text-3xl md:text-4xl leading-tight mb-4',
              isDark && 'text-white',
              !isDark && 'text-brand-black'
            )}
          >
            {headline}
          </h2>

          {/* Subheadline */}
          <p
            className={cn(
              'text-base mb-8 leading-relaxed',
              isDark && 'text-white/60',
              !isDark && !isGold && 'text-gray-500',
              isGold && 'text-brand-black/70'
            )}
          >
            {subheadline}
          </p>

          {/* Perks */}
          {!submitted && (
            <ul className="text-left mb-8 space-y-3 max-w-sm mx-auto">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <CheckCircle2
                    className={cn(
                      'w-4 h-4 mt-0.5 flex-shrink-0',
                      isDark && 'text-white',
                      !isDark && 'text-neutral-700'
                    )}
                  />
                  <span
                    className={cn(
                      'text-sm',
                      isDark && 'text-white/70',
                      !isDark && !isGold && 'text-gray-600',
                      isGold && 'text-brand-black/70'
                    )}
                  >
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Form */}
          {submitted ? (
            <div className={cn(
              'rounded-2xl p-8 border',
              isDark ? 'bg-white/10 border-white/20' : 'bg-white border-brand-border'
            )}>
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <h3 className={cn('font-display font-bold text-xl mb-2', isDark ? 'text-white' : 'text-brand-black')}>
                You're in. Welcome.
              </h3>
              <p className={cn('text-sm', isDark ? 'text-white/60' : 'text-gray-500')}>
                Check your inbox for a confirmation. Your first breakdown drops on the next send day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  className={cn(
                    'w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all border',
                    isDark
                      ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-black/30 focus:bg-white/15'
                      : 'bg-white border-[#E5E5E5] text-black placeholder:text-gray-400 focus:border-black/30 focus:ring-2 focus:ring-black/10'
                  )}
                />
                {error && <p className="text-red-400 text-xs mt-1.5 text-left">{error}</p>}
              </div>
              <button
                type="submit"
                className={cn(
                  'flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-xl whitespace-nowrap transition-all duration-200 flex-shrink-0',
                  isDark
                    ? 'bg-white text-brand-black hover:bg-white-dark'
                    : 'bg-brand-black text-white hover:bg-brand-charcoal'
                )}
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {!submitted && (
            <p className={cn('text-xs mt-4', isDark ? 'text-white/30' : 'text-gray-400')}>
              Free forever. No spam. Unsubscribe anytime.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
