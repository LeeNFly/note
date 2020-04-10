/*
 * @Author: Ling Hui Shi
 * @Date: 2020-04-04 23:00:33
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-10 13:53:01
 * @Description: 
 */
//react中给jsx语法中的标签设置样式，有两种方式
// 1. 给元素添加一个className, 设置一个类样式
// 2. 给元素添加一个style属性，通过style属性设置行内样式
// 在使用style给元素设置样式的时候，style={对象}
// style={对象} 语法中, 对象支持ES6最新对象语法, 即可以使用''属性名
// 对于有-的css样式名, 属性名可以使用驼峰命名法 也可以使用ES6对象最新''语法, 即属性名可以使用''
// 对象中属性名不识别变量, 属性值可以识别变量, 也支持jsx的{}内的所有特性, 比如直接访问js变量(词法作用域), 支持js基本语法, 表达式, 函数调用等
// 将对象中属性值的最终执行结果, 作为对应属性名css样式的值


class Comment extends React.Component {
  constructor(props) {
    super(props)

    // 添加状态
    this.state = {
      list: [
        { id: 1, name: '张三', content: '沙发' },
        { id: 2, name: '李四', content: '板凳' },
        { id: 3, name: '王五', content: '卖瓜子' },
        { id: 4, name: '赵六', content: '今天吃了没' }
      ],
      bgColor: 'pink'
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: this.state.bgColor }}>
        <h1>评论案例</h1>
        <ul style={{ listStyle: 'none' }}>
          {this.state.list.map(item => (
            <Item key={item.id} data={item} />
          ))}
        </ul>
      </div>
    )
  }
}

// 评论项组件,没有状态，数据是父组件传递过来的
function Item(props) {
  let liStyle = { height: 100 }
  return (
    <li style={liStyle}>
      <h3>
        评论人：
        {props.data.name}
      </h3>
      <p>评论内容 {props.data.content}</p>
    </li>
  )
}

ReactDOM.render(<Comment />, document.getElementById('app'))
