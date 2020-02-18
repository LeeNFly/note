/**
 * Created by luodianlei on 2018/6/23.
 */
(function () {
  
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
    // 修改this.body中每一个对象的x,y的值 修改蛇身体坐标
    for(var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    //修改蛇头的坐标
    this.body[0].x += 1;
    
  }
  
  window.Snake = Snake;
  
  
})();