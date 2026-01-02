"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

const navItems = [
  { label: "SERVICE", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "LAUNCH", href: "/launch" },
  { label: "NEWS", href: "/news" },
  { label: "PATENT", href: "/patents" },
  { label: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <Logo />

          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-600 hover:text-teal-dark transition-colors"
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Sub Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-300">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-teal-dark transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              PRIVACY POLICY
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-teal-dark transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              INFORMATION SECURITY POLICY
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity" onClick={(e) => e.preventDefault()}>
                <Image
                  src="https://ext.same-assets.com/1175703844/1045283732.png"
                  alt="X (Twitter)"
                  width={20}
                  height={20}
                  className="w-5 h-auto"
                  loading="lazy"
                />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" onClick={(e) => e.preventDefault()}>
                <Image
                  src="https://ext.same-assets.com/1175703844/1008988818.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="text-xs text-gray-500 text-center md:text-right">
            <p className="mb-1">© 2026 TIFFIN株式会社</p>
            <p className="text-xs">新潟県三条市石上１丁目10番33号</p>
            <p className="text-xs">TEL: <a href="tel:070-9133-6957" className="hover:text-teal-dark">070-9133-6957</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
