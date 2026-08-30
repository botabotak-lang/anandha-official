"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const LINE_URL = "https://lin.ee/bbJLZFe";

interface InlineCTAProps {
  /** ボタンの上に置くマイクロコピー（その位置の文脈に合わせて変える） */
  message: string;
  /** ボタンのメインラベル */
  label: string;
  /** ボタンのサブラベル */
  description: string;
  /** GA4でクリック位置を識別するためのID */
  ctaId: string;
  /** セクション背景に合わせた囲みの色味 */
  tone?: "light" | "dark";
}

/**
 * FVと同じデザインのLINE予約ボタン。
 * LP内の「感情のピークの直後」に置いて、その場で予約に進めるようにする。
 * 光沢は画面に入ったとき3回だけ流れて止まる（常時点滅はサロンの世界観を壊すため）。
 */
/** FVと同じ見た目のLINE予約ボタン単体。既にレイアウトを持つセクションではこちらを使う。 */
export function LineCtaButton({
  label,
  description,
  ctaId,
  className = "",
}: {
  label: string;
  description: string;
  ctaId: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [shine, setShine] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShine(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={ctaId}
      aria-label={`${label}（${description}）`}
      className={`group relative flex items-center gap-3 md:gap-4 overflow-hidden rounded-full bg-gradient-to-b from-[#00D242] to-[#00A500] px-4 py-3.5 md:px-7 md:py-5 shadow-lg shadow-[#00A500]/30 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A500] ${className}`}
    >
      <img
        src="/images/line-logo-circle.png"
        alt=""
        width={48}
        height={48}
        className="size-11 md:size-12 shrink-0 rounded-full bg-white"
      />
      <span className="flex flex-1 flex-col items-center leading-tight">
        <span className="text-lg md:text-2xl font-black tracking-wide text-white">
          {label}
        </span>
        <span className="mt-0.5 text-xs md:text-base font-bold text-[#F3F054]">
          {description}
        </span>
      </span>
      <ChevronRight className="size-7 md:size-8 shrink-0 rounded-full bg-white/25 p-1 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
      {shine && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-cta-shine-3 motion-reduce:hidden"
        />
      )}
    </a>
  );
}

export function InlineCTA({
  message,
  label,
  description,
  ctaId,
  tone = "light",
}: InlineCTAProps) {
  return (
    <div className="mt-12 md:mt-16 flex justify-center px-1">
      <div
        className={`w-full max-w-2xl rounded-[2rem] border-2 px-5 py-7 md:px-10 md:py-9 text-center shadow-sm ${
          tone === "dark"
            ? "border-primary/20 bg-white"
            : "border-border bg-white"
        }`}
      >
        <p className="text-xl md:text-2xl font-black leading-snug text-primary">
          {message}
        </p>

        <LineCtaButton
          label={label}
          description={description}
          ctaId={ctaId}
          className="mt-6 w-full"
        />

        <p className="mt-4 text-sm md:text-base font-medium text-text-muted">
          ご相談だけでも大丈夫です。無理な勧誘は一切いたしません。
        </p>
      </div>
    </div>
  );
}
