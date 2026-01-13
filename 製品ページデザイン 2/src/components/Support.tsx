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
    <section className="py-10 md:py-12 bg-gradient-to-br from-[#f4f6f8] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-[#CCFF00]/20 text-[#1A1A1A] rounded-full text-sm mb-4">
            Support
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">サポート体制</h2>
          <p className="text-lg text-gray-600">
            導入後も安心。充実のサポート体制で、お客様の成功をバックアップします
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#CCFF00] transition-all hover:shadow-lg p-6"
            >
              {/* アイコンエリア */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#002040] to-[#1A1A1A] rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-[#CCFF00]" />
              </div>

              {/* コンテンツエリア */}
              <div>
                {/* タイトル */}
                <h3 className="text-lg mb-3">{item.title}</h3>

                {/* 説明 */}
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>

                {/* 詳細リスト */}
                <ul className="space-y-2">
                  {item.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-start gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
          <button className="px-8 py-3 bg-[#CCFF00] text-[#1A1A1A] rounded-lg hover:bg-[#CCFF00]/90 transition-colors">
            お問い合わせフォーム
          </button>
        </div>
      </div>
    </section>
  );
}