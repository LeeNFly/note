# 使用node.js编写命令行工具

## 命令行工具
可以在命令行(cmd)中直接输入一个命令，实现某个功能！

CLI: Command Line Interface, 命令行工具又称为cli,  比如Vue-Cli 就是一个命令行工具, 


## 使用node.js编写命令行工具的流程
1. 先创建一个npm包 (新建一个文件夹, 且 npm init)
2. 在包中实现命令工具的功能
3. 在package.json中添加 bin 属性   
    1. bin属性是一个对象，对象中的属性名就是最终要使用命令的名字
    2. 对象中的属性值，就是命令对应的要执行的文件的路径, 如果是相对路径, 参考的是package.json
4. 在要执行的js文件第一行写  #! node       告诉系统要使用node.js执行当前代码, (会使用node命令执行文件)
5. 将当前包上传到npm服务器
6. 将这个包进行 全局安装 
7. 可以在任意位置直接使用全局命令 (bin属性中的属性名) 执行对应的js文件了

比如createfolder例子中, 
D:\work>pmc
则相当于在 D:\work 目录下 执行了 node ./index.js (相对于包中的package.json) 这个文件
而在node中, 相对路径是相对于node的执行目录的, 所以index.js中的相对路径都是相对于当前的执行目录D:\work的
所以创建的文件夹./test, 就是在当前的node执行目录, D:\work 下 创建test文件夹


## http.request
