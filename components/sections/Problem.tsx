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
            <div className="space-y-10 text-lg md:text-xl leading-relaxed text-text">
              <div className="space-y-8">
                <p>
                  子育てもひと段落し、これからは自分のための人生を楽しみたい。そう思っているのに、鏡を見るたびにため息が出てしまうことはありませんか？
                </p>
                <ul className="space-y-6 bg-background/50 p-8 rounded-3xl border border-primary/10 shadow-sm">
                  <li className="flex gap-4 items-start">
                    <span className="text-primary text-2xl font-bold">✔</span>
                    <span className="font-bold">「食事の量は変えていないのに、体重が増え続ける」</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary text-2xl font-bold">✔</span>
                    <span className="font-bold">「膝や腰が痛くて、運動なんてとてもできない」</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary text-2xl font-bold">✔</span>
                    <span className="font-bold">「健康診断の数値が悪化して、将来が不安…」</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <p>
                  いろいろなダイエットを試してはリバウンドを繰り返し、「私の意志が弱いから」とご自身を責めてしまっているかもしれません。
                </p>
                <p className="font-black text-primary text-2xl border-l-8 border-primary pl-6 py-4 bg-primary/5 rounded-r-2xl leading-tight">
                  でも、どうか安心してください。<br className="hidden md:block"/>
                  痩せにくいのは、あなたの努力が足りないからではありません。
                </p>
                <p>
                  年齢とともに<span className="bg-yellow-100 px-2 font-black text-text">「基礎代謝」</span>が落ちてしまい、若い頃のようにエネルギーを消費できなくなっているのが大きな原因なのです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
