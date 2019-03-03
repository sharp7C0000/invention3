const path = require('path');

module.exports = {
  mode: "production",

  entry: "./src/main",

  output: {
    path      : path.resolve(__dirname, "dist"),
    filename  : "bundle.js",
    publicPath: "/scripts/",
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}