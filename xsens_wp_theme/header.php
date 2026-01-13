<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site flex flex-col min-h-screen">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'xsens-theme' ); ?></a>

	<header id="masthead" class="site-header fixed top-0 z-40 w-full h-[72px] bg-[#002040] border-b border-[#CCFF00]/20">
		<div class="h-full px-4 lg:px-[158.5px] flex items-center justify-between">
			<div class="site-branding h-[40px]">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/544c68c7b1766a6fbfcc3dfe317c80e035cd7f3a.png" alt="株式会社HELTEC センシング事業部" class="h-full w-auto" />
                </a>
			</div><!-- .site-branding -->

			<div class="flex items-center gap-8">
                <nav id="site-navigation" class="main-navigation hidden md:block">
                    <!-- Hardcoded navigation for exact design reproduction with Japanese/English subtext -->
                    <ul class="flex gap-[32px] items-center m-0 p-0 list-none">
                        <li>
                            <a href="#" class="group flex flex-col items-center">
                                <span class="text-white text-[14px] group-hover:text-[#CCFF00] transition-colors leading-[20px]">Product</span>
                                <span class="text-gray-400 text-[12px] leading-[16px]">製品情報</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="group flex flex-col items-center">
                                <span class="text-white text-[14px] group-hover:text-[#CCFF00] transition-colors leading-[20px]">Event</span>
                                <span class="text-gray-400 text-[12px] leading-[16px]">出展情報</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="group flex flex-col items-center">
                                <span class="text-white text-[14px] group-hover:text-[#CCFF00] transition-colors leading-[20px]">News</span>
                                <span class="text-gray-400 text-[12px] leading-[16px]">お知らせ</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="group flex flex-col items-center">
                                <span class="text-white text-[14px] group-hover:text-[#CCFF00] transition-colors leading-[20px]">Company</span>
                                <span class="text-gray-400 text-[12px] leading-[16px]">会社概要</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="group flex flex-col items-center">
                                <span class="text-white text-[14px] group-hover:text-[#CCFF00] transition-colors leading-[20px]">Support</span>
                                <span class="text-gray-400 text-[12px] leading-[16px]">サポート</span>
                            </a>
                        </li>
                    </ul>
                </nav><!-- #site-navigation -->

                <div class="header-actions">
                    <a href="#" class="bg-[#CCFF00] hover:bg-[#b8e600] transition-colors h-[56px] w-[96px] flex flex-col items-center justify-center no-underline">
                        <span class="text-[#1A1A1A] text-[14px] leading-[20px]">Contact</span>
                        <span class="text-[#1A1A1A] text-[12px] leading-[16px]">お問合せ</span>
                    </a>
                </div>
            </div>
		</div>
	</header><!-- #masthead -->

    <!-- Spacer for fixed header -->
    <div class="h-[72px]"></div>

    <main id="primary" class="site-main flex-grow bg-white">
