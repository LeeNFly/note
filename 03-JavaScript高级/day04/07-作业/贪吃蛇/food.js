(function () {
  var container; // 存储当前渲染的食物
  function Food(obj) {
    obj = obj || {};
    this.width = obj.width || 20; // 食物的宽
    this.height = obj.height || 20; // 食物的高
    this.bgc = obj.bgc || 'green';
    this.x = obj.x || 0; // 食物的x坐标
    this.y = obj.y || 0; // 食物的y坐标
  }

  // 渲染食物的方法
  Food.prototype.render = function () {
    if (container) {
      map.removeChild(container)
    }
    container = document.createElement('div');
    container.style.width = this.width + 'px';
    container.style.height = this.height + 'px';
    container.style.backgroundColor = this.bgc;
    var maxX = map.offsetWidth - this.width;
    var maxY = map.offsetHeight - this.height;
    // container.style.left = Tools.getRandom(0, maxX) + 'px';
    // container.style.top = Tools.getRandom(0, maxY) + 'px';
    this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
    container.style.left = this.x + 'px';
    container.style.top = this.y + 'px';
    container.style.position = 'absolute';
    map.appendChild(container);
  }

  window.Food = Food;
})()