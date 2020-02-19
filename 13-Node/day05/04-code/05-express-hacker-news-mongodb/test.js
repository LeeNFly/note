var storage = require('./storage-mongo');
var ObjectId = require('mongodb').ObjectId;

// var news = {
//     title: "算你狠",
//     url: "",
//     text: "一杯二锅头，呛得眼泪流"
// }
// storage.addNews(news, function () { 
//     console.log("添加成功");
// })

// storage.getAllNews(function (newsList) {
//     console.log(newsList);
// })

// mongodb中的_id不是一个字符串，所以直接通过字符串是查不到的
// _id他其实是 ObjectId
// 我们在查询的时候，需要将字符串转换成ObjectId这种类型

// 转成objectid:    ObjectId(字符串)

storage.getNewsById(ObjectId("5b90dcf0d15f1015c029768f"), function (news) {
    console.log(news);
})