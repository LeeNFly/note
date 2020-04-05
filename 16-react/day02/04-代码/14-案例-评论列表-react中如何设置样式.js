//react中给jsx语法中的标签设置样式，有两种方式
// 1. 给元素添加一个className, 设置一个类样式
// 2. 给元素添加一个style属性，通过style属性设置行内样式
// 在使用style给元素设置样式的时候，style={对象}

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
