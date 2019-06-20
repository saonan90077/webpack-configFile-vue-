const webpack = require("webpack");

const path = require("path");

const HtmlWebpackPlugin  = require("html-webpack-plugin");

const CopyWebpackPlugin  = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const NODE_ENV = process.env.NODE_ENV;

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
					NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
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
					NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
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
					NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
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
	resolve: {
		// 设置别名
		alias: {
			// vue: "vue/dist/vue.esm.js",//开发
			// vue: "vue/dist/vue.min.js",//生产
		}
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
		// 分离css
		new MiniCssExtractPlugin({
			filename:  NODE_ENV === "development" ? "[name].u7Power-mall.css": "css/[name].[hash:6].u7Power-mall.css"
		}),
		// 定义全局变量
		new webpack.ProvidePlugin({
			Vue: NODE_ENV === "development" ? "vue/dist/vue.js" : "vue/dist/vue.min.js",
			Swiper: "swiper/dist/js/swiper.min.js"
		}),
		new VueLoaderPlugin()
	]
}
