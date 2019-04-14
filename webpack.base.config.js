const path = require('path');

const VueLoaderPlugin   = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  entry: "./src/main",

  output: {
    path      : path.resolve(__dirname, "dist"),
    filename  : '[name].[contenthash].js',
    publicPath: "/scripts/",
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          "style-loader",
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}