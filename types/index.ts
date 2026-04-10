export interface Hustle {
  id: string
  slug: string
  title: string
  tagline: string
  category: string
  categorySlug: string
  startupCost: string
  startupCostRange: [number, number]
  timeToFirstIncome: string
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced'
  revenuePotential: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  whatItIs: string
  howItMakesMoney: string
  howToGetStarted: string[]
  toolsNeeded: Tool[]
  mistakesToAvoid: string[]
  relatedEpisodeSlug?: string
  relatedHustleSlugs: string[]
  tags: string[]
  featured?: boolean
  accentColor: string
  publishDate: string
  readTime: string
}

export interface Tool {
  name: string
  description: string
  cost: string
  url?: string
}

export interface Episode {
  id: string
  slug: string
  title: string
  episodeNumber: number
  summary: string
  keyTakeaways: string[]
  guest: Guest
  highlights: string[]
  relatedHustleSlugs: string[]
  duration: string
  publishDate: string
  youtubeId?: string
  featured?: boolean
  category: string
}

export interface Guest {
  name: string
  title: string
  company?: string
  bio: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  hustleCount: number
  icon: string
  accentColor: string
}

export interface NavLink {
  label: string
  href: string
}
