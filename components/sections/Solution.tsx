import Image from "next/image";
import { Sparkles, Brain, Flame } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Solution() {
  return (
    <section id="solution" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* 1. 見出しブロック */}
        <div className="max-w-4xl mx-auto mb-12">
          <SectionHeading
            eyebrow="SOLUTION"
            title="必要なのは「我慢」ではありません。耳つぼで「代謝」と「食欲」のスイッチを入れましょう。"
            align="center"
            icon={Sparkles}
          />
        </div>

        {/* 2. 画像ブロック（見出しの下に移動） */}
        <div className="relative h-[300px] md:h-[500px] max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-xl mb-12">
          <Image
            src="/images/solution.jpg"
            alt="耳つぼ施術の様子"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        {/* 3. コンテンツブロック */}
        <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed text-text">
          <p>
            Anandha（アナンダ）が提供するのは、医学的根拠に基づいた「耳つぼダイエット」です。
          </p>
          <p>
            耳には、自律神経や内臓の働きに関わる重要なツボが集中しています。ここに小さな「金粒」を貼ることで、以下の2つの効果を促します。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Point 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <div className="flex flex-col items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Brain className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Point 1: 食欲を自然にコントロール</h3>
                  <p className="text-text-muted text-sm md:text-base">
                    食欲中枢を穏やかに刺激し、「食べたい」という衝動を落ち着かせます
                  </p>
                </div>
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <div className="flex flex-col items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Flame className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Point 2: 代謝機能を活性化</h3>
                  <p className="text-text-muted text-sm md:text-base">
                    代謝アップのツボも刺激することで、落ちてしまった「燃やす力」を取り戻します
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 p-6 rounded-2xl mt-8 text-sm md:text-base border-l-4 border-accent">
            <p className="mb-4">
              針は一切使いません。痛みもなく、目立たない小さな粒を貼るだけ。また、身体への負担を考え、無理な運動もお勧めしていません。
            </p>
            <p className="font-bold text-text">
              体の内側から「燃えやすい体」へと体質改善を促す。それが、私たちが提案する「人生最後のダイエット」です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
