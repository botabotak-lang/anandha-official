import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3 } from "lucide-react";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { CTASection, StickyCTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resultDisclaimer } from "@/lib/beforeAfterCases";

export const metadata: Metadata = {
  title: "お客様の変化 | 耳つぼダイエットサロン Anandah",
  description:
    "藤枝市の耳つぼダイエットサロンAnandahで取り組まれたお客様のビフォーアフターをご紹介します。",
};

export default function BeforeAfterPage() {
  return (
    <div className="bg-background text-text-main">
      <Header />
      <main>
        <section className="bg-kinari py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-accent md:text-base"
            >
              <ArrowLeft className="size-4" />
              トップページへ戻る
            </Link>

            <div className="mx-auto mb-12 max-w-4xl">
              <SectionHeading
                eyebrow="BEFORE AFTER"
                title="お客様の変化"
                description="藤枝市で耳つぼダイエットに取り組まれたお客様のビフォーアフターをご紹介します。写真をタップすると、詳しい数値や感想をご覧いただけます。"
                align="center"
                icon={BarChart3}
              />
            </div>

            <BeforeAfterGallery mode="page" />

            <p className="mx-auto mt-10 max-w-3xl text-center text-xs font-medium leading-relaxed text-text-muted md:text-sm">
              {resultDisclaimer}
            </p>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
