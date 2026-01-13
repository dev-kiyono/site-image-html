// ========================================
// Xsens ブランドカラーパレット
// ========================================

export const colors = {
  // プライマリーカラー
  black: '#1A1A1A',
  white: '#FFFFFF',
  
  // アクセントカラー
  accent: '#CCFF00',
  accentHover: '#b8e600',
  accentLight: 'rgba(204, 255, 0, 0.2)',
  
  // セカンダリーカラー
  navy: '#002040',
  
  // グレースケール
  gray: '#f4f6f8',
  grayDark: '#6b7280',
  grayLight: '#e5e7eb',
  
  // フィードバックカラー
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
} as const;

// Tailwind CSS用のカラーマップ
export const tailwindColors = {
  bg: {
    primary: 'bg-[#1A1A1A]',
    white: 'bg-white',
    accent: 'bg-[#CCFF00]',
    navy: 'bg-[#002040]',
    gray: 'bg-[#f4f6f8]',
  },
  text: {
    primary: 'text-[#1A1A1A]',
    white: 'text-white',
    accent: 'text-[#CCFF00]',
    navy: 'text-[#002040]',
    gray: 'text-gray-600',
  },
  border: {
    accent: 'border-[#CCFF00]',
    gray: 'border-gray-200',
  },
  hover: {
    accent: 'hover:bg-[#b8e600]',
    navy: 'hover:bg-[#002040]',
  }
} as const;
