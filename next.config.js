/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Avoid tracing problematic deps on Vercel; keep them external in RSC/server
    serverComponentsExternalPackages: [
      '@keystonehq/sdk',
      'qrcode.react',
      'react-qr-reader'
    ],
  },
  // Remove custom tracing excludes; rely on Next 14.2.x defaults
  // Webpack optimizations
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Vercel deployment optimizations
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['localhost'],
    unoptimized: false,
  }
}

module.exports = nextConfig
