(function () {
    // 1. 初始化轮播图
    setBanner();
    
    function setBanner() {
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
        })
    }
})();