/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match incoming requests to /api/*
        destination: 'http://localhost:3000/:path*', // Proxy to your backend server
      },
    ];
  },
}

module.exports = nextConfig
