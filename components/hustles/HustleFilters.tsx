'use client'

import { Search, X, SlidersHorizontal } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

type SortOption = 'popular' | 'newest' | 'difficulty-asc' | 'difficulty-desc' | 'cost-asc' | 'cost-desc'

interface HustleFiltersProps {
  categories: string[]
  selectedCategories: string[]
  onCategoryChange: (category: string) => void
  selectedDifficulty: string | null
  onDifficultyChange: Dispatch<SetStateAction<string | null>>
  searchQuery: string
  onSearchChange: Dispatch<SetStateAction<string>>
  sortBy: SortOption
  onSortChange: Dispatch<SetStateAction<SortOption>>
  onClearFilters: () => void
  hasActiveFilters: boolean | string
}

export default function HustleFilters({
  categories,
  selectedCategories,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onClearFilters,
  hasActiveFilters,
}: HustleFiltersProps) {
  const difficulties = ['Easy', 'Medium', 'Hard']
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'difficulty-asc', label: 'Easiest First' },
    { value: 'difficulty-desc', label: 'Hardest First' },
    { value: 'cost-asc', label: 'Lowest Cost' },
    { value: 'cost-desc', label: 'Highest Cost' },
  ]

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-white/40" />
        <input
          type="text"
          placeholder="Search hustles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-brand-black border border-brand-border rounded-xl text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-gold transition-colors"
        />
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-brand-white/50" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="bg-brand-black border border-brand-border rounded-lg px-3 py-2 text-brand-white text-sm focus:outline-none focus:border-brand-gold"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Difficulty filter */}
        <div className="flex gap-2">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => onDifficultyChange(selectedDifficulty === d ? null : d)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                selectedDifficulty === d
                  ? 'bg-brand-gold text-brand-black border-brand-gold'
                  : 'border-brand-border text-brand-white/70 hover:border-brand-gold/50'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Clear */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-brand-white/60 hover:text-brand-white transition-colors"
          >
            <X className="w-4 h-4" />
            Clear filters
          </button>
        )}
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              selectedCategories.includes(cat)
                ? 'bg-brand-gold text-brand-black border-brand-gold'
                : 'border-brand-border text-brand-white/60 hover:border-brand-gold/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
