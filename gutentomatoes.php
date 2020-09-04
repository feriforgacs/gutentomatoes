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
function gutentomatoes_insert_nonce() {
	add_action( 'admin_footer', function() {
		$gutentomatoes_nonce = wp_create_nonce( 'gutentomatoes-nonce-string' );
		echo '<input type="hidden" name="gutentomatoes_nonce" id="gutentomatoes_nonce" value="' . $gutentomatoes_nonce . '" />';
	});
}
add_action( 'load-post.php', 'gutentomatoes_insert_nonce' );
add_action( 'load-post-new.php', 'gutentomatoes_insert_nonce' );

/**
 * Process backend ajax requests
 */
function gutentomatoes_ajax_handler() {
	check_ajax_referer( 'gutentomatoes-nonce-string', 'nonce', true );

	$action = $_POST['plugin_action'];

	switch ( $action ) {
		case 'scrape_url':
			$result = [
				'status' 	=> 'error',
				'data'		=> ''
			];

			$movie_url = esc_url_raw( $_POST['movie_url'] );

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

			// set poster URL only if og:imge meta exists
			if( $movie_og_image_tag->length > 0 ){
				$movie_poster = $movie_og_image_tag->item(0)->getAttribute( 'content' );
			}

			// get critics consensus
			$movie_critics_consensus = "";
			$movie_critics_consensus_tag = $movie_xpath->query( '//p[@class="mop-ratings-wrap__text mop-ratings-wrap__text--concensus"]' );

			// set critics consensus only if exists
			if( $movie_critics_consensus_tag->length > 0 ){
				$movie_critics_consensus = strip_tags( trim( $movie_critics_consensus_tag->item(0)->nodeValue ) );
			}

			// get audience score
			$movie_audience_score = "";
			$movie_audience_score_tag = $movie_xpath->query( '//span[@class="mop-ratings-wrap__percentage"]' );

			// set audience score only if exists
			if( $movie_audience_score_tag->length > 0 ){
				// there are 2 items on the page with the same class, we need the 2nd one
				$movie_audience_score = $movie_audience_score_tag->item(1)->nodeValue;
				// clean data
				$movie_audience_score = preg_replace( '/[^0-9]/', '', strip_tags( trim( $movie_audience_score ) ) );
				// add trailing % sign
				$movie_audience_score .= "%";
			}

			// get user ratings count
			$movie_user_ratings_count = "";
			$movie_user_ratings_count_tag = $movie_xpath->query( '//strong[@class="mop-ratings-wrap__text--small"]' );

			// set user ratings count only if exists
			if( $movie_user_ratings_count_tag->length > 0 ){
				// there are 2 items on the page with the same class, we need the 2nd one
				$movie_user_ratings_count = $movie_user_ratings_count_tag->item(1)->nodeValue;
				//clean data
				$movie_user_ratings_count = preg_replace( '/[^0-9]/', '', strip_tags( trim( $movie_user_ratings_count ) ) );
				// format number
				$movie_user_ratings_count = number_format( $movie_user_ratings_count, 0, '', ' ' );
			}

			// clean data
			$movie_name = esc_html( trim( $movie_schema->name ) );
			$movie_tomatometer = intval( $movie_schema->aggregateRating->ratingValue ) . "%";
			$movie_review_count = intval( $movie_schema->aggregateRating->reviewCount );

			$movie_data = [
				'poster'							=> $movie_poster,
				'name' 								=> $movie_name,
				'tomatometer' 				=> $movie_tomatometer,
				'review_count' 				=> $movie_review_count,
				'critics_consensus' 	=> $movie_critics_consensus,
				'audience_score'			=> $movie_audience_score,
				'user_ratings_count'	=> $movie_user_ratings_count
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