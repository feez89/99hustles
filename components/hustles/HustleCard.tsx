import Link from 'next/link'
import { ArrowRight, DollarSign, Clock, TrendingUp } from 'lucide-react'
import { Hustle } from '@/types'
import { cn } from '@/lib/utils'

interface HustleCardProps {
  hustle: Hustle
  /** 'default' renders on dark bg (dark card), 'light' renders on white bg (white card) */
  theme?: 'dark' | 'light'
  className?: string
}

const difficultyStyles: Record<string, string> = {
  Easy:   'bg-white/10 text-white/60',
  Medium: 'bg-white/10 text-white/60',
  Hard:   'bg-white/10 text-white/60',
}
const difficultyStylesLight: Record<string, string> = {
  Easy:   'bg-neutral-100 text-neutral-600',
  Medium: 'bg-neutral-200 text-neutral-700',
  Hard:   'bg-neutral-900 text-white',
}

export default function HustleCard({ hustle, theme = 'dark', className }: HustleCardProps) {
  const isDark = theme === 'dark'

  return (
    <Link
      href={`/hustles/${hustle.slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl transition-all duration-300',
        isDark
          ? 'bg-[#111111] border border-white/[0.07] hover:border-white/[0.16] hover:-translate-y-0.5'
          : 'bg-white border border-[#E5E5E5] shadow-card hover:shadow-card-hover hover:-translate-y-0.5',
        className,
      )}
    >
      {/* Top accent line */}
      <div className={cn('h-px w-full', isDark ? 'bg-white/[0.07]' : 'bg-[#E5E5E5]')} />

      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Category + Difficulty */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              'text-[11px] font-medium px-2.5 py-1 rounded-full',
              isDark ? 'bg-white/[0.06] text-white/50' : 'bg-neutral-100 text-neutral-600',
            )}
          >
            {hustle.category}
          </span>
          <span
            className={cn(
              'text-[11px] font-medium px-2.5 py-1 rounded-full',
              isDark
                ? difficultyStyles[hustle.difficulty]
                : difficultyStylesLight[hustle.difficulty],
            )}
          >
            {hustle.difficulty}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3
            className={cn(
              'font-display font-bold text-base md:text-[17px] leading-snug mb-2',
              'transition-colors duration-200',
              isDark
                ? 'text-white group-hover:text-white/80'
                : 'text-black group-hover:text-neutral-700',
            )}
          >
            {hustle.title}
          </h3>
          <p
            className={cn(
              'text-sm leading-relaxed line-clamp-2',
              isDark ? 'text-white/45' : 'text-neutral-500',
            )}
          >
            {hustle.tagline}
          </p>
        </div>

        {/* Stats row */}
        <div
          className={cn(
            'grid grid-cols-3 gap-2 pt-4 mt-auto',
            isDark ? 'border-t border-white/[0.07]' : 'border-t border-[#E5E5E5]',
          )}
        >
          {[
            { icon: DollarSign, label: 'Start',     value: hustle.startupCost },
            { icon: Clock,      label: 'First $',   value: hustle.timeToFirstIncome },
            { icon: TrendingUp, label: 'Potential',  value: hustle.revenuePotential },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Icon
                  className={cn('w-2.5 h-2.5', isDark ? 'text-white/25' : 'text-neutral-400')}
                  strokeWidth={2}
                />
                <span
                  className={cn(
                    'text-[9px] font-semibold uppercase tracking-wider',
                    isDark ? 'text-white/25' : 'text-neutral-400',
                  )}
                >
                  {label}
                </span>
              </div>
              <p
                className={cn(
                  'text-[11px] font-semibold leading-tight',
                  isDark ? 'text-white/70' : 'text-neutral-800',
                )}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div
          className={cn(
            'flex items-center gap-1.5 text-xs font-semibold',
            'group-hover:gap-2.5 transition-all duration-200',
            isDark ? 'text-white/40 group-hover:text-white/70' : 'text-neutral-400 group-hover:text-black',
          )}
        >
          Read breakdown
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  )
}
