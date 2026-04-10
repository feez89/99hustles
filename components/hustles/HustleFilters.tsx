'use client'

import { useState } from 'react'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import { categories } from '@/lib/data/categories'
import { cn } from '@/lib/utils'

interface HustleFiltersProps {
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
  onDifficultyChange: (difficulty: string) => void
  activeCategory: string
  activeDifficulty: string
  searchQuery: string
}

const difficulties = ['All', 'Easy', 'Medium', 'Hard']

export default function HustleFilters({
  onSearch,
  onCategoryChange,
  onDifficultyChange,
  activeCategory,
  activeDifficulty,
  searchQuery,
}: HustleFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="space-y-5">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search hustles by name, category, or keyword..."
          className="w-full pl-11 pr-10 py-3.5 bg-white border border-brand-border rounded-xl text-sm text-brand-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/50 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-black transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Toggle (mobile) */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {/* Category Pills */}
          <button
            onClick={() => onCategoryChange('all')}
            className={cn(
              'whitespace-nowrap text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-150 flex-shrink-0',
              activeCategory === 'all'
                ? 'bg-brand-black text-white border-brand-black'
                : 'bg-white text-gray-600 border-brand-border hover:border-brand-black'
            )}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onCategoryChange(cat.slug)}
              className={cn(
                'whitespace-nowrap text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-150 flex-shrink-0',
                activeCategory === cat.slug
                  ? 'bg-brand-black text-white border-brand-black'
                  : 'bg-white text-gray-600 border-brand-border hover:border-brand-black'
              )}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-xs font-semibold text-gray-600 border border-brand-border rounded-lg px-3 py-2 hover:border-brand-black transition-all ml-3 flex-shrink-0"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Filters
        </button>
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="bg-brand-cream border border-brand-border rounded-xl p-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Difficulty
          </p>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => onDifficultyChange(diff === 'All' ? 'all' : diff)}
                className={cn(
                  'text-xs font-semibold px-3.5 py-2 rounded-full border transition-all',
                  activeDifficulty === (diff === 'All' ? 'all' : diff)
                    ? 'bg-brand-black text-white border-brand-black'
                    : 'bg-white text-gray-600 border-brand-border hover:border-brand-black'
                )}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
