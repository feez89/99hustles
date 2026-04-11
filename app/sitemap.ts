import { MetadataRoute } from 'next'
import { getAllHustles } from '@/lib/data/hustles'
import { episodes } from '@/lib/data/episodes'

const BASE_URL = 'https://99hustles.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/hustles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/episodes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // SEO landing pages
  const seoPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/side-hustles-for-beginners`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/online-side-hustles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/low-cost-side-hustles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-ai-side-hustles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/creative-side-hustles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic hustle pages
  const hustles = getAllHustles()
  const hustlePages: MetadataRoute.Sitemap = hustles.map((hustle) => ({
    url: `${BASE_URL}/hustles/${hustle.slug}`,
    lastModified: new Date(hustle.updatedAt || hustle.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic episode pages
  const episodePages: MetadataRoute.Sitemap = episodes.map((episode) => ({
    url: `${BASE_URL}/episodes/${episode.slug}`,
    lastModified: new Date(episode.publishedAt),
    changeFrequency: 'never' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...seoPages, ...hustlePages, ...episodePages]
}
