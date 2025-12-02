import Image from "next/image";
import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";

export function Owner() {
  return (
    <section className="bg-background px-5 py-20" id="owner">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionHeading
          eyebrow="Owner"
          title="私も、過去に「痩せない悩み」を抱えていました。"
          align="center"
        />

        <div className="grid gap-10 rounded-[2.5rem] bg-white p-8 shadow-lg md:grid-cols-2 md:p-12">
          <div className="space-y-4 text-base leading-loose text-text-main">
            <p className="text-lg font-semibold text-primary">Anandah オーナー 窪田佑美</p>
            <p>
              今でこそこうして皆様にダイエットのアドバイスをさせていただいていますが、実は私自身も、過去には体重増加に悩み、何をしても痩せられない時期がありました。
            </p>
            <p>
              40代を過ぎて代謝が落ち、自己流のダイエットでは限界を感じていた時に、この耳つぼダイエットに出会いました。その結果、
              <strong className="text-secondary">-6kg</strong>
              の減量に成功。無理なく健康的に痩せられたことに、私自身が一番驚きました。
            </p>
            <p>
              「好きな服を着られる喜び」と「健康な体を取り戻す安心感」。この感動を、同じ悩みを持つ同世代の女性に伝えたい。その一心でサロンをオープンしました。
            </p>
            <p>
              痩せることを目的とするだけでなく、その先にある「笑顔で過ごす毎日」を一緒に叶えましょう。私が全力でサポートいたします。
            </p>
          </div>

          <div className="flex flex-col gap-6 md:max-w-sm">
            {/* オーナー写真 */}
            <div className="relative h-96 overflow-hidden rounded-[2rem] md:h-[400px]">
              <img
                src="/images/owner.jpg"
                alt="Anandahオーナー 窪田佑美の笑顔写真"
                className="h-full w-full object-contain object-center"
              />
            </div>

            {/* ビフォーアフター写真 */}
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <div className="absolute left-0 top-0 z-10 rounded-br-xl bg-secondary px-3 py-1 text-xs font-bold text-white">
                Before / After
              </div>
              <img
                src="/images/before-after.jpg"
                alt="オーナーのビフォーアフター比較写真"
                className="h-auto w-full object-cover"
              />
            </div>
            
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 p-4 text-sm text-text-muted">
              <Quote className="size-5 text-accent shrink-0" />
              <span>女性お一人おひとりのペースに合わせ、優しく寄り添います。</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



