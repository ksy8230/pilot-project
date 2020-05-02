const path = require('path');

module.exports = {
	name: 'pilot-project',
	mode: 'development',
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
	},
	entry: {
		app: './src/index.tsx',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				exclude: path.join(__dirname, 'node_modules'),
			},
		],
	},
	plugins: [],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/dist',
	},
};
