import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NoImage } from './ui/NoImage';
import { UseCasesContent } from '../types';

interface UseCasesProps {
  content?: UseCasesContent;
}

export function UseCases({ content }: UseCasesProps) {
  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: UseCasesContent = {
    badge: 'Solutions',
    title: '活用シーン',
    description: 'さまざまな業界で、Xsens MVNが選ばれています',
    cases: [
      {
        number: '01',
        title: 'エンタメ（CG/VTuber）',
        description: '高精度な生データによりリアルタイムキャプチャを実現。後処理の手間を大幅に削減し、アニメーション制作のワークフローを効率化。修正工数を削減することで、制作時間を30%短縮します。',
        image: '',
        reverse: false
      },
      {
        number: '02',
        title: 'スポーツ科学・バイオメカニクス',
        description: 'ワイヤレス・ロガー計測により、実際の競技環境でのモーション計測を実現。フィールドでの計測が可能になり、試合形式でのデータ取得によってアスリートのパフォーマンス分析と改善に貢献します。',
        image: '',
        reverse: true
      },
      {
        number: '03',
        title: '産業・エルゴノミクス',
        description: '作業現場での身体負荷を客観的な数値データとして定量化。作業負荷の可視化により、作業環境の改善と労働者の健康維持をサポートし、労災リスクを低減します。',
        image: '',
        reverse: false
      },
      {
        number: '04',
        title: '研究・リハビリ・医療',
        description: '短時間でセットアップが完了し、患者への負担を最小限に抑えます。簡単な準備プロセスにより被験者数を増やすことができ、より多くのデータ収集が可能になります。',
        image: '',
        reverse: true
      }
    ],
    ctaText: '活用事例の詳細を見る'
  };

  const data = content || defaultContent;

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-[#CCFF00] text-[#1A1A1A] rounded-full text-sm mb-4">
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-white">{data.title}</h2>
          <p className="text-lg text-white/80">
            {data.description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
          {data.cases.map((useCase, index) => (
            <div
              key={index}
              className={`flex flex-col ${useCase.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-8 md:gap-12 items-center`}
            >
              {/* 画像エリア */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#002040] shadow-2xl border-2 border-[#CCFF00]/20">
                  {useCase.image ? (
                    <ImageWithFallback
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <NoImage />
                  )}
                </div>
              </div>

              {/* テキストエリア */}
              <div className="w-full md:w-1/2 relative">
                {/* 大きな番号 */}
                <div className="absolute -top-6 left-0 text-[120px] md:text-[150px] opacity-5 select-none pointer-events-none text-[#CCFF00]">
                  {useCase.number}
                </div>

                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl text-[#CCFF00] mb-4">
                    {useCase.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl mb-6 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAボタン */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-[#CCFF00] text-[#1A1A1A] rounded-lg hover:bg-[#b8e600] transition-all inline-flex items-center gap-2 group">
            {data.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}