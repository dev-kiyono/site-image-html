import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NoImage } from './ui/NoImage';
import { WorkflowContent } from '../types';

interface WorkflowProps {
  content?: WorkflowContent;
}

export function Workflow({ content }: WorkflowProps) {
  // デフォルトコンテンツ
  const defaultContent: WorkflowContent = {
    badge: 'Workflow',
    title: 'ワークフロー',
    description: '導入から運用まで、驚くほど簡単',
    steps: [
      {
        image: '',
        number: '01',
        title: '装着 (Setup)',
        description: 'センサーをバンド/スーツに入れる',
        detail: 'わずか数分で装着完了。専門知識不要。',
        time: '3-5分'
      },
      {
        image: '',
        number: '02',
        title: '調整 (Calibrate)',
        description: 'Nポーズをして数秒歩く',
        detail: '自動キャリブレーション機能で簡単セットアップ。',
        time: '30秒'
      },
      {
        image: '',
        number: '03',
        title: '計測 (Capture)',
        description: 'PC/スマホで録画開始',
        detail: 'リアルタイムプレビューで動きを確認しながら収録。',
        time: '必要に応じて'
      },
      {
        image: '',
        number: '04',
        title: '出力 (Export)',
        description: 'FBX, BVH等で書き出し or リアルタイム転送',
        detail: '主要DCCツールへ直接ストリーミング可能。',
        time: '数秒'
      }
    ],
    demoVideo: {
      image: '',
      videoUrl: '',
      title: 'セットアップからキャプチャまでのデモ動画'
    }
  };

  const data = content || defaultContent;

  const demoVideo = data.demoVideo || {
    image: '',
    videoUrl: null,
    title: 'セットアップからキャプチャまでのデモ動画'
  };

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A] overflow-visible">
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

        {/* ステップグリッド */}
        <div className="max-w-6xl mx-auto mb-12 overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16 overflow-visible">
            {data.steps.map((step, index) => (
              <div key={index} className="relative flex flex-col overflow-visible">
                {/* モバイル用ステップ番号 */}
                <div className="lg:hidden flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#CCFF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1A1A1A] font-bold text-sm">{step.number}</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#CCFF00]/50 to-transparent" />
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#CCFF00] transition-all hover:shadow-lg flex-1 flex flex-col group relative">
                  {/* ステップ番号バッジ */}
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-sm text-[#1A1A1A] font-bold">{step.number}</span>
                  </div>

                  {/* 画像エリア */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#002040] to-[#1A1A1A] flex items-center justify-center overflow-hidden relative">
                    {step.image ? (
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <NoImage />
                    )}
                  </div>

                  {/* コンテンツエリア */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl mb-2 text-[#1A1A1A]">{step.title}</h3>
                    <p className="text-sm text-[#1A1A1A] mb-3">{step.description}</p>
                    {step.duration && (
                      <div className="inline-block px-3 py-1.5 bg-[#CCFF00]/20 text-[#1A1A1A] rounded-full text-xs self-start">
                        所要時間: {step.duration}
                      </div>
                    )}
                  </div>
                </div>

                {/* カード間の矢印（デスクトップのみ、最後以外） */}
                {index < data.steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-12 transform -translate-y-1/2 z-30 items-center">
                    <ArrowRight className="w-10 h-10 text-[#CCFF00] drop-shadow-lg" strokeWidth={2.5} />
                  </div>
                )}

                {/* 矢印（モバイル/タブレット、最後以外） */}
                {index < data.steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-2 bg-[#CCFF00]" />
                      <ArrowRight className="w-8 h-8 text-[#CCFF00] rotate-90 -mt-1" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* デモ動画エリア */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#CCFF00] transition-all">
            <div className="aspect-video bg-gradient-to-br from-[#002040] to-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
              {demoVideo.image ? (
                <img
                  src={demoVideo.image}
                  alt={demoVideo.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <NoImage />
              )}
            </div>
            <div className="p-6 text-center bg-[#f4f6f8]">
              <h3 className="text-lg mb-2 text-[#1A1A1A]">{demoVideo.title}</h3>
              <p className="text-sm text-[#1A1A1A]">実際の操作画面を動画でご確認いただけます</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}