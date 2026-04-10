/**
 * YouTube Data API v3 utilities
 * Uses YOUTUBE_API_KEY environment variable
 */

const YT_API_BASE = 'https://www.googleapis.com/youtube/v3'

export interface YouTubeVideoStats {
  videoId: string
  title: string
  description: string
  publishedAt: string
  thumbnailUrl: string
  viewCount: string
  likeCount: string
  duration: string
  durationFormatted: string
}

export interface YouTubeChannelVideo {
  videoId: string
  title: string
  description: string
  publishedAt: string
  thumbnailUrl: string
}

function parseISO8601Duration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return ''
  const hours = parseInt(match[1] || '0')
  const minutes = parseInt(match[2] || '0')
  const seconds = parseInt(match[3] || '0')
  if (hours > 0) return hours + 'h ' + minutes + 'm'
  if (minutes > 0) return minutes + ' min'
  return seconds + ' sec'
}

export function formatViewCount(count: string): string {
  const num = parseInt(count, 10)
  if (isNaN(num)) return count
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M views'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K views'
  return num + ' views'
}

export async function getVideoStats(videoId: string): Promise<YouTubeVideoStats | null> {
  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) { console.warn('[YouTube] YOUTUBE_API_KEY is not set'); return null }
  const url = new URL(YT_API_BASE + '/videos')
  url.searchParams.set('key', apiKey)
  url.searchParams.set('id', videoId)
  url.searchParams.set('part', 'snippet,statistics,contentDetails')
  try {
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } } as any)
    if (!res.ok) { console.error('[YouTube] API error ' + res.status); return null }
    const data = await res.json()
    const item = data.items?.[0]
    if (!item) return null
    return {
      videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnailUrl: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || '',
      viewCount: item.statistics?.viewCount || '0',
      likeCount: item.statistics?.likeCount || '0',
      duration: item.contentDetails?.duration || '',
      durationFormatted: parseISO8601Duration(item.contentDetails?.duration || ''),
    }
  } catch (err) { console.error('[YouTube] Failed:', err); return null }
}

export async function getChannelVideos(channelHandle: string, maxResults = 20): Promise<YouTubeChannelVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) { return [] }
  try {
    const channelUrl = new URL(YT_API_BASE + '/channels')
    channelUrl.searchParams.set('key', apiKey)
    channelUrl.searchParams.set('forHandle', channelHandle.replace('@', ''))
    channelUrl.searchParams.set('part', 'contentDetails,snippet')
    const channelRes = await fetch(channelUrl.toString(), { next: { revalidate: 86400 } } as any)
    if (!channelRes.ok) { return [] }
    const channelData = await channelRes.json()
    const channel = channelData.items?.[0]
    if (!channel) return []
    const uploadsPlaylistId = channel.contentDetails?.relatedPlaylists?.uploads
    if (!uploadsPlaylistId) return []
    const playlistUrl = new URL(YT_API_BASE + '/playlistItems')
    playlistUrl.searchParams.set('key', apiKey)
    playlistUrl.searchParams.set('playlistId', uploadsPlaylistId)
    playlistUrl.searchParams.set('part', 'snippet')
    playlistUrl.searchParams.set('maxResults', String(maxResults))
    const playlistRes = await fetch(playlistUrl.toString(), { next: { revalidate: 3600 } } as any)
    if (!playlistRes.ok) { return [] }
    const playlistData = await playlistRes.json()
    return (playlistData.items || []).map((item: any) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnailUrl: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || '',
    }))
  } catch (err) { console.error('[YouTube] Failed to fetch channel videos:', err); return [] }
}
