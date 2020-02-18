接口说明：瀑布流分页数据

接口地址：data.php

请求方式：get

接口参数：page 当前是第几页    pageSize 当前页需要显示多少条

返回类型  json

返回数据： {
            page: 2,
            items: [
              {path: "./images/1.jpg",text:'', height: 280, width: 232},
              {path: "./images/2.jpg",text:'', height: 164, width: 232},
              ...
            ]
          }

          page   下一页的页码
          items  返回当前页的数据
              path 图片地址
              text 文字
              height 图片高度
              width 图片宽度
