import { Eye, ThumbsUp, Clock } from 'lucide-react'
import { getVideoStats, formatViewCount } from '@/lib/youtube'

interface Props {
  videoId: string
}

/**
 * Server component — fetches live YouTube stats for a single video.
 * Cached for 1 hour (via fetch revalidate in lib/youYouTubeStats.tsxtube.ts).
 */
export default async function YouTubeStats({ videoId }: Props) {
  const stats = await getVideoStats(videoId)

  // Don't render anything if stats couldn't be fetched or it's a placeholder
  if (!stats || videoId === 'dQw4w9WgXcQ') return null

  return (
    <div className="flex flex-wrap items-center gap-4 mt-4 px-1">
      <div className="flex items-center gap-1.5 text-white/50 text-sm">
        <Eye className="w-4 h-4" />
        <span>{formatViewCount(stats.viewCount)}</span>
      </div>
      {stats.likeCount !== '0' && (
        <div className="flex items-center gap-1.5 text-white/50 text-sm">
          <ThumbsUp className="w-4 h-4" />
          <span>{parseInt(stats.likeCount).toLocaleString()} likes</span>
        </div>
      )}
      {stats.durationFormatted && (
        <div className="flex items-center gap-1.5 text-white/50 text-sm">
          <Clock className="w-4 h-4" />
          <span>{stats.durationFormatted}</span>
        </div>
      )}
    </div>
  )
}
