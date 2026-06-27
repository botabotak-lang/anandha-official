export type BeforeAfterMetric = {
  label: string;
  before: string;
  after: string;
  change: string;
};

export type BeforeAfterCase = {
  id: string;
  title: string;
  lead: string;
  tags: string[];
  period: string;
  mainResult: string;
  cardImage: string;
  detailImage: string;
  metrics: BeforeAfterMetric[];
  comment: string[];
};

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "case-01",
    title: "服を選ぶのが楽しくなりました！",
    lead: "3ヶ月で-9.0kg",
    tags: ["40代前半", "女性", "160cm", "会社員"],
    period: "3ヶ月",
    mainResult: "-9.0kg",
    cardImage: "/images/before-after/case-01-card-v6.webp",
    detailImage: "/images/before-after/case-01-detail-v6.webp",
    metrics: [
      { label: "体重", before: "61.7kg", after: "52.7kg", change: "-9.0kg" },
      { label: "体脂肪率", before: "34.7%", after: "27.4%", change: "-7.3%" },
      { label: "体内年齢", before: "48歳", after: "37歳", change: "-11歳" },
    ],
    comment: [
      "年齢とともに体重が落ちにくくなり、何をしても続かないのが悩みでした。藤枝市で耳つぼダイエットを探していた時にAnandahを知り、思い切って始めました。",
      "無理に我慢している感覚が少なく、食事の整え方も教えてもらいながら続けることができました。体重だけでなく体脂肪率も下がって、服を選ぶのが前より楽しくなりました。",
    ],
  },
  {
    id: "case-02",
    title: "ウエストまわりがすっきりして驚きました！",
    lead: "3ヶ月で-9.7kg",
    tags: ["40代後半", "女性", "153cm", "会社員"],
    period: "3ヶ月",
    mainResult: "-9.7kg",
    cardImage: "/images/before-after/case-02-card-v6.webp",
    detailImage: "/images/before-after/case-02-detail-v6.webp",
    metrics: [
      { label: "体重", before: "68.6kg", after: "58.9kg", change: "-9.7kg" },
      { label: "体脂肪率", before: "39.7%", after: "31.7%", change: "-8.0%" },
      { label: "体内年齢", before: "59歳", after: "48歳", change: "-11歳" },
      { label: "ウエスト", before: "90cm", after: "76cm", change: "-14cm" },
    ],
    comment: [
      "仕事や家のことで忙しく、自分の体のことは後回しになっていました。年々増えていく体重とウエストが気になり、藤枝市で通えるダイエットとして耳つぼを始めました。",
      "食事を整えながら無理なく続けられて、3ヶ月で体重もウエストも変化して本当に驚きました。以前より服を着た時の見え方が変わり、体も軽く感じられるようになりました。",
    ],
  },
];

export const resultDisclaimer =
  "※結果には個人差があります。効果を保証するものではありません。";
