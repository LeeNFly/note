class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: '张三', content: '沙发' },
        { id: 2, name: '李四', content: '板凳' },
        { id: 3, name: '王五', content: '卖瓜子' }
      ],
      index: 3
    }
  }
  render() {
    return (
      <div>
        <h1>评论案例</h1>
        <CommentForm add={this.add} />
        <hr />
        {/* 1. 父组件把评论列表数据传递给了子组件 */}
        <CommentList list={this.state.list} />
      </div>
    )
  }

  // 添加评论的方法
  add = (name, content) => {
    this.state.list.push({
      id: ++this.state.index,
      name,
      content
    })
    this.setState(this.state)
  }
}

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      content: ''
    }
  }
  render() {
    return (
      <div className="form">
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <br />
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          cols="30"
          rows="5"
        />
        <br />
        <button onClick={this.clickFn}>添加</button>
      </div>
    )
  }
  clickFn = () => {
    // 调用父组件传递过来的方法
    let { add } = this.props
    add(this.state.name, this.state.content)

    // 清空表单
    this.setState({
      name: '',
      content: ''
    })
  }
  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
}

class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // 2. 子组件通过props可以获取到父组件传递过来的数据
    let { list } = this.props
    return (
      <div className="list">
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <h3>
                评论人：
                {item.name}
              </h3>
              <p>
                评论内容：
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<Comment />, document.getElementById('app'))
