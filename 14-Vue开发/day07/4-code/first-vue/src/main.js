/*
 * @Author: Ling Hui Shi
 * @Date: 2020-03-24 08:17:03
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-11 14:53:27
 * @Description:
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 关闭vue生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 用于搜索el标签, 将来根据生命周期覆盖展示
  router,

  // 脚手架生成的项目中，默认采用完整版（运行时+编译器）
  components: { App },
  template: '<App/>'
})

// vue-cli(vue脚手架), 快速搭建一个基于webpack的vue项目的目录结构, 并且所有的webpack都配置好了(包含之前学习的webpack配置以及其他的所有webpack配置), 以及所有需要的依赖项(包)都下载好了!!
// 注意 使用vue-cli初始化项目时, 路径中不要含有中文, 并且文件夹名字不要是敏感文件名, 比如vue, webpack, 即不要是npm上已有的包名
// 使用vue-cli, 需要先安装node以及npm

// 当使用脚手架初始化好了项目后, ★★★ 只需要修改src目录中的内容即可, 在src目录中写vue代码即可, 其他目录及文件最好不要动！！！
// 去公司以后, 拿到项目, 第一件事就是: npm i 安装项目中使用到的模块, 让项目跑起来 npm run dev / npm start

// 项目逻辑大致说明
// 由配置文件build/webpack.base.config.js可以知道, src/main.js 为webpack打包的入口文件
// 在入口文件中:
//    1. 引入了vue (vue的js文件, Vue为Vue实例的构造函数), App.vue(单文件组件, 一个局部组件, 也叫根组件, 整个项目的根组件), 以及路由;
//    2. 创建了一个vue实例, 引入了路由及注册了局部组件App, 并且拥有一个template模板属性, 在模板中就做了一件事, 引入App组件
//    3. 在App组件中就做了一件事, 在模板处写了一个路由的出口

// 逻辑思路:
// vue-cli搭建的基于webpack的vue项目结构中, 在webpack的配置文件里, 安装配置了html-webpack-plugin插件, 并且指定的模板文件
// 为项目根目录下的index.html, 由之前html-webpack-plugin插件知道, 会在webpack服务器启动时, (实际上也帮我们安装了webpack-dev-server),
// 在内存中根据配置的模板文件(根目录下的index.html)生成一个新页面并且浏览器默认访问的就是http://ip:端口, 就是项目根目录下的index.html, 就是这个模板文件,
// 并且会将打包时分析入口文件后生成的新的js文件自动引入到模板文件index.html中, 将来我们访问index.html, 会自动引入入口文件打包生成的js文件, 在index.html中解析执行
// 所以我们看到的打开的页面或者说是将来访问的页面实际上是项目根目录下的index.html !!!

// 分析路口文件可以知, 入口文件中的vue实例 el: #app, 又因为vue实例带有模板template, 由vue生命周期可知, 将来会将template作为模板进行编译,
// 并且会将编译后的模板替换掉整个el标签并渲染到页面上, 即会将index.html中的<div id="app"></div>全部替换成模板的内容并展示到页面上
// 这样 index.html模板文件中的内容实际上就是入口文件中vue实例的模板template的内容, 而模板template中的内容为App组件, 且App组件中的内容仅仅是一个vue的路由出口
// 意味着路口文件中vue实例的template模板的内容实际上为当前页面url锚点匹配的路由规则下对应的那一个组件, 则说明index.html的内容实际上为当前url匹配路由的对应的那个组件...

// App又称为整个项目的根组件, 将来组件都是通过根组件的路由出口展示渲染到index.html这个文件中的

// 说明: 根据以上思路可知, 我们将来访问项目, 一定都是先访问模板文件(index.html) (根页面), 然后在访问模板文件(根页面)的基础上, 加上#锚点, 让路由监听到变化, 自动在index.html(根页面)中展示不同的组件
//       实际上我们访问的就只有一个页面 index.html (根页面), 单页面应用, 就是index.html单页面, 将来所有的组件都在这个页面的路由出口处替换覆盖展示. (只会展示当前URL地址中锚点匹配的那个路由对应的组件, 如果当前URL的#锚点没有匹配的路由规则, 则在路由的出口处什么都不展示)
//       由以上知道, 我们在根页面index.html的#app (el标签) 标签外写的内容 也会被展示在页面上 (访问的就是这个根页面index.html)
//       由以上分析可知, 会将入口文件, src/main.js文件中的所有内容(所有引入的各种模块, 文件, 静态资源文件css,以及我们自己写的css代码等) 经过分析得到新的js文件, 将这个新的js文件导入到我们访问的单页面应用index.html中
//       在index.html中就可以使用入口文件src/main.js中所有导入的模块, 静态资源以及自己写的js代码了. (打包入口文件生成的新的js文件会被解析和执行)
//       所以将来在各个组件中, 也可以使用入口文件main.js中所有内容了, 因为组件最终是嵌入index.html中的
//       所有的导入模块, 文件, 以及我们自己写的js代码, 都要写在入口文件中

// webpack都是采用模块化语法, 若要在单文件组件中使用某个模块, 需要在单文件组件中导入这个模块 import ... from ...

// 整个项目就只有1个根页面, 一个根vue实例, 和一个根路由, 根路由作用于根vue实例, 根vue实例作用域根页面, 所有组件都是通过这个根路由进行匹配替换展示在index.html这个根页面中的
// 即整个项目就是一个单页面应用 index.html, 根据URL中锚点匹配的路由规则, 替换覆盖展示不同的组件到页面中


// 当然将来项目有可能模板文件, 路由等可能会被修改, 以实际情况为主, 但是只要按照以上思路, 进行分析, 就可以将整个项目的逻辑梳理清楚
//  1. 理清楚访问的是哪个根页面 ( 一般来说html-webpack-plugin模板文件就是根页面, 因为html-webpack-plugin模板文件才会自动引入打包入口文件得到的新的js文件, 具体看访问路径)
//  2. 搞清楚路由规则, 以及如何展示在根页面上的


