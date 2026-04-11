'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'border-b border-white/10' : ''
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded border border-white/20">
              <span className="text-sm font-bold font-display text-white">99</span>
            </div>
            <span className="text-base md:text-lg font-bold font-display text-white tracking-tight">
              HUSTLES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/quiz"
              className="inline-block px-5 py-2.5 bg-white text-brand-black font-semibold text-sm rounded transition-all duration-200 hover:bg-white/90 active:scale-95"
            >
              Find Your Hustle â
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-white/10 bg-brand-black/50 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
            <div className="py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-white/10">
                <Link
                  href="/quiz"
                  className="block w-full text-center px-4 py-2.5 bg-white text-brand-black font-semibold text-sm rounded transition-all duration-200 hover:bg-white/90"
                >
                  Find Your Hustle â
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
