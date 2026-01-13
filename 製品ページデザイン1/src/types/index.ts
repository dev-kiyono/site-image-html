// ========================================
// Xsens製品ページ 型定義
// ========================================

// カラーパレット型
export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  navy: string;
  gray: string;
  white: string;
  black: string;
}

// ヒーローセクション
export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  features: string[];
  stats: {
    value: string;
    label: string;
  }[];
  trustBadgeLabel: string;
  companies: string[];
  backgroundImage?: string;
}

// 製品概要
export interface ProductOverview {
  badge: string;
  title: string;
  description: string;
  videoUrl?: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  ctaText: string;
}

// 製品ラインナップ
export interface Product {
  image?: string;
  name: string;
  type: string;
  price?: string;
  features: string[];
  recommended: string;
  highlight: boolean;
}

export interface ProductLineupContent {
  badge: string;
  title: string;
  description: string;
  products: Product[];
  ctaText: string;
  note?: string;
}

// 活用シーン
export interface UseCase {
  number: string;
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

export interface UseCasesContent {
  badge: string;
  title: string;
  description: string;
  cases: UseCase[];
  ctaText: string;
}

// ワークフロー
export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  detail?: string;
  duration?: string;
  image?: string;
}

export interface WorkflowContent {
  badge: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
  demoVideo?: {
    image: string;
    videoUrl?: string;
    title: string;
  };
}

// スペック
export interface Specification {
  category: string;
  items: {
    label: string;
    value: string;
  }[];
}

export interface SpecificationsContent {
  badge: string;
  title: string;
  description: string;
  specs: Specification[];
  downloadText: string;
}

// ユーザーボイス
export interface UserVoice {
  company: string;
  industry: string;
  person: string;
  role: string;
  comment: string;
  rating: number;
  image?: string;
}

export interface UserVoicesContent {
  badge: string;
  title: string;
  description: string;
  voices: UserVoice[];
  ctaText: string;
}

// 競合比較
export interface ComparisonRow {
  feature: string;
  xsens: string;
  optical: string;
  markerless: string;
  note: string;
}

export interface CompetitiveAdvantageContent {
  badge: string;
  title: string;
  description: string;
  columns: {
    xsens: string;
    optical: string;
    markerless: string;
  };
  comparisonData: ComparisonRow[];
  advantages: {
    icon: string;
    title: string;
    description: string;
    image?: string;
  }[];
  ctaText: string;
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  badge: string;
  title: string;
  description: string;
  faqs: FAQItem[];
  ctaText: string;
  ctaDescription: string;
}

// サポート
export interface SupportOption {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface SupportContent {
  badge: string;
  title: string;
  description: string;
  options: SupportOption[];
}

// ニュース
export interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface NewsContent {
  badge: string;
  title: string;
  description: string;
  news: NewsItem[];
  ctaText: string;
}

// ブログ
export interface BlogPost {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface BlogContent {
  badge: string;
  title: string;
  description: string;
  posts: BlogPost[];
  ctaText: string;
}

// 関連製品
export interface RelatedProduct {
  id: number;
  name: string;
  category: string;
  description: string;
  tag: string;
  image?: string;
}

export interface RelatedProductsContent {
  badge: string;
  title: string;
  description: string;
  products: RelatedProduct[];
}

// フッターCTA
export interface FooterCTAContent {
  title: string;
  description: string;
  actions: {
    icon: string;
    text: string;
    type: 'primary' | 'secondary' | 'outline';
  }[];
}

// 追従ボタン
export interface StickyButtonContent {
  text: string;
  icon: string;
}
