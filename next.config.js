/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    // Tambahkan domain image hosting Anda di sini
    // domains: ['yourdomain.com', 'cdn.yourdomain.com'],
  },
  // Optimasi untuk production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
