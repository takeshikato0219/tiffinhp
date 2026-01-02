"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function RecruitSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="recruit" className="py-20 bg-teal-dark relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold text-white tracking-wider mb-4">
              RECRUIT<span className="inline-block w-2 h-2 bg-yellow rounded-full ml-1" />
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              TIFFINでは、グローバルAIカンパニーを目指し、
              <br />
              人とAIの協働を目指す仲間を募集しております。
            </p>
          </div>

          <Link
            href="#"
            className="inline-block text-sm font-medium text-white hover:text-yellow transition-colors link-underline"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
