import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

export function BlogSection() {
  // CMSから取得を想定したデータ
  const hasArticles = true; // ブログ記事がある場合
  
  const blogPosts = [
    {
      id: 1,
      title: '光学式とのモーションキャプチャの違いを徹底解説',
      excerpt: '慣性式と光学式、それぞれのメリット・デメリットを比較。用途に応じた選び方のポイントをご紹介します。',
      category: 'テクノロジー',
      date: '2024.11.15',
      readTime: '5分',
      tag: 'Xsens',
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/Xsens_MVN.jpg'
    },
    {
      id: 2,
      title: 'バイオメカニクス研究でのXsens活用事例',
      excerpt: '大学研究機関でのフィールド計測実績。屋外スポーツ動作の分析手法を詳しく解説します。',
      category: 'バイメカ',
      date: '2024.11.10',
      readTime: '7分',
      tag: 'バイメカ',
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/MVN_Analyze-1.jpg'
    },
    {
      id: 3,
      title: 'VTuber制作におけるモーションキャプチャ活用術',
      excerpt: 'リアルタイム配信から収録まで。VTuber制作現場でのXsens MVNの活用方法をご紹介。',
      category: 'エンタメ',
      date: '2024.11.05',
      readTime: '6分',
      tag: 'Xsens',
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/MVN_Animate-1.jpg'
    }
  ];

  if (!hasArticles) {
    return null; // 記事がない場合はセクションごと非表示
  }

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダーエリア */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="inline-block px-4 py-1 bg-[#CCFF00]/20 text-[#1A1A1A] rounded-full text-sm mb-4">
                Blog & Column
              </div>
              <h2 className="text-3xl md:text-4xl mb-2">お役立ちブログ・コラム</h2>
              <p className="text-gray-600">モーションキャプチャに関する情報をお届け</p>
            </div>
            <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-[#CCFF00] hover:text-[#002040] transition-all whitespace-nowrap">
              すべての記事を見る →
            </button>
          </div>

          {/* ブログ記事グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer"
              >
                {/* サムネイル */}
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <div className="px-3 py-1 bg-white rounded-full text-xs">
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="mb-2 flex items-center gap-3 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl mb-2 group-hover:text-[#002040] transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-[#CCFF00]/20 rounded-full flex items-center justify-center">
                    <div className="h-3 w-3 bg-[#CCFF00] rounded-full" />
                  </div>
                  <span className="text-xs text-gray-500">タグ: {post.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* モバイル用ボタン */}
          <div className="text-center mt-8 md:hidden">
            <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-[#CCFF00] hover:text-[#002040] transition-all w-full">
              すべての記事を見る →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}