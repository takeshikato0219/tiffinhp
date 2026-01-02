"use client";

import { useEffect, useState } from "react";

const messages = [
  { line1: "AI開発・AIウェブ開発の", line2: "専門企業として実績多数" },
  { line1: "音声AI・画像AI・チャットAI", line2: "あらゆるAI開発に対応" },
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
    <section className="relative min-h-[100vh] md:min-h-screen flex items-center overflow-visible bg-white pt-20 pb-8 md:pb-0">
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {/* Yellow Circle - Top Right */}
        <div
          className={`absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] bg-yellow rounded-full transition-all duration-1000 delay-300 animate-float ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: "-20%", right: "-15%" }}
        />

        {/* Light Blue Circle */}
        <div
          className={`absolute w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full transition-all duration-1000 delay-500 animate-morph ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            top: "20%",
            right: "10%",
            backgroundColor: "#a7c8d4",
          }}
        />

        {/* Dark Teal Circle */}
        <div
          className={`absolute w-[107px] h-[107px] md:w-[250px] md:h-[250px] bg-teal-dark rounded-full transition-all duration-1000 delay-700 animate-float-morph-rotate ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ top: "calc(30% + 500px)", right: "5%" }}
        />

        {/* Additional Small Circles for Empty Spaces */}
        {/* Top Left Small Circle */}
        <div
          className={`absolute w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-yellow/30 rounded-full transition-all duration-1000 delay-900 animate-float ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: "10%", left: "5%" }}
        />

        {/* Middle Left Circle */}
        <div
          className={`absolute w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full transition-all duration-1000 delay-1100 animate-morph ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            top: "50%",
            left: "8%",
            backgroundColor: "#a7c8d4",
            opacity: 0.4,
          }}
        />

        {/* Bottom Right Small Circle */}
        <div
          className={`absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-teal-dark/40 rounded-full transition-all duration-1000 delay-1300 animate-float-morph-rotate ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ bottom: "15%", right: "20%" }}
        />

        {/* Bottom Left Circle */}
        <div
          className={`absolute w-[130px] h-[130px] md:w-[200px] md:h-[200px] bg-yellow/25 rounded-full transition-all duration-1000 delay-1500 animate-float ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ bottom: "20%", left: "10%" }}
        />

        {/* Center Small Circle */}
        <div
          className={`absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full transition-all duration-1000 delay-1700 animate-morph ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            top: "60%",
            left: "50%",
            backgroundColor: "#64b9d0",
            opacity: 0.3,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 
            className={`font-bold text-gray-900 leading-tight min-h-[80px] md:min-h-[180px] flex flex-col justify-center text-[38px] md:text-[50px] ${
              currentMessageIndex === 2 ? 'mt-[15px]' : ''
            }`} 
            itemProp="headline"
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
        className={`absolute bottom-10 right-8 md:right-12 flex flex-col items-center text-teal-dark transition-all duration-1000 delay-1200 hover:opacity-70 bg-transparent border-none cursor-pointer ${
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
