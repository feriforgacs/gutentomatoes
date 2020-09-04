import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';
import Save from './save';
import icon from './icon';

registerBlockType( 'create-block/gutentomatoes', {
	title: __( 'Rotten Tomatoes', 'gutentomatoes' ),
	description: __(
		'Use this block to add Rotten Tomatoes movie ratings to your posts or pages',
		'gutentomatoes'
	),
	category: 'embed',
	icon: icon,
	supports: {
		html: false,
	},

	attributes: {
		movieURL: {
			type: 'string',
			source: 'attribute',
			selector: '.gutentomato-movie__url',
			attribute: 'href',
		},
		moviePoster: {
			type: 'string',
			source: 'attribute',
			selector: '.gutentomato-movie__poster',
			attribute: 'src',
		},
		movieName: {
			type: 'string',
			source: 'text',
			selector: '.gutentomato-movie__name',
		},
		movieTomatometer: {
			type: 'string',
			source: 'text',
			selector: '.gutentomato-movie__score',
		},
		movieReviewCount: {
			type: 'string',
			source: 'text',
			selector: '.gutentomato-movie__count',
		},
		movieCriticsConsensus: {
			type: 'string',
			source: 'text',
			selector: '.gutentomato-movie__critics-consensus',
		},
		movieAudienceScore: {
			type: 'string',
			source: 'text',
			selector: '.gutentomato-movie__audience-score',
		},
		movieUserRatingsCount: {
			type: 'string',
			source: 'text',
			selector: '.gutentomato-movie__user-ratings-count',
		},
	},

	edit: Edit,
	save: Save,
} );
