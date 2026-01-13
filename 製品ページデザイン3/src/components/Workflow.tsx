import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Workflow() {
  const steps = [
    {
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/Xsens_MVN.jpg',
      number: '01',
      title: '装着 (Setup)',
      description: 'センサーをバンド/スーツに入れる',
      detail: 'わずか数分で装着完了。専門知識不要。',
      time: '3-5分'
    },
    {
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/MTw_Awinda.jpg',
      number: '02',
      title: '調整 (Calibrate)',
      description: 'Nポーズをして数秒歩く',
      detail: '自動キャリブレーション機能で簡単セットアップ。',
      time: '30秒'
    },
    {
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2025/11/Animate-2025_mocap-and-avatar_dark-mode_-e1763353143345.png',
      number: '03',
      title: '計測 (Capture)',
      description: 'PC/スマホで録画開始',
      detail: 'リアルタイムプレビューで動きを確認しながら収録。',
      time: '必要に応じて'
    },
    {
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/MVN_Analyze-1.jpg',
      number: '04',
      title: '出力 (Export)',
      description: 'FBX, BVH等で書き出し or リアルタイム転送',
      detail: '主要DCCツールへ直接ストリーミング可能。',
      time: '数秒'
    }
  ];

  const demoVideo = {
    image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/MVN_Animate-1.jpg',
    videoUrl: null, // CMSから動画URLを設定可能
    title: 'セットアップからキャプチャまでのデモ動画'
  };

  return (
    <section className="py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-white mb-4">導入から運用まで</h2>
          <p className="text-[#F4F6F8]">
            専任サポートチームが、安心してご利用いただけるよう全力でサポートします
          </p>
        </div>

        {/* ステップグリッド */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#002040]/50 border-2 border-[#CCFF00]/20 rounded-xl overflow-hidden hover:border-[#CCFF00] transition-all hover:shadow-lg">
                  {/* ステップ番号バッジ */}
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-[#CCFF00] rounded-full flex items-center justify-center">
                    <span className="text-[#002040]">{step.number}</span>
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
                      <div className="text-[#CCFF00] text-sm">IMAGE</div>
                    )}
                  </div>

                  {/* コンテンツエリア */}
                  <div className="p-5">
                    <h3 className="text-xl mb-2 text-white">{step.title}</h3>
                    <p className="text-sm text-[#F4F6F8] mb-3">{step.description}</p>
                    <p className="text-xs text-gray-400 mb-4">{step.detail}</p>
                    <div className="inline-block px-3 py-1.5 bg-[#CCFF00]/20 text-[#CCFF00] rounded-full text-xs">
                      所要時間: {step.time}
                    </div>
                  </div>
                </div>

                {/* 矢印（デスクトップのみ、最後以外） */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-20 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#CCFF00]" />
                  </div>
                )}

                {/* 矢印（モバイル/タブレット、最後以外） */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-3">
                    <ArrowRight className="w-6 h-6 text-[#CCFF00] transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* デモ動画エリア */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#002040]/50 border-2 border-[#CCFF00]/20 rounded-xl overflow-hidden hover:border-[#CCFF00] transition-all">
            <div className="aspect-video bg-gradient-to-br from-[#002040] to-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
              {demoVideo.image ? (
                <img
                  src={demoVideo.image}
                  alt={demoVideo.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-[#CCFF00] text-sm mb-2">VIDEO / IMAGE</div>
                  <div className="text-gray-400 text-xs">{demoVideo.title}</div>
                </div>
              )}
            </div>
            <div className="p-6 text-center bg-[#002040]/30">
              <h3 className="text-lg mb-2 text-white">{demoVideo.title}</h3>
              <p className="text-sm text-[#F4F6F8]">実際の操作画面を動画でご確認いただけます</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}