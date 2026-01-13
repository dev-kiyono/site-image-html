import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';

export function Specifications() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const specData = [
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
    <section className="py-8 md:py-10 bg-[#002040]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-white mb-4">技術仕様</h2>
          <p className="text-[#F4F6F8]">
            Xsens MVNの詳細スペックと対応ソフトウェア
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {specData.map((section, index) => (
            <div
              key={index}
              className="bg-[#002040]/50 border-2 border-[#CCFF00]/20 rounded-lg overflow-hidden hover:border-[#CCFF00] transition-colors"
            >
              {/* アコーディオンヘッダー */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#002040]/70 transition-colors"
              >
                <h3 className="text-xl text-left text-white">{section.title}</h3>
                <div className="flex-shrink-0">
                  {openSections.includes(index) ? (
                    <Minus className="w-6 h-6 text-[#CCFF00]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {/* アコーディオンコンテンツ */}
              {openSections.includes(index) && (
                <div className="px-6 pb-5 border-t border-[#CCFF00]/20">
                  <table className="w-full text-sm mt-4">
                    <tbody>
                      {section.items.map((item, idx) => (
                        <tr key={idx} className="border-b border-[#CCFF00]/10 last:border-b-0">
                          <td className="py-3 pr-4 text-gray-400 align-top w-1/3">{item.label}</td>
                          <td className="py-3 text-[#F4F6F8] align-top">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ソフトウェアロゴ */}
        <div className="max-w-4xl mx-auto mt-12 bg-[#002040]/50 rounded-xl p-8 border-2 border-[#CCFF00]/20">
          <h3 className="text-xl text-center mb-6 text-white">対応ソフトウェア</h3>
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
                <div className="w-16 h-16 mx-auto bg-[#1A1A1A] rounded-lg mb-2 flex items-center justify-center border border-[#CCFF00]/20">
                  <img
                    src={software.logo}
                    alt={software.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-xs text-[#F4F6F8]">{software.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-gray-600 mb-6">
            更に詳しい技術情報はPDFカタログをダウンロードください
          </p>
          <button className="px-8 py-3 bg-[#CCFF00] text-[#002040] rounded-lg hover:bg-[#CCFF00]/90 transition-colors">
            技術仕様書をダウンロード（PDF）
          </button>
        </div>
      </div>
    </section>
  );
}