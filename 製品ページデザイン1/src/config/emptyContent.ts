import {
    HeroContent,
    ProductOverview,
    ProductLineupContent,
    UseCasesContent,
    WorkflowContent,
    SpecificationsContent,
    UserVoicesContent,
    CompetitiveAdvantageContent,
    FAQContent,
    SupportContent,
    NewsContent,
    BlogContent,
    RelatedProductsContent,
    FooterCTAContent
} from '../types';

// Images removed as per user request
const PLACEHOLDER_IMAGE = '';

export const emptyHeroContent: HeroContent = {
    badge: 'ここにバッジテキスト',
    title: 'ここにメインタイトル',
    titleHighlight: '強調テキスト',
    subtitle: 'ここにサブタイトルが入ります。製品の魅力や特徴を簡潔に伝えるテキストを配置してください。',
    ctaPrimary: 'ボタンテキスト',
    ctaSecondary: 'ボタンテキスト',
    features: ['特徴1', '特徴2', '特徴3'],
    stats: [
        { value: '000', label: 'ラベル' },
        { value: '000', label: 'ラベル' },
        { value: '000', label: 'ラベル' }
    ],
    trustBadgeLabel: '信頼性ラベル',
    companies: ['Company A', 'Company B', 'Company C', 'Company D'],
    backgroundImage: '' // Explicitly remove background image
};

// ... (Rest of the file remains similar but using the empty PLACEHOLDER_IMAGE)

export const emptyProductOverview: ProductOverview = {
    badge: '概要バッジ',
    title: '製品概要タイトル',
    description: 'ここに製品の概要説明が入ります。機能や利点について詳しく説明するテキストエリアです。',
    videoUrl: '',
    features: [
        { icon: PLACEHOLDER_IMAGE, title: '機能タイトル1', description: '機能の説明文がここに入ります。' },
        { icon: PLACEHOLDER_IMAGE, title: '機能タイトル2', description: '機能の説明文がここに入ります。' },
        { icon: PLACEHOLDER_IMAGE, title: '機能タイトル3', description: '機能の説明文がここに入ります。' }
    ],
    ctaText: '詳細を見る'
};

export const emptyUseCases: UseCasesContent = {
    badge: '事例バッジ',
    title: '活用シーンタイトル',
    description: '製品がどのように活用されているかを紹介するセクションの導入文です。',
    cases: [
        { number: '01', title: '活用シーン1', description: 'シーンの詳細説明が入ります。', image: PLACEHOLDER_IMAGE, reverse: false },
        { number: '02', title: '活用シーン2', description: 'シーンの詳細説明が入ります。', image: PLACEHOLDER_IMAGE, reverse: true },
        { number: '03', title: '活用シーン3', description: 'シーンの詳細説明が入ります。', image: PLACEHOLDER_IMAGE, reverse: false }
    ],
    ctaText: '事例一覧へ'
};

export const emptyCompetitiveAdvantage: CompetitiveAdvantageContent = {
    badge: '比較バッジ',
    title: '競合比較タイトル',
    description: '他社製品との違いや優位性を説明するテキストが入ります。',
    columns: {
        xsens: '自社製品',
        optical: '比較対象A',
        markerless: '比較対象B'
    },
    comparisonData: [
        { feature: '比較項目1', xsens: '○', optical: '△', markerless: '×', note: '注釈' },
        { feature: '比較項目2', xsens: '○', optical: '△', markerless: '×', note: '注釈' },
        { feature: '比較項目3', xsens: '○', optical: '△', markerless: '×', note: '注釈' }
    ],
    advantages: [
        { icon: PLACEHOLDER_IMAGE, title: '優位性1', description: '優位性の詳細説明。' },
        { icon: PLACEHOLDER_IMAGE, title: '優位性2', description: '優位性の詳細説明。' },
        { icon: PLACEHOLDER_IMAGE, title: '優位性3', description: '優位性の詳細説明。' }
    ],
    ctaText: '比較詳細へ'
};

export const emptyProductLineup: ProductLineupContent = {
    badge: 'ラインナップバッジ',
    title: '製品ラインナップ',
    description: '取り扱い製品の一覧を紹介するセクションです。',
    products: [
        { name: '製品名 A', type: 'タイプ', price: '価格未定', features: ['特徴A', '特徴B'], recommended: 'こんな方におすすめ', highlight: true, image: PLACEHOLDER_IMAGE },
        { name: '製品名 B', type: 'タイプ', price: '価格未定', features: ['特徴A', '特徴B'], recommended: 'こんな方におすすめ', highlight: false, image: PLACEHOLDER_IMAGE },
        { name: '製品名 C', type: 'タイプ', price: '価格未定', features: ['特徴A', '特徴B'], recommended: 'こんな方におすすめ', highlight: false, image: PLACEHOLDER_IMAGE }
    ],
    ctaText: 'カタログ請求',
    note: '※注釈テキスト'
};

export const emptyUserVoices: UserVoicesContent = {
    badge: 'ボイスバッジ',
    title: '導入事例',
    description: '実際に利用されているお客様の声を掲載します。',
    voices: [
        { company: '企業名', industry: '業界', person: '役職 氏名', role: '役割', comment: 'ここにコメントが入ります。製品の良い点や導入効果など。', rating: 5, image: PLACEHOLDER_IMAGE },
        { company: '企業名', industry: '業界', person: '役職 氏名', role: '役割', comment: 'ここにコメントが入ります。製品の良い点や導入効果など。', rating: 4, image: PLACEHOLDER_IMAGE },
        { company: '企業名', industry: '業界', person: '役職 氏名', role: '役割', comment: 'ここにコメントが入ります。製品の良い点や導入効果など。', rating: 5, image: PLACEHOLDER_IMAGE }
    ],
    ctaText: 'お客様の声をもっと見る'
};

export const emptyWorkflow: WorkflowContent = {
    badge: 'フローバッジ',
    title: '導入フロー',
    description: '導入から運用開始までの流れを説明します。',
    steps: [
        { number: '01', title: 'ステップ1', description: 'ステップの説明文。', duration: '期間目安', image: PLACEHOLDER_IMAGE },
        { number: '02', title: 'ステップ2', description: 'ステップの説明文。', duration: '期間目安', image: PLACEHOLDER_IMAGE },
        { number: '03', title: 'ステップ3', description: 'ステップの説明文。', duration: '期間目安', image: PLACEHOLDER_IMAGE },
        { number: '04', title: 'ステップ4', description: 'ステップの説明文。', duration: '期間目安', image: PLACEHOLDER_IMAGE }
    ],
    demoVideo: {
        image: PLACEHOLDER_IMAGE,
        videoUrl: '',
        title: 'デモ動画タイトル'
    }
};

export const emptySpecifications: SpecificationsContent = {
    badge: 'スペックバッジ',
    title: '製品仕様',
    description: '詳細な製品仕様や動作環境についての説明です。',
    specs: [
        { category: 'カテゴリA', items: [{ label: '項目1', value: '値1' }, { label: '項目2', value: '値2' }] },
        { category: 'カテゴリB', items: [{ label: '項目1', value: '値1' }, { label: '項目2', value: '値2' }] }
    ],
    downloadText: '仕様書ダウンロード'
};

export const emptyNews: NewsContent = {
    badge: 'ニュースバッジ',
    title: 'お知らせ',
    description: '最新情報をお届けします。',
    news: [
        { date: '2024.01.01', category: 'カテゴリ', title: 'ここにニュースタイトルが入ります', excerpt: 'ニュースの抜粋テキスト...', link: '#' },
        { date: '2024.01.01', category: 'カテゴリ', title: 'ここにニュースタイトルが入ります', excerpt: 'ニュースの抜粋テキスト...', link: '#' },
        { date: '2024.01.01', category: 'カテゴリ', title: 'ここにニュースタイトルが入ります', excerpt: 'ニュースの抜粋テキスト...', link: '#' }
    ],
    ctaText: 'ニュース一覧'
};

export const emptySupport: SupportContent = {
    badge: 'サポートバッジ',
    title: 'サポート体制',
    description: '導入後のサポートについて説明します。',
    options: [
        { icon: PLACEHOLDER_IMAGE, title: 'サポート1', description: 'サポート内容の説明。', features: ['詳細1', '詳細2'] },
        { icon: PLACEHOLDER_IMAGE, title: 'サポート2', description: 'サポート内容の説明。', features: ['詳細1', '詳細2'] },
        { icon: PLACEHOLDER_IMAGE, title: 'サポート3', description: 'サポート内容の説明。', features: ['詳細1', '詳細2'] }
    ]
};

export const emptyBlog: BlogContent = {
    badge: 'ブログバッジ',
    title: '公式ブログ',
    description: '技術情報やコラムを発信しています。',
    posts: [
        { image: PLACEHOLDER_IMAGE, category: 'カテゴリ', date: '2024.01.01', title: 'ブログ記事タイトル', excerpt: '記事の抜粋テキスト...', link: '#' },
        { image: PLACEHOLDER_IMAGE, category: 'カテゴリ', date: '2024.01.01', title: 'ブログ記事タイトル', excerpt: '記事の抜粋テキスト...', link: '#' },
        { image: PLACEHOLDER_IMAGE, category: 'カテゴリ', date: '2024.01.01', title: 'ブログ記事タイトル', excerpt: '記事の抜粋テキスト...', link: '#' }
    ],
    ctaText: 'ブログ一覧'
};

export const emptyFAQ: FAQContent = {
    badge: 'FAQバッジ',
    title: 'よくある質問',
    description: 'お客様から寄せられる質問をまとめました。',
    faqs: [
        { question: '質問テキストが入ります', answer: '回答テキストが入ります。' },
        { question: '質問テキストが入ります', answer: '回答テキストが入ります。' },
        { question: '質問テキストが入ります', answer: '回答テキストが入ります。' },
        { question: '質問テキストが入ります', answer: '回答テキストが入ります。' },
        { question: '質問テキストが入ります', answer: '回答テキストが入ります。' }
    ],
    ctaText: 'FAQ一覧へ',
    ctaDescription: 'その他の質問はこちら'
};

export const emptyRelatedProducts: RelatedProductsContent = {
    badge: '関連バッジ',
    title: '関連製品',
    description: 'こちらの製品もおすすめです。',
    products: [
        { id: 1, name: '関連製品A', category: 'カテゴリ', description: '製品説明...', tag: 'タグ', image: PLACEHOLDER_IMAGE },
        { id: 2, name: '関連製品B', category: 'カテゴリ', description: '製品説明...', tag: 'タグ', image: PLACEHOLDER_IMAGE },
        { id: 3, name: '関連製品C', category: 'カテゴリ', description: '製品説明...', tag: 'タグ', image: PLACEHOLDER_IMAGE }
    ]
};

export const emptyFooterCTA: FooterCTAContent = {
    title: 'フッターCTAタイトル',
    description: 'アクションを促すテキストが入ります。',
    actions: [
        { icon: 'mail', text: 'お問い合わせ', type: 'primary' },
        { icon: 'download', text: '資料請求', type: 'secondary' }
    ]
};
