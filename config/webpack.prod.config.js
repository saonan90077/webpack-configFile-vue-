const webpack = require("webpack");
const baseConfig = require("./webpack.base.config.js");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(baseConfig, {
	mode: "production",
	output:{
		filename: "js/[name].[chunkhash:6].u7Power.js",
	},
	optimization: {
	    splitChunks: {
	      cacheGroups: {
	       	vendors: {
	       		chunks: "all",
	            test: /[\\/]node_modules[\\/]/,
	            name: "vendors",
	            minChunks: 1,
	            priority: -10,
	        },
	        commons: {
	        	chunks: "all",
	        	test: /[\\/]src[\\/]/,
	            name: "commons",
	            minChunks: 2,
	            priority: -20
	        }
	      }
	    },
	    runtimeChunk: {
	    	name: "manifest "
	    },
	    minimizer: [
	      new OptimizeCSSAssetsPlugin({})
	    ]
  	},
  	plugins: [
  		new CleanWebpackPlugin(),
		new UglifyJsPlugin(),
  		new webpack.HashedModuleIdsPlugin()
  	]
})
