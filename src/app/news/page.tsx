"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface NewsItem {
  image?: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  link?: string;
}

const newsItems: NewsItem[] = [
  {
    image: "/images/CN5ktcFf.jpg",
    title: '勤怠管理・シフト管理プラットフォーム「TimeWorks」をリリース',
    excerpt: "TimeWorksは、勤怠管理・シフト管理・作業時間の追跡をひとつのプラットフォームで実現。チームの生産性を最大化します。",
    date: "2025.01.15",
    category: "サービスリリース",
    tags: ["TimeWorks", "勤怠管理", "シフト管理"],
  },
  {
    image: "/images/jBSGouKc.jpg",
    title: 'AI空き家探索サービス「アキヤー」をリリース',
    excerpt: "アキヤーはAIで空き家・空き地候補を抽出する不動産探索サービスです。AI判定により空き家の確率を％で表示し、エリア別フィルタで効率よく検索可能。",
    date: "2025.01.10",
    category: "サービスリリース",
    tags: ["アキヤー", "空き家", "AI"],
  },
  {
    image: "/images/HCaiUayJ.jpg",
    title: '自動車販売業界向け営業支援AIシステム「CARSELL」をリリース',
    excerpt: "CARSELLは自動車販売業界に特化した包括的な営業支援システム。顧客管理から見積作成、目標管理まで、営業プロセス全体を一元管理。",
    date: "2025.01.05",
    category: "サービスリリース",
    tags: ["CARSELL", "自動車販売", "営業支援"],
  },
  {
    title: 'AIで野良猫を識別し被害を防ぐ 三条市のTIFFINが野良猫識別システム「AIVIS」を開発・導入',
    excerpt: "TIFFIN株式会社は、AIの画像認識技術を活用した野良猫識別システム「AIVIS」を開発し、三条市に導入しました。4K高精度カメラを使用し、約95%の精度で野良猫を識別。24時間365日監視可能で、AIが野良猫の姿や行動パターンを学習し、同じ野良猫が繰り返し識別された場合に通知するシステムです。地域の野良猫被害を防ぐためのAI技術を活用したソリューションとして注目されています。",
    date: "2025.11.11",
    category: "ニュース",
    tags: ["AIVIS", "AI", "画像認識", "三条市", "野良猫識別"],
    link: "https://www.kenoh.com/2025/11/11_tiffin.html",
  },
  {
    title: '新潟県三条市のTIFFIN株式会社、AI技術で地域社会に貢献',
    excerpt: "TIFFIN株式会社は、新潟県三条市に本社を構え、AI開発・AIウェブ開発・AIアプリケーション開発の専門企業として、多数の特許を保有。AI技術を活用したソリューションで地域社会に貢献しています。",
    date: "2025.11.11",
    category: "ニュース",
    tags: ["TIFFIN", "AI開発", "新潟", "三条市"],
    link: "https://www.niigata-nippo.co.jp/articles/-/727372",
  },
];

export default function NewsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <main className="min-h-screen flex flex-col relative bg-white">
      <Header />
      <section className="pt-32 pb-20 bg-white relative z-10 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={sectionRef}
            className={`text-2xl font-bold text-gray-900 tracking-wider mb-12 transition-all duration-700 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            NEWS<span className="inline-block w-2 h-2 bg-yellow rounded-full ml-1" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className={`group cursor-pointer bg-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg tab-hover ${
                  sectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.image && (
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-light">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {!item.image && (
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-teal-dark to-teal-light h-48 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">
                        {item.tags && item.tags[0] ? item.tags[0].charAt(0) : 'N'}
                      </div>
                      <div className="text-xs opacity-80">{item.category}</div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-sm font-medium text-teal-dark leading-relaxed mb-2 group-hover:underline">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs text-gray-500">{item.date}</time>
                    {item.category && (
                      <span className="text-xs px-2 py-0.5 border border-gray-300 rounded">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-gray-500">
                          # {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 h-px bg-gray-200 group-hover:bg-teal-dark transition-colors" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-right">
            <Link
              href="/"
              className="inline-block text-sm font-medium text-gray-900 hover:text-teal-dark transition-colors link-underline"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

