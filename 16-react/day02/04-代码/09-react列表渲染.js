class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['张飞', '赵云', '马超', '貂蝉']
    }
  }

  render() {
    let content = this.state.list.map((item, index) => (
      <li key={index}>{item}</li>
    ))
    return (
      <div>
        <h3>人物列表</h3>
        <ul>
          {/* 直接显示了一个数组 */}
          {content}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('app'))

// react中无论是条件渲染或者是列表渲染，都在js
