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
  title: '藤枝市の耳つぼダイエットサロン Anandha(アナンサ) | 40代からの健康痩せ',
  description: '藤枝市・焼津市・島田市で耳つぼダイエットならAnandha。運動なし・食事制限なしで、40代〜60代の女性が無理なく痩せるサロンです。無料カウンセリング受付中。',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "耳つぼダイエットサロン Anandha",
    "image": "/images/hero.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "下藪田322",
      "postalCode": "426-0201",
      "addressLocality": "藤枝市",
      "addressRegion": "静岡県",
      "addressCountry": "JP"
    },
    "telephone": "090-5626-2380",
    "priceRange": "¥1,500〜",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.887856,
      "longitude": 138.238917
    }
  };

  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased text-text bg-background`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
