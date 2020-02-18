// ajax() 方法, 用来发送 ajax 请求(get/post)

// 分析参数
// type: get | post, 默认是 get
// url: 地址必须传  (get需要拼接参数在 url 中)
// async: true, 默认就是 true
// data: 传递的参数对象
// dataType: 响应的数据类型
// success: 成功的函数
// error: 失败的函数
var $ = {
  ajax: function (options) {  // options 是一个对象
    // 1. 参数处理
    if (!options || typeof options != "object") {  // 没传或者不是对象, 直接return
      return;
    }
    var type = options.type === "post" ? "post" : "get";  // 默认 get
    var url = options.url;  // url 必传
    if (!url) {
      return;
    }
    var async = options.async === false ? false : true;   // 默认 true
    var data = options.data; // 得到是对象, 需要转换成字符串
    var params = this.parse(data); // 转换成 字符串
    var dataType = options.dataType;
    var success = options.success;
    var error = options.error;

    // 2. 发送请求
    var xhr = new XMLHttpRequest();
    // 2.1 请求行 get需要拼接参数
    if (type === "get") {
      url = url + "?" + params;
      params = null;
    }
    xhr.open(type, url, async);
    // 2.2 请求头 post 设置请求头
    if (type === "post") {
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    }
    // 2.3 请求体
    xhr.send(params);


    // 3. 处理响应
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {

        if (xhr.status === 200) {
          // 对响应的类型进行判断 xml/json/text
          var result = null;
          if (dataType === "xml") {
            result = xhr.responseXML;
          }
          else if (dataType === "json") {
            result = JSON.parse(xhr.responseText);
          }
          else {
            result = xhr.responseText;
          }
          // 成功, 调用成功的回调函数
          success && success(result);
        }
        else {
          // 失败, 调用失败的回调函数
          error && error(xhr.responseText);
        }

      }
    }


  },
  parse: function (obj) {
    if (!obj || typeof obj != "object") {
      return null;
    }
    var arr = [];
    for (var k in obj) {
      arr.push(k + "=" + obj[k]);
    }
    // [ "username=pp", "password=123456"]
    return arr.join("&");
  }
};