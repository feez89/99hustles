import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 99 Hustles',
  description: 'How 99 Hustles collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'April 2026'

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">1. Who We Are</h2>
          <p>
            99 Hustles (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website at 99hustles.com. We document real
            income streams and publish long-form podcast conversations with entrepreneurs and
            side hustlers. This Privacy Policy explains how we handle information when you
            visit our site or sign up for our newsletter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">2. Information We Collect</h2>
          <p>We collect information in two ways:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Information you provide directly</strong> — when you subscribe to our
              newsletter, submit a contact form, or reach out to us, we collect your email
              address and any other details you choose to share (name, company, message).
            </li>
            <li>
              <strong>Information collected automatically</strong> — like most websites, we
              collect standard log data when you visit (IP address, browser type, pages
              visited, referring URL). We may use analytics tools to understand how visitors
              use the site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Send you our weekly newsletter (if you subscribed)</li>
            <li>Respond to your messages and partnership inquiries</li>
            <li>Understand how visitors use 99 Hustles and improve our content</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information to third parties. Ever.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">4. Email Communications</h2>
          <p>
            If you subscribe to the 99 Hustles newsletter, you will receive weekly hustle
            breakdowns and occasional updates about new content and resources. Every email
            includes an unsubscribe link. You can opt out at any time — no questions asked.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">5. Cookies & Analytics</h2>
          <p>
            We may use cookies or similar tracking technologies to understand site traffic
            and improve user experience. You can control cookies through your browser
            settings. Disabling cookies will not prevent you from using the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">6. Third-Party Services</h2>
          <p>
            We use third-party services to operate 99 Hustles, including hosting (Vercel),
            video embedding (YouTube), and potentially email delivery providers. These
            services have their own privacy policies and we encourage you to review them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">7. Data Retention</h2>
          <p>
            We retain your email address and contact information for as long as you remain
            subscribed to our newsletter or as long as necessary to fulfill the purpose for
            which it was collected. You may request deletion of your data at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Unsubscribe from our newsletter at any time</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{' '}
            <a href="mailto:hello@99hustles.com" className="text-black underline hover:no-underline">
              hello@99hustles.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">9. Children&rsquo;s Privacy</h2>
          <p>
            99 Hustles is not directed at children under the age of 13. We do not
            knowingly collect personal information from children. If you believe we have
            inadvertently collected such information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update
            the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the site
            after changes are posted constitutes your acceptance of those changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-3">11. Contact Us</h2>
          <p>
            Questions about this Privacy Policy? Reach us at{' '}
            <a href="mailto:hello@99hustles.com" className="text-black underline hover:no-underline">
              hello@99hustles.com
            </a>
            .
          </p>
        </section>

      </div>
    </main>
  )
}
