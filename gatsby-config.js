'use strict';

require('dotenv').config();
const path = require('path');

const name = 'Waxcide';
const description = '';
const url = 'https://waxcide.com/'

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		title: name,
		description,
		siteUrl: url,
		author: name,
	},
	plugins: [
		'gatsby-transformer-json',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
		'gatsby-plugin-typescript',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-svg',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'articles',
				path: path.resolve('./articles'),
			},
		},
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
