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

    window.jQuery = window.$ = jQuery;
})(window)
