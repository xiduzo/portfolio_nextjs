/** Canonical origin for metadata, sitemaps, robots host, and JSON-LD. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  if (fromEnv) return fromEnv;
  return 'https://sanderboer.nl';
}

/** Vercel preview deployments — block crawlers so only production is indexed. */
export function isPreviewDeployment(): boolean {
  return process.env.VERCEL_ENV === 'preview';
}
