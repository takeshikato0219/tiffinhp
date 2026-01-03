import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LAUNCH | TIFFIN株式会社 - サービスリリース情報",
  description: "TIFFIN株式会社のサービスリリース情報。TimeWorks（勤怠管理・シフト管理）、アキヤー（AI空き家探索）、CARSELL（自動車販売業界向け営業支援AI）など、AI開発・AIウェブ開発・AIアプリケーション開発の最新サービスをご紹介します。",
  keywords: [
    "TIFFIN株式会社",
    "LAUNCH",
    "サービスリリース",
    "TimeWorks",
    "アキヤー",
    "CARSELL",
    "AI開発",
    "AIウェブ開発",
    "AIアプリケーション開発",
    "勤怠管理",
    "シフト管理",
    "空き家探索",
    "営業支援AI",
    "新潟AI",
  ],
  openGraph: {
    title: "LAUNCH | TIFFIN株式会社 - サービスリリース情報",
    description: "TIFFIN株式会社のサービスリリース情報。TimeWorks、アキヤー、CARSELLなど、AI開発・AIウェブ開発・AIアプリケーション開発の最新サービスをご紹介します。",
    url: "https://www.tiffin.one/launch",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TIFFIN株式会社 - サービスリリース",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LAUNCH | TIFFIN株式会社",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発の最新サービスリリース情報。",
  },
  alternates: {
    canonical: "https://www.tiffin.one/launch",
  },
};

export default function LaunchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

