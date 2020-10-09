'use strict';

const path = require('path');

module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.resolve('./src/images'),
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				useResolveUrlLoader: {
					options: {
						debug: true,
						sourceMap: true,
					},
				},
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
	],
};
