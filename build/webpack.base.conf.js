/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-07 13:03:26
 * @LastEditTime: 2020-04-11 15:06:03
 * @LastEditors: Please set LastEditors
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['babel-polyfill', './src/main.js'],
    vendor: [ 'vue', 'vuex', 'vue-router', 'zview' ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assetspath': resolve('src/assets'),
      'zview$': path.resolve(__dirname, '../static/js/zview/zview.min.js'),
      'staticpath': path.resolve(__dirname, '../static'),
      'ilead-utils': path.resolve(__dirname, '../static/js/ilead-utils/ilead-utils.umd.min.js')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: utils.assetsPath('[name].[hash:7].[ext]')
          // 以下可以实现图片打包到相应的文件夹中，但是src下静态文件必须是static不能是assets
          // name: '[path]/[name].[hash:7].[ext]',
          // fallback: 'file-loader', // 当超过8192byte时，会回退使用file-loader
          // context: path.resolve(__dirname, '../src'), // 过滤掉[path]的相对路径
          // publicPath: '/' // 采用根路径
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        // 用正则去匹配要用该 loader 转换的 css 文件
        test: /\.css$/,
        use: [
          'style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'// creates style nodes from JS strings
          },
          {
            loader: 'css-loader'// translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
