/*
 * @Author: Ling Hui Shi
 * @Date: 2020-04-06 14:12:26
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-11 14:12:57
 * @Description: 
 */
// webpack打包的入口文件
// 使用ES6 import语法导入需要的模块
import React from 'react'; // 导入react模块
import ReactDOM from 'react-dom'; // 导入react-dom模块
import './index.css'; // 导入通用样式, 将来作用于整个index,html 这个单页面, 即作用域整个项目中的页面, 组件, 所以为通用样式
import App from './App.jsx'; // 导入根组件

// 在入口文件中可以导入任意文件, 比如资源文件(css), 包, js文件等, 将来都会被打包处理

// react项目中, 导入.js文件, 后缀名可以省略

// 将根组件渲染到public/index.html中的id为root的标签内容部分
// 在public/index.html中, 会自动引入我们的打包后的入口文件, 即会将入口文件中引入的所有模块、文件以及我们写的js代码引入到页面中执行 生效
// 即在public/index.html 及 页面 中的组件中, 可以使用入口文件导入的所有模块, 资源文件, 都生效.
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// 总结: 整个项目就只有一个页面 public/index.html, 就只有一个根组件App.js, 将来所有的组件, 都是在根组件App中, 根据路由规则进行匹配覆盖替换展示的
// 我们将来访问的ip+端口的根页面, 实际上就是这个public/index.html页面 (其内部服务器做了跳转处理)
// 所以整个项目实际上就是访问public/index.html这个页面, 单页面应用, 而这个页面的内容就是我们的根组件App.jsx, 在App.jsx中根据URL#锚点匹配的路由g规则而在页面中展示不同的组件