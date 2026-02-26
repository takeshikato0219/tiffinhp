"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CompanyPage() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <main className="min-h-screen flex flex-col relative bg-white">
      <Header />
      <section className="pt-32 pb-20 relative overflow-hidden z-10 flex-grow">
        {/* Background Geometric Shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-light via-white to-gray-light" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-light/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "会社情報", href: "/company" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div
              ref={leftRef}
              className={`transition-all duration-700 ${
                leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-lg font-bold text-gray-900 tracking-wider mb-8">
                COMPANY<span className="inline-block w-2 h-2 bg-yellow rounded-full ml-1" />
              </h2>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
                AI開発の専門企業として、
                <br />
                ITシステム開発とAIを融合したソリューションを提供します。
              </h3>

              {/* Company Image */}
              <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-teal-dark to-teal-light">
                <Image
                  src="/images/CN5ktcFf.jpg"
                  alt="TIFFIN株式会社 - AI開発の専門企業"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/60 to-transparent flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <p className="text-xl md:text-2xl font-bold mb-2">TIFFIN株式会社</p>
                    <p className="text-sm md:text-base">AI開発・AIウェブ開発・AIアプリケーション開発の専門企業</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">多数の特許を保有・特許ライセンス業</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    TIFFIN株式会社は、AI技術に関する<strong>多数の特許を保有</strong>しており、
                    <strong>特許ライセンス業</strong>も展開しています。<strong>多数のパテントを同時に申請するサービス</strong>も提供可能です。
                    AI開発・AIウェブ開発・AIアプリケーション開発における独自のAI技術とノウハウを活かし、
                    お客様のビジネスを支援します。新潟県三条市に本社を構え、全国のお客様にサービスを提供しています。
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    現在、有効特許26件、審査中4件、実用新案3件の特許を保有しており、
                    AI画像認識、防犯カメラシステム、SNS監視システム、音声処理、自動通信システムなど、
                    幅広い分野で特許技術を有しています。これらの特許技術を活用したライセンス提供により、
                    お客様のビジネス成長を支援します。
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">包括的なAI開発サービス</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    <strong>AI開発・AIウェブ開発・AIアプリケーション開発</strong>を専門とし、
                    <strong>音声AI・画像AI・チャットAIの開発・サポート</strong>、<strong>エッジ処理・画像処理</strong>から、
                    <strong>AIコンサルティング</strong>、<strong>プロデュース</strong>まで一貫して対応可能です。
                    <strong>ITシステム開発にAIを組み込んだ開発</strong>を軸に、お客様のニーズに合わせた最適なソリューションを提供します。
                    AI開発において豊富な実績があり、AI系のアプリケーション開発、エッジ処理、画像処理も多数手がけています。
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    具体的には、YOLOを用いたリアルタイム物体検出システム、防犯カメラシステムによる人物の繰り返し出現検知システム、
                    音声合成（TTS）サービス、SNS監視AIシステムなど、多様なAIソリューションを開発・提供しています。
                    また、エッジコンピューティング環境でのAI処理にも対応し、低遅延・高精度なAIシステムの実現を可能にしています。
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">協業型SaaS開発モデル</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    TIFFIN株式会社は、<strong>協業型SaaS開発モデル</strong>を提供しています。
                    通常6,000万円規模のソフトウェア開発を約1/3まで圧縮し、販売前提のSaaSとして設計することで、
                    初期開発費を大幅に削減できます。開発後はパートナーとして共に販売・成長させていくモデルで、
                    長期的なパートナーシップを構築します。
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    このモデルにより、市場に販売できるSaaSとして設計され、複数の企業で利用できる汎用的なソリューションを開発します。
                    協業型SaaS開発と同時に特許の申請も可能で、多数のパテントを同時に申請するサービスも対応可能です。
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">AI Workerシリーズの開発実績</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    TIFFIN株式会社は、領域に特化したAIプロダクト「AI Workerシリーズ」を提供しています。
                    <strong>TimeWorks</strong>（勤怠管理・シフト管理）、<strong>アキヤー</strong>（AI空き家探索）、
                    <strong>CARSELL</strong>（自動車販売業界向け営業支援AI）、<strong>BuzzShield</strong>（SNS監視AI）、
                    <strong>akari voice</strong>（音声合成サービス）、<strong>AI DRIVE</strong>（ドライブスルーAI）など、様々な業界・領域に特化したAIプロダクトを開発・リリースしています。
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    これらのプロダクトは、実際のビジネス課題を解決するために開発され、多くの企業で活用されています。
                    新潟県三条市を拠点としながらも、全国のお客様にサービスを提供し、AI技術を活用した地域社会への貢献も行っています。
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">本社所在地：新潟県三条市</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    TIFFIN株式会社の本社は<strong>新潟県三条市石上１丁目10番33号</strong>にあります。
                    新潟県三条市を拠点に、全国のお客様にAI開発・AIウェブ開発・AIアプリケーション開発のサービスを提供しています。
                    三条駅より車で約10分のアクセスしやすい立地にあり、お客様のご来社もお待ちしております。
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    新潟県三条市は、ものづくりの街として知られており、TIFFIN株式会社もその伝統を受け継ぎながら、
                    AI技術という新しい技術で地域の産業発展に貢献しています。三条市を中心とした新潟県内の企業様への
                    AI導入支援も積極的に行っており、地域密着型のAI開発企業として活動しています。
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">今後の展望</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    TIFFIN株式会社は、グローバルAIカンパニーを目指し、人とAIの協働を目指す企業として成長を続けています。
                    AI技術の進化に合わせて、常に最新の技術をキャッチアップし、お客様に最適なAIソリューションを提供していきます。
                    また、新潟県三条市を拠点としながらも、全国・世界のお客様にサービスを提供し、
                    AI技術を活用した社会課題の解決に取り組んでいきます。
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-block text-sm font-medium text-gray-900 hover:text-teal-dark transition-colors link-underline"
              >
                お問い合わせはこちら
              </Link>
            </div>

            {/* Company Information */}
            <div
              ref={rightRef}
              className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">会社概要</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-gray-900 mb-1">会社名</dt>
                  <dd className="text-gray-700">TIFFIN株式会社</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 mb-1">代表者名</dt>
                  <dd className="text-gray-700">加藤健資 (Takeshi Kato)</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 mb-1">本社所在地</dt>
                  <dd className="text-gray-700">
                    〒955-0084<br />
                    新潟県三条市石上１丁目10番33号
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 mb-1">設立</dt>
                  <dd className="text-gray-700">2024年10月10日</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 mb-1">資本金</dt>
                  <dd className="text-gray-700">6,000万円</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 mb-1">業務内容</dt>
                  <dd className="text-gray-700">特許ライセンス業・AI開発</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 mb-1">従業員数</dt>
                  <dd className="text-gray-700">5名</dd>
                </div>
                <div>
                  <dt className="font-bold text-gray-900 mb-1">電話番号</dt>
                  <dd className="text-gray-700">
                    <a href="tel:070-9133-6957" className="hover:text-teal-dark transition-colors">
                      070-9133-6957
                    </a>
                  </dd>
                </div>
              </dl>

              {/* Map or Location Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 mb-2">アクセス</h4>
                <p className="text-xs text-gray-600">
                  新潟県三条市石上１丁目10番33号<br />
                  三条駅より車で約10分
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

