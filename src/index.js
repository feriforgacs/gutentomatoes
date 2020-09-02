import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";
import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/gutentomatoes", {
	title: __("Rotten Tomatoes", "gutentomatoes"),
	description: __(
		"Example block written with ESNext standard and JSX support – build step required.",
		"gutentomatoes"
	),
	category: "embed",
	icon: "star-filled",
	supports: {
		html: false,
	},

	attributes: {
		movieURL: {
			type: "string",
			source: "attribute",
			selector: ".gutentomato-movie__url",
			attribute: "href",
		},
		moviePoster: {
			type: "string",
			source: "attribute",
			selector: ".gutentomato-movie__poster",
			attribute: "src",
		},
		movieName: {
			type: "string",
			source: "text",
			selector: ".gutentomato-movie__name",
		},
		movieTomatometer: {
			type: "string",
			source: "text",
			selector: ".gutentomato-movie__score",
		},
		movieReviewCount: {
			type: "string",
			source: "text",
			selector: ".gutentomato-movie__count",
		},
		movieCriticsConsensus: {
			type: "string",
			source: "text",
			selector: ".gutentomato-movie__critics-consensus",
		},
		movieAudienceScore: {
			type: "string",
			source: "text",
			selector: ".gutentomato-movie__audience-score",
		},
		movieUserRatingsCount: {
			type: "string",
			source: "text",
			selector: ".gutentomato-movie__user-ratings-count",
		},
	},

	edit: Edit,
	save,
});
