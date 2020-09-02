<?php
/**
 * Plugin Name:     Rotten Tomatoes Gutenberg Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          Ferenc Forgacs
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     create-block
 *
 * @package         create-block
 */

function create_block_gutentomatoes_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/gutentomatoes" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-gutentomatoes-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-gutentomatoes-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-gutentomatoes-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/gutentomatoes', array(
		'editor_script' => 'create-block-gutentomatoes-block-editor',
		'editor_style'  => 'create-block-gutentomatoes-block-editor',
		'style'         => 'create-block-gutentomatoes-block',
	) );
}
add_action( 'init', 'create_block_gutentomatoes_block_init' );

/**
 * Add hidden input field with nonce to the footer of post edit and create pages
 */
function gutentomatoes_insert_nonce(){
	add_action('admin_footer', function(){
		$gutentomatoes_nonce = wp_create_nonce( "gutentomatoes-nonce-string" );
		echo '<input type="hidden" name="gutentomatoes_nonce" id="gutentomatoes_nonce" value="' . $gutentomatoes_nonce . '" />';
	});
}
add_action('load-post.php', 'gutentomatoes_insert_nonce');
add_action('load-post-new.php', 'gutentomatoes_insert_nonce');

/**
 * Process backend ajax requests
 */
function gutentomatoes_ajax_handler(){
	check_ajax_referer( 'gutentomatoes-nonce-string', 'nonce', true );

	$action = $_POST['plugin_action'];

	switch ($action) {
		case 'scrape_url':
			$result = [
				'status' 	=> 'error',
				'data'		=> ''
			];

			$movie_url = esc_url_raw( $_POST[ 'movie_url' ] );

			// check URL format
			if( ! filter_var( $movie_url, FILTER_VALIDATE_URL ) || strpos( $movie_url, 'rottentomatoes.com/m/' ) === FALSE ){
				$result['data'] = 'invalid_url';
				wp_send_json( $result );
				wp_die();
			}

			// get the html source of the movie page
			$movie_page_source = file_get_contents( $movie_url );
			if( strlen( $movie_page_source ) < 100 ){
				$result['data'] = 'no_html';
				wp_send_json( $result );
				wp_die();
			}

			// create new DOM Document 
			$movie_page_document = new DOMDocument();
			$movie_page_document->loadHTML( mb_convert_encoding( $movie_page_source, 'HTML-ENTITIES', 'UTF-8' ) );

			// get schema JSON from the DOM Document
			$movie_xpath = new DOMXPath( $movie_page_document );
			$movie_schema_tags = $movie_xpath->query( '//script[@type="application/ld+json"]' );

			// check schema JSON
			if( $movie_schema_tags->length < 1 ){
				$result['data'] = 'no_schema_found';
				wp_send_json( $result );
				wp_die();
			}

			// get first schema tag
			$movie_schema_json = trim( $movie_schema_tags->item(0)->nodeValue );
			$movie_schema = json_decode( $movie_schema_json );

			// get og:image for movie poster
			$movie_poster = "";
			$movie_og_image_tag = $movie_xpath->query( '//meta[@property="og:image"]' );

			// get poster URL only if og:imge meta exists
			if( $movie_og_image_tag->length > 0 ){
				$movie_poster = $movie_og_image_tag->item(0)->getAttribute( 'content' );
			}

			$movie_data = [
				"name" 					=> $movie_schema->name,
				"rating" 				=> $movie_schema->aggregateRating->ratingValue,
				"review_count" 	=> $movie_schema->aggregateRating->reviewCount,
				"poster"				=> $movie_poster
			];

			$result['status'] = 'success';
			$result['data'] = $movie_data;

			wp_send_json( $result );
			break;
		
		default:
			break;
	}
	wp_die();
}
add_action( 'wp_ajax_gutentomatoes_action', 'gutentomatoes_ajax_handler' );