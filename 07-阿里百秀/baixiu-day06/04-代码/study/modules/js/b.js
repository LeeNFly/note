// 定义模块  define( '模块名', ['依赖项'], function() {  })

define( [], function() {
  console.log( "模块b被执行了" );

  var obj = {
    name: "小明明",
    add: function( a, b ) {
      return a + b
    }
  }

  // 如果有导出项, 直接在模块中 return
  return obj;
});