"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Leaf, Phone, Sparkles } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

// スライドショー用の画像リスト（画像を追加する場合はここに追加）
const heroImages = [
  { 
    src: "/images/hero.jpg", 
    alt: "リラックスして笑顔を見せる女性",
    title: "運動も、我慢も、もう手放しましょう。"
  },
  { 
    src: "/images/hero-2.jpg", 
    alt: "サロンの雰囲気",
    title: "人生最後のダイエットで、心と体を「健康」へ。"
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動スライドショー（5秒ごとに切り替え）
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-b-[2.5rem] bg-primary text-white"
    >
      {/* スライドショー画像 */}
      <div className="relative h-[450px] md:h-[550px]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
              unoptimized
            />
            {/* 画像用オーバーレイ - 薄く調整 */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            
            {/* キャッチコピー（オーバーレイの上） */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="px-4 text-center">
                <h2 className="text-2xl font-bold text-white drop-shadow-lg md:text-4xl leading-relaxed tracking-wide">
                  {image.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 独立したオーバーレイは削除 */}

      {/* インジケーター（ドット） */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`スライド ${index + 1}に移動`}
          />
        ))}
      </div>

      <div className="relative z-30 mx-auto flex max-w-5xl flex-col gap-8 px-5 py-24">
        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/90">
          <Leaf className="size-4" />
          Anandah Ear Diet Salon
        </div>
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-surface/90 leading-relaxed">
            40代からの身体が変わる。無理なく食べて、美しく痩せる
            <br className="hidden md:block" />
            大人のための耳つぼダイエットサロン Anandah
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <ButtonLink
            href="https://lin.ee/bbJLZFe"
            label="LINEで予約する"
            description="24時間受付"
            variant="line"
            target="_blank"
            rel="noopener noreferrer"
          />
          <ButtonLink
            href="tel:090-5626-2380"
            label="電話で相談する"
            description="10:00-19:00 / 日祝休"
            icon={Phone}
            variant="secondary"
          />
        </div>

        <div className="grid gap-4 rounded-3xl bg-white/10 p-6 text-sm leading-relaxed backdrop-blur">
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-accent" />
            <p>耳つぼ＋栄養サポートで「代謝」と「食欲」をやさしく整えます</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-accent" />
            <p>無理な運動や極端な食事制限は不要。「好き」を諦めないダイエット</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-accent" />
            <p>完全予約制・プライベート空間。マンツーマンで卒業まで伴走します</p>
          </div>
        </div>
      </div>
    </section>
  );
}


