import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | TIFFIN株式会社 - AI開発の専門企業",
  description: "TIFFIN株式会社の会社概要。AI開発・AIウェブ開発・AIアプリケーション開発の専門企業として、ITシステム開発とAIを融合したソリューションを提供。新潟県三条市に本社を構え、多数の特許を保有しています。代表者：加藤健資、資本金：6,000万円、従業員数：5名。",
  keywords: [
    "TIFFIN株式会社",
    "会社概要",
    "AI開発",
    "AIウェブ開発",
    "AIアプリケーション開発",
    "新潟AI",
    "三条市",
    "特許ライセンス業",
    "新潟県三条市",
    "AI開発会社",
    "AI開発企業",
  ],
  openGraph: {
    title: "会社概要 | TIFFIN株式会社",
    description: "TIFFIN株式会社の会社概要。AI開発・AIウェブ開発・AIアプリケーション開発の専門企業として、ITシステム開発とAIを融合したソリューションを提供。新潟県三条市に本社を構え、多数の特許を保有。",
    url: "https://ai-shift.com/company",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TIFFIN株式会社 - 会社概要",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "会社概要 | TIFFIN株式会社",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発の専門企業。新潟県三条市に本社を構え、多数の特許を保有。",
  },
  alternates: {
    canonical: "https://ai-shift.com/company",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

