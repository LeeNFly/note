/**
 * Created by luodianlei on 2017/12/15.
 */
(function(){
  var that; //用于存储游戏对象
  var id; //用于存储定时器的id
  var map;
  
  function Game(){
    this.snake = new Snake();
    this.food = new Food();
  }
  
  Game.prototype.start = function(box){
    //让蛇和食物渲染到页面上
    this.food.render(box);
    this.snake.render(box);
    this.map = box;
    that = this; //为了让其他地方也可以获取到game对象
   
    
    //让蛇动起来
    // 设置一个定时器. 在定时器里,先调用snake.move ,然后在重新渲染蛇的身体
    autoMove();
    
    //监听键盘事件
    document.onkeydown = function(e){
      console.log(e.keyCode);
      switch(e.keyCode){
        case 37:
          if(that.snake.direction==='right') return;
          that.snake.direction = 'left';
          break;
        case 38:
          if(that.snake.direction==='bottom') return;
          that.snake.direction = 'top';
          break;
        case 39:
          if(that.snake.direction==='left') return;
          that.snake.direction = 'right';
          break;
        case 40:
          if(that.snake.direction==='top') return;
          that.snake.direction = 'bottom';
          break;
      }
    }
  }
  
  //
  function autoMove(){
    id = setInterval(function(){
      that.snake.move();
      
      //判断蛇是否撞墙了
      //判断撞墙的依据是什么
      // 蛇头的坐标  和  最大坐标和最小坐标是够相等
      var flag = isGameOver();
      if(flag){
        return; //停掉的是定时器的回调函数, 渲染的代码不会执行了
      }
      // var head = that.snake.body[0];
      // var maxX = that.map.offsetWidth / that.snake.width - 1;
      // var maxY = that.map.offsetHeight / that.snake.height - 1;
      //
      // if(head.x < 0 || head.y < 0 || head.x > maxX || head.y > maxY){
      //   clearInterval(id);
      //   alert('game over');
      //   return;  //没有封装的话,那么这个return ,return掉的是定时器的回调函数
      // }
      
      //判断蛇是否吃到食物
      // 判断依据: 蛇头的坐标 === 食物的坐标
      var head = that.snake.body[0];
      if(head.x * that.snake.width  === that.food.x &&
      head.y * that.snake.height === that.food.y){
        
        //让食物消失,重新渲染一个
        that.food.render(that.map);
        
        //让蛇的身体变长
        var last = that.snake.body[that.snake.body.length-1];
        that.snake.body.push({
          x : last.x,
          y : last.y,
          color : last.color
        })
        
      }
  
      
      
      
      that.snake.render(that.map);
    
    },150)
  }
  
  // 判断是否撞到墙的函数
  function isGameOver(){
    var head = that.snake.body[0];
    var maxX = that.map.offsetWidth / that.snake.width - 1;
    var maxY = that.map.offsetHeight / that.snake.height - 1;
  
    if(head.x < 0 || head.y < 0 || head.x > maxX || head.y > maxY){
      clearInterval(id);
      alert('game over');
      return true;
    }
    
  }
  
  window.Game = Game;
})()