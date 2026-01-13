import React from 'react';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

export function NewsSection() {
  // CMSから取得を想定したデータ
  const hasNews = true; // ニュース記事がある場合
  
  const newsItems = [
    {
      id: 1,
      category: '製品情報',
      categoryColor: 'bg-[#CCFF00]/20 text-[#002040]',
      title: 'Xsens MVN 最新ソフトウェアバージョン 2024.2 をリリース',
      date: '2024.12.01',
      excerpt: 'Unreal Engine 5.4への完全対応、新機能として自動キャリブレーション精度が向上しました。',
      tag: 'Xsens'
    },
    {
      id: 2,
      category: 'イベント',
      categoryColor: 'bg-[#CCFF00]/20 text-[#002040]',
      title: '国際ロボット展 2024 に出展します(12/15-18)',
      date: '2024.11.25',
      excerpt: '東京ビッグサイトにて、Xsens MVN全ラインナップの実機デモンストレーションを実施します。',
      tag: 'Xsens'
    },
    {
      id: 3,
      category: 'メディア掲載',
      categoryColor: 'bg-[#CCFF00]/20 text-[#002040]',
      title: '専門誌「CG WORLD」にXsens活用事例が掲載されました',
      date: '2024.11.20',
      excerpt: '大手アニメーションスタジオでのワークフロー改善事例が特集記事として紹介されています。',
      tag: 'Xsens'
    },
    {
      id: 4,
      category: '導入事例',
      categoryColor: 'bg-[#CCFF00]/20 text-[#002040]',
      title: '○○大学スポーツ科学研究所にXsens MVN Awindaを納入',
      date: '2024.11.15',
      excerpt: 'フィールドでのアスリート動作分析に活用。屋外計測の実現により研究の幅が拡大。',
      tag: 'Xsens'
    },
    {
      id: 5,
      category: 'お知らせ',
      categoryColor: 'bg-[#CCFF00]/20 text-[#002040]',
      title: '年末年始の営業日のご案内',
      date: '2024.11.10',
      excerpt: '誠に勝手ながら、2024年12月29日(日)~2025年1月5日(日)まで休業とさせていただきます。',
      tag: ''
    },
    {
      id: 6,
      category: 'セミナー',
      categoryColor: 'bg-[#CCFF00]/20 text-[#002040]',
      title: 'オンラインセミナー「モーションキャプチャ入門」開催のお知らせ',
      date: '2024.11.05',
      excerpt: '初心者向けのオンラインセミナーを開催します。参加費無料、事前予約制です。',
      tag: 'Xsens'
    }
  ];

  if (!hasNews) {
    return null; // ニュース記事がない場合はセクションごと非表示
  }

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">News</h2>
          <p className="text-lg text-white/80">
            最新情報・お知らせ
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* ニュースリスト */}
          <div className="space-y-4">
            {newsItems.map((news) => (
              <a
                key={news.id}
                href="#"
                className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#CCFF00] transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* 左側：日付とカテゴリー */}
                  <div className="flex-shrink-0 md:w-32">
                    <div className="flex items-center gap-2 text-[#1A1A1A] mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{news.date}</span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs ${news.categoryColor}`}>
                      {news.category}
                    </div>
                  </div>

                  {/* 右側：コンテンツ */}
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-[#1A1A1A] group-hover:text-[#002040] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-[#1A1A1A] mb-3">
                      {news.excerpt}
                    </p>
                    {news.tag && (
                      <div className="flex items-center gap-2 text-xs text-[#1A1A1A]">
                        <Tag className="w-3 h-3" />
                        <span>{news.tag}</span>
                      </div>
                    )}
                  </div>

                  {/* 矢印アイコン */}
                  <div className="flex-shrink-0 flex items-center">
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#002040] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* すべて見るボタン */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-white text-[#1A1A1A] border-2 border-white rounded-lg hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all">
              すべてのニュースを見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}