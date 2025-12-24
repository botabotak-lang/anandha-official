import { SectionHeading } from "@/components/ui/SectionHeading";
import { FileText, Sparkles } from "lucide-react";

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="MENU & PRICE"
          title="明確な料金システムで、安心して通っていただけます。"
          align="center"
        />

        <div className="mt-12 md:mt-16 space-y-8">
          {/* Item 1: Counseling */}
          <div className="group rounded-2xl border border-border bg-background/30 p-6 md:p-8 hover:border-primary/50 transition-colors">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full h-fit shrink-0 shadow-sm">
                  <FileText className="size-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-text">カウンセリング（初回無料）</h3>
                  <p className="text-text leading-relaxed text-sm md:text-base">
                    まずはあなたの現状を把握し、最適なプランをご提案します。
                  </p>
                  <ul className="space-y-2 text-sm text-text-muted bg-white/50 p-4 rounded-lg">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      現在の健康状態・食生活のヒアリング
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      耳つぼ痩身プログラムの提案・詳細説明
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      体重測定（基礎代謝・体脂肪率の測定）
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 md:text-right mt-2 md:mt-0 pl-[3.5rem] md:pl-0">
                <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                  無料
                </span>
              </div>
            </div>
          </div>

          {/* Item 2: Diet Program */}
          <div className="group rounded-2xl border border-border bg-background/30 p-6 md:p-8 hover:border-primary/50 transition-colors">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full h-fit shrink-0 shadow-sm">
                  <Sparkles className="size-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-text">耳つぼダイエット</h3>
                  <p className="text-text leading-relaxed text-sm md:text-base">
                    週2回ほどの通院で、身体のバランスを整えていきます。
                  </p>
                  <div className="text-sm text-text-muted bg-white/50 p-4 rounded-lg space-y-3">
                    <p className="font-medium text-text border-b border-primary/10 pb-2">施術内容: 体重測定・食生活チェック、カウンセリング</p>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex justify-between items-center">
                        <span>耳つぼ施術 (1回)</span>
                        <span className="font-bold text-lg text-text">3,080円</span>
                      </div>
                      <div className="text-xs text-text-muted text-right">
                        （施術2,200円 材料880円）
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-primary/10">
                      <span>補助食品</span>
                      <span className="font-bold text-lg text-text">6,264円</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
