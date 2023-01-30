/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'production' ? '/web-card' : '';

const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: `${basePath}/`,
}

module.exports = nextConfig
