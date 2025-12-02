import { ClipboardCheck, Coins } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";

const menuItems = [
  {
    title: "カウンセリング（初回無料）",
    details: [
      "現在の健康状態・食生活のヒアリング",
      "耳つぼ痩身プログラムの提案・詳細説明",
      "体重測定（基礎代謝・体脂肪率の測定）",
    ],
    icon: ClipboardCheck,
    price: "無料",
  },
  {
    title: "耳つぼダイエット",
    items: [
      "体重測定・食生活チェック",
      "カウンセリング",
    ],
    prices: [
      { label: "耳つぼ施術", value: "1回 3,080円" },
      { label: "補助食品", value: "6,264円〜" },
    ],
    icon: Coins,
    price: "",
  },
];

export function Menu() {
  return (
    <section className="bg-background px-5 py-20" id="menu">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionHeading
          eyebrow="Menu / Price"
          title="明確な料金システムで、安心して通っていただけます。"
          align="center"
        />

        <div className="space-y-6">
          {menuItems.map((item) => {
            const { title, details, items, prices, icon: Icon, price } = item as any;
            
            return (
              <article
                key={title}
                className="rounded-3xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3 text-primary">
                    <Icon className="size-8 text-secondary" />
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  {price && <p className="text-2xl font-bold text-accent">{price}</p>}
                </div>
                
                {details && (
                  <ul className="mt-4 grid gap-3 text-base leading-relaxed text-text-main">
                    {details.map((detail: string) => (
                      <li
                        key={detail}
                        className="rounded-2xl border border-border/70 bg-background/60 p-4"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
                
                {items && (
                  <ul className="mt-4 space-y-2">
                    {items.map((item: string) => (
                      <li key={item} className="text-base font-medium text-accent">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                
                {prices && (
                  <div className="mt-4 rounded-2xl border border-border/70 bg-background/60 p-4">
                    {prices.map((priceItem: { label: string; value: string }) => (
                      <div key={priceItem.label} className="flex items-center justify-between text-base leading-relaxed text-text-main">
                        <span>{priceItem.label}：</span>
                        <span className="font-semibold">{priceItem.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



