# 使用npm上传包

准备工作:
    1. 初始化npm: `npm init -y`
    2. 切换到npm服务器
    
    所有的npm镜像, 如淘宝等, 只能用于下载包, 不能用于上传包
    我们在上传包之前, 需要切换到npm服务器
    nrm use npm

1. 登录
   上传包需要登录, 下载包不需要登录
   npm login

2. 上传包
   npm publish


上传包的时候
1. 包的名字不能和npm服务器中已有的包同名
2. 在内容更新重新上传的时候 版本号需要更新
3. 上传包的时候，一定要把服务器切回到npm服务器 nrm use npm


## 版本号说明
一般的版本号都会包含3个数字，中间用.隔开
格式：   主版本号.次版本号.修订版本号

主版本号： 当代码功能更新，更新之后，不兼容之前的版本了，那么需要更新主版本号！
此版本号： 当代码功能更新，更新之后，依然兼容之前的版本，只是新增了某些功能，那么需要更新次版本号
修订版本号： 当代码更新，更新的只是修复了某些BUG,或者优化了某些功能，那么这个时候只需要更新 修订版本号就可以了


jquery: 1.x 2.x 3.x
1.10.1 1.12.4
1.12.1 1.12.4

版本号更新的命令：
1. npm version major
2. npm version minor
3. npm version patch
