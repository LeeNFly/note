window.onload = function () {
    //1- 点击垃圾桶， 桶盖打开 ， 模态框出现
    //2- 点击取消按钮，模态框隐藏， 桶盖关闭 

    //获取所有的桶
    var  dels = document.querySelectorAll('.del');
    var winBox = document.querySelector('.win-box');
    var delBox = document.querySelector('.del-box');
    var cancel = document.querySelector('.cancel');

    console.log(dels);
    

     //1- 点击垃圾桶， 桶盖打开 ， 模态框出现
    //  dels.forEach(function (v, i) {
    //      v.addEventListener('click', function () {
    //         // 模态框出现
    //         winBox.style.display = 'block';
    //         //桶盖打开 
    //         this.classList.add('open');
    //         //让删除盒子做用动画
    //         delBox.classList.add('animated');
    //         delBox.classList.add('bounceInDown');
    //      })        
    //  })

     //2- 点击取消按钮，模态框隐藏， 桶盖关闭 
    //  cancel.addEventListener('click', function () {
    //      winBox.style.display = 'none'; //模态框隐藏
    //      //找open类名的盒子 ，删除open类名
    //      document.querySelector('.open').classList.remove('open');
    //  })

    itcast.tap('.cancel', function () {
         winBox.style.display = 'none'; //模态框隐藏
         //找open类名的盒子 ，删除open类名
         document.querySelector('.open').classList.remove('open');
    })

    itcast.tap('.del', function () {        
        // 模态框出现
        winBox.style.display = 'block';
        //让删除盒子做用动画
        delBox.classList.add('animated');
        delBox.classList.add('bounceInDown');
        console.log(this);  // this --> window        
        //桶盖打开 
        this.classList.add('open');
    })


    // itcast.tap ('.box', say);

    // function say() {}
     
}