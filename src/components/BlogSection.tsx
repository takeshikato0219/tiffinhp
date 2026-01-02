"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogPosts = [
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
];

export default function BlogSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="blog" className="py-20 bg-white relative z-10">
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
          {blogPosts.map((post, index) => (
            <article
              key={index}
              itemScope
              itemType="https://schema.org/NewsArticle"
              className={`group cursor-pointer bg-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg tab-hover ${
                sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-light">
                <img
                  src={post.image}
                  alt={`${post.title} - TIFFIN株式会社の${post.category}`}
                  itemProp="image"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-sm font-medium text-teal-dark leading-relaxed mb-2 group-hover:underline" itemProp="headline">
                {post.title}
              </h3>

              <p className="text-xs text-gray-600 mb-3 line-clamp-2" itemProp="description">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3 mb-3">
                <time dateTime={post.date.replace(/\./g, '-')} itemProp="datePublished" className="text-xs text-gray-500">
                  {post.date}
                </time>
                {post.category && (
                  <span className="text-xs text-gray-500" itemProp="articleSection">{post.category}</span>
                )}
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-gray-500">
                      # {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 h-px bg-gray-200 group-hover:bg-teal-dark transition-colors" />
            </article>
          ))}
        </div>

        <div className="mt-12 text-right">
          <Link
            href="/news"
            className="inline-block text-sm font-medium text-gray-900 hover:text-teal-dark transition-colors link-underline"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
