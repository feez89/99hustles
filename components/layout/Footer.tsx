import Link from 'next/link'
import { Zap, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react'

const footerLinks = {
  content: [
    { label: 'Hustle Library', href: '/hustles' },
    { label: 'All Episodes', href: '/episodes' },
    { label: 'Start Here', href: '/#start-here' },
    { label: 'Free Newsletter', href: '/newsletter' },
  ],
  company: [
    { label: 'About 99 Hustles', href: '/about' },
    { label: 'Partner With Us', href: '/contact' },
    { label: 'Advertise', href: '/contact#advertise' },
    { label: 'Media Kit', href: '/contact#media-kit' },
  ],
  categories: [
    { label: 'Content & Media', href: '/hustles?category=content-media' },
    { label: 'E-Commerce', href: '/hustles?category=ecommerce' },
    { label: 'Creative Services', href: '/hustles?category=creative-services' },
    { label: 'Services & Consulting', href: '/hustles?category=services-consulting' },
    { label: 'Digital Products', href: '/hustles?category=digital-products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Newsletter CTA Strip */}
      <div className="border-b border-white/10">
        <div className="container-main py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-2">
                Stay in the loop
              </p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                Get the weekly hustle breakdown.
              </h3>
              <p className="text-white/60 mt-2 text-sm">
                One real income breakdown, every week. Free.
              </p>
            </div>
            <form
              action="/newsletter"
              method="GET"
              className="flex w-full md:w-auto gap-3 min-w-[320px]"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Your email address"
                required
                aria-label="Email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="btn-primary whitespace-nowrap flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-5">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-brand-black" strokeWidth={2.5} />
              </div>
              <span className="text-white font-display font-bold text-lg">
                99 <span className="text-white">Hustles</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              We document how real people build income streams, side hustles, and businesses — so
              you can learn from what actually works.
            </p>
            <p className="text-white/30 text-xs mt-4 italic">
              &quot;Real People. Real Income. Real Breakdowns.&quot;
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/99hustlespodcast"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-brand-black text-white/60 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com/@99hustlespodcast"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-brand-black text-white/60 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@99hustles.com"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-brand-black text-white/60 transition-all duration-200"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Content Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Content
            </h4>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Browse
            </h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} 99 Hustles. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Terms
            </Link>
            <span className="text-white/20 text-xs">Built for builders.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
