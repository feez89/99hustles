'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Hustles', href: '/hustles' },
  { label: 'Episodes', href: '/episodes' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-brand-black'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="99 Hustles Home">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-white-dark transition-colors">
              <Zap className="w-4 h-4 text-brand-black" strokeWidth={2.5} />
            </div>
            <span className="text-white font-display font-700 text-lg tracking-tight">
              99 <span className="text-white">Hustles</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/newsletter"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Free Guide
            </Link>
            <Link
              href="/newsletter"
              className="btn-primary text-xs px-4 py-2.5"
            >
              Join the List
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-black border-t border-white/10">
          <nav className="container-main py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white text-base font-medium py-3 px-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/newsletter"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full text-center justify-center"
              >
                Join the Free Newsletter
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white/60 hover:text-white text-sm text-center transition-colors"
              >
                Partner with us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
