import { DollarSign, Clock, Gauge, TrendingUp } from 'lucide-react'
import { Hustle } from '@/types'
import { cn } from '@/lib/utils'

interface QuickStatsPanelProps {
  hustle: Hustle
  theme?: 'dark' | 'light'
  className?: string
}

export default function QuickStatsPanel({ hustle, theme = 'light', className }: QuickStatsPanelProps) {
  const isDark = theme === 'dark'

  const stats = [
    { icon: DollarSign, label: 'Startup Cost',       value: hustle.startupCost,       description: 'Estimated to get started' },
    { icon: Clock,      label: 'Time to First Income', value: hustle.timeToFirstIncome, description: 'If you start today' },
    { icon: Gauge,      label: 'Skill Level',          value: hustle.skillLevel,        description: 'Required to succeed' },
    { icon: TrendingUp, label: 'Revenue Potential',   value: hustle.revenuePotential,  description: 'Realistic range at scale' },
  ]

  return (
    <div className={cn('grid grid-cols-2 lg:grid-cols-4 gap-4', className)}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            'rounded-2xl p-5 flex flex-col gap-3',
            isDark
              ? 'bg-white/[0.04] border border-white/[0.07]'
              : 'bg-white border border-[#E5E5E5]',
          )}
        >
          <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center', isDark ? 'bg-white/[0.06]' : 'bg-neutral-100')}>
            <stat.icon className={cn('w-4 h-4', isDark ? 'text-white/50' : 'text-neutral-500')} strokeWidth={2} />
          </div>
          <div>
            <p className={cn('text-xs font-medium mb-0.5', isDark ? 'text-white/40' : 'text-neutral-400')}>{stat.label}</p>
            <p className={cn('font-display font-bold text-base leading-tight', isDark ? 'text-white' : 'text-black')}>
              {stat.value}
            </p>
            <p className={cn('text-xs mt-0.5', isDark ? 'text-white/30' : 'text-neutral-400')}>{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
