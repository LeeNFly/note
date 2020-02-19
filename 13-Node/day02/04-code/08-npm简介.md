# npm简介
Node Package Manager node包管理工具

包是什么？？？

## 三个关键内容
1. npm服务器
2. [npm网站](www.npmjs.com)
3. npm命令行工具

## npm安装
只要安装好了node, 那么npm就自动安装好了


## npm命令行工具的使用

在node装完之后，全局就有一个npm命令可以使用了

1. 初始化一个pacakge.json文件
`npm init`
`npm init -y`

如果当前文件夹名称包含中文等特殊字符，则npm init命令执行会报错，报错之后pacakge.json文件中的name和version属性为空，需要自己手动的补全！！


2. 下载包(本地安装)
下载的包会放到当前项目中的node_modules文件夹中！   
`npm install 包名`
`npm install 包名@版本号`

`npm i 包名`
`npm i 包名@版本号`

`npm install 包名 包名1 包名2`

3. 卸载包
`npm uninstall 包名`


## 全局安装
当要使用一个包，这个包会提供一个全局命令的时候，这个包就需要被全局安装！

命令
`npm install 包名 -g`
`npm install 包名 --global`

live-server
npm install less -g