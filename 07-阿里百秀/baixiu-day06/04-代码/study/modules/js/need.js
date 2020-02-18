// define(模块名, [依赖项1, 依赖项2, ...], function() {....})
// need.js 依赖于 a,b,c


// 所依赖的模块, 在定义时, 声明好了, 引入该模块时, 会自动进行依赖项的加载
define([ './b', './c', './a' ], function( mb, mc ) {

  console.log( mb );
  console.log( mc );

  console.log( "这是 need 模块, 依赖于 a,b,c 模块 " );
});