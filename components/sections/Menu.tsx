import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="MENU"
          title="施術内容"
          align="center"
        />

        <div className="mt-12 md:mt-20 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* 左側：画像 */}
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/施術風景.webp"
              alt="施術の様子"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* 右側：詳細テキスト */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-black text-secondary leading-tight">
                耳つぼダイエット<br className="sm:hidden"/>【初回カウンセリング】
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-text-muted">
                3,080円 <span className="text-lg md:text-xl">(税込)</span>
              </p>
            </div>

            <div className="space-y-10 text-lg md:text-xl leading-relaxed text-text">
              {/* 施術の流れ */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 font-black text-primary border-l-8 border-primary pl-4">
                  ■ 施術の流れ
                </h4>
                <ul className="pl-4 space-y-3 font-bold">
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary/30" />
                    ヒアリング
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary/30" />
                    減量シミュレーション
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary/30" />
                    耳ツボ体験
                  </li>
                </ul>
              </div>

              {/* 所要時間 */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 font-black text-primary border-l-8 border-primary pl-4">
                  ■ 所要時間
                </h4>
                <div className="pl-4 space-y-3">
                  <p className="font-bold text-xl">1〜1.5時間</p>
                  <p className="text-lg md:text-xl text-secondary font-black">
                    ※相談だけでもOK！無理な勧誘はありません。
                  </p>
                </div>
              </div>

              {/* ポイント */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 font-black text-primary border-l-8 border-primary pl-4">
                  ■ ポイント
                </h4>
                <ol className="pl-4 space-y-5 font-bold">
                  <li className="flex gap-3 items-start">
                    <span className="text-primary font-black">①</span>
                    <span>運動なしでお腹から痩せるメソッドを徹底解説</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary font-black">②</span>
                    <span>あなたの痩せない原因を分析、プロの目線でアドバイス</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary font-black">③</span>
                    <span>1日目から効果を実感！耳つぼ施術体験</span>
                  </li>
                </ol>
                <p className="pl-4 text-base md:text-lg text-text-muted font-bold leading-relaxed pt-2">
                  ※皮内針は使用いたしませんので特に痛みはございません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
