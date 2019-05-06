 const path = require('path');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const webpack = require('webpack');

 const extractSass = new ExtractTextPlugin({
    filename: "[name].min.css"
});

  module.exports = [
		{
      mode: 'development',
			entry: {
					main: './src/js/main.js',
          custom: './src/js/custom.js'
			},
			output: {
				filename: '[name].min.js',
				path: path.resolve(__dirname, 'dest')
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['env'],
								minified: false,
								compact: false
							}
						}
					},
					{
						test: /\.scss$/,
						use: extractSass.extract({
								use: [{
										loader: "css-loader"
								}, {
										loader: "sass-loader",
										options: {
											outputStyle: "compressed"
										}
								}],
								fallback: "style-loader"
						})
					}
				]
			},
			resolve: {
				alias: {
					'masonry': 'masonry-layout',
					'isotope': 'isotope-layout',
          'vue': 'vue/dist/vue.js'
				}
			},
			plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          jQuery: 'jquery'
        }),
        extractSass
			]
		}
  ];
