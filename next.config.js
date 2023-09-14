/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.mds.yandex.net",
      },
      {
        hostname: "imagetmdb.com",
      },
    ],
  },
};

module.exports = nextConfig;
