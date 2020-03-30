// 开启服务器:

// webpack-dev-server
//
// 1 npm i -D webpack-dev-server
// 2 开启一个服务器
// 3 自动打开浏览器
// 4 监视文件变化, 自动刷新浏览器
// 5 等等

// 使用步骤:
// 1 安装: npm i -D webpack-dev-server
// 2 在webpack的配置文件 webpack.config.js 中配置 devServer 配置项
// 3 在 package.json的scripts中添加一个配置项 (添加一个脚本): "dev": "webpack-dev-server" (添加一个脚本)
// 4. npm run dev, 运行服务器
// npm run dev 做了什么?
//  1> 启动了一个服务器
//  2> 根据webpack配置文件为我们自动打包了一次项目, 即对入口文件进行了分析和打包处理, 只不过将打包生成的新的js文件输出到了服务器根目录/里,
//     即输出到了内存里 (并未在磁盘中生成打包后的js文件). 输出的文件名还是没有变, 只是路径变了. 如果我们需要访问输出的bundle.js文件, 则访问路径为/bundles.js即可
//     注意, 之前的打包都是将打包生成的文件输出到了指定的路径里了, 即输出到了磁盘中, 磁盘远比内存慢
//  3> 会自动打开浏览器, 访问http://ip:端口, 而在启动的服务器中, 若访问http://ip:端口或http://ip:端口/, 则自动访问的就是根目录下的index.html (此时需要手动引入2>中打包在内存里的 /bundles.js, 将来配置了html-webpack-plugin就不用了)
//     说明: 由之前node自己封装的后端路由可以知道, webpack-dev-server一定也做了类似处理, 只要是url: 协议://主机名(域名)(ip地址):端口号/路径?查询字符串#锚点中 /路径部分(最少以/开头) 为/ 的, 实际上都是访问项目根目录下的index.html, 所以
//           http://ip:端口#/xxx/xxx..., http://ip:端口?name=pp&age=18#/xxx/xxx... 或 http://ip:端口/#/xxx/xxx...或http://ip:端口/?name=pp&age=18#/xxx/xxx...
//           实际上 /路径部分都是/, 所以访问的都是项目根目录下的index.html文件!!!
//  4> 会自动监听所有文件的修改变化, 并进行会自动更新页面, 如果入口文件发送改变. 则也会进行自动重新打包输出到服务器根目录下(内存中), 然后更新页面

// webpack-dev-server 帮我们搭建了开发环境, 使用之后, 我们只需要
// 写代码完成功能即可, 其他的所有内容, 这个插件都帮我们处理了

// webpack-dev-server 命令 和 webpack (打包) 命令的区别:
// 开发期间 webpack-dev-server, 打包后生成的文件是输出在服务器根目录下, 即内存中, 效率快
// 项目打包上线 webpack, 这种打包是将生成的文件输出到指定的磁盘路径下, 存储在磁盘中, 效率慢

// 注意: 如果对webpack配置文件 webpack.config.js 进行修改, 则不会自动更新, 需要重启服务器 npm run dev 才会生效

// webpack 命令会生产 dist 文件夹
// webpack-dev-server 不会创建 dist 文件夹, 而是将所有内容放在内存中

// ES6 中的模块化语法:
import $ from 'jquery'

$('#list > li:odd').css('background-color', '#def')
$('#list > li:even').css('background-color', 'skyblue')
