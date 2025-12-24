"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Leaf, Phone, Sparkles } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const MAIN_COPY_2 = "人生最後のダイエットで、心と体を「健康」へ。";

const heroImages = [
  { 
    src: "/images/owner.jpg", 
    alt: "Anandha オーナーが笑顔でお出迎え",
    title: "2ヶ月で体重-6kg。\n何をしても痩せなかった私が変われた。\n次は、あなたの番です。"
  },
  { 
    src: "/images/hero-2.jpg", 
    alt: "サロンの雰囲気",
    title: MAIN_COPY_2
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section id="hero" className="bg-primary rounded-b-[2.5rem]">
      {/* 1. 画像エリア */}
      <div className="relative h-[450px] md:h-[650px] overflow-hidden rounded-b-[2.5rem]">
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
              className={`object-cover ${index === 0 ? 'object-[center_15%] md:object-top' : 'object-center'}`}
              unoptimized
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/40" />
          </div>
        ))}
        {/* ドット */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* 2. 白帯コピーエリア（画像の下に自然に配置） */}
      <div className="relative z-20 -mt-12 md:-mt-16 px-4 space-y-3 mb-12">
        {currentIndex === 0 ? (
          <>
            <div className="bg-white/95 backdrop-blur-sm px-6 py-3 transform -rotate-1 shadow-xl max-w-md mx-auto">
              <h2 className="text-xl md:text-3xl font-black text-accent tracking-wider text-center">
                2ヶ月で体重 <span className="text-3xl md:text-5xl text-[#E91E63]">-6kg</span>
              </h2>
            </div>
            <div className="bg-white/95 backdrop-blur-sm px-6 py-4 transform rotate-1 shadow-lg max-w-lg mx-auto">
              <p className="text-base md:text-lg font-bold text-text-muted text-center leading-snug">
                何をしても痩せなかった私が変われた。<br className="md:hidden"/>次は、あなたの番です。
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm px-6 py-3 transform -rotate-1 shadow-xl max-w-sm mx-auto">
              <p className="text-base md:text-xl font-black text-[#E91E63] text-center">
                運動なし、無理な食事制限なし
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white/95 backdrop-blur-sm px-8 py-6 transform -rotate-1 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-black text-accent tracking-wider text-center leading-relaxed">
                人生最後のダイエットで、<br className="md:hidden"/>心と体を「健康」へ。
              </h2>
            </div>
            <div className="bg-white/95 backdrop-blur-sm px-6 py-3 transform rotate-1 shadow-xl max-w-sm mx-auto">
              <p className="text-base md:text-xl font-black text-[#E91E63] text-center">
                運動なし、無理な食事制限なし
              </p>
            </div>
          </>
        )}
      </div>

      {/* 3. コンテンツエリア（緑背景の中） */}
      <div className="mx-auto max-w-5xl px-5 pb-24 space-y-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center md:text-left border border-white/10">
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-white/90 mb-6">
            <Leaf className="size-4" />
            耳つぼダイエットサロン Anandha
          </div>
          <p className="text-lg md:text-2xl text-white leading-relaxed font-bold mb-8">
            40代からの身体が変わる。無理なく食べて、美しく痩せる
            <br />
            耳つぼダイエットサロン Anandha
          </p>
          <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-start">
            <ButtonLink href="https://lin.ee/bbJLZFe" label="LINEで予約する" description="24時間受付" variant="line" target="_blank" />
            <ButtonLink href="tel:090-5626-2380" label="電話で相談する" description="9:00-21:00 / 日曜(要予約)" icon={Phone} variant="surface" className="!text-accent" />
          </div>
        </div>

        {/* 4. 特徴（白背景） */}
        <div className="grid gap-4 rounded-3xl bg-white/95 p-8 shadow-xl text-stone-800 font-medium">
          <div className="flex items-center gap-4">
            <Sparkles className="size-6 text-accent shrink-0" />
            <p className="text-base md:text-lg">耳つぼ＋栄養サポートで「代謝」と「食欲」をやさしく整えます</p>
          </div>
          <div className="flex items-center gap-4">
            <Sparkles className="size-6 text-accent shrink-0" />
            <p className="text-base md:text-lg">無理な運動や極端な食事制限は不要。「好き」を諦めないダイエット</p>
          </div>
          <div className="flex items-center gap-4">
            <Sparkles className="size-6 text-accent shrink-0" />
            <p className="text-base md:text-lg">完全予約制・プライベート空間。マンツーマンで卒業まで伴走します</p>
          </div>
        </div>
      </div>
    </section>
  );
}
