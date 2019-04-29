const webpack = require("webpack");
const baseConfig = require("./webpack.base.config.js");
const merge = require("webpack-merge");

module.exports = merge(baseConfig, {
	mode: "development",
	devtool: "eval-source-map",
	output:{
		filename: "js/[name].[hash:6].u7Power.js",
		pathinfo: true
	},
	devServer: {
		host:"localhost",
		port: "9093",
		hot: true,
		open: true,
		inline: true
	},
	/*optimization: {
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
	        	test: /[\\/]components[\\/]/,
	            name: "commons",
	            minChunks: 2,
	            priority: -20
	        }
	      }
	    },
	    runtimeChunk: {
	    	name: "manifest "
	    }
  	}*/
})