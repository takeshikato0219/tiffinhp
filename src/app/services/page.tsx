"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BackgroundCircles from "@/components/BackgroundCircles";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServicesPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: section1Ref, isVisible: section1Visible } = useScrollAnimation();
  const { ref: section2Ref, isVisible: section2Visible } = useScrollAnimation();
  const { ref: section3Ref, isVisible: section3Visible } = useScrollAnimation();
  const { ref: section4Ref, isVisible: section4Visible } = useScrollAnimation();
  const { ref: section5Ref, isVisible: section5Visible } = useScrollAnimation();

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <BackgroundCircles />
      <Header />
      <section className="pt-32 pb-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "サービス", href: "/services" }]} />
          
          {/* Hero Section */}
          <div
            ref={heroRef}
            className={`text-center mb-16 transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              サービス
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              TIFFIN株式会社は、AI開発・AIウェブ開発・AIアプリケーション開発を専門とし、
              お客様のビジネスを支援する包括的なAIソリューションを提供します。
            </p>
            {/* Hero Image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-teal-dark to-teal-light">
              <Image
                src="/images/jBSGouKc.jpg"
                alt="TIFFIN株式会社のAI開発サービス"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/70 to-transparent flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <p className="text-2xl md:text-3xl font-bold mb-2">包括的なAIソリューション</p>
                  <p className="text-base md:text-lg">お客様のビジネスを支援するAI開発サービス</p>
                </div>
              </div>
            </div>
          </div>

          {/* 協業型SaaS開発モデル */}
          <div
            ref={section1Ref}
            className={`mb-20 transition-all duration-700 ${
              section1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-teal-dark to-teal-light rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">協業型SaaS開発モデル</h2>
              <p className="text-base md:text-lg mb-6 leading-relaxed">
                通常6,000万円規模のソフトウェア開発を約1/3まで圧縮。販売前提のSaaSとして設計することで、
                初期開発費を大幅に削減し、開発後はパートナーとして共に販売・成長させていくモデルです。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2">✓ 開発費の大幅削減</h3>
                  <p className="text-sm">通常6,000万円規模の開発を約1/3（約2,000万円）まで圧縮</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2">✓ パートナーシップ</h3>
                  <p className="text-sm">開発後はパートナーとして共に販売・成長。長期的なパートナーシップを構築</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2">✓ 市場販売可能なプロダクト</h3>
                  <p className="text-sm">市場に販売できるSaaSとして設計。複数の企業で利用できる汎用的なソリューション</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2">✓ 特許申請も可能</h3>
                  <p className="text-sm">協業型SaaS開発と同時に特許の申請も可能。多数のパテントを同時に申請するサービスも対応</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-white text-teal-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                協業型SaaS開発について詳しく知る
              </Link>
            </div>
          </div>

          {/* AI開発サービス */}
          <div
            ref={section2Ref}
            className={`mb-20 transition-all duration-700 ${
              section2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">AI開発サービス</h2>
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 to-teal-light">
                <Image
                  src="/images/HCaiUayJ.jpg"
                  alt="AI開発サービス - TIFFIN株式会社"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/60 to-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-teal-dark rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AIウェブ開発</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AIを活用したWebアプリケーション・Webサイトの開発を専門としています。
                  最新のAI技術を組み込んだWebソリューションを提供し、ユーザー体験を向上させるAI機能を実装します。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• AIチャットボット統合</li>
                  <li>• パーソナライゼーション機能</li>
                  <li>• レコメンデーションシステム</li>
                  <li>• 自然言語処理機能</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-teal-dark rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AIアプリケーション開発</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AI系のアプリケーション開発を得意としています。モバイルアプリ・デスクトップアプリなど、
                  あらゆるプラットフォームでのAIアプリケーション開発に対応。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• iOS/Androidアプリ開発</li>
                  <li>• デスクトップアプリケーション</li>
                  <li>• クロスプラットフォーム開発</li>
                  <li>• AI機能統合</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-teal-dark rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ITシステム開発とAI</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ITシステムの開発にAIを組み込んだ開発を軸にしています。既存のITシステムにAI機能を統合する開発や、
                  AIを中核とした新規ITシステム開発まで対応可能です。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 既存システムへのAI統合</li>
                  <li>• AI中核システム開発</li>
                  <li>• データ分析システム</li>
                  <li>• 業務効率化システム</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AIサポートサービス */}
          <div
            ref={section3Ref}
            className={`mb-20 transition-all duration-700 ${
              section3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">AIサポートサービス</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-light rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">音声AIサポート</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  音声認識・音声合成を活用したAIエージェント開発から、コールセンター向けakari voiceまで対応。
                  自然な音声対話を実現するAI技術を提供します。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 音声認識システム</li>
                  <li>• 音声合成（TTS）</li>
                  <li>• コールセンターAI</li>
                  <li>• 音声対話システム</li>
                </ul>
              </div>

              <div className="bg-gray-light rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">画像AIサポート</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  画像認識・画像生成AIの開発・実装から、コンピュータビジョン技術を活用したソリューションまで対応。
                  YOLOを用いたリアルタイム物体検出システムの開発も可能です。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 画像認識システム</li>
                  <li>• YOLO物体検出</li>
                  <li>• 防犯カメラシステム</li>
                  <li>• 画像生成AI</li>
                </ul>
              </div>

              <div className="bg-gray-light rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">エッジ処理・画像処理</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  エッジコンピューティング環境でのAI処理、リアルタイムデータ処理、エッジデバイス向けの最適化など、
                  エッジ処理に関する包括的なサポートを提供します。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• エッジAI処理</li>
                  <li>• リアルタイム画像処理</li>
                  <li>• エッジデバイス最適化</li>
                  <li>• 低遅延AI処理</li>
                </ul>
              </div>

              <div className="bg-gray-light rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">チャットAIサポート</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  自然言語処理を活用したチャットボット開発から、高度な対話AIシステムまで対応。
                  お客様のビジネスに最適なチャットAIソリューションを提供します。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• チャットボット開発</li>
                  <li>• 対話AIシステム</li>
                  <li>• 自然言語処理</li>
                  <li>• カスタマーサポートAI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AIコンサルティング */}
          <div
            ref={section4Ref}
            className={`mb-20 transition-all duration-700 ${
              section4Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">AIコンサルティング・プロデュース</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-yellow rounded-xl p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AIコンサルティング</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AI導入戦略の立案から実装まで、お客様のビジネスに最適なAI活用方法を提案・支援します。
                  業界や規模に応じたカスタマイズされたAIソリューションを提供します。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• AI導入戦略の立案</li>
                  <li>• ビジネス課題の分析</li>
                  <li>• AI技術の選定</li>
                  <li>• ROI試算・効果測定</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-yellow rounded-xl p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AIプロデュース</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AIプロジェクトの企画から開発、運用まで一貫してプロデュースします。
                  お客様のビジネス目標を達成するための包括的なAIソリューションを提供します。
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• プロジェクト企画</li>
                  <li>• 開発管理</li>
                  <li>• 運用サポート</li>
                  <li>• 継続的な改善</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 特許申請サービス */}
          <div
            ref={section5Ref}
            className={`mb-12 transition-all duration-700 ${
              section5Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">特許申請サービス</h2>
            <div className="bg-gradient-to-br from-gray-light to-white rounded-xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TIFFIN株式会社は、AI技術に関する多数の特許を保有しており、特許ライセンス業も展開しています。
                多数のパテントを同時に申請するサービスも提供しており、お客様の特許戦略をサポートします。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="font-bold text-gray-900 mb-2">特許申請サポート</h3>
                  <p className="text-sm text-gray-600">AI技術に関する特許申請をサポートします</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="font-bold text-gray-900 mb-2">多数同時申請</h3>
                  <p className="text-sm text-gray-600">多数のパテントを同時に申請するサービス</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="font-bold text-gray-900 mb-2">特許ライセンス</h3>
                  <p className="text-sm text-gray-600">保有する特許技術のライセンス提供</p>
                </div>
              </div>
              <Link
                href="/patents"
                className="inline-block bg-teal-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-dark/90 transition-colors"
              >
                保有特許について詳しく見る
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              お客様のビジネスに最適なAIソリューションを提供します
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              まずはお気軽にお問い合わせください。お客様のご要望に合わせた最適なソリューションをご提案いたします。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal-dark text-white px-8 py-4 rounded-lg font-medium hover:bg-teal-dark/90 transition-colors text-lg"
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

