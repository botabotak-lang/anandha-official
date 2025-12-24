import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Campaign() {
  return (
    <section id="campaign" className="py-20 md:py-28 bg-primary/5">
      <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
        <SectionHeading
          eyebrow="CAMPAIGN"
          title="まずは「体験」して、効果を実感してください。"
          align="center"
        />

        <div className="mt-8 md:mt-12 text-base md:text-lg leading-relaxed text-text max-w-2xl mx-auto">
          <p>
            「本当に痩せられるの？」「私に合うかしら？」そんな不安を解消するために、初回限定の体験プランをご用意しました。
            <br className="hidden md:block" />
            カウンセリングでしっかりとお話をお伺いした後、実際の耳つぼ施術を体験していただけます。
          </p>
        </div>

        {/* Offer Box */}
        <div className="mt-10 md:mt-12 relative bg-white rounded-[2rem] shadow-xl border-2 border-primary overflow-hidden max-w-2xl mx-auto">
          {/* Badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-2 rounded-b-xl font-bold tracking-wider shadow-sm w-full md:w-auto text-center">
            WEB限定キャンペーン
          </div>

          <div className="px-6 py-12 md:px-12 md:py-16 flex flex-col gap-6 items-center">
            <h3 className="text-xl md:text-2xl font-bold text-text mt-4">
              カウンセリング(無料) ＋ 耳つぼ施術体験
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="text-text-muted line-through text-lg">
                通常 3,080円
              </div>
              <div className="hidden md:block text-primary text-2xl">→</div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-accent mb-1">初回</span>
                <div className="text-4xl md:text-5xl font-bold text-accent">
                  1,500<span className="text-xl md:text-2xl ml-1">円</span>
                </div>
                <span className="text-sm text-text-muted">(税込)</span>
              </div>
            </div>

            <div className="w-full pt-6 md:w-auto">
              <ButtonLink
                href="https://lin.ee/bbJLZFe"
                label="今すぐ体験を予約する"
                description="LINEで24時間受付中"
                variant="line"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto shadow-xl"
              />
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm md:text-base text-text-muted">
          「これならできる」と納得していただいた上でスタートしてほしいから、無理な勧誘は一切いたしません。安心してお越しください。
        </p>
      </div>
    </section>
  );
}
