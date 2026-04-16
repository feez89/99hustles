import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | 99 Hustles',
  description: 'The terms and conditions governing your use of 99 Hustles.',
}

export default function TermsOfUsePage() {
  const lastUpdated = 'April 2026'

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using 99 Hustles (&ldquo;the Site&rdquo;), you agree to be bound by these
            Terms of Use. If you do not agree, please do not use the Site. These terms apply
            to all visitors, newsletter subscribers, and anyone who interacts with our content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">2. Content & Educational Purpose</h2>
          <p>
            All content on 99 Hustles — including hustle breakdowns, podcast episodes,
            guides, and any other materials — is provided for <strong>educational and
            informational purposes only</strong>. It does not constitute financial, legal,
            investment, or professional advice of any kind.
          </p>
          <p className="mt-3">
            Income figures, startup costs, and earnings examples shared on this Site are
            based on real operator interviews and publicly available data. Individual results
            will vary significantly based on skills, experience, effort, market conditions,
            and many other factors. <strong>Past results are not a guarantee of future
            earnings.</strong>
          </p>
          <p className="mt-3">
            We are not a get-rich-quick scheme. Building a real income stream takes work,
            time, and informed decision-making. Nothing on this Site should be interpreted
            as a promise or guarantee of income.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">3. No Professional Advice</h2>
          <p>
            99 Hustles is a media and content company, not a financial advisor, attorney,
            accountant, or licensed business consultant. Before making any business,
            financial, or legal decisions based on content you find here, please consult a
            qualified professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">4. Intellectual Property</h2>
          <p>
            All original content on 99 Hustles — including written articles, podcast
            transcripts, graphics, and branding — is owned by 99 Hustles or its content
            contributors and is protected by applicable copyright laws.
          </p>
          <p className="mt-3">
            You may share links to our content and quote brief excerpts (with attribution),
            but you may not reproduce, republish, or redistribute substantial portions of our
            content without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">5. Third-Party Links & Services</h2>
          <p>
            The Site may contain links to third-party websites, tools, products, or services.
            These links are provided for convenience only. We do not endorse, control, or
            take responsibility for the content or practices of any third-party site. Visiting
            external links is at your own risk.
          </p>
          <p className="mt-3">
            Some links on this Site may be affiliate links, meaning we may earn a commission
            if you make a purchase after clicking them. This does not affect our editorial
            independence or our commitment to honest, unbiased content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">6. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Use the Site for any unlawful purpose</li>
            <li>Scrape, harvest, or copy content in bulk without permission</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Transmit spam or unsolicited communications through our contact forms</li>
            <li>Misrepresent your identity or affiliation when contacting us</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">7. Disclaimer of Warranties</h2>
          <p>
            The Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied.
            We do not warrant that the Site will be uninterrupted, error-free, or free of
            viruses. We make no warranties about the accuracy, completeness, or usefulness
            of any content on the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, 99 Hustles and its team shall not be
            liable for any indirect, incidental, special, or consequential damages arising
            out of your use of the Site or reliance on any content provided here. Your sole
            remedy for dissatisfaction with the Site is to stop using it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">9. Changes to These Terms</h2>
          <p>
            We may update these Terms of Use at any time. Changes are effective when posted
            to this page. Continued use of the Site after updates constitutes your acceptance
            of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States. Any disputes arising
            from use of this Site will be resolved in accordance with applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">11. Contact</h2>
          <p>
            Questions about these Terms?{' '}
            <a href="mailto:hello@99hustles.com" className="text-black underline hover:no-underline">
              hello@99hustles.com
            </a>
          </p>
        </section>

      </div>
    </main>
  )
}
