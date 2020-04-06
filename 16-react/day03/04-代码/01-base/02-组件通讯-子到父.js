class Father extends React.Component {
  render() {
    return (
      <div style={{ width: 400, height: 400, backgroundColor: 'pink' }}>
        这是父组件
        {/* 2. 父组件把方法传递给子组件 */}
        <Son getData={this.getData} />
      </div>
    )
  }
  //1： 父组件提供一个方法
  getData(msg) {
    console.log(msg)
    console.log('我执行吗')
  }
}

class Son extends React.Component {
  constructor(props) {
    // 子组件通过props来接收父组件传递过来的方法
    super(props)

    this.state = {
      msg: '哈哈'
    }
  }
  render() {
    return (
      <div style={{ width: 200, height: 100, backgroundColor: 'green' }}>
        <p>{this.state.msg}</p>
        <button onClick={this.sendData}>给父组件传递数据</button>
      </div>
    )
  }

  sendData = () => {
    // 4. 给父组件传递数据
    let { getData } = this.props
    getData(this.state.msg)
  }
}

ReactDOM.render(<Father />, document.getElementById('app'))

// 几点说明
// 1. 子到父的通讯, 通过父组件传入函数给子组件, 在子组件调用父组件函数, 将子组件要传递的数据作为实参传入, 在父组件中通过形参按顺序一一对应接收
// 2. 数据作为实参传递, 所以可以传递任意数据类型给父组件, (5简单, 3复杂)
// 3. 可以利用子到父通讯, 来改变父组件传递给子组件的数据.  在子组件中调用父组件传递过来的函数, 回到父组件中执行函数体, 然后就可以在父组件中
//    修改传递给子组件的数据, ★ 然后要记得在在父组件函数最后, 更新父组件视图 this.setState() ★ , 这样父组件传递给子组件的数据就发生改变,
//    这样就触发了单向数据流: 若父组件视图更新(this.setState)时, 传递给子组件的数据发生改变, 则会将改变后新的数据重新传递给子组件, 并且子组件的视图会自动渲染 (相当于自动调用了一次子组件的setState方法来更新子组件的视图)
