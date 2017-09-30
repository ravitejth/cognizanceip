const webpackMerge = require('webpack-merge'),
  commonConfig = require('./webpack.common.js'),
  path = require('path'),
  webpack     = require('webpack');

module.exports = webpackMerge(commonConfig, {

  devtool: 'inline-source-map',

  // OUTPUT FILE
  output: {
    path: path.resolve(__dirname,'../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    noInfo: true,
    inline: true,
    historyApiFallback: true
  }

});
