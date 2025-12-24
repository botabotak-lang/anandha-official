import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Owner() {
  return (
    <section id="owner" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="OWNER PROFILE"
          title="私も、過去に「痩せない悩み」を抱えていました。"
          align="center"
        />

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto rounded-full overflow-hidden shadow-lg md:order-last border-4 border-white/50">
            <Image
              src="/images/owner.jpg"
              alt="Anandha オーナー 窪田佑美"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="space-y-6 text-text leading-relaxed">
            <div className="mb-4">
              <p className="text-sm font-bold text-primary tracking-wider mb-1">Anandha オーナー</p>
              <h3 className="text-2xl font-bold">窪田 佑美</h3>
            </div>

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
            <div className="my-8 bg-white p-4 rounded-xl shadow-md border border-border">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/before-after.jpg"
                  alt="オーナー自身のビフォーアフター - 2ヶ月でマイナス6kg達成"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-center text-sm font-bold text-accent">
                ▲ 実際の私です。2ヶ月で-6kgを達成しました。
              </p>
            </div>

            <p>
              「好きな服を着られる喜び」と「健康な体を取り戻す安心感」。この感動を、同じ悩みを持つ同世代の女性に伝えたい。その一心でサロンをオープンしました。
            </p>
            <p className="font-bold text-primary text-lg">
              痩せることを目的とするだけでなく、その先にある「笑顔で過ごす毎日」を一緒に叶えましょう。私が全力でサポートいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
