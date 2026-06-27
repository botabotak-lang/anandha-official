import { BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { resultDisclaimer } from "@/lib/beforeAfterCases";

export function BeforeAfter() {
  return (
    <section id="before-after" className="bg-kinari py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-4xl">
            <SectionHeading
              eyebrow="BEFORE AFTER"
              title="お客様の変化"
              description="藤枝市で耳つぼダイエットに取り組まれたお客様のビフォーアフターをご紹介します。"
              align="center"
              icon={BarChart3}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <BeforeAfterGallery mode="preview" />
        </FadeIn>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs font-medium leading-relaxed text-text-muted md:text-sm">
          {resultDisclaimer}
        </p>
      </div>
    </section>
  );
}
