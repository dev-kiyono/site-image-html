import React from 'react';

export function ProductOverview() {
  const benefits = [
    {
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/10/Industrial_Athlete.jpg',
      title: 'Anywhere（屋外利用可能）',
      description: '太陽光や遮蔽物の影響を受けず、屋外や狭い車内でも収録可能。'
    },
    {
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/Xsens_MVN.jpg',
      title: 'Efficient（省スペース・時短）',
      description: 'カメラ設置不要。セットアップからキャリブレーションまで数分で完了。'
    },
    {
      image: 'https://sensing.heltec.co.jp/wp-content/uploads/2024/03/MVN_Animate-1.jpg',
      title: 'Connectivity（主要ソフト連携）',
      description: 'Unity, Unreal Engine, Maya, MotionBuilderへリアルタイムストリーミング。'
    }
  ];

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-1 bg-[#CCFF00]/20 text-[#1A1A1A] rounded-full text-sm mb-4">
            Product Overview
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Xsens MVNとは？</h2>
          <p className="text-lg text-gray-600">
            外部カメラ不要、身体にセンサーを装着するだけで、高精度なデータ収録を実現する慣性センサ式モーションキャプチャシステムです。
          </p>
        </div>

        {/* 3カラム */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center border-2 border-[#f4f6f8] rounded-lg hover:border-[#CCFF00] transition-all hover:shadow-lg overflow-hidden">
              {/* 画像エリア */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#002040] to-[#1A1A1A] flex items-center justify-center overflow-hidden">
                {benefit.image ? (
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-[#CCFF00] text-sm">
                    IMAGE
                  </div>
                )}
              </div>
              
              {/* コンテンツエリア */}
              <div className="p-6">
                {/* タイトル */}
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                
                {/* 説明 */}
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA追加 */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">まずは無料デモでその性能を体感してください</p>
          <button className="px-8 py-3 bg-[#CCFF00] text-[#1A1A1A] rounded-lg hover:bg-[#b8e600] transition-all inline-flex items-center gap-2 group">
            無料デモを予約する
          </button>
        </div>
      </div>
    </section>
  );
}