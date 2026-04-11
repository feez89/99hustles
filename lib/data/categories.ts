import { Category } from '@/types'

export const categories: Category[] = [
  {
    id: '1',
    name: 'Content & Media',
    slug: 'content-media',
    description: 'Build audiences, monetize attention, and create content-driven income streams.',
    hustleCount: 2,
    icon: '🎙️',
    accentColor: '#7C3AED',
  },
  {
    id: '2',
    name: 'E-Commerce',
    slug: 'ecommerce',
    description: 'Sell physical or digital products online without a storefront.',
    hustleCount: 4,
    icon: '📦',
    accentColor: '#0EA5E9',
  },
  {
    id: '3',
    name: 'Creative Services',
    slug: 'creative-services',
    description: 'Turn creative skills into premium freelance income.',
    hustleCount: 3,
    icon: '🎨',
    accentColor: '#EC4899',
  },
  {
    id: '4',
    name: 'Services & Consulting',
    slug: 'services-consulting',
    description: 'Package your expertise into a scalable service business.',
    hustleCount: 4,
    icon: '💼',
    accentColor: '#10B981',
  },
  {
    id: '5',
    name: 'Digital Products',
    slug: 'digital-products',
    description: 'Create once, sell forever. Templates, courses, and more.',
    hustleCount: 2,
    icon: '⚡',
    accentColor: '#F59E0B',
  },
  {
    id: '6',
    name: 'Real Estate & Investing',
    slug: 'real-estate',
    description: 'Rental properties, mobile homes, Turo fleets, and development plays that build wealth.',
    hustleCount: 5,
    icon: '🏠',
    accentColor: '#16A34A',
  },
  {
    id: '7',
    name: 'Tech & Startups',
    slug: 'tech-startups',
    description: 'Build software products and tech companies that scale beyond the hours you put in.',
    hustleCount: 1,
    icon: '🚀',
    accentColor: '#7C3AED',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
