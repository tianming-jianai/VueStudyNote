const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname,'dist'), //__dirname上下文获取当前文件路径；resolve是拼接；动态获取路径
		filename: 'bundle.js'
	},

}
