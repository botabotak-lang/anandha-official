import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageCircleHeart, Sparkles, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "カウンセリング",
    description:
      "90分ほどで、あなたに最適なダイエットプランをご提案します。期間や料金も事前に分かるのでご安心ください。",
    icon: MessageCircleHeart,
  },
  {
    number: "02",
    title: "ダイエット開始",
    description:
      "「これならできそう！」と思えたら、お申し込みください。耳つぼ施術は1回15分ほど、週2回お越しください。",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "卒業",
    description:
      "目標体重に達したら、卒業です。無料アフターフォローがあるので、リバウンドの心配もありません。",
    icon: Trophy,
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

        <div className="mt-12 md:mt-16 relative">
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 md:hidden" />
          
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20" />

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex md:flex-col gap-6 md:gap-8">
                {/* Icon/Number Circle */}
                <div className="relative z-10 shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-primary text-primary shadow-sm">
                    <step.icon className="size-7" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                    STEP.{step.number}
                  </div>
                </div>

                <div className="pt-2 md:pt-0 md:text-center">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    STEP.{step.number} {step.title}
                  </h3>
                  <p className="text-text text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
