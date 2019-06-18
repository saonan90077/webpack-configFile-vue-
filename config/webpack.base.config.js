const webpack = require("webpack");

const path = require("path");

const HtmlWebpackPlugin  = require("html-webpack-plugin");

const CopyWebpackPlugin  = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	entry: {
		main: path.resolve(__dirname, "../src/main.js")
	},
	output: {
		path: path.resolve(__dirname, "../dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",// babel.config.js的配置暂时只兼容到IE9
				exclude: /node_modules/,
				include: [path.resolve(__dirname, "../src")]
			},
			{
				test: /\.css$/,
				use: [
					// "style-loader",
					MiniCssExtractPlugin.loader,//只用于生产环境
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					},
					"postcss-loader"
				]
			},
			{
				test: /\.less$/,
				use: [
					// "style-loader",
					MiniCssExtractPlugin.loader,//只用于生产环境
					{
						loader: "css-loader",
						options: {
							importLoaders: 2
						}
					},
					"postcss-loader",
					"less-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					// "style-loader",
					MiniCssExtractPlugin.loader,//只用于生产环境
					{
						loader: "css-loader",
						options: {
							importLoaders: 2
						}
					},
					"postcss-loader",
					"sass-loader"
				]
			},
		 	{
		        test: /\.(png|jpg|gif|jpeg|svg)$/,
		        use: [
		        {
		            loader: "file-loader",
		            options: {
		              	limit: 1024,
		              	mimetype: 'image/png',
		              	name: "[hash:6].[name].[ext]",
		              	outputPath: "images",
		              	publicPath: "../images"
		            }
		          }
		        ]
	      	},
	      	{
	      		test: /\.(woff|eot|ttf|woff2)$/,
		        use: [
		        {
		            loader: "file-loader",
		            options: {
		              	outputPath: "fonts",
		              	publicPath: "../fonts"
		            }
		          }
		        ]
	      	},
	      	{
	      		test: /\.vue$/,
	      		loader: "vue-loader"
	      	}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "u7power",
			filename: "index.html",
			template: path.resolve(__dirname, "../index.html"),
			inject: true
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, "../static"),
				to: path.resolve(__dirname, "../dist/static")
			}
		]),
		new MiniCssExtractPlugin({
			filename: "css/[name].[hash:6].u7Power.css"
		}),
		new VueLoaderPlugin()
	]
}
