import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIコンサルティング・特許ライセンス | プロデュースサービス | TIFFIN株式会社",
  description: "TIFFIN株式会社はAIコンサルティング、プロデュース、特許ライセンス業を展開しています。多数の特許を保有し、多数のパテントを同時に申請するサービスも提供可能。",
  keywords: "AIコンサルティング,プロデュース,特許ライセンス,パテント申請,新潟AI",
};

export default function ConsultingPatentPage() {
  return (
    <main className="min-h-screen relative">
      <BackgroundCircles />
      <Header />
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              専門サービス：コンサル・特許
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              TIFFIN株式会社は、AIコンサルティング、プロデュース、特許ライセンス業を展開しています。
              お客様のビジネスを包括的にサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-yellow rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AIコンサルティング</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI導入戦略の立案から実装まで、お客様のビジネスに最適なAI活用方法を提案・支援します。ITシステム開発とAIを組み合わせた最適なソリューションをコンサルティングします。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI導入戦略立案</li>
                <li>• ビジネスプロセス分析</li>
                <li>• AI技術選定支援</li>
                <li>• 実装計画策定</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-yellow rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">プロデュース</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AIプロジェクトの企画から開発、運用まで一貫してプロデュースします。AI開発・AIウェブ開発・AIアプリケーション開発のプロデュースが可能です。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• プロジェクト企画</li>
                <li>• 開発管理</li>
                <li>• 運用サポート</li>
                <li>• 品質管理</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-yellow rounded-2xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">特許ライセンス業</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                多数の特許を保有しており、特許ライセンス業も展開しています。多数のパテントを同時に申請するサービスも提供可能です。
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 特許ライセンス提供</li>
                <li>• パテント同時申請</li>
                <li>• 特許戦略コンサル</li>
                <li>• ポートフォリオ活用</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-light rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              サービス詳細
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AIコンサルティング</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AI導入戦略の立案から実装まで、お客様のビジネスに最適なAI活用方法を提案・支援します。
                  ITシステム開発とAIを組み合わせた最適なソリューションをコンサルティングします。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  お客様のビジネス課題を分析し、AI技術を活用した解決策を提案します。
                  導入から運用まで、一貫してサポートいたします。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">プロデュース</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AIプロジェクトの企画から開発、運用まで一貫してプロデュースします。
                  AI開発・AIウェブ開発・AIアプリケーション開発のプロデュースが可能です。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ITシステム開発とAIを融合したプロジェクトのプロデュースも対応しています。
                  プロジェクト全体を管理し、成功に導きます。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow/10 border-2 border-yellow rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              特許ライセンス業について
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              TIFFIN株式会社は、AI技術に関する<strong>多数の特許を保有</strong>しており、
              特許ライセンス業も展開しています。<strong>多数のパテントを同時に申請するサービス</strong>も提供可能です。
              AI技術に関する豊富な特許ポートフォリオを活かし、お客様のビジネスを支援します。
            </p>
            <div className="text-center">
              <Link
                href="/patents"
                className="inline-block bg-teal-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-dark/90 transition-colors"
              >
                保有特許について詳しく見る
              </Link>
            </div>
          </div>

          <div className="text-center">
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

