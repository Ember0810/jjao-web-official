/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//   output: 'export',
//   basePath: isProd ? '/jjao-web-official' : '',
//   assetPrefix: isProd ? '/jjao-web-official' : '',
// };

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/jjao-web-official',
  assetPrefix: '/jjao-web-official'
};

module.exports = nextConfig;
