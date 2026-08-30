"use client";

import Image from "next/image";

/**
 * FV画像（750×1708）内にあるLINE CTAボタンの位置。
 * 画像から実測した緑ボタンの範囲に、タップしやすいよう上下左右の余白を少し加えている。
 * すべて%指定なので、画像が比率を保って伸縮しても位置がズレない。
 */
const CTA_AREA = {
  left: "4.5%",
  top: "86.8%",
  width: "91%",
  height: "10.2%",
} as const;

const LINE_URL = "https://lin.ee/bbJLZFe";

export function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#F9F7F2] py-4 md:py-8">
      {/*
        画像コンテナ:
        - スマホで幅一杯、PC/タブレットでは500pxに制限
      */}
      <div className="relative w-full md:max-w-[500px] mx-auto shadow-xl overflow-hidden bg-white">

        {/* メインのFV画像（画像内にLINE CTAボタンを含む） */}
        <div className="relative w-full">
          <Image
            src="/images/FV_v2.webp"
            alt="藤枝市下藪田・最林寺内のお寺のプライベートサロン。40代〜50代からの耳つぼダイエットで3ヶ月-10kg。初回WEB予約限定キャンペーン 3,080円→1,500円（税込）。"
            width={750}
            height={1708}
            sizes="(max-width: 768px) 100vw, 500px"
            className="w-full h-auto block"
            priority
          />

          {/*
            画像内のLINEボタンに重ねる透明リンク。
            光沢が横切るエフェクトだけを重ねて「押せる」ことを伝える。
          */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINEで予約する（24時間受付中）"
            data-cta="hero-line"
            style={CTA_AREA}
            className="absolute block overflow-hidden rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00C300]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-cta-shine motion-reduce:hidden"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
