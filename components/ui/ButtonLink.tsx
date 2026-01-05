import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "surface" | "line";

interface ButtonLinkProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  variant?: ButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  description?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  // Primary: Gold (SPEC defined)
  primary:
    "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90",
  // Secondary: Mapped to Accent (Green) for variation
  secondary:
    "bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent/90",
  // Outline: Gold border
  outline:
    "border border-border bg-white text-primary hover:bg-primary/5 hover:border-primary",
  // Surface: White background
  surface:
    "bg-white text-primary border border-border hover:border-primary/60",
  // Line: Brand Color (Green) - Hardcoded as it's specific to LINE
  line:
    "bg-white text-[#00C300] border-2 border-[#00C300] shadow-lg shadow-[#00C300]/20 hover:bg-[#00C300]/5 hover:border-[#00B300]",
};

// LINE公式ロゴの画像コンポーネント
function LineLogo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
    <Image
      src="/images/line-logo.png"
      alt="LINE"
        fill
        sizes="24px"
        className="object-contain"
      priority
      unoptimized
    />
    </div>
  );
}

export function ButtonLink({
  href,
  label,
  icon: Icon,
  variant = "primary",
  className = "",
  target = "_self",
  rel,
  description,
}: ButtonLinkProps) {
  // classNameから背景色関連のクラスを除外（variantが優先されるように）
  const baseClasses = "flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-4 text-lg font-bold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:flex-none md:px-10 md:py-5";
  
  // variantのスタイルを確実に適用するため、classNameの後に配置
  const classes = [
    baseClasses,
    className,
    variantClasses[variant],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} target={target} rel={rel} className={classes}>
      {variant === "line" ? (
        <LineLogo className="h-7 w-7 shrink-0 flex-shrink-0" />
      ) : Icon ? (
        <Icon className="size-6" />
      ) : null}
      <span className="flex flex-col leading-tight text-left whitespace-nowrap">
        {label}
        {description && (
          <span
            className={`text-sm font-medium ${
              variant === "primary" || variant === "secondary"
                ? "text-white/90"
                : variant === "line"
                ? "text-[#00C300]/80"
                : "text-text-muted"
            }`}
          >
            {description}
          </span>
        )}
      </span>
    </Link>
  );
}
