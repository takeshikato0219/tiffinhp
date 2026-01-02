"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PartnerSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/contact"
            className="block bg-yellow rounded-lg p-8 hover:bg-yellow-light hover:scale-105 hover:shadow-xl transition-all duration-300 group tab-hover"
          >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <h2 className="text-xl font-bold text-gray-900 tracking-wider">
                PARTNER<span className="inline-block w-2 h-2 bg-teal-dark rounded-full ml-1" />
              </h2>
              <p className="text-sm text-gray-700">
                パートナーに関するお問い合わせはこちら
              </p>
            </div>
            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:text-teal-dark transition-colors">
              READ MORE
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </div>
        </Link>
        </div>
      </div>
    </section>
  );
}
