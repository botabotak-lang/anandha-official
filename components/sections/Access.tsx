import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Access() {
  return (
    <section id="access" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="ACCESS"
          title="店舗情報"
          align="center"
        />

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-12">
          {/* Info Table */}
          <div className="space-y-8">
            <div className="bg-background/50 rounded-2xl p-8 border border-border space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">耳つぼダイエットサロン Anandha</h3>
                <dl className="space-y-4 text-text">
                  <div className="flex items-start gap-4">
                    <MapPin className="size-5 text-text-muted mt-1 shrink-0" />
                    <div>
                      <dt className="sr-only">住所</dt>
                      <dd>〒426-0034 静岡県藤枝市藤枝4丁目14-24</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="size-5 text-text-muted mt-1 shrink-0" />
                    <div>
                      <dt className="sr-only">営業時間</dt>
                      <dd>9:00 - 20:00 (不定休)</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
            
            <p className="text-sm text-text-muted">
              ※ プライベートサロンのため、詳細な住所はご予約確定後にお伝えいたします。<br />
              ※ 駐車場あり
            </p>
          </div>

          {/* Map Image */}
          <a 
            href="https://share.google/lIVtnqrUvYvjwshnK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative h-[300px] md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-border group"
          >
            <Image
              src="/images/map.jpg"
              alt="地図"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-all duration-300">
              <span className="bg-white/90 px-6 py-3 rounded-full text-base font-bold text-text shadow-xl transform group-hover:scale-110 transition-transform">
                Google Mapsで見る
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
