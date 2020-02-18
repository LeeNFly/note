(function () {
    //动态设置rem的值
    // 在设计稿640px 情况 ，设置1rem = 100px 
    // 推算1rem 在其他屏幕 取值 
    // 根据媒体查询检测当前屏幕宽度，根据宽取设置rem的值   
    //当前值 = 当前屏幕宽度/640*100
    //design 设计稿宽
    function setRem(design) {
        
        //1获取当前屏幕的宽度
        var width = window.innerWidth;
        // console.log(width);
        if (width > 640) {
            width = 640;
        }
        if(width < 320) {
            width = 320;
        }

        //动态设置rem的值
        document.querySelector('html').style.fontSize = width/design*100 + 'px';
        
    }

    setRem(640);

    //检测屏幕宽度变化，实时动态设置
    window.onresize = function () {
        setRem(640);
    }
})();