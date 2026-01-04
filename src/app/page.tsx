import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import ServiceSection from "@/components/ServiceSection";
import SaaSDevelopmentSection from "@/components/SaaSDevelopmentSection";
import PatentSection from "@/components/PatentSection";
import PartnerSection from "@/components/PartnerSection";
import BlogSection from "@/components/BlogSection";
import RecruitSection from "@/components/RecruitSection";
import Footer from "@/components/Footer";
import BackgroundCircles from "@/components/BackgroundCircles";
import ChatWidget from "@/components/ChatWidget";

export const metadata = {
  title: "AI開発・特許ライセンス | TIFFIN株式会社 | 新潟AI開発の専門企業",
  description: "TIFFIN株式会社は、新潟県三条市に本社を構えるAI開発・AIウェブ開発・AIアプリケーション開発の専門企業です。音声AI・画像AI・チャットAIの開発・サポート、YOLOを用いた画像処理・物体検出、防犯カメラシステム開発、エッジ処理・画像処理、ITシステム開発、AIコンサルティング、特許ライセンス業を提供。TimeWorks、アキヤー、CARSELL、BuzzShieldなどのAIサービスをリリース。多数の特許を保有し、新潟AI開発のリーディングカンパニーとして実績多数。",
  keywords: [
    "AI開発",
    "AIウェブ開発",
    "AIアプリケーション開発",
    "新潟AI",
    "三条市AI",
    "AI開発会社",
    "AI開発企業",
    "新潟AI開発",
    "三条市AI開発",
    "音声AI",
    "画像AI",
    "YOLO",
    "画像処理",
    "エッジ処理",
    "防犯カメラシステム",
    "AIコンサルティング",
    "特許ライセンス",
  ],
  openGraph: {
    title: "AI開発・特許ライセンス | TIFFIN株式会社 | 新潟AI開発の専門企業",
    description: "新潟県三条市に本社を構えるAI開発・AIウェブ開発・AIアプリケーション開発の専門企業。音声AI・画像AI・チャットAIの開発・サポート、YOLO画像処理、防犯カメラシステム開発、エッジ処理、AIコンサルティング、特許ライセンス業を提供。",
    url: "https://www.tiffin.one",
    siteName: "TIFFIN株式会社",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Home() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://www.tiffin.one",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TIFFIN株式会社のAI開発サービス",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発、音声AI・画像AI・チャットAIの開発・サポート、エッジ処理・画像処理、AIコンサルティング、特許ライセンス",
    itemListElement: [
      {
        "@type": "Service",
        name: "AI開発・AIウェブ開発",
        description: "AIを活用したWebアプリケーション・Webサイトの開発",
        provider: {
          "@type": "Organization",
          name: "TIFFIN株式会社",
        },
        areaServed: {
          "@type": "Country",
          name: "Japan",
        },
      },
      {
        "@type": "Service",
        name: "AIアプリケーション開発",
        description: "モバイルアプリ・デスクトップアプリなど、あらゆるプラットフォームでのAIアプリケーション開発",
        provider: {
          "@type": "Organization",
          name: "TIFFIN株式会社",
        },
      },
      {
        "@type": "Service",
        name: "音声AIサポート",
        description: "音声認識・音声合成を活用したAIエージェント開発、コールセンター向けakari voice",
        provider: {
          "@type": "Organization",
          name: "TIFFIN株式会社",
        },
      },
      {
        "@type": "Service",
        name: "画像AIサポート・YOLO画像処理",
        description: "画像認識・画像生成AIの開発、YOLOを用いた画像処理・物体検出、防犯カメラシステム開発",
        provider: {
          "@type": "Organization",
          name: "TIFFIN株式会社",
        },
      },
      {
        "@type": "Service",
        name: "エッジ処理・画像処理",
        description: "エッジコンピューティング環境でのAI処理、リアルタイムデータ処理",
        provider: {
          "@type": "Organization",
          name: "TIFFIN株式会社",
        },
      },
      {
        "@type": "Service",
        name: "AIコンサルティング",
        description: "AI導入戦略の立案から実装まで、お客様のビジネスに最適なAI活用方法を提案",
        provider: {
          "@type": "Organization",
          name: "TIFFIN株式会社",
        },
      },
      {
        "@type": "Service",
        name: "特許ライセンス",
        description: "多数の特許を保有し、特許ライセンス業も展開。多数のパテントを同時に申請するサービスも提供",
        provider: {
          "@type": "Organization",
          name: "TIFFIN株式会社",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd, null, 0) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd, null, 0) }}
      />
      <main className="min-h-screen relative overflow-x-hidden w-full max-w-full">
        <BackgroundCircles />
        <Header />
        <HeroSection />
        <NewsSection />
        <ServiceSection />
        <SaaSDevelopmentSection />
        <PatentSection />
        <BlogSection />
        <PartnerSection />
        <RecruitSection />
        <Footer />
        <ChatWidget />
      </main>
    </>
  );
}
