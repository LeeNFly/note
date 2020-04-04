class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello react',
      content: '我是内容',
      city: 4
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
          name="username"
        />
        <h3>textarea</h3>
        <textarea
          cols="30"
          rows="10"
          value={this.state.content}
          onChange={this.handleChange}
          name="content"
        />
        <h3>select</h3>
        <select
          value={this.state.city}
          onChange={this.handleChange}
          name="city"
        >
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
      </div>
    )
  }
  handleChange = e => {
    let name = e.target.name
    // 我们需要改变 state.username的值
    // es6的属性名表达式
    this.state[name] = e.target.value
    this.setState(this.state)
  }
}

ReactDOM.render(<Form />, document.getElementById('app'))
