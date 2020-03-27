// webpack 的使用步骤：
// 前提: 要想使用webpack, 需要先安装node 以及 npm . 
// 1 安装： npm i -D webpack webpack-cli (webpack是个打包工具, 只需要在开发期间使用到, 在生产环境, 即项目上线后, 不需要用到和依赖webpack)
// 2 webpack 使用的两种方式：
//  2.1 命令行的使用方式（知道即可）
//  2.2 配置文件 (重点)

// webpack的四个核心概念：
// 1 入口 entry
// 2 出口 打包后输出内容
// 3 loaders 加载器：对于非JS的静态资源
// 4 plugins 插件

// 演示命令行的使用方式：
// 打包命令: webpack 入口文件 出口文件路径(打包后内容输出的目录)
// 最基本的打包命令: webpack ./src/main.js (默认出口文件输出在dist目录下)

// 注意:使用 webpack 的时候应该提供mode, 可以是: production 或者 development
// production 表示: 生产模式    -- 生产环境(也就是给用户使用的) (会压缩代码)
// development 表示: 开发模式   -- 开发环境(也就是给开发人员开发使用的) (不会压缩代码)

// 指定模式: .\node_modules\.bin\webpack ./src/main.js --mode development
// 指定为生产模式: .\node_modules\.bin\webpack ./src/main.js --mode production

// 演示指定出口文件路径的打包 (不用默认出口文件路径) :
//  .\node_modules\.bin\webpack ./src/main.js -o ./dist/a.js --mode production  // 需要指定输出的文件名, 将来将打包输出的内容输出到此文件中

const fn = () => {
  console.log('main.js 中的fn 执行了')
}
fn()
