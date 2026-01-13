<?php
/**
 * The template for displaying the front page
 *
 * @package Xsens_Theme
 */

get_header();
?>

<div class="content-area w-full">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="entry-content">
                <?php
                // メインコンテンツ（ブロックエディタの内容）を表示
                the_content();
                ?>
            </div><!-- .entry-content -->
        </article><!-- #post-<?php the_ID(); ?> -->
        <?php
    endwhile; // End of the loop.
    ?>
</div>

<?php
get_footer();
