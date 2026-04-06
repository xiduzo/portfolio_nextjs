import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sanderboer.nl';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Posts index
    {
      url: `${baseUrl}/post`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Post year indexes
    {
      url: `${baseUrl}/post/2023`,
      lastModified: new Date('2023-12-31'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/post/2024`,
      lastModified: new Date('2024-12-31'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/post/2025`,
      lastModified: new Date('2025-12-31'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/post/2026`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Individual posts
    {
      url: `${baseUrl}/post/2023/suspense`,
      lastModified: new Date('2023-11-21'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/post/2024/zod`,
      lastModified: new Date('2024-06-30'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/post/2024/testing`,
      lastModified: new Date('2024-04-04'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/post/2024/talking-to-water`,
      lastModified: new Date('2024-02-21'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/post/2026/designing-intent`,
      lastModified: new Date('2026-03-13'),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    // Projects index
    {
      url: `${baseUrl}/project`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Individual projects
    {
      url: `${baseUrl}/project/fissa`,
      lastModified: new Date('2023-06-02'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/project/microflow`,
      lastModified: new Date('2024-09-14'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/project/glosario`,
      lastModified: new Date('2026-03-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/project/assessor-bot`,
      lastModified: new Date('2025-02-12'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/project/veilenext`,
      lastModified: new Date('2021-07-15'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/project/spirit`,
      lastModified: new Date('2019-08-08'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/project/livestock`,
      lastModified: new Date('2018-02-21'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/project/athena`,
      lastModified: new Date('2017-03-21'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
