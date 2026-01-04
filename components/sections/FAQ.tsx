"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "痛いのは苦手です。針を使うのですか？",
    answer:
      "いいえ、針は一切使用しません。「金粒（きんりゅう）」という小さな粒をテープで貼るだけの施術ですので、痛みは全くありません。肌色のテープを使用しますので目立たず、金属アレルギーの方にも対応した粒もご用意しております。安心してお越しください。",
  },
  {
    question: "40代・50代で代謝が落ちていますが、本当に痩せますか？",
    answer:
      "はい、むしろ40代以上の方にこそおすすめです。年齢とともに代謝が落ちてしまうのは自然なことですが、耳つぼ刺激で代謝機能を活性化させ、「燃やす力」を取り戻すサポートをします。当サロンでは、最高齢で70代の方も健康的にダイエットに成功されています。",
  },
  {
    question: "お酒の付き合いや外食があっても大丈夫ですか？",
    answer:
      "はい、大丈夫です。人生を楽しむためのダイエットですので、外食やお酒を禁止することはありません。「外食の際のメニューの選び方」や「お酒を飲んだ翌日の調整方法」など、ライフスタイルに合わせた無理のないコツをプロがアドバイスいたします。",
  },
  {
    question: "運動が苦手で、今まで続きませんでした…",
    answer:
      "運動は必要ありません。代謝が落ちている状態で無理に運動をすると、かえって食欲が増してしまったり、膝や腰を痛める原因になります。家事や通勤など、日常の動きだけで脂肪が燃えるような体質改善を目指しますので、運動が苦手な方もご安心ください。",
  },
  {
    question: "料金はどのくらいかかりますか？",
    answer:
      "お客様の目標や体質により異なります。まずは無料カウンセリングにて、目標体重や体組成計のデータを確認し、生活習慣や過去のダイエット歴、お薬の服用状況などを詳しく伺います。その上で、あなたにとってベストな期間とプラン（総額）を算出してご提示いたします。ご提案内容にご納得いただいてからスタートとなります。強引な勧誘は一切いたしませんので、ご安心ください。",
  },
  {
    question: "リバウンドが心配です。",
    answer:
      "「太りにくい習慣」を身につけて卒業していただきます。ただ体重を落とすだけでなく、痩せている人が自然に行っている「太らない食事のコツ」や「生活習慣」を3ヶ月間で習得していただきます。また、卒業後の無料アフターフォローもございますので、リバウンドの不安なく維持していただけます。",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          align="center"
        />

        <div className="mt-12 md:mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-border rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-background/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl font-bold text-text pr-8">
                  <span className="text-accent mr-3">Q.</span>
                  {faq.question}
                </span>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <Minus className="size-6 text-accent" />
                  ) : (
                    <Plus className="size-6 text-accent" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-base md:text-lg leading-relaxed text-text-muted border-t border-border/50 bg-background/30">
                  <div className="flex gap-3">
                    <span className="text-secondary font-bold shrink-0">A.</span>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

