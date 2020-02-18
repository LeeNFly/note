(function() {
    setRem(750);
    function setRem (design) {
        var width = window.innerWidth;
        if (width > 750) {
            width = 750;
        }
        if (width < 320) {
            width = 320;
        }

        document.querySelector('html').style.fontSize = width / design * 100 + 'px';
    }
    window.onresize = function (e) {
        setRem(750)
    }
})();