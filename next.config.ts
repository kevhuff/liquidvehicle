/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // create a static site
  trailingSlash: true,      
  images: { unoptimized: true } // exporting
  // IMPORTANT: do NOT set basePath or assetPrefix here.
};
export default nextConfig;
