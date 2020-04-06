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
// 1. 父组件通过标签自定义的属性把值传递给子组件 (属性值不加"")
// 2. 子组件通过props属性可以获取到所有父组件传递过来的数据

// 几点说明:
// 1. 父组件可以将任意数据类型(5简单 3复杂)的数据传递给子组件, 子组件也可以接收任意数据类型的数据
// 2. 父组件传递给子组件, 传递的是值, 而非变量
// 3. 子组件中不能修改父组件中传递过来的数据.
// 4. 单向数据流: 若父组件视图更新(this.setState)时, 传递给子组件的数据发生改变, 则会将改变后新的数据重新传递给子组件, 并且子组件的视图会自动渲染 (相当于自动调用了一次子组件的setState方法来更新子组件的视图)

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
