import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
        <SectionHeading
          eyebrow="RESERVATION"
          title="今度こそ、リバウンドしない体へ。私たちと一緒に始めませんか？"
          align="center"
        />
        
        <p className="mt-8 mb-10 text-text leading-relaxed">
          「変わりたい」と思った今が、スタートのタイミングです。<br className="hidden md:block"/>
          まずはLINE、またはお電話でお気軽にご予約ください。<br className="hidden md:block"/>
          あなたにお会いできるのを心より楽しみにしています。
        </p>

        <div className="flex flex-col gap-4 md:flex-row justify-center">
          <ButtonLink
            href="https://lin.ee/bbJLZFe"
            label="LINEで予約する"
            description="24時間受付"
            variant="line"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto min-w-[280px]"
          />
          <ButtonLink
            href="tel:090-5626-2380"
            label="電話で予約する"
            description="10:00-19:00 / 日祝休"
            icon={Phone}
            variant="primary"
            className="w-full md:w-auto min-w-[280px] !bg-[#C05621] !shadow-[#C05621]/30 hover:!bg-[#C05621]/90"
          />
        </div>
      </div>
    </section>
  );
}

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:hidden border-t border-border pb-safe">
      <div className="flex gap-3 max-w-md mx-auto">
        <ButtonLink
          href="https://lin.ee/bbJLZFe"
          label="LINE予約"
          variant="line"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-sm py-3 px-2"
        />
        <ButtonLink
          href="tel:090-5626-2380"
          label="電話予約"
          icon={Phone}
          variant="primary"
          className="flex-1 text-sm py-3 px-2 !bg-[#C05621] !shadow-[#C05621]/30 hover:!bg-[#C05621]/90"
        />
        <a
          href="https://www.instagram.com/anandah_diet/?igsh=MWVyaXhuZ2RrM3A1ZQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-white border border-border rounded-full w-14 h-14 shadow-md shrink-0"
          aria-label="Instagram"
        >
          <img
            src="/images/Instagram.png"
            alt="IG"
            className="w-7 h-7 object-contain"
          />
        </a>
      </div>
    </div>
  );
}
