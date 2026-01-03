"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#F9F7F2] py-4 md:py-8">
      {/* 
        画像コンテナ: 
        - スマホで幅一杯、PC/タブレットでは500pxに制限
        - ボタン配置のために relative を指定
      */}
      <div className="relative w-full md:max-w-[500px] mx-auto shadow-xl overflow-hidden bg-white">
        
        {/* メインのSVG画像（スマホ用デザイン1枚） */}
        <div className="w-full">
          <Image
            src="/images/TOP_hero.svg"
            alt="3ヶ月で平均-10kgを目指す耳つぼダイエット。運動なし・無理な食事制限なし・お寺のプライベートサロン。"
            width={500}
            height={800}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* 
          CTAボタンエリア:
          - 共通コンポーネント ButtonLink を使用して LINE アイコン付きボタンを配置
        */}
        <div className="absolute bottom-4 left-0 w-full px-5 flex justify-center">
          <ButtonLink
            href="https://lin.ee/bbJLZFe"
            label="今すぐ体験を予約する"
            description="LINEで24時間受付中"
            variant="line"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full shadow-2xl !px-8 !py-5 !text-lg md:!text-xl md:!py-6"
          />
        </div>
      </div>
    </section>
  );
}
