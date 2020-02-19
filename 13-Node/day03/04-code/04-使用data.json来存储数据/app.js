var fs = require('fs');
var path = require('path');

// 读取所有的数据
// fs.readFile(path.join(__dirname, 'data.json'), "utf8", function (err, data) { 
//     // console.log(data);
//     data = JSON.parse(data || "[]");
// })

// 根据id查找对应的数据
// id = 1
// var id = 1;
// fs.readFile(path.join(__dirname, 'data.json'), "utf8", function (err, data) { 
//     // console.log(data);
//     data = JSON.parse(data || "[]");

//     // data.forEach(function (v, i) { 
//     //     if (v.id == id) {
//     //         console.log(v);
//     //     }
//     // })

//     // 找数组中满足条件的第一个元素
//     var result = data.find(function (v, i) { 
//         return v.id == id;
//     });

//     console.log(result);
// })


// 添加新的数据到data.json
var news = {
    title: "贪污受贿还泄露国家秘密 他被判8年半", 
    url: "",
    text: "昨日，陕西省商洛市中级人民法院在中国裁判文书网发布了西安体育学院党委委员、副院长白跃世的一审刑事判决书，因受贿罪、贪污罪、故意泄露国家秘密罪，白跃世被数罪并罚判处有期徒刑八年半。"
}

// 1. 读取原有的数据
fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, data) {
    // 先转换成数组
    data = JSON.parse(data || "[]");

    // 2. 将新数据添加到原有的数据中
    // 2.1 需要给这个news添加一个id属性
    news.id = data.length == 0 ? 1 : data[data.length - 1].id + 1;
    data.push(news);

    // 3. 将添加完毕的数据重新写入到文件中
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data), function (err) { 
        console.log("添加数据成功")
    })
})
