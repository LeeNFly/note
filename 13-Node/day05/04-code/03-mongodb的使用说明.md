# mongodb
mongodb 分成 mongod 和 mongo 两个部分
mongod 负责数据存储, mongo 是命令行工具, 用来操作数据库的
## 数据库服务
如何启动数据库服务
使用的是  mongod  命令

1. 创建文件  在想要保存数据的位置，创建一个文件夹（data）,在data文件夹中创建一个文件夹（db）
2. 使用mongod命令 指定文件夹路径进行启动
`mongod --dbpath 数据文件夹路径`  (创建的data文件夹路径)

如果看到最后一句输出为`waiting for connections on port 27017`
就说明启动成功了

## 数据库操作的命令行工具
如何通过命令行操作mongodb
使用的是  mongo 命令, 此命令是用于连接数据库的

在cmd直接输入 `mongo`



`mongo --host 服务器地址 --port 端口号`


## 通过命令行工具mongo来操作数据库 

1. 查看所有的数据库列表
`show databases;`

2. 切换到指定的数据库
`use 数据库名称;`

3. 查看当前数据库中所有的集合（表）
`show collections;`



### 实现增删改查
注意： 在mongodb中进行数据操作的时候，不需要提前创建数据库和表结构！！！

命令行中有一个全局的对象`db`, 这个对象就表示当前正在使用的数据库

1. 如果要创建一个新的数据库
    1. 直接 `use 新的数据库名称`
    2. 这个数据库会在第一条数据添加进入的时候创建出来！！

2. 给集合中添加数据
    1. 如果集合不存在，则会自动创建
    2. 如果集合存在，则会将数据添加到对应的集合中

    3. `db.集合名称.insert(对象)`

3. 获取当前集合中的所有数据
    1. `db.集合名称.find()`

4. 条件查询
    1. `db.集合名称.find(条件对象)`

    age为18的人
    `db.users.find({age: 18})`

    age大于等于18的人
    `db.users.find({age: {$gte: 18}})`

    $lt
    $gt
    $eq
    $lte
    $gte
    $ne
    $in
    $nin

    多个条件
    `db.users.find({name:"蒋鹏", age: 18})`

5. 删除数据
   `db.集合名称.deleteOne(条件对象)`  如果满足条件的有多个，则只删除第一个！
   `db.集合名称.deleteMany(条件对象)`


6. 修改数据
   `db.集合名称.updateOne(条件对象, 操作对象)`
   `db.集合名称.updateMany(条件对象, 操作对象)`

   需求： 将集合中所有 潘明的年龄全部改成18岁

   `db.users.updateMany({name: "潘明"}, {$set: {age: 18}})`
