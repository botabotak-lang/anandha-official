import { AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-4xl">
        <SectionHeading
            eyebrow="PROBLEM"
          title="「昔と同じ食事なのに、なぜか太ってしまう」その原因は、年齢による「代謝の低下」かもしれません。"
            align="center"
            icon={AlertCircle}
          />
          
          <div className="mt-12 md:mt-16 flex flex-col gap-10">
            {/* お悩みテキストのみのレイアウト */}
            <div className="space-y-8 text-base md:text-lg leading-relaxed text-text">
              <div className="space-y-6">
                <p>
                  子育てもひと段落し、これからは自分のための人生を楽しみたい。そう思っているのに、鏡を見るたびにため息が出てしまうことはありませんか？
                </p>
                <ul className="space-y-4 bg-background/50 p-6 rounded-2xl border border-primary/10">
                  <li className="flex gap-3 items-start">
                    <span className="text-primary text-xl">✔</span>
                    <span>「食事の量は変えていないのに、体重が増え続ける」</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary text-xl">✔</span>
                    <span>「膝や腰が痛くて、運動なんてとてもできない」</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary text-xl">✔</span>
                    <span>「健康診断の数値が悪化して、将来が不安…」</span>
                </li>
            </ul>
              </div>

              <div className="space-y-6">
              <p>
                いろいろなダイエットを試してはリバウンドを繰り返し、「私の意志が弱いから」とご自身を責めてしまっているかもしれません。
              </p>
                <p className="font-bold text-primary text-xl border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                  でも、どうか安心してください。<br className="hidden md:block"/>
                  痩せにくいのは、あなたの努力が足りないからではありません。
                </p>
              <p>
                  年齢とともに<span className="bg-yellow-100 px-1 font-bold text-text">「基礎代謝」</span>が落ちてしまい、若い頃のようにエネルギーを消費できなくなっているのが大きな原因なのです。
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
