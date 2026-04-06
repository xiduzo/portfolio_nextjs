import { withNextVideo } from 'next-video/process';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  staticPageGenerationTimeout: 60,
  async redirects() {
    return [
      {
        source: '/post/2026/from-instructions-to-intent',
        destination: '/post/2026/designing-intent',
        permanent: true,
      },
    ];
  },
};

export default withNextVideo(nextConfig, {
  provider: 'vercel-blob',
});
