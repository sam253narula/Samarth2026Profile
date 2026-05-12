import type { MetadataRoute } from 'next';

const siteUrl = 'https://sam253narula.github.io/Samarth2026Profile';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}