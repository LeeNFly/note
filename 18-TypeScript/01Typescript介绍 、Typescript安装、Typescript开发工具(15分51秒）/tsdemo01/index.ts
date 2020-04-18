/*
 * @Author: Ling Hui Shi
 * @Date: 2020-04-18 22:44:31
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-18 23:22:45
 * @Description: 
 */
console.log('你好ts')

function getData(){


}

var str:string="你好ts";

/*
    什么是TypeScript?
    TypeScript是一种由微软开发的开源、跨平台的编程语言。它是JavaScript的超集，最终会被编译为JavaScript代码。
    TypeScript 简称ts, TypeScript 和 JavaScript是两种不同的语言, 各自语法也不同. 
    TypeScript 文件后缀名为.ts, .ts文件中直接写TypeScript代码即可, 浏览器不能直接识别TypeScript, TypeScript需要被编译成JavaScript后, 才能被浏览器作为JS代码解析和执行
    .ts文件 (ts代码) 最终会被编译成一个.js文件 (js代码), 最终在页面引入的是.ts文件编译后得到的.js文件, 即页面引入的还是.js文件, 浏览器解析和执行的还是js代码
*/

/*
vscode配置自动编译

1.第一步   tsc --init 生成tsconfig.json   改 "outDir": "./js",  


2、第二步 任务 - 运行任务  监视tsconfig.json

*/