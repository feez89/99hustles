import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'gold' | 'dark' | 'outline' | 'outline-gold' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  showArrow?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variantStyles: Record<string, string> = {
  gold: 'bg-white text-brand-black hover:bg-white-dark',
  dark: 'bg-brand-black text-white hover:bg-brand-charcoal',
  outline: 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white',
  'outline-gold': 'border-2 border-white/30 text-white hover:bg-white hover:text-brand-black',
  ghost: 'text-gray-700 hover:bg-gray-100',
}

const sizeStyles: Record<string, string> = {
  sm: 'text-xs px-4 py-2.5 rounded-lg',
  md: 'text-sm px-6 py-3 rounded-xl',
  lg: 'text-base px-8 py-4 rounded-xl',
}

export default function Button({
  children,
  variant = 'dark',
  size = 'md',
  href,
  onClick,
  className,
  showArrow = false,
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
