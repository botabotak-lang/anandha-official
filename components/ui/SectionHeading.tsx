import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "center" | "start";
  icon?: LucideIcon;
  tone?: "default" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  icon: Icon,
  tone = "default",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const accentAlignment = align === "center" ? "mx-auto" : "";
  const titleColor = tone === "light" ? "text-white" : "text-primary";
  const descriptionColor = tone === "light" ? "text-white/90" : "text-text-main";
  const accentColor = tone === "light" ? "bg-white/60" : "bg-accent";
  const eyebrowColor = tone === "light" ? "text-accent" : "text-primary";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <div
          className={`flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] ${eyebrowColor}`}
        >
          {Icon && <Icon className="size-4" />}
          {eyebrow}
        </div>
      )}
      <h2 className={`text-2xl font-bold md:text-3xl ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed max-w-3xl ${descriptionColor}`}>
          {description}
        </p>
      )}
      <span className={`block h-1 w-16 rounded-full ${accentColor} ${accentAlignment}`} />
    </div>
  );
}


