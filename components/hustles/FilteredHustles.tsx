'use client'

import { useState, useMemo } from 'react'
import HustleCard from '@/components/hustles/HustleCard'
import HustleFilters from '@/components/hustles/HustleFilters'

interface Hustle {
  id: string
  slug: string
  title: string
  description: string
  category: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  startupCost: string
  timeToFirstIncome: string
  revenuePotential: string
  icon?: string
  featured?: boolean
}

interface FilteredHustlesProps {
  hustles: Hustle[]
}

type SortOption = 'popular' | 'newest' | 'difficulty-asc' | 'difficulty-desc' | 'cost-asc' | 'cost-desc'

export default function FilteredHustles({ hustles: initialHustles }: FilteredHustlesProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('popular')

  // Get unique categories from hustles
  const categories = useMemo(() => {
    const cats = new Set(initialHustles.map((h) => h.category))
    return Array.from(cats).sort()
  }, [initialHustles])

  // Filter and sort hustles
  const filteredHustles = useMemo(() => {
    let results = initialHustles

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (hustle) =>
          hustle.title.toLowerCase().includes(query) ||
          hustle.description.toLowerCase().includes(query) ||
          hustle.category.toLowerCase().includes(query)
      )
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      results = results.filter((hustle) => selectedCategories.includes(hustle.category))
    }

    // Filter by difficulty
    if (selectedDifficulty) {
      results = results.filter((hustle) => hustle.difficulty === selectedDifficulty)
    }

    // Sort results
    switch (sortBy) {
      case 'newest':
        results = [...results].reverse() // Assumes initial order is oldest first
        break
      case 'difficulty-asc': {
        const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 }
        results = [...results].sort(
          (a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        )
        break
      }
      case 'difficulty-desc': {
        const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 }
        results = [...results].sort(
          (a, b) => difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]
        )
        break
      }
      case 'cost-asc':
        results = [...results].sort((a, b) => {
          const costA = parseCost(a.startupCost)
          const costB = parseCost(b.startupCost)
          return costA - costB
        })
        break
      case 'cost-desc':
        results = [...results].sort((a, b) => {
          const costA = parseCost(a.startupCost)
          const costB = parseCost(b.startupCost)
          return costB - costA
        })
        break
      case 'popular':
      default:
        // Keep original order (featured items first)
        results = results.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
        })
        break
    }

    return results
  }, [initialHustles, selectedCategories, selectedDifficulty, searchQuery, sortBy])

  // Parse cost string to number for sorting
  const parseCost = (costStr: string): number => {
    const match = costStr.match(/\$(\d+)/)
    return match ? parseInt(match[1], 10) : 0
  }

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    setSelectedDifficulty(null)
    setSearchQuery('')
    setSortBy('popular')
  }

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedDifficulty || searchQuery.trim()

  return (
    <>
      {/* Filters Section */}
      <div className="mb-12">
        <HustleFilters
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryToggle}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Results Count and Info */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-brand-white/70">
            Showing <span className="font-semibold text-brand-gold">{filteredHustles.length}</span>{' '}
            of <span className="font-semibold">{initialHustles.length}</span> hustles
          </p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-brand-gold hover:text-brand-gold/80 transition-colors underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Hustles Grid */}
      {filteredHustles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHustles.map((hustle) => (
            <HustleCard key={hustle.id} hustle={hustle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-brand-white mb-2">
            No hustles found
          </h3>
          <p className="text-brand-white/60 mb-6">
            Try adjusting your filters or search query
          </p>
          <button
            onClick={handleClearFilters}
            className="btn-primary bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-semibold px-6 py-2 rounded-lg transition-all duration-200"
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  )
}
