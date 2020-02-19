# require函数

require函数的作用就是用来导入模块的！！

## node.js中的模块分类

1. 核心模块（内置模块） fs path url http querystring
2. 第三方包模块    mime  art-template moment
3. 目录模块
4. 文件模块

在引入核心模块和第三方包模块的时候，直接给require函数传递包名称即可：

当require函数接收到一个包名称的时候
1. 会先去找核心模块中是否有对应的模块，如果找到了就直接使用
2. 如果没有找到，就去node_modules中查找对应的模块，如果找到了就直接使用
3. 如果没有找到，就去上一级目录中的node_modules中找，如果找到了就直接使用
4. 如果没找到继续往上级目录中的node_modules，找到根目录如果还没找到就报错了 can not find module xxx


在引入模块的时候，如果传递给require函数的是一个路径作为参数，那么引入的就是目录模块或者文件模块   ./ ../

1. 按照路径查找对应的文件, 如果找到了直接引入
2. 如果没有找到，找文件名对应的 .js .json .node
3. 如果没有找到，就找路径对应的文件夹
    1. 如果找到了对应的文件夹
        1. 判断当前文件夹中是否有package.json文件
            1. 如果没有，就直接引用index.js
            2. 如果有package.json文件，则找main属性
                1. 如果main属性不存在 则引用index.js json node
                2. 如果main属性存在 则引用main属性指定的文件
4. 如果没找到，就直接报错了


### package.json中的main属性
告诉require函数在引入当前包的时候，具体引用哪个文件！
```json
{
    "main": "文件路径"
}
```

