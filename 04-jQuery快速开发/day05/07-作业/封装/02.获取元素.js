(function (window, undefined) {
    var jQuery = function (selector) {
        var elements = document.querySelectorAll(selector);
        [].forEach.call(elements, function (item, index) {
            this[index + ''] = item;
        }.bind(this))
        this.length = elements.length;
    }
    window.$ = window.jQuery = jQuery;
})(window)