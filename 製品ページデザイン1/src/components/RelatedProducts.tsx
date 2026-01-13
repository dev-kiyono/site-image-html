import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NoImage } from './ui/NoImage';
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
        image: ''
      },
      {
        id: 2,
        name: 'Faceware',
        category: 'フェイシャルキャプチャ',
        description: '表情の細かなニュアンスまで捉える。フルパフォーマンスキャプチャシステムの構築に。',
        tag: 'クロスセル',
        image: ''
      },
      {
        id: 3,
        name: 'AR51',
        category: 'マーカーレスモーションキャプチャ',
        description: 'AIベースのマーカーレスシステム。低コストで導入可能な選択肢として。',
        tag: '比較製品',
        image: ''
      },
      {
        id: 4,
        name: 'SenseGlove',
        category: '触覚グローブ',
        description: 'VR/AR環境での触覚フィードバックを実現。Xsensとの連携で没入感のあるキャプチャ体験。',
        tag: '比較製品',
        image: ''
      }
    ]
  };

  const data = content || defaultContent;

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* ヘッダーエリア */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-block px-4 py-1 bg-[#CCFF00] text-[#1A1A1A] rounded-full text-sm mb-4">
              {data.badge}
            </div>
            <h2 className="text-3xl md:text-4xl mb-2 text-white">{data.title}</h2>
            <p className="text-lg text-white/80">{data.description}</p>
          </div>

          {/* 製品グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.products.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#CCFF00] transition-all group cursor-pointer"
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
                    <NoImage />
                  )}
                </div>

                {/* コンテンツ */}
                <div className="p-5">
                  <div className="text-xs text-[#1A1A1A] mb-2">{product.category}</div>
                  <h3 className="text-lg mb-3 text-[#1A1A1A] group-hover:text-[#002040] transition-colors">{product.name}</h3>
                  <p className="text-sm text-[#1A1A1A] mb-4 leading-relaxed">{product.description}</p>

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