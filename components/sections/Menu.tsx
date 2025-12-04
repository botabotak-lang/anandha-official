import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="MENU & PRICE"
          title="明確な料金システムで、安心して通っていただけます。"
          align="center"
        />

        <div className="mt-12 md:mt-16 flex flex-col gap-8">
          {/* Item 1: Counseling */}
          <div className="border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-primary p-4 text-center">
              <h3 className="text-white font-bold text-xl">カウンセリング（初回無料）</h3>
            </div>
            <div className="p-6 md:p-8 bg-white space-y-4">
              <p className="text-text font-medium text-lg text-center mb-6">
                まずはあなたの現状を把握し、最適なプランをご提案します。
              </p>
              <div className="bg-background p-6 rounded-xl">
                <h4 className="text-sm font-bold text-text-muted mb-3 uppercase tracking-wider">内容</h4>
                <ul className="space-y-3 text-text">
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>現在の健康状態・食生活のヒアリング</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>耳つぼ痩身プログラムの提案・詳細説明</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>体重測定（基礎代謝・体脂肪率の測定）</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 2: Ear Diet */}
          <div className="border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-text p-4 text-center">
              <h3 className="text-white font-bold text-xl">耳つぼダイエット</h3>
            </div>
            <div className="p-6 md:p-8 bg-white space-y-6">
              <p className="text-text font-medium text-lg text-center mb-2">
                週2回ほどの通院で、身体のバランスを整えていきます。
              </p>
              <p className="text-center text-sm text-text-muted">
                施術内容: 体重測定・食生活チェック、カウンセリング
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background p-6 rounded-xl flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-bold text-text-muted mb-2">耳つぼ施術</span>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-primary">1回 3,080</span>
                    <span className="text-sm text-text pb-1">円</span>
                  </div>
                  <span className="text-xs text-text-muted mt-1">（施術2,200円 材料880円）</span>
                </div>

                <div className="bg-background p-6 rounded-xl flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-bold text-text-muted mb-2">補助食品</span>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-primary">6,264</span>
                    <span className="text-sm text-text pb-1">円</span>
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
