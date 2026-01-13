import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Specifications() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const specifications = [
    {
      title: 'センサー仕様',
      items: [
        { label: 'サイズ', value: '36 x 25 x 11 mm' },
        { label: '重量', value: '16g(1つあたり)' },
        { label: 'バッテリー駆動時間', value: '最大6時間' },
        { label: '通信距離', value: '最大50m(見通し)' },
        { label: 'サンプリングレート', value: '60Hz / 120Hz / 240Hz' },
        { label: '防水性能', value: 'IP67(一部モデル)' }
      ]
    },
    {
      title: '推奨PCスペック',
      items: [
        { label: 'OS', value: 'Windows 10/11 (64bit)' },
        { label: 'CPU', value: 'Intel Core i7以上 / AMD Ryzen 7以上' },
        { label: 'メモリ', value: '16GB RAM以上(32GB推奨)' },
        { label: 'グラフィック', value: 'NVIDIA GeForce GTX 1060以上' },
        { label: 'ストレージ', value: 'SSD 256GB以上の空き容量' },
        { label: 'USB', value: 'USB 3.0ポート x1' }
      ]
    },
    {
      title: 'ソフトウェア連携',
      items: [
        { label: 'Unity', value: 'プラグイン提供(無償)' },
        { label: 'Unreal Engine', value: 'Live Linkプラグイン対応' },
        { label: 'Autodesk Maya', value: 'プラグイン提供' },
        { label: 'MotionBuilder', value: 'ネイティブ対応' },
        { label: 'Blender', value: 'BVH/FBXインポート' },
        { label: 'その他', value: 'MATLAB, Python SDK対応' }
      ]
    },
    {
      title: '出力フォーマット',
      items: [
        { label: 'リアルタイム', value: 'UDP/TCP ストリーミング' },
        { label: 'ファイル出力', value: 'FBX, BVH, C3D, MVNX' },
        { label: 'データ内容', value: '関節角度、位置、速度、加速度' },
        { label: 'ボディモデル', value: '23セグメント / カスタマイズ可能' }
      ]
    },
    {
      title: 'パッケージ内容',
      items: [
        { label: 'センサーユニット', value: '17個(フルボディ)/ 7個(下半身のみ)' },
        { label: 'ボディパック', value: 'バッテリー＋レシーバー内蔵' },
        { label: 'ストラップ/スーツ', value: 'モデルにより異なる' },
        { label: 'ソフトウェア', value: 'MVN Analyze / MVN Animate' },
        { label: '充電器', value: 'マルチ充電ドック' },
        { label: 'キャリーケース', value: '専用ハードケース付属' }
      ]
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-[#f4f6f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl mb-4">機能・スペック詳細</h2>
          <p className="text-lg text-gray-600">
            技術仕様と詳細情報
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {specifications.map((section, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#CCFF00] transition-colors"
            >
              {/* アコーディオンヘッダー */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f4f6f8] transition-colors"
              >
                <h3 className="text-xl text-left">{section.title}</h3>
                {openSections.includes(index) ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              {/* アコーディオンコンテンツ */}
              {openSections.includes(index) && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="pt-4 space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="grid grid-cols-1 md:grid-cols-3 gap-2 py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="text-sm text-gray-600">{item.label}</div>
                        <div className="md:col-span-2">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ソフトウェアロゴ */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-xl text-center mb-6">対応ソフトウェア</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: 'Unity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
              { name: 'Unreal Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
              { name: 'Maya', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg' },
              { name: 'MotionBuilder', logo: 'https://cdn.simpleicons.org/autodesk/0696D7' },
              { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
              { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
            ].map((software) => (
              <div key={software.name} className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#f4f6f8] rounded-lg mb-2 flex items-center justify-center">
                  <img
                    src={software.logo}
                    alt={software.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-xs text-gray-600">{software.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-[#CCFF00] text-[#1A1A1A] rounded-lg hover:bg-[#CCFF00]/90 transition-colors">
            詳細スペックシートをダウンロード
          </button>
        </div>
      </div>
    </section>
  );
}