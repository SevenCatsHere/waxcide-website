'use strict';

require('dotenv').config();
const path = require('path');

module.exports = {
	plugins: [
		'gatsby-transformer-json',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: path.resolve('./data'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.resolve('./images'),
			},
		},
		{
			resolve: 'gatsby-source-instagram-all',
			options: { access_token: process.env.INSTAGRAM_ACCESS_TOKEN },
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
	],
};
