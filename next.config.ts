import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/plod-on',
  assetPrefix: '/plod-on',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;