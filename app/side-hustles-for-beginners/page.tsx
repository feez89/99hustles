import Link from 'next/link'
import { getAllHustles } from '@/lib/data/hustles'
import HustleCard from '@/components/hustles/HustleCard'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Side Hustles for Beginners in 2025 | 99 Hustles',
  description: 'Discover the best side hustles for beginners — no experience needed. We break down startup costs, time to first dollar, and realistic income for every hustle.',
  keywords: ['side hustles for beginners', 'easy side hustles', 'beginner friendly', 'no experience needed', 'make money as a beginner'].join(', '),
  openGraph: {
    title: 'Best Side Hustles for Beginners in 2025',
    description: 'Discover the best side hustles for beginners — no experience needed. We break down startup costs, time to first dollar, and realistic income for every hustle.',
    url: 'https://99hustles.com/side-hustles-for-beginners',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Side Hustles for Beginners in 2025',
    description: 'Discover the best side hustles for beginners — no experience needed.',
  },
  alternates: {
    canonical: 'https://99hustles.com/side-hustles-for-beginners',
  },
}

const faqs = [
  {
    q: 'What are the easiest side hustles to start?',
    a: 'The easiest side hustles are typically those that require minimal upfront investment and don\'t require specialized skills. Options like freelancing, content creation, and online tutoring are great for beginners. Start with something that aligns with your existing skills—you already have a head start.',
  },
  {
    q: 'How much money can I realistically make as a beginner?',
    a: 'This varies widely by hustle, but most beginners can expect $500–$2,000 per month once established. Some hustles (like freelancing) have high earning potential if you\'re willing to invest time in building a client base. Others (like surveys) offer modest but reliable income.',
  },
  {
    q: 'How long before I make my first dollar?',
    a: 'Time to first income depends on the hustle. Some pay within days (gig work, selling used items), while others take weeks or months to build traction (freelancing, content creation). We list "Time to First Dollar" for each hustle so you know what to expect.',
  },
  {
    q: 'Do I need to pay taxes on side hustle income?',
    a: 'Yes, all side hustle income is taxable. Keep records of your earnings and expenses, and set aside 20–30% for taxes. Consider consulting a tax professional to understand your specific obligations and potential deductions.',
  },
  {
    q: 'Can I do multiple side hustles at once?',
    a: 'Absolutely. Many people combine 2–3 side hustles to diversify income and minimize risk. Start with one to understand the workload, then add others as you build systems and routines.',
  },
]

const internalLinks = [
  { href: '/online-side-hustles', label: 'Online Side Hustles' },
  { href: '/low-cost-side-hustles', label: 'Low-Cost Side Hustles' },
  { href: '/best-ai-side-hustles', label: 'AI Side Hustles' },
  { href: '/hustles', label: 'All Hustles' },
]

export default function SideHustlesForBeginnersPage() {
  const allHustles = getAllHustles()

  // Filter for beginner-friendly hustles
  const beginnerHustles = allHustles.filter(
    (hustle) => hustle.skillLevel === 'Beginner' || hustle.difficulty === 'Easy'
  )

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6 text-white">
              Best Side Hustles for Beginners
            </h1>
            <p className="prose-light text-lg text-gray-300 leading-relaxed mb-8">
              No experience? No problem. We've curated the best side hustles perfect for beginners—ones with low startup costs, quick time to first income, and realistic earning potential. Each hustle is broken down with honest numbers so you know exactly what to expect.
            </p>
            <p className="prose-light text-base text-gray-400">
              Whether you want to earn extra cash in your spare time or test a business idea, these hustles are designed for people just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* HUSTLES GRID */}
      <section className="section-y bg-white">
        <div className="container-main">
          <h2 className="heading-lg font-display mb-4 text-brand-black">
            Beginner-Friendly Hustles
          </h2>
          <p className="prose-light text-gray-600 mb-12">
            {beginnerHustles.length} hustles perfect for starting with minimal experience
          </p>

          {beginnerHustles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {beginnerHustles.map((hustle) => (
                <HustleCard key={hustle.id} hustle={hustle} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-brand-subtle p-8 text-center">
              <p className="text-gray-600">No beginner hustles found. Check back soon.</p>
            </div>
          )}
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
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
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
