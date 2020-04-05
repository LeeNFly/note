// 1. 在构造函数中，需要自己创建一个引用  ref

class Form extends React.Component {
  constructor(props) {
    super(props)

    // 1. 创建ref
    this.usernameRef = React.createRef()
    this.buttonRef = React.createRef()
    this.helloRef = React.createRef()
  }
  render() {
    return (
      <div>
        {/* 2. 我们创建的ref可以 在组件的任意地方使用 */}
        <input ref={this.usernameRef} type="text" />
        <button ref={this.buttonRef} onClick={this.get}>
          获取value值
        </button>
        {/* 拓展, 如果组件jsx中使用了其他组件, 且ref使用在组件自定义标签中
          则 可以通过组件实例对象.helloRef.current 拿到组件Hello的组件实例对象
          拿到组件Hello的实例对象, 就可以调用 使用的这个Hello组件中 的方法了, (在父组件中调用子组件方法) 并且可以将传递的数据作为实参传入
          将来在子组件Hello中通过形参按顺序一一对应接收. 调用组件Hello中的方法, 会回到子组件Hello的函数声明处, 执行函数体中代码
          这样在子组件中就可以拿到父组件中传递的数据了, 执行完子组件中的方法后, 会回到父组件中函数的调用处, 继续执行之后的代码
        */}
        < Hello ref={this.helloRef}/>
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
    console.log(this.helloRef);
  }
}

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.name = 'zs'
  }
  render() {
    return (
      <div>
        骄傲本的角色
      </div>
    )
  }
  get = () => {
    
  }
}

ReactDOM.render(<Form />, document.getElementById('app'))
