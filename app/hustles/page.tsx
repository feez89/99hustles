'use client'

import { useState, useMemo } from 'react'
import { hustles } from '@/lib/data/hustles'
import HustleCard from '@/components/hustles/HustleCard'
import HustleFilters from '@/components/hustles/HustleFilters'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'

export default function HustlesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeDifficulty, setActiveDifficulty] = useState('all')

  const filtered = useMemo(() => {
    return hustles.filter((hustle) => {
      const matchesSearch =
        !searchQuery ||
        hustle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hustle.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hustle.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hustle.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory =
        activeCategory === 'all' || hustle.categorySlug === activeCategory

      const matchesDifficulty =
        activeDifficulty === 'all' || hustle.difficulty === activeDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchQuery, activeCategory, activeDifficulty])

  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-black pt-16">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              The Hustle Library
            </p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              Every hustle, broken down.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Not hype. Not theory. Real income streams with honest startup costs, realistic revenue
              ranges, and step-by-step breakdowns from people who've actually done it.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-sm">
            {[
              { value: '8+', label: 'Hustles' },
              { value: '6', label: 'Categories' },
              { value: '100%', label: 'Free' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-bold text-white text-2xl">{stat.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Content */}
      <section className="bg-brand-cream min-h-screen">
        <div className="container-main py-12">
          {/* Filters */}
          <HustleFilters
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            activeDifficulty={activeDifficulty}
            onSearch={setSearchQuery}
            onCategoryChange={setActiveCategory}
            onDifficultyChange={setActiveDifficulty}
          />

          {/* Results */}
          <div className="mt-8">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <h3 className="font-display font-bold text-brand-black text-xl mb-2">
                  No hustles found
                </h3>
                <p className="text-gray-500 text-sm">
                  Try adjusting your search or clearing the filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('all')
                    setActiveDifficulty('all')
                  }}
                  className="mt-4 btn-dark text-xs px-4 py-2.5"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-6">
                  Showing{' '}
                  <span className="font-semibold text-brand-black">{filtered.length}</span>{' '}
                  {filtered.length === 1 ? 'hustle' : 'hustles'}
                  {activeCategory !== 'all' && ` in ${activeCategory}`}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filtered.map((hustle) => (
                    <HustleCard key={hustle.id} hustle={hustle} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <EmailCaptureSection
        variant="dark"
        headline="New hustles drop every week."
        subheadline="Subscribe and we'll send you every new breakdown the moment it goes live — plus tools, resources, and curated content from our episodes."
        ctaText="Subscribe free"
      />
    </>
  )
}
