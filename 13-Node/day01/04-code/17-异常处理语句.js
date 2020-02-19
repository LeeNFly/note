// 异常： 一旦出现异常，则代码执行中断

// 异常处理语句： 将异常捕获，避免代码执行被中断！

// 语法：
// try { 
        // 可能出错的代码，都放在try语句块里
// } catch (e) {
        // catch中放的就是出错之后要执行的代码
// }

// 完整形态
// try {
    
// } catch (e) {
    
// } finally {
    
// }


console.log("hello");

// var a = 10;

try {
    console.log(a);
} catch (e) {
    console.log("出错了！", e)
} finally {
    console.log('finally被执行了')
}

console.log("world");