// .\node_modules\.bin\webpack ./src/main.js --mode development

// 解决问题: 去掉 .\node_modules\.bin\

// 1 在 package.json 的 scripts 中添加一个 build 脚本
// 2 将 webpack 命令作为 build 脚本的值
// 3 在终端中执行命令: npm run build 来运行上面创建好的脚本

const fn = () => {
  console.log('main.js 中的fn 执行了')
}
fn()
