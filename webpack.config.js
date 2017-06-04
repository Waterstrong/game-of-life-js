const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:5000',
		'webpack/hot/only-dev-server',
		'./index.js'
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},

	devtool: 'inline-source-map',

	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		port: 5000
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,        
				use: {
					loader: 'babel-loader',
					options: { presets: ['react', 'es2015', 'stage-0'] } 
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({template: 'index.html', inject: true}),
		new webpack.NoEmitOnErrorsPlugin(),
		new OpenBrowserPlugin({
			url: 'http://localhost:5000'
		}),
		new DashboardPlugin()
	]
};