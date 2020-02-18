// 定义模块
// define( '模块名', ['依赖项'], function() { .... })

// 模块 a, 模块名可以省略, 如果省略了, 就是匿名模块
define([], function() {
  // 模块主体内容
  console.log( "我是模块 a" );
});