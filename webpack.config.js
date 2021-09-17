const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.s?css$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    publicPath: '/',
  }
};