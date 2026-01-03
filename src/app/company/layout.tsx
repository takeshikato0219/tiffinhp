import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | TIFFIN株式会社 - AI開発の専門企業",
  description: "TIFFIN株式会社の会社概要。AI開発・AIウェブ開発・AIアプリケーション開発の専門企業として、ITシステム開発とAIを融合したソリューションを提供。新潟県三条市に本社を構え、有効特許26件、審査中4件、実用新案3件の特許を保有。協業型SaaS開発モデル、AI Workerシリーズ（TimeWorks、アキヤー、CARSELL、BuzzShield、akari voice）の開発実績。代表者：加藤健資、資本金：6,000万円、従業員数：5名。新潟AI開発のリーディングカンパニーとして、地域社会への貢献も積極的に行っています。",
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
    url: "https://www.tiffin.one/company",
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
    canonical: "https://www.tiffin.one/company",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

