import React from 'react';
import { Headphones, GraduationCap, RefreshCw, Shield } from 'lucide-react';

export function Support() {
  const supportItems = [
    {
      icon: Headphones,
      title: '国内正規代理店としての日本語サポート',
      description: '経験豊富な技術スタッフが、導入から運用まで日本語で丁寧にサポートします。',
      details: [
        'メール・電話でのテクニカルサポート',
        '平日9:00-18:00対応',
        'トラブルシューティングガイド提供'
      ]
    },
    {
      icon: GraduationCap,
      title: '導入トレーニング',
      description: '初めての方でも安心。充実したトレーニングプログラムをご用意しています。',
      details: [
        'オンサイトトレーニング(訪問)',
        'オンライントレーニング(リモート)',
        'トレーニング資料・動画マニュアル提供'
      ]
    },
    {
      icon: RefreshCw,
      title: '無償アップデート',
      description: 'ソフトウェアの機能改善・バグ修正は無償でアップデート可能です。',
      details: [
        '定期的な機能追加',
        'セキュリティアップデート',
        '新しいソフトウェア連携対応'
      ]
    },
    {
      icon: Shield,
      title: '保証・代替機対応',
      description: '万が一の故障時も安心。充実した保証制度をご用意しています。',
      details: [
        'メーカー保証1年間',
        '有償延長保証プランあり',
        '修理中の代替機貸出サービス(オプション)'
      ]
    }
  ];

  return (
    <section className="py-10 md:py-12 bg-[#002040]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-white mb-4">サポート体制</h2>
          <p className="text-[#F4F6F8]">
            導入から運用まで、専門チームが全面サポートします
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#002040]/50 rounded-xl border-2 border-[#CCFF00]/20 hover:border-[#CCFF00] transition-all hover:shadow-lg p-6"
            >
              {/* アイコンエリア */}
              <div className="w-14 h-14 bg-[#CCFF00]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <item.icon className="w-7 h-7 text-[#CCFF00]" />
              </div>
              
              {/* コンテンツ */}
              <h3 className="text-lg text-center mb-3 text-white">{item.title}</h3>
              <p className="text-sm text-center text-[#F4F6F8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* サポート情報ボックス */}
        <div className="max-w-4xl mx-auto mt-12 bg-[#002040] text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl mb-4">導入前のご相談も承ります</h3>
          <p className="mb-6">
            「どのモデルを選べばいいかわからない」「自社の環境で使えるか不安」など、<br />
            導入前の疑問や不安も、お気軽にご相談ください。
          </p>
          <button className="px-8 py-3 bg-[#CCFF00] text-[#002040] rounded-lg hover:bg-[#CCFF00]/90 transition-colors">
            サポートチームに相談する
          </button>
        </div>
      </div>
    </section>
  );
}