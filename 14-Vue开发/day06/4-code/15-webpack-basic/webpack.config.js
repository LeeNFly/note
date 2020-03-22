// 注意: 不要使用 ES6 中的模块化语法 import/export
const path = require('path')
// const webpack = require('webpack')

// 导入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: path.join(__dirname, './src/main.js'),

  // 出口
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // 模式
  mode: 'development',

  devServer: {
    // 自动打开浏览器
    open: true,
    // 修改端口号
    port: 3000
    // 热更新: 只将修改过得内容加载到页面中, 而不是刷新整个页面
    // 第一步:
    // hot: true
  },

  // 配置loader
  module: {
    rules: [
      // test 是一个正则, 用来匹配加载文件的路径
      //  比如: import './css/index.css'

      // use 表示使用哪个loader来处理这个类型的文件
      // 注意: 有顺序!!!
      // 处理过程是: 从右往左

      // css-loader 读取CSS文件,将其转化为一个模块
      // style-loader 拿到css-loader读取到的css文件内容,然后,创建一个style标签,插入到head
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },

  plugins: [
    // 第二步:
    // new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      // 指定模板文件路径
      template: path.join(__dirname, 'index.html')
    })
  ]
}
