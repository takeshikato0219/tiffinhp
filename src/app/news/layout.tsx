import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ | TIFFIN株式会社 - AI開発・サービスリリース情報",
  description: "TIFFIN株式会社のブログ。AI開発・AIウェブ開発・AIアプリケーション開発に関する最新情報、サービスリリース情報、技術記事をお届けします。TimeWorks、アキヤー、CARSELL、AIVIS（クマ検知システム）など、新潟県三条市のAI開発企業としての取り組みをご紹介。",
  keywords: [
    "TIFFIN株式会社",
    "ブログ",
    "AI開発ブログ",
    "AI技術ブログ",
    "サービスリリース",
    "TimeWorks",
    "アキヤー",
    "CARSELL",
    "AIVIS",
    "クマ検知システム",
    "AI画像認識",
    "AI開発",
    "AIウェブ開発",
    "新潟AI",
    "三条市",
    "新潟県三条市",
    "AIニュース",
    "AI技術記事",
  ],
  openGraph: {
    title: "ブログ | TIFFIN株式会社 - AI開発・サービスリリース情報",
    description: "TIFFIN株式会社のブログ。AI開発・AIウェブ開発・AIアプリケーション開発に関する最新情報、サービスリリース情報、技術記事をお届けします。",
    url: "https://www.tiffin.one/news",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TIFFIN株式会社 - AI開発ブログ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ブログ | TIFFIN株式会社",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発に関する最新情報、サービスリリース情報、技術記事。",
  },
  alternates: {
    canonical: "https://www.tiffin.one/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

