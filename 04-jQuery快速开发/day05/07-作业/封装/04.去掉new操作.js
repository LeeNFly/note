(function (window, undefined) {
    var jQuery = function (selector) {
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        html: function () {
            console.log('这是添加的html方法');
        },
        text: function () {
            console.log('这是添加的text方法');
        },
        // init: function (selector) {
        //     var elements = document.querySelectorAll(selector);
        //     [].forEach.call(elements, function (item, index) {
        //         this[index + ''] = item;
        //     }.bind(this))
        //     this.length = elements.length;
        // }
    }

    jQuery.fn.init = function (selector) {
        var elements = document.querySelectorAll(selector);
        [].forEach.call(elements, function (item, index) {
            this[index + ''] = item;
        }.bind(this))
        this.length = elements.length;
    }

    window.$ = window.jQuery = jQuery;
})(window)