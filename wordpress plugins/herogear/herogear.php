<?php
/*
Plugin Name: Site Plugin for gameofwarrealtips.com
Description: Site specific code changes for gameofwarrealtips.com (custom post types and such)
Version: 1.0
Author: Matt Ortiz
Author URI: http://mattortiz.net
License: GPLv3
*/

function create_posttype() {
	register_post_type( 'herogear',
		array(
			'labels' => array(
				'name' => __( 'Hero Gear' ),
				'singular_name' => __( 'Hero Gear' ),
				'add_new' => __( 'Add New' ),
				'add_new_item' => __( 'Add Gear' ),
				'edit' => __( 'Edit' ),
				'edit_item' => __( 'Edit Gear' ),
				'new_item' => __( 'New Gear' ),
				'view' => __( 'View Gear' ),
				'view_item' => __( 'View Gear' ),
				'search_items' => __( 'Search Gears' ),
				'not_found' => __( 'No gear found' ),
				'not_found_in_trash' => __( 'No gear found in Trash' ),
				'parent' => __( 'Parent Gear' )
				),
			'public' => true,
			'has_archive' => false,
			'rewrite' => array('slug' => 'gear'),
			'public' => true,
			'show_ui' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'menu_icon' => 'dashicons-shield',
			'supports' => array( 'title', 'thumbnail', 'post-formats' )

			)
		);
}
add_action( 'init', 'create_posttype' );


add_filter( 'manage_edit-herogear_columns', 'edit_hero_gear' ) ;
function edit_hero_gear( $columns ) {

	$columns = array(
		'cb' => '<input type="checkbox" />',
		'title' => __( 'Gear' ),
		'hero_level' => __( 'Hero Level' ),
		'type' => __( 'Type' ),
		'event_type' => __( 'Event Type' ),
		'silver_cost' => __( 'Silver Cost' )
		);

	return $columns;
}


add_action( 'manage_herogear_posts_custom_column', 'edit_hero_gear_columns', 10, 2 );
function edit_hero_gear_columns( $column, $post_id ) {
	global $post;

	switch( $column ) {

		case 'hero_level' :

		/* Get the post meta. */
		$hero_level = get_post_meta( $post_id, 'hero_level', true );

		/* If no hero_level is found, output a default message. */
		if ( empty( $hero_level ) )
			echo __( 'Unknown' );

		/* If there is a hero_level, append 'minutes' to the text string. */
		else
			printf($hero_level );

		break;
		case 'type' :

		/* Get the post meta. */
		$type = get_post_meta( $post_id, 'type', true );

		/* If no type is found, output a default message. */
		if ( empty( $type ) )
			echo __( 'Unknown' );

		/* If there is a type, append 'minutes' to the text string. */
		else
			printf($type );

		break;
		case 'event_type' :

		/* Get the post meta. */
		$event_type = get_post_meta( $post_id, 'event_type', true );

		/* If no event_type is found, output a default message. */
		if ( empty( $event_type ) )
			echo __( 'Unknown' );

		/* If there is a event_type, append 'minutes' to the text string. */
		else
			printf($event_type );

		break;
		case 'silver_cost' :

		/* Get the post meta. */
		$silver_cost = get_post_meta( $post_id, 'silver_cost', true );

		/* If no silver_cost is found, output a default message. */
		if ( empty( $silver_cost ) )
			echo __( '---' );

		/* If there is a silver_cost, append 'minutes' to the text string. */
		else
			printf($silver_cost );

		break;

		/* Just break out of the switch statement for everything else. */
		default :
		break;
	}
}


add_theme_support( 'html5', array( 'search-form' ) );
add_filter( 'mce_css', 'plugin_mce_css' );
function plugin_mce_css( $mce_css ) {
	if ( ! empty( $mce_css ) )
		$mce_css .= ',';

	$mce_css .= plugins_url( 'herogear.css', __FILE__ );
	return $mce_css;
}
wp_enqueue_style( 'herogear', plugins_url( 'herogear.css', __FILE__ ) );


// modernizr
wp_deregister_script('modernizr');
wp_enqueue_script('modernizr', plugins_url( 'assets/modernizr/modernizr.js', __FILE__), false, '2.8.3', false);



function html5_search_form( $form ) {
	$label = "Search for:";
	$form = '<form role="search" method="get" class="search-form" action="' . home_url( '/' ) . '"><label><span class="screen-reader-text">' . $label . '</span><input type="search" class="search-field" placeholder="Search Real Tips …" value="" name="s" title="' . $label . '"/></label><input type="submit" class="search-submit" value="Search" aria-label="Search"/></form>';
	return $form;
}
add_filter( 'get_search_form', 'html5_search_form' );



//Game Reviews
add_action( 'init', 'game_reviews_func' );
function game_reviews_func() {
	register_post_type( 'gamereview',
		array(
			'labels' => array(
				'name' => __( 'Game Reviews' ),
				'singular_name' => __( 'Game Reviews' )
				),
			'public' => true
			)
		);

	// magnific script for lightbox
	wp_enqueue_script( 'magnific', plugins_url() . '/herogear/assets/magnific/jquery.magnific-popup.min.js', array( 'jquery' ), '1.0.0', true );
	wp_enqueue_style( 'magnific-css', plugins_url() . '/herogear/assets/magnific/magnific-popup.css', array(), '1.0.0' );

	add_filter('the_title', 'the_title_trim');
	add_filter('single_template', 'game_review_template');
}
function game_review_template( $template ) {
	global $post;
	$category = get_the_category()[0]->slug;

	if ( $category == "game-reviews" ) {
		$locate_template = locate_template( "template-game_reviews.php" );
		if ( ! empty( $locate_template ) ) {
			$template = $locate_template;
		}
	}
	return $template;
}
function the_title_trim( $title=null ) {
	$title = attribute_escape($title);

	$findthese = array('#Private:#');

	$replacewith = array('');

	$title = preg_replace($findthese, $replacewith, $title);
	return trim($title);
}
function return_post_meta( ) {
	global $post;

	$values = array();
	$video = get_post_meta( $post->ID, 'game_review_video_URL', true );
	$iosstore = get_post_meta( $post->ID, 'game_review_app_store_URL', true );
	$androidstore = get_post_meta($post->ID, 'game_review_google_play_URL', true);
	$windowsstore = get_post_meta($post->ID, 'game_review_windows_store_URL', true);


	if ( filter_var($video, FILTER_VALIDATE_URL) !== FALSE ) {
		$values["video"] = $video;
	}
	if ( filter_var($iosstore, FILTER_VALIDATE_URL) !== FALSE ) {
		$values["iOS"] = $iosstore;
	}
	if ( filter_var($androidstore, FILTER_VALIDATE_URL) !== FALSE ) {
		$values["Android"] = $androidstore;
	}
	if ( filter_var($windowsstore, FILTER_VALIDATE_URL) !== FALSE ) {
		$values["Windows"] = $windowsstore;
	}

	return $values;
}


// [materials_finder]
function materials_finder_func(){
	return do_shortcode( '[table id=2 first_column_th=true]' );
}
add_shortcode( 'materials_finder', 'materials_finder_func' );

