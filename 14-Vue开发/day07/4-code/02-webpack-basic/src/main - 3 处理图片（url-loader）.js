// 处理图片文件

// 处理图片文件，可以使用 url-loader 或者 file-loader

// 推荐使用 url-loader
// 1 安装： npm i -D url-loader
//          最好将 file-loader 一起安装 (因为url-loader内部可能会调用到file-loader, 但是本身内部不包含file-loader这个包)
// 2 在 webpack.config.js 中的 module 里面添加一个rules匹配规则, 解析器指定为 url-loader (详见webpack.config.js)

// url-loader 默认情况下，会将图片处理为base64编码的格式, 直接嵌入浏览器
// data:image/png;base64, ....
// 对图片base64处理, 相当于将图片转成浏览器识别的编码格式, 类似于二进制形式, 而编码对于浏览器来说就是一张图片, 浏览器可以直接解析成图片
// 这样的话, 浏览器就直接解析base64就可以得到图片并展示, 不需要再发送请求去请求图片了, 减少了图片的请求

// base64 适合处理小图标小图片，直接内嵌在页面中，减少了请求次数, 若图片太大, 不建议使用base64处理, 这样会导致页面内容过多, 卡顿

// 导入带有图片的CSS文件
import './css/index.css'
