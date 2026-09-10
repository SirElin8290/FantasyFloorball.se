/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_ACTIONS
      ? "/FantasyFloorball.se"
      : "",
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? "/FantasyFloorball.se" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/FantasyFloorball.se/" : "",
};

export default nextConfig;
