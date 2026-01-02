import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | TIFFIN株式会社 | AI開発の専門企業",
  description: "AI開発・AIウェブ開発・AIアプリケーション開発に関するお問い合わせはこちらから。音声AI・画像AI・チャットAIの開発・サポート、YOLO画像処理、防犯カメラシステム開発、エッジ処理、AIコンサルティング、特許ライセンス業に関するご相談を承っております。",
  keywords: [
    "AI開発 お問い合わせ",
    "AIウェブ開発 問い合わせ",
    "AIアプリケーション開発 相談",
    "新潟AI 問い合わせ",
    "AI開発会社 連絡先",
  ],
  openGraph: {
    title: "お問い合わせ | TIFFIN株式会社 | AI開発の専門企業",
    description: "AI開発・AIウェブ開発・AIアプリケーション開発に関するお問い合わせはこちらから。",
    url: "https://tiffin.one/contact",
    siteName: "TIFFIN株式会社",
    locale: "ja_JP",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col relative bg-white">
      <Header />
      <section className="pt-32 pb-20 bg-white relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Breadcrumb items={[{ label: "お問い合わせ", href: "/contact" }]} />
        </div>
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}

