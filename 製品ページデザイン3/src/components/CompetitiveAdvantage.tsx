import React from 'react';
import { Check, Circle, X } from 'lucide-react';
import { CompetitiveAdvantageContent } from '../types';

interface CompetitiveAdvantageProps {
  content?: CompetitiveAdvantageContent;
}

export function CompetitiveAdvantage({ content }: CompetitiveAdvantageProps) {
  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: CompetitiveAdvantageContent = {
    badge: 'Why Choose Xsens',
    title: 'なぜ、プロフェッショナルに選ばれるのか',
    description: '他のモーションキャプチャシステムとの比較',
    columns: {
      xsens: 'Xsens (慣性式)',
      optical: '一般的な光学式 (マーカー式)',
      markerless: 'マーカーレス (AI推定)'
    },
    comparisonData: [
      {
        feature: '屋外計測',
        xsens: '◎',
        optical: '△',
        markerless: '○',
        note: '天候に左右されず計測可能'
      },
      {
        feature: '遮蔽物耐性',
        xsens: '◎',
        optical: '△',
        markerless: '○',
        note: '身体の重なりも正確に計測'
      },
      {
        feature: 'セットアップ時間',
        xsens: '◎',
        optical: '△',
        markerless: '◎',
        note: '5分程度で開始可能'
      },
      {
        feature: '精度',
        xsens: '◎',
        optical: '◎',
        markerless: '△',
        note: 'プロフェッショナルレベル'
      },
      {
        feature: '価格',
        xsens: '○',
        optical: '△',
        markerless: '◎',
        note: '導入規模に応じて最適化'
      },
      {
        feature: '複数人同時計測',
        xsens: '◎',
        optical: '○',
        markerless: '◎',
        note: '最大8人まで対応'
      }
    ],
    advantages: [
      {
        icon: 'sensor-fusion',
        title: '独自のセンサーフュージョンアルゴリズム',
        description: 'ジャイロ、加速度、地磁気の3つのセンサーデータを統合し、高精度な姿勢推定を実現。',
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/MTw_Awinda.jpg'
      },
      {
        icon: 'magnetic-resistance',
        title: '対磁気干渉機能',
        description: '磁気環境の変化を自動検出・補正することで、鉄骨建造物内でも安定した計測が可能。',
        image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/Movella_DOT_HELTEC-1.jpg'
      }
    ],
    ctaText: '専門スタッフに相談する（無料）'
  };

  const data = content || defaultContent;

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-white mb-4">競合比較</h2>
          <p className="text-[#F4F6F8]">
            光学式モーションキャプチャとの違いを徹底比較
          </p>
        </div>

        {/* 比較テーブル */}
        <div className="max-w-5xl mx-auto mb-12 overflow-x-auto">
          <div className="min-w-[600px] border-2 border-[#CCFF00]/30 rounded-lg overflow-hidden shadow-lg">
            {/* ヘッダー */}
            <div className="grid grid-cols-4 bg-[#002040] border-b-2 border-[#CCFF00]/30">
              <div className="p-4 border-r border-[#CCFF00]/20"></div>
              <div className="p-4 border-r border-[#CCFF00]/20 text-center bg-[#1A1A1A] text-white">
                <div className="mb-1">Xsens</div>
                <div className="text-xs text-[#CCFF00]">(慣性式)</div>
              </div>
              <div className="p-4 border-r border-[#CCFF00]/20 text-center">
                <div className="mb-1 text-white">一般的な光学式</div>
                <div className="text-xs text-gray-400">(マーカー式)</div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-1 text-white">マーカーレス</div>
                <div className="text-xs text-gray-400">(AI推定)</div>
              </div>
            </div>

            {/* データ行 */}
            {data.comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 ${
                  index % 2 === 0 ? 'bg-[#002040]/50' : 'bg-[#002040]/30'
                } border-b border-[#CCFF00]/10 last:border-b-0`}
              >
                <div className="p-4 border-r border-[#CCFF00]/20">
                  <div className="mb-1 text-white">{row.feature}</div>
                  <div className="text-xs text-gray-400">{row.note}</div>
                </div>
                <div className="p-4 border-r border-[#CCFF00]/20 flex items-center justify-center bg-[#CCFF00]/10">
                  <div className="text-2xl text-white">{row.xsens}</div>
                </div>
                <div className="p-4 border-r border-[#CCFF00]/20 flex items-center justify-center">
                  <div className="text-2xl text-white">{row.optical}</div>
                </div>
                <div className="p-4 flex items-center justify-center">
                  <div className="text-2xl text-white">{row.markerless}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 凡例 */}
          <div className="flex justify-center gap-6 mt-6 text-sm text-[#F4F6F8]">
            <div className="flex items-center gap-2">
              <span className="text-2xl">◎</span>
              <span>優れている</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">○</span>
              <span>良い</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">△</span>
              <span>環境による</span>
            </div>
          </div>
        </div>

        {/* 技術解説 */}
        <div className="max-w-4xl mx-auto bg-[#002040]/50 rounded-xl p-8 border-2 border-[#CCFF00]/20">
          <h3 className="text-2xl mb-6 text-center text-white">Xsensの技術的優位性</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {data.advantages.map((advantage, index) => (
              <div key={index}>
                <div className="aspect-video bg-gradient-to-br from-[#002040] to-[#1A1A1A] rounded-lg mb-4 overflow-hidden">
                  {advantage.image ? (
                    <img src={advantage.image} alt={advantage.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-sm text-[#CCFF00]">{advantage.title} 図解</div>
                    </div>
                  )}
                </div>
                <h4 className="mb-2 text-white">{advantage.title}</h4>
                <p className="text-sm text-[#F4F6F8]">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA追加 */}
          <div className="text-center mt-12">
            <p className="text-[#F4F6F8] mb-6">競合他社との詳細な比較資料をダウンロード</p>
            <button className="px-8 py-3 bg-[#CCFF00] text-[#002040] rounded-lg hover:bg-[#b8e600] transition-all inline-flex items-center gap-2 group">
              比較資料をダウンロード
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}