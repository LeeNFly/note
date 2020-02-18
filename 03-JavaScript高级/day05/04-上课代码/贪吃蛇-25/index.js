/**
 * Created by luodianlei on 2018/6/25.
 */
//=============================工具对象================================
var Tool = {
  //获取min~max的随机整数
  getRandom: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

//==========================================食物对============================
// 在自调用函数前面加; 是为了与之前的代码隔离开来 之后是一个新的代码了
// 连续两个; 不会报错 代码正常运行 即 ;;不报错 相当于执行一条语句后 ; 然后什么都不做 ; 然后开始执行后面的代码
// 一般在{}花括号后面不加分号; 改为在自调用函数前面加分号;
;(function(w, undeifned){
  var container; //用于存储已经渲染到页面上的食物
// 关于食物对象的代码
  function Food(obj) { //如果写多个形参,这个函数写的很长,非常的丑
    obj = obj || {};//防止用户不传参数的情况下,下面代码报错
    this.width = obj.width || 20; //防止用户不传参数,我们也有默认值
    this.height = obj.height || 20;
    this.bgc = obj.bgc || 'green';
    this.x = obj.x || 0;
    this.y = obj.y || 0;
    
  }

//真正把食物渲染到页面 上的方法
  Food.prototype.render = function(){
    
    //把原来的食物清除掉
    if(container){
      map.removeChild(container);
    }
    var div = document.createElement('div');
    container = div;
    div.style.width= this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.bgc;
    //由于在贪吃蛇的游戏中,Food只new一次,所以获取随机数的代码不写在构造函数中,
    // 而是要写在render中,为什么要写在render中呢? 是因为,如果蛇吃到食物了,我们还要调用render方法
    //食物不一定在格子中
    // this.x = Tool.getRandom(0,map.offsetWidth - this.width);
    // this.y = Tool.getRandom(0,map.offsetHeight - this.height);
    //要求食物一定要格子中
    // 水平方向获取 0 ~ 39 的随机数 * 盒子的宽度
    // 垂直方形 获取 0 ~29 的随机数 * 盒子的高度
    this.x = Tool.getRandom(0, map.offsetWidth/this.width - 1) * this.width;
    this.y = Tool.getRandom(0, map.offsetHeight/this.height - 1) * this.height;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = 'absolute';
    map.appendChild(div);
  }
  
  //由于Food.js里面所有代码都放到自调用函数中,导致全局拿不到Food函数,所以需要把Food函数放出去
  // window对象哪里都可以直接使用,所以直接添加到window上
  w.Food = Food;
  
})(window, undefined)
// 在一些老的项目中,可能会看到有人传递window和undefined进来,目的就为了压缩
// 传递undefined是因为,在以前的浏览器中undefined可以被赋值,所以可能会有人使用undefined
//========================================蛇对象==================
;(function () {
  
  var arr = []; //用于存储蛇的每一节身体
  
  function Snake(obj) {
    obj = obj || {};
    //蛇的width,heigth 实际上是蛇的每一节的宽和高
    this.width = obj.width || 20;
    this.height = obj.height || 20;
    this.direction = 'right'; //默认方向向右
    //蛇是由每一个蛇节组成,默认给三个蛇节
    this.body = [
      //x,y 代表的是蛇节再地图上的哪个格子里
      // 真正蛇的坐标 要用x/y * 蛇节的宽高
      { x: 3, y:2, col : 'red'}, //蛇头
      { x: 2, y:2, col : 'blue'}, //蛇的身体
      { x: 1, y:2, col : 'blue'}
    ]
    
  }
  
  //蛇渲染到页面上的方法
  Snake.prototype.render = function(){
    // 渲染新的蛇之前,要清除原来的蛇
    // for(var i = 0; i < arr.length; i++) {
    //   map.removeChild(arr[i]);
    //   arr.splice(0,1);
    // }
    
    for(var i = 0, leng = arr.length; i < leng; i++){
      map.removeChild(arr[0]);
      arr.splice(0,1);
    }
    // arr = [];
    
    //this.body中有几个对象,就代表有几个蛇节,就创建几个div
    this.body.forEach(function(item){
      var div = document.createElement('div');
      arr.push(div);
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.backgroundColor = item.col;
      div.style.left = item.x * this.width + 'px';
      div.style.top = item.y * this.height + 'px';
      div.style.position = 'absolute';
      map.appendChild(div);
    }.bind(this));
    
  }
  
  //蛇移动的方法(修改了每一个蛇节的坐标)
  Snake.prototype.move = function(){
    // 修改this.body中每一个对象的x,y的值
    for(var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    //修改蛇头的坐标
    // this.body[0].x += 1;
    // 根据direction方向的属性,判断蛇头应该怎么移动
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
  
  
})()
//========================================游戏对象====================
;(function(){
  
  
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
  
})()