import { Gift, Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Campaign() {
  return (
    <section className="bg-white px-5 py-20" id="campaign">
      <div className="mx-auto max-w-4xl space-y-10">
        <SectionHeading
          eyebrow="Campaign"
          title="まずは「体験」して、効果を実感してください。"
          description={
            <>
              「本当に痩せられるの？」「私に合うかしら？」
              そんな不安を解消するために、初回限定の体験プランをご用意しました。
              カウンセリングでしっかりとお話をお伺いした後、実際の耳つぼ施術を体験していただけます。
            </>
          }
        />

        <div className="space-y-6 rounded-[2.5rem] border-2 border-accent/60 bg-accent/5 p-8 text-center shadow-lg">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold uppercase tracking-[0.3em] text-accent">
            <Gift className="size-6" />
            WEB限定キャンペーン
          </div>
          <div className="space-y-2 text-text-main">
            <p className="text-base md:text-lg">
              カウンセリング(無料) ＋ 耳つぼ施術体験
            </p>
            <p className="text-sm text-text-muted">通常 3,080円</p>
            <p className="text-4xl font-bold text-secondary">初回 1,500円(税込)</p>
          </div>
          <p className="text-sm leading-relaxed text-text-muted">
            「これならできる」と納得していただいた上でスタートしてほしいから、無理な勧誘は一切いたしません。安心してお越しください。
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <ButtonLink
              href="https://lin.ee/bbJLZFe"
              label="LINEで体験予約する"
              icon={Gift}
              target="_blank"
              rel="noopener noreferrer"
            />
            <ButtonLink
              href="tel:090-5626-2380"
              label="電話で相談する"
              icon={Phone}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


