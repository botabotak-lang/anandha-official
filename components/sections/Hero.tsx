"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#F9F7F2] py-4 md:py-8">
      {/* 
        画像コンテナ: 
        - スマホで幅一杯、PC/タブレットでは500pxに制限
      */}
      <div className="relative w-full md:max-w-[500px] mx-auto shadow-xl overflow-hidden bg-white">
        
        {/* メインのSVG画像（スマホ用デザイン1枚：TOP_hero3.svg） */}
        <div className="w-full">
          <Image
            src="/images/TOP_hero3.svg"
            alt="お寺で整える、40代・50代からの人生最後の体質改善。3ヶ月で平均-10kgを目指す耳つぼダイエット。"
            width={500}
            height={800}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>
    </section>
  );
}
