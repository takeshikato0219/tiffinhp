import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス | TIFFIN株式会社 - AI開発・AIウェブ開発・AIアプリケーション開発",
  description: "TIFFIN株式会社が提供するサービス一覧。協業型SaaS開発モデル、AI開発、AIウェブ開発、AIアプリケーション開発、AIコンサルティング、AIサポート、特許申請サービスなど、お客様のビジネスを支援する包括的なAIソリューションを提供します。",
  keywords: [
    "AI開発",
    "AIウェブ開発",
    "AIアプリケーション開発",
    "協業型SaaS開発",
    "AIコンサルティング",
    "AIサポート",
    "特許申請",
    "音声AI",
    "画像AI",
    "エッジ処理",
    "画像処理",
    "新潟AI",
    "三条市AI",
  ],
  openGraph: {
    title: "サービス | TIFFIN株式会社",
    description: "協業型SaaS開発モデル、AI開発、AIウェブ開発、AIアプリケーション開発、AIコンサルティング、AIサポート、特許申請サービスなど、包括的なAIソリューションを提供。",
    url: "https://www.tiffin.one/services",
    type: "website",
    locale: "ja_JP",
  },
  alternates: {
    canonical: "https://www.tiffin.one/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

