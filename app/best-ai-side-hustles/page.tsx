import Link from 'next/link'
import { getAllHustles } from '@/lib/data/hustles'
import HustleCard from '@/components/hustles/HustleCard'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Side Hustles to Start in 2025 | 99 Hustles',
  description: 'Discover the best AI side hustles for 2025. Learn how to leverage AI tools to create content, generate passive income, and build scalable income streams with minimal effort.',
  keywords: ['AI side hustles', 'AI money making', 'ChatGPT side hustle', 'AI tools for income', 'passive income with AI'].join(', '),
  openGraph: {
    title: 'Best AI Side Hustles to Start in 2025',
    description: 'Discover the best AI side hustles for 2025. Learn how to leverage AI tools to create content and generate income.',
    url: 'https://99hustles.com/best-ai-side-hustles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Side Hustles to Start in 2025',
    description: 'Discover the best AI side hustles for 2025.',
  },
  alternates: {
    canonical: 'https://99hustles.com/best-ai-side-hustles',
  },
}

const faqs = [
  {
    q: 'What are the best AI side hustles for 2025?',
    a: 'The best AI side hustles leverage AI for content creation (writing, video scripts, social media), digital products (templates, AI-generated art), copywriting, and automation. AI tools like ChatGPT, Midjourney, and Claude dramatically speed up work, letting you take on more clients or create more products faster.',
  },
  {
    q: 'Can I make real money with AI side hustles?',
    a: 'Yes. AI side hustles can generate $500â$5,000+ per month depending on your strategy. Some people use AI to speed up freelancing, others create and sell AI-generated digital products. The key is combining AI capability with a real market need. AI is a toolâexecution and marketing matter most.',
  },
  {
    q: 'Do I need to be tech-savvy to use AI for side hustles?',
    a: 'No. Modern AI tools are user-friendly. ChatGPT, Midjourney, and other popular tools require zero coding knowledge. Just describe what you want, and the AI does the work. Spend time learning the tools, not building them.',
  },
  {
    q: 'What AI tools should I learn for side hustles?',
    a: 'Start with ChatGPT for writing and ideation. Add Midjourney or DALL-E for image generation. Learn Runway or Synthesia for video creation. Zapier for automation. Most successful AI side hustlers use 3â5 core tools. Pick one, master it, then expand.',
  },
  {
    q: 'Will AI side hustles become obsolete as more people use them?',
    a: 'Possibly for commoditized work (basic article writing, generic designs). But the market grows faster than competition. Focus on specialized niches, quality, and combining AI with human creativity. The first-mover advantage goes to early adopters who develop systems now.',
  },
]

const aiTools = [
  {
    name: 'ChatGPT',
    description: 'Generate written content, brainstorm ideas, and automate copywriting.',
    uses: ['Writing', 'Copywriting', 'Content ideation', 'Virtual assistance'],
  },
  {
    name: 'Midjourney',
    description: 'Create stunning AI-generated artwork and designs for digital products or clients.',
    uses: ['Digital art', 'Graphic design', 'Product design', 'Cover design'],
  },
  {
    name: 'Claude / GPT-4',
    description: 'More advanced reasoning and technical writing. Better for complex tasks and analysis.',
    uses: ['Technical writing', 'Data analysis', 'Code generation', 'Research'],
  },
  {
    name: 'Runway',
    description: 'Generate and edit videos using AI. Perfect for content creators and marketers.',
    uses: ['Video editing', 'Content creation', 'Social media videos', 'YouTube shorts'],
  },
  {
    name: 'Synthesia',
    description: 'Create AI avatars and voiceovers for videos without filming or hiring voice actors.',
    uses: ['Video creation', 'Course content', 'Marketing videos', 'YouTube content'],
  },
  {
    name: 'Jasper',
    description: 'Long-form AI copywriting tool designed for content creators and marketers.',
    uses: ['Blog writing', 'Email marketing', 'Product descriptions', 'Social media'],
  },
]

const internalLinks = [
  { href: '/side-hustles-for-beginners', label: 'Hustles for Beginners' },
  { href: '/online-side-hustles', label: 'Online Hustles' },
  { href: '/low-cost-side-hustles', label: 'Low-Cost Hustles' },
  { href: '/hustles', label: 'All Hustles' },
]

export default function BestAISideHustlesPage() {
  const allHustles = getAllHustles()

  // Filter for AI-related hustles by tags
  const aiHustles = allHustles.filter((hustle) =>
    hustle.tags.some((tag) => ['ai', 'content', 'digital', 'automation'].includes(tag.toLowerCase()))
  )

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6 text-white">
              The Best AI Side Hustles in 2025
            </h1>
            <p className="prose-light text-lg text-gray-300 leading-relaxed mb-8">
              AI is transforming what's possible for side hustlers. Generate content faster, create digital products more efficiently, and scale your income without hiring a team. Discover the AI side hustles that are actually profitable right now.
            </p>
            <p className="prose-light text-base text-gray-400">
              We've researched and broken down AI hustles with honest numbers: startup costs, time to first income, and realistic earning potential. No hype. Real opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* HUSTLES GRID */}
      <section className="section-y bg-white">
        <div className="container-main">
          <h2 className="heading-lg font-display mb-4 text-brand-black">
            AI-Powered Side Hustles
          </h2>
          <p className="prose-light text-gray-600 mb-12">
            {aiHustles.length} AI-friendly opportunities to scale your income
          </p>

          {aiHustles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aiHustles.map((hustle) => (
                <HustleCard key={hustle.id} hustle={hustle} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-brand-subtle p-8 text-center">
              <p className="text-gray-600">No AI side hustles found. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* AI TOOLS SECTION */}
      <section className="section-y bg-brand-subtle border-t border-brand-subtle">
        <div className="container-main">
          <h2 className="heading-lg font-display mb-12 text-brand-black">
            Essential AI Tools for Side Hustlers
          </h2>
          <p className="prose-light text-gray-600 mb-8">
            These tools power the most successful AI side hustles. Most have free plans or trials to get started.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aiTools.map((tool, index) => (
              <div key={index} className="rounded-lg bg-white p-6 border border-brand-border">
                <h3 className="font-display font-semibold text-brand-black mb-2">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tool.uses.map((use, useIndex) => (
                    <span
                      key={useIndex}
                      className="text-xs font-semibold px-2 py-1 rounded bg-brand-subtle text-gray-700"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED SECTION */}
      <section className="section-y bg-white border-t border-brand-subtle">
        <div className="container-main max-w-2xl">
          <h2 className="heading-lg font-display mb-8 text-brand-black">
            How to Start an AI Side Hustle
          </h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-black text-white font-display font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-brand-black mb-2">Pick a Niche or Service</h3>
                <p className="text-gray-600">
                  Choose what you'll offer: AI-generated content, digital products, freelance services, or automated solutions. Pick something aligned with your interests.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-black text-white font-display font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-brand-black mb-2">Learn Your AI Tools</h3>
                <p className="text-gray-600">
                  Spend 1â2 weeks learning the core tools you'll use (ChatGPT, Midjourney, etc.). Don't aim for masteryâlearn enough to produce quality results quickly.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-black text-white font-display font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-brand-black mb-2">Create Your First Offering</h3>
                <p className="text-gray-600">
                  Build or design your first product/service. Use AI to speed up the process. Quality matters more than speedâmake something you'd pay for.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-black text-white font-display font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-brand-black mb-2">Launch & Market</h3>
                <p className="text-gray-600">
                  Get your first customers. Use social media, communities, or freelance platforms. The hardest part is getting attentionâAI can't do that for you.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-black text-white font-display font-semibold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-semibold text-brand-black mb-2">Optimize & Scale</h3>
                <p className="text-gray-600">
                  Use AI to systematize and speed up your process. Once profitable, invest in ads, hiring, or expanding your product line.
                </p>
              </div>
            </li>
          </ol>
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
