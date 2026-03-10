import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { MessageCircleHeart, Sparkles, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "カウンセリング",
    description:
      "90分ほどで, あなたに最適なダイエットプランをご提案します。期間や料金も事前に分かるのでご安心ください。",
    icon: MessageCircleHeart,
    image: "/images/flow_1.webp",
  },
  {
    number: "02",
    title: "ダイエット開始",
    description:
      "「これならできそう！」と思えたら, お申し込みください。耳つぼ施術は1回15分ほど, 週2回お越しください。",
    icon: Sparkles,
    image: "/images/flow_2.webp",
  },
  {
    number: "03",
    title: "卒業",
    description:
      "目標体重に達したら, 卒業です。無料アフターフォローがあるので, リバウンドの心配もありません。",
    icon: Trophy,
    image: "/images/flow_3.webp",
  },
];

export function Flow() {
  return (
    <section id="flow" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="FLOW"
            title="卒業まで、無理なく続けられる3ステップ"
            align="center"
          />
        </FadeIn>

        <div className="mt-12 md:mt-16 relative">
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 md:hidden" />

          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-primary/20" />

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="relative flex md:flex-col gap-6 md:gap-0">
                  {/* Icon/Number Circle */}
                  <div className="relative z-10 shrink-0 md:self-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border-4 border-primary text-primary shadow-md">
                      <step.icon className="size-10" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-accent text-white text-sm font-black px-3 py-2 rounded-full shadow-sm">
                      STEP.{step.number}
                    </div>
                  </div>

                  <div className="pt-2 md:pt-6 md:text-center flex-1">
                    {/* 写真を先に・アスペクト比を縦長に変更して面積アップ */}
                    {step.image && (
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg mb-5 border border-primary/10">
                        <Image
                          src={step.image}
                          alt={`${step.title}の様子`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <h3 className="text-2xl font-black text-primary mb-3">
                      STEP.{step.number} {step.title}
                    </h3>

                    <p className="text-text text-lg md:text-xl font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
