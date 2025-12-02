import Image from "next/image";
import { Clock, MapPin, Phone, Train } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Access() {
  return (
    <section className="bg-white px-5 py-20" id="access">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionHeading
          eyebrow="Access"
          title="サロン情報・アクセス"
          align="center"
          description="完全予約制・完全個室のプライベートサロンです。出張対応も可能です。"
        />

        <div className="rounded-[2.5rem] border border-border bg-background/70 p-6 shadow-sm md:p-10">
          <div className="space-y-8 text-base leading-loose text-text-main">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <MapPin className="size-6 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold">静岡県藤枝市下藪田322</p>
                    <p>駐車場有</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="size-6 text-primary shrink-0" />
                  <div>
                    <p>営業時間：9:00〜21:00</p>
                    <p>定休日：日曜（要予約）</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="size-6 text-primary shrink-0" />
                  <p>090-5626-2380</p>
                </div>
              </div>
              
              <div className="space-y-2 rounded-2xl border border-border/70 bg-white/70 p-6 text-sm h-fit">
                <p className="font-semibold text-primary text-base mb-2">サロンの特徴</p>
                <ul className="space-y-2 text-text-main">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent" />
                    完全個室
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent" />
                    出張対応可
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent" />
                    駐車場有
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-sm text-text-muted pt-4 border-t border-border/50">
              <p>Google Mapsで場所を確認できます。タップで新しいタブが開きます。</p>
              <ButtonLink
                href="https://www.google.com/maps/search/?api=1&query=静岡県藤枝市下藪田322"
                label="地図アプリで開く"
                icon={MapPin}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


