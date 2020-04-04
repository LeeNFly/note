// 评论组件
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
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>评论案例</h1>
        <ul>
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
  return (
    <li>
      <h3>
        评论人：
        {props.data.name}
      </h3>
      <p>评论内容 {props.data.content}</p>
    </li>
  )
}

ReactDOM.render(<Comment />, document.getElementById('app'))
