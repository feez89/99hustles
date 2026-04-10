import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { hustles } from '@/lib/data/hustles'
import { episodes } from '@/lib/data/episodes'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL,                   lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/hustles`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/episodes`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/newsletter`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`,      lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const hustleRoutes: MetadataRoute.Sitemap = hustles.map((h) => ({
    url:             `${SITE_URL}/hustles/${h.slug}`,
    lastModified:    new Date(h.publishDate),
    changeFrequency: 'monthly' as const,
    priority:        0.8,
  }))

  const episodeRoutes: MetadataRoute.Sitemap = episodes.map((e) => ({
    url:             `${SITE_URL}/episodes/${e.slug}`,
    lastModified:    new Date(e.publishDate),
    changeFrequency: 'monthly' as const,
    priority:        0.8,
  }))

  return [...staticRoutes, ...hustleRoutes, ...episodeRoutes]
}
