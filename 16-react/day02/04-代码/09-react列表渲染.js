class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['张飞', '赵云', '马超', '貂蝉']
    }
  }

  render() {
    // 定义一个数组, 存放jsx, 即数组中的每个元素为jsx
    let content = this.state.list.map((item, index) => (
      <li key={index}>{item}</li>
    ))
    return (
      <div>
        <h3>人物列表</h3>
        <ul>
          {/* 直接显示了一个数组 
            将数组中的jsx编译后依次拼接到外部jsx语法中
          */}
          {content}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('app'))

// ★ react中无论是条件渲染或者是列表渲染，都在js
