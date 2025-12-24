"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Leaf, Phone, Sparkles } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

// SPEC.mdに準拠したテキスト
const MAIN_COPY_1 = "運動も、我慢も、もう手放しましょう。";
const MAIN_COPY_2 = "人生最後のダイエットで、心と体を「健康」へ。";

// スライドショー用の画像リスト
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
      className="relative isolate overflow-hidden rounded-b-[2.5rem] bg-primary"
    >
      {/* スライドショー画像 */}
      <div className="relative h-[450px] md:h-[600px] z-0">
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
              className={`object-cover ${index === 0 ? 'object-[center_15%]' : 'object-center'}`}
              unoptimized
            />
            {/* 画像用オーバーレイ - 文字が見やすいように下部のみグラデーション */}
            <div 
              className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/40" 
            />
            
            {/* キャッチコピー（画像に重なる帯デザイン） */}
            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center justify-end z-20 px-4 space-y-3 pointer-events-none">
              {index === 0 ? (
                <>
                  {/* 帯デザイン 1: 数値 */}
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-2 transform -rotate-1 shadow-lg w-full max-w-xl mx-auto">
                    <h2 className="text-xl md:text-3xl font-black text-accent tracking-wider text-center">
                      2ヶ月で体重 <span className="text-3xl md:text-5xl text-[#E91E63]">-6kg</span>
                    </h2>
                  </div>
                  
                  {/* 帯デザイン 2: ストーリー */}
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-3 transform rotate-1 shadow-lg w-full max-w-2xl mx-auto mt-1">
                    <p className="text-base md:text-xl font-bold text-text-muted text-center leading-snug">
                      何をしても痩せなかった私が変われた。<br className="md:hidden"/>次は、あなたの番です。
                    </p>
                  </div>

                  {/* 名前 */}
                  <p className="mt-3 text-white text-xs md:text-sm font-bold bg-primary/80 px-4 py-1 rounded-full shadow-md backdrop-blur-sm">
                    Anandha オーナー 窪田 佑美
                  </p>
                </>
              ) : (
                <div className="bg-black/40 p-6 rounded-xl backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg md:text-4xl leading-loose tracking-wide whitespace-pre-wrap text-center">
                    {image.title}
                  </h2>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* インジケーター（ドット） - 画像エリア内に配置 */}
      <div className="absolute top-[400px] md:top-[550px] left-1/2 z-30 flex -translate-x-1/2 gap-2">
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

      <div className="relative z-30 mx-auto flex max-w-5xl flex-col gap-8 px-5 py-12 md:py-20">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center md:text-left shadow-2xl border border-white/20">
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm uppercase tracking-[0.3em] text-white/90 mb-6">
            <Leaf className="size-4" />
            Anandah Ear Diet Salon
          </div>
          <div className="space-y-6 mb-8">
            <p className="text-lg md:text-2xl text-white leading-relaxed font-bold">
              40代からの身体が変わる。
              <br className="hidden md:block" />
              無理なく食べて、美しく痩せる
              <br className="hidden md:block" />
              大人のための耳つぼダイエットサロン Anandha
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-start">
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
              variant="surface"
              className="!text-accent hover:!bg-white/90"
            />
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl bg-white/95 p-6 text-sm leading-relaxed shadow-xl text-stone-800 font-medium">
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-accent shrink-0" />
            <p>耳つぼ＋栄養サポートで「代謝」と「食欲」をやさしく整えます</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-accent shrink-0" />
            <p>無理な運動や極端な食事制限は不要。「好き」を諦めないダイエット</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-accent shrink-0" />
            <p>完全予約制・プライベート空間。マンツーマンで卒業まで伴走します</p>
          </div>
        </div>
      </div>
    </section>
  );
}
