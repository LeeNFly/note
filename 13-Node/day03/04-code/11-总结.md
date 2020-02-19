# Node.js 第三天

## 用最基本的方式实现hacker-news

### 使用文件保存数据
1. 需要一个data.json文件
2. 读取数据可以直接利用fs.readFile来读取，读取到之后，需要进行转换，转成数组。（注意，有可能读到的数据为空字符串，或者根本读不到数据， JSON.parse(data || "[]")）
3. 写入数据，先读取原有数据，再将新数据添加到原有数据中，在写入

查找id对应的元素： 直接使用数组的find的方法

### 模板引擎在node.js中的使用

#### 以文件作为模板
```js
var template = require('art-template');

var result = template(文件路径, 要渲染的数据对象)
```

#### 以字符串变量作为模板
```js
var template = require('art-template');
var tpl = "模板字符串"

var render = template.compile(tpl);
var result = render(要渲染的数据对象)
```

### 首页和详情页的基本逻辑
1. 读取数据
2. 读取模板文件
3. 调用art-template进行数据渲染


## hacker-news优化
1. 封装了数据操作的方法 readNews getNewsById addNews (都需要使用回调函数)
2. 封装render函数 （读取模板文件， 将数据进行渲染，返回渲染结果）


## 模块化

### 模块化概念
将代码按照一定的规则进行拆分，分成一个个的模块，这个过程就是模块化！

### 模块化的意义
1. 便于代码维护
2. 便于代码复用

### 模块化的标准
1. AMD: 异步模块定义  require.js   依赖前置
2. CMD: 通用模块定义  sea.js       依赖延迟  as lazy as possible
3. CommonJS： Node.js自己的模块化标准

### node.js模块化的具体做法
#### 定义模块
一个js文件就是一个模块，每个模块都有自己独立的作用域！

#### 引用模块
使用require函数就可以引用模块
```js
require('模块名称')
require('./模块路径')
```

#### 模块导出项的设置
如果模块中要提供内容给外界使用，则需要导出 设置导出项
```js
// modules.exports默认是一个空对象

//1. 利用module.eports来设置
//1.1 给默认的空对象中新增成员
module.exports.成员名 = 要导出的内容
//1.2 直接替换掉默认的空对象
module.exports = 要导出的内容

//2. 利用exports来设置
// 给默认的空对象中新增成员
exports.成员名 = 要导出的内容

// 不能用exports来替换默认的空对象，因为最终导出的module.exports(具体参照上课的图---引用类型数据的特征)
```

require函数的返回值就是引入的模块的导出项！ module.exports是什么，接收到的就是什么

### require函数的加载规则
#### 模块分类
1. 核心模块（内置模块）
2. 第三方包模块
3. 目录模块
4. 文件模块

#### require函数直接传值模块名称
```js
require('模块名')；
// 1. 先去核心模块中查找，如果找到，就用
// 2. 如果没找到，就去当前文件夹中的node_modules中找，如果找到，就用
// 3. 如果没找到，就向上一级目录node_modules中找，，如果找到，就用
// 4. 如果没有，就继续向上找，直到根目录位置，如果根目录还没找到就报错
```

#### require函数传递路径作为参数
1. 先找路径对应的文件，如果能找到，直接用
2. 如果找不到，就依次找 .js  .json .node 如果能找到，直接用
3. 如果找不到，就去找路径对应的文件夹
    1. 如果文件夹存在，
        1. 检查文件夹中是否有pacakge.json
            1. 如果有就看有没有main属性
                1. 如果有，就引入main属性指定的文件
                2. 如果没有，就引入index.js .json .node
                    1. 如果index.js ...找不到就报错了
            2. 如果没有main属性 就引入index.js .json .node 如果index.js ...找不到就报错了
        2. 如果没有pacakge.json 就引入index.js .json .node 如果index.js ...找不到就报错了
4. 如果找不到，就报错了

## hacker-news模块化改造

1. 主模块：   负责启动一个http服务器
2. 路由模块：  负责制定路由规则
3. 路由处理模块： 负责路由规则中详细的处理逻辑
4. 数据操作模块： 负责操作数据
5. 功能扩展模块： 负责给req.res增加功能