# Xsens製品ページ CMS連携ガイド

このプロジェクトは、HeadlessCMS（Contentful、Sanity、microCMSなど）やWordPressとの連携を想定した設計になっています。

## 📁 プロジェクト構成

```
/
├── types/index.ts           # 全データ型定義
├── config/colors.ts         # ブランドカラーパレット
├── components/              # UIコンポーネント
│   ├── HeroSection.tsx      # ヒーローセクション
│   ├── ProductLineup.tsx    # 製品ラインナップ
│   ├── UseCases.tsx         # 活用シーン
│   ├── FAQ.tsx              # よくある質問
│   └── ...                  # その他コンポーネント
└── App.tsx                  # メインページ
```

---

## 🎯 設計思想

### 1. **型安全性**
- すべてのデータ構造が `/types/index.ts` で定義されています
- TypeScriptの型チェックにより、CMSから取得したデータの整合性を保証

### 2. **Propsベースの設計**
- 全コンポーネントがpropsでコンテンツを受け取れます
- propsが渡されない場合は、デフォルトコンテンツで動作（開発時に便利）

### 3. **カラーパレットの一元管理**
- `/config/colors.ts` でブランドカラーを管理
- カラー変更時は1ファイルの編集で全体に反映

---

## 🔌 CMS連携方法

### パターン1: Contentful連携

```tsx
// contentful-client.ts
import { createClient } from 'contentful';
import { HeroContent, ProductLineupContent } from './types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getHeroContent(): Promise<HeroContent> {
  const entry = await client.getEntry('heroSectionId');
  return {
    badge: entry.fields.badge,
    title: entry.fields.title,
    titleHighlight: entry.fields.titleHighlight,
    subtitle: entry.fields.subtitle,
    // ... その他のフィールド
  };
}

// App.tsx
import { getHeroContent } from './contentful-client';

export default function App() {
  const [heroData, setHeroData] = useState<HeroContent | undefined>();

  useEffect(() => {
    getHeroContent().then(setHeroData);
  }, []);

  return (
    <div>
      <HeroSection content={heroData} />
      {/* propsが渡されるまではデフォルトコンテンツで表示 */}
    </div>
  );
}
```

### パターン2: WordPress REST API連携

```tsx
// wordpress-api.ts
import { ProductLineupContent } from './types';

export async function getProductLineup(): Promise<ProductLineupContent> {
  const response = await fetch('https://yoursite.com/wp-json/wp/v2/products');
  const data = await response.json();
  
  return {
    badge: data.badge,
    title: data.title,
    description: data.description,
    products: data.products.map(p => ({
      name: p.name,
      type: p.type,
      price: p.price,
      features: p.features,
      recommended: p.recommended,
      highlight: p.highlight,
    })),
    ctaText: data.ctaText,
    note: data.note,
  };
}
```

### パターン3: microCMS連携

```tsx
// microcms-client.ts
import { createClient } from 'microcms-js-sdk';
import { UseCasesContent } from './types';

const client = createClient({
  serviceDomain: 'your-service',
  apiKey: process.env.MICROCMS_API_KEY!,
});

export async function getUseCases(): Promise<UseCasesContent> {
  const data = await client.get({
    endpoint: 'use-cases',
  });

  return {
    badge: data.badge,
    title: data.title,
    description: data.description,
    cases: data.cases,
    ctaText: data.ctaText,
  };
}
```

---

## 📋 型定義の活用

### CMSのスキーマ設計時の参考として利用

`/types/index.ts` の型定義をもとに、CMSのコンテンツモデルを作成できます。

**例: HeroContent型をContentfulのコンテンツモデルに変換**

```typescript
// types/index.ts
export interface HeroContent {
  badge: string;                    // → Contentful: Short text
  title: string;                    // → Contentful: Long text
  titleHighlight: string;           // → Contentful: Short text
  subtitle: string;                 // → Contentful: Long text
  ctaPrimary: string;               // → Contentful: Short text
  ctaSecondary: string;             // → Contentful: Short text
  features: string[];               // → Contentful: Short text (多値)
  stats: {
    value: string;
    label: string;
  }[];                              // → Contentful: Entry reference (多値)
  trustBadgeLabel: string;          // → Contentful: Short text
  companies: string[];              // → Contentful: Short text (多値)
}
```

---

## 🎨 カラーカスタマイズ

ブランドカラーを変更する場合は `/config/colors.ts` を編集：

```typescript
export const colors = {
  black: '#1A1A1A',      // メインカラー
  accent: '#CCFF00',     // アクセントカラー（蛍光イエロー）
  navy: '#002040',       // セカンダリーカラー
  gray: '#f4f6f8',       // 背景グレー
  // ... その他
};
```

---

## 🚀 実装例：Next.jsでの静的生成

```tsx
// pages/index.tsx (Next.js App Router)
import { getHeroContent, getProductLineup, getFAQs } from '@/lib/cms';
import { HeroSection, ProductLineup, FAQ } from '@/components';

export async function getStaticProps() {
  const [hero, products, faqs] = await Promise.all([
    getHeroContent(),
    getProductLineup(),
    getFAQs(),
  ]);

  return {
    props: { hero, products, faqs },
    revalidate: 60, // ISR: 60秒ごとに再生成
  };
}

export default function Page({ hero, products, faqs }) {
  return (
    <div>
      <HeroSection content={hero} />
      <ProductLineup content={products} />
      <FAQ content={faqs} />
    </div>
  );
}
```

---

## ✅ チェックリスト

### CMS連携を開始する前に確認

- [ ] `/types/index.ts` で必要な型をすべて定義済み
- [ ] CMSのコンテンツモデルが型定義と一致している
- [ ] 環境変数（APIキー、エンドポイント）を設定済み
- [ ] デフォルトコンテンツで動作確認済み
- [ ] 型安全性のためにTypeScriptの厳格モードを有効化

### 本番環境リリース前に確認

- [ ] すべてのpropsが正しく渡されている
- [ ] CMSからデータが取得できない場合のフォールバック処理
- [ ] 画像URLの検証（存在しないURLのハンドリング）
- [ ] エラーハンドリングとローディング状態の実装
- [ ] SEOメタタグの動的生成

---

## 📝 メンテナンス

### 新しいセクションを追加する場合

1. `/types/index.ts` に型定義を追加
2. `/components/` に新しいコンポーネントを作成
3. propsインターフェースを定義し、デフォルトコンテンツを設定
4. `/App.tsx` でコンポーネントをインポート
5. CMSにコンテンツモデルを追加

### 既存セクションを編集する場合

1. CMSの管理画面から編集（コード変更不要）
2. 型定義の変更が必要な場合は `/types/index.ts` を更新
3. TypeScriptのエラーを確認してコンポーネントを修正

---

## 🤝 サポート

このガイドに関する質問や問題があれば、開発チームまでお問い合わせください。

**すべてのコンポーネントはCMSフレンドリーな設計になっており、型安全性を保ちながら柔軟なコンテンツ管理が可能です。**
