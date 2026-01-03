"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";

const navLinks = [
  { label: "特徴", href: "#features" },
  { label: "施術の流れ", href: "#flow" },
  { label: "料金", href: "#menu" },
  { label: "ご挨拶", href: "#owner" },
  { label: "アクセス", href: "#access" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* モバイルハンバーガーボタン（常に表示） */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[60] flex items-center justify-center rounded-full bg-white/95 backdrop-blur-sm border-2 border-border shadow-2xl p-4 md:hidden"
        aria-label="メニューを開く"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <X className="size-8 text-text" />
        ) : (
          <MenuIcon className="size-8 text-text" />
        )}
      </button>

      <header 
        className={`sticky top-0 z-40 border-b-2 border-border bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-6">
          <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-80">
            <img
              src="/images/anandah-logo.png"
              alt="耳つぼダイエットサロン Anandha"
              className="h-16 w-auto md:h-20"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-text-muted tracking-wide md:text-lg">
                耳つぼダイエットサロン
              </span>
              <span className="text-2xl font-light text-primary tracking-wider md:text-4xl">
                Anandha
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

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <>
          {/* 背景オーバーレイ */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* 上部展開メニュー */}
          <nav 
            className="fixed left-0 top-0 z-40 w-full bg-white pb-8 pt-24 rounded-b-[2rem] shadow-xl transition-all duration-300 animate-in slide-in-from-top-5 md:hidden"
            style={{ maxHeight: '80vh', overflowY: 'auto' }}
          >
            <div className="px-6">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-lg font-medium text-text transition-colors hover:text-primary"
                    >
                      {link.label === "ご挨拶" ? "オーナーからのご挨拶" : link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </>
      )}
    </header>
    </>
  );
}
