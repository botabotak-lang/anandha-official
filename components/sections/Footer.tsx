import Link from "next/link";
import { Leaf } from "lucide-react";

const footerLinks = [
  { label: "特徴", href: "#features" },
  { label: "流れ", href: "#flow" },
  { label: "料金", href: "#menu" },
  { label: "オーナー", href: "#owner" },
  { label: "アクセス", href: "#access" },
];

export function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-border py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo Area */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img
                src="/images/anandah-logo.png"
                alt="Anandah Logo"
                className="h-16 w-auto grayscale opacity-80"
              />
              <span className="text-2xl font-light text-text-muted tracking-widest">Anandah</span>
            </Link>
            <p className="text-base text-text-muted text-center md:text-left font-medium">
              静岡県藤枝市下藪田の耳つぼダイエットサロン Anandah
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-bold text-text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/anandah_diet/?igsh=MWVyaXhuZ2RrM3A1ZQ%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
             <img
                src="/images/Instagram.png"
                alt="Instagram"
                className="h-6 w-6 grayscale"
              />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Anandah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
