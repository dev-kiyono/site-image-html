import React, { useState, useEffect } from 'react';

export function SectionNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  const sections = [
    { id: 'overview', label: '製品概要' },
    { id: 'use-cases', label: '活用シーン' },
    { id: 'user-voices', label: '導入事例' },
    { id: 'competitive', label: '競合比較' },
    { id: 'lineup', label: 'ラインナップ' },
    { id: 'workflow', label: '利用フロー' },
    { id: 'specs', label: '仕様' },
    { id: 'news', label: 'ニュース' },
    { id: 'support', label: 'サポート' },
    { id: 'blog', label: 'ブログ' },
    { id: 'faq', label: 'FAQ' },
    { id: 'related', label: '関連製品' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置でスティッキー状態を判定
      setIsSticky(window.scrollY > 100);

      // アクティブセクションの検出
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140; // ヘッダー + ナビバーの高さ
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`bg-white border-b border-gray-200 transition-all duration-300 ${
        isSticky ? 'sticky top-[72px] z-30 shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 py-2 min-w-max justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 text-sm whitespace-nowrap rounded transition-all ${
                  activeSection === section.id
                    ? 'bg-[#CCFF00] text-[#1A1A1A]'
                    : 'text-[#1A1A1A] hover:bg-[#f4f6f8]'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}