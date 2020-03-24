// 注意: 不要使用 ES6 中的模块化语法 import/export ( webpack打包只会对路口文件处理, 不会对该文件处理, 即不会识别import语法 )
// 配置文件中写nodejs代码, 将来在node环境中运行
const path = require('path') // node自带的path模块, 用于拼接路径
// const webpack = require('webpack')

// 导入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 以导出项的形式进行配置
module.exports = {
  // 入口(入口文件), 入口文件一般只会有一个, 将来打包时是对入口文件进行分析和处理打包
  entry: path.join(__dirname, './src/main.js'),

  // 出口, 出口可能有多个
  // 将来打包是对路口文件进行分析和处理打包, 然后将分析打包生成的新的文件作为出口文件输出到指定路径下
  output: {
    path: path.join(__dirname, './dist'), // 出口路径
    filename: 'bundle.js' // 出口文件名
  },

  // 模式, 对应之前命令行中的打包的模式, development, production
  mode: 'development',

  // webpack-dev-server 服务器配置
  devServer: {
    // 自动打开浏览器, 并监视文件变化, 自动刷新整个页面
    open: true,
    // 修改服务器端口号
    port: 3000
    // 热更新: 只将修改过得内容加载更新到页面中, 而不是刷新整个页面
    // 【热更新第一步】
    // hot: true

    // 热更新除了需要配置hot: true外, 还需要在plugins中配置new webpack.HotModuleReplacementPlugin(), 且需要引入webpack模块

    // 可以在package.json的scrpts中的webpack-dev-server启动脚本中添加--hot, 即可替代上面3步, 直接开启热更新, 即 "dev": "webpack-dev-server --hot"
  },

  // 配置loader
  // 项目中所有的文件引入时, 所有涉及到路径的 都会自动根据匹配的loader中配置的test规则, 对文件用对应的use: loader处理
  // 可以在module的rules中定义多个loader处理规则, 每个规则就是一个对象
  module: {
    rules: [
      // test 是一个正则, 用来匹配加载文件的路径
      // /\.css$/ 代表所有以.css结尾的
      //  比如: import './css/index.css'

      // use 表示使用哪个loader来处理这个类型的文件
      // 注意: 有顺序!!!
      // 处理过程是: 从右往左

      // css-loader 读取CSS文件,将其转化为一个模块
      // style-loader 拿到css-loader读取到的css文件内容,然后, 创建一个style标签包裹内容, 将来自动插入到页面head中
      { test: /\.css$/, use: ['style-loader', 'css-loader'] } // 所有以.css结尾的文件引入或路径, 使用'style-loader', 'css-loader' 进行处理, 处理后才可以使用
    ]
  },

  plugins: [
    // 【热更新配置】第二步:
    // new webpack.HotModuleReplacementPlugin(),

    // 配置 html-webpack-plugin
    new HtmlWebpackPlugin({
      // 指定模板文件路径
      template: path.join(__dirname, 'index.html')
    })
  ]
}
