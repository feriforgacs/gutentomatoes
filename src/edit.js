import { useState } from "@wordpress/element";
import {
	Placeholder,
	TextControl,
	Button,
	Spinner,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({
	attributes,
	className,
	isSelected,
	setAttributes,
}) {
	const [isLoading, setLoading] = useState(false);

	/**
	 * Scrape movie information
	 * @param {string} url The URL of the movie
	 */
	const scrapeMovieData = (movie_url) => {
		setLoading(true);

		// ajax request action
		const action = `gutentomatoes_action`;
		const plugin_action = `scrape_url`;
		const nonce = document.getElementById(`gutentomatoes_nonce`).value;

		// ajax request data
		const data = {
			nonce,
			movie_url,
			action,
			plugin_action,
		};

		jQuery.post(ajaxurl, data, function (response) {
			// change loading status
			setLoading(false);

			if (response.status !== `success`) {
				// set alert message
				let alertMessage = ``;
				switch (response.data) {
					case `invalid_url`:
						alertMessage = __(
							`Please, use a valid Rotten Tomatoes URL`,
							`gutentomatoes`
						);
						break;

					case `no_html`:
						alertMessage = __(
							`We were unable to get the necessary information. Please, try to use a different URL.`,
							`gutentomatoes`
						);
						break;

					case `no_schema_found`:
						alertMessage = __(
							`We were unable to get the necessary information. Please, try to use a different URL.`,
							`gutentomatoes`
						);
						break;

					default:
						break;
				}

				// display alert message
				alert(alertMessage);
				return;
			}

			setAttributes({
				moviePoster: response.data.poster,
				movieName: response.data.name,
				movieTomatometer: response.data.tomatometer,
				movieReviewCount: response.data.review_count,
				movieCriticsConsensus: response.data.critics_consensus,
				movieAudienceScore: response.data.audience_score,
				movieUserRatingsCount: response.data.user_ratings_count,
			});
		});
	};

	return (
		<div className={className}>
			{/* display spinner while scraping movie information */}
			{isLoading && <Spinner />}

			{/* display movie information */}
			{attributes.movieName && !isLoading && (
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
			)}

			{/* display form to embed movie information */}
			{isSelected && (
				<Placeholder
					label={__(`Rotten Tomatoes Movie URL`, `gutentomatoes`)}
					instructions={__(
						`Paste a link to the content you want to display on your site.`,
						`gutentomatoes`
					)}
				>
					<form onSubmit={() => parseURL(attributes.movieURL)}>
						<TextControl
							value={attributes.movieURL || ``}
							placeholder={__(
								`Enter movie URL to embed here...`,
								`gutentomatoes`
							)}
							onChange={(val) => {
								setAttributes({ movieURL: val });
							}}
							disabled={isLoading}
							type={`url`}
							required
						/>
						<Button
							type={`submit`}
							isPrimary
							disabled={isLoading}
							onClick={() => scrapeMovieData(attributes.movieURL)}
						>
							Embed
						</Button>
					</form>
				</Placeholder>
			)}
		</div>
	);
}
