import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagsapi.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mainfacts.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
