(function(window, undefined){
    var jQuery = function(selector){
        var elements = document.querySelectorAll(selector);
        [].push.apply(this, elements);
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

    window.jQuery = window.$ = jQuery;
})(window)
