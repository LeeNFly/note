// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 关闭生成提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  // 脚手架生成的项目中，默认采用完整版（运行时+编译器）
  components: { App },
  template: '<App/>'
})

// vue-cli, 快速搭建一个基于webpack的vue项目的目录结构, 并且所有的webpack都配置好了以及所有需要的依赖项(包)都下载好了!!
// 注意 使用vue-cli初始化项目时, 路径中不要含有中文, 并且文件夹名字不要是敏感文件名, 比如vue, webpack, 即不要是npm上已有的包名

// 当使用脚手架初始化好了项目后, 只需要修改src目录中的内容即可, 其他目录及文件最好不要动！！！
// 去公司以后, 拿到项目, 第一件事就是: npm i 安装项目中使用到的模块, 让项目跑起来 npm run dev / npm start

// 项目逻辑大致说明
// 由配置文件build/webpack.base.config.js可以知道, src/main.js 为webpack打包的入口文件
// 在入口文件中:
//    1. 引入了vue (vue的js文件), App.vue(单文件组件, 一个局部组件), 以及路由;
//    2. 创建了一个vue实例, 引入了路由及注册了局部组件App, 并且拥有一个template模板属性, 在模板中就做了一件事, 引入App组件
//    3. 在App组件中就做了一件事, 在模板处写了一个路由的出口

// 逻辑思路:
// vue-cli搭建的基于webpack的vue项目结构中, 在webpack的配置文件里, 安装配置了html-webpack-plugin插件, 并且指定的模板文件
// 为项目根目录下的index.html, 由之前html-webpack-plugin插件知道, 会在webpack服务器启动时, (实际上也帮我们安装了webpack-dev-server),
// 在内存中根据配置的模板文件(根目录下的index.html)生成一个新页面并且浏览器默认访问的就是http://ip:端口, 就是项目根目录下的index.html, 就是这个模板文件,
// 并且会将打包时分析入口文件后生成的新的js文件自动引入到模板文件index.html中, 将来我们访问index.html, 会自动引入入口文件打包生成的js文件
// 所以我们看到的打开的页面或者说是将来访问的页面实际上是项目根目录下的index.html !!!

// 分析路口文件可以知, 入口文件中的vue实例 el: #app, 又因为vue实例带有模板template, 由vue生命周期可知, 将来会将template作为模板进行编译,
// 并且会将编译后的模板替换掉整个el标签并渲染到页面上, 即会将index.html中的<div id="app"></div>全部替换成模板的内容并展示到页面上
// 这样 index.html模板文件中的内容实际上就是入口文件中vue实例的模板template的内容, 而模板template中的内容为App组件, 且App组件中的内容仅仅是一个vue的路由出口
// 意味着路口文件中vue实例的template模板的内容实际上为当前页面url锚点匹配的路由规则下对应的那一个组件, 则说明index.html的内容实际上为当前url匹配路由的对应的那个组件...

// 说明: 根据以上思路可知, 我们将来访问项目, 一定都是先访问模板文件(index.html) (根页面), 然后在访问模板文件(根页面)的基础上, 加上#锚点, 让路由监听到变化, 自动在index.html(根页面)中展示不同的组件
//       实际上我们访问的就只有一个页面 index.html (根页面)

// 当然将来项目有可能模板文件, 路由等可能会被修改, 以实际情况为主, 但是只要按照以上思路, 进行分析, 就可以将整个项目的逻辑梳理清楚
//  1. 理清楚访问的是哪个根页面 ( 一般来说html-webpack-plugin模板文件就是根页面, 因为html-webpack-plugin模板文件才会自动引入打包入口文件得到的新的js文件, 具体看访问路径)
//  2. 搞清楚路由规则, 以及如何展示在根页面上的


