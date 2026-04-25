/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
export default nextConfig;
