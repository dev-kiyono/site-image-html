import React from 'react';
import { Check } from 'lucide-react';
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
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/Xsens_MVN.jpg',
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
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/MTw_Awinda.jpg',
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
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/Movella_DOT_HELTEC-1.jpg',
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
    <section className="py-10 md:py-12 bg-[#002040]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-white mb-4">製品ラインナップ</h2>
          <p className="text-[#F4F6F8]">
            ワイヤレス/有線モデルから、お客様の用途に合わせて最適なモデルをお選びいただけます
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.products.map((product, index) => (
            <div
              key={index}
              className={`bg-[#002040]/50 rounded-xl overflow-hidden transition-all ${
                product.highlight
                  ? 'border-4 border-[#CCFF00] shadow-2xl transform md:-translate-y-4'
                  : 'border-2 border-[#CCFF00]/20'
              } hover:shadow-lg`}>
              {/* おすすめバッジ */}
              {product.highlight && (
                <div className="bg-[#CCFF00] text-[#002040] text-center py-2 text-sm">
                  {product.badge}
                </div>
              )}

              {/* 画像エリア */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#002040] to-[#1A1A1A] flex items-center justify-center overflow-hidden relative">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-[#CCFF00] text-sm">IMAGE</div>
                )}
              </div>

              <div className="p-6">
                {/* モデル名 */}
                <h3 className="text-2xl mb-2 text-white">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{product.type}</p>

                {/* 特徴（箇条書き） */}
                {product.features && (
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#F4F6F8]">
                        <Check className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* おすすめ用途 */}
                <div className="bg-[#1A1A1A]/50 rounded-lg p-4 mb-6">
                  <div className="text-xs text-gray-400 mb-1">おすすめ用途</div>
                  <div className="text-sm text-[#F4F6F8]">{product.recommended}</div>
                </div>

                {/* 価格 */}
                {product.price && (
                  <div className="text-center mb-6">
                    <div className="text-2xl text-white">{product.price}</div>
                    <div className="text-xs text-gray-400 mt-1">※構成により異なります</div>
                  </div>
                )}

                {/* CTA */}
                <button className={`w-full py-3 rounded-lg transition-all ${
                  product.highlight
                    ? 'bg-[#CCFF00] text-[#002040] hover:bg-[#b8e600]'
                    : 'border-2 border-[#CCFF00]/40 text-white hover:border-[#CCFF00] hover:bg-[#CCFF00]/10'
                }`}>
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-4 bg-[#CCFF00] text-[#002040] rounded-lg hover:bg-[#b8e600] transition-all inline-flex items-center gap-2 group">
            {data.ctaText}
          </button>
          {data.note && (
            <p className="text-sm text-gray-400 mt-3">{data.note}</p>
          )}
        </div>
      </div>
    </section>
  );
}