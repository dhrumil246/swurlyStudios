import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pub-4b80a924369f4077b5514dd6bb128290.r2.dev',
      },
    ],
  },
};

export default nextConfig;
