import Image from "next/image";
import { Leaf, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    title: "食欲を自然にコントロール",
    description:
      "食欲中枢を穏やかに刺激し、「食べたい」という衝動を落ち着かせます。小さな金粒を貼るだけで、無理なく食事量が整っていきます。",
  },
  {
    title: "代謝機能を活性化",
    description:
      "代謝アップのツボを刺激し、落ちてしまった「燃やす力」を取り戻します。無理な運動をしなくても、体の内側から燃えやすい状態へ。",
  },
];

export function Solution() {
  return (
    <section className="bg-white px-5 py-20" id="solution">
      <div className="mx-auto max-w-5xl space-y-10">
        <SectionHeading
          eyebrow="Solution"
          icon={Leaf}
          title="必要なのは「我慢」ではありません。耳つぼで「代謝」と「食欲」のスイッチを入れましょう。"
          description={
            <>
              Anandah（アナンダ）が提供するのは、医学的根拠に基づいた「耳つぼダイエット」です。
              耳には、自律神経や内臓の働きに関わる重要なツボが集中しています。
              ここに小さな「金粒」を貼ることで、以下の2つの効果を促します。
            </>
          }
          align="start"
        />

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative h-64 overflow-hidden rounded-3xl md:h-80 md:order-2">
            <Image
              src="/images/solution.jpg"
              alt="耳つぼ施術の様子"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="grid gap-6 md:order-1">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-surface/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 text-primary">
                  <Sparkles className="size-6 text-accent" />
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                </div>
                <p className="text-base leading-loose text-text-main">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-primary/10 p-6 text-base leading-loose text-primary shadow-inner">
          針は一切使いません。痛みは全くない、目立たない小さな粒を貼るだけ。また、身体への負担を考え、無理な運動もお勧めしていません。
          体の内側から「燃えやすい体」へと体質改善を促す。それが、私たちが提案する「人生最後のダイエット」です。
        </div>
      </div>
    </section>
  );
}


