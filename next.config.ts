import { withNextVideo } from 'next-video/process';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  staticPageGenerationTimeout: 60,
  output: 'standalone',
};

export default withNextVideo(nextConfig, {
  provider: 'vercel-blob',
});
