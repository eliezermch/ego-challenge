import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'challenge.egodesign.dev',
      },
    ],
  },
};

export default nextConfig;
