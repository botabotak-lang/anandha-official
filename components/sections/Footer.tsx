import { Facebook, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "メニュー", href: "#menu" },
  { label: "オーナー紹介", href: "#owner" },
  { label: "アクセス", href: "#access" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Anandah</p>
          <h3 className="text-2xl font-semibold">耳つぼダイエットサロン Anandah</h3>
          <p className="text-sm text-white/70">
            〒426-0000 静岡県藤枝市下藪田322｜Tel. 090-5626-2380
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-4 text-sm font-medium">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 text-white/80">
            <Link href="https://line.me/" target="_blank" className="rounded-full border border-white/30 p-2 hover:border-accent hover:text-accent">
              <MessageCircle className="size-4" />
            </Link>
            <Link href="tel:090-5626-2380" className="rounded-full border border-white/30 p-2 hover:border-accent hover:text-accent">
              <Phone className="size-4" />
            </Link>
            <Link href="https://www.instagram.com/anandah_diet/?igsh=MWVyaXhuZ2RrM3A1ZQ%3D%3D#" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 p-2 hover:border-accent hover:text-accent transition-opacity hover:opacity-70">
              <img
                src="/images/Instagram.png"
                alt="Instagram"
                className="h-4 w-4"
              />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="rounded-full border border-white/30 p-2 hover:border-accent hover:text-accent">
              <Facebook className="size-4" />
            </Link>
          </div>
        </div>

        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Anandah Ear Diet Salon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}



