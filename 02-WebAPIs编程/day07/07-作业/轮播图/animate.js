/*
* element: 要移动的元素
* target: 移动后的位置
* step: 移动的步进
*/
function animate(element, target, step, fn) {
  // var timeid 预解析问题
  // 保证每次点击只能有一个定时器操作元素
  if (element.timeid) {
    clearInterval(element.timeid);
  }
  // 将timeid注册在元素对象的属性身上,保证只有一个定时器在操控元素
  // 此处用自定义标签属性也可以,自定义属性在标签上能看到,而上面是直接给对象设置属性(非W3C标准),在标签上看不到
  element.timeid = setInterval(function () {
    var current = element.offsetLeft;
    var pos;
    if (current > target) {
      // 向左移 -step
      pos = current - step;
    } else {
      pos = current + step;
    }
    // 如果元素到达目标位置后,再点击按钮,则会出现闪一下情况。将<改为<=即可。
    // 分析 若是 <  400后再点击按钮407 => pos - target = 7 不进入if, 元素移动至407,下次进来 407 - 7 = 400, 400-400 = 0 < step ,进入if , 元素移动至400 , 移除定时器,所以出现到达位置后再点击按钮会闪一下情况。
    // 改为 <= 到达位置再点击按钮 , 407 => pos -target = 7  进入if , 设置为400 , 关闭定时器,元素位置永远在400,并且移除了定时器。
    element.style.left = pos + 'px';
    if (Math.abs(pos - target) <= step) {
      // 马上要到目标位置了
      pos = target;
      clearInterval(element.timeid);
      // animate(box,0,3); 可以达到目的 但是修改了函数源码，降低了函数的通用性，并且在回到0后,会重复设置和移除定时器
      // 在到达位置后,调用函数fn (fn也可以叫做是回调函数,即box到达位置后调用的函数)
      // 如果fn没有传入,则fn为undefined,隐式转为布尔值就算false。此时就不要调用回调函数了，说明用户对回调没需求了
      // 到达目标位置后执行函数
      element.style.left = pos + 'px';
      if (fn) {
        fn();
      }
    }
  }, 15)
}