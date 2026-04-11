import Link from 'next/link'
import { getAllHustles } from '@/lib/data/hustles'
import HustleCard from '@/components/hustles/HustleCard'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Online Side Hustles That Actually Pay | 99 Hustles',
  description: 'Discover the best online side hustles for 2025. We break down startup costs, time to first income, and real earning potential for remote work opportunities.',
  keywords: ['online side hustles', 'remote work', 'work from home', 'online jobs', 'make money online'].join(', '),
  openGraph: {
    title: 'Best Online Side Hustles That Actually Pay',
    description: 'Discover the best online side hustles for 2025. We break down startup costs, time to first income, and real earning potential.',
    url: 'https://99hustles.com/online-side-hustles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Online Side Hustles That Actually Pay',
    description: 'Discover the best online side hustles for 2025.',
  },
  alternates: {
    canonical: 'https://99hustles.com/online-side-hustles',
  },
}

const faqs = [
  {
    q: 'Can I really make money with online side hustles?',
    a: 'Yes, absolutely. Online hustles range from modest $200â500/month passive income (ads, affiliate marketing) to substantial $2,000+/month active income (freelancing, consulting). The key is choosing something aligned with your skills and consistently executing. Most successful people start small and scale over time.',
  },
  {
    q: 'What online side hustle pays the most?',
    a: 'High-paying online hustles include freelance writing, web development, consulting, and digital products. Freelancers with expertise can earn $50â200+ per hour. However, these typically require existing skills. Entry-level online hustles (content writing, virtual assistance) pay less but are easier to start.',
  },
  {
    q: 'What online side hustle requires the least startup cost?',
    a: 'Digital products, freelancing, blogging, and content creation have near-zero startup costs if you already have a computer and internet. You only need a domain and hosting ($10â15/month) to get started. Affiliate marketing and dropshipping require minimal investment as well.',
  },
  {
    q: 'How much time do I need to dedicate to an online side hustle?',
    a: 'Passive income streams (affiliate marketing, ads) require 5â10 hours/week upfront but generate money while you sleep. Active hustles (freelancing, consulting) are typically 10â20 hours/week. Some online hustles allow you to work on your own schedule, others have client expectations. Choose based on your available time.',
  },
  {
    q: 'Do I need to be tech-savvy to do online side hustles?',
    a: 'Not necessarily. Many online hustles (content writing, virtual assistance, tutoring) require minimal technical skills. If you\'re interested in technical hustles (web design, programming), there are courses and resources to learn. Start simple and expand your skillset over time.',
  },
]

const internalLinks = [
  { href: '/side-hustles-for-beginners', label: 'Hustles for Beginners' },
  { href: '/low-cost-side-hustles', label: 'Low-Cost Hustles' },
  { href: '/best-ai-side-hustles', label: 'AI Side Hustles' },
  { href: '/hustles', label: 'All Hustles' },
]

export default function OnlineSideHustlesPage() {
  const allHustles = getAllHustles()

  // Filter for online hustles by tags or specific categories
  const onlineHustles = allHustles.filter((hustle) => {
    const isOnline = hustle.tags.includes('online') || hustle.tags.includes('remote')
    const isDigitalCategory =
      hustle.category === 'Content & Media' ||
      hustle.category === 'Digital Products' ||
      hustle.category === 'Freelance Services' ||
      hustle.category === 'Software & Tech'

    return isOnline || isDigitalCategory
  })

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6 text-white">
              The Best Online Side Hustles (That Actually Pay)
            </h1>
            <p className="prose-light text-lg text-gray-300 leading-relaxed mb-8">
              Work from anywhere, on your own schedule. We've researched and broken down the most legitimate online side hustles that generate real income. From freelancing to digital products to content creation, find the online hustle that fits your skills and lifestyle.
            </p>
            <p className="prose-light text-base text-gray-400">
              Each hustle includes real numbers: startup costs, time to first dollar, and earning potential. No hype. Just honest data.
            </p>
          </div>
        </div>
      </section>

      {/* HUSTLES GRID */}
      <section className="section-y bg-white">
        <div className="container-main">
          <h2 className="heading-lg font-display mb-4 text-brand-black">
            Online Side Hustles
          </h2>
          <p className="prose-light text-gray-600 mb-12">
            {onlineHustles.length} remote and online opportunities to make money
          </p>

          {onlineHustles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {onlineHustles.map((hustle) => (
                <HustleCard key={hustle.id} hustle={hustle} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-brand-subtle p-8 text-center">
              <p className="text-gray-600">No online hustles found. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="section-y bg-brand-subtle border-t border-brand-subtle">
        <div className="container-main max-w-2xl">
          <h2 className="heading-lg font-display mb-6 text-brand-black">
            Why Choose Online Hustles?
          </h2>
          <div className="space-y-4 prose-light text-gray-700">
            <p>
              Online hustles offer flexibility, scalability, and access to global markets. Whether you want extra income, financial independence, or to test a business idea, working online removes geographical barriers and lets you start small.
            </p>
            <p>
              The best part: many online hustles have low startup costs and can be started alongside your day job. As you grow, you can invest more time and resources to scale.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-y bg-white border-t border-brand-subtle">
        <div className="container-main">
          <h2 className="heading-lg font-display mb-12 text-brand-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-2xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-border pb-6">
                <h3 className="font-display text-lg font-semibold text-brand-black mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="section-y bg-brand-subtle">
        <div className="container-main">
          <h2 className="heading-lg font-display mb-8 text-brand-black">
            Explore More Hustle Categories
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-lg border border-brand-border bg-white p-6 hover:shadow-md transition-all hover:border-brand-black"
              >
                <p className="font-display font-semibold text-brand-black group-hover:text-brand-black transition-colors flex items-center gap-2">
                  {link.label}
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">â</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <EmailCaptureSection
        variant="dark"
        headline="Get weekly hustle breakdowns."
        subheadline="One real income stream, documented with honest numbers, delivered every week."
        ctaText="Join Free"
      />
    </>
  )
}
