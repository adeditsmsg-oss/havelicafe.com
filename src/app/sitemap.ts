import { MetadataRoute } from 'next';
import { seoConfig } from '@/utils/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
