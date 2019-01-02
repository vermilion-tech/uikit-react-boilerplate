const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: process.env.PORT || 8080,
    publicPath: '/',
    historyApiFallback: true
  }
});
