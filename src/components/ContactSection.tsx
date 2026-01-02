"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  useEffect(() => {
    // EmailJSの初期化（一度だけ実行）
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "62fy23UHQA1peUUj7";
    if (publicKey && publicKey !== "YOUR_PUBLIC_KEY") {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_47wjggu";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_w9gma4c";

    try {
      const templateParams = {
        from_name: formData.name,
        from_company: formData.company || "未入力",
        from_email: formData.email,
        from_phone: formData.phone || "未入力",
        service: formData.service,
        message: formData.message,
        to_name: "TIFFIN株式会社",
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS送信エラー:", error);
      
      // エラーメッセージを簡潔に取得
      let message = "送信に失敗しました。しばらくしてから再度お試しください。";
      
      if (error && typeof error === 'object') {
        // EmailJSのエラー構造に基づいてメッセージを抽出
        if ('text' in error) {
          const errorText = error.text;
          if (typeof errorText === 'string') {
            message = errorText;
            // CORSエラーの場合、より分かりやすいメッセージに変換
            if (errorText.includes('not in your whitelist') || errorText.includes('whitelist')) {
              const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
              message = `CORSエラー: EmailJSダッシュボードの「Allowed Origins」に現在のドメインを追加してください。\n\n設定手順:\n1. https://dashboard.emailjs.com/admin/integration にアクセス\n2. 「Allowed Origins」セクションを開く\n3. 以下のURLを追加:\n   - ローカル開発: http://localhost:5555\n   - 本番環境: https://www.tiffin.one\n4. 「Save」をクリック\n\n現在のドメイン: ${currentOrigin}`;
            }
          }
        } else if ('message' in error && typeof error.message === 'string') {
          message = error.message;
        } else if ('status' in error && typeof error.status === 'number') {
          if (error.status === 0) {
            const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
            message = `ネットワークエラーが発生しました。EmailJSダッシュボードの「Allowed Origins」に「${currentOrigin || 'http://localhost:5555 または https://www.tiffin.one'}」が追加されているか確認してください。`;
          } else if (error.status >= 400 && error.status < 500) {
            message = "リクエストエラーが発生しました。EmailJSの設定（サービスID、テンプレートID）を確認してください。";
          } else if (error.status >= 500) {
            message = "サーバーエラーが発生しました。しばらくしてから再度お試しください。";
          }
        }
      } else if (typeof error === 'string') {
        message = error;
      }
      
      setErrorMessage(message);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-light relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            CONTACT<span className="inline-block w-2 h-2 bg-yellow rounded-full ml-1" />
          </h2>
          <p className="text-sm text-gray-600">
            AI開発・AIウェブ開発・AIアプリケーション開発に関するお問い合わせはこちらから
          </p>
        </div>

        <div
          className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-700 hover:shadow-xl ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-dark focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-dark focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-dark focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-dark focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                ご希望のサービス <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-dark focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="ai-development">AI開発・AIウェブ開発</option>
                <option value="ai-app">AIアプリケーション開発</option>
                <option value="ai-system">AIシステム開発</option>
                <option value="voice-ai">音声AIサポート</option>
                <option value="image-ai">画像AIサポート</option>
                <option value="image-processing">画像処理</option>
                <option value="edge-processing">エッジ処理</option>
                <option value="chat-ai">チャットAIサポート</option>
                <option value="consulting">AIコンサルティング</option>
                <option value="produce">プロデュース</option>
                <option value="saas-development">協業型SaaS開発モデル</option>
                <option value="patent">特許ライセンス</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-dark focus:border-transparent"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                お問い合わせを受け付けました。担当者よりご連絡いたします。
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg whitespace-pre-line">
                {errorMessage || "送信に失敗しました。しばらくしてから再度お試しください。"}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-dark/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">お電話でのお問い合わせ</p>
              <a
                href="tel:070-9133-6957"
                className="text-lg font-bold text-teal-dark hover:text-teal-dark/80 transition-colors"
              >
                070-9133-6957
              </a>
              <p className="text-xs text-gray-500 mt-2">受付時間: 平日 9:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

