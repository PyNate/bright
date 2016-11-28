/* eslint-disable */
var webpack = require('webpack')

module.exports = {
  entry: './client/index.jsx',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-stage-2')
          ]
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
