class Father extends React.Component {
  constructor(props) {
    super(props)

    // 组件的状态是私有的，别的组件是用不了
    this.state = {
      msg: '哈哈'
    }
  }
  render() {
    return (
      <div>
        我是父组件
        <Son msg={this.state.msg} name="zs" age="18" />
      </div>
    )
  }
}

// 需求： 在子组件中如何使用父组件的数据
// 1. 父组件通过自定义的属性把值传递给子组件
// 2. 子组件通过props属性可以获取到所有父组件传递过来的数据
class Son extends React.Component {
  // props就有所有父组件传递过来的数据
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        我是子组件-----
        {this.props.name} ----
        {this.props.msg}
      </div>
    )
  }
}

ReactDOM.render(<Father />, document.getElementById('app'))
