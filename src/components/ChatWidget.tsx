"use client";

import { useState, useRef, useEffect } from "react";
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

export default function ChatWidget() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
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
  
  // ドラッグ&ドロップ用の状態
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 26, y: 126 }); // モバイルの初期位置: left 26px, bottom 126px (50px上げる)
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [viewportWidth, setViewportWidth] = useState(0); // 実際のビューポート幅
  const hasMovedRef = useRef(false); // ドラッグが実際に発生したかどうか
  const touchStartRef = useRef({ x: 0, y: 0 }); // タッチ開始位置
  const isTouchEventRef = useRef(false); // タッチイベントが発生したかどうか
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // モバイル判定とビューポート幅の取得
  useEffect(() => {
    const getViewportWidth = () => {
      // 実際のビューポート幅を取得（スクロールバーを除く）
      // Safariではdocument.documentElement.clientWidthが最も正確
      // Chromeではwindow.innerWidthが正確
      const docEl = document.documentElement;
      const body = document.body;
      
      // Safari検出
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      if (isSafari) {
        // SafariではclientWidthを使用
        return docEl.clientWidth || window.innerWidth || 0;
      } else {
        // ChromeなどではinnerWidthを使用
        return window.innerWidth || docEl.clientWidth || 0;
      }
    };

    const checkMobile = () => {
      const width = getViewportWidth();
      setIsMobile(width < 1024);
      setViewportWidth(width);
    };
    
    checkMobile();
    
    const handleResize = () => {
      // リサイズ時に少し遅延させて正確な幅を取得
      setTimeout(checkMobile, 50);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // 初期化時に少し遅延させて正確な幅を取得
    setTimeout(checkMobile, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [isOpen, isMobile]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // スマホの場合はQ&Aページにリダイレクト、PCの場合はポップアップを表示
  const handleChatOpen = () => {
    if (isMobile) {
      // スマホの場合はQ&Aページに遷移
      router.push('/qa');
    } else {
      // PCの場合はポップアップを表示
      setIsOpen((prev) => !prev);
    }
  };

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

  // ドラッグ開始（PCでは使用しない、スマホではQ&Aページに遷移するためドラッグも無効）
  const handleMouseDown = (e: React.MouseEvent) => {
    // ドラッグ機能は無効化
    return;
  };

  // ドラッグ中
  // PCではドラッグ機能を使用しない（スマホではQ&Aページに遷移するため）
  useEffect(() => {
    // ドラッグ機能は無効化
    return;
  }, [isDragging, dragStart, isMobile]);

  // スマホではドラッグ機能を無効化（Q&Aページに遷移するため）

  return (
    <>
      {/* チャットボタン */}
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // スマホの場合はQ&Aページに遷移、PCの場合はポップアップを表示
          if (isMobile) {
            router.push('/qa');
          } else {
            setIsOpen((prev) => !prev);
          }
        }}
        style={{
          position: 'fixed',
          bottom: isMobile ? `${position.y}px` : undefined,
          left: isMobile ? `${position.x}px` : undefined,
          cursor: isMobile ? (isDragging ? 'grabbing' : 'grab') : 'pointer',
          touchAction: isMobile ? 'pan-y' : 'auto',
          transition: isDragging ? 'none' : undefined,
        }}
        className={`md:bottom-[236px] md:left-[44px] z-[9999] bg-teal-dark text-white w-[61px] h-[61px] md:w-[71px] md:h-[71px] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group rounded-full ${
          isOpen || isDragging ? "" : "animate-chat-float-morph-rotate"
        } ${isDragging ? 'scale-110' : ''}`}
        aria-label="チャットを開く"
      >
        {isOpen ? (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* チャットウィンドウ（PCのみ表示、スマホはQ&Aページに遷移） */}
      {isOpen && !isMobile && (
        <div 
          ref={chatWindowRef}
          style={{
            position: 'fixed',
            bottom: isMobile ? `${position.y + 20}px` : undefined,
            left: isMobile ? '16px' : undefined,
            right: isMobile ? '16px' : undefined,
            width: isMobile ? 'calc(100% - 32px)' : undefined, // 明示的に幅を設定
            maxWidth: isMobile ? 'calc(100% - 32px)' : undefined, // 確実に制限
            minWidth: isMobile ? 0 : undefined,
            maxHeight: isMobile ? `calc(100vh - ${position.y + 40}px)` : undefined,
            height: isMobile ? undefined : '600px',
            zIndex: 9999,
            boxSizing: 'border-box',
            overflow: 'hidden',
            WebkitOverflowScrolling: 'touch',
            // 完全に独立したレイヤーとして扱う
            transform: 'translateZ(0)',
            isolation: 'isolate',
            contain: 'strict',
          }}
          className="md:bottom-[254px] md:left-[34px] md:right-auto md:w-96 max-w-md md:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200"
        >
          {/* ヘッダー */}
          <div className="bg-teal-dark text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-lg font-bold">T</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm sm:text-base truncate">TIFFIN Q&A</h3>
                <p className="text-xs text-white/80 truncate">通常すぐに応答します</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors flex-shrink-0 ml-2"
              aria-label="閉じる"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* メッセージエリア */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50 min-w-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} min-w-0`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 min-w-0 ${
                    message.sender === "user"
                      ? "bg-teal-dark text-white"
                      : "bg-white text-gray-900 border border-gray-200"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words overflow-wrap-anywhere">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* 入力エリア */}
          <div className="p-3 sm:p-4 border-t border-gray-200 bg-white rounded-b-2xl min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="メッセージを入力..."
                className="flex-1 min-w-0 px-3 py-2 sm:px-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-dark focus:border-transparent"
                style={{ width: 0 }} // flex-1と組み合わせて幅を制御
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-teal-dark text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-teal-dark/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                aria-label="送信"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

