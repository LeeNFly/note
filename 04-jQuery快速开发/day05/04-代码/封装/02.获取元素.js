(function(window, undefined){
    var jQuery = function(selector){
        var elements = document.querySelectorAll(selector);
        [].push.apply(this, elements);
    }

    window.jQuery = window.$ = jQuery;
})(window)
