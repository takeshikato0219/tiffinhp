"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CompanySection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="company" className="py-20 relative overflow-hidden z-10">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-light via-white to-gray-light" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-light/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

            <div className="space-y-8 mb-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">多数の特許を保有・特許ライセンス業</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  TIFFIN株式会社は、AI技術に関する<strong>多数の特許を保有</strong>しており、
                  <strong>特許ライセンス業</strong>も展開しています。<strong>多数のパテントを同時に申請するサービス</strong>も提供可能です。
                  AI開発・AIウェブ開発・AIアプリケーション開発における独自のAI技術とノウハウを活かし、
                  お客様のビジネスを支援します。新潟県三条市に本社を構え、全国のお客様にサービスを提供しています。
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">包括的なAI開発サービス</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>AI開発・AIウェブ開発・AIアプリケーション開発</strong>を専門とし、
                  <strong>音声AI・画像AI・チャットAIの開発・サポート</strong>、<strong>エッジ処理・画像処理</strong>から、
                  <strong>AIコンサルティング</strong>、<strong>プロデュース</strong>まで一貫して対応可能です。
                  <strong>ITシステム開発にAIを組み込んだ開発</strong>を軸に、お客様のニーズに合わせた最適なソリューションを提供します。
                  AI開発において豊富な実績があり、AI系のアプリケーション開発、エッジ処理、画像処理も多数手がけています。
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">本社所在地：新潟県三条市</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  TIFFIN株式会社の本社は<strong>新潟県三条市石上１丁目10番33号</strong>にあります。
                  新潟県三条市を拠点に、全国のお客様にAI開発・AIウェブ開発・AIアプリケーション開発のサービスを提供しています。
                  お気軽にお問い合わせください。
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
  );
}
