/**
 * Created by luodianlei on 2017/12/13.
 */
(function(){
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
})()

