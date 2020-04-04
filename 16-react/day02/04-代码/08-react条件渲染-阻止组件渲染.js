class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 18
    }
  }

  render() {
    if (this.state.age < 18) {
      // render一旦return null 就不会渲染其他内容
      return null
    }
    return (
      <div>
        <h3>提示消息</h3>
        <p>以下内容特别劲爆，未成年人不允许观看</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

// 条件渲染
// 1. 使用if-else根据条件来渲染不同的组件
// 2. 可以使用变量以及if-else来决定组件显示的内容
// 3. &&  三元表达式  return null

// react的条件渲染和js是完全一致的。
