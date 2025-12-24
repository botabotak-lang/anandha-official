import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: false,
});

export const metadata: Metadata = {
  title: "耳つぼダイエットサロン Anandha(アナンダ) | 藤枝市の40代からの健康ダイエット",
  description: "藤枝市下藪田の耳つぼダイエットサロンAnandha。運動なし・食事制限なしで、40代〜60代の女性が無理なく痩せるサポートをします。無料カウンセリング受付中。",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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
      "postalCode": "426-0005",
      "addressLocality": "藤枝市",
      "addressRegion": "静岡県",
      "addressCountry": "JP"
    },
    "telephone": "090-5626-2380",
    "priceRange": "¥1,500〜",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.8988636,
      "longitude": 138.2526323
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-21:00",
    "dayOfWeek": [
      "Sunday"
    ],
    "url": "https://anandah57.com"
  };

  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased text-text bg-background`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-TV7RJFN3EB`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TV7RJFN3EB');
          `}
        </Script>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
