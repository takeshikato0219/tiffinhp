import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BackgroundCircles from "@/components/BackgroundCircles";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIでクマを検知し被害を防ぐ 三条市のTIFFINがクマ検知システム「AIVIS」を開発・導入 | ブログ | TIFFIN株式会社",
  description: "TIFFIN株式会社は、AIの画像認識技術を活用したクマ検知システム「AIVIS」を開発し、三条市に導入しました。4K高精度カメラを使用し、約95%の精度でクマを検知。24時間365日監視可能で、AIがクマの姿や行動パターンを学習し、同じクマが繰り返し検知された場合に通知するシステムです。地域のクマ被害を防ぐためのAI技術を活用したソリューションとして注目されています。",
  keywords: [
    "AIVIS",
    "クマ検知システム",
    "AI画像認識",
    "YOLO",
    "物体検出",
    "三条市",
    "新潟県三条市",
    "AI開発",
    "TIFFIN株式会社",
    "防犯カメラシステム",
    "エッジ処理",
    "画像処理",
    "AI技術",
  ],
  openGraph: {
    title: "AIでクマを検知し被害を防ぐ 三条市のTIFFINがクマ検知システム「AIVIS」を開発・導入",
    description: "TIFFIN株式会社は、AIの画像認識技術を活用したクマ検知システム「AIVIS」を開発し、三条市に導入しました。4K高精度カメラを使用し、約95%の精度でクマを検知。24時間365日監視可能で、AIがクマの姿や行動パターンを学習し、同じクマが繰り返し検知された場合に通知するシステムです。",
    url: "https://www.tiffin.one/news/aivis-bear-detection-system",
    type: "article",
    locale: "ja_JP",
    images: [
      {
        url: "/images/CN5ktcFf.jpg",
        width: 1200,
        height: 630,
        alt: "AIVIS クマ検知システム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIでクマを検知し被害を防ぐ 三条市のTIFFINがクマ検知システム「AIVIS」を開発・導入",
    description: "AIの画像認識技術を活用したクマ検知システム「AIVIS」を開発し、三条市に導入。約95%の精度でクマを検知。24時間365日監視可能。",
  },
  alternates: {
    canonical: "https://www.tiffin.one/news/aivis-bear-detection-system",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "AIでクマを検知し被害を防ぐ 三条市のTIFFINがクマ検知システム「AIVIS」を開発・導入",
  image: "https://www.tiffin.one/images/CN5ktcFf.jpg",
  datePublished: "2025-11-11",
  dateModified: "2025-11-11",
  author: {
    "@type": "Organization",
    name: "TIFFIN株式会社",
  },
  publisher: {
    "@type": "Organization",
    name: "TIFFIN株式会社",
    logo: {
      "@type": "ImageObject",
      url: "https://www.tiffin.one/logo.png",
    },
  },
  description: "TIFFIN株式会社は、AIの画像認識技術を活用したクマ検知システム「AIVIS」を開発し、三条市に導入しました。4K高精度カメラを使用し、約95%の精度でクマを検知。24時間365日監視可能で、AIがクマの姿や行動パターンを学習し、同じクマが繰り返し検知された場合に通知するシステムです。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.tiffin.one/news/aivis-bear-detection-system",
  },
};

export default function AIVISArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd, null, 0) }}
      />
      <main className="min-h-screen flex flex-col relative bg-white">
        <Header />
        <article className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white relative z-10 flex-grow overflow-x-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Breadcrumb
              items={[
                { label: "ブログ", href: "/news" },
                { label: "AIVIS クマ検知システム", href: "/news/aivis-bear-detection-system" },
              ]}
            />

            <header className="mb-6 sm:mb-8">
              <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2 sm:gap-4">
                <time className="text-xs sm:text-sm text-gray-600">2025.11.11</time>
                <span className="text-xs px-2 py-1 bg-yellow text-gray-900 rounded">ニュース</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 px-0" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                AIでクマを検知し被害を防ぐ 三条市のTIFFINがクマ検知システム「AIVIS」を開発・導入
              </h1>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"># AIVIS</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"># AI</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"># 画像認識</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"># 三条市</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"># クマ検知</span>
              </div>
            </header>

            <div className="relative w-full h-48 sm:h-64 md:h-96 mb-6 sm:mb-8 rounded-lg overflow-hidden bg-gray-light">
              <Image
                src="/images/CN5ktcFf.jpg"
                alt="AIVIS クマ検知システム - TIFFIN株式会社"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                TIFFIN株式会社は、AIの画像認識技術を活用したクマ検知システム「AIVIS」を開発し、三条市に導入しました。
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">高精度なAI画像認識技術</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                AIVISは、4K高精度カメラを使用し、約95%の精度でクマを検知するシステムです。YOLO（You Only Look Once）と呼ばれる最新の物体検出アルゴリズムを活用し、リアルタイムでクマの姿を識別します。
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">24時間365日監視可能</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                システムは24時間365日監視が可能で、AIがクマの姿や行動パターンを学習します。同じクマが繰り返し検知された場合、自動的に通知を送信する機能も備えています。
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">地域のクマ被害を防ぐ</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                三条市では、クマによる農作物被害や人的被害が課題となっていました。AIVISの導入により、クマの出現を早期に検知し、適切な対策を講じることが可能になりました。地域のクマ被害を防ぐためのAI技術を活用したソリューションとして注目されています。
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">エッジ処理による高速処理</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                AIVISは、エッジコンピューティング環境でのAI処理を実現しています。これにより、データをクラウドに送信することなく、現地で高速に処理することが可能です。通信コストの削減とプライバシー保護の両立を実現しています。
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">今後の展開</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                TIFFIN株式会社は、AIVISの技術を活用し、他の地域への展開も検討しています。AI技術を活用した地域課題の解決に取り組んでいきます。
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/news"
                className="inline-block text-sm font-medium text-gray-900 hover:text-teal-dark transition-colors link-underline"
              >
                ← ブログ一覧に戻る
              </Link>
            </div>
          </div>
        </article>
        <Footer />
        <BackgroundCircles />
      </main>
    </>
  );
}

