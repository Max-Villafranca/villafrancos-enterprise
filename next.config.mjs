// next.config.mjs
/** @type {import('next').NextConfig} */

const repoName = 'villafrancos-enterprise'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: isProd ? `/${repoName}` : undefined,
    assetPrefix: isProd ? `/${repoName}/` : undefined,
    images: {
        unoptimized: true,
    },
}

export default nextConfig
