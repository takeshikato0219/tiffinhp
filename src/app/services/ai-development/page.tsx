import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI開発サービス | AIウェブ開発・AIアプリケーション開発 | TIFFIN株式会社",
  description: "TIFFIN株式会社はAI開発・AIウェブ開発・AIアプリケーション開発を専門としています。最新のAI技術を組み込んだWebソリューション、モバイルアプリ、ITシステム開発まで対応。",
  keywords: "AI開発,AIウェブ開発,AIアプリケーション開発,ITシステム開発,新潟AI",
};

export default function AIDevelopmentPage() {
  return (
    <main className="min-h-screen relative">
      <BackgroundCircles />
      <Header />
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <Breadcrumb items={[{ label: "サービス", href: "/services" }, { label: "AI開発", href: "/services/ai-development" }]} />
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              専門領域：AI開発
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              TIFFIN株式会社は、AI開発・AIウェブ開発・AIアプリケーション開発を専門とする企業です。
              最新のAI技術を組み込んだソリューションを提供し、お客様のビジネスを支援します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-teal-dark rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AIウェブ開発</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AIを活用したWebアプリケーション・Webサイトの開発を専門としています。最新のAI技術を組み込んだWebソリューションを提供し、ユーザー体験を向上させるAI機能を実装します。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AIチャットボット統合</li>
                <li>• パーソナライゼーション機能</li>
                <li>• レコメンデーションシステム</li>
                <li>• 自然言語処理機能</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-teal-dark rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AIアプリケーション開発</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI系のアプリケーション開発を得意としています。モバイルアプリ・デスクトップアプリなど、あらゆるプラットフォームでのAIアプリケーション開発に対応。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• iOS/Androidアプリ開発</li>
                <li>• デスクトップアプリケーション</li>
                <li>• クロスプラットフォーム開発</li>
                <li>• AI機能統合</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-teal-dark rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ITシステム開発とAI</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ITシステムの開発にAIを組み込んだ開発を軸にしています。既存のITシステムにAI機能を統合する開発や、AIを中核とした新規ITシステム開発まで対応可能です。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 既存システムへのAI統合</li>
                <li>• AI中核システム開発</li>
                <li>• データ分析システム</li>
                <li>• 業務効率化システム</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-light rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              AI開発の実績と強み
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">豊富な実績</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI開発・AIウェブ開発・AIアプリケーション開発において豊富な実績があります。
                  様々な業界・規模のお客様にAIソリューションを提供してきました。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">最新技術への対応</h3>
                <p className="text-gray-700 leading-relaxed">
                  最新のAI技術を常にキャッチアップし、お客様のビジネスに最適なAI技術を提案・実装します。
                  機械学習、深層学習、自然言語処理など、幅広いAI技術に対応可能です。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block bg-teal-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-dark/90 transition-colors"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

