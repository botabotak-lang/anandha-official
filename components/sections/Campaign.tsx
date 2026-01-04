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

        <div className="mt-8 md:mt-12 text-lg md:text-xl leading-relaxed text-text max-w-2xl mx-auto font-medium">
          <p>
            「本当に痩せられるの？」「私に合うかしら？」そんな不安を解消するために、初回限定の体験プランをご用意しました。
            <br className="hidden md:block" />
            カウンセリングでしっかりとお話をお伺いした後、実際の耳つぼ施術を体験していただけます。
          </p>
        </div>

        {/* Offer Box */}
        <div className="mt-12 md:mt-16 relative bg-white rounded-[2.5rem] shadow-2xl border-4 border-primary overflow-hidden max-w-2xl mx-auto">
          {/* Badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white px-10 py-3 rounded-b-2xl font-black tracking-widest shadow-md w-full md:w-auto text-center text-lg">
            WEB限定キャンペーン
          </div>

          <div className="px-6 py-16 md:px-14 md:py-20 flex flex-col gap-8 items-center">
            <h3 className="text-2xl md:text-3xl font-black text-text mt-6">
              初回カウンセリング（無料）＋ 耳つぼ施術体験
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="text-text-muted line-through text-xl font-bold">
                通常 3,080円
              </div>
              <div className="hidden md:block text-primary text-4xl">→</div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-black text-accent mb-2">初回</span>
                <div className="text-5xl md:text-7xl font-black text-accent">
                  1,500<span className="text-2xl md:text-3xl ml-1">円</span>
                </div>
                <span className="text-base text-text-muted font-bold">(税込)</span>
              </div>
            </div>

            <div className="w-full pt-8 md:w-auto">
              <ButtonLink
                href="https://lin.ee/bbJLZFe"
                label="今すぐ体験を予約する"
                description="LINEで24時間受付中"
                variant="line"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto shadow-2xl !px-12 !py-6 !text-xl"
              />
            </div>
          </div>
        </div>

        <p className="mt-12 text-base md:text-lg text-text-muted font-bold">
          「これならできる」と納得していただいた上でスタートしてほしいから、無理な勧誘は一切いたしません。安心してお越しください。
        </p>
      </div>
    </section>
  );
}
