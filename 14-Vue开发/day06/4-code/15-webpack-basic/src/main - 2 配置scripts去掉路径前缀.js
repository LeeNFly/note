// .\node_modules\.bin\webpack ./src/main.js --mode development

// 解决问题: 去掉 .\node_modules\.bin\

// 1 在 package.json 的 scripts 中添加一个 build 脚本
// 2 将 webpack 命令作为 build 脚本的值 webpack ./src/main.js --mode development
// 3 在终端中执行命令: npm run build 来运行上面创建好的脚本
//   原理, npm 在运行脚本的时候, 会将./node_modules/bin这个文件夹临时添加到环境变量中去了, 而webpack可执行文件就在此目录下
//   所以可以直接使用webpack命令, 当脚本执行结束后, 会将./node_modules/bin这个文件夹从环境变量中删除.

const fn = () => {
  console.log('main.js 中的fn 执行了')
}
fn()
