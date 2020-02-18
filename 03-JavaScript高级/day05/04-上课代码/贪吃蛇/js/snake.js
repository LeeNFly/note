/**
 * Created by luodianlei on 2017/12/15.
 */
(function(){
  
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
})()