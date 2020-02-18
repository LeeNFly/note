// 动画函数
function animate() {
  // 基于 jquery 让盒子变成 400, 400
  $('div').animate({
    width: 400,
    height: 400
  });
  console.log( "执行动画" );
}