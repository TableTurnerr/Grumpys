import type { NextConfig } from "next";

const rawBase = process.env.NEXT_BASE_PATH || "";
const normalizedBase = rawBase ? (rawBase.startsWith("/") ? rawBase : `/${rawBase}`) : undefined;

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ['lh3.googleusercontent.com', 'grumpysnj.com'],
    unoptimized: true,
  },
  trailingSlash: true,
  ...(normalizedBase ? { basePath: normalizedBase, assetPrefix: normalizedBase } : {}),
};

export default nextConfig;
