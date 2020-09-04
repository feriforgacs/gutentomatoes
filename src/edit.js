import { useState } from '@wordpress/element';
import {
	Button,
	Placeholder,
	Spinner,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import Tomatoe from './images/tomatoe.svg';
import Popcorn from './images/popcorn.svg';
import icon from './icon';

export default function Edit( {
	attributes,
	className,
	isSelected,
	setAttributes,
} ) {
	const [ isLoading, setLoading ] = useState( false );
	const [ embedError, setEmbedError ] = useState();

	/**
	 * Scrape movie information
	 * @param {string} url The URL of the movie
	 */
	const scrapeMovieData = ( movie_url ) => {
		setLoading( true );
		setEmbedError( '' );

		// ajax request action
		const action = 'gutentomatoes_action';
		const plugin_action = 'scrape_url';
		const nonce = document.getElementById( 'gutentomatoes_nonce' ).value;

		// ajax request data
		const data = {
			nonce,
			movie_url,
			action,
			plugin_action,
		};

		jQuery.post( ajaxurl, data, function ( response ) {
			setLoading( false );

			if ( response.status !== 'success' ) {
				// set alert message
				let alertMessage = '';
				switch ( response.data ) {
					case 'invalid_url':
						alertMessage = __(
							'Please, use a valid Rotten Tomatoes URL',
							'gutentomatoes'
						);
						break;

					case 'no_html':
						alertMessage = __(
							'We were unable to get the necessary information. Please, try to use a different URL.',
							'gutentomatoes'
						);
						break;

					case 'no_schema_found':
						alertMessage = __(
							'We were unable to get the necessary information. Please, try to use a different URL.',
							'gutentomatoes'
						);
						break;

					default:
						break;
				}

				// set alert message
				setEmbedError( alertMessage );
				return;
			}

			setAttributes( {
				moviePoster: response.data.poster,
				movieName: response.data.name,
				movieTomatometer: response.data.tomatometer,
				movieReviewCount: response.data.review_count,
				movieCriticsConsensus: response.data.critics_consensus,
				movieAudienceScore: response.data.audience_score,
				movieUserRatingsCount: response.data.user_ratings_count,
			} );
		} );
	};

	return (
		<div className={ className }>
			{ /* display spinner while scraping movie information */ }
			{ isLoading && (
				<Placeholder
					isColumnLayout={ true }
					className="gutentomato-movie--loading"
				>
					<Spinner />
					<p>
						{ __(
							'Getting data from Rotten Tomatoes...',
							'gutentomatoes'
						) }
					</p>
				</Placeholder>
			) }

			{ /* display movie information */ }
			{ attributes.movieName && ! isLoading && (
				<div className="gutentomato-movie">
					<img
						className="gutentomato-movie__poster"
						src={ attributes.moviePoster }
						alt={ `${ attributes.movieName } poster` }
					/>

					<div>
						<p className="gutentomato-movie__name">
							{ attributes.movieName }
						</p>

						<p className="gutentomato-movie__subtitle">{ __( 'Critics Consensus', 'gutentomatoes' ) }</p>

						<p className="gutentomato-movie__critics-consensus">
							{ attributes.movieCriticsConsensus }
						</p>

						<div className="gutentomato-movie__scores-container">
							<div className="col col--tomatometer">
								<img src={ Tomatoe } alt="tomatoe icon" />
								<span className="gutentomato-movie__score">
									{ attributes.movieTomatometer }
								</span>
								<p>
									<strong>
										{ __( 'Tomatometer', 'gutentomatoes' ) }
									</strong>
									<br />
									{ __(
										'Total Count:',
										'gutentomatoes'
									) }{ ' ' }
									<span className="gutentomato-movie__count">
										{ attributes.movieReviewCount }
									</span>
								</p>
							</div>
							<div className="col col--audience">
								<img src={ Popcorn } alt="popcorn icon" />
								<span className="gutentomato-movie__audience-score">
									{ attributes.movieAudienceScore }
								</span>
								<p>
									<strong>
										{ __(
											'Audience Score',
											'gutentomatoes'
										) }
									</strong>
									<br />
									{ __(
										'User Ratings:',
										'gutentomatoes'
									) }{ ' ' }
									<span className="gutentomato-movie__user-ratings-count">
										{ attributes.movieUserRatingsCount }
									</span>
								</p>
							</div>
						</div>

						<a
							href={ attributes.movieURL }
							className="gutentomato-movie__url"
							target="_blank"
							rel="nofollow noopener noreferrer"
						>
							{ __(
								'Learn more on Rotten Tomatoes',
								'gutentomatoes'
							) }
						</a>
					</div>
				</div>
			) }

			{ /* display form to embed movie information */ }
			{ ( isSelected || ! attributes.movieURL ) &&
				! attributes.moviePoster &&
				! isLoading && (
					<Placeholder
						icon={ icon }
						label={ __(
							'Rotten Tomatoes Movie URL',
							'gutentomatoes'
						) }
						instructions={ __(
							'Paste a link to the content you want to display on your site.',
							'gutentomatoes'
						) }
					>
						<form
							onSubmit={ () => parseURL( attributes.movieURL ) }
							className="gutentomato-movie__form"
						>
							{ embedError && (
								<p className="gutentomato-movie__error-message">
									{ embedError }
								</p>
							) }
							<TextControl
								value={ attributes.movieURL || '' }
								placeholder={ __(
									'Enter movie URL to embed here...',
									'gutentomatoes'
								) }
								onChange={ ( val ) => {
									setAttributes( { movieURL: val } );
								} }
								disabled={ isLoading }
								type="url"
								required
							/>
							<Button
								type="submit"
								isPrimary
								disabled={ isLoading }
								onClick={ () =>
									scrapeMovieData( attributes.movieURL )
								}
							>
								Embed
							</Button>
						</form>
					</Placeholder>
				) }
		</div>
	);
}
