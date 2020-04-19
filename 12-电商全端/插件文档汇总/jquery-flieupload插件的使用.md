# 使用步骤

github地址：https://github.com/blueimp/jQuery-File-Upload

中文文档：http://www.jq22.com/jquery-info230

**jquery-fileupload，不局限于上传图片, 也支持上传任意类型的文件**

## 引包

```html
<!-- jquery-fileupload依赖与jquery -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<!-- jquery ui小部件，上传插件依赖了jquery ui的小部件 -->
<script src="js/vendor/jquery.ui.widget.js"></script>
<!-- 如果上传图片需要跨域，那么需要引入这个js文件，如果不跨域，则不需要引入 -->
<script src="js/jquery.iframe-transport.js"></script>
<!-- jquery上传插件 -->
<script src="js/jquery.fileupload.js"></script>

<!-- 注意以上插件的引入顺序 -->
```



## html结构

```html
<!-- name指定图片上传时的name属性 -->
<!-- data-url指定图片上传时的接口地址 -->
<!-- multiple指定多文件上传, 若不需要多文件上传, 可以不指定multiple -->
<input id="fileupload" type="file" name="files" data-url="server/php/" multiple>
```



## js代码

```javascript
// 每次input:file框的上传文件发生变化, 都会向data-url地址发生请求 (请求是异步的, 不会阻塞栈) , 请求参数的key值为input:file的name属性值, value值为上传的文件
// 如果是支持多文件上传的, 即multiple, 则可以支持选择多个文件, 然后每个文件都向data-url地址发生一次请求, 请求的参数的key都是input:file的name属性值, value值就是当前发送请求的这个文件
// 多文件上传相当于每个文件都发生一个请求, 上传几个文件就发生几个请求, 这些请求是异步的, 不会阻塞栈, 谁先请求结束不确定
$("#fileupload").fileupload({
      dataType:"json",
      //e：事件对象
      //data：图片上传后的对象，通过data.result.picAddr可以获取上传后的图片地址
      // 每次请求响应回来时, 都会执行这个回调函数, 若多文件上传, 则这个回调函数会被执行多次
      // 异步请求的回调函数, 将被放到任务队列中 被轮询机制管理. 一个一个拿, 一个一个调用, 排队...
      done:function (e, data) {
        console.log(data);
      }
});
```

