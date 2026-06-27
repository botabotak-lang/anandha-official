"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { beforeAfterCases, resultDisclaimer, type BeforeAfterCase } from "@/lib/beforeAfterCases";
import { ButtonLink } from "@/components/ui/ButtonLink";

type BeforeAfterGalleryProps = {
  mode?: "preview" | "page";
};

function CaseCard({
  item,
  onOpen,
}: {
  item: BeforeAfterCase;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-kinari">
        <Image
          src={item.cardImage}
          alt={`${item.title}のビフォーアフター`}
          fill
          sizes="(min-width: 768px) 420px, 92vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background px-3 py-1 text-xs font-bold text-accent md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <p className="text-sm font-bold text-text-muted">{item.period}</p>
          <p className="mt-1 text-4xl font-black leading-none text-secondary md:text-5xl">
            {item.mainResult}
          </p>
        </div>
        <h3 className="text-xl font-black leading-snug text-primary md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-auto text-sm font-bold text-text-muted">
          詳細を見る
        </p>
      </div>
    </button>
  );
}

function DetailModal({
  cases,
  index,
  onClose,
  onMove,
}: {
  cases: BeforeAfterCase[];
  index: number;
  onClose: () => void;
  onMove: (nextIndex: number) => void;
}) {
  const item = cases[index];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onMove((index - 1 + cases.length) % cases.length);
      if (event.key === "ArrowRight") onMove((index + 1) % cases.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [cases.length, index, onClose, onMove]);

  return (
    <div
      className="fixed inset-0 z-[80] bg-sumi-deep/55 p-3 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}の詳細`}
      onClick={onClose}
    >
      <div
        className="relative mx-auto flex max-h-[calc(100vh-24px)] max-w-5xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl md:max-h-[calc(100vh-64px)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border bg-white px-4 py-3 md:px-6">
          <p className="text-sm font-black text-primary md:text-base">お客様の変化</p>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full border border-border bg-white text-accent transition hover:bg-background"
            aria-label="閉じる"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-4 py-6 md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:items-start">
            <div>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <Image
                  src={item.cardImage}
                  alt={`${item.title}のビフォーアフター`}
                  width={1200}
                  height={1200}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white px-3 py-1 text-sm font-bold text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 text-3xl font-black leading-tight text-primary md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg font-black text-secondary">
                  {item.lead}
                </p>
              </div>

              <div className="grid gap-3">
                {item.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="grid grid-cols-[5.5em_1fr_auto] items-center gap-2 rounded-xl border border-border bg-white px-4 py-3"
                  >
                    <span className="text-sm font-black text-accent">{metric.label}</span>
                    <span className="text-sm font-bold text-text-muted">
                      {metric.before} → {metric.after}
                    </span>
                    <span className="text-base font-black text-secondary">{metric.change}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl border border-border bg-white p-5 text-base font-medium leading-relaxed text-text-main md:text-lg">
                {item.comment.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="text-xs font-medium leading-relaxed text-text-muted">
                {resultDisclaimer}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <ButtonLink
                  href="https://lin.ee/bbJLZFe"
                  label="LINEで予約する"
                  description="24時間受付"
                  variant="line"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full !px-4 !py-4 !text-base"
                />
                <ButtonLink
                  href="tel:090-5626-2380"
                  label="電話で予約する"
                  description="9:00-21:00"
                  variant="primary"
                  className="w-full !px-4 !py-4 !text-base"
                />
              </div>
            </div>
          </div>
        </div>

        {cases.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => onMove((index - 1 + cases.length) % cases.length)}
              className="absolute left-2 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-accent shadow-lg transition hover:bg-white md:grid"
              aria-label="前の事例へ"
            >
              <ChevronLeft className="size-7" />
            </button>
            <button
              type="button"
              onClick={() => onMove((index + 1) % cases.length)}
              className="absolute right-2 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-accent shadow-lg transition hover:bg-white md:grid"
              aria-label="次の事例へ"
            >
              <ChevronRight className="size-7" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function BeforeAfterGallery({ mode = "preview" }: BeforeAfterGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cases = mode === "preview" ? beforeAfterCases.slice(0, 2) : beforeAfterCases;

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {cases.map((item, index) => (
          <CaseCard key={item.id} item={item} onOpen={() => setActiveIndex(index)} />
        ))}
      </div>

      {mode === "preview" && (
        <div className="mt-10 text-center">
          <Link
            href="/before-after"
            className="inline-flex items-center justify-center rounded-full border border-primary bg-white px-8 py-4 text-base font-black text-primary transition hover:bg-primary hover:text-white md:text-lg"
          >
            ビフォーアフターをもっと見る
          </Link>
        </div>
      )}

      {activeIndex !== null && (
        <DetailModal
          cases={cases}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onMove={setActiveIndex}
        />
      )}
    </>
  );
}
