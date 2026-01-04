"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const companyInfo = {
  name: "TIFFIN株式会社",
  description: "AI開発・AIウェブ開発・AIアプリケーション開発を専門とする企業",
  services: [
    "AI開発",
    "AIウェブ開発",
    "AIアプリケーション開発",
    "音声AIサポート",
    "画像AIサポート",
    "エッジ処理",
    "画像処理",
    "AIコンサルティング",
    "プロデュース",
    "特許ライセンス業",
  ],
  address: "新潟県三条市石上１丁目10番33号",
  phone: "070-9133-6957",
  founded: "2024年10月10日",
  capital: "6,000万円",
  employees: "5名",
  patents: "有効特許26件、審査中4件、実用新案3件",
  products: ["CARSELL", "BuzzShield", "アキヤー", "akari voice", "TimeWorks"],
};

const generateResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // 挨拶
  if (message.includes("こんにちは") || message.includes("はじめまして") || message.includes("初めまして")) {
    return `こんにちは！TIFFIN株式会社についてお答えします。どのようなことについて知りたいですか？`;
  }
  
  // 会社概要
  if (message.includes("会社") || message.includes("企業") || message.includes("概要")) {
    return `${companyInfo.name}は、${companyInfo.description}です。${companyInfo.founded}に設立され、本社は${companyInfo.address}にあります。資本金は${companyInfo.capital}、従業員数は${companyInfo.employees}です。`;
  }
  
  // サービス
  if (message.includes("サービス") || message.includes("事業") || message.includes("何を")) {
    return `TIFFIN株式会社は以下のサービスを提供しています：\n${companyInfo.services.map(s => `・${s}`).join("\n")}\n\n詳細については、お気軽にお問い合わせください。`;
  }
  
  // 特許
  if (message.includes("特許") || message.includes("パテント")) {
    return `TIFFIN株式会社は${companyInfo.patents}の特許を保有しています。特許ライセンス業も展開しており、多数のパテントを同時に申請するサービスも提供可能です。詳細は特許ページをご覧ください。`;
  }
  
  // 製品・サービス
  if (message.includes("製品") || message.includes("プロダクト") || message.includes("ai worker")) {
    return `AI Workerシリーズとして、以下の製品を提供しています：\n${companyInfo.products.map(p => `・${p}`).join("\n")}\n\n各製品の詳細については、お問い合わせください。`;
  }
  
  // 連絡先
  if (message.includes("連絡") || message.includes("電話") || message.includes("問い合わせ") || message.includes("お問い合わせ")) {
    return `お問い合わせは以下の方法でお願いいたします：\n電話番号：${companyInfo.phone}\n住所：${companyInfo.address}\n\nお問い合わせフォームからもご連絡いただけます。`;
  }
  
  // 住所
  if (message.includes("住所") || message.includes("場所") || message.includes("本社") || message.includes("どこ")) {
    return `TIFFIN株式会社の本社は${companyInfo.address}にあります。新潟県三条市に本社を構え、全国のお客様にサービスを提供しています。`;
  }
  
  // AI開発
  if (message.includes("ai開発") || message.includes("ai") || message.includes("開発")) {
    return `TIFFIN株式会社はAI開発・AIウェブ開発・AIアプリケーション開発を専門としています。音声AI・画像AI・チャットAIの開発・サポート、エッジ処理・画像処理、ITシステム開発にAIを組み込んだ開発まで対応可能です。`;
  }
  
  // 協業型SaaS
  if (message.includes("協業") || message.includes("saas") || message.includes("共同開発")) {
    return `協業型SaaS開発モデルにより、通常6,000万円規模のソフトウェア開発を約1/3まで圧縮できます。開発後はパートナーとして共に販売・成長させていくモデルです。`;
  }
  
  // デフォルト応答
  return `TIFFIN株式会社についてお答えします。${companyInfo.name}は、${companyInfo.description}です。\n\n以下のようなことについてお答えできます：\n・会社概要\n・サービス内容\n・特許について\n・製品・プロダクト\n・連絡先・住所\n\nどのようなことについて知りたいですか？`;
};

export default function QAPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: Date.now(),
      text: "こんにちは！TIFFIN株式会社についてお答えします。どのようなことについて知りたいですか？",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSend = () => {
    const messageText = inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // ボットの応答を生成（少し遅延させて自然な感じに）
    const responseText = generateResponse(messageText);
    setTimeout(() => {
      setMessages((prev) => {
        const botResponse: Message = {
          id: Date.now() + Math.random(),
          text: responseText,
          sender: "bot",
          timestamp: new Date(),
        };
        return [...prev, botResponse];
      });
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative bg-white">
      <Header />
      <section className="pt-32 pb-20 bg-white relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Breadcrumb items={[{ label: "Q&A", href: "/qa" }]} />
          <h1 className="text-2xl font-bold text-gray-900 tracking-wider mb-8">
            TIFFIN Q&A
          </h1>
        </div>
        
        {/* チャットエリア */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col" style={{ height: 'calc(100vh - 300px)', minHeight: '500px' }}>
            {/* メッセージエリア */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50 min-w-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} min-w-0`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 min-w-0 ${
                      message.sender === "user"
                        ? "bg-teal-dark text-white"
                        : "bg-white text-gray-900 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm sm:text-base whitespace-pre-wrap break-words overflow-wrap-anywhere">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* 入力エリア */}
            <div className="p-4 sm:p-6 border-t border-gray-200 bg-white rounded-b-2xl min-w-0">
              <div className="flex gap-2 items-center min-w-0">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="メッセージを入力..."
                  className="flex-1 min-w-0 px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-dark focus:border-transparent"
                  style={{ width: 0 }}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="bg-teal-dark text-white px-4 py-3 rounded-lg hover:bg-teal-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                  aria-label="送信"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

