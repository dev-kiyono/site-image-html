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
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-white mb-4">テクニカルブログ</h2>
          <p className="text-[#F4F6F8]">
            活用ノウハウや技術情報を定期的に発信しています
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href="#"
              className="group block bg-[#002040]/50 border-2 border-[#CCFF00]/20 rounded-xl overflow-hidden hover:border-[#CCFF00] hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video bg-gradient-to-br from-[#002040] to-[#1A1A1A] flex items-center justify-center overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-[#CCFF00] text-sm">IMAGE</div>
                )}
                <div className="absolute top-3 left-3">
                  <div className="px-3 py-1 bg-[#CCFF00] text-[#002040] rounded-full text-xs">
                    {post.category}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg mb-2 text-white group-hover:text-[#CCFF00] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#F4F6F8] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* モバイル用ボタン */}
        <div className="text-center mt-8 md:hidden">
          <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-[#CCFF00] hover:text-[#002040] transition-all w-full">
            すべての記事を見る →
          </button>
        </div>
      </div>
    </section>
  );
}