// ==============================工具对象====================
var Tools = {
  // 获取一个随机数 处于 min ~ max
  getRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
// ==============================食物对象===================
;(function () {
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

//===============================蛇对象===========================
;(function () {
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

// ==========================游戏对象===========================
;(function () {
  function Game() {
    this.food = new Food();
    this.snake = new Snake();
  }
  Game.prototype.start = function () {
    this.food.render();
    this.snake.render();
    var maxX = map.offsetWidth / this.snake.width - 1;
    var maxY = map.offsetHeight / this.snake.height - 1;
    var timeid = setInterval(function () {
      this.snake.move();
      // 判断是否超出边界
      if (this.snake.body[0].x < 0 || this.snake.body[0].x > maxX || this.snake.body[0].y < 0 || this.snake.body[0].y > maxY) {
        // 超出边界
        alert('game over!')
        // 清楚定时器
        clearInterval(timeid);
        // 不再渲染
        return;
      }
      this.snake.render();

      // 判断是否吃到食物
      if (this.food.x == this.snake.body[0].x * this.snake.width && this.food.y == this.snake.body[0].y * this.snake.height) {
        // 吃到了食物
        // 食物重新渲染
        this.food.render();
        // 蛇节多一节
        // 在下次蛇移动的时候,会自动把前面一个蛇节的坐标赋予新添加的这个蛇节,然后再渲染,所以这里蛇节可以随便写
        this.snake.body.push({
          x: 0,
          y: 0,
          col: 'red'
        });
      }

      // 如果非要把渲染写到吃到食物的后面 
      // if (this.food.x == this.snake.body[0].x * this.snake.width && this.food.y == this.snake.body[0].y * this.snake.height) {
      // 吃到了食物
      // 食物重新渲染
      // this.food.render();
      // 蛇节多一节
      // 在下次蛇移动的时候,会自动把前面一个蛇节的坐标赋予新添加的这个蛇节,然后再渲染,所以这里蛇节可以随便写
      // this.snake.body.push(this.snake.body[this.snake.body.length - 1]);  //这样写不会变长,push的是对象的地址,相当于蛇的末节和倒数第二节指向同一个对象,修改数据都会一起变化,所以渲染出来的效果是一样的,都是在蛇末尾,导致蛇看起来没有变长
      // this.snake.body.push({  //新创建一个对象 把最后一个蛇节的属性值赋予这个对象,这样就避免了添加的蛇节指向同一个引用地址的问题
      //   x: this.snake.body[this.snake.body.length - 1].x,
      //   y: this.snake.body[this.snake.body.length - 1].y,
      //   col: 'red'
      // });
      // }
      // this.snake.render(); // 如果把渲染写在吃到食物的后面,会出现闪一下的情况 


    }.bind(this), 150)

    // 可以控制蛇的方向,给整个页面注册键盘的上下左右事件
    // 左上右下 37 ~ 40
    document.onkeydown = function (e) {
      e = e || window.event;
      switch (e.keyCode) {
        case 37:
          if (this.snake.direction === 'right') {
            break;
          }
          this.snake.direction = 'left';
          break;
        case 38:
          if (this.snake.direction === 'bottom') {
            break;
          }
          this.snake.direction = 'top';
          break;
        case 39:
          if (this.snake.direction === 'left') {
            break;
          }
          this.snake.direction = 'right';
          break;
        case 40:
          if (this.snake.direction === 'top') {
            break;
          }
          this.snake.direction = 'bottom';
          break;
      }
    }.bind(this)

  }



  window.Game = Game;
})();