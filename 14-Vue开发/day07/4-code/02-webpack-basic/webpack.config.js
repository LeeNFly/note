// 注意: 不要使用 ES6 中的模块化语法 import/export
const path = require('path')
// const webpack = require('webpack')

// 导入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 处理Vue单文件组件的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },

      // 处理图片 file-loader
      // {
      //   test: /\.(jpg|jpeg|png|gif)$/, // 所有以.jpg或.jpeg或.png或.gif结尾的文件引入或路径
      //   use: [ 'file-loader' ],  只有一项的话, 可以不用数组格式, 简写成use: 'file-loader'
      //   use: 'file-loader'
      // },

      // 处理图片 url-loader
      {
        test: /\.(jpg|jpeg|png|gif)$/, // 所有以.jpg或.jpeg或.png或.gif结尾的文件引入或路径
        // use: 'url-loader'  // 若不设置大小, 则会将所有匹配的引用文件或路径都使用url-loader进行解析, 全部转为base64的形式

        // base64 适合处理小图标小图片，直接内嵌在页面中，减少了请求次数
        // 建议小图片小图片使用base64方式处理, 即使用url-loader处理, 大的图片还是使用file-loader进行处理
        // 可通过以下进行配置
        use: [
          {
            loader: 'url-loader',
            options: {
              // 单位：字节， 8Kb
              // 如果图片的大小比 8kb 小，图片就会被处理为 base64, 即使用url-loader进行处理
              // 如果图片的大小大于或等于 8kb ，url-loader内会自动调用 file-loader 来对图片重命名处理
              // ps: url-loader 内部 会自动调用 file-loader, 但url-loader包里不含file-loader, 需要手动安装file-loader
              // limit: 8192
              limit: 49877 // 设置阈值
            }
          }
        ]
      },

      // 处理字体
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        // use: 'file-loader'
        use: 'url-loader' // 也可以设置阈值
      },

      // 配置babel
      {
        test: /\.js$/, // 只要以.js为后缀(结尾)的文件引入或者路径, 都会被此loader匹配, 使用babel对文件进行处理
        use: 'babel-loader', // 使用babel-loader对匹配的文件进行处理
        // exclude: 排除掉不需要 babel 处理的文件路径
        // 一般，都会将 node_modules 排除掉, 因为node_modules中都存放我们下载的包, 且里面的文件都已经被处理成浏览器兼容的语法了, 不需要再用babel处理了
        exclude: /node_modules/ // 只要路径中含有node_modules的, 都会被排除掉, 不会使用babel处理
      },

      // 处理Vue单文件组件
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },

  plugins: [
    // 第二步:
    // new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      // 指定模板文件路径
      template: path.join(__dirname, 'index.html')
    }),

    new VueLoaderPlugin()
  ]
}
