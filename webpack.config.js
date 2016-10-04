/* global __dirname */

const path = require('path')

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'ScrollSync'
  },
  module: {
    loaders: [
      {
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    // Can require('file') instead of require('file.js') etc.
    extensions: ['', '.js', '.json']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  }
}
