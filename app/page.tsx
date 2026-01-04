import { Access } from "@/components/sections/Access";
import { Campaign } from "@/components/sections/Campaign";
import { CTASection, StickyCTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Flow } from "@/components/sections/Flow";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { Owner } from "@/components/sections/Owner";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-background text-text-main">
      <Header />
      <main className="flex flex-col gap-0">
        <Hero />
        <div className="space-y-0">
          <Owner />
          <Problem />
          <Solution />
          <Features />
          <Flow />
          <Menu />
          <Campaign />
          <FAQ />
          <Access />
          <CTASection />
        </div>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
