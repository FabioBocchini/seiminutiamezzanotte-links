/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath:
    process.env.NODE_ENV === 'production'
      ? '/seiminutiamezzanotte-links'
      : undefined,
}

export default nextConfig
