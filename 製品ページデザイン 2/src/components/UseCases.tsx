import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
        image: 'https://images.unsplash.com/photo-1759784120360-8b5044b71f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcHJvZHVjdGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjU4NjkyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        reverse: false
      },
      {
        number: '02',
        title: 'スポーツ科学・バイオメカニクス',
        description: 'ワイヤレス・ロガー計測により、実際の競技環境でのモーション計測を実現。フィールドでの計測が可能になり、試合形式でのデータ取得によってアスリートのパフォーマンス分析と改善に貢献します。',
        image: 'https://images.unsplash.com/photo-1763002658028-aebfce5ba5ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZSUyMGFuYWx5c2lzfGVufDF8fHx8MTc2NTk1MjQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        reverse: true
      },
      {
        number: '03',
        title: '産業・エルゴノミクス',
        description: '作業現場での身体負荷を客観的な数値データとして定量化。作業負荷の可視化により、作業環境の改善と労働者の健康維持をサポートし、労災リスクを低減します。',
        image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHJvYm90fGVufDF8fHx8MTc2NTk1MjQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        reverse: false
      },
      {
        number: '04',
        title: '研究・リハビリ・医療',
        description: '短時間でセットアップが完了し、患者への負担を最小限に抑えます。簡単な準備プロセスにより被験者数を増やすことができ、より多くのデータ収集が可能になります。',
        image: 'https://images.unsplash.com/photo-1764314359427-6e685ce5b719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVoYWJpbGl0YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTk1MjQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        reverse: true
      }
    ],
    ctaText: '活用事例の詳細を見る'
  };

  const data = content || defaultContent;

  return (
    <section className="py-10 md:py-12 bg-[#f4f6f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-[#CCFF00]/20 text-[#1A1A1A] rounded-full text-sm mb-4">
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">{data.title}</h2>
          <p className="text-lg text-gray-600">
            {data.description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
          {data.cases.map((useCase, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                useCase.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 md:gap-12 items-center`}
            >
              {/* 画像エリア */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1A1A1A] shadow-2xl">
                  <ImageWithFallback
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
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
                  <h3 className="text-2xl md:text-3xl mb-6">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
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