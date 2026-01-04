import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Armchair, Utensils, Landmark } from "lucide-react";

const features = [
  {
    icon: Armchair,
    title: "つらい運動は\n必要ありません",
    description:
      "ダイエットのために, 苦手な運動を無理に始める必要はありません。代謝が落ちている状態で激しく動くと, かえって食欲が増したり, 関節を痛める原因になることも。家事や日常の動きだけで十分です。",
    image: "/images/feature-exercise.webp",
  },
  {
    icon: Utensils,
    title: "無理な食事制限なし＆\nプロの栄養サポート",
    description:
      "極端に食べないダイエットは筋肉を落とし, リバウンドのもと。必要な栄養を摂りながら「燃やす力」を育てます。お酒や外食もOK。おつまみの選び方や外食での食べ方も、一緒に考えていきます。",
    image: "/images/feature-diet.webp",
  },
  {
    icon: Landmark,
    title: "お寺で整える\n特別なプライベート空間",
    description:
      "忙しい日常から離れ, 静寂に包まれたお寺での施術。ここは, 心と体を一度リセットするための場所です。誰にも知られず, あなただけの落ち着いた時間の中で, 誠実に向き合いサポートいたします。",
    image: "/images/feature-temple.webp",
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
              className="group relative flex flex-col items-center text-center bg-background/30 p-8 md:p-10 rounded-[2.5rem] border-2 border-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white hover:border-primary/30"
            >
              {/* Number Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg z-20">
                {index + 1}
              </div>

              {/* Image with Icon Overlay */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-md">
                <Image
                  src={feature.image}
                  alt={feature.title.replace("\n", "")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl shadow-lg">
                  <feature.icon className="size-6 md:size-8 text-accent" />
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-black text-primary mb-6 whitespace-pre-wrap leading-tight min-h-[4rem] flex items-center justify-center">
                {feature.title}
              </h3>
              
              <p className="text-text text-base md:text-lg font-bold leading-relaxed text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
