// 给jQuery(构造函数)的原型添加bgc方法
// jQuery的原型：
//  jQuery.prototype
//  jQuery.fn
//  $.prototype
//  $.fn  (推荐使用)

$.fn.bgc = function(color){
    // this:  谁调用的，this就指向谁  (对象调用模式)
    //          是一个jq对象  (调用这个方法的jq对象)
    console.log(this);

    this.css("backgroundColor", color);

    // 返回当前的jq对象，目的，为了链式编程 在jq原型上添加方法, 都将调用的方法的jq对象返回, 方便链式编程
    return this;
}
