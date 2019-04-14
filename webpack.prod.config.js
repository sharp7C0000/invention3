const path = require("path");
const fs   = require("fs");

const merge  = require('webpack-merge');

const webpackConfigBase = require("./webpack.base.config");

module.exports = merge(webpackConfigBase, {
  mode: 'production',
});