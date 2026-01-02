"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface NewsItem {
  date: string;
  category: string;
  categoryType: "press" | "news";
  title: string;
  description?: string;
  link?: string;
  image?: string;
  tags?: string[];
}

const newsItems: NewsItem[] = [
  {
    date: "2025.01.15",
    category: "サービスリリース",
    categoryType: "press",
    title: '勤怠管理・シフト管理プラットフォーム「TimeWorks」をリリース',
    description: "TimeWorksは、勤怠管理・シフト管理・作業時間の追跡をひとつのプラットフォームで実現。チームの生産性を最大化します。",
    link: "#",
    image: "/images/timeworks.jpg",
    tags: ["TimeWorks", "勤怠管理", "シフト管理"],
  },
  {
    date: "2025.01.10",
    category: "サービスリリース",
    categoryType: "press",
    title: 'AI空き家探索サービス「アキヤー」をリリース',
    description: "アキヤーはAIで空き家・空き地候補を抽出する不動産探索サービスです。AI判定により空き家の確率を％で表示し、エリア別フィルタで効率よく検索可能。",
    link: "https://www.akiyer.com/",
    image: "/images/akiyer.jpg",
    tags: ["アキヤー", "空き家", "AI"],
  },
  {
    date: "2025.01.05",
    category: "サービスリリース",
    categoryType: "press",
    title: '自動車販売業界向け営業支援AIシステム「CARSELL」をリリース',
    description: "CARSELLは自動車販売業界に特化した包括的な営業支援システム。顧客管理から見積作成、目標管理まで、営業プロセス全体を一元管理。",
    link: "https://www.caesell.net/",
    image: "/images/carsell.jpg",
    tags: ["CARSELL", "自動車販売", "営業支援"],
  },
];

export default function LaunchPage() {
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
            LAUNCH<span className="inline-block w-2 h-2 bg-yellow rounded-full ml-1" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className={`group cursor-pointer bg-gray-50 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg tab-hover ${
                  sectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-[38.4px] bg-gradient-to-br from-teal-dark to-teal-light overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // 画像読み込みエラー時のフォールバック
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold mb-2">
                          {item.tags && item.tags[0] ? item.tags[0].charAt(0) : 'T'}
                        </div>
                        <div className="text-xs opacity-80">{item.category}</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <time className="text-sm text-gray-600">{item.date}</time>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        item.categoryType === "press"
                          ? "bg-teal-dark text-white"
                          : "bg-yellow text-gray-900"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-sm leading-relaxed text-gray-900 group-hover:text-teal-dark transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">
                      {item.description}
                    </p>
                  )}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs text-teal-dark hover:text-teal-dark/80 transition-colors inline-flex items-center gap-1 font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      詳細を見る
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
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

