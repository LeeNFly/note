$.fn.waterfall = function () {
  $box = this;
  $item = this.children();
  boxWidth = $box.width();
  itemWidth = $item.width();
  columns = 5;
  // 计算间隙
  var space = (boxWidth - itemWidth * columns) / (columns - 1);
  var arr = []; // 存储每列的总高度
  $item.each(function (index, element) {
    if (index < columns) {
      // 第一行
      $(this).css({
        left: (itemWidth + space) * index,
        top: 0
      });
      arr.push($(this).height()); // 处理第一行时, 初始化最小列数组
    } else {
      // 其他行
      var min = arr[0];
      var minIndex = 0;
      for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
          minIndex = i;
        }
      }
      $(this).css({
        left: (itemWidth + space) * minIndex,
        top: min + space
      })
      arr[minIndex] = min + space + $(this).height();
    }
  })

  var MaxHeight = Math.max.apply(null, arr);
  $box.height(MaxHeight);
}