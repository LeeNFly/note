# npm简介
Node Package Manager node包管理工具

包是什么？？？
一组被package.json描述的文件. (如果一个文件夹中一个文件夹中有一个合格的pacakge.json文件，那么这个文件夹就是一个包！)
就是别人写好的js代码, js文件, 类似于js插件, 里面封装了写好的功能

## 三个关键内容
1. npm服务器 (所有的包都存储在npm服务器上的) 存储包
2. [npm网站](www.npmjs.com) (用于查看npm服务器上有哪些包及其文档的) 浏览包
3. npm命令行工具 (用于上传包到npm服务器 和 从npm服务器上下载包的 (常用从npm服务器上下载包)) 操作包

## npm安装
只要安装好了node, 那么npm就自动安装好了


## npm命令行工具的使用

在node装完之后，在全局就有一个npm命令可以使用了, 可以在任意路径下使用npm

在项目中, 如何使用npm?
 ★ 明确一点, 所有的npm命令都是在cmd命令行或者是在Terminal命令行终端执行的
 
1. 在项目目录下, 初始化一个pacakge.json文件
`npm init`
`npm init -y` (推荐)
-y: 一路yes的意思, 省事

npm init 主要就是为了创建package.json文件的, 当然我们手动创建也可以, 手动创建比较麻烦
npm init 主要就是用于项目初始化npm的, 实际上就是生成一个package.json文件的, 这个我们手动建一个, 然后自己配置也可以, 但是比较麻烦, 建议还是使用npm init 来帮我们生成package.json文件
如果当前文件夹名称包含中文等特殊字符，则npm init -y命令执行会报错，报错之后pacakge.json文件中的name和version属性为空，需要自己手动的补全！！ 补全后package.json就可以使用了, 项目npm初始化也成功

`npm init` 之后才可以下载包和上传包

注意点: 
1、★ 一个项目我们只需要初始化一次npm即可, 一个项目只能有一个package.json文件
2、生成的package.json文件, 存储在执行npm init命令的执行目录下

2. 下载包(本地安装)
下载的包会放到当前项目中的node_modules文件夹中！   
`npm install 包名` (不指定版本号, 则默认安装最新版)
`npm install 包名@版本号` (若之前安装过此包(相同包)的其他版本, 则会自动进行覆盖) 即不会重复下载包

注意: 
1、要先初始化npm后, 才可以下载包
2、我们一般在package.json的同级目录下, 执行下载包命令, 保证生成的node_modules文件夹(下载的包存放在node_modules文件夹下)与package.json文件在同一个目录下, 方便管理
3、在node中 下载的包如何使用？
    3.1 先引入 语法: require('包名') , 如 var mime = require('mime');
    3.2 再使用, 如 mime.getType();
    
   在html中, 如何使用下载的包?
    直接通过script标签的src, 将包中的功能js文件引入到页面中, 即可使用包中功能, 与之前使用js插件类似

`npm i 包名`   (简写)
`npm i 包名@版本号`  (简写)

`npm install 包名 包名1 包名2`  一次性安装多个包, 也可以跟上版本

3. 卸载包
方法1: 在node_modules目录下找到包目录, 删除文件夹
方法2. 在package.json同级目录下执行命令 `npm uninstall 包名`



## 全局安装
当要使用一个包，这个包会提供一个全局命令的时候，这个包就需要被全局安装！
全局命令 可以在全局任意地方使用 根据需要有时也要在对应的文件目录下使用

不需要知道全局安装包的目录在哪(一般在nodejs的安装目录下), 需要全局安装的包文档里会有说明

命令 (全局安装包可以在命令行的任意位置进行, 反正是全局安装; 安装后的全局命令 可以在任意地方的命令行中使用)
`npm install 包名 -g` (简写形式)
`npm install 包名 --global`

全局包如:
live-server 服务器热启动, 在对应的文件目录下, 直接输入live-server可以启动一个临时服务器
npm install less -g , less编译插件 在对应的less文件目录下输入lessc index.less index.css 将less文件编译成css文件
