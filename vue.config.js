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
	},
	devServer: {
		open: true, //是否自动弹出浏览器页面
		host: "localhost",
		port: '8081',
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: 'https://bing.biturl.top/', //API服务器的地址
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
	}
}