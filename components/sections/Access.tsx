import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
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
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">耳つぼダイエットサロン Anandha</h3>
              <div className="space-y-6 text-text">
                <div className="flex items-start gap-4">
                  <MapPin className="size-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">住所</p>
                    <p>〒426-0201 静岡県藤枝市下藪田３２２</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="size-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">営業時間</p>
                    <p>9:00 - 20:00 (不定休)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md bg-background">
            <iframe
              src="https://www.google.com/maps?q=〒426-0201+静岡県藤枝市下藪田322&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anandha 店舗地図"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
