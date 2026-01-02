import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEWS | TIFFIN株式会社 - AI開発・サービスリリース情報",
  description: "TIFFIN株式会社の最新ニュース・サービスリリース情報。TimeWorks、アキヤー、CARSELL、AIVIS（野良猫識別システム）など、AI開発・AIウェブ開発・AIアプリケーション開発の最新情報をお届けします。新潟県三条市のAI開発企業として、地域社会に貢献する取り組みもご紹介します。",
  keywords: [
    "TIFFIN株式会社",
    "NEWS",
    "ニュース",
    "サービスリリース",
    "TimeWorks",
    "アキヤー",
    "CARSELL",
    "AIVIS",
    "AI開発",
    "AIウェブ開発",
    "新潟AI",
    "三条市",
    "野良猫識別システム",
    "AI画像認識",
    "新潟県三条市",
    "AIニュース",
  ],
  openGraph: {
    title: "NEWS | TIFFIN株式会社 - AI開発・サービスリリース情報",
    description: "TIFFIN株式会社の最新ニュース・サービスリリース情報。AI開発・AIウェブ開発・AIアプリケーション開発の最新情報をお届けします。新潟県三条市のAI開発企業として、地域社会に貢献する取り組みもご紹介。",
    url: "https://ai-shift.com/news",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TIFFIN株式会社 - 最新ニュース",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEWS | TIFFIN株式会社",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発の最新ニュース・サービスリリース情報。",
  },
  alternates: {
    canonical: "https://ai-shift.com/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

