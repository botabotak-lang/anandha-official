"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Owner() {
  return (
    <section id="owner" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="OWNER MESSAGE"
          title="「痩せる」だけではありません。将来の医療費を節約する、賢い健康投資です。"
          align="center"
        />

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* オーナー画像 */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] max-w-xl rounded-[2rem] overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/owner.webp"
              alt="Anandha ダイエットカウンセラー 窪田佑美"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* メッセージコンテンツ */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-accent font-bold tracking-wider">ダイエットカウンセラー</p>
              <h3 className="text-3xl font-bold text-primary">窪田 佑美</h3>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-text">
              <p>
                はじめまして。今でこそダイエットカウンセラーとして皆様に伴走していますが、私自身も<span className="bg-yellow-100 px-1 font-black">40歳を過ぎてから、「40代の壁」に直面</span>し、これまでのやり方では全く痩せられなくなる絶望を経験しました。
              </p>
              <p>
                鏡を見るのが嫌になり、健康診断の結果に怯え、家族に迷惑をかけたくないという焦りを感じる日々。私自身がその辛さを誰よりも知っています。
              </p>

              {/* Before After Image */}
              <div className="my-8 bg-white p-4 rounded-xl shadow-md border border-border">
                <div className="relative w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/before-after.jpg"
                    alt="オーナー自身のビフォーアフター - 2ヶ月でマイナス6kg達成"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-sm font-bold text-accent">
                  ▲ 実際の私です。2ヶ月で-6kgを達成しました。
                </p>
              </div>
              
              <div className="bg-white/60 p-6 rounded-2xl border-l-4 border-accent shadow-sm italic">
                <p className="font-bold text-primary">
                  「これは美容という贅沢ではなく、一生を笑顔で過ごすための<span className="bg-yellow-100 px-1">『健康投資』</span>なのだ」
                </p>
              </div>

              <p>
                耳つぼを通じた体質改善に出会い、私自身も2ヶ月で-6kgという変化を実感しました（※）。何より嬉しかったのは、将来への不安が消え、自分に自信を取り戻せたことです。
              </p>
              
              <p>
                Anandha（アナンダ）のプログラムは、単に一時的な数字を追うものではありません。3ヶ月かけて、お寺という誠実な場所で、一生モノの<span className="bg-yellow-100 px-1 font-black">「痩せ習慣」</span>を一緒に作っていきます。
              </p>
              
              <p className="font-black text-primary text-2xl md:text-3xl pt-4 leading-tight">
                10年後のあなたとご家族の笑顔のために。勇気を持って踏み出すその一歩を、私が全力でサポートいたします。
              </p>
              
              <p className="text-xs text-text-muted mt-4">
                ※オーナー個人の体験談です。結果には個人差があり、3ヶ月を目安としたプログラムを提供しています。
              </p>
            </div>

            {/* CTAボタン */}
            <div className="pt-8 flex justify-center md:justify-start">
              <ButtonLink
                href="https://lin.ee/bbJLZFe"
                label="今すぐ体験を予約する"
                description="LINEで24時間受付中"
                variant="line"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto shadow-2xl !px-12 !py-6 !text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
