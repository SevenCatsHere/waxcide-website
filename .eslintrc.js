'use strict';

module.exports = {
	root: true,
	extends: 'airbnb',
	parser: 'babel-eslint',
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'arrow-parens': [2, 'as-needed'],
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
	},
	overrides: [
		{
			files: ['./src'],
			env: {
				node: false,
				browser: true,
			},
		},
		{
			files: [
				'.eslintrc.js',
				'gatsby-config.js',
				'jest.*.js',
			],
			parserOptions: { sourceType: 'script' },
			env: { node: true },
			rules: {
				strict: [2, 'global'],
				'import/no-extraneous-dependencies': [2, { devDependencies: true }],
			},
		},
	],
};
