// 瀑布流具体实现
// 1. 获取父盒子和子盒子, 获取父盒子和子盒子的宽度
// 2. 计算间隙
// 3. 遍历子盒子, 进行设置位置 left, top
//    (1) 第一行
//    (2) 第一行以外的盒子

// jQuery 插件实现
// 给 jQuery 原型添加了一个方法
$.fn.waterFall = function() {
  // this 就是一个 jQuery 对象
  var $box = this; // 父盒子
  var $items = $box.children(); // 所有子盒子
  var boxWidth = $box.width(); // 父盒子的宽度
  var itemWidth = $items.width(); // 获取子盒子的宽度, 返回第一个盒子的宽度
  // 设定 5 列
  var columns = 5;
  // 计算间隙 = (父盒子的宽度 - 子盒子的宽度 * 列数) / (列数 - 1)
  var space = (boxWidth - itemWidth * columns) / (columns - 1);
  // 准备一个数组, 专门用于存放每一列的高度
  var arr = [ 0, 0, 0, 0, 0 ];
  // 遍历子盒子, 设置 left 和 top
  $items.each(function( index, element ) { 
    // 遍历数组, 求最小列和最小列索引
    var min = arr[0];
    var minIndex = 0;
    for ( var i = 0; i < arr.length; i++ ) {
      if ( min > arr[i] ) {
        min = arr[i];  // 更新最小列
        minIndex = i; // 更新索引
      }
    }
    // 设置盒子的位置, 设置 left 和 top
    $(this).css({
      left: minIndex * ( itemWidth + space ),
      top: min + space
    });
    // 设置完盒子的位置后, 需要更新最小列
    arr[ minIndex ] = min + space + $(this).height();
  });
  // 给父盒子设置高度, 求数组最大值
  var maxHeight = Math.max.apply( null, arr );
  $box.height( maxHeight ); 
}
