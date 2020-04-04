// 条件渲染： 根据不同的条件，渲染不同的内容
// react中的条件渲染，和js的if-else是完全一样
function UserGreeting() {
  return <div>欢迎回来，尊贵的v12用户</div>
}

function GuestGreeting() {
  return <div>你好，请先登录</div>
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  // 完成了条件渲染，根据isLogin来渲染不同的内容
  render() {
    if (this.state.isLogin) {
      return <UserGreeting />
    } else {
      return <GuestGreeting />
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
