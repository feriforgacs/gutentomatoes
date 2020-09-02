import { __ } from "@wordpress/i18n";
export default function Save({ attributes, className }) {
	return (
		<div className={`gutentomato-movie`}>
			<img
				className={`gutentomato-movie__poster`}
				src={attributes.moviePoster}
				alt={`${attributes.movieName} poster`}
			/>

			<h3 className={`gutentomato-movie__name`}>{attributes.movieName}</h3>

			<h4>{__(`Critics Consensus`, `gutentomatoes`)}</h4>

			<p className={`gutentomato-movie__critics-consensus`}>
				{attributes.movieCriticsConsensus}
			</p>

			<p>
				{__(`Tomatometer:`, `gutentomatoes`)}{" "}
				<span className={`gutentomato-movie__score`}>
					{attributes.movieTomatometer}
				</span>{" "}
				%
			</p>

			<p>
				{__(`Total Count:`, `gutentomatoes`)}{" "}
				<span className={`gutentomato-movie__count`}>
					{attributes.movieReviewCount}
				</span>
			</p>

			<p>
				{__(`Audience Score:`, `gutentomatoes`)}{" "}
				<span className={`gutentomato-movie__audience-score`}>
					{attributes.movieAudienceScore}
				</span>{" "}
				%
			</p>

			<p>
				{__(`User Ratings:`, `gutentomatoes`)}{" "}
				<span className={`gutentomato-movie__user-ratings-count`}>
					{attributes.movieUserRatingsCount}
				</span>
			</p>

			<a href={attributes.movieURL} className={`gutentomato-movie__url`}>
				{__(`View on Rotten Tomatoes`, `gutentomatoes`)}
			</a>
		</div>
	);
}
