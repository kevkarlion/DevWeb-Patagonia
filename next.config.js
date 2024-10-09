/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
};

module.exports = nextConfig;
