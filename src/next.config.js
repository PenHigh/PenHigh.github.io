/** @type {import('next').NextConfig} */

const BASE_PATH = process.env.NEXTJS_BASE_PATH

const nextConfig = {
  reactStrictMode: true,
  basePath: BASE_PATH ? BASE_PATH : ""
}

module.exports = nextConfig
