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
