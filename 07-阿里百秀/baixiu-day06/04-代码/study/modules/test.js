// 1. 一个模块 一般都是一个 单独的 js 文件
// 2. 一个模块 一般有自己的独立的作用域
// 3. 一个模块 可以有导出项 (从模块中导出, 让别人去使用的方法或者对象)

(function() {

  // 可以防止全局变量污染
  var a = 123;

  // 在自己的模块里定义了一个方法, 希望给别人用的
  function add( a, b ) {
    return a + b
  }

  // 将 add 挂载在 window 全局对象上, 将来别人就可以访问了
  window.add = add;

})();