const baseConfig = require('./webpack.base.config')
const { smart } = require('webpack-merge')
const webpack = require('webpack')

const config = smart({
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      APP_NAME: 'local...'
    })
  ]
})

module.exports = smart(baseConfig, config)
