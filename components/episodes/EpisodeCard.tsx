import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Clock, Users } from 'lucide-react'
import { Episode } from '@/types'
import { cn } from '@/lib/utils'

interface EpisodeCardProps {
  episode: Episode
  theme?: 'dark' | 'light'
  featured?: boolean
  className?: string
}

export default function EpisodeCard({
  episode,
  theme = 'dark',
  featured = false,
  className,
}: EpisodeCardProps) {
  const isDark = theme === 'dark'

  return (
    <Link
      href={`/episodes/${episode.slug}`}
      className={cn(
        'group flex overflow-hidden rounded-2xl transition-all duration-300',
        featured ? 'flex-col md:flex-row' : 'flex-col',
        isDark
          ? 'bg-[#111111] border border-white/[0.07] hover:border-white/[0.16] hover:-translate-y-0.5'
          : 'bg-white border border-[#E5E5E5] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5',
        className,
      )}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          'relative flex-shrink-0 overflow-hidden',
          featured ? 'md:w-72 aspect-video md:aspect-auto' : 'aspect-video',
        )}
      >
        {episode.youtubeId && episode.youtubeId !== 'dQw4w9WgXcQ' ? (
          <Image
            src={`https://i.ytimg.com/vi/${episode.youtubeId}/hqdefault.jpg`}
            alt={episode.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        ) : (
          <div
            className={cn(
              'w-full h-full flex flex-col items-center justify-center',
              isDark ? 'bg-[#1C1C1C]' : 'bg-neutral-100',
            )}
          >
            <span
              className={cn(
                'font-display font-bold text-5xl select-none leading-none',
                isDark ? 'text-white/[0.05]' : 'text-black/[0.05]',
              )}
            >
              99
            </span>
          </div>
        )}

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Play className="w-4 h-4 text-black fill-black ml-0.5" />
          </div>
        </div>

        {/* Episode badge */}
        <div
          className={cn(
            'absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full',
            isDark ? 'bg-black/60 text-white/70 backdrop-blur-sm' : 'bg-white/90 text-black/70 backdrop-blur-sm shadow-sm',
          )}
        >
          EP. {episode.episodeNumber}
        </div>

        {/* Duration badge */}
        <div
          className={cn(
            'absolute bottom-3 right-3 flex items-center gap-1 text-[10px] rounded-full px-2 py-1',
            isDark ? 'bg-black/60 text-white/60 backdrop-blur-sm' : 'bg-white/90 text-black/60 backdrop-blur-sm',
          )}
        >
          <Clock className="w-2.5 h-2.5" strokeWidth={2} />
          {episode.duration}
        </div>
      </div>

      {/* Content */}
      <div className={cn('flex flex-col flex-1 p-5 gap-3', featured && 'md:p-6')}>
        <div>
          <span
            className={cn(
              'text-[11px] font-medium px-2.5 py-1 rounded-full',
              isDark ? 'bg-white/[0.06] text-white/50' : 'bg-neutral-100 text-neutral-600',
            )}
          >
            {episode.category}
          </span>
        </div>

        <div className="flex-1">
          <h3
            className={cn(
              'font-display font-bold leading-snug mb-2 transition-colors duration-200',
              featured ? 'text-lg md:text-xl' : 'text-base md:text-[17px]',
              isDark ? 'text-white group-hover:text-white/80' : 'text-black group-hover:text-neutral-700',
            )}
          >
            {episode.title}
          </h3>
          <p
            className={cn(
              'text-sm leading-relaxed',
              featured ? 'line-clamp-3' : 'line-clamp-2',
              isDark ? 'text-white/45' : 'text-neutral-500',
            )}
          >
            {episode.summary}
          </p>
        </div>

        <div
          className={cn(
            'flex items-center justify-between pt-3 mt-auto',
            isDark ? 'border-t border-white/[0.07]' : 'border-t border-[#E5E5E5]',
          )}
        >
          {episode.guest ? (
            <div className="flex items-center gap-2 min-w-0">
              <div
                className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0',
                  isDark ? 'bg-white/10 text-white/60' : 'bg-neutral-100 text-neutral-600',
                )}
              >
                {episode.guest.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className={cn('text-[11px] font-semibold leading-none truncate', isDark ? 'text-white/70' : 'text-neutral-800')}>
                  {episode.guest.name}
                </p>
                {(episode.guest.company || episode.guest.title) && (
                  <p className={cn('text-[10px] leading-none mt-0.5 truncate', isDark ? 'text-white/35' : 'text-neutral-400')}>
                    {episode.guest.company || episode.guest.title}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <Users className={cn('w-3.5 h-3.5', isDark ? 'text-white/25' : 'text-neutral-300')} strokeWidth={2} />
              <span className={cn('text-[11px]', isDark ? 'text-white/35' : 'text-neutral-400')}>Solo episode</span>
            </div>
          )}

          <div
            className={cn(
              'flex items-center gap-1 text-xs font-semibold flex-shrink-0 ml-3 group-hover:gap-2 transition-all duration-200',
              isDark ? 'text-white/40 group-hover:text-white/70' : 'text-neutral-400 group-hover:text-black',
            )}
          >
            Listen
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
