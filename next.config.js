/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'production' ? '/web-card' : '';

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  images: {
    loader: "akamai",
    path: "",
  },
}

module.exports = nextConfig
