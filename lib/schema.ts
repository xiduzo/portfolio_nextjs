import { getSiteUrl } from '@/lib/site';
import type { Metadata } from 'next';

const LINKEDIN = 'https://www.linkedin.com/in/xiduzo/';

export function rootJsonLdGraph() {
  const base = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${base}/#person`,
        name: 'Sander Boer',
        url: base,
        image: `${base}/me.jpeg`,
        jobTitle: 'Developer & Designer',
        sameAs: [LINKEDIN],
      },
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: base,
        name: 'Sander Boer',
        description:
          'Developer and designer Sander Boer builds React and TypeScript products people enjoy. Portfolio, case studies, and technical writing.',
        publisher: { '@id': `${base}/#person` },
      },
    ],
  };
}

export function blogPostingJsonLd(input: {
  headline: string;
  description: string;
  datePublished: string;
  path: string;
}) {
  const base = getSiteUrl();
  const url = `${base}${input.path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    author: {
      '@type': 'Person',
      name: 'Sander Boer',
      url: `${base}/about`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Sander Boer',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    image: [`${base}/me.jpeg`],
  };
}

export type BlogPostSeo = {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  openGraphDescription?: string;
};

export function blogPostMetadata(input: BlogPostSeo): Metadata {
  const base = getSiteUrl();
  const url = `${base}${input.path}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      type: 'article',
      publishedTime: input.publishedTime,
      authors: ['Sander Boer'],
      url,
      title: input.title,
      description: input.openGraphDescription ?? input.description,
    },
  };
}

export function blogPostJsonLdFromSeo(input: BlogPostSeo) {
  return blogPostingJsonLd({
    headline: input.title,
    description: input.description,
    datePublished: input.publishedTime,
    path: input.path,
  });
}

// --- Generic pages (home, archives, legal, listings)

export type SitePageSeo = {
  /** Primary label for JSON-LD `name` and default `<title>` (when not using `titleAbsolute`) */
  title: string;
  description: string;
  path: string;
  /** When set, `<title>` is exactly this string (root title template is not applied). */
  titleAbsolute?: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  pageJsonLd?: 'WebPage' | 'CollectionPage' | 'ProfilePage';
};

export function sitePageMetadata(input: SitePageSeo): Metadata {
  const base = getSiteUrl();
  const url = `${base}${input.path}`;
  const ogTitle = input.openGraphTitle ?? input.title;

  return {
    title: input.titleAbsolute
      ? { absolute: input.titleAbsolute }
      : input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      type: 'website',
      url,
      title: ogTitle,
      description: input.openGraphDescription ?? input.description,
    },
  };
}

export function sitePageJsonLdFromSeo(input: SitePageSeo) {
  const base = getSiteUrl();
  const url = `${base}${input.path}`;
  const pageType = input.pageJsonLd ?? 'WebPage';

  return {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': url,
    url,
    name: input.title,
    description: input.description,
    isPartOf: { '@id': `${base}/#website` },
    author: { '@id': `${base}/#person` },
    ...(pageType === 'ProfilePage'
      ? { mainEntity: { '@id': `${base}/#person` } }
      : {}),
  };
}

// --- Portfolio case studies (project detail pages)

export type PortfolioProjectSeo = SitePageSeo & {
  /** Public demo / product URL — optional `sameAs` on CreativeWork */
  demoUrl?: string;
};

export function portfolioProjectMetadata(input: PortfolioProjectSeo): Metadata {
  return sitePageMetadata(input);
}

export function portfolioProjectJsonLdFromSeo(input: PortfolioProjectSeo) {
  const base = getSiteUrl();
  const url = `${base}${input.path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: input.title,
    description: input.description,
    url,
    author: { '@id': `${base}/#person` },
    creator: { '@id': `${base}/#person` },
    isPartOf: { '@id': `${base}/#website` },
    ...(input.demoUrl ? { sameAs: [input.demoUrl] } : {}),
  };
}
