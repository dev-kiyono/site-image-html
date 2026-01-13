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
        image: 'https://images.unsplash.com/photo-1741478551696-8e4ff7d6b468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzY2llbmNlJTIwbW90aW9uJTIwY2FwdHVyZXxlbnwxfHx8fDE3NjU5NTcxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        company: 'アニメーション制作スタジオ',
        industry: 'エンタメ',
        person: '',
        role: '',
        comment: '制作工数を30%削減し、クオリティの向上に成功',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1688131033281-cd02b9eb3ab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdHVkaW8lMjBuZW9uJTIwbGlnaHRzfGVufDF8fHx8MTc2NTk1NzEzOXww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        company: '自動車メーカー',
        industry: '産業',
        person: '',
        role: '',
        comment: '組立ラインの改善で工場の安全性を向上させ労災を削減',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGVyZ29ub21pY3N8ZW58MXx8fHwxNzY1OTU3MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        company: 'リハビリテーション施設',
        industry: '医療',
        person: '',
        role: '',
        comment: '患者の回復過程を数値化で可視化し、回復期間を短縮',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1764314399496-aa49b4e4d127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVoYWJpbGl0YXRpb24lMjB0aGVyYXB5fGVufDF8fHx8MTc2NTk1NzE0MHww&ixlib=rb-4.1.0&q=80&w=1080'
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
    <section className="py-8 md:py-10 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-white mb-4">導入事例</h2>
          <p className="text-[#F4F6F8]">
            業界のプロフェッショナルから選ばれる理由
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.voices.map((voice, index) => (
            <div 
              key={index} 
              className="bg-[#002040]/50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all border-2 border-[#CCFF00]/20 hover:border-[#CCFF00] group cursor-pointer"
            >
              {/* 画像 */}
              <div className="aspect-video bg-gradient-to-br from-[#002040] to-[#1A1A1A] flex items-center justify-center overflow-hidden relative">
                {voice.image ? (
                  <img 
                    src={voice.image} 
                    alt={voice.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-[#CCFF00] text-sm">IMAGE</div>
                )}
              </div>
              
              {/* コンテンツ */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`px-3 py-1 ${voice.industryColor} rounded-full text-xs`}>
                    {voice.industry}
                  </div>
                </div>
                <h3 className="text-lg mb-2 text-white">{voice.company}</h3>
                <p className="text-sm text-[#F4F6F8] mb-4 line-clamp-3">
                  {voice.comment}
                </p>
                <div className="text-xs text-gray-400">
                  {voice.position}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#F4F6F8] mb-6">さらに多くの導入事例を見る</p>
          <button className="px-8 py-3 bg-[#CCFF00] text-[#002040] rounded-lg hover:bg-[#b8e600] transition-all inline-flex items-center gap-2 group">
            導入事例一覧へ
          </button>
        </div>
      </div>
    </section>
  );
}