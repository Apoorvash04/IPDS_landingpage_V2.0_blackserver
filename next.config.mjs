/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // let other machines on the LAN open the dev server (http://10.14.2.11:3000)
  allowedDevOrigins: ['10.14.2.11'],
};

export default nextConfig;
