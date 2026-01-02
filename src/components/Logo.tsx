"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  href?: string;
}

export default function Logo({ className, href = "/" }: LogoProps) {
  const logoContent = (
    <Image
      src="/logo.png"
      alt="TIFFIN"
      width={180}
      height={180}
      className={`${className || ''} w-[165px] md:w-[180px]`}
      style={{ height: 'auto' }}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

