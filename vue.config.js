/*eslint-disable*/
const path = require('path');
const webpack = require("webpack")

module.exports = {
	// 配置插件参数
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				'window.Quill': 'quill'
			})
		]
	}
}