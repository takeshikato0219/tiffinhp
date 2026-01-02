import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-shift.com'),
  title: {
    default: "AI開発・特許ライセンス | TIFFIN株式会社 | AIシステム開発・エッジ処理・画像処理",
    template: "%s | TIFFIN株式会社"
  },
  description: "TIFFIN株式会社は、新潟県三条市に本社を構えるAI開発・AIウェブ開発・AIアプリケーション開発の専門企業です。音声AI・画像AI・チャットAIの開発・サポート、YOLOを用いた画像処理・物体検出、防犯カメラシステム開発、エッジ処理・画像処理、ITシステム開発、AIコンサルティング、特許ライセンス業を提供。TimeWorks、アキヤー、CARSELL、BuzzShieldなどのAIサービスをリリース。多数の特許を保有し、新潟AI開発のリーディングカンパニーとして実績多数。",
  keywords: [
    "AI開発",
    "AIウェブ開発",
    "AIアプリケーション開発",
    "音声AI",
    "画像AI",
    "チャットAI",
    "エッジ処理",
    "画像処理",
    "AIシステム開発",
    "AIコンサルティング",
    "特許ライセンス",
    "AIエージェント開発",
    "新潟県三条市",
    "エッジコンピューティング",
    "TimeWorks",
    "アキヤー",
    "CARSELL",
    "BuzzShield",
    "akari voice",
    "YOLO",
    "物体検出",
    "防犯カメラシステム",
    "新潟AI",
    "三条市AI",
    "AI開発会社",
    "AI開発企業",
    "新潟AI開発",
    "三条市AI開発",
    "AI特許",
    "AIライセンス",
    "AIプロダクト開発",
    "AIソリューション",
    "ITシステム開発",
    "AI導入支援",
    "AIコンサルタント",
    "AIプロデュース",
    "協業型SaaS開発",
    "SaaS開発モデル",
    "AI画像認識",
    "AI音声認識",
    "AI音声合成",
    "コールセンターAI",
    "営業支援AI",
    "不動産AI",
    "SNS監視AI",
  ],
  authors: [{ name: "TIFFIN株式会社" }],
  creator: "TIFFIN株式会社",
  publisher: "TIFFIN株式会社",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AI開発・特許ライセンス | TIFFIN株式会社",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発の専門企業。音声AI・画像AI・チャットAIの開発・サポート、エッジ処理・画像処理、ITシステム開発、AIコンサルティングを提供。新潟県三条市に本社を構え、多数の特許を保有。",
    url: "https://ai-shift.com",
    siteName: "TIFFIN株式会社",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TIFFIN株式会社 - AI開発の専門企業",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI開発・特許ライセンス | TIFFIN株式会社",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発の専門企業。新潟県三条市に本社を構え、多数の特許を保有。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://ai-shift.com",
  },
  verification: {
    // Google Search Console用の検証コードを追加可能
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "TIFFIN株式会社",
    url: "https://ai-shift.com",
    logo: "https://ai-shift.com/logo.png",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発の専門企業。新潟県三条市に本社を構え、多数の特許を保有。",
    address: {
      "@type": "PostalAddress",
      addressLocality: "三条市",
      addressRegion: "新潟県",
      streetAddress: "石上１丁目10番33号",
      postalCode: "955-0084",
      addressCountry: "JP",
    },
    founder: {
      "@type": "Person",
      name: "加藤健資",
      alternateName: "Takeshi Kato",
    },
    foundingDate: "2024-10-10",
    numberOfEmployees: "5",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+81-70-9133-6957",
      contactType: "customer service",
      areaServed: "JP",
      availableLanguage: "Japanese",
      email: "info@tiffin.one",
    },
    sameAs: [],
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI開発サービス",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI開発・AIウェブ開発",
            description: "AIを活用したWebアプリケーション・Webサイトの開発",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AIアプリケーション開発",
            description: "モバイルアプリ・デスクトップアプリなど、あらゆるプラットフォームでのAIアプリケーション開発",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "音声AIサポート",
            description: "音声認識・音声合成を活用したAIエージェント開発",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "画像AIサポート",
            description: "画像認識・画像生成AIの開発・実装",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "エッジ処理・画像処理",
            description: "エッジコンピューティング環境でのAI処理、YOLOを用いた画像処理・物体検出",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AIコンサルティング",
            description: "AI導入戦略の立案から実装まで、お客様のビジネスに最適なAI活用方法を提案",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "特許ライセンス",
            description: "多数の特許を保有し、特許ライセンス業も展開",
          },
        },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TIFFIN株式会社",
    url: "https://ai-shift.com",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発の専門企業",
    inLanguage: "ja-JP",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ai-shift.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "TIFFIN株式会社はどのようなAI開発サービスを提供していますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TIFFIN株式会社は、AI開発・AIウェブ開発・AIアプリケーション開発を専門としています。音声AI・画像AI・チャットAIの開発・サポート、YOLOを用いた画像処理・物体検出、防犯カメラシステム開発、エッジ処理・画像処理、ITシステム開発、AIコンサルティング、特許ライセンス業を提供しています。",
        },
      },
      {
        "@type": "Question",
        name: "新潟県三条市のAI開発会社として、どのような実績がありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TIFFIN株式会社は、新潟県三条市に本社を構えるAI開発の専門企業として、TimeWorks、アキヤー、CARSELL、BuzzShieldなどのAIサービスをリリースしています。多数の特許を保有し、AI開発・AIウェブ開発・AIアプリケーション開発において豊富な実績があります。",
        },
      },
      {
        "@type": "Question",
        name: "特許ライセンス業について教えてください",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TIFFIN株式会社は、AI技術に関する多数の特許を保有しており、特許ライセンス業も展開しています。多数のパテントを同時に申請するサービスも提供可能です。",
        },
      },
      {
        "@type": "Question",
        name: "YOLOを用いた画像処理・物体検出サービスについて教えてください",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TIFFIN株式会社は、YOLO（You Only Look Once）を用いた画像処理・物体検出の専門サービスを提供しています。防犯カメラシステム開発にも対応しており、リアルタイムでの物体検出や人物の繰り返し出現の検知・記録・警告システムを開発しています。",
        },
      },
    ],
  };

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Overpass:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd, null, 0) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd, null, 0) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd, null, 0) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
