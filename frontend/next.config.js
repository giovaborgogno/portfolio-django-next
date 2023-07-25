/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/media/:path*',
        destination: `${process.env.NEXT_PUBLIC_URL_API}/media/:path*`,
      },
      {
        source: '/next-api/:path*',
        destination: '/api/:path*'
      }
    ];
  },

}

module.exports = nextConfig
