// js基础中  学习for循环的时候 打印三角形
// 双层for循环

// for (var i = 0; i < 10; i++){
//     var str = "";
//     for (var j = 0; j <= i; j++){ 
//         str += "*"
//     }
//     console.log(str);
// }

// console.log("*");
// console.log("*");
// console.log("*");

// node.js中支持js语法，但是没有我们之前学习的浏览器中特有的API DOM BOM
// document.getElementById("app");
// console.log(window);


// node.js中虽然没有浏览器中的特定的API，但是又给我们提供了很多其他Node.js特有的API

// 打印内容，我们可以使用console.log()， 但是console.log()会自动换行

// node.js提供了另外一个打印的方法
// process.stdout.write 这个方法可以用来打印内容，但是和console.log不一样的地方在于，他不会自动换行
// process.stdout.write("*");
// process.stdout.write("*");
for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    // 需要换行
    process.stdout.write("\n");
}
