import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RelatedProductsContent } from '../types';

interface RelatedProductsProps {
  content?: RelatedProductsContent;
}

export function RelatedProducts({ content }: RelatedProductsProps) {
  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: RelatedProductsContent = {
    badge: 'Related Products',
    title: '関連製品',
    description: 'あわせてご検討いただける製品',
    products: [
      {
        id: 1,
        name: 'Manus グローブ',
        category: '手指モーションキャプチャ',
        description: '高精度な手指トラッキングを実現。Xsensと組み合わせて全身＋手指の完全なキャプチャが可能に。',
        tag: 'クロスセル',
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/Manus.jpg'
      },
      {
        id: 2,
        name: 'Faceware',
        category: 'フェイシャルキャプチャ',
        description: '表情の細かなニュアンスまで捉える。フルパフォーマンスキャプチャシステムの構築に。',
        tag: 'クロスセル',
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/06/FCS__.png'
      },
      {
        id: 3,
        name: 'AR51',
        category: 'マーカーレスモーションキャプチャ',
        description: 'AIベースのマーカーレスシステム。低コストで導入可能な選択肢として。',
        tag: '比較製品',
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/12/AR51ColorfulLogo-4096-1.png'
      },
      {
        id: 4,
        name: 'SenseGlove',
        category: '触覚グローブ',
        description: 'VR/AR環境での触覚フィードバックを実現。Xsensとの連携で没入感のあるキャプチャ体験。',
        tag: '比較製品',
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/SenseGlove_Nova2.jpg'
      }
    ]
  };

  const data = content || defaultContent;

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-white mb-4">関連製品</h2>
            <p className="text-[#F4F6F8]">
              Xsens MVNと併せてご利用いただける製品
            </p>
          </div>

          {/* 製品グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.products.map((product) => (
              <div
                key={product.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#CCFF00] transition-all group cursor-pointer"
              >
                {/* 画像プレースホルダー */}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gray-300 rounded-lg" />
                    </div>
                  )}
                </div>

                {/* コンテンツ */}
                <div className="p-5">
                  <div className="text-xs text-gray-500 mb-2">{product.category}</div>
                  <h3 className="text-lg mb-3 group-hover:text-[#002040] transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center text-[#002040] transition-all">
                    <span className="text-sm">詳細を見る</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}