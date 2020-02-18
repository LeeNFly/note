;(function () {
    //1-由于轮播的li标签全部定位 脱标，父盒子高度为0 ，
    //并且图片自适应布局无法设置固定高度，遂用js动态设置高度;
    function setBannerHeight() {
        document.querySelector('.jd-banner').style.height 
            = document.querySelector('.jd-banner ul img').offsetHeight + 'px';
    }

    setBannerHeight(); //设置高度

    //当屏幕尺寸变化时动态设置banner高度
    window.onresize = function () {
        setBannerHeight(); //设置高度
    }
})();






