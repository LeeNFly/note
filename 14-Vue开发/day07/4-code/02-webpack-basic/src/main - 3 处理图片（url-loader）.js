// 处理图片文件

// 处理图片文件，可以使用 url-loader 或者 file-loader

// 推荐使用 url-loader
// 1 安装： npm i -D url-loader
//          最好将 file-loader 一起安装
// 2 在 webpack.config.js 中，只要将 file-loader 替换为 url-loader 就可以了

// url-loader 默认情况下，会将图片处理为base64编码的格式
// data:image/png;base64, ....

// 导入带有图片的CSS文件
import './css/index.css'
