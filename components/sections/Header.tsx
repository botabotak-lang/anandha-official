"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "特徴", href: "#features" },
  { label: "施術の流れ", href: "#flow" },
  { label: "料金", href: "#menu" },
  { label: "ご挨拶", href: "#owner" },
  { label: "アクセス", href: "#access" },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 上にスクロールした場合、またはトップに近い場合は表示
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // 下にスクロールした場合は非表示
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`sticky top-0 z-40 border-b-2 border-border bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } md:!translate-y-0`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-6">
        <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-80">
          <img
            src="/images/anandah-logo.png"
            alt="耳つぼダイエットサロン Anandah"
            className="h-16 w-auto md:h-20"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-text-muted tracking-wide md:text-lg">
              耳つぼダイエットサロン
            </span>
            <span className="text-2xl font-light text-primary tracking-wider md:text-4xl">
              Anandah
            </span>
          </div>
        </Link>
        
        {/* デスクトップメニュー */}
        <nav className="hidden items-center gap-8 text-lg font-bold md:flex md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://www.instagram.com/anandah_diet/?igsh=MWVyaXhuZ2RrM3A1ZQ%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="Instagramを開く"
          >
            <img
              src="/images/Instagram.png"
              alt="Instagram"
              className="h-5 w-5"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
