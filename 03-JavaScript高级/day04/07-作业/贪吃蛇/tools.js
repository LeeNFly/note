var Tools = {
  // 获取一个随机数 处于 min ~ max
  getRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}