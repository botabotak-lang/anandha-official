import { SectionHeading } from "@/components/ui/SectionHeading";
import { Armchair, Utensils, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Armchair,
    title: "つらい運動は\n必要ありません",
    description:
      "ダイエットのために、苦手な運動を無理に始める必要はありません。代謝が落ちている状態で激しく動くと、かえって食欲が増したり、関節を痛める原因になることも。家事や日常の動きだけで十分です。",
  },
  {
    icon: Utensils,
    title: "無理な食事制限なし＆\nプロの栄養サポート",
    description:
      "極端に食べないダイエットは筋肉を落とし、リバウンドのもと。必要な栄養を摂りながら「燃やす力」を育てます。お酒や外食もOK。おつまみの選び方や外食での食べ方も、一緒に考えていきます。",
  },
  {
    icon: HeartHandshake,
    title: "マンツーマンで\n徹底サポート",
    description:
      "経験豊富なプロのカウンセラーが、あなたと二人三脚で歩みます。体重の減り方や生活習慣は人それぞれ。あなたに合わせたアドバイスで、停滞期も孤独にさせません。",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FEATURES"
          title="Anandhaが選ばれる3つの理由"
          align="center"
        />

        <div className="mt-12 md:mt-20 grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center bg-background/30 p-10 rounded-[2.5rem] border-2 border-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white hover:border-primary/30"
            >
              {/* Number Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                {index + 1}
              </div>

              <div className="mb-8 bg-white p-5 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                <feature.icon className="size-10 md:size-12 text-accent" />
              </div>
              
              <h3 className="text-2xl font-black text-primary mb-6 whitespace-pre-wrap leading-tight min-h-[4rem] flex items-center justify-center">
                {feature.title}
              </h3>
              
              <p className="text-text text-lg md:text-xl font-bold leading-relaxed text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
