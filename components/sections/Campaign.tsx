import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Campaign() {
  return (
    <section id="campaign" className="py-20 md:py-28 bg-primary/5 border-y border-primary/10">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="CAMPAIGN"
          title="まずは「体験」して、効果を実感してください。"
          align="center"
        />

        <div className="mt-10 md:mt-12 text-center space-y-8">
          <p className="text-text leading-relaxed max-w-2xl mx-auto">
            「本当に痩せられるの？」「私に合うかしら？」そんな不安を解消するために、初回限定の体験プランをご用意しました。
            <br className="hidden md:block" />
            カウンセリングでしっかりとお話をお伺いした後、実際の耳つぼ施術を体験していただけます。
          </p>

          {/* Offer Box */}
          <div className="bg-white border-2 border-primary rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-primary text-white text-center py-2 font-bold tracking-widest">
              WEB限定キャンペーン
            </div>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-text">
                カウンセリング(無料) ＋ 耳つぼ施術体験
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="text-text-muted line-through text-lg">
                  通常 3,080円
                </div>
                <div className="hidden md:block text-primary text-2xl">
                  →
                </div>
                <div className="flex items-end gap-1 text-accent">
                  <span className="text-sm md:text-base font-bold mb-2 bg-accent text-white px-2 py-1 rounded">初回</span>
                  <span className="text-4xl md:text-6xl font-bold leading-none">1,500</span>
                  <span className="text-lg md:text-xl font-bold mb-1">円 (税込)</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <ButtonLink
                href="https://lin.ee/bbJLZFe"
                label="初回体験を予約する"
                description="WEB限定価格で申し込む"
                variant="line"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto min-w-[280px]"
              />
            </div>
          </div>

          <p className="text-text-muted text-sm">
            「これならできる」と納得していただいた上でスタートしてほしいから、<br className="hidden md:block"/>
            無理な勧誘は一切いたしません。安心してお越しください。
          </p>
        </div>
      </div>
    </section>
  );
}
