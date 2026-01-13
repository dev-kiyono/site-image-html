import React from 'react';
import { Download, Mail, Video } from 'lucide-react';
import { FooterCTAContent } from '../types';

interface FooterCTAProps {
  content?: FooterCTAContent;
}

export function FooterCTA({ content }: FooterCTAProps) {
  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: FooterCTAContent = {
    title: 'まずは、お気軽にご相談ください',
    description: 'Xsens MVNの導入について、専門スタッフが丁寧にご説明いたします',
    actions: [
      { icon: 'video', text: '製品デモを予約する', type: 'primary' },
      { icon: 'download', text: 'カタログDL', type: 'secondary' },
      { icon: 'mail', text: 'お問い合わせ', type: 'outline' }
    ]
  };

  const data = content || defaultContent;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'video':
        return Video;
      case 'download':
        return Download;
      case 'mail':
        return Mail;
      default:
        return Mail;
    }
  };

  const getButtonClasses = (type: string) => {
    switch (type) {
      case 'primary':
        return 'bg-[#CCFF00] text-[#1A1A1A] hover:bg-[#b8e600]';
      case 'secondary':
        return 'bg-[#002040] text-white hover:bg-[#003060]';
      case 'outline':
        return 'border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A]';
      default:
        return 'bg-[#CCFF00] text-[#1A1A1A] hover:bg-[#b8e600]';
    }
  };

  return (
    <section className="py-10 md:py-12 bg-gradient-to-r from-[#1A1A1A] to-[#002040] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl mb-4">{data.title}</h2>
          <p className="text-lg text-gray-300">{data.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {data.actions.map((action, index) => {
            const Icon = getIcon(action.icon);
            const isPrimary = action.type === 'primary';
            
            return (
              <button
                key={index}
                className={`flex items-center justify-center gap-3 px-8 py-5 rounded-xl transition-all text-lg group ${
                  isPrimary ? 'bg-[#CCFF00] text-[#1A1A1A] hover:bg-[#b8e600]' : getButtonClasses(action.type)
                }`}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>{action.text}</span>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            ※ 営業時間：平日 9:00〜18:00（土日祝除く）
          </p>
        </div>
      </div>
    </section>
  );
}