const path = require('path');

module.exports = {
  entry: {
    './dist/app': path.resolve(__dirname, 'src/index.js')
  },

  mode: 'development',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './')
  },

  module: {
    rules : [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};