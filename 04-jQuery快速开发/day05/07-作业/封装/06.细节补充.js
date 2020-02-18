(function (window, undefined) {
    var jQuery = function (selector) {
        return new jQuery.fn.init(selector);
    }
    version = '666.000.000'

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        extend: function (obj) {
            for (var key in obj) {
                this[key] = obj[key]
            }
        },
        html: function () {
            console.log('这是html方法')
        },
        jquery: version
    }

    jQuery.fn.extend({
        addClass: function () {

        },
        removeClass: function () {

        },
        hasClass: function () {

        },
        toggleClass: function () {

        },
    })

    jQuery.fn.init = function (selector) {
        var elements = document.querySelectorAll(selector);
        [].forEach.call(elements, function (item, index) {
            this[index + ''] = item;
        }.bind(this))
        this.length = elements.length;
    }

    jQuery.fn.init.prototype = jQuery.fn;

    window.$ = window.jQuery = jQuery;
})(window)