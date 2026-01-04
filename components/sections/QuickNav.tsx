"use client";

import Link from "next/link";
import { User, Sparkles, JapaneseYen, HelpCircle, MapPin } from "lucide-react";

const navItems = [
  { label: "ご挨拶", shortLabel: "挨拶", href: "#owner", icon: User },
  { label: "特徴", shortLabel: "特徴", href: "#features", icon: Sparkles },
  { label: "内容・料金", shortLabel: "料金", href: "#menu", icon: JapaneseYen },
  { label: "よくある質問", shortLabel: "Q&A", href: "#faq", icon: HelpCircle },
  { label: "アクセス", shortLabel: "アクセス", href: "#access", icon: MapPin },
];

export function QuickNav() {
  return (
    <nav className="w-full bg-white border-b border-border/30 sticky top-0 z-30">
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center justify-center py-3 md:py-4 px-0.5
                hover:bg-background transition-colors group
                w-1/5 
                /* 枠線の制御：右側のみ入れる */
                border-r border-border/30 last:border-r-0
              `}
            >
              {/* アイコン：スマホでは少し小さく */}
              <item.icon className="size-5 md:size-6 text-accent mb-1 group-hover:scale-110 transition-transform duration-300" />
              
              {/* テキスト：スマホでは短いラベル、PCではフルラベル */}
              <span className="text-[10px] md:text-sm font-bold text-text-muted leading-tight text-center tracking-tighter">
                <span className="block md:hidden">{item.shortLabel}</span>
                <span className="hidden md:block">{item.label}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
