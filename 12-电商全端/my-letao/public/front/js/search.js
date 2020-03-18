$(function () {
    renderSearchList()

    // 封装渲染搜索记录方法
    function renderSearchList() {
        var htmlStr = template('searchList_tpl', {list: getSearchArr()})
        $('.search_list').html(htmlStr)
    }

    // 清空记录
    $('#empty_btn').on('click', function () {
        mui.confirm('你确定要清空历使记录嘛', '温馨提示', ['取消', '确认'], function (res) {
            if (res.index === 1) {
                // 确认
                localStorage.setItem('search_list', JSON.stringify([]))
                renderSearchList()
            }
        })
    })

    // 删除单条记录
    $('.search_list').on('click', '.del_btn', function () {
        mui.confirm('你确定要删除该条记录嘛', '温馨提示', ['取消', '确认'], function (res) {
            if (res.index === 1) {
                // 确认
                var index = $(this).data('index')
                var searchArr = getSearchArr()
                searchArr.splice(index, 1)
                setSearchArr(searchArr)
                renderSearchList()
            }
        })
    })

    // 搜索按钮
    $('.search_btn').on('click', function () {
        var searchContent = $('#search_content').val().trim()
        if (searchContent === '') {
            mui.toast('请输入搜索关键字',{ duration:'short', type:'div' })
            $('#search_content').val('')
            return;
        }
        var searchArr = getSearchArr()
        // 判断是否重复
        var index = searchArr.indexOf(searchContent)
        if (index > -1) {
            // 将输入的内容提到第一个
            var temp = searchArr[index]
            searchArr.splice(index, 1)
            searchArr.unshift(temp)
        }
        else {
            // 不重复
            searchArr.unshift(searchContent)
        }
        // 判断是否超出十个
        if (searchArr.length > 10) {
            searchArr.pop()
        }
        setSearchArr(searchArr)
        // 清空搜索框内容
        $('#search_content').val('')
        //renderSearchList()
        //跳转到商品列表页
        location.href = './searchList.html?key=' + searchContent
    })

    // 获得localStorage中搜索记录数据
    function getSearchArr() {
        var searchJson = localStorage.getItem('search_list');
        return JSON.parse(searchJson)
    }

    // 将数组转为JSON字符串存入localstorage
    function setSearchArr(arr) {
        localStorage.setItem('search_list', JSON.stringify(arr))
    }
})
