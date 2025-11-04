/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['zybitmjhekrqbuuxusso.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zybitmjhekrqbuuxusso.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
