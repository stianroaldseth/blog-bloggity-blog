import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blog-bloggity-blog",
  assetPrefix: "/blog-bloggity-blog",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
