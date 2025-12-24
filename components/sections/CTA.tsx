import Link from "next/link";
import { Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
        <SectionHeading
          title="今度こそ、リバウンドしない体へ。私たちと一緒に始めませんか？"
          align="center"
        />
        
        <p className="mt-8 text-base md:text-lg leading-relaxed text-text max-w-2xl mx-auto">
          「変わりたい」と思った今が、スタートのタイミングです。
          <br className="hidden md:block" />
          まずはLINE、またはお電話でお気軽にご予約ください。あなたにお会いできるのを心より楽しみにしています。
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
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
            variant="primary"
            icon={Phone}
            className="w-full md:w-auto min-w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-border p-4 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom duration-500">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-3 flex-1">
          <ButtonLink
            href="https://lin.ee/bbJLZFe"
            label="LINE予約"
            variant="line"
            target="_blank"
            className="px-2 py-3 text-sm rounded-xl shadow-none"
          />
          <ButtonLink
            href="tel:090-5626-2380"
            label="電話予約"
            variant="primary"
            icon={Phone}
            className="px-2 py-3 text-sm rounded-xl shadow-none"
          />
        </div>
        <Link
          href="https://www.instagram.com/anandah_diet/?igsh=MWVyaXhuZ2RrM3A1ZQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center size-12 rounded-xl bg-stone-100 border border-border transition-colors hover:bg-stone-200"
          aria-label="Instagramを開く"
        >
          <img
            src="/images/Instagram.png"
            alt="Instagram"
            className="size-6"
          />
        </Link>
      </div>
    </div>
  );
}
