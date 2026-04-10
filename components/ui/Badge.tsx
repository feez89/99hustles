import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'on-dark' | 'dark' | 'outline' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md'
  className?: string
}

const variantStyles: Record<string, string> = {
  default: 'bg-gray-100 text-gray-700',
  'on-dark': 'bg-white/[0.08] text-white/70 border border-white/[0.10]',
  dark: 'bg-brand-black text-white',
  outline: 'border border-brand-border text-gray-600',
  success: 'bg-neutral-100 text-neutral-700',
  warning: 'bg-neutral-100 text-neutral-700',
  danger: 'bg-red-50 text-red-700',
}

const sizeStyles: Record<string, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}
