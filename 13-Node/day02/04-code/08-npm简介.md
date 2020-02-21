# npm简介
Node Package Manager node包管理工具

包是什么？？？

## 三个关键内容
1. npm服务器 (所有的包都存储在npm服务器上的)
2. [npm网站](www.npmjs.com) (用于查看npm服务器上有哪些包及其文档的)
3. npm命令行工具 (用于上传包到npm服务器 和 从npm服务器上下载包的 (常用从npm服务器上下载包))

## npm安装
只要安装好了node, 那么npm就自动安装好了


## npm命令行工具的使用

在node装完之后，全局就有一个npm命令可以使用了, 可以在任意路径下使用npm

在项目中, 如何使用npm?
1. 在项目目录下, 初始化一个pacakge.json文件
`npm init`
`npm init -y` (推荐)
-y: 一路yes的意思, 省事

npm init 主要就是用于项目初始化npm的, 实际上就是生成一个package.json文件的, 这个我们手动建一个, 然后自己配置也可以, 但是比较麻烦, 建议还是使用npm init 来帮我们生成package.json文件
如果当前文件夹名称包含中文等特殊字符，则npm init命令执行会报错，报错之后pacakge.json文件中的name和version属性为空，需要自己手动的补全！！ 补全后package.json就可以使用了, 项目npm初始化也成功

注意点: 
1、一个项目我们只需要初始化一次即可
2、生成的package.json文件, 存储在执行npm init命令的执行目录下

2. 下载包(本地安装)
下载的包会放到当前项目中的node_modules文件夹中！   
`npm install 包名`
`npm install 包名@版本号`

注意: 
1、我们一般在package.json的同级目录下, 进行下载包, 保证生成的node_modules文件夹与package.json文件在同一个目录下, 方便管理

`npm i 包名`   (不指定版本号, 则默认安装最新版)
`npm i 包名@版本号`   (若之前安装过此包(相同包)的其他版本, 则会进行覆盖)

`npm install 包名 包名1 包名2`

3. 卸载包
方法1: 在node_modules目录下找到包目录, 删除文件夹
方法2. 在package.json同级目录下执行命令 `npm uninstall 包名`



## 全局安装
当要使用一个包，这个包会提供一个全局命令的时候，这个包就需要被全局安装！

命令
`npm install 包名 -g`
`npm install 包名 --global`

live-server
npm install less -g