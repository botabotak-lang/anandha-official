import Link from "next/link";
import { Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CTASection() {
  return (
    <section className="bg-primary text-white px-5 py-20" id="contact">
      <div className="mx-auto max-w-4xl space-y-10">
        <SectionHeading
          eyebrow="Call to Action"
          title="今度こそ、リバウンドしない体へ。私たちと一緒に始めませんか？"
          description={
            <>
              「変わりたい」と思った今が、スタートのタイミングです。まずはLINE、またはお電話でお気軽にご予約ください。あなたにお会いできるのを心より楽しみにしています。
            </>
          }
          tone="light"
        />
        <div className="flex flex-col gap-4 md:flex-row">
          <ButtonLink
            href="https://lin.ee/bbJLZFe"
            label="LINEで予約する"
            target="_blank"
            rel="noopener noreferrer"
            variant="line"
          />
          <ButtonLink
            href="tel:090-5626-2380"
            label="電話で予約・相談する"
            icon={Phone}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border/60 bg-white/70 px-5 py-4 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-3 md:gap-4">
        <ButtonLink
          href="https://lin.ee/bbJLZFe"
          label="LINEで予約する"
          target="_blank"
          rel="noopener noreferrer"
          variant="line"
          className="!bg-white !text-[#00C300] !border-2 !border-[#00C300] text-sm font-semibold py-3 md:text-base md:px-8"
        />
        <ButtonLink
          href="tel:090-5626-2380"
          label="電話で予約・相談する"
          icon={Phone}
          variant="secondary"
          className="text-sm font-semibold py-3 md:text-base md:px-8"
        />
        <Link
          href="https://www.instagram.com/anandah_diet/?igsh=MWVyaXhuZ2RrM3A1ZQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg border-2 border-pink-500 bg-white px-4 py-3 text-sm font-semibold transition-all hover:bg-pink-50 hover:border-pink-600 md:px-6"
          aria-label="Instagramをフォロー"
        >
          <img
            src="/images/Instagram.png"
            alt="Instagram"
            className="h-5 w-5"
          />
        </Link>
      </div>
    </div>
  );
}


