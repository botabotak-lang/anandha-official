import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "藤枝市の耳つぼダイエットサロン Anandha(アナンダ) | 40代からの健康ダイエット",
  description: "藤枝市・焼津市・島田市で耳つぼダイエットならAnandha。運動なし・食事制限なしで、40代〜60代の女性が無理なく痩せるサロンです。無料カウンセリング受付中。",
  icons: {
    icon: "/images/anandah-logo.png",
    apple: "/images/anandah-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
