# package.json

## 作用
package.json文件就是用来描述一个包的信息的！

只要一个文件夹中有一个合格的package.json文件，那么这个文件夹就可以被称为是一个包！

合格的package.json文件的定义：  ★ 必须包含两个属性 name version

我们完全可以自己手动创建package.json文件, 然后知道name和version 来 替代 npm init 初始化包的命令

1、一个项目我们只需要初始化一次即可, 一个项目只能有一个package.json文件

## package.json文件中的属性
name: 包名    不能有中文，不能有空格，不能有大写字母，不能有特殊字符！
   包名不能和npm服务器中现有的包名重复, 否则会导致无法上传到npm及无法下载npm上同名的包
   npm init -y 默认以当前执行命令的文件夹名作为包名
   如果当前文件夹名称包含中文等特殊字符，则npm init -y命令执行会报错，报错之后pacakge.json文件中的name和version属性为空，需要自己手动的补全！！ 补全后package.json就可以使用了, 项目npm初始化也成功

version:  版本信息 一般1.0.0

可有可无的属性: 
    description： 描述信息
    author: 作者
    keywords: 关键词 方便在npm网站上进行搜索
    license: 开源协议 自己指定

重要的属性:
    scripts: 放的就是一些shell命令及其别名 (给shell命令起别名) (shell命令: 在cmd命令行工具或Terminal中执行的命令)，这些命令可以通过 `npm run 命令别名` 进行执行
        npm run 命令别名 相当于在Terminal或cmd命令行中, 与package.json文件 ★ 同一个目录下执行了别名对应的那个shell命令
        可以省略run执行的命令别名： start stop restart test config, 
        这些命令也需要先在scripts中定义, 之后才能使用, 使用时可以省略run
        例如`npm start`
        
    scripts如
    "scripts": {
        "start": "node ./bin/www"
      },


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
这两个属性中保存的都是当前包中所有的依赖信息。, 即当前项目用到的所有包 (依赖项)
依赖项: 就是当前项目用到的包, 从npm上下载的包. 
dependencies： 运行时依赖项，在将代码上传到服务器时，这个包仍被需要, 即不管是生产环境还是开发环境都需要的包
devDependencies： 开发时依赖项，这个依赖项只需要在开发的时候用到，上传到服务器的时候不需要！
举例:
dependencies: 例如 开发时用到了jquery包, 在开发时要用到, 在运行时也要用到, 将来生产环境中运行也要使用jquery包 
devDependencies: 例如less包, 只需要在开发时用到, 开发时通过Lessc index.less index.css 将文件编译成css文件, 将来只需要将css文件更新到服务器即可, 所以运行时不需要Less包, 

问题： 为什么要将依赖项信息存储起来呢？？？
主要目的是为了代码共享的时候，比较方便！

在进行代码分享的时候，不需要分享node_modules (包存储目录), 即不需要分享下载的包, 只需要分享自己的代码和pacakge.json即可，另外的程序员拿到代码之后，因为已经有package.json文件了, 已经是一个包了, 不需要再执行npm init了, 直接根据pacakge.json下载所有的依赖项即可！

`npm install`  这条命令会自动根据package.json中保存的包信息(devDependencies和dependencies)进行下载, 即会将dependencies和devDependencies中所有的包都下载到项目中, 供项目中使用

若只下载package.json中保存的运行时依赖项dependencies, 可以使用命令`npm install --production`, 只下载package.json中dependencies中的所有包到项目中


## 如何将依赖项的信息保存到dependencies 和 devDependencies中
在最新的npm版本中, 执行下载操作, 会默认自动将包信息添加到package.json的运行时依赖项dependencies中
在最新的npm版本中, 执行卸载操作, 会自动将包信息从package.json中对应的dependencies或devDependencies中删除

在早期版本的npm中，依赖项信息不会自动保存！
需要手动保存依赖项信息
1. 将依赖项的信息保存到dependencies
`npm install 包名 --save` 下载包并且保存依赖项信息到package.json的dependencies运行时依赖项中
`npm install 包名 -S` (简写)

2. 将依赖项的信息保存到devDependencies
`npm install 包名 --save-dev` 下载包并且只将依赖项信息到package.json的devDependencies开发时依赖项中
`npm install 包名 -D` (简写)

推荐在下载包时就直接指定 -S 或 -D

在早期的npm版本中, 若删除包 npm uninstall 包名, 需要自己手动删除package.json中对应的dependencies或devDependencies里的依赖项信息
