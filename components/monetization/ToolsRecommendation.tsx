'use client'

import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface ToolItem {
  name: string
  category: string
  description: string
  cta: string
  url: string
  badge?: string | null
}

interface ToolsRecommendationProps {
  title?: string
  tools?: ToolItem[]
  variant?: 'dark' | 'light'
}

const defaultTools: ToolItem[] = [
  {
    name: 'Beehiiv',
    category: 'Newsletter',
    description: 'The best platform for building a monetized newsletter from scratch.',
    cta: 'Start Free',
    url: 'https://beehiiv.com',
    badge: 'Recommended',
  },
  {
    name: 'Shopify',
    category: 'E-Commerce',
    description: 'The go-to platform for starting and scaling an online store.',
    cta: 'Try Free',
    url: 'https://shopify.com',
    badge: 'Most Popular',
  },
  {
    name: 'Stan Store',
    category: 'Digital Products',
    description: 'Sell digital products and courses with zero transaction fees.',
    cta: 'Get Started',
    url: 'https://stan.store',
    badge: null,
  },
  {
    name: 'Printful',
    category: 'Print on Demand',
    description: 'Print and ship custom products on demand. No upfront inventory.',
    cta: 'Start Free',
    url: 'https://printful.com',
    badge: null,
  },
  {
    name: 'Fiverr',
    category: 'Freelancing',
    description: 'The largest marketplace for selling digital services and skills.',
    cta: 'Create Profile',
    url: 'https://fiverr.com',
    badge: null,
  },
  {
    name: 'Kit (ConvertKit)',
    category: 'Email Marketing',
    description: 'Email platform built for creators and operators growing an audience.',
    cta: 'Start Free',
    url: 'https://kit.com',
    badge: null,
  },
]

export default function ToolsRecommendation({
  title = 'Recommended Tools',
  tools = defaultTools,
  variant = 'dark',
}: ToolsRecommendationProps) {
  const cardClass =
    variant === 'dark'
      ? 'card-dark bg-brand-card border border-brand-subtle hover:border-brand-gold transition-colors duration-300'
      : 'card-light bg-white border border-gray-200 hover:border-amber-400 transition-colors duration-300'

  const textColorClass = variant === 'dark' ? 'text-brand-white' : 'text-gray-900'
  const descColorClass =
    variant === 'dark' ? 'text-brand-white/70' : 'text-gray-600'
  const badgeClass =
    variant === 'dark'
      ? 'badge-on-dark bg-brand-subtle text-brand-gold text-xs font-semibold px-2.5 py-1 rounded'
      : 'bg-amber-50 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded'
  const ctaButtonClass =
    variant === 'dark'
      ? 'btn-primary bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-semibold'
      : 'btn-primary bg-amber-500 hover:bg-amber-600 text-white font-semibold'

  return (
    <section className={`section-y ${variant === 'dark' ? 'bg-brand-black' : 'bg-white'}`}>
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="eyebrow text-brand-gold uppercase tracking-widest text-sm mb-4">
            Toolkit
          </p>
          <h2 className={`heading-lg font-display font-bold mb-4 ${textColorClass}`}>
            {title}
          </h2>
          <p className={`max-w-2xl mx-auto ${descColorClass}`}>
            The tools trusted by successful hustlers. These platforms have helped
            thousands of entrepreneurs turn their ideas into profitable income streams.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tools.map((tool, index) => (
            <article key={index} className={`p-6 rounded-lg ${cardClass}`}>
              {/* Tool Header with Badge */}
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className={`font-display font-bold text-lg ${textColorClass} mb-1`}>
                    {tool.name}
                  </h3>
                  <p className="text-brand-gold text-sm font-medium">{tool.category}</p>
                </div>
                {tool.badge && (
                  <span className={badgeClass}>
                    {tool.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`mb-6 ${descColorClass} text-sm leading-relaxed`}>
                {tool.description}
              </p>

              {/* CTA Button */~
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${ctaButtonClass} transition-all duration-200 hover:gap-3`}
              >
                {tool.cta}
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className={`text-xs ${variant === 'dark' ? 'text-brand-white/50' : 'text-gray-500'}`}>
            Some links may be affiliate links. We only recommend tools we believe in.
          </p>
        </div>
      </div>
    </section>
  )
}
