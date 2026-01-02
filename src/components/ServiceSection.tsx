"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServiceSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation();
  const { ref: edgeImageRef, isVisible: edgeImageVisible } = useScrollAnimation();

  return (
    <section id="service" className="py-20 bg-white relative z-10">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* SEO Optimized Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, calc(1.5rem + 5px))' }}>
            AI開発・AIウェブ開発・AIアプリケーション開発の専門企業として実績多数
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-6">
            ITシステム開発とAIを融合したソリューションを提供
            <br className="hidden md:block" />
            音声AI・画像AI・チャットAI・エッジ処理・画像処理の開発・サポートからコンサルティングまで
          </h2>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>AI開発・AIウェブ開発・AIアプリケーション開発</strong>を専門とし、<strong>ITシステム開発にAIを組み込んだ開発</strong>を軸に、お客様のビジネスに最適なソリューションを提供します。
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12">
          {/* AI Development */}
          <div
            ref={card1Ref}
            className={`transition-all duration-700 ${
              card1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="/services/ai-development"
              className="bg-white border-2 border-teal-dark rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] tab-hover h-full block"
            >
            <div className="bg-teal-dark text-white text-center py-4 md:py-5 flex-shrink-0">
              <p className="text-sm md:text-base">専門領域</p>
              <p className="text-lg md:text-xl font-bold">AI開発</p>
            </div>
            <div className="p-6 md:p-7 lg:p-8 space-y-4 md:space-y-5 flex-grow flex flex-col">
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">AIウェブ開発</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  AIを活用したWebアプリケーション・Webサイトの開発を専門としています。最新のAI技術を組み込んだWebソリューションを提供し、ユーザー体験を向上させるAI機能を実装します。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">AIアプリケーション開発</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  AI系のアプリケーション開発を得意としています。モバイルアプリ・デスクトップアプリなど、あらゆるプラットフォームでのAIアプリケーション開発に対応。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">ITシステム開発とAI</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  ITシステムの開発にAIを組み込んだ開発を軸にしています。既存のITシステムにAI機能を統合する開発や、AIを中核とした新規ITシステム開発まで対応可能です。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">エッジ処理</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  エッジ処理の開発・実装を得意としています。エッジコンピューティング環境でのAI処理、リアルタイムデータ処理、エッジデバイス向けの最適化など、エッジ処理に関する包括的なサポートを提供します。
                </p>
              </div>
            </div>
            </Link>
          </div>

          {/* AI Support Services */}
          <div
            ref={card2Ref}
            className={`transition-all duration-700 delay-200 ${
              card2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="/services/ai-support"
              className="bg-white border-2 border-teal-dark rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] tab-hover h-full block"
            >
            <div className="bg-teal-dark text-white text-center py-4 md:py-5 flex-shrink-0">
              <p className="text-sm md:text-base">包括的サポート</p>
              <p className="text-lg md:text-xl font-bold">AIサポート</p>
            </div>
            <div className="p-6 md:p-7 lg:p-8 space-y-4 md:space-y-5 flex-grow flex flex-col">
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">音声AIサポート</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  音声AIの開発・サポートを専門としています。音声認識・音声合成を活用したAIエージェント開発から、コールセンター向けakari voiceまで、音声AIに関するあらゆるサポートを提供します。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">画像AIサポート</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  画像AIの開発・サポートを手がけています。画像認識・画像生成AIの開発・実装から、コンピュータビジョン技術を活用したソリューションまで、画像AIに関する包括的なサポートを提供します。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">YOLOを用いた画像処理・物体検出</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  YOLO（You Only Look Once）を活用したリアルタイム物体検出システムの開発を専門としています。高精度な物体認識・人物検出・異常検知など、YOLO技術を活用した画像処理ソリューションを提供します。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">防犯カメラシステム開発</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  AIを活用した防犯カメラシステムの開発を手がけています。YOLOによる人物検出・繰り返し出現検知、異常行動検知、24時間365日の自動監視システムなど、セキュリティ強化に貢献する防犯カメラシステムを提供します。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-teal-dark transition-colors">画像処理</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  画像処理の開発・実装を専門としています。画像の前処理・後処理、画像解析、画像変換など、あらゆる画像処理技術に対応。高品質な画像処理ソリューションを提供します。
                </p>
              </div>
            </div>
            </Link>
          </div>

          {/* Consulting & Patent - Combined and Larger */}
          <div
            ref={card3Ref}
            className={`transition-all duration-700 delay-300 ${
              card3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="/services/consulting-patent"
              className="bg-white border-2 border-yellow rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] tab-hover h-full block"
            >
            <div className="bg-yellow text-gray-900 text-center py-4 md:py-5 flex-shrink-0">
              <p className="text-sm md:text-base">専門サービス</p>
              <p className="text-lg md:text-xl font-bold">コンサル・特許</p>
            </div>
            <div className="p-6 md:p-7 lg:p-8 space-y-4 md:space-y-5 flex-grow flex flex-col">
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-yellow transition-colors">AIコンサルティング</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  AI導入戦略の立案から実装まで、お客様のビジネスに最適なAI活用方法を提案・支援します。ITシステム開発とAIを組み合わせた最適なソリューションをコンサルティングします。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-yellow transition-colors">プロデュース</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  AIプロジェクトの企画から開発、運用まで一貫してプロデュースします。AI開発・AIウェブ開発・AIアプリケーション開発のプロデュースが可能です。ITシステム開発とAIを融合したプロジェクトのプロデュースも対応しています。
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 group/item border-t border-gray-200 pt-4">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover/item:text-yellow transition-colors">特許ライセンス業</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  <strong>多数の特許を保有</strong>しており、特許ライセンス業も展開しています。<strong>多数のパテントを同時に申請するサービス</strong>も提供可能です。AI技術に関する豊富な特許ポートフォリオを活かし、お客様のビジネスを支援します。
                </p>
              </div>
            </div>
            </Link>
          </div>
        </div>

        {/* Edge Processing & Image Processing Section */}
        <div
          ref={edgeImageRef}
          className={`bg-white border-2 border-teal-dark rounded-2xl p-6 md:p-8 lg:p-10 mb-12 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
            edgeImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            エッジ処理・画像処理の専門サービス
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-5 md:p-6 border border-teal-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-dark rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">エッジ処理</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                エッジ処理の開発・実装を専門としています。エッジコンピューティング環境でのAI処理、
                リアルタイムデータ処理、エッジデバイス向けの最適化など、エッジ処理に関する包括的なサービスを提供します。
              </p>
              <ul className="text-xs md:text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>エッジコンピューティング環境でのAI処理開発</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>リアルタイムデータ処理システムの構築</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>エッジデバイス向けのAI最適化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>エッジ処理とクラウドの連携システム開発</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 md:p-6 border border-blue-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-dark rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">画像処理・YOLO物体検出</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                画像処理の開発・実装を専門としています。YOLOを活用したリアルタイム物体検出、画像の前処理・後処理、画像解析、画像変換など、
                あらゆる画像処理技術に対応。高品質な画像処理ソリューションを提供します。
              </p>
              <ul className="text-xs md:text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>YOLOを用いたリアルタイム物体検出システム</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>防犯カメラシステム開発（人物検出・異常検知）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>画像の前処理・後処理システム開発</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>画像解析・画像認識システムの構築</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>画像変換・画像最適化処理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-dark font-bold mt-0.5">•</span>
                  <span>リアルタイム画像処理システム開発</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Products Section */}
        <div className="mt-16">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
            <svg className="w-10 h-10 text-teal-light" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="currentColor" strokeWidth="2.5"/>
              <path d="M5 25L20 35L35 25" stroke="currentColor" strokeWidth="2.5"/>
            </svg>
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              AI Worker <span className="font-normal">シリーズ</span>
            </span>
          </div>
            <p className="text-sm text-gray-600">
              領域に特化したAIプロダクトを提供
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* アキヤー */}
            <Link href="https://www.akiyer.com/" target="_blank" rel="noopener noreferrer" className="block bg-gray-light rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 tab-hover">
              <div className="flex items-center gap-2 text-xs text-white bg-teal-muted rounded px-2 py-1 w-fit mb-3">
                不動産AI
            </div>
              <div className="flex items-center gap-3 mb-2">
                  <svg className="w-10 h-10 text-teal-light flex-shrink-0" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M5 25L20 35L35 25" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                <span className="text-2xl font-bold text-gray-900">アキヤー</span>
                </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                AIで空き家・空き地候補を抽出する不動産探索サービス。AI判定により空き家の確率を％で表示し、エリア別フィルタで効率よく検索可能。
              </p>
              </Link>

            {/* TimeWorks */}
            <Link href="#" className="block bg-gray-light rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 tab-hover">
                <div className="flex items-center gap-2 text-xs text-white bg-teal-muted rounded px-2 py-1 w-fit mb-3">
                勤怠管理AI
                </div>
              <div className="flex items-center gap-3 mb-2">
                  <svg className="w-10 h-10 text-teal-light flex-shrink-0" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M5 25L20 35L35 25" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                <span className="text-2xl font-bold text-gray-900">TimeWorks</span>
                </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                勤怠管理・シフト管理・作業時間の追跡をひとつのプラットフォームで実現。チームの生産性を最大化します。
              </p>
              </Link>

            {/* BuzzShield */}
            <Link href="https://bussshield.net/" target="_blank" rel="noopener noreferrer" className="block bg-gray-light rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 tab-hover">
              <div className="flex items-center gap-2 text-xs text-white bg-teal-muted rounded px-2 py-1 w-fit mb-3">
                SNS監視AI
            </div>
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-10 h-10 text-teal-light flex-shrink-0" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M5 25L20 35L35 25" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-2xl font-bold text-gray-900">BuzzShield</span>
                </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                著名人や政治家向けのSNS炎上リスク監視システム。AIでSNS投稿やコメント、動画の拡散傾向を24時間365日モニタリングし、誹謗中傷や切り抜きによる印象操作を発見。
              </p>
              </Link>

            {/* CARSELL */}
            <Link href="https://www.caesell.net/" target="_blank" rel="noopener noreferrer" className="block bg-gray-light rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 tab-hover">
              <div className="flex items-center gap-2 text-xs text-white bg-teal-muted rounded px-2 py-1 w-fit mb-3">
                自動車販売AI
            </div>
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-10 h-10 text-teal-light flex-shrink-0" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M5 25L20 35L35 25" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-2xl font-bold text-gray-900">CARSELL</span>
                </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                自動車販売業界向けの包括的な営業支援AIシステム。顧客管理、見積作成、営業目標の可視化など、営業プロセス全体を一元管理できます。
              </p>
              </Link>

            {/* akari voice */}
            <Link href="#" className="block bg-gray-light rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 tab-hover">
              <div className="flex items-center gap-2 text-xs text-white bg-teal-muted rounded px-2 py-1 w-fit mb-3">
                TTSサービス
            </div>
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-10 h-10 text-teal-light flex-shrink-0" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 15L20 25L5 15L20 5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M5 25L20 35L35 25" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-2xl font-bold text-gray-900">akari voice</span>
                </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                高品質な音声合成（TTS）サービス。自然な音声でテキストを音声に変換します。
              </p>
              <span className="text-xs text-yellow font-medium">1月末ローンチ予定</span>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
