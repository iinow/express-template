const baseConfig = require('./webpack.base.config')
const path = require('path')
const { smart } = require('webpack-merge')
const webpack = require('webpack')
const NodemonPlugin = require('nodemon-webpack-plugin');

const config = smart({
  mode: 'development',
  plugins: [
    new webpack.EnvironmentPlugin({
      APP_NAME: 'local...'
    }),
    new NodemonPlugin({})
  ],
  watch: true
})

module.exports = smart(baseConfig, config)
