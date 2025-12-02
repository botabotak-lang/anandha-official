import { CalendarClock, CheckCircle2, ClipboardList } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    label: "STEP.01 カウンセリング",
    description:
      "90分ほどで、あなたに最適なダイエットプランをご提案。期間や料金も事前に分かるので安心です。",
    icon: ClipboardList,
  },
  {
    label: "STEP.02 ダイエット開始",
    description:
      "「これならできそう！」と思えたらお申し込み。耳つぼ施術は1回15分ほど、週2回お越しください。",
    icon: CalendarClock,
  },
  {
    label: "STEP.03 卒業",
    description:
      "目標体重に達したら卒業。無料アフターフォロー付きで、リバウンドの心配もありません。",
    icon: CheckCircle2,
  },
];

export function Flow() {
  return (
    <section className="bg-white px-5 py-20" id="flow">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionHeading
          eyebrow="Flow"
          title="卒業まで、無理なく続けられる3ステップ"
          align="center"
        />

        <div className="space-y-8">
          {steps.map(({ label, description, icon: Icon }, index) => (
            <div
              key={label}
              className="flex gap-4 rounded-3xl border border-border bg-background/70 p-6 shadow-sm"
            >
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-primary/10 text-primary text-xl font-bold">
                <Icon className="size-7" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                  {`Step ${index + 1}`}
                </p>
                <h3 className="text-lg font-semibold text-primary">{label}</h3>
                <p className="text-base leading-loose text-text-main">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


