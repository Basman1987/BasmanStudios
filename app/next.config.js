/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com"], // Add any external domains you're using for images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.globalObject = "self"
    }
    return config
  },
}

module.exports = nextConfig

