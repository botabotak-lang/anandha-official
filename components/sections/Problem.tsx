import Image from "next/image";
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
          
          <div className="mt-12 md:mt-16 flex flex-col gap-12">
            {/* 導入テキスト */}
            <p className="text-lg md:text-xl leading-relaxed text-text text-center md:text-left">
              子育てもひと段落し、これからは自分のための人生を楽しみたい。そう思っているのに、鏡を見るたびにため息が出てしまうことはありませんか？
            </p>

            {/* 画像と箇条書きのエリア */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* 画像 */}
              <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl order-1 md:order-1">
                <Image
                  src="/images/problem.webp"
                  alt="鏡を見て悩む女性のイメージ"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 箇条書き（チェックリスト） */}
              <div className="w-full md:w-1/2 order-2 md:order-2">
                <ul className="space-y-6 bg-background/50 p-6 md:p-8 rounded-3xl border border-primary/10 shadow-sm">
                  <li className="flex gap-4 items-start text-base md:text-lg">
                    <span className="text-primary text-xl md:text-2xl font-bold shrink-0">✔</span>
                    <span className="font-bold text-text">「食事の量は変えていないのに、体重が増え続ける」</span>
                  </li>
                  <li className="flex gap-4 items-start text-base md:text-lg">
                    <span className="text-primary text-xl md:text-2xl font-bold shrink-0">✔</span>
                    <span className="font-bold text-text">「膝や腰が痛くて、運動なんてとてもできない」</span>
                  </li>
                  <li className="flex gap-4 items-start text-base md:text-lg">
                    <span className="text-primary text-xl md:text-2xl font-bold shrink-0">✔</span>
                    <span className="font-bold text-text">「健康診断の数値が悪化して、将来が不安…」</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 解説テキスト */}
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-text">
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
    </section>
  );
}
