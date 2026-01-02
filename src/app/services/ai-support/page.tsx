import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIサポートサービス | 音声AI・画像AI・エッジ処理・画像処理 | TIFFIN株式会社",
  description: "TIFFIN株式会社は音声AI・画像AI・チャットAIの開発・サポート、エッジ処理・画像処理を専門としています。コールセンター向けakari voiceまで、包括的なAIサポートを提供。",
  keywords: "音声AI,画像AI,エッジ処理,画像処理,akari voice,新潟AI",
};

export default function AISupportPage() {
  return (
    <main className="min-h-screen relative">
      <BackgroundCircles />
      <Header />
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              包括的サポート：AIサポート
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              TIFFIN株式会社は、音声AI・画像AI・チャットAIの開発・サポート、エッジ処理・画像処理を専門としています。
              お客様のビジネスに最適なAIサポートを提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-teal-dark rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">音声AIサポート</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                音声AIの開発・サポートを専門としています。音声認識・音声合成を活用したAIエージェント開発から、コールセンター向けakari voiceまで、音声AIに関するあらゆるサポートを提供します。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 音声認識システム開発</li>
                <li>• 音声合成（TTS）サービス</li>
                <li>• コールセンター向け音声AI</li>
                <li>• 音声エージェント開発</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-teal-dark rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">画像AIサポート</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                画像AIの開発・サポートを手がけています。画像認識・画像生成AIの開発・実装から、コンピュータビジョン技術を活用したソリューションまで、画像AIに関する包括的なサポートを提供します。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 画像認識システム</li>
                <li>• 画像生成AI</li>
                <li>• コンピュータビジョン</li>
                <li>• 物体検出・分類</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-teal-dark rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">画像処理</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                画像処理の開発・実装を専門としています。画像の前処理・後処理、画像解析、画像変換など、あらゆる画像処理技術に対応。高品質な画像処理ソリューションを提供します。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 画像前処理・後処理</li>
                <li>• 画像解析システム</li>
                <li>• 画像変換・最適化</li>
                <li>• リアルタイム画像処理</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-teal-dark rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">エッジ処理</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                エッジ処理の開発・実装を得意としています。エッジコンピューティング環境でのAI処理、リアルタイムデータ処理、エッジデバイス向けの最適化など、エッジ処理に関する包括的なサポートを提供します。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• エッジコンピューティングAI</li>
                <li>• リアルタイムデータ処理</li>
                <li>• エッジデバイス最適化</li>
                <li>• クラウド連携システム</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-light rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              AIサポートの特徴
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">包括的なサポート</h3>
                <p className="text-gray-700 leading-relaxed">
                  音声AI・画像AI・チャットAI、エッジ処理・画像処理まで、あらゆるAI技術に関する包括的なサポートを提供します。
                  開発から運用まで一貫してサポートいたします。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">実績豊富</h3>
                <p className="text-gray-700 leading-relaxed">
                  様々な業界・規模のお客様にAIサポートを提供してきました。
                  コールセンター向けakari voiceなど、実績豊富なソリューションを提供しています。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block bg-teal-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-dark/90 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
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

