/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["everything-1.s3.us-east-1.amazonaws.com", "localhost"],
  },
  rewrites: async () => [
    {
      source: "/public/privacy-policy.html",
      destination: "/pages/api/privacy-policy.js",
    },
  ],
};

module.exports = nextConfig;
