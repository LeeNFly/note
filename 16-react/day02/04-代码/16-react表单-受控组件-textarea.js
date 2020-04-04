class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello react',
      content: '我是内容'
    }
  }
  render() {
    return (
      <div>
        <h3>input</h3>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <h3>textarea</h3>
        <textarea
          cols="30"
          rows="10"
          value={this.state.content}
          onChange={this.handleContent}
        />
      </div>
    )
  }
  handleChange = e => {
    // 我们需要改变 state.username的值
    this.setState({
      username: e.target.value
    })
  }
  handleContent = e => {
    // 获取到文本框的内容
    this.setState({
      content: e.target.value
    })
  }
}

ReactDOM.render(<Form />, document.getElementById('app'))
