# mongodb

## 数据库？

### 数据分类
1. 关系型数据库 : 表和表之间有关联
    1. MYSQL
    2. MSSQL
    3. Oracle
2. 非关系型数据库： 表和表之间没有关联
    1. MongoDB
    2. Redis
    3. Memecache

### 非关系型数据库和关系型数据库的术语对照
|关系型|非关系型|
|--|--|
|数据库（db）|数据库（db）|
|表（table）|集合（collection）|
|记录/行（row）|文档(document)|
|字段（field）|字段（field）|

### 关系型数据库和非关系型数据库的区别
1. 前者表之间是有联系的，后者之间没联系
2. 前者在使用之前必须先创建好表结构，后者不需要
3. 前者使用T-SQL进行操作，后者使用类似于js语法的语言进行操作

### 非关系型数据库的优势
1. 更加灵活
2. 速度更快 
    1. 没有了关系
    2. 少了字段的各种限制
    3. 一般非关系型数据库都会直接存储在内存中，所以速度会更快
