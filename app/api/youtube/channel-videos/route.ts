import { NextResponse } from 'next/server'
import { getChannelVideos } from '@/lib/youtube'

/**
 * GET /api/youtube/channel-videos
 * Returns recent uploads from the 99 Hustles YouTube channel.
 * Cached for 1 hour via Cache-Control header.
 *
 * Query params:
 *   maxResults — number of videos to return (default 20, max 50)
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const maxResults = Math.min(parseInt(searchParams.get('maxResults') || '20', 10), 50)

  const videos = await getChannelVideos('@99hustlespodcast', maxResults)

  return NextResponse.json(
    { videos, count: videos.length },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    }
  )
}
