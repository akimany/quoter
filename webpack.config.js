// it might be said:
var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  node: {
    fs: 'empty',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
