import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  theme?: 'dark' | 'light'
  action?: React.ReactNode
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'dark',
  action,
  className,
}: SectionHeadingProps) {
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row sm:items-end justify-between gap-6',
        align === 'center' && 'sm:items-center sm:flex-col sm:text-center',
        className,
      )}
    >
      <div className={cn('max-w-xl', align === 'center' && 'mx-auto')}>
        {eyebrow && (
          <p className={cn('mb-3', isDark ? 'eyebrow' : 'eyebrow-dark')}>
            {eyebrow}
          </p>
         )}
        <h2
          className={cn(
            'font-display font-bold leading-tight tracking-tight text-balance',
            'text-2xl md:text-3xl lg:text-4xl',
            isDark ? 'text-white' : 'text-black',
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-3 text-base leading-relaxed',
              isDark ? 'text-white/50' : 'text-neutral-500',
              align === 'center' ? 'max-w-xl mx-auto' : 'max-w-xl',
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && align !== 'center' && (
        <div className="flex-shrink-0">{action}</div>
      )}
    </div>
  )
}
