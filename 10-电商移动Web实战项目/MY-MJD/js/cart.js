;(function () {
    var delBtns = document.querySelectorAll('.dels');
    var delContainer = document.querySelector('.dels-comfirm');
    var cancelBtn = delContainer.querySelector('.cancel');
    var delDiv = delContainer.querySelector('.del-window');
    delBtns.forEach(function (v) {
        v.addEventListener('click', fn);
    });

    function fn() {
        delContainer.style.display = 'block';
        this.classList.add('open')
    }

    cancelBtn.addEventListener('click', function () {
        delContainer.style.display = 'none';
        var open = document.querySelector('.open');
        open.classList.remove('open');
    })
})();