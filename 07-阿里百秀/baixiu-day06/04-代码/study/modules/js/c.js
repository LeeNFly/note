define([], function() {
  console.log( "c模块执行了" );

  // 工具箱
  var toolBox = {
    qianzi: "钳子",
    luosidao: "螺丝刀",
    chuizi: "锤子",
    kandao: "砍刀"
  }

  // 有导出项, 直接 return 即可
  return toolBox;
});