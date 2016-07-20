var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cwd = process.cwd();

module.exports = {
	entry: './index.js',
	cwd: cwd,
	devtool: 'source-map',
	output: {
		path: './dist',
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.rgl$/,
				loader: 'regularjs'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=10240&name=images/[path][name].[ext]?[hash:16]',
				exclude: /node_modules/
			},
		]
	},
	resolve: {
		extensions: [ '', '.js', '.rgl' ]
	},
	regularjs: {
		loaders: {
			css: ExtractTextPlugin.extract( 'css' ),
			less: ExtractTextPlugin.extract( 'css!less' )
		}
	},
	externals: {
		'regularjs': 'Regular'
	},
	plugins: [
		new ExtractTextPlugin( 'app.css' )
	]
};
