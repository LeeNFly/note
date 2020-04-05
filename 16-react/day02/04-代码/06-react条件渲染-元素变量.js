class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 90
    }
  }

  render() {
    // 可以使用变量来保存react的对象或者说是保存jsx
    let content = null
    if (this.state.score >= 90) {
      // 元素变量， 把一个react对象赋值给一个变量
      content = <p>A</p>
    } else if (this.state.score >= 80) {
      content = <p>B</p>
    } else if (this.state.score >= 70) {
      content = <p>C</p>
    } else if (this.state.score >= 60) {
      content = <p>D</p>
    } else {
      content = <p>E</p>
    }
    return (
      <div>
        <h3>提示消息</h3>
        <p>你本次的成绩是</p>
        {/* jsx中可以通过{}来写js, 变量的访问顺序根据词法作用域
            我们这里直接将上面的content, 即 react对象, 或者说是jsx, 拼入到返回的jsx中
        */}
        {content}
      </div>
    )
  }
}

ReactDOM.render(<Score />, document.getElementById('app'))
