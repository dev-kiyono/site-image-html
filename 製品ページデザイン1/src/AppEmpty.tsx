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

import {
    emptyHeroContent,
    emptyProductOverview,
    emptyUseCases,
    emptyCompetitiveAdvantage,
    emptyProductLineup,
    emptyUserVoices,
    emptyWorkflow,
    emptySpecifications,
    emptyNews,
    emptySupport,
    emptyBlog,
    emptyFAQ,
    emptyRelatedProducts,
    emptyFooterCTA
} from './config/emptyContent';

export default function AppEmpty() {
    return (
        <div className="min-h-screen bg-[#1A1A1A]">
            <header className="sticky top-0 z-40 h-[72px]">
                <Header />
            </header>

            <main>
                <HeroSection content={emptyHeroContent} />
                <SectionNav />
                <div id="overview">
                    <ProductOverview content={emptyProductOverview} />
                </div>
                <div id="use-cases">
                    <UseCases content={emptyUseCases} />
                </div>
                <div id="competitive">
                    <CompetitiveAdvantage content={emptyCompetitiveAdvantage} />
                </div>
                <div id="lineup">
                    <ProductLineup content={emptyProductLineup} />
                </div>
                <div id="user-voices">
                    <UserVoices content={emptyUserVoices} />
                </div>
                <div id="workflow">
                    <Workflow content={emptyWorkflow} />
                </div>
                <div id="specs">
                    <Specifications content={emptySpecifications} />
                </div>
                <div id="news">
                    <NewsSection content={emptyNews} />
                </div>
                <div id="support">
                    <Support content={emptySupport} />
                </div>
                <div id="blog">
                    <BlogSection content={emptyBlog} />
                </div>
                <div id="faq">
                    <FAQ content={emptyFAQ} />
                </div>
                <div id="related">
                    <RelatedProducts content={emptyRelatedProducts} />
                </div>
                <FooterCTA content={emptyFooterCTA} />
            </main>

            <footer className="bg-[#002040] text-white py-12 border-t border-[#CCFF00]/20">
                <div className="max-w-7xl mx-auto px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
                        {/* 会社情報 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-[#CCFF00] rounded w-10 h-10"></div>
                                <div>
                                    <h3 className="text-white">株式会社HELTEC</h3>
                                    <p className="text-white/70 text-sm">センシング事業部</p>
                                </div>
                            </div>
                            <div className="text-sm text-white/70 space-y-1">
                                <p className="text-white mb-2">Address</p>
                                <p>〒135-0047</p>
                                <p>東京都江東区門前仲町19-11</p>
                                <p>Tokyo Monmaka Village 6F</p>
                            </div>
                        </div>

                        {/* コンタクト情報 */}
                        <div>
                            <button className="bg-[#002040] border border-[#CCFF00]/30 text-white px-6 py-2 rounded hover:bg-[#CCFF00] hover:text-[#1A1A1A] transition-colors mb-4 text-sm">
                                Contact<br />
                                <span className="text-xs">お問合せ</span>
                            </button>
                            <div className="text-sm text-white/70 space-y-2">
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
                                    <p className="text-white/70 text-xs">製品情報</p>
                                </div>
                                <div>
                                    <h4 className="text-white mb-1">Event</h4>
                                    <p className="text-white/70 text-xs">出展情報</p>
                                </div>
                                <div>
                                    <h4 className="text-white mb-1">News</h4>
                                    <p className="text-white/70 text-xs">お知らせ</p>
                                </div>
                            </div>
                        </div>

                        {/* ナビゲーション2 */}
                        <div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-white mb-1">Company</h4>
                                    <p className="text-white/70 text-xs">会社概要</p>
                                </div>
                                <div>
                                    <h4 className="text-white mb-1">Support</h4>
                                    <p className="text-white/70 text-xs">サポート</p>
                                </div>
                                <div>
                                    <h4 className="text-white mb-1">Privacy Policy</h4>
                                    <p className="text-white/70 text-xs">個人情報保護方針</p>
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-white mb-2">Follow us</h4>
                                    <p className="text-white/70 text-xs mb-2">ブログ</p>
                                    <div className="flex gap-3">
                                        <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#1A1A1A] transition-colors">
                                            <span className="text-white">f</span>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#1A1A1A] transition-colors">
                                            <span className="text-white">▶</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-[#CCFF00]/20 pt-6 text-center text-sm text-white/70">
                        ©2024 HELTEC All Rights Reserved
                    </div>
                </div>
            </footer>

            <StickyButton />
        </div>
    );
}
