/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force static export
  output: 'export',
  // Serve routes with trailing slashes (e.g. /about/)
  trailingSlash: true,
};

export default nextConfig;
