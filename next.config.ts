import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export for GitHub Pages. basePath is injected at CI time by
  // actions/configure-pages so project-page URLs (user.github.io/repo)
  // resolve correctly.
  output: "export",
  images: { unoptimized: true },
}

export default nextConfig
