import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageCircleHeart, Sparkles, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageCircleHeart,
    step: "STEP.01",
    title: "カウンセリング",
    description:
      "90分ほどで、あなたに最適なダイエットプランをご提案します。期間や料金も事前に分かるのでご安心ください。",
  },
  {
    icon: Sparkles,
    step: "STEP.02",
    title: "ダイエット開始",
    description:
      "「これならできそう！」と思えたら、お申し込みください。耳つぼ施術は1回15分ほど、週2回お越しください。",
  },
  {
    icon: Trophy,
    step: "STEP.03",
    title: "卒業",
    description:
      "目標体重に達したら、卒業です。無料アフターフォローがあるので、リバウンドの心配もありません。",
  },
];

export function Flow() {
  return (
    <section id="flow" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FLOW"
          title="卒業まで、無理なく続けられる3ステップ"
          align="center"
        />

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-8 md:gap-6 justify-center">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex-1 bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col items-center text-center group"
            >
              <div className="mb-6 bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <item.icon className="size-8 text-primary" />
              </div>
              <span className="text-primary font-bold tracking-wider text-sm mb-2 block">
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-text mb-4">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.description}
              </p>
              
              {/* 矢印（モバイルでは下、PCでは右） - 最後以外に表示 */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary/30"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
