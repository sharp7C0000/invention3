const path = require("path");
const fs   = require("fs");

const merge  = require('webpack-merge');

const webpackConfigBase = require("./webpack.base.config");

module.exports = merge(webpackConfigBase, {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    inline            : true,
    disableHostCheck  : true,
    compress: true,
    port: 8001,
    host: "0.0.0.0",

    // for vagrant
    watchOptions: {
      aggregateTimeout: 300,
      poll            : 1000,
    }
  }
});