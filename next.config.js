/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/juanita-soho',
  assetPrefix: '/juanita-soho/',
};

module.exports = nextConfig;
