# package.json

## 作用
package.json文件就是用来描述一个包的信息的！

只要一个文件夹中有一个合格的pacakge.json文件，那么这个文件夹就可以被称为是一个包！

合格的定义：  必须包含两个属性 name version


## package.json文件中的属性
name: 包名    不能有中文，不能有空格，不能有大写字母，不能有特殊字符！
version:  版本信息 

description： 描述信息
author: 作者
keywords: 关键词 方便在npm网站上进行搜索
license: 开源协议 自己指定

scripts: 放的就是一些shell命令，这些命令可以通过 `npm run 命令别名` 进行执行
    可以省略run执行的命令别名： start stop restart test config
    例如`npm start`


dependencies:
devDependencies:

## 版本号说明
一般的版本号都会包含3个数字，中间用.隔开
格式：   主版本号.次版本号.修订版本号

主版本号： 当代码功能更新，更新之后，不兼容之前的版本了，那么需要更新主版本号！
此版本号： 当代码功能更新，更新之后，依然兼容之前的版本，只是新增了某些功能，那么需要更新次版本号
修订版本号： 当代码更新，更新的只是修复了某些BUG,或者优化了某些功能，那么这个时候只需要更新 修订版本号就可以了


jquery: 1.x 2.x 3.x
1.10.1 1.12.4
1.12.1 1.12.4

## dependencies 和 devDependencies 的说明
这两个属性中保存的都是当前包所有的依赖信息。

dependencies： 运行时依赖项，在将代码上传到服务器时，这个包仍被需要
devDependencies： 开发时依赖项，这个依赖项只需要在开发时时候，上传到服务器的时候不需要！


问题： 为什么要将依赖项信息存储起来呢？？？
主要目的是为了代码共享的时候，比较方便！

在进行代码分享的时候，不需要分享node_modules，只需要分享自己的代码和pacakge.json即可，另外的程序员拿到代码之后，自己根据pacakge.json下载所有的依赖项即可！

`npm install`  这条命令会自动根据package.json中保存的包信息进行下载 （devDependencies+dependencies）

只下载运行时依赖项可以使用命令`npm install --production`


## 如何将依赖项的信息保存到dependencies 和 devDependencies中

在早期版本的npm中，依赖项信息不会自动保存！

1. 将依赖项的信息保存到dependencies
`npm install 包 --save`
`npm install 包 -S`

2. 将依赖项的信息保存到devDependencies
`npm install 包 --save-dev`
`npm install 包 -D`