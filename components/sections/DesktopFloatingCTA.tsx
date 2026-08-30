"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const LINE_URL = "https://lin.ee/bbJLZFe";

/**
 * PC・タブレット用の追従CTA。
 * スマホはStickyCTA（画面下固定）があるが、PCには従来なかったため
 * FVを過ぎた読者がCTAに触れられない状態だった。
 * 世界観を壊さないよう、右下に控えめなサイズで置く。
 */
export function DesktopFloatingCTA() {
  const [visible, setVisible] = useState(false);

  // FV（Hero）を読み終えたら表示する。
  // スクロール監視とIntersectionObserverを併用する（ページ途中のアンカーで
  // 直接開かれた場合でも確実に表示されるようにするため）。
  useEffect(() => {
    const update = () => {
      const target = document.getElementById("owner");
      const passedHero = window.scrollY > 900;
      const reachedOwner = target
        ? target.getBoundingClientRect().top < window.innerHeight
        : false;
      setVisible(passedHero || reachedOwner);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const target = document.getElementById("owner");
    const observer = target
      ? new IntersectionObserver(update, { threshold: 0 })
      : null;
    if (target && observer) observer.observe(target);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 hidden md:block transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="desktop-floating-line"
        aria-label="LINEで予約する（24時間受付中）"
        className="group flex items-center gap-3 rounded-full bg-gradient-to-b from-[#00D242] to-[#00A500] py-3 pl-3 pr-5 shadow-xl shadow-[#00A500]/30 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A500]"
      >
        <img
          src="/images/line-logo-circle.png"
          alt=""
          width={40}
          height={40}
          className="size-10 shrink-0 rounded-full bg-white"
        />
        <span className="flex flex-col leading-tight">
          <span className="text-base font-black tracking-wide text-white">
            LINEで予約する
          </span>
          <span className="text-xs font-bold text-[#F3F054]">24時間受付中</span>
        </span>
        <ChevronRight className="size-6 shrink-0 rounded-full bg-white/25 p-0.5 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
