import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Easy':
      return 'text-neutral-700 bg-neutral-100'
    case 'Medium':
      return 'text-neutral-600 bg-neutral-100'
    case 'Hard':
      return 'text-red-600 bg-red-50'
    default:
      return 'text-gray-600 bg-gray-50'
  }
}

export function getSkillLevelColor(level: string): string {
  switch (level) {
    case 'Beginner':
      return 'text-neutral-700 bg-neutral-100'
    case 'Intermediate':
      return 'text-neutral-600 bg-neutral-100'
    case 'Advanced':
      return 'text-red-600 bg-red-50'
    default:
      return 'text-gray-600 bg-gray-50'
  }
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}
