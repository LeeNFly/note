/**
 * Created by luodianlei on 2018/6/23.
 */
(function(){
  
  
  function Game(){
    this.food = new Food();
    this.snake = new Snake();
  }
  
  Game.prototype.start = function(){
    // 1. 蛇和食物渲染到页面上
    this.food.render();
    this.snake.render();
    //  2. 让蛇自己动起来
    var timeid = setInterval(function(){
      this.snake.move();
      //3.判断蛇是否撞墙了
      //3.1 知道墙在哪(最小位置0和最大位置)
      var maxX = map.offsetWidth / this.snake.width - 1;
      var maxY = map.offsetHeight / this.snake.height - 1;
      // 3.2 判断蛇是否超出了地图
      //3.2.1 获取到蛇头
      var head =  this.snake.body[0];
      // 3.2.2 判断蛇头的位置是否超出map
      // 由于移动是移动的蛇的坐标,render之后我们看到才是蛇移动的效果
      // move完了之后,render有有一个时间差,那么这个时间差导致
      // move之后的坐标可能已经到了40, 但是看到的蛇的位置在39的位置
      // 所以我们判断的条件是是否超出了39,29,0.如果数据超出了,此时蛇头正好在边界
      // ,这个时候,就可以停止游戏了,然后停止游戏之后,不需要蛇头超出地图,所以,render不希望被调用,就return 函数
      if(head.x < 0 || head.y < 0 || head.x > maxX || head.y > maxY){
        //证明蛇出了地图
        alert('game over');
        clearInterval(timeid);
        return;//如果位置已经超出了,就不需要渲染了
      }
      
      
      
      //5.判断蛇吃到食物,重新渲染一个新的食物,让蛇变长
      // 5.1. 渲染新的食物
      // 5.1.1 获取到食物的坐标
      // console.log(this.food.x);
      // console.log(this.food.y);
      // 5.1.2 获取蛇头的坐标
      // console.log(this.snake.body[0].x);
      // console.log(this.snake.body[0].y);
      var x = this.snake.body[0].x * this.snake.width;
      var y = this.snake.body[0].y * this.snake.height;
      
      // console.log(x, y);
      // 5.2.3 判断蛇头和食物是否重合
      if(this.food.x == x && this.food.y == y){
        //重新渲染食物
         this.food.render();
        //  5.2 让蛇变长
        // this.snake.body.push({ //会在地图的左上角渲染一个盒子出来
        //   x : 0,
        //   y : 0,
        //   col : 'blue'
        // })
        //由于数组中,存放的是引用数据类型,直接把对象push到数组中,实际上是把对象的地址,push到了数组中
        // 数组的最后两项指向的是同一个对象,然后当下一次定时器调用move的时候,修改下标为2的对象,实际上同时也是修改了下标为3的对象,因为他们是同一个,添加上去的盒子,永远被覆盖了,在页面上看到的效果就是蛇没有变长
        // this.snake.body.push(this.snake.body[this.snake.body.length -1]);
        var last = this.snake.body[this.snake.body.length - 1];
        //
        this.snake.body.push({
          x : last.x,
          y : last.y,
          col :last.col
        });
      }
  
      this.snake.render();
    
      
    }.bind(this),150);
    
    
    
    //4. 监听键盘上,下,左,右四个按键
    document.onkeydown = function(e){
      //4.1 判断按下的是哪个按键
      // 左,上,右,下 37~40
      // console.log(e.keyCode);
      switch(e.keyCode){
        case 37:
          if(this.snake.direction === 'right') break;
          this.snake.direction = 'left';
          break;
        case 38:
          if(this.snake.direction === 'bottom') break;
          this.snake.direction = 'top';
          break;
        case 39:
          if(this.snake.direction === 'left') break;
          this.snake.direction = 'right';
          break;
        case 40:
          if(this.snake.direction === 'top') break;
          this.snake.direction = 'bottom';
          break;
        
      }
    }.bind(this);
  }
  
  
  window.Game = Game;
  
})();