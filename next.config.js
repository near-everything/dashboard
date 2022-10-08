/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost"],
  },
  rewrites: async () => [
    {
      source: "/public/privacy-policy.html",
      destination: "/pages/api/privacy-policy.js",
    },
  ],
}

module.exports = nextConfig
