"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navItems = [
  { label: "SERVICE", href: "/services" },
  { label: "COMPANY", href: "/company" },
  { label: "LAUNCH", href: "/launch" },
  { label: "NEWS", href: "/news" },
  { label: "PATENT", href: "/patents" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dotKey, setDotKey] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // ページ遷移時にアニメーションをリセット
    setDotKey((prev) => prev + 1);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center lg:pt-[15px] lg:pb-[5px] pt-[11px] pb-[1px]">
            <Logo />
            <span 
              key={dotKey}
              className="text-teal-dark font-bold animate-dot-bounce" 
              style={{ marginLeft: '4px', marginTop: '1px', fontSize: 'calc(2rem + 7px)', lineHeight: '1', display: 'inline-block' }}
            >
              .
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-teal-dark transition-colors tracking-wider"
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <span
              className={`block w-6 h-0.5 bg-teal-dark transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-teal-dark mt-1.5 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-teal-dark mt-1.5 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 top-20 bg-white z-40 transition-transform duration-300 w-64 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-gray-700 hover:text-teal-dark transition-colors tracking-wider"
              onClick={() => setIsMenuOpen(false)}
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
