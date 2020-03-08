const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'), //__dirname上下文获取当前文件路径；resolve是拼接；动态获取路径
		filename: 'bundle.js',
		// publicPath: 'dist/'
	},
	module: {
		rules: [{
				test: /\.css$/,
				// css-loader只负责将css文件进行加载
				// style-loader负责将样式添加到DOM中
				// 使用多个loader时，是从右向左
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						// 当加载图片时，小于limit时，会将图片编译成base64字符串形式
						// 当加载图片时，大于limit时，需要使用file-loader模块进行加载
						limit: 8192,
						name: 'img/[name].[hash:8].[ext]'
					}
				}]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}
		]
	},
	plugins:[
		new webpack.BannerPlugin('最终解释权归zsg所有'),
		new HtmlWebpackPlugin({
			template:'index.html'
		}),
		// new UglifyjswebpackPlugin(),//开发阶段不建议丑化js
	],
	resolve: {
		// 省略扩展名
		extensions: ['.js', '.css', '.vue'],
		alias: {
			//这里的vue$是指以vue结尾，引入vue的地方：import Vue from 'vue' 后面是vue的位置/esm es module
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	// devServer:{
	// 	contentBase: './dist',
	// 	inline: true
	// }
}
