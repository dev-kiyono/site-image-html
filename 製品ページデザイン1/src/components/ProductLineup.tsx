import React from 'react';
import { Check } from 'lucide-react';
import { NoImage } from './ui/NoImage';
import { ProductLineupContent } from '../types';

interface ProductLineupProps {
  content?: ProductLineupContent;
}

export function ProductLineup({ content }: ProductLineupProps) {
  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: ProductLineupContent = {
    badge: 'Product Lineup',
    title: 'モデルラインナップ',
    description: '用途に応じて最適なモデルをお選びいただけます',
    products: [
      {
        image: '',
        name: 'MVN Link',
        type: 'ライクラ・スーツ型',
        price: "¥2,500,000〜",
        features: [
          '最高サンプリングレート',
          '高ダイナミックな動き向け',
          'アクション・スポーツに最適',
          '有線接続で安定性抜群'
        ],
        recommended: 'アクション映画、激しいスポーツ動作',
        highlight: true
      },
      {
        image: '',
        name: 'MVN Awinda',
        type: 'ストラップ型',
        price: "¥2,500,000〜",
        features: [
          '着脱が容易',
          '複数人同時計測向け',
          'ワイヤレスで自由度高',
          'リハビリ・教育に最適'
        ],
        recommended: '複数被験者、頻繁な着脱が必要な現場',
        highlight: false
      },
      {
        image: '',
        name: 'MVN Awinda Starter',
        type: 'エントリーモデル',
        price: "¥2,500,000〜",
        features: [
          '低コストで導入可能',
          '基本機能を搭載',
          '小規模プロジェクト向け',
          'アップグレード可能'
        ],
        recommended: '初めてのモーションキャプチャ導入',
        highlight: false
      }
    ],
    ctaText: 'どのモデルが最適か相談する（無料）',
    note: 'レンタルプランもご用意しています'
  };

  const data = content || defaultContent;

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-[#CCFF00] text-[#1A1A1A] rounded-full text-sm mb-4">
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">{data.title}</h2>
          <p className="text-lg text-white/80">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.products.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden transition-all ${product.highlight
                ? 'border-4 border-[#CCFF00] shadow-2xl transform md:-translate-y-4'
                : 'border-2 border-gray-200 shadow-lg hover:border-[#CCFF00] hover:shadow-xl'
                }`}
            >
              {product.highlight && (
                <div className="bg-[#CCFF00] text-[#1A1A1A] text-center py-2 text-sm">
                  Most Popular
                </div>
              )}

              {/* 画像エリア */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#002040] to-[#1A1A1A] flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <NoImage />
                )}
              </div>

              <div className="p-6">
                {/* 製品名 */}
                <h3 className="text-2xl text-center mb-2 text-[#1A1A1A]">{product.name}</h3>
                <div className="text-center text-[#1A1A1A] text-sm mb-6">{product.type}</div>

                {/* 特徴リスト */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#1A1A1A]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* おすすめ用途 */}
                <div className="bg-[#f4f6f8] rounded-lg p-4 mb-6">
                  <div className="text-xs text-[#1A1A1A] mb-1">おすすめ用途</div>
                  <div className="text-sm text-[#1A1A1A]">{product.recommended}</div>
                </div>

                {/* 価格 */}
                {product.price && (
                  <div className="text-center mb-6">
                    <div className="text-2xl text-[#1A1A1A]">{product.price}</div>
                    <div className="text-xs text-[#1A1A1A] mt-1">※構成により異なります</div>
                  </div>
                )}

                {/* CTA */}
                <button className={`w-full py-3 rounded-lg transition-all ${product.highlight
                  ? 'bg-[#1A1A1A] text-white hover:bg-[#002040]'
                  : 'border-2 border-gray-300 text-[#1A1A1A] hover:border-[#CCFF00] hover:text-[#1A1A1A]'
                  }`}>
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-4 bg-[#CCFF00] text-[#1A1A1A] rounded-lg hover:bg-[#b8e600] transition-all inline-flex items-center gap-2 group">
            {data.ctaText}
          </button>
          {data.note && (
            <p className="text-sm text-white/70 mt-3">{data.note}</p>
          )}
        </div>
      </div>
    </section>
  );
}