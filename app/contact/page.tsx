'use client'

import { useState } from 'react'
import { Mail, Mic, BarChart2, Users, CheckCircle2, ArrowRight } from 'lucide-react'

const partnershipTypes = [
  {
    icon: Mic,
    title: 'Podcast Sponsorship',
    desc: 'Feature your brand in an upcoming episode with a host-read ad to our engaged audience of builders and operators.',
    detail: 'Best for: Tools, platforms, and services used by entrepreneurs',
  },
  {
    icon: BarChart2,
    title: 'Newsletter Sponsorship',
    desc: 'Reach 10,000+ weekly subscribers with a dedicated feature in our Hustle Breakdown newsletter.',
    detail: 'Best for: Software, courses, books, and digital products',
  },
  {
    icon: Users,
    title: 'Content Collaboration',
    desc: 'Co-create hustle breakdowns, guides, or case studies that provide genuine value to our audience.',
    detail: 'Best for: Brands with strong operator communities or data',
  },
  {
    icon: Mail,
    title: 'Guest Appearance',
    desc: 'If you\'ve built a real income stream and can talk about the numbers, we want to hear from you.',
    detail: 'Best for: Operators, founders, and side hustlers with a real story',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to a form provider (Formspree, Resend, etc.)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-16">
        <div className="container-main py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Contact & Partnerships
            </p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Let's build something together.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We partner with brands, tools, and services that genuinely help entrepreneurs and side
              hustlers. If that's you — or if you have a hustle story worth documenting — get in
              touch.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="advertise" className="bg-brand-cream section-padding">
        <div className="container-main">
          <div className="mb-12">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
              How We Work Together
            </p>
            <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl">
              Partnership options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {partnershipTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white border border-brand-border rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                  <type.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-brand-black text-lg mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{type.desc}</p>
                <p className="text-xs text-gray-400 font-medium">{type.detail}</p>
              </div>
            ))}
          </div>

          {/* Media Kit */}
          <div id="media-kit" className="bg-brand-black rounded-2xl p-8 md:p-12 text-center">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
              Media Kit
            </p>
            <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-4">
              Audience numbers & demographics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
              {[
                { val: '10K+', label: 'Newsletter subscribers' },
                { val: '42%', label: 'Average open rate' },
                { val: '50+', label: 'Episodes published' },
                { val: 'Ages 24–40', label: 'Core demographic' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-white text-2xl md:text-3xl">
                    {stat.val}
                  </p>
                  <p className="text-white/50 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm mb-6">
              Our audience is ambitious, digitally savvy, and actively looking for tools and
              resources to grow their income. We'll send you the full media kit when you reach out.
            </p>
            <button className="btn-primary">
              Request Media Kit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white section-padding border-t border-brand-border">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
                Get in Touch
              </p>
              <h2 className="font-display font-bold text-brand-black text-3xl mb-3">
                Send us a message
              </h2>
              <p className="text-gray-500 text-base">
                For partnerships, guest appearances, or anything else — use the form below. We
                read every submission and respond to every serious inquiry within 48 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-brand-cream border border-brand-border rounded-2xl p-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-display font-bold text-brand-black text-2xl mb-2">
                  Got it — we'll be in touch.
                </h3>
                <p className="text-gray-500 text-sm">
                  We typically respond within 48 hours. Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-border rounded-xl text-brand-black placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-border rounded-xl text-brand-black placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Company / Brand
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or brand name"
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-border rounded-xl text-brand-black placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    What are you reaching out about? *
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-border rounded-xl text-brand-black text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30 transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Select one...
                    </option>
                    <option value="podcast-sponsorship">Podcast Sponsorship</option>
                    <option value="newsletter-sponsorship">Newsletter Sponsorship</option>
                    <option value="content-collaboration">Content Collaboration</option>
                    <option value="guest-appearance">Guest Appearance / Be Featured</option>
                    <option value="media-kit">Request Media Kit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Tell us more *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's your idea? What are you hoping to accomplish? The more context, the better."
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-border rounded-xl text-brand-black placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-dark w-full justify-center py-4 text-base"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-gray-400 text-xs text-center">
                  We respond to all serious inquiries within 48 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
