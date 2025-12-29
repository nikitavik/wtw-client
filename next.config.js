// Use an env var so rewrites work across environments without code changes.
const backendUrl = process.env.BACKEND_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match incoming requests to /api/*
        destination: `${backendUrl}/:path*`, // Proxy to your backend server
      },
    ];
  },
};

module.exports = nextConfig;
