(function () {
  var snakes = []; // 用于存储原来的蛇
  function Snake(obj) {
    obj = obj || {};
    this.width = obj.width || 20; // 每个蛇节的宽
    this.height = obj.height || 20; // 每个蛇节的高
    this.direction = obj.direction || 'right'; // 蛇移动的方向
    this.body = [
      // x,y代表 水平和垂直方向的格子数 真正算坐标的时候要乘以每个蛇节的宽高
      // 默认第一个为舌头
      {
        x: 3,
        y: 1,
        col: 'blue'
      },
      {
        x: 2,
        y: 1,
        col: 'red'
      },
      {
        x: 1,
        y: 1,
        col: 'red'
      }
    ];
  }

  Snake.prototype.render = function () {
    // 渲染前先清楚原来的蛇
    snakes.forEach(function (item) {
      map.removeChild(item)
    })
    snakes = [];
    this.body.forEach(function (item) {
      var div = document.createElement('div');
      snakes.push(div)
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.backgroundColor = item.col;
      div.style.left = item.x * this.width + 'px';
      div.style.top = item.y * this.height + 'px';
      div.style.position = 'absolute';
      map.appendChild(div);
    }.bind(this))
  }

  Snake.prototype.move = function () {
    // 移动思想: 把坐标给后一节 依次往下传递
    // 从后面往前拿值
    // 蛇头另外赋值
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }

    // 蛇头移动
    switch (this.direction) {
      case 'left':
        this.body[0].x -= 1;
        break;
      case 'right':
        this.body[0].x += 1;
        break;
      case 'top':
        this.body[0].y -= 1;
        break;
      case 'bottom':
        this.body[0].y += 1;
        break;
    }
  }

  window.Snake = Snake;
})()