// 1. 初始化区域滚动
mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators: false
});

// 2. 封装获取地址栏查询字符串方法
function getSearchByKey(key) {
    var searchStr = decodeURI(location.search)
    searchStr = searchStr.replace(/\?/g, '')
    var searchArr = searchStr.split('&')
    var searchObj = {}
    searchArr.forEach(function (v, i) {
        var itemArr = v.split('=')
        searchObj[itemArr[0]] = itemArr[1]
    })
    return searchObj[key] ? searchObj[key] : ''
}

