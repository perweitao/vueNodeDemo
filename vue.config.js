'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const port = process.env.production || process.env.npm_config_port || 8080 // dev port
module.exports = {
  publicPath: './',
  outputDir: 'testDemo',
  assetsDir: 'assets',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: { // 配置跨域
      '/api': {
        target: 'http://192.168.2.82:9527',
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  configureWebpack: {
    name: '后台管理系统',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
}
