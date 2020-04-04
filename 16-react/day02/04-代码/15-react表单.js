// react操作表单的元素，操作表单的目的： 获取到用户输入的内容
// react操作表单： 受控组件  非受控组件

// 受控组件： 在当前组件中的表单元素受到了react的控制，
//1. 当表单元素的内容发生改变，react对应的状态也要发生改变
//2. 当react对应的状态发生改变，表单元素的内容也要发生改变。
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello react'
    }
  }
  render() {
    // 一旦给input设置了value属性，value属性对应了组件中的一个状态，受控组件
    // 表单元素的值受到了react的控制，我们发现，表单没办法输入，没办法改变了
    // 除了指定一个vlaue属性，还需要指定onChange事件，用来处理内容的变化
    return (
      <input
        type="text"
        value={this.state.username}
        onChange={this.handleChange}
      />
    )
  }
  handleChange = e => {
    // 我们需要改变 state.username的值
    this.setState({
      username: e.target.value
    })
  }
}

ReactDOM.render(<Form />, document.getElementById('app'))
