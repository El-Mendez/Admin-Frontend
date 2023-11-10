const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack")
const rules = require('./rules');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules,
  },
  plugins: [
	  new webpack.DefinePlugin({
		  'process.env': {
			  BACKEND_URL: JSON.stringify(process.env.BACKEND_URL)
		  }
	  }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
