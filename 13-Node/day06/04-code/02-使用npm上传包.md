# 使用npm上传包

1. 登录
   npm login

2. 上传包
   npm publish


上传包的时候
1. 包的名字不能和npm服务器中已有的包同名
2. 版本号在内容更新重新上传的时候需要更新
3. 上传包的时候，一定要把服务器切回到npm服务器 nrm use npm


版本号更新的命令：
1. npm version major
2. npm version minor
3. npm version patch