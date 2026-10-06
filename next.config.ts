import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages cannot run the Next.js image server, so we must unoptimize images
  images: {
    unoptimized: true,
  },
  // IMPORTANT: If your GitHub repository is named "portfolio" instead of "[username].github.io", 
  // you MUST uncomment and update the basePath below to match your repo name:
  basePath: "/portfolio",
};

export default nextConfig;