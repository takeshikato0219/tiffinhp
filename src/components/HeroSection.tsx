"use client";

import { useEffect, useState } from "react";

const messages = [
  { line1: "AI開発・AIウェブ開発の", line2: "専門企業として実績多数" },
  { line1: "音声AI・画像AI・チャットAI", line2: "あらゆるAI開発を新潟から" },
  { line1: "ITシステム開発とAIを融合", line2: "最適なソリューションを提供" },
  { line1: "多数の特許を保有し", line2: "特許ライセンス業も展開" },
  { line1: "AIコンサルティングから", line2: "開発まで一貫サポート" },
  { line1: "AIアプリケーション開発", line2: "プロデュースも可能" },
  { line1: "AI開発・AIウェブ開発の", line2: "専門企業として実績多数" },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    setDisplayedText1("");
    setDisplayedText2("");
    setIsTyping(true);

    let typingInterval1: NodeJS.Timeout | null = null;
    let typingInterval2: NodeJS.Timeout | null = null;
    let nextMessageTimeout: NodeJS.Timeout | null = null;

    // 1行目をタイピング
    let index1 = 0;
    typingInterval1 = setInterval(() => {
      if (index1 < currentMessage.line1.length) {
        setDisplayedText1(currentMessage.line1.slice(0, index1 + 1));
        index1++;
      } else {
        if (typingInterval1) clearInterval(typingInterval1);
        // 1行目が終わったら2行目をタイピング
        let index2 = 0;
        typingInterval2 = setInterval(() => {
          if (index2 < currentMessage.line2.length) {
            setDisplayedText2(currentMessage.line2.slice(0, index2 + 1));
            index2++;
          } else {
            if (typingInterval2) clearInterval(typingInterval2);
            setIsTyping(false);
            // タイピング完了後、次のメッセージに切り替え
            nextMessageTimeout = setTimeout(() => {
              setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
            }, 2000);
          }
        }, 80); // 1文字ずつ80ms間隔
      }
    }, 80); // 1文字ずつ80ms間隔

    return () => {
      if (typingInterval1) clearInterval(typingInterval1);
      if (typingInterval2) clearInterval(typingInterval2);
      if (nextMessageTimeout) clearTimeout(nextMessageTimeout);
    };
  }, [currentMessageIndex]);

  const currentMessage = messages[currentMessageIndex];

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-x-hidden bg-white pt-20 pb-8 md:pb-12">
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Yellow Circle - Top Right */}
        <div
          className={`absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-yellow rounded-full transition-all duration-1000 delay-300 animate-float ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: "-15%", right: "-10%", maxWidth: "100vw" }}
        />

        {/* Light Blue Circle */}
        <div
          className={`absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[650px] lg:h-[650px] rounded-full transition-all duration-1000 delay-500 animate-morph ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            top: "20%",
            right: "5%",
            backgroundColor: "#a7c8d4",
            maxWidth: "100vw",
          }}
        />

        {/* Dark Teal Circle */}
        <div
          className={`absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] bg-teal-dark rounded-full transition-all duration-1000 delay-700 animate-float-morph-rotate ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ top: "calc(30% + 300px)", right: "3%", maxWidth: "100vw" }}
        />

        {/* Additional Small Circles for Empty Spaces */}
        {/* Top Left Small Circle */}
        <div
          className={`absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] bg-yellow/30 rounded-full transition-all duration-1000 delay-900 animate-float ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: "10%", left: "3%", maxWidth: "100vw" }}
        />

        {/* Middle Left Circle */}
        <div
          className={`absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] rounded-full transition-all duration-1000 delay-1100 animate-morph ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            top: "50%",
            left: "3%",
            backgroundColor: "#a7c8d4",
            opacity: 0.4,
            maxWidth: "100vw",
          }}
        />

        {/* Bottom Right Small Circle */}
        <div
          className={`absolute w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] bg-teal-dark/40 rounded-full transition-all duration-1000 delay-1300 animate-float-morph-rotate ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ bottom: "15%", right: "10%", maxWidth: "100vw" }}
        />

        {/* Bottom Left Circle */}
        <div
          className={`absolute w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-yellow/25 rounded-full transition-all duration-1000 delay-1500 animate-float ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ bottom: "20%", left: "5%", maxWidth: "100vw" }}
        />

        {/* Center Small Circle */}
        <div
          className={`absolute w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] rounded-full transition-all duration-1000 delay-1700 animate-morph ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            top: "60%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#64b9d0",
            opacity: 0.3,
            maxWidth: "100vw",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0 overflow-x-hidden">
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 
            className={`font-bold text-gray-900 leading-tight min-h-[60px] sm:min-h-[80px] md:min-h-[140px] lg:min-h-[180px] flex flex-col justify-center text-[28px] sm:text-[32px] md:text-[42px] lg:text-[50px] px-2 sm:px-0 ${
              currentMessageIndex === 2 ? 'mt-[10px] sm:mt-[15px]' : ''
            }`} 
            itemProp="headline"
            style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
          >
            <span className="block">
              {displayedText1}
              {isTyping && displayedText2 === "" && (
                <span className="animate-pulse">|</span>
              )}
            </span>
            <span className="block mt-2">
              {displayedText2}
              {isTyping && displayedText2.length > 0 && displayedText2.length < currentMessage.line2.length && (
                <span className="animate-pulse">|</span>
              )}
            </span>
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        className={`absolute bottom-[9px] sm:bottom-[11px] md:bottom-[13px] right-4 sm:right-6 md:right-8 lg:right-12 flex flex-col items-center text-teal-dark transition-all duration-1000 delay-1200 hover:opacity-70 bg-transparent border-none cursor-pointer ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          const element = document.getElementById('news');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-xs tracking-widest mb-3 [writing-mode:vertical-rl]">SCROLL</span>
        <div className="w-px h-12 md:h-16 bg-teal-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-teal-dark/30 animate-pulse" />
        </div>
      </button>
    </section>
  );
}
