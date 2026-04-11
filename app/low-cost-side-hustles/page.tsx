import Link from 'next/link'
import { getAllHustles } from '@/lib/data/hustles'
import HustleCard from '@/components/hustles/HustleCard'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Low-Cost Side Hustles to Start with Little Money | 99 Hustles',
  description: 'Discover the best low-cost side hustles you can start for under $100. We break down startup costs, time to first income, and earning potential for minimal investment hustles.',
  keywords: ['low cost side hustles', 'cheap side hustles', 'no money side hustles', 'free side hustles', 'affordable side hustles'].join(', '),
  openGraph: {
    title: 'Best Low-Cost Side Hustles to Start with Little Money',
    description: 'Discover the best low-cost side hustles you can start for under $100. Breakdown of startup costs and earning potential.',
    url: 'https://99hustles.com/low-cost-side-hustles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Low-Cost Side Hustles to Start with Little Money',
    description: 'Discover the best low-cost side hustles you can start for under $100.',
  },
  alternates: {
    canonical: 'https://99hustles.com/low-cost-side-hustles',
    },
}

const faqs = [
  {
    q: 'Can I really start a side hustle with no money?',
    a: 'Absolutely. Hustles like freelancing, content creation, tutoring, and reselling don\'t require any upfront investment if you use existing skills or items you already own. The barrier to entry is almost zeroâyour time and effort are your only assets.',
  },
  {
    q: 'What side hustles cost less than $50 to start?',
    a: 'Many hustles cost nothing to start: freelancing (writing, design, virtual assistance), blogging (free platforms), tutoring online, and dropshipping. If you need a domain and basic hosting, expect $10â30/year. Reselling used items? Zero costâjust list what you already own.',
  },
  {
    q: 'What\'s the cheapest side hustle with the best earning potential?',
    a: 'Freelancing (writing, design, consulting) has zero startup cost but high earning potentialâ$30â$150+ per hour depending on skills. Content creation and blogging cost nothing to start but take months to generate income. Choose based on your timeline and skill level.',
  },
  {
    q: 'Do low-cost hustles pay less than high-cost ones?',
    a: 'Not necessarily. Some of the highest-paying hustles have zero startup cost (freelancing, consulting). Lower startup cost doesn\'t equal lower income potentialâit depends on your skills, effort, and market demand. A $0 investment freelancing hustle can earn more than a $500+ dropshipping setup.',
  },
  {
    q: 'How long until I make money with a low-cost hustle?',
    a: 'It varies. Gig work and freelancing can generate income within days or weeks. Content creation and blogging take 2â6 months to gain traction. Reselling used items can happen within days. Check each hustle\'s "Time to First Dollar" for specifics.',
  },
]

const internalLinks = [
  { href: '/side-hustles-for-beginners', label: 'Hustles for Beginners' },
  { href: '/online-side-hustles', label: 'Online Hustles' },
  { href: '/best-ai-side-hustles', label: 'AI Side Hustles' },
  { href: '/hustles', label: 'All Hustles' },
]

export default function LowCostSideHustlesPage() {
  const allHustles = getAllHustles()

  // Filter for low-cost hustles (startupCostRange[0] <= 100)
  const lowCostHustles = allHustles.filter((hustle) => hustle.startupCostRange[0] <= 100)

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6 text-white">
              Low-Cost Side Hustles You Can Start for Under $100
            </h1>
            <p className="prose-light text-lg text-gray-300 leading-relaxed mb-8">
              Tight budget? No problem. We've curated side hustles that require minimal upfront investmentâmany with zero startup costs. Whether you have $0, $20, or $100 to invest, there's a hustle here that fits your budget and can generate real income.
            </p>
            <p className="prose-light text-base text-gray-400">
              Low cost doesn't mean low earnings. Many of these hustles have high earning potential once you get started.
            </p>
          </div>
        </div>
      </section>

      {/* HUSTLES GRID */}
      <section className="section-y bg-white">
        <div className="container-main">
          <h2 className="heading-lg font-display mb-4 text-brand-black">
            Low-Cost Hustles
          </h2>
          <p className="prose-light text-gray-600 mb-12">
            {lowCostHustles.length} opportunities you can start for under $100
          </p>

          {lowCostHustles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lowCostHustles.map((hustle) => (
                <HustleCard key={hustle.id} hustle={hustle} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-brand-subtle p-8 text-center">
              <p className="text-gray-600">No low-cost hustles found. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* COST BREAKDOWN SECTION */}
      <section className="section-y bg-brand-subtle border-t border-brand-subtle">
        <div className="container-main">
          <h2 className="heading-lg font-display mb-8 text-brand-black">
            Start Small, Earn Big
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 border border-brand-border">
              <div className="text-2xl font-display font-semibold text-brand-black mb-2">$0</div>
              <h3 className="font-semibold text-brand-black mb-3">No Cost Hustles</h3>
              <p className="text-gray-600 text-sm">
                Freelancing, tutoring, content creation, and skill-based work require zero upfront investment.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 border border-brand-border">
              <div className="text-2xl font-display font-semibold text-brand-black mb-2">$1â$50</div>
              <h3 className="font-semibold text-brand-black mb-3">Minimal Cost Hustles</h3>
              <p className="text-gray-600 text-sm">
                Small tools, domain registration, or basic supplies. Perfect for testing before scaling.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 border border-brand-border">
              <div className="text-2xl font-display font-semibold text-brand-black mb-2">$51â$100</div>
              <h3 className="font-semibold text-brand-black mb-3">Under $100 Hustles</h3>
              <p className="text-gray-600 text-sm">
                Reselling inventory, equipment, or software. Low risk with medium earning potential.
              </p>
            </div>
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
