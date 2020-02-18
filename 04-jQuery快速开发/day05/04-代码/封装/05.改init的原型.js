(function(window, undefined){
    var jQuery = function(selector){
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        html: function(){
            console.log("html");
        },
        css: function(){
            console.log("css");
        },
        width: function(){
            console.log("width");
        }
    }

    jQuery.fn.init = function(selector){
        var elements = document.querySelectorAll(selector);
        [].push.apply(this, elements);
    }

    // 修改init构造函数的原型，由默认的原型改为 改成jQuery函数的, 使得可以访问jq原型上的属性和方法
    jQuery.fn.init.prototype = jQuery.fn;

    window.jQuery = window.$ = jQuery;
})(window)
