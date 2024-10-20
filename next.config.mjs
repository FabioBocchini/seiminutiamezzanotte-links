/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/seiminutiamezzanotte-links': undefined,
    images: {
        unoptimized: true
    },
    optimizeFonts: false
}

export default nextConfig
