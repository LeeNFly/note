(function () {
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
        this.snake.body.push({x: 0, y: 0, col: 'red'});
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