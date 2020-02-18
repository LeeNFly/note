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
    setInterval(function(){
      this.snake.move();
      this.snake.render();
    }.bind(this),150);
  }
  
  
  window.Game = Game;
  
})();