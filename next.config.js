/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const REPO_NAME = 'PortfolioV3';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd && REPO_NAME ? `/${REPO_NAME}` : '',
  assetPrefix: isProd && REPO_NAME ? `/${REPO_NAME}/` : '',
};

module.exports = nextConfig;
