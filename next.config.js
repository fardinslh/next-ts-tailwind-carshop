/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
