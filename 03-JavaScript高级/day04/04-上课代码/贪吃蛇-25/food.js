/**
 * Created by luodianlei on 2018/6/23.
 */
(function(){ //使用自调用函数 保护变量container
  // 自调用函数 => 声明 + 调用
  // 自调用函数自调用后函数不会消失 还会存在内存里 变量也会存在函数的内存里  声明 + 调用
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
  // window对象哪里都可以直接使用,所以直接添加到window上 添加在window上的属性 相当于在全局变量中添加了一个变量
  // 可以使用window将函数内的变量、函数暴露到全局
  window.Food = Food;
  
})();

