import { getSiteUrl } from '@/lib/site';

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
