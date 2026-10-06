/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
};

export default nextConfig;
