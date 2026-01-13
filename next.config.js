/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],

  // 旧WordPressサイトからのリダイレクト設定
  async redirects() {
    return [
      // 旧HTMLページのリダイレクト
      { source: '/company.html', destination: '/company', permanent: true },
      { source: '/dounyuu.html', destination: '/services', permanent: true },
      { source: '/poricy.html', destination: '/', permanent: true },
      { source: '/license.html', destination: '/patents', permanent: true },
      { source: '/contact.php', destination: '/contact', permanent: true },
      { source: '/news.php', destination: '/news', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },

      // WordPress関連のリダイレクト（クエリパラメータ含む）
      { source: '/wp', destination: '/', permanent: true },
      { source: '/wp/', destination: '/', permanent: true },
      { source: '/wp/:path*', destination: '/', permanent: true },

      // feedのリダイレクト（サブパスも含む）
      { source: '/feed', destination: '/', permanent: true },
      { source: '/feed/', destination: '/', permanent: true },
      { source: '/feed/:path*', destination: '/', permanent: true },
      { source: '/comments/feed', destination: '/', permanent: true },
      { source: '/comments/feed/', destination: '/', permanent: true },
      { source: '/comments/feed/:path*', destination: '/', permanent: true },

      // hello-worldのリダイレクト（WordPressデフォルト投稿、サブパス含む）
      { source: '/hello-world', destination: '/news', permanent: true },
      { source: '/hello-world/', destination: '/news', permanent: true },
      { source: '/hello-world/:path*', destination: '/news', permanent: true },
    ];
  },
  images: {
    unoptimized: false, // 画像最適化を有効化
    formats: ['image/avif', 'image/webp'], // モダンな画像フォーマットを使用
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  // ページ速度最適化
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
