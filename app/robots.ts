import type { MetadataRoute } from 'next';
import { getSiteUrl, isPreviewDeployment } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment()) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }

  const base = getSiteUrl();

  return {
    rules: { userAgent: '*', allow: '/' },
    host: new URL(base).host,
    sitemap: `${base}/sitemap.xml`,
  };
}
