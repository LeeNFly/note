(function(window, undefined){
    var version = "666.000.000";

    var arr = [];
    // 拿到push方法
    var push = arr.push;

    var jQuery = function(selector){
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,

        // 给原型对象添加extend方法，用来拓展方法
        extend: function(o){
            for(var k in o){
                this[k] = o[k];
            }
        },

        // jq的版本号
        jquery: version,
        html: function(){
            console.log("html");
        }
    }


    //操作样式的样式
    jQuery.fn.extend({
        css: function(){
            console.log("css");
        },
        addClass: function(){

        },
        removeClass: function(){

        },
        hasClass: function(){

        },
        toggleClass: function(){

        }
    })

    //操作width
    jQuery.fn.extend({
        width: function(){
            console.log("width");
        },
        innerWidth: function(){

        },
        outerWidth: function(){
            
        }
    })

    jQuery.fn.init = function(selector){
        // 这里一定需要注意加上分号，不然会和下面的数组连着一行，会报错
        var elements = document.querySelectorAll(selector);
        // [].push.apply(this, elements);
        push.apply(this, elements);
    }

    // 修改init构造函数的原型，改成jQuery.prototype
    jQuery.fn.init.prototype = jQuery.fn;

    window.jQuery = window.$ = jQuery;
})(window)
