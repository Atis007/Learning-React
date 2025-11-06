/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.dummyjson.com'],
        remotePatterns: [new URL('https://cdn.dummyjson.com/images/products/')]
    }
};

export default nextConfig;
