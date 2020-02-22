# nrm 

## 说明
npm服务器是在国外的，所以下载速度会比较慢，所以我们可以设置npm，让其下载包的时候，从国内的npm服务器上进行下载。

设置npm让其从国内的npm服务器下载，需要用到一个工具，这个工具就是nrm

## 安装
`npm install nrm -g`

## 使用
1. 查看可用的npm服务器列表
`nrm ls`

2. 查看当前正在使用的npm服务器
`nrm current`

3. 切换到指定的npm服务器
`nrm use 服务器名称`

4. 测速命令
`nrm test`    对所有npm服务器测速
`nrm test 指定的服务器名称`     对指定的npm服务器测速