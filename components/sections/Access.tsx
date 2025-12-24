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
                      <dd>〒426-0005 静岡県藤枝市下藪田322</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="size-5 text-text-muted mt-1 shrink-0" />
                    <div>
                      <dt className="sr-only">営業時間</dt>
                      <dd>
                        9:00 - 21:00<br />
                        定休日：日曜（要予約）
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
            
            <div className="bg-stone-50 rounded-2xl p-6 border border-border">
              <ul className="space-y-2 text-sm text-text font-medium">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  駐車場あり
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  出張対応可
                </li>
                <li className="flex items-center gap-2 text-accent">
                  <span className="size-1.5 rounded-full bg-accent" />
                  完全個室
                </li>
              </ul>
            </div>
          </div>

          {/* Map Embed */}
          <div className="relative h-[400px] md:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3090013627055!2d138.2526323!3d34.8988636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601bb99042b45053%3A0x8686f0302b0f443b!2zQW5hbmRoYSjjgqLjg4rjg7Pjg4ApIOiIsOOBpOOBvOODgOOCpOOCqOODg-ODiOOCteODreODsw!5e0!3m2!1sja!2sjp!4v1735061614740!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
