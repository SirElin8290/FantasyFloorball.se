/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/FantasyFloorball.se' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/FantasyFloorball.se/' : '',
};

export default nextConfig;
