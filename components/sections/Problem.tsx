import { Check, HeartCrack } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";

export function Problem() {
  const concerns = [
    "「食事の量は変えていないのに、体重が増え続ける」",
    "「膝や腰が痛くて、運動なんてとてもできない」",
    "「健康診断の数値が悪化して、将来が不安…」",
  ];

  return (
    <section className="bg-background px-5 py-20" id="problem">
      <div className="mx-auto max-w-5xl space-y-10">
        <SectionHeading
          eyebrow="Empathy"
          icon={HeartCrack}
          title="「昔と同じ食事なのに、なぜか太ってしまう」その原因は、年齢による「代謝の低下」かもしれません。"
          description={
            <>
              子育てもひと段落し、これからは自分のための人生を楽しみたい。
              そう思っているのに、鏡を見るたびにため息が出てしまうことはありませんか？
            </>
          }
          align="start"
        />

        <div className="rounded-[2.5rem] bg-surface p-8 shadow-sm md:p-12">
          <div className="mx-auto max-w-3xl space-y-8">
            <ul className="space-y-4 text-base md:text-lg font-medium text-text-main">
              {concerns.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/70 p-4 shadow-sm"
                >
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-6 text-base leading-loose text-text-main">
              <p>
                いろいろなダイエットを試してはリバウンドを繰り返し、「私の意志が弱いから」とご自身を責めてしまっているかもしれません。
              </p>
              <p>でも、どうか安心してください。</p>
              <p>
                痩せにくいのは、あなたの努力が足りないからではありません。
                年齢とともに<strong className="text-accent">「基礎代謝」</strong>
                が落ちてしまい、若い頃のようにエネルギーを消費できなくなっているのが大きな原因なのです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


