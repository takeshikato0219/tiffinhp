"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PatentSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();

  return (
    <section id="patent" className="py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <div
          ref={headingRef}
          className={`bg-yellow/30 rounded-xl p-5 md:p-6 mb-12 transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                特許ライセンス業・多数の特許を保有
              </h2>
              <span className="w-1.5 h-1.5 bg-teal-dark rounded-full flex-shrink-0"></span>
              <p className="text-xs md:text-sm text-gray-700">
                特許に関するお問い合わせはこちら
              </p>
            </div>
            <a
              href="/patents"
              className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-900 hover:text-teal-dark transition-colors whitespace-nowrap"
            >
              READ MORE
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={card1Ref}
            className={`bg-gray-light rounded-xl p-8 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
              card1Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">多数の特許を保有</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              AI開発・AIウェブ開発・AIアプリケーション開発に関する多数の特許を保有。音声AI・画像AI・チャットAIなどのAI技術に関する豊富な特許ポートフォリオを有しています。
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow mr-2">•</span>
                <span>AI開発に関する特許を多数保有</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-2">•</span>
                <span>AIウェブ開発技術の特許</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-2">•</span>
                <span>AIアプリケーション開発の特許</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-2">•</span>
                <span>音声AI・画像AI・チャットAIの特許</span>
              </li>
            </ul>
          </div>

          <div
            ref={card2Ref}
            className={`bg-gray-light rounded-xl p-8 transition-all duration-500 delay-200 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] tab-hover ${
              card2Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">特許ライセンス業・パテント申請サービス</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              特許ライセンス業も展開。保有する特許技術のライセンス提供により、お客様のビジネスを支援します。多数のパテントを同時に申請するサービスも提供しており、お客様の特許戦略をサポートします。
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow mr-2">•</span>
                <span>特許ライセンスの提供</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-2">•</span>
                <span>多数のパテントを同時に申請するサービス</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-2">•</span>
                <span>特許戦略のコンサルティング</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-2">•</span>
                <span>AI技術に関する特許ポートフォリオの活用</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            特許ライセンス業やパテント申請サービスに関するお問い合わせは、
            お気軽にご連絡ください。
          </p>
          <a
            href="/patents"
            className="inline-block bg-teal-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-dark/90 transition-colors"
          >
            保有特許について
          </a>
        </div>
      </div>
    </section>
  );
}

