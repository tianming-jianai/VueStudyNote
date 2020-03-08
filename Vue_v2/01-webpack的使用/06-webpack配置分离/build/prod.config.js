const webpackMerge = require("webpack-merge")
const baseConfig = require('./base.config')
const UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = webpackMerge(baseConfig, {
	plugins: [
		new UglifyjswebpackPlugin(), //开发阶段不建议丑化js
	]
})
