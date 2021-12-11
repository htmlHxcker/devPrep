const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	devServer: {
		static: path.resolve(__dirname, './src'),
		historyApiFallback: true,
	},
	entry: {
		popup: path.resolve(__dirname, './src/ui/popup/popup-index.js'),
		options: path.resolve(__dirname, './src/ui/options/options-index.js'),
		foreground: path.resolve(
			__dirname,
			'./src/ui/foreground/foreground-index.js'
		),
		newtab: path.resolve(__dirname, './src/ui/newtab/newtab-index.js'),
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react',
								{
									plugins: ['@babel/plugin-proposal-class-properties'],
								},
							],
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'popup.html',
			template: 'src/ui/popup/popup.html',
			chunks: ['popup'],
		}),
		new HtmlWebpackPlugin({
			filename: 'options.html',
			template: 'src/ui/options/options.html',
			chunks: ['options'],
		}),
		new HtmlWebpackPlugin({
			filename: 'foreground.html',
			template: 'src/ui/foreground/foreground.html',
			chunks: ['foreground'],
		}),
		new HtmlWebpackPlugin({
			filename: 'newtab.html',
			template: 'src/ui/newtab/newtab.html',
			chunks: ['newtab'],
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/manifest.json', to: '[name][ext]' },
				{ from: 'src/background.js', to: '[name][ext]' },
				{ from: 'src/scripts/inject-script.js', to: '[name][ext]' },
				{ from: 'src/images/*.png', to: '[name][ext]' },
			],
		}),
		new CleanWebpackPlugin(),
	],
};
