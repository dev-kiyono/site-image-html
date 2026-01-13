import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQContent } from '../types';

interface FAQProps {
  content?: FAQContent;
}

export function FAQ({ content }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: FAQContent = {
    badge: 'FAQ',
    title: 'よくある質問',
    description: 'お客様からよくいただくご質問をまとめました',
    faqs: [
      {
        question: '屋外の鉄塔近くでも使えますか？',
        answer: 'Xsens MVNは対磁気干渉機能を搭載しており、磁気環境の変化を自動検出・補正します。鉄塔や鉄骨建造物の近くでも、安定した計測が可能です。ただし、強い電磁波を発する設備の直近では影響を受ける可能性があるため、事前のテスト計測をおすすめします。'
      },
      {
        question: '1PCで何人まで同時計測できますか？',
        answer: 'MVN Awindaシステムでは、1台のPCで最大4人まで同時計測が可能です。PCのスペックによっては最大8人まで拡張できます。推奨スペックは、Core i7以上、32GB RAM、NVIDIA GeForce GTX 1080以上となります。'
      },
      {
        question: '納期はどのくらいですか？',
        answer: '在庫状況にもよりますが、通常ご注文から2〜4週間程度でお届けできます。カスタマイズや複数セットのご注文の場合は、別途納期をご相談させていただきます。お急ぎの場合はご相談ください。'
      },
      {
        question: 'レンタルは可能ですか？',
        answer: 'はい、短期レンタルサービスもご用意しております。1週間から1ヶ月単位でのレンタルが可能です。詳細な料金や条件については、お問い合わせください。'
      },
      {
        question: 'トレーニングは必須ですか？',
        answer: 'トレーニングは必須ではありませんが、より効果的にご活用いただくため、導入時のトレーニングを強くおすすめしています。基本的な操作から、データ処理、各種ソフトウェアとの連携まで、お客様のニーズに合わせたカリキュラムをご用意できます。'
      },
      {
        question: 'バッテリーの換は可能ですか？',
        answer: 'バッテリーは消耗品のため、交換可能です。通常使用で約2年程度が交換の目安となります。交換用バッテリーは弊社にて取り扱っておりますので、お気軽にお問い合わせください。'
      },
      {
        question: '水中や雨天での使用は可能ですか？',
        answer: 'MVN Linkの一部モデルは防水仕様（IP67）となっており、雨天での使用が可能です。ただし、水中での使用は想定されていません。詳しい使用条件については、お問い合わせください。'
      },
      {
        question: 'Unityでリアルタイムストリーミングする際の遅延はどのくらいですか？',
        answer: 'ネットワーク環境やPC性能にもよりますが、通常10〜30ms程度の遅延となります。有線LAN接続と推奨スペックのPCを使用することで、より低遅延での配信が可能です。'
      }
    ],
    ctaText: 'お問い合わせフォームへ',
    ctaDescription: 'その他のご質問がございましたら、お気軽にお問い合わせください'
  };

  const data = content || defaultContent;

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-[#CCFF00]/20 text-[#1A1A1A] rounded-full text-sm mb-4">
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-[#1A1A1A]">{data.title}</h2>
          <p className="text-lg text-gray-600">
            {data.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {data.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#CCFF00] transition-all"
            >
              {/* 質問部分 */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 flex items-start justify-between hover:bg-[#f4f6f8] transition-colors text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#CCFF00] text-[#1A1A1A] rounded-full flex items-center justify-center text-sm mt-0.5">
                    Q
                  </div>
                  <span className="text-lg pr-4 text-[#1A1A1A]">{faq.question}</span>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-6 h-6 text-[#1A1A1A]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {/* 回答部分 */}
              {openItems.includes(index) && (
                <div className="px-6 pb-5 border-t border-gray-200 bg-[#f4f6f8]">
                  <div className="flex items-start gap-4 pt-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#002040] text-[#CCFF00] rounded-full flex items-center justify-center text-sm">
                      A
                    </div>
                    <p className="text-[#1A1A1A] leading-relaxed flex-1">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-gray-600 mb-6">
            {data.ctaDescription}
          </p>
          <button className="px-8 py-3 bg-[#CCFF00] text-[#1A1A1A] rounded-lg hover:bg-[#b8e600] transition-all inline-flex items-center gap-2 group">
            {data.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}