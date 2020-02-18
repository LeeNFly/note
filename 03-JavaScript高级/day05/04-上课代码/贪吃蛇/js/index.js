/**
 * Created by luodianlei on 2017/12/16.
 */
//注意: 自调用函数可能会和之前的代码联系在一起,所以一般在自调用函数的前面加;

//注意: 在早期浏览器中,unefined可以被重新赋值,所以可能会在一些老的项目中,看到有人传递undefined
// 这是tool


// 前年 gulp   现在流行的是webpack

;(function(window){
  var Tool = {
    //获取随机数的方法
    getRandom : function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  window.Tool = Tool;
})(window,undefined)
  //===============================food =======
;(function(window){
  var container; //用于存储食物元素
  //食物对象的构造函数
  function Food(options){
    options = options || {}; //防止用户不传数据时,代码报错
    this.width = options.width || 20;  //食物对象的宽
    this.height = options.height || 20; //食物的高
    this.color = options.color || "green";//食物的颜色
    this.x = options.x || 0; //食物的水平坐标
    this.y = options.y || 0; //食物的垂直坐标
  }
  
  // 把食物渲染到页面上的方法   食物对象调用这个方法
  Food.prototype.render = function(box){
    //每一次渲染之前,先将原来的移除掉
    if(container){
      box.removeChild(container);
    }
    
    var div = document.createElement('div');
    container = div;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
    div.style.position = 'absolute';
    box.appendChild(div);
    this.x = Tool.getRandom(0, box.offsetWidth / div.offsetWidth -1) * div.offsetWidth;
    this.y = Tool.getRandom(0, box.offsetHeight / div.offsetHeight -1) * div.offsetHeight;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
  }
  
  window.Food = Food; //把Food这个构造函数暴露出去
})(window)
//========================snake=======
;(function(window){
  
  var arr = []; //用于存储蛇的每一个节身体
  
  function Snake(options){
    options = options || {};
    this.width = options.width || 20; //蛇每一节的宽度
    this.height = options.height || 20; //蛇每一节的高度
    this.direction = options.direction || 'right' //蛇的方向
    //代表蛇的每一个蛇节的坐标和颜色
    this.body = [
      { x: 3, y :2, color:'red'},  //蛇头
      { x: 2, y :2, color:'blue'}, // 蛇的身体
      { x: 1, y :2, color:'blue'} // 蛇的身体
    
    ]
  }
  
  //渲染蛇的方法
  Snake.prototype.render = function(box){
    
    //渲染之前,先移除掉原来的蛇
    remove(box);
    
    //遍历创建蛇的身体,并且渲染到页面中
    for(var i = 0; i < this.body.length; i++) {
      
      var div = document.createElement('div');
      arr.push(div);
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.backgroundColor = this.body[i].color;
      div.style.position = 'absolute';
      div.style.left = this.body[i].x * this.width + 'px';
      div.style.top = this.body[i].y * this.height + 'px';
      box.appendChild(div);
    }
  }
  
  
  //用于移除蛇的身体
  function remove(box){
    for(var i = 0, leng = arr.length; i < leng; i++){
      box.removeChild(arr[0]);
      arr.splice(0,1);
    }
  }
  
  //蛇移动的方法
  Snake.prototype.move = function(){
    //1. 修改蛇身体的坐标
    for(var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
    
    //2. 修改的蛇头的坐标
    switch(this.direction){
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
})(window)

//===========================game==============
;(function(window){
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
      var head = that.snake.body[0];
      var maxX = that.map.offsetWidth / that.snake.width - 1;
      var maxY = that.map.offsetHeight / that.snake.height - 1;
      
      if(head.x < 0 || head.y < 0 || head.x > maxX || head.y > maxY){
        clearInterval(id);
        alert('game over');
        return;
      }
      
      //判断蛇是否吃到食物
      // 判断依据: 蛇头的坐标 === 食物的坐标
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
  
  window.Game = Game;
})(window)
//==================main=================
;(function(){
  var box = document.getElementById('box');
//  var food = new Food();
//  food.render(box);
//
//  var snake = new Snake();
//  console.log(snake);
//  snake.render(box);
  var game = new Game();
  game.start(box);
})();