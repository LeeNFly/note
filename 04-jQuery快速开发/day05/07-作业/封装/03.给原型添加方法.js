(function (window, undefined) {
    var jQuery = function (selector) {
        var elements = document.querySelectorAll(selector);
        [].forEach.call(elements, function (item, index) {
            this[index + ''] = item;
        }.bind(this))
        this.length = elements.length;
    }

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        html: function () {
            console.log('这是添加的html方法');
        },
        text: function () {
            console.log('这是添加的text方法');
        }
    }

    window.$ = window.jQuery = jQuery;
})(window)