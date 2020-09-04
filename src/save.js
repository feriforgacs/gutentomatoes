import { __ } from '@wordpress/i18n';
import Tomatoe from './images/tomatoe.svg';
import Popcorn from './images/popcorn.svg';

export default function Save( { attributes, className } ) {
	return (
		<>
			{ attributes.movieURL && (
				<div className={ `${ className } gutentomato-movie` }>
					<img
						className="gutentomato-movie__poster"
						src={ attributes.moviePoster }
						alt={ `${ attributes.movieName } poster` }
					/>

					<div>
						<h3 className="gutentomato-movie__name">
							{ attributes.movieName }
						</h3>

						<h4>{ __( 'Critics Consensus', 'gutentomatoes' ) }</h4>

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
		</>
	);
}
