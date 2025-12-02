import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "耳つぼダイエットサロン Anandah（アナンダ）",
  description: "40代からの身体が変わる。無理なく食べて、美しく痩せる。大人のための耳つぼダイエットサロン Anandah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased text-text-main bg-background`}>
        {children}
      </body>
    </html>
  );
}
