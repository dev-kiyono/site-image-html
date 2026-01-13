import React from 'react';
import { Play, CheckCircle } from 'lucide-react';
import heroImage from 'figma:asset/6ce8b4fef6346aae1e96521bafe143d68b39ca87.png';
import movellaLogo from 'figma:asset/df4fcb9d777c5f99c16e12496eb188cb607a66ee.png';
import { HeroContent } from '../types';
import { colors } from '../config/colors';

interface HeroSectionProps {
  content?: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: HeroContent = {
    badge: '世界シェアNo.1',
    title: '慣性式ハイエンド\nモーションキャプチャ',
    titleHighlight: 'Xsens MVN',
    subtitle: '磁気環境に左右されない、あらゆる場所がスタジオになる。',
    ctaPrimary: 'まずは無料デモを予約',
    ctaSecondary: '資料ダウンロード',
    features: [
      'オンライン/訪問デモ対応',
      '見積もり無料',
      '24時間以内に返信'
    ],
    stats: [
      { value: '1,000+', label: '導入企業' },
      { value: '98%', label: '顧客満足度' },
      { value: 'No.1', label: '世界シェア' }
    ],
    trustBadgeLabel: '導入企業例',
    companies: ['Netflix', 'EA', 'NASA', 'TOYOTA', 'SONY', 'META']
  };

  const data = content || defaultContent;

  return (
    <section className="relative bg-[#1A1A1A] text-white overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Xsens モーションキャプチャスーツ"
          className="w-full h-full object-cover opacity-70"
        />
        {/* 上から下へのグラデーション（ヘッダー付近を暗く） */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, transparent 40%)' }} />
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-16 min-h-[65vh] flex items-center justify-center lg:justify-start">
        <div className="max-w-2xl ml-0 lg:ml-24"> {/* 中央寄りに調整 */}
          {/* H1 */}
          <div className="mb-6">
            <div className="mb-6">
              <img src={movellaLogo} alt="Movella" className="h-12 md:h-16" />
            </div>
            <h1 className="text-2xl md:text-3xl mb-3 leading-tight text-white">
              慣性式ハイエンドモーションキャプチャ
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">{data.titleHighlight}</span>
            </h1>
          </div>

          {/* サブコピー */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90">
            {data.subtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="px-8 py-4 bg-[#CCFF00] text-[#1A1A1A] hover:bg-[#b8e600] rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 group">
              {data.ctaPrimary}
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[#CCFF00] text-[#CCFF00] hover:bg-[#CCFF00] hover:text-[#1A1A1A] rounded-lg transition-all">
              {data.ctaSecondary}
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 text-sm text-white/80 mb-8">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* 実績数字（社会的証明） */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mb-10">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-4xl md:text-5xl mb-2 text-[#CCFF00]">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* トラストバッジ */}
          <div>
            <div className="text-sm text-white/70 mb-4">{data.trustBadgeLabel}</div>
            <div className="flex flex-wrap gap-6 items-center">
              {data.companies.map((company) => (
                <div key={company} className="px-4 py-2 bg-white/5 border border-[#CCFF00]/20 rounded text-sm text-white/80">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}