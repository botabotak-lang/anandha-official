import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Owner() {
  return (
    <section id="owner" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="OWNER MESSAGE"
          title="私も、過去に「痩せない悩み」を抱えていました。"
          align="center"
        />

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-square max-w-md rounded-[2rem] overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/owner.jpg"
              alt="Anandha オーナー 窪田佑美"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-3">
              <p className="text-base md:text-lg text-text-muted tracking-wider font-bold">Anandha オーナー</p>
              <h3 className="text-3xl md:text-4xl font-black text-primary">窪田 佑美</h3>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-text">
              <p>
                はじめまして。今でこそこうして皆様にダイエットのアドバイスをさせていただいていますが、実は私自身も、過去には体重増加に悩み、何をしても痩せられない時期がありました。
              </p>
              <p>
                40代を過ぎて代謝が落ち、自己流のダイエットでは限界を感じていた時に、この耳つぼダイエットに出会いました。
              </p>
              <p>
                その結果、2ヶ月でマイナス6kgの減量に成功。無理なく健康的に痩せられたことに、私自身が一番驚きました。
              </p>

              {/* Before After Image */}
              <div className="my-10 bg-white p-6 rounded-2xl shadow-lg border border-border">
                <div className="relative w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/before-after.jpg"
                    alt="オーナー自身のビフォーアフター - 2ヶ月でマイナス6kg達成"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-lg md:text-xl font-black text-accent">
                  ▲ 実際の私です。2ヶ月で-6kgを達成しました。
                </p>
              </div>

              <p>
                「好きな服を着られる喜び」と「健康な体を取り戻す安心感」。この感動を、同じ悩みを持つ同世代の女性に伝えたい。その一心でサロンをオープンしました。
              </p>
              <p className="font-black text-primary text-xl md:text-2xl pt-4 leading-tight">
                痩せることを目的とするだけでなく、その先にある「笑顔で過ごす毎日」を一緒に叶えましょう。私が全力でサポートいたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
