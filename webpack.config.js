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
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
		],
	},
	plugins: [],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/dist',
	},
	devServer: {
		inline: true,
		port: 8080,
		historyApiFallback: true,
	},
};
