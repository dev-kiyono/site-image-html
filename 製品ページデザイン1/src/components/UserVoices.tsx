import React from 'react';
import { UserVoicesContent } from '../types';

interface UserVoicesProps {
  content?: UserVoicesContent;
}

export function UserVoices({ content }: UserVoicesProps) {
  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: UserVoicesContent = {
    badge: 'Case Studies',
    title: '導入事例',
    description: '業界を問わず、様々な分野でXsens MVNが活躍しています',
    voices: [
      {
        company: '大学スポーツ科学研究所',
        industry: 'スポーツ科学',
        person: '',
        role: '',
        comment: '競技フォールドで下のアスリート動作分析に成功',
        rating: 5,
        image: ''
      },
      {
        company: 'アニメーション制作スタジオ',
        industry: 'エンタメ',
        person: '',
        role: '',
        comment: '制作工数を30%削減し、クオリティの向上に成功',
        rating: 5,
        image: ''
      },
      {
        company: '自動車メーカー',
        industry: '産業',
        person: '',
        role: '',
        comment: '組立ラインの改善で工場の安全性を向上させ労災を削減',
        rating: 5,
        image: ''
      },
      {
        company: 'リハビリテーション施設',
        industry: '医療',
        person: '',
        role: '',
        comment: '患者の回復過程を数値化で可視化し、回復期間を短縮',
        rating: 5,
        image: ''
      }
    ],
    ctaText: '事例一覧を見る'
  };

  const data = content || defaultContent;

  // データがない場合はセクションを非表示
  if (!data.voices || data.voices.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-[#f4f6f8] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-block px-4 py-1 bg-[#CCFF00]/20 text-[#1A1A1A] rounded-full text-sm mb-4">
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-[#1A1A1A]">{data.title}</h2>
          <p className="text-lg text-[#1A1A1A]">
            {data.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.voices.map((voice, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all border-2 border-transparent hover:border-[#CCFF00] group cursor-pointer"
            >
              {/* 画像 */}
              {voice.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={voice.image}
                    alt={voice.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* コンテンツ */}
              <div className="p-4">
                {/* カテゴリバッジ */}
                <span className="inline-block px-3 py-1 bg-[#002040] text-white text-xs rounded-full mb-3">
                  {voice.industry}
                </span>

                {/* タイトル */}
                <h3 className="text-lg mb-2 text-[#1A1A1A] leading-tight">
                  {voice.company}
                </h3>

                {/* 説明 */}
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {voice.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-[#CCFF00] text-[#1A1A1A] rounded-lg hover:bg-[#b8e600] transition-all inline-flex items-center gap-2 group">
            {data.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}