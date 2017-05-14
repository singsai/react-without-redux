const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{ test: /\.jsx$/, use: 'babel-loader' },			
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	})]
}