import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { StickyButtonContent } from '../types';

interface StickyButtonProps {
  content?: StickyButtonContent;
}

export function StickyButton({ content }: StickyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  // デフォルトコンテンツ（CMS未接続時のフォールバック）
  const defaultContent: StickyButtonContent = {
    text: 'お問い合わせ',
    icon: 'mail'
  };

  const data = content || defaultContent;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <button className="flex items-center gap-3 px-6 py-4 bg-[#CCFF00] text-[#1A1A1A] rounded-full shadow-2xl hover:bg-[#b8e600] hover:scale-105 transition-all group">
        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-lg">{data.text}</span>
      </button>
    </div>
  );
}