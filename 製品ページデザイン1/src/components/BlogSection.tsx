import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { NoImage } from './ui/NoImage';
import { BlogContent } from '../types';

interface BlogSectionProps {
  content?: BlogContent;
}

export function BlogSection({ content }: BlogSectionProps) {
  // デフォルトコンテンツ
  const defaultContent: BlogContent = {
    badge: 'Blog & Column',
    title: 'お役立ちブログ・コラム',
    description: 'モーションキャプチャに関する情報をお届け',
    posts: [
      {
        image: '',
        category: 'テクノロジー',
        date: '2024.11.15',
        title: '光学式とのモーションキャプチャの違いを徹底解説',
        excerpt: '慣性式と光学式、それぞれのメリット・デメリットを比較。用途に応じた選び方のポイントをご紹介します。',
        link: '#'
      },
      {
        image: '',
        category: 'バイメカ',
        date: '2024.11.10',
        title: 'バイオメカニクス研究でのXsens活用事例',
        excerpt: '大学研究機関でのフィールド計測実績。屋外スポーツ動作の分析手法を詳しく解説します。',
        link: '#'
      },
      {
        image: '',
        category: 'エンタメ',
        date: '2024.11.05',
        title: 'VTuber制作におけるモーションキャプチャ活用術',
        excerpt: 'リアルタイム配信から収録まで。VTuber制作現場でのXsens MVNの活用方法をご紹介。',
        link: '#'
      }
    ],
    ctaText: 'すべての記事を見る →'
  };

  const data = content || defaultContent;

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダーエリア */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="inline-block px-4 py-1 bg-[#CCFF00] text-[#1A1A1A] rounded-full text-sm mb-4">
                {data.badge}
              </div>
              <h2 className="text-3xl md:text-4xl mb-2 text-white">{data.title}</h2>
              <p className="text-white/80">{data.description}</p>
            </div>
            <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A1A1A] border-2 border-white rounded-lg hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all whitespace-nowrap">
              {data.ctaText}
            </button>
          </div>

          {/* ブログ記事グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.posts.map((post, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                {/* サムネイル */}
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    <NoImage />
                  )}
                  <div className="absolute top-3 left-3">
                    <div className="px-3 py-1 bg-white rounded-full text-xs text-[#1A1A1A]">
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="mb-2 flex items-center gap-3 text-sm text-white/60">
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl mb-2 text-white group-hover:text-[#CCFF00] transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-white/70 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>

          {/* モバイル用ボタン */}
          <div className="text-center mt-8 md:hidden">
            <button className="px-6 py-3 bg-white text-[#1A1A1A] border-2 border-white rounded-lg hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all w-full">
              {data.ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}