import React from 'react';
import Header from './imports/Header';
import { HeroSection } from './components/HeroSection';
import { SectionNav } from './components/SectionNav';
import { ProductOverview } from './components/ProductOverview';
import { UseCases } from './components/UseCases';
import { UserVoices } from './components/UserVoices';
import { CompetitiveAdvantage } from './components/CompetitiveAdvantage';
import { ProductLineup } from './components/ProductLineup';
import { Workflow } from './components/Workflow';
import { Specifications } from './components/Specifications';
import { NewsSection } from './components/NewsSection';
import { Support } from './components/Support';
import { BlogSection } from './components/BlogSection';
import { FAQ } from './components/FAQ';
import { RelatedProducts } from './components/RelatedProducts';
import { FooterCTA } from './components/FooterCTA';
import { StickyButton } from './components/StickyButton';

/**
 * Xsens MVN製品ページ
 * 
 * 【CMS連携の実装例】
 * 
 * 1. HeadlessCMS（Contentful、Sanity、microCMSなど）からデータ取得:
 *    const heroData = await fetchFromCMS('hero-section');
 *    <HeroSection content={heroData} />
 * 
 * 2. WordPressのREST APIから取得:
 *    const productData = await fetch('/wp-json/wp/v2/products').then(r => r.json());
 *    <ProductLineup content={productData} />
 * 
 * 3. 静的生成（Next.jsの場合）:
 *    export async function getStaticProps() {
 *      const content = await fetchAllContent();
 *      return { props: { content } };
 *    }
 * 
 * すべてのコンポーネントはpropsでコンテンツを受け取れる設計になっており、
 * propsが渡されない場合はデフォルトコンテンツで動作します。
 */

export default function App() {
  // 【CMS連携例】実際の実装時はここでCMSからデータを取得
  // const pageData = useCMSData(); // カスタムフック例
  // const { hero, products, useCases, faq, ... } = pageData;

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* ヘッダー - Figmaからインポート */}
      <header className="sticky top-0 z-40 h-[72px]">
        <Header />
      </header>

      {/* メインコンテンツ */}
      <main>
        <HeroSection />
        <SectionNav />
        <div id="overview">
          <ProductOverview />
        </div>
        <div id="use-cases">
          <UseCases />
        </div>
        <div id="competitive">
          <CompetitiveAdvantage />
        </div>
        <div id="lineup">
          <ProductLineup />
        </div>
        <div id="user-voices">
          <UserVoices />
        </div>
        <div id="workflow">
          <Workflow />
        </div>
        <div id="specs">
          <Specifications />
        </div>
        <div id="news">
          <NewsSection />
        </div>
        <div id="support">
          <Support />
        </div>
        <div id="blog">
          <BlogSection />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="related">
          <RelatedProducts />
        </div>
        <FooterCTA />
      </main>

      {/* フッター */}
      <footer className="bg-[#1A1A1A] text-[#F4F6F8] py-12 border-t border-[#CCFF00]/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            {/* 会社情報 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#CCFF00] rounded w-10 h-10"></div>
                <div>
                  <h3 className="text-white">株式会社HELTEC</h3>
                  <p className="text-gray-400 text-sm">センシング事業部</p>
                </div>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p className="text-white mb-2">Address</p>
                <p>〒135-0047</p>
                <p>東京都江東区門前仲町19-11</p>
                <p>Tokyo Monmaka Village 6F</p>
              </div>
            </div>

            {/* コンタクト情報 */}
            <div>
              <button className="bg-[#1A1A1A] border border-[#CCFF00]/30 text-white px-6 py-2 rounded hover:bg-[#CCFF00] hover:text-[#002040] transition-colors mb-4 text-sm">
                Contact<br/>
                <span className="text-xs">お問合せ</span>
              </button>
              <div className="text-sm text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-white">📞</span> 03-5875-9788
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-white">✉</span> sensing@heltec.co.jp
                </p>
              </div>
            </div>

            {/* ナビゲーション1 */}
            <div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white mb-1">Product</h4>
                  <p className="text-gray-400 text-xs">製品情報</p>
                </div>
                <div>
                  <h4 className="text-white mb-1">Event</h4>
                  <p className="text-gray-400 text-xs">出展情報</p>
                </div>
                <div>
                  <h4 className="text-white mb-1">News</h4>
                  <p className="text-gray-400 text-xs">お知らせ</p>
                </div>
              </div>
            </div>

            {/* ナビゲーション2 */}
            <div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white mb-1">Company</h4>
                  <p className="text-gray-400 text-xs">会社概要</p>
                </div>
                <div>
                  <h4 className="text-white mb-1">Support</h4>
                  <p className="text-gray-400 text-xs">サポート</p>
                </div>
                <div>
                  <h4 className="text-white mb-1">Privacy Policy</h4>
                  <p className="text-gray-400 text-xs">個人情報保護方針</p>
                </div>
                <div className="mt-6">
                  <h4 className="text-white mb-2">Follow us</h4>
                  <p className="text-gray-400 text-xs mb-2">ブログ</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 bg-[#002040] rounded flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#002040] transition-colors">
                      <span className="text-white">f</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-[#002040] rounded flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#002040] transition-colors">
                      <span className="text-white">▶</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#CCFF00]/20 pt-6 text-center text-sm text-gray-400">
            ©2024 HELTEC All Rights Reserved
          </div>
        </div>
      </footer>

      {/* 追従CTA */}
      <StickyButton />
    </div>
  );
}