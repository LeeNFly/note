// 之后我们在react脚手架生成的项目中, 约定一个js文件, 就是一个react组件, 即一个js文件, 就只写一个组件的内容
// 在react项目中, 各个组件都是一个独立的模块, 数据不互通, 需要使用其他模块或组件, 需要使用ES6 import语法进行导入
// .jsx文件和.js文件一样, 作用也一样, 没有区别, 仅仅是后缀名不同, .jsx文件其实就是.js文件, 也是js的运行环境
// 一个jsx文件也是一个react组件,  就只写一个组件的内容
// 有些编辑器，看到jsx文件，提供一些高亮，提示等等
import React from 'react'; // 导入react
import './App.css'; 
// 如何在react项目中使用react-router
// 1. 需要安装react-router-dom包  npm i react-router-dom
// 2. 需要引入一些组件
import { HashRouter, Route, Link } from 'react-router-dom' // 引入路由相关的组件
// import { HashRouter as Router, Route, Link } from 'react-router-dom' // 引入路由相关的组件, 可以取别名

    // HashRouter组件:整个路由容器，将来配置路由，是一定要有一个HashRouter, 并且一个组件只能有一个路由 (HashRouter)
    // Link组件: 相当于vue中 router-link 配置路由的连接，最终会渲染成一个a标签
    // Route组件: 配置路由规则
    // 组件都当作自定义标签, 在jsx语法中使用即可
    // 使用了路由HashRouter组件后, 访问页面, 默认自动加上#/锚点
  
// 导入组件, 给路由使用
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* HashRouter内只能由一个根元素 */}
        <div>
          <ul>
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/login">登录页</Link>
            </li>
          </ul>
          {/* 定义路由规则, path为路由规则(这里不带#, 在匹配时会自动加上#进行匹配), 与URL中#锚点部分进行匹配 */}
          {/* URL中#锚点部分匹配的路由规则对应的那个组件中render方法返回的jsx会替换展示(拼接)到Route处, 并且该部分jsx由该组件内部数据自己维护 */}
          {/* Route中只会展示当前URL中#锚点部分匹配的路由规则Route对应的组件(jsx), 对于URL中#锚点部分没有匹配Route, 则Route中什么都不展示, 若之前有展示过, 则会清除*/}
          {/* 路由会自动监听地址栏URL中#锚点部分, 只要改变, 就会重新匹配路由规则Route, 然后只将当前URL#锚点匹配的那个路由规则对应的组件中render方法返回的jsx覆盖替换展示(拼接)到Route处, 并且该部分jsx由组件内部数据自己维护*/}
          {/* 如果当前URL#锚点部分没有匹配任何路由规则, 则在Route处什么都不展示 */}
          {/* react中的路由与vue中的路由不同, 不是完全匹配的, 只要模糊匹配即可 */}
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
