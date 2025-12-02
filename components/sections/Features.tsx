import { Dumbbell, Handshake, Utensils } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "つらい運動は必要ありません",
    description:
      "代謝が落ちている状態で激しく動くと、かえって食欲が増したり、関節を痛める原因にも。日常の家事や散歩の範囲で十分です。",
    icon: Dumbbell,
  },
  {
    title: "無理な食事制限なし＆プロの栄養サポート",
    description:
      "極端に食べないダイエットは筋肉を落とし、リバウンドのもと。必要な栄養を摂りながら「燃やす力」を育てます。お酒や外食もOK。おつまみの選び方や外食での食べ方も、一緒に考えていきます。",
    icon: Utensils,
  },
  {
    title: "マンツーマンで徹底サポート",
    description:
      "経験豊富なカウンセラーがあなた専用の計画で伴走。停滞期も孤独にさせず、卒業まで寄り添います。",
    icon: Handshake,
  },
];

export function Features() {
  return (
    <section className="bg-background px-5 py-20" id="features">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionHeading
          eyebrow="Features"
          title="Anandahが選ばれる3つの理由"
          align="center"
          description="安心して任せていただくために、身体と心に優しい仕組みを整えています。"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-primary">
                <Icon className="size-8 text-secondary" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-base leading-loose text-text-main">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


