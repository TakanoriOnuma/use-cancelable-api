const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
  mode: 'development',
  output: {
    // HTMLにinjectionするパスを相対パスで設定する
    publicPath: './'
  }
});

module.exports = config;
