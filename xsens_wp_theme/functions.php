<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme Setup
 */
function xsens_theme_setup() {
	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	// Let WordPress manage the document title.
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

	// Add partial refresh support for menus and widgets in Customizer.
	add_theme_support( 'customize-selective-refresh-widgets' );

	// Editor Styles
	add_theme_support( 'editor-styles' );
	add_editor_style( 'style.css' );
    // Load Tailwind styles in editor
    add_editor_style( 'assets/css/main.css' );
	
	// Register Menus
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Menu', 'xsens-theme' ),
		'footer'  => esc_html__( 'Footer Menu', 'xsens-theme' ),
	) );
}
add_action( 'after_setup_theme', 'xsens_theme_setup' );

/**
 * Enqueue scripts and styles.
 */
function xsens_theme_scripts() {
	// Main Stylesheet
	wp_enqueue_style( 'xsens-style', get_stylesheet_uri(), array(), '1.0.0' );

	// Tailwind Output
	wp_enqueue_style( 'xsens-main-style', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0' );

	// Remove WP Emoji specific styles/scripts for performance
	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action( 'wp_enqueue_scripts', 'xsens_theme_scripts' );

/**
 * Register Widget Areas
 */
function xsens_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Footer Widget Area', 'xsens-theme' ),
		'id'            => 'footer-1',
		'description'   => esc_html__( 'Add widgets here.', 'xsens-theme' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'xsens_widgets_init' );
