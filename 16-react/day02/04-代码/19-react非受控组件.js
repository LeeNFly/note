// 1. 在构造函数中，需要自己创建一个引用  ref

class Form extends React.Component {
  constructor(props) {
    super(props)

    // 1. 创建ref
    this.usernameRef = React.createRef()
    this.buttonRef = React.createRef()
  }
  render() {
    return (
      <div>
        {/* 2. 我们创建的ref可以 在组件的任意地方使用 */}
        <input ref={this.usernameRef} type="text" />
        <button ref={this.buttonRef} onClick={this.get}>
          获取value值
        </button>
      </div>
    )
  }
  get = () => {
    // 获取input框的value值
    // 受控组件： 我们把input框的value值交给react来处理
    // 非受控组件： 我们需要手动的操作DOM，手动获取到DOM的value值
    // refs: 用于操作DOM的

    // 3. 通过this.usernameRef.current
    console.log(this.usernameRef.current.value)
  }
}

ReactDOM.render(<Form />, document.getElementById('app'))
