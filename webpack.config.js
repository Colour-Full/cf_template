var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var rules = DEVELOPMENT ? 
[
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader?-url',
				'postcss-loader',
				'sass-loader',
			],
		},
] :
[
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader?-url', 'postcss-loader', 'sass-loader'],
				}),
		},
];

var plugins = DEVELOPMENT ?
	[
			new webpack.HotModuleReplacementPlugin(),
	] 
		:
	[
			new ExtractTextPlugin('../css/styles.css'),
	];

module.exports = {
	// This will be the entry file for all of our js code
	entry: [
		'./js/main.js',
	],
	// This will be where the final bundle file will be outputed
	output: {
		path: path.join(__dirname, '/js/'),
		filename: 'bundle.js',
	},
	// Automatically compile when files change.
	watch: true,
	// Automatically reload the page when compilation is done.
	devServer: {
		inline: true
	},
	module: {
		rules: rules, 
	},
	plugins: plugins,
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};
