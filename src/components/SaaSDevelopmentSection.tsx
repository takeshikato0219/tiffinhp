"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SaaSDevelopmentSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <section id="saas-development" className="py-20 bg-gradient-to-br from-gray-light via-white to-gray-light relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <div
          ref={sectionRef}
          className={`bg-yellow/30 rounded-xl p-5 md:p-6 mb-12 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                協業型SaaS開発モデル
              </h2>
              <span className="w-1.5 h-1.5 bg-teal-dark rounded-full flex-shrink-0"></span>
              <p className="text-xs md:text-sm text-gray-700">
                協業型SaaS開発に関するお問い合わせはこちら
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-900 hover:text-teal-dark transition-colors whitespace-nowrap"
            >
              READ MORE
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>

        <div
          ref={cardRef}
          className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-700 hover:shadow-2xl ${
            cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            {/* Main Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                通常6,000万円規模のソフトウェア開発を約1/3まで圧縮
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                販売前提のSaaSとして設計することで、初期開発費を約1/3まで圧縮。市場に販売できるプロダクトとして共同開発し、パートナーとして共に販売・成長させていくモデルです。
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-teal-dark/5 rounded-xl p-6 border border-teal-dark/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1 tab-hover group">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 group-hover:text-teal-dark transition-colors">
                  <span className="text-teal-dark text-2xl">✓</span>
                  開発費の大幅削減
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  通常6,000万円規模の開発を約1/3（約2,000万円）まで圧縮。
                </p>
              </div>

              <div className="bg-yellow/10 rounded-xl p-6 border border-yellow/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1 tab-hover">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 group-hover:text-yellow transition-colors">
                  <span className="text-yellow text-2xl">✓</span>
                  パートナーシップ
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  開発後はパートナーとして共に販売・成長。長期的なパートナーシップを構築します。
                </p>
              </div>

              <div className="bg-teal-dark/5 rounded-xl p-6 border border-teal-dark/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1 tab-hover group">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 group-hover:text-teal-dark transition-colors">
                  <span className="text-teal-dark text-2xl">✓</span>
                  市場販売可能なプロダクト
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  市場に販売できるSaaSとして設計。複数の企業で利用できる汎用的なソリューションを開発します。
                </p>
              </div>

              <div className="bg-yellow/10 rounded-xl p-6 border border-yellow/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1 tab-hover group">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 group-hover:text-yellow transition-colors">
                  <span className="text-yellow text-2xl">✓</span>
                  特許申請も可能
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  協業型SaaS開発と同時に特許の申請も可能。多数のパテントを同時に申請するサービスも対応可能です。
                </p>
              </div>
            </div>

            {/* Process Flow */}
            <div className="bg-gray-light rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">開発プロセス</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">
                    1
                  </div>
                  <p className="text-sm text-gray-700 font-medium">SaaS設計・開発</p>
                </div>
                <div className="text-teal-dark text-2xl">→</div>
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">
                    2
                  </div>
                  <p className="text-sm text-gray-700 font-medium">特許申請</p>
                </div>
                <div className="text-teal-dark text-2xl">→</div>
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">
                    3
                  </div>
                  <p className="text-sm text-gray-700 font-medium">共同販売・成長</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-yellow/10 border-l-4 border-yellow rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>※ すべての案件が対象となるわけではありません。</strong>
                協業型SaaS開発モデルが適用可能な案件については、お気軽にお問い合わせください。
                お客様の要件やビジネスモデルに応じて、最適な開発モデルをご提案いたします。
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-teal-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-dark/90 transition-all duration-300 hover:scale-105"
              >
                協業型SaaS開発について詳しく知る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

